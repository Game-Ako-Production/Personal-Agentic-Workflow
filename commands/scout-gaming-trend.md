---
description: Research current console and PC premium AA and AAA games, plus gacha games including mobile gacha, and return a sourced Game Ako brief.
argument-hint: "<topic or trend> [time period]"
---

# Scout Gaming Trend

Research the supplied topic within the `gaming-trend` scope and return a concise, sourced brief for Game Ako content planning.

## What This Command Does

1. Applies the scope and date period from the research brief.
2. Delegates focused research to `gaming-trend-scout`, which follows `.agents/skills/gaming-trend/SKILL.md`.
3. Returns evidence, source links, and relevant caveats for Arohbi's review.

## Usage

```text
/scout-gaming-trend "upcoming premium PC RPGs" "next 90 days"
/scout-gaming-trend "major updates to cross-platform gacha games" "last month"
```

## Implementation Steps

1. **Parse the brief.** Treat the supplied topic, platforms, region, and time period as the research scope. If no period is supplied, focus on current developments and state the date range covered. Apply the scope in `.agents/skills/gaming-trend/SKILL.md`: prioritize premium console and PC AA/AAA games; include gacha games, including mobile gacha; exclude other mobile gaming, esports, and competitive scenes.
2. **Delegate research.** Invoke `gaming-trend-scout` with the complete brief. Require current sourcing, primary sources where available, corroboration of consequential claims, and a distinction between event dates and report dates.
3. **Return the brief.** Present a concise Markdown summary with key findings, evidence, direct source links, relevance to Game Ako, and uncertainty or coverage gaps. Keep facts, attributed claims, and analysis distinct.
4. **Respect artifact boundaries.** Keep the result on screen unless Arohbi explicitly asks for a saved file. Do not publish or share the result.

## Important Notes

- Narrow mixed in-scope and excluded topics to the in-scope part and state the boundary.
- If a request is entirely about a currently excluded area, explain that it falls outside the scope and ask whether Arohbi wants to broaden it before researching.
- Do not fabricate metrics, citations, or trends; disclose unavailable or conflicting evidence.
- Attribute forecasts, estimates, and promotional claims.
- Report findings for Arohbi to consider; do not make decisions on his behalf.
- Do not use `/latest-in-ai`; it is reserved for Asurada.

## Error Handling

If current sources cannot be accessed or verified, explain the limitation and provide only findings supported by available evidence. If the delegated agent is unavailable, report that and offer verified research gathered so far without implying delegation succeeded.

## Success Criteria

Stop when the requested topic has a concise, date-scoped brief within the stated coverage scope, with direct supporting sources and material uncertainties clear, or explain which part could not be verified.
