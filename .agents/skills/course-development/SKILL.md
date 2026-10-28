---
name: course-development
description: Develop a complete course package from a school syllabus, an educator's own brief, or both. Use whenever Arohbi wants to plan a course, short course, or personalized learning program with an outline, learning materials, and a video recording plan.
---

# Course Development

Coordinate course-level planning for college students, personalized 1 on 1 learners, and short-course learners. Adapt source intake and the course design to the selected learner track while producing a consistent, aligned package.

## Inputs

Identify the learner track and use its required source material:

- **College:** use the school syllabus as the primary source. Preserve supplied requirements and standards as written.
- **Personalized 1 on 1:** use Arohbi's supplied brief, notes, goals, or other teaching input as the course source.
- **Short course:** use both the school syllabus and Arohbi's supplied input. Incorporate both, preserve syllabus requirements, and identify conflicts. Ask which direction takes precedence when the brief does not resolve a material conflict.

Across tracks, use any supplied learner level, prior knowledge, desired outcomes, course duration or lesson count, delivery format, constraints, and video preferences. If a missing detail would materially change the course, ask one focused question. Otherwise, state a reasonable assumption.

## Workflow

1. **Confirm the track and source set.** If the learner type is not stated and cannot be inferred, ask which of the three tracks applies. Read supplied syllabus or brief material before planning.
2. **Extract requirements.** Summarize source requirements, desired learner outcomes, context, constraints, gaps, and any conflicts. Do not invent standards, learner facts, or source requirements.
3. **Design the course.** Define course-level outcomes and sequence topics into modules and lessons. Use `lesson-planning` to structure lessons, activities, practice, materials, and checks for understanding at the appropriate level.
4. **Create learner materials.** Delegate requested lesson-aligned explanations, examples, exercises, handouts, assignments, or lecture notes to `content-creator` using `content-creation`. Pass the complete source brief, track, outcomes, lesson plans, learner context, and format constraints. Follow the existing English-only teaching output requirement.
5. **Plan recorded videos.** Map videos to modules or lessons. For each, specify the topic, intended learning outcome, and a practical recording outline or key teaching beats. State assumptions about video length or format. A recording plan does not imply a full script; create full scripts only when requested.
6. **Review alignment.** Check that the course outline, lesson plans, learner materials, and video plan cover the stated outcomes and preserve the applicable source requirements. Identify uncovered requirements, unsupported assumptions, or remaining conflicts.

## Output

Return the following coordinated package:

1. **Course outline:** learner track, source summary, assumptions, course outcomes, modules, lesson sequence, and scope.
2. **Learning materials:** materials requested or appropriate for the brief, organized by lesson and aligned with objectives. Keep instructor-only guidance separate from learner-facing content.
3. **Video recording plan:** videos mapped to the outline, each with its topic, intended outcome, and recording outline.

Include lesson plans or checks for understanding where they help explain the package or when requested. Answer on screen by default; save only when requested under `docs/teaching/`, following `context/artifacts.md`.

## Boundaries

- Use this skill for course-level intake, sequencing, and coordinated packages. For a standalone lesson plan, use `lesson-planning` directly.
- Use `content-creation` and `content-creator` for learner-facing teaching materials; do not imply a full video script is included unless requested.
- Student-work evaluation and learner-specific performance feedback belong to `student-assessment`; they are not a mandatory course-development step.
- Do not claim syllabus compliance unless the supplied syllabus requirements have been checked against the package.
- Do not resolve material conflicts between a syllabus and Arohbi's input by silently discarding either source.

## Related workflow

- Used by `prof-vahveh` and `/develop-course`.
- Coordinates `lesson-planning` and `content-creation`; delegates materials to `content-creator`.
