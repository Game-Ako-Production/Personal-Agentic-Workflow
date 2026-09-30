---
name: adp-social-media-posting
description: Publish an explicitly requested Agentic Developer PH social post through a clear, authorized destination. Use only for ADP posting; use social-post-writing for drafting/adapting copy and never publish without clear authorization.
---

# ADP Social Media Posting

Execute an explicitly requested Agentic Developer PH social post only after the destination and authorization are clear. This skill governs the publish action; `social-post-writing` provides the reusable copywriting/adaptation method.

## Inputs

- Content to post or clear direction to use an existing approved draft.
- Target social media platform and destination account/page.
- Intended audience and any platform-specific requirements.
- User's request to publish now, or any timing/copy constraints.

If the platform, destination, content, or publication timing is unclear, ask one focused question before posting. Do not infer the account or destination.

## Workflow

1. Confirm that Arohbi explicitly requested publication and supplied/approved the content, platform, and destination. If the request is for a draft or adaptation only, stop before publishing.
2. Use `social-post-writing` to adapt the supplied or approved copy to the platform while preserving its meaning and factual claims. Do not create a new article or script here.
3. Check links and required platform fields, and verify that the connected account matches the requested destination.
4. Publish only when the requested destination is clear and the platform connection is available and authorized. Do not schedule, boost, or cross-post unless requested.
5. Confirm the result with the platform response or report the specific access or validation failure. Never claim a post succeeded without confirmation.

## Output

Return the final platform-ready copy and, when published, the destination and confirmed post result. Save a requested record under `docs/adp/` following `context/artifacts.md`.

## Boundaries

- This skill handles the publish action for ADP only; it does not draft original copy. Use `social-post-writing` for copy and `content-writing` plus the relevant format skill for original content.
- Publish only when the user's request asks for a post and an authorized platform connection is available. Do not schedule, boost, or cross-post unless asked.
- Do not guess account destinations, add unsupported claims, or expose private information.

## Related workflow

- Used by `adp-orchestrator` and `/adp-social` only for the publication workflow.
- Codex follows `commands/adp-social.md` for `/adp-social`.

