# EP02 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-25 10:50
- Finalized: 2026-11-25 10:51
- Script SHA-256: 4bd642f256a2738a97d905c7758c40519702f5713ca8d7a5eebd31979e0189d8
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep02_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep02_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep02_km_review_context.md`

## Summary

The EP02 Khmer already reads as natural spoken Cambodian: Harin stays dry and short (self `បង` to Woojin, `ចាស ម៉ែ` to her mother), Woojin stays blunt with `ខ្ញុំ`, Mija keeps `អូយ`/`ណា៎`/`~` at the table and switches to polite `ចាស`/`បងសុកគូ` only on the phone, consistent with EP01. Only two lines needed fixing, both small idiom fixes in Mija's table talk (a child "growing taller" and "eat first"). Every clue wording and constraint was kept untouched: P16 `លក់`/`បញ្ចាំ` split, P17–18 `ភ្លាម`, P20 without `ថែម`, P29 `កូនង៉ា`, P51 with `បងសុកគូ…` on its own, P53 `ថែមទៀត?`, P54 `ខ្ញុំជូនតិច…ថែម`, P55/P10/P11 durations, P57 L08, P58 mirroring P42; no `វា`/`ក៏`/`ដែរ`/`អាតូច`/`បំណុល`/`សង`/amounts. Note for script-editor (non-blocking): the editor's note at the end of the script still quotes the old P27 wording `ឡើងខ្ពស់`; the KM line itself is the reference.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P27 · 미자 | មីចា៖ "ពូសួរថា សែរ៉ូមនៅតែឡើងខ្ពស់ទៀតឬអត់~" | មីចា៖ "ពូសួរថា សែរ៉ូមនៅតែខ្ពស់ឡើងទៀតឬអត់~" | `ឡើងខ្ពស់` reads as "climb up high"; a child growing taller is `ខ្ពស់ឡើង` in speech. | Same reported question from uncle about Saerom still growing; `ពូ` still opens the bubble as the P28 trigger. |
| P40 · 미자 | មីចា៖ "អូយ មើលម៉ែនេះ ភ្លេចខ្លួនទៀតហើយ។ ញ៉ាំបាយសិនមក!" | មីចា៖ "អូយ មើលម៉ែនេះ ភ្លេចខ្លួនទៀតហើយ។ ញ៉ាំបាយសិនទៅ!" | `ញ៉ាំបាយសិនមក` is not how a mother urges people already at the table; `ញ៉ាំបាយសិនទៅ` is the natural "eat first". | Same self-scolding and same instruction to the family to eat; tone stays bright. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- P15 `បងឃើញនៅក្នុងថតរបស់ពូ`: considered dropping `របស់`, but `ថតពូ` can be misread as "photograph uncle" (`ថត` = to photograph). Kept the original.
- P41 `…ឬមួយប៉ាទៀត?`: the Korean 「혹시 아빠까지?」 leaves open whether Dad also knows or also pays. Kept the compressed Khmer so the ambiguity (and the misdirection toward Dad) stays; adding `ដឹង` would narrow it.
- P48 `ប៉ាក្មេងៗនៅក្នុងផ្ទះ។`: the Korean has an implied "so…"; the plain statement already explains why she stepped outside, so no causal word was added.
- P20 `បងនឹងធ្វើការរោងចក្រច្រើនម៉ោងជាងនេះ`: a shorter "extra hours" phrasing would need `ថែម`/`បន្ថែម`, reserved for the "pay more" chain. Kept.
- P19 `ដូចណាស់មែនទេ?`: `ដូចបេះបិទ` would be more vivid but is Harin's word in the P18 thought; kept the line distinct.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P41 `…ឬមួយប៉ាដឹងផង?`: smoother, but it fixes the meaning to "knows" and drops the source's open 「까지」. Kept `…ឬមួយប៉ាទៀត?`.

## Inputs read

- `_workspace/03_episode/ep02_km_review_context.md`
- `_workspace/03_episode/ep02_script_final.md` (including the speaker notes and editor's notes)
- Glossary rows and EP01 established dialogue as quoted in the context packet (`_workspace/02_story/glossary_km.md`, `_workspace/03_episode/ep01_script_final.md`)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-25 10:51, round 1: **READY**
- This round: 2 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
