# Brief — NEW STORY, EP01 (2026-11-20)

- 실행 모드: Phase 0 case 4 — 새 기획. 기존 `_workspace/`(이야기 1 「수칙 4번은 거짓말입니다」 EP01–03)는
  `_workspace_20261120_091118/`로 보존(삭제 금지). 이전 이야기들(`STORY_SUMMARIES.md`에 있는 3개 이야기 전부)의
  인물·세계관·용어집·레퍼런스 시트·스타일 바이블·제목은 **하나도 재사용하지 않는다.**
- 브랜치: `story-4` (main에서 분기). main에는 손대지 않는다. 푸시는 사용자가 "push to GitHub"라고 할 때만.
- 회차: EP01 (NN = 01)

## 사용자 요청 원문 (spec)

> Make a new fantasy romance webtoon, Episode 1, ages 18+

이 외에 사용자가 준 조건은 없다. 나머지(배경·전제·인물·톤의 세부)는 **새 트렌드 리서치 결과로 정한다.**

## 해석 / 고정 조건
- 장르: **로맨스 판타지** (로맨스가 중심, 판타지는 로맨스를 키우는 장치). 장르 혼합으로 로맨스를 밀어내지 말 것.
- 수위: **18+ (성인).** 성인 독자용 감정선·관능적 긴장·성숙한 주제(권력, 욕망, 상처, 대가)는 쓸 수 있다.
  단, **노골적 성행위 묘사·노출 장면은 쓰지 않는다**(암시·긴장·시선·손길 수준까지). 폭력·공포도 과하지 않게.
  수위는 "성숙한 감정과 긴장"으로 올리지, 자극적 장면으로 올리지 않는다. 동의·대등함을 해치는 로맨스(강압을 로맨틱하게 포장)는 쓰지 않는다.
- 트렌드 리서치는 **새로** 한다(이전 `01_research/`와 무관). 리서치 결과로 배경·전제·주인공 유형을 정한다.
- EP01 기본 요구(하네스 공통): 시각적으로 기억에 남는 첫 장면, 인물 각자의 욕망/목표, 회차 반전 1개 이상,
  회차 끝 클리프행어(로맨틱 훅). 고백/관계 확정은 이후 회차.
- 대사: 짧고 자연스러운 크메르어, 말풍선에 편하게 들어가는 길이. 두 주인공의 **말투가 뚜렷이 달라야** 한다.
  말문이 막히는 순간은 표정·정적·패널 간격(gap_after)으로 표현.
- 분량: 50+ 패널(하한), 한국어는 작업 언어, 독자는 크메르어만 본다.
- 워크플로: 새 리서치 → 스토리 → 크메르어 포함 대본 → 샷리스트 → 크메르어 말풍선 위치 → Flow 프롬프트 → 핸드오프 페이지.
  **핸드오프 페이지에서 멈추고 사용자의 Flow 이미지를 기다린다.**

## 프로젝트 고정 조건 (CLAUDE.md)
- **Khmer edition:** 독자는 캄보디아인이며 **크메르어만 본다**. 바뀌는 것은 딱 두 가지: (1) 말풍선에 크메르어 표시(뷰어가 그림),
  (2) 대본에 크메르어(`KM:` 줄) 추가. 리서치·스토리·세계관·캐릭터·작화는 하네스 설계 그대로. 이미지에는 글자가 전혀 없다.
  `webtoon-khmer-edition` 스킬을 모든 단계에서 따른다. 뷰어는 `km_tool.py build`로만 만든다(손으로 쓰지 않는다).
- **Flow-by-hand mode:** 이미지는 사용자가 Google Flow에서 직접 만든다. Codex 없음. Phase 4는 `webtoon-flow-handoff` 스킬을 따르고,
  핸드오프 페이지를 만든 뒤 **사용자를 기다린다.** panel-artist-a/b/c는 쓰지 않는다. 없는 이미지를 만들어 넣지 않는다.

## 운영 메모 (이전 회차에서 얻은 교훈)
- 서브에이전트는 `model: "opus"`로 스폰. 팀 메시징이 없으므로 각 에이전트에게 완전한 브리프를 주고, 각자 자기 파일만 쓰게 한다.
- 패널 프롬프트는 ≤250 단어, "keep area empty for a speech bubble" 문장 포함, 마지막 줄은 Avoid-text 줄.
- 뷰어에서 말풍선 폭은 최대 100−x %이므로 lettering의 `x + w ≤ 100`을 지킨다.
- 대사는 크메르어 우선, 짧게. 샷리스트는 구간별로 나눠 써서 중단돼도 손실이 없게.
- 이미지 안에는 글자가 없으므로, 이야기 정보(편지·간판·문서·마법진 문구 등)를 글자로 전달하는 비트를 만들지 말 것.
  정보는 얼굴·손·물건·빛·색으로 전달한다. 글자가 꼭 필요하면 `env` 텍스트(뷰어가 씀)로.

---

# LOCKED PLANNING DECISIONS (leader, 2026-11-20, after Phase 2 research) — every Phase 3+ agent follows these

Source: `_workspace/01_research/trend-brief.md` (read §1, §3, §5, §6, §7, §12, §14 first). The package below is ADOPTED. Do not re-open it.
Rating: the user said **18+** directly (no conflict this time).

1. **Package:** 로맨스 판타지 × "그녀만 닿을 수 있는 저주받은 남자" × 여주가 조건을 거는 계약(결혼 아님) × 동의형 마법 규칙 × 돌봄·장인형 여주.
   Working title 「원하는 손만」 (alt 「장갑을 벗기 전에」). concept-architect sets the final short Korean title and the Khmer title (must read short in Khmer; goes in `glossary_km.md`).
2. **The ONE fantasy rule (exact):** *그의 맨살에 닿은 생명은 시든다. 닿기를 원한 사람만 빼고.* Zero lines of rule-explaining narration. The front half ("touch withers") is shown by P2 rose→ash and P3–4 maid's fingertips; the back half ("except those who want it") only by the P45–50 contrast of the SAME hand of the heroine (angry/duty grip is bitten, wanted grip is safe) plus ONE thought-bubble line.
   Guardrails (trend-brief §3-2): the curse origin is NOT his past sexual violence; the maid and the heroine's mother must never read as "punished for not wanting"; the curse is a tragic mechanism and he carries the guilt; in EP1 "want" is never narrowed to lust and the word "desire" is not spoken.
   **Separation from Story 3 (rainy-market romcom, "her feelings make rain"):** the magic is HIS; it reacts ONLY on skin contact (nothing visible from a distance); it is a harm/no-harm binary, not a mood indicator; not comic; he did NOT know beforehand; any glove-hiding-the-mark beat ends within 10 panels and she removes the glove herself.
3. **Leads (provisional names in the trend-brief are '넬라'/'에드릭'; final names are chosen ONLY by character-designer):** short, easy to write in Khmer, and none that appear in any earlier story. Check `STORY_SUMMARIES.md`, the `characters.md` in `_workspace_20261120_091118/02_story/`, and the Story 2 and Story 3 casts via `git show origin/claude/brave-cannon-q96b6g:_workspace/02_story/characters.md` and `git show new-story:_workspace/02_story/characters.md`.
   - **Heroine:** mid-20s commoner glove-maker, never wears gloves while working; goal = win back her mother's seized workshop; secret = she is the daughter of the previous glove-maker whose hands his curse ruined (she did not lie about her name, she just did not say). Speech: **imperative, clipped, noun-ish, 2–5 words**, work/price/condition vocabulary, almost no feeling words, more businesslike when flustered.
   - **Hero:** young lord of a glass-greenhouse manor, late 20s–early 30s, count-level (NOT duke/grand duke, NOT north/snow). Kind but cool, self-restraining. Goal = get gloves that survive his curse so he can stay among people. Secret = black veins already near his heart (series timer, only planted in EP1); he does NOT know she is the maker's daughter ("he knew from the start" is permanently banned). Speech: **interrogative/conditional, 4–8 words**, slow formal old-noble register, dry and self-mocking; never commands her (only commands servants, briefly, for contrast).
   - Speech contrast in Khmer is made by sentence FORM (command vs question), LENGTH and VOCABULARY, not by Korean-style honorific levels. dialogue-writer picks Khmer address terms per `webtoon-khmer-edition` and records them in the glossary.
4. **Setting:** western-style fantasy county. Exactly 4 locations in EP1 (Flow consistency): (1) glove workshop street and workshop interior, (2) the glass greenhouse (emerald glass, gold lamps, white roses, a black ash path where he walks), (3) the work-bench corner of the greenhouse (one lamp), (4) his study with a pair of gloves under a glass bell. Avoid north/snow/frost, rain/umbrellas, palace/food/poison, office/ghost/rule-lists/loops (earlier stories).
   Name budget in EP1: 2 named people (the leads), at most 1 place name (the manor, spoken at most once), 0–1 world term; mother, maid, creditor, steward stay unnamed.
5. **EP1 spine = trend-brief §5 (9 beats, target 62 panels, allowed 58–64, never below 50):** B1 cold open rule demo (P1–5) → B2 her want and wound (P6–12) → B3 arrival, first clash, first touch (P13–20) → B4 her conditions/contract (P21–28) → B5 measuring, slow-burn (P29–38) → B6 "No Way": mother's glove (P39–44) → B7 TWIST: the unwanted hand (P45–50) → B8 sensual peak: the man who asks (P51–58) → B9 cliffhanger (P59–62), last line **"처음부터… 원했던 거요?"**
   Big full-bleed tall panels: P1, P13, P19, P40, P46, P55, P62. Silent triple-beats exactly 3 times (P17–19, P45–47, P54–56). Big `gap_after`: after P2, P18, P45, P53, P61. At least 38 dialogue panels. Keep B5 at ≥ 9 panels.
   Clue spacing (twist fairness): P19 her face + P34 grey spot excused as "leather dust" (≥ 15 panels before the P45 twist). Plant table = trend-brief §5-4.
   EP1 twist = "she is not immune; it is whether she WANTS the touch." Cliffhanger = a reveal (his line), NOT a misunderstanding, and the answer stays hers.
6. **18+ delivery (trend-brief §6): premise, gaze, distance, restraint.** NO explicit sex, NO nudity, NO kiss in EP1, no wall-pin, no hard wrist-grip by him (the cold grip in B7 is HERS and she pays for it), no possessive declarations ("my woman"), no "she said no but meant yes", no contract clause giving him rights over her body (his only duty: "do not touch first"), no fade-to-black bait. The only "undressing" in the story is glove removal. Touch ladder: L1 gaze/distance throughout; L2 intended touch 3 times; L3 stop at the peak once (B8); L4 kiss in a later episode.
   Heroine is an active equal agent. Her 5 decisions: (1) takes the job nobody wants, (2) grabs his bare hand first, (3) sets price and clauses, (4) re-grips on purpose to test the rule, (5) removes her own glove and closes the last distance.
7. **NO text in any image.** Commission and contract are BLANK paper with wax seals; measuring uses a knotted thread with NO scale marks or numerals; the curse veins branch organically like roots or ink and must never look like writing or runes; no signs with words (the glove-shaped iron shop sign is blank); time is carried by light, not captions. Visual tokens to fix in the style bible: his black glove, her work gloves, crimson cross-stitch (her workshop mark), vein shape and position, the ash-grey fingertip colour (maid = mother = her index finger), white rose, the ash path. The mark on HER is at the **right index fingertip**, fixed for the whole series.
8. **Khmer:** one line per bubble, at most 2 bubbles per panel, long exchanges split across panels; Khmer runs wider than Korean so respect the length cap. script-editor must check every ⟨반전⟩ and ⟨이중의미⟩ line IN KHMER and list them in the editor's notes. Core lines to polish in Khmer: "그래도 맡겠소?", "먼저 만지지 마세요", "…허락해 주겠소?", "처음부터… 원했던 거요?"
9. **Risks to verify (trend-brief §14):** (a) the "wanted = unharmed" rule is the synthesizer's own combination, unobserved in any source: script-editor must confirm the twist reads from the picture contrast + one thought line; if it is weak, switch to twist reserve (b) in trend-brief §9; (b) P1–44 can read as "another cursed-duke story", so the B4 clauses must show the difference early; (c) glove-maker job is unverified by research; (d) all Khmer is a draft and needs a native speaker's check (list it in the editor's notes).
10. **Series shape for series-plotter:** write a detailed map for EP1–EP12 plus a half-page outline of where the season (trend-brief suggests ~45 episodes) heads; every episode: one twist/reveal + one new question + one step up in tension; relationship confirmation is postponed; EP2 opens with her answer in ACTION and plants the veins under his collar; EP3 (last free episode) cuts just before the peak using NEW INFORMATION (he recognises the crimson stitch and learns she is the maker's daughter), not an accident. Permanent bans: "he knew from the start", name-calling endings, a kind villain behind the scenes.

## LEADER RULINGS after concept / world / characters (2026-11-20) — binding for all later agents
Read `_workspace/02_story/concept.md`, `world.md`, `characters.md` (they follow the locked decisions above; where they refine them, they win).

A. **Names (final):** heroine **페트라 (Petra)**, Khmer draft ពេត្រា; hero **휴고 (Hugo)**, count of Roan, Khmer draft ហ៊ូហ្គោ; his family name 펜윅 is NOT used in EP1. Manor **벨린** (at most once in EP1 dialogue), county **로안** (0 times in EP1). Series title **「장갑을 벗기 전에」**, Khmer draft មុនដោះស្រោមដៃ. EP1 episode title 「먼저 만지지 마세요」. All Khmer spellings are DRAFT and go on the native-speaker check list (in the editor's notes). Known check points: the title (ដោះ has other meanings; is មុនពេលដោះស្រោមដៃ better?), ត្រា inside ពេត្រា also means "seal", and whether ហ្គោ reads cleanly.
B. **He never commands her, including in the contract clause and at the twist.** The clause "그날 밤 떠나시오" becomes a condition + statement ("내 살이 흔적을 남기면, 그날 밤 떠나는 거요."); at B7 "오늘 밤 떠나시오" becomes a question ("약속은… 기억하오?"). His line about the curse's damage to her mother's hands takes the blame himself ("…내가 그 손을 망쳤소." or "가까이 오게 둔 건, 나였소."), never "내게 닿았지". Final wording is dialogue-writer's; script-editor checks it against concept §5-5.
C. **B7 staging:** he does NOT put a glove back on. He steps back and hides his bare hand behind his back (echo of P5), so the "same hand, different result" contrast (cold grip vs. wanted re-grip) stays on the same bare hand.
D. **Hand and glove plan (consistency for Flow):** (1) Hugo's LEFT hand is gloved for all of EP1 and only his right hand is bare for every key touch (P15–16 he removes the right glove; P13 is the full-bleed manor exterior, P14 his two-step entrance); (2) every major touch is HIS RIGHT hand with HER RIGHT hand (P17–19, P34, P45–46, P48–49, B8); (3) her only mark is ONE ash-grey fingertip, the right index; at P34 and P45–46 only that fingertip touches his skin; (4) in B8 she removes only her right glove. Hand-state table = `characters.md` §6-6; panel-director fixes it per panel number.
E. **Story-3 and Story-1/2 separations** in concept §4-5 and §6-3 are binding (crimson stitch is a craft fact, never a mystic "same mark"; no "she does not answer" endings in EP2 or EP3).
F. **Series arc adopted** (`02_story/series-arc.md`): EP1–12 map, first kiss EP11, first name-calling (hers, "그") EP6 mid-episode, her first "부탁" EP10, confession in the season arc (EP34–36), the season ~45 episodes. **His bare skin = ALL of it, lips and face included** (no safe body part); he never tests it on her; any kiss happens only because she chooses it.
G. **Touch-judgment principle (W3), adopted as the working principle, to be verified by twist-master:** the skin judges whether she wants THAT contact itself. Anger does not erase wanting (EP4: angry but wanting = unharmed). When the touch becomes a tool of work, duty or calculation, the wanting withdraws (EP1 B7 cold grip = bitten; EP8 mid-contact change = bitten). **EP1 consequence for staging:** the B7 grip must read as the "task / finish-the-measurement-take-the-money-and-leave" hand (closed face, eyes elsewhere), NOT as hot anger, so EP4's "angry hand is unharmed" is a fair reversal; the P34 irritated grab gives only a faint spot because it was a snatch to cut him off, not wanting the touch.
H. **Process gate (new agent):** after script-editor writes `03_episode/ep01_script_final.md`, run `native-khmer-agent-reviewer` BEFORE panel-director writes the shot list. It corrects only the Khmer in script_final and writes `ep01_km_review.md` (READY or NEEDS REVIEW). The shot list does not start until that review has run. Re-run it whenever script_final changes.
J. **twist-plan adopted** (`02_story/twist-plan.md`). It confirms the EP1 twist reads from the P45↔P49 picture contrast plus ONE thought line (no need for reserve (b)) **only if its 8 staging conditions are met** (§ EP1 in twist-plan; panel-director and prompt-smith must apply them: P49 copies P45's camera, same fingertip on the same wrist-pulse spot, four clean fingers, thread dropped; P44–45 is a closed TASK face, not hot anger; the Khmer thought line keeps "I" and uses the same "want" verb as P62). Ruling G is superseded by twist-plan §5 (it adds clauses 3 and 4 and the corrections C0–C6). **Cliffhanger wording fix (C1):** the B9 line "화났을 때는… 물었군." is REPLACED by "같은 손인데… 아까는 물었고." (he says only what he saw, no cause); P60, P61, P62 stay at three short lines. Where twist-plan and series-arc differ, twist-plan wins until series-arc is updated (series-arc edits for C2–C4 and C6 are still to be made; they do not affect EP1). Safe wording direction for the mother in EP7: "I held the glove, not his hand."
I. **From tension-curve (`02_story/tension-curve.md`), adopted for EP1:** the curve 6-5-7-6-7-7-9-9-10 with panel-level detail; B5 = 10 panels; 42 dialogue panels (densest in B4–B5); the five big gaps grow longer (320, 360, 400, 440, 600 px); the mother flashback insert moves to **P37** (away from the P34 clue); the gloves normally last "a few weeks" (몇 주), planted in EP1 or EP2 dialogue so the P1 failed glove reads as a short cycle. Series-level ending-spread proposals (e.g. EP5 ending on Petra's measuring line instead of Hugo's confession, EP3 ending raised to 9.5) are NOT decided yet: decide before EP5 is written, using twist-plan.md.

---

# EP02 (2026-11-25) — Phase 0 case 2 (new episode)

- User: "switch to gloves and start EP02". EP01 images are NOT made yet (`ep01_flow_status.md` = WAITING_FOR_IMAGES).
  Create EP02's beat sheet, Khmer script, native Khmer review, shot list, lettering, Flow prompts and handoff page now,
  then STOP and wait for the user's Flow images. **Do not touch EP01 files.**
- Episode: EP02 (NN = 02) 「원하는 손만」. Checkout branch is `story-8` (gloves history came from `story-4`); the leader does
  not commit or push without the user.
- Reuse (read, do not redo): `02_story/*`, `04_visual/style-bible.md`, `character-sheets.md`, `refs/ref_prompts.md`.
  EP02 adds only what is new. EP01 `ep01_script_final.md` and `ep01_lettering.md` are canon; repeated lines are letter-identical.
- Sources, in order of authority: this brief → `twist-plan.md` (§1 W3 grammar, §4 EP2, §8-2, §8-3 fixed Khmer words, §6-6 maid)
  → `series-arc.md` §2 EP2 + §6 notes → `tension-curve.md` EP2 notes → `characters.md` / `world.md`.

## EP02 locked points (leader)
1. **Panels:** target 56 (allowed 52–62, never below 50). One main twist + one small twist + cliffhanger.
2. **Cold open P1–8 [series-arc 잠금]:** continues straight from EP1 P62 (night, LOC_BENCH). Her answer is an ACTION: the marked right
   index fingertip held up before his eyes, then laid by her own choice on his bare RIGHT wrist pulse (same spot as EP1 P45/P49), drawn in
   the "wanting hand" grammar (looks at his face, lingers). Unharmed. Only AFTER that: his clause as a QUESTION, the blank contract,
   a second thimble-wax seal beside his black-rose seal, "조항. 수정." / "떠날지는, 내가 정해요." / last resistance → "그것도 내가 정해요."
   Tension starts at 8 and steps down to 7 (tension-curve).
3. **Rise:** next day. LEFT-hand measuring: he removes his LEFT glove for the first time; left-hand veins darker than the right and
   disappearing deeper into the sleeve (clue 3, ≥ 25 panels before the twist). "되겠소?" becomes the consent ritual: "돼요." and exactly
   ONE refusal "아직." (he withdraws silently). One fixed Khmer form for this ritual. Failed-glove box: other towns' gloves, clumsy repair
   stitches → "누가 기웠어요? 엉망." / "…배운 대로 해 본 거요." **Plant the normal glove cycle here** (e.g. "얼마나 버텼어요?" / "…몇 주씩은.").
   Black thread cuff band (the crimson band goes into her apron pocket): "검은 실이군." / "검은 장갑엔, 검정." / "끝을… 고리로 감는군." / "버릇."
   Collar-guarding hand around the arm-length approach (clue 4). Maid encounter on the white marble strip (maid's first lines,
   twist-plan §6-6: "백작님 탓 아니에요. 장갑이… 터진 거예요."; she sees Petra's grey fingertip; no blame on the maid). Petra walks the ash path again;
   servants now turn their heads instead of holding their breath.
4. **Twist ~P41–50:** dusk, LOC_BENCH. Arm raised for the arm length → hair-thin ink strand on the LEFT side of the neck just above the cravat edge.
   No collar opening, ever. "어디까지예요?" → gloved LEFT hand placed under the left collarbone in the SAME composition as EP1 P31 (match cut) → "…여기까지요."
5. **Cliffhanger ~P51–56:** she unties the knotted thread from her left wrist and lays it OVER HIS CLOTHES from where his hand was to the heart,
   counting knots with her fingers (no scale marks, no numbers). Last panel: two fingers pinching the thread + his face. **"…한 뼘."**
   Speaker of the last line = Petra (twist-plan §4-13 distribution).
6. **Bans:** no collar opening, no bare-skin measuring of the chest, no pain staging, no "wanting heals him", she never says "원해요",
   he never commands her (servants only, ≤ 2 per episode), no kiss, no misunderstanding ending, no text in any image (contract blank, thread without marks).
7. **Khmer fixed points (twist-plan §8-3, glossary_km.md):** 원하다 / 손 / 그것 / 내가 정해요 (EP1 form) / 배운 대로 (must match EP11 later) /
   뼘·매듭 unit (pick ONE traditional length word, e.g. ចំអាម [draft], record in glossary) / "되겠소?" ritual form / "터지다" (EP2 maid → EP12).
8. **Locations:** LOC_BENCH, LOC_GREENHOUSE (aisle + white marble strip). New locations 0. Cast: Petra, Hugo, maid (first lines), steward (0–1 line), servants (silent).
   Visual adds for art-director: Hugo LEFT bare hand vein pattern (reference card if `refs/ref_prompts.md` has no left-hand card),
   neck strand at the cravat edge, black-thread cuff band, failed-glove box, maid face card only if her face is shown at reading size.

## EP02 leader rulings after ep02_beatsheet.md (2026-11-25) — flags accepted
EA. 56 panels, 6 beats, 4 tall panels (P3, P39, P45, P56) accepted (T1). Big gaps after P3/P21/P44/P47/P55.
EB. V1 new card `HUGO_left_hand` (bare left hand, darker/denser veins going under the cuff, own landmark root, forearm never shown).
    V2 neck strand: a 4th panel on the V1 card + a `NECK_STRAND` token in the style bible. V3 `MAID_ref` card from the existing maid spec.
    art-director writes these tokens; ref-sheet-artist adds the cards to `refs/ref_prompts.md` (existing cards unchanged).
EC. P1 new props (failed-glove box, black cross-stitch cuff band, black kid leather bundle, brown-paper chalk hand pattern, second thimble seal) — all text-free. P2: Petra kept the EP1 contract in her tool roll — accepted.
ED. L1 three light sentences LIGHT_BENCH_DAY, LIGHT_GH_AFTERNOON, LIGHT_BENCH_DUSK (the dusk one word-for-word identical P41–P56).
EE. C1 steward silent (0 lines). C2 no commands to servants. D2 "아직." refuses his first request to touch HER marked fingertip; EP6 stays the first time he touches her. D1 added lines accepted; script-editor may cut P48's second bubble if the Khmer explains too much.
EF. W1 cross-episode match cuts (EP1 P31→EP2 P47, EP1 P15→P11, EP1 P45/P49→P3): since EP01 images do not exist yet, prompts must stand on their own wording; the handoff notes say "if the EP01 panel exists, attach it as a reference".
EG. K1 glossary terms (뼘 unit, 매듭, ritual form, 배운 대로, 터지다, 버릇, 고리, 얼마) are fixed by dialogue-writer in glossary_km.md.

## EP02 leader rulings after art-director's EP02 additions (2026-11-25) — AE1–AE10 accepted
EH. AE1 no outfit change; cravat/collar same and closed. AE2 black-on-black stitches may read as texture only; P30 passes on the three-finger pinch; P41/P49 must show the stitches at least as texture.
    AE3 neck strand = fine side branch of the collarbone root; the clock is shown only by measuring over the coat; continuity-manager records the strand tip (half a finger-joint above the cravat edge) as the EP8/EP11 baseline.
    AE4 maid face anchors accepted. AE5 MAID_ref uses the EP2 layout (no tray); if attached to EP1 P3 the prompt says her fingertips are still clean.
    AE6 TOOL_ROLL_EP2 has a black spool (crimson only at P28). AE7 seal order thimble → black rose → new thimble seal beside the rose (follow the EP1 P28 image if it differs later).
    AE8 LOC_BENCH card attached for geometry only in day/dusk panels. AE9 cards 13 HUGO_left_hand and 12' MAID_ref required, 14 EP2_props added too; EP2 panels do not start before card 13. AE10 left-hand landmark = EP1 VEIN_LANDMARK.

## EP02 leader rulings after ep02_script.md (2026-11-25)
EI. F1 EP2 Khmer title «មានតែដៃដែលចង់» kept (EP1 already revealed the "want" rule; the title echoes it, Petra still never says it). F2 P41 "소매. 길이." accepted (keeps ដៃ = hand only).
    F3 script-editor decides P48's second bubble. F4 "손가락 넷" settled in its own episode later. ចំអាម = the series clock unit (native reviewer checks spelling K2).

## EP02 leader rulings after ep02_shotlist.md (2026-11-25)
EJ. FL1: the leader's "every image 9:16" in the shot-list brief was wrong for this story. Follow style-bible §5-1 per-size ratios as in EP01 (XL 9:16, L 3:4 or 1:1, M 1:1, ST 16:9).
    FL2–FL14 accepted. FL5: once EP01 images exist, redo P03, P11, P47 with the EP01 panel attached — note this in ep02_flow_status.md.
    Letterer places every bubble INSIDE the shot list's art_space (art_space is not moved), so prompt-smith can work from the shot list in parallel.
