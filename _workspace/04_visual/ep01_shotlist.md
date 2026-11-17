# EP01 샷리스트 「수칙 4번」 — panel-director

- 작성: panel-director · 기준일 **2026-11-17** · EP01 Phase 4 · v1
- 입력: `03_episode/ep01_script_final.md`(64패널, 최종) · `ep01_beatsheet.md` §2–§4 · `04_visual/style-bible.md` v1 · `character-sheets.md` v1 · `refs/ref_prompts.md`(16카드) · `02_story/world.md` §9–§10
- 다음 독자: **letterer**(`ep01_lettering.md`의 `art_space`·`place`·`gap_after`) → **prompt-smith**(`ep01_prompts.md`, Flow 형식) → 사용자(Flow) → panel-validator
- 총 **64패널** (panel_001–panel_064 = 대본 P01–P64, 번호·순서·비트·gap 불변). 대본·이야기·인물·화풍은 바꾸지 않았다.
- **Khmer edition:** 어떤 그림에도 글자·숫자·말풍선이 없다. 패널마다 `bubble space:`(= letterer의 `art_space` 후보)를 조용한 배경으로 비운다. 글이 적힐 물건(수칙 종이·명부·일지·서식·영수증·요청서·수첩·휴대폰·시계·공무원증·내선 버튼)은 **빈 면**이다. 크메르어는 뷰어가 넣는다.
- **Flow-by-hand:** 이 문서는 프롬프트가 아니다. prompt-smith가 각 패널을 style-bible §5-1 순서로 영문 프롬프트로 펼친다. `attach:`는 그대로 Flow 카드의 attach가 된다(패널당 3장 이내).

## 0. 읽는 법

| 필드 | 뜻 |
|---|---|
| `scene_id / location / view` | 씬 ID · LOC 토큰(style-bible §6) · VIEW 토큰. 같은 scene_id는 같은 장소·시간·조명 |
| `beat` | 대본 패널 P## · 블록 · 비트 ID(tension-curve B##) · 긴장값 |
| `size / aspect` | 크기 어휘(composition-grammar) · Flow 비율 |
| `comp` | 고정 구도 ID. **반복 컷(루프 2)의 `camera`·`composition`·`subject` 세 줄은 원본과 글자 하나 같다.** 다른 것은 `variable:`에만 쓴다 |
| `variable` | 이 컷에서만 다른 것(표정·소품 상태·작은 동작) |
| `dialogue_ref` | 한국어 작업 대사 + 말풍선 종류·꼬리. **크메르어는 대본 `KM:` 줄 그대로**(여기 옮기지 않는다) |
| `attach` | Flow에 붙일 참조 이미지. `refs/…` = 레퍼런스 시트, `_workspace/05_panels/ep01/panel_NNN.png` = 먼저 그린 원본 패널 |
| `gap_after` | 패널 뒤 간격(px). 대본 메타 그대로 = 레터링 `gap_after` |
| `fx/note` | 조명 토큰 · 빈 면 소품 · 빨강 · **bubble space:** (말풍선·효과음·캡션 자리, 패널 기준 %) |

- 좌우: 인물 이름 뒤 RIGHT/LEFT = **인물 자신의** 좌우. "화면 왼쪽/오른쪽" = 화면 기준. 위치 % = 패널 폭·높이 기준(x 왼쪽→오른쪽, y 위→아래).
- 표정 번호 = character-sheets 표(서하 ①–⑧, 노미란 ①–⑥, 선임 ①–⑥, 구정민 ①–⑥).
- 크기 ↔ 비율: `insert`/`small` = 1:1 · `band` = 16:9 · `medium` = 3:4 · `large`/`full-bleed` = 9:16.

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 배경)

| scene_id | 패널 | location | view | 시간·조명 | 배경 한 줄 |
|---|---|---|---|---|---|
| S01 | 001–003 | LOC_L1_DUTYROOM | VIEW_B | 밤(루프 2의 미래) · LIGHT_L1 + LIGHT_LAMP | 지하 2층 낡은 관공서 당직실, 연녹 벽·진녹 띠·테라조, 두꺼운 유리 창구 너머 어두운 복도, 스탠드 하나의 노란 빛 |
| S02a | 004–006 | LOC_L2_STAIRWELL | B2 층참 | 21:5x · LIGHT_STAIR | 마른 콘크리트 비상계단 층참, 진녹 철난간, 철망 전구, 반 층 아래 어둠 속 사슬 격자문 |
| S02b | 007 | LOC_L2_CORRIDOR | VIEW_ANCHOR | 22:00 · LIGHT_CORRIDOR | 방화문 앞 복도, 문 위 숫자 없는 시계 10시 정각, 하나 걸러 켜진 형광등 |
| S03 | 008–010 | LOC_L1_DUTYROOM | VIEW_C · VIEW_DESK · VIEW_NAPDOOR | 22:0x · LIGHT_COMEDY | 같은 당직실, 평범하고 고른 사무실 빛(떨림 없음) |
| S04 | 011–021 | LOC_L1_DUTYROOM | VIEW_A · VIEW_B · VIEW_C · 측면 | 밤 · LIGHT_L1 + LIGHT_LAMP (012 복도 끝 떨림 · 015 LIGHT_COMEDY) | 같은 당직실 + 서가 앞 접이식 의자, 유리 너머 복도 끝 어둠 |
| S05a | 022–027 | LOC_L1_DUTYROOM | VIEW_B 중심 | 밤 · L1+LAMP → 025 FLICKER → 026 BLACKOUT → 027 L1 | 같은 당직실(정정: 떨림 → 어둠 → 빈자리) |
| S05b | 028–030 | LOC_L2_CORRIDOR | VIEW_ANCHOR | 22:00(되감김) · LIGHT_CORRIDOR | 007과 같은 복도·같은 시계 |
| S06a | 031 | LOC_L2_CORRIDOR | VIEW_LONG | 22:00 직후 · LIGHT_CORRIDOR | 방화문을 등진 긴 복도, 가운데 따뜻한 창구, 끝 1/3 어둠 |
| S06b | 032–039 | LOC_L1_DUTYROOM | S03·S04와 같은 VIEW | 루프 2 · 032–033 LIGHT_COMEDY · 034–039 L1+LAMP (035 복도 끝 떨림) | S03·S04와 **같은** 당직실·같은 팔레트 |
| S07 | 040–049 | LOC_L1_DUTYROOM | VIEW_B · VIEW_A · VIEW_C · VIEW_NAPDOOR | 루프 2 · L1+LAMP · 041 LIGHT_STEADY · 043 숙직실 난로빛 | 같은 당직실 + 열린 숙직실 문틀(평상 모서리·주황 난로빛) |
| S08 | 050–057 | LOC_L1_DUTYROOM | VIEW_C · 수칙 종이 클로즈업 | 루프 2 · LIGHT_REVEAL (떨림 없음) | 같은 당직실, 스탠드 원만 따뜻하고 방은 차분한 푸른 그림자 |
| S09 | 058–064 | LOC_L1_DUTYROOM | 클로즈업 · 어깨 너머 | 루프 2 · LIGHT_REVEAL → 060부터 LIGHT_CLIFF | 같은 당직실, 스탠드 원이 두 번째 그림자에 깨짐. **유리 반사 금지**(유리는 프레임 밖 또는 평평한 어두운 반사) |

- 당직실 방향 [고정, style-bible §6-2]: 서하는 유리 창구를 **마주 보고** 앉는다. **그녀의 왼쪽** = 책상 왼쪽 끝 칸막이(수칙 종이, 앉은 눈높이) + 그 너머 옆벽의 크림색 숙직실 문 · **그녀의 오른쪽** = 창구 벽 끝 출입문 · **그녀의 뒤** = 서가 3열(사이 어둠), 거꾸로 놓인 접이식 의자(선임 자리), 보조 탁자(포트·종이컵), 서가 위 숫자 없는 시계.
- 이 문서의 측면 카메라 두 개(VIEW_A/B/C 외):
  - **SIDE_E** (출입문 쪽 = 서하의 오른쪽에서 방을 가로질러 숙직실 문 쪽을 봄): 화면 오른쪽 = 유리 창구 벽(유리 너머 복도가 깊이로 물러나 끝이 어둡다), 화면 왼쪽 = 서가와 접이식 의자, 화면 가운데 안쪽 = 칸막이 너머 크림색 숙직실 문. 선임은 늘 **화면 왼쪽**, 서하는 **화면 오른쪽**(180도 규칙). 012·013·020·034·035·036에 쓴다.
  - 같은 축의 반대편(숙직실 문 쪽)에서는 찍지 않는다(선임·서하 좌우가 뒤집힌다).

## 2. 세로 스크롤 리듬 (블록별 비율 · gap)

크기 = 시간, gap = 숨. 대본의 gap(px)을 그대로 쓰고, 비율로 박자를 만든다. 3:4가 이어지는 대화 구간(P10–15, P19–23)은 매 컷 앵글·거리를 바꿔 같은 그림이 이어지지 않게 했다.

| 블록 | 흐름 (패널 비율 · gap_after) | 설계 |
|---|---|---|
| ① 콜드오픈 001–003 | 3:4 ·40 → 1:1 ·120 → **9:16 ·480** | 선언(중) → 경악(작게, 빠르게) → 길게 숙이는 실루엣에서 결과를 자르고 480 정지(시간 점프) |
| ② 앵커 004–012 | 3:4 ·40 → 9:16 ·40 → 3:4 ·120 → **9:16 ·240** → 1:1 ·40 → 1:1 ·40 → 3:4 ·120 → 3:4 ·40 → 3:4 ·0 | 가장 느긋한 계단 3컷 → 앵커 대형 컷 + 240(문이 닫힌다) → 떠넘김 1:1 두 컷은 빠른 합 → 수칙 낭독은 0 간격으로 벨에 붙는다 |
| ③ 균열 013–021 | 3:4 ·120 → 3:4 ·40 → 3:4 ·120 → **9:16 ·240** → 3:4 ·40 → **9:16 ·120** → 3:4 ·40 → 3:4 ·40 → 3:4 ·120 | 벨 → 민원 → 블랙코미디 밸브 → 물방울 '발견'은 세로 대형 + 240 → 4번 낭독 → 멈칫은 세로로 늘려 침묵 → 4번 조각 → 대화 → 에코 원본 |
| ④ 반전 1 022–030 | 3:4 ·40 → 3:4 ·40 → **9:16 ·40** → 1:1 ·**0** → 1:1(검정) ·240 → **9:16 ·720** → **9:16 ·120** → 1:1 ·40 → 1:1 ·**480** | 질문·선택·새 정보는 촘촘히(40) → 떨림과 어둠은 0으로 붙인 작은 두 컷(암전) → 빈자리 세로 컷 뒤 **720 최대 정지** → **반전 1 공개 = 앵커 대구(007과 같은 9:16)** → 상실 두 컷 1:1, 마지막에 480 |
| ⑤ 반복 031–039 | 9:16 ·120 → 1:1 ·0 → 1:1 ·0 → 3:4 ·40 → 3:4 ·0 → 3:4 ·40 → 9:16 ·40 → 3:4 ·120 → 1:1 ·**480** | 결심의 긴 복도 → 반복 유머 1:1 두 컷 0 간격(속도 = 지겨움) → 원본과 같은 비율의 반복 → 콜드오픈 도달, 미니 클리프 480 |
| ⑥ 반격 040–049 | 9:16 ·40 → 3:4 ·120 → 9:16 ·120 → 3:4 ·40 → 3:4 ·40 → **9:16 ·120** → 1:1 ·40 → 3:4 ·40 → 3:4 ·40 → 3:4 ·**240** | 질문 → 명부 → 빈 유리·노크(세로) → 해방 유머 → 직인 카운트다운(세로, 직인과 서식 사이 거리 = 긴장) → 손목 잡기(작게, 빠르게) → 자백 → 사이다 정점 뒤 240 |
| ⑦ 반전 2 050–057 | 3:4 ·120 → 9:16 ·120 → **9:16 ·480** → **9:16 2분할 ·120** → 3:4 ·40 → **9:16(인셋) ·120** → 1:1 ·**720** → 3:4 ·240 | 밸브 → 바랜 스티커 → 새 스티커 + **480 정지** → **시각 정점** → 사물 사슬(빠르게) → **대사 정점** → 경악 ECU 뒤 **720** → 질문 이월 |
| ⑧ 클리프 058–064 | 9:16 ·120 → 16:9 ·240 → 9:16 ·240 → 9:16 ·**480** → 3:4 ·240 → 1:1 ·**720** → **9:16 ·1200** | 감속 4단: 정적(세로) → 소리(낮은 띠) → 그림자 → 손(480) → 대사 분절 두 컷 → 마지막 대사 뒤 720 → 무대사 최종 컷 + 1200 |

- 반전 주변 큰 간격: **P27 ·720 → P28(반전 1)** · P30 ·480 · **P52 ·480 → P53(반전 2 시각)** · P55(반전 2 대사) → P56 ·720 · **P63 ·720 → P64 ·1200**. 뷰어 바탕색 `#0e0e10`이 간격의 어둠이 된다.
- 비율 집계: 3:4 = 29 · 9:16 = 21 · 1:1 = 13 · 16:9 = 1.
- style-bible §4-1 권장표에서 바꾼 것 **2개**: **P24, P55 = 3:4 → 9:16**(⟨반전⟩ 컷이고, 기억 비네트 + 말풍선 2개 + 얼굴을 위에서 아래로 쌓을 세로 공간이 필요). 나머지는 권장표 그대로, COMP 짝은 같은 비율.

## 3. 반복 컷 · 리플레이 비네트

### 3-1. 고정 구도 짝 (원본 → 루프 2 반복)

| comp | 원본 → 반복 | aspect | 반복 컷에서만 다른 것 (`variable`) |
|---|---|---|---|
| COMP-COLD-1 | panel_001 → panel_038 | 3:4 | 없음(같은 순간) |
| COMP-COLD-2 | panel_002 → panel_039 | 1:1 | 없음(같은 순간) |
| COMP-COLD-3 | panel_003 → panel_040 | 9:16 | 실루엣의 얼굴 윤곽이 조금 더 보인다. 040에는 말풍선 1개(위쪽 빈자리는 003에도 같은 자리로 비어 있다) |
| COMP-STICKER | panel_005 → panel_052 | 9:16 | 배경(L2 어두운 콘크리트 → L1 스탠드의 따뜻한 흐림), 손이 떨린다 |
| COMP-ANCHOR | panel_007 → panel_028 | 9:16 | 표정만(통화 끝의 부드러운 얼굴 → ② 공포로 굳음). 028에는 지호 말풍선이 없고 효과음만 |
| COMP-HANDOVER | panel_008 → panel_032 | 1:1 | 서하: 입을 열다 만 불안 ① → 무표정 ⑧로 입 모양을 함께 |
| COMP-DESK | panel_009 → panel_033 | 1:1 | 영수증 묶음이 조금 높다(셀 수 없게) · 서하의 고개: 숙임 → 무표정으로 들고 눈이 묶음을 스침 |
| COMP-READ | panel_012 → panel_035 | 3:4 | 서하도 읊고 눈은 숙직실 문 · 선임 ① → ④ 실눈 · 종이컵 위치(책상 모서리 → 펼친 수첩 위) · 숙직실 문틈 불빛 |
| COMP-BELL | panel_013 → panel_036 | 3:4 | 벨 위 물방울 · 서하의 오른손이 이미 투입구로 뻗어 서식을 받는다 |
| COMP-PAUSE | panel_018 → panel_037 | 9:16 | 화면 오른쪽 가장자리 앞쪽에 흐린 서하의 옆얼굴(지켜본다). 037에는 말풍선 2개(위쪽 빈자리는 018에도 같은 자리로 비어 있다) |

- **반복 컷 만드는 법(prompt-smith·사용자):** 원본 패널을 먼저 그린다(번호 순서대로 그리면 원본이 늘 먼저다) → 반복 카드는 **원본 PNG를 첫 번째 attach**로 붙이고, 원본 프롬프트를 그대로 쓴 뒤 `variable`만 바꾼다. PNG를 복사하지 않는다(같은 순간이어도 다시 그린다. flow_tool이 md5 중복을 거른다).
- 반복 컷 검수 기준: 카메라 높이·거리·인물 위치·소품 배치·조명이 원본과 겹쳐 보여야 한다. P028 시계는 P007과 같은 **10시 정각**(분침 12)이 아니면 REGEN — 반전 1이 이 한 점에 달려 있다.

### 3-2. 리플레이 비네트 (P24 ← P9 · P55 ← P21)

- **기억 비네트 = 그림 안의 액자 한 장.** 받는 패널 위 왼쪽에 원본 컷의 한 부분을 다시 보여 주는 작은 액자: 채도를 약 40% 낮춘 회백색 기억 톤, 3–4px 회백색(`#D9D6CC`) 테두리, 얇은 어두운 그림자. 액자 안 그림은 **원본 패널과 같은 구도의 크롭**이다.
- **원본 패널 PNG를 attach**한다(panel_024 ← `panel_009.png`, panel_055 ← `panel_021.png`). Flow 카드에서는 비네트를 그림의 일부로 함께 그리게 하고("a small framed memory vignette in the upper-left showing the attached earlier panel, desaturated"), 비네트 밖의 큰 컷은 평소처럼 그린다.
- 테두리 규칙 예외: style-bible §4-2-1·§10-2-13의 "그림 안 테두리 금지"의 예외는 P53 + 이 두 비네트다. prompt-smith는 이 두 카드의 Avoid 줄에서 `panel borders`를 `any other borders or panels`로 바꾼다.
- 대안(Flow가 비네트를 망치면): 비네트 자리를 조용한 어두운 배경으로 비운 큰 컷만 다시 그리고, 하네스가 원본 PNG를 잘라 채도를 낮추고 테두리를 둘러 붙인다(style-bible §4-2-5, 사용자 그림을 자를 뿐 새 그림을 만들지 않는다). 어느 쪽이든 비네트 위치·크기는 아래 각 패널의 `bubble space`와 같다.
- 기억 말풍선(`type: memory`)은 비네트와 짝이다: P24 = 비네트 아래 가장자리에 걸치게, P55 = 비네트 바로 아래(폭이 넓어 비네트 밖).

## 4. 빈 면 소품 (Khmer edition)

- 글이 적힐 물건은 전부 빈 면: 수칙 종이(7칸 빈 모눈, 흰 4번 띠도 빈칸) · 명부(빈 칸 표) · 일지(빈 줄, 쓰는 손과 펜이 가린다) · 사망신고 취소 서식(연회청, 빈 칸 + 빈 직인 원) · 영수증(연노랑 빈 종이 + 글자 없는 작은 붉은 원) · 보완 요청서(흰 종이 + 글자 없는 붉은 원) · 수첩(빈 모눈) · 휴대폰(빈 화면) · 시계(눈금 12개, 숫자 없음) · 공무원증(빈 카드) · 내선 전화(숫자 없는 버튼) · 서가 상자 라벨·철문 명판(빈칸).
- EP01에는 물건 위 글씨(`env`)가 **없다**. 문서 내용은 전부 말풍선 낭독이다. 그래서 빈 면 소품은 "읽을 수 있게 크게"가 아니라 "글씨가 생기지 않게 깨끗하게"가 기준이다.
- 빨강은 세 범주뿐(style-bible §2-4): ① 4번 조각의 테이프 두 줄 ② 인주·직인 자국(영수증의 작은 원, 인주 케이스, P27 반원, P44–46 직인 끝, P49 요청서의 원) ③ P61–64 테이프 롤. 빨강이 있는 컷은 `fx/note`에 "빨강:"으로 적었다.

---

## ① 콜드오픈 (S01 · 루프 2의 미래 장면)

### panel_001
- scene_id: S01 / location: LOC_L1_DUTYROOM / view: VIEW_B
- beat: P01 · ① 콜드오픈 · B01 훅(결과를 모르는 선언) · 긴장 7
- size: medium / aspect: 3:4
- comp: COMP-COLD-1 (원본 → panel_038에서 반복)
- camera: eye-level, over-the-shoulder medium shot (서하의 오른쪽 어깨 뒤에서 창구 쪽으로)
- composition: 화면 아래 오른쪽 1/3에 앉은 서하의 뒷머리(낮은 포니테일)와 오른쪽 어깨·오른쪽 볼 가장자리. 화면 왼쪽 가장자리에 낮은 회색 칸막이와 수칙 종이(흰 4번 띠 + 짧은 빨간 테이프 두 줄, 오른쪽 위 색 점만 한 바랜 스티커), 높이 약 45–60%. 앞 왼쪽 스탠드의 노란 원이 책상과 그녀의 어깨에. 가운데 유리 너머 복도에 역광 실루엣(구정민)이 말구멍 앞에 서 있다(머리 높이 약 30–40%). 위쪽 약 25%는 유리 너머 어두운 복도 천장
- subject: 서하(뒷모습, 얼굴은 보이지 않음), 구정민(역광 실루엣, 젖은 것은 그림자에 묻힘), 수칙 종이(작게)
- variable: 없음(이 순간 그대로)
- emotion: 낮고 평평한 결심 — 무슨 일이 벌어질지 모르는 독자의 긴장
- motion/direction: 시선 아래 오른쪽(그녀) → 위 가운데(실루엣) → 왼쪽 가장자리(수칙 종이)
- dialogue_ref: 서하 "수칙 4번은 지키지 않겠습니다." — dialogue, 꼬리 ↘ 그녀의 뒷머리
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP, 실루엣은 복도 빛을 등진 역광. 빈 면: 수칙 종이. 빨강: 4번 테이프 두 줄만. E6 원본 · F-01① · F-04①(바랜 점은 아주 작게, 읽히지 않아도 된다). **bubble space:** 위쪽 약 25%, 가운데~오른쪽(x 30–95%, y 3–25%) = 실루엣 머리 위 어두운 복도 천장. 실루엣 머리·수칙 종이는 이 띠 밖.

### panel_002
- scene_id: S01 / location: LOC_L1_DUTYROOM / view: 서가 쪽(서하 자리에서 방 안쪽)
- beat: P02 · ① · B01 첫 질문 · 긴장 7
- size: small / aspect: 1:1
- comp: COMP-COLD-2 (원본 → panel_039에서 반복)
- camera: eye-level slightly below, medium close-up (당직석 쪽에서 방 안쪽 서가를 봄)
- composition: 화면 가운데 아래, 거꾸로 앉은 접이식 의자 등받이 위로 선임이 상체를 앞으로 확 내민다(머리 높이 약 32–62%), 굵은 두 팔뚝이 등받이에, 가슴께에 목줄에 걸린 검은 돋보기. 뒤로 회색 서가와 그 사이 어둠. 위쪽 약 25%는 서가 윗단의 어둠
- subject: 선임(경악 ③: 늘 반쯤 감겨 있던 눈이 크게 열림)
- variable: 없음(이 순간 그대로)
- emotion: 놀람 + 경고
- motion/direction: 앞으로 내민 몸이 화면(서하) 쪽으로 다가온다
- dialogue_ref: 선임 "너 미쳤어?" — dialogue, 꼬리 ↓ 그의 입
- attach: refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png
- gap_after: 120
- fx/note: LIGHT_L1, 스탠드 빛이 그의 앞면에 조금. LEFT 눈썹 흉터(정면 그림에서 화면 오른쪽). 돋보기는 쓰지 않는다. **bubble space:** 위쪽 약 25%(y 3–25%) 가운데 = 서가 윗단의 어둠.

### panel_003
- scene_id: S01 / location: LOC_L1_DUTYROOM / view: VIEW_B (와이드)
- beat: P03 · ① · B02 결과를 자른다 · 시간 점프 정지점 · 긴장 7
- size: large / aspect: 9:16
- comp: COMP-COLD-3 (원본 → panel_040에서 반복)
- camera: eye-level, wide shot from behind the seated duty officer (VIEW_B를 뒤로 뺌)
- composition: 화면 아래 1/3 앞쪽에 앉은 서하의 뒷모습(낮은 포니테일, 머스터드 카디건 등, 네이비 목줄), 왼쪽 아래 구석에 칸막이의 수칙 종이(흰 4번 띠가 구석에 걸림), 앞 왼쪽 스탠드. 가운데 높이(약 35–60%) 유리 너머 실루엣이 말구멍 쪽으로 천천히 상체를 숙인다(얼굴은 역광 어둠). 위쪽 약 20%는 유리 너머 어두운 복도 위쪽과 방 천장의 배관
- subject: 서하(뒷모습), 구정민(숙이는 역광 실루엣), 수칙 종이(구석, 작게)
- variable: 실루엣의 얼굴은 완전히 어둡다
- emotion: 다가오는 불길함, 답이 잘린 정적
- motion/direction: 실루엣이 위에서 아래로(말구멍 쪽으로) 숙여 들어온다 → 시선이 아래 서하에게 떨어진다
- dialogue_ref: 없음 (silent)
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 480
- fx/note: LIGHT_L1 + LIGHT_LAMP, 역광. 빈 면: 수칙 종이. 빨강: 4번 테이프만. **bubble space:** 없음(silent). 단 위쪽 약 20%(y 3–20%)는 040 반복 컷이 쓰므로 여기서도 어두운 복도·천장으로 비워 둔다. 480 간격 = 시간 점프.

--- SCENE BREAK --- (S01 당직실 → S02a 비상계단, 시간 21:5x로 거슬러 감)

## ② 앵커 (S02a 계단 → S02b 앵커 → S03 떠넘김 → S04 수칙)

### panel_004
- scene_id: S02a / location: LOC_L2_STAIRWELL / view: B2 층참
- beat: P04 · ② 앵커 · B03 마른 밤 기준선 · 긴장 3
- size: medium / aspect: 3:4
- camera: slightly high angle from a few steps above the landing, medium shot
- composition: 화면 왼쪽~가운데 층참에 선 서하(허리 위~무릎, 머리 높이 약 42–52%), 앞쪽 3/4 각도, RIGHT 손으로 휴대폰을 RIGHT 귀에(화면 왼쪽), LEFT 어깨에 네이비 토트백. 화면 오른쪽 아래로 계단이 반 층 더 내려가 어둠 속 사슬 격자문에서 끝난다(사슬만 희미하게 빛남, 화면 오른쪽 아래 구석). 뒤로 회색 방화문의 가장자리. 위쪽 약 38%는 층참 위쪽 벽(회백)과 철망 전구 둘레
- subject: 서하(마른 옷, 편안한 통화 얼굴 ①보다 느긋하게), 휴대폰(빈 화면), 사슬 격자문(배경)
- emotion: 평온 — 회차의 기준선
- motion/direction: 시선 위(그녀) → 오른쪽 아래(어둠 속 사슬 문)
- dialogue_ref: ① 지호(전화) "누나, 거기서도 별 보여?" — dialogue, 꼬리 ↙ 휴대폰(화면 왼쪽) · ② 서하 "지하야." — dialogue, 꼬리 ↓ 그녀
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_STAIRWELL_plate.png
- gap_after: 40
- fx/note: LIGHT_STAIR. 모든 면이 건조(F-13). 사슬 문은 배경일 뿐 강조하지 않는다(F-15). 비상구 표지 금지. 빈 면: 휴대폰. **bubble space:** 위쪽 약 38%(y 3–38%) = 층참 위쪽 벽. ① 위 왼쪽(휴대폰 쪽), ② 위 오른쪽. 전구는 오른쪽 위 구석 작게.

### panel_005
- scene_id: S02a / location: LOC_L2_STAIRWELL / view: 층참 클로즈업
- beat: P05 · ② · B03 세상에 하나뿐인 것 심기 · 긴장 3
- size: large / aspect: 9:16
- comp: COMP-STICKER (원본 → panel_052에서 반복)
- camera: eye-level close-up on the notebook cover, slightly from above
- composition: 서하의 LEFT 손이 아래에서 수첩(먼지 낀 네이비 리넨 표지, 흰 실 제본)을 비스듬히 받쳐 들고, 그 엄지가 표지 오른쪽 위의 스티커를 쓰다듬는다. 카디건 소매가 손등을 반쯤 덮는다. 수첩은 화면 높이 약 30–92%, 스티커는 약 40–55% 높이로 가운데보다 약간 오른쪽, 엄지는 스티커의 왼쪽 가장자리에. 위쪽 약 30%는 흐린 배경
- subject: 새 달냥이 스티커(황금빛 주황 고양이가 레몬색 초승달 위에 잠듦, 청록 원, 흰 별 셋, 고양이 자신의 LEFT 귀 = 화면 오른쪽 귀가 눈에 띄게 큼, 선명·광택), 서하의 LEFT 손
- variable: 배경 = 흐린 어두운 회색 콘크리트 계단(L2) · 손이 편안하고 고요하다 · 스티커가 화면에서 가장 채도 높은 색
- emotion: 다정함, 소중함
- motion/direction: 엄지의 쓰다듬는 방향 왼쪽→오른쪽, 시선이 스티커의 큰 귀에 머문다
- dialogue_ref: ① 지호(전화) "달냥이 아직 붙어 있지?" · ② 지호(전화) "떼지 마. 세상에 하나뿐이야." — 둘 다 dialogue, 꼬리 ↑ 위쪽 가장자리(화면 밖 그녀의 귀의 휴대폰)
- attach: refs/PROP_STICKERS_pair.png, refs/SEOHA_turnaround.png, refs/LOC_L2_STAIRWELL_plate.png
- gap_after: 40
- fx/note: LIGHT_STAIR. 스티커 주황은 황금빛(빨강 아님). 빈 면: 수첩 표지(글자·로고 없음). E2 원본 · F-02① · F-47①. 큰 귀가 반대쪽이면 REGEN(P53의 생명). **bubble space:** 위쪽 약 30%(y 3–30%) = 흐린 어두운 콘크리트. ① 위 왼쪽, ② 그 아래 오른쪽. 스티커(y 40–55%) 위로 겹치지 않게.

### panel_006
- scene_id: S02a / location: LOC_L2_STAIRWELL / view: B2 층참
- beat: P06 · ② · B03 잃을 것 = 약속 · 긴장 3
- size: medium / aspect: 3:4
- camera: eye-level medium shot
- composition: 진녹 난간에 등을 기대 편하게 선 서하(허리 위, 머리 높이 약 42–55%), 앞쪽 3/4 각도, RIGHT 손 휴대폰을 RIGHT 귀에(화면 왼쪽), LEFT 어깨 토트백. 화면 오른쪽으로 난간이 대각선으로 내려간다. 위쪽 약 38%는 층참 위쪽 벽
- subject: 서하(가장 따뜻한 얼굴 ⑦)
- emotion: 온기, 안도 — 이 회차의 가장 밝은 순간
- motion/direction: 난간의 대각선이 오른쪽 아래로(다음 컷의 하강)
- dialogue_ref: ① 지호(전화) "토요일 시상식, 진짜 와야 돼. 약속!" — dialogue, 꼬리 ↙ 휴대폰 · ② 서하 "응, 약속." — dialogue, 꼬리 ↓ 그녀
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_STAIRWELL_plate.png
- gap_after: 120
- fx/note: LIGHT_STAIR, 회차에서 가장 편안한 회색. 빈 면: 휴대폰. F-11①(약속 = 토요일 지호의 그림 시상식). **bubble space:** 위쪽 약 38%(y 3–38%) = 층참 위쪽 벽. ① 위 왼쪽(휴대폰 쪽), ② 위 오른쪽.

--- SCENE BREAK --- (S02a 계단 → S02b 방화문 안쪽 복도)

### panel_007
- scene_id: S02b / location: LOC_L2_CORRIDOR / view: VIEW_ANCHOR
- beat: P07 · ② · B04+B05 **앵커 컷 원본** · 긴장 4
- size: large / aspect: 9:16
- comp: COMP-ANCHOR (원본 → panel_028에서 반복)
- camera: eye-level, frontal medium-long shot from the corridor facing the fire door
- composition: 화면 가운데 정면으로 선 서하(머리 높이 약 32–42%, 무릎 위까지). 등 뒤로 무거운 회색 방화문이 막 닫히는 중(문틀 약 20–98% 높이, 밀대가 보임). 문 위 가운데에 숫자 없는 흰 시계(약 6–16% 높이), **정확히 10시 정각**(짧은 시침 = 10시 방향, 긴 분침 = 똑바로 위). RIGHT 손으로 휴대폰을 RIGHT 귀에(화면 왼쪽), LEFT 어깨의 네이비 토트백(화면 오른쪽), 마른 옷. 양옆은 연녹 벽과 진녹 띠, 위로 노출 배관. 시계 왼쪽 위 벽(x 4–36%, y 3–22%)과 문 오른쪽 가장자리 옆 벽(x 78–96%, y 45–62%)은 비어 있다
- subject: 서하, 방화문, 복도 시계(10:00), 휴대폰(빈 화면)
- variable: 표정 = 통화 끝의 부드러운 얼굴(⑦이 막 가라앉는 중)
- emotion: 따뜻함이 끊기는 순간
- motion/direction: 정면 대칭, 시선이 시계 → 얼굴 → 닫히는 문
- dialogue_ref: 지호(전화) "누나, 버텨!" — dialogue, 꼬리 ↘ 휴대폰(화면 왼쪽) · [효과음] 쿵(KM 효과음) — 문의 오른쪽 가장자리 옆
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_CORRIDOR_plate.png
- gap_after: 240
- fx/note: LIGHT_CORRIDOR. 빈 면: 시계(눈금 12개, 숫자 없음), 휴대폰. 10:10이면 REGEN. E4 원본 · 앵커. **bubble space:** 말풍선 = 위 왼쪽 벽(x 4–36%, y 3–22%), 시계 면을 덮지 않는다 · 효과음 = 문 오른쪽 가장자리 옆 벽(x 78–96%, y 45–62%).

--- SCENE BREAK --- (S02b 복도 → S03 당직실)

### panel_008
- scene_id: S03 / location: LOC_L1_DUTYROOM / view: VIEW_C
- beat: P08 · ② · B06 떠넘김 1 · 긴장 4
- size: small / aspect: 1:1
- comp: COMP-HANDOVER (원본 → panel_032에서 반복)
- camera: eye-level, medium wide shot from the back of the room near the archive shelves
- composition: 화면 왼쪽~가운데 당직석 옆에 노미란(무릎 위, 머리 높이 약 42–52%), 꼿꼿이 서서 LEFT 손 검지에 열쇠 꾸러미를 걸어 흔든다(금색 시계가 보이게), 몸은 화면 오른쪽을 향함. 화면 오른쪽, 창구 벽 끝 출입문 문간에 서하(조금 작게, 머리 약 48–56%). 뒤로 유리 창구와 어두운 복도, 화면 왼쪽 끝 칸막이(수칙 종이는 아주 작게). 위쪽 약 40%는 천장 배관·형광등 기구와 유리 위쪽의 흐린 복도
- subject: 노미란(의상 A: 어깨에 걸친 검정 코트, 소매에 팔 없음, 표정 ① 입만 웃는 미소), 서하
- variable: 서하 = 입을 열다 만 불안한 얼굴(①)
- emotion: 블랙코미디 — 권력의 여유 vs 말을 삼킨 신입
- motion/direction: 노미란 → 서하(왼쪽→오른쪽 압박)
- dialogue_ref: ① 노미란 "강서하 주무관, 우리 오늘 당직 좀 바꿔 주자. 그치?" — dialogue, 꼬리 ↓ 노미란 · ② 노미란 "과장님도 다 그렇게 하셨어." — dialogue, 꼬리 ↓ 노미란
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 40
- fx/note: LIGHT_COMEDY(떨림 없음). 빈 면: 공무원증(노미란 허리의 뒤집힌 카드, 서하 목의 빈 카드). F-10① · F-09①. **bubble space:** 위쪽 약 40%(y 3–40%) = 천장·유리 위쪽. ① 위 왼쪽~가운데, ② 그 아래 왼쪽(둘 다 노미란 쪽). 032에서 같은 자리에 노미란 ① + 서하의 작은 말풍선.

### panel_009
- scene_id: S03 / location: LOC_L1_DUTYROOM / view: VIEW_DESK
- beat: P09 · ② · B06 명부 ≠ 열쇠 · 다리 단서 원본 · 긴장 4
- size: small / aspect: 1:1
- comp: COMP-DESK (원본 → panel_033에서 반복, panel_024 비네트의 원본)
- camera: high angle, wide shot looking down at the duty desk at an angle (앉는 쪽에서 창구 쪽으로)
- composition: 책상 상판이 화면 높이 약 40–100%를 채운다. 아래(앉는 쪽 가장자리): 앞 왼쪽 흰 거위목 스탠드, 앞 오른쪽 베이지 내선 전화. 오른쪽: 파란 바인더(명부, 빈 표지) 위에 검은 하드커버 일지 — **노미란의 손바닥이 바인더 위에 평평히 놓여 있다**(화면 오른쪽 가장자리에서 들어온 팔과 검정 코트 자락). 아래 가운데: 위로 받친 **서하의 두 손바닥에 열쇠 꾸러미가 떨어지는 중**, 그 위로 숙인 서하의 정수리(낮은 포니테일)가 아래 가장자리에 걸린다. 안쪽 가운데(약 42–55% 높이): 철제 서류함의 **낮은** 연노랑 영수증 묶음, 그 옆 누런 테이프 디스펜서, 작은 나무 상자의 직인 + 둥근 인주 케이스, 펜꽂이. 왼쪽 끝 칸막이와 작은 수칙 종이. 위쪽 약 40%는 책상 너머 유리 창구와 어두운 복도
- subject: 노미란의 손(명부 위), 서하의 손(열쇠), 책상 고정 배치 — 다른 두 손
- variable: 영수증 묶음 = 낮다 · 서하는 반사적으로 고개를 숙인다(정수리만 보임)
- emotion: 굴욕(2/3) — 손짓 하나로 넘겨지는 밤
- motion/direction: 오른쪽(명부 위 손) → 아래 가운데(열쇠가 떨어지는 손) — 다른 두 손의 대비
- dialogue_ref: ① 노미란 "명부엔 내 이름 있어. 수당도 내 앞으로. 알지?" — dialogue, 꼬리 ↘ 오른쪽 가장자리(그녀의 팔) · ② 서하 "…아, 네. 죄송합니다, 알겠습니다." — dialogue, 꼬리 ↓ 아래 가장자리(숙인 머리)
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DESK_plate.png
- gap_after: 40
- fx/note: LIGHT_COMEDY. 빈 면: **명부·일지·영수증·직인 상자**, 유리 상판 밑 빈 종이, 숫자 없는 내선 버튼. 빨강: 영수증마다 작은 붉은 원 + 인주 케이스의 붉은 인주만. F-48① · E3 원본 · F-16① · F-21① · F-46. **bubble space:** 위쪽 약 40%(y 3–40%) = 책상 너머 유리와 어두운 복도. ①은 폭 65% 이상(크메르어 긴 줄) 위 가운데~오른쪽, ②는 그 아래 왼쪽. 영수증 묶음(y 42–55%)은 띠 바로 아래에 보이게.

### panel_010
- scene_id: S03 / location: LOC_L1_DUTYROOM / view: VIEW_NAPDOOR (당직석 쪽에서)
- beat: P10 · ② · B06 떠넘김 3 · 퇴장 · 긴장 4
- size: medium / aspect: 3:4
- camera: eye-level medium shot, from beside the duty desk toward the left side wall
- composition: 화면 오른쪽 앞에 서하의 옆얼굴과 어깨(가장자리에 걸림, 시선이 왼쪽으로). 화면 왼쪽~가운데, 코트를 어깨에 걸친 노미란이 크림색 숙직실 문(작은 간유리 창, 놋쇠 손잡이)으로 걸어가며 어깨 너머로 돌아본다(머리 높이 약 40–50%). 문은 반쯤 열려 있다. 위쪽 약 38%는 옆벽 위쪽(회백)과 천장
- subject: 노미란(의상 A, 표정 ① 차가운 눈), 서하(옆얼굴, 시선이 문을 따라감)
- emotion: 경멸 섞인 여유 / 서하의 무력한 응시
- motion/direction: 서하의 시선(오른쪽 → 왼쪽)이 리딩 라인 → 닫히는 문
- dialogue_ref: ① 노미란 "신입은 사흘 못 버텨." · ② 노미란 "전임자도 사흘 만에 관뒀어." — 둘 다 dialogue, 꼬리 ↓ 노미란(어깨 너머)
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 120
- fx/note: LIGHT_COMEDY. F-08① · E11 원본 · F-10('그 시선', EP03 리플레이 원본 → 서하의 시선이 분명해야 한다). **bubble space:** 위쪽 약 38%(y 3–38%) = 옆벽 위쪽·천장. ① 위 왼쪽, ② 그 아래 가운데.

--- SCENE BREAK --- (S03 → S04 같은 당직실, 노미란 퇴장 직후 · 장소 불변)

### panel_011
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: VIEW_C
- beat: P11 · ② · B07 선임 등장(서프라이즈) · 긴장 5
- size: medium / aspect: 3:4
- camera: eye-level medium shot from the back of the room, angled toward the desk's right end
- composition: 화면 왼쪽 앞, 서가 사이 어둠에서 막 나온 선임(허리 위, 머리 높이 약 35–45%, 큰 체구가 화면 왼쪽 1/3을 채움)이 종이컵을 책상 모서리에 내려놓는다. 그 뒤 서가 앞에 거꾸로 놓인 접이식 의자. 화면 가운데~오른쪽, 초록 회전의자를 빼다 흠칫 굳은 서하(머리 약 45–55%). 뒤로 유리 창구와 어두운 복도. 위쪽 약 38%는 서가 윗단 어둠과 천장 배관
- subject: 선임(표정 ①), 서하(놀라 굳음), 종이컵(무지)
- emotion: 놀람 → 경계
- motion/direction: 선임의 손(컵) → 서하(왼쪽→오른쪽)
- dialogue_ref: ① 선임 "거긴 네 자리야. 난 안 앉아." · ② 선임 "마셔. 긴 밤이래." — 둘 다 dialogue, 꼬리 ↓ 선임
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 선임은 회전의자에 앉지 않는다. 종이컵은 로고·무늬 없음. F-07① · F-49①(컵은 이후 012·021에도 같은 자리, 손대지 않음). **bubble space:** 위쪽 약 38%(y 3–38%) = 서가 윗단 어둠·천장. ① 위 왼쪽, ② 그 아래 가운데.

### panel_012
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: SIDE_E
- beat: P12 · ② · B08 수칙 1 · 습관 단서 · 긴장 5
- size: medium / aspect: 3:4
- comp: COMP-READ (원본 → panel_035에서 반복)
- camera: eye-level medium shot across the room from the entrance-door end (SIDE_E)
- composition: 화면 왼쪽, 서가 앞 접이식 의자에 거꾸로 앉은 선임(허리 위, 머리 높이 약 40–50%)이 서하를 보며 외워 읊는다. 돋보기는 가슴께에 걸려 있다. 화면 오른쪽 앞, 당직석에 앉은 서하(머리 약 45–55%), 얼굴은 3/4. 화면 가운데 안쪽 배경에 칸막이(작은 수칙 종이)와 그 너머 크림색 숙직실 문. 화면 오른쪽 가장자리는 유리 창구 벽: 유리 너머 복도가 깊이로 물러나고, 복도 끝(약 42–50% 높이) 형광등 하나가 떨린다. 책상 모서리에 종이컵. 위쪽 약 40%는 천장 배관·형광등 기구·서가 윗단 어둠
- subject: 선임(외워 읊기, 종이를 보지 않음), 서하, 수칙 종이(작게), 숙직실 문(닫힘), 종이컵
- variable: 서하의 얼굴은 선임 쪽(화면 왼쪽), **입술이 반 박자 먼저 같은 말을 따라 움직인다**(말풍선 없음) · 선임 표정 ① · 종이컵은 책상 모서리, 손대지 않음 · 숙직실 문틈은 어둡다
- emotion: 단조로운 낭독 속 미세한 이상(독자만 아는 습관)
- motion/direction: 선임(왼쪽) → 서하의 입(오른쪽) → 오른쪽 가장자리 복도 끝 떨림
- dialogue_ref: ① 선임 "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다." · ② 선임 "돌려보내지 않는다." — 둘 다 dialogue, 꼬리 ↙ 선임
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 0
- fx/note: LIGHT_L1 + LIGHT_LAMP + LIGHT_FLICKER(위치: 유리 너머 복도 끝). 빈 면: 수칙 종이. 빨강: 4번 테이프만. F-07 · F-14① · 떨림 = 출현 경고. **bubble space:** 위쪽 약 40%(y 3–40%), x 4–80% = 천장·서가 윗단. ①은 폭 65% 이상(크메르어 긴 줄), ②는 그 아래 왼쪽. 복도 끝 떨림(오른쪽, y 42–50%)은 띠 밖.

### panel_013
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: SIDE_E (가깝게)
- beat: P13 · ③ 균열 · B09 수칙 2 → 첫 민원인 · 긴장 6
- size: medium / aspect: 3:4
- comp: COMP-BELL (원본 → panel_036에서 반복)
- camera: slightly low angle, medium shot from the entrance-door end, closer than SIDE_E
- composition: 화면 가운데 당직석의 서하(허리 위, 머리 높이 약 40–50%)가 고개를 화면 오른쪽 창구로 홱 돌린다. 화면 왼쪽 서가 앞, 거꾸로 앉은 선임(머리 약 38–48%)이 낭독하다 입이 열린 채 끊긴다. 화면 오른쪽, 유리 너머 바깥 선반의 놋쇠 돔 벨과 그것을 누른 역광의 손(약 55–65% 높이), 손 너머 어두운 복도. 위쪽 약 40%는 천장 배관과 서가 윗단 어둠, 유리 위쪽의 어두운 복도
- subject: 서하, 선임, 구정민(벨을 누른 역광의 손만), 놋쇠 벨
- variable: 서하의 두 손은 책상 위 · 벨은 마른 놋쇠
- emotion: 단절 — 일상이 벨 소리에 찢긴다
- motion/direction: 서하의 고개 돌림이 왼쪽(선임) → 오른쪽(벨)으로 시선을 끈다
- dialogue_ref: ① 선임 "2번. 당직자는 자기 이름을 말하지 않는다." · ② 선임 "3. 호출벨이 울리면—" — 둘 다 dialogue, 꼬리 ↙ 선임 · [효과음] 띵! — 벨 옆
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png
- gap_after: 120
- fx/note: LIGHT_L1 + LIGHT_LAMP, 유리 바깥은 역광. 칸막이·수칙 종이는 화면 가운데 안쪽에 아주 작게(빈 면). F-19 · F-10②. **bubble space:** 말풍선 = 위쪽 약 40%(y 3–40%), x 4–70% = 천장·서가 윗단(① 위 왼쪽, ② 그 아래 가운데) · 효과음 = 벨 바로 위 유리 너머 어두운 복도(x 72–96%, y 42–54%).

### panel_014
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: VIEW_A (복도 쪽에서)
- beat: P14 · ③ · B10 위협 진입 · 긴장 6
- size: medium / aspect: 3:4
- camera: eye-level, over-the-shoulder medium shot from the corridor side, behind the visitor
- composition: 화면 왼쪽 앞에 구정민의 상반신이 3/4 뒷모습 실루엣(머리 높이 약 38–50%), 따뜻하게 빛나는 유리 창구를 등지고 서서 비닐 파일을 가슴에 안고 정중히 고개를 숙인다 — 빛나는 유리에 대한 검은 실루엣이라 젖은 것이 보이지 않는다. 화면 오른쪽~가운데 유리 너머 당직석에서 서하가 카메라 쪽을 본다(작게, 머리 약 48–56%), 그 옆 스탠드와 칸막이(화면 오른쪽 = 그녀의 왼쪽). 앞쪽 바깥 선반에 놋쇠 벨, 말구멍, 투입구. 위쪽 약 38%는 유리 위쪽의 흐린 정상 반사와 어두운 복도 천장
- subject: 구정민(실루엣, 정중한 인사), 서하(유리 너머, 경직)
- emotion: 공손함 속의 불길함
- motion/direction: 실루엣(왼쪽 앞) → 유리 너머 서하(오른쪽 안쪽)
- dialogue_ref: ① 구정민 "늦은 시간에 죄송합니다." · ② 구정민 "사망신고를 취소하러 왔습니다." — 둘 다 dialogue, 꼬리 ↓ 구정민의 머리
- attach: refs/JEONGMIN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 40
- fx/note: 복도 = LIGHT_CORRIDOR(어두움), 창구 안 = LIGHT_L1 + LIGHT_LAMP. 유리 반사는 평범하게만. 빈 면: 서식(비닐 파일 속, 보이지 않음). F-12(숨김) · P36 반복 대사 원본. **bubble space:** 위쪽 약 38%(y 3–38%) = 유리 위쪽 흐린 반사·복도 천장. ① 위 왼쪽, ② 그 아래 가운데. 구정민의 머리는 띠 아래.

### panel_015
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: VIEW_A (유리 가까이)
- beat: P15 · ③ · B11 블랙코미디 밸브 · 접수 · 긴장 5
- size: medium / aspect: 3:4
- camera: eye-level frontal medium shot through the glass from the corridor side
- composition: 화면 가운데 당직석의 서하 정면(머리 높이 약 40–52%), 두 손으로 연회청색 빈 서식을 가슴 높이에 들고 들여다본다. 화면 오른쪽 아래 앞쪽 가장자리에 초점이 나간 구정민의 어두운 어깨 한 조각(젖은 것은 읽히지 않게 흐림). 그녀 뒤로 흐린 서가. 화면 오른쪽 = 그녀의 왼쪽 칸막이(작게). 위쪽 약 38%는 유리 위쪽의 흐린 정상 반사
- subject: 서하(공무원 무표정 ⑧), 사망신고 취소 서식(빈 칸 + 빈 직인 원, 비닐 없이)
- emotion: 블랙코미디 — 사무적인 확인이 섬뜩한 내용을 덮는다
- motion/direction: 정면 중앙, 시선은 서식으로 아래
- dialogue_ref: ① 서하 "신청인이… 사망자 본인이시네요." · ② 서하 "…본인 확인되셨네요." — 둘 다 dialogue, 꼬리 ↓ 서하
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/JEONGMIN_turnaround.png
- gap_after: 120
- fx/note: LIGHT_COMEDY(떨림 없음). 빈 면: **서식**(빈 칸·빈 원만, 가짜 글씨 금지). 빨강 없음. F-53①. **bubble space:** 위쪽 약 38%(y 3–38%) = 유리 위쪽 흐린 반사. ① 위 왼쪽, ② 그 아래 오른쪽. 얼굴은 띠 아래.

### panel_016
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: 창구 바깥(복도 쪽 바닥)
- beat: P16 · ③ · B12 어긋남 '발견' · 긴장 6
- size: large / aspect: 9:16
- camera: high-angle close-up outside the counter, looking down along the corridor floor
- composition: 위쪽(약 18–35% 높이) 화면 오른쪽에 바깥 선반의 놋쇠 벨, 그 위로 물방울 하나가 떨어지는 중. 화면 오른쪽 가장자리를 따라 물이 뚝뚝 떨어지는 젖은 카키 트렌치코트 자락과 젖은 검정 구두(몸·얼굴은 프레임 밖). 아래 절반: 마른 테라조 위에 번지는 작은 웅덩이, 거기서 화면 위 왼쪽으로 복도 끝 어둠까지 이어지는 젖은 발자국(원근으로 위쪽에서 작아짐). 위 왼쪽(x 4–55%, y 3–16%)은 발자국이 사라지는 복도 끝의 어둠
- subject: 구정민(코트 자락·구두만), 물방울, 웅덩이, 젖은 발자국, 놋쇠 벨
- emotion: 오싹한 발견 — 마른 밤에 젖은 사람
- motion/direction: 물방울 위→아래, 발자국 아래→위(어둠으로) — 시선이 고리처럼 돈다
- dialogue_ref: [효과음] 똑 — 벨 옆 (말풍선 없음)
- attach: refs/JEONGMIN_turnaround.png, refs/LOC_L2_CORRIDOR_plate.png
- gap_after: 240
- fx/note: LIGHT_CORRIDOR(복도 쪽), 젖은 것에만 차가운 물 하이라이트. 비·젖은 배경 금지(바닥은 웅덩이 밖에서 마름). F-12① · F-13 대비 · 웅덩이 타이머 시작. **bubble space:** 효과음 = 벨 왼쪽 옆 어두운 유리 아래쪽(x 30–58%, y 20–32%). 말풍선 없음.

### panel_017
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: VIEW_C
- beat: P17 · ③ · B13 4번 낭독 시작 · 긴장 6
- size: medium / aspect: 3:4
- camera: eye-level medium two-shot from beside the archive shelves
- composition: 화면 왼쪽 앞, 거꾸로 앉은 선임의 3/4 뒷모습(어깨·뒷머리, 머리 높이 약 40–50%)이 서하 쪽을 향해 읽는다. 화면 가운데, 당직석에서 몸을 반쯤 돌린 서하(머리 약 45–55%). 화면 가운데~오른쪽 유리 너머, 비닐 파일을 안고 기다리는 구정민(역광, 젖은 머리 윤곽만 번들거림), 바깥 선반 위 물기가 번져 있다. 화면 왼쪽 끝 칸막이·수칙 종이(작게). 위쪽 약 25%는 천장 배관과 유리 위쪽 어두운 복도
- subject: 선임(낭독), 서하(불안), 구정민(유리 너머 대기)
- emotion: 늘어지는 서스펜스 — 민원인을 세워 둔 채 읽는 규칙
- motion/direction: 선임(왼쪽 앞) → 서하(가운데) → 유리 너머 구정민(오른쪽 안쪽)
- dialogue_ref: 선임 "4번. 민원인이 담당자를 찾으면…" — dialogue, 꼬리 ↙ 선임
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 물: 016보다 조금 넓다 — 당직실 안에서는 카운터에 가려 바닥이 안 보이므로 **바깥 선반의 물기**로 보여 준다. 빈 면: 수칙 종이. 빨강: 4번 테이프만. F-01. **bubble space:** 위쪽 약 25%(y 3–25%), x 4–65% = 천장 배관. 구정민 머리는 띠 아래.

### panel_018
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: 서가 앞 클로즈업
- beat: P18 · ③ · B13 멈칫 · 긴장 7
- size: large / aspect: 9:16
- comp: COMP-PAUSE (원본 → panel_037에서 반복)
- camera: eye-level close-up, slightly to the senior man's left (화면 오른쪽에서 비스듬히)
- composition: 선임의 머리와 어깨가 화면 높이 약 35–80%, 화면 가운데에서 약간 왼쪽. 가슴께에 목줄에 걸린 검은 돋보기(쓰지 않음). 뒤로 어두운 서가 사이 어둠. 위쪽 약 30%는 서가 윗단의 어둠. 화면 오른쪽 가장자리 약 15%(x 85–100%)는 앞쪽의 흐린 여백
- subject: 선임(멈칫 ②: 말이 멈춘 채 반쯤 열린 입, 시선이 옆으로 비킴)
- variable: 화면 오른쪽 가장자리 앞쪽 여백 = 흐린 어둠뿐
- emotion: 무언가를 숨기는 침묵(레드 헤링)
- motion/direction: 그의 시선이 화면 왼쪽 아래로 비켜 나간다(서하를 피함)
- dialogue_ref: 없음 (silent)
- attach: refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png
- gap_after: 120
- fx/note: LIGHT_L1, 얼굴 아래 짧은 그림자. LEFT 눈썹 흉터. F-06①. **bubble space:** 없음(silent). 단 위쪽 약 30%(y 3–30%)는 037 반복 컷이 쓰므로 여기서도 서가 윗단 어둠으로 비워 둔다(침묵의 네거티브 스페이스).

### panel_019
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: 수칙 종이 클로즈업(VIEW_B 쪽)
- beat: P19 · ③ · B13 4번 조각 · 바랜 스티커 · 긴장 7
- size: medium / aspect: 3:4
- camera: eye-level close-up, straight on to the partition
- composition: 칸막이에 붙은 수칙 종이가 화면 높이 약 22–95%, 폭 약 10–90%. 7칸 빈 모눈. 위에서 4/7 지점(약 60% 높이)에 새하얀 4번 띠(자로 자른 가장자리, 폭 90%)와 위·아래 빨간 비닐테이프 두 줄. 종이 오른쪽 위 귀퉁이(x 72–86%, y 24–34%)에 바랜 스티커, 오른쪽 아래에 바랜 커피 반원. 왼쪽 가장자리는 제본에서 뜯긴 들쭉날쭉한 선, 네 귀퉁이에 누렇게 바랜 투명 테이프. 위쪽 약 20%는 칸막이 위쪽 회색 철판과 그 너머 흐린 어둠
- subject: 수칙 종이, 4번 조각, 바랜 스티커(PROP_RULESHEET)
- emotion: 차가운 응시 — 이 조각만 새것이다
- motion/direction: 위 왼쪽(목소리) → 가운데 흰 띠 → 오른쪽 위 바랜 스티커
- dialogue_ref: 선임(목소리) "…'제가 담당자입니다'라고 답한다." — dialogue, 꼬리 ← 왼쪽 가장자리(화면 밖 선임)
- attach: refs/PROP_PAGES_pair.png, refs/PROP_STICKERS_pair.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP(종이 아래쪽 반이 스탠드 빛에 따뜻함). 빈 면: **수칙 종이 전체**(가짜 글씨·번호·줄 긋기 생기면 REGEN). 빨강: 4번 테이프 두 줄만. F-01② · F-04②. **bubble space:** 위 왼쪽(x 4–68%, y 3–20%) = 칸막이 위쪽 회색 철판·흐린 어둠. 오른쪽 위 스티커(x 72–86%)는 띠 밖.

### panel_020
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: SIDE_E
- beat: P20 · ③ · B14 이중 의미 1 + 질문 · 긴장 7
- size: medium / aspect: 3:4
- camera: eye-level medium two-shot across the room (SIDE_E)
- composition: 화면 왼쪽, 거꾸로 앉은 선임(허리 위, 머리 약 40–50%), 무뚝뚝하게 앞을 본다. 화면 오른쪽, 회전의자를 그 쪽으로 돌려 몸을 기울인 서하(머리 약 45–55%), 매달리듯 묻는 얼굴. 배경 가운데 안쪽 칸막이와 닫힌 숙직실 문. 위쪽 약 40%는 천장 배관·형광등 기구·서가 윗단
- subject: 선임(표정 ①), 서하(불안 ①, 눈썹이 올라감)
- emotion: 불안 vs 무뚝뚝함
- motion/direction: 핑퐁 — 선임(왼쪽) 말 → 서하(오른쪽) 질문
- dialogue_ref: ① 선임 "수칙은 지키라고 있는 거지, 믿으라고 있는 게 아니야." — dialogue, 꼬리 ↙ 선임 · ② 서하 "선배님, 이 수칙… 누가 쓴 거예요?" — dialogue, 꼬리 ↘ 서하
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. F-05① · E8 원본. **bubble space:** 위쪽 약 40%(y 3–40%). ① 위 왼쪽(선임 위), ② 그 아래 오른쪽(서하 위).

### panel_021
- scene_id: S04 / location: LOC_L1_DUTYROOM / view: 서가 쪽 측면
- beat: P21 · ③ · B14 **에코 원본** · 긴장 7
- size: medium / aspect: 3:4
- comp: COMP-E1 (panel_055 비네트의 원본)
- camera: eye-level medium shot from the side, near the archive shelves
- composition: 화면 왼쪽~가운데 앞, 거꾸로 앉은 접이식 의자의 선임(옆모습 3/4, 머리 높이 약 35–48%), 두 팔뚝을 등받이에 얹고 큰 손에 종이컵, **서하가 아니라 컵 속을 내려다본다**. 화면 오른쪽 안쪽 배경에 당직석: 울리지 않는 베이지 내선 전화, 스탠드 빛, 작게 앉은 서하(머리 약 50–56%)가 그를 본다. 위쪽 약 28%는 서가 윗단 어둠·천장
- subject: 선임(표정 ① 피곤하고 읽을 수 없는 얼굴), 종이컵, 내선 전화(배경), 서하(작게)
- emotion: 무심한 전언 — 재독 시 섬뜩함
- motion/direction: 선임의 시선이 아래(컵)로, 독자의 시선은 그 너머 작은 서하로
- dialogue_ref: 선임 "그 수칙, 이 일 제일 오래 한 사람이 쓴 거래." — dialogue, 꼬리 ↙ 선임
- attach: refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png, refs/SEOHA_turnaround.png
- gap_after: 120
- fx/note: LIGHT_L1 + LIGHT_LAMP. 빈 면: 내선 전화(숫자 없는 버튼). F-03① · E1 원본 · E7 원본(첫 구절) · F-21 · F-07. 055 비네트가 이 컷 위 왼쪽 2/3(선임 + 컵)를 다시 보여 준다 → 선임과 컵이 선명해야 한다. **bubble space:** 위쪽 약 28%(y 3–28%), 폭 70% 이상 = 서가 윗단 어둠(크메르어 긴 줄, w 60% 이상).

--- SCENE BREAK --- (S04 → S05a 같은 당직실, 민원 대치 · 장소 불변)

## ④ 전제 반전 1 (S05a 당직실 → S05b 앵커 복도) — 유머 없음

### panel_022
- scene_id: S05a / location: LOC_L1_DUTYROOM / view: VIEW_B (어깨 너머, 넓게)
- beat: P22 · ④ 반전 1 · B15 판돈의 질문 + 결함 · 긴장 7
- size: medium / aspect: 3:4
- camera: eye-level, over-the-shoulder medium shot from behind her left shoulder
- composition: 화면 왼쪽 앞, 서하의 뒷머리와 왼쪽 볼(머리 약 45–58%), 고개를 반쯤 돌려 눈이 칸막이의 수칙 종이(화면 왼쪽 가장자리, 흰 4번 띠)에서 뒤쪽으로 미끄러진다. 화면 오른쪽 앞 가장자리에 초점 밖 선임의 슬레이트블루 어깨와 **돌린 옆얼굴**(그녀를 보지 않음). 가운데 유리 너머, 말구멍에 얼굴을 대고 묻는 구정민(머리 약 40–50%, 질문 ② 고개를 살짝 기울임), 젖은 머리, 투입구 아래 바깥 선반까지 번진 물. 위쪽 약 38%는 유리 너머 어두운 복도와 천장
- subject: 구정민(질문), 서하(망설임), 선임(외면, 흐림), 수칙 종이
- emotion: 압박 — 답을 강요하는 정중함, 외면하는 조력자
- motion/direction: 서하의 시선 수칙 종이(왼쪽) → 선임(오른쪽 앞) → 그가 외면 → 다시 가운데 구정민
- dialogue_ref: ① 구정민 "담당자분 계십니까? 직인이 필요합니다." — dialogue, 꼬리 ↓ 구정민 · ② 서하(생각) "(맨 위에 붙은 게… 최신 개정이니까.)" — thought, 꼬리 없음, 서하 쪽
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/SEONIM_turnaround.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 빈 면: 수칙 종이. 빨강: 4번 테이프만. E5 원본 · F-54① · F-06② · 미스디렉션(선임). **bubble space:** 위쪽 약 38%(y 3–38%) = 유리 너머 어두운 복도·천장. ① 위 오른쪽(구정민 위), ② 그 아래 왼쪽(서하 쪽, 구름형).

### panel_023
- scene_id: S05a / location: LOC_L1_DUTYROOM / view: VIEW_B
- beat: P23 · ④ · B16 치명적 선택 · 긴장 8
- size: medium / aspect: 3:4
- camera: eye-level, over-the-shoulder medium shot from behind the seated duty officer
- composition: 화면 왼쪽 가장자리, 서하 눈높이의 칸막이에 수칙 종이(흰 4번 띠 + 빨간 줄 두 개)가 프레임 안에 걸린다. 화면 아래 왼쪽~가운데 그녀의 뒷머리와 오른쪽 볼 가장자리, 말구멍 쪽으로 몸을 조금 숙인다. 가운데~오른쪽 유리 너머 구정민(머리 약 35–48%), 젖은 채 정중히. 앞 왼쪽 스탠드, 앞 오른쪽 내선 전화. 위 오른쪽 1/4은 구정민 머리 위 어두운 복도
- subject: 서하(뒷모습, 또박또박 답함), 구정민, 수칙 종이
- emotion: 서스펜스 폭발 — 규칙대로 하는 순간이 가장 위험하다
- motion/direction: 수칙 종이(왼쪽) → 그녀의 입 → 말구멍(가운데)
- dialogue_ref: 서하 "제가 담당자입니다." — dialogue, 꼬리 ↙ 그녀(뒷머리)
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/PROP_PAGES_pair.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 빈 면: 수칙 종이. 빨강: 4번 테이프만. E10 원본(style-bible §5-4 조립 예와 같은 컷). **bubble space:** 위 오른쪽 1/4(x 50–96%, y 3–25%) = 구정민 머리 위 어두운 복도.

### panel_024
- scene_id: S05a / location: LOC_L1_DUTYROOM / view: 유리 너머 클로즈업(당직석 쪽에서)
- beat: P24 · ④ · B17 새 정보 ⟨반전⟩ · 긴장 8
- size: large / aspect: 9:16 (style-bible 권장 3:4에서 변경 — 비네트 + 말풍선 2 + 얼굴)
- comp: 리플레이 비네트 ← panel_009 (§3-2)
- camera: eye-level close-up through the glass from the duty desk side
- composition: 아래 약 55%(y 45–100%)에 유리 너머 구정민의 얼굴과 어깨, 말구멍 옆, 고개를 살짝 기울임. 위 왼쪽(x 4–54%, y 16–40%)에 **기억 비네트**: panel_009의 크롭 — 파란 바인더 위에 평평히 놓인 노미란의 손바닥(검정 코트 자락), 채도 약 -40%, 3–4px 회백색 테두리와 얇은 그림자. 맨 위(y 3–15%)와 비네트 오른쪽(x 58–96%, y 16–42%)은 유리 너머 어두운 복도
- subject: 구정민(미소가 사라진 기다림 ④ — 가장 무섭게, 젖은 머리, 턱의 물방울), 비네트 속 노미란의 손 + 명부(빈 표지)
- emotion: 차가운 반전의 실마리 — 왜 틀렸는지가 같은 컷에 있다
- motion/direction: 위 말풍선 → 왼쪽 비네트(기억) → 아래 구정민의 빈 얼굴
- dialogue_ref: ① 구정민 "명부에 없는 분이 담당자라고요?" — dialogue, 꼬리 ↓ 구정민 · ② 노미란(기억) "명부엔 내 이름 있어." — memory, 비네트 아래 가장자리에 걸치게
- attach: _workspace/05_panels/ep01/panel_009.png, refs/JEONGMIN_turnaround.png, refs/JEONGMIN_expressions.png
- gap_after: 40
- fx/note: LIGHT_L1(유리에 스탠드 빛이 옅게 비침). 웃음 없음. 비네트만 그림 안 테두리 허용(Avoid 줄 조정, §3-2). 빈 면: 명부(비네트 속). F-48③ · E3 · 공정성③. **bubble space:** ① = 맨 위(x 20–96%, y 3–15%), 폭 60% 이상 · 비네트 = 위 왼쪽(x 4–54%, y 16–40%) · ② = 비네트 아래 가장자리(x 6–50%, y 36–44%). 비네트 오른쪽은 어두운 복도로 비움. 얼굴은 y 45% 아래.

### panel_025
- scene_id: S05a / location: LOC_L1_DUTYROOM / view: 서하 클로즈업
- beat: P25 · ④ · B18 정정 ① 떨림 · 긴장 8
- size: small / aspect: 1:1
- camera: slightly low-angle close-up of her face, the ceiling fixture above
- composition: 서하의 얼굴이 화면 높이 약 30–100%, 가운데. 바로 위 천장의 철망 형광등 기구(화면 위쪽 가운데, y 3–22%)가 떨리며 어두워진다. 형광등 양옆은 어두운 천장
- subject: 서하(공포로 굳음 ②), 떨리는 형광등
- emotion: 얼어붙은 공포
- motion/direction: 위(떨리는 빛) → 아래(굳은 얼굴)
- dialogue_ref: [효과음] 치직— — 떨리는 형광등 옆 (말풍선 없음)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- gap_after: 0
- fx/note: LIGHT_FLICKER(그녀 머리 바로 위). 다음 컷과 0 간격(암전으로 붙는다). 정정 문법 ①. **bubble space:** 효과음 = 형광등 기구 오른쪽 옆 어두운 천장(x 62–96%, y 4–24%). 얼굴은 y 30% 아래.

### panel_026
- scene_id: S05a / location: LOC_L1_DUTYROOM / view: 없음(완전한 어둠)
- beat: P26 · ④ · B18 정정 ② 어둠 · 긴장 8
- size: small / aspect: 1:1
- camera: —
- composition: 완전한 검정 한 장. 형체·실루엣·빛 없음
- subject: 없음
- emotion: 단절, 공백
- motion/direction: 없음
- dialogue_ref: 없음 (silent)
- attach: 없음
- gap_after: 240
- fx/note: LIGHT_BLACKOUT. 프롬프트: a completely black image, total darkness, no shapes, no silhouettes, no light. 뷰어 간격(#0e0e10)과 이어져 어둠이 길어진다. near-black이면 ACCEPT, 형체가 생기면 REGEN. **bubble space:** 없음(silent).

### panel_027
- scene_id: S05a / location: LOC_L1_DUTYROOM / view: VIEW_DESK 확장(위에서 창구 쪽으로)
- beat: P27 · ④ · B19 정정 ③ 빈자리 · **반전 직전 최대 정지** · 긴장 7
- size: full-bleed / aspect: 9:16
- camera: high angle, wide shot from behind and above the empty duty seat toward the glass
- composition: 아래(y 70–100%) 아무도 없는 초록 비닐 회전의자가 천천히 돈다(살짝 비스듬). 가운데(y 35–70%) 책상 상판: 굴러가는 볼펜, 반쯤 찍힌 붉은 반원이 있는 연회청 빈 서식, 스탠드, 내선 전화, 명부·일지, 칸막이의 작은 수칙 종이. 위(y 8–35%) 유리 너머 바깥 선반에 아무도 누르지 않았는데 혼자 떨리는 놋쇠 벨, 그 너머 빈 어두운 복도(사람 없음)
- subject: 빈 의자, 볼펜, 서식(붉은 반원), 혼자 떨리는 벨 — 사람 없음
- emotion: 빈자리의 공포(결과는 화면 밖)
- motion/direction: 아래(도는 의자) → 가운데(굴러가는 펜) → 위(떨리는 벨) — 시선이 거꾸로 올라가 멈춘다(정지점)
- dialogue_ref: 없음 (silent)
- attach: refs/LOC_L1_DESK_plate.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 720
- fx/note: 불이 돌아온 LIGHT_L1 + LIGHT_LAMP, 떨림 없음. 피·몸 금지. 빈 면: 서식(반원 안에 글자 없음). 빨강: 서식의 반쯤 찍힌 붉은 반원 + 수칙 종이 테이프(작게) + 인주 케이스. 정정 문법 ③. **bubble space:** 없음(silent). 720 간격 = 반전 1 직전의 최대 정지.

--- SCENE BREAK --- (S05a 당직실 → S05b 방화문 안쪽 복도, 22:00으로 되감김)

### panel_028
- scene_id: S05b / location: LOC_L2_CORRIDOR / view: VIEW_ANCHOR
- beat: P28 · ④ · B20 **반전 1 공개: 되감김(정점)** ⟨반전⟩ · 긴장 8
- size: full-bleed / aspect: 9:16
- comp: COMP-ANCHOR (반복 ← 원본 panel_007, 원본 PNG 첨부)
- camera: eye-level, frontal medium-long shot from the corridor facing the fire door
- composition: 화면 가운데 정면으로 선 서하(머리 높이 약 32–42%, 무릎 위까지). 등 뒤로 무거운 회색 방화문이 막 닫히는 중(문틀 약 20–98% 높이, 밀대가 보임). 문 위 가운데에 숫자 없는 흰 시계(약 6–16% 높이), **정확히 10시 정각**(짧은 시침 = 10시 방향, 긴 분침 = 똑바로 위). RIGHT 손으로 휴대폰을 RIGHT 귀에(화면 왼쪽), LEFT 어깨의 네이비 토트백(화면 오른쪽), 마른 옷. 양옆은 연녹 벽과 진녹 띠, 위로 노출 배관. 시계 왼쪽 위 벽(x 4–36%, y 3–22%)과 문 오른쪽 가장자리 옆 벽(x 78–96%, y 45–62%)은 비어 있다
- subject: 서하, 방화문, 복도 시계(10:00), 휴대폰(빈 화면)
- variable: 표정 = 공포로 굳음 ②(유일한 차이). 옷·머리·가방·휴대폰·시계·문의 각도는 007과 같다
- emotion: 충격 — 같은 그림, 다른 얼굴
- motion/direction: 정면 대칭, 시선이 시계 → 얼굴 → 닫히는 문
- dialogue_ref: [효과음] 쿵 — 문 오른쪽 가장자리 옆 (말풍선 없음, 007과 같은 자리)
- attach: _workspace/05_panels/ep01/panel_007.png, refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- gap_after: 120
- fx/note: LIGHT_CORRIDOR(007과 같게). 시계가 10:00이 아니거나 007과 다르면 REGEN(반전 1). 반전 1 · 앵커 회수. **bubble space:** 효과음 = 문 오른쪽 가장자리 옆 벽(x 78–96%, y 45–62%). 위 왼쪽 벽(x 4–36%, y 3–22%)은 007과 같이 비어 있지만 말풍선은 없다.

### panel_029
- scene_id: S05b / location: LOC_L2_CORRIDOR / view: 방화문 앞 미디엄
- beat: P29 · ④ · B21 대가 ① 기억나는 말 · 긴장 8
- size: small / aspect: 1:1
- camera: slightly high angle, medium shot
- composition: 화면 왼쪽~가운데, 고개를 숙여 두 손에 든 빈 화면 휴대폰을 내려다보는 서하(머리 약 25–45%, 휴대폰은 약 60–72% 높이 가운데). 뒤로 회색 방화문 일부와 연녹 벽. 위 오른쪽 1/4은 연녹 벽 위쪽과 노출 배관
- subject: 서하(상실 ③), 휴대폰(빈 화면), 토트백
- emotion: 멍한 상실
- motion/direction: 그녀의 시선 아래로 → 휴대폰
- dialogue_ref: 지호(기억) "누나, 버텨!" — memory, 휴대폰 위쪽(꼬리 없이 흐리게)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_CORRIDOR_plate.png
- gap_after: 40
- fx/note: LIGHT_CORRIDOR. 빈 면: 휴대폰 화면(꺼진 검정). E4 회수. **bubble space:** 위 오른쪽 1/4(x 52–96%, y 3–30%) = 연녹 벽 위쪽·배관. 기억 말풍선은 휴대폰 쪽으로 기울게.

### panel_030
- scene_id: S05b / location: LOC_L2_CORRIDOR / view: 클로즈업
- beat: P30 · ④ · B21 대가 ② 사라진 약속 · 긴장 8
- size: small / aspect: 1:1
- camera: eye-level close-up
- composition: 서하의 얼굴이 화면 왼쪽~가운데(높이 약 28–80%), 초점 없는 눈. 화면 오른쪽 아래, 휴대폰을 쥔 손이 천천히 내려가 프레임 아래로 빠져나가는 중. 위쪽 약 25%는 흐린 연녹 벽
- subject: 서하(상실 ③, 더 깊게), 내려가는 휴대폰
- emotion: 이해하지 못한 상실 — 무엇을 잃었는지조차 모른다
- motion/direction: 손이 오른쪽 아래로 떨어진다(다음 480 간격으로)
- dialogue_ref: 서하 "…우리, 무슨 약속 했더라?" — dialogue, 꼬리 ↓ 서하
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- gap_after: 480
- fx/note: LIGHT_CORRIDOR. 빈 면: 휴대폰. 지호의 이름은 말하지 않는다(대본). F-11② · 더블탭. **bubble space:** 위쪽 약 25%(y 3–25%) = 흐린 연녹 벽.

--- SCENE BREAK --- (S05b → S06a 같은 복도, 방향 반대 · 루프 2 시작)

## ⑤ 바닥·결심 (S06a 복도 → S06b 당직실) — 반복의 공포

### panel_031
- scene_id: S06a / location: LOC_L2_CORRIDOR / view: VIEW_LONG
- beat: P31 · ⑤ 반복 · B22 결심 · 긴장 6
- size: large / aspect: 9:16
- camera: eye-level long shot from behind her, near the fire door, looking down the corridor
- composition: 아래 1/3, 화면 가운데에서 약간 왼쪽에 걸어가는 서하의 등(낮은 포니테일, 토트백), 고개를 살짝 돌려 결연한 옆얼굴이 보인다(머리 약 62–70%). 복도가 화면 위 가운데 소실점으로 길게 뻗는다: 오른쪽 벽 가운데쯤 따뜻하게 빛나는 당직실 창구(유일한 온기), 맞은편 왼쪽 벽에 붙은 파란 대기 의자 셋, 하나 걸러 켜진 천장 형광등, 끝 1/3은 어둠. 위쪽 약 18%는 천장 배관·케이블 트레이
- subject: 서하(결연 ④, 옆얼굴), 빛나는 창구(목적지)
- emotion: 두려움을 누른 결심
- motion/direction: 리딩 라인 = 복도 원근, 아래(그녀) → 위(창구·어둠)
- dialogue_ref: 서하(생각) "(하나. 울지 않는다. 둘. 마지막 줄까지 읽는다.)" — thought, 꼬리 없음
- attach: refs/SEOHA_turnaround.png, refs/LOC_L2_CORRIDOR_plate.png
- gap_after: 120
- fx/note: LIGHT_CORRIDOR. 철문 명판은 빈칸, 소화전함은 회색(빨강 금지). 안내판 없음. 번호 매기기 습관(반전 2 보조 근거). **bubble space:** 위쪽 약 18%(y 3–18%) = 천장 배관·케이블 트레이(구름형 말풍선, 2줄).

--- SCENE BREAK --- (S06a 복도 → S06b 당직실)

### panel_032
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: VIEW_C
- beat: P32 · ⑤ · B23 유머 숨 고르기 ① · 긴장 5
- size: small / aspect: 1:1
- comp: COMP-HANDOVER (반복 ← 원본 panel_008, 원본 PNG 첨부)
- camera: eye-level, medium wide shot from the back of the room near the archive shelves
- composition: 화면 왼쪽~가운데 당직석 옆에 노미란(무릎 위, 머리 높이 약 42–52%), 꼿꼿이 서서 LEFT 손 검지에 열쇠 꾸러미를 걸어 흔든다(금색 시계가 보이게), 몸은 화면 오른쪽을 향함. 화면 오른쪽, 창구 벽 끝 출입문 문간에 서하(조금 작게, 머리 약 48–56%). 뒤로 유리 창구와 어두운 복도, 화면 왼쪽 끝 칸막이(수칙 종이는 아주 작게). 위쪽 약 40%는 천장 배관·형광등 기구와 유리 위쪽의 흐린 복도
- subject: 노미란(의상 A: 어깨에 걸친 검정 코트, 소매에 팔 없음, 표정 ① 입만 웃는 미소), 서하
- variable: 서하 = 무표정 ⑧, 노미란과 **동시에** 입 모양 "그치?"(입이 작게 열림)
- emotion: 블랙코미디 — 이미 다 아는 대사
- motion/direction: 노미란 → 서하(왼쪽→오른쪽 압박) / 서하가 같은 박자로 되받음
- dialogue_ref: ① 노미란 "강서하 주무관, 우리 오늘 당직 좀 바꿔 주자. 그치?" — dialogue, 꼬리 ↓ 노미란 · ② 서하(작게, 동시에) "그치?" — 작은 dialogue, ① 끝에 겹치게, 꼬리 ↘ 서하
- attach: _workspace/05_panels/ep01/panel_008.png, refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png
- gap_after: 0
- fx/note: LIGHT_COMEDY. 빈 면: 공무원증. 반복(P8 첫 말풍선과 KM 동일). **bubble space:** 위쪽 약 40%(y 3–40%) = 천장·유리 위쪽(008과 같은 자리). ① 위 왼쪽~가운데, ②는 ①의 오른쪽 끝에 겹치는 작은 말풍선(x 70–92%, y 22–34%).

### panel_033
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: VIEW_DESK
- beat: P33 · ⑤ · B23 유머 ② + 다리 단서 묻기 · 긴장 5
- size: small / aspect: 1:1
- comp: COMP-DESK (반복 ← 원본 panel_009, 원본 PNG 첨부)
- camera: high angle, wide shot looking down at the duty desk at an angle (앉는 쪽에서 창구 쪽으로)
- composition: 책상 상판이 화면 높이 약 40–100%를 채운다. 아래(앉는 쪽 가장자리): 앞 왼쪽 흰 거위목 스탠드, 앞 오른쪽 베이지 내선 전화. 오른쪽: 파란 바인더(명부, 빈 표지) 위에 검은 하드커버 일지 — **노미란의 손바닥이 바인더 위에 평평히 놓여 있다**(화면 오른쪽 가장자리에서 들어온 팔과 검정 코트 자락). 아래 가운데: 위로 받친 **서하의 두 손바닥에 열쇠 꾸러미가 떨어지는 중**, 그 위로 숙인 서하의 정수리(낮은 포니테일)가 아래 가장자리에 걸린다. 안쪽 가운데(약 42–55% 높이): 철제 서류함의 **낮은** 연노랑 영수증 묶음, 그 옆 누런 테이프 디스펜서, 작은 나무 상자의 직인 + 둥근 인주 케이스, 펜꽂이. 왼쪽 끝 칸막이와 작은 수칙 종이. 위쪽 약 40%는 책상 너머 유리 창구와 어두운 복도
- subject: 노미란의 손(명부 위), 서하의 손(열쇠), 책상 고정 배치 — 다른 두 손
- variable: 영수증 묶음이 009보다 **조금** 높다(셀 수 없게, 한눈에 "조금"만) · 서하는 고개를 숙이지 않는다 — 아래 가장자리에 무표정 ⑧의 얼굴 윗부분이 들려 보이고, 눈이 서류함을 한 번 스친다
- emotion: 무표정한 블랙코미디 + 독자만 아는 이상(묶음 높이)
- motion/direction: 오른쪽(명부 위 손) → 아래 가운데(열쇠) → 서하의 눈 → 서류함
- dialogue_ref: ① 노미란 "신입은 사흘—" — dialogue, 꼬리 ↘ 오른쪽 가장자리 · ② 서하(무표정) "…못 버티죠." — dialogue, 꼬리 ↓ 아래 가장자리
- attach: _workspace/05_panels/ep01/panel_009.png, refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png
- gap_after: 0
- fx/note: LIGHT_COMEDY. 빈 면: **명부·일지·영수증·직인 상자**. 빨강: 영수증의 작은 붉은 원 + 인주만. F-16②(높이만, 장수 금지) · E11 변주. **bubble space:** 위쪽 약 40%(y 3–40%) = 책상 너머 유리·복도(009와 같은 자리). ① 위 오른쪽, ② 그 아래 왼쪽. 영수증 묶음(y 42–55%)은 띠 바로 아래.

### panel_034
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: SIDE_E
- beat: P34 · ⑤ · B24 커피 링 + 루프 2에만 있는 소리 · 긴장 6
- size: medium / aspect: 3:4
- camera: eye-level medium shot across the room (SIDE_E), a little closer to the desk
- composition: 화면 왼쪽 가운데, 책상 모서리 옆에 선 선임(허리 위, 머리 약 38–48%)이 종이컵을 내민다, 등 뒤 서가 사이 어두운 틈(화면 왼쪽, y 45–75%)을 돌아보지 않는다. 화면 오른쪽 앞, 당직석의 서하(머리 약 45–55%)가 받은 컵을 책상 위 **펼친 수첩의 오른쪽 아래 귀퉁이**에 내려놓는다(수첩은 화면 오른쪽 아래, y 75–92%). 배경 가운데 안쪽: 닫힌 크림색 숙직실 문, **문 아래 틈에 가는 불빛**. 위쪽 약 40%는 천장 배관·서가 윗단
- subject: 선임(표정 ①, 돌아보지 않음), 서하(침착), 종이컵, 펼친 수첩(빈 모눈), 숙직실 문틈 불빛, 서가 사이 어둠
- emotion: 일상적 동작 아래 깔린 이상한 소리
- motion/direction: 선임의 컵(왼쪽) → 서하의 손 → 수첩 귀퉁이(오른쪽 아래) / 소리는 왼쪽 어둠에서
- dialogue_ref: ① 선임 "마셔. 긴 밤이래." — dialogue, 꼬리 ↙ 선임 · [효과음] 부스럭 — 서가 사이 어둠 · ② 선임(돌아보지 않고) "…쥐래." — dialogue, 꼬리 ↙ 선임
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/PROP_PAGES_pair.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 빈 면: 수첩 낱장(빈 모눈). 커피 링은 갈색. F-49② · F-50①. **bubble space:** 말풍선 = 위쪽 약 40%(y 3–40%), ① 위 왼쪽, ② 위 가운데~오른쪽 · 효과음 = 화면 왼쪽 서가 사이 어두운 틈(x 4–22%, y 48–70%).

### panel_035
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: SIDE_E
- beat: P35 · ⑤ · B25 함께 읊기 · 목표 응시 · 긴장 6
- size: medium / aspect: 3:4
- comp: COMP-READ (반복 ← 원본 panel_012, 원본 PNG 첨부)
- camera: eye-level medium shot across the room from the entrance-door end (SIDE_E)
- composition: 화면 왼쪽, 서가 앞 접이식 의자에 거꾸로 앉은 선임(허리 위, 머리 높이 약 40–50%)이 서하를 보며 외워 읊는다. 돋보기는 가슴께에 걸려 있다. 화면 오른쪽 앞, 당직석에 앉은 서하(머리 약 45–55%), 얼굴은 3/4. 화면 가운데 안쪽 배경에 칸막이(작은 수칙 종이)와 그 너머 크림색 숙직실 문. 화면 오른쪽 가장자리는 유리 창구 벽: 유리 너머 복도가 깊이로 물러나고, 복도 끝(약 42–50% 높이) 형광등 하나가 떨린다. 책상 모서리에 종이컵. 위쪽 약 40%는 천장 배관·형광등 기구·서가 윗단 어둠
- subject: 선임(외워 읊기, 종이를 보지 않음), 서하, 수칙 종이(작게), 숙직실 문(닫힘), 종이컵
- variable: 서하도 담담히 함께 읊는다(입이 열림), **눈은 선임이 아니라 배경 가운데의 닫힌 숙직실 문에 박혀 있다** · 숙직실 문 아래 틈에 가는 불빛(034와 같음) · 선임 표정 ④ 의심 섞인 실눈 · 종이컵은 책상 모서리가 아니라 펼친 수첩 위(034에서 내려놓은 자리)
- emotion: 담담한 반복 + 목표 설정(숙직실 문)
- motion/direction: 선임(왼쪽) → 서하의 눈 → 배경 가운데 숙직실 문 → 오른쪽 가장자리 복도 끝 떨림
- dialogue_ref: 선임·서하(함께) "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다." — dialogue 1개, 꼬리 둘(↙ 선임, ↘ 서하) 또는 letterer 판단
- attach: _workspace/05_panels/ep01/panel_012.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- gap_after: 0
- fx/note: LIGHT_L1 + LIGHT_LAMP + LIGHT_FLICKER(유리 너머 복도 끝). 빈 면: 수칙 종이. 빨강: 4번 테이프만. F-14②. **bubble space:** 위쪽 약 40%(y 3–40%), x 4–80% = 천장·서가 윗단(012와 같은 자리). 말풍선 폭 65% 이상(크메르어 긴 줄).

### panel_036
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: SIDE_E (가깝게)
- beat: P36 · ⑤ · B25 같은 벨, 같은 첫 대사 · 긴장 7
- size: medium / aspect: 3:4
- comp: COMP-BELL (반복 ← 원본 panel_013, 원본 PNG 첨부)
- camera: slightly low angle, medium shot from the entrance-door end, closer than SIDE_E
- composition: 화면 가운데 당직석의 서하(허리 위, 머리 높이 약 40–50%)가 고개를 화면 오른쪽 창구로 홱 돌린다. 화면 왼쪽 서가 앞, 거꾸로 앉은 선임(머리 약 38–48%)이 낭독하다 입이 열린 채 끊긴다. 화면 오른쪽, 유리 너머 바깥 선반의 놋쇠 돔 벨과 그것을 누른 역광의 손(약 55–65% 높이), 손 너머 어두운 복도. 위쪽 약 40%는 천장 배관과 서가 윗단 어둠, 유리 위쪽의 어두운 복도
- subject: 서하, 선임, 구정민(벨을 누른 역광의 손만), 놋쇠 벨
- variable: 벨 돔 위에 물방울이 맺혀 있다 · 서하의 오른손이 이미 투입구로 뻗어 연회청 빈 서식을 받고 있다(벨이 울리기도 전에)
- emotion: 기시감의 공포 — 그녀만 한 박자 빠르다
- motion/direction: 서하의 고개 돌림과 뻗은 손이 오른쪽(벨·투입구)으로 시선을 끈다
- dialogue_ref: ① 선임 "3. 호출벨이—" — dialogue, 꼬리 ↙ 선임 · [효과음] 띵 — 벨 옆 · ② 구정민 "늦은 시간에 죄송합니다." — dialogue, 꼬리 ↘ 유리 너머(화면 오른쪽)
- attach: _workspace/05_panels/ep01/panel_013.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 빈 면: 서식. ECHO(P13 효과음·P14 첫 말풍선과 KM 동일) · F-12. **bubble space:** 말풍선 = 위쪽 약 40%(y 3–40%), ① 위 왼쪽, ② 위 오른쪽(x 50–96%) · 효과음 = 벨 바로 위 유리 너머 어두운 복도(x 72–96%, y 42–54%, 013과 같은 자리).

### panel_037
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: 서가 앞 클로즈업
- beat: P37 · ⑤ · B25 같은 멈칫 + 의심 고정 · 긴장 7
- size: large / aspect: 9:16
- comp: COMP-PAUSE (반복 ← 원본 panel_018, 원본 PNG 첨부)
- camera: eye-level close-up, slightly to the senior man's left (화면 오른쪽에서 비스듬히)
- composition: 선임의 머리와 어깨가 화면 높이 약 35–80%, 화면 가운데에서 약간 왼쪽. 가슴께에 목줄에 걸린 검은 돋보기(쓰지 않음). 뒤로 어두운 서가 사이 어둠. 위쪽 약 30%는 서가 윗단의 어둠. 화면 오른쪽 가장자리 약 15%(x 85–100%)는 앞쪽의 흐린 여백
- subject: 선임(멈칫 ②: 말이 멈춘 채 반쯤 열린 입, 시선이 옆으로 비킴)
- variable: 화면 오른쪽 가장자리 앞쪽 여백에 **초점 밖 서하의 옆얼굴 일부**(낮은 포니테일, 머스터드 어깨)가 걸려 그를 지켜본다
- emotion: 의심이 확신으로 굳는다(미스디렉션 고정)
- motion/direction: 그의 시선은 왼쪽 아래로 비키고, 오른쪽 가장자리의 그녀가 그것을 본다
- dialogue_ref: ① 선임 "4번." — dialogue, 꼬리 ↓ 선임 · ② 서하(생각) "(저 사람… 알고 있어.)" — thought, 꼬리 없음, 오른쪽(그녀 쪽)
- attach: _workspace/05_panels/ep01/panel_018.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- gap_after: 40
- fx/note: LIGHT_L1. F-06③. **bubble space:** 위쪽 약 30%(y 3–30%) = 서가 윗단 어둠(018과 같은 자리). ① 위 왼쪽(작게), ② 그 아래 오른쪽(구름형).

### panel_038
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: VIEW_B
- beat: P38 · ⑤ · B26 콜드오픈 도달 · 첫 "아니요" · 긴장 7
- size: medium / aspect: 3:4
- comp: COMP-COLD-1 (반복 ← 원본 panel_001, 원본 PNG 첨부)
- camera: eye-level, over-the-shoulder medium shot (서하의 오른쪽 어깨 뒤에서 창구 쪽으로)
- composition: 화면 아래 오른쪽 1/3에 앉은 서하의 뒷머리(낮은 포니테일)와 오른쪽 어깨·오른쪽 볼 가장자리. 화면 왼쪽 가장자리에 낮은 회색 칸막이와 수칙 종이(흰 4번 띠 + 짧은 빨간 테이프 두 줄, 오른쪽 위 색 점만 한 바랜 스티커), 높이 약 45–60%. 앞 왼쪽 스탠드의 노란 원이 책상과 그녀의 어깨에. 가운데 유리 너머 복도에 역광 실루엣(구정민)이 말구멍 앞에 서 있다(머리 높이 약 30–40%). 위쪽 약 25%는 유리 너머 어두운 복도 천장
- subject: 서하(뒷모습, 얼굴은 보이지 않음), 구정민(역광 실루엣, 젖은 것은 그림자에 묻힘), 수칙 종이(작게)
- variable: 없음(001과 같은 순간)
- emotion: 낮고 평평한 결심 — 이번에는 독자가 이유를 안다
- motion/direction: 시선 아래 오른쪽(그녀) → 위 가운데(실루엣) → 왼쪽 가장자리(수칙 종이)
- dialogue_ref: 서하 "수칙 4번은 지키지 않겠습니다." — dialogue, 꼬리 ↘ 그녀의 뒷머리
- attach: _workspace/05_panels/ep01/panel_001.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png
- gap_after: 120
- fx/note: LIGHT_L1 + LIGHT_LAMP, 역광. 빈 면: 수칙 종이. 빨강: 4번 테이프만. E6 회수(P1과 KM 동일). **bubble space:** 위쪽 약 25%, 가운데~오른쪽(x 30–95%, y 3–25%) = 실루엣 머리 위 어두운 복도 천장(001과 같은 자리).

### panel_039
- scene_id: S06b / location: LOC_L1_DUTYROOM / view: 서가 쪽(서하 자리에서 방 안쪽)
- beat: P39 · ⑤ · B26 **미니 클리프(61%)** · 긴장 8
- size: small / aspect: 1:1
- comp: COMP-COLD-2 (반복 ← 원본 panel_002, 원본 PNG 첨부)
- camera: eye-level slightly below, medium close-up (당직석 쪽에서 방 안쪽 서가를 봄)
- composition: 화면 가운데 아래, 거꾸로 앉은 접이식 의자 등받이 위로 선임이 상체를 앞으로 확 내민다(머리 높이 약 32–62%), 굵은 두 팔뚝이 등받이에, 가슴께에 목줄에 걸린 검은 돋보기. 뒤로 회색 서가와 그 사이 어둠. 위쪽 약 25%는 서가 윗단의 어둠
- subject: 선임(경악 ③: 늘 반쯤 감겨 있던 눈이 크게 열림)
- variable: 없음(002와 같은 순간)
- emotion: 놀람 + 경고 — 이번엔 독자가 다음을 모른다
- motion/direction: 앞으로 내민 몸이 화면(서하) 쪽으로 다가온다
- dialogue_ref: 선임 "너 미쳤어?" — dialogue, 꼬리 ↓ 그의 입
- attach: _workspace/05_panels/ep01/panel_002.png, refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png
- gap_after: 480
- fx/note: LIGHT_L1. E6 회수(P2와 KM 동일). **bubble space:** 위쪽 약 25%(y 3–25%) 가운데 = 서가 윗단의 어둠(002와 같은 자리).

--- SCENE BREAK --- (S06b → S07 같은 당직실, 같은 밤 계속 · 장소 불변)

## ⑥ 첫 반격 (S07 · 당직실)

### panel_040
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: VIEW_B (와이드)
- beat: P40 · ⑥ 반격 · B27 그녀를 죽인 질문 · 긴장 8
- size: large / aspect: 9:16
- comp: COMP-COLD-3 (반복 ← 원본 panel_003, 원본 PNG 첨부)
- camera: eye-level, wide shot from behind the seated duty officer (VIEW_B를 뒤로 뺌)
- composition: 화면 아래 1/3 앞쪽에 앉은 서하의 뒷모습(낮은 포니테일, 머스터드 카디건 등, 네이비 목줄), 왼쪽 아래 구석에 칸막이의 수칙 종이(흰 4번 띠가 구석에 걸림), 앞 왼쪽 스탠드. 가운데 높이(약 35–60%) 유리 너머 실루엣이 말구멍 쪽으로 천천히 상체를 숙인다(얼굴은 역광 어둠). 위쪽 약 20%는 유리 너머 어두운 복도 위쪽과 방 천장의 배관
- subject: 서하(뒷모습), 구정민(숙이는 역광 실루엣), 수칙 종이(구석, 작게)
- variable: 실루엣의 얼굴 윤곽이 003보다 조금 더 보인다(젖은 머리의 번들거림 정도)
- emotion: 같은 질문이 다시 온다 — 이번엔 답이 있다
- motion/direction: 실루엣이 위에서 아래로(말구멍 쪽으로) 숙여 들어온다 → 시선이 아래 서하에게 떨어진다
- dialogue_ref: 구정민 "담당자분 계십니까? 직인이 필요합니다." — dialogue, 꼬리 ↓ 실루엣
- attach: _workspace/05_panels/ep01/panel_003.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP, 역광. 빈 면: 수칙 종이. 빨강: 4번 테이프만. E5 회수(P22와 KM 동일). **bubble space:** 위쪽 약 20%(y 3–20%) = 유리 너머 어두운 복도 위쪽·천장 배관(003에서 비워 둔 자리).

### panel_041
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: VIEW_A (복도 쪽에서)
- beat: P41 · ⑥ · B27 사실 기록으로 답하기 · 긴장 8
- size: medium / aspect: 3:4
- camera: eye-level medium shot from the corridor side, past the visitor's shoulder
- composition: 화면 가운데(y 35–72%) 유리에 바짝 댄 **펼친 파란 명부**(빈 칸 표가 카메라 쪽을 향함), 그 뒤 서하의 결연한 얼굴이 명부 위로 보이고(머리 약 28–40%, 가운데에서 약간 오른쪽), 그녀의 손가락이 빈 칸 하나를 짚는다. 그녀 머리 위 천장 형광등(화면 위 오른쪽, x 55–90%, y 3–10%)은 **흔들림 없이 고르게** 켜져 있다. 화면 왼쪽 아래 앞쪽 가장자리에 초점 밖 구정민의 젖은 어깨. 위 왼쪽(x 4–55%, y 3–36%)은 유리 위쪽의 흐린 반사와 어두운 방 천장
- subject: 서하(결연 ④), 명부(펼침, 빈 칸 표), 고른 형광등, 구정민(흐린 어깨)
- emotion: 단단한 반격 — 불이 떨리지 않는다(안도)
- motion/direction: 위 오른쪽(고른 불) → 그녀의 눈 → 손가락 → 빈 칸
- dialogue_ref: ① 서하 "담당자는 당직 명부에 계신 분입니다." · ② 서하 "…노미란 팀장님." — 둘 다 dialogue, 꼬리 ↘ 서하
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/JEONGMIN_turnaround.png
- gap_after: 120
- fx/note: LIGHT_L1 + LIGHT_LAMP + LIGHT_STEADY(그녀 머리 위, 이 컷의 신호). 빈 면: **명부**(빈 칸 표, 이름·글자 금지). E3 회수 · E9 원본 · F-52①. **bubble space:** 위 왼쪽(x 4–55%, y 3–36%) = 유리 위쪽 흐린 반사·어두운 천장. ① 위, ② 그 아래. 고른 형광등(위 오른쪽)은 띠 밖.

### panel_042
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: VIEW_C (왼쪽 앞 구석 쪽)
- beat: P42 · ⑥ · B28 빈 유리 · 노크 · 긴장 8
- size: large / aspect: 9:16
- camera: eye-level wide shot from the back corner by the shelves, toward the front-left corner of the room
- composition: 위 오른쪽(y 10–45%) 텅 빈 유리 창구, 유리 너머 아무도 없는 어두운 복도, 바깥 선반엔 물기만 남았다. 화면 왼쪽(y 30–90%) 옆벽의 닫힌 크림색 숙직실 문(문 아래 틈에 불빛). 그 사이 칸막이와 작은 수칙 종이. 서하는 프레임 밖(화면 오른쪽 가장자리에 초록 회전의자 등받이 끝만). 문 오른쪽 옆 벽(x 40–62%, y 45–62%)은 비어 있다
- subject: 빈 유리, 물기, 닫힌 숙직실 문 — 사람 없음
- emotion: 서프라이즈 — 사라진 민원인, 엉뚱한 문에서 들리는 소리
- motion/direction: 위 오른쪽(빈 유리) → 왼쪽(숙직실 문, 소리)
- dialogue_ref: [효과음] 똑. 똑. 똑. — 숙직실 문 옆 (말풍선 없음, 노크하는 존재는 그리지 않는다)
- attach: refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 120
- fx/note: LIGHT_L1 + LIGHT_LAMP(오른쪽 가장자리에서 새는 스탠드 빛). 빈 면: 수칙 종이. 빨강: 4번 테이프만(작게). 노크하는 형체·손 금지. **bubble space:** 효과음 = 숙직실 문 오른쪽 옆 벽(x 40–62%, y 45–62%).

### panel_043
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: VIEW_NAPDOOR (열림)
- beat: P43 · ⑥ · B29 해방형 유머 · 긴장 7
- size: medium / aspect: 3:4
- camera: eye-level medium shot from the duty desk toward the nap-room door
- composition: 화면 가운데 열린 크림색 숙직실 문틀에 튀어나온 노미란(허리 위~무릎, 머리 약 32–44%), 회색 담요를 망토처럼 움켜쥐고, 비뚤어진 금테 안경, 한쪽이 눌린 단발. 문 앞(그녀 발치)은 비어 있다. 문틀 너머 좁은 방: 낮은 나무 평상 모서리와 회색 담요, 작은 전기난로의 주황 빛(화면 아래 오른쪽 문틀 안). 위쪽 약 22%는 문틀 위쪽 옆벽(회백)
- subject: 노미란(의상 B, 경악 ④)
- emotion: 해방형 유머 — 권력의 실루엣이 담요로 무너진다
- motion/direction: 문틀(프레임 인 프레임) 정면 중앙
- dialogue_ref: 노미란 "뭐, 뭐예요 이게?!" — dialogue(외침 여부는 letterer 판단), 꼬리 ↓ 노미란
- attach: refs/MIRAN_outfitB.png, refs/MIRAN_expressions.png
- gap_after: 40
- fx/note: LIGHT_L1 + 숙직실 난로빛(주황, 빨강으로 번지지 않게). 빨강 없음. 코트 → 담요 실루엣 몰락. **bubble space:** 위쪽 약 22%(y 3–22%) = 문틀 위 옆벽.

### panel_044
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: VIEW_C
- beat: P44 · ⑥ · B30 요구가 담당자에게 닿는다 · 긴장 8
- size: medium / aspect: 3:4
- camera: eye-level medium wide shot from the back of the room
- composition: 화면 왼쪽~가운데, 책상 왼쪽 끝(칸막이 옆)에 선 담요 차림의 노미란(머리 약 38–48%)이 귀찮은 얼굴로 책상 위 직인 상자로 손을 뻗는다. 화면 오른쪽, 책상 옆에 선 서하(머리 약 42–52%)가 지켜본다. 가운데 유리 너머 다시 유리 앞에 선 구정민(머리 약 30–40%)이 노미란을 향해 허리를 숙인다, 머리에서 물이 떨어진다. 위쪽 약 22%는 유리 위쪽 어두운 복도·천장
- subject: 구정민(정중한 인사 ③), 노미란(의상 B, 귀찮음 ②), 서하
- emotion: 위험을 모르는 귀찮음 — 판돈이 테이블에 오른다
- motion/direction: 구정민의 인사(가운데 안쪽) → 노미란의 손(왼쪽) → 직인 상자
- dialogue_ref: 구정민 "담당자분이시군요. 직인 부탁드립니다." — dialogue, 꼬리 ↓ 유리 너머 구정민
- attach: refs/MIRAN_outfitB.png, refs/JEONGMIN_turnaround.png, refs/SEOHA_turnaround.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 구정민은 유리를 넘지 않는다. 빈 면: 서식(책상 위, 비닐 없이). 빨강: 인주 케이스 + 4번 테이프(작게). 법칙⑤ 판돈. **bubble space:** 위쪽 약 22%(y 3–22%), 가운데 = 구정민 머리 위 어두운 복도.

### panel_045
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: 책상 클로즈업
- beat: P45 · ⑥ · B30 직인 카운트다운 + 판돈 공개 · 긴장 8
- size: large / aspect: 9:16
- camera: eye-level close-up from the side of the desk, vertical framing
- composition: 위쪽 가운데(y 20–42%) 노미란의 손(아이보리 실크 소매를 걷어 올림)이 인주 묻은 나무 직인을 든 채 멈춰 있다. 아래(y 72–96%) 책상 위 연회청 빈 서식, 오른쪽 아래의 빈 직인 원. 직인 끝과 서식 사이에 큰 빈 거리(y 42–72%, 흐린 책상 너머 어둠). 서식을 누르는 그녀의 다른 손 LEFT 손목에 금색 시계. 위쪽 약 16%는 흐린 어둠
- subject: 직인(끝이 붉게 젖음), 서식, 노미란의 손(의상 B)
- emotion: 숨 막히는 카운트다운
- motion/direction: 위(직인) ↓ 아래(서식) — 빈 거리가 긴장
- dialogue_ref: 선임(목소리) "찍으면… 그 칸, 찍은 사람이 채운대." — dialogue, 꼬리 → 오른쪽 가장자리(화면 밖 선임)
- attach: refs/MIRAN_outfitB.png, refs/LOC_L1_DESK_plate.png
- gap_after: 120
- fx/note: LIGHT_L1 + LIGHT_LAMP. 빈 면: **서식**(빈 원, 글자 금지). 빨강: 직인 끝의 인주만. 반지 금지. F-55①. **bubble space:** 위쪽 약 16%(y 3–16%) = 흐린 어둠. 직인·손은 띠 아래.

### panel_046
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: 손 클로즈업
- beat: P46 · ⑥ · B31 전환점: 절차로 멈춘다 · 긴장 8
- size: insert / aspect: 1:1
- camera: eye-level close-up of hands
- composition: 화면 가운데(y 30–70%) 서하의 작은 손(카디건 소매가 반쯤 덮음)이 직인을 든 노미란의 손목을 잡는다. 직인은 아래 서식에서 한 뼘 위(서식 가장자리가 아래 y 82–100%에 걸림). 위쪽 약 25%는 흐린 어두운 배경
- subject: 서하의 손, 노미란의 손목(아이보리 실크 소매)과 직인
- emotion: 단호한 정지
- motion/direction: 서하의 손이 오른쪽에서 들어와 손목을 막는다(왼쪽 아래로 내려가던 동작이 멈춤)
- dialogue_ref: 서하 "서류 보완 요청드리겠습니다." — dialogue, 꼬리 ↘ 오른쪽(서하 쪽)
- attach: refs/SEOHA_turnaround.png, refs/MIRAN_outfitB.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 빈 면: 서식. 빨강: 직인 끝 인주만. 두 사람 다 반지 없음. **bubble space:** 위쪽 약 25%(y 3–25%) = 흐린 어둠.

### panel_047
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: 책상 옆 투샷
- beat: P47 · ⑥ · B32 절차가 자백을 요구한다 · 긴장 7
- size: medium / aspect: 3:4
- camera: eye-level medium two-shot
- composition: 화면 왼쪽 서하(허리 위, 머리 약 42–52%), 침착한 절차 모드 얼굴, 여전히 노미란의 손목을 잡고 있다. 화면 오른쪽 노미란(더 크게, 머리 약 36–46%), 담요가 흘러내리고 억지 침착의 떨리는 미소. 둘 사이 아래에 잡힌 손목과 직인. 뒤로 흐린 서가. 위쪽 약 38%는 서가 윗단 어둠·천장
- subject: 서하(결연 ④보다 차분한 행정 얼굴), 노미란(의상 B, 억지 침착 ⑥)
- emotion: 역전된 권력 — 존대가 무너진다
- motion/direction: 핑퐁 — 서하(왼쪽) → 노미란(오른쪽)
- dialogue_ref: ① 서하 "보완 요청엔 담당자 서명이나 위임 기록이 필요합니다." — dialogue, 꼬리 ↙ 서하 · ② 노미란 "그, 그럼… 서하 씨가 처리하시면…" — dialogue, 꼬리 ↘ 노미란
- attach: refs/SEOHA_turnaround.png, refs/MIRAN_outfitB.png, refs/MIRAN_expressions.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 서하 160cm · 노미란 170cm 키 차이 유지. 빨강: 직인 끝 인주만. 법칙② 위임 기록. **bubble space:** 위쪽 약 38%(y 3–38%). ① 위 왼쪽(서하 위), ② 그 아래 오른쪽(노미란 위).

### panel_048
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: 당직석 측면
- beat: P48 · ⑥ · B32 자백 · 긴장 7
- size: medium / aspect: 3:4
- camera: eye-level medium shot from the side of the duty desk
- composition: 화면 가운데, 당직석 위로 몸을 숙인 노미란(머리 약 38–48%): **RIGHT 손바닥을 책상 유리 상판에 평평히 짚고**, 검은 하드커버 일지에 펜으로 쓴다 — 쓰는 손과 펜이 펼친 면을 가려 글씨가 보이지 않는 각도. 화면 왼쪽 가장자리에 칸막이(초점 밖, 수칙 종이는 흐린 형태만), 그녀는 그쪽을 보지 않는다. 화면 오른쪽, 한 걸음 물러선 서하(머리 약 42–52%)가 지켜본다. 위쪽 약 38%는 유리 창구 위쪽 어두운 복도·천장
- subject: 노미란(의상 B, 굴욕 ⑤), 일지(펼침, 빈 줄), 서하(지켜봄)
- emotion: 굴욕의 자백
- motion/direction: 쓰는 손의 리듬(왼쪽→오른쪽), 노미란의 시선은 일지에만
- dialogue_ref: ① 노미란(쓰며 소리 내어) "…야간 당직 업무를… 신규 강서하에게…" · ② 노미란(쓰며 소리 내어) "…무단으로…" — 둘 다 dialogue, 꼬리 ↓ 노미란, 쓰는 리듬대로 끊어 배치
- attach: refs/MIRAN_outfitB.png, refs/MIRAN_expressions.png, refs/SEOHA_turnaround.png
- gap_after: 40
- fx/note: LIGHT_L1 + LIGHT_LAMP. 손 배치는 beatsheet·character-sheets 문장 그대로(의미는 봉인, 해석해 바꾸지 않는다). 빈 면: **일지**(빈 줄, 손·펜이 가림, 글씨가 보이면 REGEN). 수칙 종이를 보거나 만지지 않는다. F-22① · F-23① · F-10③. **bubble space:** 위쪽 약 38%(y 3–38%) = 유리 위쪽 어두운 복도·천장. ① 위 왼쪽, ② 그 아래 가운데~오른쪽(쓰는 손 방향으로 이어지게).

### panel_049
- scene_id: S07 / location: LOC_L1_DUTYROOM / view: 서하 정면(유리를 등짐)
- beat: P49 · ⑥ · B33 **인용 대사 · 사이다 정점** · 긴장 7
- size: medium / aspect: 3:4
- camera: eye-level frontal medium shot from where Mi-ran stands (노미란 시점)
- composition: 화면 가운데 스탠드 빛 속의 서하 정면(가슴 위, 머리 약 40–55%), 유리 창구를 등지고 똑바로 카메라(노미란)를 본다. 뒤 유리 너머 작게(화면 오른쪽, y 40–56%) 구정민이 흰 보완 요청서를 가슴에 안고 고개를 숙인 뒤 복도 끝 어둠으로 돌아간다. 위쪽 약 38%는 유리 너머 어두운 복도와 천장
- subject: 서하(결연 ④), 구정민(작게, 돌아감), 보완 요청서(흰 종이 + 붉은 원)
- emotion: 통쾌함 — 차분하고 정확한 반격
- motion/direction: 정면 중앙 응시, 배경의 구정민은 오른쪽 안쪽 어둠으로 빠진다
- dialogue_ref: ① 서하 "떠넘기신 건 돌려드리는 겁니다." · ② 서하 "원래 주인한테." — 둘 다 dialogue, 꼬리 ↓ 서하, ②는 한 박자 뒤 짧게
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/JEONGMIN_turnaround.png
- gap_after: 240
- fx/note: LIGHT_L1 + LIGHT_LAMP(얼굴은 따뜻한 스탠드 빛). 빈 면: 보완 요청서(글자 없는 붉은 원 하나). 빨강: 요청서의 원만. E12 원본 · F-12. **bubble space:** 위쪽 약 38%(y 3–38%) = 유리 너머 어두운 복도·천장. ①은 폭 65% 이상(크메르어 긴 줄) 위, ②는 그 아래 오른쪽 작게. 구정민(y 40–56%)은 띠 아래.

--- SCENE BREAK --- (S07 → S08 같은 당직실, 노미란 퇴장 후 · 장소 불변, 조명 LIGHT_REVEAL로)

## ⑦ 반전 2 (S08 · 당직실) — 유머 없음, 떨림 없음

### panel_050
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: VIEW_C
- beat: P50 · ⑦ 반전 2 · B34 밸브 + 의문 + 선임 퇴장 · 긴장 6
- size: medium / aspect: 3:4
- camera: eye-level wide shot from the back of the room near the shelves
- composition: 화면 왼쪽 아래 앞쪽에 **빈 접이식 의자**(거꾸로 놓임, 방금 일어선 자리). 화면 오른쪽 가운데, 전기 포트를 든 선임(머리 약 34–44%)이 출입문(창구 벽 오른쪽 끝) 쪽으로 걸어가며 어깨 너머로 말한다. 화면 가운데, 당직석에 다시 앉아 숨을 내쉬는 서하(머리 약 46–54%), 스탠드의 노란 원, 책상 위 펼친 수첩에 새 커피 링(작은 갈색 원). 화면 왼쪽 벽의 닫힌 숙직실 문(문틈 어둠). 위쪽 약 38%는 천장 배관·서가 가장자리 어둠
- subject: 서하(대답하지 못함, 지친 얼굴), 선임(표정 ①, 포트), 빈 접이식 의자, 펼친 수첩(새 링)
- emotion: 숨 고르기 속에 남는 질문 — 그리고 혼자 남는다
- motion/direction: 선임이 오른쪽 문으로 빠진다 → 빈 의자(왼쪽 앞)가 남는다
- dialogue_ref: ① 선임 "첫날인데 수칙 순서를 어떻게 알아?" · ② 선임 "물 받아 올게. 앉아 있어." — 둘 다 dialogue, 꼬리 ↘ 선임
- attach: refs/SEOHA_turnaround.png, refs/SEONIM_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- gap_after: 120
- fx/note: LIGHT_REVEAL(떨림 없음, 스탠드 원 밖은 차분한 푸른 그림자). 빈 면: 수첩. 커피 링은 갈색. 웃음 없음. F-14③ · F-07② · 선임 부재. **bubble space:** 위쪽 약 38%(y 3–38%) = 천장·서가 윗단. ① 위 가운데, ② 그 아래 오른쪽(선임 쪽).

### panel_051
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: 수칙 종이 + 그녀의 옆얼굴
- beat: P51 · ⑦ · B35 시선이 바랜 스티커로 · 긴장 7
- size: large / aspect: 9:16
- camera: eye-level close-up past her right cheek toward the partition (그녀 오른쪽 뒤에서)
- composition: 위 2/3(y 8–68%)에 칸막이의 수칙 종이가 초점 안: 오른쪽 위 귀퉁이의 **바랜 스티커가 스탠드 빛 속에서 가장 또렷**하고(y 12–24%), 4번 흰 띠와 빨간 두 줄은 그 아래. 아래 오른쪽 앞(y 62–100%)에 초점 밖 서하의 옆얼굴과 어깨, 시선이 위 왼쪽 종이로 올라간다
- subject: 바랜 스티커(처음으로 컷의 주인공), 수칙 종이, 서하(흐린 옆얼굴)
- emotion: 무언가 눈에 걸린다 — 정적
- motion/direction: 아래 오른쪽(그녀의 눈) → 위(바랜 스티커)
- dialogue_ref: 없음 (silent)
- attach: refs/PROP_STICKERS_pair.png, refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png
- gap_after: 120
- fx/note: LIGHT_REVEAL. 빈 면: **수칙 종이**. 빨강: 4번 테이프만. 스티커 큰 귀 = 고양이 자신의 LEFT 귀(화면 오른쪽). F-04③ 시작. **bubble space:** 없음(silent).

### panel_052
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: 당직석 클로즈업
- beat: P52 · ⑦ · B36 새 스티커 · 떨리는 손 · 공개 1컷 전 · 긴장 8
- size: large / aspect: 9:16
- comp: COMP-STICKER (반복 ← 원본 panel_005, 원본 PNG 첨부)
- camera: eye-level close-up on the notebook cover, slightly from above
- composition: 서하의 LEFT 손이 아래에서 수첩(먼지 낀 네이비 리넨 표지, 흰 실 제본)을 비스듬히 받쳐 들고, 그 엄지가 표지 오른쪽 위의 스티커를 쓰다듬는다. 카디건 소매가 손등을 반쯤 덮는다. 수첩은 화면 높이 약 30–92%, 스티커는 약 40–55% 높이로 가운데보다 약간 오른쪽, 엄지는 스티커의 왼쪽 가장자리에. 위쪽 약 30%는 흐린 배경
- subject: 새 달냥이 스티커(황금빛 주황 고양이가 레몬색 초승달 위에 잠듦, 청록 원, 흰 별 셋, 고양이 자신의 LEFT 귀 = 화면 오른쪽 귀가 눈에 띄게 큼, 선명·광택), 서하의 LEFT 손
- variable: 배경 = 흐린 스탠드의 따뜻한 노란 빛과 어두운 책상(L1) · **손이 떨린다**(엄지가 스티커 위에서 멈칫, 가는 떨림 표현)
- emotion: 불길한 예감 — 같은 손짓, 다른 떨림
- motion/direction: 엄지가 스티커의 큰 귀에 멈춘다
- dialogue_ref: 지호(기억) "떼지 마. 세상에 하나뿐이야." — memory, 꼬리 없음
- attach: _workspace/05_panels/ep01/panel_005.png, refs/PROP_STICKERS_pair.png, refs/SEOHA_turnaround.png
- gap_after: 480
- fx/note: LIGHT_REVEAL. 빈 면: 수첩 표지. E2 회수 · F-47②. 480 = 공개 1컷 전 정지. **bubble space:** 위쪽 약 30%(y 3–30%) = 흐린 따뜻한 배경(005와 같은 자리). 기억 말풍선 1개, 위 가운데.

### panel_053
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: 익스트림 클로즈업 2분할
- beat: P53 · ⑦ · B37 **반전 2 시각 공개(정점)** ⟨반전⟩ · 긴장 9
- size: full-bleed / aspect: 9:16 (그림 안 2분할 — 이 회차의 유일한 칸 나누기 예외)
- camera: extreme close-up, straight on, identical scale and angle for both halves
- composition: 9:16 한 장을 가는 검은 가로 띠(약 y 49–51%)로 위아래 둘로 나눈다. 위(y 0–49%): 먼지 낀 네이비 리넨 위의 **새** 스티커, 가운데(중심 y 약 24%), 지름 약 폭의 55%. 아래(y 51–100%): 누렇게 바랜 모눈 종이 위의 **바랜** 스티커, 가운데(중심 y 약 76%), 같은 크기·같은 각도. 두 스티커는 **같은 그림**: 정면 고양이, **고양이 자신의 LEFT 귀(화면 오른쪽)가 크다**, 레몬 초승달, 청록 원, 흰 별 셋. 스티커 위아래 둘레에 바탕(리넨/모눈)의 여백
- subject: 새 스티커(선명·광택) ↔ 바랜 스티커(연크림·볏짚·잿빛 민트, 누런 테두리, 들뜬 가장자리)
- emotion: 소름 — 세상에 하나뿐인 것이 둘
- motion/direction: 위 → 아래, 두 큰 귀가 같은 자리에 겹쳐 읽힌다
- dialogue_ref: 서하(작게) "세상에 하나뿐인데… 두 개야." — 아주 작은 dialogue, 경계 띠 위, 꼬리 없음 또는 아래 가장자리로(화면 밖 그녀)
- attach: refs/PROP_STICKERS_pair.png
- gap_after: 120
- fx/note: LIGHT_REVEAL(두 반쪽 모두 같은 따뜻한 스탠드 빛). 빨강 없음(주황은 황금빛). 큰 귀가 반대쪽이거나 두 그림이 다르면 REGEN(필수). 대안(2분할이 안 되면): 1:1 한 컷, 그녀가 수첩 표지를 칸막이의 수칙 종이 바로 옆에 대어 두 스티커가 나란히(style-bible §4-2-4). E2 · F-02③ · F-04③ · F-47③. **bubble space:** 경계 띠 가운데(x 30–70%, y 45–55%) — 스티커 가장자리(위 스티커 아래끝 약 y 40%, 아래 스티커 위끝 약 y 60%) 사이의 바탕 여백. 말풍선 폭 40% 이하.

### panel_054
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: 칸막이 클로즈업
- beat: P54 · ⑦ · B38 사물 증거 사슬 · 긴장 8
- size: medium / aspect: 3:4
- camera: eye-level close-up, straight on to the partition
- composition: 화면 왼쪽 반(x 4–50%, y 22–90%)에 칸막이의 수칙 종이, 오른쪽 반(x 50–96%, y 24–88%)에 떨리는 서하의 손이 뜯어낸 수첩 낱장을 그 옆에 바짝 댄다. 둘 다 같은 모눈·같은 크림색(왼쪽만 누렇게), **두 장의 왼쪽 가장자리 모두 제본에서 뜯긴 들쭉날쭉한 선**, 두 장 모두 **오른쪽 아래 귀퉁이에 커피 링**(왼쪽 = 바랜 반원, 오른쪽 = 새 갈색 원). 아래 가장자리(y 88–100%) 책상 위 테이프 디스펜서에서 한 뼘 당겨 나온 누런 투명 테이프. 위쪽 약 20%는 칸막이 위쪽 회색 철판과 어둠
- subject: 수칙 종이, 수첩 낱장, 떨리는 손, 누런 테이프
- emotion: 차가운 확인 — 증거가 하나씩 겹친다
- motion/direction: 왼쪽 종이 ↔ 오른쪽 낱장(같은 높이 대조), 아래 테이프로 내려감
- dialogue_ref: 서하(생각) "(이 책상만… 안 돌아가.)" — thought, 꼬리 없음
- attach: refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DESK_plate.png
- gap_after: 40
- fx/note: LIGHT_REVEAL. 빈 면: **수칙 종이·수첩 낱장**(모눈뿐). 빨강: 4번 테이프만. 커피 링은 갈색. F-49③ · F-16③. **bubble space:** 위쪽 약 20%(y 3–20%) = 칸막이 위 철판·어둠(구름형, 가운데).

### panel_055
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: 스탠드 빛 속 얼굴 + 기억 비네트
- beat: P55 · ⑦ · B39 **반전 2 대사 공개(정점)** ⟨반전⟩ · 긴장 9
- size: full-bleed / aspect: 9:16 (style-bible 권장 3:4에서 변경 — 비네트 + 넓은 말풍선 2 + 얼굴)
- comp: 리플레이 비네트 ← panel_021 (§3-2)
- camera: eye-level close-up of her face in the lamp light, with a framed memory vignette above
- composition: 아래 약 50%(y 50–100%)에 스탠드의 따뜻한 빛 속 서하의 얼굴(정면에서 약간 3/4), 차가운 그림자 속 방. 위 왼쪽(x 4–58%, y 3–27%)에 **기억 비네트**: panel_021의 크롭 — 거꾸로 앉은 접이식 의자의 선임이 종이컵 속을 내려다보는 모습, 채도 약 -40%, 3–4px 회백색 테두리와 얇은 그림자. 나머지 위 절반(비네트 오른쪽과 아래, y 27–48%)은 차분한 푸른 그림자의 어두운 서가
- subject: 서하(깨달음, 표정 ⑥이 터지기 직전: 크게 뜬 눈, 굳은 입), 비네트 속 선임 + 종이컵
- emotion: 대사의 정점 — 말이 사실이 되는 순간
- motion/direction: 위 왼쪽 비네트(기억) → 기억 말풍선 → 그녀의 말풍선 → 아래 얼굴
- dialogue_ref: ① 선임(기억) "그 수칙, 이 일 제일 오래 한 사람이 쓴 거래." — memory, 비네트 바로 아래 · ② 서하 "이 일 제일 오래 한 사람… 나였어." — dialogue, 천천히, 꼬리 ↓ 서하
- attach: _workspace/05_panels/ep01/panel_021.png, refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- gap_after: 120
- fx/note: LIGHT_REVEAL. 웃음 없음. 비네트만 그림 안 테두리 허용(Avoid 줄 조정, §3-2). E1 회수(인셋 = P21과 KM 동일) · F-03③ · F-14③. **bubble space:** 비네트 = 위 왼쪽(x 4–58%, y 3–27%) · ① = 비네트 바로 아래(x 4–72%, y 28–37%), 폭 65% 이상(크메르어 긴 줄) · ② = 그 아래(x 20–90%, y 38–48%), 폭 60% 이상. 얼굴은 y 50% 아래.

### panel_056
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: 익스트림 클로즈업
- beat: P56 · ⑦ · B40 경악 침묵 · 긴장 9
- size: insert / aspect: 1:1
- camera: extreme close-up of her eyes and the hand over her mouth
- composition: 화면 가득 서하의 눈(위 절반)과 입을 가린 손(아래 절반, 카디건 소매), 흔들리는 동공. 스탠드 빛이 얼굴 한쪽만
- subject: 서하(소름 깨달음 ⑥)
- emotion: 말이 끊긴 공포
- motion/direction: 정지
- dialogue_ref: 없음 (silent)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- gap_after: 720
- fx/note: LIGHT_REVEAL. RIGHT 눈 밑 점(정면에서 화면 왼쪽) 보이게. **bubble space:** 없음(silent). 720 = 깨달음의 여파.

### panel_057
- scene_id: S08 / location: LOC_L1_DUTYROOM / view: 수칙 종이 클로즈업
- beat: P57 · ⑦ · B41 동기 암시 + 질문 이월 · 긴장 9
- size: medium / aspect: 3:4
- camera: eye-level close-up on the rules sheet, slightly from her side
- composition: 수칙 종이가 화면 높이 약 34–100%(종이 위쪽 가장자리 y 34%), 가운데에서 약간 왼쪽. 서하의 검지 끝이 1번·2번 칸(위쪽 빈 모눈)을 지나 내려와 **새하얀 4번 띠 위에서 멈춘** 순간(y 약 66%). 그녀의 다른 손이 수첩 낱장을 종이 오른쪽 옆에 대고 있다(같은 모눈, 4번 자리에는 흰 띠가 없음). 종이 오른쪽 위 바랜 스티커는 y 36–44%. 위쪽 약 34%는 칸막이 위 철판과 어두운 배경
- subject: 서하의 손끝, 수칙 종이(4번 띠), 수첩 낱장
- emotion: 슬픈 이해 → 남은 질문
- motion/direction: 위(1·2번 칸) → 아래(4번 띠)로 짚어 내려온 손끝이 멈춘다
- dialogue_ref: ① 서하(생각) "(살리려고… 남긴 거야. 나한테.)" — thought, 꼬리 없음 · ② 서하(속삭임) "그러면… 4번은?" — 작은 dialogue, 꼬리 ↓ 아래(그녀)
- attach: refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png
- gap_after: 240
- fx/note: LIGHT_REVEAL. 빈 면: **수칙 종이·수첩 낱장**. 빨강: 4번 테이프만. 아래 테이프 끝 들림은 선택(와이드 아님, 작게 보여도 됨). F-01 진척. **bubble space:** 위쪽 약 34%(y 3–33%), 위 왼쪽~가운데(x 4–70%) = 칸막이 위 철판·어둠. ① 위, ② 그 아래 작게. 바랜 스티커(오른쪽, y 36–44%)는 띠 밖.

--- SCENE BREAK --- (S08 → S09 같은 당직실, 같은 순간 이어짐 · 조명 LIGHT_REVEAL → LIGHT_CLIFF)

## ⑧ 클리프행어 (S09 · 당직실) — 감속 4단, 유머 없음

### panel_058
- scene_id: S09 / location: LOC_L1_DUTYROOM / view: 4번 조각 익스트림 클로즈업
- beat: P58 · ⑧ 클리프 · B42 마지막 정적 · 긴장 8
- size: large / aspect: 9:16 (세로로 긴 좁은 컷)
- camera: extreme close-up, straight on
- composition: 화면 가운데 높이(y 40–60%)를 가로지르는 새하얀 4번 띠(자로 자른 가장자리), 위·아래 가장자리를 따라 광택 있는 빨간 비닐테이프 두 줄. 띠의 오른쪽 끝 부분을 크게: **아래 테이프 줄의 오른쪽 끝이 살짝 들려 말려 있고 그 밑에 가는 그림자**(화면 오른쪽, y 58–62%). 위·아래로 누런 모눈 종이(빈칸)가 이어진다
- subject: 4번 조각, 들린 테이프 끝(PROP_RULE4_PATCH + PROP_TAPE_LIFT)
- emotion: 숨죽인 정적 — 누군가 최근에 손댄 흔적
- motion/direction: 가로 띠 → 오른쪽 끝의 들림
- dialogue_ref: 없음 (silent)
- attach: refs/PROP_PAGES_pair.png
- gap_after: 120
- fx/note: LIGHT_REVEAL. 빈 면: **수칙 종이·흰 띠**. 빨강: 테이프 두 줄 = 화면의 유일한 빨강. F-01 · F-51①. **bubble space:** 없음(silent).

### panel_059
- scene_id: S09 / location: LOC_L1_DUTYROOM / view: 눈 띠
- beat: P59 · ⑧ · B43 소리 기척 · 긴장 9
- size: band / aspect: 16:9 (Flow에 없으면 1:1, 눈은 가운데)
- camera: extreme close-up, eye band
- composition: 화면 왼쪽~가운데 2/3(x 4–66%)에 스탠드 빛 속 서하의 두 눈(가로 띠), 크게 뜨고 굳는다. 오른쪽 1/3(x 68–100%)은 그녀 뒤쪽의 깊은 그림자(아무것도 없음)
- subject: 서하의 눈(공포로 굳음 ②의 눈)
- emotion: 등 뒤의 기척
- motion/direction: 눈동자가 오른쪽(뒤쪽)으로 미세하게 쏠린다
- dialogue_ref: [효과음] 찌이익— — 오른쪽 가장자리(화면 뒤쪽)에서 들어옴 (말풍선 없음)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- gap_after: 240
- fx/note: LIGHT_REVEAL. RIGHT 눈 밑 점(화면 왼쪽 눈 아래). **bubble space:** 효과음 = 오른쪽 1/3 그림자(x 68–96%, y 15–85%).

### panel_060
- scene_id: S09 / location: LOC_L1_DUTYROOM / view: 칸막이·스탠드 원
- beat: P60 · ⑧ · B44 그림자 · 긴장 9
- size: large / aspect: 9:16
- camera: eye-level medium close-up over her shoulder toward the partition
- composition: 위 2/3에 칸막이의 수칙 종이와 그 위를 비추던 스탠드의 따뜻한 원. 그 원 위로 **등 뒤에서 드리운 두 번째 사람의 그림자**가 겹쳐 원을 깬다(형체 없는 어두운 덩어리, 사람 윤곽이 읽히지 않게). 아래 1/3 앞쪽에 서하의 어깨와 뒷머리 일부(굳음). 유리 창구는 프레임 밖
- subject: 수칙 종이, 깨진 스탠드 원, 두 번째 그림자
- emotion: 침범 — 온기가 깨진다
- motion/direction: 그림자가 오른쪽 위에서 왼쪽 아래로 덮어 온다
- dialogue_ref: 없음 (silent)
- attach: refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png
- gap_after: 240
- fx/note: LIGHT_CLIFF. 그림자에 손·얼굴·형체가 생기면 REGEN. 유리 반사 금지. 빈 면: 수칙 종이. 빨강: 4번 테이프만. **bubble space:** 없음(silent).

### panel_061
- scene_id: S09 / location: LOC_L1_DUTYROOM / view: 어깨 너머
- beat: P61 · ⑧ · B45 손 공개(일부) · 긴장 10
- size: large / aspect: 9:16
- camera: eye-level, over-the-shoulder close shot from behind her right shoulder
- composition: 아래 왼쪽(y 55–100%)에 서하의 뒷머리(낮은 포니테일, 네이비 머리끈)와 오른쪽 어깨(머스터드 카디건). 위 오른쪽에서 그녀의 오른쪽 어깨 너머로 **가늘고 창백한 RIGHT 손**이 들어온다(전완에서 프레임에 잘림, y 20–60%): 검지의 가는 은반지, 골이 보이는 차콜 니트 소맷부리 + 그 아래 흰 셔츠 커프스, 손바닥만 한 광택 빨간 비닐테이프 롤(짧게 뜯긴 꼬리). 배경은 어두운 서가 쪽 그림자, 유리는 프레임 밖
- subject: 클리프의 손(HAND-CLIFF), 빨간 테이프 롤, 서하(뒷모습, 굳음)
- emotion: 정점의 공포 — 이미 방 안에 있다
- motion/direction: 손이 위 오른쪽 → 아래 왼쪽(그녀 쪽)으로 들어온다
- dialogue_ref: 없음 (silent)
- attach: refs/HANDCLIFF_ref.png, refs/SEOHA_turnaround.png
- gap_after: 480
- fx/note: LIGHT_CLIFF. 소매가 슬레이트블루(선임)·아이보리 실크(노미란 B)면 REGEN. 손가락 다섯, 얼굴·몸 없음. 빨강: 테이프 롤만(4번 테이프가 프레임에 들어오면 그것도). F-17① · F-18①. **bubble space:** 없음(silent).

### panel_062
- scene_id: S09 / location: LOC_L1_DUTYROOM / view: 옆얼굴 미디엄 클로즈업
- beat: P62 · ⑧ · B46 대사 분절 ① · 긴장 10
- size: medium / aspect: 3:4
- camera: eye-level medium close-up, her profile
- composition: 화면 왼쪽~가운데(y 30–90%) 굳은 서하의 옆얼굴(얼굴은 화면 왼쪽을 향함 — 칸막이 쪽, 뒤를 보지 못함). 화면 오른쪽(y 40–80%) 그녀 어깨 곁에 머무는 그 손(전완에서 잘림, 은반지, 차콜 니트 + 흰 커프스, 빨간 롤). 위쪽 약 22%는 어두운 배경(서가 쪽 그림자)
- subject: 서하(공포로 굳음 ②, 옆얼굴), 클리프의 손
- emotion: 얼어붙은 근접
- motion/direction: 손(오른쪽)과 얼굴(왼쪽) 사이의 좁은 간격
- dialogue_ref: 목소리(뒤) "그 수칙," — dialogue, 꼬리 ↑ 위쪽 가장자리 밖(화면 오른쪽 위)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/HANDCLIFF_ref.png
- gap_after: 240
- fx/note: LIGHT_CLIFF. 유리 반사 금지(유리는 프레임 밖 또는 평평한 어두운 면). 빨강: 테이프 롤만. E7 회수(P21 첫 구절과 KM 동일). **bubble space:** 위쪽 약 22%, 오른쪽(x 40–96%, y 3–22%) = 어두운 서가 그림자. 짧은 말풍선 1개.

### panel_063
- scene_id: S09 / location: LOC_L1_DUTYROOM / view: 4번 조각 클로즈업 + 손가락
- beat: P63 · ⑧ · B46 대사 분절 ② · 긴장 10
- size: small / aspect: 1:1
- camera: eye-level close-up on the white strip
- composition: 화면 가운데~아래(y 45–75%) 가로지르는 새하얀 4번 띠와 빨간 두 줄, 아래 줄 오른쪽 끝이 살짝 들려 말림. 화면 오른쪽 위에서 들어온 그 손의 **은반지 낀 검지**가 흰 띠 바로 앞(y 약 40%)에서 멈춰 있다 — 닿지 않는다(손끝과 종이 사이 가는 틈). 위쪽 약 25%는 칸막이 위 철판·어둠
- subject: 은반지 검지(HAND-CLIFF), 4번 띠(PROP_RULE4_PATCH + PROP_TAPE_LIFT)
- emotion: 아는 자의 손짓 — 소유의 섬뜩함
- motion/direction: 손가락 위 오른쪽 → 흰 띠(멈춤)
- dialogue_ref: 목소리(뒤) "아직 안 바꿨네?" — dialogue, 꼬리 ↑ 위쪽 가장자리 밖
- attach: refs/HANDCLIFF_ref.png, refs/PROP_PAGES_pair.png
- gap_after: 720
- fx/note: LIGHT_CLIFF. 손가락이 종이에 닿으면 REGEN. 빈 면: **수칙 종이·흰 띠**. 빨강: 테이프 두 줄(+ 롤이 프레임에 들어오면 롤). F-24①. **bubble space:** 위쪽 약 25%(y 3–25%), 왼쪽~가운데(x 4–60%) = 칸막이 위 철판·어둠. 들어오는 손(오른쪽 위)과 겹치지 않게.

### panel_064
- scene_id: S09 / location: LOC_L1_DUTYROOM / view: 당직석 측면(유리는 프레임 밖)
- beat: P64 · ⑧ · B47 **최종 컷: 정체 공개 1컷 전** · 긴장 10
- size: full-bleed / aspect: 9:16
- camera: slightly low angle medium shot from her right side, near the desk (유리 창구는 카메라 뒤 · 프레임 밖)
- composition: 위 절반(y 8–50%) 고개를 돌리기 시작한 서하(3/4, 크게 뜬 눈, 공포로 굳음 ②), 뒤로 어두운 서가 그림자뿐. 아래(y 55–88%) 책상 위 그녀의 수첩(표지 오른쪽 위 새 스티커) 바로 옆에 **놓인 빨간 비닐테이프 롤**, 그 손은 화면 오른쪽 가장자리로 빠져나가는 중(손가락 끝과 은반지, 차콜 니트 소매 끝만 보임, 얼굴·몸 없음). 맨 아래 가는 띠(y 92–100%)는 어두운 책상 그림자
- subject: 서하(돌아보기 시작), 수첩(새 스티커), 빨간 롤, 빠져나가는 손 — 손 주인의 얼굴은 프레임 밖
- emotion: 미해결의 공포 — 다음 화를 보게 만드는 한 박자
- motion/direction: 그녀의 고개가 오른쪽(뒤)로 돌기 시작 / 손은 오른쪽 가장자리 밖으로 → 시선이 롤에 남는다
- dialogue_ref: 없음(대사 없음) · 캡션 "— 2화에 계속 —" — narration, 맨 아래 가운데
- attach: refs/SEOHA_turnaround.png, refs/HANDCLIFF_ref.png, refs/PROP_STICKERS_pair.png
- gap_after: 1200
- fx/note: LIGHT_CLIFF. 유리 반사 금지(유리 프레임 밖). 빨강: 롤이 화면에서 가장 강한 색(4번 테이프는 프레임 밖이어도 된다). 스티커 주황은 황금빛. C1 · 가리는 것 = 얼굴 하나. **bubble space:** 캡션 = 맨 아래 가는 띠(x 15–85%, y 92–99%) = 어두운 책상 그림자. 말풍선 없음.

---

## 5. 점검 (webtoon-panel-breakdown 체크리스트)

- [x] 패널 64개, panel_001–panel_064 연속 3자리 = 대본 P01–P64
- [x] 모든 패널에 scene_id · location(LOC_*) · view. 장소가 바뀌는 곳(S01→S02a, S02a→S02b, S02b→S03, S05a→S05b, S06a→S06b)과 씬이 바뀌는 곳에만 SCENE BREAK. 같은 scene_id 안에서 장소·조명 급변 없음(정정 조명 변화는 대본 문법)
- [x] 대사·효과음·캡션이 있는 55패널 모두 `dialogue_ref` + `bubble space`. 무대사 9패널(003·018·026·027·051·056·058·060·061)은 silent
- [x] 반복 컷 10쌍: `camera`·`composition`·`subject` 세 줄이 원본과 글자 하나 같고, 원본 PNG를 첫 attach로. 다른 것은 `variable`에만
- [x] 리플레이 비네트 2개(024 ← 009, 055 ← 021): 원본 PNG attach, 위치·크기·기억 말풍선 자리 지정
- [x] 비율: 기본 3:4 · 느린/공개/앵커 9:16 · 클로즈업·빠른 컷 1:1 · 눈 띠 16:9. COMP 짝 같은 비율
- [x] attach 패널당 3장 이내. 글이 적힐 물건은 전부 빈 면. 빨강 세 범주
- [x] 같은 크기·같은 앵글 5컷 연속 없음. 3:4가 이어지는 곳은 두 구간: P10–15(6컷: 숙직실 문 쪽 → VIEW_C → SIDE_E → SIDE_E 낮게·가깝게 → 복도 쪽 어깨 너머 → 유리 정면) · P19–23(5컷: 종이 클로즈업 → 투샷 → 측면 미디엄 → 넓은 어깨 너머 → 어깨 너머). 대본상 대화 구간이라 비율은 style-bible 권장대로 두고 앵글·거리로 변주했다

## 6. 하류 인계 (팀 메시징 대체)

| 대상 | 가져갈 것 |
|---|---|
| **letterer** | 각 패널 `bubble space`를 `art_space`(한국어로 써도 됨) + `place` 출발점으로 쓴다. `gap_after`는 대본 그대로. 넓은 말풍선(w 60% 이상): 009 ①·012 ①·021·035·049 ①·055 ①(대본 검수 노트 E). 기억: 024 ②(비네트 아래 가장자리), 029, 052, 055 ①(비네트 바로 아래). 생각: 022 ②, 031, 037 ②, 054, 057 ①. 화면 밖 꼬리: 005(위 가장자리 = 휴대폰), 019(왼쪽), 045(오른쪽), 062·063(위쪽 밖). 작은 말풍선: 032 ②(① 끝에 겹침), 053(경계 띠 위), 057 ②. 효과음 자리: 007·028(문 오른쪽 옆), 013·036(벨 위), 016(벨 왼쪽), 025(형광등 옆), 034(서가 틈), 042(숙직실 문 옆), 059(오른쪽 1/3). 캡션: 064 맨 아래 |
| **prompt-smith** | style-bible §5-1 순서로 펼친다. SIDE_E(§1)는 새 VIEW 문장으로 쓴다: `seen across the room from the entrance-door end: the glass service window wall along the right side with the dim corridor receding beyond it, the gray steel shelves and a backwards folding chair on the left, the low gray partition and the closed cream nap-room door in the background center`. 반복 컷은 원본 프롬프트를 그대로 복사하고 `variable`만 바꾼다. 024·055는 비네트 문장 + Avoid 줄 조정(§3-2). 026은 검정 한 장. 053은 2분할(대안 1:1). P028 시계 10:00 |
| **사용자(Flow)** | 번호 순서대로 그리면 원본(001·002·003·005·007·008·009·012·013·018·021)이 반복 컷·비네트보다 늘 먼저다 |
| **art-director** | 새 LOC 없음. VIEW 하나 추가(SIDE_E, 당직실 안 측면 앵글 — LOC_L1_DUTYROOM 문장은 그대로). style-bible §4-1 권장표의 P24·P55를 9:16으로 바꿨다(§2) |
