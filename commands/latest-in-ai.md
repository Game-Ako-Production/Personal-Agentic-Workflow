# Latest in AI

This workflow is reserved for Asurada. When a platform command invokes it, confirm that the active agent is Asurada. If it is not, stop and tell Arohbi to switch to Asurada.

Usage: `/latest-in-ai [slug]`. The optional first argument is the output filename slug only; use any requested research period from the surrounding request. If no slug is supplied, infer a concise slug from the request topic and append the researched date range. Use lowercase kebab-case, such as `latest-ai-trends-2026-09-18-to-2026-09-24`. Never use a path, extension, or directory supplied as part of the slug.

## Workflow

1. Read and follow `.agents/skills/ai-trend-tracker/SKILL.md`.
2. Use the previous 7 days unless Arohbi specifies another period. If fewer than five meaningful, verified developments are found, expand the search to 30 days and state the range.
3. Research all three categories: Models & Research, Tools & Products, and Market & Industry. Prefer primary sources, apply the skill's credibility tiers, and corroborate consequential claims independently.
4. Distinguish when an event happened from when it was reported. Attribute vendor claims, forecasts, and unresolved findings accurately.
5. Return a concise Markdown digest with direct source links and source tier labels. Include the date range and any important coverage gap.
6. Locate the repository root (the parent of the `commands/` directory) and save the finished digest as `<repository-root>/docs/<slug>.md`. Create the `docs/` directory if needed. Normalize a supplied slug by lowercasing it, replacing every run of non-letters and non-numbers with one hyphen, and trimming leading or trailing hyphens. If it is empty after normalization, infer one from the request topic and date range. Use only the normalized slug as the filename; never let it select a directory or path.
7. Never overwrite an existing artifact. If `docs/<slug>.md` already exists, append `-2`, `-3`, and so on until an unused filename is found. Report the final path in the response.

If browsing or a source is unavailable, say so and continue only when reliable evidence is sufficient. Do not fill gaps with guesses or unverified rumors.
