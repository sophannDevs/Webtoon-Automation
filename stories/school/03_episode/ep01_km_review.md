# EP01 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-21 18:49
- Finalized: 2026-11-21 18:52
- Script SHA-256: f0d05444d3f2516e3d9258cca3bc22a7c7122d7ab51394bf093b50131e6a562e
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep01_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep01_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep01_km_review_context.md`

## Summary

The ep01 Khmer already reads as natural, character-specific speech (Seoyun's brisk ឯង/ខ្ញុំ, Doha's clipped replies and បាទ only to adults, Haram's official register with មិត្ត), so 67 of 74 dialogue lines were kept. Seven lines were fixed: three stiff or calqued phrasings (P05, P10, P43), one ambiguous time phrase (P17), one truncated formula (P31), one line whose timing read as "already over" instead of "one record would end it" (P34), and the flagged P26 clue, which now keeps the Korean "일" ambiguity. All ⟨이중의미⟩/⟨반전⟩ lines (P10, P16, P19, P22, P25, P26, P33, P50, P51, P52, P59, P60) were checked and still carry both readings; P02 and P58 remain byte-identical. Note for continuity-manager: ឡានក្រុង (P48, 버스) is the correct everyday Khmer word for the bus and should be registered in glossary §7 since the 21:44 bus recurs; no new terms were introduced by this review.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P05 · 서윤(생각) | សឺយូន (គិត)៖ "…ទើបតែលើកទីមួយ។" | សឺយូន (គិត)៖ "…ជាលើកដំបូង។" | ទើបតែលើកទីមួយ is a stiff ordinal and reads like "only the first time", not the stunned "first time ever" of the thought. | Still the bare "…처음이야": the first time she has been second, nothing added. |
| P10 · 담임 | លោកគ្រូ៖ "អាហារូបករណ៍ មិនទាន់ចប់ទេ។ ដល់ឆមាស ត្រូវនៅក្នុងលេខ៣ គ្មានពិន័យមួយ។ ដឹងហើយណា?" | លោកគ្រូ៖ "អាហារូបករណ៍ មិនទាន់ចប់ទេ។ ដល់ឆមាស ត្រូវនៅក្នុងលេខ៣ ហើយពិន័យមួយក៏មិនបាន។ ដឹងហើយណា?" | គ្មានពិន័យមួយ is a word-for-word calque of "벌점 하나 없이" and does not sound spoken. | Same conditions (within 3rd, zero penalties) and the double-meaning clause មិនទាន់ចប់ទេ is untouched. |
| P17 · 도하 | ដូហា៖ "…មួយនាទីមុននេះ ឯងបត់បានបីហើយ។" | ដូហា៖ "…ទើបតែមួយនាទី ឯងបត់បានបីហើយ។" | មួយនាទីមុននេះ reads as "a minute ago", not "within the last minute". | Three cranes folded within one minute, flat 잖아 tone kept with ហើយ; still covers P16's នៅតែ with the first reading. |
| P26 · 도하 | ដូហា៖ "ជាថ្នូរ សៀវភៅលំហាត់ខុសរបស់ឯងទាំងអស់។ ហើយធ្វើការរួច ទាក់ទងមក។" | ដូហា៖ "ជាថ្នូរ សៀវភៅលំហាត់ខុសរបស់ឯងទាំងអស់។ ហើយបើរួចការ ទាក់ទងមក។" | ធ្វើការ means a job, so Doha openly states he knows she works, flattening the editor-flagged clue. | Spoken រួចការ ("when you're done with your stuff") is as broad as Korean "일": first reading is errands, reread is her night shift; condition and request unchanged. |
| P31 · 하람 | ហារ៉ាម៖ "សូមអបអរ។ លេខ១ និងលេខ២ សមគ្នាណាស់។" | ហារ៉ាម៖ "សូមអបអរសាទរ។ លេខ១ និងលេខ២ សមគ្នាណាស់។" | សូមអបអរ alone is a truncated formula; the full set phrase fits Haram's stiff official politeness. | Same congratulation and the same "1st and 2nd suit each other" jab. |
| P34 · 하람 | ហារ៉ាម៖ "អញ្ចឹង ឥឡូវមានកំណត់ត្រាតែមួយ គឺចប់ហើយ មិត្ត ហាន សឺយូន។" | ហារ៉ាម៖ "អញ្ចឹង ឥឡូវបើមានកំណត់ត្រាតែមួយ ក៏ចប់ហើយ មិត្ត ហាន សឺយូន។" | The line read as a statement that a record already exists and it is over. | Corrected to the source's conditional "기록 하나면 끝": one record would end it; address មិត្ត ហាន សឺយូន kept. |
| P43 · 서윤 | សឺយូន៖ "ទីបី ប៉ះកាបូបអ្នកដទៃ ខ្លួនវាជាការល្មើសហើយ។" | សឺយូន៖ "ទីបី គ្រាន់តែប៉ះកាបូបអ្នកដទៃ ក៏ជាការល្មើសហើយ។" | ខ្លួនវា is a literal calque of "그 자체로" and sounds translated. | Same rule: touching another's bag is itself a violation; glossary term ការល្មើស and the ទីមួយ/ទីពីរ/ទីបី count kept. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P26 ធ្វើការរួច (flagged by script-editor).** Unclear whether the job-specific word gives away too much by P26. The reader knows Seoyun works at the store, but Seoyun has just offered the alibi that she was there to meet Doha, so Doha should not say outright that he knows she works. Chose រួចការ, which keeps the Korean "일" two-way reading; the clue (he never asks when she finishes, and clause 3 puts it after 10 p.m.) survives.
- **P02 / P58.** Kept byte-identical as required. «មានរបស់ផុតកំណត់ថ្ងៃនេះ… ទេ?» is a natural customer question; no gender, age or kin word is assigned to the hooded speaker, so the hidden identity stays hidden.
- **P25 យល់ព្រម។** Considered the more casual បាន។ for a teenager, but kept យល់ព្រម: it is said in answer to a contract clause, and the instant formal "agreed" serves the double meaning (he already knows the answer). Two versions equally faithful: kept the existing one.
- **P33 tense.** បដិសេធ has no ហើយ, but គេថា plus the next line (វេនធ្លាក់មកលេខ២) make the past clear; kept as is.
- **P48 ឡានក្រុង.** Verified: it is the ordinary spoken Khmer word for a (city) bus and «ឡានក្រុង… បួននាទីទៀត។» matches "버스까지 4분". Kept. Not added to the glossary by this review (the reviewer does not edit the glossary and introduced no new term); registration is recommended to continuity-manager in the Summary.
- **P50 subject.** គ្រាន់តែឃើញម្ដងយប់មិញ leaves the seer unstated, as the Korean does; kept, since the misdirection depends on it.
- **P52.** Subject of មិនមក left empty, as in the Korean, so the regular customer is not identified.
- **Other double-meaning lines** (P16 នៅតែ…ទៀត, P19 មិនយកទេ, P22, P51, P59, P60) checked against the editor's table: both readings intact, kept unchanged.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P12 «មិនខុសទេ។» → «អត់ខុសមួយសោះ។» rejected: adds emphasis Doha's flat one-word style and the Korean "안 틀렸어" do not have.
- P26 «…ហើយបើរួចការ» → «…ហើយទំនេរហើយ ទាក់ទងមក» ("when you're free") rejected: loses the work reading the clue depends on.

## Inputs read

- `_workspace/03_episode/ep01_script_final.md` (scene by scene, with the editor's notes)
- `_workspace/03_episode/ep01_km_review_context.md` (scene sections and character excerpts)
- `_workspace/02_story/glossary_km.md`
- `.claude/skills/webtoon-khmer-edition/SKILL.md` (§1, §1b, §2)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-21 18:52, round 1: **READY**
- This round: 7 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
