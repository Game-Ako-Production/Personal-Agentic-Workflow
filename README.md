## Workflow Overview

- Scaffold Workflow
  - Directly ask any agent to execute the `/scaffold-workflow` command to scaffold a new workflow.
- AI Trend Tracker Workflow
  - Directly as Asurada to execute the `/latest-in-ai` command to get the latest trends in AI and provide insights to Arohbi. `/latest-in-ai` command will invoke the `ai-trend-tracker` skill in the process.
- Game Guide Expert Workflow
  - Directly as Asurada then delegate to the `game-guide-expert` skill.
  - Add the principle on SecondSeat for the `game-guide-expert` skill enhancement.
- Game Ako Content Creation Workflow
  - Directly ask `ga-orchestrator` for any content creation needs.
  - `ga-orchestrator` can trigger commands and invoke skills that is related to content creation and management of the Game Ako channel.
