# Brief — NEW STORY, EP01 (2026-11-19)

- 실행 모드: Phase 0 case 4 — 새 기획. 기존 `_workspace/`는 `_workspace_20261119_075342/`로 보존(삭제 금지).
  이전 이야기(「수칙 4번은 거짓말입니다」)의 인물·세계관·용어집·레퍼런스 시트·스타일 바이블은 **하나도 재사용하지 않는다.**
- 브랜치: `new-story` (main에서 분기). main에는 손대지 않는다. 푸시는 사용자가 "push to GitHub"라고 할 때만.
- 회차: EP01 (NN = 01)

## 사용자 요청 원문 (spec)

> Make a new romantic webtoon, Episode 1. Start a new branch from `main` using `git checkout -b new-story main`.
> Follow the new-story archive procedure and all Khmer and Flow rules in `CLAUDE.md`. Create an original cast,
> world, glossary, and reference sheets for this story.
>
> **Genre and tone** — Write a slow-burn romantic comedy for ages 15+, with one light fantasy element. Keep the tone
> warm, playful, and occasionally awkward. Run fresh trend research to help choose the setting and premise. Keep
> romance at the center.
>
> **Episode 1** — Open with a visually memorable first meeting. Give each lead a personal goal, and let those goals
> clash in a way that gives them a reason to meet again. Show the first hint of attraction through one specific
> action. For example, one lead quietly fixes a problem the other was trying to hide. End with a romantic hook that
> grows out of that action. Save the confession for a later episode.
>
> **Khmer dialogue and visuals** — Write short, natural Khmer lines that fit comfortably in speech bubbles. Give the
> leads distinct ways of speaking so their teasing feels personal. Let expressions, pauses, and panel spacing carry
> the moments when neither person knows what to say.
>
> **Workflow** — Complete the stages in order: fresh research → story → script with Khmer lines → shot list → Khmer
> bubble placements → Flow prompts → handoff page. Stop at the handoff page and wait for my Flow images. Push the
> branch only when I say "push to GitHub."

## 해석 / 고정 조건
- 장르: **슬로우 번 로맨틱 코미디** + **가벼운 판타지 요소 딱 1개**. 로맨스가 중심(장르 혼합으로 로맨스를 밀어내지 말 것).
- 수위: **15+ (전체~15세). 노골적 표현 없음.** (사용자 메모의 "18+"와 프롬프트의 "ages 15+"가 달랐음 → 프롬프트의 15+를 따른다. 최종 보고에서 사용자에게 알린다.)
- 톤: 따뜻함 · 장난스러움 · 가끔 어색함.
- 트렌드 리서치는 **새로** 한다(이전 `01_research/`는 이 이야기와 무관). 리서치 결과로 배경·전제를 정한다.
- EP01 요구: (1) 시각적으로 기억에 남는 첫 만남으로 시작 (2) 두 주인공 각자의 개인 목표 (3) 두 목표가 충돌해 **다시 만날 이유**가 생김
  (4) 끌림의 첫 신호 = **구체적인 행동 하나**(예: 한 사람이 상대가 숨기려던 문제를 조용히 해결) (5) 그 행동에서 자라난 **로맨틱 훅**으로 마무리
  (6) **고백은 이후 회차로 미룬다.**
- 대사: 짧고 자연스러운 크메르어, 말풍선에 편하게 들어가는 길이. 두 주인공의 **말투가 뚜렷이 달라서** 놀리는 방식이 개인적으로 느껴질 것.
  말문이 막히는 순간은 표정·정적·패널 간격(gap_after)으로 표현.
- 분량: 50+ 패널(하한), 한국어는 작업 언어, 독자는 크메르어만 본다.

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

---

# LOCKED PLANNING DECISIONS (leader, 2026-11-19, after Phase 2 research) — every Phase 3+ agent follows these

Source: `_workspace/01_research/trend-brief.md` §2-1 (read it). Package 「처마 밑 반반」 is ADOPTED. Do not re-open it.

1. **Working title:** 「처마 밑 반반」 (half each under the awning). Final Korean/Khmer series title is set by concept-architect (a short, warm title; Khmer title goes in the glossary).
2. **Setting:** modern small Korean town (fictional name chosen by worldbuilder), an old roofed traditional market, one awning stall at its entrance. One rainy season (장마, ~6 weeks) is the series clock; hydrangeas in the alley fade from vivid to pale as the weeks pass (a clock with no text).
3. **The ONE fantasy element = 「나만의 비구름」:** when HER feelings overflow (flustered, moved, hurt), an umbrella-sized grey cloud forms about a metre above her head and rains on her alone; it clears when she calms. Physically real: wet hair/shoulders, a puddle at her feet only, dry ground around. Others COULD see it if they looked up; so far she has hidden it with an umbrella and by living through rainy season (everyone carries one). Nobody knows. Rain strength = feeling strength (drizzle → downpour). It never affects the town's weather and has no origin story. Rule 2 (EP3+): near him the rain becomes a sun-shower. Rule 3 (later): the words she can't say become rain, so the sky clearing = the eventual confession payoff. Max three rules, shown never explained; ZERO lines of rule-explaining dialogue or narration in EP1. Props have no magic.
4. **Leads (names are chosen ONLY by character-designer; short, easy to write in Khmer, none of: 강서하 노미란 구정민 남재우 한서윤 마도진 서윤 서하 도진 재우 미란 정민):**
   - **A — umbrella repairman**, male, ~25. Precise, plain-spoken, notices things. Short flat statements: facts, parts, numbers, object names; takes jokes literally; never exaggerates; teases by quoting her exact words back. Kind, not cold. Goal: keep his late grandfather's umbrella-repair stall alive on his own this rainy season (prove he's earned the right to keep it). Needs rain. Hides: he saw her cloud from the very first moment and has been quietly protecting her secret.
   - **B — shaved-ice (빙수) stall owner**, female, ~22–23. Flustered talker: makes excuses nobody asked for, corrects herself mid-sentence ("아니, 그게 아니라…"), trails off, waves off compliments; mimics his number-obsessed deadpan. Goal: open her very first shop of her own at the market-entrance spot before the summer rush (prove she can stand on her own). Needs sun. Hides: the cloud, and a bent umbrella rib she patches with tape. Both leads are ACTIVE and both have a real, sympathetic goal.
5. **Goal clash:** the market association (상인회) double-allots the same entrance stall to both. Ruling: share it half each until the rainy season ends; whoever can pay the summer rent keeps it. The rival goals are real (no fake enemies, no misunderstanding plot). They keep meeting because they share the stall and each holds a key to the same shutter. Business beats ≤ 25 % of panels; every business beat carries a romance beat. No third wheel / love triangle in EP1–3.
6. **EP1 spine (from trend-brief §4-2, 10 beats, target 58–64 panels, never below 50):** cold open between rain showers on a dry market entrance: her cloud rains on her alone → gust flips her umbrella, a rib snaps → an ALREADY-OPEN yellow umbrella (it was open BEFORE the gust: the fair clue) comes over her head; the repairman holds it, deadpan → goal props and talk → shutter, two identical keys, the ruling → bickering and taping the floor in half, a flustered/deadpan exchange → she hides the taped broken rib; he notices (look-only panel) → night: **the quiet fix (the ONE attraction action)** — 6–7 silent panels, hands only; he mends the rib, binds the joint with YELLOW thread, hangs it back on the same hook at the same angle (same framing as the earlier "hidden problem" panel, only the state changes) → morning: she finds it, flustered, the cloud forms, the umbrella is taut, yellow-thread insert, delayed reaction (the longest gap of the episode) → his one buried line under the sound of her own rain ("not a confession; it shows he knows", e.g. a line about umbrellas not flipping in ordinary rain) → she: "…what?" / he: "…nothing." → ENDING HOOK (no confession): wide shot, sun out, her small cloud overhead, and for the first time he looks straight up at it (twist confirmed, pays the yellow umbrella of panel 5), last panel her thumb on the yellow thread, one raindrop catching gold (small fantasy wink). EP1 twist = "he has seen her cloud since the first second and kept her secret."
7. **NO text in any image.** Nothing may depend on notes, signs, phone screens, receipts, calendars, numbers or labels as the carrier of a story beat. Signs are drawn blank (the viewer writes Khmer on them where the script needs it); prefer awnings/shutters/umbrellas/hydrangeas/colour ribbons over signboards. Wherever the plan needs information, carry it by faces, hands, objects, light, colour (yellow thread = his signature detail).
8. **Rating 15+:** no kiss, no confession, no wrist-grab / wall-slam / embrace in EP1. EP1 touch budget: ONE accidental touch (hands overlapping on the umbrella handle), 1–2 near-touches (the two keys; handing the umbrella over). No possessive/commanding lines, no pet names, no insult-teasing, no sarcasm.
9. **Khmer-first dialogue:** short lines that fit bubbles. Their speech styles must stay distinct in Khmer (A: short flat declaratives, object/number words, literal quoting; B: rambling excuses split into 2–3 short bubbles, self-corrections, trailing off). Forms of address: formal at first (not បង/ប្អូន yet; switching address later is a story step, do not do it in EP1). No jokes that rely on Korean idioms or puns. Emotion in silence is carried by faces, pauses and panel spacing (`gap_after`).
10. **Series shape for series-plotter:** season 1 = one rainy season, roughly 12 episodes (~6 weeks); confession is the season finale (hydrangea clock + rule 3 "sky clears"); every episode: one twist/reveal, one "she nearly gets caught" moment, one relationship step forward; EP3 = biggest hook of the launch bundle (EP1–3); first deliberate touch EP5 (functional, brief); first kiss/confession not before the last act.

---

# EP02 (2026-11-26) — Phase 0 case 2 (new episode)

- User: "make EP02 for umbrella". EP01 images are NOT made yet (`ep01_flow_status.md` = WAITING_FOR_IMAGES, 16 sheets + 62 panels).
  Create EP02's beat sheet, Khmer script, native Khmer review, shot list, lettering, Flow prompts and handoff page, then STOP and wait
  for the user's Flow images. **Do not touch EP01 files.**
- **Where:** git worktree `D:\Project\WT test\.claude\worktrees\umbrella-ep02` (branch `umbrella-ep02`, cut from origin/main).
  Its own `_workspace` junction → `stories/umbrella`. The main checkout's `_workspace` points at ANOTHER story that another session is
  building; never read or write `D:\Project\WT test\_workspace`. Run every tool from the worktree root.
- Episode: EP02 (NN = 02). Reuse (read, do not redo): `02_story/*`, `04_visual/style-bible.md`, `character-sheets.md`, `refs/ref_prompts.md`.
  EP02 adds only what is new. EP01 `ep01_script_final.md` and `ep01_lettering.md` are canon; repeated/quoted lines are letter-identical
  (incl. the P56 buried line «ឥឡូវ បើភ្លៀងធម្មតា វាលែងក្រឡាប់ហើយ។» and the P27 ruling «…អ្នកនោះបាននៅ។» when quoted).
- **Project rule (CLAUDE.md, 2026-11-21): Korean style stays; only bubble text is Khmer.** Korean names, looks, clothes, market, town,
  tropes and tone as designed. Do not Cambodianize. Khmer address words inside the KM text follow the glossary (no switch to បង/ប្អូន yet;
  that is EP6's step).
- EP01 predates the native Khmer reviewer (no `ep01_km_review.md`). EP02 gets the review (gate `km_review.py gate --episode 02`).
- Sources, in order of authority: this brief → `twist-plan.md` (table row EP2, §… notes for EP2) → `series-arc.md` "EP2 — 핵심 비트" →
  `tension-curve.md` EP2 row and notes → `characters.md` / `world.md` (rules R1–R3, EP2 prop) → EP01 script_final §6–§9 handovers.

## EP02 locked points (leader)
1. **Panels:** target ~60 (allowed 52–64, never below 50). Rating 15+. One twist + one "she nearly gets caught" moment + one relationship step.
2. **Beats (series-arc EP2, in order):** (1) two keys at one lock, "first one here opens" — he is always there first; her half is dry and a wet rag
   leans on the rail (background plant, never explained); tin-can height insert in the opening. (2) teasing gets an audience: 만식 commentates,
   보미 calls him «ពូ», he corrects "스물다섯입니다", she mimics his deadpan, he quotes her words WITH the time ("어제 네 시 십 분. '다신 안 와요.'").
   (3) misreading: yellow thread on grandma's black umbrella seam → she decides yellow thread is the shop's mark (old black thread on the rail = fair clue).
   (4) business + romance: a dazzling gap flusters her → level-3 rain sound; arcade people open umbrellas at the exit, some flip and end up on his rail.
   (5) **twist:** he repairs them and pushes the money back with two fingers; the tin-can height stays the same (same composition/height as the opening insert);
   she witnesses once, doesn't know why. When she tries to pay EP1's repair fee: "맡기신 적 없습니다." (EP1 P55 promise "tomorrow" pays off).
   (6) echo: his umbrella is already in his hand before her cloud forms; "별말 아니었어요." written so it is TRUE in Khmer (twist-plan note); drawer insert with the bent rib (PROP_BENT_RIB).
   (7) shower: she lends 보미 her pink umbrella and walks with him under ONE yellow umbrella — a gap between their shoulders, his outer shoulder gets wet.
   (8) **cliffhanger:** he smiles (rare) and a FEW of her drizzle drops shine gold. She is looking at the gap between their shoulders; he is looking at the gold.
   Gold ladder: EP1 one drop < EP2 a few drops < EP3 rim light. Do not exceed "a few drops".
3. **New prop introduced in EP2:** the frayed awning flap (faded navy canvas flap his grandfather hung at the end of the A-half eave, above the workbench) —
   world.md §1-2 note. Show it naturally (needed for EP3's night stitching). art-director writes its token + a reference card.
4. **Touch budget:** no deliberate touch yet (first deliberate touch is EP5); accidental near-touches only; walking under one umbrella with a visible gap.
   No confession, no kiss, no possessive/commanding lines, no pet names, no insult-teasing, no sarcasm.
5. **Speech styles (EP1 canon):** 태오 = short flat declaratives, numbers/objects, literal quoting (now with times); 단비 = rambling excuses split
   into 2–3 short bubbles, self-corrections ("아니, 그게 아니라…"), trailing off, mimicking his deadpan. Max 2 bubbles per panel.
6. **No text in any image.** Coins, tin can, thread, umbrellas, light carry information. No numbers/money amounts visible; spoken numbers in bubbles are fine.
7. **Rules R1–R3 (world.md):** R1 her cloud forms when feelings overflow; rain levels rise with each self-correction; R2 gold only near him when her heart leans
   toward him (EP2 = a few drops only, at the cliff); R3 (a true line stops the rain without fade) is NOT shown yet (EP6).
8. Locations: reuse EP1 LOC_* tokens (eave stall, market entrance, arcade, etc.). A new location only if a beat cannot be staged in an existing one;
   flag it. Cameos reuse existing cards (만식, 보미, 옥자/할머니 etc.).

## EP02 leader rulings after ep02_beatsheet.md (2026-11-26) — flags accepted
UA. 60 panels; beats P01–08 / 09–16 / 17–23 / 24–33 / 34–41 / 42–47 / 48–53 / 54–60. Twist P36/P39/P41, cliffhanger P59–P60. Comic lean accepted.
UB. New tokens + cards: frayed awning flap (token + card), tin can prop card (seam ring = height marker); token lines for unmarked coins, glass savings jar,
    wet rag, grandma's black umbrella with yellow band, open parasol, Bomi's two-broken-rib umbrella. P05 and P39 share one prompt; only the light changes.
UC. Hydrangea alley plate (card 15) becomes REQUIRED for EP02. New cameo card for the umbrella-regular grandma (returns EP3/EP6) + glossary entries for
    how she and Taeo address each other (Korean-style persona, Khmer only in the bubble words). Mansik/Bomi reuse card 14; extras faceless, umbrellas never yellow/red.
UD. Danbi outfit O1 again (no new outfit). "다신 안 와요" = off-screen line on day 2 at 4:10 pm. Tin can lives in the drawer. Grandma pays nothing on screen.
    The crowd and Mansik (not Taeo) cover the near-catch. P59 = Taeo's first smile: art-director adds a smile expression slot. Gold drops in the air below the canopy rim.
    Key-on-hook custom → EP4. Bomi keeps the pink umbrella (continuity for EP3).

## EP02 leader rulings after art-director's EP02 additions (2026-11-26) — AE1–AE10 accepted
UE. AE1 flow_tool counts all 19 cards for every episode; EP01 still needs only its 16 (noted in ep02_flow_status.md; EP01 files untouched).
    AE2 prompts spell out the awning flap even with card 05 attached; P04/P32/P49 attach card 17. AE3 drop "stone-wall side" in P54–P60;
    keep his LEFT shoulder wet (P58 line), Danbi on his right, wet shoulder on the iron-staircase side of the alley.
    AE4 tin-can frame = eye level tilted slightly down, identical for P05/P39. AE5 P51: the pink umbrella's yellow band away from camera/small, never touching
    Bomi's red raincoat. AE6 P59 smile from prompt + T11 wording (fallback T7 + "mouth lifted a hair"). AE7 grandma's second repaired joint is out of view;
    dialogue-writer puts 총각/할머니 address words in the glossary. AE8 extras rule relaxed for P24, P28–33, P35–38 (faces blurred). AE9 old cards untouched.
    AE10 P18 attaches GRANDMA_ref + PROP_UMBRELLAS.

## EP02 leader rulings after ep02_shotlist.md (2026-11-26)
UF. FL1 P24–33 stays one scene (each panel names its location). FL2 the script's P54 "돌담 쪽" note is superseded by AE3 (iron-staircase side); the script is
    not edited (keeps the review hash). FL3–FL9, FL11 (queue customer, long tail), FL12 accepted. FL6 handoff/status say: make panel_005 before panel_039.
    FL10 order: letterer finalises art_space in ep02_lettering.md first; prompt-smith then writes prompts from the shot list + the lettering's art_space.
UG. Lettering done (km_tool check OK). Where ep02_lettering.md's art_space differs from ep02_shotlist.md, the LETTERING wins (shot list not re-synced).
