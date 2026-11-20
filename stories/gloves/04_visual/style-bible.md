# 스타일 바이블: 「장갑을 벗기 전에」 (EP01~, 시리즈 자산)

- 작성: art-director · 2026-11-20 · 첫 작성 (Phase 4, Flow-by-hand mode, Khmer edition)
- **기본 화면비 (default aspect): 9:16** (세로 스크롤 기본값. 패널별 크기는 §5-1 표를 따른다)
- 입력: `00_input/brief.md`(LOCKED 1–10, LEADER RULINGS A–J), `02_story/concept.md` §4–§6, `02_story/world.md` §2-2·§2-5·§4·§5·§9·§10, `02_story/characters.md` §2·§3·§5·§6·§7, `02_story/twist-plan.md` EP1 §1-2·§2-3·§2-7, `03_episode/ep01_beatsheet.md` §1·§2, `03_episode/ep01_script_final.md`(훑어봄), `01_research/trend-brief.md` §4·§7, `01_research/platform-ranker.md` §5
- 짝 문서: `04_visual/character-sheets.md`(인물 토큰 · 표정 · 레퍼런스 카드 사양)
- 쓰는 사람: ref-sheet-artist, panel-director, letterer, prompt-smith, panel-validator, quality-reviewer
- 원칙: 이 문서는 상류 결정을 **바꾸지 않는다.** 외형·장소·규칙은 characters.md·world.md·twist-plan.md 그대로이고, 여기서는 그것을 작화 언어와 Flow 프롬프트 토큰으로 옮겼다. 충돌은 §13에 적었다.
- 표기: 영어 블록은 Flow 프롬프트에 그대로 붙여 넣는 문자열이다. 한국어는 작업 설명이다. **이미지에는 글자가 하나도 없다**(말풍선과 크메르어는 뷰어가 그린다).

---

## 0. 한눈에 보기

| 항목 | 결정 |
|---|---|
| 장르 화풍 | 한국 스튜디오 로맨스 판타지 풀컬러 웹툰(서양풍 귀족물). 상위작 공통 화풍(platform-ranker §5)을 따른다: 남주 미형, 여주의 눈과 분위기, 긴 세로 컷과 여백 |
| 톤 | **절제된 고딕 로맨스.** 따뜻한 램프빛(친밀) 대 먹빛·잿빛(저주). 공포물 아님. 갈망 5 : 건조한 위트 3 : 성숙한 우수 2 |
| 수위 감각 | "15세판의 화면 + 19세판의 주제". 관능은 시선·거리·손·숨에서 나온다 |
| 무대 | 19세기 초 서유럽풍 백작령, **늦여름**(마르고 맑음). 북부·눈·서리·비·유리 물방울 없음 |
| 장소 | 정확히 4곳: `LOC_WORKSHOP` · `LOC_GREENHOUSE` · `LOC_BENCH` · `LOC_STUDY` |
| 색 대본 | 호박(친밀) · 에메랄드 유리와 상아빛 흰 장미(그의 세계) · 먹빛과 잿빛(저주) · 진홍(그녀 공방의 서명, 세 패널만) · 청회색(P40–P50, No Way) |
| 화면비 | 기본 9:16. XL 9:16 · L 3:4 · M 1:1 · ST 16:9 (§5-1) |
| 글자 | **0.** 의뢰서·계약서는 밀랍 인장만 있는 백지, 실에 눈금 없음, 간판은 실루엣, 책등 무지 |
| Flow 조립 | 모든 프롬프트 = STYLE_CORE → 컷·카메라 → 인물(레퍼런스 + 토큰 + 표정 + 손 상태) → 장소 + 빛 → 동작 → 빈 말풍선 자리 문장 → NEGATIVE (§12-2) |

---

## 1. 복붙 블록: STYLE_CORE와 NEGATIVE [고정]

모든 패널 프롬프트의 **맨 앞에 STYLE_CORE**, **맨 끝에 NEGATIVE**를 그대로 넣는다. 줄이거나 바꾸지 않는다(바꾸면 62장이 서로 다른 화풍이 된다).

**STYLE_CORE (패널용, 63단어)**
```
Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing.
```

**NEGATIVE (패널용, 맨 끝. 마지막 문장은 Khmer edition 고정 문장 그대로)**
```
No childlike or teenage faces, no oversized anime eyes, no glowing effects or sparkles, no tattoos, runes or symbols on skin, no nudity, no red or crimson clothing, no comic-page layout or panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.
```

**REF_STYLE (레퍼런스 카드용, STYLE_CORE 대신 맨 앞)**
```
Clean character reference sheet in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather and fabric textures. Early-19th-century western European clothing. Mature adult character, realistic elegant proportions. Even soft neutral studio light, plain light warm-grey background, no scenery, no dramatic colour grading.
```

**REF_NEGATIVE (레퍼런스 카드용, 맨 끝. 마지막 문장은 flow-handoff 고정 문장)**
```
No childlike or teenage faces, no oversized anime eyes, no glowing effects, no tattoos, runes or symbols on skin, no red or crimson clothing, no grid lines, arrows or measurement marks. Avoid: any text, labels, speech bubbles, watermark.
```

- 장면별 부정어는 NEGATIVE **앞**에 한 문장으로만 더한다(예: 장미가 시드는 컷 `no flame, no smoke, no embers, no glow.`). 장면에 나올 리 없는 것(눈, 비, 동물)은 **쓰지 않는다**: 부정문 속 낱말이 오히려 그것을 불러올 수 있다. Flow가 실제로 그것을 그려 넣었을 때만 그 패널의 재생성 프롬프트에 더한다.
- 레퍼런스 카드 끝 문장은 `Avoid: any text, labels, speech bubbles, watermark.` (webtoon-flow-handoff), 패널 끝 문장은 `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.` (webtoon-khmer-edition §4). 이 두 문장은 각자 프롬프트의 **마지막 문장**이어야 한다.

---

## 2. 작화 스타일과 선 · 채색 처리

### 2-1. 작화 스타일
- **한국 스튜디오 로판 풀컬러**: 정돈된 디지털 선화 + 셀 셰이딩 2–3단 + 부드러운 페인터리 그라데이션(배경과 빛 번짐). 반실사로 가지 않는다. 얼굴은 미형이되 **성숙한 성인 얼굴**(뚜렷한 광대, 각 있는 턱, 작지 않은 코).
- 렌더 밀도: 인물 > 손 > 핵심 소품 > 배경. 손 클로즈업이 많은 작품이므로 **손은 얼굴만큼 공들인다**(관절, 손톱, 피부결, 핏줄).
- 남주 첫 등장(P14 풀샷 → P15 클로즈업)과 P18·P19·P62 얼굴 컷은 회차 최고 밀도.

### 2-2. 선
| 대상 | 처리 |
|---|---|
| 인물 외곽 | 가늘고 깨끗한 **짙은 갈색** 선(순검정 아님). 굵기 변화 적게 |
| 손 · 손가락 | 인물 선과 같은 굵기. 관절 주름과 손톱을 분명히 |
| 배경 | 인물보다 가는 선, 원경은 선을 거의 없애고 색면으로 |
| 핏줄 · 흔적 | **선으로 그리지 않는다.** 피부 아래 비치는 색면(무광 먹빛)으로 칠한다. 윤곽선을 두르면 문신·문양처럼 읽힌다 |
| 유리 | 철골의 선만 분명히, 유리면은 반사와 옅은 초록 색면 |

### 2-3. 채색
- **피부:** 페트라 = 따뜻한 밝은 피부, 손과 팔뚝은 볕에 살짝 그음. 휴고 = 창백하지만 건강한 서늘한 피부, **절대 회색이 아니다**(잿빛 흔적과 구분해야 한다). 청회색 보정(P40–P50)에서도 두 사람 피부에 따뜻한 하이라이트 한 점을 남긴다.
- **재질:** 가죽(무광~반광, 결), 리넨·모직(성긴 결), 비단 실(진홍만 약한 광택), 놋쇠(따뜻한 반사), 유리(초록 기, 램프 반사), 재(무광, 가루결).
- **저주 색은 늘 무광.** 먹빛 핏줄·잿빛 손끝·재의 길에는 광택, 빛남, 붉은 기, 그을음 번짐이 없다.
- **채도:** 전체는 낮게 누르고 포인트(램프 호박, 진홍 한 점, 흰 장미)만 살린다.

---

## 3. 색 팔레트와 감정 색 대본

### 3-1. 색 토큰 [world §9-1 값 확정]

| 토큰 | 값 | 프롬프트에 쓰는 말 | 쓰는 곳 | 금지 |
|---|---|---|---|---|
| `INK_BLACK` 먹빛 | `#16171D` | matte ink-black, faintly blue-black | 그의 핏줄, 신선한 흔적의 실핏줄, 시드는 장미의 번짐 | 광택, 빛남, 붉은 기 |
| `ASH_GREY` 잿빛 | `#8A8B89` | matte dull ash-grey, dry like a withered petal | **하녀·어머니·페트라 손끝 (같은 값)**, 장갑의 경고 얼룩 | 은색, 흰색에 가까운 회색, 검은 테두리 |
| `ASH_PATH` 재의 길 | `#2B2927` | compacted matte charcoal-black ash | 재의 길, 장미의 재 | 불씨, 연기, 그을음 |
| `CRIMSON_STITCH` 진홍 | `#8E1C2C` | deep crimson silk | 서명 스티치(P9 · P29 · P40), 진홍 실패 | 밝은 빨강, 분홍, 피처럼 보이는 것 |
| `EMERALD_GLASS` 에메랄드 유리 | `#2F6A56` (빛 필터) | faintly emerald-tinted old glass | 온실 유리, 낮의 온실 빛 | 형광 초록 |
| `LAMP_GOLD` 램프빛 | `#E2A64B` | warm amber oil-lamp light | 램프, 친밀 | — |
| `ROSE_IVORY` 흰 장미 | `#F2EDE0` | ivory-white | 장미, 휴고의 크라바트 계열 | 차가운 순백 |
| `LEATHER_TAN` 공방 | `#A9784C` · `#C8A267` | tan, ochre, umber | 공방, 거리, 페트라의 작업 장갑 | — |
| `NOWAY_BLUEGREY` 청회색 | `#6C7D8A` | cold blue-grey colour grade | P40–P50 | 서리·입김·얼음 연상 |
| `MANOR_GREEN` 저택색 | `#23382F` | dark bottle-green | **하인 제복 전용**, 서재 커튼 | 주인공·어머니·가죽상 옷 |

### 3-2. 감정 색 대본 (trend-brief §4 → 패널)

| 감정 | 색 | 패널 | 메모 |
|---|---|---|---|
| **친밀 · 설렘 · 갈망** | 호박 램프빛 `LAMP_GOLD` | B4 P21–28(램프 + 남은 푸른빛), B5 P29–38(램프 하나), B8–B9 P51–62(램프 + 은녹색 달빛) | 거리가 줄수록 램프가 화면 안으로 가까이 온다. P35가 B5에서 램프가 가장 가깝다 |
| **그의 세계 · 고립** | 에메랄드 유리 + 상아빛 흰 장미 | B1 P1–5, B3 P13–20, B4 배경, 작업대 배경 | 차가운 유리 세계에 따뜻한 색 하나(페트라)가 들어오는 그림이 B3의 핵심 |
| **그녀의 세계 · 생계** | 황갈 · 오커 · 엄버 아침빛 | B2 P6–12 | 램프 없음. 먼지 입자 |
| **저주** | 먹빛 + 잿빛 (+ 재의 길 숯빛) | P2, P4, P10, P16, P34, P46 등 저주 토큰이 보이는 모든 컷 | 장면 색보정과 상관없이 같은 값. 빛나지 않는다 |
| **그녀 공방의 서명** | 진홍 `CRIMSON_STITCH` | **P9, P29(배경), P40만** + 공방과 작업대의 진홍 실패 | 두 주인공의 옷·장갑·입술·장신구에 빨강·진홍 없음 |
| **금지 · 차가운 진실 (No Way)** | 청회색 보정 `NOWAY_BLUEGREY` | P39 식기 시작 → **P40 급전환 → P50까지 유지** | **P45–P49 보정 동일** (§8-3) |
| **회상** | 바랜 호박빛, 부드럽게 흐린 가장자리 | P37 한 컷 | 캡션 없이 빛으로만 구분 |
| **계층** | 밤색 장갑(가죽상) 대 맨손(장인), 병 초록(하인) | P6–7, P14, P19 | 장갑 = 신분 |

- **무사함은 색을 바꾸지 않는다** [잠금, world R3]. 원하는 접촉 컷(P17–19, P30, P35, P49, P57–58)이 바로 앞의 컷보다 따뜻해지거나 밝아지면 안 된다. 빛·꽃·온기·색 번짐 없음.
- 실루엣 대비(characters §6-5): 한 프레임에서 **휴고 = 어둠(미드나이트) + 상아 한 줄(크라바트)**, **페트라 = 따뜻한 흙갈색 + 밝은 캔버스**. 이 대비가 무너지면(둘 다 어둡거나 둘 다 갈색) 재생성.

---

## 4. 빛과 시간 레시피 (시간은 빛이 말한다. 캡션 없음)

장면마다 아래 LIGHT 문장 하나를 장소 토큰 바로 뒤에 넣는다. 같은 장면 안에서는 같은 문장을 그대로 쓴다.

| 코드 | 패널 | EN (프롬프트에 그대로) |
|---|---|---|
| `LIGHT_GH_NIGHT` | P1–P5 | `Night: pools of warm amber light under brass oil lamps, deep teal-green darkness between them, faint silver-green moonlight through the glass.` |
| `LIGHT_WS_MORNING` | P6–P12 | `Warm late-summer morning sun through small-paned windows and down the lane, floating dust motes, soft ochre bounce light.` |
| `LIGHT_GH_DUSK` | P13–P20 | `Dusk: the conservatory glows like a green-gold lantern, freshly lit amber lamps inside, the last deep blue of the sky above the dome.` |
| `LIGHT_GH_EVENING` | P21–P28 | `Early evening: amber lamps on chains above the long table, deep blue sky fading in the dome glass, warm faces against cool glass.` |
| `LIGHT_BENCH_LAMP` | P29–P36, P38 | `Night: a single brass oil lamp is the only light, a warm amber pool on the bench, everything beyond falls into blue-green darkness, the flame faintly reflected in the dark glass.` |
| `LIGHT_MEMORY` | P37 | `Memory: soft, warm, faded amber daylight, slightly lower contrast, gently blurred vignette edges.` |
| `LIGHT_STUDY_COOLING` | P39 | `Dim study: one brass desk lamp, a faint green glow through the glass door, the warmth starting to drain, cool still air.` |
| `LIGHT_NOWAY` | P40–P50 | `Cold blue-grey colour grade, desaturated, the lamplight's warmth drained away; skin keeps one faint warm highlight.` |
| `LIGHT_DEEP_NIGHT` | P51–P62 | `Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures.` |

- **청회색은 서리가 아니다.** P40–P50에 입김, 성에, 얼음빛 하이라이트를 쓰지 않는다. 달빛(B1, B8–B9)도 "soft silver-green"이지 차가운 청백색이 아니다(북부·눈 코드 금지).
- **P45–P49는 `LIGHT_NOWAY` 문장을 글자 하나 바꾸지 않고 쓴다.** P49에 "warm", "glow", "softer light" 같은 말을 더하지 않는다.
- B8–B9는 회차 끝까지 보정이 변하지 않는다(P58 닿음 이후에도). 암전, 화이트아웃, 빛 번짐 연출 없음.

---

## 5. 화면비와 세로 스크롤 구도 문법

### 5-1. 패널 크기 → 화면비

| 크기 | 화면비 | 용도 | EP1 패널 |
|---|---|---|---|
| **XL** 세로 대형 풀블리드 | **9:16** | 시간 정지: 첫 훅, 경관, 첫 접촉의 정점, No Way, 반전, 관능 정점, 클리프행어 | **P1, P13, P19, P40, P46, P55, P62** (이 7개만) |
| **L** 큰 컷 | **3:4** | 장면을 여는 와이드, 무게 있는 투샷, 동작의 흐름 | 비트시트의 L 표기 |
| **M** 보통 | **1:1** | 대화 컷의 기본, 얼굴과 손 클로즈업 | 비트시트의 M 표기 |
| **ST** 가로 띠 | **16:9** | 인서트, 사물, 손의 동작, 회상 | P4, P9, P37 |

- **Flow에 비율이 없을 때 (대체 규칙):** Flow의 이미지 비율 메뉴는 모델에 따라 다르다(16:9, 9:16, 1:1은 늘 있었고 3:4·4:3은 모델에 따라 다름). **3:4가 없으면 L은 1:1로** 만든다(L을 9:16으로 만들면 7개 XL의 무게가 흐려진다). 세로 흐름이 핵심인 L 컷(예: P2 떨어지는 재)만 9:16을 쓴다. 판단은 panel-director, 기록은 prompt-smith의 `aspect:` 줄.
- **XL 7개는 모두 풀블리드**(가장자리까지 그림, 흰 여백·테두리 없음). XL에 말풍선이 있는 것은 **P62 하나**뿐이다. 나머지 XL은 화면을 꽉 채워도 된다.
- 패널 테두리, 칸 나누기, 여러 컷이 한 장에 든 만화 페이지는 만들지 않는다(한 프롬프트 = 한 컷). 패널 사이 간격(`gap_after`)은 뷰어가 만든다.
- **쌍둥이 컷은 같은 화면비** (§8-3): P45와 P49는 반드시 같은 비율로 만든다(권장 둘 다 3:4, 3:4가 없으면 둘 다 1:1).

### 5-2. 세로 스크롤 읽기 흐름
- 시선은 **위 → 아래**. 한 컷 안에서도 위에 원인(얼굴, 말), 아래에 결과(손, 사물)를 두는 구도가 기본이다. 세로 3층 구도(P19: 얼굴 / 굳은 하인들 / 맞잡은 손)가 이 작품의 대표 문법이다.
- **크기 = 시간.** 대화 합은 M을 이어 빠르게, 정점은 XL로 느리게. 침묵 3연타(P17–19, P45–47, P54–56)는 크기를 점점 키우거나(M → L → XL) 크롭을 점점 좁힌다(P54 → P56).
- **손과 얼굴은 두 컷으로 나눈다** (trend-brief §7): 접촉 장면은 "손 두 개 클로즈업"과 "얼굴 반응"을 분리한다. 한 컷에 둘 다 넣을 때는 세로 3:4 이상에서 손을 아래, 얼굴을 위에.

### 5-3. 기본 무대 축 (180도 규칙)
- 두 사람이 한 화면에 마주 설 때 **페트라 = 화면 왼쪽, 휴고 = 화면 오른쪽**이 기본이다. 이 축이면 오른손 ↔ 오른손 악수가 화면 가운데서 만나고, 휴고의 **왼손 검은 장갑이 카메라 쪽**으로 와서 늘 보인다.
- 어깨 너머 역샷(P19 그의 어깨 너머, P48 그녀의 어깨 너머)은 의도된 예외로만. 한 장면 안에서 축을 이유 없이 뒤집지 않는다.
- 키 차이: 둘이 마주 서면 **그녀의 눈높이 = 그의 턱 · 크라바트 높이**(characters §6-5). 투샷마다 이 비율을 지킨다.

### 5-4. 빈 말풍선 자리 만드는 법 (Khmer edition)
말풍선은 뷰어가 그림 위에 얹는다(흰 바탕, 짙은 테두리, §9). 그래서 대사가 있는 패널은 letterer의 `art_space`를 **조용한 배경**으로 비워 둔다. 단, 빈칸처럼 보이면 안 된다: **세계 안에 실제로 있는, 디테일이 적은 면**을 그 자리에 둔다.

1. **위치:** 대부분 **화면 위쪽 25–35%**, 화자 쪽. 읽는 순서가 위 → 아래이므로 말풍선이 위, 그림의 핵심이 아래.
2. **인물 배치:** 대사 컷(M, L)에서는 머리 꼭대기를 화면 위에서 약 30% 아래에 둔다(얼굴이 화면 가운데~아래 2/3). 손과 소품은 아래 1/3.
3. **무엇으로 채우나 (장소별 조용한 면):**

| 장소 | 말풍선 자리로 쓰기 좋은 면 (EN) |
|---|---|
| `LOC_GREENHOUSE` 통로 · 돔 | `the dark emerald glass panes and black iron ribs above them, softly out of focus` / `the deep blue evening sky through the dome glass` |
| `LOC_WORKSHOP` 거리 | `the plain sunlit ochre plaster wall above the half-door` / `the pale morning sky above the rooftops` |
| `LOC_WORKSHOP` 안 | `the shadowed low ceiling beams` / `the plain plaster wall above the cutting table` |
| `LOC_BENCH` | `the blue-green darkness beyond the lamp's pool` / `the dark angled glass wall faintly reflecting the flame` |
| `LOC_STUDY` | `the dark walnut panelling and shelves softly out of focus` / `the dim space above the bell jar` |

4. **완성되어 보이게:** 그 면은 낮은 대비, 부드러운 그라데이션, 옅은 질감(유리 반사, 회벽 결, 어둠의 깊이)을 가진다. 순백·순흑의 평면, 잘린 듯한 빈 띠는 실패다.
5. **흰 말풍선이 잘 읽히는 면:** 중간~어두운 톤(밤 유리, 램프 밖 어둠, 그늘진 들보)이 가장 좋다. 밝은 공방 장면에서는 그늘진 들보나 회벽을 쓴다(뷰어 말풍선에 굵은 테두리가 있어 밝은 면에서도 읽힌다).
6. **금지:** 그 자리에 얼굴, 손, 핵심 소품(흔적, 장갑, 인장, 유리 종), 강한 빛(램프 불꽃), 재의 길의 소실점을 두지 않는다.
7. **효과음 패널(P2, P4):** 뷰어가 크메르어 효과음을 그린다. 떨어지는 재 옆 / 튀는 쟁반 옆에 작은 조용한 면을 남긴다.
8. **화면 밖 화자(P9 가죽상 목소리):** 화자가 있는 쪽 가장자리(문 쪽)를 조용하게 남긴다.
9. **P62:** 얼굴 익스트림 클로즈업이지만 말풍선이 하나 들어간다. 얼굴을 화면 아래 3/4에 두고 위쪽(머리카락 위 어둠)을 비운다. 얼굴을 자르더라도 눈과 입은 반드시 화면 안.
10. **프롬프트 문장 (prompt-smith가 그대로):** `Keep <art_space를 영어로, 그 면이 무엇인지까지> as calm, empty background with no important details (a speech bubble will be added there later).` 예: `Keep the upper third, the dark emerald glass above them, as calm, empty background with no important details (a speech bubble will be added there later).`

### 5-5. 매치 컷 (앞 컷을 레퍼런스로 붙여 만드는 쌍)
뒤 컷을 만들 때 **이미 확정된 앞 컷 이미지를 Flow에 함께 붙인다.** prompt-smith는 뒤 컷 블록의 `attach:`에 앞 컷 파일을 넣는다(예: `05_panels/ep01/panel_045.png`). 앞 컷을 반드시 먼저 만든다.

| 앞 컷 → 뒤 컷 | 같게 할 것 | 다르게 할 것 |
|---|---|---|
| **P45 → P49** ★ | 카메라·화면비·크롭·접촉 지점·배경·색보정 전부 (§8-3) | 그녀의 얼굴, 나머지 네 손가락, 실, 흔적 |
| P3 → P17 | 그의 맨 오른손목이 보이는 사선 앵글 | 하녀의 스치는 손끝 → 페트라의 손 전체 악수, 결과(잿빛 → 아무 일 없음) |
| P5 → P47 | 그가 물러서며 맨 오른손을 등 뒤로 감추는 자세 | 장소(통로 → 서재), 앞에 선 사람(하녀 → 페트라) |
| P15 → P54 | 장갑 낀 손이 다른 손의 장갑 손끝을 하나씩 집어 벗기는 동작, 손 높이 | 좌우를 뒤집은 거울 구도, 손의 주인(그 → 그녀) |
| P40 → P46 | 갈라진 오른손 검지 손끝을 보는 각도 | 장갑 가죽 → 그녀의 맨 손끝 |
| P34 → P46 | 흔적 자리(오른손 검지 손끝 바닥, 손바닥 쪽) | 작은 점 → 신선한 흔적 |
| P18 → P61 | 그의 얼굴 크기와 앵글(극단 앵글 금지), 시선이 얼굴로 올라가는 순간 | 장소와 빛(해 질 녘 → 깊은 밤) |
| P14 → P19 | 흰 대리석 띠 위 집사·하인들의 위치와 순서 | 하인들의 굳은 얼굴, 집사의 반쯤 든 손 |

---

## 6. 장소 고정 토큰 (LOC_*) [world §5 그대로, 프롬프트 길이에 맞게 다듬음]

- 모든 장소 공통: **글자·숫자 없음**(간판, 책등, 장부, 계약서, 실 눈금, 시계 없음). 동물 없음. 비·눈·유리 물방울 없음. 가스등·전기·시계 없음(기름 램프와 촛불만).
- 같은 `scene_id` 안에서는 같은 장소 토큰 + 같은 LIGHT 문장을 그대로 쓴다. 배경이 장면 도중 바뀌면 재생성(장소 급변 금지).
- **FULL** = 장소 카드(레퍼런스)와 장면을 여는 와이드 컷용. **PANEL** = 일반 패널용(약 30–50단어). 클로즈업에서는 PANEL의 첫 구절과 빛 문장만 써도 된다.

### 6-1. `LOC_WORKSHOP` — 장갑장이 거리와 공방 (B2 P6–12, P37 회상)

**FULL (world §5-1 원문)**
```
LOC_WORKSHOP: narrow sloping cobbled lane of leather workshops, timber-frame houses with ochre plaster, open half-doors, blank wrought-iron hanging signs shaped like objects; inside, one long low-beamed glover's workshop with a small-paned street window, scarred oak cutting table, hides hanging on a wall rail, a row of wooden hand forms, thread spools on pegs with one crimson spool, brown-paper hand patterns pinned to the wall; warm late-summer morning light with dust motes; tan, ochre, umber palette; no letters, no numbers anywhere.
```

**PANEL — 거리 (P6, P7, P11, P12)**
```
a narrow sloping cobbled lane of glovers' workshops, two- and three-storey timber-frame houses with ochre plaster and faded green shutters, open split half-doors, hides airing on poles under the eaves, blank wrought-iron hanging signs shaped like objects; on the hill above the rooftops, a small green-glinting glass conservatory
```
- 그녀의 공방: 모퉁이 집, 가운데가 닳은 낮은 돌 문턱, 휘감긴 쇠 받침대의 **검은 연철 장갑 실루엣 간판(손가락이 위로 향한 왼손 장갑, 글자 없음).** P6에서 사다리 위 사내가 떼어 내고, P12에서는 **빈 쇠 받침대**만 남는다.

**PANEL — 공방 안 (P8–P10)**
```
inside one long low-beamed glover's workshop: a small-paned street window, a long scarred oak cutting table, hides on a wall rail, wooden hand forms on a shelf, thread spools on pegs including one crimson spool, blank brown-paper hand-shaped patterns pinned to the wall, a plain wooden chair by the window
```
- **상태 변주 (같은 장소의 세 모습):**
  - 압류 중 (P6–P12): `half-emptied by the bailiffs: bare pegs, an empty shelf, pale rectangular marks on the plaster where tools and forms used to hang`
  - 압류 전, 회상 (P37): `full and tidy, every peg and shelf in use` + `LIGHT_MEMORY`
  - 압류 후 (이후 회차): 빈 못, 빈 선반, 빈 쇠 받침대, 문에 가로지른 끈과 **무늬 없는** 갈색 밀랍 덩이
- 고정 소품: 쇠장갑 간판, 진홍 실패, 나무 손틀, 어머니의 의자(창가), 참나무 재단대, 흑장미 밀랍 인장이 찍힌 접힌 **백지** 의뢰서(P11–P12).

### 6-2. `LOC_GREENHOUSE` — 벨린의 유리 온실 (B1 P1–5, B3 P13–20, B4 P21–28)

**FULL (world §5-2 원문)**
```
LOC_GREENHOUSE: an old grey-stone manor on a low hill with a long iron-and-glass conservatory on its side ending in a glass dome; faintly emerald-tinted old glass panes on arched black iron ribs; inside, dense ivory-white rose beds edged with grey stone on both sides of a pale limestone aisle; down the middle of the aisle runs a stride-wide path of compacted matte black ash with tiny curled black petal fragments, living white roses touching its edge; brass oil lamps with amber glass hanging on chains; a long dark walnut table under the dome; still air; no letters, no numbers.
```

**PANEL — 외관 (P13만)**
```
an old grey-stone manor with steep slate roofs and tall chimneys on a low hill, a long black-iron-and-glass conservatory along its side ending in a glass dome, faintly emerald old glass glowing from the lamps inside; a gravel path climbing the hill between low clipped hedges; no crest, no nameplate
```
- 궁전이 아니고 북부 성채도 아니다. 화려하지 않고 오래되고 조용한 집.

**PANEL — 통로 (P1–P5, P14–P20)**
```
inside an old iron-and-glass conservatory: arched black iron ribs, faintly emerald glass panes; ivory-white rose beds edged in grey stone flank a pale limestone aisle; down its centre runs a stride-wide path of compacted matte black ash with curled black petal flakes, living white roses touching its edge; brass oil lamps with amber glass on chains
```
- 입구: 바닥을 가로지르는 **흰 대리석 띠**(하인이 서는 선, P14·P19). 띠 너머로 저택 홀의 유리 겹문.
- 재의 길은 **그가 걷는 길**이다. 발밑이 새로 시드는 그림, 길에서 오르는 연기·불씨, 길 주변 장미까지 시든 그림 금지(world §4-3). 길 가장자리에 닿은 살아 있는 장미가 멀쩡한 것이 증거다.
- 돔 쪽 끝의 재는 조금 더 옅고 꽃잎 모양이 남아 있다(P2의 재가 내려앉는 자리).

**PANEL — 돔 아래 탁자 (P21–P28)**
```
under the conservatory's glass dome: a long dark walnut table with a high-backed chair at each end, brass oil lamps hanging on chains above it, ivory-white roses all around, emerald-tinted dome glass overhead
```
- 하인들은 멀리 흰 대리석 띠 뒤에만(작게, 흐리게). 탁자에 오지 않는다.
- 탁자 위: 백지 양피지, 호박갈색 밀랍 막대, 흑장미 인장(흑단 손잡이).

### 6-3. `LOC_BENCH` — 온실 구석 작업대, 램프 하나 (B5 P29–36·P38, B8–B9 P51–62)

**FULL (world §5-3 원문)**
```
LOC_BENCH: a side bay of the glass conservatory where the glass walls meet at an angle; an old scrubbed pale-oak gardener's potting bench against a low brick wall under the glass, stacked terracotta pots at one end, a pruning knife and an old cracked pair of gardener's gloves hanging on a nail, a climbing white rose on the iron frame above; a single brass oil lamp with a glass chimney is the only light, a warm amber pool, everything beyond falls into blue-green darkness, the dark glass faintly reflects the flame; two plain stools; glover's tools on a canvas roll; no letters, no numbers, no scale marks.
```

**PANEL**
```
a side bay of the glass conservatory where two glass walls meet at an angle: an old scrubbed pale-oak potting bench against a low brick wall, stacked terracotta pots at one end, an old cracked pair of grey-brown gardener's gloves and a pruning knife on a nail, a climbing white rose on the iron frame above, two plain stools, one brass oil lamp with a glass chimney
```
- 작업대 위 그녀의 도구(펼친 캔버스 두루마리): 장갑 바늘, 송곳, 작은 가위, 분필, 놋쇠 골무, 밀랍 덩이, **진홍 비단 실패**, 재단한 검은 키드 가죽 조각. **진홍 서명 커프 띠는 P29에만**(그 컷에서도 그의 시선 밖 배경).
- 낡은 정원사 장갑은 **회갈색**으로 고정한다(그녀의 황갈색 스웨이드, 그의 검정 키드와 섞이지 않게. 세부 보완이며 world의 "갈라진 낡은 정원사 장갑"을 바꾸지 않는다).
- B5는 `LIGHT_BENCH_LAMP`, B8–B9는 `LIGHT_DEEP_NIGHT`(같은 장소, 달빛만 더해짐).

### 6-4. `LOC_STUDY` — 서재, 유리 종 아래 장갑 (B6 P39–44, B7 P45–50)

**FULL (world §5-4 원문)**
```
LOC_STUDY: a dim high-ceilinged study panelled in dark walnut, tall bookshelves of plain worn leather spines with no titles, a heavy desk with one brass oil lamp, deep bottle-green velvet curtains, a tall glass door glowing faintly green from the conservatory beyond, a cold swept fireplace with a large frame covered by a dark cloth above the mantel; by the window on a small round pedestal table, a glass bell jar covering a pair of undyed pale cream kid-leather gloves laid palm up, fingertips charred black, the right index fingertip split, a thin crimson cross-stitch border on the inner cuff edge, a few loose basting threads; cool, still; no letters, no numbers.
```

**PANEL**
```
a dim high-ceilinged study panelled in dark walnut: tall shelves of worn plain leather book spines with no titles, a heavy desk with one brass oil lamp, deep bottle-green velvet curtains, a tall glass door glowing faintly green from the conservatory, a cold swept fireplace with a large frame covered by a dark cloth above the mantel; by the window a small round pedestal table with a glass bell jar
```
- **천 덮인 액자:** 아무도 보지 않고 들추지 않는다. 천 아래를 그리지 않는다. 이름판·글자 없음(W1 앵커).
- 유리 종 안의 장갑 세부는 §7 `BELLJAR_GLOVES`. 진홍 띠가 **읽히는** 것은 P40뿐이다. P41–P45에서 유리 종이 보이면 장갑은 작거나 흐리게(P45는 초점 밖).
- 늦여름이라 벽난로에 불이 없다(차갑게 쓸어 둠).

---

## 7. 고정 소품 · 저주 토큰 [characters §6-4 확정, 표현만 다듬음]

| 토큰 | EN (프롬프트용) | 나오는 곳 | 검수 포인트 |
|---|---|---|---|
| `GLOVE_HUGO` 그의 장갑 | `a close-fitting plain black kid-leather glove, short cuff, no stitching, no decoration` | 왼손 EP1 내내 · 오른손 P13–P15 | 스티치·장식·진홍이 보이면 재생성 |
| `GLOVE_HUGO_BURST` 터진 장갑 | `a black kid glove whose index and middle fingertips are charred matte black-grey and split open like dry bark; no smoke, no embers` | P1(왼손에 쥠), P5 전경 | 연기·불씨 없음. 검지·중지만 |
| `GLOVE_PETRA_WORK` 그녀의 작업 장갑 | `rough worn tan suede work gloves, slightly oversized, short cuffs, no stitching marks` | P6–P49 왼쪽 허리 앞치마 끈에 꽂힘(손가락이 아래로 늘어짐) · P50부터 착용 | 진홍·서명 없음. **왼쪽** 허리 |
| `CRIMSON_STITCH` 진홍 십자 스티치 | `a continuous narrow border of deep crimson silk cross-stitch along the inner cuff edge, one finger-joint wide, reading as a decorative band, not separate crosses, not letters` | **P9(황갈색 커프 띠, 손님 주문품) · P29(검은 커프 띠, 배경) · P40(유리 종 장갑)** | 따로 떨어진 X자, 글자·숫자 같은 배열, 피처럼 보이는 색이면 재생성 |
| `THIMBLE` 놋쇠 골무 | `a small dimpled brass thimble on a short thin brown leather cord resting at her collarbone` | 늘 목(쇄골 위). **P9 · P28은 오른손 중지**에 끼고 끈이 손에서 늘어진다 | §13 플래그 4 |
| `THIMBLE_SEAL` 그녀의 인장 | `amber-brown sealing wax pressed with the dimpled top of a brass thimble, a round field of tiny pits, no letters` | P28 계약서 | 문양·글자 없음 |
| `BLACK_ROSE_SEAL` 그의 인장 | `black sealing wax stamped with a single rose shape, no letters`; 도구: `a short ebony-handled seal with a rose-shaped die` | P11–P12 의뢰서, P21·P26·P28 | 글자·문장(紋章) 없음 |
| `COMMISSION` 의뢰서 | `a folded sheet of blank cream paper sealed with black wax stamped with a rose, nothing written on it` | P11, P12 | 완전한 백지 |
| `CONTRACT` 계약서 | `a blank sheet of pale parchment with two wax seals, amber-brown thimble-pitted wax and black rose-stamped wax, nothing written on it` | P21–P28 | 조항 문구·서명 없음 |
| `LEDGER` 장부 | `a closed brown leather ledger with a plain blank cover` | P6–P7 | 표지에 글자 없음. 회중시계 없음 |
| `KNOT_THREAD` 매듭 실 | `undyed linen thread with small evenly spaced knots, no scale marks, no numbers` | **늘 왼손목에 여러 번 감김.** 치수 잴 때는 한 길이만 풀어내고 끝은 왼손목에 남는다 | 눈금·숫자·줄자 모양이면 재생성. 오른손목에 있으면 반전 이미지 |
| `TOOL_ROLL` 연장 두루마리 | 말림: `a rolled canvas tool roll tied with a leather strap` / 펼침: `an unrolled canvas tool roll with glover's needles, an awl, small shears, chalk, a lump of beeswax and a spool of crimson silk thread` | P13–P20 왼팔 아래 · P29–P38 작업대 위 펼침 · P51 다시 말아 묶음 | — |
| `WHITE_ROSE` 흰 장미 | `an ivory-white cupped garden rose with many soft petals on a long stem with visible thorns` | 온실 전체, P1–P2, P29 | **가시가 보여야 한다**(P50 "가시예요"의 근거) |
| `ROSE_WITHER` 시드는 장미 | `ink-black creeping up the stem from his fingers into the petals, petals curling black and crumbling into fine grey-black ash that falls onto the black path; no flame, no smoke, no glow` | P2 | 불꽃·연기·빛·불씨 없음. 재가 길과 같은 색 |
| `ASH_PATH` 재의 길 | `a stride-wide path of compacted matte black ash with tiny curled black petal fragments down the centre of the aisle, living white roses touching its edge` | 온실 통로 | 연기·불씨·주변 시듦 없음 |
| `VEINS` 그의 핏줄 | `matte ink-black veins beneath the skin, faintly blue-black, branching organically like tree roots or ink bleeding in water; darkest and thickest at the fingertips and across the back of the hand, only fine strands on the palm, thinning at the wrist into a few hair-thin tendrils that vanish under the white shirt cuff; asymmetric, never symbols, runes, letters or tattoos; flat under the skin, not raised, not glowing; normal nails` | 오른손(EP1에서 맨살은 오른손뿐) | **손목 위·목·얼굴·깃 위에 보이면 재생성**(EP1). 기준 무늬 = `HUGO_hands` 카드 |
| `VEIN_LANDMARK` 기준 무늬 (오른손) | `one thick root runs diagonally from the index and middle knuckles across the back of the hand toward the little-finger side of the wrist` | 모든 오른손 맨손 컷 | 왼손 기준 무늬(EP2 이후용): `one thick root runs from the ring and little-finger knuckles diagonally toward the thumb side of the wrist` |
| `ASH_GREY` 잿빛 손끝 | `matte dull ash-grey skin with a dry texture like a withered petal, its edge following the fingertip's contact shape, no black outline, not silver, not white` | 하녀 · 어머니 · 페트라 (**세 사람 같은 값**) | 은색·흰색·검은 테두리면 재생성 |
| `BELLJAR_GLOVES` 유리 종 장갑 | `under a glass bell jar on a small round pedestal table, a pair of undyed pale cream kid-leather gloves laid palm up with fingers slightly curled, every fingertip charred black, the right index fingertip split open, a continuous narrow border of deep crimson silk cross-stitch along the inner cuff edge, a few loose basting threads at the seams` | P39(어둠 속 가장자리), **P40**, P41–P45(작거나 흐리게) | 크림색이라야 탄 손끝이 읽힌다. 그의 검은 장갑과 섞이지 않게 |
| `COVERED_FRAME` 천 덮인 액자 | `a large frame above the mantel completely covered by a dark cloth` | P39, P40 배경 | 천 아래를 그리지 않는다 |
| `MARBLE_BAND` 흰 대리석 띠 | `a band of white marble set across the floor at the conservatory entrance` | P14, P19, P21 배경 | 하인들은 이 띠를 넘지 않는다 |

- **진홍은 세 패널(P9, P29, P40)과 진홍 실패에만** [잠금]. 다른 컷에 진홍 스티치가 생기면 재생성. 진홍 실패는 공방(P8–P10 배경)과 작업대 두루마리(B5, B8)에 있어도 된다.
- **좌우 고정 표지 셋** (characters §6-0-6): 페트라의 매듭 실 = **왼손목**, 휴고의 장갑 = **왼손**, 휴고의 머리 한 가닥 = **그의 오른쪽 눈썹 위**(정면에서 보면 화면 왼쪽). 셋 중 하나라도 반대편이면 반전된 이미지다(§8-4).

---

## 8. 손 규칙 (이 작품의 얼굴은 손이다)

### 8-1. EP1 손 상태표 [beatsheet §1-3 그대로, EN 코드 추가]

| 패널 | 휴고 | 페트라 장갑 | 페트라 오른손 검지 |
|---|---|---|---|
| P1–P4 | `H_B1` | — | — |
| P5 | `H_B1` (오른손은 등 뒤로) | — | — |
| P6–P12 | — | `P_BARE` | `MARK_CLEAN` |
| P13–P14 | `H_GLOVED_BOTH` | `P_BARE` | `MARK_CLEAN` |
| P15 | `H_REMOVING` | `P_BARE` | `MARK_CLEAN` |
| P16–P33 | `H_STD` (P20 벗은 장갑을 코트 주머니에. P31 장갑 낀 왼손이 왼쪽 쇄골 아래 가슴으로) | `P_BARE` | `MARK_CLEAN` |
| P34–P45 | `H_STD` (P36 왼손이 다시 가슴으로) | `P_BARE` | `MARK_DOT` (P34만 분명히, P35–P45는 작게·강조 없이) |
| P46 | `H_STD` (손목만) | `P_BARE` | `MARK_FRESH` 시작 |
| P47–P48 | `H_HIDDEN` | `P_BARE` | `MARK_FRESH` |
| P49 | `H_STD` (그녀가 끌어낸 맨 오른손) | `P_BARE` | `MARK_FRESH` (P46이 끝난 길이 그대로) |
| P50–P53 | `H_STD` | `P_GLOVED` (P50 처음 낌) | (장갑 속) |
| P54 | `H_STD` (한 뼘 앞에서 기다림) | `P_REMOVING` | 드러나기 시작 |
| P55–P62 | `H_STD` (P58부터 엄지가 그녀 손목 맥박 위에 **가볍게**) | `P_ONE` (벗은 오른손 장갑은 작업대 위) | `MARK_FRESH` |

**EN 코드**
```
H_B1: his LEFT hand in a plain black kid glove holding a burst black glove; his RIGHT hand bare with matte ink-black veins
H_GLOVED_BOTH: both of his hands in plain black kid gloves
H_REMOVING: his gloved LEFT hand pinching the fingertips of the black glove on his RIGHT hand one by one, slowly drawing it off
H_STD: his LEFT hand in a plain black kid glove; his RIGHT hand bare, matte ink-black veins from the fingertips to the wrist
H_HIDDEN: his bare RIGHT hand hidden behind his back, his gloved LEFT hand at his side
P_BARE: her hands bare, sleeves rolled below the elbow, knotted linen thread wound round her LEFT wrist, rough tan work gloves tucked into the apron string at her LEFT hip
P_GLOVED: both of her hands in rough tan suede work gloves, the knotted thread showing above the LEFT glove cuff, nothing tucked at her hip
P_REMOVING: her gloved LEFT hand pinching the fingertips of the tan glove on her RIGHT hand one by one, drawing it off
P_ONE: her LEFT hand still in a tan work glove, her RIGHT hand bare
MARK_CLEAN: her right index fingertip is clean, warm skin
MARK_DOT: a tiny round matte ash-grey dot, about a third of the fingertip pad, on the palm-side pad of her RIGHT index fingertip (the hand without the thread bracelet); small, but the same ash-grey as the maid's fingertips; no mark on any other finger
MARK_FRESH: the palm-side pad of her RIGHT index fingertip (the hand without the thread bracelet) turned matte ash-grey, with hair-thin black thread-like veins creeping from it to, never past, the first knuckle crease, organic like roots, never like writing; no blood, no wound, no glow; no mark on any other finger
```
- `MARK_DOT`의 "작다"는 **크기**만 작다는 뜻이다. 색은 하녀·어머니와 **같은 ASH_GREY**다(twist-plan C5). 옅게 그려 사라지면 단서 2가 증발한다.
- 고정 규칙 [ruling D]: ① 휴고의 **왼손은 EP1 내내 장갑** ② 모든 주요 접촉은 **그의 오른손 ↔ 그녀의 오른손** ③ 흔적은 **그녀의 오른손 검지 끝 바닥 하나**, 첫 마디를 넘지 않는다 ④ 매듭 실은 늘 **왼손목**.
- 손이 보이는 모든 패널 프롬프트에 장갑 상태를 적는다. "whose hand, which hand, glove or bare, back or palm"을 빠뜨리지 않는다.

### 8-2. 그림 문법: 원하는 손 / 일의 손 [twist-plan §1-2 고정]

| | **원하는 손** (무사): P17–19, P30, P35, P49, P57–58 | **일의 손** (물림): P33–34, P45–46 |
|---|---|---|
| 얼굴 | 열림. 입술 살짝 벌어짐, 귀 끝 옅은 홍조, 또는 정면 도발 | 닫힘. 입 일자, 턱에 힘, **홍조 없음** |
| 시선 | 그의 얼굴, 또는 그의 손에 **머무는** 시선 | 매듭 실·일. 그를 보지 않는다 |
| 손 | 머문다. 손 전체가 맨살로 닿아도 된다 | 집게처럼 짧게. **오른손 검지 끝 하나만** 맨살, 엄지와 나머지는 그의 흰 셔츠 커프 위 |
| 매듭 실 | 없거나 내려놓음, 또는 왼손목에서 빨리 감김 | 그의 손목에 감아 맥박 위에 고정 |
| 결과 | 아무 일 없음. 닿은 손가락 전부 따뜻한 피부색 | 검지 끝 바닥만 잿빛(짧으면 작은 점) → 붙잡으면 첫 마디 쪽으로 검은 실핏줄 |
| 색보정 | **둘 다 같은 보정** | 같음 |

```
WANT_HAND: her face open, lips slightly parted, a faint flush at the tips of her ears, her eyes lifted to his face (or resting long on his hand), her bare right hand resting on his bare right hand longer than needed
TASK_HAND: her face closed and flat, jaw set, no flush, eyes lowered to the knotted thread, not looking at him; she pins the thread on his bare inner wrist with only her right index fingertip, her thumb and other fingers on his white shirt cuff, an efficient clamp-like grip
```
- 이것은 독자를 위한 작화 규약이지 마법의 작동 방식이 아니다. 시선이나 표정을 규칙처럼 말하는 대사는 없다.
- **일의 손은 뜨거운 분노가 아니다.** P44–P45의 얼굴은 식어 닫힌 일의 얼굴이다. 소리치는 얼굴, 노려보는 눈, 이 악물기, 번진 눈물 금지(EP4가 공정해지는 조건). 뜨거운 분노는 **P43 한 컷**에서만 번진다.
- 검수: 일의 손 패널에 검지 끝 외의 맨살 접촉이 있으면 재생성. 원하는 손 패널에서 손가락이 잿빛이면 재생성.

### 8-3. P45 ↔ P49 쌍둥이 컷 규칙 [twist-plan §2-3 · §2-7, 반전의 심장]

독자는 두 컷 사이에서 **통제된 실험**을 본다. 바뀌는 것은 그녀의 얼굴, 손의 머무름, 실, 결과뿐이다.

| 항목 | P45 (일의 손 · 침묵) | P49 (원하는 손 · 생각 말풍선) |
|---|---|---|
| 화면비 · 카메라 | **같다.** 그녀 오른쪽 어깨 뒤 약간 위 3/4 앵글, 미디엄 클로즈업, 전경에 두 손, 후경에 그녀의 얼굴 | **P45 그대로 복제** (같은 비율, 같은 크롭, 같은 높이) |
| 그의 손 | 맨 오른손, 손바닥이 위(손목 안쪽이 위) | 같음. 등 뒤에서 끌려 나온 손(팔꿈치가 뒤에서 앞으로 오는 꼴로 암시) |
| 접촉 지점 | 그녀의 **오른손 검지 끝 하나**가 그의 손목 안쪽 맥박 위 | **같은 검지 끝, 같은 맥박 자리** |
| 나머지 손가락 | 엄지와 나머지 셋은 그의 **흰 셔츠 커프 위**(천) | 네 손가락과 손바닥이 **그의 맨살**에 닿아 아래에서 받치듯 감싼다 |
| 매듭 실 | 그의 손목에 감겨 교차점이 검지 끝 아래 눌림, 다른 끝은 그녀의 왼손목 | 그의 손목에서 풀려 **그녀의 왼손목에서 아래로 늘어진다** |
| 얼굴 | `TASK_HAND`: 닫힘, 시선은 매듭 | `WANT_HAND`: 그의 얼굴을 본다, 열린 얼굴, 입술 살짝 벌어짐 |
| 흔적 | `MARK_DOT` (아직 작은 점. 물림은 P46에서 보인다) | `MARK_FRESH`, **P46이 끝난 길이 그대로**(자라지도 옅어지지도 않음) + **네 손가락은 깨끗** |
| 배경 | 그녀 뒤로 초점 밖의 흐린 유리 종 | 같음 |
| 색보정 | `LIGHT_NOWAY` | **`LIGHT_NOWAY` 글자 그대로** |
| 말풍선 자리 | 없음(침묵) | 생각 말풍선 하나 자리(letterer `art_space`). 얼굴·손을 가리지 않는 위쪽 |

- **만드는 순서:** P45를 먼저 만들고 확정한다 → P49는 확정된 `panel_045.png`를 첫 번째 첨부로 붙이고(+ `PETRA_expressions`, `PETRA_hands`), 프롬프트에 `Same camera, framing, crop and colour grade as the attached panel; change only her face, her other four fingers, the thread and the mark as described.`를 넣는다. Flow에서 이미지 편집이 되면 P45를 편집해 P49를 만드는 것이 가장 정확하다.
- **금지:** 화면이 따뜻해지는 색, 빛, 꽃, 흔적이 옅어지는 그림, 손바닥만 잡는 구도("손목은 물고 손바닥은 안 문다"는 오독), 다른 손가락의 잿빛, 다른 앵글.
- P46(XL 익스트림 클로즈업)은 P40 갈라진 검지와 같은 각도의 운율. 프레임 가장자리에 그녀 왼손목의 매듭 실(반전 검사 표지).

### 8-4. 좌우 반전 검사
- 반전 이미지(거울상)는 흔적 손가락까지 바꾼다. 매 이미지마다 **좌우 표지 셋**(그녀 왼손목 실 / 그의 왼손 장갑 / 그의 오른쪽 눈썹 위 머리 한 가닥)을 본다.
- 흔적 컷은 "her RIGHT hand (the hand without the thread bracelet), INDEX finger"처럼 이중으로 지정한다.
- 이미지 편집기로 좌우를 뒤집어 고치지 않는다. 표지가 **모두 함께** 뒤집혀 있고 말풍선 자리(`art_space`)도 맞는 쪽으로 가는 경우에만 뒤집기를 허용하고, 하나라도 섞여 있으면 다시 그린다.

---

## 9. 말풍선 시각 규약 (Khmer edition: 뷰어가 그린다)

- **이미지에는 말풍선이 하나도 없다.** 말풍선, 크메르어, 효과음, 캡션은 `km_tool.py build`가 뷰어에서 그린다(손으로 쓰지 않는다). 업스트림의 "이미지 안 한글 말풍선 베이크" 규칙은 이 프로젝트에서 쓰지 않는다.
- 뷰어가 그리는 말풍선 모양(작화가 비워 둘 자리를 정하는 기준):

| `type` | 뷰어의 모양 | EP1 사용 |
|---|---|---|
| `dialogue` | 흰 바탕, 짙은 테두리, 둥근 말풍선 + 꼬리(화자 쪽) | 대사 51개 |
| `thought` | 흰 바탕, **점선** 테두리, 둥근 모양, 꼬리 대신 작은 점들 | **P49 하나뿐** (생각 모양이어야 한다: 말 풍선이면 그가 들은 것처럼 읽혀 B9가 무너진다) |
| `shout` | 굵은 테두리, 굵은 글꼴(Koulen) | 없음(이 작품은 소리치지 않는다) |
| `narration` | 어두운 사각 상자, 밝은 글자 | 엔딩 캡션 1개만(뷰어) |
| `memory` | 푸른 빛 번짐 테두리 | 없음(P37 회상은 무대사) |
| `sfx` | 그림 위 크메르어 글자(Koulen) | P2, P4 |

- 크메르어 글꼴: Battambang(대사), Koulen(효과음). 말풍선 하나에 한 줄, 패널 하나에 2개 이하. `x + w ≤ 100`, 폭 ≤ 85%.
- 배치: 위 → 아래 읽는 순서, 얼굴과 핵심 작화(흔적, 손, 유리 종) 위에 놓지 않는다, 꼬리는 화자 쪽, 화면 밖 화자(P9)는 그 가장자리로.
- 작화 쪽의 책임은 §5-4의 **조용한 빈 면**을 남기는 것까지다. 위치와 문구는 letterer의 `ep01_lettering.md`가 정한다.

---

## 10. 18+ 시각 가드레일 [concept §5-2 · §5-6, brief 6 잠금]

- **분명한 성인:** 페트라 25세, 휴고 약 30세. 모든 인물 문자열에 `adult woman, 25` / `adult man, about 30`. 큰 아이 눈, 작고 가녀린 몸, 앳된 얼굴은 **무조건 재생성** [잠금]. 하녀도 분명한 20대 성인.
- **완전히 입은 옷:** 그녀의 목선은 높고 단정하다(크림 리넨 슈미즈 깃이 보임). 그의 깃과 크라바트는 **언제나 턱까지 채워져 있다.** 벗는 것은 **장갑뿐**이다. 젖은 옷, 흐트러진 옷, 열린 깃 없음.
- **노출 · 성적 프레이밍 없음:** 가슴·엉덩이·다리에 머무는 크롭, 치마 아래 로우 앵글, 이유 없는 신체 부위 클로즈업 없음. P55의 "달빛 속 두 사람의 가슴과 턱선"은 **옷 입은 상체와 턱선의 구도**이지 신체 강조가 아니다. P57의 입술은 결심의 표정이다.
- **관능은 시선 · 거리 · 손 · 숨으로:** 손, 손목 맥박, 목울대(크라바트 위 턱선의 삼킴), 오래 머무는 눈, 줄어드는 거리(탁자 → 한 뼘 → 한 마디 → 숨 하나). 카메라는 손과 얼굴에 머문다.
- **EP1에 없는 것:** 키스, 벽에 몰아붙이기, **그가 그녀 손목을 세게 쥐는 그림**(P58 그의 엄지는 맥박 위에 **가볍게** 얹힌다. B7의 차가운 쥠은 그녀의 행동), 소유를 드러내는 몸짓, 암전·화이트아웃 미끼, 침대·침실.
- **공포 아님:** 피, 벌어진 상처, 비명, 시체, 연기, 불꽃 없음. 시듦은 색과 결의 변화다. 하녀와 어머니는 원망하는 얼굴로 그리지 않는다(놀람 → 통증 / 고요).
- **동의의 그림:** 모든 접촉의 마지막 거리는 그녀가 닫는다(P17, P49, P57). 그는 손바닥을 위로 한 채 한 뼘 앞에서 멈춘다(P53, P56).

---

## 11. 금지 / 주의

**화풍 · 코드**
- 북부·눈 코드: 은발·백발 남주, 얼음빛 푸른 눈, 모피, 망토, 입김, 성에, 눈, 서리.
- 공작 코드: 왕관 모티프, 군복, 견장, 훈장, 화려한 궁전.
- 비, 우산, 유리 물방울, 젖은 표면.
- 마법 연출: 빛나는 선, 오라, 마법진, 반짝이, 연기. 저주는 무광 색 변화일 뿐이다.
- 시대 밖 물건: 가스등, 전기등, 시계(벽시계·회중시계 모두), 총, 증기기관.
- 동물(새·고양이·개·곤충 포함) 없음(world §2-4 권장). Flow가 넣으면 그 패널 재생성 프롬프트에만 `no animals`.

**글자 (Khmer edition)**
- 이미지 속 글자·숫자·가짜 글씨·말풍선·캡션·워터마크 0. 의뢰서·계약서·장부·책등·간판·액자는 백지·무지. 매듭 실은 매듭만.
- 핏줄과 흔적의 실핏줄이 문자·룬·문양·대칭 무늬·문신처럼 보이면 재생성.

**연속성**
- 같은 장면 안에서 배경·장소·시간대가 바뀌면 재생성(장소 급변 금지).
- 옷은 두 주인공 모두 **EP1 전 구간 한 벌**. 바뀌는 것은 장갑·흔적·빛뿐.
- 진홍이 세 패널 밖에 나오면 재생성. 주인공 옷에 빨강·진홍·병 초록 없음.
- 휴고 피부가 회색으로 보이면 재생성(잿빛 흔적과 구분).

---

## 12. Flow 실무

### 12-1. 기본 사실
- **Flow는 프롬프트 하나에 이미지 한 장**을 만든다. 앞 프롬프트를 기억하지 않는다. 그래서 **모든 프롬프트는 혼자서 완전해야 한다**: STYLE_CORE, 인물 외형, 장소, 빛, 손 상태를 매번 다시 쓴다. "앞 컷과 같은", "스타일 바이블대로", 토큰 이름(`LOC_BENCH`, `MARK_DOT`)을 프롬프트 안에 쓰지 않는다(그 뒤의 영어 문장을 풀어 쓴다).
- Flow가 보는 것은 붙여 넣은 글과 **첨부한 이미지**뿐이다. 레퍼런스 카드는 사용자가 직접 첨부한다(핸드오프 페이지의 "Attach in Flow" 목록).

### 12-2. 프롬프트 조립 순서와 길이 (패널 ≤ 250단어, brief 운영 메모)

| 순서 | 내용 | 대략 단어 |
|---|---|---|
| 1 | STYLE_CORE (§1) | 63 |
| 2 | 컷 종류 + 카메라 (예: `Medium close-up from slightly above her right shoulder:`) | 10 |
| 3 | 인물: `matching the attached reference images of Petra (...)` + PANEL 토큰 + 표정 + 손 상태 코드 문장 | 인물당 35–45 |
| 4 | 장소 PANEL 토큰 + LIGHT 문장 | 40–60 |
| 5 | 동작과 핵심 사물 | 20–40 |
| 6 | 빈 말풍선 자리 문장 (§5-4-10) | 25 |
| 7 | 장면별 부정어 한 문장(필요할 때만) + NEGATIVE (§1) | 40 |

- 두 인물 + 장소가 다 들어가는 컷은 250단어에 빠듯하다. 줄일 순서: ① 장소 토큰을 클로즈업용 첫 구절로 ② 인물 토큰을 MIN 판(character-sheets)으로(단, **좌우 표지와 식별 특징은 남긴다**) ③ 동작 묘사. **STYLE_CORE, 손 상태, 빈 자리 문장, NEGATIVE는 줄이지 않는다.**

### 12-3. 얼굴을 62장 내내 같게 유지하는 법
1. **레퍼런스 카드부터** 만든다(character-sheets §5). 패널은 카드가 확정된 뒤에.
2. 첨부는 **한 패널에 3장 이하**: 얼굴이 큰 컷 = `_expressions` (+ `_turnaround`), 전신·상반신 = `_turnaround`, 손 클로즈업 = `_hands`, 장면 와이드 = 장소 카드 또는 그 장면의 확정된 첫 와이드 컷. 매치 컷(§5-5)은 앞 컷을 첫 첨부로.
3. 프롬프트에 레퍼런스를 말로도 묶는다: `matching the attached reference image of Petra (straight strong dark brows, firm squared jaw, dark honey-brown low bun, knotted thread on her LEFT wrist)`. 첨부가 안 먹을 때를 대비해 외형 키워드는 늘 함께 쓴다.
4. **핵심 얼굴 컷**(P15, P18, P19, P48, P49, P61, P62)은 극단 앵글(완전한 부감·앙각, 극단 측면)을 피하고 얼굴을 크게.
5. 한 장면의 패널은 **가능하면 한 번에 이어서** 만든다(같은 날, 같은 모델). 장면을 여는 와이드 컷을 먼저 확정하고 그 장면의 나머지에 장소 앵커로 붙인다: P1(통로·밤), P6(거리), P8(공방 안), P13(외관), P14(통로·해 질 녘), P21(돔 탁자), P29(작업대), P39·P40(서재), P51(작업대·깊은 밤).

### 12-4. 얼굴이 흔들렸을 때 (사용자용 순서)
1. 같은 프롬프트로 **다시 생성**(새 변형). 2번까지.
2. 그래도 다르면, 그 인물이 잘 나온 **확정 패널 하나**(비슷한 각도)를 레퍼런스 카드와 함께 첨부해 다시 생성.
3. 각도를 순하게: 얼굴을 더 크게, 정면이나 3/4 쪽으로.
4. Flow에서 이미지 편집이 되면: 흔들린 이미지를 열고 `Keep everything else; make her face match the attached reference exactly.`
5. 3번 다시 그려도 안 되면 그 컷은 ACCEPT-FLAG로 두고 다음으로 넘어간다(panel-validator가 기록한다. webtoon-flow-handoff 3회 상한).
- **얼굴 확인 앵커:** 페트라 = 곧고 짙은 눈썹(머리색보다 짙음) + 각진 턱 + 귀가 보이는 낮은 쪽머리. 휴고 = 오른쪽 눈썹 위로 내려온 머리 한 가닥(화면 왼쪽) + 처진 눈꺼풀의 옅은 유리빛 초록 눈 + 턱까지 오는 깃과 상아색 크라바트. **나이가 어려 보이면 앵커가 맞아도 다시 그린다.**

### 12-5. 권장 생성 설정 (쉬운 말로)
- **모델:** 회차를 시작할 때 Flow의 이미지 모델 하나를 골라 **EP1 끝까지 바꾸지 않는다.** 중간에 바꾸면 화풍이 바뀐다. 레퍼런스(첨부 이미지)를 받아 주는 모델을 고른다.
- **비율:** 카드와 패널 블록의 `aspect:` 그대로(§5-1). 없는 비율은 §5-1 대체 규칙.
- **변형 수:** 프롬프트마다 **2장**을 만들어 고른다. 레퍼런스 카드 전부와 핵심 패널(P1, P13, P18, P19, P40, P45, P46, P49, P55, P62)은 **4장**. 고르는 기준은 "가장 예쁜 것"이 아니라 **레퍼런스와 가장 같은 것**(얼굴, 손, 좌우 표지, 장갑 상태, 흔적 손가락, 빈 말풍선 자리).
- **저장:** 핸드오프 페이지가 알려 주는 파일 이름 그대로 PNG로. 또는 `_workspace/_inbox/`에 내려받고 import를 쓴다.
- **고칠 때:** 전체를 다시 그리기보다, 편집이 되면 틀린 부분만(손가락, 장갑, 글자처럼 생긴 얼룩) 고친다.

### 12-6. 만드는 순서 (권장)
1. 레퍼런스 카드: `PETRA_turnaround` → `HUGO_turnaround` → `PETRA_expressions` → `HUGO_expressions` → `HUGO_hands` → `PETRA_hands` → (권장·선택 카드)
2. 패널: 장면 순서대로, 각 장면의 와이드 컷 먼저. 매치 컷은 앞 컷 다음에(§5-5).

---

## 13. 충돌 · 리스크 기록

| # | 내용 | 처리 |
|---|---|---|
| 1 | **P45(M) ↔ P49(L) 크기 차이.** 비트시트는 P45를 M, P49를 L로 적었고, twist-plan §1-2·§2-3은 "같은 카메라·같은 크기"를 요구한다(ruling J로 구속력 있음). 화면비가 다르면 같은 크롭이 될 수 없다 | **두 컷을 같은 화면비로** 만든다(권장 둘 다 3:4, 없으면 둘 다 1:1). panel-director가 샷리스트에서 확정할 것. 패널 수·순서는 그대로 |
| 2 | **`MARK_DOT` 세기.** characters §6-6은 "barely visible pale ash-grey dot", twist-plan C5는 "작을 뿐 같은 ASH_GREY" | twist-plan을 따랐다(ruling J: twist-plan 우선). 문자열을 "tiny … the same ash-grey"로 고쳤다. 크기만 작고 색은 같다 |
| 3 | **핏줄 노출 범위.** trend-brief §7은 "깃 아래 쇄골 쪽에 끝이 살짝 보임", concept·world·characters는 "EP1은 손목까지만" | concept·world를 따랐다(world 플래그 1). EP1에서 손목 위·목·깃 위 핏줄 0 |
| 4 | **골무 위치.** characters §6-4는 "늘 목에, B4에서 손가락에"와 "바느질과 밀랍 누를 때 오른손 중지에 낀다(끈째로)"를 함께 적었다. P9(바느질)가 어느 쪽인지 불분명하고, 짧은 끈을 목에 건 채로는 중지에 닿지 않는다 | P9·P28 = 오른손 중지에 끼고 **목에서 벗긴 끈이 손에서 늘어진다**, 나머지 = 쇄골 위. panel-director 확인 요청(디자인 변경 아님, 연출 해석) |
| 5 | **연장 두루마리.** characters §6-1은 "B3–B4 왼팔 아래" | 걸을 때·설 때(P13–P20)는 왼팔 아래, 돔 탁자에 앉은 동안(P21–P28)은 그녀 왼쪽 옆에 내려놓는 것으로 해석. 한 번 정하면 B4 안에서 바꾸지 않는다 |
| 6 | **Flow 비율 메뉴.** 3:4·4:3이 모델에 따라 없을 수 있다 | §5-1 대체 규칙(L → 1:1, 쌍둥이 컷은 같은 비율) |
| 7 | **"Korean … webtoon" 표현.** 화풍을 가리키는 말이지만 Flow가 인물의 생김새를 바꿀 수 있다 | 외형은 인물 토큰과 레퍼런스 카드가 정한다. 생김새가 카드와 다르면 §12-4로 고친다 |
| 8 | **작은 단서의 증발.** P19 맨 뒤 하녀의 잿빛 손끝(작게), P34 점, P38 점(강조 금지)은 Flow에서 사라지기 쉽다 | P34는 손끝 클로즈업(M)으로 크게, 점은 손끝 바닥의 약 1/3. P19·P38은 작아도 **보이기는** 해야 한다(validator 검사 항목) |
| 9 | **청회색 보정과 잿빛 구분.** P40–P50에서 피부 전체가 잿빛처럼 보일 수 있다 | 피부에 따뜻한 하이라이트 한 점(`LIGHT_NOWAY` 문장에 포함), 흔적은 무광 회색 그대로 |
| 10 | **진홍 누출.** 작업대 카드나 서재 카드에 진홍이 크게 들어가면 다른 패널로 번진다 | 장소 카드에는 진홍 실패만, 커프 띠는 넣지 않는다. 서재 카드의 유리 종 장갑은 멀리 작게(character-sheets §5) |
