# EP02 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-24 15:34
- Finalized: 2026-11-24 15:36
- Script SHA-256: d163b3d002a328d2f90bd5a00c923789757454c54a7523f3b41182c9817a7e95
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep02_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep02_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep02_km_review_context.md`

## Summary

The EP02 Khmer already reads as speech and keeps EP01's voice contrast: Line in short, complete sentences with irony tails only where the scene is ironic (P15 ម្ល៉េះ) and bare statements where the irony drops (P02, P32, P44); Heron in flat statements with no particles, consent as យល់ព្រម, never a royal word; Basil polite on the surface (សូម…ចុះ) and calling Heron a thing; Tora shortest. Three lines in the throne-hall scene were changed for spoken word order and parsing (P23, P24, P25); every locked line (P02, P19 H1, P22 article 3, P42, P53), the three byte-identical ព្រះករុណា (P06, P14, P47, all to Line) and every word chain (ប្រាំពីរថ្ងៃ→ដប់ថ្ងៃ, លើក/ដៃ P23→P25, ហៅ P23→P24, ដៃខ្មៅ P24→P46, រឿងខាង P30, យល់ព្រម P03→P33, កាន់ P22–P23) are unchanged and now settled for later quotation. glossary_km.md rows for the vote/hand chain (§5 표결, §6 손) were updated to the new P23/P24 wording; no spelling of a name or title changed. The 작가 메모 / 에디터 노트 sections still quote the pre-review P23 wording; they are notes, not KM lines, so they were left as written.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P23 · 리네 | លីណេ៖ "ដៃលើកបាន តែពេលខ្ញុំហៅ។" | លីណេ៖ "លើកដៃបាន តែពេលខ្ញុំហៅ។" | ដៃលើកបាន puts the object first and sounds like "the hand is able to lift"; the spoken idiom for a show of hands is លើកដៃ. | Same rule (hands go up only when she calls), same permission បាន + condition តែពេល, same listener (the court); ដៃ and លើក still feed P25 ដៃរាជវាំង…លើក and ហៅ still feeds P24. |
| P24 · 리네 | លីណេ៖ "ថ្ងៃដែលដៃខ្មៅសម្លាប់អ្នកបាញ់ស្នា ឈរក្នុងសាលនេះ។" | លីណេ៖ "ថ្ងៃដែលខ្ញុំនាំដៃខ្មៅ ដែលសម្លាប់អ្នកបាញ់ស្នា មកឈរក្នុងសាលនេះ។" | Without a second ដែល the line parses as "the day the black hand killed the archer", and bare ឈរ loses that she is the one who makes it stand there. | Korean 세우는 날 = she brings the culprit before the hall; the killer is still the hidden hand (ដៃខ្មៅ, picked up by P46 ដៃខ្មៅនោះ), the victim is still the archer, and it still answers Basil's ពេលណា with a day. |
| P25 · 바실 | បាស៊ីល៖ "បើថ្ងៃនោះយឺត ដៃរាជវាំងប្រហែលជាលើកមុនហើយ។" | បាស៊ីល៖ "បើថ្ងៃនោះមកយឺត ដៃរាជវាំងប្រហែលជាលើកមុនហើយ។" | A day "being late" (ថ្ងៃនោះយឺត) is not how it is said; a day comes late (មកយឺត). | Same condition (if that day is late), same veiled threat with ប្រហែលជា, same ដៃ…លើក pickup of P23. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P02 យប់នេះ ត្រឹមនេះសិន។ (locked, title): kept.** Unclear: whether it reads as rejection. ត្រឹមនេះសិន is the everyday "that's it for now"; សិន carries "for now", so with the hand on the door (not on him), P03 យល់ព្រម and P04 the unturned key, it reads as her pace, not a refusal. Title stays byte-identical minus the full stop.
- **P03 · P33 យល់ព្រម (Heron's "yes"): kept.** Unclear: whether it is too documentary. It is a little formal, which fits his slightly old-fashioned, particle-free voice and states consent in words; បាទ would break his no-particle rule and bare ព្រម alone sounds clipped. Same word in both places.
- **P19 H1 ដង្ហើមផុត មកុដឆ្លងភ្លាម។ (locked, quoted in EP20): kept and settled.** Unclear: ផុតដង្ហើម vs ដង្ហើមផុត, and whether ឆ្លង works intransitively. Two parallel subject–verb halves (breath ends / crown crosses at once) give a proverb rhythm that stands alone without ព្រោះ and can be quoted by another speaker; ផុតដង្ហើម would break the parallel. Placed after ដប់ថ្ងៃហើយ it reads as the reason for "ten days" (Pass B). ឆ្លងដៃ was considered and rejected: it would add a third ដៃ to the episode's hand chain.
- **P22 article 3 (locked, EP3): kept and settled.** Reads as a legal sentence (noun phrase + ស្រេចលើ). អ្នកកាន់ស្រមោល is supported by what the reader knows from EP1 (P24 អ្វីដែលខ្ញុំកាន់ គឺស្រមោលអ្នក) and is unpacked one panel later by P23 អ្នកកាន់ស្រមោល គឺខ្ញុំ។. Not shortened: រាជវាំងរបស់… keeps "the court of" clear for EP3's reversal.
- **P42 បេះដូងឈប់លោត ទាំងដេកលក់។ (locked, EP12 · EP26): kept and settled.** The standard way a physician says the heart stopped; no subject, so it can later be said of her father; nothing hints at a heart returning.
- **P53 ព្រឹកព្រលឹមថ្ងៃនោះ គ្មាននាគណាហោះទៅវិញទេ។ (locked, EP8): kept and settled.** Unclear: ហោះទៅវិញ narrows the Korean "no dragon flew". Chosen because a bare គ្មាននាគណាហោះទេ can read as generic ("no dragon flies"), while ហោះទៅវិញ gives the intended "no dragon flew home that dawn", which the reader can connect to EP1 P07 (if the sovereign falls, the hostage is freed) without being told whose hostage; ថ្ងៃនោះ points back to P43–P44. ហោះត្រឡប់ទៅវិញ was not needed. No address word, as in the source.
- **P44 ឪពុកខ្ញុំ ក៏ស្លាប់បែបនេះដែរ។: kept.** Unclear: whether ស្លាប់ is too blunt for a daughter. Cambodians say ឪពុកខ្ញុំស្លាប់ in ordinary speech; it is the raw register this panel wants, and it repeats P07 ស្លាប់ហើយ (same death). ទទួលមរណភាព would be stiff and break the link; no royal verb.
- **P17 ជាប់មន្ត: kept.** In speech it is the idiom for being besotted (as in ជាប់មន្តស្នេហ៍), matching 홀린; it does not introduce magic. ក្សត្រី stays a third-person noun, not an address.
- **P46 ទឹកបានចូលមក ហើយចេញទៅវិញ។: kept.** Like the Korean, it names no agent; the next line (ដៃខ្មៅនោះ) supplies the suspicion. Adding an agent would say more than the source and touch the later twist.
- **P14 ប៉ុនប៉ងធ្វើឃាត without an object: kept.** After the vocative ព្រះករុណា the target is clearly her; adding a second ព្រះករុណា would break the one-R-per-line pattern.
- **P15 ទើបតែ…ទេ, P51 …ឬ?, P21 សូមស្ដាប់ឆន្ទៈ, P28 ពួកគ្នាខ្ញុំ: kept.** ទើបតែ…ទេ is the spoken "only just"; ឬ without តើ is a normal polite question to an elder envoy; ស្ដាប់ឆន្ទៈ/មតិ is how a speaker calls for the court's view; ពួកគ្នា is the glossary term.
- ព្រះករុណា appears exactly three times (P06, P14, P47), byte-identical with EP01, all addressed to Line. SFX ក្រាក់… (EP01 P31) and the end caption with ៣ read naturally.

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P31 «ចន្លោះពេលនោះ…»: considered ក្នុងចន្លោះពេលនោះ. Rejected: it adds a syllable to Heron's line without changing the meaning, and he stays shorter than her.
- P47 «អ្នកជាអ្នកយាម។»: considered «អ្នកយាមវាផ្ទាល់។». Rejected: វា for the corpse is disrespectful in front of Tora and the doctor, and the original already means "you keep watch".

## Inputs read

- `_workspace/03_episode/ep02_script_final.md` (incl. 작가 메모, 에디터 노트)
- `_workspace/03_episode/ep02_km_review_context.md`
- `_workspace/03_episode/ep01_km_review.md`
- `_workspace/02_story/glossary_km.md` (rows for P23/P24 chain)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-24 15:36, round 1: **READY**
- This round: 3 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
