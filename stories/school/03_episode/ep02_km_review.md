# EP02 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-22 02:46
- Finalized: 2026-11-22 02:49
- Script SHA-256: 7547394f2d76ea9db3dbb45803b9fffdd92bc42b60ace144c42ea469fa86a677
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep02_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep02_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep02_km_review_context.md`

## Summary

Most of the ep02 Khmer already reads as natural spoken Cambodian dialogue and keeps every voice from ep01: Seoyun and Doha on ខ្ញុំ/ឯង with full names, Seoyun's ចាស only to the owner, Doha's បាទ only to the teacher (P36) and never to Haram, Haram's on-duty មិត្ត/សិស្ស register with the slips into plain speech at P33 and P46. Six lines were changed: P40's quoted clause now matches ep01 P26 clause 6 byte for byte, and five lines were fixed for stiff or literal wording (a written តើ in a thought, an awkward relative clause, a misused សោះ, a repeated រៀនគួរ, and កាត់ where ឆ្លងកាត់ was meant). All double-meaning and twist lines (P10, P15, P25, P27, P29, P31, P42, P61) were kept as they are, and so were the repeated terms (ឯងដឹងតាំងពីពេលណា, the bus times, ផ្ទេរសាលា, ឆ្លងផុត). Glossary note for continuity-manager: no new term is required; optionally record P40's echo of clause 6 and the time format ម៉ោង៩ ៤៤នាទី as the house style for clock times.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P11 · 서윤(생각) | សឺយូន (គិត)៖ "តាំងពីដំបូង… តើពីពេលណាទៅ?" | សឺយូន (គិត)៖ "តាំងពីដំបូង… ចុះដំបូងនោះ ពេលណា?" | The written question frame តើ…ទៅ sounds stiff in a half-asleep inner thought. | Still picks up Doha's ep01 P60 «តាំងពីដំបូង» and asks when that start was; nothing is added. |
| P37 · 서윤(생각) | សឺយូន (គិត)៖ "…ខាងនោះ ជាផ្លូវដែលឡានក្រុងខ្ញុំជិះទៅ។" | សឺយូន (គិត)៖ "…ខាងនោះ ជាផ្លូវឡានក្រុងខ្ញុំទៅ។" | Too literal: ដែល…ជិះទៅ makes it sound as if the bus is riding, which is clumsy. | Still says that direction is the route her bus takes, with the same TB-V2 clue and no added implication. |
| P40 · 도하 (2nd line) | ដូហា៖ "ឯងសរសេរខ្លួនឯងថា អ្នកស្រលាញ់ពិតមុន ត្រូវប្រាប់អាថ៌កំបាំង។" | ដូហា៖ "អ្នកណាស្រលាញ់ពិតមុន ត្រូវប្រាប់អាថ៌កំបាំងមួយ។ ឯងជាអ្នកសរសេរខ្លួនឯង។" | The quoted clause did not match ep01 P26 clause 6 (it was missing ណា and មួយ), and the order was reversed from the Korean. | Clause 6 now matches ep01 byte for byte; the second sentence keeps «네가 썼잖아» and echoes P04 «ខ្ញុំជាអ្នកសរសេរ»; the first line (subject left open, double meaning) is unchanged. |
| P42 · 태민 | តែមីន៖ "ឯងផ្ទេរមកទីនេះធ្វើអី? សាលាចាស់ឯងល្អជាងសោះ។" | តែមីន៖ "ឯងផ្ទេរមកទីនេះធ្វើអី? សាលាចាស់ឯងល្អជាងតើ។" | សោះ belongs in negatives («not at all») and sounds wrong here; spoken emphasis is តើ. | Same question and the same claim that the old school is better; ផ្ទេរមក echoes ep01 «ទើបផ្ទេរមក», and Doha's ទីនេះ reply still echoes P61. |
| P44 · 예린 | យេរីន៖ "ថ្ងៃធម្មតា ខ្ញុំចេញរៀនគួរម៉ោង១០យប់ នៅតំបន់រៀនគួរហ្នឹងណា។" | យេរីន៖ "ថ្ងៃធម្មតា ខ្ញុំចេញពីតំបន់រៀនគួរម៉ោង១០យប់ណា។" | Repeats រៀនគួរ twice in one bubble, the same duplication the editor removed from the Korean. | The W1 clue is still there: weekdays, the tutoring district, finishing at 10 pm. |
| P45 · 서윤(생각) | សឺយូន (គិត)៖ "…មិនអីទេ។ ឡានក្រុងខ្ញុំ កាត់មុនម៉ោងហ្នឹង។" | សឺយូន (គិត)៖ "…មិនអីទេ។ ឡានក្រុងខ្ញុំ ឆ្លងកាត់មុនម៉ោងហ្នឹង។" | កាត់ alone reads as «cut»; «pass through» is ឆ្លងកាត់. | Still says her bus passes through before 10 pm (the misdirection), with the same timing and no negation change. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P06 sound effect ទុប… ទុប… (계단 발소리).** Unclear: whether ទុប reads as a footstep. Decision: keep. ទុប is the ordinary Khmer word for a dull, heavy thud (as in a heavy step or a body landing), and repeated with ellipses it reads as someone heavy coming down the stairs. It is also the glossary §9 entry. Alternatives (ក្ដុកៗ, used for knocking; ផាំង, a bang) fit wooden stairs worse.
- **P25 ខ្ញុំនៅតំបន់នោះស្រាប់។** Unclear: whether to make it smoother (for example ធម្មតាខ្ញុំនៅ…). Decision: keep. នៅ holds both «am there» and «live there», ស្រាប់ gives the 원래 sense, no time is stated, and there is no បាទ to Haram, a peer. Any rewrite risked pushing it toward one reading.
- **P13/P38/P58 ឯងដឹងតាំងពីពេលណា.** The Korean «언제부터야» does not name a verb; the Khmer adds ដឹង. Decision: keep and keep it shared. It answers Doha's ep01 P60 «ខ្ញុំដឹងតាំងពីដំបូង» (what the reader knows by this point), and P59 «តាំងពីមុនខ្ញុំផ្ទេរសាលា» answers it word for word. P38 keeps its full stop, matching the flat Korean.
- **Bus times ម៉ោង៩ ៤៤នាទី / ៩ ៥៧នាទី (P21, P26, P30, P51).** Kept identical in all four panels; this is how the time is said aloud. At P51, Korean «44분 버스» also gets ម៉ោង៩ so it matches P21/P26 exactly. The extra hour adds no information the reader does not already have.
- **ផ្ទេរសាលា (P59–P61), ឆ្លងផុត (P33) / ឆ្លងផុតហើយ (P35).** Kept as the glossary terms; the echo works.
- **Doha's speech levels.** Checked every Doha line: បាទ only at P36 (to the homeroom teacher); no បាទ to Haram (P25–P27) or to peers. Matches glossary §4.
- **P17 ចៃដន្យល្អណាស់.** Unclear: whether the sarcasm reads. Decision: keep. Coming from Haram's formal register, «what a nice coincidence» is clearly ironic.
- **P36 ចម្លើយនៅក្រៅបង្អួចឬ?** Sentence-final ឬ is normal in spoken questions, and it suits the teacher's dry joke. Kept.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P41 Doha «ឥឡូវ មិនប្រាប់ទេ» → rejected «មិនទាន់ប្រាប់ទេ»: «not yet» promises a later telling more strongly than «지금은», and it would tip off the P61 reveal. Kept the original.
- P42 Doha «ព្រោះនៅទីនេះ មានអ្វីដែលខ្ញុំចង់មើល» → rejected a shorter colloquial «មានអីចង់មើល»: Doha's «ទីនេះ … ខ្ញុំ» structure must stay, because P61 echoes it (ទីនេះ), and អ្វី keeps it open whether he means a place, a thing or a person. Kept.
- P49 «ឡានក្រុង… នៅបីនាទីទៀត» → rejected dropping នៅ to copy ep01 «បួននាទីទៀត»: the Korean adds 남았어, and the echo already holds through «ឡានក្រុង…». Kept.

## Inputs read

- `_workspace/03_episode/ep02_script_final.md` (including the editor's notes)
- `_workspace/03_episode/ep02_km_review_context.md` (file table, repeated lines, Scene 1 excerpts and established dialogue)
- `_workspace/02_story/glossary_km.md`
- `_workspace/03_episode/ep01_script_final.md` (all KM lines, the clause wording at P25–P26, P48, P60)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-22 02:49, round 1: **READY**
- This round: 6 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
