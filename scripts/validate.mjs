// Structural validation of the canonical sources. Returns { errors, warnings }.
import {
  ACTIONS,
  MANAGED_DIRS,
  MODES,
  NAME_RE,
  PLATFORMS,
  SKILL_FIELDS,
  callersOf,
  delegatesOf,
  exists,
  firstPartySkills,
  includesOf,
  isDir,
  listFiles,
  permissionsOf,
  readText,
  skillsOf,
  targetsOf,
} from './lib.mjs'

// Paths mentioned in docs on purpose even though they must not exist.
const IGNORED_REFERENCES = new Set(['.codex/commands/'])

const isStringList = (v) => Array.isArray(v) && v.every((x) => typeof x === 'string')

export function validate(model) {
  const errors = [...model.errors]
  const warnings = []
  const err = (file, msg) => errors.push(`${file}: ${msg}`)
  const warn = (file, msg) => warnings.push(`${file}: ${msg}`)
  const { workflow, agents, commands, skills } = model

  // ---- workflow.yaml ----
  const domains = Array.isArray(workflow.domains) ? workflow.domains : []
  if (!domains.length) err('workflow.yaml', '`domains` must be a non-empty list')
  const domainIds = new Set()
  for (const d of domains) {
    if (!d?.id || !NAME_RE.test(d.id)) err('workflow.yaml', `domain id ${JSON.stringify(d?.id)} must be lowercase kebab-case`)
    if (domainIds.has(d.id)) err('workflow.yaml', `duplicate domain id "${d.id}"`)
    domainIds.add(d.id)
    for (const key of ['title', 'lead', 'purpose']) if (!d[key]) err('workflow.yaml', `domain "${d.id}" is missing "${key}"`)
    if (d.lead && d.lead !== 'any' && !agents.has(d.lead)) err('workflow.yaml', `domain "${d.id}" lead "${d.lead}" is not an agent`)
    if (d.artifacts != null && !isStringList(d.artifacts)) err('workflow.yaml', `domain "${d.id}" artifacts must be a list of paths`)
    for (const a of d.artifacts ?? []) if (!isDir(a.replace(/\/$/, ''))) err('workflow.yaml', `domain "${d.id}" artifact folder "${a}" does not exist`)
    if (d.skills != null && !isStringList(d.skills)) err('workflow.yaml', `domain "${d.id}" skills must be a list`)
    for (const s of d.skills ?? []) if (!skills.has(s)) err('workflow.yaml', `domain "${d.id}" claims unknown skill "${s}"`)
  }
  const frontDoor = workflow['front-door']
  if (!agents.has(frontDoor)) err('workflow.yaml', `front-door "${frontDoor}" is not an agent`)
  else if (agents.get(frontDoor).data.mode === 'subagent') err('workflow.yaml', `front-door "${frontDoor}" must be a primary agent`)
  const managed = workflow.platforms?.managed ?? []
  for (const p of managed) if (!PLATFORMS.includes(p)) err('workflow.yaml', `unknown managed platform "${p}"`)

  const checkTargets = (e) => {
    const t = targetsOf(e)
    if (!isStringList(t) || !t.length) return err(e.file, '`targets` must be a non-empty list')
    for (const p of t) if (!managed.includes(p)) err(e.file, `target "${p}" is not a managed platform in workflow.yaml`)
  }
  const checkName = (e) => {
    if (e.data.name !== e.name) err(e.file, `frontmatter name "${e.data.name}" must match the filename "${e.name}"`)
    if (!NAME_RE.test(e.name)) err(e.file, 'name must be lowercase kebab-case')
  }
  const checkDescription = (e) => {
    if (typeof e.data.description !== 'string' || !e.data.description.trim()) err(e.file, 'missing description')
  }
  const checkDomain = (e) => {
    if (!domainIds.has(e.data.domain)) err(e.file, `domain "${e.data.domain}" is not defined in workflow.yaml`)
  }
  const checkSkillRefs = (e) => {
    const s = skillsOf(e)
    if (!isStringList(s)) return err(e.file, '`skills` must be a list')
    for (const name of s) {
      if (!skills.has(name)) err(e.file, `skill "${name}" does not exist in .agents/skills/`)
      else if (skills.get(name).generated) err(e.file, `skill "${name}" is a generated command wrapper; reference the real skill instead`)
    }
  }

  // ---- agents ----
  for (const a of agents.values()) {
    checkName(a)
    checkDescription(a)
    checkDomain(a)
    checkTargets(a)
    checkSkillRefs(a)
    if (!MODES.includes(a.data.mode)) err(a.file, `mode must be one of ${MODES.join(', ')}`)
    const t = a.data.temperature
    if (t != null && (typeof t !== 'number' || t < 0 || t > 2)) err(a.file, 'temperature must be a number between 0 and 2')
    const d = delegatesOf(a)
    if (!isStringList(d)) err(a.file, '`delegates` must be a list')
    else
      for (const n of d) {
        if (n === '*') continue
        if (n === a.name) err(a.file, 'an agent cannot delegate to itself')
        else if (!agents.has(n)) err(a.file, `delegate "${n}" is not an agent`)
      }
    const inc = includesOf(a)
    if (!isStringList(inc)) err(a.file, '`includes` must be a list')
    else for (const f of inc) if (!exists(f)) err(a.file, `include "${f}" does not exist`)
    const p = permissionsOf(a)
    if (!ACTIONS.includes(p.edit)) err(a.file, `permissions.edit must be one of ${ACTIONS.join(', ')}`)
    if (!ACTIONS.includes(p.bash)) err(a.file, `permissions.bash must be one of ${ACTIONS.join(', ')}`)
    if (!['allow', 'deny'].includes(p.web)) err(a.file, 'permissions.web must be allow or deny')
    if (a.data.mode === 'subagent' && !callersOf(a.name, model).length) err(a.file, 'subagent has no caller; add it to some agent\'s `delegates`')
    for (const section of ['# Role & Identity', '# Standing Rules (Always / Never)', '# Error Handling & Escalation']) {
      if (!a.body.includes(section)) err(a.file, `missing required section "${section}"`)
    }
  }

  // ---- commands ----
  for (const c of commands.values()) {
    checkName(c)
    checkDescription(c)
    checkDomain(c)
    checkTargets(c)
    checkSkillRefs(c)
    if (c.data.agent != null && !agents.has(c.data.agent)) err(c.file, `agent "${c.data.agent}" is not an agent`)
    if (c.data.subtask != null && typeof c.data.subtask !== 'boolean') err(c.file, 'subtask must be true or false')
    if (c.data.subtask && !c.data.agent) err(c.file, 'subtask: true requires an agent')
    const codex = c.data.codex
    if (targetsOf(c).includes('codex')) {
      if (!codex) err(c.file, '`codex` must be "wrapper", "none", or an existing skill name')
      else if (codex !== 'wrapper' && codex !== 'none') {
        if (!skills.has(codex) || skills.get(codex).generated) err(c.file, `codex skill "${codex}" does not exist`)
        else if (!readText(skills.get(codex).file).includes(c.file)) err(c.file, `codex skill "${codex}" must mention ${c.file} so Codex can run the workflow`)
      } else if (codex === 'wrapper' && skills.has(c.name) && !skills.get(c.name).generated) {
        err(c.file, `codex: wrapper would overwrite the hand-written skill "${c.name}"`)
      }
    }
    if (!c.body.includes('$ARGUMENTS')) warn(c.file, 'body does not reference $ARGUMENTS')
  }

  // ---- skills ----
  const used = new Set([...agents.values(), ...commands.values()].flatMap(skillsOf))
  for (const s of skills.values()) {
    if (!s.hasFrontmatter) {
      err(s.file, 'missing YAML frontmatter')
      continue
    }
    if (s.data.name !== s.name) err(s.file, `frontmatter name "${s.data.name}" must match the folder "${s.name}"`)
    if (!NAME_RE.test(s.name) || s.name.length > 64) err(s.file, 'name must be lowercase kebab-case, at most 64 characters')
    const desc = s.data.description
    if (typeof desc !== 'string' || !desc.trim()) err(s.file, 'missing description')
    else if (desc.length > 1024) err(s.file, `description is ${desc.length} characters; the limit is 1024`)
    if (s.thirdParty) continue
    for (const key of Object.keys(s.data)) {
      if (!SKILL_FIELDS.includes(key)) err(s.file, `non-standard frontmatter field "${key}" (allowed: ${SKILL_FIELDS.join(', ')})`)
    }
    if (s.generated) continue
    if (agents.has(s.name)) err(s.file, `skill name "${s.name}" collides with an agent name`)
    if (commands.has(s.name)) err(s.file, `skill name "${s.name}" collides with a command; set the command's codex entry to this skill or rename it`)
    if (!used.has(s.name) && ![...commands.values()].some((c) => c.data.codex === s.name)) {
      err(s.file, 'orphaned skill: no agent or command lists it in `skills`')
    }
  }
  for (const name of Object.keys(model.lock)) if (!skills.has(name)) warn('skills-lock.json', `locked skill "${name}" is not installed in .agents/skills/`)

  // ---- file references in canonical docs ----
  const docs = [
    'AGENTS.md',
    'README.md',
    ...listFiles('agents'),
    ...listFiles('commands'),
    ...listFiles('context'),
    ...listFiles('templates'),
    ...firstPartySkills(model).flatMap((s) => listFiles(s.dir).filter((f) => f.endsWith('.md'))),
  ].filter((f) => exists(f) && f.endsWith('.md'))
  for (const f of docs) {
    for (const m of readText(f).matchAll(/`([^`\s]+)`/g)) {
      const ref = m[1]
      if (!ref.includes('/') || /[<>*${}~()\[\]"']/.test(ref) || /^[a-z]+:/.test(ref) || ref.startsWith('/')) continue
      if (!/^[\w.@-]+(\/[\w.@-]*)+$/.test(ref) || IGNORED_REFERENCES.has(ref)) continue
      // Generated locations are verified by the drift check instead.
      if (MANAGED_DIRS.some((d) => ref === d || ref.startsWith(`${d}/`))) continue
      // Only check paths rooted at an existing top-level entry; skill-relative paths are skipped.
      if (!exists(ref.split('/')[0])) continue
      const target = ref.replace(/\/$/, '')
      if (!exists(target)) err(f, `references missing path \`${ref}\``)
    }
  }

  return { errors, warnings }
}
