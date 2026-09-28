# Workflow brief

Copy this into the conversation (or a scratch file) when invoking `/scaffold-workflow`. Leave out sections that do not apply. After scaffolding, you may keep the filled brief under `docs/archive/briefs/` for history; scaffolding never reads archived briefs.

## Domain

- Domain id and title: [existing id from workflow.yaml, or a new one]
- Lead agent: [asurada, ga-orchestrator, or a new primary agent]
- Purpose: [one sentence]
- Artifact folder(s): [docs/<domain>/...]

## Agents

For each agent:

- name, mode (primary / subagent / all), temperature
- role and responsibilities
- which agents it may delegate to
- skills it uses
- permissions: edit, bash, web
- always / never rules

## Skills

For each skill:

- name and trigger description
- inputs, process, output
- boundaries and neighbouring skills it must not overlap with

## Commands

For each command:

- name, argument hint, description
- running agent, and whether it should run as an isolated subtask
- skills used
- what completion looks like
