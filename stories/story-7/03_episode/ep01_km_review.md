# EP01 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-24 14:00
- Finalized: 2026-11-24 14:02
- Script SHA-256: 9a29a92e654758da1e342087ee2465c70946064bbe8964b326df72529d3068b0
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep01_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep01_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep01_km_review_context.md`

## Summary

The EP01 Khmer already reads as speech. The voice contrast holds: Line uses short, complete sentences with dry irony tails (ហើយ, ណាស់, ម្ល៉េះ, ទេឬ). Heron uses plain statements with no particles and no royal words, always shorter than hers. Basil is polite on the surface and calls the hostage a thing. Only two lines were changed, both for natural spoken grammar (P18 conditional, P22 "lock up and keep"); every word chain (ធ្ងន់, កាន់, ភ្ញៀវ, ថ្លៃ→តម្លៃ→បង់, រស់, ខ្លាចខ្ញុំ, ថយ, ចាក់សោ) and the locked title ព្រះករុណា are unchanged. glossary_km.md was updated only to record this review's rulings (series title, ព្រះករុណា, នាគ); no spelling changed.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P18 · 리네 | លីណេ៖ "ពរល្អណាស់។ ខ្ញុំរស់យូរ អ្នកក៏បង់យូរ។" | លីណេ៖ "ពរល្អណាស់។ បើខ្ញុំរស់យូរ អ្នកក៏បង់យូរដែរ។" | Without បើ…ដែរ the second sentence sounds like two bare statements rather than the spoken "if I live long, you pay long too" twist. | Source has 면 (condition); same speaker, listener, irony and the រស់/បង់ chain; ខ្ញុំរស់យូរ kept verbatim. |
| P22 · 헤론 | ហេរ៉ុន៖ "អ្នកអាចចាក់សោខ្ញុំបាន។" | ហេរ៉ុន៖ "អ្នកអាចចាក់សោខ្ញុំទុកបាន។" | ចាក់សោខ្ញុំ alone sounds like locking an object; ទុក gives the natural "lock me up (and keep me)". | Matches 잠가 둘 수 있습니다; still a plain statement with no particle, ចាក់សោ echo of P08 kept, he still offers and she still holds the choice. |

## Decisions

- **Series title ស្រមោលមានស្លាប (ruling A): kept.** មាន + ស្លាប is the fixed "has wings" pairing (as in សត្វមានស្លាប), and ស្រមោលមានស្លាប់ would mean nothing, so a reader does not see a typo for ស្លាប់. Recorded in glossary §1.
- **Royal title ព្រះករុណា (title, P07, P37, P47, P54): kept, byte-identical.** Unclear: whether it reads as male-only. ករុណា carries no gender, and it is the right address for a reigning sovereign (not a consort). Heard twice addressed to her before P47, the bare ព្រះករុណា at P47 clearly moves her title to him. P47 is the term alone, Heron never uses it, and ស្តេច stays the common noun at P08 and P59. Recorded in glossary §8-1.
- **P06 នាគ vs ដ្រាហ្គន: kept នាគ.** Khmer dubs call western dragons នាគ too, P06 comes right after the wing shadow and ស្លាប at P04, and no water/serpent words go with it; ដ្រាហ្គន would sound like a game loanword in Basil's court speech. Recorded in glossary §8-2.
- **P15 ខ្ញុំជាតម្លៃ: kept.** តម្លៃ (price) is a different word from ថ្លៃ (expensive), so it does not read as "I am expensive". The longer ខ្ញុំជាតម្លៃដែលគេបង់ would make him longer than her and give away the P16 បង់ pickup.
- **P17: kept.** ដរាបណាអ្នកនៅរស់ / សូមរស់នៅឲ្យយូរ is plain, not the long-life blessing formula, so to her it sounds like resignation (she calls it ពរ at P18, which is her misreading) and the reader can ask why he wants her alive.
- **P63 word order: kept «…ខ្ញុំនឹងមិននិយាយទេ។ ពាក្យនោះ។».** Adding the object as an afterthought is normal in spoken Khmer, and it keeps the Korean pause. នឹងមិន makes it her choice, and ពាក្យនោះ points back to P61 ថយ: she chooses not to tell him to step back. The topic-first alternative is equally faithful but loses the beat, so the existing line stays (rule 3).
- **P26 នោះជាការភ័យខ្លាច / P54 ដោយចិញ្ចៀនខ្ញុំ: kept.** The first deliberately names no one who fears, in his slightly old-fashioned voice. The second reads as "by my ring (my authority)", which the drawing supports.
- SFX (ទុង, ក្រាក់, តុក, វ៉ឺត, ក្រាំង, ផាត់, ផុប) and the end caption with the Khmer digit ២ read naturally. Kept.

## Kept after the meaning check

- P40 «ខ្លាចខ្ញុំមានសេរីភាព។»: considered adding a subject or a question mark to make it smoother. Rejected because it would break the exact P39 frame and turn his plain answer into irony or a question.
- P53 «ពេលនោះ ខ្ញុំនឹងជឿ។»: considered adding លោកពូ. Rejected because it adds nothing the line needs and makes her second sentence longer.

## Inputs read

- `_workspace/03_episode/ep01_script_final.md` (incl. 작가 메모, 에디터 노트)
- `_workspace/03_episode/ep01_km_review_context.md`
- `_workspace/02_story/glossary_km.md`
- `_workspace/00_input/brief.md` (items 3–4, rulings A–U)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-24 14:02, round 1: **READY**
- This round: 2 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
