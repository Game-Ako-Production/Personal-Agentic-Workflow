---
name: ai-trend-tracker
description: Research and track recent AI developments across models and research, tools and products, and market and industry. Use when Arohbi asks for the latest AI news, a trend roundup, or a digest of AI developments.
---

# AI Trend Tracker

Produce a concise, source-attributed digest of recent developments in artificial intelligence. Research current information with web search and open primary sources directly. Do not rely on memory for current releases, dates, prices, or market events.

When invoked directly in Codex for a latest-in-AI digest, also read and follow `commands/latest-in-ai.md` for the shared invocation and artifact-saving rules. Codex discovers this repository skill as its native reusable workflow; there is no project-scoped Codex command wrapper.

## Research workflow

1. Set the period. Use the previous 7 days by default. If that produces too few meaningful items, extend to 30 days and say so. For a different requested period, follow the request.
2. Search across all three categories: **Models & Research**, **Tools & Products**, and **Market & Industry**. Look for launches, model updates, papers, benchmarks, safety findings, useful tools, partnerships, investments, acquisitions, policy changes, and material business moves.
3. Prefer sources in this credibility order:
   - **Tier 1 — Primary:** research papers and lab/research institution publications; official product or company announcements; regulator, court, exchange, or government documents; direct datasets and benchmark methodology.
   - **Tier 2 — Established reporting and independent analysis:** reputable journalism, specialist publications, and technically credible independent evaluations that identify their evidence and methods.
   - **Tier 3 — Discovery leads:** social posts, newsletters, forums, aggregators, and unverified claims. Use these to find leads only; do not include a material claim without corroboration from Tier 1 or Tier 2.
4. Verify each item against the original source whenever possible. For consequential claims, seek a second independent source. A company announcement confirms what the company announced, not necessarily independent performance claims; attribute those claims accordingly.
5. Separate the publication date from the date an event happened. Include exact dates when available. Exclude stale articles resurfacing without a new development, rumors without reliable corroboration, and minor announcements with little practical relevance.
6. Summarize what changed and why it matters in neutral language. Make uncertainty and conflicts between sources clear. Do not present a claim as established fact when it is only a forecast or vendor claim.

## Output format

Return the digest in Markdown. When this skill is used by `/latest-in-ai`, follow that command's requirement to save the digest under `docs/`. For other requests, create a file only when Arohbi explicitly asks for a saved artifact.

```markdown
# AI Trends — [date range]

## Models & Research
- **[Development]** [What happened, why it matters, and any material caveat.] ([Source](URL), [date]; Tier 1)

## Tools & Products
- ...

## Market & Industry
- ...

## Signals to watch
- [Optional: up to three substantiated patterns or open questions across the items.]
```

Include only categories with meaningful findings; say briefly when a category had no notable verified development. Provide direct source links for every entry, label the source tier, and prefer roughly 5–12 high-signal entries over an exhaustive list. If reliable reporting is sparse, return fewer items rather than lowering the evidence bar. Close with a short methodology note describing the period and any important coverage gap.

## Source handling

- Link to the original paper, release, filing, or documented study when available, with a credible report as corroboration where useful.
- Attribute disputed or self-reported claims in the sentence itself.
- Do not cite a search results page as evidence.
- Do not fabricate dates, metrics, quotes, or links. If a source is inaccessible, use another source or omit the item.

