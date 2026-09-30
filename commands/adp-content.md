---
name: adp-content
description: Research and create Agentic Developer PH content in the requested format for its specified audience.
argument-hint: "<topic> <format> <audience>"
domain: agentic-developer-ph
agent: adp-orchestrator
subtask: false
skills:
  - content-writing
  - article-writing
  - long-form-scriptwriting
  - short-form-scriptwriting
  - social-post-writing
codex: content-writing
targets: [opencode, claude, codex]
---

# ADP Content

Create an Agentic Developer PH content piece from `$ARGUMENTS`. `adp-orchestrator` coordinates the request and delegates content drafting to `adp-content-creator`.

## Workflow

1. **Parse the brief.** Identify topic, format, audience, source requirements, and constraints from `$ARGUMENTS` and the surrounding conversation. Ask one focused question only if a missing detail materially changes the result; otherwise state an assumption.
2. **Delegate.** Assign research and drafting to `adp-content-creator` using `content-writing` and the matching format skill (`article-writing`, `long-form-scriptwriting`, `short-form-scriptwriting`, or `social-post-writing`). Pass through the full brief and requested output format. This command creates drafts only; do not publish through it.
3. **Review.** Check source support, audience fit, requested format, and that factual claims and opinions are clearly distinguished. Resolve issues with the creator before returning.
4. **Return.** Present the finished draft and citations on screen. Save only when requested, under `docs/adp/` following `context/artifacts.md`.

## Error handling

If research tools, source material, or the delegated agent are unavailable, say what is missing. Do not claim the research or delegation succeeded if it did not. Do not publish content through this command.

## Completion criteria

Return a reviewed Agentic Developer PH content draft in the requested format, with assumptions and source links where applicable.
