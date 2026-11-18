# EP02 샷리스트 「퇴근하세요」 — panel-director

- 작성: panel-director · 기준일 **2026-11-18** · EP02 Phase 4 · **v1**
- 입력: `03_episode/ep02_script_final.md`(58패널, 최종) · `03_episode/ep02_beatsheet.md`(§1 R1–R17, §2 gap·⊘ 소품, §3-1 재사용 구도, §3-2 인셋, §3-4 시각 문법, §4 무글자) · `04_visual/style-bible.md` **v1.1**(§2-4-1 빨강, §2-7 컬러 스크립트, §3-4 조명, §4-3 비율·비네트, §5-5 짝 구도, §6-1-1·§6-2-1 지리, §6-3 VIEW_SIDE/VIEW_SHELVES/숙직실 문 활짝, §6-5 VIEW_FROM_WINDOW/VIEW_ANCHOR_0600, §6-6 LOC_L3_LOBBY, §7-5 소품·시계 바늘, §7-6 연속성, §8-1 빈자리, §10-4 드리프트) · `04_visual/character-sheets.md` **v1.1**(§10-1 JAEWOO, §10-2 서하 밤샘, §10-3 노미란, §10-4 선임·엑스트라, §10-5 구분, §10-6 첨부) · `04_visual/refs/ref_prompts.md`(카드 21장, L3 플레이트 이름 = `_DAWN_` / `_DAY_`) · `04_visual/ep01_shotlist.md`(형식, 반복 원본) · `webtoon-khmer-edition` §3–4
- 다음 독자: **letterer**(`bubble space` → `art_space`·`place`, `gap_after`) → **prompt-smith**(Flow 프롬프트, `attach`) → 사용자(Flow) → panel-validator
- 총 **58패널**(panel_001–panel_058 = 대본 P01–P58, 번호·순서 동일). 팀 메시징이 없는 실행이라 상류·하류 전달 사항은 문서 끝 §H에 모았다.

## 읽는 법

- **좌우:** `화면 왼쪽/오른쪽` = 화면 기준. `LEFT/RIGHT`(대문자) = 인물·사물 **자신의** 좌우. 정면 그림에서 재우의 RIGHT 손(은반지)은 화면 왼쪽, 서하의 RIGHT 눈 밑 점도 화면 왼쪽에 보인다.
- **좌표:** `x`/`y` = 패널 왼쪽 위에서 잰 %. 근사치다. letterer가 `art_space`·`place`로 옮긴다.
- **`bubble space:`** (fx/note 첫 항목) = 그 컷에서 **그림이 비워 둘 조용한 배경**(천장·윗벽·서가 사이 어둠·유리 너머 어두운 복도·L3의 높은 윗벽·초점 밖 배경). 얼굴·손·핵심 소품(수칙 종이·인수인계서·시계 면·스티커·열쇠)은 그 자리에 두지 않는다. L3 유리 정문의 밝은 면 위에는 두지 않는다(흰 말풍선이 묻힌다). 효과음은 소리 나는 물건 곁 작은 빈자리. 무대사 컷은 `silent`.
- **Khmer edition:** 어떤 이미지에도 글자·숫자·말풍선·가짜 글씨·서명이 없다. 글이 적힐 물건(수칙 종이·4번 조각·흰 덮개 띠·**인수인계서 A·B**·일지·명부·영수증·수첩·휴대폰 화면·시계·내선 버튼·L3 표시 면)은 **빈 면**으로, 그 컷의 주인공이면 **충분히 크게**(인수인계서 = A4 세로, 이중 테두리와 아래쪽 서명란 두 줄이 또렷하게). EP02에는 물건 위 글씨 `env`가 없다 — 내용은 전부 낭독·대사 말풍선이다.
- **characters:** 주 인물 = character-sheets **FULL**, 나머지 = **SHORT**, 손·뒷모습·실루엣 = 상태 토큰(§10-1–§10-4). 표정은 character-sheets 번호(예: 재우 ⑤, 서하 ⑥)와 그 영문 문장을 쓴다.
- **repeat:** EP01(또는 EP02 안의 앞 컷) 구도의 반복. **`camera:` 줄은 원본 문장을 글자 그대로 쓴다**(↺ 표시). 축·장소가 바뀌는 컷(P12·P24·P33·P39·P54·P56)만 그 뒤에 `→ 이번 컷`으로 바뀐 축을 덧붙였다. **`composition:`은 `[↺… 틀]`로 시작해 원본의 자리(인물·소품의 %, 위쪽 빈 띠)를 원본 문장 그대로 따른 뒤 이 컷의 인물·소품으로 채운다.** 바뀌는 것은 `repeat:` 줄에 다 적었다. 원본 PNG를 attach 첫 자리에 붙인다(style-bible §5-5: 같은 순간이 아니라 **구도**의 반복 — 인물·소품 상태는 EP02 문장).
- **attach:** 사용자가 Flow에 손으로 붙일 이미지(패널당 3장 이내). `refs/…` = 레퍼런스 카드, `_workspace/05_panels/ep01/panel_NNN.png` = EP01 원본 패널, `_workspace/05_panels/ep02/panel_NNN.png` = 이 회차의 앞 컷.
- **기억 비네트:** 인셋 6컷은 Flow가 한 장 안에 그리는 '액자 속 기억 그림'이다(§D).
- **조명:** EP02에는 형광등 떨림·어둠 컷이 없다. `LIGHT_FLICKER`·`LIGHT_BLACKOUT`·`LIGHT_COMEDY`는 쓰지 않는다(유머 컷도 씬 조명 그대로). `LIGHT_NOFLICKER`는 P30–P33 필수, 지하 컷 전체 권장.

---

## A. 장소 목록 (scene_id ↔ LOC ↔ VIEW ↔ 배경 한 줄)

| scene_id | 패널 | 시각 | location | 주 VIEW | 조명 | 배경 한 줄 |
|---|---|---|---|---|---|---|
| S01 | P1–25 | 23시대 | LOC_L1_DUTYROOM | EP01 P61 어깨 너머 · VIEW_SHELVES · VIEW_SIDE · VIEW_C · VIEW_DESK · 수칙 종이 클로즈업 | LIGHT_L1 + LIGHT_LAMP (+ 재우가 보이면 LIGHT_LAMP_EDGE) | 지하 2층 1990년대 관공서 당직실(EP01 P64 직후, 밤 1 루프 2). 떨림 없음. P1–P2는 유리가 프레임 밖 |
| S02 | P26–29 | 04:40 | LOC_L1_DUTYROOM | VIEW_SIDE(시계) · 수칙 종이 · VIEW_C 축 | LIGHT_L1 + LIGHT_LAMP | 같은 당직실, 같은 색·같은 빛(새벽 4시도 지하는 같다) |
| S03a | P30 | 05:56 | LOC_L1_DUTYROOM | VIEW_SHELVES 축(시계 클로즈업) | LIGHT_L1 + LIGHT_LAMP + LIGHT_NOFLICKER | 서가 위 숫자 없는 벽시계 |
| S03b | P31 | 05:57 | **LOC_L2_CORRIDOR** | VIEW_FROM_WINDOW (당직실 안에서 유리 너머) | LIGHT_CORRIDOR + LIGHT_NOFLICKER | 복도의 가까운 끝(방화문·복도 시계), 아무도 없음 |
| S03c | P32–42 | 05:57–06:00 | LOC_L1_DUTYROOM | VIEW_A · VIEW_C 축 · 클로즈업 · VIEW_SIDE | LIGHT_L1 + LIGHT_LAMP + LIGHT_NOFLICKER · P36–37 LIGHT_REVEAL(선택) · P42 + LIGHT_0600(조건부) | 같은 당직실, 떨림 없음 |
| S04a | P43 | 06:00 직후 | LOC_L1_DUTYROOM | VIEW_NAPDOOR **활짝 열림** | LIGHT_L1 + LIGHT_LAMP + 문틀 안 난로 주황(작게) | 숙직실 문 너머 평상·담요·난로·옷걸이·벽 내선 수화기 |
| S04b | P44 | 06:00 | **LOC_L2_CORRIDOR** | VIEW_ANCHOR_0600 | LIGHT_CORRIDOR + 휴대폰 빈 화면의 흰 빛 | 앵커 복도, 시계 06:00, 방화문이 열린다 |
| S05 | P45–52 | 06:0x | **LOC_L3_LOBBY** | VIEW_L3_INWARD · VIEW_L3_OUTWARD · VIEW_L3_CHAIRS | **LIGHT_L3_DAWN** (씬 안에서 바꾸지 않는다) | 1층 본관 로비, 푸른 새벽빛, 비어 있음(서하·노미란뿐) |
| S06 | P53–58 | 09:00 | **LOC_L3_LOBBY** | VIEW_L3_DAYWINDOW · 카운터 상판 클로즈업 | **LIGHT_L3_DAY** (씬 안에서 바꾸지 않는다) | 같은 로비, 평평한 낮 백색광, 이웃 창구의 초점 밖 엑스트라 몇 |

- 장소 토큰은 style-bible §6 원문을 그대로 쓴다. 같은 scene_id 안에서는 같은 LOC 문장, 컷마다 VIEW 문장만 바꾼다.
- 장소가 씬 안에서 바뀌는 S03(P31 유리 너머 L2)·S04(P44 방화문)는 EP01처럼 하위 ID(a/b/c)로 나눴다. 이음새는 유리 창구와 방화문·복도 시계다. S05→S06은 같은 LOC, **조명만 다른 두 씬**(같은 배치).
- 당직실 지리(style-bible §6-2·§6-2-1): 당직석에 앉으면 유리를 마주 본다 · 그녀의 왼쪽 = 칸막이(수칙 종이, 앉은 눈높이)와 옆벽의 숙직실 문 · 오른쪽 = 출입문 · 뒤 = 서가 3열·접이식 의자·보조 탁자·서가 위 시계(하나뿐). 복도는 **방화문·계단 쪽 = 그녀의 왼쪽**(VIEW_A에서는 화면 오른쪽), 어두운 끝 = 오른쪽. **시계가 보이는 뷰 = VIEW_A · VIEW_SIDE · VIEW_SHELVES**뿐. S01의 시계는 배경 소품(바늘 묘사 없음).
- L3 지리(style-bible §6-6): 정문에서 보면 카운터 = 왼쪽 벽, 대기 의자 = 가운데~오른쪽, 계단 철문 = 안쪽 오른쪽 구석, 시계 = 카운터 가운데 위 벽, 노미란의 낮 창구 = 시계 바로 아래. 카운터의 높은 앞턱이 직원 책상 면을 가린다(R11).

## B. 비율 · 크기

| size | Flow aspect | 패널 | 수 |
|---|---|---|---|
| medium (STD) | **3:4** | P4·5·6·7·8·9·10·11·15·16·17·20·21·23·24·25·26·27·28·29·31·32·35·38·40·41·42·43·46·47·48·49·50·51·53 | **35** |
| large / full-bleed (TALL: 느림·공개·정지점·앵커) | **9:16** | P1·2·3·12·18·33·34·37·44·45·52·55·58 | **13** |
| small / insert (SQ: 클로즈업·빠른 한마디·손) | **1:1** | P13·14·19·22·30·36·39·54·56·57 | **10** |

- style-bible §4-3 권장 배정 그대로다(바꾼 것 없음). EP01 구도를 반복하는 짝은 모두 원본과 같은 비율이다(9:16 = P1←P61 · P12←P16 · P18←P58 · P33←P42 · P44←P7·P28 · P52←P5 / 1:1 = P14←P33 · P19←P63 · P39←P46 · P54←P9 · P56←P8 / 3:4 = P11←P11 · P16←P19 · P24←P49 · P27←P57 · P28←P21 · P29←P20 · P32←P15 · P43←P43 · P50←P6). 예외는 **P37** 하나: EP01 P19(3:4)의 **앵글만** 빌리고, 비네트 + 생각 말풍선 + gap 720 정점이라 style-bible §4-3대로 9:16(EP01 P55와 같은 판단).
- EP02 안의 짝도 같은 비율: P1↔P2(9:16) · P5↔P23 · P26↔P42 · P34(9:16)→P35(3:4, 클로즈업이라 구도 반복 아님) · P54↔P57(1:1) → P58(9:16, 최종 컷).
- Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데로 모은다. 그때도 `bubble space` 비율 위치는 그대로 둔다.

## C. 구도 반복 — 원본 → 반복

### C-1. EP01 구도 → EP02 (원본 PNG 첨부)

| EP02 | EP01 원본 | 비율 | 같은 것 (camera 줄 원문 그대로) | 바뀌는 것 |
|---|---|---|---|---|
| **panel_001** | panel_061 (+ panel_064 상태) | 9:16 | 약간 high-angle 어깨 너머, 뒷머리·어깨 자리, 위 오른쪽에서 오는 팔, 유리 프레임 밖 | 손은 **빈손**으로 의자 등받이 윗변에(그래서 조금 아래), 롤은 책상 위 닫힌 수첩 옆(P64 상태), 위 28% 빈 띠(기억 말풍선 둘) |
| panel_011 | panel_011 | 3:4 | VIEW_SIDE medium wide, 왼쪽 선임·가운데 책상 모서리·오른쪽 서하, 위 38% | 선임은 거꾸로 앉아 종이컵 **둘**에 물을 붓는다, 서가에 기댄 재우가 선임 곁(빛 가장자리) |
| panel_012 | panel_016 | 9:16 | high-angle 바닥 클로즈업, 아래 = 발, 왼쪽 = 오르는 옷자락, 아래 오른쪽 = 흔적 자리 | **방 안**, 마른 테라조 위 오프화이트 운동화, 웅덩이·발자국 없음 (camera 축 → 방 안) |
| panel_014 | panel_033 `COMP-DESK` | 1:1 | VIEW_DESK 부감, 책상 고정 배치, **영수증 높이 = P33** | 노미란 팔 대신 재우의 RIGHT 손(반지 돌리기)이 열쇠 곁 빛 가장자리, 수첩·롤이 책상 위 |
| panel_016 | panel_019 | 3:4 | 수칙 종이 클로즈업(앵글②), 종이 자리·스티커 자리·위 22% | 4번 조각 옆에 롤을 든 재우의 RIGHT 손 |
| panel_018 | panel_058 | 9:16 | 4번 조각 오른쪽 끝 익스트림 클로즈업, 들린 귀퉁이 | 아래에서 다가오는 그녀의 손끝 + 위 왼쪽 생각 말풍선 자리 |
| panel_019 | panel_063 | 1:1 | 4번 조각 클로즈업, 위 오른쪽에서 오는 반지 손, 위 왼쪽 1/4 빈 모눈 | 손이 들린 귀퉁이를 **덮는다**, 그녀의 손끝이 손등에 닿아 멈춤, 오른쪽 위 가장자리에 그의 얼굴 일부 |
| panel_024 | panel_049 | 3:4 | 서하 frontal medium 자리, 스탠드 빛, 위 35% | 축만 VIEW_SIDE: 그녀 뒤가 유리 대신 칸막이의 수칙 종이, 전경 오른쪽에 재우 뒷모습, 앉아 있다 |
| panel_027 | panel_057 | 3:4 | 칸막이 정면 약간 오른쪽, 종이 자리, 위 22% | 손끝이 4번 조각을 **지나 맨 아래 7번 자리**에서 멈춘다, 오른쪽엔 수첩 대신 초점 밖 어둠 |
| panel_028 | panel_021 `COMP-E1` | 3:4 | 선임 근경·책상 원경, 위 25% | 선임은 팔짱 낀 채 눈 감음(컵 없음), 원경 서하는 유리 너머 복도를 본다, 오른쪽 위 생각 말풍선 자리 |
| panel_029 | panel_020 | 3:4 | VIEW_SIDE 투샷 가슴 위, 위 38% | 선임 한쪽 눈만 뜸, 서하 ⑧ 무표정, 말하는 순서가 서하 → 선임 |
| panel_032 | panel_015 | 3:4 | VIEW_A 정면 미디엄, 서하·두 손 자리 | 전경 남자 어깨 없음(복도는 비었다), 두 손이 책상 위에 납작, 뒤에 눈 감은 선임, 서가 위 시계 05:57 |
| panel_033 | panel_042 | 9:16 | 서가 쪽에서 비스듬히 본 '반쪽 문 + 반쪽 창구', 위 20% | **좌우 대칭판**: 오른쪽 절반 = 출입문 틀의 실루엣(흰 종이 한 장), 왼쪽 절반 = 창구 끝 |
| panel_039 | panel_046 (+ panel_009 두 손 대비, 첨부 안 함) | 1:1 | 눈높이 손 클로즈업, 가운데 손 위의 손, 위 28% | 직인 대신 열쇠: 그녀의 손바닥이 먼저 덮고, 은반지 검지가 한 뼘 앞에서 멈춤, 위 오른쪽 귀퉁이에 시계 05:59 |
| panel_043 | panel_043 | 3:4 | 문 정면, 문틀 = 프레임 안 프레임, 위 24% | 문 **활짝**, 안쪽 옷걸이·벽 내선 수화기, 팔의 코트·재킷 뭉치, 일지를 덮어 겨드랑이에, 가장자리 초점 밖 서하·선임 |
| panel_044 | panel_007 · panel_028 `COMP-ANCHOR` | 9:16 | 카메라 위치·거리·높이, 방화문, 문 위 시계, 위 왼쪽 빈자리 | **VIEW_ANCHOR_0600**: 시계 06:00, 그녀는 등을 보이고 밀대를 밀어 문을 연다, 손의 휴대폰 진동 |
| panel_050 | panel_006 | 3:4 | 눈높이 약간 옆 medium 허리 위, 서하 자리, 위 40% | 장소 L3 대기 의자에 털썩 앉음, 무릎에 일지·수첩, 휴대폰을 귀에 |
| panel_052 | panel_005 `COMP-STICKER` | 9:16 | 수첩 표지 클로즈업, 스티커 자리, LEFT 엄지, 소매 | 장소 L3 새벽, 수첩은 무릎 위, 위 오른쪽에 숙인 얼굴(웃는 입·물기 어린 눈)과 귀의 휴대폰 → 빈 띠는 위 왼쪽만 |
| panel_054 | panel_009 `COMP-DESK`(두 손) | 1:1 | 부감, 오른쪽에서 들어오는 노미란 팔, 아래 가운데 서하 두 손, 왼쪽 아래 서하 어깨, 위 38% | 장소 L3 카운터 상판, 손바닥이 열쇠를 서하 쪽으로 **되민다**, 그 위에 서류 B (camera 축 → 카운터) |
| panel_056 | panel_008 `COMP-HANDOVER` | 1:1 | 노미란 가운데 왼쪽·서하 오른쪽, 머리 40% 선 아래, 위 40%, 노미란 자세·입만 웃는 미소 | L3 낮 창구(VIEW_L3_DAYWINDOW), 노미란이 카운터에 기댐, 열쇠 흔들기 없음 (camera 축 → 민원인 쪽) |

- **P2**는 EP01 P61의 **손 토큰**만 잇는다(HANDCLIFF_ref 첨부, EP01 PNG는 붙이지 않는다 — 구도는 EP02 panel_001에서 위로 오르는 새 컷).
- **P26 · P42 (beatsheet "↺EP01 P50 L1 와이드")**: EP01 P50은 VIEW_C라 **시계가 카메라 뒤**에 있다(style-bible §6-2-1). 04:40·06:00 시계가 주인공이므로 style-bible §5-5·§6-1-1대로 **VIEW_SIDE 와이드**로 그리고, EP01 P50에서는 "근경 접이식 의자 + 중경 당직석 서하" 배치만 빌렸다. 그래서 EP01 panel_050은 **첨부하지 않는다**(Flow가 시계 없는 각도로 끌려간다). 대신 P26 → P42가 EP02 안의 짝이다(§C-2). §H에 리더 확인 항목으로 남겼다.
- **P37**은 EP01 P19의 앵글(칸막이 정면 약간 비스듬히)만 빌린다 — 위쪽은 비네트, 프레임은 4번 조각~7번 자리. attach에 EP01 panel_019를 둘째로 붙인다.
- 만드는 순서: EP01 원본이 먼저 있어야 한다(EP01은 아직 Flow 제작 전, `ep01_flow_status.md` = WAITING_FOR_IMAGES). EP01 PNG가 없으면 그 반복 컷은 문장만으로 가고, 생긴 뒤 다시 붙여 받는다(리더 판단). 반복 컷도 PNG를 복사하지 않고 **다시 그린다**(md5 중복 금지).

### C-2. EP02 안의 반복 (이 회차 앞 컷 PNG 첨부)

| 반복 | 원본 | 같은 것 | 바뀌는 것 |
|---|---|---|---|
| panel_002 | panel_001 | 같은 순간·같은 손·같은 의자 등받이 | 카메라가 손에서 턱선까지 오른다 |
| panel_023 | panel_005 | VIEW_SIDE 투샷, 카메라·좌우 배치·위 26%, 둘 사이 칸막이의 수칙 종이 | 질문하던 그 → 답하는 그녀(표정 ④), 그의 손에 띠와 롤 |
| panel_035 | panel_034 | 같은 서류 A·같은 손(같은 순간) | 서류 클로즈업, 그녀의 손끝 |
| **panel_042** | **panel_026** | VIEW_SIDE 와이드, 카메라·배치·비율 전부 | 시계 06:00 · 선임 눈을 뜨고 ⑤ 옅은 미소 · 서하 수첩을 덮음(열쇠는 그녀 손 아래) · (조건부) 유리 너머 복도 끝 등이 켜짐 |
| panel_057 | panel_054 | 같은 서류 B·같은 카운터·같은 노미란 LEFT 손 | 검지가 아래 줄을 짚는 클로즈업 |
| panel_058 | panel_057 | 같은 서류 B·같은 카운터 | 서하의 펜 든 손, 서류 밑 열쇠 |
| 비네트 P37 · P55 | panel_027 · panel_034 | §D | §D |

## D. 리플레이 인셋 → 기억 비네트 (6컷: P8 · P10 · P20 · P37 · P47 · P55)

EP01 shotlist §D(리더 결정)와 style-bible §4-3을 그대로 따른다. Flow는 두 이미지를 합성하지 못하므로 인셋을 **Flow가 한 장 안에 그리는 '액자 속 기억 그림'**으로 그린다.
- **모양:** 패널 위 왼쪽 작은 사각 그림. 3–4px 회백색(dingy off-white) 테두리 + 아래·오른쪽의 얇은 어두운 그림자. 안은 **채도 약 40% 낮춘 바랜 색**, 같은 화풍, 원본 컷과 같은 각도·같은 순간.
- **첨부:** 비네트의 원본 패널 PNG를 attach **첫 자리**에 붙이고("the small framed memory picture in the upper-left shows the same moment as the attached earlier panel, in faded colors"), 원본의 인물·소품 문장을 짧게 다시 쓴다(Flow가 참조를 덜 따를 때의 안전장치).
- **기억 말풍선(`type: memory`) 자리:** 원본 컷의 위쪽 빈 띠가 비네트 안 **위 1/3**에 오도록 자른다 → 기억 말풍선(P10은 기억 효과음까지)이 대본대로 "인셋 안"에 들어간다. 필요하면 비네트 오른쪽 바깥 어둠까지 넘어가도 된다.
- **범위:** style-bible §4-2 규칙 1(한 장 안에 테두리 금지)의 EP02 예외 6컷. prompt-smith는 이 6컷의 Avoid 줄에서 `panel borders`만 뺀다.
- **대안:** Flow가 비네트를 엉뚱하게 그리거나(내용이 본 그림과 섞임) 두 번 다시 그려도 안 되면, 그 자리를 조용한 배경으로 비운 버전으로 다시 받고 원본 PNG 크롭 합성 여부는 리더·사용자가 정한다(그림을 새로 지어내지 않는다).
- **시계 인셋은 만들지 않는다:** beatsheet R10은 시계가 없는 P33–P38에 P32·P39 시계를 잘라 넣는 것을 선택으로 열어 두었다. 타이머는 P30·P31·P32·P39·P42·P44의 시계와 대사로 충분하고, 비네트를 더 늘리면 '한 장 = 한 순간'이 무너지므로 넣지 않았다(§H).

| 비네트 | 원본 | 비네트 자리 (x · y) | 비네트 안 내용 (원본과 같은 각도) | 주의 |
|---|---|---|---|---|
| P8 | EP01 panel_010 | 4–50% · 4–36% | 크림색 숙직실 문으로 걸어가며 어깨 너머로 돌아보는 노미란(의상 A, 코트를 어깨에 걸침), 위 1/3 = 문 위 민무늬 윗벽 | 비네트 바로 아래 큰 컷에 같은 숙직실 문(실제)이 보인다 |
| P10 | EP01 panel_034 | 4–50% · 4–36% | 서가 앞에서 종이컵을 내미는 선임, 그 왼쪽 서가 사이 어두운 틈, 위 1/3 = 천장·서가 꼭대기 어둠 | 기억 효과음은 비네트 안 왼쪽 서가 틈, 기억 말풍선은 비네트 위 1/3 |
| P20 | EP01 panel_063 | 4–50% · 4–36% | 4번 조각 바로 위에서 멈춘 반지 낀 검지(빨간 롤 일부), 위 왼쪽 = 초점 밖 빈 모눈 | 비네트 안 빨강도 채도를 낮춘다(바랜 빨강) |
| P37 | EP02 panel_027 | 4–60% · 3–30% | 맨 아래 7번 자리를 짚은 그녀의 손끝, 위 1/3 = 종이 위 초점 밖 어둠 | P27을 먼저 만든다 |
| P47 | EP01 panel_048 | 4–50% · 4–36% | **일지 면(빈 줄)과 펜을 쥔 LEFT 손(금색 팔찌시계)만** | **칸막이·당직석·수칙 종이·책상 유리를 짚은 RIGHT 손바닥은 넣지 않는다**(F-23 보호, EP19 몫) |
| P55 | EP02 panel_034 | 4–64% · 3–33% | 재우가 두 손으로 내민 서류 A(완전한 빈 면), RIGHT 검지 은반지 | **비네트 안에 빨강 없음** — 큰 컷의 서류 B와 다른 것은 붉은 원 하나. P34를 먼저 만든다 |

---

## E. 패널

### panel_001
- scene_id: S01 / location: LOC_L1_DUTYROOM · EP01 P61 어깨 너머 축(뒤 위에서, 유리 프레임 밖)
- beat: ① 답 반·질문 반 — 클리프를 같은 순간에서 받는다(EP01 P64 직후) ⟨이중의미⟩ ⟨ECHO:E7⟩ · 긴장 8 · gap_after 0
- size: large · aspect: **9:16**
- camera: ↺EP01 P61 — 약간 high-angle over-the-shoulder — 앉은 서하의 뒤 위에서 책상과 칸막이를 내려다봄
- composition: [↺EP01 P61 틀] 가운데 왼쪽~아래(x 10–60%, y 50–100%) 서하의 뒷머리(낮은 포니테일·네이비 머리끈)와 어깨. 위 오른쪽 가장자리에서 슬림한 창백한 RIGHT 손이 들어와(팔은 아래팔에서 프레임에 잘림) 그녀의 RIGHT 어깨 곁으로 내려온다 — **이번엔 빈손으로 초록 회전의자 등받이 윗변에 얹혀 있다**(손 x 58–88%, y 44–66%, 아래팔 x 72–100%, y 8–46%): 검지의 가는 은반지, 골이 보이는 차콜 니트 소맷부리 + 흰 셔츠 커프스. 그 너머 책상: 가운데(x 30–58%, y 32–48%) 스탠드의 노란 원 안에 닫힌 네이비 리넨 수첩(표지 오른쪽 위 새 달냥이)과 그 옆에 놓인 빨간 비닐테이프 롤(EP01 P64 상태 그대로). 왼쪽 가장자리(x 0–16%, y 30–52%) 칸막이의 수칙 종이(초점 밖). 위 28%(y 0–28%)는 책상 상판의 먼 쪽 — 스탠드 빛이 닿지 않는 어두운 두꺼운 유리 상판(아무것도 비치지 않음). 유리 창구는 프레임 밖.
- characters: JAEWOO(손만 — character-sheets §10-1 '빈손' 상태 토큰 = HAND-CLIFF 원문의 불변 부분, 얼굴·몸·머리카락 없음) · SEOHA(뒷모습 상태 토큰, 얼굴 안 보임)
- props: PROP_TAPE_ROLL_RED(책상 위, 수첩 옆) · PROP_NOTEBOOK(닫힘) + PROP_STICKER_NEW · PROP_RULESHEET_SMALL(초점 밖) · PROP_SWIVEL_CHAIR · PROP_LAMP
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_NOFLICKER — 노란 원 안에는 손만(style-bible §2-7) · 유리 프레임 밖(그가 유리에 먼저 비치면 공개가 샌다) · 빨강 = 책상 위 롤 + 칸막이 테이프 두 줄(작게)뿐
- dialogue_ref (2): ① 목소리(기억) memory "그 수칙," ② 목소리(기억) memory "아직 안 바꿨네?" (둘 다 흐린 파란 테, 꼬리 ↑ 위쪽 프레임 밖 — EP01 P62·P63과 KM 동일)
- repeat: EP01 **panel_061** 구도(카메라·뒷머리·어깨 자리·위 오른쪽에서 오는 팔) + **panel_064** 상태(롤이 수첩 옆) · 바뀌는 것: 손이 롤을 들지 않고 빈손으로 의자 등받이에 얹힘(그래서 손이 조금 아래), 책상 위 수첩·롤이 보임, 위 28% 빈 띠. EP01 P64 PNG는 쓰지 않는다(손 위치가 달라 새 그림, 중복 이미지 금지 — beatsheet R2)
- attach: _workspace/05_panels/ep01/panel_061.png, refs/HANDCLIFF_ref.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 28% 왼쪽~가운데(x 3–68%, y 2–28%) — 책상 상판의 어두운 먼 쪽. 오른쪽 위 가장자리의 아래팔(x 72–100%)은 피한다. ①은 왼쪽 위, ②는 그 아래 오른쪽으로 엇갈리게. / 손가락 다섯, RIGHT 손, 반지는 검지 하나. 손에 롤이 있으면 REGEN(character-sheets §10-7). 유리·반사에 사람이 비치면 REGEN.

### panel_002
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SHELVES 축(당직석 곁에서 그의 몸을 따라 위로, 배경 = 서가)
- beat: ① 카메라가 손에서 얼굴 쪽으로 오른다 · F-17 회수 시작 · 공개 1컷 전 · 긴장 8 · gap_after **480**
- size: large(세로로 긴 컷) · aspect: **9:16**
- camera: 앉은 눈높이에서 약간 low-angle, 아래 → 위로 훑는 세로 컷 — 의자 등받이 위 손에서 시작해 턱선에서 끝남
- composition: 아래(x 22–72%, y 80–100%) 초록 회전의자 등받이 윗변에 얹힌 RIGHT 손(검지 은반지, 흰 커프스 — panel_001과 같은 손·같은 순간). 그 위로 몸에 맞는 가는 골지 차콜 카디건 소매가 화면 가운데를 비스듬히 올라가(x 34–70%, y 30–80%) 좁고 처진 어깨(x 26–82%, y 8–26%)로 이어진다. 단추를 다 잠근 카디건 깃 밖의 흰 셔츠 깃(맨 위 단추 풀림, y 4–14%), 짙은 회색 목줄이 가슴 가운데로 내려와 끝은 **카드 없는 빈 금속 클립**(x 46–56%, y 38–48%, 또렷하게). 위 가장자리(y 0–4%)에서 턱선이 잘린다 — 얼굴 없음. 배경: 초점 밖 회색 철제 서가와 그 사이 어둠. 왼쪽 아래(x 3–34%, y 80–96%)는 의자 등받이 곁 초점 밖 어둠(그녀의 머스터드 어깨 가장자리가 걸려도 된다).
- characters: JAEWOO(character-sheets §10-1 '손에서 얼굴 쪽으로 오르는 컷' 상태 토큰 + SHORT, 얼굴 없음) · SEOHA(소리만 — 의자가 돈다. 어깨 가장자리만 걸려도 됨)
- props: PROP_SWIVEL_CHAIR · 빈 클립 목줄
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE(손만 노란 빛, 소매·어깨부터 차가운 녹백) + LIGHT_NOFLICKER · 유리는 카메라 뒤 · 빨강 없음
- dialogue_ref (sfx): sfx "끼익—" (그녀의 회전의자가 돈다)
- repeat: EP02 **panel_001**과 같은 순간·같은 손·같은 의자 등받이(C-2) · 바뀌는 것: 카메라가 손에서 턱선까지 오른다(새 구도). 손 토큰 = EP01 P61(HANDCLIFF_ref)
- attach: _workspace/05_panels/ep02/panel_001.png, refs/JAEWOO_turnaround.png, refs/HANDCLIFF_ref.png
- fx/note: bubble space: sfx — 아래 왼쪽 의자 등받이 곁 초점 밖 어둠(x 3–34%, y 80–96%). / 턱선에서 프레임이 잘린다: 입·코·눈이 보이면 REGEN(P3 공개가 샌다). 목줄 끝에 카드가 생기면 REGEN. 뒤 480px = 공개 1컷 전 정지.

### panel_003
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SHELVES(그녀 시점 로우 앵글)
- beat: ① **T-a 공개: 얼굴** ⟨반전⟩ · 긴장 8 · gap_after 120
- size: large · aspect: **9:16**
- camera: low-angle medium(허리 위) — 돌아앉은 서하의 앉은 눈높이보다 낮게, 그녀 시점에서 올려다봄
- composition: 가운데(x 22–78%, 머리 y 14–30%, 허리 y 72%) 의자 뒤에 선 25세 남자: 웃자란 흑발(앞머리가 눈썹을 덮음, 뒷머리가 깃에 닿음), 짙은 다크서클, 창백하지만 산 사람의 얼굴, 한쪽 입꼬리만 비뚤어진 지친 쓴웃음. 얼굴의 한쪽은 스탠드의 따뜻한 노란 빛, 다른 쪽은 차가운 녹백 형광 — 몸은 노란 원 밖. 가슴에 빈 클립 목줄, 단추를 다 잠근 차콜 카디건과 흰 깃. 그의 뒤: 회색 철제 서가와 그 사이 어둠, 서가 위 숫자 없는 둥근 시계(배경 소품, 작게, x 60–74%, y 3–11%), 서가 앞 접이식 의자. 서가에 그의 그림자가 정상적으로 떨어진다. 아래 가장자리(x 0–40%, y 84–100%) 전경 초점 밖 서하의 머스터드 어깨. 유리는 카메라 뒤.
- characters: JAEWOO(FULL) — 표정 ① `a quiet, tired, knowing look with a faint wry tilt at one corner of his mouth` · SEOHA(어깨 가장자리만, 전경 초점 밖)
- props: 빈 클립 목줄 · (배경) 서가·시계·접이식 의자
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE(얼굴 반만 따뜻, 몸은 노란 원 밖) + LIGHT_NOFLICKER · 정상 그림자 · 마른 옷 · 빨강 없음
- dialogue_ref: 없음(무대사)
- attach: refs/JAEWOO_turnaround.png, refs/JAEWOO_expressions.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: silent. / T-a는 **정상 그림자·마른 옷·산 사람 피부**가 그려져야 선다(script 검수 노트 B). 푸르거나 투명한 피부, 흐린 발, 그림자 없음, 젖음이면 REGEN. 몸·얼굴 전체가 노란 원 안이면 REGEN. 다크서클은 그에게만. 안경·시계·넥타이 금지.

### panel_004
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_C 축(방 안쪽에서 당직석 쪽)
- beat: ① 그녀는 그를 모른다 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이보다 조금 낮게, medium — 그가 선 자리(방 안쪽) 곁에서 당직석 쪽
- composition: 가운데(x 25–75%, 머리 y 34–48%) 회전의자를 뒤로 밀어 등이 책상 모서리에 닿은 서하, 몸은 방 안쪽(카메라)을 향하고 두 손이 의자 앉는 면 가장자리를 움켜쥔다. 그녀 뒤 책상: 스탠드의 노란 빛(화면 왼쪽 쪽), 닫힌 수첩과 빨간 롤(작게, x 52–64%, y 58–64%), 그 너머 통유리 창구와 어둑한 복도(유리는 옅은 정상 반사만). 화면 왼쪽 가장자리 칸막이의 작은 수칙 종이(x 0–14%, y 40–60%). 왼쪽 아래 전경(x 0–20%, y 72–100%) 초점 밖 차콜 니트 소매 끝(그가 선 자리). 위 22%는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(FULL + §10-2 '의자를 밀고 굳음' 상태 토큰) — 표정 ② `frozen in fear, eyes wide, lips pressed shut, face rigid` · JAEWOO(전경 소매 끝만)
- props: PROP_SWIVEL_CHAIR · PROP_NOTEBOOK(닫힘) · PROP_TAPE_ROLL_RED(작게) · PROP_RULESHEET_SMALL · PROP_LAMP
- lighting: LIGHT_L1 + LIGHT_LAMP(그녀 어깨·얼굴 한쪽에 따뜻한 빛) + LIGHT_NOFLICKER · 빨강 = 책상 위 롤 + 칸막이 테이프(작게)뿐
- dialogue_ref (1): ① 서하 dialogue "…누구세요?" (꼬리 ↓ 서하)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 22%(x 5–95%, y 2–22%) — 유리 위쪽 너머 어둑한 복도 천장. / 유리에는 정상의 옅은 반사만 — 그의 모습이 유리에 크게 비치지 않게(이상한 반사 금지).

### panel_005
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: ① **질문 반**: 그는 지난 루프의 그녀를 안다 ⟨이중의미⟩ · 긴장 8 · gap_after 240
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE) — 무릎 위
- composition: 화면 왼쪽(x 6–42%, 머리 y 28–42%) 서가 앞, 스탠드 빛 가장자리에 선 재우, 얼굴 3/4로 서하 쪽 — 눈동자가 막 칸막이 쪽에서 그녀에게 돌아오는 중. 화면 오른쪽(x 58–98%, 머리 y 42–56%) 회전의자를 그 쪽으로 돌려 앉은 서하, 등은 책상에 붙은 채. 둘 사이 가운데 안쪽 배경(x 42–58%, y 44–60%) 책상 끝 낮은 칸막이의 작은 수칙 종이(흰 4번 조각과 빨간 테이프 두 줄이 스탠드 빛에 걸림), 그 뒤 벽에 닫힌 크림색 숙직실 문. 오른쪽 가장자리 통유리 창구와 어둑한 복도. 위 26%(y 0–26%)는 서가 꼭대기 어둠(왼쪽)과 천장.
- characters: JAEWOO(FULL) — 낮고 느린 반말, 다 안다는 얼굴(표정 ① 계열 `a quiet, tired, knowing look`) · SEOHA(SHORT) — 표정 ② 굳음 유지
- props: PROP_RULESHEET_SMALL · (배경) 숙직실 문 닫힘(문틈 불빛 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 빨강 = 칸막이 테이프 두 줄뿐(롤은 프레임 밖 책상 위)
- dialogue_ref (1): ① 전임자 dialogue "이번에도 4번 따라 했지?" (꼬리 ↙ 재우)
- repeat: **panel_023의 원본**(EP02 안 짝 — 같은 카메라·배치)
- attach: refs/JAEWOO_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 26% 왼쪽~가운데(x 3–72%, y 2–26%) — 서가 꼭대기 어둠과 천장(그의 머리 y 28% 위). / 칸막이의 4번 조각이 둘 사이에 반드시 보인다(그의 시선의 목적지). P23이 이 컷을 반복하므로 배치를 또렷하게. 뒤 240px.

### panel_006
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE(가깝게)
- beat: ② 그는 되감김을 기억한다 · 그녀는 그를 모른다 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE, panel_005보다 가깝게 — 가슴 위)
- composition: 화면 왼쪽(x 0–46%, 머리 y 36–50%) 재우, 시선을 아래로 떨군다, 입술을 다문 채 굳어 가는 웃음. 화면 오른쪽(x 54–100%, 머리 y 42–56%) 서하, 말꼬리를 붙잡듯 고개를 약간 앞으로. 둘 사이 안쪽 배경에 초점 밖 칸막이와 숙직실 문. 위 34%는 서가 꼭대기 어둠(왼쪽)과 유리 위쪽 너머 복도(오른쪽).
- characters: JAEWOO(FULL) — 표정 ④ `his gaze dropping away, lips pressed together, his smile stiffening and fading` · SEOHA(SHORT) — 되묻는 얼굴 `wary, eyebrows drawn together, leaning slightly forward`
- props: PROP_RULESHEET_SMALL(초점 밖)
- lighting: LIGHT_L1 + LIGHT_LAMP(서하 쪽 따뜻) + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 빨강 = 테이프(초점 밖, 작게)뿐
- dialogue_ref (2): ① 서하 dialogue "이번에도…요?" (위 오른쪽, 꼬리 ↘ 서하) ② 전임자 dialogue "아… 맞다. 기억 안 나시죠." (위 왼쪽 조금 아래, 꼬리 ↙ 재우)
- attach: refs/JAEWOO_turnaround.png, refs/JAEWOO_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 34%(x 3–97%, y 2–34%) — ①은 오른쪽 유리 위쪽 너머 복도(y 2–15%), ②는 왼쪽 서가 꼭대기 어둠(y 16–34%). 읽는 순서 ① → ②. / 이 한마디만 거리를 두는 말투(KM `អ្នក`) — 표정 ④가 물러섬을 받친다.

### panel_007
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_C
- beat: ② 이름 없는 소개 · 그녀가 가르쳤다 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot — 방 안쪽(서가 쪽)에서 당직석 방향, 재우의 LEFT 어깨 너머
- composition: 화면 왼쪽 앞(x 0–30%, y 44–100%) 재우의 LEFT 어깨와 뺨 선(머리 윗부분은 왼쪽 가장자리 밖, 얼굴 3/4 뒤 — 코로 웃는 입꼬리가 뺨 끝에 걸린다), 초점은 살짝 밖. 가운데~오른쪽(x 42–86%, 머리 y 40–54%) 당직석에 자세를 고쳐 앉은 서하(등을 펴고 두 손을 무릎에 모음), 그를 똑바로 본다. 그녀 뒤 책상·스탠드, 통유리 창구와 그 너머 어둑한 복도(옅은 정상 반사). 화면 왼쪽 안쪽 책상 끝 칸막이(초점 밖). 위 40%는 유리 위쪽 너머 어둑한 복도.
- characters: SEOHA(FULL) — '공무원 모드' 표정 ⑧ `a flat, polite, deadpan civil-servant face with slightly lowered eyelids`(등을 꼿꼿이) · JAEWOO(SHORT, 뒷모습 3/4) — 표정 ② `eyes lowered, a short dry laugh through his nose, one corner of his mouth lifting`(뺨 끝으로만)
- props: (배경) PROP_LAMP · PROP_RULESHEET_SMALL(초점 밖) · 서하의 빈 공무원증
- lighting: LIGHT_L1 + LIGHT_LAMP(서하 얼굴) + LIGHT_LAMP_EDGE(그는 빛 밖) + LIGHT_NOFLICKER · 빨강 = 테이프(초점 밖)뿐
- dialogue_ref (2): ① 서하 dialogue "…성함이 어떻게 되시죠?" (위 오른쪽, 꼬리 ↓ 서하) ② 전임자 dialogue "이름은 여기서 말하는 거 아니라며. …네가 그랬잖아." (긴 줄 w 60% 이상, 위 왼쪽 조금 아래, 꼬리 ↙ 재우)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 유리 위쪽 너머 어둑한 복도. ①은 오른쪽 위(y 2–16%), ②는 왼쪽부터 넓게(y 18–40%, 재우 어깨 y 44% 위). / 명찰·공무원증에 글씨 금지(빈 카드).

### panel_008
- scene_id: S01 / location: LOC_L1_DUTYROOM · 숙직실 문 쪽(VIEW_NAPDOOR가 왼쪽에 걸림) + 기억 비네트
- beat: ② 전임자 식별 ⟨ECHO:E11⟩ · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 당직석 쪽에서 옆벽(숙직실 문) 방향
- composition: **위 왼쪽 기억 비네트**(x 4–50%, y 4–36%): 회백 테두리 + 아래·오른쪽 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP01 panel_010과 같은 각도의 노미란(의상 A, 검정 코트를 어깨에만): 크림색 숙직실 문으로 걸어가며 어깨 너머로 고개를 돌린다, 비네트 위 1/3은 그 컷처럼 문 위 민무늬 윗벽. 비네트 바로 아래 실제 방: 화면 왼쪽(x 0–24%, y 40–96%) 닫힌 크림색 숙직실 문(간유리 창·놋쇠 손잡이 — 비네트 속 문과 같은 문). 화면 오른쪽(x 46–92%, 머리 y 42–56%) 재우가 그 문 쪽으로 턱짓한다(얼굴 3/4, 턱이 화면 왼쪽을 향함), 몸은 빛 가장자리. 그의 뒤 초점 밖 서가 끝. 위 오른쪽(x 52–97%, y 2–38%)은 서가 꼭대기 어둠과 천장.
- characters: JAEWOO(FULL) — 피곤한 앎 `a tired, knowing half-smile, chin tilted toward the door` · MIRAN(비네트 안 — SHORT 의상 A + 퇴장 상태 토큰, 바랜 색)
- props: VIEW_NAPDOOR 닫힘(문틈 불빛 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 비네트는 바랜 색 · 빨강 없음
- dialogue_ref (2): ① 전임자 dialogue "팀장님이 또 그러지?" (위 오른쪽, 꼬리 ↓ 재우) ② 노미란(기억) memory "전임자도 사흘 만에 관뒀어." (비네트 안 위 1/3, 흐린 파란 테 — EP01 P10 ②와 KM 동일)
- repeat: 기억 비네트 — 원본 **EP01 panel_010** 첨부(§D)
- attach: _workspace/05_panels/ep01/panel_010.png, refs/JAEWOO_turnaround.png, refs/MIRAN_turnaround.png
- fx/note: bubble space: ① 위 오른쪽(x 52–97%, y 2–30%) — 서가 꼭대기 어둠(재우 머리 y 42% 위) · ② 비네트 안 위 1/3(x 6–48%, y 6–16%) — 비네트 속 문 위 윗벽(대안: 비네트 오른쪽 바깥 어둠). / 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다. 읽는 순서: ① 재우의 질문 → ② 기억 말풍선(대본 순서) — 두 말풍선 높이가 비슷하므로 letterer가 ①을 조금 위에 둔다.

### panel_009
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE 축(가깝게)
- beat: ② 관둔 게 아니다(F-08) ⟨이중의미⟩ · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 서하의 RIGHT 어깨 너머(전경 초점 밖)로 선 재우, 가슴 위
- composition: 가운데~왼쪽(x 14–66%, 머리 y 36–50%) 재우, 눈을 내리깐다. 그의 가슴 가운데(x 34–46%, y 64–74%) 짙은 회색 목줄 끝의 **빈 금속 클립**(또렷하게 — 그녀의 시선이 멎는 곳). 오른쪽 앞(x 70–100%, y 56–100%) 초점 밖 서하의 옆얼굴·어깨, 시선은 그의 클립으로. 그의 뒤 초점 밖 서가와 그 사이 어둠. 위 34%는 서가 꼭대기 어둠과 천장.
- characters: JAEWOO(FULL) — `eyes lowered, not meeting her gaze, a faint tired tilt of the mouth` · SEOHA(SHORT, 전경 초점 밖) — 시선이 클립에 멎음
- props: 빈 클립 목줄(카드 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE(그의 얼굴 반만 따뜻) + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (2): ① 서하 dialogue "…전임자세요?" (위 오른쪽, 꼬리 ↘ 서하) ② 전임자 dialogue "사흘은 맞아. …도망친 거지." (위 왼쪽 조금 아래, 꼬리 ↓ 재우)
- attach: refs/JAEWOO_turnaround.png, refs/JAEWOO_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 34%(x 3–97%, y 2–34%) — ①은 오른쪽(y 2–14%), ②는 왼쪽~가운데(y 15–34%, 재우 머리 y 36% 위). / F-08: 목줄의 빈 클립이 컷의 단서다. 카드가 생기면(빈 카드여도) REGEN.

### panel_010
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SHELVES(서가 사이 어둠) + 기억 비네트
- beat: ② 부스럭 회수 ⟨ECHO:F-50⟩ · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 당직석 쪽에서 서가 방향(그녀의 시선 = 카메라)
- composition: **위 왼쪽 기억 비네트**(x 4–50%, y 4–36%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP01 panel_034와 같은 각도: 서가 앞에서 종이컵을 내미는 선임(얼굴은 서하 쪽), 그 왼쪽 뒤 서가 사이 어두운 틈(비네트 안 왼쪽), 비네트 위 1/3은 천장·서가 꼭대기 어둠. 비네트 아래 실제 방: 화면 왼쪽(x 0–34%, y 40–100%) 회색 철제 서가 두 열 사이의 **어두운 틈**(비네트 속 틈과 같은 자리). 화면 오른쪽(x 50–90%, 머리 y 42–56%) 서가 끝에 선 재우가 그 틈을 턱으로 가리킨다(얼굴 3/4, 턱이 화면 왼쪽으로). 서가 위 시계는 프레임 위 밖. 위 오른쪽(x 52–97%, y 2–38%)은 서가 꼭대기 어둠과 천장.
- characters: JAEWOO(FULL) — 담담한 자백 `calm, matter-of-fact, a tired faint smile` · SEONIM(비네트 안 — SHORT, 바랜 색)
- props: 비네트 안 PROP_PAPER_CUP · 서가(빈 라벨의 갈색 상자)
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 비네트는 바랜 색 · 빨강 없음
- dialogue_ref (2 + sfx): sfx(기억) "부스럭" (비네트 안 왼쪽 서가 틈) · ① 선임(기억) memory "…쥐래." (비네트 안 위 1/3) · ② 전임자 dialogue "쥐 아니야. 나야." (위 오른쪽, 꼬리 ↓ 재우)
- repeat: 기억 비네트 — 원본 **EP01 panel_034** 첨부(§D)
- attach: _workspace/05_panels/ep01/panel_034.png, refs/JAEWOO_turnaround.png, refs/SEONIM_turnaround.png
- fx/note: bubble space: sfx — 비네트 안 왼쪽 서가 사이 틈(x 6–16%, y 16–30%) · ① 비네트 안 위 1/3(x 18–48%, y 6–15%) — 비네트 속 천장 어둠(효과음과 겹치지 않게 오른쪽으로) · ② 위 오른쪽(x 52–97%, y 2–30%) — 서가 꼭대기 어둠. / 기억 효과음·말풍선 = EP01 P34와 KM 동일. 말풍선 2 + 효과음 1(beatsheet §5-1 허용). 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다.

### panel_011
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: ② 선임은 모른 척한다(건조한 유머 1비트) · F-25 심기 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P11 — 눈높이 medium wide (VIEW_SIDE) — 무릎 위
- composition: [↺EP01 P11 틀] 화면 왼쪽(x 0–45%) 서가 앞: 거꾸로 놓인 회색 접이식 의자에 거꾸로 앉은 선임(x 0–26%, 머리 y 42–54%, 얼굴 3/4)이 흰 전기 포트로 보조 탁자 위 무지 종이컵 **두 개**(x 18–30%, y 64–72%)에 물을 붓는다, 시선은 컵에. 그 바로 오른쪽(x 26–45%, 머리 y 36–48%) 서가 끝에 한쪽 어깨를 기대고 두 손을 카디건 앞주머니에 넣은 재우, 몸은 스탠드 빛 가장자리 — 둘은 서로 보지 않는다. 가운데 책상 모서리(x 45–55%, y 62–70%)는 비어 있다(이번엔 컵이 보조 탁자에). 화면 오른쪽(x 58–100%) 초록 회전의자에 앉아 몸을 돌려 선임을 보는 서하. 오른쪽 가장자리는 통유리 창구와 어둑한 복도. 위 38%는 서가 꼭대기 어둠과 천장.
- characters: SEONIM(FULL + character-sheets §10-4 '물 붓기' 상태 토큰) — 표정 ① `a tired, unreadable frown with heavy half-closed eyelids` · JAEWOO(SHORT + '서가에 기댐' 상태 토큰) — 무심한 얼굴, 시선은 서하 · SEOHA(SHORT) — 확인을 구하는 얼굴 `questioning, glancing between the two men`
- props: PROP_PAPER_CUPS_2 · PROP_KETTLE · PROP_FOLDING_CHAIR · PROP_SWIVEL_CHAIR
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER — 유머도 조명을 바꾸지 않는다(LIGHT_COMEDY 없음, style-bible §2-7) · 빨강 = 칸막이 종이 테이프(배경, 작게)뿐
- dialogue_ref (2): ① 서하 dialogue "선배님, 이분… 아세요?" (위 오른쪽, 꼬리 ↘ 서하) ② 선임 dialogue "당직실엔 너랑 나뿐이래." (위 왼쪽 조금 아래, 꼬리 ↙ 선임)
- repeat: EP01 **panel_011** 구도(카메라·좌우 배치·책상 모서리 자리·위 38%) · 바뀌는 것: 선임이 걸어 나오는 대신 거꾸로 앉아 컵 둘에 물을 붓는다(포트 = EP01 P50 퇴장의 귀환), 재우가 서가에 기대어 선임 곁, 책상 모서리 컵 없음, 서하는 흠칫 대신 묻는 얼굴
- attach: _workspace/05_panels/ep01/panel_011.png, refs/SEONIM_turnaround.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 서가 꼭대기 어둠과 천장. ①은 오른쪽(y 2–17%), ②는 왼쪽(y 18–35%, 재우 머리 y 36% 위에서 끝낸다). / 선임은 재우를 **한 번도 보지 않는다**, 재우도 선임을 보지 않는다(F-25: 못 보나, 안 보나). 웃음은 표정과 배치로만. 선임 얼굴에 안경 금지(돋보기는 목에).

### panel_012
- scene_id: S01 / location: LOC_L1_DUTYROOM · 바닥 클로즈업(방 안)
- beat: ② 어긋남 찾기 — 그는 방 안에, 마른 채 서 있다 · F-25 심기 · 긴장 7 · gap_after 40
- size: large · aspect: **9:16**
- camera: ↺EP01 P16 — high-angle close-up — 복도 쪽에서 바깥 선반과 바닥을 내려다봄 → 이번 컷: **방 안** 당직석 곁에서 그의 발치를 내려다봄
- composition: [↺EP01 P16 틀] 아래(x 25–75%, y 64–92%) 마른 회색 점무늬 테라조 위의 해진 오프화이트 캔버스 운동화 한 켤레(EP01 P16의 젖은 구두 자리), 발밑에 짧고 정상적인 그림자. 화면 왼쪽~가운데(x 15–55%, y 28–64%) 그 위로 올라가는 스톤 그레이 슬랙스 밑단(EP01 P16의 젖은 코트 자락 자리 — 이번엔 마름, 물방울 없음). EP01 P16에서 웅덩이와 젖은 발자국이 이어지던 아래 오른쪽(x 55–100%, y 70–100%)은 **마른 빈 바닥**, 그 가장자리에 초록 회전의자의 바퀴 다리 하나(방 안이라는 표지). 위 26%(y 0–26%)는 초점 밖 마른 바닥과 책상 다리의 그림자.
- characters: JAEWOO(character-sheets §10-1 '운동화' 상태 토큰 — 발·밑단만)
- props: PROP_SWIVEL_CHAIR(바퀴 다리 일부) · 마른 테라조
- lighting: LIGHT_L1(위에서 짧은 그림자) + LIGHT_NOFLICKER · 물 하이라이트 없음 · 빨강 없음
- dialogue_ref (1): ① 서하 dialogue "…사람이에요?" (위쪽, 꼬리 ↑ 위쪽 프레임 밖 = 그녀)
- repeat: EP01 **panel_016** 구도(high-angle 바닥 클로즈업, 아래 = 발, 왼쪽 = 위로 오르는 옷자락, 아래 오른쪽 = 바닥의 흔적 자리) · 바뀌는 것: 장소가 **방 안**, 젖은 구두·웅덩이·발자국 → 마른 운동화·마른 바닥, 벨 대신 위쪽은 빈 바닥(말풍선 자리)
- attach: _workspace/05_panels/ep01/panel_016.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 26%(x 4–96%, y 2–26%) — 초점 밖 마른 바닥(말풍선은 프레임 위쪽에서, script P12). / 대비 F-12·F-13: 웅덩이·물방울·젖은 자국이 하나라도 생기면 REGEN(그는 구정민과 달리 마른 사람이다). **첨부한 EP01 P16은 구도만** — Flow가 물을 따라 그리면 두 번째 시도부터 그 첨부를 빼고 문장만으로 간다.

### panel_013
- scene_id: S01 / location: LOC_L1_DUTYROOM · 재우 클로즈업
- beat: ② "아직은." ⟨이중의미⟩ F-25 · 긴장 7 · gap_after 240
- size: small · aspect: **1:1**
- camera: 앉은 눈높이에서 약간 올려다본 close-up — 얼굴과 어깨
- composition: 재우의 얼굴이 가운데~오른쪽 아래(x 28–92%, y 30–100%): 얼굴의 한쪽 반은 스탠드의 따뜻한 노란 빛, 다른 반은 차가운 녹백 — 빛의 경계가 콧날을 지난다. 입꼬리 한쪽만 올라간 쓴웃음, 눈은 웃지 않는다. 뒤는 초점 밖 서가와 어둠. 위 왼쪽 1/4(x 3–50%, y 3–28%)은 서가 꼭대기 어둠.
- characters: JAEWOO(FULL) — 표정 ② `eyes lowered, a short dry laugh through his nose, one corner of his mouth lifting` + `his eyes not smiling`
- props: 빈 클립 목줄(아래 가장자리, 일부)
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE(얼굴 반만 따뜻) + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (1): ① 전임자 dialogue "아직은." (짧게, 꼬리 ↘ 재우)
- attach: refs/JAEWOO_expressions.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 왼쪽 1/4(x 3–50%, y 3–28%) — 서가 꼭대기 어둠. / 1독 "지금은 사람", 재독(EP10) "곧 아니다" — 얼굴은 산 사람 그대로(유령 표현 금지). 뒤 240px.

### panel_014
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_DESK
- beat: ② 그도 값을 냈다 · 열쇠 쪽 손(b2①, 무심) ⟨이중의미⟩ · 긴장 6 · gap_after 120
- size: small · aspect: **1:1**
- camera: ↺EP01 P33 — high-angle 약 45° 부감, 책상 와이드 — 회전의자 뒤쪽 위에서, 책상의 좌우 = 앉은 사람의 좌우
- composition: [↺EP01 P33 `COMP-DESK` 틀] 위 38%(y 0–38%)는 책상 너머 통유리 창구와 그 너머 어둑한 복도. 가운데~아래에 책상 고정 배치: 앞 왼쪽 흰 거위목 스탠드, 앞 오른쪽 베이지 내선 전화, 오른쪽에 파란 2공 바인더와 그 위쪽 절반에 얹힌 검은 일지, 안쪽 가운데 철제 서류함의 낮은 연노랑 영수증 묶음(**높이 = EP01 P33**), 그 옆 누런 테이프 디스펜서, 작은 나무 상자의 직인과 둥근 인주 케이스, 펜꽂이. 왼쪽 끝 칸막이에 작은 수칙 종이(왼쪽 가장자리, y 40–60%). 오른쪽 가장자리에서 재우의 팔이 들어온다(어깨에서 잘림 — EP01 P33 노미란 팔 자리): 차콜 니트 소맷부리 + 흰 커프스의 RIGHT 손이 책상 오른쪽 모서리, 바인더 옆 **열쇠 꾸러미** 바로 곁(손 x 70–92%, y 56–70%)에 무심히 얹혀 있고, 엄지가 검지의 은반지를 돌린다 — 손만 스탠드 빛 가장자리. 가운데 앞(x 30–50%, y 64–78%) 닫힌 수첩(새 스티커)과 그 옆 빨간 롤. 아래 가운데~왼쪽(x 15–55%, y 82–100%) 앉은 서하의 정수리·낮은 포니테일·어깨(위·뒤에서, 초점 밖) — EP01 P33 서하 자리.
- characters: JAEWOO(손·아래팔만 — '반지 돌리기' 상태 토큰) · SEOHA(SHORT, 위·뒤에서 본 머리·어깨)
- props: PROP_RECEIPTS(EP01 P33 높이 그대로 — **더 높이지 않는다**, 셀 수 없게) · PROP_ROSTER(닫힘) · PROP_DUTYLOG(닫힘) · **PROP_KEYS** · PROP_SEAL · PROP_DISPENSER · PROP_EXT_PHONE · PROP_LAMP · PROP_NOTEBOOK(닫힘) + PROP_STICKER_NEW · PROP_TAPE_ROLL_RED · 유리 상판 밑 빈 종이 — 전부 빈 면
- lighting: LIGHT_L1 + LIGHT_LAMP(작은 노란 원) + LIGHT_NOFLICKER · 빨강 = 롤 · 인주 케이스 · 영수증의 작은 원 · 칸막이 종이 테이프뿐
- dialogue_ref (2): ① 전임자 dialogue "되감길 때마다… 나도 냈어." ② 전임자 dialogue "…네가 가르쳐 준 대로." (둘 다 꼬리 ↗ 오른쪽 가장자리 = 프레임 밖 재우)
- repeat: EP01 **panel_033** `COMP-DESK`(같은 앵글·책상 고정 배치·영수증 높이·위 38%) · 바뀌는 것: 노미란 팔 대신 재우의 RIGHT 팔·손(열쇠 곁, 반지 돌리기), 열쇠는 떨어지는 대신 책상 위 바인더 옆, 수첩·롤이 책상 위, 서하는 서서 받는 대신 앉아 있다
- attach: _workspace/05_panels/ep01/panel_033.png, refs/HANDCLIFF_ref.png, refs/LOC_L1_DESK_plate.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 책상 너머 유리와 어두운 복도. ①은 위 왼쪽, ②는 그 아래 오른쪽(꼬리 둘 다 오른쪽 가장자리로). / F-16: 영수증 높이는 EP01 P33과 같다(EP02에는 되감김이 없다 — 높아지면 REGEN). b2①: 손이 열쇠 **곁**이지 열쇠 위가 아니다(P38–P39에서 처음 닿으러 간다).

### panel_015
- scene_id: S01 / location: LOC_L1_DUTYROOM · 당직석 곁(서하 어깨 너머)
- beat: ③ 제안: 덮어 주겠다 · 주머니의 이중 테두리(b1①) · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 서하의 어깨 너머(전경 초점 밖)로 책상 곁에 선 재우, 허리 위
- composition: 아래 왼쪽 전경(x 0–28%, y 58–100%) 초점 밖 서하의 머스터드 어깨와 뺨 가장자리. 가운데~오른쪽(x 28–92%, 머리 y 26–40%) 책상 곁에 선 재우, 빛 가장자리. 그의 RIGHT 손(화면 왼쪽, x 26–42%, y 76–90%)이 책상 위 닫힌 수첩 옆의 빨간 롤을 집는다. 그의 LEFT 손(화면 오른쪽)이 카디건 **LEFT 앞주머니**(x 60–76%, y 58–72%)에서 자로 자른 새하얀 종이 띠를 꺼낸다 — 같은 주머니 입구에 접힌 흰 종이의 모서리가 삐져나와 있다: **굵은 짙은 회색 이중 테두리**가 또렷하다(x 64–74%, y 56–64%, 작지만 선명하게). 뒤는 초점 밖 서가 어둠. 위 24%(y 0–24%)는 서가 꼭대기 어둠과 천장.
- characters: JAEWOO(FULL + §10-1 '띠와 접힌 서류(b1)' + '테이프 롤' 상태 토큰) — 대답 대신 담담한 얼굴 `calm, tired, unexplaining` · SEOHA(SHORT, 전경 초점 밖)
- props: **PROP_HANDOVER_FOLDED**(LEFT 앞주머니) · **PROP_COVER_STRIP** · PROP_TAPE_ROLL_RED · PROP_NOTEBOOK(닫힘)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE(손만 노란 원 안) + LIGHT_NOFLICKER · 빨강 = 롤뿐(이 앵글에서 칸막이는 프레임 밖)
- dialogue_ref (2): ① 서하 dialogue "…뭘요?" (위 왼쪽, 꼬리 ↙ 서하) ② 전임자 dialogue "덮자. 4번." (위 오른쪽, 꼬리 ↓ 재우)
- attach: refs/JAEWOO_turnaround.png, refs/PROP_HANDOVER_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 24%(x 3–97%, y 2–24%) — 서가 꼭대기 어둠·천장. ①은 왼쪽, ②는 오른쪽(둘 다 짧다). / b1: 주머니의 이중 테두리 모서리는 설명하지 않고 보이기만 한다 — 그러나 P34 서류와 같은 테두리로 읽혀야 한다(PROP_HANDOVER_pair 첨부). 글씨 없음. 롤(RIGHT 손)과 서류(LEFT 주머니)는 다른 쪽.

### panel_016
- scene_id: S01 / location: LOC_L1_DUTYROOM · 칸막이 클로즈업(앵글②)
- beat: ③ 같은 빨강 — 미스디렉션을 질문으로(F-18) · 긴장 8 · gap_after 40
- size: medium(인서트 클로즈업) · aspect: **3:4**
- camera: ↺EP01 P19 — 앉은 눈높이 close-up — 칸막이에 붙은 수칙 종이를 정면에서 약간 비스듬히
- composition: [↺EP01 P19 틀] 수칙 종이 전체가 가운데(x 12–88%, y 24–96%): 누렇게 바랜 크림 모눈 A5, 왼쪽 가장자리는 제본에서 뜯긴 들쭉날쭉한 선, 네 귀퉁이의 바랜 누런 테이프. 위에서 4/7 지점에 폭 90%의 새하얀 4번 조각, 위·아래 가장자리를 따라 빨간 비닐테이프 두 줄. 오른쪽 위 귀퉁이(x 72–86%, y 27–36%)에 바랜 달냥이 스티커, 오른쪽 아래 귀퉁이에 바랜 커피 반원. 7칸 자리는 전부 빈 모눈. 종이 윗선 위(y 0–22%)는 칸막이 윗면 너머 초점 밖 유리와 어둑한 복도. **이번 컷:** 4번 조각 오른쪽 끝 바로 바깥(x 76–98%, y 58–74%)에 오른쪽 가장자리에서 들어온 재우의 RIGHT 손(검지 은반지, 흰 커프스)이 빨간 비닐테이프 롤을 들어 조각의 테이프와 나란히 댄다 — 롤의 빨강과 테이프 두 줄의 빨강이 **같은 빨강**.
- characters: JAEWOO(손만 — '테이프 롤' 상태 토큰) · (서하는 화면 밖 목소리)
- props: **PROP_RULESHEET**(클로즈업 문장 전체, 글씨·숫자·줄 긋기 없음) · PROP_STICKER_FADED · PROP_RING_FADED · PROP_TAPE_ROLL_RED
- lighting: LIGHT_L1 + 스탠드의 따뜻한 빛이 종이 아래쪽 일부에 + LIGHT_NOFLICKER · 빨강 = 테이프 두 줄 + 롤뿐(같은 빨강)
- dialogue_ref (2): ① 서하 dialogue "그 테이프… 4번이랑 똑같네요." ② 서하 dialogue "당신이 붙였어요?" (둘 다 꼬리 → 왼쪽 프레임 가장자리 = 화면 밖 서하)
- repeat: EP01 **panel_019** 구도(종이 자리·스티커 자리·위 22%) · 바뀌는 것: 4번 조각 옆에 롤을 든 재우의 RIGHT 손(오른쪽 가장자리에서), 말하는 사람 = 화면 밖 선임 → 화면 밖 서하
- attach: _workspace/05_panels/ep01/panel_019.png, refs/PROP_PAGES_pair.png, refs/HANDCLIFF_ref.png
- fx/note: bubble space: 위 22% 띠(x 3–97%, y 2–22%) — 종이 위의 초점 밖 유리·어둠. ①(w 60% 이상)은 왼쪽부터 넓게, ②는 오른쪽 위에 짧게(스티커 y 27–36% 위에서 끝낸다). / 손이 스티커·4번 조각을 가리지 않는다(조각 오른쪽 끝 바깥에 나란히). F-18: 같은 빨강이 또렷해야 한다.

### panel_017
- scene_id: S01 / location: LOC_L1_DUTYROOM · 재우 미디엄 클로즈업
- beat: ③ 독자 예측 뒤집기(가정형) ⟨반전⟩ T-a · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium close-up — 가슴 위, 정면에서 약간 옆
- composition: 가운데(x 18–82%, 머리 y 24–42%) 담담한 재우, 시선은 손바닥으로. 아래 가운데(x 30–62%, y 66–86%) 그가 펼친 RIGHT 손바닥 위에서 빨간 롤을 앞뒤로 굴린다 — 손바닥과 롤만 스탠드의 노란 빛 안. 뒤는 초점 밖 서가 어둠. 위 22%는 서가 꼭대기 어둠.
- characters: JAEWOO(FULL + '롤을 굴림' 상태 토큰) — 담담함 `calm, matter-of-fact, eyes on the roll in his palm`
- props: PROP_TAPE_ROLL_RED
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE(손만 노란 원 안) + LIGHT_NOFLICKER · 빨강 = 롤뿐
- dialogue_ref (1): ① 전임자 dialogue "내가 붙였으면, 내가 뗐겠지." (꼬리 ↓ 재우)
- attach: refs/JAEWOO_turnaround.png, refs/JAEWOO_expressions.png
- fx/note: bubble space: 위 22%(x 5–95%, y 2–22%) — 서가 꼭대기 어둠(머리 y 24% 위). / T-a 뒤집기는 말이 한다 — 그림은 조용하게.

### panel_018
- scene_id: S01 / location: LOC_L1_DUTYROOM · 4번 조각 익스트림 클로즈업
- beat: ③ 아래를 보고 싶다(F-51) · 긴장 8 · gap_after 0
- size: large(세로로 긴 좁은 컷) · aspect: **9:16**
- camera: ↺EP01 P58 — extreme close-up — 4번 조각의 오른쪽 끝을 정면에서
- composition: [↺EP01 P58 틀] 새하얀 4번 조각이 가로 띠로 화면을 가로지른다(y 45–58%, 양옆 가장자리에서 잘림): 자로 자른 곧은 가장자리, 위·아래 가장자리를 따라 광택 있는 빨간 비닐테이프 두 줄. 아래 줄 테이프의 오른쪽 끝이 살짝 들려 말려 있다(x 70–85%, 가는 그림자). 위아래(y 0–45%, 58–100%)는 누렇게 바랜 빈 모눈 종이의 넓은 여백. **이번 컷:** 아래 가장자리에서 그녀의 RIGHT 손끝(머스터드 소매 끝이 손등을 반쯤 덮음, 맨손톱)이 들린 귀퉁이를 향해 올라온다(손 x 62–84%, y 72–100%, 손끝은 y 62% 근처 — 아직 닿지 않음).
- characters: SEOHA(손 클로즈업 상태 토큰 — 손끝만)
- props: **PROP_RULE4_PATCH** + **PROP_TAPE_LIFT** · PROP_RULESHEET(모눈 여백, 글씨 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP(종이에 따뜻한 빛) + LIGHT_NOFLICKER · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 서하 thought "(이 밑에… 원래 4번이.)" (구름형, 꼬리 없음)
- repeat: EP01 **panel_058** 구도(조각 띠 y 45–58%, 들린 귀퉁이 x 70–85%, 위아래 빈 모눈 여백) · 바뀌는 것: 아래에서 다가오는 그녀의 손끝 + 위 왼쪽 생각 말풍선 자리. 조명은 EP01의 LIGHT_REVEAL 대신 S01 조명
- attach: _workspace/05_panels/ep01/panel_058.png, refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 왼쪽(x 4–62%, y 4–30%) — 빈 모눈 여백(글씨 없음). 들린 귀퉁이(x 70–85%)는 덮지 않는다. / 귀퉁이와 손끝 사이 틈이 컷의 긴장. 모눈에 가짜 글씨·번호가 생기면 REGEN. gap 0 → P19로 바로 붙는다.

### panel_019
- scene_id: S01 / location: LOC_L1_DUTYROOM · 4번 조각 클로즈업
- beat: ③ 경고(이유 없음, F-51 · T3) · 긴장 8 · gap_after 120
- size: small · aspect: **1:1**
- camera: ↺EP01 P63 — 눈높이 close-up — 칸막이의 4번 조각
- composition: [↺EP01 P63 틀] 아래 가운데(y 52–72%) 새하얀 4번 조각과 빨간 테이프 두 줄이 화면을 가로지르고, 아래 줄 테이프 오른쪽 끝이 살짝 들려 있다. 위 오른쪽에서 들어온 손(아래팔에서 잘림)의 반지 낀 검지 — **이번엔 멈추지 않고 손가락을 펴서 들린 귀퉁이를 먼저 덮는다**(손 x 50–86%, y 40–74%). 아래 왼쪽에서 올라온 그녀의 손끝(머스터드 소매 끝)이 그 손등에 닿아 멈춘다(x 30–56%, y 66–86%). 오른쪽 위 가장자리(x 78–100%, y 2–30%) 초점 밖 그의 얼굴 일부 — 크게 뜬 눈 하나와 앞머리. 위 왼쪽 1/4(x 3–45%, y 3–30%)은 초점 밖 빈 모눈 종이 윗부분.
- characters: JAEWOO(§10-1 '귀퉁이를 먼저 덮는 손' + 얼굴 일부) — 표정 ③ `eyes suddenly wide, leaning forward with one hand reaching out, urgent and alarmed` · SEOHA(손끝만)
- props: **PROP_RULE4_PATCH** + **PROP_TAPE_LIFT** · PROP_RULESHEET(빈 모눈) · (롤은 그의 다른 손, 프레임 밖)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 전임자 dialogue "떼려고 하지 마." (꼬리 ↗ 오른쪽 위 = 그의 얼굴)
- repeat: EP01 **panel_063** 구도(조각 y 52–72%, 위 오른쪽에서 오는 반지 낀 손, 위 왼쪽 1/4 빈 모눈) · 바뀌는 것: 검지가 멈추는 대신 손이 귀퉁이를 **덮는다**, 그녀의 손끝이 손등에 닿아 멈춤, 오른쪽 위 가장자리에 그의 얼굴 일부, 손에 롤 없음
- attach: _workspace/05_panels/ep01/panel_063.png, refs/HANDCLIFF_ref.png, refs/JAEWOO_expressions.png
- fx/note: bubble space: 위 왼쪽 1/4(x 3–45%, y 3–30%) — 초점 밖 빈 모눈 여백(글씨 없음). 그의 얼굴(오른쪽 위)과 두 손은 피한다. / 이유는 말하지 않는다(EP18). 손 둘이 섞이지 않게: 그의 RIGHT 손 = 차콜 니트 + 흰 커프스 + 은반지, 그녀 = 머스터드 소매, 반지 없음.

### panel_020
- scene_id: S01 / location: LOC_L1_DUTYROOM · 재우 미디엄 + 기억 비네트
- beat: ③ "아직"의 뜻 · 테이프의 목적(**T-a 완성**) ⟨반전⟩ ⟨이중의미⟩ ⟨ECHO:F-24⟩ · 긴장 8 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 가슴 위, 그녀 쪽에서
- composition: **위 왼쪽 기억 비네트**(x 4–50%, y 4–36%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP01 panel_063과 같은 각도: 새하얀 4번 조각(비네트 안 아래쪽) 바로 위에서 멈춘 반지 낀 검지와 손바닥의 빨간 롤 일부(**바랜 빨강**), 비네트 위 왼쪽은 초점 밖 빈 모눈. 큰 컷: 가운데~오른쪽(x 40–94%, 머리 y 40–54%) 재우가 그녀의 시선을 피해 고개를 돌린다(얼굴 3/4, 눈은 화면 오른쪽 아래로), 입술이 말을 꺼냈다 멈춘 모양. 그의 가슴께 — RIGHT 손에 빨간 롤, LEFT 손에 흰 덮개 띠(x 48–80%, y 72–90%, 손만 빛 안). 뒤는 초점 밖 서가 어둠. 위 오른쪽(x 52–97%, y 2–38%)은 서가 꼭대기 어둠과 천장. 비네트 아래(x 4–38%, y 38–100%)는 초점 밖 어둠.
- characters: JAEWOO(FULL) — 시선을 피함 `looking away, eyes averted to the side, lips parted as if he started to speak and stopped` · HAND-CLIFF(비네트 안, 바랜 색)
- props: PROP_TAPE_ROLL_RED · PROP_COVER_STRIP · 비네트 안 PROP_RULE4_PATCH(바랜 색)
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE(손만 노란 원 안) + LIGHT_NOFLICKER · 비네트는 바랜 색 · 빨강 = 큰 컷의 롤 + 비네트 안 바랜 빨강
- dialogue_ref (2): ① 목소리(기억) memory "아직 안 바꿨네?" (비네트 안 위 왼쪽 1/3, 흐린 파란 테 — EP01 P63과 KM 동일) ② 전임자 dialogue "…저번엔 네가 덮자고 했거든. 그래서 가져온 거야." (위 오른쪽, 꼬리 ↓ 재우)
- repeat: 기억 비네트 — 원본 **EP01 panel_063** 첨부(§D)
- attach: _workspace/05_panels/ep01/panel_063.png, refs/JAEWOO_turnaround.png, refs/JAEWOO_expressions.png
- fx/note: bubble space: ① 비네트 안 위 왼쪽 1/3(x 6–30%, y 6–16%) — 비네트 속 빈 모눈 · ② 위 오른쪽(x 52–97%, y 2–38%) — 서가 꼭대기 어둠(머리 y 40% 위). ②가 2줄을 넘으면 비네트 아래 어둠(x 4–40%, y 38–50%)까지 넓혀도 된다. / 테이프는 **덮으러** 가져왔다(T-a 완성). 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다.

### panel_021
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE 축(가깝게, 칸막이 배경)
- beat: ③ 결함과 마주함 ⟨이중의미⟩ ⟨ECHO:F-54⟩ · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium close-up — 출입문 쪽에서 서하 정면 약간 비스듬히, 가슴 위
- composition: 가운데(x 30–76%, 머리 y 40–54%) 서하, 눈동자만 움직여 둘 사이를 오간다. 그녀 뒤 왼쪽 배경(x 4–24%, y 42–62%) 책상 끝 칸막이의 수칙 종이(흰 4번 조각과 빨간 테이프 두 줄이 스탠드 빛에 걸림, 작지만 또렷). 오른쪽 가장자리 근경(x 80–100%, y 48–64%) 흰 덮개 띠를 든 재우의 LEFT 손(차콜 니트 + 흰 커프스, 몸은 프레임 밖) — 띠가 4번 조각과 같은 종이로 보인다. 위 38%(y 0–38%)는 숙직실 문 위 윗벽과 천장의 어둑함.
- characters: SEOHA(FULL) — 생각하는 얼굴 `still, thinking hard, eyes moving between two things` · JAEWOO(LEFT 손만)
- props: PROP_RULESHEET_SMALL · **PROP_COVER_STRIP**
- lighting: LIGHT_L1 + LIGHT_LAMP(서하 얼굴과 종이) + LIGHT_NOFLICKER · 빨강 = 테이프 두 줄뿐(롤은 프레임 밖 그의 RIGHT 손)
- dialogue_ref (2): ① 서하 thought "(맨 위에 붙은 게… 최신 개정이니까.)" ② 서하 thought "(덮으면… 이번엔 우리가 덧댄 사람이 돼.)" (둘 다 구름형, 꼬리 없음)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/PROP_PAGES_pair.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 윗벽·천장의 어둑함. ①은 왼쪽 위, ②는 오른쪽 조금 아래(둘 다 w 50% 안팎). / F-54: 첫 생각 = EP01 P22 ②와 KM 동일. 흰 띠와 4번 조각이 같은 종이로 보여도 된다(미스디렉션, style-bible §7-5).

### panel_022
- scene_id: S01 / location: LOC_L1_DUTYROOM · 서하 미디엄 클로즈업
- beat: ③ **이 회차 첫 "아니요"** · 긴장 8 · gap_after 120
- size: small · aspect: **1:1**
- camera: 앉은 눈높이 medium close-up — 정면, 가슴 위
- composition: 서하의 얼굴·어깨가 가운데 왼쪽~가운데(x 12–64%, y 28–96%), 그를 똑바로 본다. 오른쪽 가장자리에서 들어온 재우의 LEFT 손이 흰 덮개 띠를 그녀 쪽으로 내민 채 멈춰 있다(x 64–100%, y 50–64%). 아래(x 20–56%, y 78–100%) 그녀의 손이 띠를 받지 않고 가슴 쪽으로 거둬진다(카디건 소매가 손을 반쯤 덮음). 뒤는 초점 밖 어둑한 방. 위 25%(y 0–25%)는 초점 밖 어둠.
- characters: SEOHA(FULL) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · JAEWOO(LEFT 손만)
- props: PROP_COVER_STRIP
- lighting: LIGHT_L1 + LIGHT_LAMP(그녀 얼굴에 따뜻한 빛) + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (1): ① 서하 dialogue "아니요." (짧게, w 25–40%, 꼬리 ↓ 서하)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 25% 왼쪽~가운데(x 5–60%, y 3–25%) — 초점 밖 어둠(그녀 머리 y 28% 위). / 꾸미지 않는다 — 표정 ④만. P39와 같은 말(KM `ទេ។` 바이트 동일)이지만 그림은 짝이 아니다.

### panel_023
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: ③ 시즌 약속 ①(F-26) · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP02 P5 — 앉은 눈높이 medium two-shot (VIEW_SIDE) — 무릎 위
- composition: [↺EP02 panel_005 틀] 화면 왼쪽(x 6–42%, 머리 y 28–42%) 서가 앞, 스탠드 빛 가장자리에 선 재우 — 이번엔 흰 띠와 빨간 롤을 쥔 두 손을 아래로 내린 채(손만 빛 안), 말없이 듣는다. 화면 오른쪽(x 58–98%, 머리 y 42–56%) 회전의자를 그 쪽으로 돌려 앉은 서하, 그를 똑바로 본다. 둘 사이 가운데 안쪽 배경(x 42–58%, y 44–60%) 책상 끝 칸막이의 작은 수칙 종이(흰 4번 조각과 빨간 테이프 두 줄), 그 뒤 닫힌 크림색 숙직실 문. 오른쪽 가장자리 통유리 창구와 어둑한 복도. 위 26%(y 0–26%)는 서가 꼭대기 어둠과 천장.
- characters: SEOHA(FULL) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · JAEWOO(SHORT) — 조용히 듣는 얼굴 `quiet, listening, unreadable`
- props: PROP_RULESHEET_SMALL · PROP_COVER_STRIP · PROP_TAPE_ROLL_RED(그의 손, 작게)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 빨강 = 칸막이 테이프 + 그의 손의 롤(작게)
- dialogue_ref (1): ① 서하 dialogue "누가 덧댔는지 알아야 해요." (위 오른쪽, 꼬리 ↘ 서하)
- repeat: EP02 **panel_005** 구도(같은 카메라·같은 좌우·둘 사이 수칙 종이·위 26%, C-2) · 바뀌는 것: 말하는 사람이 재우 → 서하, 서하의 굳은 얼굴 → 표정 ④, 그의 손에 띠와 롤
- attach: _workspace/05_panels/ep02/panel_005.png, refs/SEOHA_expressions.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 26% 가운데~오른쪽(x 28–97%, y 2–26%) — 서가 꼭대기 어둠·천장. / F-26 ①(EP20 회수). 질문을 받던 자리(P5)에서 답을 돌려준다 — 같은 그림이 그 대구를 만든다.

### panel_024
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE 축(서하 정면, 칸막이 배경)
- beat: ③ **시즌 약속 ②(인용 대사)** ⟨이중의미⟩ F-26 · E12 계열 · 긴장 8 · gap_after 240
- size: medium · aspect: **3:4**
- camera: ↺EP01 P49 — 눈높이 frontal medium — 방 안쪽에서 창구 벽 방향 → 이번 컷: 축만 VIEW_SIDE — 출입문 쪽(재우의 등 뒤)에서 서하 쪽
- composition: [↺EP01 P49 틀] 가운데 왼쪽(x 15–60%, 머리 y 36–50%) 회전의자에 앉아 화면 정면(= 재우)을 똑바로 보는 서하, 스탠드 빛이 얼굴 한쪽에. 그녀 뒤 오른쪽(x 64–82%, y 40–60% — EP01 P49에서 작은 구정민이 있던 자리) 책상 끝 칸막이의 수칙 종이: 흰 4번 조각과 빨간 테이프 두 줄이 또렷하다. 그 뒤 벽에 닫힌 크림색 숙직실 문. 오른쪽 가장자리 근경(x 82–100%, y 30–100%) 초점 밖 재우의 뒷모습(차콜 카디건 어깨·웃자란 뒷머리). 위 35%는 숙직실 문 위 윗벽과 천장의 어둑함.
- characters: SEOHA(FULL) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · JAEWOO(SHORT 뒷모습, 전경 초점 밖)
- props: PROP_RULESHEET_SMALL(작지만 또렷하게) · 숙직실 문 닫힘
- lighting: LIGHT_L1 + LIGHT_LAMP(얼굴에 따뜻한 빛) + LIGHT_NOFLICKER · 빨강 = 칸막이 테이프 두 줄뿐
- dialogue_ref (1): ① 서하 dialogue "떼는 건… 그 사람 몫이에요." (꼬리 ↓ 서하)
- repeat: EP01 **panel_049** 구도(서하 frontal medium 자리·스탠드 빛·위 35%·인용 대사 컷) · 바뀌는 것: 축이 VIEW_SIDE — 그녀 뒤가 유리 대신 칸막이의 수칙 종이(구정민 자리에 종이), 전경 오른쪽에 재우 뒷모습, 그녀는 앉아 있다
- attach: _workspace/05_panels/ep01/panel_049.png, refs/SEOHA_expressions.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 35%(x 3–62%, y 2–35%) — 숙직실 문 위 윗벽·천장의 어둑함(오른쪽의 종이와 전경 재우는 피한다). / EP01 P49 "원래 주인한테."의 짝. 첨부한 EP01 P49는 인물 자리·빛만 — 유리·구정민을 따라 그리면 REGEN. 뒤 240px.

### panel_025
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_SIDE(출입문 쪽)
- beat: ③ 그는 물러난다(밸브) · "계단"(b3①) · 긴장 6 · gap_after **480**
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium wide (VIEW_SIDE) — 출입문 곁에서 방을 가로질러
- composition: 화면 가운데~오른쪽 앞(x 40–86%, 머리 y 30–44%) 출입문(카메라 쪽)으로 걸어 나오며 어깨 너머로 뒤를 돌아보는 재우(얼굴 3/4가 화면 왼쪽 안쪽의 서하를 향함), 흰 띠와 빨간 롤을 카디건 주머니에 막 밀어 넣는 손 — 롤은 거의 주머니 속, 빨강이 사라지는 순간(주머니 밖으로 비치지 않게). 오른쪽 가장자리(x 86–100%, y 18–100%) 열린 출입문 틀과 그 밖의 어두운 복도. 화면 왼쪽 안쪽 중경(x 4–28%, 머리 y 42–54%) 서가 앞 접이식 의자에 거꾸로 앉은 선임, 실눈. 가운데 안쪽(x 30–50%, 머리 y 46–58%) 당직석의 서하(작게), 그를 본다. 배경: 칸막이·숙직실 문. 위 28%는 천장 배관과 서가 꼭대기 어둠.
- characters: JAEWOO(FULL + §10-1 '퇴장' 상태 토큰) — 담담한 얼굴, 어깨 너머 · SEONIM(SHORT) — 표정 ④ `narrowed, suspicious eyes, head tilted, watching closely`(실눈만 — 시선은 서하 쪽, 재우를 보지 않는다) · SEOHA(SHORT, 작게)
- props: PROP_TAPE_ROLL_RED(주머니로 사라짐) · PROP_COVER_STRIP · PROP_FOLDING_CHAIR
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 빨강 = 칸막이 테이프(작게)뿐 — 롤은 이 컷에서 주머니로 들어간다(P26 이후 화면에 롤 없음)
- dialogue_ref (2): ① 전임자 dialogue "…그럼 찾아봐." ② 전임자 dialogue "난 계단에 있을게." (둘 다 꼬리 ↓ 재우, 어깨 너머로 한마디씩)
- attach: refs/JAEWOO_turnaround.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 28%(x 3–84%, y 2–28%) — 천장 배관·서가 꼭대기 어둠(오른쪽 문틀 위는 피한다). ①은 왼쪽~가운데, ②는 그 아래 오른쪽. / b3①: "계단"은 방화문 쪽(그녀의 왼쪽). 주머니 밖으로 빨강이 비치면 REGEN(style-bible §7-6). 뒤 480px.

--- SCENE BREAK --- (S01 → S02 · 장소 동일 L1 · 시간 점프 04:40 · 밸브, 유머 1비트)

### panel_026
- scene_id: S02 / location: LOC_L1_DUTYROOM · VIEW_SIDE(와이드, 시계가 보이게)
- beat: ④ 시간 점프 · 남은 목표(F-11) · 긴장 4 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 wide (VIEW_SIDE) — 출입문 쪽 끝에서 방을 가로질러 (EP01 P50의 '근경 접이식 의자 + 중경 당직석' 배치를 VIEW_SIDE로 옮김)
- composition: 위 왼쪽(x 6–22%, y 8–22%) 서가 위 숫자 없는 둥근 벽시계, 또렷하게 — **04:40**(짧은 시침 = 오른쪽 아래, 4와 5 사이 5에 가깝게 / 긴 분침 = 왼쪽 아래 8시 방향). 화면 왼쪽 앞(x 0–30%, y 46–100%) 서가 앞 접이식 의자에 거꾸로 앉아 팔짱을 등받이에 얹고 눈을 감은 선임(머리 y 46–58%, 고개 약간 숙임). 화면 오른쪽 앞(x 50–96%, 머리 y 44–58%) 당직석의 서하 — 밤샘 상태(잔머리 조금 늘어남, 무거운 눈꺼풀) — 스탠드의 노란 원 안에서 펼친 수첩에 번호를 매겨 적는다(쓰는 자리는 손과 펜이 가린다). 펼친 쪽 오른쪽 아래 귀퉁이에 종이컵 하나(x 80–90%, y 74–84%). 가운데 안쪽 배경: 칸막이의 작은 수칙 종이, 닫힌 크림색 숙직실 문. 오른쪽 가장자리 통유리 창구와 어둑한 복도. 위 40%(시계 오른쪽)는 천장 배관과 서가 꼭대기 어둠.
- characters: SEOHA(SHORT + §10-2 밤샘 풀이 + 당직석 상태 토큰) — 담담히 적는 얼굴 `quiet, focused, tired heavy eyelids` · SEONIM(SHORT + '졸음' 상태 토큰)
- props: **PROP_CLOCK** + `PROP_CLOCK_TIME_0440` · PROP_NOTEBOOK_OPEN(빈 모눈) · PROP_PAPER_CUP(수첩 오른쪽 아래 귀퉁이) + PROP_RING_NEW(컵 밑, 작게) · 펜(무지) · PROP_RULESHEET_SMALL · PROP_FOLDING_CHAIR · (롤 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_NOFLICKER — 새벽 4시도 지하는 같은 색 · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (2): ① 서하 thought "(하나. 06시까지 버틴다.)" ② 서하 thought "(둘. 우리가 무슨 약속을 했는지 알아낸다.)" (둘 다 구름형, 꼬리 없음)
- repeat: **panel_042의 원본**(EP02 안 짝 — 같은 카메라·배치·비율). beatsheet의 ↺EP01 P50은 배치만 빌렸다 — EP01 P50(VIEW_C)은 시계가 카메라 뒤라 첨부하지 않는다(§C-1 주)
- attach: refs/SEOHA_turnaround.png, refs/SEONIM_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 40% 가운데~오른쪽(x 26–97%, y 2–40%) — 천장 배관·서가 꼭대기 어둠. **시계 면(x 6–22%, y 8–22%)은 절대 덮지 않는다.** ①은 위, ②는 그 아래 조금 오른쪽. / 시계: 분침이 왼쪽 아래(8)가 아니면 REGEN. 서하 다크서클 금지(피로는 잔머리·눈꺼풀로만). 수첩 낱장은 빈 모눈. P42가 이 컷을 반복하므로 카메라·배치를 또렷하게.

### panel_027
- scene_id: S02 / location: LOC_L1_DUTYROOM · 칸막이 클로즈업
- beat: ④ **7번 첫 낭독(복선 b4①)** ⟨이중의미⟩ · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P57 — 앉은 눈높이 close-up — 칸막이 정면에서 약간 오른쪽
- composition: [↺EP01 P57 틀] 가운데 왼쪽(x 6–62%, y 24–96%) 수칙 종이: 빈 모눈 7칸 자리, 서하의 RIGHT 검지 끝이 위에서부터 칸 자리를 차례로 짚고 내려와 — **이번엔 흰 4번 조각을 지나 맨 아래 7번 자리(y 84–92%)에서 멈춘다**. 오른쪽(x 62–96%, y 30–92%)은 EP01 P57의 수첩 자리 — 이번엔 비어 있다: 칸막이 가장자리 너머 초점 밖 어둠. 위 22%(y 0–22%)는 칸막이 너머 초점 밖 어둠.
- characters: SEOHA(손 클로즈업 상태 토큰 + §10-2 '7번 자리까지 손끝')
- props: **PROP_RULESHEET**(빈 모눈, 글씨·번호 없음) · PROP_STICKER_FADED · PROP_RING_FADED
- lighting: LIGHT_L1 + LIGHT_LAMP(종이에 따뜻한 빛) + LIGHT_NOFLICKER · 빨강 = 테이프 두 줄뿐
- dialogue_ref (2): ① 서하(작게) dialogue "7번. 06시 전에는 퇴근하지 않는다." ② 서하(작게) dialogue "누가 퇴근하라고 해도." (둘 다 작은 소리 말풍선, 꼬리 → 왼쪽 아래 = 화면 밖 그녀 — 문장 경계에서 나눈 두 말풍선)
- repeat: EP01 **panel_057** 구도(카메라·종이 자리·손끝이 조항을 따라 내려감·위 22%) · 바뀌는 것: 손끝이 4번 조각을 지나 **맨 아래 7번 자리**에서 멈춤, 오른쪽 수첩 없음(초점 밖 어둠). **P37 비네트의 원본**
- attach: _workspace/05_panels/ep01/panel_057.png, refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 22% 띠(x 4–96%, y 2–22%) + 오른쪽 빈 어둠(x 64–96%, y 24–60%). ①(긴 줄)은 위 띠에 넓게, ②는 오른쪽 어둠에. 종이 오른쪽 위의 바랜 스티커는 덮지 않는다. / 7번 자리는 빈 모눈 — 번호·글씨가 생기면 REGEN. P37 비네트가 이 컷을 다시 그리므로 손끝·7번 자리·위 1/3 어둠을 또렷하게.

### panel_028
- scene_id: S02 / location: LOC_L1_DUTYROOM · VIEW_C 축(서가 쪽 근경)
- beat: ④ 미스디렉션: 유혹이 올 것이다(m1) · F-07 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P21 — 눈높이 medium — 선임 근경, 책상은 원경
- composition: [↺EP01 P21 `COMP-E1` 틀] 화면 왼쪽~가운데 앞(x 5–60%, 머리 y 28–46%) 접이식 의자에 거꾸로 앉은 선임, 얼굴 3/4(화면 오른쪽으로 약간 돌림) — **이번엔 컵 없이 팔짱을 등받이에 얹고 눈을 감은 채 말한다**. 화면 오른쪽 원경(x 62–96%, y 40–80%) 당직석 책상 위 베이지 내선 전화와 그 곁에 작게 앉은 서하 — **이번엔 그를 돌아보지 않고 유리 너머 어두운 복도를 본다**(옆얼굴). 위 25%(y 0–25%)는 서가 꼭대기 어둠과 천장.
- characters: SEONIM(FULL + '졸음' 상태 토큰) — `eyes closed, speaking quietly without opening them` · SEOHA(SHORT + 밤샘, 작게) — 유리 너머를 응시
- props: PROP_EXT_PHONE(숫자 없는 버튼) · PROP_FOLDING_CHAIR
- lighting: LIGHT_L1, 원경 책상에 LIGHT_LAMP + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (2): ① 선임 dialogue "새벽엔 그 줄만 기억하래." (위 왼쪽, 꼬리 ↙ 선임) ② 서하 thought "(내가 쓴 거면… 누가 그랬던 거야? 퇴근하라고.)" (긴 줄 w 60% 이상, 위 오른쪽에서 원경 서하 머리 위로, 구름형)
- repeat: EP01 **panel_021** `COMP-E1` 구도(선임 근경·책상 원경·위 25%) · 바뀌는 것: 선임 눈 감음·팔짱(컵 없음), 원경 서하가 그를 보지 않고 유리 너머 복도를 본다, 오른쪽 위에 생각 말풍선 자리
- attach: _workspace/05_panels/ep01/panel_021.png, refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png
- fx/note: bubble space: 위 25% 띠(x 3–97%, y 2–25%) + 오른쪽 원경 서하 머리 위 유리 너머 어두운 복도(x 62–97%, y 25–40%). ①은 왼쪽 위 짧게, ②는 오른쪽으로 넓게 내려온다. / m1: 독자는 "퇴근하라는 목소리 = 괴이의 유혹"으로 읽는다. 선임 얼굴에 안경 금지.

### panel_029
- scene_id: S02 / location: LOC_L1_DUTYROOM · VIEW_SIDE(가깝게)
- beat: ④ 유머 밸브 · '퇴근' 모티프(b6) ⟨이중의미⟩ · 긴장 4 · gap_after 240
- size: medium · aspect: **3:4**
- camera: ↺EP01 P20 — 앉은 눈높이 medium two-shot (VIEW_SIDE, P12보다 가깝게 — 가슴 위)
- composition: [↺EP01 P20 틀] 화면 왼쪽(x 0–45%, 머리 y 38–52%) 거꾸로 앉은 선임의 옆얼굴 3/4, 팔짱을 등받이에 얹은 채 — **이번엔 한쪽 눈만 실처럼 뜨고 나머지는 감은 채 꼼짝하지 않는다**. 화면 오른쪽(x 52–100%, 머리 y 40–54%) 회전의자에서 몸을 돌려 그를 향한 서하 — **이번엔 무표정**, 두 손은 무릎에. 둘 사이 안쪽 배경에 초점 밖 칸막이와 숙직실 문. 위 38%는 서가 꼭대기 어둠(왼쪽)과 유리 위쪽 너머 복도(오른쪽).
- characters: SEONIM(FULL + '한쪽 눈' 상태 토큰) · SEOHA(SHORT + 밤샘) — 표정 ⑧ `a flat, polite, deadpan civil-servant face with slightly lowered eyelids`
- props: (작게) PROP_RULESHEET_SMALL
- lighting: LIGHT_L1 + LIGHT_LAMP(서하 쪽만 따뜻) + LIGHT_NOFLICKER · 빨강 = 테이프(작게)뿐
- dialogue_ref (2): ① 서하 dialogue "선배님은 퇴근 몇 시에 하세요?" (위 오른쪽, 꼬리 ↘ 서하) ② 선임 dialogue "출근을 안 했으니, 퇴근도 없대." (긴 줄 w 60% 이상, 위 왼쪽 조금 아래, 꼬리 ↙ 선임)
- repeat: EP01 **panel_020** 구도(투샷 가슴 위·좌우 배치·위 38%) · 바뀌는 것: 선임 한쪽 눈만 뜸·팔짱, 서하 ⑧ 무표정(매달리는 불안 대신), 말하는 순서가 서하 → 선임(그래서 말풍선도 오른쪽 → 왼쪽)
- attach: _workspace/05_panels/ep01/panel_020.png, refs/SEONIM_expressions.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — ①은 오른쪽 유리 위쪽 너머 복도(y 2–16%), ②는 왼쪽 서가 위 어둠부터 넓게(y 17–37%). / 유머는 표정과 구도로만(만화 기호 금지). 뒤 240px.

--- SCENE BREAK --- (S02 → S03a · 장소 동일 L1 · 05:56 · 수칙 7 역전 블록 — 유머 없음, 떨림 없음, 시계 타이머)

### panel_030
- scene_id: S03a / location: LOC_L1_DUTYROOM · VIEW_SHELVES 축(서가 위 시계 클로즈업)
- beat: ⑤ 타이머 시작 · 계단의 발소리(b3②) · 긴장 6 · gap_after 40
- size: small · aspect: **1:1**
- camera: 앉은 눈높이에서 올려다본 close-up — 당직석 쪽에서 서가 위 시계
- composition: 위~가운데(x 28–72%, y 6–50%) 서가 위 숫자 없는 둥근 벽시계 크게: 흰 면·가는 검은 테·검은 바늘·눈금 12개, **05:56**(짧은 시침 = 거의 바로 아래, 아주 조금 오른쪽 / 긴 분침 = 거의 바로 위, 아주 조금 **왼쪽**). 시계 아래로 서가 꼭대기와 갈색 상자(빈 라벨)가 초점 밖. 아래(x 14–86%, y 72–100%) 시계를 올려다보는 서하의 눈과 이마(밤샘 잔머리), 아래 가장자리에서 잘림. 왼쪽 가장자리(x 0–26%, y 40–68%) 서가 사이 어두운 틈 — 출입문 쪽 가장자리.
- characters: SEOHA(SHORT + 밤샘 — 눈·이마만) — 굳은 눈 `eyes wide, looking up, listening`
- props: **PROP_CLOCK** + `PROP_CLOCK_TIME_0556`
- lighting: LIGHT_L1 + LIGHT_LAMP(그녀 이마에 아래에서 따뜻한 빛) + **LIGHT_NOFLICKER** · 빨강 없음
- dialogue_ref (sfx): sfx "저벅… 저벅…" (계단 쪽 발소리 — 출입문 쪽 왼쪽 가장자리에서)
- attach: refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: sfx — 왼쪽 가장자리 서가 틈의 어둠(x 2–26%, y 40–68%), 시계 면과 그녀의 눈은 피한다. / 시계: 분침이 12의 **오른쪽**이면 REGEN(= 6시 넘음). 숫자·로고 없음. 떨림 없음(b5 공정성).

--- SCENE BREAK --- (S03a → S03b · 당직실 안에서 유리 너머 L2 복도 · 05:57)

### panel_031
- scene_id: S03b / location: **LOC_L2_CORRIDOR** · VIEW_FROM_WINDOW(당직실 안에서 유리 너머)
- beat: ⑤ 목소리는 계단에서(b5 · m2) · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium wide — 당직실 안에서 두꺼운 통유리 너머로 복도의 가까운 끝(방화문 쪽, 그녀의 왼쪽)을 비스듬히
- composition: 프레임 전체가 유리 너머 복도. 오른쪽 가장자리(x 88–100%, y 0–100%) 유리 창구의 알루미늄 틀과 초점 밖 말구멍 테두리 일부. 복도가 화면 왼쪽 안쪽으로 원근을 그리며 이어져 불 켜진 가까운 끝에 무거운 회색 방화문(가로 밀대, x 14–38%, y 34–80%), 그 위 숫자 없는 둥근 복도 시계(x 20–32%, y 22–32%, **05:57** — 분침이 12 바로 왼쪽). 천장의 하나 걸러 켜진 형광등이 떨림 없이 고르게. 연녹 벽·진녹 띠·테라조 바닥. 복도는 **완전히 비었다** — 사람·그림자 없음. 민원인이 나오는 어두운 끝은 반대 방향이라 프레임 밖. 유리에는 스탠드의 따뜻한 빛이 옅게 정상 반사(오른쪽 아래, x 66–86%, y 70–88%). 위 오른쪽(x 40–96%, y 3–30%)은 복도 천장·배관.
- characters: 없음(목소리만)
- props: PROP_CLOCK(복도 시계) + `PROP_CLOCK_TIME_0557`(= `_0556` 문장) · 방화문
- lighting: LIGHT_CORRIDOR + **LIGHT_NOFLICKER**(불 켜진 가까운 끝) · 빨강 없음
- dialogue_ref (1): ① 목소리(계단) dialogue "수고했어요." (꼬리 ↙ 방화문 쪽 — 문 너머 계단에서 오는 소리)
- attach: refs/LOC_L2_CORRIDOR_plate.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 오른쪽(x 40–96%, y 3–30%) — 복도 천장·배관. 방화문 위 시계 면(x 20–32%, y 22–32%)은 피한다. / b5: 형광등이 떨리지 않고 복도가 비었다는 것이 공정한 신호(괴이가 아니다). 사람·실루엣·그림자가 생기면 REGEN. 시계 분침이 12의 오른쪽이면 REGEN.

--- SCENE BREAK --- (S03b → S03c · L2 복도 → L1 당직실 · 05:57–06:00)

### panel_032
- scene_id: S03c / location: LOC_L1_DUTYROOM · VIEW_A
- beat: ⑤ 7번이 울린다 ⟨이중의미⟩ · m3 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P15 — 앉은 눈높이보다 약간 높게, 정면 medium — 복도 쪽에서 통유리 너머의 서하
- composition: [↺EP01 P15 틀] 화면 가운데(x 25–80%, 머리 y 38–52%) 유리 너머 당직석에 앉아 정면을 향한 서하 — 굳은 채, **두 손이 책상 위에 납작하게**(x 30–75%, y 62–82% — EP01 P15의 서식 자리, 이번엔 빈 책상 유리 상판). EP01 P15에서 남자 어깨가 있던 화면 왼쪽 가장자리 앞(x 0–18%)은 **비었다**(유리와 빈 복도 빛만). 아래 가장자리에 말구멍·투입구·바깥 놋쇠 벨. 오른쪽(그녀의 LEFT) 칸막이와 스탠드. 그녀 뒤 왼쪽(x 8–30%, 머리 y 40–52%) 서가 앞 접이식 의자에 거꾸로 앉아 눈을 감은 선임(작게). 그녀 머리 위 뒤쪽, 서가 위 가운데(x 44–58%, y 14–26%) 숫자 없는 둥근 시계 **05:57**. 화면 왼쪽 책상 위 바인더 곁에 열쇠 꾸러미(작게). 위 38%는 유리 너머 방 안쪽 서가와 천장의 어둑함(유리는 옅은 정상 반사만).
- characters: SEOHA(FULL + 밤샘) — 표정 ② `frozen in fear, eyes wide, lips pressed shut, face rigid` · SEONIM(SHORT + '졸음' 상태 토큰, 작게)
- props: PROP_CLOCK + `PROP_CLOCK_TIME_0557` · PROP_CALLBELL · PROP_LAMP · PROP_RULESHEET_SMALL · PROP_KEYS(작게)
- lighting: LIGHT_L1 + LIGHT_LAMP + **LIGHT_NOFLICKER** (EP01 P15의 LIGHT_COMEDY는 쓰지 않는다) · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (2): ① 목소리(계단) dialogue "이제 퇴근해요." (위 오른쪽, 꼬리 → 오른쪽 가장자리 밖 = 방화문 쪽) ② 서하 thought "(7번.)" (짧은 구름형, 그녀 머리 왼쪽 위)
- repeat: EP01 **panel_015** 구도(VIEW_A 정면 미디엄, 서하 자리·두 손 자리·위 38%) · 바뀌는 것: 전경 남자 어깨 없음(복도는 비었다), 서식 대신 납작한 두 손, 뒤에 눈 감은 선임, 서가 위 시계 05:57, 블랙코미디 무표정 대신 공포로 굳음
- attach: _workspace/05_panels/ep01/panel_015.png, refs/SEOHA_expressions.png, refs/SEONIM_turnaround.png
- fx/note: bubble space: ① 위 오른쪽(x 62–97%, y 2–22%) — 유리 너머 방 안쪽 서가 위 어둑함(VIEW_A에서 계단 쪽 = 화면 오른쪽, style-bible §6-2-1) · ② 위 왼쪽(x 4–36%, y 22–36%) — 서가 위 어둠. **시계 면(x 44–58%, y 14–26%)은 덮지 않는다.** / m3: 선임은 눈을 감고 돕지 않는다. 시계 분침이 12의 오른쪽이면 REGEN. 첨부한 EP01 P15의 구정민 어깨를 따라 그리면 REGEN.

### panel_033
- scene_id: S03c / location: LOC_L1_DUTYROOM · VIEW_C 축(출입문 + 창구 오른쪽 끝)
- beat: ⑤ 공개 1컷 전 정지점 · 미스디렉션 최대 · 긴장 8 · gap_after **480**
- size: large · aspect: **9:16**
- camera: ↺EP01 P42 — 서 있는 눈높이 medium wide — 서가 쪽에서 왼쪽 벽 방향으로 비스듬히 → 이번 컷: 좌우만 바꿔 서가 쪽에서 **오른쪽 벽(출입문)** 방향으로 비스듬히
- composition: [↺EP01 P42 틀, 좌우 대칭] 화면 **오른쪽** 절반(x 50–100%, y 22–95%) 창구 벽 끝의 열린 출입문 틀(EP01 P42의 숙직실 문 자리): 그 안에 선 길쭉한 실루엣 — 웃자란 머리와 처진 어깨의 윤곽만, 얼굴은 그늘, 뒤는 어두운 복도. 실루엣의 손에 든 **흰 종이 한 장**(x 62–80%, y 52–66%)만 스탠드의 따뜻한 빛을 받는다(빈 면). 화면 **왼쪽** 절반(x 0–48%, y 25–75%) 통유리 창구 끝부분: 유리 앞은 비었고 그 너머 빈 복도(옅은 정상 반사). 왼쪽 아래 가장자리에 당직석 스탠드의 따뜻한 빛 번짐과 책상 모서리. 위 20%는 천장.
- characters: JAEWOO(§10-1 '문틀 실루엣' 상태 토큰 — 얼굴 안 보임)
- props: PROP_HANDOVER_A(실루엣 손의 흰 종이 한 장으로만 — 테두리는 읽히지 않아도 된다)
- lighting: LIGHT_L1 + LIGHT_LAMP + **LIGHT_NOFLICKER** · 종이만 따뜻한 빛 · 빨강 없음
- dialogue_ref (1): ① 목소리 dialogue "나머진 내가 받을게요." (꼬리 ↘ 문틀의 실루엣)
- repeat: EP01 **panel_042** 구도(서가 쪽에서 비스듬히 본 '반쪽 문 + 반쪽 창구', 위 20%) — **좌우 대칭판** · 바뀌는 것: 숙직실 문 대신 출입문 틀(오른쪽 절반)과 실루엣·흰 종이, 창구 끝이 왼쪽 절반, 물·벨 웅덩이 없음
- attach: _workspace/05_panels/ep01/panel_042.png, refs/JAEWOO_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 20%(x 5–95%, y 2–20%) — 천장(꼬리는 아래 오른쪽 문틀로). 실루엣 머리(y 26% 근처)는 덮지 않는다. / 얼굴이 보이면 REGEN(공개는 P34). 실루엣은 사람의 윤곽(유령·형체 왜곡 금지). 첨부한 EP01 P42는 **좌우를 바꿔** 쓰라고 프롬프트에 적는다. 뒤 480px.

### panel_034
- scene_id: S03c / location: LOC_L1_DUTYROOM · 당직석에서 출입문 쪽(그녀 시점)
- beat: ⑤ **T-b 공개 ①: 목소리는 그였다(진심)** ⟨반전⟩ · b1·b3 회수 · 긴장 8 · gap_after 40
- size: large · aspect: **9:16**
- camera: 앉은 눈높이 medium — 당직석의 그녀 쪽에서 빛 가장자리까지 걸어온 그를 정면으로, 허리 위
- composition: 가운데(x 18–82%, 머리 y 16–30%) 스탠드 빛 가장자리까지 걸어온 재우: 간절한 미소, 젖은 눈가. 두 손으로 가슴 앞에 흰 서류를 내민다(x 22–78%, y 40–84%, A4 세로, 크게): 굵은 짙은 회색 이중 테두리, 안의 빈 칸 몇, **아래 1/4 안 오른쪽으로 치우친 빈 서명란 두 줄**과 줄 끝의 빈 원 — 글자·서명·직인 없음. 서류와 두 손(RIGHT 손 = 화면 왼쪽, 검지 은반지)만 노란 빛 안, 얼굴은 반만 따뜻. 그의 등 뒤는 열린 출입문 틀과 어두운 복도, 화면 왼쪽 가장자리에 통유리 창구의 끝. 위 14%는 천장.
- characters: JAEWOO(FULL + §10-1 '인수인계서' 상태 토큰) — 표정 ⑤ `a soft, earnest smile, his eyes glistening and slightly wet at the rims`
- props: **PROP_HANDOVER_A**(완전한 빈 면 — 붉은 원·접힌 자국·구김·얼룩 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE(서류·손만 노란 원 안) + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (1): ① 전임자 dialogue "인수인계서야. 내 칸은 채웠어." (꼬리 ↓ 재우)
- repeat: — (**P35 · P55 비네트의 원본**)
- attach: refs/JAEWOO_expressions.png, refs/JAEWOO_turnaround.png, refs/PROP_HANDOVER_pair.png
- fx/note: bubble space: 위 14%(x 5–95%, y 2–14%) — 천장(머리 y 16% 위). / R17: 서류 A는 **완전한 빈 면** — 서명도 그리지 않는다("채웠어"는 말로만). P55 비네트 대조가 붉은 원 하나로만 읽혀야 하므로 A에 붉은 원·접힌 자국·구김이 생기면 REGEN. 서류는 충분히 크게(이중 테두리·두 서명란 또렷하게). P35·P55가 이 컷을 다시 쓰므로 먼저 만든다.

### panel_035
- scene_id: S03c / location: LOC_L1_DUTYROOM · 서류 클로즈업
- beat: ⑤ 마지막 줄까지 읽는다(그녀의 강점) · '퇴근' 사슬 · 긴장 8 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 close-up — panel_034와 같은 순간, 그가 내민 서류를 정면에서
- composition: 아래 2/3(x 10–90%, y 36–100%) 그가 두 손으로 든 서류 A(가장자리를 쥔 손가락만 프레임 안, RIGHT 손 검지 은반지 = 화면 왼쪽). 서하의 RIGHT 검지 끝(머스터드 소매 끝)이 아래 가장자리에서 들어와 빈 칸들을 따라 내려간 뒤 **아래쪽 서명란 두 줄 중 아래 줄**(x 52–84%, y 86–92%)에서 멈춘다. 서류는 끝까지 빈 면. 위 34%(y 0–34%)는 서류 위쪽 초점 밖 — 그의 차콜 카디건 가슴과 그 너머 어두운 문틀.
- characters: SEOHA(손 — §10-2 '서류를 끝까지 읽는 손끝') · JAEWOO(손가락만)
- props: **PROP_HANDOVER_A**(크게, 완전한 빈 면)
- lighting: LIGHT_L1 + LIGHT_LAMP(서류에 따뜻한 빛) + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (2): ① 서하 dialogue "인수자는… 당직 열쇠와 이 밤의 모든 일을 인수한다." (긴 줄 w 60% 이상) ② 서하 dialogue "…인계자는, 퇴근한다." (한 박자 뒤, 짧게) — 둘 다 꼬리 ↙ 아래 왼쪽 = 화면 밖 그녀
- repeat: EP02 **panel_034**와 같은 서류·같은 손·같은 순간(C-2) · 바뀌는 것: 서류 클로즈업, 그녀의 손끝
- attach: _workspace/05_panels/ep02/panel_034.png, refs/PROP_HANDOVER_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 34%(x 3–97%, y 2–34%) — 서류 위 초점 밖 차콜 가슴과 어두운 문틀. ①은 위에 넓게, ②는 그 아래 오른쪽 짧게. 서류 면 위에는 두지 않는다. / 서식 낭독은 말풍선으로만 — 서류에 글씨가 생기면 REGEN. 손끝은 **아래 줄**에서 멈춘다(style-bible §7-5).

### panel_036
- scene_id: S03c / location: LOC_L1_DUTYROOM · 서하 클로즈업
- beat: ⑤ **T-b 정점 ①: 깨달음** ⟨반전⟩ 수칙 7 역전 · 긴장 **9** · gap_after 40
- size: small · aspect: **1:1**
- camera: 앉은 눈높이 close-up — 얼굴과 입을 누른 손
- composition: 서하의 얼굴이 가운데 아래(x 12–88%, y 30–100%): 흔들리는 동공(RIGHT 눈 밑 점 = 화면 왼쪽), 한 손(머스터드 소매가 반쯤 덮음)이 입을 누른다, 밤샘 잔머리. 스탠드의 따뜻한 원이 얼굴만 감싸고, 뒤는 차분한 푸른 그림자로 가라앉은 방. 위 28%(y 0–28%)는 초점 밖 푸른 어둠.
- characters: SEOHA(FULL + 밤샘) — 표정 ⑥ `trembling pupils, one hand pressed over her mouth, chilled realization`
- props: 없음
- lighting: **LIGHT_REVEAL**(style-bible §3-4 선택 — 안 쓰면 LIGHT_L1 + LIGHT_LAMP) · 떨림 없음 · 빨강 없음
- dialogue_ref (1): ① 서하 thought "(퇴근하라는 말은… 대신 남겠다는 말이었어.)" (구름형, w 60% 이상)
- attach: refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 28%(x 4–96%, y 2–28%) — 초점 밖 푸른 어둠(이마 y 30% 위). / EP01 P56(같은 표정 ⑥)과 그림이 닮아도 된다 — 단 이번엔 밤샘 잔머리, 다크서클 없음.

### panel_037
- scene_id: S03c / location: LOC_L1_DUTYROOM · 칸막이 클로즈업(앵글②) + 기억 비네트
- beat: ⑤ **T-b 정점 ②: 수칙의 진짜 뜻** ⟨반전⟩ ⟨ECHO:P27⟩ b4 회수 · 긴장 **9** · gap_after **720**
- size: large · aspect: **9:16**
- camera: ↺EP01 P19 앵글 — 앉은 눈높이 close-up — 칸막이에 붙은 수칙 종이를 정면에서 약간 비스듬히 → 이번 컷: 프레임은 종이의 아래 절반(4번 조각 ~ 맨 아래 7번 자리)
- composition: **위 왼쪽 기억 비네트**(x 4–60%, y 3–30%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP02 panel_027과 같은 각도: 맨 아래 7번 자리를 짚은 그녀의 RIGHT 검지 끝, 비네트 위 1/3은 그 컷처럼 종이 위 초점 밖 어둠. 비네트 오른쪽(x 62–97%, y 3–30%)은 차분한 푸른 어둠. 큰 컷(x 8–86%, y 32–82%): 수칙 종이의 아래 절반 — 위쪽(y 34–42%)에 새하얀 4번 조각과 빨간 테이프 두 줄, 그 아래 빈 모눈 칸 자리들, **맨 아래 7번 자리**(y 70–78%)가 스탠드의 따뜻한 원 한가운데. 오른쪽 아래 귀퉁이 바랜 커피 반원. 아래 18%(x 4–96%, y 82–100%)는 종이 아래 칸막이의 민무늬 회색 철판, 초점 밖, 차분한 그림자.
- characters: SEOHA(비네트 안 손끝만, 바랜 색)
- props: **PROP_RULESHEET**(아래 절반, 빈 모눈, 글씨·번호 없음) · PROP_RING_FADED
- lighting: **LIGHT_REVEAL**(따뜻한 원이 종이를 감싸고 나머지는 차분한 푸른 그림자, 떨림 없음) · 비네트는 바랜 색 · 빨강 = 테이프 두 줄뿐(비네트 안 테이프는 바랜 빨강)
- dialogue_ref (2): ① 서하(기억) memory "누가 퇴근하라고 해도." (비네트 안 위 1/3 → 오른쪽 어둠까지, 흐린 파란 테 — P27 ②와 KM 동일) ② 서하 thought "(7번은… 받아 줄 사람을 지키는 거였어.)" (큰 컷 아래 띠, 구름형, w 60% 이상)
- repeat: 앵글 = EP01 **panel_019** · 기억 비네트 원본 = EP02 **panel_027**(§D)
- attach: _workspace/05_panels/ep02/panel_027.png, _workspace/05_panels/ep01/panel_019.png, refs/PROP_PAGES_pair.png
- fx/note: bubble space: ① 비네트 안 위 1/3 + 그 오른쪽 어둠(x 4–97%, y 3–14%) · ② 아래 띠(x 6–94%, y 83–98%) — 칸막이 철판의 초점 밖 그림자(script: "생각 말풍선은 큰 컷 아래"). 7번 자리(y 70–78%)와 4번 조각은 덮지 않는다. / 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다. P27을 먼저 만든다. 뒤 720px = T-b 침묵(G5).

### panel_038
- scene_id: S03c / location: LOC_L1_DUTYROOM · 당직석 왼쪽 뒤(칸막이 쪽)에서 책상 오른쪽 끝
- beat: ⑤ 동기 · 손이 열쇠로(b2② 변주) · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 서하의 LEFT 어깨 너머(전경 초점 밖)에서 책상 오른쪽 끝과 다가온 재우
- composition: 아래 왼쪽 전경(x 0–30%, y 58–100%) 초점 밖 서하의 LEFT 어깨와 뒷머리(낮은 포니테일). 화면 오른쪽(x 50–88%, 머리 y 32–46%) 한 걸음 다가온 재우, LEFT 손에 서류 A를 든 채(가슴께, 화면 오른쪽), 몸은 빛 가장자리. 그의 **RIGHT 손(은반지)이 처음으로 스탠드의 노란 원 안으로** 들어와 책상 위 열쇠 꾸러미 쪽으로 내려간다(손 x 40–60%, y 62–76% / 열쇠 x 38–54%, y 72–80%, 바인더 곁) — 아직 닿지 않는다. 왼쪽 위로 통유리 창구와 어둑한 복도(옅은 정상 반사), 그의 뒤는 열린 출입문과 어두운 복도. 위 왼쪽(x 3–56%, y 2–32%)은 유리 위쪽 너머 어둑한 복도.
- characters: JAEWOO(FULL + §10-1 '열쇠 쪽 손' 상태 토큰) — `earnest, quiet, determined, eyes still a little wet` · SEOHA(SHORT 뒷모습, 전경 초점 밖)
- props: **PROP_KEYS** · PROP_HANDOVER_A(그의 LEFT 손) · PROP_ROSTER(닫힘) · PROP_LAMP
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER — **이 회차 처음으로 그의 손이 노란 원 안**(몸은 밖) · 빨강 없음
- dialogue_ref (2): ① 전임자 dialogue "내가 도망쳐서 네가 온 거잖아." ② 전임자 dialogue "이번엔 내가 대신 남을게. 넌 올라가." (둘 다 위 왼쪽, 꼬리 ↘ 재우)
- attach: refs/JAEWOO_turnaround.png, refs/JAEWOO_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 왼쪽(x 3–56%, y 2–32%) — 유리 위쪽 너머 어둑한 복도(재우 머리 x 50–88%는 피한다). ①은 위, ②는 그 아래. / R16: 몸은 빛 밖, 손만 원 안. 손이 열쇠에 **아직 닿지 않는다**(P39에서 그녀가 먼저 덮는다).

### panel_039
- scene_id: S03c / location: LOC_L1_DUTYROOM · 손 클로즈업
- beat: ⑤ **두 번째 "아니요"** ⟨ECHO:P22⟩ b2 회수 · 대가 · 긴장 **9** · gap_after 120
- size: small(insert) · aspect: **1:1**
- camera: ↺EP01 P46 — 눈높이 close-up — 손목과 직인 → 이번 컷: 책상 위 열쇠와 두 손, 창구 쪽에서 방 안쪽(서가 벽)을 향해
- composition: [↺EP01 P46 틀] 가운데(x 15–90%, y 32–78%): 왼쪽에서 들어온 서하의 손(머스터드 카디건 소매가 반쯤 덮음, 맨손톱)이 책상 위 열쇠 꾸러미를 **먼저** 손바닥으로 덮었다(x 18–56%, y 46–74%). 오른쪽에서 들어온 재우의 RIGHT 손, 은반지 낀 검지가 한 뼘 앞(x 64–88%, y 40–58%)에서 멈췄다 — 닿지 않는다. 아래(y 78–100%) 책상 유리 상판과 파란 바인더 모서리 일부. 위 28%(y 0–28%)는 초점 밖 어둑한 방 — **위 오른쪽 귀퉁이(x 72–94%, y 3–24%)에 초점 밖 서가 위 시계 05:59**(바늘 모양은 읽히게).
- characters: SEOHA(§10-2 '열쇠를 먼저 덮는 손') · JAEWOO(§10-1 '멈춘 손가락')
- props: **PROP_KEYS** · PROP_CLOCK + `PROP_CLOCK_TIME_0559` · PROP_ROSTER(모서리)
- lighting: LIGHT_L1 + LIGHT_LAMP(두 손과 열쇠가 노란 원 안) + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (1): ① 서하 dialogue "아니요." (짧게, w 25–40%, 꼬리 ← 왼쪽 가장자리 = 그녀 쪽)
- repeat: EP01 **panel_046** 구도(눈높이 손 클로즈업, 가운데 손 위의 손, 위 28%) · 바뀌는 것: 직인 대신 열쇠 — 그녀의 손바닥이 먼저 덮고 은반지 검지가 한 뼘 앞에서 멈춤, 위 오른쪽 귀퉁이 시계 05:59. (EP01 P9의 두 손 구도는 문장으로만 대비, 첨부 안 함)
- attach: _workspace/05_panels/ep01/panel_046.png, refs/HANDCLIFF_ref.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 28% 왼쪽~가운데(x 4–66%, y 3–28%) — 초점 밖 어둑한 방. **시계(위 오른쪽 귀퉁이)는 덮지 않는다.** / P22와 같은 말(KM `ទេ។`). 반지는 그의 RIGHT 검지에만, 그녀 손에 반지 없음. 시계 분침이 12의 오른쪽이면 REGEN. 첨부한 EP01 P46의 직인·인주(빨강)를 따라 그리면 REGEN.

### panel_040
- scene_id: S03c / location: LOC_L1_DUTYROOM · 당직석 곁 투샷
- beat: ⑤ 거절의 근거(안전한 말) · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium two-shot — 옆에서, 허리 위
- composition: 화면 왼쪽(x 6–48%, 머리 y 40–54%) 일어선 서하(작은 키), 서류 A를 두 손으로 그의 손에 돌려준다. 화면 오른쪽(x 50–92%, 머리 y 28–42%) 재우(큰 키), 서류를 받는 손. 서류(x 34–64%, y 58–80%)가 둘 사이 가운데. **두 카디건이 한 화면에:** 헐렁한 머스터드 꽈배기·열림 vs 몸에 맞는 차콜 가는 골지·잠김. 서하는 노란 원 안, 그는 가장자리. 뒤는 초점 밖 서가 어둠. 위 왼쪽(x 3–60%, y 2–36%)은 서가 꼭대기 어둠과 천장.
- characters: SEOHA(FULL + 밤샘) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · JAEWOO(SHORT) — 받아 드는 얼굴 `stunned, the earnest smile faltering`
- props: PROP_HANDOVER_A
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_LAMP_EDGE + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (2): ① 서하 dialogue "제 당직이에요." ② 서하 dialogue "퇴근은… 06시에 할게요." (둘 다 위 왼쪽, 꼬리 ↓ 서하)
- attach: refs/SEOHA_turnaround.png, refs/JAEWOO_turnaround.png, refs/PROP_HANDOVER_pair.png
- fx/note: bubble space: 위 왼쪽(x 3–60%, y 2–36%) — 서가 꼭대기 어둠(재우 머리 오른쪽은 피한다). ①은 위, ②는 그 아래. / 두 카디건이 섞이면 REGEN(character-sheets §10-5). 로맨스 코드(홍조·반짝임) 금지.

### panel_041
- scene_id: S03c / location: LOC_L1_DUTYROOM · 재우 미디엄 클로즈업(출입문 쪽)
- beat: ⑤ 그는 그녀를 안다(F-24 정서) · 긴장 7 · gap_after 240
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이에서 약간 올려다본 medium close-up — 가슴 위
- composition: 가운데(x 16–80%, 머리 y 26–42%) 서류를 아래로 내린 재우(서류 A는 아래 가장자리, x 20–60%, y 82–100%, 늘어진 손에), 코웃음으로 시작해 무너지는 웃음 — 시선이 떨어진다. 몸이 뒤로 반 걸음 물러나는 중: 그의 뒤 열린 출입문 틀과 어두운 복도가 화면 오른쪽 절반(x 56–100%)을 채운다. 얼굴의 한쪽 반만 따뜻한 빛, 몸은 빛 밖으로 빠져나간다. 위 22%(y 0–22%)는 천장과 문틀 위 어둠.
- characters: JAEWOO(FULL) — 표정 ② → ④ `a short dry laugh through his nose collapsing into a fading smile, his gaze dropping away, lips pressed together`
- props: PROP_HANDOVER_A(내린 손, 빈 면)
- lighting: LIGHT_L1 + LIGHT_LAMP_EDGE(빛에서 물러난다) + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (1): ① 전임자 dialogue "…그럴 줄 알았어." (꼬리 ↓ 재우)
- attach: refs/JAEWOO_expressions.png, refs/JAEWOO_turnaround.png
- fx/note: bubble space: 위 22%(x 4–96%, y 2–22%) — 천장·문틀 위 어둠. / 농담이 아니다(유머 없음). 뒤 240px.

### panel_042
- scene_id: S03c / location: LOC_L1_DUTYROOM · VIEW_SIDE(와이드)
- beat: ⑤ **06:00 밤 1 확정**(밸브) · 법칙 ③ · '퇴근' 사슬 · 긴장 5 · gap_after **480**
- size: medium · aspect: **3:4**
- camera: ↺EP02 P26 — 앉은 눈높이 wide (VIEW_SIDE) — 출입문 쪽 끝에서 방을 가로질러 (EP01 P50의 '근경 접이식 의자 + 중경 당직석' 배치를 VIEW_SIDE로 옮김)
- composition: [↺EP02 panel_026 틀] 위 왼쪽(x 6–22%, y 8–22%) 서가 위 숫자 없는 둥근 벽시계, 또렷하게 — **06:00**(짧은 시침 = 바로 아래, 긴 분침 = 바로 위, 세로 일직선). 화면 왼쪽 앞(x 0–30%, y 46–100%) 서가 앞 접이식 의자에 거꾸로 앉은 선임 — **이번엔 눈을 뜨고** 입꼬리만 옅게 웃는다, 팔은 등받이에. 화면 오른쪽 앞(x 50–96%, 머리 y 44–58%) 당직석의 서하(밤샘), 스탠드의 노란 원 안에서 펼친 수첩을 덮는다 — 열쇠 꾸러미는 그녀의 LEFT 손 아래. 종이컵은 같은 자리. 가운데 안쪽 배경: 칸막이의 작은 수칙 종이, 닫힌 크림색 숙직실 문. 오른쪽 가장자리 통유리 창구 너머 복도 — **비었다**(재우 없음. 출입문은 카메라 쪽이라 보이지 않는다). [조건부 LIGHT_0600] 유리 너머 복도 먼 끝의 꺼져 있던 형광등이 떨림 없이 켜져 있다. 위 40%(시계 오른쪽)는 천장 배관과 서가 꼭대기 어둠.
- characters: SEONIM(SHORT) — 표정 ⑤ `a rare faint smile at only the corners of his mouth`(눈 뜸) · SEOHA(SHORT + 밤샘) — 긴장이 풀린 정지 `still, exhausted, quietly relieved`
- props: **PROP_CLOCK** + `PROP_CLOCK_TIME_0600` · PROP_NOTEBOOK(덮는 중) · PROP_PAPER_CUP · PROP_KEYS · PROP_RULESHEET_SMALL · PROP_FOLDING_CHAIR
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_NOFLICKER (+ **LIGHT_0600 조건부**: worldbuilder 승인 시에만 — 반려되면 시계와 선임 대사만으로 간다) · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (2): ① 선임 dialogue "06시 넘었대." ② 선임 dialogue "…퇴근해도 된대." (둘 다 꼬리 ↙ 선임)
- repeat: EP02 **panel_026** 반복(C-2) · 바뀌는 것: 시계 04:40 → **06:00**, 선임 눈 감음 → 눈 뜨고 ⑤ 옅은 미소, 서하 적던 손 → 수첩을 덮음·열쇠를 쥠, (조건부) 유리 너머 복도 끝 등이 켜짐. 카메라·배치·비율은 같다
- attach: _workspace/05_panels/ep02/panel_026.png, refs/SEONIM_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 40% 가운데~오른쪽(x 26–97%, y 2–40%) — panel_026과 같은 자리. **시계 면은 절대 덮지 않는다.** ①은 위, ②는 그 아래(꼬리는 왼쪽 아래 선임으로). / 시계가 세로 일직선이 아니면 REGEN. 농담이 아니다. 뒤 480px.

--- SCENE BREAK --- (S03c → S04a · 장소 동일 L1 · 06:00 직후, 숙직실 문)

### panel_043
- scene_id: S04a / location: LOC_L1_DUTYROOM · VIEW_NAPDOOR(**활짝 열림**)
- beat: ⑥ 노미란이 일지를 덮는다 · F-21 심기 · F-22 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P43 — 눈높이 medium — 문 정면, 문틀이 프레임 안 프레임
- composition: [↺EP01 P43 틀] 화면 가운데(x 25–75%, 머리 y 28–42%) 활짝 열린 숙직실 문틀 앞으로 막 나선 노미란(의상 B: 회색 담요를 어깨에, 비뚤어진 금테 하프림). **이번엔:** 그녀의 한쪽 팔에 검정 코트와 차콜 재킷이 뭉쳐 걸려 있고, 다른 팔 겨드랑이에 방금 탁 덮은 두꺼운 검은 일지를 끼웠다. 그녀 뒤 문틀 너머: 창 없는 좁은 숙직실, 낮은 나무 평상 모서리와 구겨진 회색 담요, 작은 전기난로의 주황 불빛(아래쪽, 작게), **빈 고리의 벽걸이 옷걸이**, **안쪽 벽의 베이지 내선 수화기**(꼬인 줄, 숫자 없는 버튼 — x 58–70%, y 40–56%, 작지만 또렷). 아래 왼쪽 가장자리(x 0–22%, y 74–100%) 당직석 책상 모서리(일지가 있던 자리)와 초점 밖 서하의 머스터드 어깨 끝. 오른쪽 가장자리(x 84–100%, y 36–100%) 초점 밖 선임의 슬레이트블루 어깨 — 두 사람은 서로 보지 않는다. 위 24%는 문틀 위 회백 윗벽.
- characters: MIRAN(FULL 의상 B + §10-3 P43 상태 토큰) — 표정 ⑥ `a trembling forced smile, struggling to stay composed`(말더듬) · SEOHA(어깨 끝만, 초점 밖) · SEONIM(어깨만, 초점 밖, 노미란을 보지 않음)
- props: **PROP_DUTYLOG**(닫힘, 겨드랑이) · **PROP_NAP_HANDSET**(숫자 없음) · VIEW_NAPDOOR 활짝 열림 문장(옷걸이·수화기 포함) · 난로빛(주황, 빨강으로 번지지 않게)
- lighting: LIGHT_L1 + LIGHT_LAMP + 문틀 안 작은 주황 난로빛 + LIGHT_NOFLICKER · 빨강 없음
- dialogue_ref (1): ① 노미란 dialogue "이, 이건 내가 정리할게." (꼬리 ↓ 노미란)
- repeat: EP01 **panel_043** 구도(문 정면·문틀 = 프레임 안 프레임·노미란 자리·위 24%) · 바뀌는 것: 문이 **활짝**, 안쪽 옷걸이·벽 수화기, 팔의 코트·재킷 뭉치, 덮은 일지를 겨드랑이에, 표정 ④ 경악 → ⑥ 억지 침착, 가장자리의 서하·선임
- attach: _workspace/05_panels/ep01/panel_043.png, refs/MIRAN_outfitB.png, refs/MIRAN_expressions.png
- fx/note: bubble space: 위 24%(x 5–95%, y 2–24%) — 문틀 위 민무늬 윗벽. / F-21: 수화기는 설명하지 않고 보이기만 한다(EP07 씨앗). 코트 소매에 팔이 들어가면 REGEN(코트는 팔에 뭉쳐 걸렸다). 금테 하프림(뿔테 금지). 일지 표지에 글씨 없음.

--- SCENE BREAK --- (S04a → S04b · L1 당직실 → L2 앵커 복도 · 06:00)

### panel_044
- scene_id: S04b / location: **LOC_L2_CORRIDOR** · VIEW_ANCHOR_0600
- beat: ⑥ 앵커의 반대: 문이 열린다(관할 종료) · 긴장 5 · gap_after 240
- size: large · aspect: **9:16**
- camera: ↺EP01 P7·P28 — 복도 안 눈높이, 방화문을 정면으로 본 frontal medium — 허리 위
- composition: [↺EP01 P7·P28 `COMP-ANCHOR` 틀] 서하가 화면 가운데(x 25–75%), 머리 y 30–45%, 허리 위까지 — **이번엔 카메라에 등을 보인다**(낮은 포니테일·네이비 머리끈·머스터드 카디건 등, 밤샘 잔머리). 그녀 바로 앞에서 무거운 회색 철제 방화문이 그녀에게서 멀어지며 계단 쪽으로 **열리는 중**(LEFT 손이 가로 밀대를 민다 — 화면 왼쪽). 문 위 가운데(x 50%, y 8–20%)에 숫자 없는 흰 둥근 시계: **정확히 6시 정각**(짧은 시침 = 바로 아래, 긴 분침 = 바로 위, 세로 일직선). LEFT 어깨에 네이비 캔버스 토트백(화면 왼쪽), RIGHT 손(화면 오른쪽, 허리 높이)의 휴대폰이 진동한다 — 화면이 아무것도 없는 흰 빛으로 켜짐. 양옆 연녹 벽과 진녹 띠, 위로 노출 배관. 위 왼쪽(x 3–38%, y 3–26%)은 민무늬 벽과 배관뿐. [선택] 열리는 문틈 너머 계단 위쪽에서 떨어지는 아주 옅은 차가운 회청색 빛.
- characters: SEOHA(§10-2 '방화문을 미는 뒷모습' 상태 토큰 + 밤샘)
- props: PROP_CLOCK + `PROP_CLOCK_TIME_0600` · **PROP_PHONE_BUZZ**(빈 화면의 흰 빛, 아이콘·글자 없음) · 토트백 · 방화문 가로 밀대
- lighting: LIGHT_CORRIDOR(P7·P28과 같은 빛) + 휴대폰 빈 화면의 흰 빛 + LIGHT_NOFLICKER · 빨강 없음(소화전함은 회색)
- dialogue_ref (sfx 2): sfx ① "철컥" (밀대 쪽) · sfx ② "지잉—" (휴대폰 쪽)
- repeat: EP01 **panel_007·panel_028** `COMP-ANCHOR`(카메라 위치·거리·높이, 방화문, 문 위 시계, 위 왼쪽 빈자리) · 바뀌는 것: **VIEW_ANCHOR_0600** — 시계 10:00 → 06:00, 그녀가 정면 → **등을 보임**, 문이 닫힘 → **열림**(그녀가 민다), 휴대폰은 귀가 아니라 손에서 진동(빈 화면이 켜짐)
- attach: _workspace/05_panels/ep01/panel_007.png, refs/SEOHA_turnaround.png, refs/LOC_L2_CORRIDOR_plate.png
- fx/note: bubble space: sfx ① — 밀대 왼쪽 끝 곁 문면(x 4–30%, y 46–60%) · sfx ② — 휴대폰 곁 오른쪽 벽(x 72–96%, y 54–68%). 위 왼쪽(x 3–38%, y 3–26%)은 P7·P28과 같은 빈자리로 남긴다. 시계 면은 절대 덮지 않는다. / 시계가 세로 일직선(06:00)이 아니면 REGEN(10:00·10:10으로 그리면 REGEN). 좌우: 토트백 LEFT 어깨 = 등 뒤에서 보면 화면 왼쪽, 휴대폰 RIGHT 손 = 화면 오른쪽. 22:00 '쿵'(문이 닫힘) ↔ 06:00 '철컥'(문을 연다)은 다른 소리.

--- SCENE BREAK --- (S04b → S05 · L2 → **L3 1층 본관 로비 [신규 장소]** · 06:0x 새벽 — 이 작품 첫 비(非)녹색 화면)

### panel_045
- scene_id: S05 / location: **LOC_L3_LOBBY** · VIEW_L3_INWARD
- beat: ⑥ 밤 밖의 첫 컷(L3 첫 등장) · 긴장 5 · gap_after 40
- size: large · aspect: **9:16**
- camera: 서 있는 눈높이 wide — 유리 정문 바로 안쪽에서 2층 높이 홀 안쪽으로
- composition: 위 32%(y 0–32%) 흰 판 천장과 높은 윗벽, 납작한 사각 천장등(꺼짐). 왼쪽 벽을 따라(x 0–30%, y 32–72%) 허리 높이의 긴 민원 창구 카운터, 그 위 꺼진 검은 표시 면 한 줄, 카운터 가운데 위 높은 벽(x 12–24%, y 26–34%)에 큰 둥근 벽시계(6시 몇 분 — 주인공 아님, 작게). 가운데~오른쪽 남회색 대기 의자 줄(빈 의자). 유리 정문(카메라 뒤)에서 들어온 차가운 푸른 새벽빛이 광택 베이지 석재 바닥에 긴 직사각형으로 홀 안쪽까지 눕는다. 중경 가운데 왼쪽(x 32–56%, y 46–84%) 일지를 겨드랑이에 끼고 카메라(정문) 쪽으로 걸어오는 노미란('A-정돈 중': 코트를 다시 어깨에, 눌린 단발, 구겨진 블라우스). 안쪽 오른쪽 구석(x 76–92%, y 50–68%) 무표시 회색 철문이 열려 있고 작은 서하(머스터드, 토트백)가 나온다.
- characters: MIRAN(SHORT 'A-정돈 중' + §10-3 '일지를 끼고 정문으로') · SEOHA(SHORT + 밤샘 + L3 토트백, 작게)
- props: PROP_DUTYLOG(닫힘, 겨드랑이) · PROP_CLOCK_L3 + `PROP_CLOCK_TIME_DAWN`(작게) · 꺼진 검은 표시 면(글자·숫자 없음)
- lighting: **LIGHT_L3_DAWN**(천장등 꺼짐, 유리 정문의 푸른 새벽빛만, 따뜻한 빛 없음) · 녹색 형광빛 없음 · 빨강 없음
- dialogue_ref (1): ① 서하 dialogue "팀장님!" (꼬리 ↘ 안쪽 오른쪽 구석의 서하)
- attach: refs/LOC_L3_LOBBY_DAWN_plate.png, refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 32% 가운데~오른쪽(x 30–96%, y 3–30%) — 2층 높이 천장과 윗벽(시계 x 12–24%는 피한다). / 새벽 L3는 **비어 있다**(서하·노미란 둘뿐) — Avoid 줄에 `extra people`. 유리 정문 바깥은 깊은 푸른 하늘과 빈 앞마당뿐(간판·차·글자 없음). 표시 면에 숫자·번호표가 생기면 REGEN. L3에 녹색 형광빛·지하 벽색이 생기면 REGEN.

### panel_046
- scene_id: S05 / location: LOC_L3_LOBBY · VIEW_L3_OUTWARD(역광)
- beat: ⑥ 부인 대 기록 · 꼬리 질문 복귀 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium two-shot — 홀 안쪽(계단 철문 쪽)에서 정문 방향, 허리 위
- composition: 먼 벽(y 40–86%)은 푸른 새벽빛으로 빛나는 키 큰 유리 정문 줄. 가운데 오른쪽(x 44–80%, 머리 y 40–52%) 돌아선 노미란, 역광 — 입만 웃는 미소, 일지를 겨드랑이에, 어깨에 걸친 코트의 꼿꼿한 실루엣. 화면 왼쪽 앞(x 0–40%, 머리 y 44–58%) 서하의 옆얼굴 3/4(토트백), 평평한 얼굴. 오른쪽 가장자리(x 84–100%) 긴 카운터의 끝. 바닥의 긴 빛 직사각형이 카메라 쪽으로. 위 38%(y 0–38%)는 유리문 위의 높은 윗벽과 천장 — 푸른 회색 그늘.
- characters: MIRAN(FULL 'A-정돈 중') — 표정 ① `a polite closed-lip smile with cold, unsmiling eyes` · SEOHA(SHORT + 밤샘) — 표정 ⑧ `a flat, polite, deadpan civil-servant face with slightly lowered eyelids`
- props: PROP_DUTYLOG(닫힘)
- lighting: LIGHT_L3_DAWN — 정문 쪽에서 오는 역광, 따뜻한 빛 없음 · 빨강 없음
- dialogue_ref (2): ① 노미란 dialogue "어젯밤엔 아무 일도 없었어. 그치?" (위 오른쪽, 꼬리 ↓ 노미란) ② 서하 dialogue "일지에는 있습니다." (위 왼쪽 조금 아래, 꼬리 ↙ 서하)
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L3_LOBBY_DAWN_plate.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 유리문 위 높은 윗벽·천장의 푸른 회색 그늘. **유리문의 밝은 면(y 40% 아래) 위에는 두지 않는다**(흰 말풍선이 묻힌다). ①은 위(y 2–18%), ②는 그 아래 왼쪽(y 20–38%). / Avoid 줄 `extra people`. 바깥에 간판·차·사람 없음.

### panel_047
- scene_id: S05 / location: LOC_L3_LOBBY · 일지 클로즈업 + 기억 비네트
- beat: ⑥ 지우려 한다 ⟨ECHO:F-22⟩ · F-23 보호 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이에서 약간 내려다본 close-up — 그녀의 팔 위 펼친 일지
- composition: **위 왼쪽 기억 비네트**(x 4–50%, y 4–36%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP01 panel_048에서 **일지 면(빈 줄)과 펜을 쥔 LEFT 손(가는 금색 팔찌시계)만** 잘라 낸 그림: 펜과 손이 쓰는 자리를 가린다, 비네트 위 1/3은 일지 면의 먼 쪽(빈 줄, 초점 밖). 칸막이·당직석·수칙 종이·책상 유리를 짚은 RIGHT 손바닥은 비네트에 **넣지 않는다**. 큰 컷 아래 62%(x 6–94%, y 38–100%): 노미란의 RIGHT 팔뚝 위에 펼친 두꺼운 검은 일지(빈 줄, 글씨 없음), 그녀의 LEFT 손가락(금색 팔찌시계, 누드 손톱, 반지 없음)이 자기 쪽 낱장 가장자리를 꼬집어 찢으려 한다. 위 오른쪽(x 52–97%, y 2–36%)은 초점 밖 푸른 회색 로비의 높은 벽.
- characters: MIRAN(§10-3 손 클로즈업 LEFT 손 + 'A-정돈 중' 소매: 차콜 정장 소매 + 구겨진 아이보리 커프스) · 비네트 안 MIRAN(의상 B 손, 바랜 색)
- props: **PROP_LEDGER_TEAR** · 비네트 안 PROP_DUTYLOG(펼침) · 펜(무지)
- lighting: LIGHT_L3_DAWN(일지 위에 차가운 푸른빛) · 비네트는 바랜 색(EP01 P48의 따뜻한 원도 바랜다) · 빨강 없음
- dialogue_ref (2): ① 노미란(기억) memory "…무단으로…" (비네트 안 위 1/3, 흐린 파란 테 — EP01 P48 ②와 KM 동일) ② 노미란 dialogue "이 한 장이면 끝이야." (위 오른쪽, 꼬리 ↓ 손 쪽 = 노미란)
- repeat: 기억 비네트 — 원본 **EP01 panel_048** 첨부(§D, 크롭 주의)
- attach: _workspace/05_panels/ep01/panel_048.png, refs/MIRAN_turnaround.png, refs/LOC_L3_LOBBY_DAWN_plate.png
- fx/note: bubble space: ① 비네트 안 위 1/3(x 6–48%, y 6–16%) — 일지 면 먼 쪽의 초점 밖 빈 줄(대안: 비네트 오른쪽 바깥 x 52–97%, y 4–14%) · ② 위 오른쪽(x 52–97%, y 16–36%) — 초점 밖 높은 벽. / **F-23 보호(EP19 몫):** 비네트에 칸막이·당직석·수칙 종이·RIGHT 손바닥이 들어가면 REGEN. 일지 면에 글씨가 생기면 REGEN. 비네트 처리 §D — Avoid 줄에서 `panel borders`만 빼고 `extra people`은 넣는다.

### panel_048
- scene_id: S05 / location: LOC_L3_LOBBY · 카운터 앞 옆 투샷
- beat: ⑥ **미니 사이다: 절차가 막는다** · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium two-shot — 옆에서, 가슴 위(배경 = 긴 카운터와 높은 벽)
- composition: 화면 왼쪽(x 4–46%, 머리 y 44–58%) 서하, 똑바로 선 절차 모드 — 한 손은 토트백 끈에. 화면 오른쪽(x 50–94%, 머리 y 40–54%) 더 큰 노미란, 펼친 일지 위에서 손가락이 종이 가장자리를 쥔 채 멈췄다(x 56–80%, y 72–90%), 억지 침착이 굴욕으로 무너진다. 그들 뒤(y 42–80%) 긴 민원 창구 카운터의 간유리 칸막이와 꺼진 검은 표시 면(초점 밖), 화면 왼쪽 가장자리 너머 정문에서 오는 푸른빛이 둘의 옆선을 가늘게 비춘다. 위 40%(y 0–40%)는 카운터 위 높은 회백 벽과 천장 — 푸른 회색 그늘.
- characters: SEOHA(FULL + 밤샘) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · MIRAN(SHORT 'A-정돈 중') — 표정 ⑥ → ⑤ `a trembling forced smile collapsing into humiliation, eyes averted, biting her lower lip`
- props: PROP_DUTYLOG(펼침, 빈 줄) · 꺼진 표시 면(글자 없음)
- lighting: LIGHT_L3_DAWN(옆에서 오는 푸른빛) · 빨강 없음
- dialogue_ref (2): ① 서하 dialogue "가져가시면 반출 기록, 찢으시면 정정 기록이 남습니다." (긴 줄 w 60% 이상, 위에 넓게) ② 서하 dialogue "정정 사유엔… 뭐라고 쓰실 거예요?" (그 아래, w 60% 안팎) — 둘 다 꼬리 ↓ 서하
- attach: refs/SEOHA_expressions.png, refs/MIRAN_turnaround.png, refs/MIRAN_expressions.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 카운터 위 높은 벽·천장의 그늘. ①은 위에 넓게, ②는 그 아래. 표시 면(y 42% 아래)은 피한다. / 미니 사이다는 표정과 정지로만. Avoid `extra people`.

### panel_049
- scene_id: S05 / location: LOC_L3_LOBBY · VIEW_L3_OUTWARD(역광)
- beat: ⑥ 퇴장(굴욕) · 해방형 웃음 한 박자 · 긴장 5 · gap_after 240
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium wide — 홀 안쪽에서 정문 방향, 서하의 등 뒤 약간 옆
- composition: 화면 왼쪽 앞(x 2–44%, y 42–100%) 일지를 가슴에 떠안은 서하의 뒷모습 3/4(토트백 LEFT 어깨, 낮은 포니테일), 막 떠밀려 반 걸음 물러선 자세. 가운데(x 46–68%, y 40–84%) 유리문을 밀고 새벽으로 나가는 노미란의 코트 실루엣 — 키 크고 꼿꼿, 역광. 먼 벽(y 40–88%) 푸른 새벽빛의 유리 정문 줄, 바깥은 깊은 푸른 하늘과 빈 앞마당. 오른쪽(x 72–100%) 긴 카운터의 끝. 위 38%(y 0–38%)는 유리문 위 높은 윗벽과 천장의 푸른 회색 그늘.
- characters: MIRAN(§10-3 '퇴장(역광 실루엣)' 상태 토큰) · SEOHA(뒷모습 + 밤샘 + L3 토트백)
- props: PROP_DUTYLOG(서하 품)
- lighting: LIGHT_L3_DAWN(역광) · 빨강 없음
- dialogue_ref (1): ① 노미란 dialogue "…제자리에 갖다 놔." (꼬리 ↓ 유리문의 노미란 실루엣 — 말풍선은 문 위 그늘에)
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L3_LOBBY_DAWN_plate.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 유리문 위 높은 윗벽의 그늘(밝은 유리 면 위 금지). / 웃음은 '떠밀린 일지'와 자세로만(만화 기호 금지). 바깥에 간판·차·사람 없음. Avoid `extra people`.

### panel_050
- scene_id: S05 / location: LOC_L3_LOBBY · VIEW_L3_CHAIRS
- beat: ⑥ 따뜻한 기준선(이 회차 첫 편한 웃음) · 아이러니 · 긴장 4 · gap_after 40
- size: medium · aspect: **3:4**
- camera: ↺EP01 P6 — 눈높이, 약간 옆에서 medium — 허리 위
- composition: [↺EP01 P6 틀] 서하가 화면 가운데(x 25–75%), 머리 y 40–52% — **이번엔 남회색 대기 의자에 털썩 앉았다**: 무릎 위에 검은 일지와 네이비 리넨 수첩(겹쳐), RIGHT 손으로 휴대폰을 RIGHT 귀에(화면 왼쪽), 화면은 뺨에 붙어 안 보인다. 그녀 주변 빈 의자 줄, 곁 의자에 토트백. 뒤로 의자 줄 너머 높은 회백 벽(EP01 P6의 층참 벽 자리), 바닥에 정문(화면 왼쪽 밖)에서 들어온 푸른 빛 직사각형 줄무늬. 위 40%는 높은 벽의 푸른 회색 그늘.
- characters: SEOHA(FULL + 밤샘 + §10-2 '대기 의자 통화') — 표정 ⑦ `a relaxed, genuinely warm smile with soft eyes`
- props: 휴대폰(무지, 화면 안 보임) · PROP_DUTYLOG(닫힘) · PROP_NOTEBOOK(닫힘) · 토트백(곁 의자)
- lighting: LIGHT_L3_DAWN — 따뜻함은 빛이 아니라 표정(style-bible §3-4) · 빨강 없음
- dialogue_ref (2): ① 지호(전화) dialogue "누나! 밤새 전화 안 되던데. 살아 있어?" (꼬리 → 휴대폰, 화면 왼쪽) ② 서하 dialogue "응. 살아 있어." (꼬리 → 입)
- repeat: EP01 **panel_006** 구도(카메라·서하 자리·위 40%·가장 따뜻한 얼굴) · 바뀌는 것: 장소 L2 층참 → **L3 대기 의자**(기대 선 자세 → 털썩 앉음), 무릎에 일지·수첩, 휴대폰을 귀에, 빛은 푸른 새벽
- attach: _workspace/05_panels/ep01/panel_006.png, refs/SEOHA_expressions.png, refs/LOC_L3_LOBBY_DAWN_plate.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 의자 줄 너머 높은 벽. ①(긴 줄)은 왼쪽 위(휴대폰 쪽), ②는 오른쪽 아래로 엇갈리게. / 아이러니("살아 있어")는 그림이 아니라 말로. 지호는 그리지 않는다. 첨부한 EP01 P6의 계단·난간을 따라 그리면 REGEN. Avoid `extra people`.

### panel_051
- scene_id: S05 / location: LOC_L3_LOBBY · 서하 클로즈업(VIEW_L3_CHAIRS)
- beat: ⑥ 약속이 돌아온다(F-11) · 긴장 6 · gap_after 120
- size: medium(클로즈업) · aspect: **3:4**
- camera: 눈높이 close-up — 얼굴과 휴대폰을 댄 손
- composition: 서하의 얼굴이 가운데~오른쪽(x 26–92%, y 26–90%), 웃음이 굳어 간다 — 눈은 초점 없이 아래로. 화면 왼쪽(x 6–30%, y 36–66%) 그녀의 RIGHT 손과 귀에 댄 휴대폰(무지 연회색 케이스, 화면은 안 보임). 뒤는 초점 밖 빈 의자 줄과 푸른 회색 벽. 위 24%(y 0–24%)는 초점 밖 벽.
- characters: SEOHA(FULL + 밤샘) — 표정 ③ 계열 `blank, unfocused eyes looking down, slack face, as if she has forgotten something`(휴대폰은 귀에)
- props: 휴대폰(화면 안 보임)
- lighting: LIGHT_L3_DAWN · 빨강 없음
- dialogue_ref (1): ① 지호(전화) dialogue "약속 잊지 마! 누나 맨날 까먹잖아." (꼬리 ↓ 휴대폰)
- attach: refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 24% 왼쪽~가운데(x 3–70%, y 2–24%) — 초점 밖 벽(휴대폰 바로 위). / 약속의 내용·요일은 그림에도 없다(달력·시상식 이미지 금지, EP14 보호). Avoid `extra people`.

### panel_052
- scene_id: S05 / location: LOC_L3_LOBBY · 수첩 클로즈업(무릎 위)
- beat: ⑥ **첫 거짓말** ⟨ECHO:E4⟩ F-11 · 긴장 7 · gap_after **720**
- size: large · aspect: **9:16**
- camera: ↺EP01 P5 — close-up, 눈높이보다 약간 위에서 내려다봄
- composition: [↺EP01 P5 `COMP-STICKER` 틀] 서하의 LEFT 손이 네이비 리넨 수첩의 오른쪽 가장자리를 잡고 — **이번엔 무릎 위에 비스듬히 세워** — 든다. 표지 오른쪽 위 귀퉁이의 새 달냥이 스티커(지름 약 폭의 28%)가 화면 가운데(x 40–70%, y 44–60%), 그 위를 LEFT 엄지가 쓰다듬는다. 머스터드 카디건 소매가 손등을 반쯤 덮는다. 수첩 표지가 가운데~아래(y 38–100%)를 채우고 흰 실 제본이 왼쪽에, 아래 가장자리에 그 밑의 검은 일지 모서리. **이번 컷:** 위 오른쪽(x 50–98%, y 4–36%) 고개를 숙여 스티커를 내려다보는 그녀의 얼굴(약간 초점 밖) — 웃는 입, 내리깐 눈가에 맺힌 물기, RIGHT 손이 RIGHT 귀에 댄 휴대폰(얼굴의 화면 왼쪽 가장자리, x 46–58%, y 10–26%). 위 왼쪽(x 3–46%, y 2–32%)은 초점 밖 배경 — 흐린 남회색 의자와 푸른 바닥빛.
- characters: SEOHA(손 클로즈업 상태 토큰 + §10-2 '스티커를 쓰다듬는 엄지' + 얼굴 일부) — 표정 ⑤ 변주 `a smiling mouth, eyes glistening with held-back tears`
- props: PROP_NOTEBOOK(표지, 글씨·로고 없음) · **PROP_STICKER_NEW**(고양이 자신의 LEFT 귀 = 화면 오른쪽 귀가 크다, 황금빛 주황 — 빨강 아님) · 휴대폰(화면 안 보임) · PROP_DUTYLOG(모서리)
- lighting: LIGHT_L3_DAWN — 스티커의 황금빛 주황이 화면에서 가장 채도 높은 색(온기는 스티커와 표정뿐) · 빨강 없음
- dialogue_ref (2): ① 서하 dialogue "응, 당연하지." (꼬리 → 그녀의 입, 위 오른쪽) ② 지호(전화) dialogue "누나, 버텨!" (꼬리 → 휴대폰 — EP01 P7과 KM 동일)
- repeat: EP01 **panel_005** `COMP-STICKER`(카메라·스티커 자리·LEFT 엄지·소매·표지 배치) · 바뀌는 것: 장소 L2 → **L3 새벽**(배경 = 흐린 남회색 의자와 푸른 바닥빛), 수첩은 무릎 위, 다른 손은 휴대폰을 귀에, 위 오른쪽에 숙인 얼굴(웃는 입·물기 어린 눈) — 그래서 빈 띠는 위 왼쪽만
- attach: _workspace/05_panels/ep01/panel_005.png, refs/PROP_STICKERS_pair.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 왼쪽(x 3–46%, y 2–32%) — 초점 밖 의자·바닥빛. ①은 위, ②는 그 아래(꼬리 → 휴대폰, x 50% 근처). **스티커(y 44–60%)와 얼굴은 절대 덮지 않는다.** / 스티커 그림·큰 귀 쪽이 PROP_STICKERS_pair와 같아야 한다. 첫 거짓말은 관할 밖이라 정정되지 않는다 — 그래서 조용한 그림. Avoid `extra people`. 뒤 720px.

--- SCENE BREAK --- (S05 → S06 · 같은 L3 로비, 조명만 다르다 · 09:00 낮 — 클리프행어, 감속 4단, 유머 없음)

### panel_053
- scene_id: S06 / location: LOC_L3_LOBBY · VIEW_L3_DAYWINDOW(넓게)
- beat: ⑦ 일상의 창구 · 열쇠 반납 ⟨ECHO:P31⟩ · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium wide — 민원인 쪽에서 노미란의 낮 창구, 서하의 LEFT 어깨 뒤 약간 옆
- composition: 화면 왼쪽 앞(x 2–42%, y 34–100%) 카운터 앞에 선 서하의 뒷모습 3/4(낮은 포니테일, 머스터드 카디건, LEFT 어깨 토트백 = 화면 왼쪽), RIGHT 손이 카운터 상판에 열쇠 꾸러미를 올려놓는다(열쇠 x 40–54%, y 66–74%). 가운데 오른쪽(x 46–80%, 머리 y 34–46%) 높은 앞턱 뒤 노미란(의상 A 완전 복구 — 코트를 어깨에, 매끈한 단발, 금테 하프림 똑바로), 가슴 위만 보인다, 입만 웃는 미소. **책상 면은 앞턱 아래 프레임 밖.** 그녀 바로 위 높은 벽(x 50–64%, y 3–17%)에 큰 둥근 시계 — **09:00**(짧은 시침 = 왼쪽 9 방향, 긴 분침 = 바로 위, 직각). 그녀 머리 뒤 회백 벽에 꺼진 검은 표시 면(x 46–82%, y 24–30%, 얇게). 양옆 낮은 간유리 칸막이, 오른쪽 가장자리 너머 이웃 창구에 초점 밖 직원 실루엣 몇(x 84–100%, y 36–60%). 연회색 라미네이트 카운터 상판이 아래 1/3을 가로지른다.
- characters: MIRAN(FULL 의상 A) — 표정 ① `a polite closed-lip smile with cold, unsmiling eyes` · SEOHA(SHORT 뒷모습 + 밤샘 + L3 토트백) · L3 엑스트라(character-sheets §10-4 원문, 초점 밖 — 이웃 창구에만)
- props: PROP_KEYS · PROP_CLOCK_L3 + `PROP_CLOCK_TIME_0900` · 꺼진 표시 면(글자·숫자 없음)
- lighting: **LIGHT_L3_DAY**(평평한 낮 백색광, 극적인 그림자 없음) · 빨강 없음(노미란 몸·소지품·책상에 빨강 0)
- dialogue_ref (2): ① 서하 dialogue "열쇠 반납하겠습니다." (위 왼쪽, 꼬리 ↙ 서하) ② 노미란 dialogue "수고했어, 서하 씨." (위 오른쪽, 꼬리 ↓ 노미란)
- attach: refs/MIRAN_turnaround.png, refs/LOC_L3_LOBBY_DAY_plate.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: ① 위 왼쪽(x 3–46%, y 3–26%) — 서하 머리 위 흐린 벽 · ② 위 오른쪽(x 66–97%, y 4–22%) — 시계 오른쪽 윗벽. **시계 면(x 50–64%, y 3–17%)과 표시 면 가장자리는 덮지 않는다.** / R11: 노미란 책상 면과 그 위 물건이 보이면 REGEN(EP03 빨간 롤 보호). 시계 시침이 오른쪽(3시)이면 REGEN. 엑스트라는 카운터 앞 전경·노미란 창구에 오지 않고, 주요 인물의 주색(머스터드·검은 코트·슬레이트블루·차콜 카디건)을 입지 않는다.

### panel_054
- scene_id: S06 / location: LOC_L3_LOBBY · 카운터 상판 클로즈업(부감, 두 손)
- beat: ⑦ 같은 서류가 반대 손에서 ⟨반전⟩ '퇴근' 사슬 반대 방향 · 긴장 8 · gap_after 120
- size: small · aspect: **1:1**
- camera: ↺EP01 P9 — high-angle 약 45° 부감, 책상 와이드 — 회전의자 뒤쪽 위에서, 책상의 좌우 = 앉은 사람의 좌우 → 이번 컷: **L3 카운터 상판**, 민원인 쪽(서하 뒤) 위에서
- composition: [↺EP01 P9 `COMP-DESK`(두 손) 틀] 위 38%(y 0–38%)는 카운터 너머 — 왼쪽은 낮은 간유리 칸막이의 흐린 면, 오른쪽은 초점 밖 노미란의 차콜 정장 상체(가슴 아래, 얼굴 없음). **직원 책상 면은 앞턱과 그녀의 몸에 가려 프레임에 없다.** 가운데~아래 연회색 라미네이트 카운터 상판. 오른쪽 위에서 노미란의 팔이 들어온다(팔꿈치에서 잘림 — EP01 P9의 오른쪽 가장자리 팔 자리): **LEFT 손바닥(가는 금색 팔찌시계, 차콜 정장 소매 + 아이보리 커프스)이 흰 서류를 열쇠 꾸러미 위에 얹은 채 서하 쪽으로 되민다** — 열쇠 꾸러미의 반이 서류 아래로 비어져 나온다. 서류(x 26–74%, y 36–80%, A4 세로, 크게): 굵은 짙은 회색 이중 테두리, 빈 칸 몇, 아래 1/4 안 오른쪽으로 치우친 서명란 두 줄 — **위 줄(인계자) 끝 원 안에 글자 없는 붉은 직인 원**, 아래 줄(인수자)과 그 원은 비었다. 아래 가운데(x 30–60%, y 80–100%) 카운터 앞 가장자리에 놓인 서하의 두 손(머스터드 소매, 받지 않고 멈춤). 왼쪽 아래(x 0–30%, y 72–100%) 위·뒤에서 본 서하의 머스터드 어깨와 토트백 끈(초점 밖) — EP01 P9 서하 자리.
- characters: MIRAN(§10-3 손 클로즈업 LEFT 손 — 의상 A 소매) · SEOHA(손 + 어깨, SHORT)
- props: **PROP_HANDOVER_B** · PROP_KEYS
- lighting: LIGHT_L3_DAY · 빨강 = 서류 B의 직인 원 하나 — 화면에서 가장 강한 색
- dialogue_ref (1): ① 노미란 dialogue "퇴근 전에, 이것만." (꼬리 ↗ 오른쪽 위 = 노미란)
- repeat: EP01 **panel_009** `COMP-DESK`(두 손) 구도(부감, 오른쪽에서 들어오는 노미란 팔, 아래 가운데 서하 두 손, 왼쪽 아래 서하 어깨, 위 38%) · 바뀌는 것: 장소 L1 책상 → **L3 카운터 상판**, 열쇠가 떨어지는 대신 손바닥이 열쇠를 서하 쪽으로 **되민다**, 그 위에 서류 B, 바인더·일지·책상 소품 없음, 서하는 받지 않는다
- attach: _workspace/05_panels/ep01/panel_009.png, refs/PROP_HANDOVER_pair.png, refs/MIRAN_turnaround.png
- fx/note: bubble space: 위 왼쪽(x 3–50%, y 3–30%) — 간유리 칸막이의 흐린 면(노미란 상체 쪽은 피한다). / R17: 붉은 원은 **위 줄**에 **하나**. 원이 아래 줄이거나 둘, 서류에 글씨·서명·제목이 생기면 REGEN. R11: 카운터 너머 책상 면이 보이면 REGEN. 노미란 손에 반지·빨간 네일 없음. 첨부한 EP01 P9의 책상 소품(바인더·일지·인주)을 따라 그리면 REGEN.

### panel_055
- scene_id: S06 / location: LOC_L3_LOBBY · 서하 눈 + 기억 비네트
- beat: ⑦ 알아본다 · 공개 1컷 전 정지(같은 서류, 반대 손) ⟨반전⟩ · 긴장 8 · gap_after **480**
- size: full-bleed(large) · aspect: **9:16**
- camera: 눈높이 close-up — 그녀의 눈, 그리고 그 아래 카운터 위 서류 (비네트 자리 = EP01 P55와 같게)
- composition: **위 왼쪽 기억 비네트**(x 4–64%, y 3–33%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — EP02 panel_034와 같은 각도: 재우가 두 손으로 내민 서류 A(완전한 빈 면, 굵은 이중 테두리, 아래쪽 빈 서명란 두 줄), RIGHT 검지의 은반지, 차콜 니트 + 흰 커프스. **비네트 안에 빨강 없음.** 비네트 오른쪽(x 66–97%, y 3–33%)은 초점 밖 흐린 벽. 가운데 띠(x 6–94%, y 36–58%) 서하의 두 눈(RIGHT 눈 밑 점 = 화면 왼쪽, 밤샘 잔머리), 크게 뜨고 아래를 본다. 아래(x 14–86%, y 62–100%) 카운터 위 서류 B의 위쪽부터 서명란까지 — 비네트의 서류 A와 같은 방향·같은 테두리·같은 두 서명란, **위 줄 원 안의 붉은 직인 원** 하나.
- characters: SEOHA(FULL — 눈 띠) `eyes wide, frozen, looking down, quiet recognition` · JAEWOO(비네트 안 손만, 바랜 색)
- props: 비네트 안 PROP_HANDOVER_A(바랜 색, 빈 면) · 큰 컷 **PROP_HANDOVER_B**
- lighting: LIGHT_L3_DAY(같은 빛 유지 — 긴장은 구도로) · 비네트는 바랜 색 · 빨강 = 큰 컷 서류 B의 직인 원 하나뿐
- dialogue_ref: 없음(무대사)
- repeat: 기억 비네트 — 원본 **EP02 panel_034** 첨부(§D). 비네트 배치는 EP01 P55와 같다
- attach: _workspace/05_panels/ep02/panel_034.png, refs/PROP_HANDOVER_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: silent. / 대조 = 붉은 원 **하나**(R17): 비네트 서류 A에 빨강·접힌 자국이 있거나 두 서류의 테두리·칸 배치가 다르면 REGEN. 비네트 처리 §D — Avoid 줄에서 `panel borders`만 뺀다. P34를 먼저 만든다. 뒤 480px.

### panel_056
- scene_id: S06 / location: LOC_L3_LOBBY · VIEW_L3_DAYWINDOW
- beat: ⑦ 대사 분절 ① · 긴장 9 · gap_after 240
- size: small · aspect: **1:1**
- camera: ↺EP01 P8 — 눈높이 medium wide — 방 안쪽(서가 쪽)에서 창구 벽 방향, 무릎 위 → 이번 컷: **L3 민원인 쪽에서 낮 창구 방향**(노미란은 앞턱 뒤라 허리 위)
- composition: [↺EP01 P8 `COMP-HANDOVER` 틀] 화면 가운데 왼쪽(x 18–55%) 앞턱 뒤의 노미란: 검정 코트를 어깨에만 걸치고(소매가 비어 늘어짐) 카운터 위로 몸을 서하 쪽으로 기울인다, 입만 웃는 미소, 웃지 않는 눈. 화면 오른쪽(x 68–95%) 카운터 앞에 선 서하의 옆모습 3/4(토트백), 노미란 쪽을 본다. 두 사람 머리는 40% 선 아래(y 40–55%). 배경: 양옆 낮은 간유리 칸막이, 노미란 뒤 회백 벽과 꺼진 검은 표시 면의 아래 가장자리(시계는 프레임 위 밖). 카운터 상판에 서류 B와 열쇠(작게, 위 줄 붉은 원). **책상 면은 앞턱 아래 프레임 밖.** 위 40%(y 0–40%)는 노미란 머리 위 회백 벽.
- characters: MIRAN(FULL 의상 A + §10-3 '카운터에 기댐') — 표정 ① `a polite closed-lip smile with cold, unsmiling eyes` · SEOHA(SHORT)
- props: PROP_HANDOVER_B(작게) · PROP_KEYS(작게) · 꺼진 표시 면(가장자리만)
- lighting: LIGHT_L3_DAY · 빨강 = 서류 B의 직인 원(작게)뿐
- dialogue_ref (1): ① 노미란 dialogue "서하 씨," (짧게, 꼬리 ↙ 노미란)
- repeat: EP01 **panel_008** `COMP-HANDOVER` 구도(노미란 가운데 왼쪽·서하 오른쪽, 머리 40% 선 아래, 위 40%, 노미란의 자세·입만 웃는 미소) · 바뀌는 것: 장소 L1 당직실 → **L3 낮 창구**(VIEW_L3_DAYWINDOW), 열쇠를 흔드는 대신 카운터에 기댐, 서하는 문간 대신 카운터 앞
- attach: _workspace/05_panels/ep01/panel_008.png, refs/MIRAN_turnaround.png, refs/LOC_L3_LOBBY_DAY_plate.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 노미란 머리 위 회백 벽(표시 면 가장자리는 피한다). / 대구: EP01 P8(풀네임으로 떠넘김) ↔ 이 컷(`អូន`으로 떠넘김) — 같은 자세가 그것을 말한다. R11. 엑스트라는 이 컷에 넣지 않는다.

### panel_057
- scene_id: S06 / location: LOC_L3_LOBBY · 카운터 상판 클로즈업
- beat: ⑦ 대사 분절 ② — 결정 클리프 ⟨이중의미⟩ ⟨ECHO:EP01 P8 꼬리⟩ · 긴장 9 · gap_after **720**
- size: small · aspect: **1:1**
- camera: high-angle close-up — panel_054와 같은 쪽(민원인 쪽 위)에서 서류 B에 더 가깝게
- composition: 서류 B가 화면 가운데~아래(x 10–90%, y 26–100%)를 크게 채운다: 굵은 짙은 회색 이중 테두리, 빈 칸 몇, 아래 1/4 안 오른쪽으로 치우친 서명란 두 줄 — 위 줄 끝 원 안의 **붉은 직인 원**, 아래 줄은 비었다. 오른쪽 위에서 들어온 노미란의 LEFT 손(금색 팔찌시계, 반지 없음, 누드 손톱)의 검지가 **빈 아래 줄**을 톡 짚는다(x 54–84%, y 72–90%). 서류 밑에 열쇠 꾸러미 일부(아래 왼쪽 가장자리). 위 24%(y 0–24%)는 카운터 너머 초점 밖 간유리 칸막이.
- characters: MIRAN(§10-3 손 클로즈업 LEFT 손)
- props: **PROP_HANDOVER_B**(크게) · PROP_KEYS(일부)
- lighting: LIGHT_L3_DAY · 빨강 = 직인 원 하나뿐(화면에서 가장 강한 색)
- dialogue_ref (1): ① 노미란 dialogue "여기 서명만 해. 그치?" (꼬리 ↗ 오른쪽 위 = 노미란)
- repeat: EP02 **panel_054**와 같은 서류 B·같은 카운터·같은 노미란 LEFT 손(C-2) · 바뀌는 것: 서류 클로즈업, 검지가 아래 줄을 짚는다
- attach: _workspace/05_panels/ep02/panel_054.png, refs/PROP_HANDOVER_pair.png
- fx/note: bubble space: 위 24% 왼쪽~가운데(x 3–66%, y 2–24%) — 초점 밖 간유리 칸막이(손이 들어오는 오른쪽 위는 피한다). / 검지는 **아래 줄**(style-bible §7-5). 서류에 글씨·서명이 생기면 REGEN. 뒤 720px.

### panel_058
- scene_id: S06 / location: LOC_L3_LOBBY · 카운터 상판 클로즈업(세로)
- beat: ⑦ **최종 컷: 결정 1컷 전** · 가리는 것 = 서하의 얼굴 · 긴장 9 · gap_after **1200**
- size: full-bleed · aspect: **9:16**
- camera: high-angle close-up — 서하 쪽 위에서 카운터 위 서류 B와 펜
- composition: 가운데(x 12–88%, y 26–86%) 카운터 위 서류 B 전체(A4 세로, 크게, panel_057과 같은 서류): 굵은 이중 테두리, 빈 칸, 아래 서명란 두 줄 — 위 줄 붉은 직인 원, **빈 아래 줄**(y 76%). 아래 오른쪽에서 들어온 서하의 작은 RIGHT 손(머스터드 소매가 반쯤 덮음)이 무지 볼펜을 쥐고 **빈 아래 줄 위 한 뼘**에서 멈춰 있다(펜 끝 x 60–70%, y 64–70%). 서류 밑으로 열쇠 꾸러미가 비어져 나온다(아래 왼쪽, x 14–34%, y 82–90%). 그녀의 얼굴은 프레임 밖. 위 22%(y 0–22%)는 카운터 너머 초점 밖 간유리 칸막이. 아래 8%(y 92–100%)는 카운터 앞턱의 민무늬 회색 면(그늘진 쪽).
- characters: SEOHA(§10-2 '펜' 상태 토큰 — 손만, 얼굴은 프레임 밖)
- props: **PROP_HANDOVER_B** · PROP_PEN(무지) · PROP_KEYS
- lighting: LIGHT_L3_DAY(같은 빛을 끝까지) · 빨강 = 직인 원 하나뿐
- dialogue_ref (caption): 캡션 narration "— 3화에 계속 —" (패널 맨 아래)
- repeat: EP02 **panel_057**과 같은 서류 B·같은 카운터(C-2) · 바뀌는 것: 노미란 손 대신 서하의 펜 든 손, 서류 밑 열쇠
- attach: _workspace/05_panels/ep02/panel_057.png, refs/PROP_HANDOVER_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 캡션 — 아래 8% 띠(x 0–100%, y 92–100%), 카운터 앞턱의 민무늬 면(style-bible §8 캡션 문장, 가능하면 어두운 회색). 그 밖에는 말풍선 없음. / 펜이 종이에 닿거나 서명·글씨가 생기면 REGEN. 뒤 1200px = 회차 끝.

---

## F. 첨부 사용 요약 (사용자가 Flow에서 붙일 것)

| 카드 | 패널 |
|---|---|
| SEOHA_turnaround | 1·4·5·6·7·9·15·18·21·22·25·26·27·30·35·36·38·39·40·42·44·45·46·49·51·53·55·58 |
| SEOHA_expressions | 4·7·21·22·23·24·29·32·36·48·50·51·52 |
| JAEWOO_turnaround | 2·3·5·6·7·8·9·10·11·12·13·15·17·20·23·24·25·33·34·38·40·41 |
| JAEWOO_expressions | 3·6·9·13·17·19·20·34·38·41 |
| HANDCLIFF_ref | 1·2·14·16·19·39 |
| MIRAN_turnaround | 8·45·46·47·48·49·53·54·56 |
| MIRAN_outfitB | 43 |
| MIRAN_expressions | 43·48 |
| SEONIM_turnaround | 10·11·25·26·28·32 |
| SEONIM_expressions | 28·29·42 |
| PROP_HANDOVER_pair | 15·34·35·40·54·55·57·58 |
| PROP_PAGES_pair | 16·18·21·27·37 |
| PROP_STICKERS_pair | 52 |
| LOC_L1_DUTYROOM_plate | 3·4·5·26·30·31·33 |
| LOC_L1_DESK_plate | 14 |
| LOC_L2_CORRIDOR_plate | 31·44 |
| LOC_L3_LOBBY_DAWN_plate | 45·46·47·49·50 |
| LOC_L3_LOBBY_DAY_plate | 53·56 |
| EP01 패널 PNG (25) | P1←061 · P8←010 · P10←034 · P11←011 · P12←016 · P14←033 · P16←019 · P18←058 · P19←063 · P20←063 · P24←049 · P27←057 · P28←021 · P29←020 · P32←015 · P33←042 · P37←019 · P39←046 · P43←043 · P44←007 · P47←048 · P50←006 · P52←005 · P54←009 · P56←008 |
| EP02 패널 PNG (8) | P2←001 · P23←005 · P35←034 · P37←027 · P42←026 · P55←034 · P57←054 · P58←057 |

- 모든 패널 3장 이내. 2장 컷: P12·P13·P17·P22·P30·P31·P36·P41·P51·P57. 첨부 없는 컷 없음.
- EP01 PNG가 아직 없을 때(EP01 = WAITING_FOR_IMAGES): 반복 컷은 그 줄을 빼고 문장만으로 만들 수 있지만, **비네트 4컷(P8·P10·P20·P47)은 원본이 생긴 뒤에만** 만든다(style-bible §11-1).

## G. 자가 점검

- [x] 패널 58 = 대본 P01–P58, panel_001–panel_058 연속 3자리, 순서 동일
- [x] 모든 패널에 scene_id / location(LOC_* + VIEW), size · aspect, camera, composition, characters + 표정, props, lighting/빨강, dialogue_ref, attach, fx/note
- [x] 같은 scene_id = 같은 장소·시간대(장소가 바뀌는 S03·S04는 a/b/c로 나눔), 장소·시각 전환마다 SCENE BREAK(8곳)
- [x] 비율: 3:4 × 35 · 9:16 × 13 · 1:1 × 10 = style-bible §4-3 그대로, EP01 반복 짝은 원본과 같은 비율(예외 P37 — 앵글만 빌림)
- [x] 대사·효과음·캡션이 있는 56컷 모두 `bubble space:` 기재(효과음만 P2·P30·P44, 캡션 P58), 무대사 2컷(P3·P55)은 `silent`. 말풍선 수 = 대본(패널당 대사 ≤2, P10만 + 기억 효과음 1)
- [x] 글이 적힐 물건은 전부 빈 면, 주인공 컷(P14·P16·P18·P27·P34·P35·P37·P39·P43·P47·P54·P57·P58)은 크게. 휴대폰은 빈 화면(P44 빛만), 시계는 숫자 없음
- [x] EP01 구도 반복 21컷 + 비네트 4컷 = EP01 PNG 25장 첨부, `camera:` 줄 원문 그대로, 바뀌는 것은 `repeat:`에. EP02 안 반복 6쌍 + 비네트 2
- [x] 비네트 6컷(P8·P10·P20·P37·P47·P55) = Flow가 한 장에 그리는 기억 그림, 원본 PNG 첫 자리 첨부, 대안 경로 명시, P47 크롭 보호(F-23)
- [x] 반전 컷: T-a P3(9:16 무대사) · T-b P34(9:16)·P36·P37(9:16, 720) · 클리프 감속 P54 → P55(480) → P56(240) → P57(720) → P58(1200)
- [x] 빨강 세 범주 외 0(롤은 P25에서 사라짐, 서류 B 원은 위 줄 하나, 노미란 쪽 0), 좌우 표식(재우 반지 RIGHT 검지 · 서하 점 RIGHT 눈 밑 · 선임 흉터 LEFT 눈썹 · 노미란 시계 LEFT 손목) 명시
- [x] 시계 6컷 바늘(04:40 · 05:56 · 05:57×2 · 05:59 · 06:00×2 · 09:00) = style-bible §7-5 문장, 시계 면 위 말풍선 금지
- [x] 첨부 패널당 3장 이내, L3 플레이트 이름 = `_DAWN_` / `_DAY_`(ref_prompts.md 실제 이름)

## H. 하류·상류 전달 (팀 메시징 대체)

| 대상 | 내용 |
|---|---|
| **letterer** | `bubble space:`를 `art_space`(한국어 그대로 가능)로, 말풍선 위치를 `place`로 옮긴다. `gap_after`는 각 패널 beat 줄의 값(= 대본 메타 줄과 같다). **긴 말풍선(w 60% 이상)** 자리를 그 폭으로 잡아 두었다: P7 ② · P28 ②(위 띠 + 원경 오른쪽) · P29 ② · P35 ① · P36 · P37 ②(**아래 띠** — 대본 지시) · P48 ①②. **기억 말풍선 7:** P1×2(위 28%, 꼬리 위쪽 밖) · P8 · P10 · P20 · P37 · P47(비네트 안 위 1/3). **화면 밖 꼬리:** P1(위) · P12(위 = 서하) · P14(오른쪽 = 재우) · P16·P27·P35(왼쪽/왼쪽 아래 = 서하) · P31(방화문 쪽) · P32(오른쪽 = 계단 쪽, VIEW_A) · P50–P52(휴대폰) · P54·P57(오른쪽 위 = 노미란). P27 두 말풍선은 작은 소리(작게). P44 효과음 둘은 밀대 곁·휴대폰 곁. P58 캡션은 아래 8% 띠. L3에서는 유리문의 밝은 면 위에 말풍선을 두지 않는다 |
| **prompt-smith** | style-bible §5-1 조립 순서. 반복 컷은 EP01 원본 프롬프트(`ep01_prompts.md`)의 카메라·구도 문장을 그대로 붙이고 `repeat:`의 "바뀌는 것"만 고친다(원본 PNG를 attach 첫 자리에). **P33은 EP01 P42의 좌우 대칭판**이라 "mirror the attached panel's layout left to right"를 적는다. 첨부 원본에 없어야 할 것이 있는 컷(P12 물, P24 유리·구정민, P32 구정민 어깨, P39 직인·인주, P50 계단, P54 책상 소품)은 그것을 그리지 말라는 구절을 넣는다. 비네트 6컷은 Avoid에서 `panel borders`만 뺀다. 새벽 L3(P45–P52)는 Avoid에 `extra people`. 빨강이 있는 컷은 "the only red in the image is …"(각 패널 lighting 줄). `LIGHT_NOFLICKER`는 P30–P33 필수. `LIGHT_0600`(P42)은 조건부. 시계 컷은 §7-5 바늘 문장 |
| **art-director** | ① **P26·P42**: beatsheet의 ↺EP01 P50을 VIEW_SIDE 와이드로 옮기고 EP01 panel_050은 첨부하지 않았다(VIEW_C는 시계가 카메라 뒤 — style-bible §5-5·§6-2-1과 같은 판단). ② **P24**: EP01 P49의 프레임을 VIEW_SIDE 축으로(그녀 뒤에 칸막이가 오려면 이 축뿐). ③ **P33**: EP01 P42를 좌우 대칭으로(출입문이 그녀의 오른쪽). ④ **P39**: 시계를 위 오른쪽 귀퉁이에 초점 밖으로 넣었다(R10 시계 인셋 대신). ⑤ **P23**: P5와 같은 구도의 EP02 안 짝을 새로 만들었다(질문 ↔ 약속). ⑥ **P52**: COMP-STICKER 틀에 숙인 얼굴(웃는 입·물기 어린 눈)을 위 오른쪽에 더했다(대본 "웃는 입, 물기 어린 눈"). 이견이 있으면 해당 패널만 고친다 |
| **리더(Flow 핸드오프)** | 만드는 순서: EP01 원본(반복·비네트에 쓰는 25장)이 먼저 — EP01은 아직 WAITING_FOR_IMAGES. EP02 안에서는 P1→P2 · P5→P23 · P26→P42 · P27→P37 · P34→P35·P55 · P54→P57→P58(번호 순서대로면 자연히 지켜진다). 비네트가 두 번 시도에도 안 되면 대안(빈자리 + 합성)은 사용자 결정. **시계 인셋(R10 선택)은 만들지 않기로 했다**(§D). `LIGHT_0600`은 worldbuilder 확인 전 조건부 |

## I. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-18 | 최초 작성: 58패널, 비율 3:4×35 · 9:16×13 · 1:1×10, EP01 구도 반복 21컷 + 비네트 6컷(EP01 원본 4 · EP02 원본 2), EP02 안 반복 6쌍, bubble space 56컷 + silent 2. 앞서 멈춘 실행의 미완성 머리말(`ep02_shotlist.PARTIAL.md`)을 입력과 대조해 다시 썼다: 날짜, P33 비율 문구, P39 시계 귀퉁이, P52 얼굴, camera 줄 원문 규칙, P23 짝 추가, 시계 인셋 결정, L3 플레이트 실제 이름 |
