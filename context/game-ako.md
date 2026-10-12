# Game Ako channel context

Single source of truth for core Game Ako channel facts. Agents and skills read this file instead of restating it. When Arohbi supplies newer information, use it and suggest updating this file.

YouTube-specific conventions (title style, series suffix, standard description block) live in `context/game-ako-youtube.md`; blog-specific conventions (metadata, length, SEO) live in `context/game-ako-blog.md`. Include only the files relevant to the task.

## Channel and platforms

| Platform | Role | Notes |
| --- | --- | --- |
| YouTube | Home base and monetization target | Long-form commentary, podcasts, and livestreams go here. Build for YouTube search and suggested discovery. |
| Facebook | Promotion channel only | Facebook monetization is not available. Keep it to reels, engagement posts, and announcements. Every Facebook item should lead people to follow the YouTube channel. Do not plan full podcasts or commentary videos as Facebook-native content. |
| Game Ako blog | Written editorial home | Custom-built Next.js site. Reviews, news updates, features, and opinion pieces. Search SEO matters here. |

## Audience

Filipino gamers, wherever they live: primarily in the Philippines, plus Filipinos abroad. Write for Filipino readers and viewers regardless of region. When relevant and sourced, include Philippine context such as PHP prices, Philippine or Southeast Asian availability, release times in Philippine Time (PHT, UTC+8), and SEA servers for gacha games. Never invent local prices or dates.

Audience figures that Arohbi cited are dated context, not live analytics: about 190 YouTube subscribers and 119k Facebook followers. The Facebook audience grew mostly from an earlier paid boost, so real engagement is likely lower than the follower count suggests. Do not infer engagement, growth, or performance without current data from Arohbi.

## Content pillars and formats

- Pillars: game livestreams, industry commentary, industry podcast discussion.
- Formats: livestream, commentary video, podcast, YouTube Short, Facebook Reel, Facebook engagement post, Facebook announcement, blog article.
- Sequence long-form pieces first, then repurpose them into Shorts, Reels, and posts.
- Prefer a sustainable cadence over a burst followed by silence.

## Weekly content goal

Arohbi's target volume for a normal week is 20 pieces total:

| # | Deliverable | Channel | Notes |
| --- | --- | --- | --- |
| 8 | Blog articles | Blog | Mix of news, commentary, and game reviews. News and commentary are the weekly mainstays; a review is included only when a relevant game is newly released or already completed. When there is no review-ready game, keep the count at 8 with more news and commentary. |
| 10 | Engagement posts | Facebook | Viral-leaning, intriguing posts designed to quickly provoke emotion or a reaction from followers. |
| 1 | Announcement | Facebook | Promotes the NewsKopo podcast, which airs every Sunday at 7:00 PM PHT. |
| 1 | Video promotion | Facebook post | Promotes the weekly Game Ako Speaks video on YouTube and points followers to the YouTube channel. |

Treat these as the target for planning. A plan should hit this volume when the week allows, and agents should flag — not silently absorb — any week where the target must drop.

## Coverage scope

Default research and commentary scope: premium console and PC AA/AAA games, plus gacha games on any platform, including mobile gacha. Exclude other mobile gaming, esports, and competitive scenes unless Arohbi explicitly broadens the scope. The `gaming-trend` skill defines the boundary in detail.

## Language defaults

| Deliverable | Default language |
| --- | --- |
| Conversation with Arohbi (GA-Orchestrator) | Natural, conversational Taglish |
| Spoken scripts: long-form, Shorts, Reels, livestream notes | Taglish |
| Facebook posts and captions | Taglish |
| YouTube titles and thumbnail text | English |
| YouTube descriptions | Taglish |
| YouTube tags | English, plus Filipino or Taglish search phrases where natural |
| Blog articles | English (American spelling, as used in Philippine English), for search discoverability |

Switch language whenever Arohbi asks.

## Voice

Friendly, knowledgeable, and conversational. Humor and puns are welcome when they fit, but never at the expense of accuracy. Keep Arohbi's own opinions clearly labelled as his; never present them, or any agent's inference, as verified fact.

## Publication boundary

Agents draft; Arohbi reviews and publishes. Never publish, schedule, send, or share content on his behalf.
