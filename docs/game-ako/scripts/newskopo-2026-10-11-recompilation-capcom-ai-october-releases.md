# Game Ako NewsKopo — Host Talking Points

**Episode date:** October 11, 2026  
**Format:** YouTube podcast host notes; not a word-for-word script  
**Audience:** Filipino gamers in the Philippines and abroad  
**Language:** Spoken Taglish  
**Suggested runtime:** 20–25 minutes, depending on discussion and audience interaction  
**Factual cutoff:** October 11, 2026. October release roundup covers October 12 onward only.

## Episode framing and open

- **Start with the big question:** Kung kaya nang tulungan ng AI ang reverse-engineering ng lumang game software, mas mapapadali ba nito ang game preservation—or mas mabilis lang tayong magkakaroon ng bagong paraan para gumawa ng native ports?
- Frame the episode around three connected stories: the tools and trade-offs behind recompilation and preservation; what Capcom has actually made public around RE Engine/REX and what its AI direction does—and does not—mean; then a quick, selective look at games still due this October.
- Set the lens: preservation is more than making an old game run on a modern PC. There are technical, creative, ownership, and legal questions. Separate confirmed information from Arohbi’s analysis as we go.
- **Transition:** “Unahin natin yung pinaka-technical pero pinaka-interesting: paano nagkakabit ang AI-assisted reverse-engineering, recompilation, at game preservation?”

## Topic 1 — REA, recompilation, and preservation (main discussion)

### 1. What REA is—and what “more automated” means here

- **Fact:** The REA GitHub project describes itself as a CLI and MCP server that lets coding agents investigate software, including native binaries, using local tools and workflows. It can connect agents to analysis providers such as Hopper, Ghidra, and IDA. It appeared on GitHub’s daily trending list on October 11. That is evidence of attention that day—not a verified measure of users, quality, or adoption. [1][2]
- **Compare carefully:** GhidraMCP exposes Ghidra functionality through MCP; its README lists tools for work such as decompilation, renaming, comments, and analysis. [3]
- **Arohbi’s take:** REA _feels_ like a more end-to-end or automated workflow than GhidraMCP, because it can coordinate agent work with analysis tools. Make clear this is an impression, not a benchmark result. It still depends on reverse-engineering engines and skilled human judgment; “AI does it all” would overstate what the source establishes.
- **Prompt for discussion:** “Kapag mas madaling i-orchestrate ang tools, ano ba talaga ang nagiging accessible—yung repetitive setup, o pati yung expertise na kailangan para maintindihan kung ano ang nakikita mo?”
- **Bridge:** “At mahalaga yung distinction na ’yan, kasi hindi iisa ang ibig sabihin ng ‘recompile’ at ‘decompile.’”

### 2. Recompilation is not the same as reconstructing source

- Use examples to explain the different paths, without implying they are interchangeable:
  - **N64Recomp** statically translates N64 binary instructions into C so they can be compiled for target platforms. [4]
  - **Zelda 64: Recompiled** is an example of the native-port direction. [5]
  - The **Majora’s Mask decompilation** project says its goal is to reconstruct source code; it explicitly is not a project to make a PC port. [6]
- **Framing:** These are title-specific technical efforts, not a magic button that converts every game into a modern PC release. Recompilation, decompilation, emulation, and a developer-made remaster solve different problems.
- **Arohbi’s take:** Recompilation/decompilation projects _seem_ to be flourishing and can contribute to preservation. Don’t present a broad, industry-wide boom as measured fact—the examples show active projects, but we do not have quantitative trend data in this brief.
- **Prompt:** “Kung may reconstructed source pero walang ready-made PC port, preservation ba iyon? For me, puwedeng oo—but it preserves a different kind of possibility.” Invite the host to explain that as his view, not a universal definition.

### 3. Native ports and emulation can coexist

- **Core point:** Emulation remains a practical, broad route for playing libraries across systems; title-specific native ports may be attractive for particular games and modern compatibility. Native ports do not make emulators obsolete.
- Name **DuckStation, PCSX2, and RPCS3** as practical examples of active emulator projects. [7][8][9]
- **Arohbi’s take:** Emulation may remain the everyday baseline, while special or technically distinctive games could be candidates for native recompilation. He sees a possible use case where a demanding RPCS3 title motivates interest in a native PC-compatible path.
- **Guardrail:** RPCS3’s published requirements support the narrower point that PS3 emulation can call for capable hardware. They do **not** establish that recompilation of a particular game is possible, easier, or necessarily faster. Hardware needs vary by title and implementation. [9]
- **Prompt:** “Kung gumagana na sa emulator, ano ang dagdag na value ng native port—performance, modding, controls, preservation, or convenience? At alin doon ang realistic per game?”
- **Transition:** “So may malaking upside sa access and compatibility—but preservation is not a free-for-all. Pag-usapan natin yung rights side, kasi madaling mapaghalo ang tool, game copy, at public release.”

### 4. Legal and ethical guardrails (keep concise, accurate)

- An open-source reverse-engineering or recompilation tool does **not** grant rights to a game’s copyrighted code, assets, ROM, or distribution. A project’s existence is not blanket permission to publish a port or share game files.
- Avoid directing viewers to unauthorized downloads, ROM sites, or ways to bypass copy protection. Don’t imply that owning a physical copy automatically authorizes every form of copying, circumvention, or distribution.
- The U.S. Copyright Office’s 2024 DMCA Section 1201 materials describe a limited exemption for qualifying preservation activity by eligible libraries, archives, and museums. It is not blanket permission for fan ports, public distribution, or circumvention generally—and a U.S. exemption should not be assumed to apply in the Philippines. [10]
- **Host note:** This is a high-level distinction, not legal advice. If discussing a specific project, direct viewers to its own documentation and applicable local law rather than declaring it lawful or unlawful.
- **Arohbi’s take / wrap:** “Para sa akin, magkaibang usapan ang value ng preservation at kung sino ang may karapatang mag-copy, modify, o mag-release. Puwedeng suportahan ang preservation habang nirerespeto pa rin ang rights at legal limits.”

## Topic 2 — Capcom, RE Engine/REX, and AI (second in depth)

### 1. What was actually made public

- **Fact:** Capcom’s public **RE:Dox** repository describes a .NET structured-data engine/core component in the REX family, under Apache 2.0. It is code and documentation for that component—not the complete RE Engine, editor, or public game-development SDK. [11]
- Capcom’s 2025 integrated report describes RE Engine as an in-house engine and says REX is evolving step by step. It also describes external access for education, usability feedback, and developer training. Capcom’s 2024 announcement of a cloud-based student development competition provides additional context for its education and talent-development activity. [12][13]
- **Guardrail:** Say “a component of the broader REX/RE Engine ecosystem is public,” not “Capcom open-sourced RE Engine.”

### 2. What Capcom clarified—and what remains to be measured

- **Verified Capcom position:** In its shareholder Q&A, Capcom said the creativity at the core of games should be driven by human effort and that, “at present,” it would use generative AI as a supporting tool for routine development tasks. Capcom has also said it will not implement AI-generated assets into its games. After the REX event, an IGN report attributed to a Capcom spokesperson that the company has no plans to use generative AI in creating its games. [15][28][29]
- **Important wording boundary:** This supports saying Capcom has ruled out implementing AI-generated assets in games under its stated position. It does **not** establish that every part of every game will be made only by humans, that Capcom has ruled out all AI in production workflows, or that its current position is a permanent guarantee. “Nothing to worry about” is Arohbi’s reassuring interpretation, not a verified quote or blanket promise from Capcom.
- **Workflow context:** Capcom’s REX conference and reporting describe AI-oriented developer tools/workflows, including testing and code-related tasks. Capcom’s official materials also say it is developing and disseminating generative-AI guidelines and strengthening information-management systems. These are company-stated efforts; the available sources do not disclose every control or prove that all policies are already fully established. [15][30][31]
- VGC’s October 3 report attributes to Capcom programmer Satoshi Ishida the idea that some technology may be made public so people can help train AI. That rationale is attributed reporting; it is not stated as the purpose in the RE:Dox repository itself. [14]
- **Arohbi’s take on the stigma:** The visibility and accessibility of generative AI mean curious individuals can quickly create and deploy experiments. In his view, that novelty can make public examples feel more representative of real production than they are; easy experimentation alone does not show whether a workflow is reliable, secure, or useful at production scale. Keep this as commentary, not a claim that AI cannot be used in real production—Capcom itself describes supporting development uses.
- **Arohbi’s take on AI and engineering:** AI is capability augmentation, not automatic replacement: experienced engineers might test faster and spend less time on grunt work, freeing attention for harder problems. That is his view about potential, not a verified account of Capcom’s current results.
- **Arohbi’s interpretation:** Games have technical and creative sides. He reads Capcom’s stated boundary as using AI to improve technical efficiency while keeping creative decisions and shipped assets under human judgment. Attribute this interpretation to Arohbi; avoid presenting it as a promise beyond Capcom’s reported statements.
- **Arohbi’s evaluation lens:** Don’t root for or against AI just because we are fans of Capcom—or because of general brand sentiment. His concern is the objective result: does the tool improve Capcom’s workflow, and does that translate into better releases? Treat effectiveness as an open question. The sources reviewed provide plans and policy statements, but no measured REX impact on development time, bugs, quality, or shipped games yet.
- **Prompt:** “Kung AI makes testing or iteration faster, paano natin susukatin kung effective talaga? Mas kaunting bugs ba, less repetitive work, better production quality, or better games? At paano natin ihihiwalay ang objective results sa pagiging fan ng Capcom?”

### 3. Why not simply sell RE Engine to everyone?

- Capcom’s official 2023 Q&A said it had no plans at that time to release RE Engine externally. The 2025 report still calls it in-house, but neither establishes a permanent policy today. No commercial licensing announcement is identified in the supplied research. [12][16]
- **Arohbi’s analysis—not Capcom’s stated reason:** RE Engine may not be designed as a general-purpose engine in the same way as Unreal or Unity; supporting public and internal branches could add cost and complexity; and Capcom may prefer one internal toolchain while earning revenue from games rather than engine licensing.
- Keep the framing conditional: “One way I think about it is…” and “possible reasons,” not “Capcom refuses because…”
- **Transition:** “Okay, from long-term engine questions to the calendar right in front of us—here are a few remaining October releases worth flagging.”

## Topic 3 — Select October releases, October 12 onward (quick roundup)

_Selective list only. Dates and platforms below follow the cited publisher/platform-holder sources. No Philippine pricing, local availability, or PH unlock times are asserted._

> dragon's dogma

- **Oct 13 — Valor Mortis:** PS5; Xbox Wire also lists PC and Xbox Series, and says it will be on Game Pass. [17]
- **Oct 13 — Planet Zoo 2:** PC, PS5, and Xbox Series X|S. [18]
- **Oct 14 — Warhammer 40,000: Boltgun 2:** PC, PS5, and Xbox Series; Switch 2 is later, with no date in the cited listing. [19]
- **Oct 15 — Castlevania: Belmont’s Curse:** PS5, Xbox Series/Xbox PC, Steam, and Switch. [20]
- **Oct 15 — Enshrouded 1.0:** PC and PS5; Xbox Series is planned for spring 2027, not part of the October launch platforms cited here. [21]
- **Oct 16 — Switch 2 Resident Evil releases:** digital Resident Evil 2 Deluxe Edition, Resident Evil 3, and Resident Evil 4 Gold Edition. Capcom Asia lists physical editions for January 29, 2027. [22]
- **Oct 22 — FINAL FANTASY RESONANCE:** PS5, Xbox Series, Switch/Switch 2, Steam, and Xbox PC. [23]
- **Oct 23 — Call of Duty: Modern Warfare 4:** Xbox Wire calls this the global launch; campaign early access is Oct 16 for qualifying preorders. Nintendo’s October list also gives a Switch 2 release on Oct 23. [24][25]
- **Oct 29 — Phantom Blade Zero:** PS5 and PC via Steam/Epic. [26][27]
- No clearly confirmed in-scope gacha launch was identified in the supplied research. Since this is a selective roundup, don’t imply it is a complete release calendar.
- **Conversation prompt:** “Sa dami ng magkakasunod na release, alin ang nasa watchlist ninyo—and ano ang uunahin n’yo? Comment niyo habang nanonood.” Avoid making unverified recommendations about regional editions, prices, or release-hour availability.

## Close and YouTube podcast CTA

- Bring the episode back to its through-line: tools like AI and recompilation can expand what skilled people can investigate and preserve, but they don’t erase the human, creative, legal, and practical questions.
- Ask viewers: “Para sa inyo, anong game ang pinaka-deserving ng native port or preservation effort—and saan dapat ang boundary pagdating sa game files and rights?”
- **CTA:** “Kung nagustuhan n’yo ang usapan, subscribe sa Game Ako para sa more gaming commentary and podcast discussions. I-comment n’yo yung take n’yo sa preservation, Capcom’s AI direction, at kung ano ang nilalaro n’yo this October. Salamat sa pakikinig, mga ka-Game Ako!”

## Source list — host reference

1. REA GitHub repository: https://github.com/morluto/rea
2. GitHub Trending, daily, October 11, 2026: https://github.com/trending?since=daily&date=2026-10-11
3. GhidraMCP GitHub repository: https://github.com/13bm/GhidraMCP
4. N64Recomp GitHub repository: https://github.com/N64Recomp/N64Recomp
5. Zelda 64: Recompiled GitHub repository: https://github.com/Zelda64Recomp/Zelda64Recomp
6. ZeldaRET Majora’s Mask decompilation project: https://github.com/zeldaret/mm
7. DuckStation GitHub repository: https://github.com/stenzek/duckstation
8. PCSX2 GitHub repository: https://github.com/PCSX2/pcsx2
9. RPCS3 and system requirements: https://rpcs3.net/requirements
10. U.S. Copyright Office, 2024 DMCA Section 1201 materials: https://www.copyright.gov/1201/2024/
11. Capcom RE:Dox GitHub repository: https://github.com/CAPCOM-TD-OSS/REDox
12. Capcom 2025 Integrated Report, RE Engine: https://www.capcom.co.jp/ir/english/data/oar/2025/re-engine.html
13. Capcom 2024 cloud-based student development competition announcement: https://www.capcom.co.jp/ir/english/news/html/e241209.html
14. VGC, October 3, 2026, RE Engine and AI-generation reporting: https://www.videogameschronicle.com/news/capcom-details-plans-to-evolve-re-engine-into-an-ai-generation-game-engine/
15. IGN, October 7, 2026, Capcom AI clarification report: https://www.ign.com/articles/capcom-clarifies-stance-on-ai-after-re-engine-conference-comments
16. Capcom RE:2023 Q&A: https://www.capcom-games.com/coc/2023/en/session/10/
17. PlayStation Valor Mortis page: https://www.playstation.com/en-us/games/valor-mortis/; Xbox Wire, October 9, 2026: https://news.xbox.com/en-us/2026/10/09/next-week-on-xbox-new-games-for-october-12-to-16/
18. Frontier, Planet Zoo 2 announcement: https://www.frontier.co.uk/news/2026-05-28/build-wilder-world-october-planet-zoo-2
19. PlayStation Store, Boltgun 2: https://store.playstation.com/en-us/concept/10017203
20. Konami, Castlevania: Belmont’s Curse: https://www.konami.com/games/castlevania/belmonts_curse/us/en-us/
21. Game Informer, Enshrouded 1.0 report citing Keen: https://gameinformer.com/2026/06/25/after-over-two-years-in-early-access-enshrouded-launches-into-10-this-october
22. Capcom Asia, Resident Evil on Switch 2: https://www.residentevil.com/switch2/en-asia
23. Square Enix, FINAL FANTASY RESONANCE: https://na.finalfantasy.com/news/2841
24. Xbox Wire, October 9, 2026: https://news.xbox.com/en-us/2026/10/09/next-week-on-xbox-new-games-for-october-12-to-16/
25. Nintendo, Upcoming Games October 2026: https://www.nintendo.com/en-gb/News/2026/October/Upcoming-Games-October-2026-3208377.html
26. PlayStation, Phantom Blade Zero: https://www.playstation.com/en-us/games/phantom-blade-zero/
27. S-GAME, Phantom Blade Zero: https://pbz.s-game.com/en-US
28. Capcom, 2026 Shareholder Meeting Q&A: https://www.capcom.co.jp/ir/english/assets/pdf/stock/2026capcom_d.pdf
29. Capcom, FY2025 Financial Results Q&A: https://www.capcom.co.jp/ir/english/data/pdf/explanation/2025/full/explanation_2025_full_04.pdf
30. Capcom, Open Conference RE: 2026 official event schedule: https://www.capcom-games.com/coc2026/ja-jp/professional/
31. Capcom, Information Security: https://www.capcom.co.jp/ir/english/sustainability/security.html

**Source/check note:** Prepared from the research briefs supplied for this episode; assertions and opinions are distinguished above. Recheck time-sensitive platform/date details before recording if the show is delayed beyond October 11, 2026. This document is host notes, not legal advice or YouTube upload packaging.
