# Workflow brief

## Domain

- Domain id and title: game-ako
- Lead agent: ga-orchestrator
- Purpose: Writing game review content both in written and video format via script.
- Artifact folder(s):
  - docs/game-ako/review/

## Skills

- name: `game-review-writer`
- description: infer via the conversation.
- agent: `game-content-writer`
- trigger: when the user execute slash command `/write-game-review` in the chat.
- inputs: conversation context, game title, game genre, game platform and user preferences.
- process: generate a game review article in written format base on the following structure,
  - Game Ako game review title is `Before Waldas`.
  - The purpose of this content is to give informative opinions on games.
  - Games should be played at least 5-10 hrs of gameplay to come up with better understanding on the games offering.
  - It is not required to finish the game as the review only contains the first impression of the reviewer.
  - Read `review-format.md` for the review format and structure.
- output: a well-structured game review article in written format. display the output on screen by default and save it to the artifact folder `docs/game-ako/review/` when user express intent to save it. game review should be written in english, Please use simple english words that are easy to understand. Professional and informative in tone.
- boundaries:
  - The review should focus on the aspects of the game that are most relevant to the target audience.
  - The review should not contain any personal information or opinions that are not based on the game's features.
  - Don't include any spoilers in the review. Save story details for GALore.
  - Don't research the game online. Let the agent decide on that but this skill should not do that. Use the information provided to you by the user to write the review.

## Commands

- name: `/write-game-review`
- description: infer via the conversation.
- argument hint: draft a review, review, game title, improve my take, include additional details.
- skill: `game-review-writer`
- completion: a well written draft or finalized game review article in written format.
- steps:
  - take user input and context.
  - load the relevant skill `game-review-writer`.
  - execute the skill to generate the game review.
  - when the user ask to improve the review, take the user input and context and implement.
  - display the output on screen by default and save it to the artifact folder `docs/game-ako/review/` when user express intent to save it.
