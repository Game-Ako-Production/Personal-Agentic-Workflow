# Game Ako blog conventions

Blog-specific conventions for the custom Next.js Game Ako blog. Core channel facts (platform roles, audience, pillars, coverage scope, language defaults, voice, publication boundary) are in `context/game-ako.md`; YouTube conventions are in `context/game-ako-youtube.md`.

- Platform: custom Next.js app.
- Post metadata schema: [PLACEHOLDER: the frontmatter or CMS field names the Next.js blog expects]. Until Arohbi supplies it, use the temporary generic metadata fallback below; do not claim it matches the site's actual schema.
- Affiliate or sponsored links: [PLACEHOLDER: policy]. Until it is supplied, never add affiliate or sponsored links; if Arohbi supplies one, flag that it needs a disclosure.

## Article length defaults

Follow any length Arohbi specifies. Otherwise use these drafting ranges as defaults, not hard limits:

| Type | Words |
| --- | --- |
| News update | 400–700 |
| Opinion piece | 800–1,400 |
| Feature or review | 1,000–1,800 |

## Search and editorial conventions

- Choose a primary keyword Filipino gamers would actually search; use it naturally in the headline, first paragraph, and at least one subheading.
- Use descriptive H2/H3 headings. Add Philippine context only when relevant and sourced (PHP prices, PH/SEA availability, PHT release times, or SEA servers).
- Do not promise search ranking or reach. Never invent internal-link URLs; describe related topics and let Arohbi supply links.

## Temporary generic metadata fallback

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
