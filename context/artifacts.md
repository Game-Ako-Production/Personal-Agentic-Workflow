# Artifact conventions

Shared rules for any saved output. Answer on screen by default. Save a file only when Arohbi explicitly asks, or when a workflow says that invoking it is a save request (for example, `/latest-in-ai`).

## Locations

Save under the repository root (the directory that contains `AGENTS.md`), never relative to an arbitrary subdirectory.

| Domain | Folder | Content |
| --- | --- | --- |
| Personal | `docs/ai-trends/` | AI trend digests |
| Game guide | `docs/games/` | Guides, walkthroughs, checklists |
| Game Ako | `docs/game-ako/sources/` | Source material Arohbi supplies, such as notes and reference articles |
| Game Ako | `docs/game-ako/research/` | Gaming trend briefs |
| Game Ako | `docs/game-ako/plans/` | Content plans |
| Game Ako | `docs/game-ako/scripts/` | Long-form and short-form scripts |
| Game Ako | `docs/game-ako/articles/` | Blog article drafts |
| Game Ako | `docs/game-ako/review/` | Before Waldas game review drafts |
| Game Ako | `docs/game-ako/posts/` | Social post drafts |
| Teaching | `docs/teaching/` | Lesson plans, educational materials, assignments, assessments, and feedback reports |
| Agentic Developer PH | `docs/adp/` | Channel scripts, social posts, and blog articles |


`workflow.yaml` lists the folders owned by each domain. Add new folders there when adding a domain.

## Filenames

1. Use the slug Arohbi supplies; otherwise infer a short one from the topic, and add a date or date range when the content is time-bound (for example, `latest-ai-trends-2026-09-18-to-2026-09-24`).
2. Normalize: lowercase, replace every run of characters other than letters and numbers with one hyphen, and trim leading and trailing hyphens. If the result is empty, infer a slug from the topic.
3. Use only the normalized slug plus `.md` (or `.csv` for tabular data). Never let a supplied value choose a directory, path, or extension.
4. Never overwrite. If the file exists, append `-2`, `-3`, and so on until the name is unused.
5. Report the final path in the response.

## Content

Make each artifact self-contained: its scope and assumptions, date or date range, the content, and direct source links. Do not include secrets or private data Arohbi has not asked to store.






