# Project notes: webtoon harness, Khmer edition, Flow-by-hand mode

## Where things live

- `stories/<slug>/` holds every story (`rule4`, `poison`, `umbrella`), each with its own
  `00_input` … `06_assembly`. Never work in these folders directly.
- `_workspace` is a link (not in git) to the story you are working on. The agents, `km_tool.py` and
  `flow_tool.py` only read `_workspace/`. Point it at a story with `./switch_story.sh <slug>`;
  run it with no argument to list stories and see which one is active.
- `studio/` is Story Studio (`python -I studio/export_data.py` refreshes `studio/data.js`).
  `flow-extension/` is the Chrome extension. `.claude/` holds the shared agents and skills.
- A new story goes in `stories/<slug>/`; then switch to it.

## Khmer edition (readers are Cambodian)

- **Scope: exactly two changes.** (1) Speech bubbles display Khmer text. (2) The script adds Khmer text.
  **Everything else in the harness stays exactly as designed. Do not change it:** research, story and
  its rules, the 27 agents and phases, characters, setting, art, reference sheets, 50+ panels, the image
  check, the Flow handoff, QA and release. "Readers are Cambodian" affects only the language of the
  text, not the story, setting or art.
- Readers see **only Khmer**. Follow the `webtoon-khmer-edition` skill in every phase.
- **Script:** a `KM:` line in natural Khmer under every dialogue line. Names and terms come from
  `_workspace/02_story/glossary_km.md`.
- **Native Khmer review:** the last step of Phase 3. `native-khmer-agent-reviewer` reviews every `KM:` line
  of `ep{NN}_script_final.md` in place and writes `03_episode/ep{NN}_km_review.md` (an AI review: READY or
  NEEDS REVIEW). The shot list starts only when
  `python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py gate --episode NN` passes.
  NEEDS REVIEW means stop and ask the user its open questions. This is the one agent added to the 27
  (added at the user's request, 2026-11-20).
- **Images:** **no text at all** (no speech bubbles, letters or writing). Each panel keeps the empty area
  named in the lettering spec's `art_space`, and signs, receipts, notes and screens are drawn blank.
- **Viewer:** draws every speech bubble with the Khmer inside. Build it only with
  `python -I .claude/skills/webtoon-khmer-edition/scripts/km_tool.py build --episode NN`; never write it
  by hand. Run `km_tool.py check --episode NN` before building and before release.
- This replaces the upstream "in-image Korean lettering / bake / no overlay" rules wherever they appear.
- `examples/` holds a made-up worked example of every file. The harness does not read it.

## Flow-by-hand mode

- **Images are made by hand in Google Flow. There is no Codex in this project.** Never run `codex`,
  never automate the Flow website, never use unofficial Flow API services.
- Phase 4 (character reference sheets + panels) follows the `webtoon-flow-handoff` skill: agents write
  Flow-ready prompts, the leader builds `_workspace/04_visual/ep{NN}_flow_handoff.html`, then **stops and
  waits for the user**. Never invent or fill in missing images.
- `panel-artist-a/b/c` are not used. Leave them out of the visual team.
- When resuming an episode, read `_workspace/04_visual/ep{NN}_flow_status.md` first.
- Check images with
  `python -I .claude/skills/webtoon-flow-handoff/scripts/flow_tool.py status --episode NN`.
  The `md5 -r` and `file` commands in the upstream skills are macOS-only and do not work here.
- Re-running `.claude/skills/webtoon-harness/scripts/install.sh` overwrites the Flow-mode notes in the
  upstream agents and skills (they are marked "Flow-by-hand mode" and "Khmer edition").
