# EP01 샷리스트 「독은 제가 먼저 먹겠습니다」 (KM «ថ្នាំពុល ខ្ញុំសូមភ្លក់មុន») — panel-director

- 작성: panel-director · 기준일 **2026-11-17** · EP01 Phase 4 step 3 · **v1** (Flow-by-hand + Khmer edition)
- 입력: `03_episode/ep01_script_final.md`(60패널 최종) · `03_episode/ep01_beatsheet.md`(§3 시간 큐 · §4 글자 없는 소품 · §5 말풍선 자리 · §6-3 여백) · `04_visual/style-bible.md` v1(§2-4 예약색 · §3 LIGHT · §4 비율 · §4-3 카메라 · §5-3 고정 앵글 · §6 LOC/VIEW · §8 말풍선 공간) · `04_visual/character-sheets.md` v1(FULL/SHORT/상태 토큰 · 표정 번호 · §7 소품 타임라인 · §8-3 첨부) · `webtoon-khmer-edition` §4
- 다음 독자: **letterer**(`art_space` → lettering spec의 `art_space` · `place`, `gap_after`) → **prompt-smith**(Flow 프롬프트 · `attach`) → 사용자(Flow) → panel-validator
- 총 **60패널** (panel_001–panel_060 = 대본 P01–P60, 번호 · 순서 동일). 하한 50 충족. 팀 메시징 없는 실행이라 전달 사항은 끝의 §H에 모았다.

## 읽는 법

- **좌우:** `화면 왼쪽/오른쪽` = 화면 기준. `LEFT/RIGHT`(대문자) = 인물 · 사물 **자신의** 좌우(style-bible 표기). 정면 그림에서 민 상궁의 LEFT 관자놀이 흰 머리는 화면 오른쪽에 보인다.
- **좌표:** `x`/`y` = 패널 왼쪽 위에서 잰 % (x 가로, y 세로). 근사치다.
- **`art_space`:** 그 컷에서 **그림이 조용한 배경으로 비워 둘 자리**(뷰어가 크메르어 말풍선을 그 위에 그린다). 얼굴 · 손 · 은침 · 그릇 테두리 · 손수건 · 노리개 · 당번 판 · 등롱은 그 자리에 두지 않는다. 대사 · 생각 · 효과음이 있는 **50패널 모두** 기재. 무대사 10패널은 `silent`(단 고정 앵글 반복 컷은 원본과 같은 자리를 비운 채 둔다).
- **Khmer edition:** 어떤 이미지에도 글자 · 숫자 · 말풍선 · 가짜 글씨 · 한자 문양이 없다. 글이 적힐 만한 물건 — **당번 판 · 당번 패 · 서랍 이름표 · 등롱 · 병풍 · 그릇** — 은 **빈 면**(BLANK)으로 그린다. EP01에는 물건 위 글씨(`env`)가 없다.
- **characters:** 가장 크게 보이는 1명 = **FULL**, 나머지 = **SHORT**, 손 · 뒷모습 · 실루엣 = 상태 토큰. 표정은 character-sheets 번호(예: 채령 ④)와 그 영문 문장.
- **time/light:** style-bible §3-2 LIGHT 토큰 이름. prompt-smith가 영문 원문으로 펼친다.
- **repeat:** 고정 앵글 반복. 짝 패널의 `camera` · `composition` · `art_space`는 같은 문장이다. 바뀌는 것만 `repeat:` 줄에 적었다. 반복 컷 카드에는 원본 PNG를 첨부하고 **다시 그린다**(PNG 복사 금지 — flow_tool은 md5 중복을 거른다).
- **attach:** 사용자가 Flow에 붙일 이미지(패널당 3장 이내). `refs/…` = 레퍼런스 카드, `panel_NNN.png` = `_workspace/05_panels/ep01/`의 먼저 만든 원본 패널.

### 예약색 규칙 (연보라 · 은맹색 `#C9B6E4`) [고정]

- **연보라는 네 패널뿐: panel_008 · panel_016 · panel_029 · panel_050.** 해당 패널에만 `lilac:` 줄이 있다.
- 그 밖의 56패널은 보라 · 바이올렛 · 라벤더 · 라일락 · 모브 **0**(의상 · 꽃 · 밤하늘 · 노을 · 그림자 · 손끝 재 얼룩 포함). 밤 = deep navy-blue, 노을 = orange/amber.
- 손수건 얼룩(PROP_HANKY_STAIN)은 **P08 · P50만**. 나머지 민 상궁 컷은 PROP_HANKY_CLEAN(얼룩 모서리가 안쪽으로 접힘) 또는 손수건이 안 보인다.
- 민 상궁 당의는 `deep wine-red plum (dark mulberry, almost burgundy)`이지 보라가 아니다.

---

## A. 장소 목록 (scene_id ↔ LOC ↔ VIEW ↔ 배경 한 줄)

| scene_id | 패널 | location | 주 VIEW | 시간 · 조명 | 배경 한 줄 |
|---|---|---|---|---|---|
| S01 | P01–P04 | LOC_L1_TASTING | VIEW_L1_MAIN | 1일째 아침 · LIGHT_L1_MORNING | 왕자 처소 시식방: 화면 왼쪽 창호지 미닫이(빛), 장판, 무지 병풍, 오른쪽 벽 미닫이 문, 가운데 옻칠 **아침상**, 앞 모서리 놋 향로 |
| S02 | P05–P12 | LOC_L2_CORRIDOR | VIEW_R | 1일째 아침 · LIGHT_L2_MORNING | 숙소 앞 회랑: 화면 왼쪽 1/3 기준 기둥 + 빈 당번 판, 기둥 오른쪽 처마의 꺼진 등롱, 오른쪽 흰 회벽 + 창호지 문, 왼쪽 안마당 · 기와 |
| S03 | P13–P32 | LOC_L1_TASTING | VIEW_L1_MAIN · VIEW_L1_DOOR · VIEW_L1_TABLE | 2일째 한낮 · LIGHT_L1_NOON | 같은 시식방(구조 동일), 한낮 꿀빛 · 짧은 그림자, **점심 수라상**(난초 봉오리 손잡이 왕자 국그릇) |
| S04 | P33–P42 | LOC_L3_HERBSTORE | VIEW_L3_MAIN · VIEW_L3_GAP | 2일째 오후 · LIGHT_L3 (P39–P40 LIGHT_L3_DOOR) | 봉해진 약재고: 오른쪽 벽 전체 서랍장(빈 흰 이름표), 왼쪽 뒤 높은 창의 빛줄기 · 먼지, 가운데 작업대, 왼쪽 벽 문 |
| S05 | P43–P47 | LOC_L2_CORRIDOR | VIEW_R 근사 · 원경(P43) | 2일째 저녁 · LIGHT_L2_EVENING (P47 LIGHT_L2_DUSK) | 같은 회랑, 주황 노을이 기와에, 긴 그림자 → P47 등롱이 하나둘 켜짐 |
| S06 | P48–P60 | LOC_L2_CORRIDOR | VIEW_R(P48) · R-HAND(P50) | 2일째 밤 · LIGHT_L2_NIGHT (+ LIGHT_LANTERN_FACE) | 같은 회랑, 짙은 남청 밤, 켜진 등롱 하나의 주황빛, 차가운 달빛. 구조 · 소품 위치는 아침과 같다 |

- 같은 scene_id 안에서는 같은 LOC 문장 + 같은 LIGHT 토큰을 쓰고 컷마다 VIEW 문장만 바꾼다. 장소 전환은 `--- SCENE BREAK ---`에서만.
- S01 → S03은 **같은 방 · 같은 구조**, 다른 빛 · 다른 상(하루 점프 큐, beatsheet §3). S02 · S05 · S06은 **같은 회랑 · 같은 구조**, 빛만 아침 → 저녁 → 밤.
- 새 LOC 필요 없음(art-director 추가 요청 없음).

## B. 비율 · 크기

| size | Flow aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed (TALL) | **9:16** | P01 · P05 · P13 · P23 · P25 · P29 · P31 · P33 · P39 · P43 · P47 · P48 · P53 · P57 · P60 | **15** |
| small / insert (SQ) | **1:1** | P06 · P08 · P09 · P11 · P14 · P15 · P16 · P20 · P21 · P22 · P28 · P30 · P35 · P50 · P51 · P56 · P59 | **17** |
| medium (STD) | **3:4** | 나머지 (P02 · P03 · P04 · P07 · P10 · P12 · P17 · P18 · P19 · P24 · P26 · P27 · P32 · P34 · P36 · P37 · P38 · P40 · P41 · P42 · P44 · P45 · P46 · P49 · P52 · P54 · P55 · P58) | **28** |

- style-bible §4-1 권장 배정을 따랐고 **한 곳만 바꿨다: P13 3:4 → 9:16.** 이 회차 유일한 3풍선 패널이고 하루 점프 큐(수라상 · 문가 감찰 · 새 향 · 홍 숙수)를 한 컷에 다 담아야 해서 세로 공간이 필요하다(style-bible §11 열린 항목 해결).
- 고정 앵글 짝은 같은 비율: P05 = P48 (9:16) · P08 = P50 (1:1) · P04 = P24 (3:4). R 메아리 P58은 P05의 손 동작만 메아리라 3:4.
- 16:9 패널 없음. Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데에 모은다(`art_space` 비율 위치는 그대로).

## C. 고정 앵글 반복 — 원본 → 반복

| ID | 원본 | 반복 | 비율 | 같아야 하는 것 | 반복 컷에서만 바뀌는 것 |
|---|---|---|---|---|---|
| **R-WIDE** | **panel_005** | panel_048 | 9:16 | VIEW_R 전부: 카메라 · 거리 · 높이, 화면 왼쪽 1/3 기둥(x 22–34%), 기둥의 빈 당번 판(y 48–60%), 기둥 오른쪽 처마 등롱(x 36–44%, y 10–22%), 오른쪽 숙소 문들, 왼쪽 안마당 · 기와, `art_space`(오른쪽 위 회벽 · 처마 밑) | 빛 아침 → 밤(등롱 켜짐) · 인물: 상궁 + 채령(댕기) → 상궁 혼자 손을 닦음 · 연두 끈 패: 위 줄 → 가운데 줄 |
| **R-HAND** | **panel_008** | panel_050 | 1:1 | 상궁의 두 손이 화면 가운데(y 45–88%), 연청 손수건으로 손가락을 닦는 같은 동작, 얼룩 모서리 = 화면 오른쪽 아래(x 66–76%, y 74–84%) · 손가락 한 마디 크기 · 같은 연보라, 자두색 소맷부리, 위 38%의 흐린 배경 | 빛만: 아침의 맑은 빛 → 등롱 주황빛 + 남청 그림자 |
| **M1 포즈** | **panel_004** | panel_024 | 3:4 | 왕자 미디엄 정면, 숟가락을 내려놓고 그릇을 두 손으로 들어 테두리에 입을 대는 같은 포즈 · 크기 · 위치(x 28–68%, y 38–80%), 채령은 화면 오른쪽 가장자리, 위 38% 창호지 · 병풍 | 빛 아침 → 한낮 · 아침상 → 수라상(열린 난초 뚜껑이 상 위) · 왕자 ③ → ④ · 채령 ② → 굳은 얼굴 · 향 다 탐 |
| **R 메아리** | **panel_005** | panel_058 | 9:16 → 3:4 | 상궁이 채령의 붉은 댕기를 고쳐 매는 같은 손 동작, 채령 고개를 조금 숙임, 기둥이 화면 왼쪽, 오른쪽 위 조용한 자리 | 와이드 → 미디엄 · 아침 → 밤 · 손수건 안 보임(소매 속) · 채령 ⑧ |

- **만드는 순서:** 원본(P04 · P05 · P08)을 반복 컷(P24 · P48 · P50 · P58)보다 먼저. 번호 순서대로 만들면 자연히 지켜진다.
- 반복 컷은 원본과 **같은 `art_space`를 비운다**(P48 · P50은 무대사지만 원본 구도를 지키기 위해 같은 자리를 그대로 조용하게 둔다).

## D. 리듬 · 여백 (letterer `gap_after` 제안)

| 위치 | 제안 | 이유 |
|---|---|---|
| P12 뒤 | 240 | 하루 점프(beatsheet §3) |
| P24 뒤 | 240 | 향 만료 → 결단 직전 정지 |
| P47 뒤 | 400 (가장 긺) | 가짜 해소 최저점 → 밤 |
| P55 뒤 | 240 | 주력 반전 후 숨 |
| P60 뒤 | 320 | 회차 끝, 캡션 뒤 |
| P20 → P23 | 0–20 | 미니 반전 연쇄(빠르게) |
| P49 → P53 | 0–20 | 주력 반전 연쇄. 그 밖은 기본 40 |

---

## E. 패널

--- SCENE BREAK --- S01 · LOC_L1_TASTING · 1일째 아침 · LIGHT_L1_MORNING

### panel_001
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ① 콜드 오픈 — 직업 = 목숨 = 아이 보호 선언 ⟨복선: 제목 동사⟩ · 긴장 6 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 1일째 아침 · LIGHT_L1_MORNING (낮고 옅은 빛이 화면 왼쪽 창호지로, 그림자 길고 옅음)
- camera: 무릎 꿇은 사람의 눈높이(낮게), medium wide, 상 건너편을 비스듬히
- composition: 위 30%(y 0–30%)는 화면 왼쪽의 빛나는 창호지 미닫이 윗부분과 뒤의 무지 크림 병풍 윗면 — 비워 둔다. 왕자는 상 건너편 방석에 화면 가운데~왼쪽(x 22–48%, 머리 y 38–50%), 카메라를 향해 움츠림, 곁 방석 위 나무 호랑이. 채령은 상의 화면 오른쪽 옆에 무릎 꿇음(x 55–90%, 머리 y 34–46%, 무릎 y 85%), 곧은 등, 오른손에 놋 숟가락. 앞쪽 아래: 놋 향로(새 향 한 대, 가는 연기 한 줄), 은침 받침, 흰 기미 그릇 — 셋이 한 화면에. 아침상은 작고 놋그릇 몇 개
- characters: CHAERYEONG(FULL, 무릎 꿇음 상태 토큰, 표정 ①) · PRINCE(SHORT, 방석에 앉음 상태 토큰, 표정 ①)
- emotion: 차분한 각오 vs 겁먹은 아이 — 조용한 긴장
- props: PROP_TABLE_BREAKFAST · PROP_SPOON · PROP_CENSER + PROP_INCENSE_NEW · PROP_NEEDLE_STAND · PROP_TASTER_DISH · PROP_TIGER(깨진 귀 강조 없음) · PROP_NORIGAE(RIGHT 허리 = 화면 쪽 노출 확인)
- dialogue_ref (2): ① 채령 dialogue "독이면 제가 먼저 죽습니다." / ② 채령 dialogue "그게 제 일이에요." (둘 다 꼬리 ↘ 채령)
- art_space: **위 28% 전체(x 5–95%, y 2–28%), 특히 오른쪽 위** — 창호지 윗부분 · 무지 병풍. 두 인물의 머리는 y 34% 아래. 연기 줄은 y 30% 아래에서 끝나게
- attach: refs/CHAERYEONG_turnaround.png, refs/PRINCE_turnaround.png, refs/LOC_L1_TASTING_plate.png
- fx/note: 병풍 · 그릇 · 향로 무지(한자 문양 금지). 숟가락은 놋(은 아님 — 은침과 혼동 방지).

### panel_002
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (향로 쪽으로 더 가깝게)
- beat: ① 절차 각인 — 향 점화, 국자 = 가운데 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 1일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이, medium, 향로를 전경에
- composition: 앞쪽 왼쪽 아래(x 5–35%, y 55–95%) 놋 향로에서 쑥 향 한 줄 연기가 위로. 중경 오른쪽(x 40–90%) 채령이 작은 놋 국자로 국그릇 **정가운데**에서 떠 흰 기미 그릇에 덜어 입에 댄다 — 국자 끝이 테두리에 닿지 않고 가운데에만. 왕자는 뒤 흐림
- characters: CHAERYEONG(FULL, 표정 ①) · PRINCE(SHORT, 흐림)
- emotion: 의식 같은 정확함
- props: PROP_CENSER + PROP_INCENSE_NEW · PROP_SMALL_LADLE(가운데만) · PROP_TASTER_DISH · PROP_TABLE_BREAKFAST
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/CHAERYEONG_turnaround.png, refs/PROP_TABLEWARE.png
- fx/note: ④ 미니 반전의 전제(국자 = 가운데). 연기는 가는 한 줄, 모양 만들지 않음.

### panel_003
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ① 향 만료 · 무사 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 1일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이, 왕자 쪽 two-shot + 향 꽁초를 전경 인서트처럼
- composition: 앞쪽 왼쪽 아래(x 5–32%, y 62–95%) 향로의 꽁초에서 재가 막 떨어짐(전경, 선명). 중경 가운데(x 30–65%, 머리 y 34–48%) 왕자의 어깨가 풀리고 호랑이 쥔 손이 느슨해짐. 채령은 화면 오른쪽(x 68–96%) 무릎 꿇고 멀쩡하게 왕자를 향함
- characters: PRINCE(FULL, 표정 ②) · CHAERYEONG(SHORT, 표정 ①)
- emotion: 안도
- props: PROP_INCENSE_STUB · PROP_TIGER · PROP_TABLE_BREAKFAST
- dialogue_ref (1): ① 채령 dialogue "드셔도 됩니다, 왕자 마마." (꼬리 ↘ 화면 오른쪽 채령)
- art_space: **위 24%(x 5–95%, y 2–24%)** — 창호지 윗부분과 병풍. 왕자 머리 y 32% 아래
- attach: refs/PRINCE_expressions.png, refs/CHAERYEONG_turnaround.png, refs/PROP_KEEPSAKES.png
- fx/note: 향 타이머 1회차 끝.

### panel_004
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ① 귀여운 이완 ⟨복선 M1⟩ · 긴장 5 · gap_after 120
- size: medium · aspect: **3:4**
- time/light: 1일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이, 왕자 정면 medium (상 건너편에서 카메라를 향함)
- composition: [M1 원본] 왕자(x 28–68%, y 38–80%)가 숟가락을 상에 내려놓고 **놋 국그릇을 두 손으로 들어 테두리에 입을 대고** 마신다 — 그릇 테두리와 입이 또렷이. 화면 오른쪽 가장자리(x 78–100%, y 42–90%) 채령의 옆모습이 난감하게 웃음. 위 38%는 창호지 · 무지 병풍
- characters: PRINCE(FULL, M1 포즈 상태 토큰, 표정 ③) · CHAERYEONG(SHORT, 표정 ②)
- emotion: 귀여움 · 이완 (재독 시 서늘)
- props: PROP_TABLE_BREAKFAST · PROP_SPOON(상 위에 내려놓음) · PROP_TIGER(방석 위)
- dialogue_ref (2): ① 채령 dialogue "숟가락으로 드셔야지요." (위 오른쪽, 꼬리 ↘ 채령) / ② 왕자 dialogue "이게 더 맛있어." (위 왼쪽 조금 아래, 꼬리 ↓ 왕자)
- art_space: **위 38%(x 3–97%, y 2–38%)** — 창호지 윗부분 · 무지 병풍. 왕자 머리 꼭대기 y 40% 아래
- repeat: M1 **원본** → panel_024
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png, refs/CHAERYEONG_expressions.png
- fx/note: 유머 컷 — SD · 만화 기호 없이 표정과 몸짓으로만.

--- SCENE BREAK --- S02 · LOC_L2_CORRIDOR · 1일째 아침 · LIGHT_L2_MORNING

### panel_005
- scene_id: S02 / location: LOC_L2_CORRIDOR · VIEW_R
- beat: ② 일상 · 온기 ⟨기준 앵글 R⟩ · 긴장 5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 1일째 아침 · LIGHT_L2_MORNING (연청 하늘, 흰 회벽, 낮은 해 · 긴 그림자, 등롱 꺼짐)
- camera: [R-WIDE] 회랑에 선 눈높이, 복도를 약간 비스듬히 따라 보는 와이드
- composition: [R-WIDE 원본] 화면 왼쪽 1/3(x 22–34%) 둥근 황토 기둥이 화면을 세로로 가름, 기둥의 카메라 쪽 면 가슴 높이(y 48–60%)에 **빈 당번 판**(연두 끈 패 = 위 줄). 기둥 바로 오른쪽 처마 들보(x 36–44%, y 10–22%)에 **꺼진** 흰 등롱. 오른쪽으로 흰 회벽 + 창호지 문 3~4개가 멀어짐. 왼쪽 기둥 너머 안마당 · 맞은편 기와. 중경 기둥 오른쪽(x 40–75%, y 45–90%) 민 상궁(3/4)이 채령(뒤 3/4, 고개 조금 숙임)의 땋은 머리 끝 붉은 댕기를 고쳐 맴. **오른쪽 위(x 48–96%, y 3–24%)는 조용한 흰 회벽과 처마 밑면**
- characters: MIN(FULL, 댕기를 고쳐 맴 상태 토큰, 표정 ②) · CHAERYEONG(SHORT, 댕기를 고쳐 매임 상태 토큰)
- emotion: 따뜻함 · 안심
- props: PROP_DUTYBOARD(빈 판 · 빈 패, 연두 끈 = **위 줄**) · PROP_LANTERN(꺼짐, 무지) · PROP_HANKY_CLEAN(RIGHT 손 두 손가락 사이)
- dialogue_ref (1): ① 민 상궁 dialogue "댕기가 또 풀렸구나, 얘야." (꼬리 ↙ 상궁)
- art_space: **오른쪽 위(x 48–96%, y 3–24%)** — 흰 회벽 · 처마 밑면. 등롱(x 36–44%)과 기둥은 그 밖
- repeat: R-WIDE **원본** → panel_048 · R 메아리 원본 → panel_058
- attach: refs/MIN_turnaround.png, refs/LOC_L2_R_plate.png, refs/PROP_DUTYBOARD.png
- fx/note: 당번 판 · 패 · 등롱 **BLANK**(글자 · 숫자 · 기호 · 새김 없음). 끈 색: 연두 · 회청 · 바랜 갈색 · 흰색(보라 · 빨강 없음).

### panel_006
- scene_id: S02 / location: LOC_L2_CORRIDOR (클로즈업, 배경 흐림)
- beat: ② 친밀함 ⟨복선 A-냄새①⟩ · 긴장 4.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 1일째 아침 · LIGHT_L2_MORNING
- camera: 눈높이, close-up — 손 + 채령 옆얼굴
- composition: 아래 왼쪽~가운데(x 8–55%, y 40–92%) 고개 숙인 채령의 옆얼굴(화면 오른쪽을 향함), 코끝을 살짝 든다. 아래 오른쪽(x 55–95%, y 55–95%) 땋은 머리 끝 붉은 댕기를 매는 상궁의 두 손(자두색 소맷부리, 손수건은 손가락 사이에 접혀 깨끗). 위 28%는 흐린 회벽 · 처마
- characters: CHAERYEONG(FULL 얼굴, 호기심 섞인 ①) · MIN(손 상태 토큰)
- emotion: 친밀함 + 작은 호기심
- props: PROP_HANKY_CLEAN
- dialogue_ref (1): ① 채령 dialogue "마마님 손에서… 쓴 냄새가 나요." (꼬리 ↓ 채령)
- art_space: **위 28%(x 5–95%, y 2–28%)** — 초점 밖 흰 회벽 · 처마 밑
- attach: refs/CHAERYEONG_expressions.png, refs/MIN_turnaround.png
- fx/note: 얼룩 모서리는 접혀 안 보임.

### panel_007
- scene_id: S02 / location: LOC_L2_CORRIDOR (바스트, 배경 흐림)
- beat: ② ⟨이중의미 D3⟩ · 긴장 4.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 1일째 아침 · LIGHT_L2_MORNING
- camera: 정면 약간 위(채령 시점의 올려다봄 아님), bust shot
- composition: 민 상궁 바스트 가운데(x 25–75%, 머리 y 26–55%, 어깨 아래까지). 낮은 쪽머리 + 가로 은비녀, LEFT 관자놀이 흰 머리(화면 오른쪽). 배경은 초점 밖 처마 밑 · 연청 하늘 · 회벽. 위 22%는 흐린 처마 밑과 하늘
- characters: MIN(FULL, 표정 ①)
- emotion: 따뜻함(재독 시 서늘)
- props: PROP_HANKY_CLEAN(손은 프레임 아래 밖이어도 됨)
- dialogue_ref (1): ① 민 상궁 dialogue "코는 여전하구나, 얘야." (꼬리 ↓ 상궁, 얼굴 옆)
- art_space: **위 22%(x 5–95%, y 2–22%)**, 얼굴 왼쪽 위로 조금 넓게 — 흐린 처마 밑 · 하늘
- attach: refs/MIN_expressions.png, refs/MIN_turnaround.png
- fx/note: P49와 같은 대사(D3) — P49에서는 등을 보이고 말한다.

### panel_008
- scene_id: S02 / location: LOC_L2_CORRIDOR (손 클로즈업, 배경 흐림)
- beat: ② ⟨복선 A-시각①⟩ ⟨이중의미 D4⟩ · 긴장 4.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 1일째 아침 · LIGHT_L2_MORNING
- camera: [R-HAND] 가슴 높이, 손 close-up, 정면
- composition: [R-HAND 원본] 상궁의 두 손이 화면 가운데(x 20–80%, y 45–88%), 연청 손수건으로 손가락을 닦는다. 자두색 소맷부리 + 흰 단이 양옆 가장자리. **얼룩 모서리 = 화면 오른쪽 아래(x 66–76%, y 74–84%), 손가락 한 마디 크기, 가장자리 흐린 물자국** — 프레임의 중심은 손이지 얼룩이 아니다. 위 38%는 초점 밖 회벽 · 마루. 채령은 프레임 밖
- characters: MIN(손 상태 토큰 — 손가락을 닦음)
- emotion: 일상의 수고(독자 시선은 대사로 끌림)
- props: **PROP_HANKY_STAIN**
- lilac: **YES (예약 ①)** — `the only pale lilac in the image is one small faint stain on a corner of the handkerchief`
- dialogue_ref (2): ① 민 상궁 dialogue "해독환을 빚었단다." / ② 민 상궁 dialogue "쓴 걸 만지는 게 내 일이지." (둘 다 꼬리 ↑ 화면 위 가장자리 = 프레임 밖 얼굴 쪽)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 얼룩 모서리에서 먼 쪽, 흐린 회벽
- repeat: R-HAND **원본** → panel_050
- attach: refs/PROP_HANKY_pair.png, refs/MIN_turnaround.png
- fx/note: 얼룩 = 자두색 소매와 한눈에 다른 흰 기 있는 아주 연한 라일락. 그 밖에 보라 0.

### panel_009
- scene_id: S02 / location: LOC_L2_CORRIDOR (기준 기둥의 당번 판 클로즈업)
- beat: ② ⟨복선 B①⟩ · 긴장 4.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 1일째 아침 · LIGHT_L2_MORNING
- camera: 가슴 높이, 당번 판 close-up 정면
- composition: 기둥의 황토 나무 면이 배경 전체. 당번 판(x 15–85%, y 34–92%): 세 줄 나무 고리, 빈 나무패들이 색 끈에 걸림. 상궁의 손(자두색 소맷부리, 화면 오른쪽에서 들어옴)이 **연두 끈 빈 패**를 위 줄에서 가운데 줄로 옮겨 거는 순간. 다른 패들은 그대로. 위 28%는 판 위쪽의 맨 기둥 나무 면
- characters: MIN(손 상태 토큰 — 당번 패를 옮김)
- emotion: 무심한 배려(단서)
- props: PROP_DUTYBOARD — **판 · 패 BLANK**(글자 · 숫자 · 기호 · 새김 없음, 줄은 높이로만 구별)
- dialogue_ref (1): ① 민 상궁 dialogue "내일 점심엔 감찰 나리가 배석하신다." (꼬리 ↘ 화면 오른쪽 가장자리)
- art_space: **위 28%(x 5–95%, y 2–28%)** — 판 위쪽의 무늬 없는 기둥 면
- attach: refs/PROP_DUTYBOARD.png, refs/MIN_turnaround.png
- fx/note: 패를 옮기는 손 동작이 단서 B의 시각 짝. 손수건은 다른 손에 접혀 깨끗(보이면 CLEAN).

### panel_010
- scene_id: S02 / location: LOC_L2_CORRIDOR · VIEW_R 방향
- beat: ② ⟨복선 B①⟩ ⟨이중의미 D1⟩ · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 1일째 아침 · LIGHT_L2_MORNING
- camera: 눈높이, two-shot medium
- composition: 화면 왼쪽~가운데(x 12–50%, 머리 y 40–54%) 민 상궁이 채령의 어깨에 손을 얹어 토닥임. 화면 오른쪽(x 52–88%, 머리 y 44–58%) 채령이 상궁을 올려다봄. 뒤는 흰 회벽 + 창호지 문. 위 38%는 회벽 윗면 · 처마 밑면
- characters: MIN(FULL, 어깨를 토닥임 상태 토큰, 표정 ③) · CHAERYEONG(SHORT, 표정 ①)
- emotion: 배려(재독 시 미끼 배치)
- props: PROP_HANKY_CLEAN(RIGHT 손)
- dialogue_ref (2): ① 민 상궁 dialogue "왕자 마마는 너 없인 숟가락을 안 드시지." / ② 민 상궁 dialogue "꼭 네가 시식해라." (둘 다 꼬리 ↙ 상궁)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 흰 회벽 윗부분 · 처마 밑
- attach: refs/MIN_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: "꼭 네가 시식해라"(ត្រូវតែកូនជាអ្នកភ្លក់) → P55에서 글자 그대로 반복.

### panel_011
- scene_id: S02 / location: LOC_L2_CORRIDOR (복도 깊이 방향)
- beat: ② 비밀의 시작 · 긴장 5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 1일째 아침 · LIGHT_L2_MORNING
- camera: 허리 높이, 노리개 close-up + 깊은 배경
- composition: 앞쪽 아래 오른쪽(x 50–95%, y 50–95%) 채령의 손이 RIGHT 허리의 옥빛 나비 노리개를 꼭 쥠, 붉은 술이 손가락 사이로(선명). 뒤 가운데 멀리(x 30–50%, y 25–55%) 회랑 끝으로 걸어가는 민 상궁의 자두색 뒷모습(흐림)
- characters: CHAERYEONG(노리개 쥠 상태 토큰) · MIN(원경 뒷모습 상태 토큰)
- emotion: 숨긴 것을 붙잡음
- props: PROP_NORIGAE
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/PROP_KEEPSAKES.png, refs/MIN_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 노리개 = 청록 옥(보라 · 파랑 아님).

### panel_012
- scene_id: S02 / location: LOC_L2_CORRIDOR · VIEW_R 근사(기준 기둥 옆)
- beat: ② 진짜 이름 1회째 · ②의 최저점 · 긴장 4 · gap_after **240**(하루 점프)
- size: medium · aspect: **3:4**
- time/light: 1일째 아침 · LIGHT_L2_MORNING
- camera: 눈높이, 얼굴 medium
- composition: 화면 왼쪽(x 8–24%) 기준 기둥, 채령이 그 기둥에 등을 기대고 혼자 섬(x 22–62%, 머리 y 40–54%), 노리개를 쥔 채 눈을 내림. 기둥의 빈 당번 판은 가슴 높이에 일부(연두 끈 = 가운데 줄). 꺼진 등롱은 기둥 오른쪽 처마(x 26–34%, y 4–14%). 오른쪽은 흰 회벽 · 창호지 문. **오른쪽 위(x 40–97%, y 2–38%)는 조용한 회벽 · 처마 밑**
- characters: CHAERYEONG(FULL, 노리개 쥠, 표정 ⑦)
- emotion: 외로움 · 독자와의 비밀
- props: PROP_NORIGAE · PROP_DUTYBOARD(BLANK) · PROP_LANTERN(꺼짐)
- dialogue_ref (2): ① 채령 thought "언니, 오늘도 언니 이름으로 살아남았어." / ② 채령 thought "채령이는… 아직 아무도 몰라."
- art_space: **오른쪽 위(x 40–97%, y 2–38%)** — 흰 회벽 · 처마 밑면. 등롱 · 당번 판은 그 밖
- attach: refs/CHAERYEONG_expressions.png, refs/LOC_L2_R_plate.png, refs/PROP_KEEPSAKES.png
- fx/note: 시간 캡션 없음(script). 다음 컷의 빛 · 상 · 감찰 · 새 향이 하루 점프를 알린다.

--- SCENE BREAK --- S03 · LOC_L1_TASTING · 2일째 한낮 · LIGHT_L1_NOON

### panel_013
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_DOOR
- beat: ③ 균열 시작 · 하루 점프 큐 ⟨복선 RH①⟩ · 긴장 6 · gap_after 40
- size: large · aspect: **9:16** (권장 3:4에서 올림 — §B)
- time/light: 2일째 한낮 · LIGHT_L1_NOON (높은 꿀빛, 상 아래 짧고 진한 그림자, 김)
- camera: 앉은 눈높이(약간 높게), 문 쪽을 넓게 보는 wide
- composition: 위 36%(y 0–36%)는 빛나는 창호지 윗부분(왼쪽) · 무지 병풍 · 어두운 들보 — 비워 둔다. 화면 오른쪽 벽 미닫이 문가 안쪽(x 72–96%, 갓 꼭대기 y 38%, 발 y 92%)에 거구의 백 감찰이 처음 서 있다. 가운데(x 30–70%, y 44–88%) 홍 숙수가 김 오르는 **점심 수라상**을 내려놓음, RIGHT 손에 놋 국자, 입을 크게 벌림. 상 건너편 방석에 왕자(작게, x 22–40%), 상 오른쪽 옆에 무릎 꿇은 채령(x 60–74%, 일부 홍 숙수 뒤). 앞쪽 아래 향로에 **새로 꽂은 긴 향**
- characters: HONG(FULL, 상을 들여놓음 상태 토큰, 표정 ①) · BAEK(SHORT, 문가에 섬, 표정 ①) · PRINCE(SHORT) · CHAERYEONG(SHORT)
- emotion: 시끄러운 활기 + 감찰의 무거운 존재감
- props: PROP_TABLE_LUNCH · PROP_PRINCE_BOWL(뚜껑 **닫힘**, 난초 봉오리 손잡이) · PROP_VINEGAR · PROP_LADLE · PROP_CENSER + PROP_INCENSE_NEW · PROP_SWORD
- dialogue_ref (3): ① 홍 숙수 shout "감찰 나리까지 납셨네!" / ② 홍 숙수 dialogue "왕자 마마 국은 내가 직접 끓이고 직접 펐어." / ③ 홍 숙수 shout "식기 전에 드시게 해!" (모두 꼬리 ↓ 홍 숙수, 위에서 아래 계단식)
- art_space: **위 36%(x 3–70%, y 2–36%) — 감찰 얼굴(화면 오른쪽)을 피해 가운데~왼쪽** · 창호지 윗부분 · 무지 병풍 · 들보
- attach: refs/HONG_turnaround.png, refs/BAEK_turnaround.png, refs/LOC_L1_TASTING_plate.png
- fx/note: 하루 점프 큐 다섯 겹(beatsheet §3): 한낮 빛 · 수라상 · 문가 감찰 · 새 향 · 대사. 엑스트라 없음.

### panel_014
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_TABLE
- beat: ③ 절차: 은침 = 가운데 · 긴장 6 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 상 높이, 손 + 그릇 close-up, 약간 위에서
- composition: 가운데 아래(x 20–80%, y 40–90%) 채령의 손이 왕자 국그릇의 난초 봉오리 뚜껑을 열어 상 위에 놓고, 은침을 국 **정가운데**에 꽂음. 뒤 흐림: 화면 오른쪽 문가에 백 감찰(검은 형태), 그 뒤 문지방에 민 상궁 작게
- characters: CHAERYEONG(손 클로즈업 상태 토큰) · BAEK(SHORT, 흐림) · MIN(문지방에 작게 상태 토큰)
- emotion: 절차의 정확함
- props: PROP_PRINCE_BOWL(뚜껑 이제 **열림**) · PROP_NEEDLE · PROP_TABLE_LUNCH · PROP_HANKY_CLEAN(작게)
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/PROP_TABLEWARE.png, refs/CHAERYEONG_turnaround.png
- fx/note: 홍 숙수는 나가고 없음.

### panel_015
- scene_id: S03 / location: LOC_L1_TASTING (ECU, 배경 어둡게 흐림)
- beat: ③ 균열 1: 깨끗하다 · 긴장 6 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON — 은침이 화면에서 가장 차가운 반짝임
- camera: extreme close-up, 눈높이
- composition: 채령의 손가락이 은침을 들어 올림(은침 대각선 x 20–70%, y 30–90%), 끝까지 은빛. 배경은 초점 밖 어두운 들보 · 그늘. 위 오른쪽 모서리는 어두운 흐림
- characters: CHAERYEONG(손 상태 토큰) · BAEK(화면 밖 목소리)
- emotion: 차가운 안심
- props: PROP_NEEDLE(밝은 차가운 은빛, 검게 변하지 않음)
- dialogue_ref (1): ① 백 감찰(화면 밖) dialogue "은빛이군." (꼬리 → 화면 오른쪽 가장자리 = 문가 쪽)
- art_space: **위 오른쪽 모서리(x 55–96%, y 3–30%)** — 어두운 흐린 배경
- attach: refs/PROP_TABLEWARE.png
- fx/note: —

### panel_016
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_TABLE (채령 시선)
- beat: ③ 독자만 보는 어긋남 ⟨복선⟩ · 긴장 6.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON — 화면 왼쪽에서 비스듬한 창빛
- camera: 위에서 비스듬히 내려다보는 extreme close-up (채령 POV)
- composition: 국그릇 안 국물 표면이 화면 아래 2/3(x 5–90%, y 30–98%). 화면 왼쪽 아래 놋 테두리 쪽(x 10–35%, y 60–85%)에서 번진 **아주 엷은 연보라 기름 윤기**가 빛을 받을 때만 보임. 위 오른쪽 모서리는 그릇 밖의 어두운 옻칠 상판
- characters: 없음(시선 컷)
- emotion: 의심의 씨앗
- props: PROP_SOUP_SHEEN ● · PROP_PRINCE_BOWL
- lilac: **YES (예약 ②)** — `the only pale lilac in the image is a barely visible faint oily sheen on the soup surface near the bowl's rim, catching the slanted light`
- dialogue_ref (1): ① 채령 thought "…?"
- art_space: **위 오른쪽 모서리(x 60–96%, y 3–28%)** — 그릇 밖 어두운 옻칠 상판
- attach: refs/PROP_TABLEWARE.png
- fx/note: 윤기는 독자만 알아챌 만큼 엷게. 다른 보라 0.

### panel_017
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_MAIN (문 쪽으로)
- beat: ③ 법도 선고 ① · 긴장 7 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: low-angle medium (권위 = 로우앵글)
- composition: 화면 가운데~오른쪽(x 40–90%, 갓 꼭대기 y 22%, 허리 y 78%) 방 안으로 들어선 백 감찰, LEFT 손을 칼자루에 얹음(칼은 칼집 속). 앞쪽 아래 왼쪽(x 4–38%, y 62–98%) 왕자가 호랑이를 쥐고 움츠림. 위 20%는 어두운 갈색 들보 · 천장
- characters: BAEK(FULL, 칼자루에 손 상태 토큰, 표정 ②) · PRINCE(SHORT, 표정 ①)
- emotion: 차가운 위협(미스디렉션)
- props: PROP_SWORD · PROP_TIGER
- dialogue_ref (1): ① 백 감찰 dialogue "독을 놓친 기미는 죽고," (꼬리 ↓ 감찰)
- art_space: **위 20%(x 4–96%, y 2–20%)** — 갓 챙 위의 단순한 들보 · 천장
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 칼을 뽑지 않음.

### panel_018
- scene_id: S03 / location: LOC_L1_TASTING (클로즈업, 무지 병풍 흐림)
- beat: ③ 법도 선고 ② · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 한낮 · LIGHT_L1_NOON (얼굴의 밝은 쪽 = 화면 왼쪽 창 쪽)
- camera: 눈높이보다 약간 낮게, face close-up
- composition: 백 감찰 얼굴(x 15–85%, y 26–92%), 미간 찌푸림. RIGHT 턱선 아래 흉터(정면이라 화면 왼쪽), 콧등 혹. 갓 챙이 y 24–32%. 위 24%는 초점 밖 무지 병풍
- characters: BAEK(FULL, 표정 ②)
- emotion: 칼날 같은 박자
- props: —
- dialogue_ref (1): ① 백 감찰 dialogue "없는 독을 고한 기미도 죽는다." (꼬리 ↓ 감찰)
- art_space: **위 24%(x 4–96%, y 2–24%)** — 흐린 무지 병풍. 흉터 · 눈은 그 아래
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png
- fx/note: —

### panel_019
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ④ 기미 그릇 무증상 · 향 절반 · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 낮은 눈높이, medium, 향 연기를 전경에
- composition: 앞쪽 왼쪽 아래(x 4–30%, y 58–96%) 향로에 **절반 탄 향**, 가는 연기. 가운데~오른쪽(x 38–88%, 머리 y 30–44%) 채령이 작은 국자로 국 **가운데**를 떠 기미 그릇에 덜어 먹음. 위 25%는 창호지 윗부분 · 병풍
- characters: CHAERYEONG(FULL, 표정 ③ 미세하게)
- emotion: 이상 없음 속 미세한 불안
- props: PROP_INCENSE_HALF · PROP_SMALL_LADLE · PROP_TASTER_DISH · PROP_TABLE_LUNCH
- dialogue_ref (1): ① 채령 thought "괜찮아. …괜찮은데."
- art_space: **위 25%(x 4–96%, y 2–25%)** — 창호지 윗부분 · 무지 병풍. 연기는 y 28% 아래에서 흐려짐
- attach: refs/CHAERYEONG_expressions.png, refs/PROP_TABLEWARE.png
- fx/note: —

### panel_020
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_TABLE (낮은 측면)
- beat: ④ ⟨복선 A-냄새②⟩ · 긴장 7.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 상 높이의 낮은 측면 close-up
- composition: 아래 오른쪽(x 50–95%, y 58–95%) 왕자 국그릇의 놋 테두리. 왼쪽 가운데(x 8–55%, y 38–80%) 몸을 숙인 채령의 옆얼굴, 코끝이 테두리에 가까움(거리가 읽히게), 손에 은침(받침에 내려놓으려 함). 위 28%는 흐린 병풍
- characters: CHAERYEONG(FULL 얼굴, 표정 ③)
- emotion: 냄새가 걸림
- props: PROP_PRINCE_BOWL · PROP_NEEDLE · PROP_NEEDLE_STAND
- dialogue_ref (1): ① 채령 thought "…쓴 냄새."
- art_space: **위 28%(x 4–96%, y 2–28%)** — 그릇 반대쪽의 흐린 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/PROP_TABLEWARE.png
- fx/note: 테두리에 보라 0(P16 · P29만).

### panel_021
- scene_id: S03 / location: LOC_L1_TASTING (ECU)
- beat: ④ ⟨반전: 미니 1단 · 미니 훅 1⟩ · 긴장 8 · gap_after 0
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: extreme close-up, 눈 하나 + 눈썹
- composition: 채령의 눈(x 10–90%, y 42–82%), 시선이 가운데에서 아래 옆으로 미끄러짐, 눈동자 반사광에 둥근 그릇 테두리의 작은 형태. 위 32%는 초점 밖의 부드러운 이마 그늘 · 어두운 머리칼(무늬 없는 어두운 면)
- characters: CHAERYEONG(FULL 눈, 표정 ④)
- emotion: 깨달음
- props: —
- dialogue_ref (1): ① 채령 thought "가운데가 아니야. 테두리야."
- art_space: **위 32% 띠(x 4–96%, y 2–32%)** — 흐린 어두운 머리칼 · 그늘. 눈 · 반사광은 그 아래
- attach: refs/CHAERYEONG_expressions.png
- fx/note: P51(밤 눈 ECU)과 같은 프레이밍으로 짝을 맞추면 좋다(선택).

### panel_022
- scene_id: S03 / location: LOC_L1_TASTING (클로즈업)
- beat: ④ ⟨반전: 미니 2단⟩ · 긴장 7.5 · gap_after 0
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON — 창 쪽(화면 왼쪽) 반만 밝고 반은 그림자
- camera: face close-up, 약한 더치 허용(style-bible 허용 컷)
- composition: 채령 얼굴(x 10–64%, y 26–96%), 숨을 멈춤, 얼굴 오른쪽 반(화면 오른쪽)이 그림자. 화면 오른쪽 위(x 50–98%, y 2–44%)는 그림자 진 어두운 배경
- characters: CHAERYEONG(FULL, 표정 ④)
- emotion: 안으로 숨는 반 박자
- props: —
- dialogue_ref (2): ① 채령 thought "은이 못 보는 독." / ② 채령 thought "은침은 아버지 때도 깨끗했어."
- art_space: **오른쪽 위(x 50–98%, y 2–44%)** — 그림자 쪽 어두운 배경(생각 풍선 둘, 위아래)
- attach: refs/CHAERYEONG_expressions.png
- fx/note: —

### panel_023
- scene_id: S03 / location: LOC_L1_TASTING (세 인서트)
- beat: ④ ⟨반전: 미니 3단 = 딜레마⟩ · 향 마감 직전 · 긴장 8 · gap_after 0
- size: large (3단 분할) · aspect: **9:16**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 세 칸 모두 close-up insert, 눈높이
- composition: **이 회차 유일한 칸 나눔 예외.** 같은 폭 세 칸을 위아래로 쌓고 가는 검은 가로 띠 두 줄로 나눔. 위 칸 = 칼자루에 얹힌 백 감찰의 큰 LEFT 손(검은 소매). 가운데 칸 = 놋 향로에 꽁초만 남은 향, 재가 막 떨어짐(향은 칸의 x 18–45%). 아래 칸 = 남색 치마 무릎 위 채령의 꽉 쥔 주먹(연두 소매 끝, 남색 끝동). 대안(Flow가 칸을 망칠 때): 한 장의 깊이 구도 — 전경 아래 주먹, 중경 향 꽁초, 뒤 위 칼자루의 손
- characters: BAEK(칼자루에 손 상태 토큰) · CHAERYEONG(주먹 상태 토큰)
- emotion: 압박 — 말하면 정체가 드러난다
- props: PROP_SWORD · PROP_INCENSE_STUB · PROP_CENSER
- dialogue_ref (1): ① 채령 thought "말하면… 그 약재상의 딸이 돼."
- art_space: **가운데 칸 오른쪽(x 52–96%, y 38–60%)** — 향 꽁초 옆 빈 벽 / 대안 구도에서는 중경 오른쪽의 흐린 병풍
- attach: refs/BAEK_turnaround.png, refs/PROP_TABLEWARE.png, refs/CHAERYEONG_turnaround.png
- fx/note: prompt-smith: Avoid 줄에서 `panel borders`를 빼고 `extra panels`로(style-bible §5-1).

### panel_024
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ④ ⟨회수 M1⟩ · 향 만료 · 긴장 8 · gap_after **240**
- size: medium · aspect: **3:4**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: [M1] 낮은 눈높이, 왕자 정면 medium — P04와 같은 카메라
- composition: [M1 반복] P04와 같은 포즈 · 크기 · 위치: 왕자(x 28–68%, y 38–80%)가 숟가락을 내려놓고 그릇을 두 손으로 들어 테두리를 입으로 가져감(입에 대기 직전). 화면 오른쪽 가장자리(x 78–100%) 채령이 굳은 채 지켜봄. 상 위에 열린 난초 봉오리 뚜껑. 향로의 향은 다 탐. 위 38%는 창호지 · 무지 병풍
- characters: PRINCE(FULL, M1 포즈 상태 토큰, 표정 ④) · CHAERYEONG(SHORT, 표정 ④)
- emotion: 무구함이 공포
- props: PROP_TABLE_LUNCH · PROP_PRINCE_BOWL(열림, 뚜껑 상 위) · PROP_SPOON(내려놓음) · PROP_INCENSE_OUT · PROP_TIGER
- dialogue_ref (1): ① 왕자 dialogue "이제 먹어도 돼?" (위 왼쪽, 꼬리 ↓ 왕자)
- art_space: **위 38%(x 3–97%, y 2–38%)** — P04와 같은 자리
- repeat: M1 ← **panel_004**. 바뀌는 것: 빛 아침 → 한낮 · 아침상 → 수라상(열린 뚜껑) · 왕자 ③ → ④ · 채령 ② → 굳은 얼굴 · 향 다 탐
- attach: panel_004.png, refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 그릇 테두리에 보라 0.

### panel_025
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ⑤ 결단 · 금기 ① 손목 · 긴장 8.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 낮은 눈높이, 손목 중심 medium close
- composition: 화면 가운데(x 25–75%, y 40–70%) 채령의 손이 왕자의 진홍 소매 손목을 잡음, 그릇이 입 앞에서 멈춤. 왕자의 놀란 얼굴은 위 가운데(x 30–60%, y 22–40%), 채령의 결연한 옆얼굴은 화면 오른쪽(x 66–98%, y 26–48%). 위 18%는 창호지 · 병풍
- characters: CHAERYEONG(FULL, 표정 ⑥) · PRINCE(SHORT, 손목이 잡힘 상태 토큰)
- emotion: 결단
- props: PROP_PRINCE_BOWL · PROP_NORIGAE
- dialogue_ref (1) + sfx (1): ① 채령 dialogue "잠깐만요." (꼬리 ↘ 채령) / sfx "탁"(KM ផាប់!)
- art_space: **위 18%(x 4–96%, y 2–18%)** + sfx용 작은 빈자리 **손목 왼쪽(x 6–24%, y 50–62%)** — 흐린 상 · 장판
- attach: refs/CHAERYEONG_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 큰 컷. 앞 여백 240 후 등장.

### panel_026
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_TABLE (하이앵글)
- beat: ⑤ 고변 신호 · 긴장 8.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: high-angle, 상 위를 내려다봄 (고변 = 하이앵글)
- composition: 옻칠 상판이 화면 아래 2/3(y 32–100%), 은침 한 개가 상 위에 **가로로** 화면을 가로지름(y 58–62%). 화면 오른쪽 아래에서 채령의 손이 막 물러남. 상 가장자리에 왕자의 진홍 소매 · 감찰의 검은 목화 끝이 살짝. 위 28%는 상 너머 빈 장판
- characters: CHAERYEONG(손 + 무릎, 표정은 프레임 밖 또는 ①) · BAEK(발끝 SHORT) · PRINCE(소매)
- emotion: 방이 얼어붙음
- props: PROP_NEEDLE_DOWN · PROP_TABLE_LUNCH · PROP_PRINCE_BOWL
- dialogue_ref (1): ① 채령 dialogue "상을 물리십시오." (꼬리 ↘ 화면 오른쪽 아래 채령)
- art_space: **위 28%(x 4–96%, y 2–28%)** — 상 너머 빈 장판
- attach: refs/PROP_TABLEWARE.png, refs/CHAERYEONG_turnaround.png
- fx/note: 은침은 이후 P27–P32 상 위에 그대로 누워 있음.

### panel_027
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_DOOR
- beat: ⑤ 법도의 압력 · 긴장 8.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: low-angle wide reaction
- composition: 화면 오른쪽(x 50–90%, 갓 꼭대기 y 40%) 백 감찰이 칼자루를 쥐고 다가섬, 큰 그림자가 앞쪽 아래 채령 위로. 화면 왼쪽 아래(x 8–48%, y 58–96%) 무릎 꿇은 채령이 향로에서 회색 재 한 꼬집을 집음. 위 38%는 들보 · 병풍 · 창호지 윗부분
- characters: BAEK(FULL, 칼자루에 손 + 다가섬 상태 토큰, 표정 ①) · CHAERYEONG(SHORT, 손끝의 재 상태, 표정 ⑥)
- emotion: 압박 vs 결연
- props: PROP_SWORD · PROP_CENSER · PROP_NEEDLE_DOWN · PROP_TABLE_LUNCH
- dialogue_ref (2): ① 백 감찰 dialogue "은침은 깨끗했다." / ② 백 감찰 dialogue "증명해라." (둘 다 꼬리 ↓ 감찰)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 갓 위의 들보 · 병풍
- attach: refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png, refs/LOC_L1_TASTING_plate.png
- fx/note: 재는 회색.

### panel_028
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_TABLE
- beat: ⑤ 지식의 말투 · 긴장 8 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 손 close-up, 약간 위에서
- composition: 아래 60%(y 40–95%) 흰 사기 종지의 갈색 식초에 채령의 손가락이 회색 재를 갬, 정확한 손놀림. 위 40%는 초점 밖 옻칠 상판 · 놋그릇의 흐린 반짝임(어두운 면)
- characters: CHAERYEONG(손 클로즈업 + 손끝의 재 상태 토큰)
- emotion: 정확함 · 자신감
- props: PROP_VINEGAR · PROP_CENSER의 재
- dialogue_ref (2): ① 채령 dialogue "식초에 갠 쑥재입니다." / ② 채령 dialogue "은이 못 보는 풀독은, 재를 만나면 제 색을 드러냅니다." (꼬리 ↓ 화면 아래 = 채령)
- art_space: **위 40%(x 4–96%, y 2–40%)** — 흐린 상판(풍선 둘)
- attach: refs/PROP_TABLEWARE.png
- fx/note: 재 반죽은 회색(보라 아님).

### panel_029
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_TABLE
- beat: ⑤ 첫 "와" ⟨A-시각②⟩ · 금기 ② · 긴장 8 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 약간 위에서 비스듬히, 그릇 테두리 close
- composition: 왕자 국그릇이 화면 가운데 아래(x 10–90%, y 40–88%) 크게. 화면 오른쪽 테두리에 채령의 맨손 손끝(오른쪽에서 들어옴)이 닿고, 거기서 **연보라가 테두리 곡선을 따라 왼쪽으로 천천히 번짐**. 위 38%는 흐린 상판 · 장판
- characters: CHAERYEONG(손 상태 토큰)
- emotion: 경이 · 통쾌의 시작
- props: PROP_RIM_SPREAD ● · PROP_PRINCE_BOWL
- lilac: **YES (예약 ③)** — `the only pale lilac in the image is the soft whitish-lilac color slowly spreading along the brass rim from her fingertip`
- dialogue_ref: sfx only — "스르륵"(KM ស្រឹប…)
- art_space: sfx용 **위 왼쪽 작은 자리(x 6–40%, y 8–26%)** — 번짐 반대편의 흐린 상판
- attach: refs/PROP_TABLEWARE.png, refs/PROP_HANKY_pair.png
- fx/note: 큰 컷. 색 = P08 얼룩과 같은 연보라(PROP_HANKY_pair로 맞춤). 손끝 재는 회색.

### panel_030
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_TABLE
- beat: ⑤ 공정성 대조 · 긴장 7.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 상 높이 close-up
- composition: 가운데 아래(x 18–82%, y 42–92%) 흰 기미 그릇 테두리에 같은 회색 재 반죽을 문지르는 손끝 — 변화 없음. **왕자 그릇은 프레임 밖.** 위 26%는 흐린 상판 · 장판
- characters: CHAERYEONG(손 상태 토큰)
- emotion: 차분한 증명
- props: PROP_DISH_NOCHANGE · PROP_TASTER_DISH
- dialogue_ref (1): ① 채령 dialogue "제 그릇은 그대로입니다." (꼬리 ↓)
- art_space: **위 26%(x 4–96%, y 2–26%)**
- attach: refs/PROP_TABLEWARE.png
- fx/note: 연보라 재노출 금지(왕자 그릇 테두리 안 보임).

### panel_031
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_DOOR
- beat: ⑤ 반응 연쇄 ⟨복선 C⟩ · 긴장 7.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 앉은 눈높이보다 약간 높은 wide
- composition: 가운데(y 48–80%) 상과 국그릇에 모든 시선: 백 감찰(화면 오른쪽 중경), 왕자(상 건너편), 회청 옷 나인 두셋(화면 왼쪽 뒤 원경, 얼굴 디테일 없음). 채령은 상 오른쪽 옆. **화면 오른쪽 뒤 문지방(x 78–92%, y 36–52%)에 민 상궁 작게 — 그녀만 채령을 본다, 같은 온화한 미소, RIGHT 손이 LEFT 소매 속**(얼굴 방향과 소매 속 손이 읽힐 크기). 위 왼쪽은 창호지 윗부분
- characters: BAEK(SHORT, 표정 ⑥) · PRINCE(SHORT) · CHAERYEONG(SHORT) · MIN(문지방에 작게 + 손을 소매 속에 상태 토큰, 표정 ④) · 엑스트라 나인
- emotion: 놀람의 파도 속 하나의 조용한 시선
- props: PROP_TABLE_LUNCH · PROP_PRINCE_BOWL · PROP_NEEDLE_DOWN · 손수건 안 보임
- dialogue_ref: sfx only — "헉"(나인들, KM អា៎!)
- art_space: sfx용 **위 왼쪽(x 5–38%, y 6–22%)** — 상궁 **반대편**의 창호지 윗부분
- attach: refs/MIN_turnaround.png, refs/BAEK_turnaround.png, refs/LOC_L1_TASTING_plate.png
- fx/note: 상궁 강조 금지(크기 · 조명 · 효과음 모두 반대쪽). 엑스트라는 이름 있는 인물 색 금지.

### panel_032
- scene_id: S03 / location: LOC_L1_TASTING · VIEW_L1_MAIN (리버스, 감찰 쪽에서)
- beat: ⑤ 첫 사이다 정점 · 인용 대사 · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- time/light: 2일째 한낮 · LIGHT_L1_NOON
- camera: 눈높이 정면 medium, 감찰 어깨 너머 살짝
- composition: 채령 정면(x 28–72%, 머리 y 26–42%) 감찰을 똑바로 봄. 화면 왼쪽 가장자리(x 0–18%, y 20–100%) 초점 밖 감찰의 검은 어깨 · 갓 챙 일부. 아래(x 30–60%, y 80–98%) 진홍 소매의 작은 손이 그녀의 남색 치맛자락을 꼭 쥠. 위 22%는 무지 병풍
- characters: CHAERYEONG(FULL, 표정 ⑥) · PRINCE(치맛자락 쥔 손 상태 토큰) · BAEK(SHORT, 어깨)
- emotion: 통쾌
- props: PROP_NORIGAE
- dialogue_ref (1): ① 채령 dialogue "은침은 거짓말을 해도, 기미의 혀는 안 합니다." (꼬리 ↓ 채령)
- art_space: **위 22%(x 20–96%, y 2–22%)** — 흐린 무지 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 리버스 샷이라 창은 화면 오른쪽 밖(180도 규칙 예외 — 클로즈업/미디엄에서만 허용).

--- SCENE BREAK --- S04 · LOC_L3_HERBSTORE · 2일째 오후 · LIGHT_L3

### panel_033
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_MAIN
- beat: ⑥ 밀실 · 긴장 6.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 오후 · LIGHT_L3 (높은 창 하나의 빛줄기 · 먼지, 나머지 어두운 갈색)
- camera: 눈높이 wide
- composition: 화면 오른쪽 전체에 높은 서랍장(작은 서랍 수십 개, **빈 흰 이름표**), 맨 아래 끝에 열쇠 구멍 두 개 큰 서랍(작게, 배경으로만). 왼쪽 뒤 위의 높은 창에서 빛줄기가 왼쪽 위 → 오른쪽 아래로. 가운데 작업대(작두 · 저울). 뒤쪽 들보에 꽃 없는 약초 다발. 서랍장 앞(x 55–80%) 채령, 화면 왼쪽 벽 문(x 4–28%) 앞에서 창빛을 등진 감찰이 문을 닫음. 앞쪽 위는 어두운 천장 그늘
- characters: BAEK(SHORT, 역광) · CHAERYEONG(SHORT)
- emotion: 사이다 뒤의 숨 → 밀실
- props: PROP_CABINET(이름표 **BLANK**) · PROP_POISON_DRAWER(형태만) · PROP_HERB_BUNDLES · PROP_SCALE · PROP_CUTTER
- dialogue_ref: sfx only — "쿵"(문 닫힘, KM ផាំង!)
- art_space: sfx용 **문 오른쪽 옆 작은 자리(x 28–46%, y 34–48%)** — 어두운 벽
- attach: refs/LOC_L3_HERBSTORE_plate.png, refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 독 서랍 클로즈업 금지. 약초에 꽃 없음.

### panel_034
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_MAIN
- beat: ⑥ 심문 1 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 오후 · LIGHT_L3 — 감찰 역광
- camera: 눈높이 medium
- composition: 백 감찰(x 30–80%, 갓 꼭대기 y 26%) 창빛을 등지고 얼굴 반이 그늘, 갓 챙 윤곽이 빛남. 위 왼쪽은 창 쪽의 부드러운 빛 안개 · 어두운 천장
- characters: BAEK(FULL, 역광 상태 토큰, 표정 ③)
- emotion: 의심
- props: PROP_SWORD
- dialogue_ref (1): ① 백 감찰 dialogue "기미 궁녀가 약재상 수법을 어디서 배웠지." (꼬리 ↘ 감찰)
- art_space: **위 왼쪽(x 3–60%, y 2–24%)** — 창 쪽 부드러운 빛 안개 · 어두운 천장. 얼굴은 그 밖
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png, refs/LOC_L3_HERBSTORE_plate.png
- fx/note: —

### panel_035
- scene_id: S04 / location: LOC_L3_HERBSTORE (클로즈업)
- beat: ⑥ 겁날수록 짧아짐 · 긴장 7 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 2일째 오후 · LIGHT_L3
- camera: face close-up
- composition: 채령 얼굴(x 14–78%, y 30–96%), 아랫입술을 묾. 배경은 초점 밖 어두운 서랍장 면. 위 26%는 어두운 그늘
- characters: CHAERYEONG(FULL, 표정 ⑤)
- emotion: 공포를 참음
- props: —
- dialogue_ref (1): ① 채령 dialogue "……." (작은 말줄임 풍선)
- art_space: **위 26%(x 4–96%, y 2–26%)** — 어두운 흐린 배경
- attach: refs/CHAERYEONG_expressions.png
- fx/note: —

### panel_036
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_MAIN
- beat: ⑥ 반쯤 거짓말 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 오후 · LIGHT_L3
- camera: 눈높이보다 약간 높게 medium
- composition: 서랍장 앞 채령(x 25–72%, 머리 y 28–44%), 눈을 옆 아래로 내림. 뒤는 빈 이름표 서랍들(어둠 속). 위 24%는 어두운 천장 그늘
- characters: CHAERYEONG(FULL, 표정 ⑦)
- emotion: 경계 · 거짓
- props: PROP_CABINET(BLANK)
- dialogue_ref (1): ① 채령 dialogue "고향 약방에서… 허드렛일을 했습니다." (꼬리 ↓)
- art_space: **위 24%(x 4–96%, y 2–24%)** — 어두운 천장 그늘
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: —

### panel_037
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_GAP
- beat: ⑥ ⟨복선 RH②⟩ 거리 줄어듦 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 오후 · LIGHT_L3
- camera: 눈높이 two-shot, 점점 타이트하게
- composition: 화면 오른쪽 서랍장에 등을 댄 채령(x 52–88%, 머리 y 40–54%), 화면 왼쪽에서 감찰(x 8–55%, 갓 꼭대기 y 38%)이 서랍장에 큰 손을 짚으며 한 걸음 다가옴. 손 아래 빈 이름표 서랍들. 위 38%는 깊은 그늘 속 천장 · 서랍장 윗부분
- characters: BAEK(FULL, 서랍장에 손을 짚음 상태 토큰, 표정 ③) · CHAERYEONG(SHORT, 표정 ⑤)
- emotion: 조여 오는 거리
- props: PROP_CABINET(BLANK) · PROP_SWORD
- dialogue_ref (2): ① 백 감찰 dialogue "그 테두리에 누가 손을 댔지." / ② 백 감찰 dialogue "그 국은 숙수가 직접 펐다고 했지." (꼬리 ↓ 감찰)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 깊은 그늘(이름표가 읽히지 않을 만큼 어둡게)
- attach: refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: —

### panel_038
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_GAP
- beat: ⑥ ⟨복선: RH 속 진짜 단서 · 미니 훅 2⟩ · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 오후 · LIGHT_L3
- camera: 감찰 over-the-shoulder close-up on 채령
- composition: 앞쪽 왼쪽(x 0–32%, y 18–100%) 초점 밖 감찰의 검은 어깨 · 갓 챙(역광). 채령 얼굴(x 34–70%, y 32–78%), 무언가 걸리는 표정. 위 25% 어두운 천장, 오른쪽 띠(x 72–98%, y 28–58%) 어두운 서랍장 그늘
- characters: CHAERYEONG(FULL, 표정 ⑤) · BAEK(SHORT, 역광 어깨)
- emotion: 알고도 삼킨다
- props: —
- dialogue_ref (2): ① 백 감찰 dialogue "마지막으로 그릇에 손댄 건 숙수다." (위, 꼬리 ↙ 화면 왼쪽 감찰) / ② 채령 thought "국자는… 가운데만 뜨는데." (오른쪽 옆)
- art_space: **위 25%(x 10–96%, y 2–25%)** + **오른쪽 띠(x 72–98%, y 28–58%)** — 어두운 천장 · 그늘진 서랍장
- attach: refs/CHAERYEONG_expressions.png, refs/BAEK_turnaround.png
- fx/note: —

### panel_039
- scene_id: S04 / location: LOC_L3_HERBSTORE · 문 쪽
- beat: ⑥ 유머 밸브 1 · 긴장 5.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 오후 · LIGHT_L3_DOOR (문이 벌컥, 바깥 빛이 쏟아짐)
- camera: 눈높이 medium wide, 문 쪽
- composition: 화면 가운데~왼쪽 문(x 15–60%, 문틀 위 y 18%)이 활짝, 밝은 빛이 바닥을 가로지름. 왕자가 호랑이를 높이 들고 뛰어듦(x 22–55%, y 42–80%). 화면 오른쪽 중경(x 60–95%) 돌아보는 감찰과 채령(작게). 위 18%는 문 위 어두운 벽 · 들보
- characters: PRINCE(FULL, 뛰어듦 상태 토큰, 표정 ⑤) · BAEK(SHORT) · CHAERYEONG(SHORT)
- emotion: 숨통 · 귀여운 고집
- props: PROP_TIGER
- dialogue_ref (1): ① 왕자 shout "단이가 아니라 내가 먼저 먹을 거야!" (꼬리 ↓ 왕자)
- art_space: **위 18%(x 6–80%, y 2–18%)** — 문틀 위 어두운 벽
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png, refs/LOC_L3_HERBSTORE_plate.png
- fx/note: SD · 만화 기호 없음.

### panel_040
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_MAIN
- beat: ⑥ 유머 밸브 2(마지막) · 긴장 6 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 2일째 오후 · LIGHT_L3_DOOR (열린 문의 빛이 남음)
- camera: 눈높이 reaction two-shot
- composition: 화면 왼쪽(x 6–46%, 갓 꼭대기 y 22%) 감찰이 내려다보며 서툴게 꾸중. 화면 오른쪽(x 50–92%, 머리 y 36%) 채령이 웃음을 참고, 그 남색 치마 뒤에서 왕자가 반쯤 빼꼼(작은 손이 치맛자락). 위 20%는 어두운 천장
- characters: BAEK(FULL, 표정 ⑤) · PRINCE(SHORT, 치맛자락 쥔 손, 표정 ⑥) · CHAERYEONG(SHORT, 표정 ②)
- emotion: 서툰 다정함
- props: PROP_TIGER · PROP_SWORD
- dialogue_ref (1): ① 백 감찰 dialogue "왕자 마마. 여기는 봉한 곳입니다." (꼬리 ↙ 감찰)
- art_space: **위 20%(x 4–96%, y 2–20%)** — 갓 위 어두운 천장
- attach: refs/BAEK_expressions.png, refs/PRINCE_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 키 차이: 감찰 > 채령 > 왕자가 또렷이.

### panel_041
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_GAP
- beat: ⑥ 고점 — 가장 가까운 거리 · 긴장 8.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 오후 · LIGHT_L3 (빛줄기가 두 얼굴 사이를 비스듬히)
- camera: close two-shot, 눈높이
- composition: 서랍장과 감찰 사이 좁은 틈. 화면 왼쪽(x 0–40%, y 28–80%) 감찰 옆얼굴(RIGHT 턱 흉터 쪽은 화면 밖이어도 됨) · 서랍에 짚은 큰 손(x 40–60%, y 30–45%). 화면 오른쪽(x 58–96%, y 30–80%) 채령 얼굴, 가슴께로 든 손끝(x 62–76%, y 80–92%)에 **회색** 재 얼룩 — 감찰의 시선이 손끝 → 눈. 위 28%는 두 머리 사이 위쪽의 깊은 그늘 속 서랍장 면
- characters: BAEK(FULL, 표정 ④) · CHAERYEONG(SHORT, 손끝의 재 상태 토큰, 표정 ⑤)
- emotion: 위협 + 설렘
- props: PROP_CABINET(BLANK, 그늘)
- dialogue_ref (1): ① 백 감찰 dialogue "너는 너무 많이 안다." (꼬리 ↙ 감찰)
- art_space: **위 가운데(x 20–80%, y 2–28%)** — 깊은 그늘 속 서랍장 면(이름표가 보이지 않게 어둡게)
- attach: refs/BAEK_expressions.png, refs/CHAERYEONG_expressions.png
- fx/note: 손끝 재는 회색 — 연보라 금지.

### panel_042
- scene_id: S04 / location: LOC_L3_HERBSTORE · VIEW_L3_MAIN
- beat: ⑥ RH 혐의 확정 · 긴장 7.5 · gap_after 120
- size: medium · aspect: **3:4**
- time/light: 2일째 오후 · LIGHT_L3 + 반쯤 열린 문의 바깥 빛
- camera: 감찰 뒤에서, 눈높이 medium
- composition: 앞쪽 가운데~왼쪽(x 8–56%, y 26–100%) 감찰 뒷모습이 물러서며 반쯤 열린 왼쪽 문 밖을 봄(칼은 LEFT 허리 = 화면 왼쪽). 화면 오른쪽 중경(x 64–90%, y 40–84%) 서랍장 앞에 남은 채령. 위 22%는 문 위쪽의 어두운 벽 · 빛 안개
- characters: BAEK(뒷모습 상태 토큰) · CHAERYEONG(SHORT, 표정 ⑤)
- emotion: 혐의가 엉뚱한 곳으로
- props: PROP_SWORD · PROP_CABINET(BLANK)
- dialogue_ref (1): ① 백 감찰 dialogue "숙수를 데려와라." (꼬리 ↓ 감찰)
- art_space: **위 22%(x 4–70%, y 2–22%)** — 문 위 어두운 벽 · 빛 안개
- attach: refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png, refs/LOC_L3_HERBSTORE_plate.png
- fx/note: —

--- SCENE BREAK --- S05 · LOC_L2_CORRIDOR · 2일째 저녁 · LIGHT_L2_EVENING (P47 LIGHT_L2_DUSK)

### panel_043
- scene_id: S05 / location: LOC_L2_CORRIDOR · 원경(회랑에서 안마당 너머)
- beat: ⑦ ⟨회수 RH③⟩ · 긴장 6 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 저녁 · LIGHT_L2_EVENING (주황 · 호박 노을, 분홍 · 보라 없음)
- camera: 회랑에 선 눈높이, 원경 wide
- composition: 맨 위 얇은 띠(y 0–6%) 처마 끝. 하늘(y 6–34%) 따뜻한 주황 — 비워 둔다. 맞은편 기와지붕(y 34–48%)에 노을. 안마당 건너(y 54–70%, x 30–64%) 군사 둘 사이 끌려가는 넓고 낮은 실루엣(머릿수건, 긴 국자 형태), 얼굴 없음. 앞쪽은 회랑 기둥 두 개가 양옆 프레임
- characters: HONG(원경 실루엣 상태 토큰) · 군사 엑스트라 2
- emotion: 혐의의 끝(가짜 해소 시작)
- props: PROP_LADLE(실루엣)
- dialogue_ref (1): ① 홍 숙수(소리) shout "내 국은 깨끗해! 삼십 년 지킨 솥이야!" (꼬리 ↓ 원경 실루엣)
- art_space: **하늘(x 6–94%, y 7–32%)** — 조용한 주황 하늘
- attach: refs/HONG_turnaround.png, refs/LOC_L2_R_plate.png
- fx/note: 엑스트라 회색 옷, 무기 뽑지 않음. 밤 · 노을 보라 금지.

### panel_044
- scene_id: S05 / location: LOC_L2_CORRIDOR (뒤에서, 안마당 쪽을 봄)
- beat: ⑦ 고요 · 상궁의 침묵 · 긴장 5.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 저녁 · LIGHT_L2_EVENING
- camera: 뒤에서 눈높이 medium
- composition: 회랑에 나란히 선 채령(화면 오른쪽, x 52–80%)과 민 상궁(화면 왼쪽, x 18–48%)의 뒷모습, 둘 다 기둥 너머 안마당 · 노을을 봄. 상궁의 RIGHT 손(화면 오른쪽 쪽, 채령 곁)이 손수건을 쥔 채 **움직이지 않음**. 긴 그림자가 마루에
- characters: MIN(나란히 선 뒷모습 상태 토큰) · CHAERYEONG(뒷모습 상태 토큰)
- emotion: 고요
- props: PROP_HANKY_CLEAN(얼룩 모서리 접힘)
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/MIN_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 이 손은 긴장을 올리지 않게, 평범하게.

### panel_045
- scene_id: S05 / location: LOC_L2_CORRIDOR
- beat: ⑦ 또 뱉으려 함 · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 저녁 · LIGHT_L2_EVENING
- camera: 채령 쪽 낮은 위치에서 상궁을 올려다보는 two-shot (로우 → 하이)
- composition: 앞쪽 아래 오른쪽(x 50–96%, y 50–100%) 채령의 3/4 뒤통수 · 옆얼굴이 위를 봄. 중경 왼쪽(x 14–52%, 머리 y 26–42%) 민 상궁이 내려다봄. 위 22%는 처마 밑 · 주황 하늘
- characters: CHAERYEONG(FULL, 표정 ⑥) · MIN(SHORT, 표정 ③)
- emotion: 다시 말하려는 정직함
- props: PROP_HANKY_CLEAN
- dialogue_ref (1): ① 채령 dialogue "숙수님은… 아니에요." (꼬리 ↘ 채령)
- art_space: **위 22%(x 4–96%, y 2–22%)** — 처마 밑 · 하늘
- attach: refs/CHAERYEONG_expressions.png, refs/MIN_turnaround.png
- fx/note: —

### panel_046
- scene_id: S05 / location: LOC_L2_CORRIDOR
- beat: ⑦ ⟨이중의미 D2⟩ ⟨복선 B②⟩ · 긴장 4.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 2일째 저녁 · LIGHT_L2_EVENING
- camera: 눈높이 close two-shot
- composition: 민 상궁(머리 y 24–42%, x 28–70%)이 채령을 품에 안음 — 상궁 얼굴 위, 채령 얼굴 아래(y 46–70%) 상궁 가슴에 기댐. 상궁의 LEFT 소매가 채령 등 뒤로 감김. 위 22%는 처마 밑 · 노을 하늘
- characters: MIN(FULL, 품에 안음 상태 토큰, 표정 ③) · CHAERYEONG(SHORT)
- emotion: 온기(재독 시 명령 예고)
- props: 손수건 안 보이거나 CLEAN
- dialogue_ref (1): ① 민 상궁 dialogue "쓴 것을 삼켜야 사는 거란다, 얘야." (꼬리 ↓ 상궁)
- art_space: **위 22%(x 4–96%, y 2–22%)** — 상궁 머리 위 처마 · 하늘
- attach: refs/MIN_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 민 상궁 shout 아님.

### panel_047
- scene_id: S05 / location: LOC_L2_CORRIDOR · VIEW_R 근사
- beat: ⑦ 회차 최저점 · 안도 · 긴장 4 · gap_after **400**(가장 긺)
- size: large · aspect: **9:16**
- time/light: 해 질 녘 · LIGHT_L2_DUSK (노을이 진 푸른 저녁 + 등롱이 하나둘 켜짐)
- camera: 눈높이 조용한 medium wide
- composition: VIEW_R에 가깝게: 화면 왼쪽 1/3 기준 기둥 + 빈 당번 판(연두 끈 가운데 줄), 기둥 오른쪽 처마 등롱이 막 켜짐, 먼 처마에 작은 등롱 두어 개. 기둥 옆(x 34–70%, y 46–90%) 품에 안긴 채령이 눈을 감음, 상궁이 안고 있음. 위쪽 여백 넉넉
- characters: CHAERYEONG(FULL, 안도 `eyes softly closed in relief…`) · MIN(SHORT, 품에 안음)
- emotion: 진짜 안도(가짜 해소)
- props: PROP_LANTERN(켜지기 시작, 무지) · PROP_DUTYBOARD(BLANK)
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/LOC_L2_R_plate.png, refs/CHAERYEONG_expressions.png, refs/MIN_turnaround.png
- fx/note: 푸른 저녁이 보라로 흐르면 REGEN.

--- SCENE BREAK --- S06 · LOC_L2_CORRIDOR · 2일째 밤 · LIGHT_L2_NIGHT

### panel_048
- scene_id: S06 / location: LOC_L2_CORRIDOR · VIEW_R
- beat: ⑧ 같은 장소, 다른 빛 · 긴장 6.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT (짙은 남청 밤, 켜진 등롱 하나, 차가운 달빛)
- camera: [R-WIDE] P05와 같은 카메라 · 거리 · 높이
- composition: [R-WIDE 반복] P05와 같은 문장: 기둥 x 22–34%, 빈 당번 판 y 48–60%(연두 끈 = **가운데 줄**), 기둥 오른쪽 처마 등롱(x 36–44%, y 10–22%) **켜짐**, 오른쪽 숙소 문들, 왼쪽 안마당 · 기와. 기둥 옆 같은 자리(x 40–70%, y 45–90%)에 민 상궁 혼자 손수건으로 손을 닦음(이 거리에선 얼룩 안 보임). 오른쪽 위(x 48–96%, y 3–24%) 어두운 회벽 · 처마 밑
- characters: MIN(FULL, 손가락을 닦음 상태 토큰, 표정 ⑤)
- emotion: 독자가 "그 장면"을 알아봄 — 서늘함
- props: PROP_DUTYBOARD(BLANK, 가운데 줄) · PROP_LANTERN(켜짐) · PROP_HANKY_CLEAN(원거리)
- dialogue_ref: — 무대사 —
- art_space: silent (단 P05와 같은 오른쪽 위를 조용하게 유지 — 구도 일치용)
- repeat: R-WIDE ← **panel_005**. 바뀌는 것: 빛 아침 → 밤 · 등롱 꺼짐 → 켜짐 · 인물 2 → 상궁 혼자, 손을 닦음 · 연두 끈 위 → 가운데 줄
- attach: panel_005.png, refs/MIN_turnaround.png, refs/PROP_HANKY_pair.png
- fx/note: 앞 여백 400 뒤 등장. 구조물 위치가 P05와 다르면 REGEN.

### panel_049
- scene_id: S06 / location: LOC_L2_CORRIDOR
- beat: ⑧ ⟨회수 A-냄새③⟩ ⟨이중의미 D3 반복⟩ · 긴장 7.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT — 등롱 역광
- camera: 눈높이 two-shot, 상궁 등 너머
- composition: 앞쪽 왼쪽(x 0–40%, y 30–100%) 민 상궁의 등 · 낮은 쪽머리 + 은비녀(돌아보지 않음). 그 위 뒤쪽 처마에 켜진 등롱(x 14–28%, y 30–40%) — 역광. 중경 오른쪽(x 52–84%, 머리 y 36–50%) 다가오다 멈춘 채령. 위 28%는 남청 밤하늘 · 처마 밑
- characters: CHAERYEONG(FULL, 걸음을 멈춤 `stopping short, eyes slowly widening`) · MIN(뒷모습, SHORT)
- emotion: 냄새가 다시 — 불길함
- props: PROP_LANTERN(켜짐) · PROP_HANKY_CLEAN(보이면)
- dialogue_ref (2): ① 채령 thought "…쓴 냄새." (위 오른쪽) / ② 민 상궁 dialogue "코는 여전하구나, 얘야." (위 왼쪽 조금 아래, 꼬리 ↓ 상궁의 등)
- art_space: **위 28%(x 4–96%, y 2–28%)** — 남청 하늘 · 처마 밑. 등롱은 y 30% 아래
- attach: refs/CHAERYEONG_expressions.png, refs/MIN_turnaround.png
- fx/note: P07과 같은 대사, 이번엔 얼굴을 보이지 않는다.

### panel_050
- scene_id: S06 / location: LOC_L2_CORRIDOR (손 클로즈업, 배경 흐림)
- beat: ⑧ ⟨회수 A-시각③⟩ 공백 컷 1 · 긴장 8 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT — 등롱 주황빛 + 남청 그림자
- camera: [R-HAND] P08과 같은 카메라
- composition: [R-HAND 반복] P08과 같은 문장: 두 손 가운데(x 20–80%, y 45–88%), 연청 손수건으로 손가락을 닦음, **얼룩 모서리 화면 오른쪽 아래(x 66–76%, y 74–84%) · 손가락 한 마디 크기 · 같은 연보라**, 자두색 소맷부리, 위 38% 흐린 배경(밤 그늘). 얼굴 없음
- characters: MIN(손 상태 토큰 — 손가락을 닦음)
- emotion: 확인 — 침묵
- props: **PROP_HANKY_STAIN**
- lilac: **YES (예약 ④)** — P08 문장과 같음: `the only pale lilac in the image is one small faint stain on a corner of the handkerchief`
- dialogue_ref: — 무대사 —
- art_space: silent (단 P08과 같은 위 38%를 조용하게 유지 — 구도 일치용)
- repeat: R-HAND ← **panel_008**. 바뀌는 것: 빛만(아침 → 등롱 밤)
- attach: panel_008.png, refs/PROP_HANKY_pair.png
- fx/note: 얼룩의 자리 · 크기 · 색이 P08과 다르면 REGEN(필수).

### panel_051
- scene_id: S06 / location: LOC_L2_CORRIDOR (ECU)
- beat: ⑧ 공백 컷 2 · 깨달음의 박자 · 긴장 8.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT
- camera: extreme close-up, 눈
- composition: 채령의 눈(x 10–90%, y 40–80%), 동공에 등롱 불빛 한 점. 주변은 남청 그늘. (선택) P21과 같은 프레이밍
- characters: CHAERYEONG(FULL 눈, 표정 ④→⑧ 사이)
- emotion: 알아버림
- props: —
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/CHAERYEONG_expressions.png, panel_021.png(선택)
- fx/note: 동공의 불빛은 주황, 보라 반사 금지.

### panel_052
- scene_id: S06 / location: LOC_L2_CORRIDOR
- beat: ⑧ ⟨반전: 주력 공개 1⟩ · 긴장 9 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT (+ LIGHT_LANTERN_FACE 선택)
- camera: 정면 눈높이 medium (앵글로 악역을 만들지 않음)
- composition: 민 상궁(x 18–62%, 머리 y 28–44%)이 천천히 돌아섬, 낮과 같은 온화한 미소. 등롱빛이 그녀의 RIGHT 쪽(화면 왼쪽)을 데움. 머리 오른쪽(x 62–98%, y 4–32%)은 어두운 기둥 · 남청 그늘. 아래 오른쪽 가장자리에 초점 밖 채령의 어깨 · 땋은 머리(선택)
- characters: MIN(FULL, 표정 ①) · CHAERYEONG(SHORT, 가장자리)
- emotion: 미소가 그대로라 무섭다
- props: PROP_HANKY_CLEAN
- dialogue_ref (1): ① 민 상궁 dialogue "독은 왕자 마마 것이 아니었다." (꼬리 ↙ 상궁)
- art_space: **머리 오른쪽(x 62–98%, y 4–32%)** — 어두운 기둥 · 밤 그늘
- attach: refs/MIN_expressions.png, refs/MIN_turnaround.png
- fx/note: 같은 흰 dialogue 말풍선(악역 표시 없음).

### panel_053
- scene_id: S06 / location: LOC_L2_CORRIDOR
- beat: ⑧ ⟨반전: 주력 공개 2 · 정점⟩ · 긴장 9.5 · gap_after 20
- size: large · aspect: **9:16**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT + **LIGHT_LANTERN_FACE**(얼굴 반만 따뜻, 반은 남청 그림자)
- camera: 정면 close-up, 아주 약한 더치 허용
- composition: 민 상궁 얼굴(x 12–70%, y 34–80%) 같은 미소. 등롱 쪽(화면 왼쪽) 반만 따뜻. 화면 오른쪽 위(x 46–98%, y 2–32%)는 깊은 남청 그림자. LEFT 관자놀이 흰 머리(화면 오른쪽)는 y 34% 아래
- characters: MIN(FULL, 표정 ①)
- emotion: 반전 정점 — 같은 얼굴, 다른 의미
- props: —
- dialogue_ref (2): ① 민 상궁 dialogue "은침이 못 잡는 독을" / ② 민 상궁 dialogue "알아볼 아이를 찾고 있었지." (꼬리 ↙ 상궁)
- art_space: **오른쪽 위(x 46–98%, y 2–32%)** — 얼굴 어두운 쪽의 남청 그림자(풍선 둘, 위아래)
- attach: refs/MIN_expressions.png, refs/MIN_turnaround.png
- fx/note: 차가운 · 악한 표정 금지(빛만 바뀜).

### panel_054
- scene_id: S06 / location: LOC_L2_CORRIDOR
- beat: ⑧ ⟨회수 C⟩ · 긴장 9 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT
- camera: 상궁 over-the-shoulder, 눈높이보다 약간 높게
- composition: 앞쪽 왼쪽(x 0–42%, y 34–100%) 한 걸음 다가서는 민 상궁의 어깨 · 낮은 쪽머리 + 가로 은비녀(뒤에서). 중경 오른쪽(x 50–84%, y 52–98%) 채령의 남색 치마 아래 흰 버선 발과 마루 위 긴 그림자 — 채령 얼굴은 프레임 위 밖. 위 30%는 어두운 처마 밑 · 남청 밤
- characters: MIN(SHORT, 뒤에서 어깨, 표정 ④는 보이지 않음) · CHAERYEONG(발 · 그림자 상태 토큰)
- emotion: 다가오는 압박
- props: —
- dialogue_ref (1): ① 민 상궁 dialogue "다들 왕자 마마를 보더구나. 나는 너를 봤다." (꼬리 ↙ 상궁)
- art_space: **위 30%(x 4–96%, y 2–30%)** — 그림자 위 어두운 처마 밑
- attach: refs/MIN_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 회상 이미지 없음(P31은 독자 기억으로).

### panel_055
- scene_id: S06 / location: LOC_L2_CORRIDOR
- beat: ⑧ ⟨회수 B · D1 의미 전환⟩ · 긴장 8.5 · gap_after **240**
- size: medium · aspect: **3:4**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT
- camera: 눈높이 two-shot medium + 손이 읽히는 거리
- composition: 화면 왼쪽(x 6–48%, 머리 y 40–54%) 민 상궁이 손수건을 천천히 접어 LEFT 소맷부리에 넣음(손 y 66–80%, 선명) — 얼룩 안 보임. 화면 오른쪽(x 56–92%, 머리 y 42–56%) 반 걸음 물러선 채령. 위 38%는 남청 하늘 · 처마 밑
- characters: MIN(FULL, 손수건을 접어 넣음 상태 토큰, 표정 ⑤) · CHAERYEONG(SHORT, 표정 ⑧)
- emotion: 덫이었다는 깨달음
- props: PROP_HANKY_CLEAN(접힘, 얼룩 안쪽)
- dialogue_ref (2): ① 민 상궁 dialogue "그래서 꼭 네가 앉아야 했던 거란다." (위 왼쪽, 꼬리 ↓ 상궁) / ② 채령 thought "나를… 낚은 거야." (위 오른쪽 조금 아래)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 남청 밤하늘 · 처마 밑
- attach: refs/MIN_turnaround.png, refs/CHAERYEONG_expressions.png, refs/PROP_HANKY_pair.png
- fx/note: P50 뒤에는 얼룩을 다시 보이지 않는다.

### panel_056
- scene_id: S06 / location: LOC_L2_CORRIDOR (큰 클로즈업)
- beat: ⑨ ⟨진짜 이름 2회째 · 마지막⟩ · 긴장 9.5 · gap_after 40
- size: large close-up · aspect: **1:1**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT + LIGHT_LANTERN_FACE
- camera: 정면 눈높이 big close-up(입가 · 눈)
- composition: 민 상궁 얼굴이 눈썹~턱으로 잘림(x 0–68%, y 10–100%), 입술이 막 열림. 등롱 쪽(화면 왼쪽) 따뜻, 오른쪽 그림자. 화면 오른쪽(x 70–98%, y 6–40%)은 얼굴 너머 남청 어둠
- characters: MIN(FULL, 표정 ⑥)
- emotion: 이름이 무기가 됨
- props: —
- dialogue_ref (1): ① 민 상궁 dialogue "채령아." (꼬리 ← 입)
- art_space: **오른쪽 위(x 70–98%, y 6–40%)** — 얼굴 옆 어두운 배경
- attach: refs/MIN_expressions.png
- fx/note: 흰 머리 한 가닥은 잘려도 되나, 보이면 LEFT(화면 오른쪽).

### panel_057
- scene_id: S06 / location: LOC_L2_CORRIDOR · VIEW_R 근사
- beat: ⑨ 공백 컷 · 침묵 · 긴장 9.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT
- camera: 눈높이 세로로 긴 전신 shot
- composition: 켜진 등롱 아래(등롱 x 36–44%, y 8–18%) 혼자 얼어붙은 채령의 전신(x 34–62%, y 34–96%), RIGHT 허리 노리개를 쥔 손. 위쪽 큰 남청 여백 = 침묵. 기둥 · 당번 판은 화면 왼쪽
- characters: CHAERYEONG(FULL, 노리개 쥠, 표정 ⑧)
- emotion: 얼어붙음
- props: PROP_NORIGAE · PROP_LANTERN(켜짐) · PROP_DUTYBOARD(BLANK)
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/CHAERYEONG_turnaround.png, refs/CHAERYEONG_expressions.png, refs/LOC_L2_R_plate.png
- fx/note: —

### panel_058
- scene_id: S06 / location: LOC_L2_CORRIDOR · VIEW_R 방향
- beat: ⑨ ⟨회수: 제목 동사⟩ · B 메아리 · 긴장 9.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT
- camera: [R 메아리] 눈높이 medium — P05의 손 동작 구도를 가깝게
- composition: P05처럼 기둥이 화면 왼쪽(x 4–18%), 민 상궁(3/4, x 22–62%)이 채령(x 44–86%, 고개 조금 숙임, 뒤 3/4)의 땋은 머리 끝 붉은 댕기를 다시 고쳐 맴 — P05와 같은 손. 손수건 안 보임. 오른쪽 위(x 46–96%, y 3–24%) 어두운 회벽 · 처마 밑
- characters: MIN(FULL, 댕기를 고쳐 맴 상태 토큰 — `her handkerchief tucked away out of sight`, 표정 ②) · CHAERYEONG(SHORT, 댕기를 고쳐 매임, 표정 ⑧)
- emotion: 같은 다정함 = 목줄
- props: PROP_DUTYBOARD(BLANK) · PROP_LANTERN(켜짐)
- dialogue_ref (1): ① 민 상궁 dialogue "내일도 시식해라." (꼬리 ↙ 상궁)
- art_space: **오른쪽 위(x 46–96%, y 3–24%)** — P05와 같은 쪽의 어두운 회벽 · 처마 밑
- repeat: R 메아리 ← **panel_005**. 바뀌는 것: 와이드 → 미디엄 · 아침 → 밤 · 손수건 소매 속 · 채령 ⑧
- attach: panel_005.png, refs/MIN_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: —

### panel_059
- scene_id: S06 / location: LOC_L2_CORRIDOR (클로즈업)
- beat: ⑨ ⟨반전: 요구 1단⟩ · 긴장 10 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT + LIGHT_LANTERN_FACE
- camera: 정면 close-up
- composition: 민 상궁 얼굴(x 10–66%, y 26–96%) 같은 미소. 화면 오른쪽 위(x 56–98%, y 2–30%)는 남청 어둠
- characters: MIN(FULL, 표정 ①)
- emotion: 다정한 명령
- props: —
- dialogue_ref (1): ① 민 상궁 dialogue "이번엔 입을 다물고." (꼬리 ↙ 상궁)
- art_space: **오른쪽 위(x 56–98%, y 2–30%)** — 얼굴 옆 어두운 배경
- attach: refs/MIN_expressions.png
- fx/note: 민 상궁 shout 금지.

### panel_060
- scene_id: S06 / location: LOC_L2_CORRIDOR (클로즈업)
- beat: ⑨ 결과 보류 클리프행어 · 긴장 10 · gap_after **320**(끝)
- size: large · aspect: **9:16**
- time/light: 2일째 밤 · LIGHT_L2_NIGHT (등롱이 얼굴 한쪽만)
- camera: 눈높이 face close-up, 세로 큰 컷
- composition: 채령 얼굴(x 14–86%, y 22–74%), 대답 없음, 시선은 화면 밖 왼쪽(왕자 처소 쪽). 위는 남청 어둠. **아래 12%(y 88–100%)는 평평한 어두운 띠**(끝 캡션)
- characters: CHAERYEONG(FULL, 표정 ⑧)
- emotion: 결과 보류 — 침묵
- props: —
- dialogue_ref: 대사 없음 · narration 캡션 1 — KM 캡션 "— នៅមានតក្នុងភាគទី ២ —"
- art_space: **아래 띠(x 0–100%, y 88–100%)** — 평평한 어두운 배경(캡션 자리)
- attach: refs/CHAERYEONG_expressions.png
- fx/note: 회차 마지막 큰 컷.

---

## F. 점검

- [x] 패널 수 **60**(≥50), panel_001–panel_060 연속, 대본 P01–P60과 1:1
- [x] 모든 패널에 scene_id / location(LOC_*) / time·light. 같은 씬 = 같은 장소 · 시간대 · 실내외. SCENE BREAK 5곳(S01→S02→S03→S04→S05→S06)
- [x] `art_space` 기재: 대사 · 생각 · 효과음 · 캡션 있는 **50패널 전부** (P01 · P03–P10 · P12 · P13 · P15–P43 · P45 · P46 · P49 · P52–P56 · P58–P60). 무대사 10패널(P02 · P11 · P14 · P44 · P47 · P48 · P50 · P51 · P57 · P60*)은 silent — *P60은 캡션 띠만
- [x] 반복 컷: P05 = P48 · P08 = P50 · P04 = P24 · P05 → P58, 짝은 같은 비율 · 같은 art_space
- [x] 연보라: P08 · P16 · P29 · P50만 `lilac:` 줄. STAIN = P08 · P50만. P30 왕자 그릇 프레임 밖, P31 손수건 소매 속, P41 손끝 재 회색
- [x] 글이 적힐 물건 BLANK: 당번 판 · 패(P05 · P09 · P12 · P47 · P48 · P57 · P58), 서랍 이름표(P33–P42), 등롱 · 병풍 · 그릇(전체)
- [x] 큰 컷 · 정지: P01 · P25 · P29 · P48 · P53 · P56 · P57 · P60 + 와이드 P13 · P31 · P33 · P39 · P43 · P47. 반전 연쇄(P20–P23, P49–P53)는 SQ/짧은 gap으로 잘게
- [x] 2풍선 13패널 · 3풍선 P13(9:16로 공간 확보) — script-editor 통계와 일치

## H. 하류 인계 (팀 메시징 대체)

| 대상 | 가져갈 것 |
|---|---|
| **letterer** | 각 패널 `art_space`(그대로 lettering spec `art_space`로) · `dialogue_ref`의 read_order · 꼬리 방향 · 화면 밖 화자(P15 → 오른쪽 가장자리, P43 → 원경 실루엣, P08 → 위 가장자리) · sfx 자리(P25 · P29 · P31 · P33) · P60 캡션 띠 · §D gap_after |
| **prompt-smith** | §A 장소 표(LOC · VIEW · LIGHT) · `aspect` · `characters`(FULL/SHORT/상태 · 표정 번호) · `props`(BLANK 문구) · `lilac:` 4패널만 · §C 반복 컷(원본 PNG 첨부, 다시 그림) · `attach` · P23 Avoid 줄 예외 · 각 art_space를 style-bible §8 영문 문장으로 |
| **panel-validator** | §C 반복 짝 비교 기준(좌표) · 연보라 4패널 · STAIN 2패널 · 좌우 표식 · BLANK 물건 · art_space 비었는지 |
| **art-director** | 새 LOC 요청 없음. P13 비율 9:16 상향(§B) 통보 |
