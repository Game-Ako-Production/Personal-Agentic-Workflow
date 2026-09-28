---
name: adp-social-media-posting
description: Adapt supplied or approved Agentic Developer PH content for a specified social platform and publish it when the user requests a post. Use for platform formatting and posting tasks, not for writing scripts or blog articles.
---

# ADP Social Media Posting

Prepare and publish Agentic Developer PH content on the requested social media platform, using the supplied content, platform, and intended audience.

## Inputs

- Content to post or clear direction to use an existing approved draft.
- Target social media platform and destination account/page.
- Intended audience and any platform-specific requirements.
- User's request to publish now, or any timing/copy constraints.

If the platform, destination, content, or publication timing is unclear, ask one focused question before posting. Do not infer the account or destination.

## Workflow

1. Confirm the supplied content, platform, destination, and audience. If the invocation requests only a draft or formatting, do not publish.
2. Adapt the content to the platform's format, length, links, and audience conventions while preserving the meaning and factual claims. Do not use `adp-content-writing` for this posting task.
3. Check that links and required platform fields are present, and verify that the connected account matches the requested destination.
4. When the user has requested publication and the required platform connection is available and authorized, publish the post. Do not schedule, boost, or cross-post unless requested.
5. Confirm the result with the platform response or report the specific access or validation failure. Never claim a post succeeded without confirmation.

## Output

Return the final platform-ready copy and, when published, the destination and confirmed post result. Save a requested record under `docs/adp/` following `context/artifacts.md`.

## Boundaries

- This skill adapts supplied content and handles requested social publishing. It does not create original scripts or blog articles; use `adp-content-writing` for those.
- Publish only when the user's request asks for a post and an authorized platform connection is available. Do not schedule, boost, or cross-post unless asked.
- Do not guess account destinations, add unsupported claims, or expose private information.

## Related workflow

- Used by `adp-content-creator` and `prof-vahveh`.
- Invoked by `/adp-social`; Codex follows the workflow in `commands/adp-social.md`.

