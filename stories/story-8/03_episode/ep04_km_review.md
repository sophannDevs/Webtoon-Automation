# EP04 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-25 14:34
- Finalized: 2026-11-25 14:36
- Script SHA-256: d02ce0cc95b20bd3a32bcf30142fec0939a54b682b6414b39d518a62f7775371
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep04_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep04_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep04_km_review_context.md`

## Summary

The EP04 Khmer already reads as natural spoken dialogue with clearly separated voices (Seokgu's soft ពូ/ក្មួយ/ណា៎ even in the cruel lines, Harin's ខ្ញុំ to him, Woojin's clipped lines, Saerom's playful S6 versus her particle-free S7 confession), so only three lines were changed: one timing/logic slip (P19 "it is already cold, drink it"), one unnatural reduplication in Mija's mask voice (P41), and one trailing ហើយ plus the lost "only" in Seokgu's P46 refusal. All binding clue words are untouched: P10 ចំណែកខាងនោះ, P12 the only បំណុល (negated question), P14 letter-identical to EP01 P37, ជួយបន្ថែម at P13–P16/P58, អាតូច once (P50), ជីដូន (P30/P36), លោះ/បញ្ចាំ (P27/P28), customer ភ្ញៀវ with no address term, ផង at P60, sound words reused from EP01–EP03 (ក្រីង ក្រីង!, គ្រូត…, ទក់!). No glossary gaps.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P19 · 석구 | សុកគូ៖ "ផឹកទៅ ក្មួយ។ ត្រជាក់អស់ហើយ។" | សុកគូ៖ "ផឹកទៅ ក្មួយ។ ក្រែងត្រជាក់អស់។" | "Drink it, it's already gone cold" is illogical as coaxing; the Korean 식는다 is "it's getting cold". | Same speaker, listener and coaxing tone; timing restored to "before it goes cold"; P05 ជិតត្រជាក់ continuity kept. |
| P41 · 미자 | មីចា៖ "អូយ ថ្ងៃនេះមកជុំគ្នាគ្រប់ៗណា៎~ ញ៉ាំបាយសិនទៅ!" | មីចា៖ "អូយ ថ្ងៃនេះថ្ងៃអីហ្នឹង មកជុំគ្នាគ្រប់គ្នា~ ញ៉ាំបាយសិនទៅ!" | ជុំគ្នាគ្រប់ៗ is not said; and 웬일로 ("what's the occasion") was missing. | Same cheerful mask voice (អូយ, ~), everyone gathered + eat first; no banned ក៏ used. |
| P46 · 석구 | សុកគូ៖ "ទេ ទេ។ ពូបកក្រូចឲ្យក្មេងៗ រួចទៅវិញហើយ។" | សុកគូ៖ "ទេ ទេ។ ពូគ្រាន់តែបកក្រូចឲ្យក្មេងៗ រួចទៅវិញ។" | Trailing ហើយ makes it sound like he has already left; the Korean 귤만 ("only") was lost. | Still a polite refusal, future intent (peel, then go), self ពូ kept; adds only the source's "just". |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P10 `…ចំណែកខាងនោះ។`** — unclear whether the bare fragment needs គឺ. Kept as is: as a trailing afterthought after P09 `អើ ចប់ហើយ។` it reads naturally, and ចំណែក also carries the "as for (that side)" contrastive sense, matching the Korean topic 은 ("that side's, not yours"). Adding គឺ would force only the "portion" reading. P11 confirms the restriction. No បំណុល added.
- **P12 `…ឬ?`** — considered a rhetorical ឯណា. Kept ឬ: equally faithful, gentle, and the editor-set line carries the only បំណុល; rule "keep the existing one".
- **P25 `សព្វថ្ងៃ គេចូលចិត្តជាងគេ។`** — ជាងគេ is the everyday superlative; the double គេ is normal shop talk. Kept.
- **P47 `ហត់ដល់យប់ជ្រៅណា៎`** — not made explicit as "work" (ធ្វើការ): the Korean 고생하더니 leaves it open, and the double meaning (he knows where she was) depends on that.
- **P55 `ថ្ងៃនេះ អូនយកទៅឲ្យហើយ។`** — no object; kept unstated, the empty envelope in the art carries it (as the source does).
- Repeated lines (P14 ×2, P22, P47 Harin, P48 ×2) and sound words checked byte for byte against EP01–EP03: unchanged.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

(none)

## Inputs read

- `_workspace/03_episode/ep04_script_final.md` (incl. writer and editor notes)
- `_workspace/03_episode/ep04_km_review_context.md` (all 7 scenes: profile excerpts, relationship notes, glossary rows, established dialogue)
- `_workspace/03_episode/ep01_script_final.md`, `ep02_script_final.md`, `ep03_script_final.md` (sound-word lines)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-25 14:36, round 1: **READY**
- This round: 3 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
