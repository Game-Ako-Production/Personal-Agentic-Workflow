# Memory rules and schema

Arohbi's private, portable memory. It lets the workflow remember him across models and harnesses while keeping his data local and untracked. The `/memory` command (`commands/memory.md`) is the interface; the `memory-management` skill holds the procedures. This file is the policy and schema both follow.

## Storage

Memory lives in `memory/` at the repository root. The directory is gitignored: never commit it, and never add memory files to an agent's `includes`, because includes are inlined into the generated platform files, which are tracked in git.

Layout:

| Path | Content |
| --- | --- |
| `memory/MEMORY.md` | Index: schema version, file map, compaction log |
| `memory/profile.md` | Stable identity, preferences, and defaults. Changes only on explicit request. |
| `memory/domains/` | Durable facts per domain, one file per domain id (`memory/domains/<domain-id>.md`) |
| `memory/sessions/` | Optional short-term notes awaiting compaction |
| `memory/archive/` | Pre-compaction snapshots |
| `memory/exports/` | Portable bundles created by `/memory export` |

When `memory/` does not exist (fresh clone or new harness), there is simply no memory yet: say so when asked, and bootstrap the layout on the first write.

## Entry format

Memory entries are Markdown list items, appended at the bottom of the relevant section:

```markdown
- YYYY-MM-DD [category] statement (source: ...)
```

Categories: `preference`, `fact`, `project`, `person`, `goal`, `decision`, `correction`. The source is `user` when Arohbi stated it, or `inference` with a short note when derived. Mark uncertain entries with `(uncertain)`.

The schema version lives in `memory/MEMORY.md` frontmatter (`schema: 1`). Bump it when the layout or entry format changes, and note the migration in the compaction log.

## What may be stored

- Preferences, defaults, and workflow choices Arohbi states or confirms.
- Durable project context he asks to keep.
- Goals, decisions, and corrections he wants persisted.

## What must not be stored

- Credentials, tokens, secrets, or anything he asks to keep out.
- Private details about other people beyond what a task requires.
- Transient chatter; use `memory/sessions/` for unfiltered notes and compact later.

## Using memory

- Read memory files at runtime with file tools; they are never in the prompt automatically.
- The front door and domain leads read `memory/MEMORY.md` and `memory/profile.md` when memory may matter; read a domain file only when relevant to the request. Subagents receive memory excerpts inside their delegation brief, never the whole store.
- Label memory-based statements ("from memory: ...") so Arohbi can correct them.
- When Arohbi says "remember", "recall", or "forget", or asks what the workflow knows about him, follow the `/memory` workflow in `commands/memory.md`.
- Memory updates are intentional: store only what he asks to remember or explicitly confirms is worth keeping. Ask one focused question when a fact is sensitive or its destination is ambiguous.

## Compaction, export, import

- Compaction summarizes `memory/sessions/` notes into `memory/domains/` or `memory/profile.md`, deduplicates, snapshots the prior state into `memory/archive/`, and logs the run in `memory/MEMORY.md`.
- Export copies the store (excluding `memory/archive/`) plus a manifest into a dated bundle under `memory/exports/`. Bundles are plain Markdown and portable across models and harnesses; never upload or transmit them.
- Import validates a bundle's schema, previews additions and conflicts, and applies changes only after Arohbi approves them.

Procedures for each operation are in the `memory-management` skill.
