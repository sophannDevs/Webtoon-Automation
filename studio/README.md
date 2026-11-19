# Story Studio

A web UI for running every webtoon story in this repo, from the first brief to the released
Khmer episode. This folder holds the **static preview**: it shows the real state of each story,
but its buttons don't run anything yet.

## Open it

- Double-click `studio/index.html`, or
- serve the folder and open `http://localhost:8765`:

  ```bash
  python -I -m http.server 8765 --bind 127.0.0.1 --directory studio
  ```

## Refresh the data

`data.js` is generated. Each story lives in its own folder under `stories/` on `main`; the export copies each folder
into a temporary `_workspace/`, runs `km_tool.py check` and the Flow prompt parser, and
writes the result. Nothing in the repo changes except `studio/data.js`.

```bash
python -I studio/export_data.py
```

Stories and their branches are listed at the top of `export_data.py` (titles, cast and twists are
written there; panel counts, Khmer checks, Flow cards and step states are read from the files).

| Story | Branch |
|---|---|
| 「수칙 4번은 거짓말입니다」 | `stories/rule4/` |
| 「독은 제가 먼저 먹겠습니다」 | `stories/poison/` |
| 「맑은 날의 우산」 | `stories/umbrella/` |

## What the preview shows

- **Home:** every story, its progress, and one "Waiting for you" list across all stories.
- **Story:** titles (Korean and Khmer), logline, the 7 setup stages, episodes with their twists,
  season map and cast.
- **Episode:** the 8 episode stages, Khmer check result, Flow notes, and every Flow card.
- **Card:** full prompt with Copy, the images to attach in Flow, and a drop zone (preview only).

## The idea: the full process on one screen

Each story goes through 15 stages. Claude stages are runs started by a button; the others are
your steps (make something in Flow, or approve).

| # | Stage | Who | Output |
|---|---|---|---|
| 1 | New story form | You | Brief, branch, story folder |
| 2 | Research | Claude (research team) | 5 research files, 2–3 story packages |
| 3 | Pick a package | You | Locked decisions in the brief |
| 4 | Story bible | Claude (scenario team) | Concept, world, cast, season map, twists, Khmer glossary |
| 5 | Approve story bible | You | Approve, or notes that start a fix run |
| 6 | Art setup | Claude (art director, sheet artist) | Style bible, character sheets, sheet prompts |
| 7 | Sheets in Flow | You | Reference sheet images |
| 8 | Episode script | Claude (scenario team) | Beat sheet, script, final script with Khmer |
| 9 | Approve script | You | Korean and Khmer side by side, optional native check |
| 10 | Visual prep | Claude (visual team) | Shot list, Khmer bubbles, Flow prompts, handoff |
| 11 | Panels in Flow | You | 50+ panel images |
| 12 | Validate | Claude (validator, prompt smith) | Redraw list, back to 11 (max 3 rounds) |
| 13 | Assemble and QA | Claude (assembly team) | Khmer viewer, QA report, continuity |
| 14 | Approve release | You | Release package and commit |
| 15 | Push | You | Push only on your click; the next episode starts at 8 |

### How the real Studio would work

- **Server:** Flask on `127.0.0.1`, in this folder. Stage state still comes from the story files.
- **Claude runs:** each Claude stage has a fixed instruction (one editable file per stage). The
  Run button starts Claude Code in the background inside that story's folder, streams the log to
  the page, then checks the expected files and stops at the next "your" stage.
- **Your notes:** typed at an approve stage, they start a fix run and re-run only what they affect.
- **Permissions:** normal work is allowed; anything else asks in the UI. `git push`, `codex` and
  any automation of the Flow website are always blocked.
- **Many stories:** one branch and one git worktree per story, so every story has its own
  `_workspace/`, the agents work unchanged, and stories can run side by side (with a limit on
  how many run at once).
- **Rules kept from `CLAUDE.md`:** readers see only Khmer, images contain no text, images are made
  by hand in Google Flow, the viewer is built only by `km_tool.py build`.

### Build order

1. Story board, New story form, job runner with live log, stages 1–5.
2. Stages 6–10 and the Flow studio with real image upload.
3. Stages 11–15 (validation, redraws, viewer preview, release, commit, push).
4. Several stories at once (worktrees), job queue and limits, cost report.
