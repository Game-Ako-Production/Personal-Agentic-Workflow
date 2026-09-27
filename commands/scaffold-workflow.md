---
name: scaffold-workflow
description: Scaffold or update agents, subagents, skills, commands, and domains from a workflow brief
argument-hint: "[all=true|agent=true|skill=true|command=true] <workflow brief>"
domain: utility
subtask: false
skills:
  - skill-creator
  - command-creator
codex: wrapper
targets: [opencode, claude, codex]
---

# Scaffold an Agentic Workflow

Turn a workflow brief into connected canonical agents, subagents, skills, commands, and domains, then generate every managed platform file with the sync script. Any agent may run this workflow.

## Usage

`/scaffold-workflow [all=true|agent=true|skill=true|command=true] <workflow brief>`

Treat `$ARGUMENTS` and the surrounding conversation as the requirements. The brief may follow `templates/brief.md`, but free-form briefs are fine.

### Component selectors

Parse leading selectors before interpreting the rest as the brief:

- `all=true`: agents, subagents, skills, and commands.
- `agent=true`: primary agents and subagents only.
- `skill=true`: skills only.
- `command=true`: commands only.

When individual selectors are true, scaffold only those types. `all=true` takes precedence. Omitted selectors default to `all=true`. Accept only literal `true` or `false`; otherwise explain the accepted values and ask for a corrected invocation. If a selected component has no usable specification in the brief or conversation, ask focused questions before writing files. Do not create unselected component types, even when mentioned as dependencies; reference an existing dependency if available and report any missing one.

## Source layout

You edit only canonical sources:

| Source | Path |
| --- | --- |
| Domains and platform settings | `workflow.yaml` |
| Agents and subagents | `agents/<name>.md` |
| Commands | `commands/<name>.md` |
| Skills | `.agents/skills/<name>/SKILL.md` (plus bundled resources in that folder) |
| Shared context | `context/*.md` |

`npm run sync` generates everything else: `registry.md`, `.opencode/agents/`, `.opencode/commands/`, `.claude/agents/`, `.claude/commands/`, `.claude/skills/`, `.codex/agents/`, and Codex command wrappers in `.agents/skills/<command>/`. Never hand-edit generated files; they start with a GENERATED notice. `.gemini/` and `.github/` are frozen and are not created or updated unless Arohbi explicitly asks.

## Workflow

### 1. Read the source material

From the repository root, read:

1. `AGENTS.md`, `workflow.yaml`, and `registry.md` for conventions, domains, and existing entities.
2. The matching templates: `templates/agent.md`, `templates/skill.md`, `templates/command.md`.
3. When skills are selected, `.agents/skills/skill-creator/SKILL.md`. When commands are selected, `.agents/skills/command-creator/SKILL.md` and its relevant references.
4. `docs/architecture/agentic-workflow-relationships.jpg` for the intended relationships: an agent triggers a creation skill; it creates agents, commands, and skills; agents and commands use skills; skills produce artifacts in `docs/` that feed later work.
5. The existing canonical files for any entity the brief names, and one or two similar entities as format examples.

`docs/archive/briefs/` holds historical briefs. Do not treat them as requirements.

### 2. Resolve the requested design

Extract entity names, purpose, descriptions, responsibilities, inputs, outputs, constraints, dependencies, and platforms. For each entity:

- Assign a domain from `workflow.yaml`. When the brief introduces a new field of work, add a domain entry (id, title, lead, purpose, artifacts, and optionally `skills` it owns when those skills are used by an agent from another domain) and create its artifact folders with a `.gitkeep`.
- Classify agents as `primary`, `subagent`, or `all`. Record who delegates to each subagent (`delegates` on the caller) and which skills it uses.
- For commands, choose the running `agent`, whether it runs as an isolated `subtask`, its `skills`, and its Codex entry (`wrapper`, an existing skill name, or `none`).

Do not invent requirements that materially change behavior, permissions, publication, or data handling. Ask focused questions about material gaps only. Use reasonable defaults for routine metadata and state them in the completion summary.

If the brief names an existing entity, compare the requested details with its canonical file. Update in place only where the brief adds or changes information. Preserve unrelated content and local conventions. If a repeat invocation adds nothing, leave files byte-for-byte unchanged and report that no update was needed. Do not rewrite equivalent content just to match a preferred phrasing.

### 3. Design the dependency flow

1. Primary agents are user-facing coordinators; subagents are focused workers with a named caller in some agent's `delegates`.
2. Skills capture repeatable capabilities, with activation criteria, inputs, process, output, and boundaries. Make descriptions distinct from neighbouring skills so triggers do not overlap. Do not give a skill the same name as an agent or command.
3. Commands are invoked workflows that call an agent and skills. Keep the full workflow in `commands/<name>.md`.
4. Avoid orphaned skills, commands without an execution target, and subagents with no caller, unless the brief asks for standalone entities.
5. Record artifact destinations in the domain entry and follow `context/artifacts.md`. Never publish, send, or share generated artifacts unless explicitly requested.

### 4. Write canonical files

- **Agents:** copy `templates/agent.md`, fill every frontmatter field, and keep the body sections exactly: Role & Identity, About the User / Context, Standing Rules (Always / Never), Tone & Format Preferences, Error Handling & Escalation. A coordinator may add a Routing section. Preserve the one-question ambiguity rule and the Human-in-the-Loop escalation rule unless Arohbi supplies replacements. Use `includes` for shared context rather than restating it. Remove the template's reference comment.
- **Skills:** apply the `skill-creator` guidance with `templates/skill.md`. Save at `.agents/skills/<name>/SKILL.md` in this repository, never in a global or user-level folder. Use only standard frontmatter fields.
- **Commands:** apply the `command-creator` guidance with `templates/command.md`. Save at `commands/<name>.md`. Use `$ARGUMENTS` for user input.
- **Registry and platforms:** do not write these by hand. Run:

  ```sh
  npm run sync
  npm run check
  ```

  Fix every reported problem in the canonical sources and repeat until `npm run check` passes. If you cannot run shell commands, stop after writing canonical files and ask Arohbi to run both commands, then review the output with him.

### 5. Review the result

Read every canonical file you created or updated, and spot-check the generated files. Confirm that:

- Names, descriptions, and references agree; `npm run check` passes.
- Every selected entity is accounted for, and unselected component types were not created.
- Delegation, skills, and commands connect with no orphans, and `registry.md` shows the intended map.
- Unrelated content is preserved, no duplicates exist, and identical repeat runs produce no changes.
- Artifact paths, permissions, and publication boundaries match the brief.

If a reference or format cannot be satisfied, do not fabricate a substitute. Report the exact gap and finish all unaffected work.

## Completion response

Summarize the workflow created, how its agents, skills, and commands connect, and which canonical files changed. Mention assumptions, defaults, and any platform limitation. Do not claim that generated commands were executed or artifacts produced during scaffolding. Remind Arohbi to restart OpenCode, Claude Code, or Codex sessions so they load the new files.
