# Personal workflow

Arohbi's unified agent workspace. One front door, Asurada, routes work to domain agents and skills across these fields:

| Domain | Lead | Use it for |
| --- | --- | --- |
| Personal and AI trends | Asurada | Research, analysis, automation, decisions; `/latest-in-ai` weekly digest |
| Video game guides | Asurada + `game-guide-expert` skill | Builds, bosses, routes, walkthroughs |
| Game Ako content and blog | GA-Orchestrator | `/create-content`, `/write-article`, `/scout-gaming-trend` |
| Workflow utilities | Any agent | `/scaffold-workflow` to add agents, skills, commands, and domains |

`registry.md` has the full, always-current map, including the delegation diagram.

## Using it

- **OpenCode / Claude Code:** sessions in this repository open as Asurada. Ask for anything; Asurada delegates single deliverables straight to a specialist and hands multi-piece Game Ako work to GA-Orchestrator. You can also switch to GA-Orchestrator directly.
- **Codex:** ask for the `asurada` or `ga-orchestrator` agent. Commands are available as skills (for example, "run create-content").

Commands:

- `/latest-in-ai [slug]` saves an AI trend digest to `docs/ai-trends/` (Asurada only).
- `/create-content <topic and content type>` plans or drafts Game Ako scripts, posts, and packages.
- `/write-article <topic and article type>` drafts a Game Ako blog article.
- `/scout-gaming-trend <topic> [time period]` returns a sourced gaming trend brief.
- `/scaffold-workflow [all=true|agent=true|skill=true|command=true] <brief>` extends the workspace.

## Extending it

1. Describe the new work (see `templates/brief.md`) and run `/scaffold-workflow`, or edit the canonical sources directly: `workflow.yaml`, `agents/`, `commands/`, `.agents/skills/`, `context/`.
2. Run `npm run sync` to regenerate platform files and `registry.md`.
3. Run `npm run check` until it passes.
4. Restart your OpenCode, Claude Code, or Codex session to load the changes.

See `AGENTS.md` for conventions and platform details.

## Open items

- Add the SecondSeat principle to `game-guide-expert` once it is defined.
