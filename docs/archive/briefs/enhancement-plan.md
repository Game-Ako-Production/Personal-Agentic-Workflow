# Gaming News Research Enhancement Plan

## Goal

Enhance the existing gaming news research workflow with mandatory, claim-level verification and an explicit verification indicator for every news item. Expand coverage to include the economics, development, policy, and business sides of gaming while retaining all existing coverage.

This document is the plan only. No workflow sources are changed as part of this step.

## Current workflow

The workflow is built from these canonical sources:

- `commands/scout-gaming-trend.md` — invokes and defines the research brief workflow.
- `.agents/skills/gaming-trend/SKILL.md` — defines coverage, research method, and finding format.
- `agents/gaming-trend-scout.md` — defines the research agent's role and behavior.
- `agents/ga-orchestrator.md` — routes current gaming research requests to the scout.

Generated platform files and the registry are maintained by `npm run sync`; they must not be edited directly.

## Proposed scope

### Preserve existing coverage

Keep the current focus on premium console and PC AA/AAA games and the explicit gacha-game exception, including mobile gacha. Retain the existing exclusions for non-gacha mobile gaming, esports, and competitive-scene coverage unless Arohbi explicitly changes the scope.

### Add gaming-industry coverage

Add economics, development, policy, and business reporting as first-class angles within the existing gaming scope. Examples include:

- Market size, sales, pricing, subscriptions, monetization, platform economics, and industry-wide trends.
- Studio and publisher operations, development conditions, production costs, labor, technology, delays, and cancellations.
- Laws, regulation, public policy, platform rules, trade, and other government or institutional decisions affecting games and the industry.
- Mergers, acquisitions, investments, restructuring, financial results, distribution, and other business developments.

These are additional lenses, not replacements for game announcements, launches, updates, and other existing coverage.

## Verification workflow

Make verification a required step before findings are presented:

1. Break each prospective news item into checkable claims; identify the event date separately from the source publication date.
2. Seek the most authoritative available primary evidence, such as official statements, filings, policy text, platform documentation, or original datasets.
3. Corroborate consequential claims with an independent reputable source where available. Do not treat repeated reporting that traces to the same source as independent confirmation.
4. Check that sources support the exact wording, scope, figures, and dates used. Attribute forecasts, estimates, opinions, and company or analyst claims rather than presenting them as established fact.
5. Record conflicts, missing evidence, and meaningful limitations. Do not invent confirmation or imply that a claim was checked when it was not.
6. Give every included news item a visible `Verification` field. Use `✅ Verified` only when the stated verification standard is met; otherwise mark it `⚠️ Not fully verified` and clearly qualify or omit it from the verified-news roundup. Keep unverified claims out of factual wording.

The label must describe the evidence actually checked, not guarantee that a source is infallible. Each item's supporting links should make the verification traceable.

## Planned source changes

1. Update the `gaming-trend` skill to extend its coverage list and research guidance with the new industry angles and the mandatory verification workflow. Revise its per-finding output fields to require the verification indicator, evidence, dates, and sources.
2. Update the scout command to make verification an explicit workflow and completion requirement, broaden its examples and scope language, and require a verification field on every returned item.
3. Update the `gaming-trend-scout` agent description, role, and standing rules so the broadened scope and mandatory verification are enforced in direct as well as command-routed research.
4. Update only the relevant routing language in `ga-orchestrator` so requests about the newly included gaming-industry angles continue to reach the scout.
5. Regenerate and validate all managed platform outputs with the repository's generator; do not hand-edit generated files.

## Validation and acceptance criteria

- Every canonical source describes the added economics, development, policy, and business coverage without removing the existing in-scope coverage or exclusions.
- The command, skill, and agent all require verification before findings are presented.
- Every news item in the output format has a visible verification indicator, and `✅ Verified` is reserved for items meeting the stated evidence standard.
- The verification process distinguishes primary evidence, independent corroboration, attributed claims, event dates, and unresolved uncertainty.
- Orchestrator routing recognizes the expanded scope.
- `npm run sync` completes and `npm run check` passes with generated files current.
- Review sample outputs against: a premium-game launch story, a gaming-business or market story, a policy or regulation story, and a claim with incomplete or conflicting evidence. Confirm the required indicator and caveats appear in each case.

## Out of scope

- Removing or weakening current coverage and exclusions.
- Changing publication, artifact-saving, or approval behavior.
- Adding new tools, dependencies, domains, or platform targets.
- Editing generated files by hand.

## Execution sequence

After approval, update the canonical skill, command, scout agent, and relevant orchestrator routing together; run the generator and repository check; then report the changed sources, validation results, and any constraints exposed by the sample-output checks.
