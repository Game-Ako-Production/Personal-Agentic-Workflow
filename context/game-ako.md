# Game Ako channel context

Single source of truth for core Game Ako channel facts. Agents and skills read this file instead of restating it. When Arohbi supplies newer information, use it and suggest updating this file.

Series-specific formats, the idea-to-publication pipeline, and the pilot cadence live in `context/game-ako-series.md`. YouTube-specific conventions (title style, series suffix, standard description block) live in `context/game-ako-youtube.md`; blog-specific conventions (metadata, length, SEO) live in `context/game-ako-blog.md`. Include only the files relevant to the task.

## Channel and platforms

| Platform | Role | Notes |
| --- | --- | --- |
| YouTube | Home base and long-term monetization target | Build the video pipeline around YouTube discovery and returning viewers. |
| Facebook | Promotion and community channel during transition | Use Reels, announcements, discussion posts, and clear paths to YouTube. Keep NewsKoPo's current Facebook livestream presence and YouTube simulcast during the six-week pilot; review the transition after the pilot. |
| Game Ako blog | Written editorial home | Custom-built Next.js site. Reviews, news updates, features, and opinion pieces. Search SEO matters here. |

## Audience

Filipino gamers, wherever they live: primarily in the Philippines, plus Filipinos abroad. Write for Filipino readers and viewers regardless of region. When relevant and sourced, include Philippine context such as PHP prices, Philippine or Southeast Asian availability, release times in Philippine Time (PHT, UTC+8), and SEA servers for gacha games. Never invent local prices or dates.

Audience figures are dated context, not live analytics. Arohbi reported about 195 YouTube subscribers on October 19, 2026, up from an earlier baseline of about 190; treat this as observed growth, not a target or rate. Arohbi also reported about 119k Facebook followers, with much of that audience coming from an earlier paid boost. Do not infer active engagement, growth, or performance from follower counts; use newer figures or analytics only when Arohbi supplies them.

## Content pillars and formats

- Series: Before Waldas, GALore, Game Ako Speaks!, Game Ako Chronicles Blog, and NewsKoPo. See `context/game-ako-series.md` for their roles and production formats.
- Formats include scripted YouTube videos and livestreams, YouTube Shorts, Facebook Reels and promotional/community posts, and blog articles.
- Script every requested video deliverable. For live or co-hosted formats, provide a production-ready host script/rundown with talk tracks, transitions, prompts, and a close; preserve room for live conversation and never invent a co-host's views or dialogue.
- Sequence short-form clips and promotional posts from approved anchor content when practical. Reels and Shorts are distribution formats, not additional editorial pillars.
- Prefer a sustainable YouTube-centered cadence over a high-volume quota or a burst followed by silence. The current six-week pilot is a planning guide, not a mandatory output count.

## Six-week pilot cadence

Use this as a starting schedule to test against real production capacity, not a guaranteed or optimal publishing target:

- NewsKoPo remains weekly on Sunday at 7:00 PM PHT, retaining its Facebook livestream presence and current YouTube simulcast during the six-week pilot. Review the platform transition after the pilot rather than cutting Facebook abruptly.
- Publish one additional edited YouTube anchor about every two weeks, alternating between a ready Before Waldas review and Game Ako Speaks! when possible.
- When GALore is active for a game, aim for about one episode in a month and let it take the next edited-video slot rather than treating it as extra weekly work.
- Draft a blog article roughly every one or two weeks only when it fits a review or a selected news/commentary topic; do not force a duplicate for every video.
- Aim for one standalone vertical Short/Reel per week, preferably from approved source footage or a finished script.
- Keep Facebook to a few purposeful posts in a normal week (roughly two or three, including the NewsKoPo reminder, YouTube promotion, or a useful discussion prompt). Reduce this further when capacity is tight.
- After six weeks, review sustainability and any supplied YouTube metrics before changing the schedule. If work must be reduced, keep the weekly NewsKoPo and the planned biweekly YouTube anchor first; treat other pieces as optional.

## Coverage scope

Default research and commentary scope: premium console and PC AA/AAA games, plus gacha games on any platform, including mobile gacha. Exclude other mobile gaming, esports, and competitive scenes unless Arohbi explicitly broadens the scope. The `gaming-trend` skill defines the boundary in detail.

## Language defaults

| Deliverable | Default language |
| --- | --- |
| Conversation with Arohbi (GA-Orchestrator) | Natural, conversational English |
| All spoken scripts, including long-form, Shorts, Reels, and livestreams | English |
| Facebook posts and captions | English |
| YouTube titles and thumbnail text | English |
| YouTube descriptions | English |
| YouTube tags | English, plus Filipino search phrases where they are natural and useful |
| Blog articles | English (American spelling, as used in Philippine English), for search discoverability |

Use Taglish or another language only when Arohbi explicitly requests it. Apply the requested language to the deliverables in that request.

## Voice

Friendly, knowledgeable, and conversational. Humor and puns are welcome when they fit, but never at the expense of accuracy. Keep Arohbi's own opinions clearly labelled as his; never present them, or any agent's inference, as verified fact.

## Publication boundary

Agents draft; Arohbi reviews and publishes. Never publish, schedule, send, or share content on his behalf.
