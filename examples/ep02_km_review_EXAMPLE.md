> **EXAMPLE ONLY.** Shows what `_workspace/03_episode/ep{NN}_km_review.md` looks like: the report the
> Native Khmer Agent Reviewer writes at the end of Phase 3. This is the real output of a test run on a
> made-up six-panel EP02 of the pawnshop example story: a stiff exchange between teenage friends, a
> younger brother calling his older sister អូន, a sister's deliberately formal angry line, a missing KM
> line and a hidden speaker. Nobody approved anything: the run went straight on to the shot list.
> Not used by the harness; safe to delete.

# EP02 Khmer review — Native Khmer Agent Reviewer

> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent
> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow
> continues on its own when the status is READY.

<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->
- Status: READY
- Round: 1
- Started: 2026-11-20 14:05
- Finalized: 2026-11-20 14:07
- Script SHA-256: f5e2608383a76d98ffc05aaf42c4d6c0b431c655824fdb2531ba80b0550e2a68
<!-- /km_review.py -->

- Script (reviewed in place): `_workspace/03_episode/ep02_script_final.md`
- Pre-review copy: `_workspace/03_episode/ep02_script_final_pre_km_review.md`
- Context packet: `_workspace/03_episode/ep02_km_review_context.md`

## Summary

Scene 1 (the school gate) read as written, translated Khmer: តើ…ឬ questions, ធ្វើដំណើរ/ទីណា, a polite អ្នក and strings of របស់ between two 17-year-old classmates; all three lines were rewritten as quick, teasing spoken Khmer with ឯង/គ្នា, keeping Taeo's full-name teasing and Seojun's point that he is going alone. Scene 2 had one wrong form of address (Seojun called his older sister អូន; now បង) and one missing KM line (P05, added); Seoyun's deliberately formal, angry លោក ហាន សឺជុន … ជ្រាប line and the hidden speaker's P06 line already worked and are unchanged. P01's speaker label was misspelled តេអូ and now follows the glossary (ថេអូ). Note for continuity-manager: Taeo refers to Seoyun in the third person as បងស្រី (his friend's older sister); the glossary only lists បង as Seojun's address to her, so a row for the third-person reference could be added.

## Changes

Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.

| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |
|---|---|---|---|---|
| P01 · 태오 | តេអូ៖ "សួស្តី ហាន សឺជុន! តើអ្នកកំពុងធ្វើដំណើរទៅទីណា?" | ថេអូ៖ "ហេ៎ ហាន សឺជុន! ទៅណាហ្នឹង?" | Stiff and wrong for a teasing classmate: សួស្តី is a greeting, not "hey", and តើ…ធ្វើដំណើរទៅទីណា with a polite អ្នក is written Khmer; the label was also misspelled (glossary: ថេអូ). | Still Taeo asking Seojun where he is going right now, with the teasing full name ហាន សឺជុន kept; no negation or tense involved. |
| P01 · 서준 | សឺជុន៖ "ខ្ញុំនឹងធ្វើដំណើរទៅតែម្នាក់ឯង។" | សឺជុន៖ "គ្នាទៅម្នាក់ឯង។" | Stiff and out of voice: ខ្ញុំ and ធ្វើដំណើរ are formal; to Taeo he is curt and uses គ្នា. | Keeps the point of the reply, that he is going alone (not where), as a curt brush-off to a friend; the going is still upcoming. |
| P02 · 태오 | ថេអូ៖ "តើអ្នកនឹងទៅហាងរបស់បងស្រីរបស់អ្នកម្តងទៀតឬ? អ្នកពិតជាជាប់នឹងបងស្រីរបស់អ្នកណាស់។" | ថេអូ៖ "ទៅហាងបងស្រីឯងទៀតហើយ? ឯងនេះ ស្អិតជាប់បងស្រីដូចជ័រមែនទែន!" | Overly literal and too long for a bubble: repeated របស់ and អ្នក, a written តើ…ឬ question, and the tease (껌딱지) lost its bite. | Same two beats: again (ទៀតហើយ) going to his own sister's shop, and Seojun is the one stuck to her; the gum image becomes the Khmer sticky-as-glue image so the joke still lands. |
| P03 · 서준 | សឺជុន៖ "អូន ខ្ញុំមកដល់ហើយ។" | សឺជុន៖ "បង ខ្ញុំមកដល់ហើយ។" | Wrong address: he is her younger brother, so he calls her បង (a younger person never calls an older one អូន). | Same announcement, I'm here (already arrived, ហើយ), to the same listener; only the address changed. |
| P05 · 서준 | (missing) | សឺជុន៖ "…សុំទោសបង។" | The line had no KM line, so readers would see an empty bubble. | An apology from Seojun to his sister, with the hesitant … kept; it answers her angry question about the time without adding any excuse. |

## Decisions

Uncertainty resolved automatically (what was unclear, what was chosen, why).

- **P05 · 서준 "…미안." (added line):** the Korean has no address word, so either «…សុំទោស។» or «…សុំទោសបង។» was possible. Chose «…សុំទោសបង។»: he is meek with his sister (packet, voice table), and a bare សុំទោស to an older sister sounds curt in Khmer. Answering her cold លោក with the close kin word also keeps the contrast the scene already shows; no new information is added.
- **P02 · 태오, how Taeo refers to Seoyun:** the glossary's 누나 = បង row is Seojun's own address to her. A friend speaking about her in the third person says បងស្រី; used បងស្រីឯង («your sister») once to make clear whose sister, and បងស្រី the second time. Not a name or a recurring term, so no glossary spelling is affected (noted in the Summary for continuity-manager).
- **P04 · 서윤 (kept unchanged):** ជ្រាប is a very respectful «know». The script's notes and the ⟨의도된 존댓말⟩ tag say the formality is deliberate (anger, distance), and the exaggerated honorific with លោក + full name carries the sarcasm, so it stays.
- **P06 · 목소리 (kept unchanged):** the speaker is deliberately hidden. «នៅតែនៅទីនេះទៀត។» is natural spoken Khmer («still here, even now»), has no ចាស/បាទ, kin word, បង/អូន or gendered pronoun, and leaves the subject unstated, so, as in the Korean, it can mean the shop or a person who is still here. Kept as written (equally faithful alternatives exist; the existing one is kept).

## Kept after the meaning check

Smoother rewrites that Pass B rejected because they changed the meaning.

- **P01 · 서준:** a shorter «ទៅហើយ។» or «ទៅ។» would read faster but drops «alone», which is the whole point of his reply (he does not want Taeo along); kept ម្នាក់ឯង.
- **P06 · 목소리:** «បងនៅតែនៅទីនេះ…» or any wording with a subject or an address word would sound warmer, but it would assign the hidden speaker an age or relationship and decide whether «here» means the shop or a person; rejected.

## Inputs read

- `.claude/agents/native-khmer-agent-reviewer.md` (current definition)
- `_workspace/03_episode/ep02_km_review_context.md` (context packet, all three scenes)
- `_workspace/03_episode/ep02_script_final.md` (read scene by scene, with directions, speaker/voice table and editor's notes)
- `_workspace/02_story/glossary_km.md`
- `_workspace/02_story/world.md`
- `_workspace/03_episode/ep01_script_final.md` (established dialogue)
- `_workspace/02_story/characters.md`: only through the packet's excerpts (not opened directly)

<!-- km_review.py checks -->
## Automated format checks (km_review.py)

Mechanical checks only; the dialogue judgement above is the AI reviewer's.

- Finalized 2026-11-20 14:07, round 1: **READY**
- This round: 4 KM line(s) edited, 1 KM line(s) added
- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged (compared with the pre-review copy): yes
- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes
- Exactly one KM line under every line that needs one: yes
- Khmer-only text in KM lines (no Korean, English or review comments): yes
- Speaker labels and names follow the glossary: yes
<!-- /km_review.py checks -->
