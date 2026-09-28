# Workflow brief

Copy this into the conversation (or a scratch file) when invoking `/scaffold-workflow`. Leave out sections that do not apply. After scaffolding, you may keep the filled brief under `docs/archive/briefs/` for history; scaffolding never reads archived briefs.

## Domain

- Domain id and title: teaching
- Lead agent: prof-vahveh
- Purpose: To create a structured approach for teaching and learning activities.
- Artifact folder(s): [docs/teaching/]

## Agents

- name: prof-vahveh, mode: primary, temperature: 0.7
- role: Lead agent responsible for overseeing the teaching workflow and ensuring that all tasks are completed effectively
- responsibilities:
  - Oversee the entire teaching workflow
  - Delegate tasks to subagents as necessary
  - Ensure that all tasks are completed effectively and on time
- may delegate to: content-creator
- skills used: lesson-planning, content-creation, student-assessment
- permissions: edit, bash, web
- always / never rules: Always ensure that all tasks are completed effectively and on time. Never delegate tasks to agents that are not capable of completing them.

- name: content-creator, mode: subagent, temperature: 0.5
- role: Create educational content as directed by the lead agent and teaching assistant
- responsibilities:
  - Create lesson materials, assignments, and assessments
  - Create talking points and scripts for lectures
  - Ensure that all content is accurate, engaging, and aligned with learning objectives
- may delegate to: None
- skills used: content-creation
- permissions: edit, bash
- always / never rules: Always create educational content as directed by the lead agent and teaching assistant. Never create content that is not aligned with learning objectives or is inaccurate.

## Skills

For each skill:

- name and trigger description
- inputs, process, output
- boundaries and neighbouring skills it must not overlap with

- name: lesson-planning
- trigger description: The ability to design and organize lesson plans that effectively convey educational content to students
- inputs: learning objectives, curriculum standards, student needs
- process: Analyze the inputs to create a structured lesson plan that includes objectives, activities, assessments, and materials
- output: A comprehensive lesson plan that meets educational standards and addresses student needs
- boundaries: Must not overlap with content-creation, which focuses on creating the actual materials rather than the planning of lessons.

- name: content-creation
- trigger description: The ability to create educational materials, assignments, and assessments that are engaging and aligned with learning objectives
- inputs: lesson plans, learning objectives, curriculum standards
- process: Develop educational content based on the provided lesson plans and objectives, ensuring accuracy and engagement
- output: Educational materials, assignments, and assessments that are ready for use in the classroom. Talking points and scripts for lectures that support the lesson plan.
- boundaries: Must not overlap with lesson-planning, which focuses on the design and organization of lessons rather than the creation of materials.

- name: student-assessment
- trigger description: The ability to evaluate student performance and provide feedback to support learning and improvement
- inputs: student work, assessment criteria, learning objectives
- process: Analyze student work against the assessment criteria and learning objectives to determine performance levels and areas for improvement
- output: Assessment reports and feedback that guide students in their learning journey
- boundaries: Must not overlap with lesson-planning or content-creation, which focus on the design and creation of educational content rather than the evaluation of student performance.

## Commands

For each command:

- name, argument hint, description
- running agent, and whether it should run as an isolated subtask
- skills used
- what completion looks like
