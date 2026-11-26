# EP01 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-26 09:59
- Finalized: 2026-11-26 10:01
- Script SHA-256: 9daed29f8b9ae8ad41b9dc3427a50fa42571d628876223345549d46920973d3d
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep01_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep01_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep01_km_review_context.md`

## Summary

The Khmer already reads as speech: each voice is distinct (Jinu short and ending in បាទ, Taeho អូន/បង with ណា៎ and ហាៗ, the cold-open ឯង, Hanmok's soft …ទេ? with ចៅ once, Minjae's rude អញ and ដឹងអត់?, Bonggu's ក្មួយ and …សិនទៅ), and every twist-plan §6 clue form and fixed line is intact. Only two lines needed fixes: a weak promise at P21 (រកវា "look for it" → រកវាឲ្យឃើញ "find it") and a verb error at P42 (intransitive បែក → transitive បំបែក). Notes for continuity-manager (non-blocking): the glossary row 애송이 변호사 `ក្មេងមេធាវី` is not idiomatic Khmer and should become `មេធាវីក្មេងខ្ចី` before its first use (see Decisions, C-F11); the cicada row `រ៉ឺងៗៗ…` is kept as is.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P21 · 진우 | ជីនូ៖ "…ខ្ញុំនឹងរកវា លោក។" | ជីនូ៖ "…ខ្ញុំនឹងរកវាឲ្យឃើញ លោក។" | Too weak for the vow: «រកវា» alone reads as "I'll look for it", while 「찾겠습니다」 here is a promise to find it, said looking him in the eye for the first time. | Same speaker, listener (លោក, L30 kept, no ពូ), future នឹង, referent វា = the car camera footage of P19; verb រក kept for K-03/K-19 and the line is still short, so the …មិនមានទេ។ ↔ …ខ្ញុំនឹងរកវាឲ្យឃើញ។ pair holds. |
| P42 · 진우 | ជីនូ៖ "ឮថាម៉ោងហ្នឹង បារក្រោមដីត្រើយទន្លេម្ខាង មានគេបែកដបស្រា ហើយរត់គេច។" | ជីនូ៖ "ឮថាម៉ោងហ្នឹង បារក្រោមដីត្រើយទន្លេម្ខាង មានគេបំបែកដបស្រា ហើយរត់គេច។" | Grammar slip: បែក is intransitive ("came apart"); someone breaking a bottle is បំបែក. | Same hearsay frame (ឮថា), time (ម៉ោងហ្នឹង), place, unnamed actor គេ and the bait word រត់គេច that Minjae throws back at P43; only the verb form changed. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **D-F5 (P21, L30 plant `…ខ្ញុំនឹងរកវា លោក។`): keep at P21.** A sentence-final vocative លោក after a promise is ordinary polite spoken Khmer (as in «កុំបារម្ភអី លោក»); it is not stiff. P21 is where Jinu first speaks to Deokbae directly, so the plant belongs there; the P57 fallback is not needed (P57 still carries លោក in «មេធាវីរបស់លោក អ៊ីម ដុកបែ»). Only ឲ្យឃើញ was added (Changes).
- **D-F11 (P11 cicada `រ៉ឺងៗៗ…`): keep.** Khmer has no single fixed written cicada cry; a nasal drone with an extended repeat mark plus ellipsis reads as a faint, continuous summer buzz, which is what the panel needs (small, from the window). No alternative was clearly more common, so the existing form stays (rule: equally good → keep). Cane taps `តុក… តុក…` untouched (fixed by AE).
- **C-F11 (rude forms at 15+).** `អញ` (Minjae, P43): keep. It is the everyday rude/intimate "I" heard in Khmer films and TV, not a swear word; used at a lawyer in front of his father it is exactly the collapse of manners the scene wants, and it pairs naturally with ដឹងអត់?. `ក្មេងមេធាវី` (Ki → Jinu, glossary only, not in EP01): not idiomatic, because Khmer puts the age word after the noun and a contemptuous "kid lawyer" is said `មេធាវីក្មេងខ្ចី` ("wet-behind-the-ears lawyer"); 15+-safe. Recommended glossary change for continuity-manager before first use, with 2nd person ឯង as planned. No EP01 line affected.
- **D-F8 (P54 `…អ្នកបើកឡាន… មិនមែនមីនជែទេ។`): keep the name.** It is natural thought speech and gives the twist a single referent; គាត់ would point back at the old man (P48) or Deokbae (P52).
- **P59 `នាង` for Sua in Jinu's thought:** kept; a neutral third-person female in inner speech, assigns nothing the panel does not show.
- **P27 fixed line:** checked and kept letter for letter (no address term, no បាទ/ចាស, ទ្វារមុខ · ចាក់សោ · ក្រោយ).

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- P57 Sua: a softer «លើកនេះជាលើកដំបូងដែលខ្ញុំបានជួបលោក» is closer to the Korean politeness but longer and less flatly "never met"; K-06 needs the plain first-meeting claim, so «ខ្ញុំមិនដែលជួបលោកពីមុនទេ។» stays.
- P42 `ត្រើយទន្លេម្ខាង` → the more textbook `ត្រើយម្ខាងទន្លេ`: both are said; the original is a clue phrase the editor fixed, so it stays.
- P19 Jinu «…មិនមានទេ។» without his usual បាទ: kept short on purpose (K-03 pair, a guilty clipped answer).

## Inputs read

- `_workspace/03_episode/ep01_script_final.md` (incl. writer and editor notes)
- `_workspace/03_episode/ep01_km_review_context.md`
- `_workspace/00_input/brief.md` (rulings P, W, Z, AA, AE, AF)
- `_workspace/02_story/glossary_km.md` (via the packet rows)
- `_workspace/02_story/twist-plan.md` §6 only (binding clue wording, per ruling AA; not used to reveal later content)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-26 10:01, round 1: **READY**
- This round: 2 KM line(s) edited, 0 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
