# Webtoon-Automation

A Claude Code harness that makes Khmer-edition webtoons: research, story, script, Flow prompts
(images are made by hand in Google Flow), then a Khmer episode viewer.

```
Webtoon-Automation/
├─ CLAUDE.md          project rules (Khmer edition, Flow-by-hand)
├─ .claude/           shared agents and skills
├─ stories/           every story, one folder each
│   ├─ rule4/         「수칙 4번은 거짓말입니다」  EP01–03
│   ├─ poison/        「독은 제가 먼저 먹겠습니다」 EP01–03 scripts + Flow prompts
│   └─ umbrella/      「맑은 날의 우산」  EP01
├─ _workspace         link to the active story (not in git)
├─ switch_story.sh    point _workspace at a story
├─ studio/            Story Studio web UI
├─ flow-extension/    Chrome extension for Flow
└─ examples/          made-up worked example of every file
```

## Work on a story

```bash
./switch_story.sh            # list stories, show the active one
./switch_story.sh umbrella   # make it the active story
```

Then run the harness as usual. The agents and tools read `_workspace/`, which now points at
`stories/umbrella/`.

## Studio

```bash
python -I studio/export_data.py                                  # refresh studio/data.js
python -I -m http.server 8765 --bind 127.0.0.1 --directory studio
```

## Chrome extension

See `flow-extension/README.md`. Run `npm install` there once (`node_modules/` is not in git).
