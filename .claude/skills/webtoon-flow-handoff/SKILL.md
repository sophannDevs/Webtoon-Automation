---
name: webtoon-flow-handoff
description: "Flow-by-hand render mode (Flow 수동 렌더 모드) for the webtoon harness. This project has NO Codex: every image (character reference sheets and panels) is made by the user by hand in Google Flow (labs.google/flow). Use this skill in Phase 4 instead of any codex rendering: write Flow-ready prompts, build the handoff page, stop and wait for the user, then import, check and validate the user's images and hand back a redraw list. Triggers: any reference-sheet or panel rendering step; resume phrases such as 'images are ready', 'panels are ready', '이미지 다 넣었어', '그림 준비됐어', 'redraws are ready', '다시 그린 거 넣었어', 'import the inbox', '인박스 가져와'; redraw requests ('redraw panel 23', '패널 23번 다시 그려')."
---

# Webtoon Flow Handoff — the user renders, the harness does everything else

In this project the harness cannot draw. Google Flow has no official API, so the **user** generates
every image by hand in Flow. The harness writes the prompts, builds a checklist page, waits, then
imports, checks and validates the images and sends back only the ones that need redrawing.

Hard rules:
- **Never run `codex`.** Skip every codex step in `webtoon-panel-render` (pre-checks, batch scripts,
  `codex exec`). Keep that skill's *quality* rules: reference sheets first, in-image Korean lettering,
  `LOC_*` location tokens, and the 6-axis validation.
- **Never automate the Flow website** (no browser driving, no sign-in on the user's behalf) and never
  use unofficial "Flow API" services.
- **Never delete the user's images.** The tool moves replaced files into `_originals/`.
- `panel-artist-a/b/c` are **not used**. Leave them out of the visual team.

## The tool

Run from the project root (the folder that holds `_workspace/`):

```bash
python -I .claude/skills/webtoon-flow-handoff/scripts/flow_tool.py <command> --episode NN
```

| Command | What it does |
|---|---|
| `handoff --episode NN` | Builds `_workspace/04_visual/epNN_flow_handoff.html`: one card per image (character sheets still missing, then all panels) with the prompt, the exact file name, the reference images to attach and Copy buttons. Also creates `_workspace/_inbox/`. |
| `handoff --episode NN --only panel_023,panel_031` | Builds `epNN_flow_redraw.html` with only those cards, showing each `redraw_reason` and the current image. |
| `status --episode NN` | Checks every expected image: present, readable, real PNG, not a duplicate (md5). Exit 0 = READY. Use this instead of the macOS-only `md5 -r` / `file` commands in the upstream skills. |
| `status --episode NN --fix` | Converts images the user saved as JPG/WebP (or misnamed) into the expected PNG. |
| `import --episode NN [--only a,b]` | Maps downloads in `_workspace/_inbox/` (oldest first) onto the cards still needed, in card order. **Dry run by default**: show the user the mapping, then run again with `--apply`. Converts to PNG. |
| `place --episode NN SRC NAME` | Puts one specific downloaded file in place as card NAME. |

## Prompt files (what Flow-mode agents write)

Both files use the same block format. One block per image, heading = card name.

**Character sheets** — `_workspace/04_visual/refs/ref_prompts.md` (written by ref-sheet-artist):

```
### DOHYUN_turnaround
- prompt: "<self-contained prompt>"
- output: _workspace/04_visual/refs/DOHYUN_turnaround.png
- aspect: 16:9
```

**Panels** — `_workspace/04_visual/ep{NN}_prompts.md` (written by prompt-smith):

```
### panel_001
- scene_group: A
- scene_id: S2 / location: LOC_CLASSROOM
- prompt: "<self-contained prompt>"
- attach: refs/DOHYUN_turnaround.png, refs/DOHYUN_expressions.png
- aspect: 9:16
- output: _workspace/05_panels/ep{NN}/panel_001.png
```

Optional on any block: `- redraw_reason: <one plain-English sentence for the user>` (added on redraws).

Writing prompts for Flow:
- **Self-contained.** Flow sees only the pasted text plus any images the user attaches. Never refer
  to file paths, `INDEX.md`, tokens by name, or "the style bible" inside the prompt. Spell out the style
  and appearance keywords every time.
- **Reference images go in `attach:`.** In the prompt, say "matching the attached reference image of
  Dohyun (black undercut hair, mole under the LEFT eye, ...)". Keep the appearance keywords too, in
  case Flow does not take the reference.
- **No text in any image (Khmer edition).** Panel prompts contain no speech-bubble or dialogue
  sentences. Each one carries the lettering spec's `art_space` as "Keep … as calm, empty background …
  (a speech bubble will be added there later)", describes signs, receipts, notes and screens as blank,
  and ends with `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
  Character sheets end with `Avoid: any text, labels, speech bubbles, watermark.` The viewer adds the
  Khmer later (`webtoon-khmer-edition`).
- **Keep prompts tight** (roughly one dense paragraph). The user pastes 50+ of them by hand.
- `aspect:` comes from the style bible (vertical webtoon panels are usually portrait). If a ratio isn't
  offered in Flow, the user picks the closest one.

## Phase 4 in Flow mode (replaces the codex render steps)

1. Build the visual team **without** panel-artists:
   `[art-director, ref-sheet-artist, panel-director, letterer, prompt-smith]`.
2. art-director writes `style-bible.md` and `character-sheets.md` as usual.
3. ref-sheet-artist writes `refs/ref_prompts.md` (2 blocks per main character: `_turnaround`,
   `_expressions`) **instead of rendering**. On a later episode, skip characters whose sheets exist.
4. panel-director and letterer write the shot list and lettering spec as usual (50+ panels).
5. prompt-smith writes `ep{NN}_prompts.md` in the Flow format above.
6. Leader runs `handoff --episode NN`, then `TeamDelete`.
7. Leader writes `_workspace/04_visual/ep{NN}_flow_status.md`:
   ```
   state: WAITING_FOR_IMAGES
   round: 0
   cards: <number of character sheets> sheets, <number of panels> panels
   page: _workspace/04_visual/ep{NN}_flow_handoff.html
   ```
8. **Stop and hand over to the user.** End the turn with: the handoff page path (as a clickable link),
   how many images to make, the 3-line routine (attach refs, paste prompt, save with the exact name, or
   use the inbox), and the phrase to say when done ("images are ready" / "이미지 다 넣었어").
   Mention they can do it over several days; nothing is lost.

## Resuming (user says images are ready / import the inbox / redraws are ready)

1. Read `ep{NN}_flow_status.md` to know the round and which cards were requested.
2. If the user used the inbox: run `import` (dry run), show the mapping, and run `--apply` only after
   the user confirms it looks right.
3. Run `status --episode NN --fix`. If NOT READY, list exactly what is missing or broken and stop.
   Never invent or fill in missing images.
4. When READY, build a validation team `[panel-validator, prompt-smith]`
   (add `ref-sheet-artist` if sheets were part of this round):
   - ref-sheet-artist (if present) checks each sheet shows one consistent person, then writes `refs/INDEX.md`.
   - panel-validator runs the full 6-axis check (`webtoon-panel-render` "검증-재생성 루프") on the new
     or redrawn images and writes `ep{NN}_validation.md`, with C3 as the Khmer-edition "text-free and
     ready for bubbles" check (`webtoon-khmer-edition` §5).
   - For each REGEN, prompt-smith rewrites that block in `ep{NN}_prompts.md` (or `ref_prompts.md`) and
     adds `- redraw_reason:` in plain English.
5. If any REGEN: run `handoff --episode NN --only <names>`, set status `WAITING_FOR_REDRAW`, increase
   `round`, list the names, `TeamDelete`, and stop with the redraw page link and the reasons.
6. **Per-image cap: 3 redraw rounds.** After that, mark it ACCEPT-FLAG and move on. The user can also say
   "accept as is" / "그냥 진행", which makes every remaining REGEN an ACCEPT-FLAG.
7. All ACCEPT / ACCEPT-FLAG: set status `VALIDATED` and continue to Phase 5 (assembly) as normal.

Phase 5 FIX/REDO from quality-reviewer goes through the same redraw handoff (steps 4–6).

## Follow-ups

- **Next episode**: reference sheets are reused, so `handoff` only lists panels (pass `--refs` to show
  the sheets again).
- **"Redraw panel N"**: prompt-smith revises block N with a `redraw_reason`, then
  `handoff --only panel_N`, set status `WAITING_FOR_REDRAW`, and stop.
- **Re-running `.claude/skills/webtoon-harness/scripts/install.sh`** overwrites the Flow-mode notes
  added to the upstream agents and skills. Re-apply them afterwards.
