# Workflow Improvement Plan

**Status:** All four phases implemented.  
**Basis:** `workflow-map.md` and the agreed improvement decisions.  
**Primary objectives:** Improve portability across models and harnesses, clarify domain boundaries while reusing common capabilities, and provide private, pluggable user memory.

## Guiding principles

1. **Portable canonical sources:** Keep workflow configuration in readable, version-controlled Markdown and YAML wherever possible.
2. **Shared method, distinct domain identity:** Reuse common processes through shared skills while keeping each domain's audience, voice, platform rules, and scope in its own context.
3. **Private memory as data:** Store user-specific memory separately from tracked workflow configuration. Make it possible to export, compact, and import memory across models and harnesses.
4. **Additive before refactoring:** Establish memory and portability foundations before merging skills or changing agent ownership.
5. **Human control:** Never publish, export, import, delete, or perform other sensitive actions without the required explicit user request and authorization.
6. **Keep domain packs deferred:** Retain the current type-based source layout for now. Reconsider physical per-domain packaging only if Arohbi later identifies a concrete need to move complete domains between repositories.

## Decisions already made

| Topic | Decision |
| --- | --- |
| Memory location | Use a root-level `memory/` directory that is ignored by Git. |
| Memory content | Curated durable facts plus optional session notes that can be compacted. |
| Memory command | One `/memory` command with subactions; document its usage when implementation is complete. |
| Memory export | Plain portable bundle; no encryption required. |
| Content skill overlap | Common content/article/script/social writing methods are shared across ADP and Game Ako; each domain context supplies its audience and voice. ADP publishing remains separate. |
| Agentic Developer PH leadership | Create a dedicated `adp-orchestrator` agent. Prof. Vahveh returns to teaching-focused coordination. **Implemented in Phase C.** |
| Frozen platforms | Remove the Gemini CLI and GitHub Copilot configurations only after backup and an explicit implementation call. Phase B found their trees in `personal-workflow-backup.zip`; no live copies existed in the working tree or Git index, so their frozen registry entries were removed and the archive was left intact. |
| Physical domain packs | Defer. Do not reorganize the repository into per-domain source folders in this plan. |

## Phase A — Pluggable private memory

### Objective

Allow the workflow to remember Arohbi across model and harness changes, while keeping personal memory untracked and locally controlled.

### Proposed storage layout

```text
memory/                         # local-only; ignored by Git
  MEMORY.md                     # index, schema version, file map, compaction metadata
  profile.md                    # stable identity, preferences, defaults
  domains/
    personal.md
    game-ako.md
    teaching.md
    ...                         # add only as needed
  sessions/                     # optional short-term/raw notes
  archive/                      # dated pre-compaction snapshots
  exports/                      # user-requested portable bundles
```

The exact layout may be adjusted during implementation, but user data must remain outside tracked files. Keep tracked documentation and schemas separate from private memory contents.

### Tracked memory documentation and schema

Create a tracked `context/memory.md` that documents:

- supported memory files and schema/version expectations;
- what may be remembered, such as user-approved durable preferences and project context;
- what must not be stored, including credentials/secrets and unnecessary private information about other people;
- how to record dates, provenance, confidence or uncertainty, and domain/category;
- how memory may be updated, corrected, forgotten, compacted, exported, and imported;
- how to distinguish a stored fact from an inference, and how agents should identify when they rely on memory.

Use a compact, reviewable format that works with plain text and ordinary version-control/diff tools. Memory should be updated intentionally rather than silently turning every conversation into permanent storage.

### `/memory` command

Create one documented command with these subactions:

| Subaction | Intended behavior |
| --- | --- |
| `remember <fact>` | Identify an appropriate category and append a dated, attributable memory entry. Clarify before storing sensitive or ambiguous information. |
| `recall [topic]` | Search the available memory and report relevant stored entries and their source/location. Do not invent missing memories. |
| `forget <item>` | Locate and remove or mark the specified entry according to the documented policy; confirm ambiguous matches before changing data. |
| `compact` | Summarize eligible session notes into curated domain/profile memory, remove duplication, preserve provenance, and archive the pre-compaction state. |
| `export` | Create a user-requested portable bundle in the ignored export area. Do not upload or transmit it. |
| `import <path>` | Read a user-provided bundle, validate its format, preview additions/conflicts, and import only after the user approves material changes. |

The command documentation must include examples, privacy behavior, error cases, and the steps for transferring memory to another model/harness.

### Agent and generator integration

- Give Asurada and appropriate domain leads access to the memory index/profile and rules.
- Pass only relevant memory excerpts to specialist subagents; avoid injecting the entire memory corpus into every task.
- **Implemented design:** do not statically include any memory data. Include only tracked `context/memory.md` rules; agents read private memory files at runtime. This avoids the complexity of optional includes and prevents private data from being embedded in checked-in generated prompts.
- Do not let a missing private memory file break `npm run sync` or `npm run check`.
- Ensure no generated platform file accidentally embeds private memory.

### Privacy and portability requirements

- Add `memory/` and its export/archive descendants to ignore rules as appropriate; ensure the ignore is effective for all memory data.
- Confirm with Git status/checks that memory files are not tracked.
- Export only on explicit request; never automatically upload, share, or include memory in a public artifact.
- Keep bundles plain and portable. Do not add encryption in this phase.
- Define a versioned, platform-neutral bundle format that another harness can inspect and import without this repository's runtime.

### Acceptance criteria

- A fresh clone with no `memory/` directory passes workflow generation and validation.
- Local memory files remain untracked.
- The memory format and export bundle are readable without a specific model or harness.
- Export/import can preserve data and reveal conflicts before changing existing memory.
- `/memory` behavior, syntax, privacy rules, and transfer procedure are documented.

## Phase B — Portability hardening

### Objective

Make platform assumptions visible, reduce machine-specific dependencies, and ensure managed outputs can be regenerated and validated on a clean environment.

**Implementation status:** Contract, hygiene checks, line-ending policy, clean-checkout validation, and frozen-target registry cleanup are complete. No CI workflow or release convention existed, so CI and a changelog/versioning policy were deferred. No live Gemini/Copilot trees existed to delete; their backup archive remains untouched.

### Planned work

1. **Portability contract:** Document canonical metadata, include behavior, skills, commands, delegation, permissions, and generated outputs. State which features are common and which are platform-specific.
2. **Frozen-platform removal:** After Arohbi confirms a backup and separately calls for implementation, remove the frozen Gemini CLI and GitHub Copilot configurations as agreed. Do not remove them as part of planning or before the backup confirmation.
3. **Versioning and change history:** Add a workflow-level change history/release approach if it remains useful after inspecting existing repository conventions. Avoid imposing semantic versioning without confirming how releases will be consumed.
4. **Automated validation:** Ensure canonical validation and generated-file checks can run in CI, if CI exists or is approved for addition.
5. **Canonical hygiene:** Check for accidental absolute machine paths and secrets in tracked canonical sources; add consistent line-ending behavior for cross-platform edits.
6. **Clean-clone validation:** Verify documented setup and generation on a clean checkout, including behavior when private memory is absent.

### Acceptance criteria

- The supported portability contract is documented and matches actual generator behavior.
- A clean environment can install dependencies, regenerate managed outputs, and pass checks without manual edits to generated files.
- Private local data is not required for validation and does not leak into tracked/generated files.
- Frozen platform files are untouched until the backup and later implementation authorization are confirmed.

## Phase C — Domain separation and shared capabilities

### Objective

Reduce duplicated content-production methods without collapsing the distinct identities and audience needs of Game Ako and Agentic Developer PH.

**Implementation status:** ADP now has a dedicated orchestrator and context file. Shared content/article/script/social writing skills serve both ADP and Game Ako; platform publishing remains a separate ADP-only workflow. Prof. Vahveh is teaching-focused. Static validation passes. Routing cases were added; the CLI-based model evaluation was incomplete outside the OpenCode host (one case passed, one timed out, and two exited without a routing action; direct CLI calls returned the free-tier 403 restriction). Rerun those cases in an authorized OpenCode session. Game Ako's actual CMS metadata schema, affiliate/sponsorship policy, and standard YouTube links remain unresolved and were not invented.

### Shared capability model

- Keep the existing type-based source layout; do not create physical domain packs in this phase.
- Add a logical `shared` domain only if the generator and registry need an explicit owner for reusable skills. Otherwise represent shared skills with a documented ownership/convention that does not distort domain leads or artifact locations.
- Keep domain context separate. Game Ako already has `context/game-ako.md`; create `context/adp.md` for ADP audience, language defaults, platforms, brand facts, and publication rules. Add teaching context only if real duplicated/implicit requirements warrant it.
- Keep domain-specific artifact folders and publication boundaries.

### Skill refactor candidates

| Current capabilities | Planned direction |
| --- | --- |
| `adp-content-writing` and `article-writing` | **Implemented:** replaced the ADP-specific writing method with shared `content-writing`; generalized `article-writing` as a shared format skill. Domain contexts preserve output differences and review rules. |
| `adp-social-media-posting` and `social-post-writing` | **Implemented:** `social-post-writing` is shared drafting/adaptation guidance; `adp-social-media-posting` is ADP-only authorized publishing. |
| `long-form-scriptwriting` and `short-form-scriptwriting` | **Implemented:** generalized for supported domains; each domain's context supplies audience, voice, platform, and format requirements. |
| `gaming-trend`, `ai-trend-tracker`, `lesson-planning`, `student-assessment`, `game-guide-expert` | Keep domain-specific. Consider a small shared research-method reference only if it removes real duplication without blurring their distinct scope and evidence rules. |

The merge should be based on a comparison of the full skill instructions and their routing/evaluation cases. Preserve named skills or aliases where platform triggers or backward compatibility require them; do not merge solely to reduce file count.

### ADP leadership and context

- Create `adp-orchestrator` as the Agentic Developer PH domain lead.
- Update routing and delegation so ADP work goes through the new lead and the ADP content worker as appropriate.
- Return Prof. Vahveh to teaching-focused responsibilities and keep teaching workflows/artifacts separate.
- Create `context/adp.md` as the source of truth for ADP-specific audience, language, platforms, editorial boundaries, and publishing constraints. Do not invent missing channel facts; record unknowns as open questions.

### Known setup items to resolve

During this phase, review the placeholders in `context/game-ako.md`:

- standard YouTube description links/disclaimer;
- Next.js blog metadata schema;
- affiliate and sponsorship policy.

Ask Arohbi for the missing authoritative details. Do not fill these with invented values or treat the phase as authorization to publish.

### Safety and validation

- Add or update routing cases before changing triggers or merging skill descriptions.
- Run the repository's validator and relevant routing evaluation after each logical change.
- Compare generated registry/delegation output with the intended ownership and handoffs.
- Confirm publication, student-data, source-citation, language, and privacy boundaries remain intact.

### Acceptance criteria

- ADP has an explicit lead and context source; Prof. Vahveh's teaching role is clear.
- Shared skills describe reusable methods, while each domain's facts and constraints remain domain-owned.
- No accidental change to publication authority or claims standards occurs during skill consolidation.
- Routing and generator checks pass, with no unintended orphaned agents, commands, or skills.

## Phase D — Efficiency and maintenance audit

### Objective

Reduce unnecessary prompt/context load and decide what to do with installed capabilities that are not connected to active workflows.

**Implementation status:** Audit complete. Prompt sizes were measured (not assumed from file counts) on representative tasks, comparing the pre-Phase-A commit (`a63a4e9`, extracted with `git archive`) with the post-Phase-C and post-Phase-D trees; per-agent prompt sizes come from the generator's own `agentPrompt` assembly. Game Ako domain context was split so subagents include only task-relevant conventions; memory passing to subagents was verified as already excerpt-only by design; all three unmapped skills were retained as manually invoked after Arohbi confirmed the disposition; the agents/commands review found no orphaned routes, harmful duplicates, or excessive handoffs; `/latest-in-ai` gained explicit completion criteria; the routing suite now covers the teaching domain and the eval harness counts a direct `SKILL.md` read as a skill routing action. Live eval: all teaching cases and `route-adp-content` pass; `adp-content-draft` and `adp-social-publish` are still blocked by the OpenCode free-tier 403 on direct CLI calls (the same environmental limit Phase C recorded) and should be rerun when quota is available.

**Prompt measurements (characters; roughly 4 per token):**

| Agent prompt | Pre-Phase A | Post-Phase C | Post-Phase D | Main drivers |
| --- | --- | --- | --- | --- |
| `asurada` | 8,601 | 13,283 | 13,283 | A: memory policy include (+3.7k), memory routing lines |
| `ga-orchestrator` | 11,296 | 16,849 | 17,736 | A: memory include; C: placeholder blocks; D: +0.9k satellite headers (it reviews all conventions) |
| `scriptwriter` | 9,703 | 11,945 | 10,271 | D: blog conventions no longer included (−14%) |
| `game-content-writer` | 9,128 | 11,313 | 11,185 | D: YouTube conventions no longer included (−1%; it keeps the blog file) |
| `gaming-trend-scout` | 9,025 | 10,847 | 8,153 | D: conventions split (−25%; now below its pre-A size) |
| `content-strategist` | 8,563 | 10,385 | 7,691 | D: conventions split (−26%) |
| `social-post-writer` | 8,487 | 10,716 | 8,022 | D: conventions split (−25%) |
| `adp-orchestrator` | — | 12,727 | 12,727 | C: new lead with ADP context |
| `adp-content-creator` | 5,145 | 8,152 | 8,152 | C: ADP context + shared writing skills |
| `prof-vahveh` | 8,322 | 9,609 | 9,609 | A: memory include; C: ADP duties removed (body 3,943 → 2,320) |
| `game-guide` | 4,599 | 8,330 | 8,330 | A: memory include (domain lead; mid-session play facts are plausible memory) |
| `content-creator` | 4,406 | 4,406 | 4,406 | unchanged |
| **Total prompt surface** | **87,275** | **128,562** | **119,565** | A/C growth was memory + ADP + placeholders; D removed task-irrelevant conventions |
| Skill catalog (per-session discovery cost, 22 skills) | 5,727 | 6,086 | 6,086 | A/C: memory + shared writing skills |

Representative task loads after Phase D: a front-door session carries Asurada's prompt (13.3k) + skill catalog (6.1k) + `AGENTS.md` (3.8k) ≈ 23k chars before harness overhead. A Game Ako package spawns the orchestrator (17.7k) plus workers of 7.7–11.2k, with skill bodies loaded only on demand (for example `content-writing` 2.5k, `gaming-trend` 4.2k). A memory recall reads the `memory-management` skill (4.7k) plus runtime memory files (~1–3k); private memory is never in any prompt. Kept deliberately: `context/memory.md` in the front door and the four domain leads (Phase A policy; runtime memory files are small), `context/artifacts.md` in all 12 agents (2.1k; any agent can be asked to save), and Asurada's full delegation list (needed for routing).

**Unmapped-skill decisions (confirmed with Arohbi):** all three remain installed and manually invoked, unconnected to managed workflows. `create-agentsmd` serves other repositories (this repo's `AGENTS.md` is hand-maintained); `frontend-design` is general engineering/design capability with no owning domain; `professional-proofreader` is used manually, and its file mode's `UPDATED_` filename prefix conflicts with `context/artifacts.md`, so it stays out of managed workflows unless a future integration resolves that conflict. Combined discovery cost: ~500 catalog characters.

### Planned review

- Measure representative prompt/context sizes before and after the shared-skill and memory changes.
- Pass only task-relevant user memory and domain context to subagents.
- Review installed but unmapped skills (`create-agentsmd`, `frontend-design`, `professional-proofreader`) and decide individually whether to connect, retain as manually invoked, or uninstall through the supported installer.
- Review agents and commands for unused routes, duplicate responsibilities, excessive handoffs, and unclear completion criteria.
- Use evaluation results and Arohbi's experience rather than adding agents or metrics speculatively.

### Acceptance criteria

- Any removals or integrations have an explicit rationale and preserve useful standalone capabilities.
- Prompt efficiency is assessed on representative tasks rather than assumed from file count.
- The routing/evaluation suite covers important front-door, domain, memory, and content workflows.

## Recommended order and dependencies

| Order | Work | Dependency / reason |
| --- | --- | --- |
| 1 | Confirm implementation scope and inspect existing generators, tests, ignores, and platform files. | This document is planning-only; execution requires a later explicit call. Confirm the Gemini/Copilot backup before their removal. |
| 2 | Phase A: memory schema, ignore/privacy behavior, command, and optional integration. | Establish cross-harness continuity before broader refactoring; test with no local memory present. |
| 3 | Phase B: portability contract and hygiene; address frozen platforms only after backup confirmation. | Makes platform assumptions explicit and protects subsequent changes. |
| 4 | Add/update routing evaluations for content-domain behavior and ADP ownership. | Establish regression coverage before restructuring. |
| 5 | Phase C: ADP orchestrator/context and carefully staged shared-skill changes. | Preserve domain separation while consolidating common methods. |
| 6 | Phase D: efficiency and orphaned-skill review. | Use the new architecture and evaluation evidence to make measured decisions. |

Each phase should have a bounded implementation scope and its own validation. Do not combine deletion of frozen platform files with unrelated refactors in a way that makes failures hard to diagnose.

## Deferred: physical domain packs

Per-domain physical packs (for example, placing all Game Ako agents, commands, skills, and context under `domains/game-ako/`) are **deferred**. The current layout groups files by type and uses domain metadata for logical ownership. Shared skills plus domain context are expected to address the immediate overlap concern with less generator churn.

Revisit domain packs only if Arohbi has a concrete requirement to copy, install, or maintain whole domains independently across repositories. Before then, do not migrate canonical files into a new directory hierarchy.

## Explicit non-goals until separately requested

- Keep `personal-workflow-backup.zip` intact. Do not recreate Gemini/Copilot platform files unless they are deliberately added back to the managed contract.
- Do not track or commit user memory.
- Do not encrypt, upload, or automatically export memory.
- Do not invent user profile details, ADP facts, Game Ako metadata, policies, metrics, or publication links.
- Do not create physical domain packs in this implementation plan.
- Do not publish or schedule content as a side effect of workflow changes.
