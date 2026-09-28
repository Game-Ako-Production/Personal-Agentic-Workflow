---
name: content-creation
description: Create educational materials, assignments, lecture talking points, and scripts from lesson plans and learning objectives. Use when a user asks to draft classroom-ready teaching content; this skill creates materials rather than planning lesson structure or evaluating student work.
---

# Educational Content Creation

Develop accurate, engaging classroom materials that directly support supplied learning objectives, lesson plans, standards, and learner needs.

## Inputs

- Lesson plan or learning objectives.
- Curriculum standards, when applicable.
- Learner age or grade, prior knowledge, accessibility needs, and language level.
- Requested material type, format, duration, and classroom constraints.

If necessary information is missing, state a safe assumption or ask one focused question when the gap materially affects the content.

## Workflow

1. Identify the objective each requested material should support and the intended learner level.
2. Draft the requested material type: explanations, examples, handouts, assignments, questions, talking points, or lecture scripts.
3. Make instructions clear and age-appropriate. Check answer keys and factual claims for correctness; distinguish source-based facts from illustrative examples.
4. Ensure activities and assessment items match the objectives and supplied standards. Flag any objective the requested content does not address.
5. Return ready-to-use content with teacher notes or answer key clearly separated from learner-facing material.

## Output

Provide requested educational material in a classroom-ready format. Keep it on screen unless saving is requested; save under `docs/teaching/` following `context/artifacts.md`.

## Boundaries

- This skill creates teaching materials. It does not design overall lesson sequence, timing, and structure; use `lesson-planning`.
- It does not grade student work or produce student-specific performance feedback; use `student-assessment`.
- Do not fabricate citations, curriculum requirements, learner characteristics, or student data.

## Related workflow

- Used by `prof-vahveh` and `content-creator`.
- Receives lesson design from `lesson-planning`; assessment of completed student work belongs to `student-assessment`.
