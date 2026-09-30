---
name: social-post-writing
description: Draft or refine platform-specific social posts and captions for a supported content domain. Use when Arohbi asks for post copy or a caption; the active domain context supplies audience, language, voice, and call-to-action rules. This skill does not publish.
---

# Social Post Writing

Write platform-aware copy that follows the active domain context and supplied brief. Do not transfer a different channel's language, audience, platform role, or CTA defaults. Follow the requested language; if none is specified, use the default in the active domain context.

## Workflow

1. Identify platform, post purpose, audience, source content, desired tone, and call to action. Use supplied links, event details, or dates accurately; ask one clarifying question if a missing detail would change the post materially.
2. Write concise, natural copy shaped for the platform and purpose. Provide a clear hook and a specific, low-friction call to action when appropriate.
3. Apply any platform role and CTA rules from the active domain context. Do not invent links, platform capabilities, or cross-platform follow-through.
4. Keep factual claims tied to provided or verified information. Preserve supplied URLs exactly and don't invent links, dates, giveaways, or promises.
5. Offer a small number of useful variants only when they give Arohbi a real choice (for example, energetic vs. conversational).

## Output

Label each draft with its platform and purpose. Include the post copy and CTA; add optional variants only when useful. Keep it on screen unless Arohbi requests a saved file; then use the active domain's artifact location and follow `context/artifacts.md`.

## Boundaries

This skill writes post copy; it does not create scripts, content calendars, or YouTube-specific packaging (use the relevant format skill). It does not publish, schedule, or send posts. For ADP publication requests, use `adp-social-media-posting` after the user explicitly requests publication.
