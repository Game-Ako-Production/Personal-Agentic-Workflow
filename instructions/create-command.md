## Workflow Design Instructions

Create the commands base on the following details:

### Scout Gaming Trend Command

- name: `scout-gaming-trend`
- description: `The Scout Gaming Trend command is designed to help Arohbi stay informed about the latest trends and developments in the gaming industry. It provides insights on emerging games, popular genres, and industry news to help Arohbi make informed decisions for his gaming channel, Game Ako.`
- This command will be triggered by the `ga-orchestrator` agent to assist Arohbi in scouting gaming trends for his gaming channel.
- The command will take user input on specific gaming trends or topics of interest and provide a summary of the latest developments, emerging games, and popular genres in the gaming industry.
- The command will use related skills such as `gaming-trend` to gather and analyze information from various sources, including gaming news websites, social media platforms, and industry reports.
- The command will execute the generation of a summary report that includes key findings, insights, and recommendations for Arohbi to consider in his content planning and decision-making process.

### <Command 2>

### <Command 3>

## Common Instructions

- Slash Commands should be generated according to OpenCode, Codex, Claude, Gemini and Github Copilot standards and best practices.
- Create each on `commands` folder for the supported tool but if not make the native folder for who don't support it eg. Claude uses `.claude`, OpenCode uses `.opencode`, etc.
- This instructions should be idempotent, only generate the command if they don't exist yet. If they already exist, update them with the new details.
- `/scaffold-workflow` is available to all agents, custom agents, and subagents; route them to `.agents/skills/scaffold-workflow/SKILL.md` and `commands/scaffold-workflow.md`.
- `/latest-in-ai` is reserved for Asurada. Other agents must not invoke or delegate that command.
