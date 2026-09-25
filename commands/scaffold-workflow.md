# Scaffold an Agentic Workflow

Use this workflow to turn a user's brief into a connected set of primary agents, subagents, skills, and commands across the platforms supported by the repository.

## Usage

`/scaffold-workflow [all=true|agent=true|skill=true|command=true] <workflow brief>`

Treat the invocation text and surrounding conversation as the requirements. The brief can describe one or more agents, subagents, skills, commands, their responsibilities, and how they should work together. Agent selection includes both primary agents and subagents.

### Component parameters

Parse the leading component selectors before interpreting the rest as the workflow brief:

- `all=true`: scaffold agents, subagents, skills, and commands.
- `agent=true`: scaffold primary agents and subagents only.
- `skill=true`: scaffold skills only.
- `command=true`: scaffold commands only.

When one or more individual selectors are true, scaffold only those component types. `all=true` takes precedence over individual selectors. Omitted selectors default to `all=true`. Accept only literal `true` or `false`; if a supplied selector has another value, explain the accepted values and ask for a corrected invocation. If the selected component has no usable specifications in the brief or conversation, ask focused questions for that component before writing files. Do not create unselected component types, even when they are mentioned as dependencies; reference an existing dependency if available and report any missing dependency.

## Workflow

### 1. Read the source material

From the repository root, read:

1. `AGENTS.md` and `instructions.md` for repository conventions and supported platform standards.
2. `instructions/create-agent.md`, `instructions/create-skill.md`, and `instructions/create-command.md` for the entity templates.
3. `docs/images/Agentic Workflow Relationships.jpg` for the intended relationships. Interpret it as an AI agent invoking a creation skill; that skill creates agents, commands, and skills; agents and commands use skills to do work; skills can generate artifacts in `docs/`, whose results may inform the agent workflow.
4. Relevant existing canonical files and platform-native examples before editing, so generated files match established formats.

Treat the template files as the required structure for capturing each entity's details. Treat `instructions.md` as the common requirements for generated entities, including platform support, native locations, and idempotent updates.

### 2. Resolve the requested design

Extract the requested entity names, purpose, descriptions, responsibilities, inputs, outputs, constraints, dependencies, and platform targets. Classify each agent as a primary agent or subagent, and map which agent invokes each skill or command and what artifact each skill can produce.

Do not invent missing requirements that materially change behavior, permissions, publication, or data handling. If the brief lacks details needed to produce a coherent entity, ask focused questions about only those gaps before writing files. Use reasonable defaults for routine metadata and state them in the completion summary.

If the request names an existing entity, inspect its canonical and native files first. Follow the idempotency rule in `instructions.md`: create missing files and update existing files in place only when the brief adds or changes information. Compare the requested details with the current content before editing. Preserve existing information not superseded by the user, unrelated content, and local conventions. If a repeat invocation adds no information and requests no changes, leave the files byte-for-byte unchanged and report that no update was needed. Do not reformat or rewrite equivalent content just to match a preferred phrasing.

### 3. Design the dependency flow

Plan the workflow before generating files:

1. Define primary agents as user-facing coordinators and subagents as focused workers with a clear parent or caller.
2. Define reusable skills for repeatable capabilities, including their activation criteria, inputs, process, output, and boundaries.
3. Define commands as user- or agent-invoked workflows that call the appropriate agent and/or skill. Keep canonical workflow instructions in `commands/`; make native command or prompt files concise entry points that route to the canonical file where the platform supports them.
4. Connect the entities explicitly. Avoid orphaned skills, commands with no execution target, and subagents with no caller unless the brief explicitly requests standalone entities.
5. Record artifact destinations and feedback paths where relevant. Never publish, send, or share generated artifacts unless explicitly requested.

### 4. Generate canonical and native files

Use the paths and formats specified by `instructions.md` and the existing repository examples. Create parent directories as needed. Keep shared instructions canonical and platform wrappers short; do not create a platform command format the repository instructions say the platform cannot discover. For this repository's supported native entry points, use `.claude/commands/` for Claude, `.gemini/commands/` for Gemini, `.github/prompts/` for GitHub Copilot, `.opencode/commands/` for OpenCode, and `.agents/skills/<skill-name>/SKILL.md` for Codex-discoverable skills. Codex has no project-scoped custom command folder: when exposing a canonical command workflow to Codex, create a small skill wrapper that routes to `commands/<name>.md`; never create `.codex/commands/`.

For each agent or subagent, use this exact structure as the canonical role and behavior template, filling every field from the brief and asking about material gaps instead of inventing them:

```markdown
# Role & Identity

You are [Agent Name], a specialized AI assistant designed to [core objective/function].

# About the User / Context

- Target Audience/User: [Role, team, or customer type]
- Operating Environment: [Connected tools, databases, or platforms]

# Standing Rules (Always / Never)

- ALWAYS: [e.g., Verify data against the knowledge base before answering; cite sources for every factual claim.]
- NEVER: [e.g., Guess missing numbers; execute destructive database actions without explicit human approval.]

# Tone & Format Preferences

- Tone: [e.g., Professional, concise, objective]
- Output Format: [e.g., Markdown-structured bullets, JSON for API handoffs]

# Error Handling & Escalation

- If a request is ambiguous, ask 1 clarifying question.
- If a task exceeds your capabilities or requires authorization, trigger a Human-in-the-Loop escalation.
```

Use `instructions/create-agent.md` as the repository's requirements input for agent details, but organize the generated role instructions using the structure above. Add platform-required metadata (such as name, description, mode, model, or permissions) in native frontmatter or configuration outside this role template; do not remove or rename the template sections. Preserve the stated one-question ambiguity rule and human escalation rule unless the user explicitly supplies replacements. Generate native agent definitions for the selected supported platforms.

For each selected skill, follow `instructions/create-skill.md` and the platform standards in `instructions.md`. Include a precise description of when to use it, required inputs, steps, output expectations, safety boundaries, and its relationships to agents, commands, and artifacts.

For each selected command, follow `instructions/create-command.md`. Include concise frontmatter or native metadata, an argument hint when needed, ordered executable steps, target agent/skill, error handling, and completion criteria. Put reusable workflow details in the canonical `commands/<name>.md` file and route native command entry points to it when appropriate.

### 5. Review the result

Read every created or updated file. Confirm that:

- Names, descriptions, and references agree across canonical and native files.
- Each selected and requested agent, subagent, skill, and command has been accounted for; unselected component types were not created.
- Native file formats and paths match `instructions.md` and repository examples.
- Commands point to real canonical workflows; workflow dependencies point to real agents and skills.
- Existing unrelated content and files are preserved, and no duplicate files were created.
- Existing files were changed only where the brief supplied new or changed information; identical repeat runs produced no file changes.
- Artifact paths, permissions, and publication boundaries match the brief.

If a reference or format cannot be satisfied, do not fabricate a substitute. Report the exact gap and finish all unaffected work.

## Completion response

Summarize the workflow created, how its agents, skills, and commands connect, and list the canonical and platform-native files created or updated. Mention any assumptions or unresolved platform limitations. Do not claim that generated commands were executed or artifacts produced during scaffolding.
