> **EXAMPLE ONLY.** Shows what `_workspace/03_episode/ep{NN}_km_review.md` looks like: the report the
> Native Khmer Agent Reviewer writes at the end of Phase 3. This is the real output of a test run on a
> made-up four-panel EP02 of the pawnshop example story (a younger brother wrongly calling his older
> sister អូន, and one line with no Khmer). The second part shows a question that stopped the workflow
> (NEEDS REVIEW) and how it reads once the author answered. Not used by the harness; safe to delete.

# EP02 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a human native speaker.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-20 10:49
- Finalized: 2026-11-20 10:50
- Script SHA-256: ae2e3ffd28b4437197745129a13dc006232bf71de53f38fc168c0905fd199e31
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep02_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep02_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep02_km_review_context.md`

## Summary

The Khmer in this short episode is natural and correctly spelled: Seoyun's polite request to her boss (P01) and the phone-ring sound effect (P02) are kept as written. One form of address was reversed: in P03 Seojun called his older sister អូន, which a younger sibling never does; it is now បង, as in the voice table, the glossary and his approved EP01 line. The missing KM line for Seoyun's reply in P04 was added in her sibling register (អូន for him, short and dry). Note for script-editor (not blocking): the editor's note says "대사 4", but the script has 3 dialogue lines and 1 sound effect, and 도진 has no line in this episode; please confirm no Korean line was dropped (for example a reply from 도진 in P01).

## Changes

| Ref | Original KM | Revised KM | Reason |
|---|---|---|---|
| P03 · 서준 | សឺជុន (តាមទូរស័ព្ទ)៖ "អូន ញ៉ាំបាយហើយឬនៅ?" | សឺជុន (តាមទូរស័ព្ទ)៖ "បង ញ៉ាំបាយហើយឬនៅ?" | He is her younger brother, so he must call her បង (누나), never អូន. |
| P04 · 서윤 | (missing) | សឺយូន៖ "នៅទេ។ ចុះអូនវិញ?" | Added the missing line: "not yet, and you?" to her younger brother, using អូន as the glossary sets. |

## Open questions

(none)

## Resolved questions

(none)

## Inputs read

- `_workspace/03_episode/ep02_km_review_context.md`
- `_workspace/03_episode/ep02_script_final.md` (whole script, speaker/voice table and editor's notes)
- `_workspace/02_story/characters.md`
- `_workspace/02_story/glossary_km.md`
- `_workspace/03_episode/ep01_script_final.md`
- Not present (listed as missing in the packet): `ep02_beatsheet.md`, `02_story/twist-plan.md`, `06_assembly/continuity.md`. The editor's note says the episode has no twist, so no ⟨이중의미⟩ / ⟨반전⟩ / ⟨ECHO⟩ lines needed checking.

<!-- km_review.py checks -->
## Tool checks (km_review.py finalize)

- Finalized 2026-11-20 10:50, round 1: **READY**
- This round: 1 KM line(s) edited, 1 KM line(s) added; Korean lines, speaker labels, panel order and formatting unchanged (compared with the pre-review copy)
- Every change is in the Changes table: yes
- Line pairing: OK
- Open questions: 0
<!-- /km_review.py checks -->

---

## Second part (from the test's EP03): a question that paused the workflow

Round 1 ended **NEEDS REVIEW**: `km_review.py gate` stayed closed and the shot list did not start until
the author answered. In round 2 the question moved to "Resolved questions":

### Resolved questions (EP03, round 2)

#### Q1 · P02 · 도진
> 도진: "나비 못 봤어요?"
> KM: ដូជីន៖ "ឃើញណាប៊ីទេ?"
> KM: សឺយូន៖ "វាដេកនៅលើតុ។"

**Question:** The second KM line is Seoyun's answer ("It's sleeping on the table"), but the Korean has no line for her. The stage direction does not mention Nabi or a table, and the editor's note counts 3 dialogue lines, which matches the Korean. Should a Korean line for Seoyun be added under Dojin's line (for example 서윤: "테이블 위에서 자고 있어요."), or is this KM line left over and to be deleted? If her line is added, I will adjust the Khmer in the next round to her polite register with her boss (for example ចាស at the start).

**Answer (author, 2026-11-20):** Yes, Seoyun answers Dojin there. Add her line 서윤: "테이블 위에서 자요." The KM line is not a leftover.

**Done:** script-editor added 서윤: "테이블 위에서 자요." directly above her KM line in P02 (Korean change made before round 2). In round 2 the KM line was kept and set to her polite register with her boss: សឺយូន៖ "ចាស វាដេកនៅលើតុ។" (see Changes).

