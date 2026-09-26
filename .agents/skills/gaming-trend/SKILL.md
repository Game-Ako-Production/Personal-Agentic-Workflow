---
name: gaming-trend
description: Research and summarize current gaming industry trends, game announcements, popular genres, and news for Game Ako. Use whenever Arohbi asks what is happening in gaming, wants a sourced trend brief, or needs evidence to inform Game Ako content planning; verify time-sensitive claims with current sources.
---

# Gaming Trend Research

Create a concise, evidence-led brief about the gaming topic or trend Arohbi specifies. Treat the user's requested period and focus as the scope; if none is supplied, prioritize current developments and state the date range covered.

## Process

1. Identify the topic, geography/platform if relevant, requested time period, and why the information may matter to Game Ako. Ask one question only if a missing detail would materially change the research.
2. Search current, relevant sources. Prefer primary sources such as official game/developer/publisher announcements, platform-holder newsrooms, filings, and original datasets. Use reputable reporting for context and corroboration. Do not treat social posts, search snippets, or industry forecasts as independently verified facts.
3. Verify important claims against the underlying source and, when consequential, a second independent source. Record when an event happened separately from when a source reported it. Note conflicting accounts and evidence gaps.
4. Summarize only the strongest relevant findings. Distinguish verified facts, attributed claims, analysis, and speculation. Explain relevance to Game Ako without deciding what Arohbi should make.
5. Provide a concise Markdown brief with the scope/date range, key findings, source links, and meaningful caveats. Keep the response on screen; create a saved artifact only when requested.

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
- Do not make decisions or take actions on Arohbi's behalf, publish or share material, or generate files unless explicitly requested.
- Do not write scripts, titles, or descriptions; hand those tasks to the relevant Game Ako writing workflow.
- Do not invoke or delegate `/latest-in-ai`; it is reserved for Asurada.

## Related workflow

- The `gaming-trend-scout` agent uses this skill for focused research.
- The `/scout-gaming-trend` command runs the canonical workflow in `commands/scout-gaming-trend.md` and calls this skill through the gaming trend scout.
