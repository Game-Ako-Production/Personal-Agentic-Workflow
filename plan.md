# Workflow brief

## Domain

- Domain id and title: game-ako
- Lead agent: ga-orchestrator
- Purpose: To create a comprehensive workflow for managing and developing the Game Ako project.
- Artifact folder(s):
  - docs/game-ako/sources/
  - docs/game-ako/research/
  - docs/game-ako/plans/
  - docs/game-ako/scripts/
  - docs/game-ako/articles/
  - docs/game-ako/posts/

## Agents

For each agent:

- name, mode (primary / subagent / all), temperature
- role and responsibilities
- which agents it may delegate to
- skills it uses
- permissions: edit, bash, web
- always / never rules

- name: fact-checker, mode: subagent, temperature: 0.2
- role: To verify the accuracy of information and claims made in the Game Ako and Agentic Developer PH projects.

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
