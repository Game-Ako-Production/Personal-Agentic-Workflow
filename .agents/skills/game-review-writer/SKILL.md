---
name: game-review-writer
description: Draft or revise a spoiler-free Before Waldas first-impressions game review from Arohbi's supplied gameplay notes. Use this skill whenever Arohbi invokes `/write-game-review`; do not research games online for this workflow.
---

# Game Review Writer

Create an informative, feature-based written game review for Game Ako's **Before Waldas** series. The review reflects Arohbi's supplied play experience and preferences; it is a first impression, not a claim that the game has been completed.

## Inputs

- Conversation context and the game title and genre.
- Platform, hardware, settings, and hours played, as available.
- Arohbi's gameplay observations, preferences, and any requested revisions or additions.
- `context/game-ako.md` for the Game Ako audience and channel context.

If important details needed for a truthful review are missing, ask one focused question that groups the missing information. If playtime is below the roughly 5–10 hour baseline (which may vary with the game's scale), explain that limitation and ask whether Arohbi wants a clearly labeled early-impressions draft or prefers to provide more playtime first. Do not imply the baseline was met when it was not.

## Review Format

Use **Before Waldas: [Game Title] Review** as the title. Start with a test-setup block that identifies the platform and hardware, settings (such as resolution and graphics preset), and hours played. Mark any unavailable detail as not provided rather than guessing.

Organize the review into these four scopes, with supported pros and cons under each. Cover the aspects most relevant to Filipino gamers and the supplied play experience; not every subtopic needs a separate discussion. If the notes do not support a judgment for a scope or pro/con, say so briefly instead of inventing one.

- **Technical:** visuals, art direction, audio (music, sound effects, voice acting), performance (frame rate, loading, crashes, bugs), controls and camera, settings and accessibility.
- **Gameplay:** core gameplay loop, combat or main mechanics, progression, difficulty and balance, pacing.
- **Content:** game direction and quest/level design, content amount and replay value, quality-of-life features, online/co-op when applicable, monetization.
- **Story:** narrative, characters, world building, localization. Keep this section spoiler-free; save story details for GALore.

Keep every paragraph to eight sentences or fewer. End with exactly one Review Label and a short reason:

- **Day One:** Must buy; pre-order or buy at full price.
- **Wishlist - Wait for patch:** Wait for a patch or add it to the backlog.
- **Wishlist - Wait for sale:** Wait for a sale or add it to the backlog.
- **Skip:** Do not spend time on it; it has no value to offer.

A major update or expansion may justify a new review pass; do not imply coverage of it without supplied play experience.

## Workflow

1. Read `context/game-ako.md` to understand the target audience, then focus on the game features most relevant to those readers. Use only details supplied in the conversation or by Arohbi. Do not browse, search online, or add unsupported claims. Ground opinions in described game features and play observations; distinguish observations from preferences. Do not infer local prices, availability, or other market facts.
2. Write in simple, accessible English with a professional, informative tone. Follow the Review Format in this skill, including the test-setup block, supported pros and cons for all four scopes, paragraph limit, and final label.
3. Keep all story content spoiler-free. Do not disclose story details; save them for GALore.
4. Return the draft on screen by default. Save only when Arohbi expresses intent to save, under `docs/game-ako/review/`, following `context/artifacts.md` including its filename and no-overwrite rules.

## Output

A well-structured English **Before Waldas** review following this skill's Review Format. Include a brief limitation note when important aspects cannot be assessed from the supplied information. When saving is requested, report the final artifact path.

## Boundaries

- Do not research online or use facts not supplied by Arohbi.
- Do not invent gameplay experience, hours played, hardware, settings, features, or opinions.
- Do not include spoilers or personal information.
- Do not create a video script, publish, schedule, or share the review.
- Do not save a file unless Arohbi asks to save it.

## Related workflow

- `/write-game-review` runs as `game-content-writer` and uses this skill.
- On Codex, follow `commands/write-game-review.md` for this workflow.
