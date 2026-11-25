# EP03 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-25 11:58
- Finalized: 2026-11-25 12:00
- Script SHA-256: e61b614663c1adc708b84381257acdf288945e98a048a41d7df0a12cecbbbac2
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep03_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep03_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep03_km_review_context.md`

## Summary

The EP03 Khmer already reads as natural spoken Cambodian speech: Mija's two voices (bright mask with អេះ/អូយ/ណា៎~ vs. short, low unmasked lines), Woojin's clipped 2-5 word replies, Saerom's ~, and the new supplier's grandfatherly តា/ចៅ/ចៅអើយ/ហាៗ/អើ៎/តើ/ម្ល៉េះ voice are all consistent and distinct, and every address form fits the relationship as the reader knows it. Only one line changed (a spelling fix in P27); all 72 KM lines were read in both passes and the rest were kept. All binding clue lines were checked and left byte-for-byte: P54 (រឿងហ្នឹង + ចប់ហើយ + បីឆ្នាំ, one bubble), P55 (សុកគូ + យក…មកឲ្យ, no father, no owner of the money, no សង), P57 ដែលបានលុយវិញ, P50 ប្រពន្ធតា, P33 truncated E01-M echo, P32/P34 ខាងនោះ, "too" as ផង/ដូចគ្នា, "who" as នរណា; no banned word, number or currency appears. Note for continuity-manager (non-blocking): EP01 KM uses នឹង for "and" (e.g. ដឹងតែឯងនឹងពូទេ); the standard spelling is និង.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P27 · 미자 | មីចា៖ "ប៉ា នឹងសែរ៉ូម… កុំឲ្យដឹង។" | មីចា៖ "ប៉ា និងសែរ៉ូម… កុំឲ្យដឹង។" | Misspelling: the conjunction "and" is និង; នឹង is the future/"with" marker. | Same people (Dad and Saerom), same negation កុំ, same hushed pause; only the spelling changed. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- P34 `មិនមែនពូទេ។` (「삼촌 말고.」): could read as "it isn't Uncle" rather than "not Uncle, someone else". Kept: it is the locked E03-R line, it cuts off Mija's unfinished `ពូគាត់ចាត់ចែង…` naturally as a spoken correction, and the next bubble (`អ្នកស្គាល់មុខពួកខាងនោះ…`) makes the "someone other than Uncle" sense clear.
- P26 `…ដល់ទៅបីនាក់។` (「…셋이나.」): the Korean counts envelopes; the Khmer counts people (នាក់). Kept: three envelopes = three of the family paying, which is exactly Mija's shock, and a Khmer mother would say it about the people.
- P44 `ខ្ញុំជាកូនស្រីច្បង។`: slightly formal, but a polite young woman introducing herself to an elder stranger would say it; the formality matches Harin's careful ខ្ញុំ with the supplier. Kept (rule: equally faithful and natural → keep existing).
- P17 `លាក់ទុកឯណា?` adds "hide" to 「어디 둬?」. Kept: the scene is about hidden envelopes and P18 (ធុងអង្ករ) answers it; the verb is what a Khmer speaker would use here.
- P13/P14/P16/P25/P29 "too" as ដូចគ្នា / ផង: natural spoken Khmer; kept per the script's rule against ក៏…ដែរ (the EP01 clue construction).
- P27 spelling vs. EP01 continuity: EP01 wrote "and" as នឹង; this is not a repeated line, so the correct spelling និង was used here and the EP01 form was only noted for continuity-manager.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P55: a smoother `សុកគូ យកលុយលើកចុងក្រោយមកឲ្យតា` was rejected: it adds លុយ to the twist line and moves it toward whose money / repayment, which the source keeps unsaid.
- P54: splitting into two bubbles or replacing `ចប់តាំងពី…ម្ល៉េះ` with a shorter `បីឆ្នាំមុន` was rejected: it would weaken the doubled ចប់ that P57 `…ចប់ទាំងអស់?` asks back about.
- P58 `អស់លំបាកហើយ`: a warmer `ស្រួលហើយ` was rejected: it loses the "hardship is over" double meaning.

## Inputs read

- `_workspace/03_episode/ep03_script_final.md` (whole file, incl. writer's and editor's notes)
- `_workspace/03_episode/ep03_km_review_context.md` (all six scenes)
- `_workspace/03_episode/ep01_script_final.md`, `_workspace/03_episode/ep02_script_final.md` (sound words 딸랑 / 드르륵, established dialogue via the packet)
- `_workspace/02_story/glossary_km.md` rows via the packet

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-25 12:00, round 1: **READY**
- This round: 1 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
