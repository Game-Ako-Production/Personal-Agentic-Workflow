## Workflow Design Instructions

Create the commands base on the following details:

### <Command 1>

### <Command 2>

### <Command 3>

## Common Instructions

- Slash Commands should be generated according to OpenCode, Codex, Claude, Gemini and Github Copilot standards and best practices.
- Create each on `commands` folder for the supported tool but if not make the native folder for who don't support it eg. Claude uses `.claude`, OpenCode uses `.opencode`, etc.
- This instructions should be idempotent, only generate the command if they don't exist yet. If they already exist, update them with the new details.
- `/scaffold-workflow` is available to all agents, custom agents, and subagents; route them to `.agents/skills/scaffold-workflow/SKILL.md` and `commands/scaffold-workflow.md`.
- `/latest-in-ai` is reserved for Asurada. Other agents must not invoke or delegate that command.
