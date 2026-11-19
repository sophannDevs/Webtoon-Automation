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
