# Game Ako channel context

Single source of truth for Game Ako channel facts. Agents and skills read this file instead of restating it. When Arohbi supplies newer information, use it and suggest updating this file.

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

## YouTube conventions

- Commentary and podcast series suffix: ` | GameAko Speaks!` (brand written as one word in titles).
- Past titles that set the style:
  - `Physint Goes to Xbox & Wolverine's Review Drama is Not What You Think | GameAko Speaks!`
  - `Physint: The Risk Behind Funding Creative Games | GameAko Speaks!`

### Standard description block

Append this block, exactly as written, to every long-form YouTube description. Replace the placeholders once Arohbi supplies the details, then remove this sentence.

```text
[PLACEHOLDER: channel subscribe link]
[PLACEHOLDER: Facebook page link]
[PLACEHOLDER: Game Ako blog link]
[PLACEHOLDER: other social handles]
[PLACEHOLDER: standard disclaimer, if any]
```

## Blog conventions

- Platform: custom Next.js app.
- Post metadata schema: [PLACEHOLDER: the frontmatter or CMS field names the Next.js blog expects]. Until Arohbi supplies it, use the temporary generic metadata fallback below; do not claim it matches the site's actual schema.
- Affiliate or sponsored links: [PLACEHOLDER: policy]. Until it is supplied, never add affiliate or sponsored links; if Arohbi supplies one, flag that it needs a disclosure.

### Article length defaults

Follow any length Arohbi specifies. Otherwise use these drafting ranges as defaults, not hard limits:

| Type | Words |
| --- | --- |
| News update | 400–700 |
| Opinion piece | 800–1,400 |
| Feature or review | 1,000–1,800 |

### Search and editorial conventions

- Choose a primary keyword Filipino gamers would actually search; use it naturally in the headline, first paragraph, and at least one subheading.
- Use descriptive H2/H3 headings. Add Philippine context only when relevant and sourced (PHP prices, PH/SEA availability, PHT release times, or SEA servers).
- Do not promise search ranking or reach. Never invent internal-link URLs; describe related topics and let Arohbi supply links.

### Temporary generic metadata fallback

Use this only while the actual Next.js/CMS schema is unknown. It is a drafting checklist, not a confirmed site contract.

```yaml
title: "Headline shown on the page"
seoTitle: "Search title, at most 60 characters, primary keyword first"
slug: "lowercase-kebab-case-with-primary-keyword"
metaDescription: "140 to 160 characters that summarize the article and include the primary keyword"
excerpt: "One or two sentences for the blog listing card"
primaryKeyword: "main search phrase"
secondaryKeywords: ["related phrase", "related phrase"]
category: "News | Review | Feature | Opinion"
tags: ["game title", "studio", "platform"]
ogTitle: "Social share title (may match title)"
ogDescription: "Social share description, up to about 200 characters"
featuredImageAlt: "Literal description of the suggested featured image"
featuredImageSuggestion: "What image to use and where it comes from (official press kit, screenshot)"
internalLinkIdeas: ["Topic of a related Game Ako post or video to link, if one exists"]
```

## Voice

Friendly, knowledgeable, and conversational. Humor and puns are welcome when they fit, but never at the expense of accuracy. Keep Arohbi's own opinions clearly labelled as his; never present them, or any agent's inference, as verified fact.

## Publication boundary

Agents draft; Arohbi reviews and publishes. Never publish, schedule, send, or share content on his behalf.
