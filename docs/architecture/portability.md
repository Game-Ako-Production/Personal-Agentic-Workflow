# Workflow portability contract

This document defines the portable contract for this repository's agent workflow. Canonical workflow behavior is authored once and emitted to the managed platforms; platform-native files are generated adapters, not independent sources of truth.

## Canonical sources

| Concern | Canonical source |
| --- | --- |
| Domains, front door, managed platforms | `workflow.yaml` |
| Agent identity, routing, permissions, shared context references | `agents/<name>.md` |
| Invocable workflows | `commands/<name>.md` |
| Reusable capabilities | `.agents/skills/<name>/SKILL.md` |
| Shared/domain-specific context | `context/*.md` |
| Artifact save conventions | `context/artifacts.md` |

Edit canonical sources only. `npm run sync` emits platform files, `registry.md`, the generated delegation map in `README.md`, and Codex command wrappers. `npm run check` validates canonical relationships and checks generated files for drift. Do not hand-edit generated files.

## Canonical metadata and behavior

### Workflow registry

`workflow.yaml` declares one `front-door` agent, `platforms.managed`, and `domains` with ids, titles, leads, purposes, and optional artifact folders or shared-skill ownership. Every canonical agent and command belongs to a declared domain. Adding a managed harness requires an emitter, validation, documentation, and generated-file checks; adding its name to the registry alone is insufficient.

### Agents

Agent frontmatter uses `name`, `description`, `mode`, optional `temperature`, `domain`, `delegates`, `skills`, `includes`, `permissions`, and `targets`.

- Modes are `primary` (front door/coordinator), `subagent` (focused worker with a caller), and `all` (usable directly and as a delegate).
- Delegation targets are agent names; `*` means any other registered agent.
- Permissions describe edit, shell, and web access. Emitters map them to the nearest native control; exact controls differ by platform.
- Includes are required tracked context files. The generator inlines include contents into emitted agent prompts, and the validator errors if an include is missing. Do not include private or machine-local files. User memory under ignored `memory/` is read at runtime and never statically included.
- `targets` controls which managed platforms receive the agent; when omitted, the generator defaults to all managed platforms.

### Commands

Command frontmatter uses `name`, `description`, optional `argument-hint`, `domain`, optional `agent`, `subtask`, `skills`, `codex`, and `targets`.

- `$ARGUMENTS` is the portable placeholder for user-supplied command text.
- `agent` selects the workflow agent; `subtask: true` requests isolated/forked execution where supported.
- `codex` is `wrapper` (generate a Codex skill wrapper), an existing skill name (that skill routes to the command), or `none`.
- Commands are native commands for OpenCode and Claude Code. Codex has no project-scoped command folder here and uses skills as entry points.

### Skills

Canonical skills follow the Agent Skills format: a `SKILL.md` with `name` and `description`, followed by plain-language instructions. Skills specify activation, inputs, method, output, and boundaries. Domain facts belong in shared/domain context, not duplicated in every reusable skill. Third-party skills are managed separately and must not be edited as first-party sources.

## Managed harness adapters

Current managed platforms are OpenCode, Claude Code, and Codex. The generator maps behavior as follows:

| Canonical concept | OpenCode | Claude Code | Codex |
| --- | --- | --- | --- |
| Agent | `.opencode/agents/*.md` with native mode, permissions, and task delegation | `.claude/agents/*.md` with native tools/skills and agent instructions | `.codex/agents/*.toml` with developer instructions |
| Command | `.opencode/commands/*.md` | `.claude/commands/*.md`; isolated commands use fork context where configured | Existing skill route or generated `.agents/skills/<command>/SKILL.md` wrapper |
| Skill | Reads `.agents/skills/` | First-party skills mirrored to `.claude/skills/` | Reads `.agents/skills/` |
| Domain/registry | Generated `registry.md` and delegation map | Same canonical registry/map; native behavior generated from sources | Same canonical registry/map; native behavior generated from sources |

These adapters preserve declared intent; they do not guarantee identical execution semantics. Tool permissions, agent invocation, isolated contexts, and command UX are platform-specific. Agent instructions must not assume one harness's exact tool names or interaction behavior exists in every other harness. Keep cross-platform requirements in natural-language canonical sources and document unavoidable exceptions here or in the relevant command/agent.

Gemini CLI and GitHub Copilot are not managed targets. Their configurations were absent from the working tree and Git index during the Phase B review; a user-provided backup archive contained the prior trees. They are no longer listed as frozen workflow targets. Do not recreate platform-specific files for them unless a future harness is deliberately added to the managed contract.

## Runtime and clean-checkout contract

- Runtime: Node.js `>=20` (from `package.json`).
- Root dependency: `yaml`; use the lockfile for reproducible installation.
- Clean checkout: run `npm ci`, `npm run sync`, then `npm run check`.
- The ignored `memory/` directory is optional. Its absence must not prevent source loading, generation, or validation. Tracked memory rules live in `context/memory.md`; private data is never emitted into generated prompts.
- Generated outputs are checked into the repository and must match canonical sources after sync.

## Hygiene and safety

`npm run check` scans canonical workflow sources for machine-specific absolute paths (Windows drive paths, UNC paths, and common Unix user/temp/mount roots) and likely credential material (private-key headers, recognizable provider-token formats, and non-placeholder values assigned to common secret fields).

These checks are guardrails, not a complete secret scanner. Do not put secrets in the repository even if a value does not match a pattern. Use environment variables or an appropriate local secret store for credentials; never put them in prompts, examples, memory, or artifacts.

`.gitattributes` normalizes source text line endings to LF while leaving detected binary files unchanged. The privacy boundary is enforced separately by `.gitignore` for `memory/`.

## Governance and known deferrals

- No CI workflow existed when Phase B was reviewed. CI was not introduced; run `npm run check` locally, and add CI only when explicitly approved or when a repository CI convention is established.
- No release/version-consumption convention existed. A semantic-versioned workflow release process and a new changelog are deferred rather than imposed. Git history remains the change history for now.
- Domain packs remain deferred; canonical sources stay grouped by type and linked through registry metadata.
