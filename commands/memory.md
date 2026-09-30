---
name: memory
description: Manage Arohbi's private, portable memory — remember, recall, forget, compact, export, and import
argument-hint: "<remember|recall|forget|compact|export|import> [detail]"
domain: personal
subtask: false
skills:
  - memory-management
codex: memory-management
targets: [opencode, claude, codex]
---

# Memory

Run a memory subaction from `$ARGUMENTS` against Arohbi's private memory store. Any agent may run this workflow. The policy and schema are in `context/memory.md`; the procedures are in the `memory-management` skill.

## Usage

```text
/memory remember "I prefer concise answers with sources"
/memory recall content preferences
/memory forget "the old Facebook follower target"
/memory compact
/memory export
/memory import "path/to/memory-export-2026-09-30"
```

## Workflow

1. **Parse the subaction.** The first word of `$ARGUMENTS` is the subaction: `remember`, `recall`, `forget`, `compact`, `export`, or `import`; the rest is its detail. When the subaction is missing or unclear, ask one focused question.
2. **Load the rules and skill.** Read `context/memory.md` when its policy is not already in context, then follow the `memory-management` skill for the subaction.
3. **Respect privacy.** Store only what Arohbi asked to remember or confirmed is worth keeping. Never store secrets, never commit memory files, and never upload or transmit memory; exports stay local under `memory/exports/`.
4. **Confirm on screen.** Report what changed and where, or present what was recalled with entries labeled as memory.

## Error handling

- When `memory/` does not exist: bootstrap it per the skill before a `remember`; for `recall`, `forget`, or `export`, say that no memory exists yet.
- When an import bundle is invalid or declares a newer schema, stop and report; never partially import.
- When a `forget` or `import` match is ambiguous, show the candidates and let Arohbi decide before changing data.

## Completion criteria

- The requested subaction completed, or a clear blocker was reported.
- Memory files remain inside the gitignored `memory/` directory, and nothing was committed, published, or transmitted.
