---
name: example-command
description: One sentence describing what the command produces.
argument-hint: "<topic> [time period]"
domain: game-ako
agent: ga-orchestrator
subtask: false
skills: []
codex: wrapper
targets: [opencode, claude, codex]
---

# Example Command

[One or two sentences stating the outcome.] Treat `$ARGUMENTS` and the surrounding request as the brief.

## Workflow

1. **Parse the brief.** [Which inputs matter; when to ask one clarifying question versus state an assumption.]
2. **Delegate or execute.** [Which agent and skill do the work. Name them exactly.]
3. **Review.** [What to check before returning.]
4. **Return.** [Output shape. Keep it on screen unless a save is requested; follow `context/artifacts.md` when saving.]

## Error handling

[What to do when sources, agents, or inputs are unavailable. Never imply delegation succeeded when it did not.]

## Completion criteria

- [Observable condition that means the command is done.]

<!--
Frontmatter reference (remove this comment in real commands):
- name: lowercase kebab-case; must match the filename.
- agent: the agent that runs the workflow. On OpenCode the command switches to it. Omit to run in the current agent.
- subtask: true runs the command as an isolated subagent (OpenCode subtask, Claude context: fork).
  Use it only for self-contained work that does not need conversation history or follow-up questions.
- skills: skills the workflow uses (for the registry and validation).
- codex: how Codex reaches the workflow. `wrapper` generates .agents/skills/<name>/SKILL.md;
  a skill name means that existing skill already routes to commands/<name>.md; `none` skips Codex.
- targets: managed platforms to generate for (opencode, claude, codex).
Use $ARGUMENTS for the user's input. Run `npm run sync` after editing.
-->
