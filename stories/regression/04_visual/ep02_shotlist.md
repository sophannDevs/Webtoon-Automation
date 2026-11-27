# EP02 샷리스트 — 「같은 가로등 아래」 «ក្រោមភ្លើងផ្លូវដដែល» · 「두 번째 변론」 story-9 `regression`

- 작성: panel-director · 2026-11-26 · Phase 4 (Flow-by-hand mode + Khmer edition) · 새 회차(Phase 0 case 2)
- 게이트: `python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py gate --episode 02` → **OK** (Khmer review READY round 1, sha256 f80e19fd9817…). 그 뒤에 `ep02_script_final.md`를 읽었다(수정하지 않음).
  `_workspace` = `stories\regression` junction 확인 후 작성.
- 입력: `03_episode/ep02_script_final.md` · `ep02_beatsheet.md`(F1–F16, Q1–Q11) · `00_input/brief.md` 판정 AJ–AL · BA–BG · `02_story/world.md` §6·§6-1·§7 ·
  `twist-plan.md` §3 EP02 · `tension-curve.md` §4-1 · EP01 정본 `04_visual/ep01_shotlist.md`(형식 + panel_052 앵커 A) · `style-bible.md`(§1–§11 + **EP02 additions** E2-1–E2-8) ·
  `character-sheets.md`(§0–§6 + **EP02 additions** E2-0–E2-5) · `refs/ref_prompts.md`.
- 스킬: `webtoon-panel-breakdown` 작업 A + `references/composition-grammar.md` · `webtoon-flow-handoff` · `webtoon-khmer-edition`.
- **패널 60** = panel_001 … panel_060 = 대본 P01 … P60 (1:1, 번호 그대로, **P61 없음**, 엔딩 카드 없음). 글자 패널 44(대사 41 + `env`/효과음 3) · 무대사 16 · `env` 1 (025) · 효과음 2 (025·055).
- art-director의 EP02 additions가 작성 도중 나왔고 **전부 그쪽에 맞췄다**: 빛 코드 = style-bible E2-1, 장소 변주 = E2-2, 소품 = E2-3, P46 = E2-4, P47 = E2-5,
  의상·외형 변주 = character-sheets E2-1·E2-2, attach = E2-4 표(아래 차이는 Flags에).
- **EP01 파일은 건드리지 않았다.** 하류: prompt-smith(`ep02_prompts.md`) · letterer(`ep02_lettering.md`의 `art_space`·`place`·`gap_after`).

---

## 0. 전역 규칙 (모든 패널 공통 — EP01 §0 그대로 + EP02 추가)

1. **이미지 안에 글자가 전혀 없다.** 말풍선·캡션·효과음 글자·간판·숫자·가짜 글씨·로고·워터마크 금지. 말풍선·크메르어·`env`·효과음은 뷰어(`km_tool.py build`)가 쓴다.
   폰 화면 = 빈 빛(발신자 0) · 수첩 = 빈 쪽 · 만년필 = 각인 없음 · CCTV 카메라 = 무지(불빛·LED 0) · 경차 번호판 = 무지 · 근무복·제복 = 휘장·명찰 0 ·
   분식집 메뉴판 = 빈 색판 · 서류철 = 뒷면만 · 테이크아웃 컵 = 무지. prompt-smith는 모든 프롬프트 끝에
   `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
2. **화면비:** Flow의 모든 이미지는 **9:16 세로**다. `height`(tall / normal / short)와 `gutter_after`는 **세로 스크롤 리듬 메모일 뿐**(letterer `gap_after`, compositor 간격 참고).
   short 패널은 9:16 안에서 피사체를 가로 띠처럼 모으고 나머지를 차분한 배경으로 둔다(그 빈 면이 대개 `art_space`).
3. **`art_space`** = 말풍선·`env`·효과음 자리. 그 영역은 **차분하고 비어 있는 배경**(밤하늘·벽·천장·김·담 그늘·바닥)으로 두고 얼굴·손·핵심 소품을 넣지 않는다.
   무대사 패널 = `art_space: 없음(silent)` — **예외: 046·047은 무대사여도 오른쪽 아래 1/4을 비운다**(앵커 A 구도의 일부, style-bible E2-4·E2-5).
4. **레지스터:** `present` = REG-PRESENT(046 외 전부) · `memory` = REG-MEMORY(**046 하나** = 앵커 A 원본). REG-WINTER·REG-RECORD 0.
   초자연 연출 금지(V7): 빛 번짐·이중 노출·잔상·운명 효과·렌즈 플레어 0. 경광은 **벽·얼굴의 붉은·푸른 반사로만**(경광등·경찰차 0).
5. **채도 규칙(style-bible §2-2):** 어떤 인물 옷·소품에도 초록 금지(느티나무 잎만 예외). 회귀 금빛은 **028 한 곳뿐**(L-OUT-GOLD). 접견 복도(005–008)·오후 사무 층(025–027)에 금빛 0.
6. **15+:** 체포는 수갑이 닫히는 손목·무릎 꿇은 등·얼굴의 당혹·땅의 물건뿐. 제압·넘어뜨림·상처·피·울음·비명 0. 경찰은 짙은 소매와 손만(얼굴·휘장 0).
7. **🔒 반전 보호 (twist-plan §3 EP02):**
   - **고문 0, 지팡이 0, 호두나무 문 0** — 사무 층 컷(011–014, 015–024, 025–027, 037–039, 057–058) 모두 복도 끝·고문 방 쪽은 프레임 밖. 「위에서」의 정체를 그림이 닫지 않는다.
   - **수아(029–036) = 평범한 딸.** 진우를 보는 시선·아는 눈빛·의미심장한 조명·리본핀 클로즈업 0(리본핀은 `small and out of focus`로 의상 연속성만).
   - **W12:** 034 덕배의 「건물 손님이…」에 진우 얼굴·반응 0, 조명 변화 0. **L11:** 진우 자리 컷(011·025·027·037·039)에 책상 전화기 0.
   - **L05:** 진우 만년필 펜촉 클로즈업 0(펜은 BENT 상태지만 `the nib hidden behind his fingers`). **규칙 설명 0**(027·054는 사실만).
   - 재독 비트는 서늘하게 그리지 않는다: 004 경비실 창, 034, 037 들뜬 태호, 040–041 봉구의 커피·양말.
8. **앵커 A 각도(비탈 아래에서 약간 로우 앵글로 굽이를 올려다봄)는 046·047 두 장에만.** 002·009·045·048–056·059·060은 다른 각도. **047에 진우 0.**
9. **장소 연속성:** 같은 scene_id = 같은 LOC·같은 시간대·같은 빛. 장소·레지스터·시간이 바뀌는 곳에만 `--- SCENE BREAK ---`. 기억 삽입 컷은 자기 scene_id(…m).
10. **분할 프레임·인셋 금지.** Flow 한 장 = 한 패널. 전경-배경 심도(019·024·056)는 한 장면 안 깊이로.

### 0-1. 빛 코드 (light code) = style-bible §3 + **EP02 additions E2-1** — 영문 조명 문장은 style-bible에서 복사

| code | 패널 | 요지 |
|---|---|---|
| `L-ALLEY-BOTTOM-NIGHT` | 001 | 비탈 아래 시장 모퉁이, 등 뒤 분식집 김 서린 유리문의 노란빛, 위에 짙은 초록 느티, 비탈 위 흰 가로등 기운. 유리문 안 사람 실루엣 0 |
| `L-ALLEY-SUMMER-NIGHT` | 002–004 | EP01 그대로: 빈 굽이의 흰 가로등 원. 004 `+ far up the slope, the small warm yellow window of the security booth` |
| `L-VISIT-DAY` | 005–008 | 늦은 오전, 녹백 형광이 고르게, 복도 끝 높은 철창 창은 흰 낮빛만. **금빛·사선·먼지 0** |
| `L-ALLEY-DAY` | 009–010 | 한여름 정오, 거의 머리 위 하얀 햇빛, 짧은 그림자, 바랜 아스팔트, 흐린 흰 하늘, 가로등 꺼짐, 반사경엔 빈 골목만 |
| `L-FLOOR-AFTERNOON` | 011–024 | 오후, 북쪽 창의 흰 낮빛 + 형광, 창밖 초록 느티. 유리방 안(015–024) `+ blinds stripes` 부드러운 가로 줄무늬 |
| `L-FLOOR-LATE` | 025–027 | 늦은 오후, 창빛이 낮고 조금 따뜻, 책상 위 긴 그림자, 창밖 느티. **금빛으로 읽히면 안 됨** |
| `L-OUT-GOLD` | 028 | EP01 그대로 + `two long shadows on the concrete` (EP02 유일 금빛) |
| `L-BUNSIK-EVENING` | 029–036 | 김 서린 노랑, 철판 붉은 반사, **유리문 밖은 아직 짙푸른 여름 저녁**(검은 밤 아님), 느티 실루엣 |
| `L-FLOOR-MORNING` | 037–039 | EP01 그대로 |
| `L-BOOTH-NIGHT` | 040–042 | EP01 그대로: 경비실 창의 따뜻한 노란 불, 작은 선풍기, 비탈 아래 흰 가로등. 따뜻하고 평범하게 |
| `L-BOOTH-OFF` | 043 | 경비실 불 꺼짐, 안은 어둑, 비탈 아래 가로등의 희미한 흰빛 + 푸르스름한 거리빛, 혼자 도는 선풍기, 노란빛 0 |
| `L-ALLEY-TOP-NIGHT` | 044–045 | 비탈 맨 위에서, 뒤로 타워의 회색 뒷벽, 아래로 떨어지는 어두운 골목, 저 아래 굽이의 흰 가로등 원과 담에 번갈아 비치는 붉고 푸른 빛, 경찰차·사람 0. 045 `+ 붉고 푸른 반사가 앞 담에 더 강하게, 머리 위 전깃줄` |
| `L-MEM-ANCHOR` | 046 | EP01 panel_052 Light 문장 그대로(REG-MEMORY + 왼쪽 위 흰 가로등 + 벽의 붉은·푸른 경광 반사, 경찰차 0) |
| `L-ANCHOR-PRESENT` | 047–056, 059–060 | L-MEM-ANCHOR와 **같은 광원 배치**, 현재 레지스터(정상 색·선명, 탈색·가장자리 흐림 0). 얼굴 컷(049·051·052·054·060) `+ red and blue light alternating across his face` |
| `L-FLOOR-NIGHT` | 057–058 | EP01 그대로: 대부분 꺼진 사무 층, 불 켜진 유리방 하나, 어두운 유리에 비친 층 |

- 같은 scene_id 안 빛 변주는 위 표에 적힌 것만(004 경비실 창 추가, 045 강해진 반사, 얼굴 컷의 경광).

### 0-2. 리듬 범례 (Flow 비율과 무관 — EP01과 같음)

| height | 쓰임 | | gutter_after | 여백(px, letterer `gap_after` 참고) | 쓰임 |
|---|---|---|---|---|---|
| `tall` | 설정샷·정점·반전·매치 컷 | | `tight` | 0–20 (046→047은 **0**) | 연속 동작, 빠른 대화, 반전→클리프 연속 |
| `normal` | 기본 대화·클로즈업 | | `normal` | 40–60 | 기본 |
| `short` | 인서트·손·빠른 합 | | `wide` | 140–180 | 정적, 반전 앞뒤, 정지 |
| | | | `xwide` | 280–360 (빈/검은 여백) | 시간 점프, 씬 대전환 |

size 어휘(composition-grammar §1): `insert` / `small` / `medium` / `large` / `full-bleed`.

### 0-3. 레퍼런스 카드 (EP01 14장 그대로 — 새 카드 0, character-sheets E2-0)

| 카드 (`refs/…png`) | EP02 쓰임 |
|---|---|
| `JINU28_turnaround` · `JINU28_expressions` | 진우28 모든 의상(OUT_NIGHT·SUIT·SUIT_NOON·SUIT_EVENING·NIGHT) |
| `TAEHO37_turnaround` · `TAEHO37_expressions` | 태호37 `TAEHO37_OFFICE` (늦게 굳는 미소 1/2·2/2, 웃지 않는 작고 차가운 눈 = 057–058 기준). **`TAEHO44_heads` 첨부 금지** |
| `DEOKBAE_sheet` | 덕배 수의(005–008) · 석방 차림(028–035) · 배달 차림(046) |
| `SUA_sheet` | 수아 `SUA_WORK` (029–032) |
| `SANGDU_sheet` | 기 대표 `SANGDU_SUIT` (015·019·023) |
| `BONGGU_sheet` | 봉구 (040–042, 047–049). 카드의 봉구는 모자를 썼다 → 047–049는 `bare-headed` + `the cap is on the ground, not on his head` 필수 |
| `PROPS_keyprops` (판정 AH 승인) | 진짜 카드(003·053) · 만년필 몸통(007·039, 펜촉 가림) · 슬리브 컵(043) |
| **구도 기준 이미지(카드 아님)** | `05_panels/ep01/panel_052.png`(= `052img`) → 046·047 / `05_panels/ep02/panel_046.png`(= `046img`) → 047 대체 가능. **EP01 052가 생긴 뒤에만** 첨부 |

- 첨부 원칙(character-sheets §4·E2-4): 얼굴 패널 = 그 인물 카드, 최대 2명분. 손만 = 카드 하나 또는 생략. 아주 작은 원경 = 첨부 없음.
  Flow 첨부 장수 한도에 걸리면 046·047은 **구도 기준 이미지를 카드보다 먼저** 남긴다.
- HANMOK·MINJAE·JINU35·TAEHO44·JUNSEO 카드는 EP02 미사용.

---

## 1. 장소 목록 (scene_id ↔ LOC ↔ 배경)

| scene_id | 패널 | location (+ 변주, style-bible E2-2) | light | 레지스터 | 한 줄 배경 |
|---|---|---|---|---|---|
| S1 | 001–004 | LOC_BACK_ALLEY · BOTTOM-DOOR(001) → BEND-SIDE(002–003) → LOOK-UP-BOOTH(004) — 7/29 ~23:40, EP01 P60 직후 | L-ALLEY-BOTTOM-NIGHT(001) → L-ALLEY-SUMMER-NIGHT(002–004) | present | 시장 모퉁이 분식집 김 서린 유리문·느티 → 굽이의 전봇대·흰 가로등·주황 테 반사경·벽의 금 → 비탈 맨 위 타워 뒷면과 경비실 노란 창 |
| S2 | 005–008 | LOC_DETENTION_VISIT (EP01과 같은 부스) — 7/30 오전 | L-VISIT-DAY | present | 접견 부스, 두꺼운 유리 칸막이, 쇠 선반, 수화기형 인터폰, 아래 짙은 녹색·위 크림 벽, 복도 끝 높은 철창 창(흰 낮빛) |
| S3 | 009–010 | LOC_BACK_ALLEY · BEND-NOON(009) → RAMP-NOON(010) — 7/30 정오 | L-ALLEY-DAY | present | 한낮 굽이(꺼진 가로등·반사경·벽 금) → 비탈 위 주차장 경사로·회색 셔터·차단봉·셔터 위 무지 CCTV·회색 경차·닫힌 경비실 창 |
| S4 | 011–014 | LOC_FIRM_FLOOR (어소시에이트 책상 줄, 진우 자리) — 7/30 오후 | L-FLOOR-AFTERNOON | present | 회색 칸막이 책상 줄, 창 밖 초록 느티, 창가 파트너 유리방(014 배경: 소파의 굵은 목 남자 실루엣) |
| S5 | 015–024 | LOC_FIRM_FLOOR · 파트너 유리방 안 (`inside the partner's glass office, blinds half lowered`, EP01 P37–38 변주) | L-FLOOR-AFTERNOON + 블라인드 줄무늬 | present | 반쯤 내린 블라인드, 낮은 검은 가죽 소파, 정돈된 책상(무지 서류철 뒷면), 유리벽 너머 사무 층 |
| S6 | 025–027 | LOC_FIRM_FLOOR (진우 자리) — 8/1 늦은 오후 | L-FLOOR-LATE | present | S4와 같은 자리, 낮고 조금 따뜻한 창빛, 긴 그림자 |
| S7 | 028 | LOC_DETENTION_VISIT · EXT_GATE — 8/1 저녁 | L-OUT-GOLD | present | 회색 콘크리트 벽 + 무거운 회색 철문 가장자리, 금빛 저녁, 긴 그림자 둘 |
| S8 | 029–036 | LOC_BUNSIK (입구 쪽 작은 테이블 하나로 고정) — 8/1 저녁 | L-BUNSIK-EVENING | present | 떡볶이 철판의 김, 스테인리스 카운터, 플라스틱 의자, 빈 색판 메뉴, 김 서린 유리문 밖 푸른 저녁과 느티 실루엣 |
| S9 | 037–039 | LOC_FIRM_FLOOR (진우 자리 옆 통로) — 8/2 아침 | L-FLOOR-MORNING | present | S4와 같은 책상 줄, 아침 회청 형광 + 흰 창빛 |
| S10 | 040–042 | LOC_BACK_ALLEY · BOOTH (EP01 P28 변주 그대로) — 8/2 밤 | L-BOOTH-NIGHT | present | 경비실 창: 전기 포트, 무지 믹스커피 상자, 종이컵 더미, 작은 선풍기, 낡은 라디오, 창턱 슬리브 더미, 뒤로 셔터(+CCTV)·차단봉·회색 경차 |
| S11a | 043 | LOC_BACK_ALLEY · BOOTH-EMPTY — 8/3 밤 | L-BOOTH-OFF | present | 같은 경비실, 빈 의자, 김 없는 슬리브 컵 하나, 혼자 도는 선풍기, 꺼진 라디오, 빈 모자 못 |
| S11b | 044–045 | LOC_BACK_ALLEY · TOP-LOOK-DOWN(044) → MID-SLOPE-RUN(045) — 같은 밤 | L-ALLEY-TOP-NIGHT | present | 비탈 맨 위에서 내려다본 골목, 전깃줄, 저 아래 굽이의 흰 원과 담의 붉고 푸른 빛 → 비탈 중간 |
| S12m | 046 | LOC_BACK_ALLEY 굽이 — **앵커 A 원본(EP01 panel_052 그대로)** — 첫 삶 Y0 7월 초 밤 | L-MEM-ANCHOR | **memory** | world §6-1 앵커 A 고정 구도 |
| S12 | 047–056, 059–060 | LOC_BACK_ALLEY 굽이 — ANCHOR-A(047) · 클로즈업(048–049) · MIRROR-CLOSE(050) · BEND-CORNER(051–056, 060) · BEND-HIGH-DOWN(059) — 8/3 밤 | L-ANCHOR-PRESENT | present | 같은 굽이: 왼쪽 위 흰 가로등, 주황 테 반사경, 벽의 경광 반사, 굽이 바로 위쪽의 낮은 담 모퉁이 |
| S13 | 057–058 | LOC_FIRM_FLOOR · 유리방 밤 — 같은 밤 | L-FLOOR-NIGHT | present | 불 켜진 유리방 하나, 어두운 창, 유리에 비친 빈 사무 층. 호두나무 문·복도 끝 프레임 밖 |

### 1-1. 고정 동선·배치 (180° 규칙)

- **S2 접견 복도 (EP01 S2–S3 그대로):** 카메라는 늘 **방문자 쪽**. 진우 = 화면 **왼쪽**, 덕배 = 유리 너머 화면 **오른쪽**. 높은 창은 오른쪽 위(이번엔 흰 낮빛, 사선 없음).
  007 시그니처 반사 = 유리에 비친 덕배 얼굴이 진우의 쓰는 손 위에 반쯤 겹침(EP01 018·021의 낮 판).
- **S4·S6·S9 진우 자리 (EP01 S8 그대로):** 진우 자리 = 창에서 두 번째 줄 끝, **창은 진우 뒤쪽**. 파트너 유리방 = 창가, 진우 기준 **화면 왼쪽 뒤**. 태호는 **화면 오른쪽**에서 들어온다/선다
  (012의 손 = 화면 오른쪽에서 — EP01 036과 같은 방향). 복도 끝 호두나무 문 쪽(화면 오른쪽 깊은 곳)은 늘 프레임 밖.
- **S5 파트너 유리방 안 (새 배치, 이 회차 고정):** 문 = 화면 **왼쪽**, 진우는 문 앞에 서서 **오른쪽을 본다**. 책상 = 화면 **오른쪽**, 태호는 책상 모서리에 걸터앉아 **왼쪽을 본다**.
  낮은 소파 = 가운데 안쪽(블라인드 창 앞), 기 대표는 다리를 꼬고 앉아 진우와 태호 사이 아래쪽. 019 전경 기 대표 = 화면 **오른쪽 아래**, 배경 진우 = 화면 **왼쪽**.
  블라인드 줄무늬 빛은 창(위쪽 뒤)에서 앞으로. 024에서 진우는 왼쪽 문으로 나간다.
- **S8 분식집:** 덕배의 테이블 = 입구 쪽 작은 테이블(유리문 옆). **덕배 = 화면 오른쪽**(안쪽 의자, 왼쪽을 향해 앉음), **진우 = 화면 왼쪽**(입구 쪽, 031에서 문간에 서 있다가 032에 맞은편에 앉음).
  수아는 카운터·철판(화면 오른쪽 뒤)에서 온다. 이모는 철판 앞 등만. 유리문(푸른 저녁·느티) = 화면 왼쪽 뒤. EP01 S11b(진우 왼쪽 손님 쪽 / 수아 오른쪽 안쪽)와 같은 방향.
- **S10 경비실 (EP01 028 그대로):** 경비실 창 = 화면 가운데~오른쪽, 진우 = 화면 왼쪽(3/4), 셔터·차단봉·경차 = 뒤쪽 아래.
- **S12 굽이:** 앵커 A(047)의 카메라 = 비탈 아래에서 위로. **진우의 자리 = 굽이 바로 위쪽(비탈 위 방향) 낮은 담 모퉁이** — 047 프레임 밖, 050 반사경 위쪽 가장자리에 아주 작게.
  051–055·060: 진우는 담 모퉁이에 반쯤 숨어 **화면 왼쪽 아래(굽이 쪽)를 내려다본다**, 경광은 그 방향(왼쪽 아래)에서 얼굴에. 056: 통화를 받으며 굽이에 **등을 돌려** 비탈 위쪽(카메라)을 향함 →
  굽이와 봉구는 그의 등 뒤 아래 흐림 속.
- **S13 유리방 밤:** 태호 = 어두운 창가에 서서 화면 **왼쪽**을 향해 폰을 귀에(폰은 화면 왼쪽 귀). 유리방 문·복도 끝은 화면 밖.

### 1-2. 매치 컷 (같은 앵글·같은 크기 — prompt-smith는 같은 구도 문장을 그대로 반복, panel-validator는 나란히 비교)

| 묶음 | 고정 조건 |
|---|---|
| **EP01 052 ↔ 046 ↔ 047** (V1·V3·V4·V8 · L29 · 판정 AJ/BB) | 046 = EP01 052의 camera·composition·art_space **글자 그대로**(style-bible E2-4). 047 = style-bible E2-5 FRAME-ANCHOR-A-PRESENT 문장: 같은 카메라·같은 프레이밍·같은 광원·같은 오른쪽 아래 1/4 빈 면. 바뀌는 것: 레지스터(현재), 사람(덕배 → 봉구, 모자 없음, 목에 흰 수건), 헬멧 자리 → **뒤집힌 남색 챙 모자**, 스쿠터 자리(왼쪽 가장자리) → **옆으로 누운 켜진 검은 손전등, 가는 빛줄기는 비탈 위쪽(화면 안쪽)으로**. 진우 0. 046→047 **같은 폭, gap 0** |
| **003 ↔ 053** (L27 · V6) | 손 클로즈업, 주머니 가장자리로 카드의 깨진 **오른쪽 위** 모서리만, 엄지가 누름. 같은 손 각도(엄지가 화면 오른쪽 위를 향함)·같은 크기(손이 프레임 폭의 약 절반). 003 = 남색 재킷 주머니, 조용히 누름 / 053 = 남색 정장 바지 주머니, **세게** 눌러 엄지 손톱이 하얘짐 + 붉고 푸른 빛 |
| **025 ↔ 055** (진동 운율) | 진동하는 검은 폰, 같은 크기(폰 = 프레임 폭의 약 1/3)·같은 기울기(화면 빈 빛이 위를 향해 약간 기움). 025 = 책상 위, 늦은 오후 창빛 / 055 = 진우 손 안, 폰 유리에 붉고 푸른 반사 |
| **052 ↔ 060** (V6 ↔ 클리프) | 진우 눈 극단 클로즈업, 같은 크기(눈 하나 + 눈썹 일부, 프레임 가운데). 052 = 배경 어둠, 눈동자에 경광 / 060 = 같은 + 프레임 왼쪽 가장자리에 귀에 댄 폰의 가장자리 |
| **022 ↔ 024** (늦게 굳는 미소 1/2·2/2 — TAEHO37_expressions) | 022 = 입은 웃는데 눈이 멈춘 클로즈업 / 024 = 전경 태호가 다시 웃는데 눈이 한 박자 늦음 + 배경 진우의 등. 같은 태호 얼굴 각도(3/4, 화면 왼쪽을 향함) |
| **040 ↔ 043** (L02 — 김 오르는 컵 ↔ 식은 컵) | 같은 경비실 창, 같은 창턱 높이, 슬리브 컵이 **창턱 같은 자리(창 오른쪽 아래 모서리)**. 040 = 따뜻한 노란 불·봉구 / 043 = 불 꺼짐·빈 의자, 김 0 |
| **002 / 009 / 059** | 같은 굽이(전봇대·가로등·반사경·벽 금이 같은 자리)지만 **앵커 A 각도 아님**: 002·009 = 옆에서 약간 위, 059 = 높은 부감 클로즈업 |
| **012 → EP01 036 운율** | 태호의 크고 두툼한 손이 진우 어깨를 **무겁게 움켜쥠**(손 전체가 보임), 화면 오른쪽에서. 단 **FRAME-HAND-ON-BACK·FRAME-CUFF 구도 문장은 쓰지 않는다**(카메라 = 뒤 위에서 미디엄, 커프스는 작게·강조 0) |
| **028 → EP01 025 운율** | 같은 회색 철문·콘크리트 벽·금빛. EP01은 진우 혼자, 이번엔 두 사람 |

---

## 2. 소품 상태 추적

| 소품 | 상태 변화 |
|---|---|
| PROP_CARD_REAL (깨진 오른쪽 위 모서리 + 흰 긁힘) | 003 남색 재킷(OUT_NIGHT) 주머니, 엄지 → (004–052 보이지 않음) → 053 남색 정장 바지 주머니, 엄지가 세게 누름. 긁힘이 안 보여도 ACCEPT(주머니 속) |
| PROP_PEN (BENT 상태, **펜촉 가림**) | 005 꺼냄 → 007 빈 쪽 위에서 움직임(펜촉은 손가락 뒤) → 039 빈 수첩 위에서 멈춤(펜촉 클로즈업 0, L05) |
| PROP_NOTEPAD (빈 쪽) | 005 선반에 폄 → 007 종이 면 = 빛에 날아간 빈 면 → 011 그 위에서 손가락 셋 → 013 덮음 → 025 폰 옆 → 039 펜이 멈춤 |
| PROP_PHONE (검은 무지 폰, 화면 빈 빛) | 025 책상 위 진동 → 026 귀에 → 027 내려놓음 → 055 진우 손(카드 반대쪽 손) 진동, 붉고 푸른 반사 → 056 귀에 → 060 귀에 댄 가장자리. 057 태호 폰(같은 무지) |
| PROP_PLASTIC_BAG (무지 반투명 흰 비닐) | 001 진우 손, 은박 김밥 → 028 덕배 손, 접은 남색 조끼 비침 → 029–035 덕배 의자 옆 바닥(작게) |
| PROP_CCTV (셔터 위 무지 카메라) | 004 윤곽(아주 작게) → 010 진우 시선의 끝(위쪽 1/3) → 040 셔터가 보이면 같은 자리 |
| VEH_COMPACT (낡은 회색 경차, 무지 번호판) | 010 경사로 옆 → 040 배경(강조 0). EP01 028과 같은 차·같은 자리 |
| 서류철(무지, 뒷면만) | 015–024 유리방 책상 위, 닫힘 |
| 기 대표 은시계(문자판 숫자 없음) | 015 → 019 손가락이 시계 줄 위에서 멈춤 → 023 |
| PROP_CUFFLINK (태호) | 012 소매 끝(작게) · 017 · 023 · 057 — **전부 강조 0** |
| 테이크아웃 컵 (무지 흰 컵 + 흰 뚜껑, **슬리브 없음**) | 037 태호 손 — 봉구의 슬리브 컵과 혼동 금지 |
| 떡볶이 접시·나무젓가락 | 029 덕배 앞 → 030 젓가락 떨림 → 032 진우 앞 두 번째 접시 → 033 젓가락 내려놓음 → 035 다시 듦 → 036 진우 한 입 |
| PROP_CUP_SLEEVE (손으로 자른 갈색 골판지 슬리브) | 040 봉구가 내밂, 김 오름(창턱에 슬리브 더미) → 042 진우 손에 → 043 창턱 오른쪽 아래 모서리에 **김 없는** 슬리브 컵 하나(식음) |
| PROP_BABY_SOCKS (흰 무지 한 켤레, 손가락보다 작게) | 041 봉구가 가슴 주머니에서 꺼냄 |
| PROP_GUARD_CAP (남색 챙 모자, 휘장 0) | 004 창 안 실루엣의 모자 → 040–042 봉구 머리 위 → 043 빈 모자 못(모자 없음) → **047 땅 위, 뒤집힘, 챙이 카메라 쪽, 헬멧 자리** → 049 봉구 맨머리 → 059 땅 위 같은 모자 |
| 흰 수건 (봉구 목) | 040–042 목 → 047 아직 목에 → **048부터 땅 위(PROP_TOWEL_GROUND)** → 059 땅 위 |
| PROP_FLASHLIGHT (무지 검은 손전등) | 047 **스쿠터 자리(왼쪽 가장자리)에 옆으로 누움, 켜짐, 가는 빛줄기는 비탈 위쪽으로** → 059 같은 빛줄기 |
| PROP_HANDCUFFS (무지 은색) | 046 덕배 손목(EP01 052 그대로) → 047 봉구 손목, 닫히는 순간 → 048 손목 클로즈업 |
| PROP_HELMET · VEH_SCOOTER | 046에만(EP01 052 그대로). 047 이후 0 |

---

## 3. 의상 (씬별, character-sheets EP02 additions E2-1)

| scene | 진우 | 그 외 |
|---|---|---|
| S1 | `JINU28_OUT_NIGHT` (회색 반팔 티 위 남색 정장 재킷 열림 + 검은 트레이닝 바지 + 검은 운동화) + 001 비닐봉지, 003 카드는 재킷 주머니 | 004 봉구 `BONGGU_NIGHT_DUTY` 창 안 실루엣(아주 작게, 얼굴 0) |
| S2 | `JINU28_SUIT` | 덕배 `DEOKBAE_INMATE` · (교도관 0) |
| S3 | **`JINU28_SUIT_NOON`** (재킷을 왼팔에 걸침, 흰 셔츠·차콜 넥타이·남색 바지) | — (사람·차 0, 경차는 주차된 채) |
| S4–S6 | `JINU28_SUIT` | 태호 `TAEHO37_OFFICE` · 기 대표 `SANGDU_SUIT` (014 실루엣, 015–024) |
| S7 | `JINU28_SUIT` + 서류 가방(넥타이 단정) | 덕배 **`DEOKBAE_RELEASED`** (회색 반팔 티, 짙은 작업 바지, 낡은 회색 캔버스 운동화, 헬멧·조끼 착용 0) + 비닐봉지 |
| S8 | **`JINU28_SUIT_EVENING`** (넥타이 느슨, 깃 단추 풂; 031 가방 손에, 032 이후 의자 옆) | 덕배 `DEOKBAE_RELEASED` · 수아 `SUA_WORK`(리본핀 `small and out of focus`) · 이모 `IMO`(등·옆) |
| S9 | `JINU28_SUIT` | 태호 `TAEHO37_OFFICE` + 무지 테이크아웃 컵 |
| S10 | `JINU28_NIGHT` (흰 셔츠 소매 팔꿈치까지, 넥타이 없음, 남색 바지) | 봉구 `BONGGU_NIGHT_DUTY` (= EP01 BONGGU_SUMMER, 모자·흰 수건 포함) + 041 아기 양말 |
| S11a–S11b | `JINU28_NIGHT` | — |
| S12m | — | 덕배 `DEOKBAE_DELIVERY`(EP01 052 문자열 그대로) · 경찰(소매·손만) |
| S12 | `JINU28_NIGHT` (카드 = 바지 주머니, 폰 = 반대 손) · 050 반사경 속 흰 셔츠 실루엣 | 봉구 **`BONGGU_ARRESTED`** (같은 근무복, **모자 없음**, 047 수건 목 / 048부터 수건 없음) · 경찰(소매·손만) |
| S13 | — | 태호 `TAEHO37_OFFICE` (밤에도 같은 정장, 웃음 0) |

---

## 4. 패널

### panel_001
- scene_id: S1 / location: LOC_BACK_ALLEY · BOTTOM-DOOR (시장길 모퉁이, 분식집 문 밖) / light: L-ALLEY-BOTTOM-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 콜드 오픈 — EP01 P60의 잔향, 문밖의 첫 숨 (긴장 8) · L35
- size: large · height: tall · gutter_after: normal
- camera: eye-level, medium 뒷모습
- composition: 화면 가운데~왼쪽에 진우의 등과 어깨(남색 재킷), 오른손에 무지 반투명 비닐봉지(은박 김밥이 비침). 그의 등 뒤 화면 오른쪽에서 **김 서린 분식집 유리문이 막 닫힌다** — 유리 안은 **노란 흐림뿐, 사람 실루엣 0**. 바로 옆 위쪽에 짙은 초록 느티나무 잎. 앞쪽 왼편으로 비탈 골목이 위로 올라간다(멀리 흰 가로등 기운). 위쪽 1/4은 느티 잎 사이 어두운 밤.
- characters: 진우28 `JINU28_OUT_NIGHT` (뒷모습)
- props: PROP_PLASTIC_BAG(김밥)
- emotion/acting: 숨을 한 번 내쉬는 어깨, 정지.
- motion: 유리문(오른쪽) → 진우 등 → 왼쪽 위 비탈.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_turnaround`
- note: **수아 컷 금지(🔒)** — 유리문 안에 사람 형체·손·얼굴 0. 간판·메뉴판 0.

### panel_002
- scene_id: S1 / location: LOC_BACK_ALLEY · BEND-SIDE (굽이, 옆에서 약간 위) / light: L-ALLEY-SUMMER-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 빈 가로등 아래 멈춘 사람 — 두 질문 (긴장 7) · L08·L09 잇기
- size: large · height: tall · gutter_after: tight
- camera: 옆에서 약간 위, wide (앵커 A 각도 아님)
- composition: 프레임 가운데 아래쪽 1/3에 비탈을 오르다 **굽이의 빈 흰 가로등 원 안에서 멈춘** 진우(전신, 작게, 옆모습). 화면 왼쪽에 회색 전봇대와 굽은 팔 흰 가로등(찌그러진 갓), 그 아래 주황 테 볼록 반사경, 벽 아래 금. 비탈 위 멀리 타워의 차가운 회색 뒷벽. **위쪽 40% = 어두운 밤하늘과 전깃줄 사이 빈 면.**
- characters: 진우28 `JINU28_OUT_NIGHT`
- props: PROP_PLASTIC_BAG
- emotion/acting: 같은 자리에 선 사람, 고요.
- motion: 가로등 원 → 진우 → 위쪽 빈 하늘.
- dialogue_ref: ① 진우 (속말): "그 반지는… 누구 손이지." / KM: ជីនូ (គិត)៖ "ចិញ្ចៀននោះ… ដៃអ្នកណា។" ② 진우 (속말): "그 핀은… 어디서 왔지." / KM: ជីនូ (គិត)៖ "ខ្ទាស់នោះ… មកពីណា។"
- art_space: **위쪽 40% = 밤하늘·전깃줄 사이 빈 면**(속말 둘, 위 → 아래)
- attach: `JINU28_turnaround`
- note: **비탈 아래에서 올려다보는 로우 앵글 금지**(앵커 A는 046–047 전용). 반사경 안은 빈 골목.

### panel_003
- scene_id: S1 / location: LOC_BACK_ALLEY · BEND-SIDE / light: L-ALLEY-SUMMER-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 엄지가 카드 모서리를 누른다 — 버릇(V6) (긴장 7) · L27
- size: small · height: short · gutter_after: tight
- camera: eye-level, extreme close-up 손
- composition: **053과 매치(§1-2).** 남색 재킷 주머니 입구, 주머니 가장자리로 **깨진 오른쪽 위 모서리의 작은 남색 메모리카드 끝**이 살짝, 그 모서리를 누르는 길고 마른 엄지(엄지가 화면 오른쪽 위를 향함, 손 = 프레임 폭의 약 절반). 흰 가로등빛이 손등에. 위·아래는 재킷의 어두운 천.
- characters: 진우28 손 (`long slender fingers, smooth unmarked skin`)
- props: PROP_CARD_REAL (모서리만)
- emotion/acting: 조용한 버릇, 손가락의 긴장.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`
- note: 긁힘이 안 보여도 ACCEPT(주머니 속). 시계·반지 0.

### panel_004
- scene_id: S1 / location: LOC_BACK_ALLEY · LOOK-UP-BOOTH (굽이 → 비탈 위를 올려다봄) / light: L-ALLEY-SUMMER-NIGHT + 경비실 노란 창
- panel_style: present (REG-PRESENT)
- beat: 「먼저… 임덕배부터 꺼낸다. 카드 없이.」 — 이번 회의 과제 (긴장 6)
- size: large · height: tall · gutter_after: **xwide (→ 다음 날 오전 접견)**
- camera: 진우 어깨 너머 low-angle, 비탈 위를 향해
- composition: 앞쪽 왼편 가장자리에 고개를 든 진우의 옆얼굴과 어깨(프레임 높이 아래 1/3). 비탈이 위로 올라가 **맨 위에 타워의 차가운 회색 뒷벽, 그 아래 작은 박스형 경비실의 따뜻한 노란 창** — 창 안에 모자 쓴 둥근 실루엣과 돌아가는 작은 선풍기(얼굴 식별 불가 크기). 옆에 주차장 셔터·차단봉 윤곽(셔터 위 작은 카메라 윤곽은 있어도 없어도 됨). **위쪽 오른편 1/3 = 타워 옆 어두운 밤하늘.**
- characters: 진우28 `JINU28_OUT_NIGHT`(옆얼굴) · 봉구 `BONGGU_NIGHT_DUTY`(창 안 실루엣, 아주 작게)
- props: 경비실 창(노란 불)
- emotion/acting: 결심, 낮게 굳은 입.
- motion: 진우 시선 → 비탈 위 경비실 창.
- dialogue_ref: 진우 (속말): "먼저… 임덕배부터 꺼낸다. 카드 없이." / KM: ជីនូ (គិត)៖ "មុនដំបូង… ត្រូវយកលោក អ៊ីម ដុកបែ ចេញមកសិន។ ដោយគ្មានកាត។"
- art_space: **위쪽 오른편 1/3 = 타워 옆 어두운 밤하늘**
- attach: `JINU28_expressions`
- note: **경비실은 따뜻하고 평범하게**(불길한 조명 금지 — 재독 비트). 봉구 카드 첨부 금지(너무 작음).

--- SCENE BREAK --- (S1 → S2 · 7/30 오전 접견 복도 · 밤 → 흰 낮빛, 금빛 없음)

### panel_005
- scene_id: S2 / location: LOC_DETENTION_VISIT (EP01과 같은 부스) / light: L-VISIT-DAY
- panel_style: present (REG-PRESENT)
- beat: 「그날 밤 일, 처음부터 다시」 — 일의 시작 (긴장 5) · L30
- size: large · height: tall · gutter_after: normal
- camera: eye-level, medium two-shot, 유리를 가로질러(방문자 쪽)
- composition: 화면 왼쪽 진우(3/4, 수화기를 귀에), 쇠 선반 위에 빈 수첩을 펴고 다른 손으로 검은 만년필을 꺼내는 중(펜촉은 손가락 뒤). 두꺼운 유리 칸막이 너머 화면 오른쪽에 수의의 덕배(수화기를 쥠). 아래 짙은 녹색·위 바랜 크림 벽, 천장 형광등. 복도 끝 높은 철창 창은 **흰 낮빛뿐(금빛 사선 0)**. **위쪽 25% = 크림색 벽 빈 면.**
- characters: 진우28 `JINU28_SUIT` · 덕배 `DEOKBAE_INMATE`
- props: PROP_NOTEPAD(빈 쪽) · PROP_PEN(펜촉 가림) · 인터폰 수화기
- emotion/acting: 진우 = 정중하고 차분 / 덕배 = 고개 숙여 눈만 든 얼굴.
- motion: 진우 → 유리 → 덕배.
- dialogue_ref: 진우: "그날 밤 일, 처음부터 다시 말씀해 주세요." / KM: ជីនូ៖ "រឿងយប់នោះ សូមលោកនិយាយម្តងទៀត ពីដើមមក បាទ។"
- art_space: **위쪽 25% = 크림색 벽**(왼쪽 진우 위)
- attach: `JINU28_turnaround`, `DEOKBAE_sheet`
- note: EP01 S2와 같은 장소·다른 시간 — 금빛·먼지 0. 수의 패치 무지, 교도관 0.

### panel_006
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-DAY
- panel_style: present (REG-PRESENT)
- beat: 「먼저 간 차가 있었어요…」 — 보석 근거 ③ (긴장 6)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up, 유리 너머
- composition: 유리 너머 덕배 얼굴(3/4, 화면 오른쪽 가운데), 기억을 더듬어 위로 비켜 가는 눈, 왼쪽 눈썹 끝 흰 흉터. 화면 아래쪽: 수화기를 쥔 거칠고 마디 굵은 손(오른손 손등 화상 자국), 다른 손은 **비탈을 그리듯 손끝이 아래로 꺾이는** 몸짓. 유리 표면에 형광등 반사 줄. **위쪽 왼편 1/3 = 유리 너머 크림 벽.**
- characters: 덕배 `DEOKBAE_INMATE`
- props: 인터폰 수화기
- emotion/acting: 더듬는 기억, 말끝을 흐림.
- motion: 눈 → 아래로 꺾이는 손.
- dialogue_ref: 덕배: "먼저 간 차가 있었어요. 빨간 뒷불이… 아래로 꺾였어요." / KM: ដុកបែ៖ "មានឡានមួយ ចេញទៅមុន។ ភ្លើងក្រហមខាងក្រោយ… បត់ចុះទៅក្រោម។"
- art_space: **위쪽 왼편 1/3 = 크림 벽**
- attach: `DEOKBAE_sheet`
- note: 손 몸짓이 위협·가리킴으로 읽히지 않게(부드럽게 아래로 미끄러짐).

### panel_007
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-DAY
- panel_style: present (REG-PRESENT)
- beat: 「그 말, 그대로 씁니다. 이번엔.」 — 첫 삶을 뒤집는 손 (긴장 5)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up 손 + 얼굴 아래쪽
- composition: 화면 아래 가운데: 쇠 선반 위 수첩, **종이 면은 빛에 날아간 밝은 빈 면**(글자·선 0), 그 위에서 움직이는 진우의 손과 검은 만년필(**펜촉은 손가락 뒤에 가려짐**). 유리 표면에 **비친 덕배의 얼굴이 진우의 쓰는 손 위에 반쯤 겹친다**(EP01 시그니처 구도의 낮 판). 화면 위쪽 왼편에 진우의 턱·입(오른쪽 턱 아래 점)만. **위쪽 오른편 1/4 = 유리 너머 흐린 크림 벽.**
- characters: 진우28(손·턱) · 덕배(유리 반사)
- props: PROP_NOTEPAD · PROP_PEN(펜촉 가림)
- emotion/acting: 단호한 손, 굳게 다문 입.
- motion: 손 → 겹친 얼굴.
- dialogue_ref: 진우: "그 말, 그대로 씁니다. 이번엔." / KM: ជីនូ៖ "លើកនេះ ខ្ញុំកត់ទុក ដូចលោកនិយាយទាំងអស់ បាទ។"
- art_space: **위쪽 오른편 1/4 = 흐린 크림 벽**
- attach: `DEOKBAE_sheet`, `PROPS_keyprops`
- note: 펜촉 클로즈업 0(L05). 종이에 글씨·줄 0.

### panel_008
- scene_id: S2 / location: LOC_DETENTION_VISIT / light: L-VISIT-DAY
- panel_style: present (REG-PRESENT)
- beat: 「수아는… 밥은 먹고 다니는지.」 / 「…나오셔서, 직접 보세요.」 — 온기의 씨앗 (긴장 6) · L30
- size: medium · height: normal · gutter_after: **wide (→ 정오 골목)**
- camera: eye-level, medium two-shot, 유리를 가로질러
- composition: 화면 오른쪽: 수화기를 **양손으로** 쥐고 유리 쪽으로 조금 다가온 덕배(걱정 어린 눈, 이마 주름). 화면 왼쪽: 진우(3/4), 정중하고 차가운 얼굴이지만 바로 대답하는 입. 유리 칸막이가 가운데 세로로. **위쪽 30% = 크림 벽 빈 면**(왼쪽·오른쪽 둘 다).
- characters: 덕배 `DEOKBAE_INMATE` · 진우28 `JINU28_SUIT`
- props: 인터폰 수화기
- emotion/acting: 덕배 = 자기보다 딸 걱정 / 진우 = 짧은 약속.
- motion: 덕배 → 진우.
- dialogue_ref: ① 덕배: "수아는… 밥은 먹고 다니는지." / KM: ដុកបែ៖ "ស៊ូអា… មិនដឹងជាវាហូបបាយទៀងពេលឬអត់ទេ…" ② 진우: "…나오셔서, 직접 보세요." / KM: ជីនូ៖ "…លោកចេញមក ហើយមើលកូនស្រីផ្ទាល់ភ្នែកចុះ បាទ។"
- art_space: **위쪽 30% = 크림 벽**(① 오른쪽 덕배 위, ② 왼쪽 진우 위 조금 아래)
- attach: `JINU28_expressions`, `DEOKBAE_sheet`
- note: —

--- SCENE BREAK --- (S2 → S3 · 같은 날 정오, 굽이 · 하얀 햇빛)

### panel_009
- scene_id: S3 / location: LOC_BACK_ALLEY · BEND-NOON (굽이, 옆에서) / light: L-ALLEY-DAY
- panel_style: present (REG-PRESENT)
- beat: 「스쿠터였다면, 정강이. 상처는… 허벅지 높이.」 — 보석 근거 ① (긴장 6)
- size: large · height: tall · gutter_after: normal
- camera: 측면 medium, 약간 위에서 비스듬히 (로우 앵글 금지)
- composition: 화면 가운데 아래: 회색 전봇대 옆에 **한쪽 무릎을 굽힌 진우**, 재킷을 왼팔에 걸치고, **오른손 손바닥을 펴서 자기 허벅지 높이에 수평으로** 댄다. 아스팔트에 짧고 진한 그림자. 화면 왼쪽 위: 꺼진 굽은 팔 가로등과 주황 테 반사경(반사경 안엔 빈 햇빛 골목만), 벽 아래 금. 사람·차 0. **위쪽 1/3 = 흐린 흰 하늘.**
- characters: 진우28 `JINU28_SUIT_NOON`
- props: —
- emotion/acting: 측정하는 집중, 땀 한 줄.
- motion: 손바닥 높이 → 위쪽 하늘.
- dialogue_ref: 진우 (속말): "스쿠터였다면, 정강이. 상처는… 허벅지 높이." / KM: ជីនូ (គិត)៖ "បើម៉ូតូបុក… ត្រឹមស្មងជើង។ តែស្នាមរបួស… ត្រឹមភ្លៅ។"
- art_space: **위쪽 1/3 = 흐린 흰 하늘**
- attach: `JINU28_turnaround`
- note: 숫자·자·줄자 0(몸으로만 잰다). 앵커 A 각도 금지.

### panel_010
- scene_id: S3 / location: LOC_BACK_ALLEY · RAMP-NOON (비탈 위 주차장 출구) / light: L-ALLEY-DAY
- panel_style: present (REG-PRESENT)
- beat: 「저 카메라. 그날 밤만… 비어 있었지.」 — 보석 근거 ② (긴장 6) · L16 준비 · L48
- size: large · height: tall · gutter_after: **wide (→ 오후 사무 층)**
- camera: low-angle wide, 비탈 아래쪽에서 위를 올려다봄 (굽이가 아니라 맨 위 경사로를 향해)
- composition: 화면 아래 가운데에 작게 올려다보는 진우의 뒷모습(재킷을 팔에). 위로: 회색 롤러 셔터 + 노랑·검정 줄무늬 차단봉, **셔터 바로 위 벽 브래킷에 작은 무지 회백색 CCTV 카메라 하나(위쪽 1/3 높이, 불빛·로고 0)**. 경사로 옆에 낡은 회색 경차(무지 번호판, 프레임 가장자리·초점 밖). 셔터 옆 경비실 창은 **닫혀 있고 아무도 없다.** 타워의 회색 뒷벽. **위쪽 왼편 1/4 = 흰 하늘·타워 벽 빈 면.**
- characters: 진우28 `JINU28_SUIT_NOON` (뒷모습, 작게)
- props: PROP_CCTV · VEH_COMPACT · 차단봉
- emotion/acting: 시선으로 잡는 근거.
- motion: 진우 → 카메라.
- dialogue_ref: 진우 (속말): "저 카메라. 그날 밤만… 비어 있었지." / KM: ជីនូ (គិត)៖ "កាមេរ៉ានោះ។ ត្រឹមតែយប់នោះ… គ្មានរូបសោះ។"
- art_space: **위쪽 왼편 1/4 = 흰 하늘·타워 벽**
- attach: 없음
- note: 경차는 배경의 일부(강조 0). 봉구 0(야간 근무). 카메라 크기 ≤ 셔터 폭 1/6.

--- SCENE BREAK --- (S3 → S4 · 7/30 오후 사무 층, 진우 자리)

### panel_011
- scene_id: S4 / location: LOC_FIRM_FLOOR (책상 줄, 진우 자리) / light: L-FLOOR-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 「높이. 비어 있던 밤. 먼저 간 차.」 — 근거 셋 (긴장 6) · L35
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium close-up
- composition: 책상 앞의 진우(3/4 정면), 빈 수첩 위에서 **손가락을 하나씩 접어 셋을 세는** 오른손(셋째 손가락이 접히는 순간). 뒤쪽 창밖에 짙은 초록 느티 머리. 회색 칸막이. **책상 전화기는 프레임 밖.** **위쪽 1/4 = 천장 패널·창 위 흰 빛.**
- characters: 진우28 `JINU28_SUIT`
- props: PROP_NOTEPAD(빈 쪽)
- emotion/acting: 정리된 머리, 차분한 집중.
- motion: 손가락 → 얼굴.
- dialogue_ref: 진우 (속말): "높이. 비어 있던 밤. 먼저 간 차." / KM: ជីនូ (គិត)៖ "កម្ពស់របួស។ យប់ដែលគ្មានរូប។ ឡានដែលចេញទៅមុន។"
- art_space: **위쪽 1/4 = 천장·창 위 흰 빛**
- attach: `JINU28_expressions`
- note: 전화기·명패·서류 글자 0. 복도 끝 호두나무 문 프레임 밖.

### panel_012
- scene_id: S4 / location: LOC_FIRM_FLOOR (진우 자리) / light: L-FLOOR-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 움켜쥐는 손 「우리 진우, 요즘 바쁘네? 하하.」 (긴장 7) · L14
- size: large · height: tall · gutter_after: tight
- camera: 진우 뒤 위에서 medium (FRAME-HAND-ON-BACK·FRAME-CUFF 구도 아님)
- composition: 위에서 내려다본 진우의 어깨·뒷머리·책상(프레임 가운데~아래). **화면 오른쪽에서 들어온 크고 두툼한 그을린 손이 진우 왼어깨를 꽉 움켜쥔다 — 손 전체가 무겁게 보임**(EP01 036 계열). 소매 끝 차콜 정장 + 흰 프렌치 커프 + 오닉스 커프스는 **작게·강조 0**. 수첩 위 진우의 손가락이 **접힌 채 멈춘다.** 태호 얼굴은 프레임 위로 잘림(턱 끝 정도). **위쪽 왼편 1/3 = 칸막이 너머 흐린 사무 층 바닥·책상 줄.**
- characters: 진우28 `JINU28_SUIT` · 태호37 손 `TAEHO37_OFFICE`
- props: PROP_CUFFLINK(작게) · PROP_NOTEPAD
- emotion/acting: 들키면 끝 — 진우 손가락의 정지 / 태호의 친근한 무게.
- motion: 오른쪽 손 → 어깨 → 멈춘 손가락.
- dialogue_ref: 태호: "우리 진우, 요즘 바쁘네? 하하." / KM: តេហូ៖ "អូនជីនូ សព្វថ្ងៃរវល់ម្ល៉េះ? ហាៗ"
- art_space: **위쪽 왼편 1/3 = 흐린 사무 층**(꼬리 → 오른쪽 위 프레임 밖 태호)
- attach: `TAEHO37_turnaround`
- note: **가볍게 얹는 손 금지**(고문의 운율 L13과 분리). 커프스가 프레임 1/10 크기로 도드라지면 REGEN(FRAME-CUFF 아님). 장갑 0.

### panel_013
- scene_id: S4 / location: LOC_FIRM_FLOOR (진우 자리) / light: L-FLOOR-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 「임덕배 씨 보석 청구, 준비합니다.」 — 거짓 없는 대답이 가면 (긴장 7)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up
- composition: 고개를 돌리지 않은 진우의 얼굴(3/4, 화면 왼쪽 가운데), 정중하고 무표정, 굳게 다문 입 직후. 어깨 위에 태호 손의 일부(화면 오른쪽 가장자리, 흐림). 아래 가장자리에 **수첩을 덮는 손**. **위쪽 오른편 1/3 = 흐린 창빛·천장.**
- characters: 진우28 `JINU28_SUIT`
- props: PROP_NOTEPAD(덮힘)
- emotion/acting: 무표정의 방패.
- motion: —
- dialogue_ref: 진우: "임덕배 씨 보석 청구, 준비합니다." / KM: ជីនូ៖ "ខ្ញុំកំពុងសុំដោះលែងលោក អ៊ីម ដុកបែ បណ្តោះអាសន្ន បង។"
- art_space: **위쪽 오른편 1/3 = 흐린 창빛·천장**(긴 말풍선 — 넓게)
- attach: `JINU28_expressions`
- note: 가장 긴 말풍선 중 하나(약 2줄).

### panel_014
- scene_id: S4 / location: LOC_FIRM_FLOOR (진우 자리 → 창가 파트너 유리방 쪽) / light: L-FLOOR-AFTERNOON
- panel_style: present (REG-PRESENT)
- beat: 「…내 방으로. 대표님 와 계셔.」 — 장소 전환의 문 (긴장 7)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, over-the-shoulder medium close-up (진우 어깨 너머 태호)
- composition: 앞쪽 왼편 가장자리에 진우의 어깨·뒷머리(흐림). 화면 오른쪽 가운데에 서 있는 태호(3/4), **넓은 웃음은 그대로인데 눈만 한 박자 먼저 식는다**, 턱으로 화면 왼쪽 뒤를 가리킴. 배경 왼쪽 깊은 곳: 창가 파트너 유리방, 반쯤 내린 블라인드 너머 **낮은 소파에 앉은 굵은 목의 남자 실루엣(흐림)**. **위쪽 1/4 = 천장 패널 빈 면.**
- characters: 태호37 `TAEHO37_OFFICE` · 진우28(어깨) · 기 대표 `SANGDU_SUIT`(유리방 안 흐린 실루엣)
- props: —
- emotion/acting: 웃음 속의 명령.
- motion: 태호 얼굴 → 턱짓 → 유리방.
- dialogue_ref: 태호: "…내 방으로. 대표님 와 계셔." / KM: តេហូ៖ "…ចូលបន្ទប់បងមក។ លោកប្រធានកំពុងចាំ។"
- art_space: **위쪽 1/4 = 천장 패널**(오른쪽 태호 위)
- attach: `TAEHO37_expressions`
- note: 기 대표는 실루엣만(카드 첨부 불필요). 호두나무 문·복도 끝 프레임 밖.

--- SCENE BREAK --- (S4 → S5 · 파트너 유리방 안, 반쯤 내린 블라인드)

### panel_015
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 「보석? 그 배달꾼을 왜 꺼내.」 — 1 대 2 (긴장 7)
- size: large · height: tall · gutter_after: normal
- camera: high-angle wide (방의 안쪽 모서리 위에서)
- composition: **세 사람 자리 배치 고정(§1-1):** 화면 왼쪽 문 앞에 선 진우(전신, 손에 아무것도 없음). 화면 오른쪽 책상 모서리에 걸터앉은 태호. 가운데 아래 낮은 검은 가죽 소파에 **다리를 꼬고 앉은 기 대표** — 기름 바른 검은 머리, 흰 뿌리, 굵은 목, 왼손목 묵직한 은시계, 두툼하고 짧은 손가락. 책상 위 무지 서류철 뒷면. 블라인드 사이 흰 오후빛이 가로 줄무늬로 바닥과 사람 위에. **위쪽 1/4 = 블라인드 위쪽 흰 창빛·천장.**
- characters: 기 대표 `SANGDU_SUIT` · 태호37 `TAEHO37_OFFICE` · 진우28 `JINU28_SUIT`
- props: 서류철(뒷면) · 은시계
- emotion/acting: 기 대표 = 턱을 든 거만함 / 태호 = 웃음 / 진우 = 꼿꼿함.
- motion: 기 대표 → 진우.
- dialogue_ref: 기 대표: "보석? 그 배달꾼을 왜 꺼내." / KM: ប្រធានគី៖ "ដោះលែង? យកអាដឹកម្ហូបនោះចេញមកធ្វើអី?"
- art_space: **위쪽 1/4 = 블라인드 위 흰 창빛·천장**(가운데 기 대표 위)
- attach: `SANGDU_sheet`, `TAEHO37_turnaround`
- note: 호두나무 문·고문 0. 서류에 글자 0.

### panel_016
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 「카드 얘기는 안 나오지?」 / 「카드 없이 합니다.」 — 독자만 아는 아이러니 (긴장 7) · L06 준비
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, over-the-shoulder two-shot (태호 어깨 너머 진우)
- composition: 앞쪽 오른편: 몸을 숙여 목소리를 낮추는 태호의 옆얼굴(웃음은 남아 있음, 그을린 피부). 화면 왼쪽 가운데: 시선을 피하지 않는 진우의 정면에 가까운 3/4 얼굴. 둘 사이에 블라인드 줄무늬 빛. **위쪽 30% = 블라인드 줄무늬 위 흐린 유리벽.**
- characters: 태호37 · 진우28
- props: —
- emotion/acting: 태호 = 은밀한 확인 / 진우 = 담담한 단언.
- motion: 태호 → 진우.
- dialogue_ref: ① 태호: "카드 얘기는 안 나오지?" / KM: តេហូ៖ "រឿងកាត មិនលើកមកនិយាយទេ មែនទេ?" ② 진우: "카드 없이 합니다." / KM: ជីនូ៖ "ខ្ញុំធ្វើដោយគ្មានកាត បង។"
- art_space: **위쪽 30% = 흐린 유리벽**(① 오른쪽, ② 왼쪽 조금 아래)
- attach: `TAEHO37_expressions`, `JINU28_expressions`
- note: 카드·주머니 강조 0(그림은 얼굴만).

### panel_017
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 「기사는 그대로 둬. 괜히 일 키우지 말고.」 — 멘토의 벽 (긴장 7)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium (태호 단독)
- composition: 책상 모서리에 걸터앉은 태호(화면 오른쪽 가운데, 3/4, 왼쪽을 향함), 손을 가볍게 내젓는 오른손(커프스 강조 0). 웃음 섞인 입, 끝이 단단한 눈. 배경 블라인드 줄무늬. **위쪽 왼편 1/3 = 블라인드 위 흐린 창빛.**
- characters: 태호37 `TAEHO37_OFFICE`
- props: PROP_CUFFLINK(작게)
- emotion/acting: 웃는 얼굴의 명령.
- motion: 손짓 → 화면 왼쪽(진우 쪽).
- dialogue_ref: 태호: "기사는 그대로 둬. 괜히 일 키우지 말고." / KM: តេហូ៖ "អ្នកដឹកម្ហូបនោះ ទុកនៅដដែលទៅ។ កុំធ្វើរឿងឲ្យធំឥតការណា៎។"
- art_space: **위쪽 왼편 1/3 = 블라인드 위 창빛**
- attach: `TAEHO37_expressions`
- note: —

### panel_018
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 「기사가 오래 갇혀 있을수록, 재판이 길어집니다.」 — 칼끝을 꺼내기 전 (긴장 7)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up
- composition: 진우의 차분한 얼굴(화면 왼쪽 가운데, 3/4, 오른쪽을 향함), 한 박자의 침묵 뒤 막 열리는 입. 배경 흐림(블라인드 줄무늬만). **위쪽 오른편 1/3 = 흐린 배경 빈 면.**
- characters: 진우28 `JINU28_SUIT`
- props: —
- emotion/acting: 서두르지 않는 논리.
- motion: —
- dialogue_ref: 진우: "기사가 오래 갇혀 있을수록, 재판이 길어집니다." / KM: ជីនូ៖ "គាត់ជាប់ឃុំកាន់តែយូរ… ការកាត់ក្តីក៏កាន់តែអូស។"
- art_space: **위쪽 오른편 1/3 = 흐린 배경**
- attach: `JINU28_expressions`
- note: —

### panel_019
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 「재판이 길어지면, 차 얘기가 나옵니다.」 — 말이 과녁에 닿다 (긴장 8) · L22
- size: large · height: tall · gutter_after: tight
- camera: eye-level, 전경 close-up + 배경 medium (한 장면 깊이)
- composition: 전경 화면 오른쪽 아래: 기 대표의 얼굴 반과 왼손 — **두툼한 손가락이 은시계 줄 위에서 멈춘다**, 얼굴색이 빠지고 입이 굳는다(놀람이 아니라 **두려움**, 눈을 크게 뜨지 않음). 배경 화면 왼쪽: 문 앞에 선 진우(초점 약간 밖, 말하는 입). **위쪽 왼편 1/3 = 진우 위 흐린 유리벽.**
- characters: 기 대표 `SANGDU_SUIT`(전경) · 진우28(배경)
- props: 은시계(숫자 없는 문자판)
- emotion/acting: 숨은 두려움 / 담담한 말.
- motion: 배경 진우 → 전경 손가락.
- dialogue_ref: 진우: "재판이 길어지면, 차 얘기가 나옵니다." / KM: ជីនូ៖ "កាត់ក្តីអូសយូរ… រឿងឡាននឹងផុសឡើង បាទ។"
- art_space: **위쪽 왼편 1/3 = 흐린 유리벽**(꼬리 → 배경 진우)
- attach: `SANGDU_sheet`, `JINU28_turnaround`
- note: 분할 프레임 금지(한 장 안 깊이). 기 대표 과장된 놀람 표정 → REGEN.

### panel_020
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 「의뢰인을 지키려면, 빨리 내보내야죠.」 — 논리가 멘토의 언어로 (긴장 8) · ⟨이중의미⟩
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium two-shot
- composition: 화면 왼쪽: 시선을 태호 쪽(오른쪽)으로 옮기는 진우(3/4). 화면 오른쪽: 책상 모서리의 태호 옆얼굴, **웃음이 입가에 걸린 채 굳어 가기 시작.** 둘 사이 아래쪽 흐린 소파 끝(기 대표 무릎 정도만). **위쪽 30% = 블라인드 위 창빛.**
- characters: 진우28 · 태호37
- props: —
- emotion/acting: 진우 = 공손한 칼 / 태호 = 웃음의 균열 시작.
- motion: 진우 시선 → 태호.
- dialogue_ref: 진우: "의뢰인을 지키려면, 빨리 내보내야죠." / KM: ជីនូ៖ "បើចង់ការពារកូនក្តី… ត្រូវឲ្យគាត់ចេញឆាប់ៗ។"
- art_space: **위쪽 30% = 블라인드 위 창빛**(왼쪽 진우 위)
- attach: `JINU28_expressions`, `TAEHO37_expressions`
- note: ⟨이중의미⟩ — 진우의 시선은 태호에게(기 대표를 보지 않음). "의뢰인"을 그림이 한쪽으로 고정하지 않는다.

### panel_021
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: **사이다 정점** 「…가족이니까요.」 (긴장 8) · K-12 · L36
- size: large · height: tall · gutter_after: wide
- camera: eye-level, close-up, 정면에 가까운 얼굴
- composition: 진우의 얼굴이 프레임 가운데 약간 아래, **태호(화면 오른쪽 밖)를 똑바로 본다** — 정면에 가까운 3/4, 공손한 얼굴, 아주 작은 쉼. **블라인드 줄무늬 빛 한 줄이 얼굴을 가로지른다**(눈 아래). 배경 흐림. **위쪽 1/4 = 어둑한 블라인드 위쪽 빈 면.**
- characters: 진우28 `JINU28_SUIT`
- props: —
- emotion/acting: 차갑게 정중한 결정타. 미소 0.
- motion: —
- dialogue_ref: 진우: "…가족이니까요." / KM: ជីនូ៖ "…ព្រោះយើងជាគ្រួសារតែមួយ។"
- art_space: **위쪽 1/4 = 블라인드 위 빈 면**(짧은 말풍선 하나)
- attach: `JINU28_expressions`
- note: 이긴 표정·비웃음 금지(무표정의 공손함).

### panel_022
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 늦게 굳는 미소 ① — 자기 말에 걸린 사람 (긴장 8)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up
- composition: **024와 매치(§1-2).** 태호 얼굴(3/4, 화면 왼쪽을 향함), **넓은 웃음이 입에 남아 있는데 눈가 주름이 먼저 펴지고 눈이 멈춘다**(TAEHO37_expressions 1/2). 블라인드 줄무늬가 이마에. 배경 흐림.
- characters: 태호37 `TAEHO37_OFFICE`
- props: —
- emotion/acting: 정지.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `TAEHO37_expressions`
- note: 분노·악역 표정 금지 — 입은 웃는 채.

### panel_023
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 「…저 친구 말이 맞네, 조 변호사.」 / 「…그래. 해 봐.」 — 구경꾼의 판정 (긴장 8) · L22
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium two-shot
- composition: 화면 왼쪽 아래: 소파에 **등을 기대며 짧게 끄덕이는** 기 대표(턱이 내려감, 다리를 꼰 채). 화면 오른쪽: 책상 모서리를 **한 번 짚는** 태호의 크고 두툼한 손(커프스 강조 0), 이어 끄덕이는 태호(웃음이 반쯤 돌아옴). **위쪽 30% = 블라인드 위 창빛**(두 사람 위).
- characters: 기 대표 `SANGDU_SUIT` · 태호37 `TAEHO37_OFFICE`
- props: PROP_CUFFLINK(작게) · 은시계
- emotion/acting: 기 대표 = 먼저 꺾임 / 태호 = 마지못한 승인.
- motion: 기 대표 → 태호의 손 → 태호 얼굴.
- dialogue_ref: ① 기 대표: "…저 친구 말이 맞네, 조 변호사." / KM: ប្រធានគី៖ "…ក្មេងនោះ និយាយត្រូវដែរ មេធាវីចូ។" ② 태호: "…그래. 해 봐." / KM: តេហូ៖ "…អើ។ ធ្វើទៅ អូន។"
- art_space: **위쪽 30% = 블라인드 위 창빛**(① 왼쪽, ② 오른쪽 조금 아래)
- attach: `SANGDU_sheet`, `TAEHO37_expressions`
- note: 진우는 프레임 밖(화면 왼쪽 문 쪽) — 기 대표의 「저 친구」 시선은 화면 왼쪽 밖을 향한다.

### panel_024
- scene_id: S5 / location: LOC_FIRM_FLOOR · 파트너 유리방 안 → 유리 너머 사무 층 / light: L-FLOOR-AFTERNOON + 블라인드 줄무늬
- panel_style: present (REG-PRESENT)
- beat: 늦게 굳는 미소 ② 「역시 우리 진우. 하하.」 — 사이다의 여운 + EP03 씨앗 (긴장 7)
- size: large · height: tall · gutter_after: **xwide (→ 사흘 뒤)**
- camera: eye-level, 전경-배경 심도 (전경 close-up 태호, 배경 진우)
- composition: **022와 매치(같은 얼굴 각도).** 전경 화면 오른쪽: 태호 얼굴(3/4, 화면 왼쪽을 향함), **다시 넓게 웃는데 웃음이 눈까지 오는 데 한 박자 늦다**(TAEHO37_expressions 2/2), 시선은 화면 왼쪽 뒤. 배경 화면 왼쪽: 유리문을 열고 나가는 진우의 등(작게, 흐림), 유리벽 너머 흐린 사무 층. **위쪽 왼편 1/3 = 유리벽 위 흐린 천장.**
- characters: 태호37(전경) · 진우28(배경, 뒷모습)
- props: —
- emotion/acting: 웃음 뒤의 계산.
- motion: 태호 시선 → 나가는 진우의 등.
- dialogue_ref: 태호: "역시 우리 진우. 하하." / KM: តេហូ៖ "អូនជីនូរបស់បង ពូកែមែន។ ហាៗ"
- art_space: **위쪽 왼편 1/3 = 유리벽 위 흐린 천장**(꼬리 → 전경 태호)
- attach: `TAEHO37_expressions`, `JINU28_turnaround`
- note: 서늘한 조명 금지 — 같은 오후빛. 호두나무 문 프레임 밖.

--- SCENE BREAK --- (S5 → S6 · 사흘 뒤 8/1 늦은 오후, 진우 자리 · `env` 「사흘 뒤」)

### panel_025
- scene_id: S6 / location: LOC_FIRM_FLOOR (진우 자리) / light: L-FLOOR-LATE
- panel_style: present (REG-PRESENT)
- beat: `env` 「사흘 뒤」 + 진동하는 폰 — 기다리던 소식 (긴장 6) · 타이머
- size: medium · height: normal · gutter_after: tight
- camera: 약간 위에서, close-up (책상 면)
- composition: **055와 매치(§1-2).** 책상 위 빈 수첩 옆에 **진동하는 검은 무지 폰**(프레임 폭의 약 1/3, 프레임 가운데 아래, 빈 빛 화면이 위로 약간 기움, 진동은 아주 약한 흐림 — 속도선·기호 0). 화면 오른쪽 가장자리에 진우 손끝이 막 다가옴. 늦은 오후 창빛이 책상 위에 긴 그림자. 위쪽 뒤로 흐린 창과 초록 느티. **위쪽 1/3 = 흐린 창 위 빈 면(`env`) + 폰 오른쪽 옆 빈 책상 면(효과음).** 책상 전화기는 프레임 밖.
- characters: 진우28 손
- props: PROP_PHONE(빈 빛) · PROP_NOTEPAD
- emotion/acting: 숨을 멈춘 기다림.
- motion: 폰 → 다가오는 손.
- dialogue_ref: 「사흘 뒤」 KM: បីថ្ងៃក្រោយ · [효과음] 부르르… (폰 진동) / KM 효과음: វឺត… វឺត…
- art_space: **위쪽 1/3 = 흐린 창 위 빈 면(`env`) + 폰 오른쪽 옆 책상 면(효과음)**
- attach: 없음
- note: 금빛으로 읽히면 REGEN(L-FLOOR-LATE). 폰 화면에 발신자·아이콘·숫자 0.

### panel_026
- scene_id: S6 / location: LOC_FIRM_FLOOR (진우 자리) / light: L-FLOOR-LATE
- panel_style: present (REG-PRESENT)
- beat: **중반의 승리** 「…네. 보석, 허가요.」 「…감사합니다.」 (긴장 6)
- size: large · height: tall · gutter_after: normal
- camera: eye-level, medium close-up
- composition: 폰을 오른쪽 귀에 댄 진우(화면 가운데 약간 왼쪽, 3/4). 숨을 멈춘 얼굴에서 **입가가 아주 작게 풀리는** 순간. 폰은 화면 오른쪽 귀(폰 화면은 귀 쪽, 안 보임). 뒤쪽 창빛과 느티. **위쪽 왼편 1/3 = 흐린 창 위 빈 면.**
- characters: 진우28 `JINU28_SUIT`
- props: PROP_PHONE
- emotion/acting: 처음으로 무언가를 바꾼 안도(웃음까지는 아님).
- motion: —
- dialogue_ref: ① 진우: "…네. 보석, 허가요." / KM: ជីនូ៖ "…បាទ។ អនុញ្ញាតឲ្យគាត់ចេញហើយ?" ② 진우: "…감사합니다." / KM: ជីនូ៖ "…អរគុណ បាទ។"
- art_space: **위쪽 왼편 1/3 = 흐린 창 위**(둘 다 진우 말 — 위 → 아래)
- attach: `JINU28_expressions`
- note: 상대 목소리 말풍선 0(법원 쪽 인물 0, beatsheet F6).

### panel_027
- scene_id: S6 / location: LOC_FIRM_FLOOR (진우 자리, 창 쪽) / light: L-FLOOR-LATE
- panel_style: present (REG-PRESENT)
- beat: 「처음으로… 하나를 바꿨다.」 — 1독 승리 / 재독 대가의 시작 (긴장 6) · ⟨이중의미⟩
- size: medium · height: normal · gutter_after: wide
- camera: eye-level, medium, 옆얼굴 (창 쪽)
- composition: 화면 왼쪽 아래: 책상 위에 폰을 내려놓은 손. 화면 오른쪽: 창밖 초록 느티를 보는 진우의 옆얼굴(오른쪽 턱 아래 점이 보이는 쪽), **처음으로 어깨에서 힘이 빠진다.** 낮고 조금 따뜻한 창빛. **위쪽 1/3 = 창 위 흐린 흰 빛.**
- characters: 진우28 `JINU28_SUIT`
- props: PROP_PHONE(내려놓음)
- emotion/acting: 풀린 어깨, 짧은 숨.
- motion: 손 → 옆얼굴 → 창밖 느티.
- dialogue_ref: 진우 (속말): "처음으로… 하나를 바꿨다." / KM: ជីនូ (គិត)៖ "លើកដំបូង… ខ្ញុំប្តូររឿងមួយបាន។"
- art_space: **위쪽 1/3 = 창 위 흐린 빛**
- attach: `JINU28_expressions`
- note: 불길한 연출 0(규칙 설명 0). 책상 전화기 프레임 밖.

--- SCENE BREAK --- (S6 → S7 · 같은 날 저녁, 구치소 출구 철문 밖 · 금빛)

### panel_028
- scene_id: S7 / location: LOC_DETENTION_VISIT · EXT_GATE / light: L-OUT-GOLD (+ two long shadows on the concrete)
- panel_style: present (REG-PRESENT)
- beat: 석방 — 「변호사님… 고맙습니다.」 (긴장 5) · EP01 025 장소 운율
- size: large · height: tall · gutter_after: normal
- camera: eye-level, medium-wide
- composition: 화면 오른쪽: 무거운 회색 철문 가장자리에서 막 나선 덕배 — 회색 반팔 티, 짙은 작업 바지, 낡은 회색 캔버스 운동화, 손에 무지 반투명 비닐봉지(접은 남색 조끼가 비침), 헬멧 없음 — **허리를 깊이 숙인다.** 화면 왼쪽: 서류 가방을 든 진우(3/4, 넥타이 단정), 받는 자리에서 멈칫. 회색 콘크리트 벽, 낮은 금빛 저녁, **콘크리트 위 긴 그림자 둘.** **위쪽 1/3 = 금빛 받은 콘크리트 벽 빈 면.**
- characters: 덕배 `DEOKBAE_RELEASED` · 진우28 `JINU28_SUIT` + 서류 가방
- props: PROP_PLASTIC_BAG(조끼) · PROP_BRIEFCASE
- emotion/acting: 덕배 = 깊은 감사 / 진우 = 어색한 정중함.
- motion: 철문 → 숙인 덕배 → 진우.
- dialogue_ref: 덕배: "변호사님… 고맙습니다." / KM: ដុកបែ៖ "លោកមេធាវី… អរគុណច្រើនណាស់។"
- art_space: **위쪽 1/3 = 콘크리트 벽**(오른쪽 덕배 위)
- attach: `DEOKBAE_sheet`, `JINU28_turnaround`
- note: EP02 유일 금빛. 간판·건물 전경·수갑·수의·번호 0.

--- SCENE BREAK --- (S7 → S8 · 같은 저녁, 분식집 · 유리문 밖 푸른 저녁)

### panel_029
- scene_id: S8 / location: LOC_BUNSIK (입구 쪽 작은 테이블) / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: 「아빠. 드세요.」 — 이 세계에서 가장 따뜻한 자리 (긴장 4)
- size: large · height: tall · gutter_after: tight
- camera: eye-level, medium
- composition: 화면 오른쪽: 플라스틱 의자에 앉은 덕배(3/4, 왼쪽을 향함), 의자 옆 바닥에 비닐봉지(작게). 화면 가운데: 수아가 **떡볶이 한 접시를 아버지 앞에 내려놓는 순간** — 일자 앞머리, 낮은 똥머리, 흰 반팔 티 + 밝은 황토 베이지 앞치마(리본핀 **작고 흐리게**), 평소처럼 무표정이지만 아버지를 보는 눈매가 조금 풀려 있다. 붉은 국물, 오르는 김. 배경 오른쪽 뒤에 철판 앞 이모의 등(짙은 갈색 앞치마, 베이지 머릿수건). 화면 왼쪽 뒤 김 서린 유리문 밖 **짙푸른 저녁과 느티 실루엣**. **위쪽 1/4 = 김과 천장 형광 빛.**
- characters: 덕배 `DEOKBAE_RELEASED` · 수아 `SUA_WORK` · 이모 `IMO`(등)
- props: 떡볶이 접시 · 나무젓가락 · PROP_PLASTIC_BAG(바닥)
- emotion/acting: 덕배 = 놀란 듯 고마운 얼굴 / 수아 = 담담한 다정함.
- motion: 수아 손 → 접시 → 덕배.
- dialogue_ref: 수아: "아빠. 드세요." / KM: ស៊ូអា៖ "ប៉ា… ញ៉ាំសិនទៅ។"
- art_space: **위쪽 1/4 = 김·천장 빛**(가운데 수아 위)
- attach: `DEOKBAE_sheet`, `SUA_sheet`
- note: 🔒 수아는 진우 쪽(화면 왼쪽 밖)을 보지 않는다. 리본핀 클로즈업·반짝임 0. 메뉴판 = 빈 색판.

### panel_030
- scene_id: S8 / location: LOC_BUNSIK / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: **온기 저점 ①** — 어깨 위 평범한 손 (긴장 3)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up
- composition: 프레임 위쪽 가운데: 덕배의 마른 어깨(회색 티)에 **가볍게 얹힌 수아의 작고 짧은 손톱의 손**(반팔, 맨 손목). 프레임 아래: 나무젓가락을 쥔 덕배의 거친 손(오른손 손등 화상 자국), **아주 살짝 떨림**. 떡볶이 김이 사이를 부드럽게 지난다. 수아의 앞치마 가슴·리본핀은 **프레임 밖**.
- characters: 수아 손 · 덕배 어깨·손
- props: 나무젓가락 · 떡볶이(가장자리)
- emotion/acting: 말 없는 안도.
- motion: 어깨 위 손 → 떨리는 젓가락.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `SUA_sheet`, `DEOKBAE_sheet`
- note: **🔒 평범한 딸의 손** — 구도를 리본핀 쪽으로 끌지 않는다, 의미심장한 조명 0.

### panel_031
- scene_id: S8 / location: LOC_BUNSIK / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: **온기 저점 ②** 「수아야, 변호사님 것도 한 접시.」 (긴장 3)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, over-the-shoulder (덕배 어깨 너머 문간의 진우)
- composition: 앞쪽 오른편: 고개를 든 덕배의 옆얼굴 — **처음 보는 활짝 웃는 얼굴**(이마 주름, 처진 눈이 더 처짐). 화면 왼쪽 가운데: 김 서린 유리문 안쪽 문간에 **서류 가방을 든 채 어디에 서야 할지 모르는** 진우(전신에 가까운 미디엄, 넥타이 느슨). 뒤로 유리문 밖 푸른 저녁. **위쪽 왼편 1/3 = 문 위 김 서린 벽·천장.**
- characters: 덕배 `DEOKBAE_RELEASED` · 진우28 `JINU28_SUIT_EVENING` + 서류 가방
- props: PROP_BRIEFCASE
- emotion/acting: 덕배 = 환한 웃음 / 진우 = 어색한 자세.
- motion: 덕배 → 문간의 진우.
- dialogue_ref: 덕배: "수아야, 변호사님 것도 한 접시." / KM: ដុកបែ៖ "កូនស៊ូអា ដាក់មួយចានឲ្យលោកមេធាវីផង។"
- art_space: **위쪽 왼편 1/3 = 문 위 김 서린 벽**(꼬리 → 앞쪽 덕배)
- attach: `DEOKBAE_sheet`, `JINU28_turnaround`
- note: 수아 0(이 컷엔 없다).

### panel_032
- scene_id: S8 / location: LOC_BUNSIK / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: 「…잘 먹겠습니다.」 — 같은 상에 앉은 처음 (긴장 4)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, medium two-shot
- composition: 작은 테이블을 사이에 두고 화면 왼쪽 진우(3/4, 막 앉음, 가방은 의자 옆), 화면 오른쪽 덕배(웃는 얼굴). 진우 앞으로 **위에서 내려오는 수아의 손이 두 번째 접시를 놓는다** — 수아는 **얼굴이 프레임 위로 잘리고**(팔과 앞치마 아래쪽만, 리본핀 프레임 밖) 시선은 접시. 진우가 나무젓가락을 든다. **위쪽 1/4 = 김·천장**(수아 팔 옆).
- characters: 진우28 `JINU28_SUIT_EVENING` · 덕배 `DEOKBAE_RELEASED` · 수아 손
- props: 떡볶이 접시 ×2 · 나무젓가락
- emotion/acting: 진우 = 쑥스러운 예의.
- motion: 수아 손 → 접시 → 진우 젓가락.
- dialogue_ref: 진우: "…잘 먹겠습니다." / KM: ជីនូ៖ "…អញ្ចឹង ខ្ញុំសុំញ៉ាំ បាទ។"
- art_space: **위쪽 1/4 = 김·천장**(왼쪽 진우 위)
- attach: `JINU28_expressions`, `DEOKBAE_sheet`
- note: 🔒 수아 얼굴·눈빛 0, 진우에게 말 0.

### panel_033
- scene_id: S8 / location: LOC_BUNSIK / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: 「그날 밤… 제가 그 골목으로 간 건요.」 — 평범한 회상의 시작 (긴장 4)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium
- composition: 덕배(화면 오른쪽 가운데, 3/4, 왼쪽을 향함), **젓가락을 접시 위에 내려놓고** 고마운 사람에게 다 말해야 한다는 듯 조심스럽게 입을 연다. 배경 김 속 철판 앞 이모의 등. **위쪽 왼편 1/3 = 김 서린 벽.**
- characters: 덕배 `DEOKBAE_RELEASED` · 이모 `IMO`(등, 흐림)
- props: 나무젓가락(내려놓음)
- emotion/acting: 조심스러운 진심.
- motion: —
- dialogue_ref: 덕배: "그날 밤… 제가 그 골목으로 간 건요." / KM: ដុកបែ៖ "យប់នោះ… ខ្ញុំចូលផ្លូវតូចនោះ ព្រោះ…"
- art_space: **위쪽 왼편 1/3 = 김 서린 벽**
- attach: `DEOKBAE_sheet`
- note: 기억 컷 없음(말로만).

### panel_034
- scene_id: S8 / location: LOC_BUNSIK / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: 「건물 손님이 뒷문으로 오라고 해서…」 (긴장 4) · **L12●** · W12 🔒
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium (덕배 단독)
- composition: 033과 같은 크기·같은 조명. 덕배가 손으로 **"건물 뒤쪽"을 가볍게 가리키는** 평범한 몸짓(손바닥을 옆으로 넘기듯, 화면 오른쪽 뒤로). 얼굴은 쑥스러운 미소 반. **진우 얼굴은 프레임에 없다**(화면 왼쪽 가장자리 아무것도 없음 또는 흐린 어깨 끝만). **위쪽 1/3 = 김·천장**(왼쪽~가운데).
- characters: 덕배 `DEOKBAE_RELEASED`
- props: —
- emotion/acting: 평범한 사연.
- motion: 손짓 → 화면 오른쪽 뒤.
- dialogue_ref: 덕배: "건물 손님이 뒷문으로 오라고 해서…" / KM: ដុកបែ៖ "ភ្ញៀវនៅក្នុងអគារ ប្រាប់ឲ្យខ្ញុំវាងមកខាងក្រោយ…"
- art_space: **위쪽 1/3 = 김·천장**(긴 말풍선 — 넓게)
- attach: `DEOKBAE_sheet`
- note: **W12 🔒 — 진우 반응 컷·클로즈업·의미 있는 조명 변화 0.** 033과 같은 그림 톤(특별해 보이면 REGEN).

### panel_035
- scene_id: S8 / location: LOC_BUNSIK / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: 「…다 지난 일이죠. 드세요, 변호사님.」 — 사연을 접는 손 (긴장 4)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium close-up
- composition: 덕배가 쑥스럽게 고개를 저으며 웃고 **다시 젓가락을 드는** 순간(화면 오른쪽 가운데). 김. **위쪽 왼편 1/3 = 김 서린 벽.**
- characters: 덕배 `DEOKBAE_RELEASED`
- props: 나무젓가락
- emotion/acting: 쑥스러움, 권하는 손.
- motion: 고개 → 젓가락.
- dialogue_ref: 덕배: "…다 지난 일이죠. 드세요, 변호사님." / KM: ដុកបែ៖ "…រឿងចាស់ហើយ។ ពិសាទៅ លោកមេធាវី។"
- art_space: **위쪽 왼편 1/3 = 김 서린 벽**
- attach: `DEOKBAE_sheet`
- note: —

### panel_036
- scene_id: S8 / location: LOC_BUNSIK (김 너머 유리문) / light: L-BUNSIK-EVENING
- panel_style: present (REG-PRESENT)
- beat: 온기의 마지막 숨 — 한 입 (긴장 4) · L35
- size: medium · height: normal · gutter_after: **xwide (→ 다음 날 아침)**
- camera: eye-level, medium close-up, 옆얼굴
- composition: 떡볶이를 한 입 먹는 진우의 옆얼굴(화면 왼쪽 가운데), **김이 얼굴 반을 가린다.** 뒤 왼편 김 서린 유리문 밖 짙푸른 저녁과 느티 윤곽. 배경 오른쪽 흐림 속 **김밥을 써는 작은 손**(얼굴 0).
- characters: 진우28 `JINU28_SUIT_EVENING` · 수아 손(배경 흐림)
- props: 떡볶이 · 나무젓가락 · 김밥 도마
- emotion/acting: 말 없는 온기.
- motion: 김 → 유리문 밖.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_expressions`
- note: 수아 얼굴·리본핀 0(손만, 흐림).

--- SCENE BREAK --- (S8 → S9 · 8/2 아침 사무 층)

### panel_037
- scene_id: S9 / location: LOC_FIRM_FLOOR (진우 자리 옆 통로) / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 「고문님 손주도 올해 시험 붙었다더라. 하하.」 — 가벼운 사내 소문 (긴장 5) · **L39●**
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium two-shot
- composition: 화면 오른쪽: **무지 흰 테이크아웃 컵(흰 뚜껑, 슬리브 없음)**을 든 태호가 진우 책상 칸막이에 팔을 걸치고 **들뜬 얼굴로** 웃는다. 화면 왼쪽 아래: 책상 앞에 앉아 올려다보는 진우(3/4, 무표정). 창밖 짙은 초록 느티. **책상 전화기 프레임 밖.** **위쪽 1/4 = 천장 패널·창 위 흰 빛.**
- characters: 태호37 `TAEHO37_OFFICE` + 테이크아웃 컵 · 진우28 `JINU28_SUIT`
- props: 테이크아웃 컵(무지)
- emotion/acting: 태호 = 들뜬 소문 / 진우 = 듣기만.
- motion: 태호 → 진우.
- dialogue_ref: 태호: "고문님 손주도 올해 시험 붙었다더라. 하하." / KM: តេហូ៖ "ឮថា ចៅលោកតា ក៏ប្រឡងជាប់ឆ្នាំនេះដែរ។ ហាៗ"
- art_space: **위쪽 1/4 = 천장 패널**(오른쪽 태호 위)
- attach: `TAEHO37_expressions`, `JINU28_turnaround`
- note: **재독 비트 — 서늘하게 그리지 않는다.** 고문·호두나무 문·복도 끝 프레임 밖. 컵이 봉구 슬리브 컵처럼 보이면 REGEN(L02 혼동).

### panel_038
- scene_id: S9 / location: LOC_FIRM_FLOOR (진우 자리 옆) / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 「네가 짚은 그 CCTV 말이야.」 「경찰이 이제, 그날 밤 당직을 본대.」 — 근거가 방향을 튼다 (긴장 6) · L16
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up
- composition: 몸을 숙여 낮은 목소리로 말하는 태호의 얼굴(화면 오른쪽 가운데, 3/4, 왼쪽 아래를 향함). 웃음은 그대로, 정보만 낮게. 손의 컵은 아래 가장자리에 흐리게. 커프스 강조 0. **위쪽 왼편 40% = 흐린 사무 층 천장·창빛.**
- characters: 태호37 `TAEHO37_OFFICE`
- props: 테이크아웃 컵(흐림)
- emotion/acting: 가벼운 정보 전달(위협 아님).
- motion: —
- dialogue_ref: ① 태호: "네가 짚은 그 CCTV 말이야." / KM: តេហូ៖ "រឿងកាមេរ៉ាសុវត្ថិភាព ដែលអូនលើកមកនោះ…" ② 태호: "경찰이 이제, 그날 밤 당직을 본대." / KM: តេហូ៖ "ប៉ូលិសថា ឥឡូវនឹងស៊ើបរឿងអ្នកយាមវេនយប់នោះហើយ។"
- art_space: **위쪽 왼편 40% = 흐린 천장·창빛**(둘, 위 → 아래)
- attach: `TAEHO37_expressions`
- note: —

### panel_039
- scene_id: S9 / location: LOC_FIRM_FLOOR (진우 책상 면) / light: L-FLOOR-MORNING
- panel_style: present (REG-PRESENT)
- beat: 「그날 밤… 당직.」 — 첫 불안 (긴장 6) · L05 보호
- size: small · height: short · gutter_after: **xwide (→ 그날 밤 경비실)**
- camera: 약간 위에서, close-up 손
- composition: 빈 수첩(종이 면 무지) 위에서 **멈춘 만년필을 쥔 진우의 손**(펜 몸통 = 검은 옻칠·금색 클립, **펜촉은 손가락 뒤에 가려짐**). 손은 프레임 가운데. **위쪽 1/3 = 수첩 너머 흐린 책상 면 빈 공간.** 전화기 0.
- characters: 진우28 손
- props: PROP_PEN(펜촉 가림) · PROP_NOTEPAD
- emotion/acting: 손의 정지.
- motion: —
- dialogue_ref: 진우 (속말): "그날 밤… 당직." / KM: ជីនូ (គិត)៖ "អ្នកយាមវេន… យប់នោះ។"
- art_space: **위쪽 1/3 = 흐린 책상 면**
- attach: `PROPS_keyprops`
- note: **펜촉 클로즈업 0 / 휜 펜촉 노출 0**(L05 — EP03 마지막 컷 전용). 보이면 REGEN.

--- SCENE BREAK --- (S9 → S10 · 8/2 밤, 비탈 위 경비실)

### panel_040
- scene_id: S10 / location: LOC_BACK_ALLEY · BOOTH / light: L-BOOTH-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 「경찰이 내일 밤에, 현장 한 번 보자네.」 「그날 당직이 나였거든. 허허.」 (긴장 5) · L02·L16·L48 · 타이머
- size: large · height: tall · gutter_after: tight
- camera: eye-level, warm medium two-shot (EP01 028과 같은 배치)
- composition: **043과 매치(§1-2).** 화면 가운데~오른쪽: 비탈 위 작은 박스형 경비실 창, 노란 불, 작은 선풍기, 전기 포트, 무지 믹스커피 상자, 낡은 라디오, **창턱의 갈색 슬리브 더미, 창 오른쪽 아래 모서리에 김 오르는 슬리브 컵.** 창 안 봉구(모자, 목의 흰 수건)가 **손으로 자른 갈색 골판지 슬리브를 끼운 믹스커피를 창 밖으로 내민다**, 금니 하나 보이는 허허 웃음. 화면 왼쪽: 받는 진우(3/4, 흰 셔츠 소매 걷음). 뒤쪽 아래로 셔터(+작은 무지 카메라)·줄무늬 차단봉·낡은 회색 경차(무지 번호판, 강조 0). **위쪽 왼편 40% = 남색 밤하늘·경비실 지붕 위 빈 면.**
- characters: 봉구 `BONGGU_NIGHT_DUTY` · 진우28 `JINU28_NIGHT`
- props: PROP_CUP_SLEEVE(김) · 경비실 소품 · PROP_CCTV(작게) · VEH_COMPACT
- emotion/acting: 봉구 = 무심한 다정 / 진우 = 컵을 받는 손.
- motion: 봉구의 손 → 진우의 손.
- dialogue_ref: ① 봉구: "경찰이 내일 밤에, 현장 한 번 보자네." / KM: ប៉ុងគូ៖ "ប៉ូលិសថា យប់ស្អែក ចង់មកមើលកន្លែងកើតហេតុម្តង។" ② 봉구: "그날 당직이 나였거든. 허허." / KM: ប៉ុងគូ៖ "យប់នោះ ពូជាអ្នកយាមវេន។ ហឹៗ"
- art_space: **위쪽 왼편 40% = 남색 밤하늘·경비실 지붕 위**(둘 세로로)
- attach: `BONGGU_sheet`, `JINU28_turnaround`
- note: **불길한 조명 금지 — EP01 028과 같은 따뜻함(재독 비트).** 셔터·차단봉·상자·차에 글자 0.

### panel_041
- scene_id: S10 / location: LOC_BACK_ALLEY · BOOTH (창) / light: L-BOOTH-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 「다음 주가 우리 손주 돌이야. 별일 있겠어?」 — 무고한 사람의 평범한 내일 (긴장 5) · **L34●**
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up 손 + 웃는 얼굴 아래쪽
- composition: 프레임 가운데: 근무복 가슴 주머니에서 막 꺼낸 **흰 무지 아기 양말 한 켤레**를 두툼하고 짧은 햇볕에 탄 손가락 사이에 들어 보인다 — **양말이 손가락보다 작다**(크기 대비가 감정). 프레임 위쪽: 웃는 입가와 금니 하나, 턱, 목의 흰 수건 일부. 창틀 가장자리와 노란 불빛. **아래 1/4 = 창턱 아래 어두운 벽 빈 면.**
- characters: 봉구 손·얼굴 아래쪽 `BONGGU_NIGHT_DUTY`
- props: PROP_BABY_SOCKS
- emotion/acting: 자랑스러운 할아버지.
- motion: 양말 → 웃는 입.
- dialogue_ref: 봉구: "다음 주가 우리 손주 돌이야. 별일 있겠어?" / KM: ប៉ុងគូ៖ "អាទិត្យក្រោយ ចៅពូខួបមួយឆ្នាំហើយ។ ម៉េចនឹងមានរឿងអី?"
- art_space: **아래 1/4 = 창턱 아래 어두운 벽**
- attach: `BONGGU_sheet`
- note: 양말 무늬·글자·레이스 0, 흰색만. 불길한 조명 금지.

### panel_042
- scene_id: S10 / location: LOC_BACK_ALLEY · BOOTH / light: L-BOOTH-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 「아저씨, 그날 밤에 혹시—」 / 「허허, 식기 전에 마셔, 젊은 양반.」 — 묻지 못한 질문 (긴장 6) · W7 🔒
- size: medium · height: normal · gutter_after: **xwide (→ 다음 날 밤)**
- camera: eye-level, close-up (진우), 배경 경비실 창
- composition: 앞쪽 화면 왼쪽 가운데: 슬리브 컵을 두 손으로 쥔 진우의 얼굴(3/4), **무언가 물으려다 멈춘 입.** 배경 화면 오른쪽: 노란 창 안에서 **벌써 라디오 쪽으로 돌아앉으며 손을 내젓는** 봉구(흐림, 모자 쓴 둥근 등과 손). **위쪽 1/3 = 경비실 지붕 위 밤하늘**(왼쪽~가운데).
- characters: 진우28 `JINU28_NIGHT` · 봉구 `BONGGU_NIGHT_DUTY`(흐림)
- props: PROP_CUP_SLEEVE(진우 손)
- emotion/acting: 진우 = 끊긴 질문 / 봉구 = 손사래.
- motion: 진우 → 돌아앉는 봉구.
- dialogue_ref: ① 진우: "아저씨, 그날 밤에 혹시—" / KM: ជីនូ៖ "ពូ… យប់នោះ ក្រែងពូ—" ② 봉구: "허허, 식기 전에 마셔, 젊은 양반." / KM: ប៉ុងគូ៖ "ហឹៗ ផឹកសិនទៅ ក្មួយ មុនវាត្រជាក់។"
- art_space: **위쪽 1/3 = 밤하늘**(① 왼쪽 진우 위, ② 오른쪽 창 위)
- attach: `JINU28_expressions`, `BONGGU_sheet`
- note: 봉구가 그 밤 무엇을 봤는지 암시하는 표정·조명 0(W7).

--- SCENE BREAK --- (S10 → S11a · 8/3 밤, 같은 경비실 · 불 꺼짐)

### panel_043
- scene_id: S11a / location: LOC_BACK_ALLEY · BOOTH-EMPTY / light: L-BOOTH-OFF
- panel_style: present (REG-PRESENT)
- beat: 빈 경비실, 식은 커피 — "내일 밤"이 왔다 (긴장 7) · L02
- size: large · height: tall · gutter_after: normal
- camera: eye-level, close-up, 창 안을 들여다보며 (040과 같은 창·같은 창턱 높이)
- composition: **040과 매치(§1-2).** 열린 창 안: **빈 의자**, 혼자 도는 작은 선풍기, 꺼진 라디오, 벽에 **빈 못**(모자 없음). 창턱 오른쪽 아래 모서리(040 컵과 같은 자리)에 **김이 오르지 않는 슬리브 컵 하나**. 창턱을 짚은 진우의 손(흰 셔츠 걷은 소매, 화면 왼쪽 아래). 불 꺼진 실내, 비탈 아래 가로등의 희미한 흰빛과 푸르스름한 거리빛만.
- characters: 진우28 손 `JINU28_NIGHT`
- props: PROP_CUP_SLEEVE(식음) · 선풍기 · 라디오 · 빈 못
- emotion/acting: 정적.
- motion: 진우 손 → 빈 의자 → 식은 컵.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`
- note: 노란빛 0. 사람 0. 김 0.

--- SCENE BREAK --- (S11a → S11b · 같은 밤, 비탈 맨 위에서 내려다봄)

### panel_044
- scene_id: S11b / location: LOC_BACK_ALLEY · TOP-LOOK-DOWN / light: L-ALLEY-TOP-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 「…아저씨.」 — 비탈 아래의 붉고 푸른 빛 (긴장 7)
- size: large · height: tall · gutter_after: **tight (→ 달림)**
- camera: high-angle over-the-shoulder, 비탈 맨 위에서 아래로
- composition: 앞쪽 오른편 가장자리에 진우의 어깨·옆머리(흰 셔츠). 그 너머로 아래로 떨어지는 좁은 비탈, 얽힌 전깃줄, 낮은 지붕들. **저 아래 굽이에 흰 가로등 원, 굽이 쪽 담벼락에 붉고 푸른 빛이 약하게 번갈아** — 굽이 자체는 담에 가려 경찰차·사람 0. 맨 아래 멀리 시장 모퉁이 느티의 어두운 윤곽. **위쪽 1/4 = 전깃줄 위 어두운 밤하늘.**
- characters: 진우28 `JINU28_NIGHT` (어깨·옆머리)
- props: —
- emotion/acting: 알아챔, 굳는 어깨.
- motion: 진우 어깨 → 아래 굽이의 빛.
- dialogue_ref: 진우 (속말): "…아저씨." / KM: ជីនូ (គិត)៖ "…ពូ។"
- art_space: **위쪽 1/4 = 밤하늘**
- attach: `JINU28_turnaround`
- note: 경광등·경찰차·사이렌 형태 0, 빛 번짐 0(벽 반사만). beatsheet F1 — "비탈 위에서 내려다보는 진우의 시선"은 이 컷.

### panel_045
- scene_id: S11b / location: LOC_BACK_ALLEY · MID-SLOPE-RUN / light: L-ALLEY-TOP-NIGHT (+ 앞 담에 더 강한 붉고 푸른 반사, 머리 위 전깃줄)
- panel_style: present (REG-PRESENT)
- beat: 달려 내려가는 등 (긴장 8)
- size: medium · height: normal · gutter_after: **wide (→ 기억 컷)**
- camera: 뒤에서 따라가는 medium, 기울어진 수평(dutch)
- composition: 비탈을 달려 내려가는 진우의 등(화면 가운데, 흰 셔츠, 걷은 소매, 팔이 흔들림). 머리 위 흔들리는 전깃줄. 아래로 굽이의 흰 가로등 원과 담에 번지는 붉고 푸른 빛(굽이 안쪽은 아직 담에 가림). 수평이 기운다.
- characters: 진우28 `JINU28_NIGHT` (뒷모습)
- props: —
- emotion/acting: 다급함.
- motion: 위 → 아래(굽이로).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_turnaround`
- note: 앵커 A 각도 아님(위에서 아래로). 모션 블러 약하게만, 속도선 0.

--- SCENE BREAK --- (S11b → S12m · 기억 컷: 앵커 A 원본, 첫 삶 그 밤 — EP01 panel_052 그대로)

### panel_046
- scene_id: S12m / location: LOC_BACK_ALLEY 굽이 — **앵커 A** / light: L-MEM-ANCHOR (+ 붉은·푸른 경광 반사)
- panel_style: memory (REG-MEMORY)
- beat: 앵커 A 원본 — 무고한 사람이 잡힌 자리 (긴장 8) · **V2/V3 ◎** · 판정 BB
- size: large · height: tall · gutter_after: **tight (047 직전 간격 0 — 같은 폭, beatsheet/style-bible E2-5)**
- camera: **비탈 아래쪽에서 위를 향한 약간 low-angle, 객관 시점(고정)**
- composition: **world §6-1 앵커 A 고정:** 화면 **왼쪽 위 = 굽은 팔 흰 가로등**(찌그러진 갓), **오른쪽 위 = 주황 테 볼록 반사경**(안에 무릎 꿇은 사람이 작게 비침 — V8), 가운데 = 무릎 꿇은 덕배의 등, **뒤로 돌린 손목에 은색 수갑이 닫히는 순간**(경찰은 짙은 소매와 손만), 앞쪽 땅 왼쪽 가운데 = **흰 배달 헬멧(왼쪽 긁힘)**, 뒤쪽 비탈 위 가운데 = 타워 뒷문 불빛(작게), **왼쪽 가장자리 = 쓰러진 빨간 스쿠터 + 무지 흰 배달 상자**. 붉은·푸른 경광 반사가 벽에 약하게(경찰차 0). **오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘.** 청회색 탈색, 가장자리 흐림.
- characters: 덕배 `DEOKBAE_DELIVERY` · 경찰(소매·손만)
- props: PROP_HANDCUFFS · PROP_HELMET · VEH_SCOOTER
- emotion/acting: 체념한 등, 고개 숙임.
- motion: 가로등 → 덕배 → 수갑.
- dialogue_ref: 무대사 (EP01 052의 속말은 반복하지 않는다)
- art_space: **오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘**(가로등·반사경·헬멧·스쿠터·덕배를 피한 유일한 빈 면) — **무대사지만 비운다**(앵커 A 구도의 일부, 말풍선 0)
- attach: `DEOKBAE_sheet` + **EP01 `05_panels/ep01/panel_052.png`(그 이미지가 생긴 뒤)**
- note: **camera·composition·art_space 줄은 EP01 panel_052를 글자 그대로 옮겼다**(style-bible E2-4). prompt-smith는 EP01 `ep01_prompts.md` panel_052 prompt 문자열을 한 글자도 바꾸지 않고 복사하고, 052 이미지를 첨부할 때만 맨 앞에 `Recreate the attached panel image as exactly as possible: same camera, same framing, same positions, same light.`를 더한다. EP01 052가 아직 없으면 핸드오프 카드에 "EP01 panel_052를 먼저 만들 것" 표시. 경찰 얼굴·경찰차·휘장 0. 스쿠터 상자·헬멧 글자 0. 설명·캡션·화살표 0.

--- SCENE BREAK --- (S12m → S12 · 현재, 같은 굽이 같은 앵글 · 8/3 밤 · 레지스터만 바뀜, 간격 0)

### panel_047
- scene_id: S12 / location: LOC_BACK_ALLEY 굽이 — **앵커 A 반복** / light: L-ANCHOR-PRESENT
- panel_style: present (REG-PRESENT)
- beat: **반전** — 같은 가로등 아래, 봉구 (긴장 9) · **V1·V3·V4·V8 · L29●** · EP01 P28 당직 위치 ◎ · L16 ◎
- size: large · height: tall · gutter_after: wide
- camera: **046과 같은 카메라: 비탈 아래쪽에서 위를 향한 약간 low-angle, 객관 시점(고정)**
- composition: **046과 같은 프레이밍·같은 광원 배치(style-bible E2-5 FRAME-ANCHOR-A-PRESENT):** 화면 **왼쪽 위 = 굽은 팔 흰 가로등**(찌그러진 갓), **오른쪽 위 = 주황 테 볼록 반사경**(안에 무릎 꿇은 사람이 작게 비침 — V8), 가운데 = 무릎 꿇은 **봉구의 둥글고 낮은 등**(남색 반팔 근무복, **모자 없는 맨머리**, 목의 흰 수건, 고개 숙임), **뒤로 돌린 손목에 은색 수갑이 닫히는 순간**(경찰은 짙은 소매와 손만), 앞쪽 땅 왼쪽 가운데(헬멧 자리) = **뒤집힌 남색 챙 모자, 챙이 카메라 쪽**, 뒤쪽 비탈 위 가운데 = 타워 뒷문 불빛(작게), **왼쪽 가장자리(스쿠터 자리) = 옆으로 누운 검은 손전등, 아직 켜져 가는 흰 빛줄기가 아스팔트를 따라 비탈 위쪽(화면 안쪽)으로 누움**. 붉은·푸른 경광 반사가 벽에 약하게(경찰차 0). **오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘.** 현재 레지스터: 정상 색·선명, 탈색·가장자리 흐림 0. **진우는 이 프레임에 없다.**
- characters: 봉구 `BONGGU_ARRESTED`(모자 없음, 수건 목에) · 경찰(소매·손만)
- props: PROP_HANDCUFFS · PROP_GUARD_CAP(땅, 뒤집힘) · PROP_FLASHLIGHT(LIT-ON-GROUND)
- emotion/acting: 고개 숙인 등, 이해하지 못한 몸.
- motion: 가로등 → 봉구 → 수갑 (046과 같은 시선 경로).
- dialogue_ref: 무대사
- art_space: **오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘** — **무대사지만 비운다**(046과 같은 자리; 손전등 빛줄기·수건·경찰 손 침범 금지)
- attach: `BONGGU_sheet` + **EP01 `05_panels/ep01/panel_052.png`(생긴 뒤)** — EP02 `panel_046.png`가 먼저 있으면 그것으로 대체 가능(style-bible E2-5)
- note: 046→047 **같은 폭, gap 0**, 캡션·화살표·전환 효과 0(V7: 비현실은 오직 "똑같다"는 것). 프롬프트 끝 `No other person in the frame; the cap is on the ground, not on his head.` 필수. REGEN 사유: 진우가 보임 · 봉구 머리에 모자 · 헬멧/스쿠터가 남음 · 앵글/가로등·반사경 위치가 046과 다름 · 오른쪽 아래 1/4이 채워짐 · 빛줄기가 광채/플레어 · 탈색·흐림.

### panel_048
- scene_id: S12 / location: LOC_BACK_ALLEY 굽이 (클로즈업) / light: L-ANCHOR-PRESENT
- panel_style: present (REG-PRESENT)
- beat: 닫히는 수갑, 떨어진 수건 (긴장 9)
- size: medium · height: normal · gutter_after: tight
- camera: 약간 위에서, close-up 손목 (앵커 A 각도 아님)
- composition: 프레임 가운데 위쪽: 등 뒤로 모인 **두툼하고 짧은 햇볕에 탄 손목에 닫히는 은색 수갑**(남색 반팔 소매 끝), 짙은 소매의 경찰 손이 수갑을 잠근다(손만). 프레임 아래쪽: 목에서 미끄러진 **흰 수건이 아스팔트 위에 구겨져** 있다. 붉고 푸른 빛이 손목 위에 번갈아.
- characters: 봉구 손목 `BONGGU_ARRESTED`(수건 없음) · 경찰 손
- props: PROP_HANDCUFFS · PROP_TOWEL_GROUND
- emotion/acting: 차가운 금속.
- motion: 수갑 → 떨어진 수건.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `BONGGU_sheet`
- note: 손목 상처·붉은 자국 0(15+). 제압 동작 0.

### panel_049
- scene_id: S12 / location: LOC_BACK_ALLEY 굽이 / light: L-ANCHOR-PRESENT + 얼굴의 붉고 푸른 빛
- panel_style: present (REG-PRESENT)
- beat: 「…허허. 이게, 무슨…」 — 처음으로 사라진 웃음 (긴장 9)
- size: large · height: tall · gutter_after: normal
- camera: eye-level(무릎 꿇은 높이), close-up, 옆얼굴(화면 왼쪽을 향함)
- composition: 봉구의 얼굴(화면 오른쪽 가운데), **모자 없는 정수리 벗어진 반백 머리**, 처진 눈꼬리가 넓어진 채 길을 잃은 눈, **웃으려다 무너지는 입 — 금니는 보이지 않는다.** 붉고 푸른 빛이 얼굴에 번갈아. 배경 흐린 담. **위쪽 왼편 1/3 = 흐린 담·밤 빈 면.**
- characters: 봉구 `BONGGU_ARRESTED` (모자 없음)
- props: —
- emotion/acting: 무고한 사람의 당혹(울음·비명 0).
- motion: —
- dialogue_ref: 봉구: "…허허. 이게, 무슨…" / KM: ប៉ុងគូ៖ "…ហឹៗ… នេះ… រឿងអីហ្នឹង…"
- art_space: **위쪽 왼편 1/3 = 흐린 담·밤**
- attach: `BONGGU_sheet`
- note: `bare-headed` + `the cap is on the ground, not on his head` 필수. 얼굴 상처·눈물 0.

### panel_050
- scene_id: S12 / location: LOC_BACK_ALLEY · MIRROR-CLOSE (굽이 반사경) / light: L-ANCHOR-PRESENT
- panel_style: present (REG-PRESENT)
- beat: 반사경 속 두 사람 — 구한 사람과 대신 받는 사람 (긴장 8) · V8
- size: medium · height: normal · gutter_after: tight
- camera: 반사경 extreme close-up (반사경이 프레임 대부분)
- composition: 프레임 대부분을 채운 **주황 테 둥근 볼록 반사경**: 휘어진 유리 안에 굽어진 골목, **가운데 무릎 꿇은 작은 사람**(남색 등), **반사경 위쪽 가장자리 근처, 비탈 위쪽 담 모퉁이에 서 있는 더 작은 흰 셔츠 실루엣 하나**(진우). 반사경 유리에 붉고 푸른 반사. 반사경 밖 네 귀퉁이는 어두운 밤과 전봇대 일부.
- characters: (반사경 안) 봉구 · 진우28 실루엣 (둘 다 아주 작게)
- props: —
- emotion/acting: 한 거울 안의 두 사람.
- motion: 가운데 작은 사람 → 위쪽 가장자리 실루엣.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: 없음
- note: 반사경에 글자 0. 두 번째 실루엣이 Flow에서 안 나오면 1회 재시도 후 플래그(PD2-F6).

### panel_051
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-CORNER (굽이 바로 위쪽 낮은 담 모퉁이) / light: L-ANCHOR-PRESENT + 얼굴의 붉고 푸른 빛
- panel_style: present (REG-PRESENT)
- beat: 얼어붙은 사람 (긴장 9)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium
- composition: 낮은 담 모퉁이에 **반쯤 몸을 숨긴 채 멈춰 선** 진우(화면 오른쪽 가운데, 3/4, **화면 왼쪽 아래(굽이 쪽)를 내려다봄**), 흰 셔츠 걷은 소매, **한 손은 바지 주머니 속**. 붉고 푸른 빛이 왼쪽 아래에서 얼굴에 번갈아. 화면 왼쪽 아래는 담 너머 흐린 굽이(빛만).
- characters: 진우28 `JINU28_NIGHT`
- props: —
- emotion/acting: 숨을 멈춘 몸.
- motion: 진우 → 왼쪽 아래 굽이.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_turnaround`
- note: 앵커 A 각도 아님.

### panel_052
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-CORNER / light: L-ANCHOR-PRESENT + 얼굴의 붉고 푸른 빛
- panel_style: present (REG-PRESENT)
- beat: 진우의 눈 — V6 ① (긴장 9)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, extreme close-up 눈
- composition: **060과 매치(§1-2).** 진우의 한쪽 눈과 눈썹 일부가 프레임 가운데, **깜빡임이 멈춘 눈동자에 붉고 푸른 경광이 작게 비친다.** 그 밖은 어둠.
- characters: 진우28
- props: —
- emotion/acting: 얼어붙은 인지.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `JINU28_expressions`
- note: 쌍꺼풀 금지(홑꺼풀).

### panel_053
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-CORNER / light: L-ANCHOR-PRESENT
- panel_style: present (REG-PRESENT)
- beat: 엄지가 카드를 세게 누른다 — V6 ② (긴장 9) · L27
- size: small · height: short · gutter_after: tight
- camera: eye-level, extreme close-up 손
- composition: **003과 매치(§1-2).** 남색 정장 바지 주머니 입구, 주머니 가장자리로 **깨진 오른쪽 위 모서리의 작은 남색 카드 끝**, 그 모서리를 **세게 눌러 엄지 손톱이 하얘진** 길고 마른 엄지(엄지가 화면 오른쪽 위를 향함, 손 = 프레임 폭의 약 절반). 흰 셔츠 소매 끝. 붉고 푸른 빛이 손등에 번갈아.
- characters: 진우28 손
- props: PROP_CARD_REAL (모서리만)
- emotion/acting: 힘이 들어간 손가락.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `PROPS_keyprops`
- note: 긁힘이 안 보여도 ACCEPT.

### panel_054
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-CORNER / light: L-ANCHOR-PRESENT + 얼굴의 붉고 푸른 빛
- panel_style: present (REG-PRESENT)
- beat: **반전 정점** 「풀려난 지… 사흘째.」 (긴장 9)
- size: large · height: tall · gutter_after: **tight (→ 클리프, 밸브 0)**
- camera: eye-level, medium close-up
- composition: 진우의 얼굴(화면 오른쪽 가운데, 3/4, 왼쪽 아래를 향함), **얼굴 반은 붉고 푸른 빛, 반은 어둠.** 배경 왼쪽 아래 흐림 속: 경찰 손이 봉구(모자 없는 둥근 몸)를 일으켜 세우는 실루엣. **위쪽 왼편 1/3 = 어두운 밤·담 위 빈 면.**
- characters: 진우28 `JINU28_NIGHT` · 봉구 `BONGGU_ARRESTED`(배경 흐림) · 경찰 손(배경)
- props: —
- emotion/acting: 날 수를 세는 사람(규칙은 말하지 않는다).
- motion: 진우 → 배경 봉구.
- dialogue_ref: 진우 (속말): "풀려난 지… 사흘째." / KM: ជីនូ (គិត)៖ "ទើបតែដោះលែងបាន… បីថ្ងៃ។"
- art_space: **위쪽 왼편 1/3 = 어두운 밤·담 위**
- attach: `JINU28_expressions`
- note: 봉구 배경 실루엣에 모자 0.

### panel_055
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-CORNER / light: L-ANCHOR-PRESENT
- panel_style: present (REG-PRESENT)
- beat: 진동하는 폰 — 두 번째 충격의 문 (긴장 9)
- size: small · height: short · gutter_after: tight
- camera: eye-level, close-up 손
- composition: **025와 매치(§1-2).** 진우의 반대쪽 손(카드 쥔 손 반대) 안에서 **진동하는 검은 무지 폰**(프레임 폭의 약 1/3, 빈 빛 화면이 위로 약간 기움, 진동은 아주 약한 흐림). **폰 유리에 붉고 푸른 반사.** 흰 셔츠 소매 끝. **폰 왼쪽 옆 어두운 빈 면(효과음 자리).**
- characters: 진우28 손
- props: PROP_PHONE
- emotion/acting: 손의 굳음.
- motion: —
- dialogue_ref: [효과음] 부르르… (폰 진동) / KM 효과음: វឺត… វឺត…
- art_space: **폰 왼쪽 옆 어두운 빈 면**(효과음)
- attach: 없음
- note: 발신자·아이콘·숫자 0. 속도선·물결 기호 0.

### panel_056
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-CORNER / light: L-ANCHOR-PRESENT
- panel_style: present (REG-PRESENT)
- beat: 「진우야.」 — 웃음 없는 목소리 (긴장 9)
- size: medium · height: normal · gutter_after: tight
- camera: 약간 위에서(비탈 위쪽에서), 전경 medium close-up + 배경 흐림
- composition: 전경 화면 가운데~왼쪽: **굽이에 등을 돌린 채** 폰을 오른쪽 귀에 대는 진우(정면에 가까운 3/4, 폰은 화면 오른쪽). 그의 **등 뒤 아래쪽 흐림 속**: 일으켜 세워진 봉구(모자 없음)가 경찰 손에 이끌려 굽이 아래로 간다(작은 실루엣, 붉고 푸른 빛). **위쪽 오른편 1/3 = 폰 쪽 위 어두운 담·밤 빈 면.**
- characters: 진우28 `JINU28_NIGHT` · 봉구 `BONGGU_ARRESTED`(배경 흐림) · 경찰 손(배경)
- props: PROP_PHONE
- emotion/acting: 전화를 받는 굳은 얼굴.
- motion: 폰 → 등 뒤 아래 봉구.
- dialogue_ref: 태호 (전화): "진우야." / KM: តេហូ៖ "អូនជីនូ។"
- art_space: **위쪽 오른편 1/3 = 폰 쪽 위 어두운 담·밤**(꼬리 → 폰)
- attach: `JINU28_expressions`
- note: —

--- SCENE BREAK --- (S12 → S13 · 같은 밤, 사무 층 파트너 유리방 · 컷백)

### panel_057
- scene_id: S13 / location: LOC_FIRM_FLOOR · 유리방 밤 / light: L-FLOOR-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 「위에서 확인했대.」 — 웃음을 뺀 사람 (긴장 9) · K-15 · L17●·L06◐
- size: large · height: tall · gutter_after: tight
- camera: eye-level, medium (유리방 안)
- composition: 불 켜진 유리방 안, **어두운 창가에 선 태호**(화면 오른쪽 가운데, 3/4, 왼쪽을 향함), 폰을 왼쪽 귀에. **웃음 없는 얼굴**(작고 차가운 눈, 다문 입). 손목의 커프스 강조 0. 화면 왼쪽: 어두운 유리에 비친 빈 사무 층(꺼진 책상 줄의 푸른 어둠). 낮은 소파 일부. **위쪽 왼편 1/3 = 어두운 창 위 빈 면.** **호두나무 문·복도 끝·고문 방 쪽은 프레임 밖.**
- characters: 태호37 `TAEHO37_OFFICE`
- props: PROP_PHONE · PROP_CUFFLINK(작게)
- emotion/acting: 차갑게 — 웃음을 뺀 것만으로 다른 사람.
- motion: —
- dialogue_ref: 태호: "위에서 확인했대." / KM: តេហូ៖ "ខាងលើ… ឆែកមើលហើយ។"
- art_space: **위쪽 왼편 1/3 = 어두운 창 위**(꼬리 → 태호 또는 폰 — letterer 판단, 판정 BD D2-F5)
- attach: `TAEHO37_expressions`
- note: **악역 조명(아래서 비춤) 0** — 평범한 유리방 불빛. 🔒 「위」의 정체 0(고문·지팡이·호두나무 문 0). TAEHO44 카드 첨부 금지.

### panel_058
- scene_id: S13 / location: LOC_FIRM_FLOOR · 유리방 밤 / light: L-FLOOR-NIGHT
- panel_style: present (REG-PRESENT)
- beat: 말과 말 사이의 침묵 (긴장 9)
- size: small · height: short · gutter_after: **normal (→ 굽이로 컷백)**
- camera: eye-level, extreme close-up 눈
- composition: 태호의 눈 클로즈업(눈 둘, 쌍꺼풀, 눈가 주름이 펴짐) — **웃음기 0, 작고 차가운 눈.** 유리방 불빛이 한쪽에, 나머지 어둠.
- characters: 태호37
- props: —
- emotion/acting: 침묵.
- motion: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: `TAEHO37_expressions`
- note: 악의적 찡그림 금지(무표정의 차가움).

--- SCENE BREAK --- (S13 → S12 · 굽이로 돌아옴, 같은 밤)

### panel_059
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-HIGH-DOWN / light: L-ANCHOR-PRESENT
- panel_style: present (REG-PRESENT)
- beat: 사람이 빠져나간 자리 — 모자, 수건, 빛줄기 (긴장 9) · V4 ◐
- size: large · height: tall · gutter_after: tight
- camera: **high-angle close view** 아스팔트로 (앵커 A 각도 아님)
- composition: 빈 흰 가로등 원 안 아스팔트 위: **뒤집힌 남색 챙 모자**(프레임 가운데), 옆에 **구겨진 흰 수건**, 프레임 아래 가장자리에서 들어와 누운 **켜진 손전등의 가는 흰 빛줄기**. 가장자리 바닥에 붉고 푸른 반사. (선택) 화면 위쪽 가장자리에서 **모자를 집어 들려는 경찰의 짙은 소매 손**(얼굴 0). 사람의 몸 0.
- characters: 없음 (선택: 경찰 손)
- props: PROP_GUARD_CAP · PROP_TOWEL_GROUND · PROP_FLASHLIGHT(빛줄기)
- emotion/acting: 빈자리.
- motion: 모자 → 수건 → 빛줄기.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- attach: 없음
- note: 경찰 손은 선택(art-director E2-F8) — 넣는다면 손·소매만, 휘장 0. 빛 번짐 0.

### panel_060
- scene_id: S12 / location: LOC_BACK_ALLEY · BEND-CORNER / light: L-ANCHOR-PRESENT + 눈의 붉고 푸른 빛
- panel_style: present (REG-PRESENT)
- beat: **클리프행어** 「…빈 카드라더라.」 (긴장 9) · L17● · 클리프 D
- size: full-bleed · height: tall · gutter_after: — (회차 끝, 엔딩 카드 없음)
- camera: eye-level, extreme close-up 눈 — **052와 같은 크기**
- composition: 진우의 한쪽 눈과 눈썹 일부가 프레임 가운데, **붉고 푸른 빛이 눈동자에 번갈아**, 멈춘 눈. **프레임 왼쪽 가장자리에 귀에 댄 검은 폰의 가장자리**(세로로 잘림). 그 밖엔 아무것도 없다. **위쪽 1/3 = 어둠**(폰 가장자리 위쪽).
- characters: 진우28
- props: PROP_PHONE(가장자리)
- emotion/acting: 얼어붙은 인지, 최고 긴장.
- motion: —
- dialogue_ref: 태호 (전화): "…빈 카드라더라." / KM: តេហូ៖ "…គេថា កាតនោះ ទទេស្អាត។"
- art_space: **위쪽 1/3 = 어둠**(꼬리 → 왼쪽 가장자리 폰)
- attach: `JINU28_expressions`
- note: P61 없음. 엔딩 카드 없음. 수아·고문 컷 추가 금지.

---

## 5. 점검 · 플래그

### 5-1. 품질 체크
- [x] 패널 60, panel_001–060 연속, 대본 P01–P60과 1:1. P61 없음.
- [x] 모든 패널: scene_id / location(LOC_* + style-bible E2-2 변주) / light code(E2-1) / panel_style / size / height / gutter / camera / composition / characters+outfit / props / emotion / art_space / attach.
- [x] 같은 scene_id = 같은 장소·시간·빛. 삽입 컷 S12m(046), S13(057–058) 뒤 S12로 복귀(059–060).
- [x] 글자 패널 44 = 대사 41패널(대사 50줄) + `env`/효과음 025 + 효과음 055 — 전부 `dialogue_ref`(KO + KM, 대본 그대로) + `art_space`. 무대사 16 `art_space: 없음(silent)`(046·047은 구도상 오른쪽 아래 1/4 비움). 말풍선 3개 이상 패널 0.
- [x] 말풍선 2개 패널: 002·008·016·023·026·038·040·042 (+ 025 env+효과음).
- [x] 🔒: 고문·지팡이·호두나무 문 0 · 수아 평범한 딸(029–032·036) · W12(034) · L11 전화기 0(011·025·027·037·039) · L05 펜촉 0(005·007·039) · 규칙 설명 0.
- [x] 앵커 A 각도 = 046·047만. 047 진우 0, 046→047 gap 0. 15+(046–049·054·056·059).
- [x] 긴장: ≤3 = 030·031 2연속(한도 2), 032 = 4 복귀. 반전(045–054)과 클리프(055–060) 사이 밸브 0(054→055 tight). 마지막 060 = 9.
- [x] 레지스터: present / memory(046). 금빛 = 028만.
- [x] 새 장소·새 얼굴 인물·새 레퍼런스 카드 0. 이미지 글자 0.

### 5-2. 특별 주의 패널 (렌더·검증에서 재그림 사유)
| 패널 | 주의 |
|---|---|
| 001 | 유리문 안 사람 실루엣(수아) → 재그림 |
| 002·009·045·059 | 앵커 A 각도(비탈 아래 로우 앵글로 굽이)로 그려지면 재그림 |
| 004·040·041·037 | 불길한/서늘한 조명 → 재그림(재독 비트) |
| 005–008 | 금빛 사선·먼지 → 재그림 |
| 010 | CCTV 불빛·로고, 경차 번호판 글자 → 재그림 |
| 012 | 가볍게 얹은 손 / 커프스가 크게 도드라짐(FRAME-CUFF처럼) → 재그림 |
| 019 | 기 대표 과장된 놀람(두려움이 아니라) → 재그림 |
| 025·027 | 오후빛이 금빛으로 읽힘 → 재그림 |
| 029·030·032·036 | 수아가 진우를 봄 / 리본핀 또렷 / 의미 있는 조명 → 재그림 |
| 034 | 진우 얼굴·반응 / 033과 다른 특별한 조명 → 재그림 |
| 037 | 태호 컵이 슬리브 컵처럼 보임 → 재그림 |
| 005·007·039 | 펜촉(특히 휜 펜촉) 노출 → 재그림 |
| 046 | EP01 052와 위치(가로등·반사경·덕배·헬멧·스쿠터·타워 불빛·빈 오른쪽 아래 1/4) 다름, 청회 기억 레지스터 아님 → 재그림 |
| 047 | 046과 앵글·광원·빈 면 다름 / 진우 보임 / 모자가 머리 위 / 헬멧·스쿠터 남음 / 빛줄기 광채·빈 면 침범 / 탈색·흐림 → 재그림 |
| 048·049·054·056 | 봉구 머리에 모자, 상처·눈물·제압 → 재그림 |
| 050 | 두 번째(진우) 실루엣 없음 → 1회 재시도 후 PD2-F6 |
| 057·058 | 웃음 / 아래서 비추는 악역 조명 / 호두나무 문 / 44세처럼 보이는 얼굴 → 재그림 |
| 모든 패널 | 그림 속 글자·말풍선·효과음 그림 → 재그림 |

### 5-3. Flags for the leader

| # | 내용 | 요청 |
|---|---|---|
| PD2-F1 | **art-director EP02 additions에 맞췄다**(작성 도중 나옴): 빛 코드 = style-bible E2-1(`L-ALLEY-BOTTOM-NIGHT`·`L-VISIT-DAY`·`L-ALLEY-DAY`·`L-FLOOR-AFTERNOON`·`L-FLOOR-LATE`·`L-BUNSIK-EVENING`·`L-BOOTH-OFF`·`L-ALLEY-TOP-NIGHT`·`L-ANCHOR-PRESENT`), 장소 변주 = E2-2, 소품 = E2-3, 의상 = character-sheets E2-1(`JINU28_SUIT_NOON`·`JINU28_SUIT_EVENING`·`DEOKBAE_RELEASED`·`BONGGU_NIGHT_DUTY`·`BONGGU_ARRESTED`), attach = E2-4 표. 비트시트 제안 이름(불 꺼진 BOOTH 변주 등)은 art-director 이름으로 바꿨다 | 확인만. prompt-smith는 style-bible·character-sheets 영문 문장을 복사 |
| PD2-F2 | **046·047 구도 기준 이미지 = EP01 `05_panels/ep01/panel_052.png`** — 아직 없다(EP01 = WAITING_FOR_IMAGES). 046 줄(camera·composition·art_space)은 EP01 052를 글자 그대로 옮겼다(판정 BB, style-bible E2-4). 권장: 사용자가 EP01 052를 먼저 만들고 EP02 046·047에 첨부(047은 EP02 046이 있으면 그것으로 대체 가능). 이미지 없이 그릴 경우 panel-validator는 046 ↔ 047을 나란히 비교 | 리더: 핸드오프 카드에 "EP01 052 먼저" 순서 표시 |
| PD2-F3 | **attach가 art-director E2-4 권장안과 다른 곳:** `PROPS_keyprops`를 003·053(카드) 외에 **007·039(만년필 몸통, 펜촉 가림)·043(슬리브 컵)**에도 붙였다(사용자 지시 "card/pen props"). 단 PROPS 카드엔 휜 펜촉 상태도 있어 Flow가 펜촉을 그릴 위험 → 007·039 프롬프트에 `the nib hidden behind his fingers` 필수, 펜촉이 보이면 PROPS를 빼고 재시도. 047은 카드 우선순위상 `BONGGU_sheet` + 052img(046img) | prompt-smith·panel-validator |
| PD2-F4 | **046·047은 무대사지만 오른쪽 아래 1/4을 비운다**(앵커 A 구도의 일부). letterer는 둘 다 silent(말풍선 0)로 두고 `gap_after` 046 = **0** | letterer |
| PD2-F5 | **봉구 모자:** BONGGU_sheet는 모자를 쓴 모습 → 047–049·054·056에서 Flow가 모자를 다시 씌울 위험(style-bible E2-F3). 외형 문장의 모자 구절을 `bare-headed with no cap`으로 바꾸고 `the cap is on the ground, not on his head` 고정. 수건: 047 목 → 048부터 땅 | prompt-smith·panel-validator |
| PD2-F6 | **050 반사경 속 두 번째 실루엣(진우)**은 Flow에서 사라지기 쉽다. 1회 재시도 후에도 없으면 가운데 무릎 꿇은 사람만으로 ACCEPT 권장(같은 거울에 둘이 담기는 운율은 051의 담 모퉁이 진우와 050→051 연속으로 대체). REGEN 무한 반복 금지 | 리더 결정·panel-validator |
| PD2-F7 | **S5 유리방 배치를 이 회차에 새로 고정**(§1-1: 진우 = 왼쪽 문 앞, 태호 = 오른쪽 책상 모서리, 기 대표 = 가운데 아래 소파). EP01 037–038의 유리방과 같은 방이므로 EP03 이후 유리방 컷도 이 배치를 기준으로 권장 | continuity-manager |
| PD2-F8 | **scene_id가 비트시트 장면 번호와 다른 곳:** 비트시트 S11(043–044)·S12(045–054)를 샷리스트는 S11a(043, 불 꺼진 경비실 창) / S11b(044–045, 맨 위·비탈 중간, L-ALLEY-TOP-NIGHT) / S12m(046) / S12(047–056·059–060)로 나눴다 — 같은 scene_id = 같은 빛 규칙 때문(045는 E2-1에서 L-ALLEY-TOP-NIGHT). 057–058 = S13, 059–060은 S12로 복귀 | letterer·prompt-smith(그룹 분배 시) |
| PD2-F9 | **012 태호의 손**: EP01 036처럼 무겁게 움켜쥐지만 FRAME-CUFF·FRAME-HAND-ON-BACK 문장은 **쓰지 않는다**(카메라 = 뒤 위에서 미디엄, 커프스 작게). 고문의 가벼운 손(L13) 운율과 분리 | prompt-smith |
| PD2-F10 | **057 말풍선 타입:** 태호 본인이 보이는 컷이라 `dialogue`(꼬리 → 태호)가 자연스럽지만, 판정 BD(D2-F5)에 따라 letterer가 phone 타입으로 쳐도 된다. art_space(위쪽 왼편 1/3 어두운 창 위)는 어느 쪽이든 같다 | letterer |
| PD2-F11 | **037 태호 컵 = 무지 흰 테이크아웃 컵(흰 뚜껑, 슬리브 없음)** — 봉구의 손으로 자른 슬리브 컵(L02)과 혼동되면 단서가 흐려진다. 낮엔 커피를 마신다(L03 「밤엔 안 마셔」와 모순 없음) | panel-validator |
| PD2-F12 | **gutter 참고:** xwide = 004(→다음 날)·024(→사흘 뒤)·036(→다음 날 아침)·039(→밤)·042(→다음 날 밤). wide = 008·010·021·027·045·047. **046→047 = 0.** 054→055·055→056·056→057 tight(반전-클리프 한 호흡, 밸브 0) | letterer `gap_after` |
| PD2-F13 | 가장 긴 말풍선 = 013(진우, 약 2줄)·034(덕배)·040 ①(봉구) — 세 패널의 `art_space`를 넓게 잡았다 | letterer |
| PD2-F14 | 새 장소·새 얼굴 인물·새 레퍼런스 카드 0, 폴백 트리거 0, 그림 속 글자 의존 0, 분할 프레임 0, 고문 화면 등장 0, EP01 파일 수정 0 | — |
