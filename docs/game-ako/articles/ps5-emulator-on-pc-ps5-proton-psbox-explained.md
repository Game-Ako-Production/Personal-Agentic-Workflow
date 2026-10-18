# PS5 Emulator on PC: What "PS5 Proton" and "PSBox" Actually Are

<!-- Draft info: Game Ako blog article draft, 2026-10-13. Status: awaiting Arohbi review before publication. -->

```yaml
title: "PS5 Emulator on PC: What 'PS5 Proton' and 'PSBox' Actually Are"
seoTitle: "PS5 Emulator on PC: No 'PS5 Proton,' But Real Projects Exist"
slug: "ps5-emulator-on-pc-ps5-proton-psbox-explained"
metaDescription: "A 'PS5 emulator' search can lead to scams, while homebrew 'PS5 Proton' and the AnyPS5 project make real progress running games on PC. Here's what's true."
excerpt: "No official 'PS5 Proton' exists and 'PSBox' turns up nothing verifiable. The real story: homebrew Windows-on-PS5, the AnyPS5 translation project, and early emulators."
primaryKeyword: "PS5 emulator"
secondaryKeywords: ["PS5 Proton", "AnyPS5", "PSBox", "PS5 games on PC"]
category: "News"
tags: ["playstation 5", "ps5 proton", "anyps5", "emulation"]
ogTitle: "PS5 Emulator on PC: Sorting 'PS5 Proton' and 'PSBox' Claims From Reality"
ogDescription: "No official 'PS5 Proton' or 'PSBox' exists, but homebrew Windows-on-PS5 and the AnyPS5 project are real — and searching for PS5 emulators can lead to scam sites."
featuredImageAlt: "Aerial view of a PS5 console beside a Windows setup window, suggesting the homebrew compatibility layer story"
featuredImageSuggestion: "No official press kit exists for homebrew projects; use screenshots from Mihawk's announcement post or the AnyPS5 project's official page (GitHub), labeled as fan/homebrew captures"
internalLinkIdeas: ["A Game Ako explainer on emulation basics and why 'download an emulator' searches are risky", "A Game Ako feature on Steam Deck and Proton so readers understand how translation layers work"]
```

Spotted a "PS5 Proton" or "PSBox" claim on social media lately? Clear this up first: there is no official Valve or Sony product called "PS5 Proton," and no verifiable project named "PSBox" exists — GitHub and web searches turn up nothing, and the name appears mostly in confusion, clickbait, or scam download sites. The real PS5-on-PC stories, however, are still worth tracking.

**"PS5 Proton" is actually Windows on PS5**

Announced October 3 by developer Mihawk, the homebrew layer nicknamed "PS5 Proton" runs Windows games on jailbroken PS5 consoles through a Wine port, with a Stardew Valley demo as proof. The catch: it works only on jailbroken consoles (firmware 13.60 or lower), voids support terms, and is experimental. Community reports — not confirmed — say it's evolving into something called "Mihawk OS." Remember: this is Windows running on a PS5, not PS5 games on PC.

**The real PS5-on-PC projects**

AnyPS5 is an open-source, "Proton-like" tool that converts PS5 executables into native x86-64 Windows or Linux programs, according to Tom's Hardware and TechPowerUp. Because the PS5 is x86, there's no CPU emulation: AnyPS5 reimplements PS5 system libraries and recompiles shaders to Vulkan. As of early October, per Tom's Hardware and TweakTown, shader-instruction coverage hit 100 percent of 1,166 tracked instructions, with system libraries at roughly 79–85 percent. There's still no public release — the developer says none will come until a full game launches through it. A Dead Cells demo was shown running natively (attributed demo footage), and one commercial game has only reached its logo and menu.

**Actual emulators, and a safety note**

Real PS5 emulators exist in early form: SharpEmu is experimental and claims some 2D games are playable (developer claims, not independently verified), and KytyPS5 is open-source and early. But searching "download a PS5 emulator" mostly surfaces scam and malware bait sites — stick to official project pages, chiefly GitHub. The legal status of all this is an unsettled interpretation, and Sony has not commented.

**Sources**

- https://x.com/Mihawk9_9/status/2106204450536698291
- https://www.tomshardware.com/video-games/playstation/open-source-anyps5-dumps-emulation-to-run-playstation-5-console-games-natively-on-pc-amd-zen-2-architecture-enables-proton-like-binary-translation-for-windows-and-linux
- https://www.tomshardware.com/video-games/playstation/anyps5-reaches-critical-gpu-milestone-with-100-percent-shader-instruction-coverage-ps5-games-running-natively-on-pc-still-far-off
- https://www.tweaktown.com/news/114005/anyps5-now-translates-every-ps5-gpu-shader-instruction-it-tracks-but-games-are-still-a-way-off/index.html
- https://www.techpowerup.com/353098/anyps5-project-skips-emulation-entirely-aims-to-port-playstation-5-games-to-pc-directly
- https://kytyps5.github.io

**Verification note:** "Mihawk OS" is explicitly labeled a community report, not confirmed. No playable-AAA-game claims are made; SharpEmu's playable-2D claim is attributed as a developer claim and had no direct source URL in the brief, so it is not in the Sources list. AnyPS5 percentages and Dead Cells demo are attributed to Tom's Hardware/TweakTown reporting.