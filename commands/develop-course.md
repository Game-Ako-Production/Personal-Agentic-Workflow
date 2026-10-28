---
name: develop-course
description: Build a course outline, lesson-aligned learning materials, and a video recording plan for a specified learner track.
argument-hint: "<college|1-on-1|short-course> [brief]"
domain: teaching
agent: prof-vahveh
subtask: false
skills:
  - course-development
  - lesson-planning
  - content-creation
codex: wrapper
targets: [opencode, claude, codex]
---

# Develop a Course

Create a coordinated course package from the learner track and source material in `$ARGUMENTS` and the surrounding request. Support the `college`, `1-on-1`, and `short-course` tracks.

## Workflow

1. **Parse the brief.** Identify the learner track, source materials, learner context, desired outcomes, course duration or lesson count, delivery constraints, and video preferences. Read any supplied syllabus or brief files. If the track is missing and cannot be inferred, ask one focused question.
2. **Apply track-specific intake.** For `college`, use the school syllabus as the primary source. For `1-on-1`, use Arohbi's supplied input as the course source. For `short-course`, use both the syllabus and Arohbi's input; preserve syllabus requirements and ask how to resolve material conflicts when the brief does not establish precedence.
3. **Develop the package.** Use `course-development` for source analysis, course outcomes, sequencing, course outline, video plan, and package coordination. Use `lesson-planning` for lesson structure. Delegate learner-facing materials to `content-creator` with `content-creation`, passing the complete brief and relevant lesson plans.
4. **Review.** Check source fidelity, learner fit, outcome coverage, and consistency between the outline, lesson plans, materials, and video plan. Flag uncovered syllabus requirements, material conflicts, and assumptions.
5. **Return.** Provide the course outline, lesson-aligned learning materials, and mapped video recording plan. Keep the result on screen unless saving is requested; when saving, follow `context/artifacts.md` and use `docs/teaching/`.

## Error handling

- If a required source is referenced but unavailable, identify it and ask for the file or pasted content before claiming source alignment.
- If the syllabus and Arohbi's input materially conflict, ask which should take precedence unless the brief resolves it.
- If `content-creator` is unavailable, state that materials were not delegated and prepare only what can be completed with the available workflow. Never claim a delegation succeeded when it did not.
- Preserve the existing English-only teaching output requirement.

## Completion criteria

- The learner track and source basis are explicit.
- A course outline, lesson-aligned learning materials, and a lesson-mapped video recording plan are provided.
- Material assumptions, source conflicts, and uncovered requirements are stated.
- All parts are checked for alignment with supplied outcomes and source requirements.
