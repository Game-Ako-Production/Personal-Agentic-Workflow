---
name: lesson-planning
description: Design structured lesson plans from learning objectives, curriculum standards, and student needs. Use when a user asks to plan, organize, sequence, or structure a lesson; focus on the lesson design rather than drafting its full teaching materials.
---

# Lesson Planning

Create a practical lesson plan that connects learning objectives, learning activities, assessment, and required materials for the stated students and curriculum context.

## Inputs

- Learning objectives or desired outcomes.
- Curriculum standards, if applicable.
- Student age or grade, prior knowledge, needs, and learning context.
- Lesson duration, setting, available resources, and constraints.

When details are missing, use a reasonable stated assumption unless it would materially change the plan; then ask one focused question.

## Workflow

1. Identify intended outcomes and learner context. Preserve supplied standards as written; do not invent standards.
2. Sequence a realistic lesson into an opening, instruction or modeling, guided and independent practice as appropriate, and closure.
3. For each activity, explain its purpose, approximate timing, teacher and student actions, and needed materials.
4. Align checks for understanding and assessment evidence to objectives. Include differentiation or accessibility supports when learner needs are supplied or relevant.
5. Review the plan for feasible timing, objective coverage, and internal consistency; state assumptions and gaps.

## Output

Return a structured lesson plan with context and assumptions, objectives, materials, timed activities, assessment/checks for understanding, and relevant adaptations. Keep it on screen unless saving is requested; save under `docs/teaching/` following `context/artifacts.md`.

## Boundaries

- This skill designs and organizes the lesson. It does not draft complete worksheets, assignments, or lecture scripts; use `content-creation` for those.
- It does not evaluate submitted student work or assign performance levels; use `student-assessment`.
- Do not claim compliance with a standard unless the standard was supplied and the plan was checked against it.

## Related workflow

- Used by `prof-vahveh`.
- May be followed by `content-creation` for materials and `student-assessment` for evaluation design or feedback.
