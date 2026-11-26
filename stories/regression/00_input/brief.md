# Brief — NEW STORY (regression), EP01 (2026-11-26)

- 실행 모드: 새 기획. `_workspace`는 활성 이야기(`stories/regression/`)로 가는 Windows junction이다.
  **`_workspace`를 옮기거나 보관하지 않는다.** 다른 이야기 폴더(`rule4`, `poison`, `umbrella`, `gloves`, `revenge`,
  `school`, `story-7`, `story-8`)를 건드리지 않는다.
- 브랜치: `story-9` (main에서 분기). main에는 손대지 않는다. 커밋/푸시는 사용자가 요청할 때만.
- 회차: EP01 (NN = 01)

## 사용자 요청 (2026-11-26)

- 장르: **회귀 복수극 (Regression revenge)** — 주인공이 죽거나 배신당한 뒤 몇 년 전으로 돌아가, 미래를 아는 채로 되갚는다.
- 세부 무대(직장/재벌가/가족/연예계/기타)와 주인공 유형: **리서치가 정한다** (Phase 2가 3개 패키지를 제안).
- 수위: **15+** (기본값; 사용자가 다르게 정하면 바꾼다).
- 이번 실행 범위: 새 이야기 세팅 + Phase 2 트렌드 리서치(trend-brief.md까지). 패키지 채택은 사용자에게 보여준 뒤 진행.

## 해석 / 고정 조건

- 장르: **회귀 복수극.** 회귀(시간을 되돌아감)는 유일한 판타지 장치다. 그 외 초자연·헌터·마법·괴담 장치는 쓰지 않는다.
  현실(현대) 배경을 기본으로 한다. 리서치가 사극/로판 회귀를 강하게 권하면 패키지로 제안할 수는 있으나 플래그한다.
- 하네스 공통 요구 그대로: 대사 위주, 고긴장, **매 회차 반전 1개 이상**, 회차 끝 클리프행어, 회차마다 작은 사이다(보상).
- 수위 15+: 고어·성적 묘사·자해 장면 없음. 1화의 죽음/배신 장면은 직접적 폭력 묘사 대신 얼굴·손·물건·빛·침묵으로 보여준다.
- **기존 이야기와 겹치지 않는다.** 특히:
  - `rule4`(밤마다 반복되는 루프, 구청, 기억을 잃는 대가) — 회귀는 1회성 큰 되돌림이어야 하고, 루프/반복 사망 구조와 달라야 한다.
  - `revenge`(학원 복수극, 카메라맨) — 학교·학폭 무대 금지.
  - `story-8`(가족 빚 비밀, 삼촌) — 가족 빚/수금인 구조 반복 금지.
  - `poison`(궁중 위장 신분), `gloves`·`story-7`(로판), `umbrella`·`school`(로맨스) — 무대·주인공 유형·소품·제목 재사용 금지.
  이전 이야기 확인: `STORY_SUMMARIES.md`와 각 `stories/<slug>/02_story/concept.md`.
- 트렌드 리서치는 **새로** 한다. 이전 이야기의 `01_research/`는 적용하지 않는다(중복 회피 참고용으로만 읽는다).
- EP01 기본 요구: 시각적으로 기억에 남는 첫 장면(배신/죽음 → 회귀의 순간), 주인공의 욕망/목표, 회차 반전 1개 이상,
  회차 끝 클리프행어, 첫 작은 사이다.
- 대사: 짧고 자연스러운 크메르어, 말풍선에 편하게 들어가는 길이. 주요 인물의 말투가 뚜렷이 달라야 한다.
- 분량: 50+ 패널(하한, 목표 ~60). 한국어/영어는 작업 언어, 독자는 크메르어만 본다.
- 실존 인물·실존 기업·실존 학교/병원 이름은 쓰지 않는다.
- 이미지에는 글자가 없으므로, 회귀 날짜 확인 같은 정보를 화면 글자(달력·폰 화면·뉴스 자막)로 전달하는 비트에 의존하지 않는다.
  얼굴·물건·빛·색·대사로 전달하고, 글자가 꼭 필요하면 `env` 텍스트(뷰어가 씀)로.

## 프로젝트 고정 조건 (CLAUDE.md)

- **Khmer edition:** 독자는 캄보디아인이며 **크메르어만 본다**. 바뀌는 것은 딱 두 가지: (1) 말풍선에 크메르어 표시(뷰어가 그림),
  (2) 대본에 크메르어(`KM:` 줄) 추가. "독자가 캄보디아인"은 텍스트 언어에만 영향을 주며 이야기·배경·작화는 하네스 설계 그대로.
  **이미지에는 글자가 전혀 없다.** `webtoon-khmer-edition` 스킬을 모든 단계에서 따른다.
- **Flow-by-hand mode:** 이미지는 사용자가 Google Flow에서 직접 만든다. Codex 없음. Phase 4는 `webtoon-flow-handoff` 스킬을 따른다.
  panel-artist-a/b/c는 쓰지 않는다.

## 운영 메모

- 서브에이전트에게는 완전한 브리프를 주고, 각자 자기 파일만 쓰게 한다 (팀 메시징 도구 없음).

---

# LOCKED PLANNING DECISIONS (leader, 2026-11-26, after Phase 2 research) — every Phase 3+ agent follows these

Source: `_workspace/01_research/trend-brief.md` (read §0, §1, §1-1, §2 package A, §3–§8 first). **The user chose package A.**

1. **Package A 「두 번째 변론」 is ADOPTED by the user** (alt title 「그날 나는 증거를 숨겼다」). A guilty regressor lawyer who hid a
   dashcam memory card 7 years ago (an innocent delivery driver went to prison) is pushed off his firm's rooftop and returns ONCE to
   the night before he handed the card over. His revenge list ends with his own name. Do not re-open the package unless a fallback
   trigger in trend-brief §0 actually fires; then flag it in your file and to the leader, do not switch.
2. **Regression is one-time and irreversible.** No loop, no repeated deaths, no memory cost (rule4 overlap). No "it was a dream" ending.
   No supernatural device other than the regression itself.
3. **Tone:** cold, restrained atonement + revenge, tension 8 : warmth 2. Every episode: one small payback (사이다) and one human/warm beat.
   Paybacks = the opponent trips on his own move in public (self-contradiction, object comparison, fate moving), **never "press play on
   the recording to expose them"** (overlap with `revenge`). The card's footage is a clue for the hero, not the weapon.
4. **15+ and the death:** the rooftop fall must clearly read as a push by another person's hand (never self-harm). No gore; faces,
   hands, objects, light, silence.
5. **Twist engines** (trend-brief §2-A): ① wrong betrayer (mentor partner ≠ real mastermind = the kind retired-judge advisor);
   ② fate conservation ON by default (prevented misfortune moves to the nearest innocent; proven wordlessly by repeated composition).
   series-plotter may switch it off via trend-brief §2-A memo if courtroom plausibility breaks; flag it. ③ second regressor = the
   driver's daughter (a working young adult, not a student), planted in EP1 by one object only, revealed EP6–7.
   EP3 end = the strongest gate cliffhanger (cold open re-shown from the opposite angle).
6. **Evidence is objects** (chipped memory card, fountain pen, cufflink, ring, black mourning ribbon pin, etc.), faces and dialogue.
   No documents, verdicts, phone screens, news captions or calendars carrying story information. Courtroom scenes at most 1–2 per season.
   Recurring props become fixed prop tokens (shape, colour, damage; no logos or writing). Dates/time jumps via `env` text only.
7. **EP01 layout** = trend-brief §4 (~60 panels, 55–65): P1–10 cold open + betrayal, P11–15 regression, P16–24 wordless proof,
   goal, first small payback ~P41–46, twist ~P47–54, cliffhanger P55–60 (the daughter's mourning ribbon pin he will only give her
   two years from now). Exact zones: twist-master/episode-outliner may refine; flag changes.
8. **Names, places, gender:** concept-architect / worldbuilder / character-designer decide (male lead recommended, not required).
   Contemporary Korean city, no real firms/courts/prisons/hospitals/schools. Names must not repeat any earlier story's names and must
   pass a Khmer-reading check (easy to write and read in Khmer script).
9. Khmer series title, EP01 title, all names and legal terms go in `02_story/glossary_km.md`. Legal terms in Khmer must be plain words
   a young Cambodian reader understands.

## Leader rulings after concept.md (2026-11-26) — flags F1–F11 accepted
A. Titles accepted: series 「두 번째 변론」, EP01 「그날 나는 증거를 숨겼다」. Khmer proposals ការពារក្តីលើកទីពីរ / ថ្ងៃនោះ ខ្ញុំបានលាក់ភស្តុតាង go to dialogue-writer for the glossary (plain, natural Khmer; may refine). បង (hero→mentor) and លោកតា (hero→advisor) are clue address forms.
B. F1: regression lands in the detention-centre visiting corridor right after visiting the driver, the evening before the handover. Accepted.
C. F3: dashcam footage = a "record panel" style (distinct border, washed-out colour, no screen/UI/timestamp/plate). art-director and panel-director define it.
D. F4: objects never travel back; the daughter remade the ribbon pin from memory, pin end bent the same way. Accepted.
E. F5: the black ribbon stays in the art; the cliffhanger thought line names it as the funeral pin in words.
F. F6/F7: worldbuilder settles fate-conservation rule ⑤ and the case mechanics internally; series-plotter decides whether ⑤ is the endgame.
G. F9: footage is never played to expose anyone. F10 noted (minor). F11: names are suggestions; character-designer decides with the Khmer-reading check.

## Leader rulings after world.md (2026-11-26) — W-F1–W-F13 accepted
H. Case mechanics (W-F1), hero = the driver's own defence lawyer (W-F2), lawyer-visit rooms under construction (W-F3, no dialogue) accepted.
I. W-F4: C-7 plant accepted; the guard's "뒷문으로 오세요" line in EP01 is optional, twist-master decides.
J. W-F5: 7 LOC_* tokens + sedan set fixed. Reserve locations (advisor's room, court, funeral hall) are approved only when an episode needs them; flag it first. None in EP01.
K. W-F6 "plain causes" rule fixed; series-plotter decides if ⑤ is the endgame. W-F7: same onyx cufflinks for the "family" men; twist-master decides whether the advisor's wrist shows in EP01.
L. W-F8 prop additions accepted. W-F9: one line each in EP01–02. W-F10 accepted.
M. W-F11: firm name 담하 is used in dialogue at most twice per episode; if a real-name clash is found later, it is swapped in glossary + script only.

## Leader rulings after characters.md (2026-11-26) — C-F1–C-F12 accepted
N. Names final as characters.md §0 (서진우, 조태호, 여한목, 임덕배, 임수아, 기상두, 기민재, 마준서, 허봉구). Khmer spellings there are canon for the glossary.
O. C-F1: ages in characters.md win (hero 28/35, grandson 28/35); any 27/34 in concept.md/world.md is superseded. Law-school classmates option (C-F4) = series-plotter decides.
P. C-F5 clue address forms approved: advisor ចៅ/តា (later the same ចៅ for his real grandson); mentor អូន → ឯង only in the cold open. Plus បង, លោកតា, ពូ (guard). All go into glossary_km as clue forms.
Q. C-F6 guard look (white neck towel, gold tooth), C-F7 ring/cuff rules, C-F8 advisor's pen, C-F9 9 sheets + grandson hand card, C-F10 ribbon beside white collar accepted. C-F11: native reviewer checks ក្មេងមេធាវី and អញ.

## Leader rulings after series-arc.md (2026-11-26)
R. FL1: Season 1 = 24 episodes, 3 acts / 5 arcs; EP12 = midpoint, season cliff EP24. Rule ⑤ is the endgame; fate conservation ON. Jinu and Junseo were law-school classmates.
S. FL2 (binding for EP01): the pushing hand in the cold open wears a BLACK LEATHER GLOVE with the onyx cufflink showing (never bare). EP3 door hand bare with the ring. art-director adds a glove variant where needed.
T. W1 answer: series-plotter's (b′) is the working truth; twist-master makes the final call and keeps EP01 compatible with it.
U. FL5 (advisor in the passenger seat, optional silver glint plant L40 in the EP01 record cut), FL6 accepted. FL7: LOC_COURT (EP16, EP23) and LOC_ADVISOR_ROOM (EP13) approved for those episodes only; nothing new in EP01–12.
V. EP01 requests accepted as plants: guard's fixed line 「앞문 잠겼어요, 뒤로 오세요」; advisor's light hand resting on Jinu's shoulder (one panel); mentor's 「밤엔 커피 안 마셔」; advisor's cufflinks hidden; real card hidden under the velvet bed of the pen box.
W. Address-form changes: Jinu → Deokbae ពូ first in EP12; Sua → Jinu លោកមេធាវី first at EP6 cliffhanger.

## Leader rulings after twist-plan.md + tension-curve.md (2026-11-26)
X. Panel-zone conflicts: **twist-plan.md §0 wins** for every twist/clue beat (guard line P27, night office P29–30 with 「밤엔 커피 안 마셔」, real card under the velvet P32, mentor cufflink P36, advisor hand on shoulder P40 matching P7 framing, Minjae slip P43, glint P50, ring hand over lens P51, anchor-A original P52, cliffhanger P58–60). tension-curve.md's levels move with their beats; its other structure (warmth low point = the guard's coffee, breathing panels, max 2 panels ≤3 in a row, P55–56 two panels, read-twice beats drawn NOT ominous) stays. Goal section ends P34 (TF-2 accepted; 「찾겠습니다」 at P21).
Y. **No P61** (tension flag 4 wins over TF-10). EP01 ends on P60, the eye at 10.
Z. W1 = b′ final. TF-1 cold-open render rules binding (glove; no hand-size cue; anonymous dark sleeve; mentor's hands never shown; mentor's bubble off-panel left, hand from right; P2 crop). Advisor's wrist hidden in EP01. TF-3: the guard's sentence in Khmer has no address term and no gendered ending (EP12 repeats it letter for letter). TF-5: the P50 glint is not a defect. TF-7/TF-8 corrections accepted (twist-plan overrides characters §7-5 and series-arc on those points).
AA. Tension flag 7 noted for EP19 (change speaker/type). Khmer clue wording list = twist-plan §6 (binding for dialogue-writer, script-editor and the native Khmer reviewer).

## Leader rulings after ep01_beatsheet.md (2026-11-26) — flags accepted
AB. F1: P25–26 (outside the detention centre) and P27 (tower front glass door) approved as tight shots with no new LOC token; art-director writes them as variants (LOC_DETENTION_VISIT exterior detail / LOC_BACK_ALLEY-side tower door detail), no reference set.
AC. F3: the guard's grandson line (L34) moves to EP02. F4 P6 mentor line 「내려가서, 네 입으로 다 말해.」 accepted (a demand to confess, never a threat to kill). F5–F7, F8, F9, F11 accepted.
AD. Open questions: dialogue-writer decides wording (P5 vs P6, P41 second bubble, 「도망갔다」 wording at P42); P51 stays silent; env 「7년 전, 여름」 Khmer goes in the glossary; no end card (episode ends at P60); P55–60 outfit = character-designer's second-life summer token.

## Leader rulings after ep01_script.md + glossary_km.md (2026-11-26)
AE. D-F1–D-F13 accepted. D-F5: keep the L30 plant at P21 unless the native reviewer finds it unnatural (fallback P57). D-F6: script-editor checks 「위층 조 변호사」 against twist-plan K-15 (EP03 "upstairs" ambiguity) and rewords if it closes that door. D-F8: native reviewer may use the name មីនជែ at P54 if clearer. D-F11: native reviewer checks the cicada sound spelling; cane taps តុក… តុក… fixed for the series.

## Leader rulings after ep01_script_final.md (2026-11-26)
AF. E-F1/E-F2 applied by the leader to glossary_km.md (rows 조 변호사, K-05, 위/위층). The EP03 guard line must also use ជាន់លើ with no name (binding for EP03 dialogue). E-F3/E-F4 go to the native Khmer reviewer.

## Leader rulings after ep01_km_review.md (2026-11-26)
AG. Native Khmer review READY round 1, gate OK. Glossary updated by the leader: 애송이 변호사 → មេធាវីក្មេងខ្ចី, K-03 → …ខ្ញុំនឹងរកវាឲ្យឃើញ លោក។, cicada រ៉ឺងៗៗ… confirmed.

## Leader rulings after style-bible.md + character-sheets.md (2026-11-26) — flags 1–11 accepted
AH. 13 reference cards approved (supersedes ruling Q's "9 + hand card") plus the optional 14th PROPS_keyprops (APPROVED; attach to prop-twist panels). Push hand = HAND_ANON_GLOVE, tied to nobody; Taeho 44 is face only (overrides characters §11-11 TAEHO44_WINTER).
AI. Record panels: any timestamp/REC/UI overlay from Flow = redraw; single thin rounded border acceptable if the double border fails. Card scratch rule, P50 dot rule, P24 soft light, zelkova green exception, P59 no SUA card, cane/pen/outfit decisions (flag 6) accepted.

## Leader rulings after ep01_shotlist.md (2026-11-26)
AJ. PD-F3: PROPS_keyprops already approved (ruling AH); attach it to 001, 016, 023, 031, 032, 037, 050, 058, 059. PD-F15: P12 has the SFX ហឹក! (not silent) — the shot list wins over style-bible §8 on this point. PD-F16: P36 is ONE image (a split frame/inset = redraw). PD-F4, PD-F6, PD-F7, PD-F9–PD-F14 accepted. The shot list's staging is canon for EP01.

## Leader rulings after ep01_lettering.md (2026-11-26) — flags 1–7 accepted
AK. Lettering is canon for bubble positions (km_tool check OK, 48 bubbles). P56: both bubbles side by side in the bottom 20% counter strip (overrides the shot list's upper-right steam position; prompt-smith keeps the bottom strip empty). P52/P59 are thought bubbles (script wins over style-bible §8). P11 caption legibility and P42 line count are checked in the placement pass after images arrive.

## Leader rulings after ep01_prompts.md (2026-11-26)
AL. PS-F1 shortened per-scene/per-character tokens accepted (identity marks always kept). PS-F5 card ≈ a quarter of frame width (P16/P37 match). PS-F6, PS-F11 accepted. Mirroring check on import (PS-F10). P50 dot: retry, then twist-plan D5 fallback (PS-F9).
