Draft date: October 9, 2026  
Format/runtime assumption: Game Ako YouTube commentary, around 8–10 minutes.  
Scope: Talking points on AI-assisted game preservation and access. Opinions are suggested framings for Arohbi to accept, change, or reject—not verified facts.

# Talking points: AI, game preservation, at access sa bagong systems

## 1. Opening hook — “Nasa’yo pa ba ang laro kung hindi mo na ito malaro?”

_~1 minute_

- Magbukas sa sitwasyong relatable sa gamers: may laro kang nasa disc, cartridge, o digital library, pero wala ka nang gumaganang original console—or mahirap nang ma-access ang hardware.
- I-set up ang distinction:
  - Puwedeng surviving pa ang game files o physical copy.
  - Pero kung mahirap na itong laruin, may usapan pa rin tungkol sa access at preservation.
- **Suggested take:** “Para sa akin, hindi lang tanong kung nailigtas ba ang game files. Tanong din kung kaya pa ba nating laruin at pag-aralan ang game sa systems na meron tayo ngayon.”
- Sabihin agad na hindi ito video tungkol sa AI na gumagawa ng games, characters, o NPCs. Ang focus ay kung paano ito _maaaring_ makatulong sa skilled developers na gumawa ng tools para mas ma-access ang older games.

**Transition:** “Pero bago pag-usapan ang AI, kailangan munang linawin kung bakit mahirap patakbuhin ang lumang game sa bagong hardware.”

## 2. Preservation is more than keeping a copy

_~1–1.5 minutes_

- Ang pagkakaroon ng game data ay mahalaga, pero hindi ibig sabihin na playable na agad ito sa modern hardware.
- Maaaring umasa ang laro sa specific na asal ng lumang console—mula sa processor at memory hanggang sa graphics at audio.
- Iwasang palabasing iisa lang ang paraan para mapanatili o mapalaro ulit ang isang game. Magkakaiba ang hamon ng emulation, porting, at iba pang approaches.
- **Suggested take:** “Hindi ko sinasabing walang halaga ang pag-preserve ng files. Ang punto ko lang, may dagdag na tanong tungkol sa practical access: paano natin ito mapapatakbo at masusubukan ngayon?”
- Puwedeng banggitin na nagkakaiba-iba ang access ng players depende sa hardware na mayroon sila, pero huwag mag-claim tungkol sa partikular na presyo o availability kung walang source.

**Transition:** “Dito pumapasok ang isang technical approach na magandang pag-usapan: static recompilation.”

## 3. Static recompilation: ano ang ginagawa nito—and what it doesn’t do

_~1.5 minutes_

- Ipaliwanag nang simple: tinatranslate ng static recompilation ang original machine code ng game para tumakbo sa ibang host system.
- Pero hindi awtomatikong naibabalik ng translation ang lahat ng behavior na inaasahan ng laro mula sa original console.
- Ilista ang gawaing kailangan pa rin:
  - Alamin kung paano kumilos ang game at ang original system.
  - I-implement ang kinakailangang behavior.
  - I-debug ang mga hindi tugma at edge cases.
  - I-validate at i-test kung tama talaga ang takbo ng laro.
- **Optional analogy:** “Parang isinalin mo ang instructions sa ibang language, pero kailangan mo pa ring tiyaking tama ang kahulugan at kayang patakbuhin ng bagong system ang mga instructions.”
- Linawin na hindi ito universal fix, at hindi garantiya ang matagumpay na translation na kumpleto o accurate na ang playable game.

**Transition:** “Ang interesting na tanong ngayon: puwede bang makatulong ang AI sa mga taong gumagawa ng ganitong klaseng technical work?”

## 4. Central thesis: AI as a capability multiplier

_~1–1.5 minutes_

- **Suggested take:** “Hindi AI ang nagpe-preserve ng game nang mag-isa. Mas interesting para sa akin ang posibilidad na maging capability multiplier ito para sa mga taong gumagawa ng mahirap na technical work.”
- Mga posibleng tulong, pero ilahad bilang potential—not guarantee:
  - Pagsisiyasat sa unfamiliar code o system behavior.
  - Pagtulong sa iteration habang binubuo o pinapahusay ang tools.
  - Pagtulong tukuyin kung anong test results ang kailangang balikan.
- Ibalik ang focus sa human role:
  - Kailangan pa ring husgahan kung tama ang interpretation.
  - Kailangan pa ring buuin ang tools, i-validate ang output, at subukan ang laro.
  - Hindi patunay na gumagana ang project ang AI assistance lang.

**Transition:** “May isang developer account na nagbibigay ng konkretong halimbawa—but importante ring malinaw kung ano lang ang pinatutunayan nito.”

## 5. _Tomba!_ prototype: isang workflow, hindi universal template

_~1.5–2 minutes_

- I-attribute nang maingat: sa sarili niyang accounts, inilarawan ni developer **Matthew Stanley** ang paggamit ng Claude Code kasama ng Ghidra at instrumented emulator habang gumagawa ng PS1 static-recompiler prototype around _Tomba!_.
- I-emphasize ang scope:
  - Isang documented workflow ng isang developer ito.
  - Hindi ito ebidensiya na lahat ng recompilation projects ay gumagamit ng AI.
  - Sa mga ulat ni Stanley, may limitations at tuloy-tuloy na iteration at testing—hindi simpleng “AI did it” story.
- Gamitin ang example para idiin na kasama sa workflow ang specialized tools, developer investigation, at verification.
- **Suggested take:** “Para sa akin, mas interesting ito bilang example ng workflow kaysa headline na ‘AI preserved a whole game.’ Nandoon pa rin ang developer, ang tools, ang testing, at ang mga problemang kailangang lutasin.”
- Huwag magdagdag ng technical specifics na wala sa developer’s accounts o source brief.

**Transition:** “May isa pang AI-related game-development discussion na puwedeng ikumpara—but ibang use case iyon sa preservation.”

## 6. Capcom REX: hiwalay na production-side example

_~1 minute_

- Maikling context:
  - Inilalarawan ang Capcom REX bilang incremental evolution ng RE ENGINE.
  - Sa conference noong October 2, 2026, tinalakay ni programmer Satoshi Ishida ang posibleng AI support sa development workflows.
  - Kalaunan, nilinaw ng Capcom na nakatuon ito sa internal tools, code testing, data analysis, at team efficiency—not generative AI na gagawa ng game content.
- Ihiwalay ang claim:
  - Production-side example ito, hindi ebidensiya ng AI game preservation.
  - Huwag ipahiwatig na deployed na sa mga released game ang capabilities.
  - Huwag gamitin ang REX para sabihing nakumpirma nang pinapadali ng AI ang preservation.
- **Suggested take:** “Magkaibang use case ito. Sa Capcom, internal production workflow ang usapan; sa preservation example, tools na maaaring makatulong sa pag-unawa at pagpapatakbo ng older games.”

**Transition:** “Kaya dapat maingat tayo sa mga headline at claims—lalo na sa mga project na nasa development pa.”

## 7. Caveats: promising possibility, hindi solved problem

_~1 minute_

- Magkaiba ang technical capability at legal rights o distribution.
  - Maaaring mas mapadali ng tool ang pagpapatakbo ng laro, pero hindi nito sinasagot kung sino ang puwedeng mag-distribute nito o sa anong kondisyon.
  - Iwasan ang legal advice o categorical claims.
- Panatilihing tama ang bigat ng mga example:
  - Isang developer’s reported workflow ang account ni Stanley.
  - Ibang use case naman ang production-side discussion ng Capcom.
  - Walang isa rito ang nagpapatunay na solved na ng AI ang game preservation.
- **AnyPS5, optional:** Kung babanggitin, gamitin lang bilang paalala na hindi dapat iugnay ang technical progress sa AI nang walang ebidensiya. Walang reliable confirmation sa supplied research na gumagamit ito ng AI, kaya huwag itong gawing example ng AI impact.
- **Suggested take:** “Exciting ang possibility, pero ayokong mag-overclaim. Tool support is not the same as a finished preservation result.”

**Transition to close:** “Kung iyon ang tamang expectation—AI as a tool, pero tao pa rin ang gumagawa ng judgment at validation—ano kaya ang magandang outcome nito para sa players?”

## 8. Audience question and close

_~30–45 seconds_

- Tanungin ang audience: **“Anong older game ang gusto ninyong maging mas madaling laruin sa modern systems—and ano ang mas mahalaga para sa inyo: mas madaling access, mas faithful na experience, o pareho?”**
- Balikan ang pangunahing punto:
  - Hindi lang surviving copy ang usapan sa preservation; mahalaga rin ang practical playability.
  - Maaaring makatulong ang AI sa skilled developers habang gumagawa sila ng tools, nagsisiyasat, nag-iiterate, at nagte-test.
  - Hindi AI ang preservation solution by itself.
- **CTA:** “Kung gusto ninyo ng ganitong gaming industry discussion, subscribe sa Game Ako sa YouTube para sa susunod pang usapan.”

## Source notes and verification

- **Matthew Stanley’s account and follow-up:** I-attribute ang _Tomba!_-related prototype workflow at limitations sa sarili niyang reports. Huwag itong i-generalize sa lahat ng recompilation projects.
  - https://1379.tech/i-built-a-ps1-static-recompiler-with-no-prior-experience-and-claude-code/
  - https://1379.tech/recomp-ai-5-months-later/
- **PSXRecomp project:** https://github.com/RetroPortingToolKit/psxrecomp
- **Capcom REX background:** Capcom Integrated Report 2025: https://www.capcom.co.jp/ir/english/data/oar/2025/re-engine.html
- **Capcom conference comments, October 2, 2026:** https://gamebiz.jp/news/433531
- **Capcom clarification on AI focus:** https://nordic.ign.com/pragmata/113784/capcom-clarifies-stance-on-ai-after-re-engine-conference-comments
- The research brief was checked **October 8, 2026**. Kung mas huli ire-record ang video, i-check ulit ang dates, project status, at exact wording.
- Huwag magpahiwatig na confirmed ang AI involvement sa AnyPS5, na lahat ng recompilation projects ay gumagamit ng AI, o na may released games nang napreserba gamit ang AI.
