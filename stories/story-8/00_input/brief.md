# Brief — NEW STORY (story-8), EP01 (2026-11-25)

- 실행 모드: 새 기획. `_workspace`는 활성 이야기(`stories/story-8/`)로 가는 Windows junction이다.
  **`_workspace`를 옮기거나 보관하지 않는다.** 다른 이야기 폴더(`rule4`, `poison`, `umbrella`, `gloves`, `revenge`, `story-7`)를 건드리지 않는다.
- 브랜치: `story-8` (main에서 분기). main에는 손대지 않는다. 커밋/푸시는 사용자가 요청할 때만.
- 회차: EP01 (NN = 01)

## 사용자 요청 (2026-11-25, 질문 답변 기준)

- 장르: **드라마 (Drama)**
- 드라마 세부 유형: **리서치가 정한다** (가족/직장/멜로/성장 등 — Phase 2 트렌드 리서치가 3개 패키지를 제안하고, 리더가 1개를 채택한다)
- 수위: **15+**
- 범위: 새 이야기 세팅 + EP01을 Flow 핸드오프 페이지까지 진행하고 멈춘다.

## 해석 / 고정 조건

- 장르: **드라마** — 현실적인 인물 관계와 감정이 중심. 판타지·초자연·헌터·회귀 같은 장르 장치는 쓰지 않는다
  (리서치가 아주 가벼운 장치 하나를 강하게 권하면 리더에게 플래그만 하고 스스로 채택하지 않는다).
  드라마도 하네스 공통 요구는 그대로: 대사 위주, 고긴장, **매 회차 반전 1개 이상**, 회차 끝 클리프행어.
- 수위: **15+.** 고어·성적 묘사·자해 장면 없음. 갈등·폭력의 위협은 대사·표정·침묵·물건으로 보여준다.
  질병·죽음·빚 같은 무거운 주제는 다룰 수 있으나 자극적으로 소비하지 않는다.
- **기존 이야기와 겹치지 않는다.** 다른 이야기의 인물·이름·세계관·용어집·레퍼런스 시트·스타일 바이블·제목을 재사용하지 않는다.
  특히 `revenge`(학원 복수극)와 전제·배경·주인공 유형이 달라야 한다. 이전 이야기 확인: `STORY_SUMMARIES.md`와
  각 `stories/<slug>/02_story/concept.md` / `characters.md`.
- 트렌드 리서치는 **새로** 한다. 이전 `01_research/` 폴더는 적용하지 않는다.
- EP01 기본 요구: 시각적으로 기억에 남는 첫 장면, 인물 각자의 욕망/목표, 회차 반전 1개 이상, 회차 끝 클리프행어.
- 대사: 짧고 자연스러운 크메르어, 말풍선에 편하게 들어가는 길이. 주요 인물의 **말투가 뚜렷이 달라야** 한다.
- 분량: 50+ 패널(하한, 목표 ~60). 한국어는 작업 언어, 독자는 크메르어만 본다.
- 실존 인물·실존 기업·실존 학교/병원 이름은 쓰지 않는다.
- 워크플로: 새 리서치 → 스토리 → 크메르어 포함 대본 → 크메르어 원어민 검수(자동) → 샷리스트 → 크메르어 말풍선 위치 →
  Flow 프롬프트 → 핸드오프 페이지. **핸드오프 페이지에서 멈추고 사용자의 Flow 이미지를 기다린다.**

## 프로젝트 고정 조건 (CLAUDE.md)

- **Khmer edition:** 독자는 캄보디아인이며 **크메르어만 본다**. 바뀌는 것은 딱 두 가지: (1) 말풍선에 크메르어 표시(뷰어가 그림),
  (2) 대본에 크메르어(`KM:` 줄) 추가. "독자가 캄보디아인"은 텍스트 언어에만 영향을 주며 이야기·배경·작화는 하네스 설계 그대로.
  **이미지에는 글자가 전혀 없다.** `webtoon-khmer-edition` 스킬을 모든 단계에서 따른다. 뷰어는 `km_tool.py build`로만 만든다.
- **Flow-by-hand mode:** 이미지는 사용자가 Google Flow에서 직접 만든다. Codex 없음. Phase 4는 `webtoon-flow-handoff` 스킬을 따르고,
  핸드오프 페이지를 만든 뒤 **사용자를 기다린다.** panel-artist-a/b/c는 쓰지 않는다. 없는 이미지를 만들어 넣지 않는다.

## 운영 메모

- 서브에이전트에게는 완전한 브리프를 주고, 각자 자기 파일만 쓰게 한다 (팀 메시징 도구 없음).
- 패널 프롬프트는 ≤250 단어, "keep area empty for a speech bubble" 문장 포함, 마지막 줄은 Avoid-text 줄.
- 뷰어에서 말풍선 폭은 최대 100−x %이므로 lettering의 `x + w ≤ 100`을 지킨다.
- 이미지 안에는 글자가 없으므로, 이야기 정보(편지·간판·문서·문자 메시지·화면 등)를 글자로 전달하는 비트를 만들지 말 것.
  정보는 얼굴·손·물건·빛·색·대사로 전달한다. 글자가 꼭 필요하면 `env` 텍스트(뷰어가 씀)로.

---

# LOCKED PLANNING DECISIONS (leader, 2026-11-25, after Phase 2 research) — every Phase 3+ agent follows these

Source: `_workspace/01_research/trend-brief.md` (read §0, §1, §2-A, §3, §4, §5, §6, §7, §8 first).
The user asked research to choose the drama type, so the leader adopted the synthesizer's recommendation.

1. **Package A 「다섯 개의 숟가락」 is ADOPTED** (alt title 「우리 집 빚은 누가 갚았나」). Family-secret drama:
   the eldest daughter has secretly paid her father's debt for two years and finds out every member of the family
   has been secretly paying the same debt, each to the same warm family friend '삼촌'. Do not re-open the package
   unless a fallback trigger in trend-brief §0 actually fires; then flag it in your file and to the leader, do not switch.
2. **Tone:** grievance/suspense 7 : warmth/laughter 3. Every episode: one warmth/laughter beat and one small win.
   No more than 2 consecutive 고구마 episodes. Heavy topics (debt, illness, leaving) only as pressure for choices.
3. **Twist evidence is wordless:** objects (blank envelopes, spoons, the cracked green bracelet, a missing ring),
   slips of the tongue, overheard lines, faces. Every twist has ≥2 plants. The T1 fairness line
   ("only you and I know") is set in dialogue before the slip. Recurring objects become fixed prop tokens
   (shape, colour, damage; no logos or writing).
4. **EP01 layout:** ~60 panels (55–65), trend-brief §4 layout (flash-forward cold open P1–4, `env` time marker P5,
   twist ~P51–56, cliffhanger = reaction face P57–60). EP01 small win: she refuses the raised amount for the first time.
5. **Series long question:** "Was the debt ever real? If so, whose?" EP03 is the planned biggest twist ("it was paid off
   3 years ago"); series-plotter checks its plausibility and may use the trend-brief fallback (real but inflated).
6. **Names, places, setting:** decided by concept-architect / worldbuilder / character-designer. Contemporary,
   realistic, no real companies/hospitals/schools. No umbrella prop, no market-stall heroine, no living-under-a-dead-
   sibling's-name, no school-bullying or office-ghost elements (overlap with earlier stories).
7. Khmer series title, EP01 title and all names go in `02_story/glossary_km.md`. Address-form clues (បង / ប្អូន / ពូ etc.)
   are marked as "clue address forms" there so the Khmer review keeps them.

## Leader rulings after concept.md (2026-11-25)
A. Titles accepted: series 「다섯 개의 숟가락」, EP01 「너랑 나만 아는 거다」; Khmer proposals ស្លាបព្រាទាំងប្រាំ / ដឹងតែយើងពីរនាក់ go to dialogue-writer for the glossary. 삼촌 → ពូ, marked as a clue address form.
B. P5 time marker: not "3일 전". series-plotter sets it (concept suggests ~"2주 전") so the cold-open table fits the envelope chain; the EP01 `env` text must match it.
C. The EP01 slip line keeps both `វា` and `ក៏…ដែរ` in Khmer (concept §10-1). The native Khmer review must preserve them.
D. Names (공하린 etc.) and the hillside-neighbourhood / bakery / gold-repair-shop setting are suggestions; worldbuilder and character-designer decide.
E. The spoon prop is fine (different meaning and setting from `poison`).

## Leader rulings after world.md (2026-11-25) — all world.md flags accepted
F. EP01 cliffhanger: the brother holds the flat, EMPTY next-month envelope (returned after paying), matching the uncle's past-tense slip.
G. EP01 she pays in the evening, not at dawn: one line covers it (the uncle asked her to come in the evening because he wants to raise the amount).
H. No exact sums or currency in dialogue; relative terms only. Banknotes drawn with no numbers, faces or writing.
I. Hari's day job = off-screen dry cleaner afternoons; brother's hidden real job (night loading suggested) stays hidden in EP01. character-designer may change, keeping payment times non-overlapping.
J. W6 (uncle repaired the bracelet's gold long ago) accepted as an optional plant.
K. "그 일" is the family's fixed euphemism for the debt; glossary entry; the Khmer review keeps it as a euphemism.
L. Locations fixed at 6: LOC_HOME_TABLE, LOC_HOME_ENTRANCE, LOC_ALLEY_STAIRS, LOC_UNCLE_SHOP, LOC_UNCLE_BACKROOM, LOC_FACTORY_GATE.

## Leader rulings after characters.md (2026-11-25) — flags F1–F9 accepted
M. Family surname 송 (not 공); names fixed as in characters.md §0 (하린, 인호, 미자(박), 우진, 새롬, 주석구=ពូ; minor 탁영숙, យាយ). Khmer spellings there are canon for the glossary. Any new name gets the same Khmer-reading check (F2).
N. EP01: Ha-rin is summoned on the 15th at 20:40 (same day as U-jin, the uncle's deliberate/mixed date) — series-plotter confirms dates.
O. Two bracelets (F4) adopted provisionally: the real repaired one in the uncle's drawer; U-jin wears a copy and hides the crack side. twist-master has final say; fallback in characters §12.
P. Clue address forms: ប្អូនឯង→វា + ក៏…ដែរ (EP01 slip), ខ្ញុំ instead of ក្មួយ (EP01 small win), អាតូច (EP04). All go into glossary_km as clue forms.

## Leader rulings after series-arc.md (2026-11-25) — FL1–FL8 accepted
Q. Season 1 = 36 episodes, 3 acts, 8 arcs (series-arc.md). EP03 original twist kept ("paid off 3 years ago"), no fallback.
R. P5 `env` = 「2주 전」 (Khmer suggestion ពីរសប្តាហ៍មុន, dialogue-writer confirms in glossary). Cold open = 28th ~22:00; P6 = dawn of the 14th. EP01 spans the 14th → 15th 21:40; the move to the 15th is shown by a sunset-light panel, no second `env`.
S. FL1: new minor character = the old kitchenware supplier (EP02–03). Name + Khmer-reading check by dialogue-writer/episode-outliner when he first appears (not needed in EP01 unless planted).
T. FL2 EP01 additions accepted as optional plants (twist-master/episode-outliner decide): Ha-rin's triangle-folded banknote corner; one slightly thicker envelope in the cold open; distant black puffer jacket in the sunset panel.
U. FL3: top-down table angle may be used a third time in EP36 (bookend).
V. FL4: U-jin's hidden night job = loading dock of Ha-rin's own factory (EP07 twist). FL5: uncle's T1 line is on the alley stairs, 14th 21:30.
W. FL6/FL7: §9 truth skeleton is a working version, twist-master may revise; weekdays stay unset; keep Ha-rin's nights off (15th, 28th) and father's odd-night shifts.

## Leader rulings after twist-plan.md + tension-curve.md (2026-11-25)
X. Panel-zone conflict: **twist-plan.md §0/EP01 panel zones win** for twist beats (T1 line P35–37, uncle knows her day off P34, drawer bracelet P48, empty "next month" envelope P50, slip P52, freeze P53–56, cliffhanger P57–60 + optional P61). tension-curve.md's levels move with their beats; its other structure (sections, warmth low point, P14 near-caught, P17 Sae-rom reads Ha-rin's face) stays.
Y. twist-plan TW1–TW9 all accepted: new cliffhanger staging (TW1); spoons/bowls scattered around the envelopes in the cold open, overriding world.md §7 (TW2); dad's 「…끝난 얘기다」 + Sae-rom's silence-breaking joke (TW3); in EP02 the uncle never names Ha-rin on the phone — series-arc EP02 wording yields to twist-plan (TW4); only Ha-rin's envelope goes in the drawer (TW5); dinner bracelet with a cloud streak = redraw (TW6); tiny sunset figure (TW7); plain rice sack prop optional (TW8); 「누구요?」 = អ្នកណា (TW9).
Z. Ruling O final: two bracelets. Ruling T final: all three optional plants used. Khmer clue wording list = twist-plan §6 (binding for dialogue-writer, script-editor and the native Khmer reviewer).

## Leader rulings after ep01_beatsheet.md (2026-11-25)
AA. Beatsheet flags F1–F8 accepted (60 panels, small win P45, cold face P46, sunset P40–41, no P61, envelope in backpack at P14).
AB. Open questions: Q1 keep Ha-rin's thought 「…말한 적 없는데.」 at P34. Q2 keep U-jin's P57 line if short. Q3 grandma's P39 line: dialogue-writer decides (cut if it crowds the T1 scene). Q4 P58 fully silent. Q5 no end card unless km_tool supports one; the episode ends on P60. Q6 P5 env = 「2주 전」 / Khmer ពីរសប្តាហ៍មុន (dialogue-writer confirms in glossary). Q7 yes, same appointment. Q8 dialogue-writer finalizes.

## Leader rulings after style-bible.md + character-sheets.md (2026-11-25)
AC. A1–A6 accepted. 12 reference cards (6 main × turnaround + expressions, 16:9) plus the optional 13th card `PROPS_keyprops` (APPROVED) for the evidence props; attach it to the twist panels (cold open, P10, P19–21, P48, P50, P58–59). No sheets for 탁영숙 / 동네 할머니 in EP01. Ujin's bracelet is never in his appearance string; only P19–21 add it.

## Leader rulings after ep01_shotlist.md (2026-11-25)
AD. FL1: style-bible wins — every panel image is 9:16 portrait in Flow (never mixed). The shot list's tall/normal/short stays as a framing/rhythm note only (crop-free; composition fills 9:16).
AE. FL3: HARIN_FACTORY outfit includes a plain black backpack (no logo); prompt-smith writes it into her factory-outfit prompts.
AF. FL4: the shot list's back-room staging is canon for EP01 (Ha-rin back to curtain, uncle back to wall, low drawer chest on screen right from her view with the key drawer = left column second from top of that chest, safe screen-left). FL2, FL5–FL8 accepted.

---

# EP02 (2026-11-25) — Phase 0 case 2 (new episode)

- User: EP01 images are NOT made yet (ep01_flow_status.md = WAITING_FOR_IMAGES). Create EP02's beat sheet, Khmer script,
  native Khmer review, shot list, lettering, Flow prompts and handoff page now. **Do not touch EP01 files.**
- Episode: EP02 (NN = 02) 「엄마는 웃고 있었다」. Branch `story-8`.
- Reuse (read, do not redo): `02_story/*`, `04_visual/style-bible.md`, `character-sheets.md`, `refs/ref_prompts.md`.
  EP02 adds only what is new (new location/prop/outfit tokens; a reference card only for a new character who shows a face).
- Follow series-arc.md EP02 (15th 21:40 → 16th dawn stairs → 17th dinner → 18th 21:15 yard phone call), twist-plan.md §4 EP02
  (incl. D1/D10: the uncle never names Ha-rin on the phone; "안 팔았어. 맡긴 거야." លក់/បញ្ចាំ pun; copy-bracelet small twist),
  tension-curve.md EP02 notes (T2: start at 9 straight from EP01 P60, door stand-off short (5–6 panels, U-jin "몰라."),
  then drop to the 16th-dawn stairs valve at ~3).
- 50+ panels (target ~60), one main twist (mother pays too, sold her ring, pays longest), cliffhanger type B = the series'
  ONLY cut on dialogue heard through a door (Ha-rin's silhouette behind the frosted entrance glass).
  One warmth beat + one small win. Plants for EP03: the 냄비 공장 사장 mention + father's spoon; "전화 한 통 안 오게";
  Sae-rom's 「삼촌은 나 맨날 애기 취급해~」 (L14); rice-bin lid 「거기 손대지 마!」.
- Continuity: EP01 final script/lettering are canon (letter-identical where repeated). Khmer clue rules from twist-plan §6
  and glossary_km.md still bind (វា / ក៏…ដែរ only in EP01 P52; អាតូច not before EP04; លក់ vs បញ្ចាំ; រឿងនោះ; no amounts/currency).
- Locations: reuse the 6 LOC_* tokens. A new location (e.g. the yard for the phone call) only if it cannot be staged in an
  existing one; flag it so art-director writes a token. The 냄비 공장 사장 appears at most as a faceless distant cameo in EP02
  (no reference card needed); his name and Khmer-reading check are needed only if he is named in dialogue.

## EP02 leader rulings after ep02_beatsheet.md (2026-11-25) — all flags accepted
EA. 62 panels; keep optional P23 (cut it only if the shot list needs room). New location LOC_HOME_YARD (outside reverse of the entrance; P59–62) approved; art-director writes its token. New props PROP_RICE_BIN (never open in EP02) and PROP_PHONE (screen never visible); pot-factory boss = one faceless distant figure, unnamed, no reference card.
EB. F1/F7 accepted (16th dawn = Ha-rin awake from night-shift habit; no laundry day on the 18th). Q2: durations (이 년 / 일 년 좀 넘었어 / 이 년 반) are fine — they are not money amounts. Q3: 「전화 한 통 안 오게」 stays only in the phone call (P57). Q5: letterer decides the through-door bubble style within what km_tool supports.
EC. លក់ for Mi-ja's ring (sold) at P51 and បញ្ចាំ for U-jin's bracelet (pawned) at P16 — the pun depends on keeping them distinct. Father says 「…됐다」 (not a repeat of 「끝난 얘기다」).

## EP02 leader rulings after art-director's EP02 additions (2026-11-25) — AE1–AE7 accepted
ED. AE1 the entrance door is already closed at P01 (U-jin closed it coming in). AE2 Ha-rin's backpack lies beside her in S1, not worn. AE3 her fingertips spread onto the glass edge at P58/P60/P62 so the hand shadow reads from the yard. AE4 father's shoes absent on the 15th, present on the 18th. AE5 copy bracelet visible at P17 only. AE6 U-jin's hood up only at P08. AE7 no comic speed lines at P30 (chair tilt + slight motion blur). If ep02_shotlist.md differs, prompt-smith follows these rulings.

## EP02 leader rulings after ep02_shotlist.md (2026-11-25)
EE. FL3 overrides ruling ED/AE1: the entrance door stays OPEN in panels 001–003 to match EP01 P57–60 canon (direct continuation); it is closed in S6 (from 046/047). Prompt-smith follows the shot list here.
EF. FL2, FL4–FL9 accepted. Attach PROPS_keyprops to 017, 033, 052 and MIJA_expressions to 061. Copy bracelet visible only at 017 (pull-down at 019); AE3 fingertips-on-glass applies to 058/060/062.

---

# EP03 (2026-11-25) — Phase 0 case 2 (new episode)

- User asked to continue with EP03. EP01 and EP02 images are NOT made yet (both WAITING_FOR_IMAGES). Create EP03's beat sheet,
  Khmer script, native Khmer review, shot list, lettering, Flow prompts and handoff page. **Do not touch EP01/EP02 files.**
- Episode: EP03 (NN = 03) 「3년 전에 끝난 일」 — the 19th; **last free episode, the series' biggest twist so far (intensity 10)**.
- Reuse (read, do not redo): `02_story/*`, `style-bible.md` (incl. §10 EP02 additions), `character-sheets.md`, `refs/ref_prompts.md`.
  EP03 adds only what is new (append "EP03 additions"; never rewrite earlier sections).
- Follow series-arc.md EP03 and twist-plan.md §4 EP03 exactly: 19th morning kitchen (Mi-ja and Ha-rin stop pretending; the empty
  envelope inside the rice-bin lid = third envelope; the three-person alliance, "Dad and Sae-rom must not know"; warmth beat
  「밥 지을 때마다 심장이 철렁했다니까」 — they laugh together for the first time; small win = mother-daughter alliance);
  Ha-rin breaks R1 on purpose ("I remember one person who knows their faces"); Mi-ja heard the pot-factory boss is selling gold at
  the uncle's shop this week; 19th afternoon Ha-rin deliberately waits for him on the alley stairs; he recognises her warmly
  (1–2 panel wordless flashback: 17-year-old Ha-rin gave him a glass of water the night the business collapsed);
  the twist line 「그거? 다 끝났잖니. 3년 전에. 석구 씨가 마지막 걸 들고 왔었지.」 — **never the father's name** (protects EP05);
  "brought the last of it" must not say whose money it was.
- Cliffhanger type C (decisive line) → Ha-rin's face → at the bottom of the stairs, in the white-lit shop doorway, the uncle
  standing looking this way, smile unchanged. One piece of info: "the debt is over — and the uncle saw."
- 50+ panels (target ~60). Same Khmer clue rules (twist-plan §6, glossary): no វា/ក៏…ដែរ slip sense, no អាតូច (EP04),
  លក់/បញ្ចាំ distinct, ចប់ (finished) for the twist line's "끝났잖니" and echoing EP01 P24 「…끝난 얘기다」, no amounts/currency
  (durations like "3년 전" are fine), "그쪽" stays nameless.
- **New minor character on screen with a face: the 냄비 공장 사장 (old kitchenware supplier).** He keeps the EP02 look (grey padded
  jacket, dark flat cap, faded indigo cloth bundle). He needs: a name only if dialogue names him (Khmer-reading check, characters F2
  rule; avoid names used in other stories), a character token (art-director), and one reference card `SUPPLIER_turnaround` +
  `SUPPLIER_expressions` (ref-sheet-artist appends to ref_prompts.md). The 17-year-old Ha-rin flashback is described in words
  (younger look, school-age clothes) with HARIN cards attached; no new card unless art-director insists.
- Locations: reuse LOC_* tokens; new only if essential (flag it).

## EP03 leader rulings after ep03_beatsheet.md (2026-11-25) — all flags accepted
GA. 61 panels; keep optional P39 (cut first if room is needed). Start continues from EP02 P62 (F1). F2 outfits accepted.
GB. The supplier is NOT named in dialogue: speaker 「사장님」 / Khmer label ថៅកែ. Address forms: he calls himself តា and Ha-rin ចៅ; she calls him ថៅកែ. He never uses ពូ or ក្មួយ (ពូ = the uncle's clue form). Backup name unused.
GC. Twist line Khmer (Q4): use ចប់ហើយ, ideally echoing EP01 P24 `…រឿងហ្នឹង ចប់ហើយ។`; "3년" as words (បីឆ្នាំ); never ឈប់, the father's name, whose money, or the father as subject of សង. 「내 게 제일 마지막이었어」 = he was the last creditor paid (F11).
GD. New art needs approved: SUPPLIER token (mid-60s, thin, stooped, large rough hands, no glasses; grey padded jacket, dark flat cap, indigo cloth bundle) + SUPPLIER_turnaround / SUPPLIER_expressions cards; HARIN_TEEN flashback outfit (no new card, no burn scar, plain grey school tracksuit jacket); LOC_FLASH_OLDSHOP (P46–47, flashback, half-down shutter, stacked pots, blank everything); light codes L-MORNING-KITCHEN, L-AFTERNOON-STAIRS; props: open rice bin with envelope taped inside the lid, father's covered bowl with a STRAIGHT spoon on the lid, label-less water bottle, empty folded indigo cloth, plain glass, three identical envelopes.
GE. Q7: the banknote triangle fold (L16) moves to EP05. F12 noted for EP04 (the uncle opens as the one who has been waiting).

## EP03 leader rulings after art-director's EP03 additions (2026-11-25) — AG1–AG13 accepted
GF. Total reference cards = 15 (13 + SUPPLIER_turnaround + SUPPLIER_expressions). P46 attaches HARIN_turnaround with younger-look override wording; P47 (hands) attaches no Harin card (avoid the burn scar). Recent memory = warm sepia, far past = cold blue-grey. P26 shows exactly three envelopes. P61 uncle = warm smile only, no orange light. P60 streetlamp optional (panel-director decides).

## EP03 leader rulings after ep03_shotlist.md (2026-11-25)
GG. FL1–FL10 accepted. P60 streetlamp OFF (no warm light on the uncle at 060–061). Scene ids with a/b/F suffixes; render 041 first as the composition reference for 060. Kitchen staging (bedroom door left wall behind the head seat, kitchen doorway right wall at Sae-rom's end) is canon from EP03 unless it contradicts EP01/EP02 shot lists — prompt-smith checks and follows the earlier shot lists if they differ.

---

# EP04 (2026-11-25) — Phase 0 case 2 (new episode)

- User asked to continue with EP04. EP01–EP03 images are NOT made yet (all WAITING_FOR_IMAGES). Create EP04's beat sheet,
  Khmer script, native Khmer review, shot list, lettering, Flow prompts and handoff page. **Do not touch EP01–EP03 files.**
- Episode: EP04 (NN = 04) 「꼬맹이」 — 19th 21:00 → 20th night. A payoff ("사이다") episode, intensity 8, after the EP02–03
  고구마 pair.
- Reuse (read, do not redo): `02_story/*`, `style-bible.md` (incl. §10–§11), `character-sheets.md` (incl. §7–§12),
  `refs/ref_prompts.md` (15 cards). EP04 adds only what is new (append "EP04 additions"; never rewrite earlier sections).
- Follow series-arc.md EP04 and twist-plan.md §4 EP04 exactly, and EP03 ruling GE/F12: the 19th 21:00 back-room scene opens with
  the uncle as the one who has been waiting (he saw her with the supplier). He does not deny: 「그래, 끝났지. 그쪽 빚은.」
  「내가 빚에 넣는다고 했니? 보태자고 했지.」 (the EP01 T1 verb ជួយបន្ថែម/보태다 was the trap) 「궁금하면 네 아버지한테 물어봐라.」
  Small win/사이다: Ha-rin lays this month's envelope down as U-jin's bracelet redemption — 「이걸로 우진이 팔찌 찾아갈게요.」 —
  a customer is in the front shop so the uncle smiles and returns the REAL bracelet (one cold-face panel). Real vs copy
  side-by-side comparison panel (raised gold band + white cloud streak vs flat painted line), 「이 테, 원래 누가 고친 거야?」 /
  「할머니가… 삼촌 가게에서. 아주 옛날에.」 (W6). Warmth: U-jin's gruff 「…밥 좀 먹고 다녀, 짜증 나게.」 + Sae-rom vs the uncle's
  tangerines (eerie warmth). 20th evening the uncle visits with a bag of tangerines (Dad present → Ha-rin can't speak); at the
  table he calls Sae-rom **꼬맹이 = អាតូច** — a calculated counter-move, not a slip; nobody at home calls her that; Sae-rom's spoon
  stops (mirror of Dad's spoon). After he leaves, at the entrance, Sae-rom without jokes for the first time: paid today 16:20,
  for 8 months, the first to notice (saw her sister come in by the back door at dawn).
- Cliffhanger type E (just before opening): 「언니. 아빠 것도 있어.」 Sae-rom points to the old shoe box on the TOP shelf of the
  entrance shoe cabinet; cut the instant Ha-rin's hand touches the lid. One piece of info: "Dad pays too." Do NOT open it.
- Khmer: **អាតូច is used for the first time here, only by the uncle** (never in family lines). Keep twist-plan §6 rules:
  no វា/ក៏…ដែរ slip sense, ជួយ/បន្ថែម for 보태다 (echo EP01 P37 exactly), "and" = និង, "who" = នរណា (អ្នកណា is Ha-rin's EP01
  P54 word), "그쪽" = ខាងនោះ (nameless), លក់/បញ្ចាំ distinct (the bracelet was pawned: បញ្ចាំ), no amounts/currency,
  never the father's secret content. Reuse EP01–EP03 exact Khmer for repeated lines and sound words.
- Bracelet rules: the real bracelet (raised gold band + one white cloud streak) and the copy (flat painted gold line, no streak)
  may appear side by side for the first time; decide (twist-master note) where the copy goes afterwards (U-jin's desk drawer).
- Locations: reuse LOC_* tokens (LOC_UNCLE_SHOP, LOC_UNCLE_BACKROOM, LOC_HOME_TABLE, LOC_HOME_ENTRANCE etc.); new only if essential.
- 50+ panels (target ~60), one main twist (Sae-rom knew first), one small win, one warmth beat.

## EP04 leader rulings after ep04_beatsheet.md (2026-11-25)
HA. F1: ruling GE stands — CUT optional P27 (banknote triangle fold stays for EP05). EP04 = 61 panels; renumber consecutively (P01–P61) in the script and everything downstream.
HB. F2–F12 accepted (incl. new tracker items L44 꼬맹이-as-signal → EP09, L45 shoe box). Box shown only from outside, never opened. P46/P52 mirror pair (same camera). Uncle's cold face in exactly one panel (the redemption scene); the 꼬맹이 look is calm/calculated, not cold.
HC. Khmer: Q3 — បំណុល may appear only inside the uncle's negated question 「빚에 넣는다고 했니?」 (e.g. ដាក់ចូលបំណុល); never សងបំណុល in the T1 echo. Q5 grandmother in the W6 line must not read as the stairs យាយ (dialogue-writer picks a clear form, e.g. ជីដូន). Q6 customer label ភ្ញៀវ, never ថៅកែ/ពូ to the uncle. Q8 Sae-rom saw her sister at dawn "the day she left for the school retreat" (수련회 가던 날). Q9 Sae-rom quotes the uncle without 꼬맹이/អាតូច — អាតូច appears exactly once in EP04 (P51-equivalent, the uncle).
HD. New art needs approved (no new location): front-shop interior layout + L-SHOP-NIGHT-INSIDE; L-ENTRANCE-EVENING with door open; muted tangerine bag + one peeled tangerine; low round stool; shoe cabinet upper shelf behind a plain hinged door + old faded grey-brown shoe box (lid closed); Sae-rom's big grey cat plush (zip on the back); faceless customer (woman, 50s, charcoal coat, no card); fuller envelope; first SEOKGU_OUT; U-jin wears the REAL bracelet from the landing scene onward.

## EP04 leader rulings after ep04_script.md (2026-11-25)
HE. EP04 Khmer title = ឈ្មោះហៅក្រៅ (no អាតូច in the title). Writer flags 2–6 accepted: P10 ចំណែកខាងនោះ (no បំណុល); P15 thought uses ជួយបន្ថែម; P14 second memory bubble (EP01 T1 line) may be dropped by the letterer if crowded; customer never addresses the uncle; Mi-ja says បងសុកគូ at P43.

## EP04 leader rulings after art-director's EP04 additions (2026-11-25) — AH1–AH13 accepted
HF. Art sections use beatsheet numbers (bs) plus script numbers (sc); downstream (shot list, lettering, prompts) uses SCRIPT numbers P01–P61. Flashback P14 uncle = SEOKGU_OUT with thermos (EP01 canon). Coat folded on his knees (stool has no back). Shoe cabinet on the right-hand wall seen from inside facing the door — check EP01–EP03 entrance panels against this when their images are validated. Banknotes in EP04 have flat corners (triangle fold = EP05). Never attach SEOKGU expression cuts ③④⑤ to the calculated-calm panels. No new reference cards (15).

## EP04 leader rulings after ep04_shotlist.md (2026-11-25)
HG. Shot-list flags FL1–FL11 accepted (streetlamp off at 003; coat folded on knees; 053 the uncle standing to leave behind U-jin's chair; stool at the inner corner between Mi-ja and Sae-rom; S7 camera directions with the shoe cabinet's side; backpack back on from 026). Render 045 first as the reference for 051.
