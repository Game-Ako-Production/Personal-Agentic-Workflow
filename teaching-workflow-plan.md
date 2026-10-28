# Teaching Workflow Plan

## Purpose

Build a reusable course-development workflow for three learner types: college students, personalized 1 on 1 learners, and short-course learners. Each track has different source inputs, but follows the same development process and produces a coordinated course package.

This file is a planning brief for scaffolding the workflow. It does not itself change the workflow configuration.

## Current teaching workflow

The teaching domain is led by `prof-vahveh`, which coordinates lesson planning, teaching-material creation, and student assessment. It can delegate materials work to `content-creator`.

Existing teaching skills:

- `lesson-planning` structures individual lessons from objectives, standards, and learner context.
- `content-creation` creates teaching materials, assignments, lecture talking points, and scripts from lesson plans and objectives.
- `student-assessment` evaluates submitted student work against supplied criteria.

There is currently no teaching command. The existing workflow does not define course-level sequencing, learner-specific source intake, or a combined package containing a course outline, learning materials, and a recording plan.

## Learner tracks and source inputs

### College students

- Primary input: the school syllabus.
- Preserve supplied syllabus requirements and standards. Do not invent curriculum requirements.
- Ask about or state assumptions for learner level, course duration, delivery format, and other material gaps.

### Personalized 1 on 1

- Primary input: Arohbi's own course brief, notes, goals, or other supplied material.
- Clarify the learner's starting point and desired outcome when these materially affect the sequence or depth.

### Short courses

- Inputs: the school syllabus plus Arohbi's own brief or teaching input.
- Preserve syllabus requirements and incorporate the supplied teaching input. Identify conflicts and ask how to resolve them when the brief does not establish which source takes precedence.

Across all tracks, gather or state reasonable assumptions about learner level, desired outcomes, duration or number of lessons, delivery format, and video preferences. Ask a focused question only when missing information would materially change the course.

## Shared development process

1. Identify the learner track and collect its required source inputs.
2. Extract source requirements, learner needs, desired outcomes, constraints, gaps, and conflicts.
3. Define course-level learning outcomes and sequence the topics into modules and lessons.
4. Produce the course outline, including the proposed lesson sequence and scope.
5. Plan each lesson's objectives, teaching sequence, practice, materials, and checks for understanding.
6. Delegate creation of learner-facing materials to `content-creator`, with the full source brief and lesson plan.
7. Create a video recording plan mapped to the course lessons. Include each video's topic, intended outcome, and recording outline. Do not imply that a full video script is included unless requested.
8. Review the outline, lesson plans, materials, and video plan for source fidelity, objective coverage, consistency, and fit to the learner track.
9. Present the package on screen by default. Save only when requested, under `docs/teaching/`, following `context/artifacts.md`.

## Standard course package

The default deliverables are:

1. **Course outline** — course outcomes, module and lesson sequence, scope, and stated assumptions.
2. **Learning materials** — lesson-aligned materials suitable for the specified learners, such as explanations, examples, exercises, handouts, assignments, or lecture notes as appropriate.
3. **Video recording plan** — a video-by-video plan aligned with the course outline and lessons, including topic, objective, and recording outline.

Lesson plans and checks for understanding support production of the package and can be included in the output when useful or requested. Student assessment of completed work remains a separate workflow handled by `student-assessment`.

## Proposed workflow components

### Agents

- Keep `prof-vahveh` as the teaching-domain lead and course workflow coordinator.
- Keep `content-creator` as the subagent for producing learner-facing materials.
- Do not add a new agent initially; the existing roles cover coordination and content production.

### Skills

- Add a `course-development` skill. It should define the three intake tracks, source handling, course-level outcomes and sequencing, standard package, video-plan requirements, review criteria, and handoffs to existing skills and agents.
- Assign `course-development` to `prof-vahveh` and the new command.
- Reuse `lesson-planning` for lesson structure and `content-creation` for educational materials.
- Keep `student-assessment` available for separate assessment and feedback requests; it is not a mandatory step in every course package.

### Command

- Add `/develop-course <learner type and brief>` as the entry point for the complete course-development process.
- Route it to `prof-vahveh` and the `course-development` skill.
- Treat the user's syllabus or brief as the source material, run the shared process, and return the standard course package.
- Support the three learner-track names explicitly: `college`, `1-on-1`, and `short-course` (final command vocabulary may be adjusted during implementation).

## Existing constraint to resolve during implementation

`content-creator` and `content-creation` currently require English-only output. Decide whether that constraint remains appropriate for all learner tracks. If multilingual materials are in scope, update the canonical agent and skill instructions accordingly.

## Likely canonical files to update when scaffolding

- `workflow.yaml` — refine the teaching domain purpose if needed.
- `agents/prof-vahveh.md` — route course-package requests through `course-development` and review the complete package.
- `agents/content-creator.md` — clarify its role in generating course and lesson materials from the coordinator's brief.
- `.agents/skills/course-development/SKILL.md` — add the new skill.
- `commands/develop-course.md` — add the command workflow.
- `registry.md` and platform-native files are generated; update them with `npm run sync`, never by hand.

After canonical changes, follow the repository guide: run `npm ci` when needed, then `npm run sync` and `npm run check`.

## Scaffolding acceptance criteria

- The workflow distinguishes the three learner tracks and their source inputs.
- It applies one shared process while adapting planning and materials to the specified learners.
- It produces a course outline, lesson-aligned learning materials, and a mapped video recording plan.
- It preserves source requirements, identifies material conflicts, and does not invent standards or learner information.
- It clearly assigns coordination to `prof-vahveh` and materials production to `content-creator`.
- It leaves student-work evaluation as a separate, optional use of `student-assessment`.
- Canonical files are updated and generated files pass `npm run check` after synchronization.
