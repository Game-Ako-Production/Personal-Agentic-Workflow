---
name: scout-gaming-trend
description: Research and fact-check gaming news, including premium console and PC AA/AAA games, gacha games, and gaming-industry economics, development, policy, and business, for a sourced Game Ako brief
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
/scout-gaming-trend "gaming publisher acquisitions and financial results" "last 30 days"
/scout-gaming-trend "new policies affecting console and PC game distribution" "this year"
```

## Workflow

1. **Parse the brief.** Treat the supplied topic, platforms or industry segment, region, and time period as the research scope. If no period is supplied, focus on current developments and state the date range covered. Apply the coverage scope in the `gaming-trend` skill, including its expanded economics, development, policy, and business angles.
2. **Research and verify.** Follow the `gaming-trend` skill's fact-checking workflow for every prospective item. Check the underlying evidence, prefer relevant primary sources, independently corroborate consequential claims where possible, distinguish event dates from report dates, and record conflicts or gaps before deciding how to present an item.
3. **Return the brief.** Present a concise Markdown summary. Every news item must include a `Verification` field marked `✅ Verified` or `⚠️ Not fully verified`; reserve the verified label for claims supported by checked evidence. Keep not-fully-verified items separate and clearly qualified, or omit them when they cannot be responsibly framed. Include evidence, direct source links, relevance to Game Ako, and material uncertainty. Keep facts, attributed claims, and analysis distinct.
4. **Respect artifact boundaries.** Keep the result on screen unless Arohbi asks to save it; then follow `context/artifacts.md` and save under `docs/game-ako/research/`. Do not publish or share the result.

## Notes

- Narrow mixed in-scope and excluded topics to the in-scope part and state the boundary.
- If a request is entirely about an excluded area, explain that it falls outside the scope and ask whether Arohbi wants to broaden it before researching.
- Do not fabricate metrics, citations, or trends; disclose unavailable or conflicting evidence and never imply that an unchecked claim is verified.
- Report findings for Arohbi to consider; do not make decisions on his behalf.

## Error handling

If current sources cannot be accessed or claims cannot be verified, explain the limitation. Mark every included item with its verification status and do not present unsupported claims as facts.

## Completion criteria

The topic has a concise, date-scoped brief within the full coverage scope, every item has an accurate verification indicator and direct supporting sources, material uncertainties are clear, and unsupported claims are not presented as facts; otherwise, explain what could not be verified.
