# EP03 샷리스트 「인수인계」 — panel-director

- 작성: panel-director · 기준일 **2026-11-18** · EP03 Phase 4 · **v1**
- 입력: `03_episode/ep03_script_final.md`(60패널, 최종 · 패널당 말풍선 ≤2 · 검수 노트 E-2 · E-3) · `03_episode/ep03_beatsheet.md`(§2 gap·⊘ 소품, §3-1 재사용 구도, §3-2 인셋, §3-4 시각 문법, §4 무글자) · `04_visual/style-bible.md` **v1.2**(§2-3-1 · §2-4-2 빨강·롤 배치 규칙, §2-8 컬러 스크립트, §3-5 조명, §4-4 비율·비네트, §5-6 짝 구도, §6-1-2 · §6-2-2 지리, §6-3 VIEW_DRAWERS/SLOT/GRILLE/GLASS_CLOSE, §6-5 VIEW_FROM_WINDOW_FAR/ACROSS · VIEW_WINDOW_FLOOR, §6-6-1 직원석·계단 · VIEW_L3_ACROSS/STAFFSIDE/STAIRS, §7-7 소품, §7-8 연속성, §8-2 빈자리, §10-5 드리프트) · `04_visual/character-sheets.md` **v1.2**(§11-1 MOVEIN, §11-2 HAND-RENAME, §11-3 서하, §11-4 노미란·선임·재우·엑스트라, §11-5 구분, §11-6 첨부) · `04_visual/ep01_shotlist.md` · `04_visual/ep02_shotlist.md`(형식, 반복 원본) · `webtoon-khmer-edition` §3–4
- 다음 독자: **letterer**(`bubble space` → `art_space`·`place`, `gap_after`) → **prompt-smith**(Flow 프롬프트, `attach`) → 사용자(Flow) → panel-validator
- 총 **60패널**(panel_001–panel_060 = 대본 P01–P60, 번호·순서 동일). 팀 메시징이 없는 실행이라 상류·하류 전달 사항은 문서 끝 §H에 모았다.

## 읽는 법

- **좌우:** `화면 왼쪽/오른쪽` = 화면 기준. `LEFT/RIGHT`(대문자) = 인물·사물 **자신의** 좌우. 정면 그림에서 서하의 RIGHT 눈 밑 점은 화면 왼쪽, 재우의 RIGHT 검지 은반지도 화면 왼쪽.
- **좌표:** `x`/`y` = 패널 왼쪽 위에서 잰 %(근사치). letterer가 `art_space`·`place`로 옮긴다.
- **`bubble space:`** (fx/note 첫 항목) = 그 컷에서 **그림이 비워 둘 조용한 배경**. 얼굴·손·핵심 소품(서류 B·명부·일지·서식·수칙 종이·시계 면·말구멍·롤)은 그 자리에 두지 않는다. 효과음은 소리 나는 물건 곁 작은 빈자리. 무대사 컷은 `silent`.
- **뷰어 폭 한계:** 뷰어는 말풍선을 `left = x%`(가운데 기준)로 놓아 **말풍선 폭은 최대 100−x %** 다. 그래서 빈자리는 **왼쪽에서 시작하는 넓은 띠(위·아래 띠)**로 잡았고, 오른쪽만의 좁은 띠는 피했다. 긴 말풍선(w 60% 이상: P4① · P5 · P7② · P8①② · P37① · P42① · P43② · P46①)은 가운데 x 38 이하에 놓일 수 있게 띠를 왼쪽 끝부터 비웠다.
- **Khmer edition:** 어떤 이미지에도 글자·숫자·말풍선·가짜 글씨·서명이 없다. 글이 적힐 물건(인수인계서 B 앞·뒷면 · 명부 · 일지 · 결재판 · 수칙 종이 · 4번 조각 · 전입신고서 · 반려 통지 · 개명 신청서 · 영수증 · 수첩 · 시계 · 모니터 · 표시 면 · 서랍 라벨 칸)은 **빈 면**으로, 그 컷의 주인공이면 **충분히 크게**. EP03에는 물건 위 글씨 `env`가 없다 — 서류 내용은 전부 낭독 말풍선이다. 서명은 그리지 않는다(P14 = 잉크 점 하나).
- **characters:** 주 인물 = character-sheets **FULL**, 나머지 = **SHORT**, 손·뒷모습·실루엣 = 상태 토큰(§11-1–§11-4, §10-1–§10-4). MOVEIN은 발이 프레임에 있을 때만 FULL(+신발 문장), 아니면 SHORT만. 표정은 character-sheets 번호와 그 영문 문장.
- **repeat:** EP01·EP02(또는 EP03 안의 앞 컷) 구도의 반복. **`camera:` 줄은 원본 문장을 글자 그대로 쓴다**(↺ 표시, 원본이 이미 ↺를 달고 있으면 그것까지). 축·장소가 바뀌는 컷만 그 뒤에 `→ 이번 컷`을 덧붙였다. **`composition:`은 `[↺… 틀]`로 시작해 원본의 자리(인물·소품의 %, 빈 띠)를 원본 문장 그대로 따른 뒤 이 컷의 인물·소품으로 채운다.** 바뀌는 것은 `repeat:` 줄에 다 적었다. 원본 PNG는 attach 첫 자리.
- **attach:** 사용자가 Flow에 손으로 붙일 이미지(패널당 3장 이내). `refs/…` = 레퍼런스 카드, `_workspace/05_panels/ep01/panel_NNN.png` = EP01 원본, `_workspace/05_panels/ep02/panel_NNN.png` = EP02 원본, `_workspace/05_panels/ep03/panel_NNN.png` = 이 회차의 앞 컷. **`HANDRENAME_ref`는 `HANDCLIFF_ref`·`JAEWOO_*`와 같은 패널에 붙이지 않는다**(P57 하나뿐).
- **기억 비네트:** 인셋 3컷(P6 · P11 · P28)은 Flow가 한 장 안에 그리는 '액자 속 기억 그림'이다(§D). 이 3컷만 Avoid 줄에서 `panel borders`를 뺀다.
- **조명:** 떨림은 **P23 한 번**(복도 끝, LIGHT_FLICKER_FAR). **P30 · P45는 일부러 떨리지 않는다**(LIGHT_STEADY + LIGHT_NOFLICKER 필수) — 그 부재가 비트다. 그 밖의 지하 컷도 떨림 0(LIGHT_NOFLICKER 권장). LIGHT_BLACKOUT · LIGHT_CLIFF · LIGHT_COMEDY는 쓰지 않는다. S01 L3 낮은 LIGHT_L3_DAY 하나로 끝까지.

---

## A. 장소 목록 (scene_id ↔ LOC ↔ VIEW ↔ 배경 한 줄)

| scene_id | 패널 | 시각 | location | 주 VIEW | 조명 | 배경 한 줄 |
|---|---|---|---|---|---|---|
| S01 | P1–18 | 09:0x 낮 | **LOC_L3_LOBBY** | 카운터 상판 클로즈업(P1·P4·P5·P14) · VIEW_L3_ACROSS(P2·P7·P8) · VIEW_L3_DAYWINDOW(P3·P9·P10·P15) · 서하 클로즈업(P6·P11·P12) · **VIEW_L3_STAFFSIDE**(P13·P16·P18) · **VIEW_L3_STAIRS**(P17) | **LIGHT_L3_DAY** (씬 안에서 바꾸지 않는다) | 1층 본관 로비 낮 창구(EP02 P58 직후). 민원인 쪽(P1–P12, 직원 책상 면 프레임 밖) → 직원석(P13 첫 공개, 노미란 책상 위 빨간 롤) → 홀 안쪽 넓은 돌계단(P17) |
| S02 | P19 | 22:00 | **LOC_L2_CORRIDOR** | VIEW_ANCHOR | LIGHT_CORRIDOR | 앵커 복도, 닫히는 방화문, 문 위 시계 10:00 |
| S03 | P20–22 | 22:0x | LOC_L1_DUTYROOM | VIEW_DESK · 일지 클로즈업 · VIEW_DRAWERS | LIGHT_L1 + LIGHT_LAMP | 지하 2층 당직실, 녹백 형광 + 스탠드 한 점 |
| S04a | P23 | 22:3x | **LOC_L2_CORRIDOR** (당직실 안에서 유리 너머) | VIEW_FROM_WINDOW_FAR | LIGHT_CORRIDOR + **LIGHT_FLICKER_FAR** | 복도의 어두운 끝, 회차 유일한 떨림, 보따리 실루엣 |
| S04b | P24–25 | 22:3x | LOC_L1_DUTYROOM | VIEW_SIDE(COMP-BELL) · 안쪽 시점 유리 너머 | LIGHT_L1 + LIGHT_LAMP, 유리 너머 역광 | 같은 당직실, 벨, 작은 노부인 첫 컷(발 숨김) |
| S04c | P26 | 같은 순간 | **LOC_L2_CORRIDOR** (복도 쪽) | VIEW_WINDOW_FLOOR | 복도의 차가운 빛 + 창구의 옅은 온기 | 창구 밖 테라조 바닥, 흰 양말과 등 뒤에 벗어 둔 신발 |
| S04d | P27–49 | 22:3x– | LOC_L1_DUTYROOM | VIEW_SIDE · VIEW_B · VIEW_A · VIEW_C 축 · VIEW_SLOT · VIEW_GLASS_CLOSE · VIEW_DRAWERS · 클로즈업 | LIGHT_L1 + LIGHT_LAMP · P30·P45 + LIGHT_STEADY + LIGHT_NOFLICKER · P31·P46 + LIGHT_GLASS_GLOW | 같은 당직실: E10 → 떨리지 않는 형광등 → 전입신고 → 수칙 1 역전 → 첫 반려 |
| S05a | P50 | 새벽 1시대 | LOC_L1_DUTYROOM | VIEW_SIDE | LIGHT_L1 + LIGHT_LAMP | 같은 당직실, 커피(따뜻하게) |
| S05b | P51 | 같음 | **LOC_L2_CORRIDOR** (당직실 안에서 유리 너머) | VIEW_FROM_WINDOW_ACROSS | LIGHT_CORRIDOR | 복도 맞은편 파란 대기 의자의 재우, 따뜻한 빛 없음 |
| S05c | P52–54 | 같음 | LOC_L1_DUTYROOM | VIEW_C 축(출입문) · 투샷 · 미디엄 | LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE | 같은 당직실, 빛 가장자리의 재우 |
| S06 | P55–60 | 03:00경 | LOC_L1_DUTYROOM | VIEW_SIDE(시계) · VIEW_B(COMP-COLD-1) · VIEW_SLOT · VIEW_GRILLE · 책상 클로즈업 · 얼굴 | LIGHT_L1 + LIGHT_LAMP · P57–P58 유리 반사 없음 · P59–P60 LIGHT_REVEAL(선택) | 같은 당직실, 클리프 — 빈 유리, 연살구 서식 |

- 장소 토큰은 style-bible §6 원문을 그대로 쓴다. 같은 scene_id 안에서는 같은 LOC 문장, 컷마다 VIEW 문장만 바꾼다.
- 장소가 씬 안에서 바뀌는 곳(유리 너머 L2: P23 · P26 · P51)은 EP01·EP02처럼 하위 ID(a/b/c/d)로 나눴다. 이음새는 유리 창구다. S04d → S05a는 같은 방, 블록 전환(⑥ → ⑦)이라 끊었다. SCENE BREAK 10곳.
- **당직실 지리**(style-bible §6-2 · §6-2-2): 당직석에 앉으면 유리를 마주 본다 · 그녀의 LEFT = 칸막이(수칙 종이, 앉은 눈높이)와 옆벽 숙직실 문 · RIGHT = 출입문 · 뒤 = 서가 3열 · 접이식 의자(선임) · 서가 위 시계 하나 · 서랍 3단 = 책상 오른쪽 끝 아래. 복도는 **안에서 보면** 방화문 = 화면 왼쪽, 어두운 끝 = 화면 오른쪽 / **복도 쪽에서 창구 벽을 보면** 반대(어두운 끝 = 화면 왼쪽). 대기 의자 셋 + 회색 소화전함 = 창구 맞은편.
- **L3 지리**(style-bible §6-6 · §6-6-1): 정문에서 보면 카운터 = 왼쪽 벽, 노미란 창구 = 큰 시계 바로 아래, **서하 낮 책상 = 노미란의 LEFT 옆**(한 뼘 높이 간유리 칸막이), 롤 = 노미란 책상 **안쪽 오른쪽 귀퉁이**(서류 받침 옆, 옆으로 눕힘), 위층 돌계단 = 홀 안쪽 벽의 왼쪽, 지하 철문 = 같은 벽 오른쪽 구석. S01 투샷 축: **노미란 = 화면 왼쪽, 서하 = 화면 오른쪽.** 시계는 프레임 밖이 기본.

## B. 비율 · 크기

| size | Flow aspect | 패널 | 수 |
|---|---|---|---|
| medium (STD) | **3:4** | P2·3·4·7·8·9·15·22·23·24·25·27·28·29·32·37·38·40·42·43·45·48·49·50·51·53·54·55·56·59 | **30** |
| large / full-bleed (TALL: 느림·공개·정지점·앵커) | **9:16** | P1·5·6·11·13·14·17·18·19·26·34·47·52·58·60 | **15** |
| small / insert (SQ: 클로즈업·손·빠른 한마디) | **1:1** | P10·12·16·20·21·30·31·33·35·36·39·41·44·46·57 | **15** |

- style-bible §4-4 권장 배정 그대로다(바꾼 것 없음). P59는 3:4(두 서류를 나란히 — 폭이 필요, 느림은 뒤 720px).
- 원본 구도를 반복하는 짝은 모두 원본과 같은 비율이다: 9:16 = P1·P14←EP02 P58 · P19←EP01 P7·P28·EP02 P44 · P26←EP01 P16 · P34←EP01 P40 · P47←EP01 P45 · P52←EP02 P33 / 1:1 = P10←EP02 P56 · P16←EP02 P54 · P20←EP02 P14 · P30←EP01 P25 · P33←EP02 P36 · P36←EP01 P46 / 3:4 = P4←EP02 P35 · P24←EP01 P13 · P25←EP01 P14 · P27←EP01 P22 · P28←EP01 P41 · P29←EP01 P23 · P32←EP01 P21 · P37←EP02 P27 · P38←EP01 P20 · P40←EP01 P19 · P42←EP01 P15 · P45←EP01 P41 · P48←EP01 P49 · P50←EP01 P11 · P53←EP02 P40 · P55←EP02 P26 · P56←EP01 P1.
- EP03 안의 짝도 같은 비율: P1↔P14(9:16) · P4↔P5(3:4 → 9:16: P5는 반복이 아니라 같은 카운터의 공개 컷, 뒤 480) · P13→P16(1:1, 부감)·P18(9:16) · P21↔P44(1:1) · P22↔P49(3:4) · P31↔P46(1:1) · P35↔P41↔P57(1:1).
- Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데로 모은다. 그때도 `bubble space` 비율 위치는 그대로 둔다.

## C. 구도 반복 — 원본 → 반복

### C-1. EP01 구도 → EP03 (EP01 원본 PNG 첨부)

| EP03 | EP01 원본 | 비율 | 같은 것 (camera 줄 원문 그대로) | 바뀌는 것 |
|---|---|---|---|---|
| panel_019 | panel_007 · panel_028 `COMP-ANCHOR` (+ EP02 panel_044) | 9:16 | 카메라 위치·거리·높이, 방화문, 문 위 시계 10:00, 위 왼쪽 빈자리, 방화문 오른쪽 sfx 자리 | 휴대폰 없음: 두 팔로 명부 + 일지를 가슴에, RIGHT 손가락의 열쇠 |
| panel_024 | panel_013 `COMP-BELL` | 3:4 | VIEW_SIDE 투샷, 선임 왼쪽·서하 오른쪽, 벨 자리, 위 40% | 선임 낭독 없음, 벨을 누른 손 = 작은 손 + 라일락 소매, 마른 선반 |
| panel_025 | panel_014 | 3:4 | 방 안에서 유리 너머 정면, 가운데 인물·말구멍·투입구·벨, 서하 어깨 끝, 위 38% | 마른 남자 → 작은 노부인(카운터가 가슴께에서 자름, 말구멍이 입보다 높다) |
| panel_026 | panel_016 | 9:16 | 세로 '발견' 배치(위 = 창구, 아래 = 바닥의 어긋남 하나) | high-angle → **바닥 높이 low close-up**(VIEW_WINDOW_FLOOR), 물 → 흰 양말 + 벗어 둔 신발 |
| panel_027 | panel_022 | 3:4 | VIEW_SIDE 넓게, 오른쪽 유리 너머 민원인·가운데 서하·왼쪽 선임·안쪽 수칙 종이·위 38% | 서하의 시선 → 수칙 종이, **선임이 그녀를 본다**(F-06 변주), 생각 말풍선 없음 |
| panel_028 | panel_041 (큰 컷 자리) + **비네트 panel_024** | 3:4 | 펼친 명부·빈 칸을 짚는 손끝 자리(x 18–78%, y 48–84%) | 유리에 댄 명부 → 책상 위에 펼친 명부(맨 앞 서류 B), 축 = 당직석 쪽 |
| **panel_029** | **panel_023** | 3:4 | **VIEW_B 어깨 너머, 4번 조각이 프레임 안, 같은 거리·높이·비율** | 유리 너머 = 작은 라일락 노부인 |
| **panel_030** | **panel_025** | 1:1 | **같은 클로즈업, 같은 형광등 기구 자리** | **떨림·어둠·효과음 없음**, 동공만 흔들림 |
| panel_032 | panel_021 `COMP-E1` | 3:4 | 선임 근경·컵·원경 내선과 서하·위 25% | 원경 유리 너머 기다리는 노부인(작게) |
| panel_034 | panel_040 `COMP-COLD-3` | 9:16 | 서하 뒷모습, 유리 너머 말구멍 쪽 인물, 구석 4번 조각, 위 18% | 작은 노부인, 턱 위의 연두 서식 |
| panel_036 | panel_046 | 1:1 | 손 위의 손, 아래 서식 일부, 위 28% | **역할 반대**: 선임의 손이 서하의 손목을, 투입구의 연두 서식 |
| panel_038 | panel_020 | 3:4 | VIEW_SIDE 가슴 위 투샷, 왼쪽 선임·오른쪽 서하, 위 38% | 오른쪽 가장자리 유리 너머 노부인(방을 고르는 눈) |
| panel_040 | panel_019 | 3:4 | 수칙 종이 정면 약간 비스듬히, 종이·스티커 자리 | 초점 = 맨 위 칸(4번 조각은 초점 밖), 위 빈 띠 22% → 30% |
| panel_042 | panel_015 | 3:4 | 복도 쪽 정면 medium, 서하·책상 위 서식 자리, 전경 왼쪽 가장자리, 위 38% | 연두 전입신고서, 전경 = 노부인의 보따리(낮게) |
| panel_045 | panel_041 | 3:4 | 복도 쪽 정면 medium, 머리 위 **흔들림 없는 관**, 든 서류 자리, 오른쪽 아래 전경 어깨 | 일어섬, 연두 서식, 말풍선 자리 = 관과 머리 사이 띠(뷰어 폭) |
| panel_047 | panel_045 | 9:16 | 약간 high-angle, 직인을 쥔 손·아래 종이·종이를 누르는 다른 손·위 20% | **서하의 두 손**, 직인이 **찍힌다**, 흰 반려 통지 + 붉은 원 |
| panel_048 | panel_049 | 3:4 | 창구를 등진 서하·뒤 유리 너머 오른쪽 작게 떠나는 민원인·위 35% | 긴 숨, 신발을 신는 노부인, 무대사 |
| panel_050 | panel_011 | 3:4 | VIEW_SIDE 무릎 위, 왼쪽 선임·가운데 책상 모서리 컵·오른쪽 서하·위 38% | 서하가 컵을 **받아** 수첩 귀퉁이에, 옅은 미소 |
| panel_056 | panel_001 `COMP-COLD-1` | 3:4 | VIEW_B 어깨 너머, 서하 뒷머리 자리, 왼쪽 가장자리 수칙 종이, 위 22% | 유리 너머가 **비었다**, 벨·손 프레임 밖 |

### C-2. EP02 구도 → EP03 (EP02 원본 PNG 첨부)

| EP03 | EP02 원본 | 비율 | 같은 것 | 바뀌는 것 |
|---|---|---|---|---|
| **panel_001** | **panel_058** (같은 순간, 새 렌더) | 9:16 | 서류 B·펜·빈 아래 줄·서류 밑 열쇠·얼굴 프레임 밖·위 22%·아래 8% | 노미란의 LEFT 검지가 아래 줄 옆에 남아 있다, 캡션 없음 |
| panel_004 | panel_035 | 3:4 | 서류 아래 2/3, 아래 가장자리에서 오는 손끝, 위 34% | 서류 A → B(카운터 상판에 놓임), 손끝은 서명란 두 줄 바로 앞 |
| panel_010 | panel_056 (= EP01 P8 `COMP-HANDOVER`) | 1:1 | 노미란 가운데 왼쪽·자세·입만 웃는 미소, 머리 40% 선 아래, 위 40% | 서하는 오른쪽 가장자리 초점 밖, 서류 뒷면이 위(빨강 0) |
| panel_014 | panel_058 (+ EP03 panel_001) | 9:16 | 같은 서류·같은 카메라·같은 손 자리 | 펜 끝이 **닿는다**(잉크 점 하나), 노미란 손 없음 |
| panel_016 | panel_054 (= EP01 P9 `COMP-DESK` 두 손) | 1:1 | 부감, 오른쪽에서 들어오는 노미란 팔, 아래 가운데 서하 손, 왼쪽 아래 서하 어깨, 위 38% | L3 직원석(두 책상), 손바닥이 **명부 바인더**를 칸막이 너머로, 귀퉁이에 초점 밖 롤 |
| panel_020 | panel_014 (= EP01 P33 `COMP-DESK`) | 1:1 | VIEW_DESK 부감, 책상 고정 배치, **영수증 높이 = EP02 P14**, 위 38% | 선임 손이 종이컵, 서하 두 손이 명부·일지를 제자리에, 롤·수첩 없음 |
| panel_033 | panel_036 | 1:1 | 표정 ⑥ 클로즈업, 입을 누른 손, 스탠드 원 | 시선이 명부 쪽 아래 오른쪽, 위 띠 28% → 32% |
| panel_037 | panel_027 (= EP01 P57) | 3:4 | 칸막이 정면 약간 오른쪽, 종이 자리, 손끝이 조항을 짚음 | 맨 위 칸 · LEFT 손 · 오른쪽 아래 잡힌 손목, 위 띠 22% → 30% |
| panel_052 | panel_033 (= EP01 P42 좌우 대칭판) | 9:16 | '반쪽 문 + 반쪽 창구', 오른쪽 출입문 틀, 위 20% | 실루엣 → 얼굴이 빛 가장자리에 보이는 재우, 종이 없음 |
| panel_053 | panel_040 | 3:4 | 옆에서 허리 위 투샷, 왼쪽 서하·오른쪽 재우, 두 카디건 | 서하는 앉아 있다, 서류 없음 |
| panel_055 | panel_026 | 3:4 | VIEW_SIDE 와이드, 시계 자리·배치·비율·위 40% | 시계 04:40 → **03:00**, 명부 위 손바닥 |
| (비네트) panel_011 | panel_038 | — | §D | §D |

- **P19**는 EP01 P7 · P28 · EP02 P44가 모두 같은 `COMP-ANCHOR`라 **EP01 panel_007**을 붙인다(정면 · 10:00 · 닫히는 문 = EP01 원본이 가장 가깝다).
- **P10 · P16 · P20**은 EP01 원본(P8 · P9 · P33)이 EP02에서 이미 L3·같은 앵글로 한 번 옮겨졌으므로 **EP02 원본**을 붙인다(더 가까운 그림). EP01 원본은 문장으로만 잇는다.
- 만드는 순서: EP01 · EP02 원본이 먼저 있어야 한다(둘 다 아직 `WAITING_FOR_IMAGES`). 원본 PNG가 없으면 그 반복 컷은 attach 줄의 원본을 빼고 문장만으로 만들 수 있지만, **비네트 3컷(P6 · P11 · P28)은 원본이 생긴 뒤에만** 만든다. 반복 컷도 PNG를 복사하지 않고 **다시 그린다**(md5 중복 금지).

### C-3. EP03 안의 반복 (이 회차 앞 컷 PNG 첨부)

| 반복 | 원본 | 같은 것 | 바뀌는 것 |
|---|---|---|---|
| panel_005 | panel_004 | 같은 카운터·같은 손 | 서류만 뒤집혔다(뒷면) |
| panel_006 · panel_012 | panel_005 | 같은 서류 뒷면 | 눈 + 비네트 / 얼굴 클로즈업 |
| panel_014 | panel_001 | 같은 서류·카메라·손 자리 | 펜 끝이 닿는다 |
| panel_016 · panel_018 | panel_013 | 같은 직원석·같은 책상 세트 | 두 손 부감 / 왼쪽 이웃 책상(서하) |
| panel_041 · panel_057 | panel_035 | 같은 투입구 뷰 | 당겨 들임 + 입가 / 연살구 서식 + HAND-RENAME |
| panel_044 | panel_021 | 같은 일지 면 | 펜 끝 → 손끝 |
| panel_046 | panel_031 | 같은 유리 클로즈업 | 미소 → 텅 빈 기다림 |
| panel_049 | panel_022 | 같은 서랍 구도 | 여는 손 → 닫는 손 |
| panel_059 | panel_057 | 같은 연살구 서식 | 책상 위, 명부와 나란히 |

## D. 리플레이 인셋 → 기억 비네트 (3컷: P6 · P11 · P28)

EP01 shotlist §D(리더 결정) · EP02 shotlist §D · style-bible §4-4를 그대로 따른다. Flow는 두 이미지를 합성하지 못하므로 인셋을 **Flow가 한 장 안에 그리는 '액자 속 기억 그림'**으로 그린다.
- **모양:** 패널 위 왼쪽 작은 사각 그림. 3–4px 회백색(dingy off-white) 테두리 + 아래·오른쪽의 얇은 어두운 그림자. 안은 **채도 약 40% 낮춘 바랜 색**, 같은 화풍, 원본 컷과 같은 각도·같은 순간. **비네트 안 빨강 0.**
- **첨부:** 원본 패널 PNG를 attach **첫 자리**에 붙이고("the small framed memory picture in the upper-left shows the same moment as the attached earlier panel, in faded colors"), 원본의 인물·소품 문장을 짧게 다시 쓴다(Flow가 참조를 덜 따를 때의 안전장치).
- **기억 말풍선(`type: memory`) 자리:** 비네트 안 **위 1/3**이 조용한 배경이 되게 자른다 → 대본대로 "인셋 안". 필요하면 비네트 오른쪽 바깥 흐린 배경까지 넘어가도 된다(뷰어 폭 때문에 왼쪽부터 넓게).
- **범위:** style-bible §4-2 규칙 1(한 장 안에 테두리 금지)의 EP03 예외 3컷. prompt-smith는 이 3컷의 Avoid 줄에서 `panel borders`만 뺀다.
- **대안:** Flow가 비네트를 엉뚱하게 그리거나(내용이 본 그림과 섞임) 두 번 다시 그려도 안 되면, 그 자리를 조용한 배경으로 비운 버전으로 다시 받고 원본 PNG 크롭 합성 여부는 리더·사용자가 정한다(그림을 새로 지어내지 않는다).

| 비네트 | 원본 | 비네트 자리 (x · y) | 비네트 안 내용 (원본과 같은 각도) | 주의 |
|---|---|---|---|---|
| P6 | EP01 panel_009 | 4–60% · 3–30% | 파란 바인더 표지 위에 납작하게 얹힌 노미란의 LEFT 손바닥(가는 금색 팔찌시계, 차콜 정장 소매)만. 위 1/3 = 손 너머 초점 밖 어두운 책상 유리 | **영수증·인주·칸막이 종이 넣지 않는다**(비네트 안 빨강 0). 큰 컷 = 서하 눈 + 서류 뒷면 |
| P11 | EP02 panel_038 | 4–64% · 3–33% | 노란 원 안으로 들어온 재우의 RIGHT 손(검지 은반지, 차콜 니트 + 흰 커프스)이 열쇠 쪽으로, 비네트 오른쪽에 빛 가장자리의 옆얼굴(반만 따뜻, 다크서클). 위 1/3 = 유리 위쪽 너머 어둑한 복도 | 배치는 EP02 P55와 같다. 비네트 안의 노란 빛도 바랬다 |
| P28 | EP01 panel_024 | 4–60% · 3–34% | 유리 너머 구정민의 얼굴 클로즈업, 고개를 살짝 기울였고 미소가 사라졌다(젖은 머리·물방울 그대로). 위 1/3 = 그의 머리 위 어둑한 복도 | **EP01 P24 안의 비네트(노미란 손)는 넣지 않는다.** 큰 컷 = 펼친 명부(맨 앞 서류 B) |

---

## E. 패널

### panel_001
- scene_id: S01 / location: LOC_L3_LOBBY · 카운터 상판 클로즈업(세로, 서하 쪽 위)
- beat: ① 뒷면 — 클리프를 같은 순간에서 받는다(EP02 P58과 같은 순간, 새 렌더) ⟨ECHO:EP02 P57⟩ · 긴장 8 · gap_after 40
- size: large · aspect: **9:16**
- camera: ↺EP02 P58 — high-angle close-up — 서하 쪽 위에서 카운터 위 서류 B와 펜
- composition: [↺EP02 panel_058 틀] 가운데(x 12–88%, y 26–86%) 카운터 위 서류 B 전체(A4 세로, 크게): 굵은 짙은 회색 이중 테두리, 빈 칸, 아래 서명란 두 줄 — 위 줄 끝 원 안의 붉은 직인 원, **빈 아래 줄**(y 76%). 아래 오른쪽에서 들어온 서하의 작은 RIGHT 손(머스터드 소매가 반쯤 덮음)이 무지 볼펜을 쥐고 **빈 아래 줄 위 한 뼘**에서 멈춰 있다(펜 끝 x 60–70%, y 64–70%). 서류 밑으로 열쇠 꾸러미가 비어져 나온다(아래 왼쪽, x 14–34%, y 82–90%). 그녀의 얼굴은 프레임 밖. 위 22%(y 0–22%)는 카운터 너머 초점 밖 간유리 칸막이. 아래 8%(y 92–100%)는 카운터 앞턱의 민무늬 회색 면(그늘진 쪽). **이번 컷에 더해지는 것:** 카운터 건너편(오른쪽 위)에서 비스듬히 들어온 노미란의 LEFT 손(아래팔은 오른쪽 위 가장자리로 이어짐 x 84–100%, y 30–56%, 손등·가는 금색 팔찌시계·차콜 정장 소매 + 아이보리 커프스 x 80–96%, y 56–70%) — 검지가 빈 아래 줄 오른쪽 끝 바로 옆(x 80–90%, y 74–80%)에 놓여 있다, 펜 끝과 한 뼘 떨어져. 두 얼굴 모두 프레임 밖.
- characters: SEOHA(character-sheets §10-2 '펜' 상태 토큰 — 손만) · MIRAN(§10-3 LEFT 손 클로즈업 문장, 의상 A 소매, 반지·빨간 네일 없음)
- props: **PROP_HANDOVER_B**(크게) · PROP_PEN(무지) · PROP_KEYS(일부)
- lighting: LIGHT_L3_DAY(평평한 낮 백색광) · 빨강 = 위 줄 직인 원 하나(화면에서 가장 강한 색)
- dialogue_ref (1): ① 노미란(기억) memory "여기 서명만 해. 그치?" (흐린 파란 테, 꼬리 ↑ 위쪽 프레임 밖 — EP02 P57과 KM 동일, 리캡)
- repeat: EP02 **panel_058**과 같은 순간·같은 구도(펜·빈 아래 줄·서류 밑 열쇠·얼굴 프레임 밖·위 22% 칸막이·아래 8% 앞턱) · 바뀌는 것: 노미란의 LEFT 검지가 아래 줄 옆에 남아 있다(EP02 P57의 그 손), 아래 8% 띠는 캡션 없이 민무늬. PNG를 복사하지 않고 새로 그린다(md5 중복). **P14의 원본**
- attach: _workspace/05_panels/ep02/panel_058.png, refs/PROP_HANDOVER_pair.png, refs/MIRAN_turnaround.png
- fx/note: bubble space: 위 22% 왼쪽~가운데(x 3–78%, y 2–21%) — 초점 밖 간유리 칸막이(노미란 아래팔이 들어오는 오른쪽 가장자리는 피한다), 꼬리는 위쪽 프레임 밖. / 펜이 종이에 닿으면 REGEN(닿는 것은 P14). 서류에 글씨·서명·제목 금지, 붉은 원은 **위 줄 하나**. 카운터 너머 직원 책상 면이 보이면 REGEN(P1–P12 = 책상 면 없음, style-bible §6-6-1).

### panel_002
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_ACROSS
- beat: ① **답 반: 그녀는 먼저 읽는다** · m-a1 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium two-shot — 카운터 줄을 따라 옆에서(VIEW_L3_ACROSS), 허리 위
- composition: 아래 1/3을 연회색 라미네이트 카운터 상판과 높은 앞턱이 가로지른다(y 66–80%). 화면 왼쪽(x 6–46%, 머리 y 34–48%) 앞턱 뒤에 선 노미란(의상 A, 검정 코트는 어깨에만), 옆모습 3/4로 오른쪽을 본다 — 입만 웃는 미소가 그대로 굳었다. 화면 오른쪽(x 54–94%, 머리 y 40–54%) 카운터 앞에 선 서하(한 뼘 작다, LEFT 어깨의 네이비 토트백이 화면 쪽), 옆모습 3/4로 왼쪽을 본다 — 평평한 공무원 표정. 카운터 상판 오른쪽(x 50–80%, y 68–78%)에서 그녀의 RIGHT 손이 서류 B(앞면, 작은 붉은 원)를 자기 쪽으로 당기고, 펜은 상판 위에 눕혀 놓였다(x 40–52%, y 72–76%), 서류 밑 열쇠 꾸러미 일부. 두 사람 사이 뒤로 초점 밖 간유리 칸막이와 멀어지는 이웃 창구들(초점 밖 엑스트라 몇, 아주 작게). 위 32%(y 0–32%)는 두 사람 머리 위 흐린 회백 벽. 시계·직원 책상 면은 프레임 밖.
- characters: MIRAN(FULL 의상 A) — 표정 ① 굳음 `a polite closed-lip smile frozen in place, cold, unsmiling eyes` · SEOHA(SHORT + §10-2 밤샘 풀이 + §11-3 'L3 카운터 앞') — 표정 ⑧ `a flat, polite, deadpan civil-servant face with slightly lowered eyelids` · L3 엑스트라(§11-4 원문, 초점 밖, 멀리)
- props: PROP_HANDOVER_B(작게, 앞면) · PROP_PEN(눕힘) · PROP_KEYS(일부)
- lighting: LIGHT_L3_DAY · 빨강 = 서류 B 직인 원(작게) 하나
- dialogue_ref (1): ① 서하 dialogue "읽어 보고 서명하겠습니다." (꼬리 ↘ 서하)
- attach: refs/SEOHA_turnaround.png, refs/MIRAN_turnaround.png, refs/LOC_L3_LOBBY_DAY_plate.png
- fx/note: bubble space: 위 32%(x 3–90%, y 2–30%) — 두 사람 머리 위 흐린 회백 벽. / 축: 노미란 = 화면 왼쪽, 서하 = 화면 오른쪽(S01 투샷 고정). 카운터 상판 아래·직원 책상 면은 프레임 밖. 엑스트라는 노미란 창구·카운터 앞 전경에 오지 않고 주요 인물의 주색을 입지 않는다. 펜은 종이에 닿지 않는다.

### panel_003
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_DAYWINDOW(노미란 미디엄, 서하 시점)
- beat: ① 비꼼(유머 ①) · 압박의 첫 수 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium — 민원인 쪽(서하 자리)에서 낮 창구의 노미란을 정면 약간 옆으로, 허리 위
- composition: 가운데(x 22–74%, 머리 y 32–46%) 높은 앞턱 뒤의 노미란: 팔짱을 끼고 앞턱 안쪽에 가볍게 기댄다(검정 코트는 어깨에만, 소매가 비어 늘어짐), 입만 웃는 미소, 고개를 살짝 기울인 가벼운 비꼼. 아래(y 74–100%) 연회색 카운터 상판과 높은 앞턱 — 직원 책상 면은 앞턱 아래 프레임 밖. 양옆 낮은 간유리 칸막이(x 0–12%, x 88–100%, 초점 밖). 그녀 뒤 회백 벽, 꺼진 검은 표시 면은 위 가장자리에 아래 끝만(y 0–5%), 시계는 프레임 위 밖. 위(y 6–30%)는 머리 위 민무늬 회백 벽.
- characters: MIRAN(FULL 의상 A + §11-4 '팔짱 · 기댐') — 표정 ① `a polite closed-lip smile with cold, unsmiling eyes`, 고개를 살짝 기울인 비꼼
- props: 꺼진 표시 면(가장자리만, 글자·숫자 없음)
- lighting: LIGHT_L3_DAY · 빨강 0(서류는 프레임 아래)
- dialogue_ref (1): ① 노미란 dialogue "…서하 씨는 참 꼼꼼해. 그치?" (꼬리 ↓ 노미란)
- attach: refs/MIRAN_turnaround.png, refs/MIRAN_expressions.png, refs/LOC_L3_LOBBY_DAY_plate.png
- fx/note: bubble space: 위 띠(x 3–92%, y 6–30%) — 노미란 머리 위 회백 벽(표시 면 아래 끝 y 0–5%는 피한다). / 유머는 표정과 정면 구도로만(땀방울·만화 기호 금지). 이 컷엔 엑스트라 없음. 노미란 쪽 빨강(립·네일) 금지.

### panel_004
- scene_id: S01 / location: LOC_L3_LOBBY · 카운터 상판 클로즈업
- beat: ① 앞면 = 05:59의 서류와 같다 ⟨ECHO:EP02 P35⟩ '퇴근' 사슬 · 긴장 8 · gap_after 120
- size: medium · aspect: **3:4**
- camera: ↺EP02 P35 — 앉은 눈높이 close-up — panel_034와 같은 순간, 그가 내민 서류를 정면에서 → 이번 컷: L3 카운터 상판에 놓인 서류 B를 서하 쪽 위에서(서 있는 눈높이에서 내려다봄)
- composition: [↺EP02 panel_035 틀] 아래 2/3(x 10–90%, y 36–100%) 서류 B 앞면(A4 세로, 크게): 굵은 짙은 회색 이중 테두리, 빈 칸 몇, 아래 1/4 안 오른쪽으로 치우친 서명란 두 줄 — 위 줄 끝 원 안의 **붉은 직인 원**, 아래 줄 빈칸. EP02의 '그가 든 손가락' 자리는 비었다 — 서류는 카운터 상판에 놓였고 아래 왼쪽 가장자리 밑으로 열쇠 꾸러미가 조금 비어져 나온다. 서하의 RIGHT 검지 끝(머스터드 소매 끝)이 아래 가장자리에서 들어와 빈 칸들을 따라 내려간 뒤 **서명란 두 줄 바로 앞**(x 52–80%, y 80–86%)에서 멈춘다. 서류는 끝까지 빈 면. 위 34%(y 0–34%)는 서류 위쪽 초점 밖 — 카운터 너머 간유리 칸막이와 회백 벽(EP02의 차콜 가슴·문틀 자리).
- characters: SEOHA(§10-2 '서류를 끝까지 읽는 손끝' — 손만)
- props: **PROP_HANDOVER_B**(크게) · PROP_KEYS(일부)
- lighting: LIGHT_L3_DAY · 빨강 = 직인 원 하나
- dialogue_ref (2): ① 서하 dialogue "인수자는… 당직 열쇠와 이 밤의 모든 일을 인수한다." (긴 줄 w 60% 이상) ② 서하 dialogue "…인계자는, 퇴근한다." (한 박자 뒤, 짧게) — 둘 다 꼬리 ↙ 아래 왼쪽 = 화면 밖 그녀 (EP02 P35와 KM 동일)
- repeat: EP02 **panel_035** 구도(서류 아래 2/3, 아래 가장자리에서 오는 손끝, 위 34%) · 바뀌는 것: 서류 A → **B**(위 줄 붉은 원), 재우의 손가락 없이 L3 카운터 상판에 놓임, 손끝은 아래 줄 대신 두 서명란 바로 앞에서 멈춤, L3 낮 조명. **P5의 원본**
- attach: _workspace/05_panels/ep02/panel_035.png, refs/PROP_HANDOVER_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 34%(x 3–97%, y 2–34%) — 서류 위 초점 밖 칸막이·벽. ①은 위에 넓게(가운데 x 38 이하, w 60%+), ②는 그 아래 오른쪽 짧게. 서류 면 위에는 두지 않는다. / 서식 낭독은 말풍선으로만 — 서류에 글씨가 생기면 REGEN. 첨부 EP02 P35의 재우 손가락·반지를 따라 그리면 REGEN.

### panel_005
- scene_id: S01 / location: LOC_L3_LOBBY · 카운터 상판 클로즈업(세로) — 뒷면
- beat: ① **질문 반: 뒷면의 한 줄** ⟨이중의미⟩ F-27 심기 · a1 · R2 · 긴장 9 · gap_after **480**
- size: large · aspect: **9:16**
- camera: 서 있는 눈높이에서 내려다본 close-up — panel_004와 같은 쪽, 막 뒤집은 서류 뒷면을 정면에서
- composition: 가운데(x 12–88%, y 20–90%) 막 뒤집은 서류 B의 **뒷면**(A4 세로, 크게): 테두리 없는 새하얀 빈 면, 맨 아래 가장자리 가까이(y 80–84%) 폭 거의 전체를 가로지르는 **가늘고 긴 인쇄된 빈 칸 하나**(앞면 칸과 같은 가는 짙은 회색 선, 자로 그은 듯 고르다) — 그 밖엔 아무것도 없다. 서하의 LEFT 손가락이 종이 왼쪽 위 귀퉁이를 막 들어 올린 채 잡고(x 10–26%, y 18–30%, 머스터드 소매), RIGHT 검지 끝이 아래 오른쪽에서 들어와 그 칸 위에서 멈춘다(x 56–74%, y 80–84%). 종이 밑으로 연회색 카운터 상판과 열쇠 꾸러미 일부(아래 왼쪽, x 8–30%, y 88–96%). 위 18%(y 0–18%)는 카운터 너머 초점 밖 간유리 칸막이.
- characters: SEOHA(§11-3 '뒷면을 든 손' — 손만)
- props: **PROP_HANDOVER_B_BACK** · PROP_KEYS(일부)
- lighting: LIGHT_L3_DAY · **빨강 0**(회차에서 가장 조용한 흰색, style-bible §2-8)
- dialogue_ref (1): ① 서하 dialogue "…인수자는, 당직 명부상 담당자 지위를 함께 인수한다." (w 60% 이상, 꼬리 ↙ 아래 왼쪽 = 화면 밖 그녀)
- repeat: EP03 **panel_004**와 같은 카운터·같은 손(C-3) · 바뀌는 것: 서류만 뒤집혔다(뒷면), 세로 컷
- attach: _workspace/05_panels/ep03/panel_004.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 18%(x 3–97%, y 2–18%) — 초점 밖 칸막이(가운데 x 38 이하, w 60%+). 종이 면·맨 아래 칸 위에는 두지 않는다. / R2: 뒷면에 테두리·글씨·손글씨·덧붙인 띠·테이프·풀 자국·비친 붉은 원 금지, 칸은 인쇄된 선 **하나**(둘 이상이면 REGEN). **`PROP_HANDOVER_pair` 첨부 금지**(앞면 테두리가 옮아온다 — P4 PNG로 대신). 뒤 480px.

### panel_006
- scene_id: S01 / location: LOC_L3_LOBBY · 서하 눈 + 기억 비네트
- beat: ② 담당자가 무엇인지 독자가 떠올린다 ⟨ECHO:E3⟩ a2 · 긴장 8 · gap_after 120
- size: large · aspect: **9:16**
- camera: 눈높이 close-up — 그녀의 눈, 그리고 그 아래 그녀 손의 서류 뒷면 (비네트 자리 = EP02 P55와 같게)
- composition: **위 왼쪽 기억 비네트**(x 4–60%, y 3–30%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP01 panel_009와 같은 부감 각도로 **파란 바인더 표지 위에 납작하게 얹힌 노미란의 LEFT 손바닥**(가는 금색 팔찌시계, 차콜 정장 소매)만. 비네트 위 1/3은 손 너머 초점 밖 어두운 책상 유리. 영수증·인주·칸막이 종이는 넣지 않는다(비네트 안 빨강 0). 비네트 오른쪽(x 62–97%, y 3–30%)은 초점 밖 흐린 회백 벽. 가운데 띠(x 6–94%, y 34–56%) 서하의 두 눈(RIGHT 눈 밑 점 = 화면 왼쪽, 밤샘 잔머리), 아래를 본다. 아래(x 12–88%, y 58–84%) 그녀의 두 손이 든 서류 뒷면의 위쪽 — 새하얀 빈 면(테두리 없음), 머스터드 소매가 손등을 반쯤 덮는다. 아래 띠(x 4–96%, y 85–98%)는 초점 밖 카운터 앞턱의 민무늬 회색 면.
- characters: SEOHA(FULL — 눈 띠 + 밤샘) `eyes wide and still, looking down, a tense, remembering gaze` · MIRAN(비네트 안 손만, 바랜 색)
- props: 비네트 안 PROP_ROSTER(닫힘, 빈 표지) · 큰 컷 PROP_HANDOVER_B_BACK(위쪽 일부)
- lighting: LIGHT_L3_DAY · 비네트는 바랜 색 · 빨강 0
- dialogue_ref (2): ① 노미란(기억) memory "명부엔 내 이름 있어." (비네트 안 위 1/3, 흐린 파란 테 — EP01 P9 첫 문장과 KM 동일) ② 서하 thought "(담당자… 민원인이 찾아오는 사람.)" (큰 컷 아래 띠, 구름형, w 55–60%)
- repeat: 기억 비네트 — 원본 EP01 **panel_009** 첨부(§D). 큰 컷의 서류 뒷면 = EP03 panel_005
- attach: _workspace/05_panels/ep01/panel_009.png, _workspace/05_panels/ep03/panel_005.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: ① 비네트 안 위 1/3 + 그 오른쪽 흐린 벽(x 4–96%, y 3–12%) · ② 아래 띠(x 4–96%, y 85–98%) — 초점 밖 앞턱 면(대본: "생각 말풍선은 큰 컷 아래"). 눈과 서류 면은 덮지 않는다. / 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다. 비네트에 영수증·인주(빨강)가 들어오면 REGEN. EP01 P9 PNG가 먼저.

### panel_007
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_ACROSS
- beat: ② 절차 반격 ① → 막힘 · F-09 진척 · EP07 단서 ①(결재선 위쪽) · R7 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium two-shot — 카운터 줄을 따라 옆에서(VIEW_L3_ACROSS), 허리 위 (panel_002와 같은 카메라)
- composition: panel_002와 같은 배치: 아래 카운터 상판·앞턱(y 66–80%), 화면 왼쪽(x 6–46%, 머리 y 34–48%) 노미란, 화면 오른쪽(x 54–94%, 머리 y 40–54%) 서하. 서하는 절차 모드 — 곧은 시선으로 또박또박. 노미란은 미소 그대로, 카운터 상판의 자기 쪽 가장자리(앞턱 바로 앞, x 22–40%, y 68–76%)에 놓인 **짙은 남색 결재판**(무광, 무지)을 LEFT 손끝으로 톡 두드린다. 상판 오른쪽에 뒤집힌 서류 B(뒷면이 위 — 빈 흰 면)와 열쇠 꾸러미, 눕힌 펜. 뒤로 초점 밖 간유리 칸막이와 이웃 창구(엑스트라 아주 작게). 위 36%(y 0–36%)는 머리 위 흐린 회백 벽.
- characters: SEOHA(SHORT + 밤샘 + L3 토트백) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · MIRAN(FULL 의상 A + §11-4 '결재판 톡') — 표정 ① · L3 엑스트라(초점 밖, 멀리)
- props: **PROP_APPROVAL_FOLDER**(무광 짙은 남색, 글씨·로고·엠블럼 없음) · PROP_HANDOVER_B(뒷면, 작게) · PROP_KEYS · PROP_PEN
- lighting: LIGHT_L3_DAY · 빨강 0(서류 뒷면이 위)
- dialogue_ref (2): ① 서하 dialogue "명부 변경은 총무과 소관입니다." (꼬리 ↘ 서하) ② 노미란 dialogue "총무과엔 벌써 올렸어. 과장님 결재만 나면 끝이야." (w 60% 이상, 꼬리 ↙ 노미란)
- attach: refs/SEOHA_expressions.png, refs/MIRAN_turnaround.png, refs/LOC_L3_LOBBY_DAY_plate.png
- fx/note: bubble space: 위 36%(x 3–97%, y 2–36%) — 머리 위 흐린 벽. ①은 위(가운데 x 50 근처), ②는 그 아래 왼쪽에 넓게(가운데 x 38 이하, w 62%). / 결재판은 명부(밝은 파랑 광택 2공 바인더)와 색·재질이 달라야 한다 — 파랗거나 빨강·글씨·엠블럼이 생기면 REGEN. 책상 면 프레임 밖.

### panel_008
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_ACROSS
- beat: ② 절차 반격 ② → 그녀의 무기가 뒤집힌다 · F-22 진척 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium two-shot — 카운터 줄을 따라 옆에서(VIEW_L3_ACROSS), 허리 위 (panel_002와 같은 카메라)
- composition: 같은 배치. 서하가 품에서 꺼낸 두꺼운 검은 하드커버 일지(회색 천 책갈피)를 카운터 상판 가운데(x 40–62%, y 66–76%)에 올려놓았다 — 두 손이 막 떨어지는 중. 노미란이 앞턱 너머로 몸을 기울여 **LEFT 손바닥**(가는 금색 팔찌시계)을 일지 표지 위에 납작하게 덮는다 — 입만 웃는 미소. 상판 오른쪽 가장자리에 뒤집힌 서류 B와 열쇠(작게), 왼쪽 가장자리에 결재판. 위 36%(y 0–36%)는 흐린 회백 벽.
- characters: SEOHA(SHORT + 밤샘 + L3 토트백) — 표정 ④ · MIRAN(FULL 의상 A + §11-4 '일지를 덮는 손바닥') — 표정 ①
- props: **PROP_DUTYLOG**(닫힘, 표지 글씨 없음) · PROP_APPROVAL_FOLDER · PROP_HANDOVER_B(뒷면, 작게) · PROP_KEYS
- lighting: LIGHT_L3_DAY · 빨강 0
- dialogue_ref (2): ① 서하 dialogue "일지엔… 무단 전가로 남아 있습니다." (w 60% 이상, 꼬리 ↘ 서하) ② 노미란 dialogue "그러니까 정식으로 하자는 거잖아. 이러면 무단이 아니지." (w 60% 이상, 꼬리 ↙ 노미란)
- attach: refs/SEOHA_turnaround.png, refs/MIRAN_turnaround.png, refs/LOC_L3_LOBBY_DAY_plate.png
- fx/note: bubble space: 위 36%(x 3–97%, y 2–36%) — 머리 위 흐린 벽. 두 말풍선 모두 넓다 — ① 위, ② 그 아래, 둘 다 가운데 x 38 이하(w 62%). / 노미란 손에 반지·빨간 네일 없음. 일지 표지에 글씨·라벨 금지.

### panel_009
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_DAYWINDOW 어깨 너머 + 손 전경
- beat: ② 감사·시보 평정 · 긴장 6 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 over-the-shoulder medium — 서하의 RIGHT 어깨 뒤 약간 옆에서 낮 창구, 전경에 그녀의 손
- composition: 아래 오른쪽 전경(x 50–96%, y 64–100%) 카운터 상판 위 서하의 작은 RIGHT 손이 무지 볼펜을 다시 쥐었다 — 너무 세게 쥐어 **마디가 하얗다**(머스터드 소매가 반쯤 덮음, 선명). 손 곁에 뒤집힌 서류 B(빈 흰 뒷면)의 모서리. 아래 왼쪽 가장자리(x 0–20%, y 60–100%) 초점 밖 서하의 머스터드 어깨. 가운데 왼쪽 후경(x 16–58%, 머리 y 40–54%) 앞턱 너머로 몸을 바짝 기울인 노미란: 낮게 웃으며 속삭인다, 웃지 않는 차가운 눈. 앞턱·카운터 상판이 그녀 가슴께를 자른다(책상 면 프레임 밖). 뒤 회백 벽, 시계·표시 면 프레임 밖. 위 38%(y 0–38%)는 머리 위 민무늬 회백 벽.
- characters: MIRAN(FULL 의상 A + §11-4 '낮은 웃음 (후경)') · SEOHA(§11-3 '하얀 마디' 손 + 어깨 끝, SHORT)
- props: PROP_PEN · PROP_HANDOVER_B(뒷면 모서리)
- lighting: LIGHT_L3_DAY · 빨강 0
- dialogue_ref (2): ① 노미란 dialogue "감사 들어오기 전에 정리해야 서로 좋지." ② 노미란 dialogue "시보 평정, 누가 쓰는지 알지?" (둘 다 w 55–60%, 작은 말풍선 — 속삭임, 꼬리 ↓ 노미란)
- attach: refs/MIRAN_turnaround.png, refs/MIRAN_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 노미란 머리 위 벽. ① 위, ② 그 아래, 둘 다 가운데 x 40 이하. 전경 손(x 50–96%, y 64%~)은 덮지 않는다. / 서하 손에 반지·네일 없음, 펜은 종이에 닿지 않는다.

### panel_010
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_DAYWINDOW
- beat: ② **결정타: 다음 신입** ⟨이중의미⟩ a3 · 긴장 7 · gap_after 120
- size: small · aspect: **1:1**
- camera: ↺EP02 P56 — ↺EP01 P8 — 눈높이 medium wide — 방 안쪽(서가 쪽)에서 창구 벽 방향, 무릎 위 → 이번 컷: **L3 민원인 쪽에서 낮 창구 방향**(노미란은 앞턱 뒤라 허리 위)
- composition: [↺EP02 panel_056 `COMP-HANDOVER` 틀] 화면 가운데 왼쪽(x 18–55%) 앞턱 뒤의 노미란: 검정 코트를 어깨에만 걸치고(소매가 비어 늘어짐) 카운터 위로 몸을 서하 쪽으로 기울인다, 입만 웃는 미소, 웃지 않는 눈 — 아무렇지 않은 얼굴. 화면 오른쪽의 서하는 **이번엔 오른쪽 가장자리로 밀려 초점 밖**(x 78–100%, 머스터드 어깨와 옆얼굴 일부, 토트백 끈). 두 사람 머리는 40% 선 아래(y 40–55%). 배경: 양옆 낮은 간유리 칸막이, 노미란 뒤 회백 벽과 꺼진 검은 표시 면의 아래 가장자리(시계는 프레임 위 밖). 카운터 상판에 뒤집힌 서류 B(빈 흰 뒷면)와 열쇠(작게). **책상 면은 앞턱 아래 프레임 밖.** 위 40%(y 0–40%)는 노미란 머리 위 회백 벽.
- characters: MIRAN(FULL 의상 A + §10-3 '카운터에 기댐') — 표정 ① `a polite closed-lip smile with cold, unsmiling eyes` · SEOHA(SHORT, 가장자리 초점 밖)
- props: PROP_HANDOVER_B(뒷면, 작게) · PROP_KEYS(작게) · 꺼진 표시 면(가장자리만)
- lighting: LIGHT_L3_DAY · 빨강 0(서류 뒷면이 위 — EP02 P56의 작은 붉은 원은 이번엔 보이지 않는다)
- dialogue_ref (2): ① 노미란 dialogue "싫으면 말고. 다음 달에 신규 또 와." (w 55–60%) ② 노미란 dialogue "걔는 뒷면까지 안 읽을걸." (짧게) — 둘 다 꼬리 ↙ 노미란
- repeat: EP02 **panel_056** 구도(노미란 가운데 왼쪽·자세·입만 웃는 미소, 머리 40% 선 아래, 위 40%, L3 낮 창구) · 바뀌는 것: 서하는 오른쪽 가장자리 초점 밖(단독 미디엄에 가깝게, style-bible §5-6), 서류는 뒷면이 위(빨강 0)
- attach: _workspace/05_panels/ep02/panel_056.png, refs/MIRAN_turnaround.png, refs/MIRAN_expressions.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 노미란 머리 위 회백 벽(표시 면 가장자리는 피한다). ① 위 왼쪽 넓게(가운데 x 40 이하), ② 그 아래. / 대구: EP01 P8 · EP02 P56과 같은 자세 — 떠넘김의 세 번째 얼굴. 엑스트라 없음.

### panel_011
- scene_id: S01 / location: LOC_L3_LOBBY · 서하 눈 + 기억 비네트
- beat: ② 그 사슬을 그녀는 안다 ⟨ECHO:EP02 P38⟩ a4 · 긴장 7 · gap_after 40
- size: large · aspect: **9:16**
- camera: 눈높이 close-up — 그녀의 눈, 그리고 그 아래 카운터 (비네트 자리 = EP02 P55와 같게)
- composition: **위 왼쪽 기억 비네트**(x 4–64%, y 3–33%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP02 panel_038과 같은 각도·같은 순간(05:59): 비네트 위 1/3(y 3–12%)은 유리 위쪽 너머 어둑한 복도, 그 아래 비네트 오른쪽(x 40–62%, y 12–24%)에 빛 가장자리의 재우 옆얼굴(반만 따뜻, 다크서클, 웃자란 앞머리), 비네트 아래 가운데(x 18–44%, y 20–31%) 스탠드의 노란 원 안으로 처음 들어온 그의 RIGHT 손(검지 은반지, 차콜 니트 + 흰 커프스)이 책상 위 열쇠 꾸러미 쪽으로 내려간다. 비네트 오른쪽 바깥(x 66–97%, y 3–33%)은 초점 밖 흐린 회백 벽. 가운데 띠(x 6–94%, y 36–58%) 서하의 두 눈(RIGHT 눈 밑 점 = 화면 왼쪽, 밤샘 잔머리), 아래를 본다. 아래(x 14–86%, y 62–100%) 초점 밖 카운터 상판 위 뒤집힌 서류 B(빈 흰 뒷면)와 열쇠 꾸러미 — 비네트 속 열쇠와 운율.
- characters: SEOHA(FULL — 눈 띠 + 밤샘) `quiet, heavy eyes looking down, remembering` · JAEWOO(비네트 안 손 + 옆얼굴, 바랜 색)
- props: 비네트 안 PROP_KEYS · 큰 컷 PROP_HANDOVER_B(뒷면, 초점 밖) · PROP_KEYS(초점 밖)
- lighting: LIGHT_L3_DAY · 비네트는 바랜 색(비네트 안 스탠드 노랑도 바랬다) · 빨강 0
- dialogue_ref (1): ① 전임자(기억) memory "내가 도망쳐서 네가 온 거잖아." (비네트 안 위 1/3, 흐린 파란 테 — EP02 P38 ①과 KM 동일)
- repeat: 기억 비네트 — 원본 EP02 **panel_038** 첨부(§D). 비네트 배치는 EP02 P55와 같다
- attach: _workspace/05_panels/ep02/panel_038.png, refs/JAEWOO_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 비네트 안 위 1/3(x 4–64%, y 3–12%), 필요하면 오른쪽 흐린 벽까지(x 4–96%). 비네트 속 재우 얼굴(y 12% 아래)과 눈 띠는 덮지 않는다. / 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다. 반지 = RIGHT 검지, 흰 커프스 보이게. EP02 P38 PNG가 먼저.

### panel_012
- scene_id: S01 / location: LOC_L3_LOBBY · 서하 클로즈업
- beat: ② 계산(번호 매기기 습관) · 동기(공정성 ④) · 긴장 7 · gap_after 120
- size: small · aspect: **1:1**
- camera: 눈높이보다 약간 위에서 close-up — 서류를 내려다보는 그녀의 얼굴
- composition: 서하의 얼굴이 가운데 아래(x 14–86%, y 40–92%), 고개를 숙여 아래 가장자리의 서류를 본다(RIGHT 눈 밑 점 = 화면 왼쪽, 밤샘 잔머리, 시스루 앞머리, 네이비 목줄). 아래 가장자리(x 8–92%, y 90–100%) 그녀 손에 든 서류 B 뒷면의 위쪽 가장자리(빈 흰 면). 위 40%(y 0–40%)는 초점 밖 간유리 칸막이와 회백 벽.
- characters: SEOHA(FULL + 밤샘 + L3 토트백 끈) `quietly calculating, eyes lowered to the paper, lips pressed together`
- props: PROP_HANDOVER_B_BACK(가장자리만)
- lighting: LIGHT_L3_DAY · 빨강 0
- dialogue_ref (2): ① 서하 thought "(하나. 내가 안 받으면… 다음 사람이 받는다.)" ② 서하 thought "(둘. 그 사람은… 뒷면을 안 읽는다.)" (구름형, 꼬리 없음, 둘 다 w 50–55%)
- attach: refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png, _workspace/05_panels/ep03/panel_005.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 초점 밖 칸막이·벽. ① 위 왼쪽, ② 그 아래 조금 오른쪽(가운데 x 50 이하). 이마(y 40%)는 덮지 않는다. / 다크서클 금지(피로는 잔머리·눈꺼풀로만).

### panel_013
- scene_id: S01 / location: LOC_L3_LOBBY · **VIEW_L3_STAFFSIDE**(직원석 첫 공개)
- beat: ② 결정 직전 정지 · **F-18 진척 ①**(그림만, 언급 0) · a5 ①(명부 위치) · 긴장 8 · gap_after **480**
- size: large · aspect: **9:16**
- camera: 서 있는 눈높이 medium wide — 카운터 안쪽 직원석, 노미란 책상 바로 뒤 오른쪽에서 카운터 쪽으로(시계·표시 면은 카메라 뒤)
- composition: 앞쪽 아래(x 8–94%, y 56–92%) 노미란의 낮 창구 책상(연회색 라미네이트, 가는 철제 다리) 상판: 뒤쪽 가운데 꺼진 모니터(검은 화면), **뒤쪽 오른쪽 귀퉁이**(x 70–92%, y 56–68%)에 회색 철제 서류 받침(빈 종이 몇 장)·펜꽂이·뚜껑 닫힌 작은 나무 직인 상자, 그 곁에 옆으로 눕힌 **손바닥만 한 광택 빨간 비닐테이프 롤**(x 82–92%, y 62–68%, 짧게 찢긴 꼬리 — 작지만 모양과 빨강이 또렷, 아무도 보지 않는다). 책상 왼쪽 그녀 팔꿈치 옆(x 14–36%, y 70–86%) **파란 2공 바인더**(빈 표지). 가운데 오른쪽(x 46–74%, 머리 y 30–40%) 책상 앞에 선 노미란의 뒷모습 3/4(검정 코트는 어깨에만, 매끈한 단발, 금테 하프림 옆선) — 앞턱 쪽으로 몸을 기울여 **LEFT 손끝**으로 카운터 상판 위 서류의 빈 아래 줄을 가리킨다(손 x 36–50%, y 48–54%); 그녀의 RIGHT 손은 몸 곁에 내려 롤 쪽으로 가지 않는다(가리키는 손과 롤 사이 팔 길이 이상). 그 너머 카운터 상판(y 46–56%): 서류 B 앞면(위 줄 작은 붉은 원, 작게 x 34–52%, y 48–55%), 노미란 쪽 가장자리에 짙은 남색 결재판. 카운터 너머 민원인 쪽(x 16–42%, 머리 y 30–40%) 서 있는 서하(머스터드 카디건, LEFT 어깨 토트백, 펜을 든 손), 서류를 내려다보는 굳은 얼굴. 화면 왼쪽(x 0–14%, y 54–90%) 한 뼘 높이 아주 낮은 간유리 칸막이 너머 옆 책상 = 서하의 낮 책상(꺼진 모니터, 펜꽂이뿐), 회색 사무용 의자는 **비어 있다**. 그 너머 밝은 로비와 남회색 대기 의자(초점 밖, 엑스트라 아주 작게). 위 22%(y 0–22%)는 2층 높이 로비의 높은 윗벽과 천장(초점 밖).
- characters: MIRAN(FULL 의상 A + §11-4 '아래 줄 가리키기') — 표정 ①(옆선만) · SEOHA(SHORT + 밤샘 + L3 토트백, 카운터 너머) `still and tense, looking down at the form` · L3 엑스트라(로비 멀리, 초점 밖)
- props: VIEW_L3_STAFFSIDE 책상 세트 · **PROP_TAPE_ROLL_DESK** · PROP_ROSTER(닫힘, `lying on the left side of the desk, by her elbow`) · PROP_APPROVAL_FOLDER · PROP_HANDOVER_B(앞면, 작게) · 꺼진 모니터 둘(검은 화면, 아이콘·글자 없음)
- lighting: LIGHT_L3_DAY(같은 천장등) · 빨강 = style-bible §2-4-2 P13 문장 그대로: `The only red in the image is the small roll of red tape lying at the back corner of the desk and the small red seal mark on the form on the counter.`
- dialogue_ref (1): ① 노미란 dialogue "자, 서하 씨." (짧게, 꼬리 ↓ 노미란)
- repeat: — (**P16 · P18의 원본**: 같은 직원석·같은 책상 세트)
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/PROP_HANDOVER_pair.png
- fx/note: bubble space: 위 띠(x 3–80%, y 2–20%) — 로비의 높은 윗벽·천장(초점 밖). 서하 얼굴·롤·서류 받침은 덮지 않는다. / F-18: 롤은 배경 무게(펜꽂이·서류 받침과 같은 무게 — 가운데 배치·특별한 빛·초점 강조 금지)지만 모양과 빨강은 또렷하게(EP19 리플레이 원본). 롤에 손·소매·코트·결재판·시선이 닿거나 안 보이면 REGEN. **서하 의자는 비어 있다**(토트백은 그녀 어깨 — art-director 결정, 대본 괄호의 '의자 등받이 토트백'을 대신한다). 모니터에 화면 내용 금지. 노미란 쪽 빨강(립·네일·결재판) 금지. 뒤 480px.

### panel_014
- scene_id: S01 / location: LOC_L3_LOBBY · 카운터 상판 클로즈업(세로)
- beat: ③ **T-a 뒤집기 ①: 알면서 서명한다** ⟨반전⟩ · 테마 "혼자 떠안기" · 긴장 8 · gap_after 240
- size: large · aspect: **9:16**
- camera: ↺EP02 P58 — high-angle close-up — 서하 쪽 위에서 카운터 위 서류 B와 펜
- composition: [↺EP02 panel_058 · EP03 panel_001 틀] 가운데(x 12–88%, y 26–86%) 같은 서류 B 전체(A4 세로, 크게): 굵은 이중 테두리, 빈 칸, 위 줄 끝 원 안의 붉은 직인 원, 아래 줄(y 76%). 아래 오른쪽에서 들어온 서하의 작은 RIGHT 손(머스터드 소매가 반쯤 덮음)이 쥔 무지 볼펜 끝이 **아래 줄에 닿았다**(펜 끝 x 62–68%, y 74–77%) — 펜 끝 아래 **아주 작은 검은 잉크 점 하나**, 글씨는 없다. 서류 밑으로 열쇠 꾸러미(아래 왼쪽, x 14–34%, y 82–90%). 노미란 손은 없다. 그녀의 얼굴은 프레임 밖. 위 22%(y 0–22%)는 카운터 너머 초점 밖 간유리 칸막이, 아래 8%(y 92–100%)는 카운터 앞턱의 민무늬 회색 면.
- characters: SEOHA(§11-3 '서명 순간' — 손만)
- props: **PROP_HANDOVER_B** + **PROP_HANDOVER_B_SIGN** · PROP_PEN · PROP_KEYS
- lighting: LIGHT_L3_DAY · 빨강 = 위 줄 직인 원 하나
- dialogue_ref (1): ① 서하 thought "(알고… 받는 거야.)" (구름형, 짧게)
- repeat: EP03 **panel_001**(= EP02 **panel_058**) 같은 서류·같은 카메라·같은 손 자리 · 바뀌는 것: 펜 끝이 아래 줄에 **닿는다**(잉크 점 하나), 노미란의 검지 없음
- attach: _workspace/05_panels/ep03/panel_001.png, _workspace/05_panels/ep02/panel_058.png, refs/PROP_HANDOVER_pair.png
- fx/note: bubble space: 위 22%(x 3–90%, y 2–21%) — 초점 밖 칸막이. / 서명 글씨·이름·획이 생기면 REGEN(잉크 점 하나까지). 뒤 240px.

### panel_015
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_DAYWINDOW(노미란 미디엄)
- beat: ③ 풀네임이 기록에 오른다 ⟨ECHO:EP01 P8⟩ **F-10 진척 · b1** · R8 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium — 민원인 쪽에서 낮 창구의 노미란, 허리 위 (panel_003과 같은 카메라)
- composition: panel_003과 같은 자리(x 22–74%, 머리 y 32–46%)의 노미란이 이번엔 반듯이 서서, 가슴 앞에 펼쳐 든 짙은 남색 결재판(x 26–64%, y 52–80%)의 금속 클립 아래로 서류 B를 끼우며 소리 내어 읽는다 — 만족스러운 닫힌 입 미소. 서류 앞면이 보인다(이중 테두리, 위 줄 붉은 원) — **아래 줄은 클립과 그녀의 LEFT 손가락에 가려 보이지 않는다.** 오른쪽 가장자리(x 84–100%, y 40–100%) 초점 밖 서하의 머스터드 어깨와 토트백 끈. 아래 카운터 상판·앞턱(y 82–100%), 책상 면 프레임 밖. 양옆 간유리 칸막이. 위(y 6–30%)는 회백 벽, 표시 면 아래 끝만 위 가장자리(y 0–5%), 시계는 프레임 위 밖.
- characters: MIRAN(FULL 의상 A + §11-4 '결재판에 끼움') `a satisfied closed-lip smile, reading aloud in a businesslike way` · SEOHA(가장자리, 초점 밖)
- props: **PROP_APPROVAL_FOLDER**(열림, 안의 금속 클립) · PROP_HANDOVER_B(앞면, 아래 줄 가림 — style-bible §7-7 서명 뒤 서류 규칙)
- lighting: LIGHT_L3_DAY · 빨강 = 서류 B 위 줄 직인 원 하나
- dialogue_ref (2): ① 노미란 dialogue "인수자, 강서하 주무관." ② 노미란 dialogue "잘 생각했어." (둘 다 꼬리 ↓ 노미란)
- attach: refs/MIRAN_turnaround.png, refs/MIRAN_expressions.png, refs/PROP_HANDOVER_pair.png
- fx/note: bubble space: 위 띠(x 3–80%, y 6–30%) — 머리 위 회백 벽(표시 면 아래 끝은 피한다). ① 위 왼쪽, ② 그 아래. / 아래 줄이 보이거나 서류·결재판에 글씨·엠블럼·빨강이 생기면 REGEN. EP04 P1–5 리플레이 원본(F-10) — 노미란의 입과 서류가 또렷하게.

### panel_016
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_STAFFSIDE 두 손 부감
- beat: ③ **명부가 그녀에게**(블랙코미디, 유머 ③) ⟨ECHO:EP01 P9⟩ a5 · F-48 거울 · F-18 ② · b2 · 긴장 6 · gap_after 40
- size: small · aspect: **1:1**
- camera: ↺EP02 P54 — ↺EP01 P9 — high-angle 약 45° 부감, 책상 와이드 — 회전의자 뒤쪽 위에서, 책상의 좌우 = 앉은 사람의 좌우 → 이번 컷: **L3 직원석**, 서하 책상 뒤 위에서(두 책상 사이 아주 낮은 간유리 칸막이가 가운데)
- composition: [↺EP02 panel_054 `COMP-DESK`(두 손) 틀] 위 36%(y 0–36%)는 책상 너머 — 카운터 높은 앞턱의 뒷면과 연회색 상판, 그 너머 밝은 로비(초점 밖). 가운데~아래 두 책상의 연회색 상판, 그 사이를 가르는 한 뼘 높이 간유리 칸막이(x 56–62%, y 38–80%, 세로). 오른쪽 위에서 노미란의 팔이 들어온다(팔꿈치에서 잘림 — EP01 P9 · EP02 P54의 오른쪽 가장자리 팔 자리): **LEFT 손바닥**(가는 금색 팔찌시계, 차콜 정장 소매 + 아이보리 커프스)이 파란 2공 바인더를 칸막이 너머 왼쪽 서하의 책상 위로 밀어 넘긴다(바인더 x 30–60%, y 44–66%, 칸막이 위를 막 넘는 중). 아래 가운데(x 26–56%, y 74–96%) 서하 책상 위, 열쇠 꾸러미를 덮고 있는 그녀의 작은 손(머스터드 소매) — 바인더를 받지 않고 멈췄다. 왼쪽 아래(x 0–26%, y 72–100%) 위·뒤에서 본 서하의 머스터드 어깨와 의자 등받이에 걸린 네이비 토트백(초점 밖) — EP01 P9 서하 자리. 오른쪽 가장자리 귀퉁이(x 86–100%, y 36–50%, 노미란 책상 쪽) **초점 밖 빨간 롤** — 프레임에 반쯤 잘린다. 노미란 책상의 꺼진 모니터 가장자리(검은 화면)만 오른쪽 위.
- characters: MIRAN(§10-3 LEFT 손 문장 + §11-4 '바인더를 밀어 넘김' — 팔·손만) · SEOHA(손 + 어깨, SHORT)
- props: **PROP_ROSTER**(닫힘, 빈 표지) · PROP_KEYS · PROP_TAPE_ROLL_DESK + `softly out of focus at the corner of the frame` · 토트백(의자 등받이)
- lighting: LIGHT_L3_DAY · 빨강 = style-bible §2-4-2 P16 문장: `The only red in the image is the out-of-focus roll of red tape at the corner of the frame.`
- dialogue_ref (2): ① 노미란 dialogue "이제 명부도 네 거야." ② 노미란 dialogue "수당도 네 앞으로 나와. 좋잖아?" (둘 다 꼬리 ↗ 오른쪽 위 = 프레임 밖 노미란)
- repeat: EP02 **panel_054**(= EP01 panel_009) `COMP-DESK` 두 손 구도(부감·오른쪽에서 들어오는 노미란 팔·아래 가운데 서하 손·왼쪽 아래 서하 어깨·위 빈 띠) · 바뀌는 것: 장소 L3 카운터 상판 → **직원석 두 책상**, 방향 반대 — 손바닥이 서류·열쇠 대신 **명부 바인더**를 서하 쪽으로 밀어 넘긴다, 열쇠는 이미 서하 손 아래, 귀퉁이에 초점 밖 롤, 서류 B 없음. 직원석·책상 세트는 EP03 panel_013 그대로
- attach: _workspace/05_panels/ep02/panel_054.png, _workspace/05_panels/ep03/panel_013.png, refs/MIRAN_turnaround.png
- fx/note: bubble space: 위 36% 왼쪽~가운데(x 3–80%, y 2–36%) — 카운터 앞턱 뒷면과 초점 밖 로비. 오른쪽 귀퉁이의 롤(x 86–100%, y 36–50%)은 덮지 않는다. ① 위, ② 그 아래(w 55%, 가운데 x 45 이하). / 롤은 초점 밖, 노미란 손과 팔 길이 이상 — 손·소매가 롤 쪽으로 가면 REGEN. 첨부 EP02 P54의 서류 B·카운터를 따라 그리면 REGEN(이 컷엔 서류 없음). 유머는 손짓의 뻔뻔함으로만.

### panel_017
- scene_id: S01 / location: LOC_L3_LOBBY · **VIEW_L3_STAIRS**
- beat: ③ 결재는 위로 · **EP07 단서 ②** · R18 · 긴장 6 · gap_after 120
- size: large · aspect: **9:16**
- camera: 서 있는 눈높이 wide — 홀 앞쪽에서 안쪽 왼쪽 구석으로 비스듬히(VIEW_L3_STAIRS)
- composition: 화면 왼쪽을 따라 간유리 칸막이의 긴 민원 창구 카운터가 안쪽으로 멀어진다(x 0–40%, y 46–86%). 카운터 안쪽 끝 너머에서 광택 베이지 석재의 넓은 계단이 안쪽 벽을 따라 오른쪽 위로 오른다(짙은 회색 금속 난간 + 매끈한 나무 손잡이, x 34–100%, y 6–66%), 계단 꼭대기는 오른쪽 위 프레임 밖(x 80–100%, y 0–10%). 계단 중간(x 50–68%, 머리 y 24–34%) 뒤에서 본 3/4의 노미란이 오른다: 검정 코트는 어깨에만(소매가 비어 늘어짐), **짙은 남색 결재판을 LEFT 겨드랑이에**(또렷하게). 아래 왼쪽(x 18–32%, 머리 y 58–64%) 카운터 안쪽에 작게 선 서하: 파란 바인더를 가슴에 안고(작게, 또렷한 파랑) 계단 쪽을 올려다본다. 안쪽 벽 오른쪽 구석 작게(x 84–96%, y 58–72%) 지하로 내려가는 무표시 회색 철문. 오른쪽 아래(x 50–100%, y 72–100%) 남회색 대기 의자 줄과 광택 바닥, 초점 밖 엑스트라 몇(의자·바닥에만). 시계는 프레임 왼쪽 위 밖. 위 왼쪽(x 3–66%, y 2–20%)은 2층 높이 홀의 높은 윗벽과 천장.
- characters: MIRAN(FULL 의상 A + §11-4 '계단') — 뒷모습 3/4, 얼굴 옆선만 · SEOHA(SHORT + 밤샘, 작게) · L3 엑스트라(§11-4 원문, 초점 밖, 의자·바닥에만)
- props: **PROP_APPROVAL_FOLDER**(LEFT 겨드랑이) · PROP_ROSTER(서하 품, 작게) · (시계 프레임 밖 — 들어오면 `PROP_CLOCK_TIME_0920`)
- lighting: LIGHT_L3_DAY(같은 천장등, 광택 바닥에 평평한 빛의 옅은 반사) · 빨강 0
- dialogue_ref (1): ① 노미란 dialogue "과장님 결재 받고 올게." (w 55–60%, 꼬리 ↘ 계단의 노미란)
- attach: refs/LOC_L3_LOBBY_DAY_plate.png, refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 왼쪽 띠(x 3–66%, y 2–20%) — 홀의 높은 윗벽·천장(계단 꼭대기 x 80–100%와 노미란 머리는 피한다), 가운데 x 36 이하로 넓게. / 위층에 사람·표지·국기 금지, 계단 위는 노미란뿐. 운율(위 = 넓고 밝은 돌계단의 결재판 / 아래 = 작은 철문·명부)은 그림으로만. 시계가 들어오면 09:20(10:10·3:00이면 REGEN). 노미란 코트 소매에 팔이 들어가면 REGEN.

### panel_018
- scene_id: S01 / location: LOC_L3_LOBBY · VIEW_L3_STAFFSIDE(서하 책상)
- beat: ③ **바닥: 처음으로 졌다** · R15 · 긴장 5 · gap_after **480**
- size: large · aspect: **9:16**
- camera: 서 있는 눈높이 medium — 카운터 안쪽 직원석, 서하 책상 바로 뒤 오른쪽에서 카운터 쪽으로 (panel_013의 뷰를 왼쪽 이웃 책상으로 옮김)
- composition: 앞쪽 아래(x 8–92%, y 60–94%) 서하의 낮 책상(연회색 라미네이트, 꺼진 모니터, 펜꽂이뿐): 가운데(x 30–66%, y 66–84%) 파란 바인더 위에 검은 일지, 그 위에 열쇠 꾸러미, 그 위에 **그녀의 두 손이 납작하게** 얹혀 있다(머스터드 소매). 회색 사무용 의자에 앉은 서하(x 30–70%, 머리 y 36–48%), 고개를 숙인 옆얼굴(화면 쪽 = 그녀의 RIGHT 옆선). 의자 등받이에 네이비 토트백. 오른쪽 가장자리 너머 노미란 책상은 프레임 밖(롤 없음); 왼쪽 가장자리에 다음 책상과의 아주 낮은 간유리 칸막이 일부. 책상 너머 카운터 앞턱 뒷면과 상판(y 48–58%), 그 너머 밝은 로비와 대기 의자(초점 밖, 엑스트라 아주 작게). 위 30%(y 0–30%)는 로비의 높은 윗벽·천장(초점 밖).
- characters: SEOHA(FULL + 밤샘 + §11-3 '낮 책상의 바닥') — 표정 ③ 변주 `blank, unfocused eyes looking down at her hands, slack face`
- props: PROP_ROSTER(닫힘) · PROP_DUTYLOG(닫힘) · PROP_KEYS · 토트백(의자 등받이) · 꺼진 모니터(검은 화면)
- lighting: LIGHT_L3_DAY(패배도 빛을 바꾸지 않는다) · 빨강 0
- dialogue_ref (1): ① 서하 thought "(…처음으로, 졌다.)" (구름형, 짧게)
- repeat: EP03 **panel_013**의 직원석 뷰·책상 세트(C-3) · 바뀌는 것: 카메라가 왼쪽 이웃 책상(서하)으로, 노미란 책상·롤은 프레임 밖, 의자에 서하
- attach: _workspace/05_panels/ep03/panel_013.png, refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 30%(x 3–90%, y 2–28%) — 로비의 높은 윗벽(초점 밖). / 롤이 보이면 REGEN(P13 · P16뿐). 첨부 P13의 노미란 책상·롤을 따라 그리면 REGEN. 다크서클 금지. 뒤 480px.

--- SCENE BREAK --- (S01 → S02 · L3 낮 → L2 앵커 복도 · 22:00 — 지하로 돌아온다)

### panel_019
- scene_id: S02 / location: **LOC_L2_CORRIDOR** · VIEW_ANCHOR
- beat: ④ 앵커 대구(휴대폰 대신 명부) · a5 ② · 긴장 6 · gap_after 240
- size: large · aspect: **9:16**
- camera: ↺EP01 P7·P28 · EP02 P44 — 복도 안 눈높이, 방화문을 정면으로 본 frontal medium — 허리 위
- composition: [↺EP01 panel_007 `COMP-ANCHOR` 틀] 서하가 화면 가운데(x 25–75%), 머리 y 30–45%, 허리 위까지. 그녀 바로 뒤에서 무거운 회색 철제 방화문이 닫히는 중(가로 밀대가 보임). 문 위 가운데(x 50%, y 8–20%)에 숫자 없는 흰 둥근 시계: 정확히 10시 정각(짧은 시침 = 10시 방향, 긴 분침 = 정확히 위). **이번엔 휴대폰이 없다:** 두 팔로 파란 2공 바인더와 그 위 두꺼운 검은 일지를 가슴에 안고(x 32–68%, y 50–72%), RIGHT 손가락(정면이라 화면 왼쪽)에 열쇠 꾸러미가 걸려 늘어진다. LEFT 어깨에 네이비 캔버스 토트백(화면 오른쪽), 마른 옷, 밤샘 잔머리. 양옆 연녹 벽과 진녹 띠, 위로 노출 배관. 위 왼쪽(x 3–38%, y 3–26%)은 민무늬 벽과 배관뿐. 방화문 오른쪽 가장자리 중간(x 72–96%, y 34–50%)은 민무늬 문면.
- characters: SEOHA(FULL + 밤샘 + §11-3 '앵커 (22:00)') — 표정 ⑧ 변주 `a flat, quiet, set face, tired heavy eyelids`
- props: PROP_CLOCK(10:00 — VIEW_ANCHOR 문장 그대로) · PROP_ROSTER(닫힘, 빈 표지) · PROP_DUTYLOG(닫힘) · PROP_KEYS · 토트백
- lighting: LIGHT_CORRIDOR(EP01 P7·P28과 같은 빛) · 빨강 0(소화전함은 회색)
- dialogue_ref (sfx): sfx "쿵" (방화문 — EP01 P7·P28과 KM 동일)
- repeat: EP01 **panel_007 · panel_028** · EP02 panel_044 `COMP-ANCHOR`(카메라 위치·거리·높이, 방화문, 문 위 시계 10:00, 위 왼쪽 빈자리, 정면) · 바뀌는 것: 귀의 휴대폰 → 품에 안은 명부·일지, RIGHT 손가락의 열쇠, 표정
- attach: _workspace/05_panels/ep01/panel_007.png, refs/SEOHA_turnaround.png, refs/LOC_L2_CORRIDOR_plate.png
- fx/note: bubble space: sfx — 방화문 오른쪽 가장자리 중간의 민무늬 문면(x 72–96%, y 34–50%, EP01 P7과 같은 자리). 위 왼쪽(x 3–38%, y 3–26%)은 P7·P28과 같은 빈자리로 남긴다. 시계 면은 절대 덮지 않는다. / 시계가 10:10이면 REGEN. 휴대폰이 생기면 REGEN. 좌우: 열쇠 = RIGHT 손(화면 왼쪽), 토트백 = LEFT 어깨(화면 오른쪽). 바인더·일지 표지에 글씨 금지.

--- SCENE BREAK --- (S02 → S03 · L2 복도 → L1 당직실 · 22:0x)

### panel_020
- scene_id: S03 / location: LOC_L1_DUTYROOM · VIEW_DESK
- beat: ④ 착석 · 선임 · 유머 ④(건조) · F-16 연속성 · 긴장 5 · gap_after 40
- size: small · aspect: **1:1**
- camera: ↺EP02 P14 — ↺EP01 P33 — high-angle 약 45° 부감, 책상 와이드 — 회전의자 뒤쪽 위에서, 책상의 좌우 = 앉은 사람의 좌우
- composition: [↺EP02 panel_014 `COMP-DESK` 틀] 위 38%(y 0–38%)는 책상 너머 통유리 창구와 그 너머 어둑한 복도. 가운데~아래에 책상 고정 배치: 앞 왼쪽 흰 거위목 스탠드, 앞 오른쪽 베이지 내선 전화, 오른쪽에 파란 2공 바인더와 그 위쪽 절반에 얹힌 검은 일지, 안쪽 가운데 철제 서류함의 낮은 연노랑 영수증 묶음(**높이 = EP02 P14**), 그 옆 누런 테이프 디스펜서, 작은 나무 상자의 직인과 둥근 인주 케이스, 펜꽂이. 왼쪽 끝 칸막이에 작은 수칙 종이(왼쪽 가장자리, y 40–60%). **이번 컷:** 서하의 두 손(머스터드 소매)이 바인더를 오른쪽 제자리에 막 내려놓고 그 위에 일지를 얹는 중(손 x 56–80%, y 52–70%), 열쇠 꾸러미는 바인더 옆(EP02 P14 자리). 오른쪽 가장자리에서 선임의 크고 거친 그을린 손(빛바랜 슬레이트블루 점퍼 소맷부리, 반지·시계 없음)이 들어와(EP02 P14 재우 팔 자리, 손 x 80–98%, y 66–80%) 책상 오른쪽 앞 모서리에 무지 흰 종이컵을 놓는다. 아래 가운데~왼쪽(x 15–55%, y 82–100%) 앉은 서하의 정수리·낮은 포니테일·어깨(위·뒤에서, 초점 밖). 가운데 앞은 빈 유리 상판(수첩·빨간 롤 없음).
- characters: SEOHA(SHORT 위·뒤 + 두 손) · SEONIM(§11-4 '손' 신규 문장 — 손만)
- props: PROP_RECEIPTS(EP02 P14 높이 그대로 — 더 높이지 않는다, 셀 수 없게) · PROP_ROSTER · PROP_DUTYLOG · PROP_KEYS · PROP_SEAL · PROP_DISPENSER · PROP_EXT_PHONE · PROP_LAMP · PROP_PAPER_CUP · PROP_RULESHEET_SMALL — 전부 빈 면
- lighting: LIGHT_L1 + LIGHT_LAMP(작은 노란 원) · 빨강 = 인주 케이스 · 영수증의 작은 붉은 원 · 칸막이 종이 테이프뿐(롤 없음)
- dialogue_ref (2): ① 선임 dialogue "명부를 네가 들고 왔어?" (꼬리 ↗ 오른쪽 가장자리 = 프레임 밖 선임) ② 서하 dialogue "…이제 제 거래요." (꼬리 ↙ 아래 왼쪽 = 서하)
- repeat: EP02 **panel_014**(= EP01 panel_033) `COMP-DESK` 같은 앵글·책상 고정 배치·영수증 높이·위 38% · 바뀌는 것: 재우의 손 대신 **선임의 손**이 종이컵을 놓는다(오른쪽 가장자리), 서하의 두 손이 명부·일지를 제자리에, 수첩·롤 없음, 서하 머리는 같은 자리
- attach: _workspace/05_panels/ep02/panel_014.png, refs/LOC_L1_DESK_plate.png, refs/SEONIM_turnaround.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 책상 너머 유리와 어두운 복도. ① 위(꼬리 오른쪽), ② 그 아래 왼쪽. / F-16: 영수증 높이 = EP02 P14(높아지면 REGEN). 첨부 EP02 P14의 롤·수첩·재우 손(은반지·흰 커프스)을 따라 그리면 REGEN. 선임 손에 반지·시계 금지.

### panel_021
- scene_id: S03 / location: LOC_L1_DUTYROOM · 일지 클로즈업(위에서)
- beat: ④ **반려 근거 심기** · r1 · 법칙 ① · 긴장 6 · gap_after 40
- size: small · aspect: **1:1**
- camera: 위에서 내려다본 close-up — 펼친 일지 새 면 (EP01 P48 구도 금지 — F-23 보호)
- composition: 아래 64%(x 4–96%, y 36–100%) 펼친 두꺼운 검은 하드커버 일지의 새 면 두 쪽: 빈 줄만, 회색 천 책갈피가 가운데 접힘선에서 늘어진다, 스탠드의 노란 원이 면 위에. 아래 오른쪽에서 들어온 서하의 작은 RIGHT 손(머스터드 소매가 반쯤 덮음)이 무지 볼펜을 쥐고, 펜 끝이 오른쪽 면 **첫 줄**(x 52–60%, y 44–48%)에 닿아 있다 — 글자는 없다. 그녀의 다른 손·손바닥은 프레임 밖(상판을 짚지 않는다). 위 36%(y 0–36%)는 일지 너머 초점 밖 어둠 — 스탠드 원 밖, 무엇도 알아볼 수 없게(칸막이·수칙 종이·상판 모서리가 읽히지 않는다).
- characters: SEOHA(§11-3 '일지 첫 줄' — 손만)
- props: **PROP_DUTYLOG**(펼침 `open to blank ruled lines`, 크게) · PROP_PEN
- lighting: LIGHT_L1 + LIGHT_LAMP(일지 면에 따뜻한 원) · 빨강 0
- dialogue_ref (2): ① 서하(쓰며 소리 내어) dialogue "22시, 당직 개시." ② 서하(쓰며 소리 내어) dialogue "당직자와 담당자… 동일인." (w 55–60%) — 둘 다 꼬리 ↘ 아래 오른쪽 = 그녀 손 쪽
- repeat: — (**P44의 원본**: 같은 일지 면)
- attach: refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 36%(x 3–97%, y 2–36%) — 일지 너머 초점 밖 어둠. ① 위, ② 그 아래(가운데 x 40 이하). 일지 면 위에는 두지 않는다. / F-23: EP01 P48 구도(상판을 짚은 손바닥 + 초점 밖 칸막이) 금지 — 손바닥·칸막이가 보이면 REGEN. 펜 아래 글씨·숫자·이름이 생기면 REGEN. P44가 이 면을 다시 쓰므로 면·줄·책갈피를 또렷하게.

### panel_022
- scene_id: S03 / location: LOC_L1_DUTYROOM · VIEW_DRAWERS
- beat: ④ 서랍 두 칸 · 반려 도구 · **F-20 ①** · r2(체호프) · 긴장 6 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 무릎 높이 low-angle — 책상 오른쪽 끝 옆, 서랍 3단을 비스듬히
- composition: 화면 가운데~오른쪽(x 34–86%, y 36–100%) 낡은 회녹색 철제 책상 오른쪽 끝 아래 서랍 3단(빈 금속 손잡이, 빈 라벨 칸): **맨 위 칸 열림**(y 36–54%) — 무지 펜 몇 개와 뚜껑 닫힌 둥근 철제 인주 케이스; **둘째 칸 열림**(y 56–76%) — 반듯한 빈 흰 종이 묶음(반려 통지, 글씨 없음), 그녀의 작은 RIGHT 손(머스터드 소매)이 묶음 위에 얹혀 확인한다; **맨 아래 칸 닫힘**(y 78–98%) — 강조 없이 평범하게. 왼쪽 아래(x 0–32%, y 66–100%) 맨 아래 칸 바로 앞의 그녀의 무릎(네이비 슬랙스). 회색 테라조 바닥, 책상 밑 어두운 공간. 위 34%(y 0–34%)는 서랍 위 책상 옆판의 그늘진 회녹색 철판과 그 위 초점 밖 어두운 방 — 스탠드의 노란 빛은 책상 가장자리에만 살짝.
- characters: SEOHA(무릎 + 손 — style-bible VIEW_DRAWERS P22 문장)
- props: VIEW_DRAWERS + P22 문장 · **PROP_NOTICE_STACK** · 인주 케이스(뚜껑 닫힘)
- lighting: LIGHT_L1 + LIGHT_LAMP(책상 아래 그늘, 노란 빛은 가장자리만) · 빨강 0(인주 케이스 뚜껑 닫힘)
- dialogue_ref (2): ① 서하 thought "(하나. 06시까지 버틴다.)" ② 서하 thought "(둘. 받은 건… 내가 처리한다.)" (구름형, 꼬리 없음)
- repeat: — (**P49의 원본**: 같은 서랍 구도)
- attach: refs/SEOHA_turnaround.png, refs/LOC_L1_DESK_plate.png
- fx/note: bubble space: 위 34%(x 3–97%, y 2–34%) — 책상 옆판 위의 어두운 면. ① 위 왼쪽, ② 그 아래. 맨 아래 칸은 덮지도 가리키지도 않는다. / F-20: 맨 아래 칸이 열리거나 빛·초점으로 강조되면 REGEN. 라벨 칸·종이에 글씨 금지. 인주 케이스가 열려 빨강이 보이면 REGEN.

--- SCENE BREAK --- (S03 → S04a · 당직실 안에서 유리 너머 L2 복도의 어두운 끝 · 22:3x · 회차 유일한 떨림)

### panel_023
- scene_id: S04a / location: **LOC_L2_CORRIDOR** (당직실 안에서 유리 너머) · VIEW_FROM_WINDOW_FAR
- beat: ④ 출현 경고 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium wide — 당직실 안에서 통유리 너머 복도의 어두운 끝(그녀의 RIGHT = 화면 오른쪽)을 비스듬히
- composition: 가장자리(왼쪽 x 0–6%, 아래 y 90–100%)에 알루미늄 창틀과 카운터 안쪽 턱 일부. 유리 너머 복도가 화면 오른쪽 안쪽으로 멀어진다: 낮은 천장에 하나 걸러 켜진 형광등, 맞은편 벽을 따라 빈 명판의 같은 회색 철문 줄, 먼 1/3(x 62–100%)이 녹흑빛 어둠으로 가라앉는다. 꺼진 구간이 시작되기 직전 **마지막으로 켜진 관이 한 번 더듬거리며 어두워진다**(x 60–72%, y 14–20%). 그 어둠 가장자리에서 아주 작은 어두운 실루엣이 천천히 걸어 나온다(x 70–78%, y 52–70%) — 어깨 위로 솟은 둥근 보따리 윤곽만, 디테일 없음. 유리에는 스탠드의 옅은 정상 반사뿐. 방화문·복도 시계는 프레임 밖(반대쪽).
- characters: MOVEIN(§11-1 '실루엣 (복도 끝)' 상태 토큰 — 디테일 없음)
- props: —
- lighting: LIGHT_CORRIDOR + **LIGHT_FLICKER_FAR**(회차 유일한 떨림) · 빨강 0
- dialogue_ref: 없음(무대사)
- attach: refs/LOC_L2_CORRIDOR_plate.png, refs/MOVEIN_ref.png
- fx/note: bubble space: silent. / 떨림은 이 관 하나만 — 다른 관·방 안 형광등이 떨리면 REGEN. 실루엣에 얼굴·발·색이 보이면 REGEN(보따리 윤곽만). 유리에 이상한 반사 금지.

--- SCENE BREAK --- (S04a → S04b · 유리 너머 L2 → L1 당직실 안)

### panel_024
- scene_id: S04b / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: ④ 첫 벨 · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- camera: ↺EP01 P13 — 앉은 눈높이 medium two-shot (VIEW_SIDE)
- composition: [↺EP01 panel_013 `COMP-BELL` 틀] COMP-READ와 같은 카메라·같은 배치. 화면 왼쪽 중경(x 0–42%) 접이식 의자에 거꾸로 앉은 선임 — **이번엔 낭독하지 않는다**(입을 다문 채 팔뚝을 등받이에). 화면 오른쪽 앞(x 52–100%) 당직석의 서하. 오른쪽 유리 너머 바깥 선반(x 72–92%, y 55–66%) 위 작은 놋쇠 돔 호출벨과 그것을 누른 역광의 작은 손(디테일은 그림자, 손목에 회라일락 누빔 소매 가장자리만). 가운데 안쪽 배경: 칸막이의 작은 수칙 종이, 닫힌 크림색 숙직실 문. 위 40%(y 0–40%)는 천장 배관·윗벽·서가 꼭대기 어둠. 벨 바로 위 유리(x 70–96%, y 42–54%)는 어둑한 복도.
- characters: SEONIM(SHORT) — 표정 ① · SEOHA(FULL + 밤샘) — 창구 쪽으로 고개를 홱 돌린다(오른쪽 옆얼굴) · MOVEIN(§11-1 '벨을 누르는 손 (역광)')
- props: **PROP_CALLBELL** · PROP_RULESHEET_SMALL · PROP_PAPER_CUP(책상 모서리 — P20의 컵, 손대지 않음) · 숙직실 문 닫힘
- lighting: LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광(떨림 없음) · 빨강 = 테이프 두 줄(작게)뿐
- dialogue_ref (sfx): sfx "띵!" (벨 — EP01 P13과 KM 동일)
- repeat: EP01 **panel_013** `COMP-BELL`(같은 카메라·배치·위 40%·벨 위 유리) · 바뀌는 것: 선임 낭독 없음(말풍선 없음), 벨을 누른 손 = 작고 잔주름진 손 + 라일락 소매(구정민 아님), 물기 없음
- attach: _workspace/05_panels/ep01/panel_013.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: sfx — 벨 바로 위 유리의 어둑한 복도(x 70–96%, y 42–54%). 위 40%는 비워 둔다(대사 없음). / 첨부 EP01 P13의 젖은 소매·물방울을 따라 그리면 REGEN(마른 손). 손에 반지 없음.

### panel_025
- scene_id: S04b / location: LOC_L1_DUTYROOM · VIEW_B 축(방 안에서 유리 너머로, 서하 어깨 없이) — 안쪽 시점
- beat: ⑤ 민원인 첫 컷(어긋남 숨김) — 첫마디는 의지 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P14 — 앉은 눈높이 medium — 방 안에서 통유리 너머의 남자를 정면으로 → 이번 컷: 같은 축, 유리 너머의 작은 노부인
- composition: [↺EP01 panel_014 틀] 화면 가운데(x 25–75%) 통유리 너머 복도 역광 속 민원인 — **이번엔 아주 작아서** 허리 높이 카운터가 그녀를 가슴께에서 자른다: 짧고 촘촘한 철회색 파마의 머리(y 48–60%)와 회라일락 누빔 코트 어깨, 어깨 위로 솟은 크림색 보따리 윗부분(x 30–72%, y 42–70%)만 카운터 위에 보인다. 얼굴 높이의 둥근 말구멍(x 44–56%, y 38–46%)이 그녀 입보다 높다 — 턱을 들어 올려다본다. 역광이라 얼굴은 부드러운 그늘, 닫힌 입의 평온한 미소만 겨우 읽힌다. 발은 보이지 않는다. 아래 가장자리 근처(y 85–95%) 납작한 투입구와 바깥 선반의 놋쇠 벨. 아래 왼쪽 가장자리(x 0–20%, y 85–100%)에 서하의 머스터드 어깨 끝(초점 밖). 위 38%(y 0–38%)는 유리 위쪽 너머 복도 천장(고른 흐린 빛).
- characters: MOVEIN(SHORT + §11-1 '첫 등장 (안쪽 시점 · 발 가림)') — 표정 ① · SEOHA(어깨 끝만)
- props: PROP_CALLBELL · (가슴 앞 매듭 사이 접힌 연두 서식 — 보여도 되고 안 보여도 된다)
- lighting: LIGHT_L1 + LIGHT_LAMP(방 안), 유리 너머 복도 역광 · 빨강 0
- dialogue_ref (1): ① 민원인 dialogue "신고 하나, 하겠습니다." (꼬리 ↓ 유리 너머 그녀의 머리)
- repeat: EP01 **panel_014** 구도(방 안에서 유리 너머 정면, 가운데 인물·말구멍·투입구·벨 자리, 서하 어깨 끝, 위 38%) · 바뀌는 것: 마른 남자 실루엣 → 작은 노부인(카운터가 가슴께에서 자름, 말구멍이 입보다 높다), 정중한 인사 대신 턱을 든 평온한 미소, 비닐 파일 대신 가슴 앞 매듭
- attach: _workspace/05_panels/ep01/panel_014.png, refs/MOVEIN_ref.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 유리 위쪽 너머 복도 천장(그녀 머리 y 48% 위). / 발·신발이 보이면 REGEN(발견은 P26 — style-bible §5-6 P25 시점 결정). 그녀가 서하만큼 크면 REGEN. 보자기는 무늬 없는 크림 무명(빨강·분홍·꽃무늬 금지). 첨부 EP01 P14의 남자·파일·물을 따라 그리면 REGEN.

--- SCENE BREAK --- (S04b → S04c · 당직실 → 창구 밖 복도 쪽 바닥 · 같은 순간)

### panel_026
- scene_id: S04c / location: **LOC_L2_CORRIDOR** (복도 쪽) · VIEW_WINDOW_FLOOR
- beat: ⑤ 어긋남 '발견' — 신발을 벗었다(여기를 집으로 안다) · 긴장 7 · gap_after 120
- size: large · aspect: **9:16**
- camera: ↺EP01 P16 — high-angle close-up — 복도 쪽에서 바깥 선반과 바닥을 내려다봄 → 이번 컷: 같은 복도 쪽, **바닥 높이의 낮은 클로즈업**(VIEW_WINDOW_FLOOR) — 창구 벽을 마주 보고
- composition: [↺EP01 panel_016 틀 — 세로 '발견' 배치: 위 = 창구, 아래 = 바닥의 어긋남 하나] 위쪽(y 0–40%) 창구 벽의 아래쪽: 연녹 벽과 진녹 띠, 카운터 밑면, 창구에서 떨어지는 옅은 온기. 위 가운데(x 30–66%, y 0–42%) 그녀의 회라일락 코트 자락 끝과 짙은 갈색 바지 단이 위 프레임 밖으로 이어진다(뒤에서 본다). 가운데(x 32–64%, y 46–66%) 마른 회색 테라조 위에 선 작은 두 발 — **티 없는 얇은 흰 면양말, 신발 없음**(뒤꿈치가 카메라 쪽). 바로 그 뒤꿈치 뒤 한 걸음(카메라 쪽, x 26–72%, y 70–88%) 작고 낡은 검정 낮은 굽 효도화 한 켤레가 가지런히 나란히 — **코끝이 화면 왼쪽(복도 끝 어둠 쪽)을 향한다**, 자기 집 현관에 벗어 둔 듯. 물·먼지·발자국 없음. 아래(y 90–100%) 테라조.
- characters: MOVEIN(FULL의 발 부분 + §11-1 '발견' 상태 토큰 + '신발' 문장 — 발·바지 단·코트 자락만)
- props: 효도화 한 켤레(빈 신발)
- lighting: 복도의 차가운 어둑한 빛 + 창구 위에서 떨어지는 옅은 온기 · 빨강 0
- dialogue_ref: 없음(무대사)
- repeat: EP01 **panel_016**의 '발견' 문법(위 창구 · 아래 바닥의 어긋남 한 가지, 세로) · 바뀌는 것: high-angle → **바닥 높이 low close-up**, 젖은 구두·웅덩이·물방울 → 흰 양말과 등 뒤에 벗어 둔 신발, 벨은 프레임 위 밖
- attach: _workspace/05_panels/ep01/panel_016.png, refs/MOVEIN_ref.png
- fx/note: bubble space: silent. / 어긋남은 **하나**(벗어 둔 신발): 발에 신발이 있으면 REGEN, 신발이 흩어지거나 손에 들리거나 코끝이 화면 오른쪽이면 REGEN. 젖음·웅덩이·발자국·먼지·그림자 이상·유리 반사 금지(수칙 3 = EP04). 첨부 EP01 P16의 물을 따라 그리면 REGEN.

--- SCENE BREAK --- (S04c → S04d · 복도 쪽 → L1 당직실 안 · P49까지 같은 방)

### panel_027
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_SIDE(넓게)
- beat: ⑤ 그녀를 죽인 질문 ⟨ECHO:E5 앞 절반⟩ F-06 변주 · m-a2 · R4 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P22 — 앉은 눈높이 medium wide (VIEW_SIDE)
- composition: [↺EP01 panel_022 틀] 화면 오른쪽(x 62–100%) 통유리 너머 말구멍 쪽으로 턱을 든 민원인 — 아주 작아서 머리(y 46–56%)·어깨·보따리 윗부분만 카운터 위, 두 손은 가슴 앞 매듭 아래 포개고 유리에 바짝. 바깥 선반은 마르다. 가운데(x 35–65%, 머리 y 40–54%) 당직석의 서하가 고개를 왼쪽으로 돌려 — **이번엔 선임이 아니라 칸막이의 수칙 종이(4번 조각)를 본다**. 화면 왼쪽(x 0–30%) 거꾸로 앉은 선임 — **이번엔 얼굴을 피하지 않고 서하를 똑바로 본다**. 가운데 안쪽 배경: 칸막이의 작은 수칙 종이(흰 조각이 스탠드 빛에 걸림). 위 38%는 천장·서가 꼭대기 어둠·유리 위쪽 너머 복도.
- characters: MOVEIN(SHORT + §11-1 '말구멍 쪽으로') — 표정 ① · SEOHA(FULL + 밤샘) `a wary glance sliding to the rules sheet, breath held` · SEONIM(SHORT + §11-4 '시선을 피하지 않음')
- props: PROP_RULESHEET_SMALL · PROP_PAPER_CUP(책상 모서리) · 마른 바깥 선반
- lighting: LIGHT_L1 + LIGHT_LAMP(떨림 없음) · 빨강 = 테이프 두 줄(작게)뿐
- dialogue_ref (1): ① 민원인 dialogue "담당자분 계십니까?" (위 오른쪽, 꼬리 ↓ 민원인 — EP01 P22 ① 첫 문장과 KM 동일)
- repeat: EP01 **panel_022** 구도(VIEW_SIDE 넓게, 오른쪽 유리 너머 민원인·가운데 서하·왼쪽 선임·가운데 안쪽 수칙 종이·위 38%) · 바뀌는 것: 민원인 = 작은 노부인(머리가 낮다), 젖은 선반 → 마른 선반, 서하의 시선이 선임 대신 수칙 종이로, **선임이 얼굴을 돌리지 않고 그녀를 본다**(F-06 변주), 서하의 생각 말풍선 없음
- attach: _workspace/05_panels/ep01/panel_022.png, refs/MOVEIN_ref.png, refs/SEONIM_turnaround.png
- fx/note: bubble space: 위 38% 가운데~오른쪽(x 24–97%, y 2–36%) — 유리 위쪽 너머 복도·천장(가운데 x 60 이하, w 40%). / E5 앞 절반만. 그녀가 서하만큼 크거나 발이 보이면 REGEN. 선임 얼굴에 안경 금지. **art-director 확인(§H ①):** 대본 제목의 '어깨 너머(앵글②)'·style-bible §6-1-2의 VIEW_B 대신 beatsheet ↺EP01 P22의 VIEW_SIDE로 그렸다 — VIEW_B에서는 배경의 선임(F-06 변주)이 프레임에 들어오지 않는다.

### panel_028
- scene_id: S04d / location: LOC_L1_DUTYROOM · 명부 클로즈업 + 기억 비네트
- beat: ⑤ 이번엔 명부에 그녀가 있다 ⟨ECHO:E3⟩ a6 · 공정성 ③ · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P41 — 앉은 눈높이 medium — 복도 쪽에서 통유리 너머의 서하 → 이번 컷: 당직석의 그녀 눈높이에서 책상 위에 펼친 명부를 내려다보는 close-up(유리 너머는 위쪽 어둠으로만)
- composition: [↺EP01 panel_041 틀 — 펼친 명부·빈 칸을 짚는 손끝 자리(x 18–78%, y 48–84%), 위쪽 어둑함] **위 왼쪽 기억 비네트**(x 4–60%, y 3–34%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP01 panel_024와 같은 각도: 유리 너머 구정민의 얼굴 클로즈업, 고개를 살짝 기울였고 미소는 사라졌다(젖은 검은 머리, 턱의 물방울 그대로). 비네트 위 1/3은 그의 머리 위 어둑한 복도. **EP01 P24 안의 비네트는 넣지 않는다.** 비네트 오른쪽(x 62–97%, y 3–34%)은 책상 너머 유리와 어둑한 복도. 아래(x 8–94%, y 40–96%) 책상 위에 펼친 파란 2공 바인더(크게): **왼쪽 면 = 고리에 끼운 첫 장, 이중 테두리의 흰 서류 B**(위 줄 원 안의 작은 붉은 원) — 아래 1/4은 종이를 펴 누른 그녀의 LEFT 손에 가려 있다; **오른쪽 면 = 빈 칸 표**, 그녀의 RIGHT 검지 끝이 빈 칸 하나에 놓인다(x 62–70%, y 62–68%). 스탠드의 노란 원이 바인더 위에.
- characters: SEOHA(두 손만 — 머스터드 소매) · JEONGMIN(비네트 안 얼굴, 바랜 색 — 표정 ④ `the smile gone, a completely blank, patient, waiting face`)
- props: **PROP_ROSTER_OPEN_B**(크게)
- lighting: LIGHT_L1 + LIGHT_LAMP · 비네트는 바랜 색 · 빨강 = 서류 B 위 줄의 작은 붉은 원 하나(비네트 안 빨강 0)
- dialogue_ref (1): ① 구정민(기억) memory "명부에 없는 분이 담당자라고요?" (비네트 안 위 1/3 → 오른쪽 어둠까지, 흐린 파란 테, w 55% — EP01 P24 ①과 KM 동일)
- repeat: 기억 비네트 — 원본 EP01 **panel_024**(§D) · 큰 컷 = EP01 **panel_041**의 '펼친 명부 + 빈 칸을 짚는 손끝' 자리 · 바뀌는 것: 유리에 댄 명부 → 책상 위에 펼친 명부(맨 앞 서류 B), 서하 얼굴·구정민 어깨·형광등 없음
- attach: _workspace/05_panels/ep01/panel_024.png, _workspace/05_panels/ep01/panel_041.png, refs/PROP_HANDOVER_pair.png
- fx/note: bubble space: 비네트 안 위 1/3 + 그 오른쪽 어둠(x 4–97%, y 3–13%). 명부·손끝·비네트 속 얼굴은 덮지 않는다. / 서류 B 아래 줄은 손에 가려 보이지 않는다(서명 뒤 서류 규칙) — 아래 줄이나 표 칸에 글씨가 보이면 REGEN. 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다. EP01 P24 PNG가 먼저.

### panel_029
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_B
- beat: ⑤ **T-a 공개 ②: 같은 대답** ⟨반전⟩ ⟨ECHO:E10⟩ · 긴장 **9** · gap_after 0
- size: medium · aspect: **3:4**
- camera: ↺EP01 P23 — 앉은 눈높이 over-the-shoulder medium
- composition: [↺EP01 panel_023 틀] 앞쪽 아래 가운데~왼쪽(x 15–60%, y 60–100%) 서하의 뒷머리와 오른뺨 가장자리, 말구멍 쪽으로 몸을 약간 내민다(밤샘 잔머리). 화면 왼쪽 가장자리(x 0–16%, y 38–60%) 칸막이의 작은 수칙 종이(흰 4번 조각과 빨간 테이프 두 줄이 프레임 안에 걸림). 유리 너머 가운데~오른쪽(x 40–85%) — **이번엔 작은 노부인**: 머리 y 46–56%, 턱을 들어 말구멍을 올려다보는 평온한 미소, 어깨 위로 솟은 보따리, 카운터가 가슴께에서 자른다, 두 손은 매듭 아래. 바깥 선반의 놋쇠 벨. 위 오른쪽 1/4(x 50–97%, y 2–26%)은 그녀 머리 위 어둑한 복도 — 그녀가 작아 그 아래(y 26–44%)도 빈 복도.
- characters: SEOHA(뒷모습 상태 토큰 + SHORT + 밤샘) — 결연한 기울기 · MOVEIN(SHORT + '첫 등장' 크기) — 표정 ①
- props: PROP_RULESHEET_SMALL · PROP_CALLBELL
- lighting: LIGHT_L1 + LIGHT_LAMP(그녀 어깨와 책상에만 따뜻) · 떨림 없음 · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 서하 dialogue "제가 담당자입니다." (꼬리 ↙ 그녀의 머리 — EP01 P23과 KM 동일)
- repeat: EP01 **panel_023** 구도(같은 거리·높이·비율, 4번 조각이 프레임 안, 위 오른쪽 빈자리) · 바뀌는 것: 유리 너머 젖은 구정민 → 작은 라일락 노부인(카운터가 가슴께에서 자름), 그녀의 밤샘 잔머리
- attach: _workspace/05_panels/ep01/panel_023.png, refs/MOVEIN_ref.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 띠 가운데~오른쪽(x 30–97%, y 2–28%) — 그녀 머리 위 어둑한 복도(EP01 P23의 위 오른쪽 1/4을 왼쪽으로 조금 넓혔다 — 뷰어 폭, 가운데 x 60 이하). 수칙 종이와 그녀 머리는 덮지 않는다. / **E10 = EP01 P23과 같은 그림**: 4번 조각이 프레임 밖이면 REGEN. 뒤 0px(P30과 붙는다).

### panel_030
- scene_id: S04d / location: LOC_L1_DUTYROOM · 서하 클로즈업(살짝 올려다봄)
- beat: ⑤ **T-a 정점: 꺼지지 않는다** ⟨반전⟩ · 긴장 **9** · gap_after **720**
- size: small · aspect: **1:1**
- camera: ↺EP01 P25 — 약간 low-angle close-up — 그녀 얼굴과 머리 위 형광등 기구
- composition: [↺EP01 panel_025 틀] 서하의 얼굴이 가운데 아래(x 15–80%, y 32–92%) — 숨을 멈춘 얼굴, 동공만 흔들린다(RIGHT 눈 밑 점 = 화면 왼쪽, 밤샘 잔머리). 위 가장자리 오른쪽(x 50–95%, y 0–16%) 머리 위 철망 형광등 기구 — **이번엔 관이 흔들림 없이 고르게 켜져 있다**. 위 왼쪽(x 3–45%, y 3–28%)은 고요한 천장(어두워지지 않는다).
- characters: SEOHA(FULL + 밤샘) — 표정 ② 변주 `holding her breath, face rigid, only her pupils trembling`
- props: 형광등 기구(철망)
- lighting: LIGHT_L1 + LIGHT_LAMP + **LIGHT_STEADY + LIGHT_NOFLICKER** — EP01 P25와 같은 형광등, 이번엔 고요 · 빨강 0
- dialogue_ref: 없음(무대사 · **무음** — EP01 P25의 형광등 효과음이 없다는 것 자체가 비트)
- repeat: EP01 **panel_025** 구도(같은 클로즈업·같은 기구 자리·같은 비율) · 바뀌는 것: 떨림·어둠 없음(LIGHT_FLICKER → LIGHT_STEADY), 효과음 없음, 공포로 굳음 → 숨 멈춤(동공만 흔들림)
- attach: _workspace/05_panels/ep01/panel_025.png, refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: silent(효과음도 없다). / 관이 더듬거리거나 어두워지거나 빛이 불안정하면 REGEN — 떨리지 않는 것이 반전이다. 첨부 EP01 P25의 떨림을 따라 그리면 REGEN. 뒤 720px(G5).

### panel_031
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_GLASS_CLOSE
- beat: ⑤ 그들은 명부를 읽는다 ⟨이중의미⟩ ⟨ECHO:EP01 P44⟩ **b3** · F-10 · a7 · 긴장 8 · gap_after 40
- size: small · aspect: **1:1**
- camera: 앉은 눈높이 close-up — 당직실 안에서 통유리 너머, 말구멍 바로 아래의 얼굴
- composition: 화면 가운데~오른쪽 아래(x 30–92%, y 40–100%) 유리에 바짝 다가온 민원인의 얼굴 — 창구 불빛에 처음으로 반쯤 드러난다: 초승달로 접힌 작은 눈의 공손한 미소, 턱을 든 채 천천히 고개를 숙이는 중, 크림 터틀넥 깃과 회라일락 스탠드 칼라. 그녀 머리 바로 위 오른쪽(x 58–78%, y 24–38%) 둥근 타공 스테인리스 말구멍 — 그녀 입보다 높다. 오른쪽 가장자리(x 94–100%) 알루미늄 창틀. 유리에는 스탠드의 옅은 정상 반사뿐(두 번째 얼굴·형체 없음). 위 띠(x 3–97%, y 2–22%)와 말구멍 왼쪽(x 3–54%, y 22–38%)은 유리 너머 어둠.
- characters: MOVEIN(SHORT + §11-1 '유리에 바짝 (얼굴)') — 표정 ① `a serene, closed-lip grandmotherly smile, eyes crinkled into crescents`, 천천히 고개를 숙임
- props: —
- lighting: LIGHT_L1 + **LIGHT_GLASS_GLOW**(얼굴 반은 스탠드의 옅은 온기, 반은 차가운 복도빛) · 빨강 0
- dialogue_ref (2): ① 민원인 dialogue "담당자분이시군요." ② 민원인 dialogue "명부에서… 이미 읽었습니다." (둘 다 꼬리 ↘ 그녀 — ①은 EP01 P44 가운데 문장과 KM 동일)
- repeat: — (**P46의 원본**: 같은 뷰)
- attach: refs/MOVEIN_ref.png
- fx/note: bubble space: ① 위 띠(x 3–97%, y 2–22%) · ② 말구멍 왼쪽 어둠(x 3–54%, y 22–38%) — 둘 다 왼쪽에서 시작. 말구멍과 그녀 얼굴은 덮지 않는다. / 유리 반사에 두 번째 얼굴·서하가 비치면 REGEN(수칙 3 = EP04). 창백·투명 금지(산 사람의 웜톤 피부). 안경·장신구 금지.

### panel_032
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_C 축(서가 쪽 근경)
- beat: ⑤ 4번의 진짜 성질 ⟨이중의미⟩ **a8** · 긴장 8 · gap_after 120
- size: medium · aspect: **3:4**
- camera: ↺EP01 P21 — 눈높이 medium — 선임 근경, 책상은 원경
- composition: [↺EP01 panel_021 `COMP-E1` 틀] 화면 왼쪽~가운데 앞(x 5–60%, 머리 y 28–46%) 접이식 의자에 거꾸로 앉은 선임, 얼굴 3/4(화면 오른쪽으로 약간 돌림), 두 손에 흰 종이컵을 쥐고 컵 속을 내려다본다. 화면 오른쪽 원경(x 62–96%, y 40–80%) 당직석 책상 위 베이지 내선 전화(조용히, 울리지 않음)와 그 곁에 작게 앉아 그를 돌아보는 서하 — **이번엔 그 너머 유리 밖에** 작은 라일락 노부인의 머리와 보따리 윗부분(x 78–92%, y 44–54%, 초점 밖)이 기다린다. 위 25%(y 0–25%)는 서가 꼭대기 어둠과 천장.
- characters: SEONIM(FULL + 거꾸로 앉기 + §11-4 '컵 속을 봄 (COMP-E1)') — 표정 ① · SEOHA(SHORT, 작게) · MOVEIN(SHORT, 유리 너머 아주 작게·초점 밖)
- props: PROP_PAPER_CUP(선임 손) · PROP_EXT_PHONE(숫자 없는 버튼) · PROP_FOLDING_CHAIR
- lighting: LIGHT_L1, 원경 책상에 LIGHT_LAMP · 빨강 0
- dialogue_ref (2): ① 선임 dialogue "수칙은 거짓말 안 한대." ② 선임 dialogue "거짓말을 시킨대." (둘 다 꼬리 ↙ 선임)
- repeat: EP01 **panel_021** `COMP-E1`(같은 카메라·선임 자세·컵·원경 내선과 서하·위 25%) · 바뀌는 것: 원경 유리 너머 기다리는 노부인(작게)
- attach: _workspace/05_panels/ep01/panel_021.png, refs/SEONIM_turnaround.png, refs/MOVEIN_ref.png
- fx/note: bubble space: 위 25%(x 3–97%, y 2–25%) — 서가 꼭대기 어둠. ① 왼쪽, ② 그 오른쪽 조금 아래(가운데 x 60 이하). / 선임은 서하를 보지 않는다(컵 속). 돋보기는 목에(쓰지 않는다).

### panel_033
- scene_id: S04d / location: LOC_L1_DUTYROOM · 서하 클로즈업
- beat: ⑤ 대가의 인식(민원인이 찾아오는 사람) · 긴장 8 · gap_after 240
- size: small · aspect: **1:1**
- camera: ↺EP02 P36 — 앉은 눈높이 close-up — 얼굴과 입을 누른 손
- composition: [↺EP02 panel_036 틀] 서하의 얼굴이 가운데 아래(x 12–88%, y 34–100%): 흔들리는 동공(RIGHT 눈 밑 점 = 화면 왼쪽), 한 손(머스터드 소매가 반쯤 덮음)이 입을 누른다, 밤샘 잔머리. **이번엔 시선이 아래 오른쪽(책상의 명부 쪽)으로 떨어진다.** 스탠드의 따뜻한 원이 얼굴만 감싸고, 뒤는 초점 밖 어둑한 방. 위 32%(y 0–32%)는 초점 밖 어둠.
- characters: SEOHA(FULL + 밤샘) — 표정 ⑥ `trembling pupils, one hand pressed over her mouth, chilled realization`, 시선 아래 오른쪽
- props: —
- lighting: LIGHT_L1 + LIGHT_LAMP(얼굴만 따뜻, 떨림 없음) · 빨강 0
- dialogue_ref (2): ① 서하 thought "(같은 말인데… 이번엔 사실이야.)" ② 서하 thought "(그러니까 이제… 다 나한테 와.)" (구름형, w 50–55%)
- repeat: EP02 **panel_036**(같은 클로즈업·표정 ⑥·스탠드 원) · 바뀌는 것: 시선이 명부 쪽 아래 오른쪽, 위 빈 띠 28% → 32%(생각 말풍선 둘), LIGHT_REVEAL 대신 씬 조명
- attach: _workspace/05_panels/ep02/panel_036.png, refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 32%(x 3–97%, y 2–32%) — 초점 밖 어둠. ① 위 왼쪽, ② 그 아래(가운데 x 50 이하). 이마는 덮지 않는다. / 다크서클 금지. 뒤 240px.

### panel_034
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_B
- beat: ⑥ 민원 — "이 당직실로 전입하겠습니다" · 긴장 8 · gap_after 40
- size: large · aspect: **9:16**
- camera: ↺EP01 P40 — 앉은 눈높이보다 조금 높게, wide — 서하 뒤에서 창구 전체를
- composition: [↺EP01 panel_040 `COMP-COLD-3` 틀] 아래 30%(y 70–100%) 앞쪽에 당직석에 앉은 서하의 뒷모습(뒷머리·어깨·초록 회전의자 등받이, 가운데에서 약간 오른쪽). 가운데 두꺼운 통유리 너머 — **이번엔 작은 노부인**: 머리 y 44–54%, 어깨와 보따리 윗부분까지 카운터 위(카운터 선 y 약 62%), 가슴 앞 매듭 사이에서 꺼낸 **연두색 서식 한 장**을 투입구 바깥 턱에 반듯이 놓았다(x 40–60%, y 62–66%) — 두 손은 다시 매듭 아래로, 보따리는 등에. 화면 왼쪽 가장자리 구석(x 0–15%, y 50–65%) 칸막이의 작은 수칙 종이, 흰 4번 조각과 짧은 빨간 테이프 두 줄. 스탠드의 따뜻한 빛은 왼쪽 아래 그녀의 어깨에만. 위 18%(y 0–18%)는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(뒷모습 상태 토큰 + 밤샘) · MOVEIN(SHORT + §11-1 '서식을 턱에 (대본 P34)') — 표정 ①
- props: **PROP_FORM_MOVEIN** + '턱 위' 상태(`lying flat and neat on the outer ledge in front of the steel document slot`) · PROP_RULESHEET_SMALL · PROP_CALLBELL(작게)
- lighting: LIGHT_L1 + LIGHT_LAMP · 유리 너머 그녀는 창구 불빛을 받는다(역광 실루엣 아님) · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 민원인 dialogue "이 당직실로 전입하겠습니다." (w 55–60%, 꼬리 ↓ 유리 너머 그녀)
- repeat: EP01 **panel_040** `COMP-COLD-3`(같은 카메라·서하 뒷모습·구석의 4번 조각·위 18%·비율) · 바뀌는 것: 숙이는 마른 남자 실루엣 → 작은 노부인(머리가 낮다), 턱 위의 연두 서식
- attach: _workspace/05_panels/ep01/panel_040.png, refs/MOVEIN_ref.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 18%(x 5–95%, y 2–18%) — 유리 위쪽 너머 복도 천장(가운데 x 40 이하, w 60%). / 연두 = 새잎 연두 `#DCE6B0`(민트·옥색·셀라돈·라임·형광이면 REGEN), 서식에 글씨·숫자·직인 원 금지. 보따리를 내려놓으면 REGEN. 첨부 EP01 P40의 실루엣·젖음을 따라 그리면 REGEN.

### panel_035
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_SLOT
- beat: ⑥ **함정: 반사적 "아니요"** ⟨ECHO:EP02 P22·P39⟩ m-r1 · 긴장 9 · gap_after 0
- size: small · aspect: **1:1**
- camera: 카운터 높이 close-up — 당직실 안쪽에서 투입구
- composition: 가운데를 가로지르는 납작한 스테인리스 투입구(x 6–94%, y 56–64%), 그 앞(아래) 카운터 안쪽 턱, 유리 너머 바깥 턱. 연두색 서식이 투입구에 **반쯤 걸려** 있다 — 반은 바깥 턱, 반은 안쪽(x 22–70%, y 52–72%). 아래 오른쪽에서 들어온 서하의 작은 RIGHT 손(머스터드 소매가 반쯤 덮음)이 안쪽에서 서식 모서리를 바깥으로 **밀어낸다**(x 56–84%, y 64–86%). 유리 너머 위 가운데~오른쪽(x 48–92%, y 6–40%) 초점 밖 회라일락 코트 앞섶과 크림 보자기 매듭, 그 아래 포갠 작은 두 손. 왼쪽 가장자리(x 0–4%) 알루미늄 창틀. 유리에는 스탠드의 옅은 정상 반사뿐. 위 왼쪽(x 3–46%, y 2–40%)은 유리 너머 어두운 복도.
- characters: SEOHA(§11-3 '서식을 밀어냄' — 손만) · MOVEIN(유리 너머 매듭·손만, 초점 밖)
- props: **PROP_FORM_MOVEIN** + '반쯤 걸림' 상태
- lighting: LIGHT_L1 + LIGHT_LAMP(VIEW_SLOT P35 문장 — 옅은 정상 반사) · 빨강 0
- dialogue_ref (1): ① 서하 dialogue "아니요, 그건—" (짧게, w 25–35%, 꼬리 ↘ 아래 오른쪽 = 그녀 손 쪽)
- repeat: — (**P41 · P57의 원본**: 같은 투입구 뷰)
- attach: refs/SEOHA_turnaround.png, refs/MOVEIN_ref.png
- fx/note: bubble space: 위 왼쪽(x 3–46%, y 2–40%) — 유리 너머 어두운 복도. / 서식은 투입구에 반쯤 걸린 상태(P36 · P38까지 같다). 그녀 손가락이 투입구를 넘어 유리 밖으로 나가면 REGEN. 뒤 0px(P36과 붙는다).

### panel_036
- scene_id: S04d / location: LOC_L1_DUTYROOM · 손 클로즈업
- beat: ⑥ 선임이 멈춘다 — 처음으로 손목을 잡는다(R19) · 긴장 9 · gap_after 40
- size: small · aspect: **1:1**
- camera: ↺EP01 P46 — 눈높이 close-up — 손목과 직인 → 이번 컷: 손목과 투입구의 서식
- composition: [↺EP01 panel_046 틀] 가운데(x 15–90%, y 32–78%): **역할 반대** — 왼쪽에서 들어온 선임의 크고 거친 그을린 손(빛바랜 슬레이트블루 점퍼 소맷부리, 반지·시계 없음)이 오른쪽에서 들어온 서하의 RIGHT 손목(머스터드 카디건 소매가 반쯤 덮음)을 잡는다 — 처음으로. 그녀의 손끝은 서식에서 한 뼘 떨어졌다. 아래(y 78–100%) 투입구에 반쯤 걸린 연두색 서식의 일부와 안쪽 턱. 위 28%(y 0–28%)는 초점 밖 어둑한 유리와 방.
- characters: SEONIM(§11-4 '손' — 손만) · SEOHA(손목·손만)
- props: PROP_FORM_MOVEIN(반쯤 걸림, 일부)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 0
- dialogue_ref (1): ① 선임 dialogue "1번." (아주 짧게, w 20–25%, 꼬리 ← 왼쪽 가장자리 = 선임 쪽)
- repeat: EP01 **panel_046** 구도(눈높이 손 클로즈업, 가운데 손 위의 손, 아래 서식 일부, 위 28%) · 바뀌는 것: 서하가 노미란의 손목을 잡던 그림 → **선임이 서하의 손목을 잡는다**(역할 반대), 직인·인주 대신 투입구의 연두 서식
- attach: _workspace/05_panels/ep01/panel_046.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 28%(x 4–96%, y 2–28%) — 초점 밖 어둑한 유리·방. / 첨부 EP01 P46의 직인·인주(빨강)·아이보리 소매를 따라 그리면 REGEN. 반지 없음(두 손 모두). 손가락 개수 확인.

### panel_037
- scene_id: S04d / location: LOC_L1_DUTYROOM · 칸막이 클로즈업
- beat: ⑥ 작성자가 자기 수칙을 읊는다 ⟨ECHO:수칙 1⟩ r3 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP02 P27 — ↺EP01 P57 — 앉은 눈높이 close-up — 칸막이 정면에서 약간 오른쪽
- composition: [↺EP02 panel_027 틀] 가운데 왼쪽(x 6–62%, y 30–98%) 수칙 종이: 바랜 누런 크림 모눈, 빈 모눈 7칸 자리, 4/7 지점의 새하얀 4번 조각과 빨간 테이프 두 줄, 오른쪽 위 바랜 스티커. **이번엔 서하의 LEFT 검지 끝이 맨 위 칸 자리(y 34–40%)를 짚는다.** 오른쪽 아래(x 62–100%, y 60–100%) 초점 밖 — 선임의 크고 거친 손에 잡힌 그녀의 RIGHT 손목(슬레이트블루 소맷부리 · 머스터드 소매). 오른쪽 위(x 64–96%, y 30–58%)는 칸막이 가장자리 너머 초점 밖 어둠. 위 30%(y 0–30%)는 칸막이 너머 초점 밖 어둠.
- characters: SEOHA(§11-3 '손목이 잡힌 채 맨 위 칸' — 손만) · SEONIM(손, 초점 밖)
- props: **PROP_RULESHEET**(빈 모눈, 글씨·번호 없음) · PROP_STICKER_FADED · PROP_RING_FADED
- lighting: LIGHT_L1 + LIGHT_LAMP(종이에 따뜻한 빛) · 빨강 = 테이프 두 줄뿐
- dialogue_ref (2): ① 서하 dialogue "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다." (긴 줄 w 60%+ — 수칙 1 고정 문자열) ② 서하 dialogue "돌려보내지 않는다." — 둘 다 꼬리 ↙ 아래 왼쪽 = 화면 밖 그녀 (EP01 P12와 KM 동일)
- repeat: EP02 **panel_027**(= EP01 panel_057) 구도(카메라·종이 자리·손끝이 조항을 짚음·오른쪽 빈 자리) · 바뀌는 것: 손끝이 맨 아래 7번 대신 **맨 위 칸**, LEFT 손, 오른쪽 아래에 잡힌 손목(초점 밖), 위 빈 띠 22% → 30%(말풍선 둘), 종이가 그만큼 아래로
- attach: _workspace/05_panels/ep02/panel_027.png, refs/PROP_PAGES_pair.png, refs/SEONIM_turnaround.png
- fx/note: bubble space: 위 30%(x 4–96%, y 2–30%) — 칸막이 너머 초점 밖 어둠. ①(긴 줄) 위에 넓게(가운데 x 38 이하, w 62%+), ② 그 아래. 종이 오른쪽 위 스티커는 덮지 않는다. / 맨 위 칸은 빈 모눈 — 번호·글씨가 생기면 REGEN. 칸막이 = 그녀의 LEFT(손끝 = LEFT 손).

### panel_038
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_SIDE(가깝게)
- beat: ⑥ 거부의 결과 — T4를 전언으로 처음 공개 r4 · 서스펜스 · 긴장 9 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P20 — 앉은 눈높이 medium two-shot (VIEW_SIDE, P12보다 가깝게 — 가슴 위)
- composition: [↺EP01 panel_020 틀] 화면 왼쪽(x 0–45%, 머리 y 38–52%) 거꾸로 앉은 선임의 옆얼굴 3/4, 무뚝뚝하게 서하 쪽을 본다(그녀 손목을 잡았던 손이 막 풀릴 듯 아래로). 화면 오른쪽(x 50–82%, 머리 y 40–54%) 회전의자에서 몸을 돌려 그를 향한 서하. 둘 사이 안쪽 배경에 초점 밖 칸막이와 숙직실 문. **이번 컷:** 오른쪽 가장자리 유리 너머(x 82–98%, 머리 y 46–56%) 작은 노부인 — 두 손을 매듭 아래 포갠 공손한 미소, 눈이 서하의 어깨 너머 방 안을 **이불 펼 구석을 고르듯** 훑는다. 투입구에 반쯤 걸린 연두 서식(작게, x 84–96%, y 64–68%). 위 38%는 서가 꼭대기 어둠(왼쪽)과 유리 위쪽 너머 복도(오른쪽).
- characters: SEONIM(SHORT) — 표정 ① · SEOHA(FULL + 밤샘) `tense, glancing between him and the glass` · MOVEIN(SHORT + §11-1 '방을 훑는 눈') — 표정 ③
- props: PROP_RULESHEET_SMALL(작게) · PROP_PAPER_CUP(책상 모서리) · PROP_FORM_MOVEIN(반쯤 걸림, 작게)
- lighting: LIGHT_L1 + LIGHT_LAMP(서하 쪽만 따뜻) · 빨강 = 테이프(작게)뿐
- dialogue_ref (2): ① 선임 dialogue "안 받으면, 저쪽이 이쪽으로 들어온대." (위 왼쪽, w 50–55%, 꼬리 ↙ 선임) ② 민원인 dialogue "기다리겠습니다." (위 오른쪽, 짧게, 꼬리 ↓ 유리 너머 그녀)
- repeat: EP01 **panel_020** 구도(VIEW_SIDE 가슴 위 투샷, 왼쪽 선임·오른쪽 서하, 위 38%) · 바뀌는 것: 서하가 조금 왼쪽(x 50–82%), 오른쪽 가장자리 유리 너머 노부인, 서하는 매달리는 불안 대신 긴장한 시선
- attach: _workspace/05_panels/ep01/panel_020.png, refs/SEONIM_turnaround.png, refs/MOVEIN_ref.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — ① 왼쪽 서가 위 어둠, ② 오른쪽 유리 위쪽 너머 복도(가운데 x 70 이하, w 25–30%). 노부인 머리(y 46%~)는 덮지 않는다. / T4는 전언으로만 — 그녀가 유리 안으로 들어오는 그림 금지.

### panel_039
- scene_id: S04d / location: LOC_L1_DUTYROOM · 서하 클로즈업
- beat: ⑥ 추론(민원인의 진짜 목적) r5 · 긴장 9 · gap_after 240
- size: small · aspect: **1:1**
- camera: 앉은 눈높이 close-up — 그녀의 얼굴, 유리 쪽을 본다
- composition: 서하의 얼굴이 아래 60%(x 12–88%, y 40–100%) — 눈이 화면 오른쪽 아래(유리 너머 그녀의 발 쪽)로 미끄러진다(유리 → 노부인 → 보따리 → 흰 양말을 차례로 훑은 끝), RIGHT 눈 밑 점 = 화면 왼쪽, 밤샘 잔머리. 스탠드 빛이 얼굴 한쪽에. 위 40%(y 0–40%)는 초점 밖 — 그녀 뒤 서가의 어둠.
- characters: SEOHA(FULL + 밤샘) `eyes sliding down toward the glass, sharp and thinking, lips slightly parted`
- props: —
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 0
- dialogue_ref (2): ① 서하 thought "(들어오면… 여기 사는 게 사실이 돼.)" ② 서하 thought "(그게… 이 사람이 원하는 거야.)" (구름형)
- attach: refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 초점 밖 서가 어둠. ① 위 왼쪽, ② 그 아래(가운데 x 50 이하). / 다크서클 금지. 뒤 240px.

### panel_040
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_B 축(칸막이 클로즈업, 앵글②)
- beat: ⑥ **수칙 1 역전** ⟨반전⟩ — 접수는 수리가 아니다 · 긴장 8 · gap_after 120
- size: medium · aspect: **3:4**
- camera: ↺EP01 P19 — 앉은 눈높이 close-up — 칸막이에 붙은 수칙 종이를 정면에서 약간 비스듬히
- composition: [↺EP01 panel_019 틀] 수칙 종이 전체가 가운데(x 12–88%, y 32–100%, 아래 끝은 프레임에 살짝 잘림): 누렇게 바랜 크림 모눈 A5, 왼쪽 가장자리는 제본에서 뜯긴 들쭉날쭉한 선, 네 귀퉁이의 바랜 누런 테이프. **초점은 맨 위 칸 자리**(y 36–42%) — 위에서 4/7 지점의 새하얀 4번 조각과 빨간 테이프 두 줄은 **초점 밖**으로 부드럽게 흐려진다. 오른쪽 위 귀퉁이(x 72–86%, y 35–44%)에 바랜 달냥이 스티커(초점 안), 오른쪽 아래 귀퉁이에 바랜 커피 반원(초점 밖). 7칸 자리는 전부 빈 모눈. 그녀의 LEFT 손끝이 맨 위 칸 왼쪽 끝에 아직 닿아 있다(작게, x 16–24%, y 38–42%). 종이 윗선 위(y 0–30%)는 칸막이 윗면 너머 초점 밖 유리와 어둑한 복도.
- characters: SEOHA(손끝만)
- props: **PROP_RULESHEET**(빈 모눈) · PROP_STICKER_FADED · PROP_RING_FADED
- lighting: LIGHT_L1 + 스탠드의 따뜻한 빛이 종이 위쪽에 · 빨강 = 테이프 두 줄(초점 밖)뿐
- dialogue_ref (2): ① 서하 thought "(돌려보내지 않는다… 창구 앞에서는.)" ② 서하 thought "(받는 건… 들어주는 게 아니야.)" (구름형)
- repeat: EP01 **panel_019** 구도(종이 자리·스티커 자리·위쪽 초점 밖 유리) · 바뀌는 것: 초점이 맨 위 칸(4번 조각·테이프는 초점 밖), 위 빈 띠 22% → 30%(종이가 조금 아래로 — 생각 말풍선 둘), 맨 위 칸의 LEFT 손끝
- attach: _workspace/05_panels/ep01/panel_019.png, refs/PROP_PAGES_pair.png, refs/PROP_STICKERS_pair.png
- fx/note: bubble space: 위 30% 왼쪽~가운데(x 3–70%, y 2–30%) — 종이 위의 초점 밖 유리·어둠. 오른쪽 위 스티커는 덮지 않는다. ① 위, ② 그 아래(둘 다 가운데 x 38 이하). / 맨 위 칸에 글씨·번호가 생기면 REGEN. 4번 조각이 날카롭게 초점에 들어오면 경미(문장 강화 후 1회 ACCEPT 가능).

### panel_041
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_SLOT
- beat: ⑥ 접수 = 그녀의 "네" · **r6**(함정이 빗나간 유일한 신호) · 긴장 8 · gap_after 40
- size: small · aspect: **1:1**
- camera: 카운터 높이 close-up — 당직실 안쪽에서 투입구 (panel_035와 같은 뷰)
- composition: [↺EP03 panel_035 틀] 같은 투입구(x 6–94%, y 56–64%)·안쪽 턱·왼쪽 창틀. **이번엔** 서하의 작은 RIGHT 손이 연두 서식을 투입구로 **당겨 들인다**(서식 x 18–62%, y 58–82%, 대부분 안쪽). 선임의 손은 프레임에 없다(풀렸다). 유리 너머 위 오른쪽: 말구멍 아래 테두리만 위 가장자리(x 58–74%, y 0–6%), 그 아래 턱을 든 민원인의 **입가와 턱만**(코끝~턱, x 52–90%, y 8–34%) — 닫힌 입의 미소가 **아주 조금** 굳는다. 그 아래(x 50–92%, y 34–54%) 크림 터틀넥 깃·회라일락 앞섶·매듭 아래 포갠 두 손(초점 약간 밖). 위 왼쪽 절반(x 3–48%, y 2–54%)은 유리 너머 어둑한 복도. 유리에는 스탠드의 옅은 정상 반사뿐.
- characters: SEOHA(§11-3 '당겨 들임' — 손만) · MOVEIN(§11-1 '입가만') — 미세한 굳음
- props: **PROP_FORM_MOVEIN**
- lighting: LIGHT_L1 + LIGHT_LAMP(옅은 정상 반사) · 빨강 0
- dialogue_ref (2): ① 서하 dialogue "접수하겠습니다." (꼬리 ↓ 아래 = 그녀 손 쪽) ② 민원인 dialogue "…받으시는군요." (꼬리 ↗ 오른쪽 위 그녀의 입가)
- repeat: EP03 **panel_035**와 같은 투입구 뷰(C-3) · 바뀌는 것: 밀어내던 손 → 당겨 들이는 손, 유리 너머 매듭 → 입가 + 매듭
- attach: _workspace/05_panels/ep03/panel_035.png, refs/MOVEIN_ref.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 왼쪽 절반(x 3–48%, y 2–54%) — 유리 너머 어둑한 복도. ① 위, ② 그 아래. 입가는 덮지 않는다. / 굳음은 **아주 조금**(과장 금지 — 찡그림·이·눈이 보이면 REGEN). 그녀 손가락이 투입구를 넘지 않는다(world §5-1).

### panel_042
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_A
- beat: ⑥ 서식을 읽는다(인용 = 안전) · 어긋남의 원리(주소 없음) · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P15 — 앉은 눈높이보다 약간 높게, 정면 medium — 복도 쪽에서 통유리 너머의 서하
- composition: [↺EP01 panel_015 틀] 화면 가운데(x 25–80%, 머리 y 38–52%) 유리 너머 당직석에 앉아 정면을 향한 서하, 두 손 아래 책상 위에 **연두색** 빈 서식이 앞면을 위로 하고 놓여 있다(x 30–75%, y 62–82%, 크게) — 그녀가 들여다본다. 화면 왼쪽 가장자리 앞(x 0–18%, y 50–100%) 초점 밖의 크림 보따리 가장자리와 회라일락 어깨(그녀는 작아서 EP01의 남자 어깨보다 낮다). 아래 가장자리에 말구멍·투입구·바깥 놋쇠 벨. 오른쪽(그녀의 LEFT) 칸막이와 스탠드. 위 38%는 유리 너머 방 안쪽 서가와 천장의 어둑함(유리는 옅은 정상 반사만).
- characters: SEOHA(FULL + 밤샘) — 표정 ⑧ `a flat, polite, deadpan civil-servant face with slightly lowered eyelids` · MOVEIN(전경 초점 밖 어깨·보따리)
- props: **PROP_FORM_MOVEIN** + '램프 아래' 문장(`under the warm lamp light the paper still reads clearly as pale yellow-green, not yellow`) · PROP_CALLBELL · PROP_LAMP · PROP_RULESHEET_SMALL
- lighting: LIGHT_L1 + LIGHT_LAMP(평상 조명) · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (2): ① 서하 dialogue "전입신고… 새 주소, 지하 2층 당직실." (w 60%+) ② 서하 dialogue "전 주소는… 비어 있네요." — 둘 다 꼬리 ↓ 서하
- repeat: EP01 **panel_015** 구도(복도 쪽 정면 medium, 서하·서식 자리, 전경 왼쪽 가장자리, 위 38%) · 바뀌는 것: 연회청 사망신고서 → **연두 전입신고서**, 전경 남자 어깨 → 노부인의 보따리·라일락 어깨(낮게), LIGHT_COMEDY 대신 씬 조명
- attach: _workspace/05_panels/ep01/panel_015.png, refs/SEOHA_turnaround.png, refs/MOVEIN_ref.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 유리 너머 방 안쪽 서가·천장 어둠(전경 보따리는 y 50% 아래). ①(긴 줄) 위에 넓게(가운데 x 38 이하), ② 그 아래. / 램프 아래에서도 연두(노랑이면 REGEN). 서식에 글씨·주소 글자 금지 — 주소는 말풍선으로만.

### panel_043
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_B 축(서하 RIGHT 어깨 너머)
- beat: ⑥ **타이머: 06:00 → 명부상 담당자** R6 · T-a 대가 · 긴장 9 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 over-the-shoulder medium — 서하의 RIGHT 어깨 뒤 약간 옆에서 창구와 책상 오른쪽
- composition: 아래 왼쪽 전경(x 0–44%, y 56–100%) 서하의 RIGHT 옆얼굴 3/4과 어깨(밤샘 잔머리) — 눈이 아래 오른쪽 책상 위 **파란 바인더**(x 56–86%, y 74–92%, 닫힘, 스탠드 원 가장자리)로 떨어진다. 유리 너머 가운데(x 36–72%, 머리 y 52–62%) 작은 노부인이 가슴 앞 매듭에 두 손을 얹고 천천히 깊이 고개를 숙인다 — 숙인 머리 위로 크림 보따리가 솟는다(y 40–58%). 아래 오른쪽 책상 위 베이지 내선 전화 일부. 왼쪽 가장자리(x 0–10%, y 36–56%) 칸막이의 작은 수칙 종이(초점 밖). 위 40%(y 0–40%)는 유리 위쪽 너머 어둑한 복도 천장.
- characters: MOVEIN(SHORT + §11-1 '깊은 인사') — 표정 ② · SEOHA(SHORT + 밤샘) — 명부로 떨어지는 시선 · SEONIM(화면 밖 목소리)
- props: PROP_ROSTER(닫힘) · PROP_EXT_PHONE(일부) · PROP_RULESHEET_SMALL(초점 밖)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 테이프(초점 밖, 작게)뿐
- dialogue_ref (2): ① 민원인 dialogue "짐은 이것뿐입니다. 조용히 지내겠습니다." (꼬리 ↓ 유리 너머 그녀) ② 선임(목소리) dialogue "06시까지 처리 못 하면, 명부상 담당자한테 간대." (w 60%+, 꼬리 ↙ 아래 왼쪽 가장자리 = 화면 밖 선임, 그녀 뒤)
- attach: refs/MOVEIN_ref.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 유리 위쪽 너머 복도 천장. ① 위 가운데(가운데 x 50 근처), ② 그 아래 왼쪽 넓게(가운데 x 38 이하, w 62%). 숙인 머리·보따리(y 40%~)는 덮지 않는다. / 그녀는 요청하지 않고 약속한다 — 애원하는 얼굴 금지(공손·평온). 보따리를 내려놓으면 REGEN. 선임은 그리지 않는다(목소리만).

### panel_044
- scene_id: S04d / location: LOC_L1_DUTYROOM · 일지 클로즈업(위에서)
- beat: ⑥ 근거를 찾는다 ⟨ECHO:P21⟩ **r1 회수** · 긴장 9 · gap_after 40
- size: small · aspect: **1:1**
- camera: panel_021과 같은 카메라 — 위에서 내려다본 close-up, 펼친 일지 면 (EP01 P48 구도 금지)
- composition: [↺EP03 panel_021 틀] 같은 일지 면(x 4–96%, y 36–100%): 빈 줄, 회색 천 책갈피, 스탠드의 노란 원. **이번엔 펜 대신** 서하의 RIGHT 검지 끝(머스터드 소매)이 오른쪽 면 **첫 줄**(x 52–62%, y 44–48%)에 놓인다 — 22시에 쓴 그 줄은 손끝과 손가락이 덮어 보이지 않고, 나머지는 빈 줄. 다른 손·손바닥은 프레임 밖. 위 36%(y 0–36%)는 일지 너머 초점 밖 어둠.
- characters: SEOHA(손끝만)
- props: **PROP_DUTYLOG**(펼침, 같은 면)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 0
- dialogue_ref (2): ① 서하 dialogue "오늘 밤 이 방 일지엔… 한 사람뿐입니다." (w 60%+) ② 서하 dialogue "당직자와 담당자… 동일인." (P21 ②와 KM 동일) — 둘 다 꼬리 ↘ 아래 오른쪽 = 그녀 손 쪽
- repeat: EP03 **panel_021** 같은 일지 면·같은 카메라(C-3) · 바뀌는 것: 펜 끝 → 손끝, 첫 줄은 손가락이 덮는다
- attach: _workspace/05_panels/ep03/panel_021.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 36%(x 3–97%, y 2–36%) — P21과 같은 자리. ① 위 넓게(가운데 x 38 이하), ② 그 아래. / F-23: 손바닥·칸막이·상판 금지. 일지에 글씨·숫자가 보이면 REGEN.

### panel_045
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_A
- beat: ⑥ **첫 반려** ⟨반전⟩ 소반전 해소 · 법칙 ⑤ · 긴장 **9** · gap_after 120
- size: medium · aspect: **3:4**
- camera: ↺EP01 P41 — 앉은 눈높이 medium — 복도 쪽에서 통유리 너머의 서하
- composition: [↺EP01 panel_041 틀] 화면 가운데 왼쪽(x 15–60%) 유리 너머 서하 — **이번엔 일어섰다**: 머리 y 36–50%(위 띠를 비우려고 EP01보다 조금 아래로 잡는다), 결연하게 정면을 본다. 그 아래(x 18–70%, y 52–80%) 두 손으로 가슴 앞에 든 **연두 서식**(EP01의 유리에 댄 명부 자리, 빈 칸만, 크게). 위 왼쪽(x 8–48%, y 2–10%) 그녀 머리 바로 위 형광등 관이 **흔들림 없이** 켜져 있다. 아래 오른쪽 가장자리(x 80–100%, y 66–100%) 초점 밖 노부인의 크림 보따리와 라일락 어깨(EP01 구정민 어깨 자리 — 그녀가 작아 더 낮다). 아래 가장자리에 말구멍·투입구. 오른쪽(그녀의 LEFT) 칸막이·스탠드. 형광등과 그녀 머리 사이(x 3–97%, y 12–34%)는 유리 너머 방 안쪽 서가의 어둑함.
- characters: SEOHA(FULL + 밤샘 + §11-3 '선 채 서식') — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · MOVEIN(전경 초점 밖)
- props: **PROP_FORM_MOVEIN** + '램프 아래' 문장 · PROP_RULESHEET_SMALL
- lighting: LIGHT_L1 + LIGHT_LAMP + **LIGHT_STEADY + LIGHT_NOFLICKER**(떨리지 않음이 비트) · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (2): ① 서하 dialogue "신고하신 분은 이 방에 들어오신 적이 없습니다." ② 서하 dialogue "사실과 다른 신고라, 반려합니다." (둘 다 w 55–60%, 꼬리 ↓ 서하)
- repeat: EP01 **panel_041** 구도(복도 쪽 정면 medium, 그녀 자리·든 서류 자리·머리 위 흔들림 없는 관·오른쪽 아래 전경 어깨·LIGHT_STEADY) · 바뀌는 것: 앉음 → 일어섬(머리 조금 아래로 잡음), 펼친 명부 → 연두 서식, 전경 구정민 → 노부인(낮게), 말풍선 자리 = 위 오른쪽 → 관과 머리 사이 띠(뷰어 폭)
- attach: _workspace/05_panels/ep01/panel_041.png, refs/SEOHA_expressions.png, refs/MOVEIN_ref.png
- fx/note: bubble space: 관과 머리 사이 띠(x 3–97%, y 12–34%) — 유리 너머 서가 어둠. ① 위, ② 그 아래, 둘 다 가운데 x 40 이하. 머리 위 형광등(y 2–10%)과 서식은 덮지 않는다. / 떨림·어둠이 생기면 REGEN. 서식에 글씨·직인 원 금지(반려의 붉은 원은 P47의 흰 통지에). 첨부 EP01 P41의 명부·구정민을 따라 그리면 REGEN.

### panel_046
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_GLASS_CLOSE
- beat: ⑥ 이름의 덫 ⟨ECHO:수칙 2⟩ **b4 · m-b1** · 긴장 9 · gap_after 40
- size: small · aspect: **1:1**
- camera: panel_031과 같은 카메라 — 당직실 안에서 통유리 너머, 말구멍 바로 아래의 얼굴
- composition: [↺EP03 panel_031 틀] 같은 자리: 화면 가운데~오른쪽 아래(x 30–92%, y 40–100%) 유리에 더 바짝 다가온 민원인의 얼굴 — **미소가 사라진 고요하고 텅 빈 기다리는 얼굴**. 그녀 머리 위 오른쪽 말구멍(x 58–78%, y 24–38%). 오른쪽 가장자리 창틀. 유리에는 스탠드의 옅은 정상 반사뿐. 위 띠(x 3–97%, y 2–22%)와 말구멍 왼쪽(x 3–54%, y 22–38%)은 유리 너머 어둠.
- characters: MOVEIN(SHORT + '유리에 바짝 (얼굴)') — 표정 ④ `the smile gone, a still, blank, patient face, waiting`
- props: —
- lighting: LIGHT_L1 + **LIGHT_GLASS_GLOW** · 빨강 0
- dialogue_ref (2): ① 민원인 dialogue "반려 통지엔… 담당자님 성함을 받아 가겠습니다." (w 60%+, 꼬리 ↘ 그녀) ② 선임(기억) memory "2번. 당직자는 자기 이름을 말하지 않는다." (흐린 파란 테, 흐릿하게, 꼬리 없음 — EP01 P13 ①과 KM 동일)
- repeat: EP03 **panel_031**과 같은 뷰·같은 자리(C-3) · 바뀌는 것: 미소 → 표정 ④, 고개 숙임 없이 정지
- attach: _workspace/05_panels/ep03/panel_031.png, refs/MOVEIN_ref.png
- fx/note: bubble space: ① 위 띠(x 3–97%, y 2–22%, 가운데 x 38 이하) · ② 말구멍 왼쪽 어둠(x 3–54%, y 22–38%) — 대본 "기억 말풍선은 프레임 위쪽에 흐릿하게"(둘 다 위쪽). 얼굴·말구멍은 덮지 않는다. / 화난 얼굴·찡그림 금지(텅 빈 기다림). 반사에 두 번째 얼굴 금지.

### panel_047
- scene_id: S04d / location: LOC_L1_DUTYROOM · 책상 클로즈업(세로)
- beat: ⑥ 이름 대신 붉은 원 — 그녀의 첫 직인 **b5** · 법칙 ⑤ · 긴장 8 · gap_after 120
- size: large · aspect: **9:16**
- camera: ↺EP01 P45 — 약간 high-angle close-up — 책상 위 서식과 멈춘 직인 → 이번 컷: 같은 각도, 직인이 내려와 찍힌다
- composition: [↺EP01 panel_045 틀] 가운데(x 30–70%, y 26–54%) 서하의 작은 RIGHT 손(머스터드 소매가 반쯤 덮음)이 쥔 원통형 나무 직인 — **이번엔 내려와 종이에 찍혔다**(직인 끝 y 52–56%). 아래(x 10–95%, y 50–100%) 책상 위 **흰 반려 통지 한 장**(빈 흰 종이, 크게) — 직인 끝 바로 곁에 **글자 없는 붉은 원 하나**가 막 생겼다. 그녀의 LEFT 손(머스터드 소매)이 종이 가장자리를 누른다(EP01의 노미란 LEFT 손 자리, x 10–34%, y 70–86%). 위 20%(y 0–20%)는 초점 밖 어둑한 방.
- characters: SEOHA(§11-3 '첫 직인' — 두 손만)
- props: **PROP_SEAL_STAMP** · PROP_NOTICE(빈 흰 종이 + 붉은 원)
- lighting: LIGHT_L1 + LIGHT_LAMP(종이에 따뜻한 원) · 빨강 = 직인 끝 인주 + 붉은 원 하나(화면에서 가장 강한 색)
- dialogue_ref (1 + sfx): ① 서하 dialogue "직인으로 갈음합니다." (꼬리 ↓ 아래 = 그녀 손 쪽) · sfx "탁!" (직인 — KM ផាប់!, 이 회차 새 효과음)
- repeat: EP01 **panel_045** 구도(약간 high-angle, 가운데 직인을 쥔 손, 아래 종이 크게, 왼쪽 아래 종이를 누르는 다른 손, 위 20%) · 바뀌는 것: 노미란의 손(의상 B 아이보리 소매·금시계) → **서하의 두 손**(머스터드), 허공에 멈춘 직인 → **찍힌다**, 연회청 사망신고서 → 흰 반려 통지 + 붉은 원
- attach: _workspace/05_panels/ep01/panel_045.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DESK_plate.png
- fx/note: bubble space: ① 위 20%(x 4–96%, y 2–20%) — 초점 밖 어둑한 방 · sfx: 직인을 쥔 손 오른쪽의 어두운 책상 면(x 72–96%, y 34–48%). / 붉은 원 안에 글자 금지, 종이에 글씨·서명·이름 금지(이름 대신 직인 — 그 차이가 이 컷). 첨부 EP01 P45의 아이보리 소매·금시계를 따라 그리면 REGEN. 반지·네일 없음.

### panel_048
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_C 축(창구 벽을 등진 서하)
- beat: ⑥ 민원인이 돌아간다 — 신발을 다시 신는다 · 미니 사이다 · 긴장 7 · gap_after 240
- size: medium · aspect: **3:4**
- camera: ↺EP01 P49 — 눈높이 frontal medium — 방 안쪽에서 창구 벽 방향
- composition: [↺EP01 panel_049 틀] 가운데 왼쪽(x 15–60%, 머리 y 36–50%) 통유리를 등지고 선 서하 — 스탠드 빛이 얼굴 한쪽에, **긴 숨**(어깨가 내려가고 눈이 반쯤 감긴다). 그녀 뒤 유리 너머 오른쪽(x 66–84%, y 40–60%) 작게, 노부인이 돌아서며 **허리를 굽히지도 손을 쓰지도 않고** 검정 효도화에 발을 넣는 순간 — 흰 반려 통지(작은 붉은 원)가 가슴 앞 매듭 사이에 끼워져 있고, 보따리는 등에, 몸은 복도의 어두운 끝(화면 오른쪽)으로 향한다. 칸막이는 프레임 밖. 위 35%는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(FULL + 밤샘) `a long exhale, shoulders dropping, eyes half closed` · MOVEIN(FULL — 발이 보인다 + §11-1 '퇴장' 상태 토큰 + 표정 ⑤, 작게)
- props: PROP_NOTICE(매듭 사이, 작게) · 효도화(신는 중)
- lighting: LIGHT_L1 + LIGHT_LAMP(얼굴에 따뜻한 빛) · 빨강 = 반려 통지의 작은 붉은 원뿐
- dialogue_ref: 없음(무대사 — 검수 노트 D-k: 선택 대사 넣지 않음)
- repeat: EP01 **panel_049** 구도(창구를 등진 서하·뒤 유리 너머 오른쪽 작게 어둠으로 가는 민원인·칸막이 프레임 밖·위 35%) · 바뀌는 것: 결연한 정면 → 긴 숨, 구정민 → 신발을 신는 노부인, 대사 없음
- attach: _workspace/05_panels/ep01/panel_049.png, refs/SEOHA_turnaround.png, refs/MOVEIN_ref.png
- fx/note: bubble space: silent. / **신발을 신는 유일한 컷**(신는 순간 하나만 — 걸어가는 여러 모습 금지). 몸을 굽히거나 손으로 신발을 신으면 REGEN. 걸어가는 쪽 = 화면 오른쪽(어두운 끝). 유리 반사 정상. 뒤 240px.

### panel_049
- scene_id: S04d / location: LOC_L1_DUTYROOM · VIEW_DRAWERS
- beat: ⑥ 직인 = 짐 ⟨이중의미⟩ R3 · **F-20 ②** · 긴장 6 · gap_after 240
- size: medium · aspect: **3:4**
- camera: panel_022와 같은 카메라 — 무릎 높이 low-angle, 책상 오른쪽 끝 옆 서랍 3단
- composition: [↺EP03 panel_022 틀] 같은 서랍 3단 자리(x 34–86%, y 36–100%)·무릎 자리(x 0–32%, y 66–100%)·위 34%. **이번엔:** 맨 위 칸 닫힘, 그녀의 작은 RIGHT 손(머스터드 소매)이 **둘째 칸을 밀어 닫는 중** — 안에 작은 나무 직인과 빈 흰 종이 묶음이 들어가며 사라진다(직인의 인주 끝은 보이지 않게), 맨 아래 칸은 이번에도 닫힌 채(강조 없음). 위 34%(y 0–34%)는 책상 옆판 위의 그늘진 철판과 초점 밖 어두운 방.
- characters: SEOHA(무릎 + 손 — style-bible VIEW_DRAWERS P49 문장) · SEONIM(화면 밖 목소리)
- props: VIEW_DRAWERS + P49 문장 · PROP_SEAL(서랍 안) · PROP_NOTICE_STACK
- lighting: LIGHT_L1 + LIGHT_LAMP(책상 아래 그늘) · 빨강 0
- dialogue_ref (1): ① 선임(목소리) dialogue "이제 네가 담당이래." (꼬리 ↖ 위 왼쪽 가장자리 = 화면 밖 선임, 그녀 뒤 서가 쪽)
- repeat: EP03 **panel_022** 같은 서랍 구도(C-3) · 바뀌는 것: 열던 손 → 닫는 손, 맨 위 칸 닫힘, 둘째 칸에 직인이 함께 들어간다
- attach: _workspace/05_panels/ep03/panel_022.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 34%(x 3–97%, y 2–34%) — 책상 옆판 위의 어두운 면, 꼬리는 위 왼쪽 가장자리. / F-20: 맨 아래 칸이 열리거나 강조되면 REGEN. 직인 끝의 빨강이 보이면 REGEN(빨강 0 컷). 뒤 240px.

--- SCENE BREAK --- (S04d → S05a · 장소 동일 L1 · 블록 ⑦ 받으면 안 됐는데 — 유머 1(따뜻하게))

### panel_050
- scene_id: S05a / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: ⑦ 밸브 · 습관 ⟨ECHO:EP01 P11⟩ F-49 · 유머 ⑦(따뜻함) · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P11 — 눈높이 medium wide (VIEW_SIDE) — 무릎 위
- composition: [↺EP01 panel_011 틀] 화면 왼쪽(x 0–45%) 서가 사이 어두운 틈 앞의 선임(크고 굽은 실루엣, 얼굴 3/4) — **이번엔 걸어 나오지 않고 접이식 의자 곁에 선 채** 오른손을 책상 모서리에서 막 거둔다. 책상 모서리(가운데, x 45–55%, y 62–70%) 쪽에서 그가 놓은 새 흰 종이컵을 **화면 오른쪽(x 58–100%)의 서하가 들어**, 그녀 앞에 펼친 네이비 리넨 수첩 오른쪽 면의 **오른쪽 아래 귀퉁이**(옛 연갈색 커피 링 위, x 74–86%, y 70–80%)에 내려놓는다 — 옅은 미소. 그 뒤에 거꾸로 놓인 회색 접이식 의자. 오른쪽 가장자리는 통유리 창구와 어둑한 복도(비었다). 위 38%는 서가 꼭대기 어둠과 천장.
- characters: SEONIM(FULL + §11-4 '새 컵') — 표정 ① · SEOHA(SHORT + 밤샘 + §11-3 '컵을 수첩 귀퉁이에') `a faint, tired smile`
- props: PROP_PAPER_CUP · PROP_NOTEBOOK_OPEN(빈 모눈) + PROP_RING_NEW(컵 밑) · PROP_FOLDING_CHAIR · PROP_SWIVEL_CHAIR · PROP_RULESHEET_SMALL(배경)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 칸막이 종이 테이프(배경, 작게)뿐
- dialogue_ref (2): ① 선임 dialogue "마셔. 긴 밤이래." (꼬리 ↙ 선임 — EP01 P11 ②와 KM 동일) ② 서하 dialogue "…이번엔 마실게요." (꼬리 ↘ 서하)
- repeat: EP01 **panel_011** 구도(VIEW_SIDE 무릎 위, 왼쪽 선임·가운데 책상 모서리 컵·오른쪽 서하·위 38%) · 바뀌는 것: 컵을 놓는 선임 → 컵을 **받아** 수첩 귀퉁이에 두는 서하(EP01 P11의 컵은 손대지 않았다), 흠칫 놀람 → 옅은 미소, 선임은 서가 틈에서 걸어 나오는 대신 의자 곁
- attach: _workspace/05_panels/ep01/panel_011.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 38%(x 3–80%, y 2–38%) — 서가 꼭대기 어둠·천장. ① 왼쪽, ② 그 오른쪽 조금 아래(가운데 x 60 이하). / F-49: 컵은 수첩 오른쪽 아래 귀퉁이(옛 링 위). 수첩 면은 빈 모눈. 농담이 아니라 따뜻함 — 만화 기호 금지.

--- SCENE BREAK --- (S05a → S05b · 당직실 안에서 유리 너머 L2 복도 맞은편)

### panel_051
- scene_id: S05b / location: **LOC_L2_CORRIDOR** (당직실 안에서 유리 너머) · VIEW_FROM_WINDOW_ACROSS
- beat: ⑦ 그가 앉은 자리 · F-25 진척 · EP10 그림 씨앗 · 긴장 6 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 당직석에서 통유리 너머 정면, 좁은 복도 맞은편 벽(서하 시점)
- composition: 가장자리에 알루미늄 창틀(왼쪽 x 0–5%)과 아래 가장자리 카운터 안쪽 턱(y 92–100%). 유리 너머 정면: 연녹 벽과 진녹 띠 앞에 서로 붙은 파란 플라스틱 대기 의자 셋(x 18–80%, y 46–80%), 곁에 회색 철제 소화전함(x 82–96%, y 34–78%). 가운데 의자에 재우가 앉아 있다(x 34–62%, 머리 y 30–42%): 무릎에 팔꿈치, 두 손을 느슨히 맞잡고, 유리 너머 책상(스탠드 아래 명부)을 보는 눈. 의자 밑 정상 그림자, 마른 옷. 위 천장에 켜진 형광등 하나(y 4–10%). 테라조 바닥. 유리에는 스탠드의 옅은 정상 반사뿐.
- characters: JAEWOO(FULL + §11-4 '대기 의자') — 표정 ① `a quiet, tired, knowing look with a faint wry tilt at one corner of his mouth`
- props: 대기 의자 셋(파랑) · 소화전함(회색)
- lighting: LIGHT_CORRIDOR — 재우에게 따뜻한 빛 없음, 정상 그림자 · 빨강 0
- dialogue_ref: 없음(무대사)
- attach: refs/JAEWOO_turnaround.png, refs/LOC_L2_CORRIDOR_plate.png
- fx/note: bubble space: silent. / 유령 처리(창백·투명·그림자 없음·흐린 발) 금지 — 사람이다. 반지 RIGHT 검지(정면이라 화면 왼쪽), 흰 커프스, 빈 클립 목줄, 다크서클. 롤·빨강 금지, 소화전함이 빨강이면 REGEN.

--- SCENE BREAK --- (S05b → S05c · 유리 너머 → L1 당직실 안)

### panel_052
- scene_id: S05c / location: LOC_L1_DUTYROOM · VIEW_C 축(출입문 + 창구 오른쪽 끝)
- beat: ⑦ "그거 받으면 안 됐는데" ⟨ECHO:P14⟩ · 긴장 7 · gap_after 40
- size: large · aspect: **9:16**
- camera: ↺EP02 P33 — ↺EP01 P42 — 서 있는 눈높이 medium wide — 서가 쪽에서 왼쪽 벽 방향으로 비스듬히 → 이번 컷: 좌우만 바꿔 서가 쪽에서 **오른쪽 벽(출입문)** 방향으로 비스듬히
- composition: [↺EP02 panel_033 틀, 좌우 대칭판 그대로] 화면 오른쪽 절반(x 50–100%, y 22–95%) 창구 벽 끝의 열린 출입문 틀 — **이번엔 실루엣이 아니라 문틀에 기댄 재우**: 얼굴(머리 y 26–38%)은 스탠드 빛 가장자리에서 반만 따뜻하고 반은 차가운 녹백빛, 상처 입은 얼굴, 몸은 노란 원 밖(손은 카디건 앞주머니에), 뒤는 어두운 복도. 화면 왼쪽 절반(x 0–48%, y 25–75%) 통유리 창구 끝부분: 유리 앞은 비었고 그 너머 빈 복도(옅은 정상 반사) — 맞은편 파란 대기 의자는 비었다. 왼쪽 아래 가장자리에 당직석 스탠드의 따뜻한 빛 번짐과 책상 모서리. 위 20%는 천장.
- characters: JAEWOO(FULL + §11-4 '문틀 (빛 가장자리)') — 표정 ④ `his gaze dropping away, lips pressed together, his smile stiffening and fading` · SEOHA(화면 밖 — 왼쪽 아래 당직석)
- props: —
- lighting: LIGHT_L1 + LIGHT_LAMP + **LIGHT_LAMP_EDGE** · 빨강 0
- dialogue_ref (2): ① 전임자 dialogue "…그거 받으면 안 됐는데." (꼬리 ↘ 문틀의 재우) ② 서하 dialogue "알고 받았어요." (꼬리 ↙ 왼쪽 아래 가장자리 = 화면 밖 당직석의 그녀)
- repeat: EP02 **panel_033** 구도(좌우 대칭판 '반쪽 문 + 반쪽 창구', 위 20%, 비율) · 바뀌는 것: 얼굴 없는 실루엣·흰 종이 → 얼굴이 빛 가장자리에 보이는 재우(종이 없음), 유리 너머 빈 대기 의자
- attach: _workspace/05_panels/ep02/panel_033.png, refs/JAEWOO_expressions.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 20%(x 5–95%, y 2–20%) — 천장. ① 위 가운데(가운데 x 60 이하), ② 그 아래 왼쪽. 재우 머리(y 26%~)는 덮지 않는다. / 몸·얼굴 전체가 노란 원 안이면 REGEN(얼굴 반만 따뜻). 반지 RIGHT 검지. 롤·빨강 금지. 첨부 EP02 P33의 흰 종이를 따라 그리면 REGEN.

### panel_053
- scene_id: S05c / location: LOC_L1_DUTYROOM · 당직석 곁 투샷
- beat: ⑦ 출구 vs 테마("혼자 떠안기") · 동기 재확인 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP02 P40 — 서 있는 눈높이 medium two-shot — 옆에서, 허리 위
- composition: [↺EP02 panel_040 틀] 화면 왼쪽(x 6–48%) 서하 — **이번엔 초록 회전의자에 앉은 채**(머리 y 50–62%) 그를 올려다본다. 화면 오른쪽(x 50–92%, 머리 y 28–42%) 서 있는 재우(큰 키). **두 카디건이 한 화면에:** 헐렁한 머스터드 꽈배기·열림 vs 몸에 맞는 차콜 가는 골지·잠김. 서하는 노란 원 안, 그는 가장자리. 둘 사이에 서류는 없다 — EP02 P40의 서류 자리(x 34–64%, y 58–80%)에는 책상 모서리와 펼친 수첩·종이컵. 뒤는 초점 밖 서가 어둠. 위 왼쪽(x 3–60%, y 2–40%)은 서가 꼭대기 어둠과 천장.
- characters: SEOHA(FULL + 밤샘) — 표정 ④ · JAEWOO(SHORT) `quiet, pleading, a faint tired tilt at one corner of his mouth`
- props: PROP_NOTEBOOK_OPEN · PROP_PAPER_CUP(수첩 귀퉁이)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE · 빨강 0
- dialogue_ref (2): ① 전임자 dialogue "다음 사람한테 넘기면, 넌 풀려." (꼬리 ↘ 재우) ② 서하 dialogue "그럼 그 사람이 묶이잖아요." (꼬리 ↙ 서하)
- repeat: EP02 **panel_040** 구도(옆에서 허리 위 투샷, 왼쪽 서하·오른쪽 재우, 두 카디건, 빛/가장자리, 위 왼쪽 빈자리) · 바뀌는 것: 서하가 앉아 있다(머리가 낮다), 서류 없음
- attach: _workspace/05_panels/ep02/panel_040.png, refs/JAEWOO_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 왼쪽(x 3–60%, y 2–40%) — 서가 꼭대기 어둠(재우 머리 오른쪽은 피한다). ① 위, ② 그 아래. / 두 카디건이 섞이면 REGEN. 로맨스 코드(홍조·반짝임) 금지. 다크서클은 재우만.

### panel_054
- scene_id: S05c / location: LOC_L1_DUTYROOM · 재우 미디엄(출입문 쪽)
- beat: ⑦ 경고 **b6** · F-10 진척 · 긴장 8 · gap_after 240
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이에서 약간 올려다본 medium — 당직석 곁에서 출입문 쪽 재우, 허리 위
- composition: 가운데 오른쪽(x 36–80%, 머리 y 28–42%) 출입문 틀 앞의 재우, 몸을 반쯤 화면 오른쪽 어두운 복도 쪽으로 돌린 채 — 시선만 아래 왼쪽, 책상 위 명부로 떨어진다. 얼굴 반만 따뜻. 그의 뒤 열린 출입문과 어두운 복도(x 66–100%). 아래 왼쪽 전경(x 0–40%, y 70–100%) 스탠드 원 안 책상 위 닫힌 **파란 바인더**(초점 밖, 또렷한 파랑). 위 28%(y 0–28%)는 천장과 문틀 위 어둠.
- characters: JAEWOO(FULL + §11-4 '돌아섬') `his gaze dropping to the binder, lips pressed together, grave`
- props: PROP_ROSTER(닫힘, 전경)
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE · 빨강 0
- dialogue_ref (2): ① 전임자 dialogue "…명부에 적힌 이름은, 여기선 다 읽어." (w 55–60%) ② 전임자 dialogue "조심해." (짧게) — 둘 다 꼬리 ↓ 재우
- attach: refs/JAEWOO_turnaround.png, refs/JAEWOO_expressions.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 28%(x 3–97%, y 2–28%) — 천장·문틀 위 어둠. ① 위 넓게(가운데 x 40 이하), ② 그 아래 오른쪽. / 재우는 이름을 부르지 않는다. 유령 처리 금지. 뒤 240px.

--- SCENE BREAK --- (S05c → S06 · 장소 동일 L1 · 03:00경 — 클리프, 감속 5단 + 예측 1컷, 유머 없음)

### panel_055
- scene_id: S06 / location: LOC_L1_DUTYROOM · VIEW_SIDE(와이드, 시계가 보이게)
- beat: ⑧ **예측 세우기** m-b2 · R12 · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- camera: ↺EP02 P26 — 앉은 눈높이 wide (VIEW_SIDE) — 출입문 쪽 끝에서 방을 가로질러 (EP01 P50의 '근경 접이식 의자 + 중경 당직석' 배치를 VIEW_SIDE로 옮김)
- composition: [↺EP02 panel_026 틀] 위 왼쪽(x 6–22%, y 8–22%) 서가 위 숫자 없는 둥근 벽시계, 또렷하게 — **03:00**(짧은 시침 = 오른쪽 3 방향, 긴 분침 = 바로 위, 직각). 화면 왼쪽 앞(x 0–30%, y 46–100%) 서가 앞 접이식 의자에 거꾸로 앉아 팔짱을 등받이에 얹고 눈을 감은 선임(머리 y 46–58%, 고개 약간 숙임). 화면 오른쪽 앞(x 50–96%, 머리 y 44–58%) 당직석의 서하 — 밤샘 상태 — 스탠드의 노란 원 안에서 **닫힌 파란 바인더 위에 손바닥을 납작하게 얹었다**(x 60–80%, y 70–80%). 펼친 수첩 오른쪽 아래 귀퉁이에 종이컵(x 80–90%, y 74–84%, 커피 링 위). 가운데 안쪽 배경: 칸막이의 작은 수칙 종이, 닫힌 크림색 숙직실 문. 오른쪽 가장자리 통유리 창구와 어둑한 복도(비었다). 위 40%(시계 오른쪽)는 천장 배관과 서가 꼭대기 어둠.
- characters: SEOHA(SHORT + 밤샘 + §11-3 '명부 위 손바닥') `quiet, guarded, almost relieved` · SEONIM(SHORT + §10-4 '졸음')
- props: **PROP_CLOCK** + `PROP_CLOCK_TIME_0300` · PROP_ROSTER(닫힘) · PROP_NOTEBOOK_OPEN · PROP_PAPER_CUP + PROP_RING_NEW · PROP_RULESHEET_SMALL · PROP_FOLDING_CHAIR
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (1): ① 서하 thought "(이름은… 한 번도 말한 적 없어.)" (구름형, w 50–55%)
- repeat: EP02 **panel_026** 구도(같은 카메라·배치·비율·시계 자리·위 40%) · 바뀌는 것: 시계 04:40 → **03:00**, 수첩에 적던 손 → 명부 위 손바닥
- attach: _workspace/05_panels/ep02/panel_026.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 40% 가운데~오른쪽(x 24–97%, y 2–40%) — 천장 배관·서가 꼭대기 어둠(가운데 x 50 이하, w 50%). **시계 면(x 6–22%, y 8–22%)은 절대 덮지 않는다.** / 시계: 시침이 왼쪽(= 9:00 거울)이거나 직각이 아니면 REGEN. 다크서클 금지.

### panel_056
- scene_id: S06 / location: LOC_L1_DUTYROOM · VIEW_B
- beat: ⑧ 감속 ①(벨) · R11(벨 누르는 손 비노출) · 긴장 8 · gap_after 240
- size: medium · aspect: **3:4**
- camera: ↺EP01 P1 — 앉은 눈높이(eye-level), over-the-shoulder medium — 앉은 서하 뒤에서 유리 창구 쪽으로
- composition: [↺EP01 panel_001 `COMP-COLD-1` 틀] 앞쪽 아래 오른쪽(x 55–100%, y 55–100%)에 서하의 뒷머리와 오른쪽 어깨(낮은 포니테일·네이비 머리끈, 오른뺨 가장자리만) — 창구 쪽으로 막 고개를 돌렸다. 화면 왼쪽 가장자리(x 0–18%, y 42–68%) 낮은 회색 칸막이에 작은 수칙 종이: 흰 4번 조각 + 짧은 빨간 테이프 두 줄, 오른쪽 위 귀퉁이에 색 점만 한 바랜 스티커. 가운데(x 35–65%, y 30–60%) 두꺼운 통유리 너머 — **이번엔 아무도 없다**: 어둡고 빈 복도. 유리의 얼굴 높이에 둥근 말구멍, 카운터 높이에 투입구. 바깥 선반의 보이는 부분은 비어 있다 — **벨과 손은 프레임 밖**(오른쪽 너머). 책상 상판은 아래 가장자리에 스탠드의 따뜻한 빛 번짐만(다른 책상 소품은 프레임 밖). 위 22%는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(뒷모습 상태 토큰 + 밤샘, 얼굴 안 보임)
- props: PROP_RULESHEET_SMALL
- lighting: LIGHT_L1 + LIGHT_LAMP · 유리 너머 빈 어둠(역광 실루엣 없음) · 빨강 = 수칙 종이의 테이프 두 줄뿐
- dialogue_ref (sfx): sfx "띵!" (프레임 밖 벨 — P24 · EP01 P13과 KM 동일)
- repeat: EP01 **panel_001** `COMP-COLD-1`(같은 카메라·서하 뒷머리 자리·왼쪽 가장자리 수칙 종이·말구멍·투입구·위 22%·비율) · 바뀌는 것: 유리 너머 역광 실루엣 → **빈 어둠**, 벨이 프레임 밖, 대사 대신 효과음
- attach: _workspace/05_panels/ep01/panel_001.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: sfx — 유리 오른쪽, 벨이 있을 프레임 밖 쪽 가장자리의 어두운 유리(x 66–96%, y 38–52%). / **벨을 누르는 손·인물·실루엣이 보이면 REGEN**(EP10 보호). 유리에 이상한 반사·그녀 뒤 사람 금지. 첨부 EP01 P1의 실루엣을 따라 그리면 REGEN. 뒤 240px.

### panel_057
- scene_id: S06 / location: LOC_L1_DUTYROOM · VIEW_SLOT
- beat: ⑧ 감속 ② 연살구 서식 · 수칙 1의 아이러니(받는 법을 방금 배웠다) · 긴장 9 · gap_after 120
- size: small · aspect: **1:1**
- camera: 카운터 높이 close-up — 당직실 안쪽에서 투입구 (panel_035 · panel_041과 같은 뷰)
- composition: [↺EP03 panel_035 틀] 같은 투입구(x 6–94%, y 56–64%)·안쪽 턱·왼쪽 창틀. 납작한 스테인리스 투입구로 **연살구색 서식**이 밀려 들어온다(x 22–74%, y 56–80%, 반 이상 안쪽 — 표처럼 줄지은 빈 칸 + 가운데 넓은 빈 칸 하나). 유리 바깥에서 **화면 오른쪽**으로 들어온 HAND-RENAME의 **LEFT 손**(엄지가 화면 가운데 쪽): 네 손끝이 서식을 투입구 안으로 납작하게 밀다 투입구에서 멈춘다(손 x 58–92%, y 44–58%), 검지 가운데 마디의 깨끗한 베이지 천 반창고, 짙은 초콜릿 갈색 코듀로이 소맷부리(세로 골 한 줄은 보이게)가 오른쪽 가장자리에서 잘린다. 아래 왼쪽에서 서하의 작은 손(머스터드 소매)이 반사적으로 서식 안쪽 끝을 잡는다(x 8–40%, y 70–94%). 투입구 위 유리(y 0–54%)는 **반사 없는 평평한 어둠** — 얼굴·몸·그림자 없음.
- characters: HAND-RENAME(§11-2 FULL 손 토큰 + '투입구' 상태 토큰) · SEOHA(§11-3 '반사적으로 받음' — 손만)
- props: **PROP_FORM_RENAME**
- lighting: LIGHT_L1 + LIGHT_LAMP(서식 안쪽 끝만 따뜻) · 유리 반사 없음(VIEW_SLOT P57 문장) · 빨강 0
- dialogue_ref (1): ① 목소리(창구) dialogue "개명 신청입니다." (짧게, 꼬리 ↘ 오른쪽 아래 = 투입구 쪽 화면 밖, 유리 반사에 대지 않는다)
- repeat: EP03 **panel_035 · panel_041**과 같은 투입구 뷰(C-3) · 바뀌는 것: 연두 → **연살구**, 바깥의 손 = HAND-RENAME, 유리 위는 반사 없는 어둠
- attach: refs/HANDRENAME_ref.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 왼쪽(x 3–56%, y 2–40%) — 투입구 위 평평한 어두운 유리. / 반드시 **LEFT 손**(엄지 방향 확인), 손은 하나, 반지·시계·흰 커프스·피 금지, 손이 유리 높이 위로 올라가거나 얼굴·그림자·유리 반사가 생기면 REGEN. 서식이 분홍·주황·빨강이거나 직인 원·글자가 있으면 REGEN. **`HANDCLIFF_ref` · `JAEWOO_*` 첨부 금지.** 반창고 아래는 그리지 않는다.

### panel_058
- scene_id: S06 / location: LOC_L1_DUTYROOM · VIEW_GRILLE
- beat: ⑧ 감속 ③ 낭독 분절 ① · 공개 1컷 전 정지(G4) · 긴장 9 · gap_after **480**
- size: large · aspect: **9:16**
- camera: extreme close-up — 유리에 박힌 말구멍을 정면에서
- composition: 가운데(x 20–80%, y 36–64%) 둥근 타공 스테인리스 말구멍 — 작은 구멍들이 어둡다. 구멍 너머·유리 너머는 깊은 어둠뿐. 유리는 반사 없는 평평한 어둠: 얼굴·형체·방 안의 빛 없음. 위(y 0–34%)와 아래(y 66–100%)는 말구멍 둘레의 어두운 유리.
- characters: (목소리 — 그리지 않는다)
- props: —
- lighting: 말구멍 금속 테두리에만 가는 차가운 하이라이트 · 유리 반사 없음 · 빨강 0
- dialogue_ref (1): ① 목소리(창구) dialogue "바꾸려는 새 이름은…" (꼬리 ↓ 말구멍)
- attach: refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 말구멍 위 어두운 유리(x 5–95%, y 8–32%) — 말구멍 자체는 덮지 않는다(흰 말풍선이 어둠 위에서 잘 읽힌다). / 유리·구멍 너머에 얼굴·눈·실루엣·반사가 생기면 REGEN(EP04 보호). 뒤 480px.

### panel_059
- scene_id: S06 / location: LOC_L1_DUTYROOM · 책상 클로즈업(스탠드 원)
- beat: ⑧ **T-b 공개: 그녀의 이름** ⟨반전⟩ · b1·b3·b6 회수 · 긴장 **10** · gap_after **720**
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이에서 내려다본 close-up — 스탠드 원 안 책상 위의 두 서류
- composition: 아래 2/3(y 32–96%) 스탠드의 노란 원 안에 **두 서류가 같은 크기로 나란히**: 왼쪽(x 6–48%) 펼친 파란 2공 바인더의 **빈 칸 표 한 면**(고리와 왼쪽 면은 왼쪽 가장자리에서 잘림 — 서류 B는 보이지 않는다), 오른쪽(x 52–94%) 그녀의 손(머스터드 소매)이 든 **연살구 서식** — 표처럼 줄지은 빈 칸 + 가운데 넓은 빈 칸 하나, 직인 칸 없음. 같은 높이·같은 폭·같은 빈 칸의 운율. 위 30%(y 0–30%)는 스탠드 원 밖의 어두운 책상 면(두꺼운 유리 상판의 어둠, 아무것도 비치지 않음). 그녀의 얼굴은 프레임 밖.
- characters: SEOHA(§11-3 '두 서류' — 손만)
- props: **PROP_ROSTER_OPEN_GRID** · **PROP_FORM_RENAME** + '램프 아래' 문장(`under the warm lamp light the paper still reads clearly as pale apricot, not orange and not pink`)
- lighting: LIGHT_REVEAL(선택 — 노란 원이 두 서류와 그녀 손만 감싸고 나머지는 차분한 푸른 그림자) 또는 LIGHT_L1 + LIGHT_LAMP · 떨림·그림자 침입 없음 · 빨강 0
- dialogue_ref (1): ① 목소리(창구) dialogue "…강서하입니다." (짧게, 꼬리 ↑ 위 = 창구 쪽 화면 밖)
- repeat: — (연살구 서식 = EP03 panel_057과 같은 서식)
- attach: _workspace/05_panels/ep03/panel_057.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 30%(x 3–97%, y 2–30%) — 스탠드 원 밖의 어두운 책상 면. 두 서류는 덮지 않는다. / 두 서류 크기 차가 크면 문장 강화 후 1회 ACCEPT 가능, 그 밖엔 REGEN. 서식·명부에 이름·글자 금지(이름은 말풍선으로만). 램프 아래 연살구가 주황·분홍이면 REGEN. 서류 B·붉은 원이 보이면 REGEN(이 명부 면은 빈 칸 표만). 첨부 P57의 손(HAND-RENAME)을 따라 그리면 REGEN(이 컷에 그 손은 없다). 뒤 720px.

### panel_060
- scene_id: S06 / location: LOC_L1_DUTYROOM · 서하 클로즈업(최종 컷)
- beat: ⑧ **최종 컷: 무대사 얼굴** · 감속 ⑤ · 가리는 것 = 신청인의 얼굴(유리 속) · 긴장 **10** · gap_after **1200**
- size: full-bleed · aspect: **9:16**
- camera: 눈높이 close-up — 정면, 얼굴
- composition: 가운데(x 10–90%, y 20–80%) 얼어붙은 서하의 얼굴 — 크게 뜬 눈, **입은 꽉 다물었다**(RIGHT 눈 밑 점 = 화면 왼쪽, 밤샘 잔머리). 스탠드의 노란 원이 얼굴만 감싸고 뒤는 차분한 푸른 그림자로 가라앉은 방. 아래(x 14–86%, y 80–92%) 그녀 손에 든 연살구 서식의 위쪽 가장자리(초점 밖). 아래 8%(y 92–100%) 민무늬 어두운 띠(그늘진 책상 가장자리). 위 18%는 초점 밖 어둠.
- characters: SEOHA(FULL + 밤샘) — 표정 ② `frozen in fear, eyes wide, lips pressed shut, face rigid`
- props: PROP_FORM_RENAME(가장자리, 초점 밖)
- lighting: LIGHT_REVEAL(선택) · 빨강 0
- dialogue_ref (caption): 캡션 narration "— 4화에 계속 —" (패널 맨 아래)
- attach: refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 캡션 — 아래 8% 띠(x 0–100%, y 92–100%), 민무늬 어두운 면(style-bible §8 캡션 문장). 그 밖 말풍선 없음. / **입이 벌어지면 REGEN**(그 이름을 말하지 않는다). 다크서클 금지. 뒤 1200px = 회차 끝.

---

## F. 첨부 사용 요약 (사용자가 Flow에서 붙일 것)

| 카드 | 패널 |
|---|---|
| SEOHA_turnaround | 2·4·5·6·8·9·11·12·13·17·18·19·21·22·24·29·30·33·34·35·36·39·41·42·43·44·47·48·49·50·53·55·56·57·59·60 |
| SEOHA_expressions | 7·12·18·30·33·39·45·60 |
| MIRAN_turnaround | 1·2·3·7·8·9·10·13·15·16·17 |
| MIRAN_expressions | 3·9·10·15 |
| SEONIM_turnaround | 20·24·27·32·36·37·38·50·55 |
| JAEWOO_turnaround | 11·51·52·53·54 |
| JAEWOO_expressions | 52·54 |
| **MOVEIN_ref** (신규) | 23·25·26·27·29·31·32·34·35·38·41·42·43·45·46·48 |
| **HANDRENAME_ref** (신규) | **57만** (HANDCLIFF_ref · JAEWOO_* 와 한 패널에 붙이지 않는다 — 지켜짐) |
| PROP_HANDOVER_pair | 1·4·13·14·15·28 (**P5 제외**) |
| PROP_PAGES_pair | 37·40 |
| PROP_STICKERS_pair | 40 |
| LOC_L3_LOBBY_DAY_plate | 2·3·7·8·17 |
| LOC_L1_DUTYROOM_plate | 25·43·54·56·58 |
| LOC_L1_DESK_plate | 20·22·47 |
| LOC_L2_CORRIDOR_plate | 19·23·51 |
| EP01 패널 PNG (21) | P6←009 · P19←007 · P24←013 · P25←014 · P26←016 · P27←022 · P28←024·041 · P29←023 · P30←025 · P32←021 · P34←040 · P36←046 · P38←020 · P40←019 · P42←015 · P45←041 · P47←045 · P48←049 · P50←011 · P56←001 |
| EP02 패널 PNG (12) | P1←058 · P4←035 · P10←056 · P11←038 · P14←058 · P16←054 · P20←014 · P33←036 · P37←027 · P52←033 · P53←040 · P55←026 |
| EP03 패널 PNG (11) | P5←004 · P6←005 · P12←005 · P14←001 · P16←013 · P18←013 · P41←035 · P44←021 · P46←031 · P49←022 · P59←057 |

- 모든 패널 3장 이내. 1장 컷: P21 · P31 · P58. 2장 컷: P5 · P22 · P23 · P26 · P35 · P39 · P44 · P46 · P49 · P51 · P57 · P59 · P60. 첨부 없는 컷 없음.
- EP01 · EP02 PNG가 아직 없을 때(둘 다 `WAITING_FOR_IMAGES`): 반복 컷은 그 줄을 빼고 문장만으로 만들 수 있지만, **비네트 3컷(P6 ← EP01 P9 · P11 ← EP02 P38 · P28 ← EP01 P24)은 원본이 생긴 뒤에만** 만든다.
- EP03 안의 순서: P1 → P14 · P4 → P5 → P6 · P12 · P13 → P16 · P18 · P21 → P44 · P22 → P49 · P31 → P46 · P35 → P41 · P57 → P59(번호 순서대로 만들면 자연히 지켜진다).

## G. 자가 점검

- [x] 패널 60 = 대본 P01–P60, `### panel_001`–`### panel_060` 연속 3자리, 순서 동일
- [x] 모든 패널에 scene_id / location(LOC_* + VIEW), size · aspect, camera, composition, characters + 표정, props, lighting/빨강, dialogue_ref, attach, fx/note
- [x] 같은 scene_id = 같은 장소·시간대(유리 너머 L2인 P23 · P26 · P51은 하위 ID로 분리), 장소·시각·블록 전환마다 SCENE BREAK(10곳)
- [x] 비율: 3:4 × 30 · 9:16 × 15 · 1:1 × 15 = style-bible §4-4 그대로, 반복 짝은 원본과 같은 비율
- [x] 대사·효과음·캡션이 있는 55컷 모두 `bubble space:` 기재(효과음만 P19 · P24 · P56, 캡션 P60), 무대사 5컷(P23 · P26 · P30 · P48 · P51)은 `silent`. 말풍선 수 = 대본 80(패널당 ≤2, P47만 대사 1 + 효과음 1). 빈자리는 왼쪽에서 시작하는 넓은 띠(뷰어 폭 100−x)
- [x] 글이 적힐 물건은 전부 빈 면, 주인공 컷(P1 · P4 · P5 · P14 · P21 · P28 · P34 · P37 · P40 · P42 · P44 · P45 · P47 · P57 · P59)은 크게. 서명 0(P14 잉크 점 하나), 서명 뒤 서류는 아래 줄을 가림(P15 · P28), 시계는 숫자 없음(P19 10:00 · P55 03:00)
- [x] EP01 구도 반복 19컷 + 비네트 2 = EP01 PNG 21장 · EP02 구도 반복 11컷 + 비네트 1 = EP02 PNG 12장, `camera:` 줄 원문 그대로(축이 바뀌면 `→ 이번 컷`), 바뀌는 것은 `repeat:`에. EP03 안 반복 9쌍
- [x] 비네트 3컷(P6 · P11 · P28) = Flow가 한 장에 그리는 기억 그림, 원본 PNG 첫 자리, 비네트 안 빨강 0, Avoid에서 `panel borders`만 뺌, 대안 경로 명시
- [x] 반전 컷: T-a ① P14(9:16) · ② P29(= EP01 P23, gap 0) · 정점 P30(= EP01 P25, 떨림 없음, 720) · 수칙 1 역전 P40 · 첫 반려 P45(떨림 없음) · T-b P59(720) → P60(1200)
- [x] 떨림 P23 하나, P30 · P45 LIGHT_STEADY + LIGHT_NOFLICKER. 빨강 = 4번 테이프 · 서류 B 원 · 영수증·인주 · 첫 직인 원 · 노미란 낮 책상 롤(P13 또렷 · P16 초점 밖)뿐, P1–P12 책상 면 0, P57–P60 빨강 0, 노미란 몸·결재판 빨강 0
- [x] 좌우 표식: 서하 점 RIGHT 눈 밑 · 선임 흉터 LEFT 눈썹 · 노미란 금시계 LEFT 손목 · 재우 은반지 RIGHT 검지 · HAND-RENAME = **LEFT** 손(화면 오른쪽에서) · 롤 = 노미란 책상 안쪽 오른쪽 귀퉁이(가리키는 LEFT 손과 팔 길이 이상)
- [x] art-director 결정 3개 반영: P1–P12 직원 책상 면 프레임 밖 · 결재판은 카운터 상판 → P17 LEFT 겨드랑이 · 토트백 P1–P12 LEFT 어깨 / P13 빈 의자 / P16부터 의자 등받이
- [x] 보호 규칙: P21 · P44 EP01 P48 구도 금지(F-23) · P56–P60 벨 누르는 손 없음(EP10) · P57–P59 유리 반사 없음(EP04) · 서랍 맨 아래 칸 강조 없음(F-20)

## H. 하류·상류 전달 (팀 메시징 대체)

| 대상 | 내용 |
|---|---|
| **letterer** | `bubble space:`를 `art_space`(한국어 그대로 가능)로, 말풍선 위치를 `place`로 옮긴다. `gap_after` = 각 패널 beat 줄의 값(= 대본 메타 줄). **뷰어 폭 한계:** 말풍선 폭 ≤ 100−x(x = 가운데). 긴 말풍선(w 60%+: P4① · P5 · P7② · P8①② · P37① · P42① · P43② · P46①, w 55–60%: P6② · P9①② · P10① · P17 · P21② · P28 · P34 · P44① · P45①② · P54①)은 가운데 x 38–40 이하로. **기억 말풍선 5:** P1(위쪽 화면 밖으로 꼬리) · P6 · P11 · P28(비네트 안 위 1/3) · P46(위쪽, 흐릿하게). **화면 밖 꼬리:** P1(위) · P4 · P5 · P37(아래 왼쪽 = 서하) · P16(오른쪽 위 = 노미란) · P20 ①(오른쪽 = 선임) · P21 · P44(아래 오른쪽 = 손) · P43 ②(아래 왼쪽 = 선임) · P49(위 왼쪽 = 선임) · P52 ②(아래 왼쪽 = 당직석 서하) · P57(오른쪽 아래 = 투입구) · P58(말구멍) · P59(위 = 창구). P9 두 말풍선은 속삭임(작게). P47 효과음은 손 오른쪽 어두운 면. P60 캡션은 아래 8% 띠. L3에서는 밝은 유리문·표시 면 위에 말풍선을 두지 않는다 |
| **prompt-smith** | style-bible §5-1 조립 순서. 반복 컷은 원본 프롬프트(`ep01_prompts.md` · `ep02_prompts.md`)의 카메라·구도 문장을 붙이고 `repeat:`의 "바뀌는 것"만 고친다(원본 PNG를 attach 첫 자리에). 첨부 원본에 없어야 할 것이 있는 컷(P4 재우 손가락, P16 서류 B·카운터, P18 롤, P20 롤·수첩·재우 손, P24 젖은 소매, P25 남자·파일, P26 물, P34 실루엣·젖음, P36 직인·인주, P45 명부·구정민, P47 아이보리 소매·금시계, P52 흰 종이, P56 실루엣, P59 HAND-RENAME 손)은 그것을 그리지 말라는 구절을 넣는다. 비네트 3컷은 Avoid에서 `panel borders`만 뺀다. S01 엑스트라는 §11-4 문장(초점 밖), 지하 컷은 Avoid에 `extra people`. 빨강 문장은 각 lighting 줄(P13 · P16은 style-bible §2-4-2 원문). 램프 아래 종이 색 문장: P42 · P45(연두) · P59(연살구). 시계: P19 = VIEW_ANCHOR 10:00, P55 = `PROP_CLOCK_TIME_0300`, P17은 프레임 밖(들어오면 `_0920`). **P5에는 `PROP_HANDOVER_pair`를 붙이지 않는다. P57에만 `HANDRENAME_ref`.** |
| **art-director** | 확인 요청(이견이 있으면 해당 패널만 고친다): ① **P27**: 대본 제목 '어깨 너머(앵글②)'·style-bible §6-1-2 VIEW_B 대신 beatsheet ↺EP01 P22의 **VIEW_SIDE**로 그렸다 — VIEW_B에서는 배경의 선임(F-06 변주, "이번엔 그녀를 본다")이 프레임에 들어오지 않는다. ② **P28**: 큰 컷은 `PROP_ROSTER_OPEN_B`('lying open')대로 책상 위 펼친 명부 클로즈업 — EP01 P41에서는 명부·손끝의 **프레임 자리**만 빌리고 축을 당직석 쪽으로 바꿨다. ③ **P26**: EP01 P16의 high-angle을 VIEW_WINDOW_FLOOR의 바닥 높이 low close-up으로(대본 "복도 쪽 낮은 클로즈업"). ④ **P45**: EP01 P41 구도에서 서하가 일어서고, 말풍선 자리를 위 오른쪽(뷰어 폭상 좁다) → 관과 머리 사이 띠로 옮겼다(머리를 EP01보다 조금 아래로). ⑤ **P29 · P37 · P40 · P33**: 원본의 빈 띠를 조금 넓혔다(P29 위 오른쪽 1/4 → x 30–97% · P37 · P40 22% → 30% · P33 28% → 32%) — 말풍선 둘·뷰어 폭 때문. 인물·소품 자리는 원본 그대로. ⑥ **P13**: 서하는 카운터 너머 민원인 쪽에 서 있고 그녀 의자는 비었다(토트백 결정), 노미란은 책상 앞에 선 뒷모습 3/4 · LEFT 손끝으로 가리킴 · RIGHT 손은 몸 곁(롤과 반대). ⑦ **P1**: 노미란의 LEFT 손이 카운터 건너편(오른쪽 위)에서 들어와 아래 줄 옆에 남아 있다(대본 "노미란의 왼손 검지가 아래 줄 옆"). ⑧ **P10**: EP02 P56 틀에서 서하를 오른쪽 가장자리 초점 밖으로(§5-6 '단독 미디엄'). ⑨ **P7–P12 서류 B는 뒷면이 위**(P5 이후, 빨강 0) → P13에서 앞면(붉은 원)으로 — 노미란이 가리키는 아래 줄이 보이도록. ⑩ **P47**: 서하의 RIGHT 손이 찍고 LEFT 손이 종이를 누른다(EP01 P45 노미란 LEFT 손 자리). ⑪ **P50**: 한 장 = 한 순간 — 선임 손이 막 거두는 순간 + 서하가 컵을 수첩 귀퉁이에 놓는 순간을 한 그림에 |
| **리더(Flow 핸드오프)** | 만드는 순서: EP01 원본 21장 · EP02 원본 12장이 먼저(둘 다 `WAITING_FOR_IMAGES`). 비네트 3컷은 원본이 있어야만 만든다. 신규 레퍼런스 카드 `MOVEIN_ref` · `HANDRENAME_ref`(작성 중)가 P23 이후 16컷 · P57에 필요하다. EP03 안에서는 번호 순서대로 만들면 앞 컷 의존이 지켜진다(§F). 비네트가 두 번 시도에도 안 되면 대안(빈자리 + 합성)은 사용자 결정 |

## I. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-18 | 최초 작성: 60패널, 비율 3:4×30 · 9:16×15 · 1:1×15(style-bible §4-4 그대로), EP01 구도 반복 19컷 + 비네트 2(EP01 PNG 21장) · EP02 구도 반복 11컷 + 비네트 1(EP02 PNG 12장) · EP03 안 반복 9쌍(PNG 11장), bubble space 55컷 + silent 5, SCENE BREAK 10곳. art-director 결정 3개(P1–P12 책상 면 없음 · 결재판 카운터 상판 · 토트백) 반영, 대본 P13 괄호의 '의자 등받이 토트백'은 빈 의자로 대체 |
