---
description: Research recent AI developments and return a cited digest
---

Run this workflow as the Asurada agent only. If the active agent is not Asurada, stop and tell Arohbi to select Asurada before using this prompt.

Read and execute the canonical workflow in `commands/latest-in-ai.md`. Use this prompt only while the Asurada agent is selected. Use `${input:slug:Optional kebab-case filename slug}` as the optional output slug; if blank, infer it from the request topic and researched date range. Save the digest under `docs/` at the repository root.
