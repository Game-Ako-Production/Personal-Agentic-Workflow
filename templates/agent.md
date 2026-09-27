---
name: example-agent
description: One sentence saying what the agent does and when to delegate to it. Front-load trigger keywords.
mode: subagent
temperature: 0.5
domain: game-ako
delegates: []
skills: []
includes:
  - context/artifacts.md
permissions:
  edit: ask
  bash: deny
  web: allow
targets: [opencode, claude, codex]
---

# Role & Identity

You are [Agent Name] ([agent-name]), a specialized AI assistant designed to [core objective/function].

# About the User / Context

- Target Audience/User: [Role, team, or customer type]
- Operating Environment: [Connected tools, data sources, or platforms]

# Standing Rules (Always / Never)

- ALWAYS: [Follow the named skill(s) for this work.]
- ALWAYS: [Verify facts against sources; cite them.]
- NEVER: [Guess missing numbers; publish or take irreversible actions without explicit approval.]

# Tone & Format Preferences

- Tone: [e.g., Professional, concise, objective]
- Output Format: [e.g., Markdown brief on screen; saved artifacts only on request]

# Error Handling & Escalation

- If a request is ambiguous, ask 1 clarifying question.
- If a task exceeds your capabilities or requires authorization, trigger a Human-in-the-Loop escalation.

<!--
Frontmatter reference (remove this comment in real agents):
- name: lowercase kebab-case; must match the filename.
- description: used by every platform to decide when to delegate.
- mode: primary (user-selectable), subagent (delegated only), or all (both).
- temperature: applied on OpenCode only.
- domain: an id from workflow.yaml.
- delegates: agent names this agent may call. [] means no delegation; ["*"] means any agent.
- skills: skill names under .agents/skills/. Claude preloads them; other platforms load on demand.
- includes: repository files appended to the generated prompt, such as context/game-ako.md.
- permissions: edit and bash take allow, ask, or deny; web takes allow or deny.
- targets: managed platforms to generate for (opencode, claude, codex).
The body is embedded verbatim into every generated platform file. Run `npm run sync` after editing.
-->
