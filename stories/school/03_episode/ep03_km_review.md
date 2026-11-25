# EP03 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-22 07:56
- Finalized: 2026-11-22 07:59
- Script SHA-256: a0fc3f3cf89bb8c13df7c45cdff4481f833e577469c59673e0f28dd2c354695a
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep03_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep03_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep03_km_review_context.md`

## Summary

The Khmer of ep03 already reads as natural speech and keeps every voice from ep01-ep02 (Seoyun ចាស only to adults, Doha បាទ only to the teacher, Haram's crisp official register with ចាស to the teacher and no particles in the P46 self-talk, the teacher's dry ឯង/គ្រូ). Seven lines were touched: one place-phrase in Mom's note that does not work with a place (P05), three flat or ambiguous constructions (P11, P21, P30), a missing reason link in Haram's rule citation (P12), and two teacher lines that lost "only this once" / "by" from the Korean (P39, P40). All double-meaning and twist lines (P07, P25, P26, P28, P34 with មើល, P37, P51, P60), the four identical ផ្លូវបួនមុខ សុលនែដុង, the P12 echo of Seoyun's ep02 P17 line, and the recurring terms (នីតិវិធី, កំណត់ត្រា, ព័ត៌មាន, តាមកិច្ចសន្យា, ម៉ោង៩ ៥៧នាទី … ម៉ោង១, បន្ទប់អានសៀវភៅ, ស្អែកជួបគ្នា) are unchanged byte for byte. No glossary gaps: every name and term used is already in glossary_km.md (§10 covers this episode).

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P05 · 서윤 | សឺយូន៖ "«រួចពីបន្ទប់អានសៀវភៅ ចាក់សោទ្វារឲ្យជាប់ណាកូន ហើយសឹមគេង។»" | សឺយូន៖ "«មកពីបន្ទប់អានសៀវភៅវិញ ចាក់សោទ្វារឲ្យជាប់ណាកូន ហើយសឹមគេង។»" | រួចពី works with an activity, not a place: "finished from the reading room" sounds off in a mother's note. | Still "after you come back from the reading room, lock the door, then sleep"; the term បន្ទប់អានសៀវភៅ and the tender ណាកូន are kept. |
| P11 · 서윤(생각) | សឺយូន (គិត)៖ "…នោះជាពាក្យខ្ញុំខ្លួនឯង។" | សឺយូន (គិត)៖ "…ពាក្យនោះ ចេញពីមាត់ខ្ញុំខ្លួនឯង។" | "That is my own word" is flat and bookish; the sting of the Korean 내 입으로 is lost. | Same fact: the statement Haram is quoting is the one Seoyun herself gave in ep02; nothing added. |
| P12 · 하람 | ហារ៉ាម៖ "មិនមែនល្មើសទេ តែជារឿងដែលត្រូវប្រឹក្សា។ ចេញក្រៅយប់ជ្រៅ គ្មានអាណាព្យាបាល។" | ហារ៉ាម៖ "មិនមែនជាការល្មើសទេ តែជារឿងដែលត្រូវប្រឹក្សា។ ព្រោះជាការចេញក្រៅយប់ជ្រៅ ដោយគ្មានអាណាព្យាបាល។" | The second sentence is a bare fragment, so it does not read as the reason (-니까요); the first half no longer answers the teacher's ការល្មើស word for word. | Negation (not a violation), the title phrase រឿងដែលត្រូវប្រឹក្សា and the reason (late-night outing without a guardian, as in P10 ដោយគ្មានអាណាព្យាបាល) are all kept; still no place name. |
| P21 · 서윤(생각) | សឺយូន (គិត)៖ "…លេសនេះ មានមនុស្សពីរនាក់។" | សឺយូន (គិត)៖ "…ក្នុងលេសនេះ មានមនុស្សពីរនាក់។" | "This alibi has two people" reads like a literal calque; it needs ក្នុង to mean "there are two people in this alibi". | Same meaning the editor fixed in Korean (Doha is part of the alibi), not "two alibis"; no necessity added. |
| P30 · 담임 | លោកគ្រូ៖ "តាមរបាយការណ៍ ឆែ ហារ៉ាម យប់ថ្ងៃអង្គារ ពីម៉ោង៩ ៥៧នាទី ដល់ម៉ោង១។" | លោកគ្រូ៖ "ឆែ ហារ៉ាម រាយការណ៍ថា យប់ថ្ងៃអង្គារ ពីម៉ោង៩ ៥៧នាទី ដល់ម៉ោង១។" | Without របស់ the name can read as the teacher addressing Haram, who is not in the room. | Source of the report (Haram), the night and the clock times (same digits as P10 and ep02) unchanged; still no place name. |
| P39 · 담임 | លោកគ្រូ៖ "លើកនេះ គ្រូពន្យារការទាក់ទងអាណាព្យាបាលសិន។" | លោកគ្រូ៖ "លើកនេះម្ដង គ្រូពន្យារការទាក់ទងអាណាព្យាបាលសិន។" | "This time" alone drops 이번만 ("just this once"), the limit the scene and the twist B misdirection rely on. | Postponement, the glossary term ការទាក់ទងអាណាព្យាបាល and the temporary សិន are kept; only the "just once" limit is restored. |
| P40 · 담임 | លោកគ្រូ៖ "មុនសប្ដាហ៍ប្រឹក្សាអាជីព ឯងត្រូវប្រាប់ម្ដាយឯងដោយខ្លួនឯង។" | លោកគ្រូ៖ "ត្រឹមសប្ដាហ៍ប្រឹក្សាអាជីព ឯងត្រូវប្រាប់ម្ដាយដោយខ្លួនឯង។" | ឯង three times in one line; មុន ("before") does not match 까지 and the next bubble "I check then". | Deadline is now "by" the career-counselling week (the teacher checks at that time); who must tell whom, and "yourself", unchanged. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P09, P58 Haram ចាស.** Unclear: Haram never used ចាស in ep01-02. Chosen: keep it. She is female and these are her only lines to the teacher (an adult); to peers she stays particle-free with មិត្ត. P46 self-talk stays without any particle, as the brief asks.
- **P12 teacher line vs ep02 P17.** The core «មានសង្សារ មិនមែនជាការល្មើសវិន័យសាលាទេ» is identical to Seoyun's ep02 P17 Khmer; only the vocative ឆែ ហារ៉ាម follows it (the Korean adds 채하람). Kept.
- **P34 មើល.** Kept ទៅមើល សឺយូន (not ជួប): it carries both "go to see her" and "watch over her" (C11). First name only is deliberate; it sets up the P42 «សឺយូន»? comedy.
- **P07 ទីនេះ គឺឯណា?** Slightly written (គឺ) but natural in inner speech and part of the ទីនេះ echo of ep02 P42/P61; kept as is.
- **P18 រឿងបន្ទប់អានសៀវភៅ… ធ្លាយអស់** omits the word "lie", but ធ្លាយ (a secret leaking) already says it and the P06 ពាក្យកុហក is one scene earlier; kept.
- **P20 ចុះឯង** read as contrastive "but you" (reply to Yerin's ខ្ញុំក៏ធ្លាប់ដែរ), not as a question; kept.
- **P46 speaker label** stays ហារ៉ាម៖ without (គិត), per the script editor: spoken self-talk, not thought.
- **P57 ឯងលួចស្ដាប់ឬ?** The ឬ question matches the teacher's own ep02 voice (ចម្លើយនៅក្រៅបង្អួចឬ?); kept.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P21: «…លេសនេះ ត្រូវការមនុស្សពីរនាក់។» ("this alibi needs two people") is smoother but adds a necessity the Korean does not state; the faithful «ក្នុងលេសនេះ» was used.
- P34: any rewrite with ជួប (meet) was rejected; it kills the second reading (watching over her).

## Inputs read

- `_workspace/03_episode/ep03_script_final.md` (all scenes, directions, editor's notes §1-§6)
- `_workspace/03_episode/ep03_km_review_context.md` (header and character/relationship excerpts)
- `_workspace/02_story/glossary_km.md` (§1-§10)
- `_workspace/03_episode/ep02_script_final.md` (P17, Haram's and the teacher's lines, P58-P61, recurring times, editor's notes)
- `_workspace/03_episode/ep01_script_final.md` (Haram's and the teacher's lines, ចាស usage)
- `_workspace/02_story/characters.md` (Haram's profile line only: 17, female)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-22 07:59, round 1: **READY**
- This round: 7 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
