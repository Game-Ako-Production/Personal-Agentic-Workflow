---
name: scout-gaming-trend
description: Research current console and PC premium AA and AAA games, plus gacha games including mobile gacha, and return a sourced Game Ako brief
argument-hint: "<topic or trend> [time period]"
domain: game-ako
agent: gaming-trend-scout
subtask: true
skills:
  - gaming-trend
codex: gaming-trend
targets: [opencode, claude, codex]
---

# Scout Gaming Trend

Research `$ARGUMENTS` within the `gaming-trend` scope and return a concise, sourced brief for Game Ako content planning.

This workflow runs as `gaming-trend-scout`. If you are a different agent, delegate the complete brief to `gaming-trend-scout` and return its brief; if delegation is unavailable, run the steps yourself. It usually runs as an isolated task, so state assumptions instead of asking follow-up questions unless the request is entirely out of scope.

## Usage

```text
/scout-gaming-trend "upcoming premium PC RPGs" "next 90 days"
/scout-gaming-trend "major updates to cross-platform gacha games" "last month"
```

## Workflow

1. **Parse the brief.** Treat the supplied topic, platforms, region, and time period as the research scope. If no period is supplied, focus on current developments and state the date range covered. Apply the coverage scope in the `gaming-trend` skill.
2. **Research.** Follow the `gaming-trend` skill: current sourcing, primary sources where available, corroboration of consequential claims, and a distinction between event dates and report dates.
3. **Return the brief.** Present a concise Markdown summary with key findings, evidence, direct source links, relevance to Game Ako, and uncertainty or coverage gaps. Keep facts, attributed claims, and analysis distinct.
4. **Respect artifact boundaries.** Keep the result on screen unless Arohbi asks to save it; then follow `context/artifacts.md` and save under `docs/game-ako/research/`. Do not publish or share the result.

## Notes

- Narrow mixed in-scope and excluded topics to the in-scope part and state the boundary.
- If a request is entirely about an excluded area, explain that it falls outside the scope and ask whether Arohbi wants to broaden it before researching.
- Do not fabricate metrics, citations, or trends; disclose unavailable or conflicting evidence.
- Report findings for Arohbi to consider; do not make decisions on his behalf.

## Error handling

If current sources cannot be accessed or verified, explain the limitation and provide only findings supported by available evidence.

## Completion criteria

The topic has a concise, date-scoped brief within the coverage scope, with direct supporting sources and material uncertainties clear, or an explanation of which part could not be verified.
