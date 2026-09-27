---
description: Draft a researched Game Ako gaming article, review, news update, feature, or opinion piece
argument-hint: <topic and article type>
---

# Write Article

Create a well-structured gaming article for Game Ako from the user's topic and article brief. The draft should be accurate, engaging, reader-focused, and discoverable without misleading headlines.

## What This Command Does

1. Clarifies article type, topic, audience, platform, and any essential constraints.
2. Delegates research and drafting to `game-content-writer`, which follows `.agents/skills/game-content-writer/SKILL.md`.
3. Returns the article with direct source links and any necessary fact-check notes.

## Usage

```text
/write-article "Monster Hunter Wilds review; audience is returning series fans; use my notes below"
/write-article "How premium RPGs are changing; feature article for PC and console players"
```

## Implementation Steps

1. **Parse the brief.** Identify the article topic and type (review, news update, feature, or opinion), target reader, platform, length, tone, supplied notes, and any deadline. Ask one clarifying question only if a missing detail materially changes the article; otherwise have the agent state a brief assumption.
2. **Delegate writing.** Invoke `game-content-writer` with the full brief. Require it to follow `.agents/skills/game-content-writer/SKILL.md`, research factual or current claims, cite sources, distinguish facts from opinion, optimize naturally for the requested platform, and avoid clickbait.
3. **Check review claims.** For a requested hands-on review, pass through the user's gameplay notes. If none are supplied, do not claim hands-on experience; return a source-based overview/preview or ask whether Arohbi wants to provide notes.
4. **Return the draft.** Present the headline, article, source notes, and relevant verification caveats. Keep it on screen unless Arohbi explicitly asks for a saved artifact.
5. **Respect publication boundaries.** Do not publish, schedule, or share the draft.

## Important Notes

- Preserve the requested article type and intended audience.
- Use direct sources for factual claims; clearly attribute promotional or forecast claims.
- Keep social posts and captions within `social-post-writing`; this command creates editorial articles.
- `/latest-in-ai` is reserved for Asurada; do not invoke or delegate it.

## Error Handling

If relevant sources cannot be accessed or claims cannot be verified, say which details need checking and keep them out of the article as established facts. If the writing agent is unavailable, explain that and offer only work supported by the available evidence without implying delegation succeeded.

## Success Criteria

Stop when a coherent article fits the brief, important factual claims have direct source support or are clearly flagged, and any assumptions or review limitations are visible.
