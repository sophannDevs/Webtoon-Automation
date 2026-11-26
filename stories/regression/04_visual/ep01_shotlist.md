# EP01 샷리스트 — 「그날 나는 증거를 숨겼다」 «ថ្ងៃនោះ ខ្ញុំបានលាក់ភស្តុតាង» · 「두 번째 변론」 story-9 `regression`

- 작성: panel-director · 2026-11-26 · Phase 4 (Flow-by-hand mode + Khmer edition)
- 게이트: `python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py gate --episode 01` → **OK** (Khmer review READY round 1, sha256 9daed29f8b9a…). 그 뒤에 `ep01_script_final.md`를 읽었다(수정하지 않음).
- 입력: `03_episode/ep01_script_final.md` · `ep01_beatsheet.md` · `02_story/world.md` §6–10·§14 · `characters.md` §11 · `twist-plan.md` §0·§7(TF-1–TF-12) ·
  `tension-curve.md` §3 · `00_input/brief.md` 판정 S·X·Y·Z·AB–AG. 형식 참고만: `stories/story-8/04_visual/ep01_shotlist.md`.
- 스킬: `webtoon-panel-breakdown` 작업 A + `references/composition-grammar.md` · `webtoon-flow-handoff` · `webtoon-khmer-edition` §3–4.
- **패널 60** = panel_001 … panel_060 = 대본 P01 … P60 (1:1, 번호 그대로, **P61 없음** — 판정 Y). 무대사 23 · `env` 1 (011) · 효과음 3 (011·012·039) · 엔딩 카드 없음.
- 초안은 style-bible.md / character-sheets.md가 없을 때 썼고, 마무리 직전에 두 파일이 나와 **맞췄다**: 빛 코드 = style-bible §3, 레지스터 = §4 (REG-*),
  장소 변형 이름 = §5 (`EXT_GATE`·`TOWER_FRONT_DOOR`), 매치 구도 = §7 FRAME-*, 레퍼런스 카드 이름·첨부 = character-sheets §4·§5, 장갑 손 = §2-2 `HAND_ANON_GLOVE`.
  남은 차이는 끝의 Flags에.
- 하류: prompt-smith(`ep01_prompts.md`, Flow 형식) · letterer(`ep01_lettering.md`의 `art_space`·`place`·`gap_after`) · ref-sheet-artist(`refs/ref_prompts.md` 카드 이름).

---

## 0. 전역 규칙 (모든 패널 공통)

1. **이미지 안에 글자가 전혀 없다.** 말풍선·캡션·효과음 글자·간판·숫자·가짜 글씨·로고·워터마크 금지. 말풍선·크메르어·`env`·효과음은 뷰어(`km_tool.py build`)가 쓴다.
   폰·노트북 화면 = 빈 빛, 메모리카드 = 라벨 없음, 만년필 = 각인 없음, 수의 패치·제복 휘장·명찰 = 무지, 번호판 = 무지 판, 분식집 메뉴판 = 빈 색판,
   지폐·동전 = 무늬·숫자 없는 흐린 색, 시계 = 바늘만(문자판 숫자 없음). prompt-smith는 모든 프롬프트 끝에
   `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
2. **화면비:** Flow의 모든 이미지는 **9:16 세로**다. 아래의 `height`(tall / normal / short)와 `gutter_after`는 **세로 스크롤 리듬 메모일 뿐**
   (letterer의 `gap_after`, compositor의 간격 참고). 그림 비율을 바꾸라는 뜻이 아니다. short 패널은 9:16 안에서 피사체를 가로 띠처럼 모아 그리고
   나머지를 차분한 배경으로 둔다(그 빈 면이 대개 `art_space`가 된다).
3. **`art_space`** = 말풍선·`env`·효과음이 들어갈 자리. 그 영역은 **차분하고 비어 있는 배경**(어둠·벽·하늘·김·바닥)으로 두고 얼굴·손·핵심 소품을 넣지 않는다.
   letterer는 이 칸을 그대로 옮기고 `place`를 그 안에 잡는다. 무대사 패널 = `art_space: 없음(silent)`.
4. **패널 레지스터 4종 (world §8-2 = style-bible §4, 문장은 style-bible 그대로):**
   - `present` = **REG-PRESENT** 두 번째 삶(여름) 표준 작화, 테두리 없음.
   - `first-life winter` = **REG-WINTER** 콜드 오픈: 표준 작화 + 남색·청회 겨울 팔레트, 서리, 입김(흐림·탈색 없음).
   - `memory` = **REG-MEMORY** 기억 컷: **차갑게 탈색된 청회색, 낮은 대비, 네 가장자리 흐림**, 테두리 선 없음. 뷰어 말풍선 `memory` 타입.
   - `record` = **REG-RECORD** 블랙박스 영상 속 장면: **녹회색으로 바랜 색, 광각 휘어짐, 가는 스캔 라인·그레인, 얇은 이중 검은 테두리 + 둥근 모서리를 그림 안에**.
     타임스탬프·REC·UI·숫자·번호판 0(오버레이 금지 문장). 반지의 초록만 채도. 소리 없음(말풍선·효과음 0).
   - 초자연 연출 금지(V7): 빛 번짐·과장 비네팅·이중 노출·운명 효과 없음. 기억/기록 컷은 색·테두리로만 구분.
5. **채도 규칙:** 반지의 초록(#2E5E4E)과 리본핀의 검정(밝은 앞치마 위)이 각자 장면에서 가장 눈에 띄는 점. **어떤 인물의 옷·소품에도 초록 금지.**
   회귀 금빛(#E8A93C)은 빛에만, 그리고 S2–S4(회귀·회귀 직후)에만.
6. **15+:** 밀침은 다른 사람의 손이 분명하게(자해로 읽힐 여지 0). 추락하는 몸·착지·피·충격 순간 0(008·010·048–049). 사고 피해 노인은 등만.
7. **TF-1 콜드 오픈 규칙 (판정 S·Z, 001–010 전부):** ① 미는 손 = 검은 가죽 장갑 + 흰 셔츠 소매 끝 은색 사각 오닉스 커프스(맨손 금지)
   ② 손 크기를 잴 기준물 0(손가락 셋 + 손바닥 아랫부분 + 커프스만, 손 전체·다른 손·얼굴과 한 프레임 금지) ③ 소매 = 특정 코트로 읽히지 않는
   "짙은 울 코트 소매"(남색/차콜 구별 불가, 단추·질감 특정 0) ④ 멘토(태호44)의 손은 콜드 오픈 어디에도 없다 ⑤ 멘토 목소리는 **화면 왼쪽 밖**,
   장갑 손은 **화면 오른쪽 밖**에서 ⑥ 002는 진우 왼어깨 바로 바깥에서 잘린다. 지팡이 손잡이(은색)·고문·준서 얼굴 0.
8. **악역 인상 금지 / 재독 원칙:** 고문(여한목)은 다정하게, 서늘한 조명·의미 있는 시선 금지(024·039·040). 봉구의 고정 문장 컷(027)은 평범하게,
   진우 반응 0. 수아(057)는 무표정·차갑게 정중, 아는 눈빛·의미심장한 조명 0. 기 대표는 거만 → 두려움, 과장 금지.
9. **장소 연속성:** 같은 scene_id = 같은 LOC·같은 시간대·같은 빛. 장소·레지스터가 바뀌는 곳에만 `--- SCENE BREAK ---`.
   기억/기록 삽입 컷은 자기 scene_id(…m / …r)를 갖는다.
10. **분할 프레임·인셋 금지.** "상하 대비"(036)·"분할 반응"(045)도 **한 장면 안의 깊이·배치**로 그린다(Flow 한 장 = 한 패널).

### 0-1. 빛 코드 (light code) = style-bible §3 그대로 — 영문 조명 문장은 style-bible에서 복사

| code | 패널 | 요지 |
|---|---|---|
| `L-ROOF-WINTER` | 001–009 | 남색 겨울밤, 계단실 문 위 철망 흰 전구 하나, 난간 서리, 멀리 도시 호박빛, 입김, 눈 없음 |
| `L-ALLEY-WINTER-DOWN` | 010 | 높은 곳에서 수직으로 내려다본 겨울밤 골목, 맨가지, 빈 흰 가로등 원 하나, 아래로 순백 페이드 |
| `L-VISIT-GOLD` | 011–018, 020–021 | 높은 철망 창의 여름 저녁 금빛 사선이 유리 칸막이를 가로지름, 먼지, 녹백 형광(하나 깜빡). 011만 흰빛 → 금빛 |
| `L-VISIT-FLUO` | 022–023 | 같은 씬, 해가 기울어 금빛이 먼 벽에 가늘고 낮게, 녹백 형광 |
| `L-MEM-VISIT` | 019 | REG-MEMORY + 평평한 형광 복도 빛 |
| `L-MEM-OFFICE` | 024 | REG-MEMORY + 부드러운 확산 오후광, 흐린 회색 사무실, 다정하게, 굳은 그림자 0 |
| `L-OUT-GOLD` | 025–026 | 야외 여름 저녁, 낮은 금빛, 콘크리트 위 긴 그림자, 습한 공기 |
| `L-TOWER-NIGHT` | 027 | 습한 여름밤, 유리 너머 불 꺼진 로비, 손전등 빛 + 희미한 푸른 거리빛 |
| `L-BOOTH-NIGHT` | 028 | 습한 여름밤, 경비실 창의 노란 불, 작은 선풍기, 비탈 아래 흰 가로등 |
| `L-FLOOR-NIGHT` | 029–030 | 밤, 사무 층 대부분 꺼짐, 파트너 유리방과 책상 스탠드 하나만, 어두운 유리에 비친 사람 |
| `L-ROOM-LAMP` | 031–034 | 늦은 밤, 따뜻한 책상 스탠드 하나, 선풍기, 어두운 구석, 건너편 건물 불 켜진 창 |
| `L-FLOOR-MORNING` | 035–040 | 아침, 회청 형광 + 북쪽 큰 창의 흰 낮빛, 창밖 짙은 초록 느티나무 머리 |
| `L-MEETING-AFTERNOON` | 041–046, 053 | 오후, 테이블에 긴 흰 창빛 띠, 얼굴 반역광. 046은 빛이 태호 얼굴에 늦게 닿음 |
| `L-ROOM-LAPTOP` | 047, 054 | 밤, 어두운 방, 노트북의 차가운 푸르스름한 빈 빛이 얼굴에, 화면은 보는 사람 반대쪽 |
| `L-RECORD` | 048–051 | REG-RECORD 문장이 조명 포함(헤드라이트·가로등만) |
| `L-MEM-ANCHOR` | 052 | REG-MEMORY + 밤, 왼쪽 위 흰 가로등, 벽에 붉은·푸른 경광 반사, 경찰차 0 |
| `L-ALLEY-SUMMER-NIGHT` | 055 | 습한 여름밤, 빈 굽이의 흰 가로등 원, 비탈 아래 분식집 노란빛이 번져 올라옴 |
| `L-BUNSIK` | 056–058, 060 | 김 서린 따뜻한 노랑, 떡볶이 철판의 붉은 반사, 김 낀 유리문 밖 어둠. 060은 얼굴 한쪽 노란빛 + 김 속 배경 |
| `L-MEM-FUNERAL` | 059 | REG-MEMORY + 어둑하고 부드러운 실내광 |

- 같은 scene_id 안 빛 변주는 style-bible이 허용한 것만: S3의 `L-VISIT-GOLD` → `L-VISIT-FLUO`(022–023, 해가 기움), 019 기억 컷.

### 0-2. 리듬 범례 (Flow 비율과 무관)

| height | 쓰임 | | gutter_after | 여백(px, letterer `gap_after` 참고) | 쓰임 |
|---|---|---|---|---|---|
| `tall` | 설정샷·정점·반전·매치 컷(007·036·040, 050·053) | | `tight` | 0–20 | 연속 동작, 빠른 대화, 053 직전 |
| `normal` | 기본 대화·클로즈업 | | `normal` | 40–60 | 기본 |
| `short` | 인서트·손·빠른 합 | | `wide` | 140–180 | 정적, 반전 앞뒤, 정지 |
| | | | `xwide` | 280–360 (빈/검은 여백) | 시간 점프, 씬 대전환 |

size 어휘(composition-grammar §1): `insert` / `small` / `medium` / `large` / `full-bleed`.

### 0-3. 레퍼런스 카드 (character-sheets §4·§5 확정판 — 필수 13장 + 선택 1장)

| 카드 (`refs/…png`) | 내용 |
|---|---|
| `JINU28_turnaround` · `JINU28_expressions` | 서진우 28 `JINU28_SUIT` 전신 4포즈 / 표정 6컷 |
| `JINU35_sheet` | 서진우 35 `JINU35_WINTER` 전신 3 + 머리 3(장갑 없음, 왼손목 은시계) |
| `TAEHO37_turnaround` · `TAEHO37_expressions` | 조태호 37 `TAEHO37_OFFICE` (늦게 굳는 미소 1/2·2/2 포함) |
| `TAEHO44_heads` | 조태호 44 머리-어깨 3컷만(손·소매·장갑·커프스 0) — 005·009 |
| `HANMOK_sheet` | 여한목 `HANMOK_OFFICE` 전신 3(지팡이 **왼손**) + 머리 2 + 오른손 클로즈업(커프스 0) |
| `DEOKBAE_sheet` | 임덕배 수의 + 배달 차림, 흉터·화상 |
| `SUA_sheet` | 임수아 `SUA_WORK` + 리본핀 클로즈업 |
| `SANGDU_sheet` · `MINJAE_sheet` · `BONGGU_sheet` | 기 대표 / 민재(맨손 클로즈업 포함) / 봉구 |
| `JUNSEO_hand` | 마준서 오른손 4컷(반지, 걷은 흰 소매, 얼굴 0) — 050·051 |
| `PROPS_keyprops` | **선택(리더 승인 시)** 소품 도감: 카드 진짜/가짜, 만년필 3상태, 상자, 커프스, 반지, 리본핀, 컵 2종, 지팡이, 놓인 장갑 한 짝 |

- **007 = 첨부 없음**(`HAND_ANON_GLOVE`는 카드가 아니라 문장 토큰, character-sheets §2-2). 태호 카드 첨부 금지.
- 첨부 원칙(character-sheets §4): 얼굴 패널 = 그 인물 카드, 최대 2명분. 손만 = 카드 하나 또는 생략. 아주 작은 원경 = 첨부 없음.
  `PROPS_keyprops`가 승인되지 않으면 `(승인 시)` 표시 첨부는 빼고 소품 문장만 쓴다. 059에는 `SUA_sheet`를 붙이지 않는다(앞치마 섞임).

---

## 1. 장소 목록 (scene_id ↔ LOC ↔ 배경)

| scene_id | 패널 | location | light | 레지스터 | 한 줄 배경 |
|---|---|---|---|---|---|
| S1 | 001–010 | LOC_ROOFTOP 각도 A (001 = 타워 남쪽 유리 커튼월 바깥, 010 = 옥상에서 내려다본 LOC_BACK_ALLEY 겨울 골목) | L-ROOF-WINTER (010 L-ALLEY-WINTER-DOWN) | REG-WINTER | 유리 타워 옥상: 남쪽 허리 높이 철제 난간(서리), 회색 방수 바닥, 북쪽 가운데 계단실 박스(회색 철문, 문 위 철망 흰 전구), 동쪽 실외기·냉각탑, 아래 비탈 골목과 강·도시 불빛 |
| S2 | 011–015 | LOC_DETENTION_VISIT | L-VISIT-GOLD | REG-PRESENT | 접견 부스 줄, 두꺼운 투명 유리 칸막이, 유리 아래 쇠 선반, 볼트로 박은 둥근 의자, 수화기형 인터폰, 아래 짙은 녹색·위 바랜 크림 벽, 복도 끝 높은 철망 창 |
| S3 | 016–023 | LOC_DETENTION_VISIT | L-VISIT-GOLD → L-VISIT-FLUO(022–023), 019 L-MEM-VISIT | REG-PRESENT (019 REG-MEMORY) | S2와 같은 복도·같은 부스. 유리 너머 수용자 쪽 철문과 복도 |
| S3m | 024 | LOC_FIRM_FLOOR (흐린 배경, D-1 오후 — 판정·beatsheet F8) | L-MEM-OFFICE | REG-MEMORY | 형체만 남은 흐린 사무 층(회색·유리), 손과 상자만 또렷 |
| S4 | 025–026 | `LOC_DETENTION_VISIT · EXT_GATE` (style-bible §5, 판정 AB: 출구 철문 가장자리 + 회색 콘크리트 벽, 타이트, 레퍼런스 세트 없음) | L-OUT-GOLD | REG-PRESENT | 열린 회색 철문 가장자리, 콘크리트 벽, 금빛 저녁, 긴 그림자 |
| S5a | 027 | `LOC_BACK_ALLEY · TOWER_FRONT_DOOR` (style-bible §5 F3, 판정 AB: 같은 타워의 **앞** 유리문, 타이트, 레퍼런스 세트 없음) | L-TOWER-NIGHT | REG-PRESENT | 잠긴 유리 앞문 손잡이, 문 너머 불 꺼진 빈 로비(빈 벽, 로고 0). 비탈·가로등·반사경은 넣지 않는다 |
| S5b | 028 | LOC_BACK_ALLEY ① 뒷문 경비실 + ② 주차장 출구 | L-BOOTH-NIGHT | REG-PRESENT | 비탈 위 작은 박스형 경비실 창(전기 포트·무지 믹스커피 상자·종이컵·작은 선풍기·낡은 라디오·창턱 갈색 슬리브 더미), 뒤로 회색 셔터·노랑검정 줄무늬 차단봉·낡은 회색 경차(무지 번호판) |
| S6 | 029–030 | LOC_FIRM_FLOOR (밤: ⑤ 사무용품 장 → ② 파트너 유리방 문간) | L-FLOOR-NIGHT | REG-PRESENT | 어두운 어소시에이트 책상 줄, 사무용품 장, 창가 불 켜진 파트너 유리방(블라인드 반쯤, 낮은 가죽 소파, 정리된 빈 책상) |
| S7 | 031–034 | LOC_HERO_ROOM | L-ROOM-LAMP | REG-PRESENT | 오래된 원룸: 창가 합판 책상(노트북 닫힘 또는 빈 빛, 스탠드), 벽에 걸린 새 남색 정장 재킷, 바닥 선풍기, 회색 이불 싱글 침대, 책상 서랍 |
| S8 | 035–040 | LOC_FIRM_FLOOR (낮: ① 진우 자리 → ② 파트너 유리방 → 복도, ③ 끝 고문 방 호두색 나무문) | L-FLOOR-MORNING | REG-PRESENT | 회색 칸막이 낮은 책상 줄(진우 = 창에서 두 번째 줄 끝, 회색 책상 전화기), 유리방, 복도 끝 불투명 호두색 문 |
| S9 | 041–046 | LOC_FIRM_MEETING | L-MEETING-AFTERNOON | REG-PRESENT | 10인 짙은 원목 테이블, 검은 가죽 의자, 한쪽 복도 유리벽(눈높이 불투명 띠), 맞은편 도시 창, 물잔·뒤집힌 빈 종이·엎어 둔 폰 |
| S10a | 047, 054 | LOC_HERO_ROOM | L-ROOM-LAPTOP | REG-PRESENT | S7과 같은 원룸·같은 책상, 다음 날 밤 |
| S10r | 048–051 | 기록: SET_SEDAN_CABIN / 앞유리 너머 LOC_BACK_ALLEY 굽이 | L-RECORD | REG-RECORD | 세단 앞유리 시점의 비탈 굽이(흰 가로등, 주황 테 볼록 반사경), 실내 = 운전대·어두운 대시보드(숫자 없음)·뒷유리 위 가장자리 |
| S10m | 052 | LOC_BACK_ALLEY 굽이 — **앵커 A 원본** | L-MEM-ANCHOR | REG-MEMORY | world §6-1 앵커 A 고정 구도 |
| S10x | 053 | LOC_FIRM_MEETING 테이블 면 (044 반복 인서트) | L-MEETING-AFTERNOON | REG-PRESENT (회상 삽입, 낮빛 그대로 — style-bible §4와 일치) | 원목 테이블 위 민재의 맨손 |
| S11a | 055 | LOC_BACK_ALLEY ③ 굽이 → ⑤ 비탈 끝 | L-ALLEY-SUMMER-NIGHT | REG-PRESENT | 빈 흰 가로등 원, 비탈 끝 모퉁이의 짙은 초록 느티나무와 분식집 김 서린 노란 불빛 |
| S11b | 056–058, 060 | LOC_BUNSIK | L-BUNSIK | REG-PRESENT | 입구 쪽 큰 떡볶이 철판, 김밥 도마와 은박, 스테인리스 카운터, 작은 거스름돈 접시, 빈 색판 메뉴, 김 서린 유리문 |
| S11m | 059 | (장소 없음 — 장례식 손 클로즈업, LOC_FUNERAL 미사용: world §7-2) | L-MEM-FUNERAL | REG-MEMORY | 검은 천, 흰 국화 꽃잎이 가장자리에 |

### 1-1. 고정 동선·배치 (180° 규칙)

- **S1 옥상 각도 A (world §7 평면도, EP03·EP10 재생용 — 바꾸지 않는다):** 카메라는 난간 **동쪽 끝**에서 난간을 따라 서쪽을 본다. 진우35 = 화면 가운데~왼쪽 난간,
  등과 오른쪽 옆모습. 계단실 문 = **오른쪽 위 멀리**(반쯤 열림, 문틈의 길고 마른 그림자, 문 앞 바닥에 김 오르는 슬리브 컵). 오른쪽 앞 가장자리 = 실외기 그림자의 어두운 면.
  **화면 왼쪽 밖 = 멘토의 목소리, 화면 오른쪽 밖 = 장갑 손.** 이 방향은 001–010 내내 뒤집지 않는다.
- **S2–S3 접견 복도:** 카메라는 늘 **방문자 쪽**. 진우 = 화면 **왼쪽**(방문자 쪽 의자), 덕배 = 유리 너머 화면 **오른쪽**. 높은 창의 금빛은 화면 오른쪽 위에서
  왼쪽 아래로 사선. 겹침 구도(018·021) = 유리에 비친 진우 얼굴(왼쪽)과 유리 너머 덕배 얼굴(오른쪽)이 반쯤 겹침.
- **S6 사무 층 밤:** 진우 = 앞쪽(사무용품 장), 파트너 유리방 = 뒤쪽 오른쪽 멀리. 030은 유리방 문간: 진우 화면 왼쪽(문간, 등 3/4), 태호 화면 오른쪽(책상).
- **S8 사무 층 낮:** 진우 자리 = 창에서 두 번째 줄 끝, 창은 진우 뒤쪽. 태호는 **앞쪽 왼편**에서 걸어온다(035). 036·040의 손은 **화면 오른쪽에서** 들어온다(007과 같은 방향).
- **S9 회의실 고정 좌석 (world §7):** 창 쪽 상석 = 기 대표, 그 오른쪽 = 민재, 기 대표의 대각 맞은편 = 태호(문 쪽 가까이), 문 가까운 끝자리 = 진우.
  **기준 와이드(041) 카메라 = 문 쪽 끝, 진우 등 뒤 약간 오른쪽 위**: 진우 앞쪽 아래(뒷모습 3/4), 민재 = 테이블 **왼쪽** 줄 안쪽, 기 대표 = 멀리 가운데 창 앞(역광),
  태호 = 테이블 **오른쪽** 줄 진우 가까이. 이후 컷의 시선: **민재는 화면 왼쪽을 향해 진우를 본다 / 진우는 화면 오른쪽을 향해 민재를 본다**(042·043·046 유지).
- **S11b 분식집:** 카운터를 사이에 두고 진우 = 화면 **왼쪽**(손님 쪽, 입구에서 들어옴), 수아 = 화면 **오른쪽**(안쪽, 철판 옆). 이모는 배경 뒤쪽 등.

### 1-2. 매치 컷 (같은 앵글·같은 크기 — prompt-smith는 같은 구도 문장을 그대로 반복, panel-validator는 나란히 비교)

| 묶음 | 고정 조건 |
|---|---|
| **007 ↔ 036 ↔ 040** (L13·L14·L45, twist-plan §0) | **style-bible §7 FRAME-HAND-ON-BACK(007·040) + FRAME-CUFF(007·036) 문장을 글자 그대로.** 진우 어깨·등 윗부분의 극단 클로즈업, 카메라는 진우 **등 뒤 약간 왼쪽**·어깨 높이. 손은 **화면 오른쪽 가장자리**에서 들어와 손가락을 편 채 평평하게 얹힘, 손가락 셋 + 손바닥 아랫부분만, 손이 **프레임 폭의 약 1/3, 프레임 세로 가운데 1/3**, 소매 끝은 오른쪽 가장자리에서 잘림. 커프스(007·036) = **오른쪽 1/3 안, 프레임 폭의 약 1/10**, 오닉스 면이 카메라 쪽. 차이: 007 = 장갑, 손가락 셋+손바닥 아랫부분, 가볍게 / 036 = 태호의 크고 두툼한 맨손이 어깨 전체를 **움켜쥠** + 같은 커프스 / 040 = 고문의 마르고 작은 맨손, 손가락 편 채 **가볍게, 떨어지지 않음**, 장갑·커프스 0 |
| **016 ↔ 037** (L06) | 손바닥 위 카드, 위에서 약간 기울어진 앵글, 카드는 프레임 가운데 폭의 약 20%, **깨진 모서리 = 화면 오른쪽 위**. 016 = 진우의 길고 마른 손 + 엄지가 깨진 모서리를 누름, **흰 긁힘 한 줄** / 037 = 태호의 두툼한 손바닥 위, 진우 손가락이 올려놓는 순간, **긁힘 없음** |
| **001 ↔ 023** (L47) | 만년필이 **대각선(캡 끝 = 화면 오른쪽 위)**, 같은 기울기·같은 크기(펜 길이 ≈ 프레임 높이의 45%). 001 = 캡 끝 작은 찍힘이 흰 빛을 받음, 떨어지는 중 / 023 = 와인 벨벳 위 찍힘 없는 새 펜 |
| **050 ↔ 053** (V3, L07 — 판정 X, beatsheet F11) | **style-bible §7 FRAME-BARE-HAND / FRAME-RECORD-INTERIOR.** 오른손이 프레임 **가운데**, 약간 위에서 본 손등, 손 폭 ≈ **프레임 폭의 40%**, 같은 손 각도(050의 운전대 1시 방향 손과 같은 기울기), 같은 카메라 거리·같은 높이(rhythm `tall` 둘 다). 050 = 기록 레지스터, 가운뎃손가락 은반지 + 초록 돌, 길고 깨끗한 손가락, 다듬은 손톱, 걷은 흰 셔츠 소매 / 053 = 낮빛, 원목 테이블 위 민재의 맨손, 반지 없음, 물어뜯은 들쭉날쭉한 손톱, 거스러미, 걷은 크림 린넨 소매. **044도 같은 손 각도**(크기는 작게 — 1독에서 강조 금지) |
| **052 = 앵커 A 원본** (V1·V2, EP02 재사용) | world §6-1 구도 그대로. EP02에서 사람·물건만 바꿔 같은 앵글·같은 빛·같은 `art_space`로 반복하므로 이 패널 서술이 고정 기준 |
| **054 ↔ 060** | 진우 눈 극단 클로즈업, 같은 크기(눈 하나 + 눈썹 일부, 프레임 가운데). 054 = 노트북의 차가운 흰빛 / 060 = 김 너머 노란빛 |

---

## 2. 소품 상태 추적

| 소품 | 상태 변화 |
|---|---|
| PROP_PEN (만년필) | 001 첫 삶판 **캡 끝 작은 찍힘**, 떨어짐 → 023 새것(찍힘 없음), 상자 안 벨벳 위 → 024 기억: 상자째 건네짐 → 031 펜촉으로 빈 카드 모서리를 깨뜨림, **펜촉 끝이 아주 살짝 휨** → 033 상자 안(닫힘) → 041·046 진우 손, 캡을 닫음(펜촉 안 보임) → 039 고문 가슴 주머니에 **같은 모델** 한 자루(클립만 보임) |
| PROP_PEN_BOX | 023 서류 가방 안, 열림, 와인 벨벳 → 024 기억: 닫힌 상자를 건넴 → 032 열림, **벨벳 받침을 들어 올림**, 진짜 카드가 아래 빈 공간으로 → 033 닫혀서 서랍 안, 손을 얹음 → 047 다시 열림, 벨벳 들림 |
| PROP_CARD_REAL (오른쪽 위 모서리 깨짐 + **흰 긁힘 한 줄**) | 016 진우 손바닥 → (017–026 주머니, 보이지 않음) → 032 책상 위 가짜 옆 → 벨벳 아래 → 047·054 진우 엄지가 깨진 모서리를 누름 |
| PROP_CARD_FAKE (같은 깨진 모서리, **긁힘 없음**) | 029 사무용품 장 서랍에서 빈 카드(모서리 멀쩡)를 손안에 → 031 펜촉으로 깨뜨림 → 032 진짜 옆 → 037 태호 손바닥 → 038 태호 재킷 안주머니로 |
| PROP_CUP (무지 흰 종이컵 + 손으로 자른 갈색 골판지 슬리브) | 002 계단실 문 앞 바닥, 김 오름(+ 진우 옆 파라펫 위 슬리브 없는 식은 무지 컵) → 028 봉구가 두 컵에 슬리브를 끼움 → 029 장 위에 두 컵 → 030 진우가 한 컵을 태호에게 내밂 |
| PROP_CUFFLINK | 007 장갑 손 소매 끝 → 030 태호 책상 위 손목(강조 0) → 036 태호 소매 끝(007과 같은 자리·크기) → 038·045 태호 소매(작게). **고문 손목 0(TF-6)**, 진우는 늘 단추 소매 |
| PROP_RING | 050 운전대 위 오른손 가운뎃손가락 → 051 손바닥 안쪽에 반지 테. 그 외 어떤 패널·인물에도 반지 0 |
| PROP_RIBBON_PIN (검은 리본 매듭 + 은색 핀, 핀 끝 살짝 휨) | 057 앞치마 왼쪽 가슴, **안 보이거나 작고 흐리게** → 058 클로즈업, 휜 핀 끝이 빛을 받음 → 059 기억: 같은 핀이 흰 블라우스 깃 옆 검은 라펠에, 휘는 순간 |
| PROP_CANE (짙은 갈색 나무, 은색 손잡이) | 006 프레임 오른쪽 끝 가늘고 짙은 세로 막대(몸통만, **손잡이 프레임 밖**) → 039 고문 손 |
| 휴대폰 | 025 진우 주머니 속(형태만) → 026 귀에, 화면 빈 빛 → 041–043 민재 앞 엎어 둠, 손가락으로 돌림 |
| 노트북 | 031–034 닫힘 또는 빈 빛 → 047·054 열림, 화면은 **카메라 반대쪽**(얼굴에 빛만) |
| 진우 손목시계 | 006·008 진우35 왼손목 무광 은색(바늘만) → 014 진우28 손목 **없음**(V-증명) |
| 서리 긁힌 자국 | 008 난간 서리에 손가락 네 줄 → 014 진우28 손 깨끗 |

---

## 3. 의상 (씬별, characters §11-11)

| scene | 진우 | 그 외 |
|---|---|---|
| S1 | `JINU35_WINTER` (짙은 회색 울 코트 앞 열림, 차콜 정장, 흰 셔츠 단추 소매, 풀린 남색 넥타이, 왼손목 은색 시계, 맨손) | 005·009 태호44 `TAEHO44_WINTER` **얼굴만**(코트 깃까지, 손 0) · 002 문틈 그림자 `JUNSEO35_SHADOW` · 007 `HAND_ANON_GLOVE`(문장 토큰) |
| S2–S3, S4 | `JINU28_SUIT` (새 남색 정장 어깨 살짝 큼, 흰 셔츠 단추 소매, 무지 차콜 넥타이, 시계 없음, 검은 무광 서류 가방) | 덕배 `DEOKBAE_INMATE` (연회청 수의, 무지 패치) · 교도관(짙은 남색 제복, 무지, 손·소매·뒷모습) · 019 기억도 같은 옷 |
| S3m | `JINU28_SUIT` 소매(두 손만) | 고문 `HANMOK_OFFICE` 손·카디건 소매만 |
| S5a–S7 | `JINU28_NIGHT` (흰 셔츠 소매 팔꿈치까지 걷음, 넥타이 풂, 남색 정장 바지) | 봉구 `BONGGU_SUMMER` · 태호 `TAEHO37_OFFICE`(밤에도 재킷) · 033 벽에 남색 정장 재킷 |
| S8–S9 | `JINU28_SUIT` | 태호 `TAEHO37_OFFICE` · 고문 `HANMOK_OFFICE` · 기 대표 `SANGDU_SUIT` · 민재 `MINJAE_CASUAL` · 039 배경 직원들(무지 사무복, 흐리게) |
| S10a | `JINU28_HOME` (회색 반팔 티 무지, 검은 트레이닝 바지, 맨발) | — |
| S10r | — | 050–051 준서 `JUNSEO28_RECORD`(손만) · 048 폐지 줍는 노인(바랜 회색 점퍼 등만) |
| S10m | — | 덕배 `DEOKBAE_DELIVERY`(회색 반팔 티 + 남색 배달 조끼 무지, 헬멧은 땅에) · 경찰(짙은 소매·손만) |
| S10x | — | 민재 `MINJAE_CASUAL` 손·소매 |
| S11a–S11b | **`JINU28_OUT_NIGHT` 확정 = `JINU28_HOME` 위에 남색 정장 재킷 + 검은 운동화**(beatsheet Q9 권장안, 장면 내 고정) | 수아 `SUA_WORK` · 이모 `IMO_WORK`(짙은 갈색 앞치마, 베이지 머릿수건, 등만) |
| S11m | `JINU30_FUNERAL` 손(검은 정장 소매 + 흰 단추 소매) | 수아 `SUA_FUNERAL_MEMORY` 가슴께만(검은 상복 + 흰 블라우스 깃) |

---

## 4. 패널

### panel_001
- scene_id: S1 / location: LOC_ROOFTOP (타워 남쪽 유리 커튼월 바깥) / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 콜드 오픈 훅 — 떨어지는 만년필 (긴장 7) · L47
- size: full-bleed · height: tall · gutter_after: tight
- camera: 커튼월을 따라 내려다보는 수직 high-angle, close-up (펜) + 깊은 원근
- composition: 프레임 가운데 위쪽에 검은 옻칠 만년필(금색 클립)이 **대각선(캡 끝 = 화면 오른쪽 위)**으로 떨어지는 순간, 유리 커튼월 면을 스친다. 캡 끝의 작은 찍힘이 유리에 비친 흰 전구 빛을 받는다. 유리에 서리 기운과 남색 밤하늘 반사. 아래로 아득한 비탈 골목 지붕들·강·도시 호박빛이 깊게 멀어진다. 사람·몸 0.
- characters: 없음
- props: PROP_PEN 첫 삶판(캡 끝 찍힘)
- emotion/acting: 질문(누구의 펜? 왜?), 정지된 추락.
- motion: 시선이 펜 → 아래 도시로 낙하.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`(승인 시)
- note: **023과 같은 펜 각도·크기**(§1-2). 손·팔·몸 일부도 넣지 않는다. 각인·로고 0.

### panel_002
- scene_id: S1 / location: LOC_ROOFTOP 각도 A / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 난간의 진우, 문틈의 두 번째 그림자, 두 번째 컵 (긴장 7) · L01·L02·L44
- size: large · height: tall · gutter_after: normal
- camera: eye-level, medium-wide, 난간 동쪽 끝에서 서쪽을 향해 난간을 따라
- composition: 화면 가운데~왼쪽에 난간 너머로 몸을 숙인 진우35의 등과 오른쪽 옆모습, **빈 오른손이 아래를 향해 펴져** 있다(놓쳤는지 놓았는지 읽히지 않게). **화면 왼쪽 가장자리는 진우 왼어깨 바로 바깥에서 잘린다** — 그 너머에 아무것도 없음. 오른쪽 위 멀리 반쯤 열린 회색 계단실 철문, 문 위 철망 흰 전구, **문틈에 길고 마른 그림자**(얼굴·손 0), 문 앞 바닥에 **김 오르는 종이컵 + 손으로 자른 갈색 골판지 슬리브**. 진우 가까이 파라펫 위에 **김 없는 슬리브 없는 무지 종이컵**. 오른쪽 앞 가장자리는 실외기 그림자의 어두운 면. 바닥 서리, 입김.
- characters: 진우35 `JINU35_WINTER` / 그림자 `JUNSEO35_SHADOW`(긴 검은 코트 윤곽, 얼굴·손 0)
- props: 슬리브 컵(문 앞, 김) · 무지 식은 컵(파라펫) · 난간 서리
- emotion/acting: 지치고 텅 빈 몸, 고립.
- motion: 진우 → 오른쪽 위 문틈 → 컵.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU35_sheet`
- note: **EP03(각도 B)·EP10(각도 C) 재생 기준 컷 — 배치 고정.** 그림자는 작고 흐리게(인물로 식별 불가). 지팡이·장갑 손·태호 0.

### panel_003
- scene_id: S1 / location: LOC_ROOFTOP 각도 A / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 멘토의 목소리 「네가 숨긴 거잖아」 (긴장 7) · L43 · K-02
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up 옆얼굴
- composition: 진우35가 **화면 왼쪽으로 고개를 돌린다** — 얼굴은 화면 가운데~오른쪽, 흐트러진 머리, 관자놀이 흰머리, 입김이 왼쪽으로. **화면 왼쪽 1/3은 남색 어둠뿐**(화자 없음). 배경 멀리 도시 호박빛 흐림.
- characters: 진우35 `JINU35_WINTER` (오른쪽 턱 아래 귀 밑 점이 보이는 쪽)
- props: —
- emotion/acting: 지친 얼굴, 목소리 쪽으로 향하는 눈.
- motion: 진우 시선 → 화면 왼쪽 밖.
- dialogue_ref: 태호 (화면 밖·왼쪽): "네가 숨긴 거잖아. 처음부터." / KM: តេហូ៖ "គឺឯងទេតើ ដែលលាក់វា។ តាំងពីដំបូងមក។"
- art_space: **화면 왼쪽 1/3, 위쪽에서 가운데까지 = 빈 남색 어둠**(말풍선은 왼쪽 가장자리에 붙고 꼬리는 왼쪽 프레임 밖)
- attach: `JINU35_sheet`
- note: TF-1 ⑤. 왼쪽에 사람 형체·그림자·손 0.

### panel_004
- scene_id: S1 / location: LOC_ROOFTOP 각도 A / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 「…선배가 시켰잖아요」 — 처음 섞이는 원망 (긴장 7)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium close-up, 3/4 정면(진우는 화면 왼쪽을 본다)
- composition: 진우35 얼굴과 어깨, 화면 오른쪽 아래 2/3. 시선은 화면 왼쪽. 미간 세로 주름, 다크서클, 옅은 수염 자국. 배경은 밤하늘과 난간 일부, 흐린 도시.
- characters: 진우35 `JINU35_WINTER`
- props: —
- emotion/acting: 지치고 날 선 얼굴에 처음 원망이 섞임. 부정하지 않는다. 입은 작게 열림.
- motion: 시선 → 왼쪽(화자 쪽).
- dialogue_ref: 진우: "…선배가 시켰잖아요." / KM: ជីនូ៖ "…គឺបងទេតើ ដែលប្រើឲ្យខ្ញុំធ្វើ។"
- art_space: **위쪽 왼편 1/3 = 빈 남색 밤하늘**
- attach: `JINU35_sheet`
- note: —

### panel_005
- scene_id: S1 / location: LOC_ROOFTOP (배경 밤하늘뿐) / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 웃음 없는 선배의 얼굴 (긴장 7)
- size: small · height: short · gutter_after: tight
- camera: eye-level, 정면 tight close-up
- composition: 조태호44의 얼굴만 프레임 가운데 띠. 관자놀이 흰머리, 깊어진 눈가·팔자 주름, **웃음 없음, 작고 차가운 눈**. 짙은 남색 울 코트 깃까지만. 배경 = 남색 밤하늘과 입김 — **어느 쪽에 섰는지 알 단서 0, 손 0, 난간 0.** 위아래는 어둠.
- characters: 태호44 `TAEHO44_WINTER` (얼굴)
- props: —
- emotion/acting: 차가운 무표정.
- motion: 정면 응시(진우를 보는지 모호하게, 카메라를 정면으로).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `TAEHO44_heads`
- note: TF-1 ④ 손 0. 커프스도 보이지 않게(코트 깃 위로만 자른다).

### panel_006
- scene_id: S1 / location: LOC_ROOFTOP 각도 A / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 「내려가서, 네 입으로 다 말해」 — 자백 요구 (긴장 8) · L42
- size: medium · height: normal · gutter_after: tight
- camera: eye-level(난간 높이), close-up 손 — 손 ≈ 프레임 폭 1/2(style-bible §7 손 크기 맞춤 006·008·014)
- composition: 서리 낀 철제 난간을 쥔 진우35의 맨손(마른 핏줄, 흰 셔츠 단추 소매, 코트 소매, **왼손목 무광 은색 시계, 바늘만**)이 프레임 가운데 아래. **프레임 오른쪽 끝에 난간에 기대 선 가늘고 짙은 세로 막대 하나**(난간 기둥처럼 읽히게, 위쪽은 프레임 밖에서 잘림). 위쪽 왼편은 어둠.
- characters: 진우35 손
- props: 난간 서리 · (지팡이 몸통으로 읽힐 막대 — 은색 손잡이 프레임 밖)
- emotion/acting: 쥔 손에 힘, 손가락 마디가 하얗다.
- motion: 손 → 오른쪽 끝 막대(무심하게).
- dialogue_ref: 태호 (화면 밖·왼쪽): "내려가서, 네 입으로 다 말해." / KM: តេហូ៖ "ចុះទៅ ហើយសារភាពឲ្យអស់ ដោយមាត់ឯងផ្ទាល់។"
- art_space: **위쪽 왼편 1/3 = 빈 어둠**(꼬리는 왼쪽 프레임 밖)
- attach: `JINU35_sheet`
- note: 막대는 지팡이로 식별되면 안 된다(손잡이·은색 0, 그냥 짙은 세로선). 장갑 손·다른 손 0.

### panel_007
- scene_id: S1 / location: LOC_ROOFTOP 각도 A / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: **밀침** — 등에 얹히는 장갑 손 (정점 9) · L13·L14·L45 · 판정 S
- size: full-bleed · height: tall · gutter_after: tight
- camera: eye-level(어깨 높이), extreme close-up, 진우 등 뒤 약간 왼쪽 — **FRAME-HAND-ON-BACK + FRAME-CUFF**
- composition: 진우의 짙은 회색 울 코트 등 윗부분이 프레임을 채운다. **화면 오른쪽 가장자리**에서 검은 가죽 장갑 손이 들어와(손 ≈ 프레임 폭 1/3, 세로 가운데 1/3) **손가락을 편 채 가볍게** 얹힌다(주먹·움켜쥠 아님). 보이는 것은 **손가락 셋 + 손바닥 아랫부분**, 장갑 끝과 소매 사이의 **흰 셔츠 소매 + 은색 사각 오닉스 커프스**, 그 바깥의 **짙은 울 코트 소매**(색·단추·질감 특정 불가)가 프레임 오른쪽 밖으로 이어진다. 코트 결 위에 흰 전구 빛 한 줄. 손 크기를 잴 기준물 0.
- characters: `HAND_ANON_GLOVE`(character-sheets §2-2 문장 토큰, 이름 없음) / 진우35 코트 등
- props: PROP_CUFFLINK
- emotion/acting: 정지. 가벼워서 더 무섭다.
- motion: 손이 오른쪽 → 왼쪽으로 민다는 방향만.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: **없음** (TF-1: 어떤 카드도 첨부 금지, 이름 없음)
- note: **TF-1 전항.** 맨손 금지, 태호 카드 첨부 금지. **036·040과 매치**(§1-2: 소매 끝 위치·크기 고정). 얼굴·난간·다른 손 0.

### panel_008
- scene_id: S1 / location: LOC_ROOFTOP 각도 A / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 난간에서 미끄러지는 손 (긴장 9)
- size: small · height: short · gutter_after: tight
- camera: 난간 높이, close-up, 약간 위에서
- composition: 앞으로 쏠린 진우35의 손목(은색 시계), 서리 낀 난간 위를 미끄러지는 손가락 — **서리에 긁힌 네 줄**이 남는다. 손이 프레임 아래 가장자리로 빠져나가는 순간. 손 위쪽은 비어 가는 난간.
- characters: 진우35 손
- props: 난간 서리 자국 네 줄
- emotion/acting: 붙잡지 못함.
- motion: 위 → 아래(프레임 밖으로).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU35_sheet`
- note: 15+: 피·몸·추락 0. 다른 사람이 밀었다는 것이 007 → 008 연속으로 분명해야 한다.

### panel_009
- scene_id: S1 / location: LOC_ROOFTOP (배경 밤하늘뿐) / light: L-ROOF-WINTER
- panel_style: first-life winter (REG-WINTER)
- beat: 커지는 선배의 눈 (긴장 8) · L46
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, extreme close-up (눈·입)
- composition: 조태호44 얼굴만, 005와 같은 위치·배경. **눈이 커지고 입이 벌어진다.** 입김이 흩어진다. 손은 프레임 밖.
- characters: 태호44 `TAEHO44_WINTER`
- props: —
- emotion/acting: 충격(1독: 죄책감·충격 / 재독: 붙잡으려다 늦은 사람). 웃음 0, 악의 0.
- motion: 정면 응시가 아래로 떨어지는 듯.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `TAEHO44_heads`
- note: 뻗은 팔·손 0(TF-1 ④).

### panel_010
- scene_id: S1 / location: LOC_ROOFTOP → 내려다본 LOC_BACK_ALLEY(겨울) / light: L-ALLEY-WINTER-DOWN
- panel_style: first-life winter (REG-WINTER)
- beat: 텅 빈 가로등 원 → 흰빛 (긴장 5)
- size: full-bleed · height: tall · gutter_after: **xwide (흰 여백 — 7년 전으로)**
- camera: 옥상 가장자리에서 수직 bird-eye, extreme long shot
- composition: 아래로 떨어지는 비탈 골목, 저층 지붕, **맨가지 느티나무**, 굽은 팔 가로등 하나의 **텅 빈 흰 원**이 프레임 가운데. 사람 0. 프레임 아래로 갈수록 **흰색으로 페이드**(마지막 1/4은 거의 순백).
- characters: 없음
- props: —
- emotion/acting: 끝, 침묵.
- motion: 위 → 아래, 흰빛으로.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: 없음
- note: 15+: 골목에 몸·사람·자국 0. 흰 페이드는 011의 흰빛과 이어진다.

--- SCENE BREAK --- (S1 → S2 · 흰빛 → 7년 전 7월, D-1 18:40 접견 복도 · 레지스터 first-life winter → present)

### panel_011
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 금빛 여름, `env` 「7년 전, 여름」 (긴장 5) · V-증명 ①
- size: large · height: tall · gutter_after: normal
- camera: eye-level, near-wide medium
- composition: 흰빛이 걷히듯 화면 아래쪽에 아직 밝은 기운이 남고, **높은 철망 창(화면 오른쪽 위)의 금빛 사선**이 두꺼운 유리 칸막이를 가로지른다. 탁한 녹색 아래벽·바랜 크림 윗벽, 금빛 속 떠다니는 먼지. 접견 부스의 유리와 수화기형 인터폰 일부. **위쪽 크림 벽면 넓은 띠는 비어 있다.** 진우는 아직 보이지 않거나 프레임 아래 가장자리에 어깨만.
- characters: (없음 또는 진우28 어깨 끝)
- props: 유리 칸막이, 인터폰
- emotion/acting: 숨 막히는 따뜻함, 낯섦.
- motion: 금빛 사선을 따라 오른쪽 위 → 왼쪽 아래.
- dialogue_ref: env 「7년 전, 여름」 / KM: ប្រាំពីរឆ្នាំមុន រដូវក្តៅ · [효과음] 맴맴… (작게, 창 쪽) / KM 효과음: រ៉ឺងៗៗ…
- art_space: **위쪽 가운데~왼편의 빈 크림 벽 띠(env) + 오른쪽 위 높은 창 바로 아래 벽(효과음, 작게)**
- attach: 없음
- note: 금빛은 이 장소에서 EP1 회귀 장면 전용. 창·벽에 글자·표지판 0.

### panel_012
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 숨 — 헉 (긴장 7) · 회귀 정점
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, extreme close-up 얼굴
- composition: 진우28 얼굴이 프레임 가운데~오른쪽, 숨을 들이켜 입이 벌어짐, 관자놀이의 땀, **한쪽(오른쪽) 뺨에 금빛**. 다크서클 없음, 035세보다 더 마른 뺨. 왼쪽 위는 흐린 녹색 벽.
- characters: 진우28 `JINU28_SUIT` (점 보이게)
- props: —
- emotion/acting: 숨이 돌아오는 충격, 눈동자 흔들림.
- motion: —
- dialogue_ref: [효과음] 헉 / KM 효과음: ហឹក!
- art_space: **왼쪽 위 1/3 = 흐린 녹색 벽**
- attach: `JINU28_expressions`, `JINU28_turnaround`
- note: 35세 표지(흰머리·수염 자국·다크서클·주름) 0.

### panel_013
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 유리에 비친 젊은 얼굴 「…여긴.」 (긴장 6)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up 반사
- composition: 유리 칸막이에 비친 더 젊은 진우 얼굴과 **어깨가 살짝 남는 새 남색 정장**이 화면 가운데~아래. 유리 너머는 금빛 반사로 흐릿. 위쪽 1/3은 금빛 반사 번짐이 고른 면.
- characters: 진우28 반사 `JINU28_SUIT`
- props: 유리
- emotion/acting: 낯선 자기 얼굴을 확인하는 정지된 눈.
- motion: —
- dialogue_ref: 진우 (속말): "…여긴." / KM: ជីនូ (គិត)៖ "…ទីនេះ…"
- art_space: **위쪽 1/3 = 고른 금빛 유리 반사 면**
- attach: `JINU28_expressions`, `JINU28_turnaround`
- note: 반사는 거울처럼 또렷하게(이중 노출 효과 금지 — V7).

### panel_014
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 상처 없는 두 손 (긴장 6) · V-증명 ②
- size: insert · height: short · gutter_after: tight
- camera: 진우 시점(POV) 약간 위에서, close-up 손
- composition: 펼쳐 본 두 손바닥이 프레임 가운데 가로 띠. **서리 자국 없음, 손목시계 없음**, 흰 셔츠 단추 소매. 금빛 사선이 손바닥을 가로지른다. 위아래는 흐린 바닥·벽.
- characters: 진우28 손
- props: —
- emotion/acting: 떨리는 손가락.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_turnaround`
- note: 008의 네 줄 자국·006의 시계와 대비.

### panel_015
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 복도 설정샷 — 작게 선 진우 (긴장 5)
- size: large · height: tall · gutter_after: normal
- camera: eye-level, wide (복도 원근)
- composition: 긴 녹색 벽 복도, 접견 부스 줄(유리 칸막이·쇠 선반·볼트 둥근 의자·수화기형 인터폰), 천장 형광등 줄(하나 깜빡), 복도 끝 높은 철망 창에서 들어오는 금빛 사선. 금빛 속에 **작게 선 진우**(화면 왼쪽 1/3, 방문자 쪽).
- characters: 진우28 `JINU28_SUIT` (작게)
- props: 서류 가방(손)
- emotion/acting: 고립, 정지.
- motion: 원근 → 창.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_turnaround`
- note: S2–S3 배치 기준 컷(§1-1). 수의 패치·제복 휘장 무지.

### panel_016
- scene_id: S3 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 카드가 아직 내 손에 (긴장 7) · L27 · V-증명 ③
- size: medium · height: normal · gutter_after: tight
- camera: 약간 위에서 기울어진 close-up (손바닥)
- composition: 진우의 길고 마른 손바닥 위 **짙은 남색 microSD 카드 — 오른쪽 위 모서리 깨짐 + 흰 긁힘 한 줄**, 카드 폭 ≈ 프레임 폭 20%, 가운데. **엄지가 깨진 모서리를 누른다.** 손 아래로 금빛. 위쪽 1/3은 흐린 녹색 벽.
- characters: 진우28 손
- props: PROP_CARD_REAL
- emotion/acting: 엄지에 힘(버릇의 첫 노출).
- motion: —
- dialogue_ref: 진우 (속말): "카드가… 아직 내 손에 있다." / KM: ជីនូ (គិត)៖ "កាតនេះ… នៅក្នុងដៃខ្ញុំនៅឡើយ។"
- art_space: **위쪽 1/3 = 흐린 녹색 벽**
- attach: `PROPS_keyprops`(승인 시)
- note: **037과 매치**(§1-2). 카드 라벨·글자 0.

### panel_017
- scene_id: S3 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 살아 있는 덕배 (긴장 7) · V-증명 ④ (키 컷)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, 유리 너머 medium
- composition: 유리 칸막이 너머(화면 오른쪽~가운데), 교도관에게 팔을 잡혀 뒤쪽 철문으로 끌려가며 **돌아보는 덕배** — 반백 아주 짧은 머리, **왼쪽 눈썹 끝 흰 흉터**, 순하게 처진 눈, 연회청 수의. 교도관은 짙은 남색 소매와 손, 뒷모습만. 유리 위에 금빛 반사 한 줄.
- characters: 덕배 `DEOKBAE_INMATE` · 교도관(무지)
- props: 수의 무지 패치
- emotion/acting: 돌아보는 순한 눈, 체념.
- motion: 덕배는 오른쪽 뒤로 끌려가고 얼굴만 카메라 쪽.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `DEOKBAE_sheet`
- note: 교도관 얼굴 0.

### panel_018
- scene_id: S3 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 유리에 겹치는 두 얼굴 (긴장 6) · 이 장소의 시그니처
- size: medium · height: normal · gutter_after: wide
- camera: eye-level, close-up 겹침
- composition: 유리에 비친 진우의 얼굴(화면 왼쪽)과 유리 너머 덕배의 얼굴(오른쪽)이 반쯤 겹친다. 두 얼굴 사이를 **금빛 한 줄**이 가른다.
- characters: 진우28 반사 · 덕배
- props: —
- emotion/acting: 죄와 피해자의 얼굴이 한 면에.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_expressions`, `DEOKBAE_sheet`
- note: 이중 노출 효과가 아니라 **실제 유리 반사**로.

### panel_019
- scene_id: S3 / location: LOC_DETENTION_VISIT (몇 분 전) / light: L-MEM-VISIT
- panel_style: memory (REG-MEMORY)
- beat: 거짓말의 기억 「블랙박스요, 정말 없었어요?」 「…없었습니다.」 (긴장 7) · K-03 ①
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, 유리를 옆에서 비스듬히 본 two-shot medium
- composition: 같은 부스. 수화기를 든 두 사람 — 덕배(유리 너머, 화면 오른쪽, 유리에 몸을 기울임, 위쪽에 머리), 진우(화면 왼쪽 아래, **눈을 내리깔고**). 청회색 탈색, 가장자리 흐림. 위쪽 띠와 왼쪽 가운데 벽면은 비어 있다.
- characters: 덕배 `DEOKBAE_INMATE` · 진우28 `JINU28_SUIT`
- props: 인터폰 수화기 두 개
- emotion/acting: 덕배의 매달리는 눈 / 진우의 회피.
- motion: 위(덕배) → 아래(진우).
- dialogue_ref: ① 덕배 (기억): "변호사님… 블랙박스요, 정말 없었어요?" / KM: ដុកបែ៖ "លោកមេធាវី… កាមេរ៉ាឡាន ពិតជាមិនមានមែនទេ?" ② 진우 (기억): "…없었습니다." / KM: ជីនូ៖ "…មិនមានទេ។"
- art_space: **위쪽 30% 띠(오른쪽 = 말풍선 ①) + 왼쪽 가운데 녹색 벽(말풍선 ②)** — 두 개, 위 → 아래
- attach: `JINU28_expressions`, `DEOKBAE_sheet`
- note: 금빛 없음(기억 레지스터). 기억 말풍선 = memory 타입.

### panel_020
- scene_id: S3 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 「잠깐만요!」 — 유리를 두드림 (긴장 7)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium, 진우 옆에서
- composition: 돌아서서 손바닥으로 유리를 두드리는 진우(화면 왼쪽, 몸이 오른쪽으로 기움). 유리 너머 뒤쪽 철문 앞에서 멈칫 돌아서는 덕배(화면 오른쪽 멀리), 고개를 돌리는 교도관(소매·뒷머리). 금빛 사선.
- characters: 진우28 · 덕배 · 교도관
- props: 유리
- emotion/acting: 처음 터지는 다급함.
- motion: 진우 → 오른쪽 유리 → 덕배.
- dialogue_ref: 진우 (외침): "잠깐만요!" / KM: ជីនូ៖ "ចាំសិន!"
- art_space: **위쪽 왼편 1/3 = 녹색·크림 벽**
- attach: `JINU28_turnaround`, `DEOKBAE_sheet`
- note: —

### panel_021
- scene_id: S3 / location: LOC_DETENTION_VISIT / light: L-VISIT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 「…찾겠습니다.」 — 첫 되돌림 (긴장 7) · K-03 ② · K-19 · L30
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, two-shot close, 유리 겹침
- composition: 수화기를 다시 든 두 사람, 유리 겹침 구도 — 진우 화면 왼쪽, 덕배 유리 너머 오른쪽. 금빛이 둘 사이를 가로지른다. **진우가 처음으로 덕배를 똑바로 본다.** 진우 머리 위 왼쪽은 빈 벽.
- characters: 진우28 · 덕배
- props: 수화기 둘
- emotion/acting: 진우의 결심(눈이 흔들리지 않음) / 덕배의 당황 섞인 희망.
- motion: 서로 마주보는 시선.
- dialogue_ref: 진우: "…찾겠습니다." / KM: ជីនូ៖ "…ខ្ញុំនឹងរកវាឲ្យឃើញ លោក។"
- art_space: **위쪽 왼편 1/3 = 진우 머리 위 빈 벽**
- attach: `JINU28_expressions`, `DEOKBAE_sheet`
- note: 019와 같은 부스·같은 수화기 위치(대비).

### panel_022
- scene_id: S3 / location: LOC_DETENTION_VISIT / light: L-VISIT-FLUO
- panel_style: present (REG-PRESENT)
- beat: 깊이 숙이는 고개 (긴장 5) · 온기의 기미
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, medium, 유리 너머
- composition: 덕배가 말없이 수화기를 내려놓고 깊이 고개를 숙인다(화면 가운데~오른쪽). 수화기 걸이 위의 거친 손 — **오른손 손등의 옅은 화상 자국**, 마디 굵은 손가락, 손톱 밑 기름때. 교도관의 소매가 팔을 다시 잡는다.
- characters: 덕배 · 교도관(소매)
- props: 인터폰
- emotion/acting: 말 없는 감사, 공손.
- motion: 위 → 아래(숙임).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `DEOKBAE_sheet`
- note: —

### panel_023
- scene_id: S3 / location: LOC_DETENTION_VISIT (부스 쇠 선반) / light: L-VISIT-FLUO
- panel_style: present (REG-PRESENT)
- beat: 가방 속 새 만년필 (긴장 5) · L26·L47 · V-증명 ⑤
- size: insert · height: short · gutter_after: normal
- camera: bird-eye close-up
- composition: 유리 아래 쇠 선반 위 열린 검은 무광 서류 가방, 그 안에 열린 손바닥 길이 검은 무광 만년필 상자, **짙은 와인색 벨벳** 위 **캡 끝 찍힘 없는 새 검은 옻칠 만년필(금색 클립)** — **001과 같은 대각선 각도(캡 끝 = 오른쪽 위)·같은 크기.** 금빛이 펜 몸통에 한 줄.
- characters: 없음
- props: PROP_PEN(새것), PROP_PEN_BOX, 서류 가방(로고 0)
- emotion/acting: 고요한 증명.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`(승인 시)
- note: 상자·펜 각인·로고 0.

--- SCENE BREAK --- (S3 → S3m · 기억: 오늘 오후의 선물, 흐린 사무 층)

### panel_024
- scene_id: S3m / location: LOC_FIRM_FLOOR (흐린 배경, D-1 오후) / light: L-MEM-OFFICE
- panel_style: memory (REG-MEMORY)
- beat: 「좋은 변호사는 좋은 펜으로 쓰는 법이야」 (긴장 5) · K-11 · L04 준비
- size: medium · height: normal · gutter_after: xwide (→ 구치소 밖 저녁)
- camera: eye-level(가슴 높이), close-up 손
- composition: 프레임 가운데 아래: 마르고 작은 노인의 손(검버섯, 단정한 손톱, **회색 카디건 소매가 손목까지**)이 닫힌 검은 만년필 상자를 건네고, 진우의 두 손(흰 단추 소매 + 남색 정장 소매)이 받는다. 얼굴 0. 배경 = 형체만 남은 흐린 사무 층(회색·유리). 청회색 탈색이지만 **부드럽고 다정한 빛**.
- characters: 고문 손 `HANMOK_OFFICE` · 진우28 손 `JINU28_SUIT`
- props: PROP_PEN_BOX(닫힘)
- emotion/acting: 따뜻한 선물(1독) — 서늘한 연출 금지.
- motion: 오른쪽(고문) → 왼쪽(진우)으로 건네짐.
- dialogue_ref: 한목 (기억): "좋은 변호사는 좋은 펜으로 쓰는 법이야." / KM: ហានម៉ុក៖ "មេធាវីល្អ តែងសរសេរដោយប៉ាកកាល្អ។"
- art_space: **위쪽 1/3 = 흐린 사무 층 배경**
- attach: `HANMOK_sheet`
- note: **커프스·셔츠 소매 끝 노출 0(TF-6).** 고문 얼굴 0.

--- SCENE BREAK --- (S3m → S4 · D-1 19:00 구치소 출구 바깥, 타이트)

### panel_025
- scene_id: S4 / location: LOC_DETENTION_VISIT · EXT_GATE (출구 철문 + 콘크리트 벽, 판정 AB) / light: L-OUT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 「3초 뒤, 선배가 전화한다」 — 예언 (긴장 6) · V-증명 ⑥
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium (허리 위)
- composition: 열린 회색 철문 가장자리를 막 나선 진우(화면 가운데~오른쪽), 금빛 저녁 속 **긴 그림자**가 콘크리트 벽에. 한 손에 서류 가방, 다른 손은 바지 주머니 속 폰 위(형태만). 숨을 고르는 옆얼굴. 위쪽 왼편은 빈 콘크리트 벽과 금빛 하늘.
- characters: 진우28 `JINU28_SUIT`
- props: 서류 가방, 폰(주머니 속)
- emotion/acting: 차갑게 가라앉은 계산.
- motion: 오른쪽으로 걸어 나감.
- dialogue_ref: 진우 (속말): "3초 뒤, 선배가 전화한다." / KM: ជីនូ (គិត)៖ "បីវិនាទីទៀត… បងនឹងតេមក។"
- art_space: **위쪽 왼편 1/3 = 빈 콘크리트 벽·금빛 하늘**
- attach: `JINU28_turnaround`, `JINU28_expressions`
- note: 구치소 간판·표지 0, 건물 전경 0(타이트 유지).

### panel_026
- scene_id: S4 / location: LOC_DETENTION_VISIT · EXT_GATE / light: L-OUT-GOLD
- panel_style: present (REG-PRESENT)
- beat: 예언 적중 — 「카드, 내일 아침에 가져와」 「네, 선배.」 (긴장 7) · K-01
- size: medium · height: normal · gutter_after: xwide (→ 밤)
- camera: eye-level, close-up
- composition: 진동하는 폰(화면은 **빈 빛**)을 귀에 댄 진우, 3/4 얼굴은 화면 왼쪽을 향하고 폰은 화면 오른쪽 귀에. 무표정. 손등에 금빛. 위쪽 오른편(폰 위)과 왼쪽 가운데는 흐린 벽.
- characters: 진우28
- props: 휴대폰(빈 화면)
- emotion/acting: 무표정, 눈만 차갑게 확인.
- motion: —
- dialogue_ref: ① 태호 (전화): "진우야. 카드, 내일 아침에 가져와. 응?" / KM: តេហូ៖ "អូនជីនូ… ព្រឹកស្អែក យកកាតមកឲ្យបងផង ណា៎?" ② 진우: "네, 선배." / KM: ជីនូ៖ "បាទ បង។"
- art_space: **위쪽 오른편 1/3(폰 위, 말풍선 ① 꼬리 → 폰) + 왼쪽 가운데 빈 벽(말풍선 ②)**
- attach: `JINU28_turnaround`, `JINU28_expressions`
- note: 폰 화면에 이름·숫자·아이콘 0.

--- SCENE BREAK --- (S4 → S5a · D-1 ~21:00 타워 앞 유리문, 밤)

### panel_027
- scene_id: S5a / location: LOC_BACK_ALLEY · TOWER_FRONT_DOOR (타워 앞 유리문, 판정 AB 타이트 변주) / light: L-TOWER-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 「앞문 잠겼어요, 뒤로 오세요.」 — 고정 문장 (긴장 4) · K-08 · L10
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **평범한 medium**(강조 앵글 금지)
- composition: 화면 왼쪽: 잠긴 유리 앞문 손잡이를 당겨 보는 진우의 손과 **뒷모습**(셔츠 소매 걷음). 유리 너머 불 꺼진 빈 로비(빈 벽, 로고·글자 0). 화면 오른쪽 가운데: 손전등 빛과 함께 다가오는 봉구 — 남색 챙 모자, 목의 흰 수건, 둥근 체형, 평범한 표정. 위쪽 오른편은 어두운 로비 유리 윗부분.
- characters: 진우28 `JINU28_NIGHT`(뒷모습) · 봉구 `BONGGU_SUMMER`
- props: 손전등
- emotion/acting: 일상적 안내. 진우 반응 0.
- motion: 봉구 → 진우.
- dialogue_ref: 봉구: "앞문 잠겼어요, 뒤로 오세요." / KM: ប៉ុងគូ៖ "ទ្វារមុខចាក់សោហើយ។ សូមវាងមកខាងក្រោយ។"
- art_space: **위쪽 오른편 1/3 = 어두운 로비 유리 윗면**(봉구 머리 위)
- attach: `BONGGU_sheet`, `JINU28_turnaround`
- note: **W12 보호: 의미 있는 조명·클로즈업·진우 얼굴 반응 0.** 비탈·가로등·반사경 넣지 않음.

--- SCENE BREAK --- (S5a → S5b · 같은 밤, 비탈 위 뒷문 경비실)

### panel_028
- scene_id: S5b / location: LOC_BACK_ALLEY ① 경비실 + ② 주차장 출구 / light: L-BOOTH-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 믹스커피 두 잔 — **회차 큰 밸브** (긴장 3) · L02·L48 · K-15 준비
- size: large · height: tall · gutter_after: normal
- camera: eye-level, warm medium two-shot
- composition: 화면 가운데~오른쪽: 비탈 위 작은 박스형 경비실 창, 노란 불, 작은 선풍기, 전기 포트, 무지 믹스커피 상자, 창턱의 갈색 슬리브 더미, 낡은 라디오. 창 안 봉구가 **두 컵**에 손으로 자른 갈색 골판지 슬리브를 끼워 내민다, **금니 하나 보이는 허허 웃음**. 화면 왼쪽: 컵을 받는 진우, **처음으로 조금 풀린 얼굴**(3/4). 뒤쪽 아래로 지하주차장 출구 경사로의 회색 셔터, 노랑·검정 줄무늬 차단봉, 낡은 회색 경차(무지 번호판). 위쪽 왼편은 남색 밤하늘·경비실 지붕 위 빈 공간.
- characters: 봉구 `BONGGU_SUMMER` · 진우28 `JINU28_NIGHT`
- props: PROP_CUP ×2(슬리브), 경비실 소품
- emotion/acting: 온기, 무장 해제의 한 박자.
- motion: 봉구의 손 → 진우의 손.
- dialogue_ref: ① 봉구: "더운데 이거 한 잔 하고 가, 젊은 양반." / KM: ប៉ុងគូ៖ "ក្តៅណាស់ ផឹកកាហ្វេមួយកែវសិនទៅ ក្មួយ។" ② 봉구: "하나는 위층에 갖다 드려. 불이 아직 켜져 있던데. 허허." / KM: ប៉ុងគូ៖ "មួយទៀត យកឡើងទៅជាន់លើផង ភ្លើងគេនៅភ្លឺ។ ហឹៗ"
- art_space: **위쪽 왼편 40% = 남색 밤하늘·경비실 지붕 위 빈 면**(말풍선 두 개 세로로)
- attach: `BONGGU_sheet`, `JINU28_expressions`
- note: 슬리브 = 002 문 앞 컵과 같은 모양. 셔터·차단봉·상자·차에 글자 0.

--- SCENE BREAK --- (S5b → S6 · D-1 ~21:20 사무 층, 밤)

### panel_029
- scene_id: S6 / location: LOC_FIRM_FLOOR ⑤ 사무용품 장 / light: L-FLOOR-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 빈 카드를 감춤 — 들킬 뻔한 작은 스파이크 (긴장 7) · TF-4
- size: medium · height: normal · gutter_after: tight
- camera: over-the-shoulder medium, 진우 어깨 너머
- composition: 앞쪽 왼편: 진우의 어깨·옆얼굴, 사무용품 장 위에 컵 두 개, 열린 서랍에서 **빈 메모리카드 하나를 손안에 감추는** 손. 뒤쪽 오른편 멀리: 불 켜진 파트너 유리방, 블라인드 너머 **고개를 드는 태호의 실루엣**(작게·흐리게). 그 사이 어두운 책상 줄. 위쪽 가운데는 어두운 천장.
- characters: 진우28 `JINU28_NIGHT` · 태호37 `TAEHO37_OFFICE`(실루엣)
- props: 빈 카드(모서리 멀쩡) · 컵 ×2
- emotion/acting: 손이 멈칫, 눈만 유리방 쪽.
- motion: 진우 손 → 뒤쪽 유리방.
- dialogue_ref: ① 태호 (화면 밖·뒤 유리방 쪽): "진우야? 아직 안 갔어?" / KM: តេហូ៖ "អូនជីនូ? មិនទាន់ទៅផ្ទះទៀតអី?" ② 진우: "…두고 간 게 있어서요." / KM: ជីនូ៖ "…ខ្ញុំភ្លេចរបស់ បាទ។"
- art_space: **위쪽 가운데~오른편 어두운 천장(말풍선 ①, 꼬리 → 유리방) + 왼쪽 가운데 어두운 책상 줄 위(말풍선 ②)**
- attach: `JINU28_turnaround`
- note: **진우 자리·책상 전화기는 이 컷에 넣지 않는다**(W12, beatsheet). 서랍 라벨 0.

### panel_030
- scene_id: S6 / location: LOC_FIRM_FLOOR ② 파트너 유리방 문간 / light: L-FLOOR-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 「난 밤엔 커피 안 마셔. 하하.」 (긴장 6) · K-09 · L03·L02
- size: medium · height: normal · gutter_after: xwide (→ 원룸)
- camera: eye-level, medium two-shot
- composition: 화면 왼쪽 앞: 유리방 문간의 진우(등 3/4), 슬리브 낀 컵을 내밀고 다른 손은 바지 주머니 속. 화면 오른쪽: 책상 스탠드 아래 앉은 태호, **고개도 들지 않고 넓게 웃는다**(그을린 피부, 하얀 치아). 책상 위 손목에 오닉스 커프스(작게, 강조 0). 낮은 가죽 소파 일부, 정리된 빈 책상. 위쪽 오른편은 어두운 유리벽·반쯤 내린 블라인드.
- characters: 진우28 · 태호37 `TAEHO37_OFFICE`
- props: PROP_CUP, PROP_CUFFLINK(작게)
- emotion/acting: 태호의 가벼운 거절, 진우의 무표정.
- motion: 진우 컵 → 태호(받지 않음).
- dialogue_ref: ① 태호: "난 밤엔 커피 안 마셔. 하하." / KM: តេហូ៖ "បងមិនផឹកកាហ្វេពេលយប់ទេ។ ហាៗ" ② 태호: "내일 아침, 잊지 말고." / KM: តេហូ៖ "ព្រឹកស្អែក កុំភ្លេចណា៎ អូន។"
- art_space: **위쪽 오른편 40% = 어두운 유리벽·블라인드**(태호 위, 두 개 세로)
- attach: `JINU28_turnaround`, `TAEHO37_expressions`
- note: 책상 위 서류·명패 0.

--- SCENE BREAK --- (S6 → S7 · D-1 ~23:00 원룸)

### panel_031
- scene_id: S7 / location: LOC_HERO_ROOM ① 책상 / light: L-ROOM-LAMP
- panel_style: present (REG-PRESENT)
- beat: 펜촉으로 모서리를 깨뜨림 (긴장 6) · L05
- size: insert · height: short · gutter_after: tight
- camera: extreme close-up, 책상 높이에서 약간 위
- composition: 합판 책상 위, 진우의 손가락이 빈 카드를 누르고 만년필 펜촉 끝이 **오른쪽 위 모서리를 깨뜨린다** — 작은 조각, **펜촉 끝이 아주 살짝 휜다.** 스탠드 빛 한쪽.
- characters: 진우28 손
- props: PROP_PEN(펜촉), PROP_CARD_FAKE(만드는 중)
- emotion/acting: 정밀, 냉정.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`(승인 시)
- note: —

### panel_032
- scene_id: S7 / location: LOC_HERO_ROOM ① 책상 / light: L-ROOM-LAMP
- panel_style: present (REG-PRESENT)
- beat: 두 카드, 벨벳 아래 은신처 (긴장 7) · L06·L26
- size: medium · height: normal · gutter_after: normal
- camera: bird-eye close-up
- composition: 책상 위 나란히 놓인 두 카드 — 같은 깨진 모서리(오른쪽 위), **왼쪽 진짜엔 흰 긁힘 한 줄, 오른쪽 가짜엔 없음.** 옆에 열린 만년필 상자, **들어 올린 와인 벨벳 받침 아래 빈 공간**으로 진우의 손가락이 진짜 카드를 밀어 넣는다.
- characters: 진우28 손
- props: PROP_CARD_REAL · PROP_CARD_FAKE · PROP_PEN_BOX
- emotion/acting: 조용한 결정.
- motion: 왼쪽 카드 → 상자 안.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`(승인 시)
- note: 긁힘 차이가 Flow에서 안 보이면 beatsheet Q10대로 art-director 판단(Flags).

### panel_033
- scene_id: S7 / location: LOC_HERO_ROOM / light: L-ROOM-LAMP
- panel_style: present (REG-PRESENT)
- beat: 「이번에도 숨깁니다. …이번엔, 당신들한테서.」 (긴장 7) · K-02 이중의미
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium close-up
- composition: 책상 앞에 앉은 진우(화면 가운데~오른쪽, 3/4), 닫힌 만년필 상자를 넣은 서랍에 손을 얹고 있다. 스탠드 빛이 얼굴 한쪽만. 화면 오른쪽 벽에 **걸린 새 남색 정장 재킷**. 바닥 선풍기. 화면 위쪽 왼편은 어두운 빈 벽.
- characters: 진우28 `JINU28_NIGHT`
- props: 서랍, 걸린 정장
- emotion/acting: 낮게 가라앉은 결의, 턱 근육.
- motion: —
- dialogue_ref: ① 진우 (속말): "이번에도 숨깁니다." / KM: ជីនូ (គិត)៖ "លើកនេះ ខ្ញុំក៏លាក់វាទៀត។" ② 진우 (속말): "…이번엔, 당신들한테서." / KM: ជីនូ (គិត)៖ "…តែលើកនេះ គឺលាក់ពីពួកអ្នកវិញ។"
- art_space: **위쪽 왼편 40% = 어두운 빈 벽**(생각 풍선 두 개)
- attach: `JINU28_expressions`
- note: 노트북 화면이 보이면 빈 빛.

### panel_034
- scene_id: S7 / location: LOC_HERO_ROOM ① 책상 / light: L-ROOM-LAMP
- panel_style: present (REG-PRESENT)
- beat: 손가락으로 세는 명단 — 마지막 이름은 나 (긴장 8, 목표 정점) · K-04
- size: large · height: tall · gutter_after: xwide (→ 다음 날 아침)
- camera: eye-level(책상 높이), close-up 손
- composition: 프레임 아래 절반: 빈 책상 위 진우의 한 손, 손가락을 하나씩 접어 엄지·검지·중지·약지가 접히고 **새끼손가락 하나만 펴진 채 멈춘다**. 종이·글자 0. 스탠드 빛. 위쪽 절반은 어두운 벽과 창(건너편 불 켜진 창 몇 개, 흐리게).
- characters: 진우28 손
- props: —
- emotion/acting: 마지막 손가락의 정지.
- motion: 손가락 → 위의 빈 어둠.
- dialogue_ref: ① 진우 (속말): "선배. 기 대표 부자. 날 민 손." / KM: ជីនូ (គិត)៖ "បង។ ប្រធានគី និងកូន។ ដៃដែលរុញខ្ញុំ។" ② 진우 (속말): "마지막 이름은, 나." / KM: ជីនូ (គិត)៖ "ឈ្មោះចុងក្រោយ… គឺខ្ញុំ។"
- art_space: **위쪽 45% = 어두운 벽·창**(생각 풍선 두 개)
- attach: `JINU28_turnaround`
- note: 명단을 쓴 종이·화면 0(world §9).

--- SCENE BREAK --- (S7 → S8 · D-day 08:30 사무 층, 낮 · 시간 경과는 빛·창밖 초록 느티·옷으로만)

### panel_035
- scene_id: S8 / location: LOC_FIRM_FLOOR ① 진우 자리 / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 「우리 진우. 우린 가족이야.」 「내 방으로 와.」 (긴장 6) · K-12 · L36·L11 배경
- size: large · height: tall · gutter_after: tight
- camera: eye-level, medium-wide
- composition: 창에서 두 번째 줄 끝 진우 자리(화면 가운데~오른쪽, 앉아 있음), 배경 책상 위 **회색 책상 전화기**(강조 0, 작게). 뒤쪽 창밖 짙은 초록 느티나무 머리. 앞쪽 왼편에서 걸어온 태호가 **두툼한 손 전체로 진우 어깨를 크고 무겁게 움켜쥔다**, 넓은 웃음. 위쪽 왼편은 흰 천장 패널 조명 면.
- characters: 태호37 `TAEHO37_OFFICE` · 진우28 `JINU28_SUIT`
- props: PROP_DESK_PHONE(배경)
- emotion/acting: 태호의 과시적 친근함 / 진우의 굳은 무표정.
- motion: 태호(왼쪽) → 진우 어깨.
- dialogue_ref: ① 태호: "우리 진우. 우린 가족이야." / KM: តេហូ៖ "អូនជីនូ។ យើងជាគ្រួសារតែមួយ។" ② 태호: "내 방으로 와." / KM: តេហូ៖ "ចូលមកបន្ទប់បងបន្តិចណា៎។"
- art_space: **위쪽 왼편 40% = 천장 조명 패널·빈 벽**(태호 머리 위)
- attach: `JINU28_turnaround`, `TAEHO37_turnaround`
- note: 전화기에 숫자·글자 0. 모니터는 빈 빛 또는 뒷면.

### panel_036
- scene_id: S8 / location: LOC_FIRM_FLOOR ① 진우 자리 / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 커프스 = 콜드 오픈? (미스디렉션 운율, 긴장 7) · L45-a·L14
- size: large · height: tall · gutter_after: normal
- camera: 진우 등 뒤 약간 왼쪽, extreme close-up — **FRAME-CUFF: 007과 같은 카메라 높이·같은 커프스 위치·크기(위쪽 절반)**
- composition: **한 장면 안 상하 배치(분할 금지):** 위쪽 절반 = 진우 남색 정장 어깨에 **화면 오른쪽에서 들어온 태호의 크고 두툼한 맨손**이 어깨를 움켜쥠, 소매 끝 **은색 사각 오닉스 커프스가 007과 같은 자리(오른쪽 1/3)·같은 각도·같은 크기(프레임 폭 약 1/10)**. 아래쪽 절반 = 책상 모서리 아래 그늘 속, 진우의 **꽉 쥔 주먹**(흰 단추 소매). 아래 왼편은 책상 밑 어둠.
- characters: 태호37 손 · 진우28 주먹
- props: PROP_CUFFLINK
- emotion/acting: 겉의 순응 / 아래의 분노.
- motion: 위(커프스) → 아래(주먹).
- dialogue_ref: 진우: "네, 선배." / KM: ជីនូ៖ "បាទ បង។"
- art_space: **아래쪽 왼편 1/4 = 책상 밑 어둠**(주먹 쪽 여백)
- attach: `TAEHO37_turnaround`
- note: **§1-2 매치(007·040).** 007과 달리 장갑 0, 맨손, 움켜쥠.

### panel_037
- scene_id: S8 / location: LOC_FIRM_FLOOR ② 파트너 유리방 / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 가짜를 건넴 — 독자만 안다 (긴장 7) · L06
- size: medium · height: normal · gutter_after: tight
- camera: 약간 위에서 기울어진 close-up — **016과 같은 앵글·크기**
- composition: 태호의 크고 두툼한 그을린 손바닥 위로 진우의 손가락이 카드를 올려놓는 순간. 카드 = 같은 깨진 모서리(오른쪽 위), **긁힘 없음**, 폭 ≈ 프레임 20%, 가운데. 태호 소매 끝 커프스가 프레임 가장자리에 작게. 배경은 흐린 유리방.
- characters: 태호37 손 · 진우28 손가락
- props: PROP_CARD_FAKE
- emotion/acting: 숨 죽인 건넴.
- motion: 진우 → 태호.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`(승인 시)
- note: §1-2 매치(016).

### panel_038
- scene_id: S8 / location: LOC_FIRM_FLOOR ② 파트너 유리방 / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 「난 안 봐. 하하. 알지?」 (긴장 6) · K-13 · L24
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, medium (태호 단독, 진우는 화면 왼쪽 앞 어깨 끝)
- composition: 화면 가운데~오른쪽 태호, 카드를 **보지도 않고** 재킷 안주머니에 넣는 손(커프스 작게), 눈은 화면 왼쪽(진우)을 향해 웃는다. 화면 왼쪽 가장자리에 진우 어깨 끝(흐림). 위쪽 오른편은 유리벽 너머 흐린 사무 층.
- characters: 태호37 · 진우28(어깨)
- props: PROP_CARD_FAKE → 안주머니
- emotion/acting: 신뢰를 과시하는 웃음.
- motion: 손 → 가슴 안.
- dialogue_ref: 태호: "난 안 봐. 하하. 알지?" / KM: តេហូ៖ "បងមិនមើលទេ។ ហាៗ ដឹងហើយមែនទេ?"
- art_space: **위쪽 오른편 1/3 = 흐린 유리벽**
- attach: `TAEHO37_expressions`
- note: —

### panel_039
- scene_id: S8 / location: LOC_FIRM_FLOOR 복도(끝에 ③ 호두색 나무문) / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 고문 등장 「펜은, 마음에 드나?」 (긴장 6) · K-10 · ចៅ 1회 · L04·L15·L37·L47
- size: large · height: tall · gutter_after: tight
- camera: eye-level, medium (전신에 가까운 고문 + 진우 옆모습)
- composition: 유리방을 나온 진우(화면 왼쪽, 옆모습) 앞에 복도를 지나던 고문이 멈춰 선다(화면 가운데~오른쪽): **은백 머리, 금테 둥근 안경, 먼저 웃는 처진 눈**, 짙은 갈색 나무 지팡이(**작고 둥근 은색 손잡이**, **왼손**에), 얇은 회색 카디건 **소매가 손목까지**, 가슴 주머니의 검은 옻칠 만년필(클립만). 주변 직원들이 자리에서 일어선다(흐리게, 배경). 복도 끝에 불투명 호두색 나무문(작게). 지팡이 끝이 바닥에 닿는 자리 옆, 아래 왼편 바닥은 비어 있다. 위쪽은 흰 천장 면.
- characters: 고문 `HANMOK_OFFICE` · 진우28 · 배경 직원들(무지, 얼굴 흐림)
- props: PROP_CANE · 가슴 주머니 PROP_PEN(같은 모델)
- emotion/acting: **다정한 할아버지.** 악역 조명·의미 있는 시선 금지.
- motion: 지팡이 → 고문 얼굴 → 진우.
- dialogue_ref: [효과음] 톡, 톡 (지팡이) / KM 효과음: តុក… តុក… · 한목: "펜은, 마음에 드나?" / KM: ហានម៉ុក៖ "ប៉ាកកានោះ ចៅចូលចិត្តទេ?"
- art_space: **아래 왼편 바닥(효과음, 지팡이 끝 옆) + 위쪽 오른편 1/3 = 흰 천장·빈 벽(말풍선, 고문 머리 위)**
- attach: `HANMOK_sheet`, `JINU28_turnaround`
- note: **손목·커프스 노출 0(TF-6).** 문에 명패·글자 0.

### panel_040
- scene_id: S8 / location: LOC_FIRM_FLOOR 복도 / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 떨어지지 않는 다정한 손 「…네, 고문님.」 (긴장 7, 서늘한 정지) · L13·L45-b
- size: large · height: tall · gutter_after: xwide (→ 오후 회의실)
- camera: 진우 등 뒤 약간 왼쪽, 어깨 높이 extreme close-up — **FRAME-HAND-ON-BACK: 007과 같은 진입 방향·손가락 모양·프레임 크기**
- composition: 진우 남색 정장 어깨·등 윗부분이 프레임을 채운다. **화면 오른쪽 가장자리**에서(손 ≈ 프레임 폭 1/3, 세로 가운데 1/3) 고문의 마르고 작은 **오른손** 맨손(검버섯, 단정한 손톱)이 들어와 **손가락을 편 채 가볍게** 얹혀 있다. 소매 끝 = 회색 카디건(007 커프스 자리와 같은 위치·크기). 화면 왼쪽 아래 가장자리에 진우 턱선 일부(귀 밑 점). 위쪽 왼편은 흐린 복도 벽.
- characters: 고문 손 · 진우28 어깨·턱 일부
- props: —
- emotion/acting: 다정한데 오래 머무는 손(1박 정지). 서늘한 조명 금지 — 평범한 낮 형광.
- motion: 정지.
- dialogue_ref: 진우: "…네, 고문님." / KM: ជីនូ៖ "…បាទ លោកតា។"
- art_space: **위쪽 왼편 1/3 = 흐린 복도 벽**
- attach: `HANMOK_sheet`
- note: **§1-2 매치(007·036).** 장갑 0, 커프스 0, 셔츠 소매 끝 0(TF-6).

--- SCENE BREAK --- (S8 → S9 · D-day 14:00 회의실)

### panel_041
- scene_id: S9 / location: LOC_FIRM_MEETING / light: L-MEETING-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 「우리 애는 그날 밤 집에 있었어.」 「다들 그렇게 맞추면 돼.」 (긴장 6)
- size: large · height: tall · gutter_after: normal
- camera: high-ish eye-level, wide — 문 쪽 끝, 진우 등 뒤 약간 오른쪽 위
- composition: §1-1 S9 좌석. 앞쪽 아래: 끝자리 진우(뒷모습 3/4, 빈 수첩·만년필). 테이블 왼쪽 줄 안쪽: 다리 꼰 민재(엎어 둔 폰). 멀리 가운데 창 앞 상석: 기 대표(역광), 묵직한 은색 시계 찬 손을 테이블에 올림. 테이블 오른쪽 줄 진우 가까이: 태호. 한쪽 복도 유리벽(눈높이 불투명 띠), 물잔들, 뒤집힌 빈 종이. **위쪽 띠 = 하얗게 밝은 창**.
- characters: 기 대표 `SANGDU_SUIT` · 민재 `MINJAE_CASUAL` · 태호37 · 진우28
- props: 물잔, 엎어 둔 폰, 빈 수첩, 만년필, 은색 시계
- emotion/acting: 기 대표의 거만한 지시, 체면의 무대.
- motion: 진우 → 테이블 끝 기 대표.
- dialogue_ref: ① 기 대표: "우리 애는 그날 밤 집에 있었어." / KM: ប្រធានគី៖ "កូនខ្ញុំ យប់នោះនៅផ្ទះ។" ② 기 대표: "다들 그렇게 맞추면 돼." / KM: ប្រធានគី៖ "ទាំងអស់គ្នា និយាយឲ្យត្រូវគ្នាតាមហ្នឹងទៅ។"
- art_space: **위쪽 25% = 하얗게 밝은 창 면**(기 대표 위, 말풍선 두 개 가로로)
- attach: `SANGDU_sheet`, `MINJAE_sheet`
- note: 고문 없음(EP1). 서류·명패 0, 종이는 뒷면.

### panel_042
- scene_id: S9 / location: LOC_FIRM_MEETING / light: L-MEETING-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 확인형 + 미끼 「강 건너 지하 바에선…」 (긴장 7) · L18
- size: medium · height: normal · gutter_after: tight
- camera: 테이블 높이, 민재 전경 + 진우 원경
- composition: 전경 화면 오른쪽: 민재(3/4 뒤·옆), 한쪽 입꼬리 비웃음, 엎어 둔 폰을 손가락으로 돌리고 다른 손 손톱을 문다. 원경 화면 왼쪽 위: 테이블 끝자리 진우, 수첩에서 눈을 들지 않는다. 그 사이 긴 원목 테이블. **진우 위 위쪽 왼편~가운데**는 흐린 벽·창빛.
- characters: 민재 · 진우28
- props: 엎어 둔 폰
- emotion/acting: 민재의 지루한 경멸 / 진우의 무심한 확인.
- motion: 민재 시선 → 화면 왼쪽(진우).
- dialogue_ref: ① 진우 (낮게): "…집에 계셨다고요." / KM: ជីនូ៖ "…យប់នោះ គាត់នៅផ្ទះ បាទ។" ② 진우: "그 시간, 강 건너 지하 바에선 누가 술병을 깨고 도망갔다던데요." / KM: ជីនូ៖ "ឮថាម៉ោងហ្នឹង បារក្រោមដីត្រើយទន្លេម្ខាង មានគេបំបែកដបស្រា ហើយរត់គេច។"
- art_space: **위쪽 40%, 왼편~가운데 = 흐린 벽·창빛**(②가 가장 긴 말풍선 — 폭 넓게)
- attach: `MINJAE_sheet`
- note: 민재 손은 이 컷에서 클로즈업하지 않는다(044·053용 아껴 둠). 폰 엎어 둠(화면 안 보임).

### panel_043
- scene_id: S9 / location: LOC_FIRM_MEETING / light: L-MEETING-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: **민재의 말실수** 「병값은 내가 다 물어 줬거든? 걔가 먼저 간 다음에—」 (긴장 8) · K-14 · L41·L18
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium close-up
- composition: 화면 왼쪽~가운데: 발끈해 몸을 앞으로 숙이며 **화면 왼쪽(진우 쪽)으로 손가락질하는 민재**, 득의양양한 얼굴이 굳기 시작하는 순간. 원경 화면 오른쪽: 창 앞 기 대표(흐림). 위쪽 띠는 밝은 창빛·흐린 벽.
- characters: 민재 · 기 대표(원경)
- props: —
- emotion/acting: 의기양양 → 말끝에서 굳음(눈이 먼저 멈춤).
- motion: 손가락 → 왼쪽 밖.
- dialogue_ref: ① 민재: "도망은 무슨, 병값은 내가 다 물어 줬거든?" / KM: មីនជែ៖ "រត់គេចអី! ថ្លៃដបហ្នឹង អញសងគេអស់ហើយ ដឹងអត់?" ② 민재: "걔가 먼저 간 다음에—" / KM: មីនជែ៖ "ក្រោយពីវាចេញទៅមុន—"
- art_space: **위쪽 35% 띠 = 밝은 창빛·흐린 벽**(①은 왼쪽 위, ②는 오른쪽 아래로 끊긴 채)
- attach: `MINJAE_sheet`
- note: 손가락질하는 손의 손톱은 작게(클로즈업 아님).

### panel_044
- scene_id: S9 / location: LOC_FIRM_MEETING / light: L-MEETING-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 아버지의 손 + 반지 없는 맨손 (긴장 8) · L07 심기
- size: small · height: short · gutter_after: tight
- camera: 테이블 높이 close-up
- composition: 테이블 위 가로 띠: 기 대표의 두툼하고 짧은 손가락과 묵직한 은색 시계가 아들의 크림 린넨 팔뚝을 쥔다. 같은 프레임, 테이블 위 민재의 맨손 — **반지 없음, 물어뜯은 들쭉날쭉한 손톱, 거스러미** — 손등이 카메라 쪽, §1-2와 같은 손 기울기(크기는 작게, 무심하게). 위쪽은 흐린 회의실.
- characters: 기 대표 손 · 민재 손
- props: 은색 시계(바늘만)
- emotion/acting: 끊는 손, 무심하게 놓인 맨손(1독에서 강조 0).
- motion: 아버지 손 → 팔뚝.
- dialogue_ref: 기 대표 (낮게): "…민재야." / KM: ប្រធានគី៖ "…មីនជែ។"
- art_space: **위쪽 1/3 = 흐린 회의실 배경**(작은 whisper 말풍선)
- attach: `SANGDU_sheet`, `MINJAE_sheet`
- note: 민재 손에 반지·은색 0(목걸이 체인과 혼동 금지 — 체인은 프레임 밖).

### panel_045
- scene_id: S9 / location: LOC_FIRM_MEETING / light: L-MEETING-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 두려움 / 늦게 굳는 미소 1 — 「하하, 술자리 얘기는 이쯤 하시죠.」 (긴장 8) · L22
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **한 장면 안 깊이 배치**(분할 금지): 전경 close-up + 원경 medium
- composition: 전경 화면 왼쪽: 기 대표 얼굴 — 놀람이 아니라 **두려움**, 얼굴색이 빠지고 입이 굳는다(눈은 크게 뜨지 않음). 원경 화면 오른쪽: 태호 — 입은 아직 웃는데 **눈가 주름이 먼저 펴진다.** 위쪽 오른편은 흐린 창빛.
- characters: 기 대표 · 태호37
- props: —
- emotion/acting: 두려움 / 웃음 뒤의 경계.
- motion: 기 대표 → 태호.
- dialogue_ref: 태호: "하하, 술자리 얘기는 이쯤 하시죠." / KM: តេហូ៖ "ហាៗ រឿងផឹកស៊ី ទុកត្រឹមហ្នឹងសិនទៅបាទ។"
- art_space: **위쪽 오른편 1/3 = 흐린 창빛**(태호 머리 위)
- attach: `SANGDU_sheet`, `TAEHO37_expressions`
- note: 과장된 공포 연기 금지.

### panel_046
- scene_id: S9 / location: LOC_FIRM_MEETING / light: L-MEETING-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: **사이다 정점** — 늦게 굳는 미소 2, 닫히는 캡 「그럼 그날 밤은, 댁에 계셨던 걸로 하겠습니다.」 (긴장 8)
- size: large · height: tall · gutter_after: xwide (→ 밤 원룸)
- camera: 테이블 높이, 진우 손 쪽에서, 깊은 피사계
- composition: 위쪽 오른편(초점): 태호의 입가 close-up, **입꼬리가 늦게 굳는다**(커프스 작게). 아래 왼편(흐린 전경): 끝자리 진우의 손이 **만년필 캡을 닫는다**, 펼친 수첩은 **비어 있다**. 그 사이 왼쪽 가운데는 흐린 테이블·벽.
- characters: 태호37 · 진우28 손
- props: PROP_PEN, 빈 수첩
- emotion/acting: 진우의 정중한 칼끝 / 태호의 굳음.
- motion: 아래(캡) → 위(입).
- dialogue_ref: 진우: "그럼 그날 밤은, 댁에 계셨던 걸로 하겠습니다." / KM: ជីនូ៖ "អញ្ចឹង ខ្ញុំកត់ទុកថា យប់នោះ គាត់នៅផ្ទះ បាទ។"
- art_space: **왼쪽 가운데 띠 = 흐린 테이블·벽**(태호 입과 진우 손 사이, 꼬리 → 아래 진우)
- attach: `TAEHO37_expressions`
- note: 수첩에 글자·선 0.

--- SCENE BREAK --- (S9 → S10a · D-day ~22:00 원룸, 노트북의 차가운 빛)

### panel_047
- scene_id: S10a / location: LOC_HERO_ROOM ① 책상 / light: L-ROOM-LAPTOP (노트북 빈 빛)
- panel_style: present (REG-PRESENT)
- beat: 「그땐… 끝까지 못 봤지.」 (긴장 6) · L27·L26
- size: medium · height: normal · gutter_after: wide
- camera: eye-level, medium close-up
- composition: 노트북의 차가운 흰 빈 빛이 진우 얼굴에(화면은 카메라 반대쪽, 안 보임). 화면 오른쪽 아래: 열린 만년필 상자, 들어 올린 벨벳, **엄지가 진짜 카드의 깨진 모서리를 누른다**. 위쪽 왼편은 어두운 방.
- characters: 진우28 `JINU28_HOME`
- props: PROP_CARD_REAL · PROP_PEN_BOX · 노트북
- emotion/acting: 결심 직전의 고요.
- motion: 엄지 → 얼굴.
- dialogue_ref: 진우 (속말): "그땐… 끝까지 못 봤지." / KM: ជីនូ (គិត)៖ "ពេលនោះ… ខ្ញុំមិនបានមើលដល់ចប់ទេ។"
- art_space: **위쪽 왼편 1/3 = 어두운 방**
- attach: `JINU28_expressions`
- note: 노트북 화면·로고 안 보이게.

--- SCENE BREAK --- (S10a → S10r · 기록 컷: 블랙박스 영상 속, 7년 전 그 밤 · 그림 안에 얇은 이중 검은 테두리 + 둥근 모서리)

### panel_048
- scene_id: S10r / location: SET_SEDAN_CABIN 앞유리 시점 → LOC_BACK_ALLEY 굽이 / light: L-RECORD
- panel_style: record (REG-RECORD)
- beat: 헤드라이트 속 굽이, 수레 끄는 노인 (긴장 7)
- size: large · height: tall · gutter_after: tight
- camera: 운전석 블랙박스 시점, 광각(가장자리 휘어짐), 약간 high
- composition: 앞유리 너머 헤드라이트에 잡힌 좁은 비탈 굽이 — 회색 콘크리트 전봇대와 **굽은 팔 흰 가로등**, **주황 테 둥근 볼록 반사경**, 낮은 담, 전선. 가운데 아래: 폐지 수레(녹슨 손잡이, 납작한 종이 상자 더미)를 끄는 노인의 **바랜 회색 점퍼 등**. 충격 직전에서 끊긴다. 녹회색 탈색, 가는 가로 노이즈, 얇은 이중 검은 테두리 + 둥근 모서리. 보닛 끝이 프레임 맨 아래.
- characters: 노인(등만)
- props: PROP_CART · VEH_SEDAN(보닛 끝)
- emotion/acting: 차가운 사실, 불가피한 순간 직전.
- motion: 앞으로(아래 → 위).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: 없음
- note: 타임스탬프·REC·숫자·UI·번호판 0. 15+: 충격·몸 0.

### panel_049
- scene_id: S10r / location: SET_SEDAN_CABIN 앞유리 시점 → LOC_BACK_ALLEY 굽이 / light: L-RECORD
- panel_style: record (REG-RECORD)
- beat: 흩어지는 상자, 스쿠터는 없다 (긴장 7)
- size: medium · height: normal · gutter_after: wide
- camera: 블랙박스 시점, 흔들린 광각(약간 기울어짐)
- composition: 넘어지는 수레에서 흩어지는 납작한 종이 상자들이 헤드라이트 속에 떠 있다. 시야가 비탈 아래로 빠지며 기울어진다. **빨간 스쿠터는 프레임 어디에도 없다.** 노인의 몸·충격 0(상자만).
- characters: 없음
- props: 흩어지는 종이 상자
- emotion/acting: 혼란, 도주의 시작.
- motion: 비탈 아래로 쏠림.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: 없음
- note: 기록 테두리 유지. 붉은색 물체 0(스쿠터 오인 방지).

### panel_050
- scene_id: S10r / location: SET_SEDAN_CABIN 실내 (아래로 꺾인 렌즈) / light: L-RECORD
- panel_style: record (REG-RECORD)
- beat: **반전 — 운전대 위 반지 낀 손** (긴장 9) · L08·L40
- size: full-bleed · height: tall · gutter_after: wide
- camera: 실내 채널, 아래로 꺾인 렌즈 시점, 광각
- composition: 운전대 1시 방향의 오른손, 프레임 가운데 — 손 폭 ≈ 프레임 폭 40%(§1-2, FRAME-RECORD-INTERIOR). **가운뎃손가락에 두꺼운 무광 은반지 + 작은 짙은 초록 돌**(화면 유일의 채도), 길고 깨끗한 손가락, 다듬은 손톱, 팔뚝 중간까지 걷은 흰 셔츠 소매, 커프스 0, 시계 0. 프레임 위쪽: 뒷유리 너머 비탈 위에서 다가오는 **외눈 헤드라이트**. **프레임 오른쪽 가장자리(조수석 쪽) 어둠 속 낮은 곳에 작은 은빛 점 하나**(화면 1% 이하, 형태 식별 불가, 강조 0). 녹회 탈색, 가로 노이즈, 이중 테두리.
- characters: 준서 손 `JUNSEO28_RECORD`
- props: PROP_RING · 은빛 점(지팡이 손잡이 — 식별 불가)
- emotion/acting: 차갑게 정확한 손.
- motion: 반지 → 위쪽 헤드라이트.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JUNSEO_hand`
- note: **053과 매치.** **은빛 점은 결함이 아니다(TF-5)** — panel-validator 메모. 조수석 사람·지팡이 형태 0. 대시보드 숫자 0.

### panel_051
- scene_id: S10r / location: SET_SEDAN_CABIN 실내 / light: L-RECORD
- panel_style: record (REG-RECORD)
- beat: 렌즈를 덮는 손바닥 → 검정 (긴장 9) · L08
- size: medium · height: normal · gutter_after: wide (검은 여운)
- camera: 실내 채널, 렌즈 바로 앞 extreme close-up
- composition: 반지 낀 손바닥이 렌즈를 덮어 온다 — 위쪽에 손바닥 살결과 **손바닥 안쪽으로 보이는 반지 테**, 손가락 사이로 남은 녹회빛. **패널 아래쪽 절반은 완전한 검정**으로 끝난다.
- characters: 준서 손
- props: PROP_RING
- emotion/acting: 의식적인 숨김.
- motion: 위 → 아래 검정.
- dialogue_ref: 무대사 (효과음 없음 — 판정 AD)
- art_space: 없음(silent)
- attach: `JUNSEO_hand`
- note: 기록 테두리 유지.

--- SCENE BREAK --- (S10r → S10m · 기억 컷: 앵커 A 원본, 그 차가 가고 20초 뒤)

### panel_052
- scene_id: S10m / location: LOC_BACK_ALLEY 굽이 — **앵커 A** / light: L-MEM-ANCHOR (+ 붉은·푸른 경광 반사)
- panel_style: memory (REG-MEMORY)
- beat: 「…그 차가 가고, 20초 뒤.」 — 무고한 사람이 잡힌 자리 (긴장 8) · V2 원본 · TF-9
- size: large · height: tall · gutter_after: **tight (053 직전 간격 0 — beatsheet F11)**
- camera: **비탈 아래쪽에서 위를 향한 약간 low-angle, 객관 시점(고정)**
- composition: **world §6-1 앵커 A 고정:** 화면 **왼쪽 위 = 굽은 팔 흰 가로등**(찌그러진 갓), **오른쪽 위 = 주황 테 볼록 반사경**(안에 무릎 꿇은 사람이 작게 비침 — V8), 가운데 = 무릎 꿇은 덕배의 등, **뒤로 돌린 손목에 은색 수갑이 닫히는 순간**(경찰은 짙은 소매와 손만), 앞쪽 땅 왼쪽 가운데 = **흰 배달 헬멧(왼쪽 긁힘)**, 뒤쪽 비탈 위 가운데 = 타워 뒷문 불빛(작게), **왼쪽 가장자리 = 쓰러진 빨간 스쿠터 + 무지 흰 배달 상자**. 붉은·푸른 경광 반사가 벽에 약하게(경찰차 0). **오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘.** 청회색 탈색, 가장자리 흐림.
- characters: 덕배 `DEOKBAE_DELIVERY` · 경찰(소매·손만)
- props: PROP_HANDCUFFS · PROP_HELMET · VEH_SCOOTER
- emotion/acting: 체념한 등, 고개 숙임.
- motion: 가로등 → 덕배 → 수갑.
- dialogue_ref: 진우 (속말): "…그 차가 가고, 20초 뒤." / KM: ជីនូ (គិត)៖ "…ឡាននោះទៅបាត់ ម្ភៃវិនាទីក្រោយមក…"
- art_space: **오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘**(가로등·반사경·헬멧·스쿠터·덕배를 피한 유일한 빈 면)
- attach: `DEOKBAE_sheet`
- note: **EP02 V2·V3 재사용 기준 — 앵글·배치·빛·art_space 모두 고정.** 경찰 얼굴·경찰차·휘장 0. 스쿠터 상자·헬멧 글자 0.

--- SCENE BREAK --- (S10m → S10x · 오후 회의실 테이블, 044 반복 — 050과 같은 크기)

### panel_053
- scene_id: S10x / location: LOC_FIRM_MEETING 테이블 면 / light: L-MEETING-AFTERNOON
- panel_style: present (REG-PRESENT, 회상 삽입 — 낮빛 그대로, 청회 처리 안 함)
- beat: 민재의 맨손 다시 — 반지가 없다 (긴장 9) · L07 회수 · V3
- size: full-bleed · height: tall · gutter_after: tight
- camera: **FRAME-BARE-HAND: 050과 같은 카메라 거리·높이·손 각도**
- composition: 원목 테이블 위 민재의 오른손, 손바닥을 아래로, 약간 위에서 본 손등, 프레임 가운데 — 손 폭 ≈ 프레임 폭 40%, 050과 같은 기울기. **반지 없음, 물어뜯은 들쭉날쭉한 손톱(끝이 붉음), 거스러미**, 반쯤 걷은 크림 린넨 소매. 아버지의 손은 프레임 밖. 오후 낮빛.
- characters: 민재 손 `MINJAE_CASUAL`
- props: —
- emotion/acting: 침묵의 비교.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `MINJAE_sheet`
- note: **050과 매치(§1-2).** 설명·화살표·분할 0. 은색 체인 프레임 밖.

--- SCENE BREAK --- (S10x → S10a · 원룸으로 돌아옴, 같은 밤)

### panel_054
- scene_id: S10a / location: LOC_HERO_ROOM / light: L-ROOM-LAPTOP (노트북 빈 빛)
- panel_style: present (REG-PRESENT)
- beat: **반전 정점** 「…운전한 사람이, 기민재가 아니었어.」 (긴장 9) · K-05
- size: large · height: tall · gutter_after: **xwide (→ 밤 골목)**
- camera: eye-level, extreme close-up 눈
- composition: 진우의 한쪽 눈과 눈썹 일부가 프레임 가운데(060과 같은 크기). 노트북의 차가운 흰빛, **깜빡임이 멈춘 눈.** 프레임 아래 가장자리에 카드 깨진 모서리를 누른 엄지. 위쪽 1/3은 차가운 빛이 닿지 않는 어둠.
- characters: 진우28
- props: PROP_CARD_REAL(엄지)
- emotion/acting: 얼어붙은 인지.
- motion: —
- dialogue_ref: 진우 (속말): "…운전한 사람이, 기민재가 아니었어." / KM: ជីនូ (គិត)៖ "…អ្នកបើកឡាន… មិនមែនមីនជែទេ។"
- art_space: **위쪽 1/3 = 어둠**
- attach: `JINU28_expressions`
- note: 060과 매치(빛만 다름).

--- SCENE BREAK --- (S10a → S11a · D-day ~23:30 비탈 골목 아래)

### panel_055
- scene_id: S11a / location: LOC_BACK_ALLEY ③ 굽이 → ⑤ 비탈 끝 / light: L-ALLEY-SUMMER-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 빈 가로등 아래를 지남 (긴장 4) · L35
- size: large · height: tall · gutter_after: tight
- camera: eye-level, wide 뒷모습, 비탈 위에서 아래로
- composition: 비탈을 내려가는 진우의 뒷모습(남색 재킷, 화면 가운데 작게). 굽이의 **아무도 없는 흰 가로등 원**을 지난다(반사경 오른쪽 위에 작게). 비탈 끝 모퉁이에 **짙은 초록 느티나무**와 분식집의 김 서린 노란 불빛이 아래에서 번진다.
- characters: 진우28 `JINU28_OUT_NIGHT`
- props: —
- emotion/acting: 질문을 품은 채 걷는 고요.
- motion: 위 → 아래(노란 불빛으로).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: 없음
- note: 052와 같은 굽이지만 앵글이 다르다(위에서 아래) — 앵커 A 구도 반복 금지. 간판 0.

--- SCENE BREAK --- (S11a → S11b · 분식집 안)

### panel_056
- scene_id: S11b / location: LOC_BUNSIK ①② 철판·김밥 도마 / light: L-BUNSIK
- panel_style: present (REG-PRESENT)
- beat: 김, 빠르고 정확한 손 — 클리프 직전 온기 (긴장 3)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up
- composition: 위쪽: 큰 떡볶이 철판의 김과 붉은 국물(김이 위쪽 오른편을 부드럽게 덮음). 가운데: 은박 위에서 빠르고 정확하게 김밥을 마는 **작은 손, 짧은 손톱, 맨 손목**(반팔). 수아의 얼굴은 김에 가려 안 보인다. 배경 뒤쪽에 이모의 등(짙은 갈색 앞치마). **아래 20% = 스테인리스 카운터 가장자리 빈 면.**
- characters: 수아 손 `SUA_WORK` · 이모 등 `IMO_WORK`
- props: 철판, 김밥, 은박
- emotion/acting: 따뜻하고 분주한 일상.
- motion: 김 → 손.
- dialogue_ref: ① 진우 (화면 밖·아래): "김밥 한 줄, 포장해 주세요." / KM: ជីនូ៖ "សុំគីមបាប់មួយដើម ខ្ចប់យកទៅ បាទ។" ② 수아: "네." / KM: ស៊ូអា៖ "ចាស។"
- art_space: **아래 20% 스테인리스 카운터 가장자리(①, 꼬리 → 아래 밖) + 위쪽 오른편 김(②, 작게)**
- attach: `SUA_sheet`
- note: 리본핀은 이 컷에 안 보이게(앞치마 가슴 프레임 밖). 메뉴판 보이면 빈 색판.

### panel_057
- scene_id: S11b / location: LOC_BUNSIK 카운터 / light: L-BUNSIK
- panel_style: present (REG-PRESENT)
- beat: 「임덕배 씨 변호인입니다…」 「처음 뵙는 분이네요.」 (긴장 6) · K-06 · L31·L30
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium two-shot
- composition: 카운터를 사이에 두고 진우(화면 왼쪽, 3/4)와 수아(화면 오른쪽, 정면에 가까운 3/4). 수아 — 일자 앞머리, 목덜미 낮은 똥머리(갈색 머리끈), 왼쪽 귓불 작은 은색 귀걸이, 흰 반팔 티 + 밝은 황토 베이지 앞치마, **무표정, 차갑게 정중, 눈을 먼저 피하지 않는다.** 앞치마 리본핀은 **안 보이거나 작고 흐리게.** 철판 김이 둘 사이 아래쪽. **위쪽 30% 띠 = 김 서린 벽·천장 형광등 빛**(빈 색판 메뉴는 이 띠 밖으로).
- characters: 진우28 `JINU28_OUT_NIGHT` · 수아 `SUA_WORK`
- props: 카운터, 김밥 포장
- emotion/acting: 진우의 정중한 위로 / 수아의 차가운 거리.
- motion: 진우 → 수아 → (시선 맞섬).
- dialogue_ref: ① 진우: "임덕배 씨 변호인입니다. 아버님은 괜찮으실 겁니다." / KM: ជីនូ៖ "ខ្ញុំជាមេធាវីរបស់លោក អ៊ីម ដុកបែ។ ឪពុកកញ្ញា នឹងមិនអីទេ។" ② 수아: "처음 뵙는 분이네요." / KM: ស៊ូអា៖ "ខ្ញុំមិនដែលជួបលោកពីមុនទេ។"
- art_space: **위쪽 30% 띠 = 김 서린 벽·천장**(①은 왼쪽 위 넓게 — 두 문장, ②는 오른쪽 조금 아래)
- attach: `JINU28_expressions`, `SUA_sheet`
- note: **아는 눈빛·의미심장한 조명 0(🔒 EP1–5).**

### panel_058
- scene_id: S11b / location: LOC_BUNSIK 카운터 / light: L-BUNSIK
- panel_style: present (REG-PRESENT)
- beat: 거스름돈을 건네는 손 → 검은 리본핀, 휜 핀 끝 (긴장 8) · L09
- size: large · height: tall · gutter_after: wide
- camera: eye-level, close-up, 아래(손)에서 위(가슴)로 이어지는 세로 구도
- composition: 프레임 아래: 거스름돈(무늬·숫자 없는 흐린 지폐·동전)을 내미는 수아의 작은 손. 시선이 위로 따라 올라간 프레임 위쪽 가운데: 밝은 황토 베이지 앞치마 왼쪽 가슴의 **작은 검은 리본 매듭 + 은색 핀, 핀 끝이 살짝 휘어 빛을 받는다**(밝은 앞치마 위 가장 또렷한 점). 얼굴은 프레임 위로 잘림(턱 끝까지).
- characters: 수아 손·가슴
- props: PROP_RIBBON_PIN · 무지 지폐·동전
- emotion/acting: 평범한 손짓 속 차가운 물건.
- motion: 아래(손) → 위(핀).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `SUA_sheet` (+`PROPS_keyprops`(승인 시))
- note: 지폐 무늬·숫자·초상 0.

--- SCENE BREAK --- (S11b → S11m · 기억 컷: 첫 삶 2년 뒤 겨울, 장례식 손)

### panel_059
- scene_id: S11m / location: (장소 없음 — 장례식 클로즈업) / light: L-MEM-FUNERAL
- panel_style: memory (REG-MEMORY)
- beat: 「아버님 장례식 날, 내가 달아 준…」 (긴장 9) · K-07 · L09
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up 손
- composition: 프레임 가운데~아래: 검은 정장 소매·흰 단추 소매의 **떨리는 손**이 흰 블라우스 깃 옆 검은 상복 라펠에 같은 검은 리본핀을 단다 — **핀 끝이 휘는 순간.** 가장자리에 흰 국화 꽃잎 몇 장. 얼굴 0. **위쪽 1/3 = 검은 천**. 청회색 탈색, 가장자리 흐림.
- characters: 진우30 손 `JINU30_FUNERAL` · 수아24 가슴께 `SUA_FUNERAL_MEMORY`
- props: PROP_RIBBON_PIN
- emotion/acting: 떨림, 슬픔.
- motion: 손 → 핀 끝.
- dialogue_ref: 진우 (속말): "아버님 장례식 날, 내가 달아 준…" / KM: ជីនូ (គិត)៖ "ថ្ងៃបុណ្យសពឪពុកនាង… ខ្ញុំជាអ្នកខ្ទាស់ឲ្យ…"
- art_space: **위쪽 1/3 = 검은 천**
- attach: `PROPS_keyprops`(승인 시) (**`SUA_sheet` 첨부 금지** — 앞치마가 섞인다)
- note: 058과 같은 핀 형태·같은 휨 방향. 영정·제단·글자 0.

--- SCENE BREAK --- (S11m → S11b · 분식집으로 돌아옴)

### panel_060
- scene_id: S11b / location: LOC_BUNSIK / light: L-BUNSIK
- panel_style: present (REG-PRESENT)
- beat: **클리프행어** 「그건… 아직 생기지 않은 물건인데.」 (긴장 10) · K-07
- size: full-bleed · height: tall · gutter_after: — (회차 끝, 엔딩 카드 없음)
- camera: eye-level, extreme close-up 눈 — **054와 같은 크기**
- composition: 진우의 한쪽 눈과 눈썹 일부가 프레임 가운데. 김 너머 따뜻한 노란빛, **멈춘 눈동자**. 그 밖엔 아무것도 없다. **아래 1/3 = 노란 김의 부드러운 흐림.**
- characters: 진우28
- props: —
- emotion/acting: 얼어붙은 인지, 최고 긴장.
- motion: —
- dialogue_ref: 진우 (속말): "그건… 아직 생기지 않은 물건인데." / KM: ជីនូ (គិត)៖ "របស់នោះ… វានៅមិនទាន់មានផងតើ។"
- art_space: **아래 1/3 = 노란 김 흐림**
- attach: `JINU28_expressions`
- note: P61 없음(판정 Y). 수아 컷 추가 금지.

---

## 5. 점검 · 플래그

### 5-1. 품질 체크
- [x] 패널 60, panel_001–060 연속, 대본 P01–P60과 1:1. P61 없음.
- [x] 모든 패널: scene_id / location(LOC_* 또는 판정 AB 변형·SET) / light code / panel_style / size / height / gutter / camera / composition / characters+outfit / props / emotion / art_space / attach.
- [x] 같은 scene_id = 같은 장소·시간·빛. 삽입 컷은 S3m·S10r·S10m·S10x·S11m로 분리, S10a·S11b는 삽입 뒤 같은 id로 복귀.
- [x] 대사 패널 37개(대사 48줄) 전부 `dialogue_ref`(KO + KM, 대본 그대로) + `art_space`. 무대사 23개 `art_space: 없음(silent)`. 말풍선 3개 이상 패널 0.
- [x] 효과음 3(011·012·039)과 env 1(011) 자리 지정. 051 효과음 없음.
- [x] TF-1 6항(001–010), 15+(008·010·048–049·052), TF-5 은빛 점(050), TF-6 고문 손목 0(024·039·040), W12(027·029), 🔒 수아(057).
- [x] 매치 컷 6묶음 §1-2. 050·053 = 같은 `tall`·같은 손 각도·같은 손 폭, 052→053 간격 tight.
- [x] 긴장 ≤3 패널 028·056 각 1개(2연속 없음), 055–056 이완 2패널, 마지막 060 = 10.
- [x] 레지스터: present / first-life winter(001–010) / memory(019·024·052·059) / record(048–051).
- [x] 글자 금지: §0-1 전역 + 패널별 note. 새 장소·새 인물 0.

### 5-2. 특별 주의 패널 (렌더·검증에서 재그림 사유)
| 패널 | 주의 |
|---|---|
| 002 | 왼쪽 가장자리 = 진우 왼어깨 바로 바깥. 문틈 그림자 식별 불가, 슬리브 컵(문 앞, 김) + 무지 컵(파라펫, 김 없음) 둘 다 |
| 003·006 | 왼쪽 밖 화자: 왼쪽 1/3에 사람·손·그림자 0 |
| 005·009 | 태호44 손·커프스 0, 위치 단서 0 |
| 006 | 막대가 지팡이로 식별되면 재그림(은색 손잡이 0) |
| 007 | 장갑 + 커프스 + 짙은 울 소매, 손가락 셋 + 손바닥 아랫부분만. 맨손·주먹·태호 얼굴 → 재그림 |
| 008 | 피·몸 0 |
| 014 | 시계·상처 0 |
| 016 ↔ 037 | 같은 앵글·크기, 긁힘 있음/없음 |
| 027 | 의미 있는 조명·진우 얼굴 반응 → 재그림 |
| 036 | 분할 프레임 금지, 커프스 위치·크기 = 007 |
| 039·040 | 악역 인상·서늘한 조명·커프스 노출 → 재그림 |
| 044 | 손 클로즈업이 과하게 강조되면 재그림(작게) |
| 050 | 반지 초록만 채도, 은빛 점은 **결함 아님**(TF-5). UI·숫자 0. 반지가 다른 손가락이면 재그림(가운뎃손가락) |
| 050 ↔ 053 | 같은 손 각도·폭·높이. 053에 반지·은색 0 |
| 052 | 앵커 A 배치 고정(EP02 기준), 오른쪽 아래 1/4 빈 면 |
| 057 | 리본핀 또렷하면 재그림(작고 흐리게/안 보이게), 아는 눈빛 0 |
| 058 | 핀 끝 휨이 보여야 함 |

### 5-3. Flags for the leader

| # | 내용 | 요청 |
|---|---|---|
| PD-F1 | **style-bible.md·character-sheets.md에 맞췄다**(초안 작성 뒤 두 파일이 나옴): 빛 코드 = style-bible §3, 레지스터 = §4 REG-*, 장소 변형 = §5 `EXT_GATE`·`TOWER_FRONT_DOOR`, 매치 구도 = §7 FRAME-* (손 1/3 폭·커프스 1/10 폭·맨손 40% 폭·카메라 등 뒤 **왼쪽**), 카드 이름·첨부 = character-sheets §4. 내 초안과 달랐던 것은 전부 art-director 쪽으로 바꿨다 | 확인만. prompt-smith는 style-bible 영문 문장을 복사 |
| PD-F2 | **007은 첨부 없음**, 장갑 손 = character-sheets §2-2 `HAND_ANON_GLOVE` 문장 토큰(카드 아님, 이름 없음). 내 초안의 `HAND_glove_anon` 카드 제안은 철회 | 확인만 |
| PD-F3 | **레퍼런스 카드 13장 + 선택 `PROPS_keyprops`**(character-sheets F1). 소품 매치 컷(001·016·023·031·032·037·058·059)은 `PROPS_keyprops`에 크게 기댄다 — 승인을 권한다. 미승인이면 해당 패널 첨부는 `(승인 시)` 항목을 빼고 style-bible §6 PROP 문장만으로 | 리더: 13장 vs 최소안, PROPS 승인 여부 |
| PD-F4 | **027 위치 이름:** style-bible이 `LOC_BACK_ALLEY · TOWER_FRONT_DOOR`로 적었다(같은 타워, 실제로는 **앞** 유리문). 샷리스트도 그 이름을 쓰되 비탈·가로등·반사경은 넣지 않고 유리문 + 불 꺼진 로비만 | 확인만 |
| PD-F5 | **024(고문 기억 컷) 배경 = 흐린 LOC_FIRM_FLOOR**(beatsheet F8). 예비 장소 LOC_ADVISOR_ROOM은 쓰지 않았다(판정 U: EP13 전용) | 확인만 |
| PD-F6 | **053 레지스터 = present(낮빛)**, 청회 처리 안 함. 대본이 "오후 낮빛"을 지정했고 044의 반복이기 때문. 050(record 녹회)과는 색이 달라도 손 모양·각도·크기 비교로 V3가 성립 | letterer는 053을 silent, memory 테두리 없이 |
| PD-F7 | **`JINU28_OUT_NIGHT` 확정 = `JINU28_HOME`(회색 반팔 티 + 검은 트레이닝 바지) 위 남색 정장 재킷 + 검은 운동화**(beatsheet Q9 권장안). 055–060 고정 | art-director: JINU28 시트에 의상 변형 컷 권장 |
| PD-F8 | 첨부는 character-sheets §4 표 그대로(얼굴 최대 2명분). 041은 기 대표·민재 카드만(태호·진우는 토큰 문장) | prompt-smith |
| PD-F9 | **032 진짜/가짜 긁힘 차이**가 Flow에서 안 나오면 beatsheet Q10대로 L06을 내려도 037 긴장은 성립(독자는 031–032를 봤다). panel-validator는 이 차이 때문에만 REGEN하지 말 것(1회 재시도 후 통과 권장) | art-director·panel-validator |
| PD-F10 | **050 은빛 점**은 결함이 아니다(TF-5). Flow가 못 그리거나 사람·지팡이 형태로 커지면 점을 빼고 다시 그린다 — 그때 L40 포기를 리더에게 알릴 것(twist-plan TF-5 대안 경로) | panel-validator·prompt-smith |
| PD-F11 | **052 앵커 A는 EP02 재사용 기준**(같은 앵글·빛·`art_space` 오른쪽 아래 1/4). EP02 샷리스트는 이 패널 서술을 그대로 복사해 사람·물건만 바꾼다 | 다음 회차 panel-director·continuity-manager |
| PD-F12 | gutter 참고: **xwide** = 010(→7년 전, 흰 여백)·024(→저녁)·026(→밤)·030(→원룸)·034(→아침)·040(→오후)·046(→밤)·054(→골목). **wide** = 018·047·049·050·051·058. **052→053 tight(0)**(beatsheet F11) | letterer `gap_after` |
| PD-F13 | 말풍선 2개 패널: 019·026·028·029·030·033·034·035·041·042·043·056·057 (+ 011 env+효과음, 039 효과음+말풍선). 가장 긴 말풍선 = 042 ②, 057 ① — 두 패널의 `art_space`를 넓게 잡았다 | letterer |
| PD-F15 | **012는 silent가 아니다**: style-bible §8 무대사 목록에 P12가 들어 있지만 대본 P12에 효과음 「헉」(`KM 효과음: ហឹក!`)이 있다. 샷리스트는 012에 `art_space`(왼쪽 위 1/3)를 두었다 | letterer: 012 = sfx 1, silent 아님. art-director: §8 목록에서 P12 제외 |
| PD-F16 | **036 "상하 분할"(style-bible FRAME-CUFF)은 한 장 안의 위·아래 배치**로 썼다(위 = 어깨 위 커프스, 아래 = 책상 밑 주먹). 두 칸으로 나뉜 분할 프레임·인셋이 나오면 REGEN | prompt-smith·panel-validator |
| PD-F14 | 새 장소·새 인물 0, 폴백 트리거 0, 그림 속 글자 의존 0, 영상 재생 폭로 0. 분할 프레임 0(036·045는 한 장면 깊이 배치) | — |
