Draft date: October 8, 2026  
Article type: Opinion  
Scope and assumption: Focuses on AI-assisted game preservation and access, not AI-generated content or AI changing gameplay. AnyPS5 is not presented as evidence of AI's impact because its AI involvement has not been verified.

# AI Game Preservation Needs More Than a Prompt: Tools Could Help Old Games Reach New Systems

## AI game preservation is about access, not magic

AI game preservation is easy to misunderstand when the conversation jumps straight to what a model might generate. The more important possibility is less flashy: AI could help skilled people build tools that let old or platform-locked games run on systems they weren’t designed for.

That doesn’t mean asking AI to preserve a game automatically. Making a game playable elsewhere can require painstaking work to understand its code and reproduce the behavior of the original hardware. AI might help people move through that process faster, but the work—and the responsibility for checking it—still falls to people.

## Preservation means keeping games playable

A game can survive on a disc, cartridge, or hard drive and still be difficult to play. Its original hardware may be hard to find, and the behavior of an older platform can be difficult to reproduce accurately. Keeping the software intact matters, but so does keeping a practical way to experience it.

For Filipino players, as for players anywhere, access can depend on the hardware they own and what publishers make available. A preservation tool that helps a game run on a newer system could open up more ways to play. But that’s a possibility, not a guarantee: the tool has to work, and questions about distribution and rights still matter.

One promising approach is **static recompilation**, which translates a game’s original machine code into code that can run natively on another platform. But translation alone doesn’t recreate everything the game expects from its console. Developers still have to investigate and reproduce relevant hardware and system behavior, then test whether the result works as intended.

## A PS1 experiment shows AI as a capability multiplier

Independent developer Matthew Stanley has described using Claude Code, Ghidra, and an instrumented PlayStation emulator while building a static-recompiler prototype around *Tomba!*. His account matters not because it proves AI can make any old game portable, but because it shows how AI can fit into one developer’s workflow.

Stanley describes a cycle of building, running the game, observing what goes wrong, using AI to help investigate or change the code, and then checking the fix himself. Tools such as Ghidra and emulator instrumentation helped ground the work in observable evidence rather than guesswork. Some problems involved reproducing details of PlayStation behavior. One example he gives is implementing a GPU readback buffer correctly to prevent corrupted textures.

The prototype reached recognizable gameplay, but that’s not the same as a finished, fully verified port. In his initial account, Stanley noted remaining problems, including softlocks, sound issues, and nonfunctional saving. Five months later, he described broader work on reusable recompilation frameworks and stressed that the process still takes time, money, iteration, and testing. His experience is one example—not proof that every preservation team uses AI, or that AI has made the work easy.

The bigger point is that AI can act as a **capability multiplier**. It may help a technically skilled person investigate unfamiliar code, generate possible changes, and iterate through tests. But reverse engineering doesn’t disappear. Developers still need to build the tools, establish what correct behavior looks like, and check whether a proposed fix actually works.

## The hard part is proving the game works

A game that boots is a milestone, not the finish line. A reliable port may need to reproduce timing, input, graphics, sound, memory behavior, saving, and other system interactions. Fixing one issue can also introduce another, which is why reusable frameworks and testing across multiple games matter.

In his follow-up, Stanley describes regression testing older games after changes to the framework. That points to the less glamorous heart of preservation: repeated playthroughs, comparisons with reference behavior, debugging, and checking edge cases. AI may speed up parts of that process, but it can’t lower the standard for getting the game right. A confident explanation from a model is no proof that a game is faithfully playable.

That’s why “AI did it” misses the point. In Stanley’s account, AI was one part of a process built around reverse engineering and observable game behavior. He still had to build the tools and test the results. Without a clear account of what works and what doesn’t, players could mistake a promising demo for a complete, dependable preservation effort.

## Capcom’s REX is a separate signal, not proof of preserved games

Capcom’s REX project is another reason to distinguish AI’s potential from what it has already accomplished. Capcom describes REX as an incremental evolution of RE ENGINE, not a wholesale replacement. At an October 2, 2026, conference, Capcom programmer Satoshi Ishida discussed potential AI support for development tools and workflows. Capcom later clarified that its plans concern internal tools, code testing, data analysis, and team efficiency—not using generative AI to create game content.

That’s relevant to AI’s possible role in technical work, but it doesn’t show that Capcom is using AI to preserve older games or that these capabilities are already in released titles. REX is also a different case from Stanley’s independent preservation experiment. The narrower connection is that both point to AI as support for technical work, not a substitute for human judgment.

## Better tools don’t settle legal or access questions

Even a working recompiler doesn’t automatically make a game legally or practically available to everyone. Technical success and permission to distribute a game, its code, or related files are separate matters. Rights and legal rules can vary, so a playable build isn’t a blanket answer to those questions.

Access also depends on whether people can find and use the tools, whether projects are maintained, and whether the results are tested well enough to trust. AI may reduce some of the effort involved in building preservation tools, but it can’t guarantee a stable project, a complete game, or a lawful way to play it.

## AI’s preservation promise lies in the tools people build

The strongest case for AI in game preservation isn’t that it will save games by itself. It’s that AI may help capable developers investigate old systems, build reusable tools, and take on work that might otherwise be out of reach for an individual or small team.

That possibility is worth watching, but expectations should stay grounded. AI can help people work through the technical maze; it can’t certify that they’ve reached the end. Preservation still depends on patient reverse engineering, reproducing hardware behavior, debugging, verification, and responsible handling of rights.

If AI helps more people build and maintain tools that make old games playable on new systems, that could be a meaningful gain. But the achievement belongs to the people who turn those tools into tested, usable access—not to a prompt alone.

## SEO metadata

```yaml
title: "AI Game Preservation Needs More Than a Prompt: Tools Could Help Old Games Reach New Systems"
seoTitle: "AI Game Preservation: Tools, Not Magic"
slug: "ai-game-preservation-tools-not-magic"
metaDescription: "AI could help skilled developers build tools that make old games playable on new systems—but reverse engineering, testing, and rights still matter."
excerpt: "AI may support game preservation by helping developers build tools for bringing old games to new systems. It cannot replace reverse engineering, testing, or rights clearance."
primaryKeyword: "AI game preservation"
secondaryKeywords: ["game preservation", "static recompilation", "retro game access"]
category: "Opinion"
tags: ["game preservation", "AI", "retro games", "Capcom", "static recompilation"]
ogTitle: "AI Game Preservation Needs More Than a Prompt"
ogDescription: "AI may help developers build tools that bring old games to new systems. The difficult work of reverse engineering, testing, and verification remains."
featuredImageAlt: "A retro game running on a modern computer beside an original console"
featuredImageSuggestion: "Use an original Game Ako image or a properly licensed image showing a retro game on modern hardware. Avoid implying a specific game has been officially ported."
internalLinkIdeas: ["A Game Ako article or video about retro game preservation, emulation, or game availability, if one exists"]
```

## Source notes

- Capcom, [“RE ENGINE 2025”](https://www.capcom.co.jp/ir/english/data/oar/2025/re-engine.html) — describes REX as a step-by-step evolution of RE ENGINE.
- GameBiz, [report on Capcom’s October 2, 2026, Open Conference](https://gamebiz.jp/news/433531) — coverage of Ishida’s discussion of REX and potential AI-related development workflows.
- IGN, [“Capcom Clarifies Stance on AI After RE Engine Conference Comments”](https://nordic.ign.com/pragmata/113784/capcom-clarifies-stance-on-ai-after-re-engine-conference-comments) — reports Capcom’s clarification about internal efficiency and development support.
- Matthew Stanley, [“I Built a PS1 Static Recompiler With No Prior Experience (and Claude Code)”](https://1379.tech/i-built-a-ps1-static-recompiler-with-no-prior-experience-and-claude-code/) — the developer’s account of the *Tomba!* prototype, workflow, tools, and limitations.
- Matthew Stanley, [“Recomp + AI: 5 Months Later”](https://1379.tech/recomp-ai-5-months-later/) — follow-up on reusable frameworks, continued testing, and remaining work.
- Stanley’s [PSXRecomp repository](https://github.com/RetroPortingToolKit/psxrecomp) — project material.

**Verification caveat:** These sources support the examples as described, but do not establish that AI preservation tools are widely adopted or that any specific game has been fully preserved through this approach.
