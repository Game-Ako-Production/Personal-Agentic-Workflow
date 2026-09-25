---
description: Scaffold selected agents, subagents, skills, and commands from a workflow brief
---

Read and execute the canonical workflow in `commands/scaffold-workflow.md`. Parse an optional leading component selector (`all=true`, `agent=true`, `skill=true`, or `command=true`) from `${input:brief:Optional selector and workflow brief}`; use the remaining text and surrounding conversation as the brief. When no selector is supplied, default to all component types. Read the templates in `instructions/` and use `AGENTS.md` plus platform-native examples for repository conventions. Leave existing files unchanged when the brief adds no information.