# Brief — NEW STORY (story-7), EP01 (2026-11-24)

- 실행 모드: 새 기획. `_workspace`는 활성 이야기(`stories/story-7/`)로 가는 링크이며 지금은 비어 있다.
  **`_workspace`를 `_workspace_{YYYYMMDD_HHMMSS}/`로 옮기거나 보관하지 않는다.** 다른 이야기 폴더를 건드리지 않는다.
- 브랜치: `story-7` (main에서 분기). main에는 손대지 않는다. 푸시는 사용자가 요청할 때만.
- 회차: EP01 (NN = 01)

## 사용자 요청 (2026-11-24, 질문 답변 기준)

- 장르: **판타지 로맨스**
- 회차: **Episode 1**
- 수위: **18+ (성인)**

이 외에 사용자가 준 조건은 없다. 배경·전제·인물·톤의 세부는 **새 트렌드 리서치 결과로 정한다.**

## 해석 / 고정 조건

- 장르: **로맨스 판타지** (로맨스가 중심, 판타지는 로맨스를 키우는 장치). 장르 혼합으로 로맨스를 밀어내지 말 것.
- 수위: **18+.** 성인 독자용 감정선·관능적 긴장·성숙한 주제(권력, 욕망, 상처, 대가)는 쓸 수 있다.
  단, **노골적 성행위 묘사·노출 장면은 쓰지 않는다**(암시·긴장·시선·손길 수준까지). 동의·대등함을 해치는 로맨스
  (강압을 로맨틱하게 포장)는 쓰지 않는다.
- **기존 이야기와 겹치지 않는다.** `rule4`, `poison`, `umbrella`, `gloves`, `revenge`, `school`의 인물·이름·세계관·용어집·
  레퍼런스 시트·스타일 바이블·제목을 재사용하지 않는다. 특히 `gloves`(같은 장르)와 전제·마법 규칙·배경이 달라야 한다.
  이전 이야기 확인: `STORY_SUMMARIES.md`와 각 `stories/<slug>/02_story/characters.md`.
- 트렌드 리서치는 **새로** 한다. 리서치 결과로 배경·전제·주인공 유형을 정한다.
- EP01 기본 요구(하네스 공통): 시각적으로 기억에 남는 첫 장면, 인물 각자의 욕망/목표, 회차 반전 1개 이상,
  회차 끝 클리프행어(로맨틱 훅). 고백/관계 확정은 이후 회차.
- 대사: 짧고 자연스러운 크메르어, 말풍선에 편하게 들어가는 길이. 두 주인공의 **말투가 뚜렷이 달라야** 한다.
- 분량: 50+ 패널(하한). 한국어는 작업 언어, 독자는 크메르어만 본다.
- 워크플로: 새 리서치 → 스토리 → 크메르어 포함 대본 → 크메르어 원어민 검수(자동) → 샷리스트 → 크메르어 말풍선 위치 →
  Flow 프롬프트 → 핸드오프 페이지. **핸드오프 페이지에서 멈추고 사용자의 Flow 이미지를 기다린다.**

## 프로젝트 고정 조건 (CLAUDE.md)

- **Khmer edition:** 독자는 캄보디아인이며 **크메르어만 본다**. 바뀌는 것은 딱 두 가지: (1) 말풍선에 크메르어 표시(뷰어가 그림),
  (2) 대본에 크메르어(`KM:` 줄) 추가. 리서치·스토리·세계관·캐릭터·작화는 하네스 설계 그대로. **이미지에는 글자가 전혀 없다.**
  `webtoon-khmer-edition` 스킬을 모든 단계에서 따른다. 뷰어는 `km_tool.py build`로만 만든다(손으로 쓰지 않는다).
- **Flow-by-hand mode:** 이미지는 사용자가 Google Flow에서 직접 만든다. Codex 없음. Phase 4는 `webtoon-flow-handoff` 스킬을 따르고,
  핸드오프 페이지를 만든 뒤 **사용자를 기다린다.** panel-artist-a/b/c는 쓰지 않는다. 없는 이미지를 만들어 넣지 않는다.

## 운영 메모

- 서브에이전트에게는 완전한 브리프를 주고, 각자 자기 파일만 쓰게 한다.
- 패널 프롬프트는 ≤250 단어, "keep area empty for a speech bubble" 문장 포함, 마지막 줄은 Avoid-text 줄.
- 뷰어에서 말풍선 폭은 최대 100−x %이므로 lettering의 `x + w ≤ 100`을 지킨다.
- 이미지 안에는 글자가 없으므로, 이야기 정보(편지·간판·문서·마법진 문구 등)를 글자로 전달하는 비트를 만들지 말 것.
  정보는 얼굴·손·물건·빛·색으로 전달한다. 글자가 꼭 필요하면 `env` 텍스트(뷰어가 씀)로.

---

# LOCKED PLANNING DECISIONS (leader, 2026-11-24, after Phase 2 research) — every Phase 3+ agent follows these

Source: `_workspace/01_research/trend-brief.md` (read §0, §2-A, §3, §4, §5, §6 first). Package 1 is ADOPTED. Do not re-open it
unless a fallback trigger in trend-brief §0-4 actually fires (then tell the leader in your file; do not switch on your own).
Rating: the user chose **18+** directly.

1. **Package:** 로판 × 인외(용족) 볼모 남주 × 갓 즉위한 전략형 여왕 × 조약 의식으로 먼저 정해진 관계(결혼도 계약도 아님) ×
   양쪽 매파의 암살 정치. Working title 「여왕의 그림자에는 날개가 있다」 (alt 「발밑의 용」). concept-architect sets the final short
   Korean series title, the EP1 episode title and the Khmer title (must read short in Khmer; goes in `glossary_km.md`).
2. **The ONE fantasy rule (exact):** *용족 볼모의 그림자는 그것을 맡은 사람의 발밑에 붙는다. 맡은 사람이 살아 있는 한 그는 사람의
   모습에서 벗어나지 못하고, 맡은 사람이 죽으면 그림자는 그에게 돌아간다.* Visible signs only (no text): the queen has two shadows
   (hers + a winged one), he has none in sunlight, servants walk around the winged shadow. Gold blood is biology, not a rule.
   The rule is said once in conflict dialogue (the uncle, B2), never in narration. **The shadow does NOT react to emotion** (keeps
   clear of `umbrella`); the P61 "wings on his shoulders" is composition (he stands where her shadow falls), not magic.
   **Consent is never judged by magic** (keeps clear of `gloves`): it is carried by words and objects (the lock on his side).
3. **Leads (final names only by character-designer):** short, easy to write and read in Khmer, none from trend-brief §5-2, no '백'
   surname, no real-title names.
   - **Queen:** 24, crowned 7 days ago, underestimated; goal = keep the crown without a regent, keep her father's peace, turn tonight's
     assassination into evidence; secret = she suspects her father's sudden death. Speech: **dry irony, polite court register,
     short complete sentences that take the other person's words and twist them.** Not clipped commands (that is `gloves`' heroine).
   - **Hostage = the dragon-kin's king** (looks 28): direct, plain statements, **no irony**, says what he wants then waits, slightly
     old-fashioned. Never questions/conditional chains (that is `gloves`' hero). No 반존대. He walks in and kneels by himself:
     no chains, shackles or cages, ever.
   - Supporting (EP1 named people ≤ 5 incl. leads): the uncle (chancellor, open hostility from the start; NOT a trusted-ally betrayal,
     `poison` used that), the old dragon-kin envoy (almost silent; carries clues by gesture), the captain of her guard (loyal, terse).
   - Speech contrast in Khmer is made by sentence FORM (irony/twist vs plain statement), LENGTH and VOCABULARY. dialogue-writer picks
     Khmer address terms per `webtoon-khmer-edition` and records them in the glossary.
4. **The address-term twist must work in Khmer.** The reveal fires on the envoy's "폐하" said to HIM (P47), the title the court has
   used for HER. dialogue-writer: choose ONE Khmer royal address term, use it to the queen on-panel at least twice before P47 (e.g. the
   uncle at P8), and give the envoy at P47 exactly the same term. script-editor and the native Khmer reviewer check this. Royal register
   (រាជស័ព្ទ) is used only as far as it stays short and readable in a bubble; record the decision in the glossary.
   **Dragon in Khmer:** the dragon-kin are western-style winged dragons (horns, wings). Choose the Khmer word so readers picture that,
   not a serpent naga, unless the reviewer finds the naga word reads right; record the reasoning in the glossary.
5. **Setting:** western-style canyon kingdom bordering the dragon-kin highlands, late-summer dry season (no north/snow/rain).
   EP1 locations (keep to these for Flow consistency): (1) the great stone sun gate across the canyon + white stairs (noon rite),
   (2) the sunlit pillared corridor, (3) the two connecting rooms with the connecting door (lock on his side), (4) the banquet hall,
   (5) the night terrace over the canyon. No glass/greenhouse, no gloves, no food/poison beats, no umbrellas/rain, no documents.
6. **EP1 spine = trend-brief §3 (9 beats, target 64 panels, allowed 60–70, never below 50):** B1 noon cold open (P1–5) → B2 humiliation
   and two-beat counter (P6–12) → B3 the man without a shadow (P13–20) → B4 the lock on his side (P21–28) → B5 banquet (P29–36) →
   B6 the queen's trap, small twist (P37–42) → B7 second arrow, "폐하", main twist + replay (P43–50) → B8 "nobody saw" (P51–57) →
   B9 the door gap, romantic cliffhanger (P58–64). Plants F1–F6 exactly as trend-brief §3-3 (all ≥ 15 panels before P45; P49 replays
   P3's composition). Her decisions: P10–11, P21–27, P37–42, P51, P63. Last line stays hers: "…안 할 거예요. 그 말." (wording may be
   polished, meaning may not change: she CHOOSES not to tell him to step back).
7. **18+ delivery = trend-brief §4 (premise, gaze, distance, restraint, desire, the cost of restraint).** Guardrails §4-3 are binding:
   no explicit sex, no nudity, no bed scene in EP1, no kiss in EP1, no romanticized coercion (no wrist-dragging, wall-pins, "no means
   yes", potions, memory-less nights), the hostage power is never a romance lever (she asks nothing of him through the shadow; while he
   is not free, she limits herself), no bait-and-cut. Wound care: rolled sleeve, forearm only; she hands him a clean cloth without
   touching him.
8. **NO text in any image.** Treaty, petitions, orders, seating cards, banners: none written. Gate carvings = sun-and-wing motifs; house
   emblems = shapes (sun disc, canyon, horns); the archer signal = tapping her ring twice; the arrest = her word + her ring. The dragon's
   true form is NOT drawn in EP1–3 (shadow only; horn crest hidden until P46). Crowds are silhouettes.
9. **Risks to verify (trend-brief §10):** (a) non-human lead has no Korean ranking numbers (keep it as the device that shows the rule);
   (b) hostage power gap vs consent: script-editor checks every guardrail; (c) Flow: "no shadow" and the winged shadow — design shots so
   the story never rests on one hard image (others' long shadows, wall-shadow-only shots); (d) all Khmer is a draft and goes through the
   native Khmer review.
10. **Series shape for series-plotter:** detailed map EP1–EP12 + a half-page season outline. Every episode: one twist/reveal + one new
    question + one step up in tension. EP2 opens with her answer in ACTION plus new information (no accidental interruption); EP3 (last
    free episode) ends with the court learning he is king and him standing BESIDE her: "결정은 이 사람이 합니다." (trend-brief §3-5).
    Relationship confirmation postponed; consent needs freedom (the series' romance lock = finding a way to free him without her death).
    Permanent bans: "he knew/watched from the start", name-calling endings, trusted-ally betrayal, decisions made by him alone.
11. **Process gate:** after script-editor writes `03_episode/ep01_script_final.md`, run `native-khmer-agent-reviewer` BEFORE the shot list.
    The shot list does not start until `km_review.py gate --episode 01` passes.

## LEADER RULINGS after concept (2026-11-24) — binding for all later agents
Read `_workspace/02_story/concept.md` (it follows the locked decisions; where it refines them, it wins unless a ruling below says otherwise).

A. **Titles approved:** series 「날개 달린 그림자」, EP1 episode title 「폐하」 (backup 「정오의 의식」). The working title
   「여왕의 그림자에는 날개가 있다」 becomes the poster tagline only. Khmer series-title draft ស្រមោលមានស្លាប (ស្លាប "wing",
   NOT ស្លាប់ "die"): dialogue-writer copies it into `glossary_km.md`; the native Khmer reviewer confirms it does not read as a
   typo of ស្លាប់ (if it does, the reviewer picks the closest clean alternative and records why). The EP1 title 「폐하」 uses the
   SAME Khmer royal address term as the P47 twist line (brief item 4); if that term is too long for a title, use the backup.
B. **Release rule (closes the "wait 20 years" hole):** time NEVER frees the shadow. **Only the holder's death** returns it. The
   treaty sends a new hostage to each NEW monarch at that monarch's first noon rite (that is why a hostage arrives 7 days after
   her coronation). So every monarch is a target and every hostage a suspect, and the series' romance lock stays: free him
   without her death. worldbuilder writes it this way; series-plotter and twist-master build on it (what happened to her father's
   hostage when her father died is for them to design, consistent with this rule).
C. **P17 line changes meaning accordingly:** the plant F5 is no longer "이십 년". It becomes "as long as you live" plus a plain wish
   that she live long, e.g. 그녀 "그 값, 얼마나 버티는데요?" → 그 "당신이 사는 만큼입니다. 그러니 오래 사십시오." (final wording is
   dialogue-writer's; it must stay a plain statement, no irony, and read to her as resignation while the reader asks "why does he
   want her alive?"). The uncle's P8 line about the dragon-kin king "hiding for years" may keep a number only if worldbuilder's
   timeline supports it.
D. Package 1 stands (T-a does not fire). T-c stays with art-director at the style-bible stage.

## LEADER RULINGS after world (2026-11-24) — binding for all later agents
Read `_workspace/02_story/world.md` (where it refines the brief or concept, it wins unless a ruling below says otherwise).

E. **Names approved:** the gate 「정오의 문」 (KM draft ទ្វារថ្ងៃត្រង់; replaces "태양 관문" everywhere), the canyon kingdom 타렌,
   the dragon-kin highlands 케드라 고원. Location tokens LOC_GATE, LOC_CORRIDOR, LOC_ROOMS, LOC_HALL, LOC_TERRACE are fixed.
F. **Approved: if the hostage dies first, his shadow stays at the holder's feet until the holder dies.** So the shadow is no proof
   that the hostage is alive. twist-master and series-plotter may use this for her father's hostage (a death nobody noticed).
G. **Approved: she is an only child with no children; the uncle is her heir.** If she dies he becomes king (not "war regent").
   His EP1 move is a mourning regency while she lives; his motive to kill her is the throne, with the war blamed on the dragon-kin.
H. **Approved: the shadow cannot be moved after the rite.** So B2 becomes: the uncle proposes a mourning regency and lodging the
   hostage underground; her two-beat counter keeps the burden and puts the guest in the room next to hers. The P8 line may say
   "십 년" (the dragon king was crowned 10 years ago and has never come to the yearly treaty day).

## LEADER RULINGS after characters (2026-11-24) — binding for all later agents
Read `_workspace/02_story/characters.md` (where it refines earlier files, it wins unless a ruling below says otherwise).

I. **Names approved (Khmer = drafts, finalized in the glossary):** queen 리네 លីណេ, hostage 헤론 ហេរ៉ុន, uncle 바실 បាស៊ីល,
   envoy 우르 អ៊ូរ, captain 토라 តូរ៉ា. **Keep 리네** (not the backup 리세): one vowel from a 2025 heroine is acceptable, the name
   is rarely spoken in EP1, and 리세 carries Korean "reset" gaming slang. 헤론/우르 are call-names; nobody says the hostage's name
   in EP1.
J. **Approved: the captain 토라 is a woman (41).** No love-triangle bait anywhere.
K. **Approved: the hostage never calls her by the royal title in EP1.** The two on-panel uses of the title before P47 come from the
   uncle and the captain; the envoy's P47 line uses exactly that term (brief item 4).
L. **Approved: at P47 the envoy kneels with a fist on his heart**, echoing F6 (P25 fist to the chest toward his window): gesture
   exposure P15 → P25 → P47.
M. **Approved for prompt-smith and art-director: never put character names in Flow prompts** (Heron = bird, Basil = herb). Use the
   English token strings QUEEN, HOSTAGE, CHANCELLOR, ENVOY, CAPTAIN from characters.md. Banned prompt words list in characters.md
   (chain, collar, horns, …) is binding.

## LEADER RULINGS after series-arc (2026-11-24) — binding for all later agents
Read `_workspace/02_story/series-arc.md` (where it refines earlier files, it wins unless a ruling below says otherwise).

N. **Approved: a 40-episode season in 4 acts**, EP1–20 = launch batch ending on the midpoint, EP12 closes the hidden-king arc.
O. **First kiss: NOT at EP16 while he is still bound.** "Consent needs freedom" (brief item 10, trend-brief §4-3 #3): while he
   cannot leave, she limits herself. The first kiss happens at the first moment he has REAL freedom to leave and chooses to stay
   (target: the EP20 midpoint, e.g. through the 돌아오는 심장 custom below). The EP16 slot becomes the closest non-kiss beat: a
   breath apart, stopped by HER, for the lock's reason, said in words. twist-master and tension-engineer plan with this; series-arc
   will be updated for EP16/EP20 later (it does not affect EP1).
P. **Approved: 「돌아오는 심장」 as an old custom, not a second rule:** a real but reversible death of the holder. It is consistent
   with ruling B (only the holder's death returns the shadow; this death is real). Its existence opens at EP12. worldbuilder's
   world.md will get a short entry later; it does not affect EP1 and must not be hinted at in EP1 dialogue.
Q. **Working theory approved for twist-master to lock or replace:** her father died trying it to free his hostage. Must stay
   consistent with rulings B and F, and must not be the "trusted-ally betrayal" shape.
R. **Approved:** the fake rite (R6) at EP9–11; new assets after EP1 (the copper general named at EP3; 4 new Act-1 locations).
   EP1 keeps exactly 5 named people and the 5 EP1 locations.

## LEADER RULINGS after twist-plan + tension-curve (2026-11-24) — binding for all later agents
Read `_workspace/02_story/twist-plan.md` and `_workspace/02_story/tension-curve.md`. For EP1 they agree; where they refine earlier
files they win, unless a ruling below says otherwise.

S. **EP1 staging = twist-plan EP1 (15 staging conditions, 10 Khmer rules) + tension-curve EP1 panel map (64 panels,
   5/7/8/8/8/6/8/7/7; big panels P1, P4, P38, P46, P61, P64; P3 and P49 same size; gaps P46 320 → P47 400 → P50 440 → P57 480 →
   P63 560 → P64 640 px; no gap over 200 in P1–12; ≤ 2 bubbles per panel).** The royal title R goes to HER at P7 (uncle) and P37
   (captain); the envoy's P47 line is R alone, byte-identical. The dragon king in the uncle's insult and "왕" at P59 are the common
   noun, never R. Nobody says "선왕 폐하". P26 "두려워하는 겁니다" names no object. Optional (dialogue-writer's call, density
   permitting): the captain's "잡았습니다, 폐하." at P42.
T. **Approved (tension-curve fix 1):** his line "물러서라고 하면, 물러서겠습니다." moves to P61 (the wing-shadow panel); P62 is a
   silent panel of her turning to him; P63 her decision line; P64 silent breath. One line in the last three panels.
U. **EP20 = twist-plan option B (treaty amendment: he could walk home; the shadow's release stays at EP37–38).** He has real
   freedom to LEAVE, chooses to stay, and she decides the first kiss (ruling O satisfied). Option A (her brief death at EP20,
   crown to the uncle) is NOT adopted: it would spend the season's endgame device (돌아오는 심장, her father's death) at the
   midpoint and end the "free him without her death" lock too early. Keep it in reserve.
V. **Approved for later (no EP1 hints):** the five customs (blood-price claim, high silence blocks a war summons, a dragon war needs
   its king flying at its head, "왕관은 숨과 함께 넘어간다", a king-killer cannot inherit) go into world.md before EP2; the EP10
   relabel ("the last to break the elders' oath was your father's hostage") and the EP12 ending on the physician's hand are approved.
   series-arc corrections C1–C12 are approved except any that depend on option A; they are applied before EP2 and do not affect EP1.
W. **Series secrets locked as twist-plan** (why he came: 3 layers revealed at EP5, EP9, EP20; her father: the uncle's jailer killed
   the 4th hostage six weeks earlier; the father tried 돌아오는 심장 for a friend already dead; the uncle's physician did not revive
   him). None of this is said or hinted in EP1 dialogue beyond the locked plants.

## LEADER RULINGS before EP02 (2026-11-24) — binding for all later agents
X. **Crown maxim H1 ("왕관은 숨과 함께 넘어간다") pays off at EP37–38, not EP20** (ruling U chose option B): the king-killer
   custom voids the uncle's crown there. series-plotter/twist-master update their files when they next touch them; not EP2.
Y. **Heir after the uncle is struck out: the monarch names one before the court** (worldbuilder's suggestion). When and whom is a
   later-act decision; nothing in EP2.
Z. **EP2 assets:** new location tokens LOC_THRONE (throne hall) and LOC_CELLS (lower corridor and cells) from world.md §15. The
   physician and the jailer stay unnamed in EP2. Treaty article 3 ("볼모의 처우는 맡은 군주의 궁정이 정한다") is spoken only.
   EP2 = 50–60 panels; EP1's 12 reference sheets are reused.
AA. **EP20 option-B twist/cliffhanger** in series-arc §5 stands as the working plan; twist-master confirms it before EP20 (not EP2).
    A treaty-amendment custom (incl. whether the elders' council must agree) goes into world.md before EP20.
AB. **Day count:** at the EP2 throne-hall meeting (day 1) her father has been dead **열흘** (10 days). Use 열흘 or no number;
    never "아흐레". The physician's line follows world.md: "잠든 채 심장이 멎었습니다".
AC. **EP2 must show** Tora's midnight-report order in passing (it was not shown in EP1), the dead crossbowman = the P55 face, the
    physician = the P52/P56 physician, the jailer only in the background, and series-arc's updated EP2 row as the spine.
