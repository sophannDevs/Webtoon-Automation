# EP04 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-22 13:52
- Finalized: 2026-11-22 13:53
- Script SHA-256: 3a0853f70846841e0c12ec0715f3e0a842300ad5231409659dd6a6221d008f85
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep04_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep04_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep04_km_review_context.md`

## Summary

The Khmer reads as natural spoken dialogue throughout and the speech levels hold: Doha uses បាទ only to the teacher (P36), Seoyun ចាស only to the teacher (P30, P32), Haram stays formal on duty with ចាស only to the teacher (P02) and addresses Doha as មិត្ត ប៉ែក ដូហា (P47). Four small fixes: two lines that read as compressed or ambiguous (P08 «ដាក់កាបូប», P10 «កាបូបប្រុស»), one bare reply that sounded unnatural (P17), and one line that lost the "even the bag" emphasis that makes it a clue (P20). All double-meaning and twist lines (P09, P12, P14, P21, P33, P34, P42, P43, P51, P58, P59, P60) were kept word for word: P42 and P51 still have no object, P51 and P58 are byte-identical, P14 is still read word by word (ឆែក… របស់… របរ) and pays off at P33. Reused lines match: P40 = ep03 P52, P49 ផ្លូវបួនមុខ សុលនែដុង = ep03, P07 echoes ep01 P43, P41 ឥឡូវពេលថ្ងៃ kept by design. No glossary gaps: every term used is already in glossary_km.md §1–§11; nothing to add.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P08 · 서윤 | សឺយូន៖ "អាវកាក់។ ចុងសប្ដាហ៍ខ្ញុំបោកវា ដល់ថ្ងៃច័ន្ទត្រូវដាក់កាបូបយកមក។" | សឺយូន៖ "អាវកាក់។ ចុងសប្ដាហ៍ខ្ញុំបោកវា ដល់ថ្ងៃច័ន្ទត្រូវដាក់ក្នុងកាបូបយកមក។" | «ដាក់កាបូប» is compressed and can be heard as "put the bag (down)"; the misdirection needs "put it IN the bag" heard clearly. | Same obligation (ត្រូវ), same timing (weekend wash, Monday bring), still literally true (she did bring it in the bag, P14–P15). |
| P10 · 서윤 | សឺយូន៖ "ឯងក៏ឆ្នាំទី២ដែរ។ បើគេឃើញអាវកាក់ស្រីក្នុងកាបូបប្រុស រឿងកាន់តែធំ។" | សឺយូន៖ "ឯងក៏ឆ្នាំទី២ដែរ។ បើគេឃើញអាវកាក់ស្រីក្នុងកាបូបក្មេងប្រុស រឿងកាន់តែធំ។" | «កាបូបប្រុស» sounds like a product type ("men's bag"), not "a boy's bag" (남자애 가방). | Same condition and consequence; only the noun phrase now matches 남자애. |
| P17 · 도하 | ដូហា៖ "មនុស្ស។" | ដូហា៖ "មនុស្សម្នាក់។" | A bare «មនុស្ស» as a reply sounds like "humans/people" in general; «មនុស្សម្នាក់» is the natural terse answer "someone". | Still true (he looked at one man), still gives no description, gender or identity; Doha's one-word style kept. |
| P20 · 예린 | យេរីន៖ "ហ៎? ឯងយកកាបូបចូលបន្ទប់ទឹកដែរ?" | យេរីន៖ "ហ៎? ឯងយកទាំងកាបូបចូលបន្ទប់ទឹកទៀត?" | «ដែរ» ("also") is not how surprise at "even the bag" (가방까지) is said; ទាំង…ទៀត carries it. | Same question to the same listener; the clue (taking the whole bag into the toilet) is now stressed as in the Korean; Seoyun's «…អឺ។» still answers truthfully. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P21 «…អត់អីទេ។» (그냥):** unclear whether it could read as "I'm fine / not hot" (a claim) rather than pure evasion. It is the standard evasive filler in speech, and the alternative «អត់មានហេតុអីទេ» ("no reason") would be an actual lie in an episode where nobody lies. Kept as is.
- **P30 «…ខ្ញុំបើកហើយ ចាស។» (열게요):** checked timing: V + ហើយ here is the spoken "I'm about to / opening now" (as in ខ្ញុំទៅហើយ), not "already opened". Kept.
- **P06 «ខ្ញុំប្រាប់ហើយថា ខ្ញុំមិនកុហក។»:** echoes ep03 P25 «ខ្ញុំមិនកុហកទេ» without being byte-identical; the Korean is a different sentence (안 한다고 했잖아), so the reported-speech form stays. P15 uses the same frame with ចាត់ចែង, which ties back to P12. Kept.
- **P07:** the Korean differs from ep01 P43 (this time Seoyun herself must open), so «ខ្ញុំត្រូវបើកកាបូបខ្លួនឯង» stays; «មានគ្រូបន្ទុកថ្នាក់នៅជាមួយ» repeats ep01 P43 exactly.
- **P46 first line has no subject** («…ក៏មកដល់មុនគេ»): the Korean also leaves it implicit and Haram is facing Doha; P47 names him. Kept.
- **P09 «កុំសម្រេចតាមចិត្តឯង»:** «កុំធ្វើតាមចិត្តឯង» would be slightly more common, but សម្រេច (decide) names Doha's flaw that the script's note says must be set up. Kept.
- **P41 ឥឡូវពេលថ្ងៃ** kept (morning break, not noon); **P45 ថ្ងៃត្រង់** kept (it is lunch).

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P42 «ព្រោះមិនត្រូវការលុយ។» (adds "money"): rejected, it fills the object the double meaning needs empty.
- P51 «អញ្ចឹង ខ្ញុំបញ្ចប់រឿងនេះ។» (adds "this matter"): rejected, it fills the object; P51/P58 stay «អញ្ចឹង ខ្ញុំជាអ្នកបញ្ចប់។» byte for byte.
- P14 a single smooth sentence instead of «ឆែក… របស់… របរ។»: rejected, the word-by-word reading is the clue paid off at P33.

## Inputs read

- `_workspace/03_episode/ep04_script_final.md` (whole script incl. 편집 노트 §1–§6)
- `_workspace/03_episode/ep04_km_review_context.md` (files table, repeated lines, scene 1 packet)
- `_workspace/02_story/glossary_km.md`
- `_workspace/03_episode/ep01_script_final.md` (P43 rule recital, P44 lines, via search)
- `_workspace/03_episode/ep02_script_final.md` (P38 ថ្ងៃត្រង់ line, via search)
- `_workspace/03_episode/ep03_script_final.md` (P25, P52, ផ្លូវបួនមុខ សុលនែដុង spelling, via search)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-22 13:53, round 1: **READY**
- This round: 4 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
