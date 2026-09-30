---
name: write-article
description: Draft a researched Game Ako blog article, review, news update, feature, or opinion piece
argument-hint: "<topic and article type>"
domain: game-ako
agent: ga-orchestrator
subtask: false
skills:
  - gaming-trend
  - content-writing
  - article-writing
codex: article-writing
targets: [opencode, claude, codex]
---

# Write Article

Create a well-structured gaming article for the Game Ako blog from `$ARGUMENTS` and the surrounding request. The draft should be accurate, engaging, reader-focused, and discoverable without misleading headlines.

## Usage

```text
/write-article "Monster Hunter Wilds review; audience is returning series fans; use my notes below"
/write-article "How premium RPGs are changing; feature article for PC and console players"
```

## Workflow

1. **Parse the brief.** Identify the article topic and type (review, news update, feature, or opinion), target reader, length, tone, language (English by default), supplied notes, and any deadline. Ask one clarifying question only if a missing detail materially changes the article; otherwise state a brief assumption.
2. **Research first when the topic is time-sensitive.** For news updates, and any article that depends on recent developments, delegate to `gaming-trend-scout` (skill: `gaming-trend`) for a sourced brief unless Arohbi already supplied current sources. Skip this for evergreen topics or reviews built on his own notes.
3. **Delegate writing.** Give `game-content-writer` the full brief, including the research brief as source material. Require it to use `content-writing` for shared research/accuracy and `article-writing` for the article structure, then apply `context/game-ako.md` for domain SEO and metadata conventions. If you are `game-content-writer` or delegation is unavailable, follow the skills yourself.
4. **Check review claims.** For a hands-on review, pass through Arohbi's gameplay notes. If none are supplied, do not claim hands-on experience; return a source-based overview or preview, or ask whether Arohbi wants to provide notes.
5. **Return the draft.** Present the headline, article, SEO metadata block, source notes, and verification caveats. Keep it on screen unless Arohbi asks to save it; then follow `context/artifacts.md` and save under `docs/game-ako/articles/`.
6. **Respect publication boundaries.** Do not publish, schedule, or share the draft.

## Notes

- Preserve the requested article type and intended audience.
- Use direct sources for factual claims; attribute promotional or forecast claims.
- Social posts and captions belong to `social-post-writer`; this command creates editorial articles.

## Error handling

If sources cannot be accessed or claims cannot be verified, say which details need checking and keep them out of the article as established facts. If the writing agent is unavailable, say so and offer only work supported by the available evidence, without implying delegation succeeded.

## Completion criteria

A coherent article fits the brief, important factual claims have direct source support or are clearly flagged, and assumptions or review limitations are visible.
