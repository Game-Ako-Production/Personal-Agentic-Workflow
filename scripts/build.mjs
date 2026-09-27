// Builds every generated file from the canonical sources. Pure: returns Map<path, content>.
import {
  MARKER,
  MANAGED_DIRS,
  callersOf,
  delegatesOf,
  delegationTargets,
  exists,
  firstPartySkills,
  includesOf,
  listFiles,
  permissionsOf,
  readAny,
  readText,
  skillsOf,
  stringifyYaml,
  wants,
} from './lib.mjs'

const notice = (source) => `${MARKER} from ${source}. Do not edit; edit the source and run \`npm run sync\`.`

/** Markdown file with YAML frontmatter; the generated notice is a YAML comment so it never reaches prompts. */
const markdown = (frontmatter, body, source) =>
  `---\n# ${notice(source)}\n${stringifyYaml(frontmatter)}---\n\n${body.trimEnd()}\n`

const tomlString = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
const code = (s) => `\`${s}\``
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n+/g, ' ')
const stripDot = (s) => s.trim().replace(/\.$/, '')

// ---- Agents -----------------------------------------------------------------------

export function agentPrompt(agent, model) {
  const parts = [agent.body.trimEnd()]

  const targets = delegationTargets(agent, model)
  if (targets.length) {
    parts.push(
      [
        '# Delegation targets',
        '',
        'You may delegate to these agents. Give each one the complete brief.',
        '',
        ...targets.map((n) => `- ${code(n)}: ${model.agents.get(n)?.data.description ?? '(missing agent)'}`),
      ].join('\n'),
    )
  }

  const skills = skillsOf(agent)
  if (skills.length) {
    parts.push(
      [
        '# Skills',
        '',
        'Load the matching skill by name before doing that kind of work:',
        '',
        ...skills.map(
          (n) => `- ${code(n)} (${code(`.agents/skills/${n}/SKILL.md`)}): ${model.skills.get(n)?.data.description ?? '(missing skill)'}`,
        ),
      ].join('\n'),
    )
  }

  for (const inc of includesOf(agent)) {
    if (exists(inc)) parts.push(`<!-- Included from ${inc} -->\n\n${readText(inc).trimEnd()}`)
  }

  return parts.join('\n\n')
}

function opencodeAgent(agent, prompt) {
  const p = permissionsOf(agent)
  const d = delegatesOf(agent)
  let task = 'deny'
  if (d.includes('*')) task = 'allow'
  else if (d.length) task = Object.fromEntries([['*', 'deny'], ...d.map((n) => [n, 'allow'])])

  const fm = { description: agent.data.description, mode: agent.data.mode }
  if (agent.data.temperature != null) fm.temperature = agent.data.temperature
  fm.permission = { edit: p.edit, bash: p.bash, webfetch: p.web, websearch: p.web, task }
  return markdown(fm, prompt, agent.file)
}

/** Claude tool allowlist, or null to inherit every tool. */
export function claudeTools(agent) {
  const p = permissionsOf(agent)
  const d = delegatesOf(agent)
  if (d.includes('*') && p.edit !== 'deny' && p.bash !== 'deny' && p.web === 'allow') return null
  const tools = ['Read', 'Grep', 'Glob', 'Skill']
  if (p.edit !== 'deny') tools.push('Write', 'Edit')
  if (p.bash !== 'deny') tools.push('Bash')
  if (p.web === 'allow') tools.push('WebFetch', 'WebSearch')
  if (d.includes('*')) tools.push('Agent')
  else if (d.length) tools.push(`Agent(${d.join(', ')})`)
  return tools.join(', ')
}

function claudeAgent(agent, prompt) {
  const fm = { name: agent.name, description: agent.data.description }
  const tools = claudeTools(agent)
  if (tools) fm.tools = tools
  const skills = skillsOf(agent)
  if (skills.length) fm.skills = skills
  return markdown(fm, prompt, agent.file)
}

function codexAgent(agent, prompt) {
  return [
    `# ${notice(agent.file)}`,
    `name = "${tomlString(agent.name)}"`,
    `description = "${tomlString(agent.data.description)}"`,
    `developer_instructions = """`,
    tomlString(prompt),
    `"""`,
    '',
  ].join('\n')
}

// ---- Commands ---------------------------------------------------------------------

function opencodeCommand(cmd) {
  const fm = { description: cmd.data.description }
  if (cmd.data.agent) fm.agent = cmd.data.agent
  if (cmd.data.subtask) fm.subtask = true
  return markdown(fm, cmd.body, cmd.file)
}

function claudeCommand(cmd) {
  const fm = { description: cmd.data.description }
  if (cmd.data['argument-hint']) fm['argument-hint'] = cmd.data['argument-hint']
  if (cmd.data.subtask && cmd.data.agent) {
    fm.context = 'fork'
    fm.agent = cmd.data.agent
    fm.background = false
  }
  return markdown(fm, cmd.body, cmd.file)
}

export function codexWrapperDescription(cmd) {
  return `Run the /${cmd.name} workflow: ${stripDot(cmd.data.description)}. Use only when Arohbi invokes /${cmd.name} or asks to run the ${cmd.name} workflow by name.`
}

function codexWrapper(cmd) {
  const lines = [
    `# /${cmd.name}`,
    '',
    `Codex entry point for the canonical workflow in ${code(cmd.file)}. Codex has no project-scoped slash commands, so this skill stands in for ${code(`/${cmd.name}`)}.`,
    '',
    `Read and execute ${code(cmd.file)} as the single source of truth. Treat the user's request (the text after the command name) as ${code('$ARGUMENTS')}.`,
  ]
  if (cmd.data.agent) {
    lines.push(
      '',
      `The workflow runs as ${code(cmd.data.agent)}. Spawn that agent when subagents are available; otherwise follow its persona in ${code(`agents/${cmd.data.agent}.md`)}.`,
    )
  }
  return markdown({ name: cmd.name, description: codexWrapperDescription(cmd) }, lines.join('\n'), cmd.file)
}

// ---- Skills mirrored for Claude Code ----------------------------------------------

/** Skills Claude Code must see in .claude/skills: first-party skills plus any skill a Claude agent preloads. */
export function claudeSkillNames(model) {
  const names = new Set(firstPartySkills(model).map((s) => s.name))
  for (const a of model.agents.values()) {
    if (wants(a, 'claude')) for (const s of skillsOf(a)) if (model.skills.has(s) && !model.skills.get(s).generated) names.add(s)
  }
  return [...names].sort()
}

function mirrorSkill(skill, out) {
  for (const file of listFiles(skill.dir)) {
    const target = `.claude/skills/${skill.name}${file.slice(skill.dir.length)}`
    let content = readAny(file)
    if (file === skill.file) content = content.replace(/^---\n/, `---\n# ${notice(skill.file)}\n`)
    out.set(target, content)
  }
}

// ---- Registry ---------------------------------------------------------------------

function registry(model) {
  const { workflow, agents, commands, skills } = model
  const domains = workflow.domains ?? []
  const managed = workflow.platforms?.managed ?? []
  const frozen = workflow.platforms?.frozen ?? []
  const L = []

  const usersOf = (skillName) => [
    ...[...agents.values()].filter((a) => skillsOf(a).includes(skillName)).map((a) => ({ label: code(a.name), domain: a.data.domain })),
    ...[...commands.values()].filter((c) => skillsOf(c).includes(skillName)).map((c) => ({ label: code(`/${c.name}`), domain: c.data.domain })),
  ]
  const skillDomain = (name) => {
    const claimed = domains.find((d) => (d.skills ?? []).includes(name))
    if (claimed) return claimed.id
    const ds = [...new Set(usersOf(name).map((u) => u.domain))]
    return ds.length === 1 ? ds[0] : 'shared'
  }
  const codexEntry = (c) => {
    if (!managed.includes('codex') || !(c.data.targets ?? managed).includes('codex') || c.data.codex === 'none') return '—'
    return c.data.codex === 'wrapper' ? `wrapper skill ${code(c.name)}` : `skill ${code(c.data.codex)}`
  }

  L.push(`<!-- ${notice('workflow.yaml, agents/, commands/, and .agents/skills/')} -->`, '')
  L.push('# Workflow registry', '')
  L.push(
    `Start with ${code(workflow['front-door'])}: it handles general requests and routes specialist work to the domain lead or subagent listed here. ` +
      `Managed platforms: ${managed.join(', ')}. Frozen platforms (hand-maintained, not generated): ${frozen.join(', ') || 'none'}.`,
    '',
  )

  L.push('## Domains', '', '| Domain | Lead | Purpose | Artifacts |', '| --- | --- | --- | --- |')
  for (const d of domains) {
    const lead = d.lead === 'any' ? 'any agent' : code(d.lead)
    L.push(`| ${cell(d.title)} (${code(d.id)}) | ${lead} | ${cell(d.purpose)} | ${(d.artifacts ?? []).map(code).join('<br>') || '—'} |`)
  }

  const id = (s) => s.replace(/[^A-Za-z0-9]/g, '_')
  L.push('', '## Delegation map', '', '```mermaid', 'flowchart LR', '  user([Arohbi])')
  for (const a of agents.values()) L.push(`  ${id(a.name)}[${a.name}]`)
  if (workflow['front-door']) L.push(`  user --> ${id(workflow['front-door'])}`)
  for (const a of agents.values()) {
    if (a.name !== workflow['front-door'] && a.data.mode !== 'subagent') L.push(`  user -.-> ${id(a.name)}`)
  }
  for (const a of agents.values()) for (const t of delegationTargets(a, model)) L.push(`  ${id(a.name)} --> ${id(t)}`)
  for (const c of commands.values()) {
    if (!c.data.agent) continue
    L.push(`  cmd_${id(c.name)}{{"/${c.name}"}} -.-> ${id(c.data.agent)}`)
  }
  L.push('```', '')

  const sectionDomains = [...domains.map((d) => ({ id: d.id, title: d.title, purpose: d.purpose, lead: d.lead }))]
  for (const d of sectionDomains) {
    const dAgents = [...agents.values()].filter((a) => a.data.domain === d.id)
    const dCommands = [...commands.values()].filter((c) => c.data.domain === d.id)
    const dSkills = firstPartySkills(model).filter((s) => skillDomain(s.name) === d.id)
    L.push(`## ${d.title} (${code(d.id)})`, '', cell(d.purpose), '')
    if (dAgents.length) {
      L.push('**Agents**', '', '| Agent | Mode | Called by | Delegates to | Skills | Description |', '| --- | --- | --- | --- | --- | --- |')
      for (const a of dAgents) {
        const callers = callersOf(a.name, model).map(code).join(', ') || '—'
        const del = delegatesOf(a).includes('*') ? 'any agent' : delegatesOf(a).map(code).join(', ') || '—'
        L.push(`| ${code(a.name)} | ${a.data.mode} | ${callers} | ${del} | ${skillsOf(a).map(code).join(', ') || '—'} | ${cell(a.data.description)} |`)
      }
      L.push('')
    }
    if (dCommands.length) {
      L.push('**Commands**', '', '| Command | Runs as | Isolated | Skills | Codex entry | Description |', '| --- | --- | --- | --- | --- | --- |')
      for (const c of dCommands) {
        const hint = c.data['argument-hint'] ? ` ${c.data['argument-hint']}` : ''
        L.push(
          `| ${code(cell(`/${c.name}${hint}`))} | ${c.data.agent ? code(c.data.agent) : 'current agent'} | ${c.data.subtask ? 'yes' : 'no'} | ${skillsOf(c).map(code).join(', ') || '—'} | ${codexEntry(c)} | ${cell(c.data.description)} |`,
        )
      }
      L.push('')
    }
    if (dSkills.length) {
      L.push('**Skills**', '', '| Skill | Used by | Description |', '| --- | --- | --- |')
      for (const s of dSkills) L.push(`| ${code(s.name)} | ${usersOf(s.name).map((u) => u.label).join(', ') || '—'} | ${cell(s.data.description)} |`)
      L.push('')
    }
  }

  const shared = firstPartySkills(model).filter((s) => skillDomain(s.name) === 'shared')
  if (shared.length) {
    L.push('## Shared skills', '', '| Skill | Used by | Description |', '| --- | --- | --- |')
    for (const s of shared) L.push(`| ${code(s.name)} | ${usersOf(s.name).map((u) => u.label).join(', ') || '—'} | ${cell(s.data.description)} |`)
    L.push('')
  }

  const third = [...skills.values()].filter((s) => s.thirdParty)
  if (third.length) {
    L.push('## Installed third-party skills', '', 'Installed from `skills-lock.json`; update them with the skills installer, not by hand.', '')
    L.push('| Skill | Source | Used by |', '| --- | --- | --- |')
    for (const s of third) L.push(`| ${code(s.name)} | ${cell(model.lock[s.name]?.source)} | ${usersOf(s.name).map((u) => u.label).join(', ') || '—'} |`)
    L.push('')
  }

  L.push('## Generated files', '')
  L.push('`npm run sync` writes these from the canonical sources; `npm run check` fails when they drift:', '')
  for (const d of MANAGED_DIRS) L.push(`- ${code(`${d}/`)}`)
  L.push(`- ${code('.agents/skills/<command>/SKILL.md')} for commands with \`codex: wrapper\``, `- ${code('registry.md')}`)
  L.push('')

  return L.join('\n')
}

// ---- Entry point ------------------------------------------------------------------

export function build(model) {
  const out = new Map()

  for (const agent of model.agents.values()) {
    const prompt = agentPrompt(agent, model)
    if (wants(agent, 'opencode')) out.set(`.opencode/agents/${agent.name}.md`, opencodeAgent(agent, prompt))
    if (wants(agent, 'claude')) out.set(`.claude/agents/${agent.name}.md`, claudeAgent(agent, prompt))
    if (wants(agent, 'codex')) out.set(`.codex/agents/${agent.name}.toml`, codexAgent(agent, prompt))
  }

  for (const cmd of model.commands.values()) {
    if (wants(cmd, 'opencode')) out.set(`.opencode/commands/${cmd.name}.md`, opencodeCommand(cmd))
    if (wants(cmd, 'claude')) out.set(`.claude/commands/${cmd.name}.md`, claudeCommand(cmd))
    if (wants(cmd, 'codex') && cmd.data.codex === 'wrapper') out.set(`.agents/skills/${cmd.name}/SKILL.md`, codexWrapper(cmd))
  }

  for (const name of claudeSkillNames(model)) mirrorSkill(model.skills.get(name), out)

  out.set('registry.md', registry(model))
  return out
}

/** Files that exist on disk in generated locations but are no longer produced. */
export function findStale(outputs) {
  const stale = []
  const unmanaged = []
  const claudeSkillIsGenerated = (file) => {
    const skillMd = file.split('/').slice(0, 3).join('/') + '/SKILL.md'
    return exists(skillMd) && readText(skillMd).includes(MARKER)
  }

  for (const dir of MANAGED_DIRS) {
    for (const file of listFiles(dir)) {
      if (outputs.has(file)) continue
      const generated = dir === '.claude/skills' ? claudeSkillIsGenerated(file) : readText(file).includes(MARKER)
      ;(generated ? stale : unmanaged).push(file)
    }
  }
  for (const file of listFiles('.agents/skills')) {
    if (!/^\.agents\/skills\/[^/]+\/SKILL\.md$/.test(file) || outputs.has(file)) continue
    if (readText(file).includes(MARKER)) stale.push(file)
  }
  return { stale, unmanaged }
}
