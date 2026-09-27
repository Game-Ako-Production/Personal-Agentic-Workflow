---
name: gaming-trend
description: Research current console and PC gaming news, trends, announcements, and market developments, focusing on premium AA and AAA games. Also cover gacha games as an explicit exception, including mobile gacha; exclude other mobile gaming, esports, and competitive scenes. Use whenever Arohbi asks what is happening in these areas or wants a sourced brief for Game Ako content planning.
---

# Gaming Trend Research

Create a concise, evidence-led brief about the gaming topic or trend Arohbi specifies. Apply the scope below before researching. Treat the user's requested period and focus as the scope; if none is supplied, prioritize current developments and state the date range covered.

## Coverage scope

Prioritize:

- Console and PC games using the traditional premium purchase model, especially AA and AAA releases, studios, publishers, development, launches, sales, and industry trends.
- Gacha games as an explicit exception to the mobile exclusion. Include gacha titles across mobile, PC, and console, including their releases, major updates, player-facing systems, and business or industry developments.

Exclude:

- Mobile gaming generally, including mobile titles that do not use gacha mechanics. Include a mobile game only when it is a gacha game or the user explicitly changes this scope.
- Esports and competitive scenes, including tournaments, teams, professional players, competitive rankings, and esports business news.
- Competitive-play coverage such as meta shifts, ranked balance analysis, and tournament strategies, even when the game itself is an in-scope console or PC title.

When a requested topic mixes included and excluded areas, focus on the in-scope part and state the scope boundary briefly. If the request is entirely about an excluded area, explain that it falls outside this skill's coverage and ask whether Arohbi wants to broaden the scope before researching it.

## Process

1. Identify the topic, platforms, requested time period, and why the information may matter to Game Ako. Apply the coverage scope before collecting sources. Ask one question only if a missing detail would materially change the research.
2. Search current, relevant sources. Prefer primary sources such as official game/developer/publisher announcements, platform-holder newsrooms, filings, and original datasets. Use reputable reporting for context and corroboration. Do not treat social posts, search snippets, or industry forecasts as independently verified facts.
3. Verify important claims against the underlying source and, when consequential, a second independent source. Record when an event happened separately from when a source reported it. Note conflicting accounts and evidence gaps.
4. Summarize only the strongest relevant findings. Distinguish verified facts, attributed claims, analysis, and speculation. Explain relevance to Game Ako without deciding what Arohbi should make.
5. Provide a concise Markdown brief with the scope/date range, key findings, source links, and meaningful caveats. Keep the response on screen; create a saved artifact only when requested, following `context/artifacts.md` and saving under `docs/game-ako/research/`.

## Output

For each finding, include:

- **Finding:** What happened or what pattern is visible.
- **Evidence:** The source-backed detail and event/publication date where useful.
- **Game Ako relevance:** A neutral explanation of why it may matter to the channel.
- **Sources:** Direct links to the supporting sources.

End with a brief note on uncertainty or coverage gaps when applicable. Do not force recommendations when the evidence only supports reporting findings.

## Boundaries

- Do not invent metrics, trends, or citations. State when data is unavailable or cannot be verified.
- Attribute forecasts, marketing claims, and analyst estimates to their sources.
- Do not research or summarize esports, competitive scenes, or non-gacha mobile gaming under the default scope.
- Do not make decisions or take actions on Arohbi's behalf, publish or share material, or generate files unless explicitly requested.
- Do not write scripts, titles, or descriptions; hand those tasks to the relevant Game Ako writing workflow.

## Related workflow

- The `gaming-trend-scout` agent uses this skill for focused research.
- The `/scout-gaming-trend` command runs `commands/scout-gaming-trend.md` through the gaming trend scout. On platforms without project commands (Codex), when Arohbi asks to run `/scout-gaming-trend`, read and follow `commands/scout-gaming-trend.md`.