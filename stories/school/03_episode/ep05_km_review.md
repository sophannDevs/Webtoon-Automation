# EP05 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-23 06:15
- Finalized: 2026-11-23 06:18
- Script SHA-256: 9237ec76400aebbf1248d7427b9a6cf78d96a5075781a4d1796b792ac82725e9
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep05_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep05_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep05_km_review_context.md`

## Summary

The Khmer reads as natural spoken dialogue and the speech levels hold: Doha uses បាទ only to the owner (P44, P45), Haram stays formal on duty (មិត្ត, no casual particles), Seoyun adds ចាស only to the owner (P41, P42, P45), the owner ends on food («ញ៉ាំសិនទៅ។», = ep02 byte for byte), and 8-year-old Seoyun speaks in short bossy imperatives under the label សឺយូន (៨ឆ្នាំ). Four small fixes: one line that did not sound like a question its answer replies to (P35), one stiff exam-style question that lost Haram's musing tone (P24), one imperative that could be heard as "look at yourself" (P50), and the owner's P46 first line, which repeated សិនទៅ and lost the 와/가 contrast. Every double-meaning and twist line (P01, P17–P19, P21, P30, P35 answer, P44, P45, P48, P59, P60, P63, P65) is kept word for word; the nickname «អាវ៉ែនតា» appears only at P65 and វ៉ែនតា is spoken nowhere before it; ប្ដឹងខ្លួនឯង (P21, P26) and សារភាពខ្លួន (P25) stay distinct. Glossary: no gaps; every term used is already in glossary_km.md §1–§12 (nothing to add for continuity-manager).

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P24 · 하람 | ហារ៉ាម៖ "តើគេបានឃើញអ្វី?" | ហារ៉ាម៖ "តើគេបានឃើញអ្វីទៅ?" | Reads like a flat exam question; the Korean 뭘 본 걸까요 is a pointed "I wonder", which ទៅ supplies while តើ/អ្វី keep Haram's formal duty register. | Same subject (the first reporter, still the gender-neutral គេ), same past seeing, same unanswered question; nothing about who it is is added. |
| P35 · 서윤 | សឺយូន៖ "អញ្ចឹងវាជាអី?" | សឺយូន៖ "អញ្ចឹងម៉េចវិញ?" | Literal "then what is it?" asks what the object is, so Doha's «គេឲ្យខ្ញុំ។» did not sound like a reply; «អញ្ចឹងម៉េចវិញ?» is the spoken "then what's the story?" that his answer fits. | Still the follow-up to "you didn't fold it" (그럼 뭔데); Doha's double-meaning answer «គេឲ្យខ្ញុំ។» and its P36 quote are untouched. |
| P46 · 사장님 | ថៅកែ៖ "…ពីរនាក់ឯង ទៅព្រមព្រៀងគ្នាឲ្យស្រួលសិនទៅ។" | ថៅកែ៖ "…ពីរនាក់ឯង ទៅព្រមព្រៀងគ្នាឲ្យស្រួលសិនមក។" | «សិនទៅ» twice in a row (with «ញ៉ាំសិនទៅ។») sounded repetitive and flattened the joke; ទៅ…សិនមក is the spoken "go sort it out and come back", restoring the 하고 와 / 먹고 가 contrast. | Same listeners (both of them), same instruction (agree with each other first), same deadpan tone; «ញ៉ាំសិនទៅ។» stays byte-identical to ep02. |
| P50 · 도하 | ដូហា៖ "មើលខ្លួនឯងទៅ។" | ដូហា៖ "មើលផ្ទាល់ទៅ។" | «មើលខ្លួនឯង» is first heard as "look at yourself"; «មើលផ្ទាល់ទៅ» is the natural "see for yourself" (직접 봐). | Same imperative to Seoyun, still no object named (he hands her the keyring instead of answering); nothing is revealed early. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P48 «ខ្ញុំនៅចាំ។» (기다렸어):** does the second reading "I still remember" give too much away before the ending? Decided to keep it exactly, with no object. The reply to «…ឯងមិនទៅទេឬ?» fixes the first reading ("I stayed and waited"); the second reading is only a hint (it says nothing about what he remembers, who folded the crane, or the nickname), which is what the ⟨이중의미⟩ W4·W8 tag asks for, and the reader already holds the keyring/crane clues (P09, P33–P35) by this point. Adding ឯង would kill the second reading; changing the verb would kill the foreshadowing.
- **P03 «…មិនបាច់ទេ។» vs ep03 P44 «…បានហើយ។» (same Korean …됐어):** the packet flags the difference. ep03's 됐어 deflects thanks ("fine, enough"); here it closes a refused explanation ("never mind, no need"). Different senses, both natural, the line is not marked as an echo, so the existing Khmer is kept.
- **P65 «ឯងមិនដឹងឈ្មោះផង។»:** considered «…ទេតើ។» for 잖아; ផង ("you didn't even know the name") is equally natural and faithful, and it keeps "name" unpossessed so the reveal stays in the second bubble. Kept.
- **P65 «អាវ៉ែនតា»:** the natural nickname Cambodian children give a boy in glasses; confirmed វ៉ែនតា appears in no KM line before P65 (flashback P53–P61 uses only ហេ៎ ឯង! and ក្មេងនោះ). Kept.
- **P09 «នៅតែពាក់អាហ្នឹងទៀត។»:** ពាក់ for a keyring on a bag (vs ព្យួរ) is common spoken usage; kept.
- **P23 «…គ្មានអីឲ្យខ្ញុំមើលទៀតទេ។»:** the Korean now says 확인; មើល is kept because ep04 P49 rendered Haram's 직접 확인 as ទៅមើលផ្ទាល់, so the line closes that same plan in the same word.
- **P28 ក្រដាស (Seoyun) vs សំបុត្រ (Haram):** Seoyun's casual "that paper" is natural in an argument; Haram's term is the formal one. Kept both.
- **P01 «អឺ។ ខ្ញុំដាក់ហើយ។»:** answers ep04 P60 «…គឺឯងទេតើ?» directly; no object, as required. Kept.
- **Repeated wording verified:** P39 «ហួសម៉ោង១០ហើយ។ ប្រការ៣។» = ep02 P02 + P03 word for word; P57 «មួយនេះ ផុតកំណត់ថ្ងៃនេះ។» = ep01 P03 minus ចាស; P60 is its negation; P44 ភ្ញៀវប្រចាំ = ep02; P23 ទីកន្លែងផ្ទាល់ = ep04 P49; P22/P24 សំបុត្រដំបូង = ep04 P59; P19 «ឆ្នាំទី២ ថ្នាក់ទី១ ប៉ែក ដូហា។» = ep01 broadcast; P25 សារភាពខ្លួន = ep04 P54.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P48 «ខ្ញុំនៅចាំឯង។» (adds "you" to make the waiting explicit): rejected, it kills the second reading «I still remember» that the script's double-meaning table relies on.
- P65 «ឯងមិនដឹងឈ្មោះខ្ញុំផង។» (adds "my"): rejected, it would land the reveal in the first bubble instead of the second.
- P35 answer «ឯងឲ្យខ្ញុំ។» or a named giver: rejected, the vague គេ must stay so the giver is not named before P63–P65.
- P32 «ខ្ញុំមិនដែលសុំឲ្យឯងការពារខ្ញុំទេ។» (smoother than បិទបាំង…ឲ្យខ្ញុំ): rejected, "protect" is not "cover for me" (덮어 달라고); original kept.

## Inputs read

- `_workspace/03_episode/ep05_script_final.md` (whole script incl. 편집 노트 §1–§6)
- `_workspace/03_episode/ep05_km_review_context.md` (files table, repeated lines, scene 1 packet)
- `_workspace/02_story/glossary_km.md` (§1–§12)
- `_workspace/03_episode/ep04_script_final.md` (P51–P60, via reading) and `ep04_km_review.md`
- `_workspace/03_episode/ep01_script_final.md`, `ep02_script_final.md`, `ep03_script_final.md` (recurring terms and lines, via search: ep01 P03, clause wording, ep02 P02–P03 and ញ៉ាំសិនទៅ, ep03 P44 …បានហើយ)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-23 06:18, round 1: **READY**
- This round: 4 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
