---
name: example-skill
description: What the skill does AND when to use it, in third person. Front-load the words Arohbi is likely to say. Keep it distinct from neighbouring skills so triggers do not overlap.
---

# Example Skill

[One paragraph: the outcome this skill produces and for whom.]

## Inputs

- [Required inputs and reasonable defaults when they are missing.]

## Workflow

1. [Step]
2. [Step]
3. [Step]

## Output

[Shape of the result. On screen by default; follow `context/artifacts.md` when a save is requested.]

## Boundaries

- [What this skill does not do, and which skill or agent handles it instead.]

## Related workflow

- [Agents that use this skill and commands that call it.]

<!--
Skill rules (remove this comment in real skills):
- Save at .agents/skills/<name>/SKILL.md. Folder name must equal `name` (lowercase kebab-case, max 64 chars).
- Use only the standard frontmatter fields: name, description, and optionally license, compatibility, metadata.
- Keep the description under 1024 characters.
- First-party skills are mirrored into .claude/skills/ by `npm run sync`; edit only the .agents/skills/ copy.
- Reference shared context (context/game-ako.md, context/artifacts.md) instead of restating it.
-->
