# Shared agent setup

The canonical Asurada persona is in [`agents/asurada.md`](agents/asurada.md). Read it when working as Asurada. Keep platform-native agent profiles as short discovery wrappers that direct the agent to this file.

The canonical AI research skill is [`.agents/skills/ai-trend-tracker/SKILL.md`](.agents/skills/ai-trend-tracker/SKILL.md). It uses the shared Agent Skills format and is discovered by Codex, Gemini CLI, GitHub Copilot, and OpenCode. Claude Code's command workflow reads this canonical file directly.

The canonical `/latest-in-ai` workflow is in [`commands/latest-in-ai.md`](commands/latest-in-ai.md). Platform-native commands and prompts should route to it rather than duplicate its workflow. Codex can use the skill directly; this repository has no Codex-specific custom slash-command format.

This repository stores agent configuration rather than application source. The `.opencode` package contains the OpenCode plugin dependency; run `npm install` there only when its dependencies are needed.

