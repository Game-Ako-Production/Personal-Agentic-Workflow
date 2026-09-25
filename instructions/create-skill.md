## Workflow Design Instructions

Create the skills base on the following details:

### Content Strategy Skill

- name: `content-strategy`
- description: `The Content Strategies skill is designed to help Arohbi develop and implement effective content strategies for his gaming channel, Game Ako. It provides guidance on content planning, audience engagement, and platform-specific strategies to maximize reach and impact.`
- This skill will be triggered by the `ga-orchestrator` agent to assist Arohbi in creating and managing content for his gaming channel.
- The skill will take user input on content goals, target audience, and preferred formats, and provide recommendations on content planning, scheduling, and promotion.
- The skill will provide insights on audience engagement, platform-specific strategies, and best practices for content creation and distribution.
- Develop a content strategy that aligns with the overall goals of the project.
- Focus on creating valuable and engaging content for the target audience.
- Ensure consistency in tone, style, and messaging across all content pieces.
- YouTube: ~190 subscribers — the home base and monetization target. Podcasts and commentary videos go to YouTube, built with YouTube discovery (search/suggested) in mind.
- Facebook: 119k followers, but grown mostly from a past paid boost, so engagement is likely lower than the follower count suggests. Facebook monetization is not available. Facebook is a promotion channel: keep it minimal (reels, engagement posts, announcements), and every Facebook item must drive people to follow the YouTube channel. Don't plan full podcasts or commentary videos as Facebook-native content.
- Formats available: livestreams, commentary videos, podcast, reels/shorts.
- Content pillars: game live streams, industry commentary, industry podcast discussion.
- Picks a small number of topics/pieces that are actually achievable, not an overwhelming list
- Assigns each item a format (livestream / commentary video / podcast / reel / short / Facebook engagement post / Facebook announcement) and target platform(s)
- Sequences pieces so long-form content (livestream, podcast, commentary video) gets repurposed into shorts/reels afterward, rather than treating each piece as one-off
- Flags anything time-sensitive (needs to go out before the news is stale)
- Is consistency-first: prefer a sustainable cadence over a burst-then-silence pattern
- Do not write scripts, titles, or descriptions.

### Long Form Scriptwriting Skill

- name: `long-form-scriptwriting`
- description: `The Long Form Scriptwriting skill is designed to assist Arohbi in creating engaging and well-structured long-form scripts for his gaming channel, Game Ako. It provides guidance on scriptwriting techniques, storytelling, and content organization to ensure that the scripts are compelling and effective.`
- outlines and drafts for commentary, podcasts, or livestreams, with clear sections, transitions, and source notes where needed.

### Short Form Scriptwriting Skill

- name: `short-form-scriptwriting`
- description: `The Short Form Scriptwriting skill is designed to assist Arohbi in creating concise and impactful short-form scripts for his gaming channel, Game Ako. It provides guidance on scriptwriting techniques, storytelling, and content organization to ensure that the scripts are engaging and effective for short-form content.`
- concise, self-contained scripts with a quick hook, one central idea, spoken-language phrasing, and a clear ending or call to action.

### Social Post Writing Skill

- name: `social-post-writing`
- description: `The Social Post Writing skill is designed to assist Arohbi in creating engaging and platform-specific social media posts for his gaming channel, Game Ako. It provides guidance on writing effective captions, announcements, and engagement posts to maximize reach and interaction on social media platforms.`
- platform-appropriate captions, announcements, and engagement posts, with a YouTube follow-through where that fits the post.

## Common Instructions

- Skills should be generated according to OpenCode, Codex, Claude, Gemini and Github Copilot standards and best practices.
- Create each on `skills` folder for the supported tool but if not make the native folder for who don't support it eg. Claude uses `.claude`, OpenCode uses `.opencode`, etc.
- This instructions should be idempotent, only generate the skill if they don't exist yet. If they already exist, update them with the new details.
- `/scaffold-workflow` is available to all agents, custom agents, and subagents; route them to `.agents/skills/scaffold-workflow/SKILL.md` and `commands/scaffold-workflow.md`.
- `/latest-in-ai` is reserved for Asurada. Other agents must not invoke or delegate that command.
