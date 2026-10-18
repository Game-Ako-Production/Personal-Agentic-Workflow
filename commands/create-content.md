---
name: create-content
description: Plan and create a Game Ako content piece or package (plan, long-form script, short-form script, YouTube packaging, social post) with companion pieces
argument-hint: "<topic and content type>"
domain: game-ako
agent: ga-orchestrator
subtask: false
skills:
  - gaming-trend
  - content-strategy
  - content-writing
  - article-writing
  - long-form-scriptwriting
  - short-form-scriptwriting
  - youtube-packaging
  - social-post-writing
  - game-review-writer
codex: wrapper
targets: [opencode, claude, codex]
---

# Create Game Ako Content

Treat `$ARGUMENTS` and the surrounding request as the brief. GA-Orchestrator normally coordinates this workflow; Asurada may run it directly. Use `context/game-ako.md` and `context/game-ako-series.md` for channel defaults, series formats, and the pilot cadence. English is the default for content deliverables; use Taglish only when Arohbi explicitly requests it. Keep outputs on screen unless Arohbi asks for saved files, and never publish, schedule, or share content.

## Usage examples

```text
/create-content "Before Waldas: package my supplied gameplay notes as a spoiler-free article and scripted YouTube review"
/create-content "GALore: outline this game's episode arc and draft episode 1 as a two-hour recorded script"
/create-content "Game Ako Speaks!: research this week's topic and write a 10–15-minute English video script with YouTube packaging"
/create-content "NewsKoPo: prepare a sourced Sunday live run of show, co-host prompts, and Facebook/YouTube announcement copy"
/create-content "Turn this finished YouTube video into one standalone Short/Reel script and a Facebook post that links to the full video"
```

## Workflow

1. Identify the series (Before Waldas, GALore, Game Ako Speaks!, Game Ako Chronicles Blog, or NewsKoPo) and requested output (article, video/live script, short-form script, YouTube packaging, social post, plan, or a package), topic, platform, audience, language, source material, desired length/timing, and constraints. Ask one clarifying question if a missing detail materially changes the work; otherwise state a concise assumption. Use the series playbook rather than applying one generic video format to every show.
2. **Research first when the topic is time-sensitive.** If the content depends on current news or recent developments and Arohbi has not supplied current sources, delegate to `gaming-trend-scout` (skill: `gaming-trend`) for a short, sourced brief. Pass that brief to every writer below as source material. Skip this for evergreen topics.
3. If Arohbi asks for a plan or has not settled the angle, delegate to `content-strategist` (skill: `content-strategy`). Use the six-week pilot cadence as a planning guide, not a quota; flag production-capacity tradeoffs and keep the plan YouTube-first while retaining NewsKoPo's Facebook live presence during the transition.
4. For any requested video, delegate script creation to `scriptwriter`. Use `long-form-scriptwriting` for recorded long-form, mid-form, podcast, or livestream scripts and `short-form-scriptwriting` for a Short/Reel. Recorded videos get a full spoken-word script; live/co-hosted programs get a production-ready host script/rundown with talk tracks, prompts, transitions, and a close. Never invent co-host dialogue.
5. For Before Waldas, use `game-review-writer` through `game-content-writer` for the article. If a companion video is requested, separately ask `scriptwriter` to create a spoiler-free video script from the same supplied gameplay notes; do not make the review skill itself create video content.
6. Delegate requested blog articles to `game-content-writer` (skills: `content-writing` and `article-writing`); for time-sensitive articles, pass the research brief. Keep blog-only requests editorial rather than automatically adding a video.
7. For YouTube titles, description, thumbnail text, chapters, or tags, delegate to `scriptwriter` (skill: `youtube-packaging`), passing the finished script when one exists. Use English by default and include packaging by default in a full YouTube package.
8. For captions, announcements, or engagement copy, delegate to `social-post-writer` (skill: `social-post-writing`). Facebook items should promote YouTube, except that NewsKoPo retains its Facebook live presence during the transition.
9. For a package, produce the anchor piece first, then derive YouTube packaging and requested companion Shorts, Reels, or posts from the actual content. Keep vertical clips self-contained, preserve meaning, and identify when suitable footage or source material is missing.
10. Check that factual and time-sensitive claims trace to the research brief or other cited sources. Label uncertainty and opinion; keep Arohbi's takes labelled as his and any suggested angle labelled as a suggestion. Never invent details, gameplay experience, or metrics.
11. Review returned pieces for consistency, unsupported claims, platform fit, English default, and an appropriate call to action. Present assumptions and verification notes. When Arohbi asks to save, follow `context/artifacts.md` (plans in `docs/game-ako/plans/`, scripts in `docs/game-ako/scripts/`, posts in `docs/game-ako/posts/`).

## Error handling

If a subagent is unavailable, say so and produce only what you can support yourself; never imply delegation succeeded.

## Completion criteria

- The requested format and platform are clear.
- Any requested video deliverable includes the appropriate full script or production-ready live/co-host script.
- Series rules and the English-by-default language rule are followed.
- Drafts follow the applicable writing skill and match the channel context.
- Claims needing verification are sourced or flagged.
- Nothing has been published, scheduled, or saved without an explicit request.
