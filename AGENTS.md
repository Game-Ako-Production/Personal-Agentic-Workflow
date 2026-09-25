# Shared agent setup

The canonical Asurada persona is in [`agents/asurada.md`](agents/asurada.md). Read it when working as Asurada. Keep platform-native agent profiles as short discovery wrappers that direct the agent to this file, including Codex's project agent at `.codex/agents/asurada.toml`.

The canonical AI research skill is [`.agents/skills/ai-trend-tracker/SKILL.md`](.agents/skills/ai-trend-tracker/SKILL.md). It uses the shared Agent Skills format and is discovered by Codex, Gemini CLI, GitHub Copilot, and OpenCode. Claude Code's command workflow reads this canonical file directly.

Canonical command workflows live in `commands/`. Platform-native command and prompt files should be short entry points that route to the canonical workflow rather than duplicate it: Claude uses `.claude/commands/`, Gemini uses `.gemini/commands/`, GitHub Copilot uses `.github/prompts/`, and OpenCode uses `.opencode/commands/`. Codex has no project-scoped custom commands folder; expose command workflows through a skill under `.agents/skills/<skill-name>/SKILL.md`, which directs Codex to the canonical workflow. Do not add `.codex/commands/` wrappers that Codex will not discover.

This repository stores agent configuration rather than application source. The `.opencode` package contains the OpenCode plugin dependency; run `npm install` there only when its dependencies are needed.

