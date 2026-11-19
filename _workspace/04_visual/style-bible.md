# Style Bible — 「맑은 날의 우산」 (작업 제목 「처마 밑 반반」)

- 작성: art-director · 2026-11-19 · v1 · Flow-by-hand + Khmer edition
- 입력: brief LOCKED 1–10, concept, world §1–§3·§7, characters §7, trend-brief §3·§8-2. 이전 이야기의 자료는 쓰지 않았다.
- 우선순위: LOCKED > world §3-6(절대 한계) > 이 문서 > 샷리스트. 인물·소품 토큰은 `character-sheets.md`.
- **기본 패널 화면비 (default aspect): 3:4** — 패널마다 §4에서 골라 `aspect:`에 적는다.
- **이미지에는 글자가 전혀 없다.** 말풍선과 크메르어는 뷰어(`km_tool.py build`)가 그린다(§8).

## 1. 작화 스타일

- **화풍:** 모던 한국 로맨틱 코미디 웹툰. 깔끔하고 자신 있는 균일한 선, 2톤 소프트 셀 셰이딩, 정돈된 페인터리 배경, 하이라이트에 은은한 블룸.
- **비례:** 세미 리얼. 태오 약 7.5등신, 단비 약 6.5등신. 눈은 조금 크되 애니메이션 크기는 아니다.
- **코미디:** 같은 얼굴 모델 안에서 눈썹·입·볼 홍조로 과장한다. 치비/SD와 만화 기호(땀방울, 하트, 분노 마크, 반짝이)는 쓰지 않는다. **감정을 눈에 보이게 하는 장치는 비구름 하나뿐이다.**
- **트렌드 (trend-brief §3):** 저채도 비 색 + 원색 노랑 하나 + 수국 청보라 + 카트 파스텔. 15–24세 여성 모바일 독자. 캡처 컷(P5–6 노란 우산 투샷)에 가장 공을 들인다.
- **Flow:** `Korean webtoon`, `clean line art`, `soft cel shading`은 안정적이다. `anime`, `manga`, `chibi`, `photorealistic`, `3D render`는 쓰지 않는다. 이미지 한 장 = 패널 한 칸.

### STYLE_REF (모든 패널 프롬프트 맨 앞, 46단어)

> Modern Korean romance-comedy webtoon illustration, clean confident line art, soft two-tone cel shading, tidy painterly backgrounds, warm rain-washed palette of muted greens, slate greys and creamy pastels, soft natural light with gentle bloom, expressive but grounded faces, semi-realistic proportions, one single full-bleed panel with no borders.

레퍼런스 카드는 마지막 구 대신 `clean reference sheet on a plain warm light-grey background, even soft studio light`를 쓴다.

## 2. 색감 / 팔레트

| 역할 | HEX |
|---|---|
| 바탕(시장) | 슬레이트 #6F7C80 · 이끼 #627D63 · 셔터 민트 #9DB5A6 · 마른 콘크리트 #CFCBC0 · 녹 #9A6A4F(소량) · 처마 짙은 초록 #3E5A4C |
| **시그니처 노랑 (유일)** | **#F6C400** — 태오의 노란 우산·노란 실·노란 팁 캡·공구 롤의 노란 실패 전용. world 제안 #F4C21B는 characters §7에 맞춰 #F6C400으로 확정(같은 색) |
| 수국 시계 | EP1–2 청보라 #5867C9 → 3주 보라 #8E7BC4·분홍 #C98BB9 → 6주 라벤더 #CFCBD9·앤티크 연두 #C9D3B4 |
| 빙수 카트 | 민트 #BFE5D3 · 복숭아 #F7CDB8 · 크림 #FFF3DF · 딸기 시럽 #F2A7B5 |
| 인물 | 태오 #2F3B52·#7F96B2 / 단비 #A8E2CF·#F5A9BC·#FFF4E0 / 옥자 #9C4A3A / 만식 #5C6B3B / 보미 #D8403A |
| 비구름 | L1 #C9CED3 · L2 #ABB3BA(보간) · L3 #8B95A0 · L4 #4F5A68 |
| 빛 | 백열등 #FFB45E · 가로등 찬 흰빛 #E6EEF2 · 여우비 금빛 #FFE3A3 (빛이지 물감이 아님) |

- 노랑만 최고 채도다. 나머지는 밝은 파스텔이거나 저채도다. 태오는 어둡고 단비는 밝다.
- **노랑 감사:** 한 패널의 강한 노랑은 태오 계열 하나뿐이다. 놋쇠(시계·고리·열쇠)는 `aged dull brass, brownish gold`, 통로의 누런 지붕은 `pale dirty cream`으로 쓴다. 백열등 빛 속에서도 노란 실이 가장 순수한 노랑이어야 한다.
- **노랑 곁 빨강·주황 금지:** 노란 우산·실이 나오는 클로즈업과 인서트에는 빨강·주황 물체(시럽 병, 보미의 비옷, 빨간 차양, 고추)를 두지 않는다. 와이드에서도 노란 캔버스에 닿거나 겹치지 않게 한다. 예외는 단비의 작은 딸기핀뿐이다. 해 질 녘 하늘은 채도 낮은 살구빛이다.

## 3. 분위기 · 빛

**톤:** 따뜻함, 장난, 가끔 어색함(웃음 40 / 설렘 40 / 정적 20). 비는 심각해져도 재난이 아니다. 어색한 정적은 여백 많은 구도와 멈춘 손으로 그린다.

### 3-1. 날씨 토큰 (world §2)

| 토큰 | EN phrase | 구름 노출 |
|---|---|---|
| `W_RAIN` | steady town rain falling everywhere, wet reflective pavement, grey-green diffuse light, low saturation, open umbrellas the only bright colours | 거의 0. 기본적으로 구름을 그리지 않는다 |
| `W_GREY` | flat overcast sky, soft shadowless humid light, damp pavement, muted colours | 낮음. 회색 하늘에 섞인다 |
| `W_BREAK` | a bright break between monsoon showers, clear blue sky, big white clouds far away, crisp white-gold sunlight, short shadows, dry pale-grey pavement, passers-by carrying closed umbrellas | 높음. **EP1 기본 날씨** |
| `W_CLEAR` | early-summer sunshine at the end of the rainy season, high white summer clouds, strong clear light, crisp shadows, dry warm pavement | 최고(시즌 후반) |

### 3-2. 시간대 빛

| 시간 | EN phrase |
|---|---|
| 아침 | pearly blue-grey morning light, soft long shadows, pavement drying in pale patches |
| 한낮 | bright white-gold midday sunlight, short crisp shadows |
| 비 오는 오후 | grey-green diffuse afternoon light |
| 해 질 녘 | soft apricot dusk sky reflected on damp pavement, first bulbs switched on |
| 밤 | night, a single bare incandescent bulb making one warm amber circle over the workbench, everything else in deep navy-blue darkness, the centre hook on the edge of the light, half lit and half in shadow |

- 구름 패널의 바닥은 말라 있어야 발밑의 젖은 원이 읽힌다. 아침이라도 구름 패널에는 `pavement already dry`를 쓴다.
- 처마 아래는 한 톤 어둡다. 아치 쪽 반은 차양 그늘로 더 어둡고, 오후 해는 골목 쪽 카트까지 든다.
- **EP1 빛 지도(제안, 대본 우선):** B1–B5 `W_BREAK` 한낮→오후 · B6 `W_GREY` 오후→해 질 녘에 갬 · B7 밤(비 없음, 전구 하나) · B8–B9 아침 `W_BREAK` · B10 `W_BREAK` 해가 남.

## 4. 화면비 / 캔버스

| aspect | 크기 | 쓰는 비트 (EP1 예) |
|---|---|---|
| **9:16** | large / full-bleed | 구름이 보이는 전신(구름·1m 틈·그녀·웅덩이를 세로로), 캡처 컷, 구도 A, 반전 컷, 엔딩 와이드 (P2, P5–6, B6·B7 걸기, B8 우산 펴기, B10 올려다보기) |
| **3:4** | medium (기본) | 대사 단독 컷, 허리 위 투샷, 말풍선 자리가 필요한 리액션 (B2, B4·B5 대화) |
| **4:3** | medium-wide | 중심축·테이프 선을 사이에 둔 가로 투샷, 세 사람 컷 (B4 판정, B5 테이프) |
| **1:1** | small / insert | 손, 열쇠, 노란 실, 시계 보기, 얼굴 리액션 (B7 손, B8 실, 마지막 엄지) |
| **16:9** | wide strip | 가로 전경, 무대사 정적, 돌풍, 바닥의 테이프 선, 밤 외경 (P1, P3, B7 첫 컷) |

이미지 한 장 = 패널 한 칸. 테두리, 칸 나눔, 흰 여백을 그리지 않는다. 뷰어가 전체 폭으로 쌓고 간격은 `gap_after`가 정한다. 저장은 PNG(`flow_tool.py status --fix`가 변환).

## 5. 일관성 규약

**프롬프트 조립 순서** (≤250단어, 한 단락):
1. STYLE_REF
2. LOC 토큰과 시점(§6). Flow는 'arch side'를 모르므로 화면 방향으로 바꾼다. 예: FRONT면 `the market arch on the left, her ice cart on the right`
3. 날씨 토큰 + 시간대 빛(§3)
4. 인물: `matching the attached reference image of Danbi (` + characters §7 Flow phrase 그대로 + `)`. 표정 슬롯, 그날의 의상, 젖음만 바꾼다
5. 구름 토큰(§7). 구름이 화면에 있을 때만
6. 동작, 카메라, 구도, 표정
7. art_space 문장(§8)
8. 장면 금지 한 문장(예: `No other yellow objects, no rain outside her column.`)
9. 마지막 줄 그대로: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`

**규칙**
1. **좌/우는 인물 본인 기준.** 카메라를 향한 컷에서는 화면 쪽을 괄호로 붙인다: `brass watch on his left wrist (on the viewer's right)`.
2. **방향:** FRONT 투샷은 태오가 아치 쪽(화면 왼쪽), 단비가 골목 쪽(화면 오른쪽). REVERSE는 반대.
3. **참조 첨부 3장 이하**(많으면 얼굴이 섞인다). 우선순위: 인물(투샷이면 `LEADS_lineup` 한 장) > 장소 플레이트 > 소품 카드. 첨부해도 외형 키워드는 매번 쓴다.
4. **크기:** 단비의 정수리 = 태오의 어깨 높이. 구름 폭 = 펼친 우산 폭(약 1m). 가운데 고리 약 2.2m.
5. **같은 scene_id = 같은 LOC·날씨·빛·의상·젖음.** 장소는 SCENE BREAK에서만 바뀐다.
6. **날짜 = 의상:** 단비는 1일째 복장 1, 2일째 아침(B8–B10) 복장 2. 태오는 이틀 다 복장 1.
7. **젖음은 남는다:** 구름이 걷혀도 그 씬 동안 머리와 어깨는 젖어 있고 웅덩이는 천천히 마른다.
8. **태오의 시선:** B10 반전 컷 전까지 그의 눈은 그녀의 손, 손잡이, 우산살만 본다. 그 전에 위를 보면 REGEN.
9. **테이프 선:** B5 전에는 없고 B5부터 있다.
10. **구도 A는 프레임 하나**(§6). 빛과 우산 상태만 바뀐다.
11. 엑스트라는 얼굴이 흐린 원경에만, 우산은 접은 채로.

## 6. 장소 고정 토큰 (LOC_*)

토큰 문장은 world §1-1 원문 그대로. 간판은 빈 판이거나 화면 밖.

**LOC_PLAZA — 앞마당**
- token: `small square before an old Korean covered-market entrance, pale grey concrete pavers, one drain grate, one old plane tree at the arch-side corner, low two-storey buildings, power lines`
- 보조구: `a faded green-and-white striped canvas awning juts out from the market arch; any board above the arch is blank or cropped out of frame`
- 시점: **FACADE**(기본) 앞마당 건너편에서 정면. 화면 왼쪽 = 아치(차양, 위 2층 사무실 창)와 플라타너스, 오른쪽 = 처마칸, 그 너머 꽃골목 입구의 수국. **HIGH 45°** 2층 높이 사선 부감(캡처 컷의 젖음/마름 대비). **PLAZA-OUT** 칸에서 앞마당을 보는 역샷(하늘이 말풍선 자리).
- EP1 B1. 플레이트 카드 06.

**LOC_EAVES_STALL — 처마칸**
- token: `tiny stall under a short dark-green corrugated-metal eave with wooden rafters, faded mint-green roll-up shutter, one brass hook centred under the shutter box, white cloth-tape line on grey concrete from the shutter's centre to the eave edge`
- B5 이전: 마지막 구를 `bare grey concrete floor under the eave, no tape line yet`으로.
- 아치 쪽 반: `arch-side half: built-in dark wooden workbench with a small vise and a thread-spool shelf holding one yellow spool, low round stool, one bare bulb on the rafter above, iron-pipe repair rail on the arch-side wall with repaired umbrellas tagged by half-cut cloth ribbons`
- 골목 쪽 반: `alley-side half: pastel mint shaved-ice push cart with folded pink parasol, tin downpipe at the corner, a folding table and two pastel stools outside the eave in the sun`
- 셔터 UP = 영업 중, 안쪽 창고가 어둡다. DOWN = 빈 민트 면, 글자 없음.
- 시점:
  - **FRONT**(기본): 앞마당에서 셔터 정면, 눈높이. 아치 쪽 = 화면 왼쪽(태오 반), 골목 쪽 = 오른쪽(단비 반). 세로 중심축(고리 → 열쇠 구멍 → 테이프 선)이 두 사람 사이.
  - **REVERSE**: 처마 아래에서 앞마당을 내다본다. 태오 화면 오른쪽, 단비 왼쪽. 위쪽은 처마 밑면이 막고, 뒤로 햇빛 든 앞마당과 플라타너스(오른쪽).
  - **SIDE-ARCH / SIDE-ALLEY**: 셔터를 따라 한쪽 끝에서 보는 옆모습 투샷.
  - **COMP_A (구도 A)**: FRONT 정면, 가슴 높이, 세로 중심축 정중앙. 셔터 박스 바로 위부터 처마 끝 바닥까지. **셔터 DOWN.** 위 가운데 놋쇠 고리에 접은 분홍 우산이 손잡이로 걸려 끝이 아래로 늘어진다(문제의 살이 카메라 쪽). 셔터 아래 가운데 열쇠 구멍 하나, 카메라 쪽으로 뻗은 테이프 선, 왼쪽 끝에 작업대 모서리, 오른쪽 끝에 카트 모서리(**EP1의 두 COMP_A는 해 질 녘/밤이라 카트가 셔터 안에 있으므로 오른쪽 끝은 함석 홈통이다** — 리더 확정, 비트시트 §3-6). 9:16. **매번 같은 크기, 같은 프레임. 우산 상태와 빛만 바뀐다.** art_space는 셔터 면 위쪽 아치 쪽(화면 왼쪽) 1/4.
- EP1 B2–B10 대부분. 플레이트 카드 05(낮 FRONT), 12(밤 COMP_A).

**LOC_ARCADE — 시장 통로**
- token: `long aisle under a yellowed translucent arched roof on pale-green steel trusses, small stalls with faded red, blue and green awnings, bare bulbs, produce baskets, rice-cake steam`
- 시점: AISLE 통로를 따라, 끝에 밝은 아치. 빨간 차양은 노란 우산과 떨어뜨린다. EP1 플레이트 없음.

**LOC_HYDRANGEA_ALLEY — 꽃골목**
- token: `narrow alley along the market's outer wall, old stone wall opposite, hydrangeas in a soil strip and black rubber tubs, mossy drain, one old streetlamp, green iron staircase on the wall`
- EP1–2 보조구: `hydrangeas just in full bloom, deep blue-violet, full round heads`
- 시점: ALLEY-MOUTH 앞마당 쪽 끝에서 안쪽으로. 시장 바깥벽(초록 철계단)은 화면 왼쪽, 돌담은 오른쪽(art-director 규약). 돌담 윗면이 말풍선 자리. EP1 B3. 플레이트 카드 15(권장).

**LOC_BACK_LANE — 뒷골목**
- token: `cramped service lane behind the stalls, stacked crates, gas meters, AC units, a tap with a blue hose, damp concrete, dim grey light`
- 시점: LANE 좁은 세로 구도(9:16). EP1 플레이트 없음.

**LOC_ASSOC_OFFICE — 상인회 사무실**
- token: `small old second-floor office, big aluminium window looking down on the market square, grey steel desk, standing fan, wall board of brass hooks with keys on coloured cloth tags, desk microphone, no posters or papers`
- 시점: WINDOW-DOWN 창 너머로 45° 내려다본다. 사무실은 아치 위에 있으므로 처마칸의 짙은 초록 처마 지붕은 **화면 왼쪽 아래**에 보인다. 열쇠 태그에 노랑 금지. 플레이트 카드 16(권장).

**LOC_IRON_STAIRS — 철계단**
- token: `steep green outdoor iron staircase with one landing on the market building's side wall, rust streaks, hydrangeas and a streetlamp below`
- 시점: 골목에서 올려다보기 / 층계참에서 내려다보기. EP1 플레이트 없음.

**LOC_ROOFTOP — 옥상**
- token: `flat concrete rooftop with low parapet, blue water tank, styrofoam boxes of chili, clothes line, view over the long arched market roof and low town rooftops ringed by misty green hills`
- 시점: PARAPET 난간 너머로 아치 지붕과 산. EP1 플레이트 없음.

## 7. 비구름 토큰 (world §3-7 원문)

| 토큰 | EN |
|---|---|
| `CLOUD_BASE` | a small soft grey rain cloud about the width of an open umbrella, floating directly above the young woman's head with a clear one-metre gap, flat darker underside, soft but well-defined edges, no outline; a narrow straight column of rain falls from it onto her only; everything outside the column is dry and sunlit; dry pale pavement with one small wet circle and a puddle only at her feet |
| `CLOUD_L1` | very faint drizzle, pale silver cloud |
| `CLOUD_L2` | light rain, light grey cloud, thin rain lines, small splashes on her umbrella |
| `CLOUD_L3` | heavy shower, slate blue-grey cloud, splash crowns on the umbrella, water streaming off its edge |
| `CLOUD_L4` | downpour, dark charcoal-blue cloud, dense curtain of rain, still only over her |
| `CLOUD_R2` | thin bright cloud with a glowing white-gold rim, sunlight through it, raindrops sparkling gold |
| `CLOUD_EAVE` | the small cloud squashed flat under the eave, still raining only on her |

- 조립: BASE + 단계 하나 [+ EAVE]. 햇빛이 없는 장면에서는 BASE의 `sunlit`만 그 장면의 빛으로 바꾼다.
- **R2는 EP3 몫.** EP1 마지막 컷은 `one single raindrop catching the sunlight like a gold spark`만 쓴다.
- 보조구(art-director): 우산을 폈을 때 `the rain column falls onto her open umbrella only, splashes on the canopy, water dripping off its edge, a puddle at her feet, dry ground around` · 걷힘(2–3컷) `the small cloud thinning and fading from its edges, only a few last drops` · 뛸 때만 `the cloud lagging half a step behind her, the rain column leaning backward`
- 카메라: 로우앵글, 측면 미디엄·와이드, 45° 사선 부감. **정수리 바로 위 수직 부감 금지.** 우산에 가려진 근거리 컷은 캔버스의 튐, 우산 끝 물줄기, 웅덩이로 알린다.
- 노란 우산 아래로 들어오면 비는 노란 캔버스를 두드리고, 캔버스 밖으로 나온 태오의 어깨가 젖는다.

**실패 처방 (world 원문)**

| 실패 | 처방 |
|---|---|
| 비가 화면 전체로 번짐, 바닥 전체가 젖음 | `clear blue sky, rain only inside one narrow column, dry ground except one puddle at her feet`, 주변 사람은 우산을 접고 있음 |
| 구름이 모자·후광처럼 머리에 붙음 | `clear one-metre gap above her head` |
| 말풍선·생각 풍선처럼 보임(흰색, 테두리, 꼬리) | `grey, volumetric, shaded underside, no outline, rain falling from it` |
| 만화 감정 기호, 적란운, 번개 | `physically real small cloud, not a cartoon symbol, no lightning` |
| 먼 하늘의 큰 구름으로 읽힘 | 우산을 크기 비교 대상으로, 그녀 바로 위에 |
| 연기·안개처럼 형태 없음, 구름이 둘, 비스듬한 빗줄기 | `solid-looking, only one cloud, straight vertical column` |

## 8. 말풍선 — 뷰어가 그리고, 이미지는 자리만 비운다

이미지에는 말풍선, 글자, 효과음 글자가 없다. 뷰어가 lettering 스펙대로 그린다. 이미지의 일은 **조용한 빈자리(art_space)**다.

| type | 뷰어 모양 | 이 작품에서 |
|---|---|---|
| `dialogue` | 흰 알약형 풍선, 진한 테두리, 꼬리 | 대부분의 대사 |
| `thought` | 점선 둥근 풍선, 꼬리 대신 작은 원들 | 드물게. **구름이 있는 패널에서는 쓰지 않는다** |
| `shout` | 굵은 테두리, 각진 모서리, 기울어짐 | 드물게, 여백을 넓게 |
| `narration` | 어두운 사각 박스 | 내레이션 0줄. 마지막 '다음 화에 계속' 캡션만 → 마지막 패널 아래 1/6을 비운다 |
| `memory` | 파란 빛 테두리 | EP1 미사용 |
| `env` | 물체 위 글씨(hand / sign / screen) | 기본 0. 빈 물체는 비워 두기만. sign은 네온이라 쓰지 않는다 |
| `sfx` | 흰 굵은 글자 + 검은 외곽선 | 그녀 비 소리만, 빗줄기 기둥 옆 중간 높이. 구름·얼굴 위 금지 |

**크기:** 뷰어 글자는 패널 폭의 3.4%다. 크메르어 2줄 풍선 하나는 폭 40–50%, 높이는 패널 폭의 약 17%. 필요한 빈자리(폭의 절반 × 세로): 9:16 위쪽 1/6(풍선 둘 1/4) · 3:4 위쪽 1/5(둘 1/3) · 1:1 위쪽 1/4 · 4:3 위쪽 1/3 · 16:9 한쪽 1/3 폭 세로 띠(무대사 권장).

**위치 규약**
1. 기본은 위쪽, 화자 쪽 위. FRONT 투샷이면 태오는 화면 왼쪽 위, 단비는 오른쪽 위. REVERSE는 반대.
2. 얼굴, 손, 손잡이, 노란 실, 열쇠, 고리 위에는 두지 않는다.
3. **구름 규칙:** 구름이 화면에 있으면 art_space는 구름에서 구름 폭 하나 이상 떨어진 **반대편 위 모서리**(9:16이면 아래 1/3의 마른 보도도 가능). 구름 바로 위·옆·아래와 빗줄기 기둥 안은 금지. 구름이 생각 풍선으로 읽히면 안 된다.
4. 좋은 여백: `W_BREAK`의 맑은 하늘, 내린 셔터의 빈 면, 처마 밑면, 돌담, 부감 컷의 마른 보도, 밤 전구 원 밖의 어둠.
5. 무대사 패널(`silent: true`)은 화면을 다 쓴다: 콜드 오픈 P1–4, B7 수선 6–7컷, B8 리액션, 엔딩 와이드.
6. letterer는 `art_space`를 한국어로 쓰고(예: "상단 좌측 1/3, 맑은 하늘"), prompt-smith는 화면 방향 영어로 옮긴다: `Keep the upper left third (clear sky) as calm, empty background with no important details (a speech bubble will be added there later).`
7. 레터링 좌표는 `x + w ≤ 100`.

## 9. 금지 목록

1. **글자 일체:** 글자, 숫자, 가짜 글씨, 말풍선, 캡션, 라벨, 서명, 워터마크. 간판·아치 위 판·셔터·카트 보드는 빈 면이거나 화면 밖.
2. **글씨가 있는 표지물:** 메뉴판, 포스터, 영수증, 쪽지, 달력, 수선표 번호(대신 색 리본).
3. **내용이 보이는 폰 화면.** 뒷면이나 꺼진 화면만.
4. **옷·소품의 로고, 브랜드, 각인.** 시계 문자판은 막대 눈금만.
5. **두 번째 강한 노랑:** 우비, 과일, 고양이, 열쇠고리, 리본, 단비의 우산, 노란 연필, 노란 옷.
6. **노란 서명 곁의 빨강·주황**(§2, 딸기핀만 예외).
7. **두 번째 마법:** 발광하는 손이나 물건, 오라, 마법진, 반짝이 효과. 금빛 빗방울은 햇빛 반사 한 방울뿐이다.
8. **번지는 구름:** 기둥 밖의 비(`W_RAIN` 장면 제외), 젖은 바닥 전체, 구름 둘, 비스듬한 기둥(뛰는 컷 제외), 번개, 후광형 구름, 흰 테두리의 풍선형 구름.
9. **정수리 바로 위 수직 부감.**
10. 만화 감정 기호, 치비/SD, 애니메이션풍, 실사, 3D 렌더.
11. 같은 scene_id 안의 장소·날씨·시간 급변.
12. 멀티 패널 레이아웃, 패널 테두리, 이미지 안 흰 여백.
13. 샷리스트에 없는 접촉. EP1은 손잡이 위 우발 접촉 1회와 닿을 뻔 1–2회뿐.
14. 인물 의상의 채도 높은 청보라(수국 몫).
