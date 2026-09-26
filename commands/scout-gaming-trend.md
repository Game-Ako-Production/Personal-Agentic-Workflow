---
description: Research current gaming developments and return a sourced brief for Game Ako
argument-hint: "<topic or trend> [time period]"
---

# Scout Gaming Trend

Research the gaming topic or trend in the supplied brief and return a concise, sourced summary of current developments, emerging games, or genre patterns relevant to Game Ako.

## What This Command Does

1. Clarifies the research scope and requested period.
2. Delegates focused research to the `gaming-trend-scout` agent, which follows `.agents/skills/gaming-trend/SKILL.md`.
3. Returns evidence, direct source links, and relevant caveats for Arohbi's review and content planning.

## Usage

```text
/scout-gaming-trend "co-op survival games" "last 30 days"
/scout-gaming-trend "Nintendo next hardware announcements"
```

## Implementation Steps

1. **Parse the brief.** Treat the supplied topic, platforms, region, and time period as the research scope. If no period is supplied, focus on current developments and have the agent state the date range covered. Ask one clarifying question only if a missing detail would materially change the research.
2. **Delegate research.** Invoke `gaming-trend-scout` with the complete brief. Require it to follow `.agents/skills/gaming-trend/SKILL.md`, use current sources, prefer primary sources, corroborate consequential claims, and distinguish event dates from report dates.
3. **Return the brief.** Present a concise Markdown summary with key findings, evidence, source links, relevance to Game Ako, and uncertainty or coverage gaps. Keep facts, attributed claims, and analysis distinct.
4. **Respect artifact boundaries.** Keep the result on screen unless Arohbi explicitly asks for a saved file. Do not publish or share the result.

## Important Notes

- Do not fabricate metrics, citations, or trends; disclose unavailable or conflicting evidence.
- Attribute forecasts, estimates, and promotional claims.
- Report findings for Arohbi to consider; do not make decisions on his behalf.
- Do not use `/latest-in-ai`; it is reserved for Asurada.

## Error Handling

If current sources cannot be accessed or verified, explain the limitation and provide only findings supported by available evidence. If the delegated agent is unavailable, report that and offer the verified research gathered so far without implying delegation succeeded.

## Success Criteria

Stop when the requested topic has a concise, date-scoped brief with direct supporting sources and material uncertainties clearly stated, or explain which part could not be verified.
