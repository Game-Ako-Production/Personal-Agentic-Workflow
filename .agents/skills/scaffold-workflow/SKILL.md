---
name: scaffold-workflow
description: Scaffold or update connected AI agents, subagents, skills, and commands from a workflow brief. Use when asked to design or maintain reusable agent workflows in this repository.
---

# Scaffold Workflow

Use this skill as the Codex-native entry point for the shared scaffold workflow.

Read and execute `commands/scaffold-workflow.md` as the single source of truth. Treat the user's request and conversation as the workflow brief. Accept the optional selectors `all=true`, `agent=true`, `skill=true`, and `command=true`; when omitted, scaffold all component types. Read the required templates in `instructions/` and platform conventions in `instructions.md`. Leave existing files unchanged when the brief adds no information.

Codex does not support project-scoped slash command files in this repository. Do not create `.codex/commands/` files; use this skill when the user asks to scaffold a workflow.
