# 스타일 바이블 — 「수칙 4번은 거짓말입니다」 (KM ច្បាប់ទី៤ ជាការកុហក)

- 작성: art-director · 기준일 **2026-11-16** · EP01 Phase 4 · **v1**
- **v1.1 · 2026-11-17 · EP02 추가 (덧붙이기만).** v1의 토큰 문장(STYLE_*, LIGHT_*, LOC_*, VIEW_*, PROP_*)은 한 글자도 바꾸지 않았다(EP01 프롬프트가 그대로 쓴다). 새로 붙인 곳에는 **(v1.1 · EP02)** 표시가 있다: §0 · §2-4-1 · §2-6 · §2-7 · §3-2(아래 행) · §3-4 · §4-3 · §5-5 · §6-1-1 · §6-2-1 · §6-3 VIEW_SIDE/VIEW_SHELVES/VIEW_NAPDOOR 활짝 · §6-5 VIEW_FROM_WINDOW/VIEW_ANCHOR_0600 · **§6-6 LOC_L3_LOBBY** · §7-5 · §7-6 · §8-1 · §9 · §10-4 · §11-1 · §12. EP02 입력: `00_input/brief.md`(EP02 절), `03_episode/ep02_script_final.md`(58패널, 최종), `03_episode/ep02_beatsheet.md`(§3-1 재사용 구도 · §3-3 신규 렌더 · §4 무글자 소품 · §6 요청), `02_story/characters.md` v1.1(§4-8 · §4-9), `02_story/world.md`(§5-3 · §9-4 · §10 · §13-3), `04_visual/ep01_shotlist.md` §A-1(VIEW_SIDE) · §D(기억 비네트)
- **v1.2 · 2026-11-18 · EP03 추가 (덧붙이기만).** v1·v1.1의 토큰 문장(STYLE_*, LIGHT_*, LOC_*, VIEW_*, PROP_*)은 한 글자도 바꾸지 않았다(EP01·EP02 프롬프트가 그대로 쓴다). 새로 붙인 곳에는 **(v1.2 · EP03)** 표시가 있다: §0 · §2-2-1 · §2-3-1 · §2-4-2 · §2-8 · §3-2(아래 행) · §3-5 · §4-4 · §5-6 · §6-1-2 · §6-2-2 · §6-3 VIEW_DRAWERS/VIEW_SLOT/VIEW_GRILLE/VIEW_GLASS_CLOSE · §6-5 VIEW_FROM_WINDOW_FAR/VIEW_FROM_WINDOW_ACROSS/VIEW_WINDOW_FLOOR · **§6-6-1 L3 직원석·위층 계단** · §7-7 · §7-8 · §8-2 · §9 · §10-5 · §11-2 · §12. EP03 입력: `00_input/brief.md`(EP03 절), `03_episode/ep03_script_final.md`(60패널, 최종 · 검수 노트 E-1 전입신고서 연두 · E-3), `03_episode/ep03_beatsheet.md`(§2 ⊘ 소품 열 · §3-1 재사용 · §3-3 신규 렌더 · §3-4 시각 문법 · §6), `02_story/characters.md` v1.2(§2-7 · §2-8 · §4-10 · §4-11 · §4-12), `02_story/world.md`(§5-3 · §9 · §13-3), `04_visual/ep02_shotlist.md` §A · panel_053–058
- **Flow aspect 기본값: 3:4** — 패널마다 `aspect:`를 적는다. 크기 등급(3:4 / 9:16 / 1:1 / 16:9)과 배정 규칙은 §4.
- 입력: `03_episode/ep01_script_final.md`(64패널, 최종), `03_episode/ep01_beatsheet.md`(§3 고정 구도 COMP-*, ⊘ 무글자 소품 열), `02_story/characters.md` §4(외형 토큰 v1), `02_story/world.md` §9(장소)·§10(시각 톤), `02_story/twist-plan.md` §2-3·§2-4·§2-8·§5·§7-3, `02_story/tension-curve.md` §9(간격·속도), `01_research/trend-brief.md` §3·D7
- 짝 문서: `04_visual/character-sheets.md` (인물 토큰 + 레퍼런스 시트 사양)
- 다음 독자: ref-sheet-artist → panel-director → letterer → prompt-smith → (사용자의 Flow 작업) → panel-validator. 팀 메시징이 없는 실행이라 전달 사항은 §11에 모았다.
- 이 프로젝트의 두 모드 (CLAUDE.md):
  - **Flow-by-hand.** 이미지는 전부 사용자가 Google Flow에서 손으로 만든다. Flow는 붙여 넣은 문장과 첨부 이미지만 본다. 그래서 이 문서의 영문 토큰은 **그대로 붙여 넣을 수 있는 완결된 영어**다. prompt-smith는 토큰 **이름이 아니라 내용**을 프롬프트에 펼친다(토큰 이름·파일 경로·"스타일 바이블" 같은 말은 프롬프트에 쓰지 않는다).
  - **Khmer edition.** 그림에는 글자가 하나도 없다. 말풍선과 크메르어는 뷰어(`km_tool.py build`)가 그린다. 그림은 말풍선 자리(`art_space`)를 비워 둘 뿐이다(§8).
- 표기: `코드` 안의 영문 = 프롬프트에 그대로 들어가는 문장. 좌우는 **인물·사물 자신의 좌우**다(서하의 RIGHT eye는 정면 그림에서 화면 왼쪽에 있다). 화면 기준일 때는 "화면 왼쪽(frame left)"처럼 따로 쓴다.

---

## 0. 한눈에 보기

| 항목 | 결정 |
|---|---|
| 화풍 한 줄 | 한국 플랫폼 웹툰식 클린 먹선 + 플랫 셀 셰이딩, 반사실 비율. 저채도 관공서 녹회색 공간, 차가운 형광등, 따뜻한 빛은 스탠드 하나. 암시형 오피스 호러(공포 7 : 블랙코미디 3, 15세) |
| 패널 비율 | 기본 3:4 · 느린 컷 9:16 · 클로즈업·빠른 컷 1:1 · 낮은 띠 16:9(선택) (§4) |
| 장소 토큰 | `LOC_L1_DUTYROOM` · `LOC_L2_STAIRWELL` · `LOC_L2_CORRIDOR` (§6) |
| 예약색 | 빨강 `#C8102E`은 세 범주뿐: 4번 조각의 테이프 · 인주·직인 자국 · 클리프의 테이프 롤 (§2-4) |
| 글자 | 어떤 이미지에도 없다. 글이 적힐 물건은 빈 면으로 그린다 (§10-1) |
| 말풍선 | 뷰어가 그린다. 그림은 `art_space`만 조용한 배경으로 비운다 (§8) |
| 레퍼런스 | 필수 12장(인물 4명 × 2 + 노미란 의상 B + 손 + 소품 2) + 장소 플레이트 4장 권장 → `character-sheets.md` §7 |
| **EP02 장소 (v1.1)** | 신규 `LOC_L3_LOBBY`(1층 본관 로비: 새벽 `LIGHT_L3_DAWN` / 09:00 `LIGHT_L3_DAY`) + VIEW 4개(INWARD · OUTWARD · CHAIRS · **DAYWINDOW** 낮 창구) (§6-6). L1에 `VIEW_SIDE`(EP01 shotlist §A-1 원문) · `VIEW_SHELVES` · 숙직실 문 활짝 변주, L2에 `VIEW_FROM_WINDOW` · `VIEW_ANCHOR_0600` (§6-3 · §6-5) |
| **EP02 소품 (v1.1)** | 인수인계서 A(완전한 빈 면) · B(위 줄 = 인계자 줄에 글자 없는 붉은 직인 원) · 접힌 서류 모서리 · 흰 덮개 띠 · L3 벽시계(숫자 없음) · 시계 바늘 문장 6개(04:40–09:00) · 숙직실 벽 내선 수화기 (§7-5) |
| **EP02 빨강 (v1.1)** | 같은 세 범주뿐. 새로 들어오는 것은 ②범주의 서류 B 직인 원 하나(P54–58). 롤은 P25에서 주머니로 사라진다. 노미란의 몸·의상·낮 책상에 빨강 0 (§2-4-1) |
| **EP02 레퍼런스 (v1.1)** | 필수 3장(`JAEWOO_turnaround` · `JAEWOO_expressions` · `PROP_HANDOVER_pair`) + L3 플레이트 2장 권장. 노미란 새벽 상태·서하 밤샘은 **카드 없음**(기존 카드 + 문장) → `character-sheets.md` §10-6 |
| **EP03 장소 (v1.2)** | 새 LOC 없음. L3에 **직원석 줄**(노미란 낮 책상 = 시계 아래 · 서하 낮 책상 = 그녀의 LEFT 옆, 아주 낮은 간유리 칸막이)과 홀 안쪽 끝의 **넓은 석재 계단**을 더하고 VIEW 3개(ACROSS · STAFFSIDE · STAIRS). L1에 VIEW 4개(DRAWERS · SLOT · GRILLE · GLASS_CLOSE), L2에 VIEW 3개(FROM_WINDOW_FAR · FROM_WINDOW_ACROSS · WINDOW_FLOOR) (§6-6-1 · §6-3 · §6-5) |
| **EP03 소품 (v1.2)** | 서류 B 뒷면(테두리 없는 흰 면 + 맨 아래 인쇄된 빈 칸 하나) · 서명 순간(잉크 점 하나) · 펼친 명부(맨 앞 서류 B) · 짙은 남색 결재판 · 노미란 낮 책상 세트 + 빨간 롤(배경) · **연두 전입신고서 `#DCE6B0`** · 빈 반려 통지 묶음 · 첫 직인 · **연살구 개명 신청서** · 서랍 · 시계 03:00 / 09:20 (§7-7) |
| **EP03 빨강 (v1.2)** | ③범주가 world §13-3 확장으로 '빨간 비닐테이프(공용 비품)'가 된다: **노미란 낮 책상 위 롤**(P13 · P16, 배경, 아무도 들지 않음, 그녀 손과 팔 길이 이상). 그 밖은 ①②만. 노미란 몸·손·소지품 빨강 0. 재우의 롤은 안 나온다 (§2-4-2) |
| **EP03 조명 (v1.2)** | 새 토큰 `LIGHT_FLICKER_FAR`(P23 — 회차의 유일한 떨림) · `LIGHT_GLASS_GLOW`(P31 · P46). P30 · P45 = `LIGHT_STEADY` + `LIGHT_NOFLICKER`(떨리지 않음이 비트). L3 낮은 `LIGHT_L3_DAY` 하나로 끝까지 (§3-5) |
| **EP03 레퍼런스 (v1.2)** | 필수 2장: `MOVEIN_ref`(그녀가 보이는 컷 12 → 8컷 기준을 넘는다) · `HANDRENAME_ref`. 상태 변주·소품·직원석은 **카드 없음** → `character-sheets.md` §11-6 |

---

## 1. 작화 스타일

- **참조 무드:** 네이버웹툰·카카오웹툰의 공포·스릴러 상위작이 쓰는 주류 디지털 작화. 깨끗한 먹선, 1단 그림자의 셀 셰이딩, 반사실 비율, 읽기 쉬운 화면. 독자가 "평범한 한국 웹툰"으로 받아들이는 화풍 위에 공포를 얹는다(trend-brief §3: 규칙 괴담 × 오피스, 공포는 암시).
- **선화:** 중간 굵기의 고른 검은 먹선. 인물 외곽선은 조금 굵게, 배경 선은 가늘게. 거친 붓선·스케치 선 금지.
- **채색:** 플랫 셀 + 부드러운 그림자 한 단계. 그라데이션은 빛의 원(스탠드)과 어둠의 가장자리에만 쓴다.
- **디테일:** 얼굴·손·소품 클로즈업은 정밀하게. 배경은 믿을 만하지만 복잡하지 않게. 1990년대 관공서 지하의 **지루한 평범함**이 공포의 바탕이다.
- **공포 문법 = 암시.** 괴물·피·몸·과장된 그림자 대신 정적, 빈자리, 물방울, 꺼지는 불, 그림자 하나로 무섭게 한다(world §10-5).
- **블랙코미디 컷**(P8–10, P15, P32–33, P43)도 같은 화풍이다. 표정과 정면 미디엄 구도로만 웃긴다. SD·치비 변형, 만화 기호(땀방울 아이콘, 혈관 표시)는 쓰지 않는다.
- **금지 화풍:** 망가 스크린톤, 서양 코믹 해칭, 유화·수채 질감, 3D 렌더, 포토리얼, 네온 글로, 짙은 필름 그레인, 하이키 파스텔.

**STYLE_GLOBAL** (모든 패널 프롬프트에 한 글자도 바꾸지 않고 넣는다):
```
Korean webtoon style digital illustration, clean confident black ink linework of medium weight, flat cel shading with one soft shadow tone, semi-realistic adult proportions and faces, believable uncluttered backgrounds, muted desaturated colors, quiet uncanny office-horror mood, cinematic composition
```

**STYLE_REF** (레퍼런스 시트·플레이트 전용, character-sheets §7):
```
Korean webtoon style character model sheet: clean confident black ink linework of medium weight, flat cel shading with one soft shadow tone, semi-realistic adult proportions; plain light warm-gray background, soft even studio lighting, no cast shadows, every figure at the same scale and in the identical outfit
```

---

## 2. 색감 · 팔레트

> 프롬프트에는 hex가 아니라 **오른쪽 열의 색 이름**을 쓴다. hex는 검수(panel-validator) 기준값이다.

### 2-1. 공간 팔레트 (world §10-1을 그대로 채택)

| 역할 | hex | 프롬프트 색 이름 |
|---|---|---|
| 기본광 (형광) | `#DDE8E0` | cold green-white fluorescent light |
| 벽 아래 | `#A9C3AE` | pale institutional green |
| 벽 띠 · 계단 난간 | `#3F5E4B` | dark green |
| 벽 위 · 천장 | `#D9D6CC` | dingy off-white |
| 철제 (책상·서가·방화문) | `#7D8A84` / `#8A9096` | gray-green steel / gray steel |
| 바닥 | `#9C9A94` | gray speckled terrazzo |
| 어둠 | `#1C2228` | greenish blue-black darkness |
| **유일한 온기** | `#F2C46B` | warm yellow desk-lamp light |
| 놋쇠 | `#B8963E` | dull brass |
| 오래된 종이 | `#E8DCC0` | yellowed cream |
| 새 종이 | `#FAFAF7` | bright white |
| **예약 빨강** | `#C8102E` | bright red |

### 2-2. 인물 주색 (같은 컷에서 서로 겹치지 않는다 · characters §4-1)

| 인물 | 주색 | 프롬프트 색 이름 | 주의 |
|---|---|---|---|
| 강서하 SEOHA | `#C99A2E` | muted mustard-yellow | 형광등 아래 녹색으로 죽거나 주황·빨강으로 번지면 다시 |
| 노미란 MIRAN | `#1E1F23` / `#4A4D53` | black / charcoal gray (+ gold `#C2A15A`) | 의상 B는 아이보리 `#EEE7D7` + 회색 담요 |
| 선임 SEONIM | `#52637A` | faded slate blue | 남색·청록으로 바뀌면 다시 |
| 구정민 JEONGMIN | `#7E7457` | water-darkened khaki-beige | 마른 베이지로 그리면 다시 |
| 클리프의 손 HAND-CLIFF | `#45474C` + 흰 커프스 | charcoal-gray knit | 슬레이트블루(선임)·아이보리 실크(노미란 B)와 구별 |
| **남재우 JAEWOO (v1.1 · EP02)** | 차콜 `#45474C` · 흰 셔츠 `#F3F2EE` · 스톤 그레이 `#A6A196` (포인트 은 `#BFC3C7`) | charcoal-gray / white / light stone-gray | **유일한 무채색 인물**(characters §0-4). HAND-CLIFF의 주인이라 소매 값이 같다. 머스터드(서하)와 한 컷에 설 때 두 카디건이 섞이면 다시 |

#### 2-2-1. EP03 인물 주색 (v1.2 · EP03)

| 인물 | 주색 | 프롬프트 색 이름 | 주의 |
|---|---|---|---|
| **전입 민원인 MOVEIN** | 회라일락 `#A797B5` · 생성목 크림 `#E3D9C3`(보따리) · 짙은 갈색 `#4C3F35`(바지) · 흰 양말 `#F3F1EC` · 검정 신발 | soft grayish lilac / plain unbleached cream / dark brown / spotless white | 라일락이 분홍·자홍·보라빨강으로 번지거나 회색으로 죽으면 다시(회색이면 재우와 섞인다). 보자기는 무늬 없는 크림 무명 — 빨강·분홍·색동·꽃무늬 금지 |
| **개명의 손 HAND-RENAME** | 짙은 초콜릿 갈색 코듀로이 `#4A3527` · 베이지 반창고 `#D9C4A6` · 보통 웜 베이지 피부 | dark chocolate-brown corduroy / plain beige fabric bandage | 소매뿐. 차콜 니트 + 흰 커프스(재우) · 차콜 정장 + 금시계(노미란) · 라일락 누빔(민원인)과 겹치지 않게 |

- EP03 밤의 같은 컷: 머스터드(서하) · 슬레이트블루(선임) · 회라일락(민원인) · 무채색(재우) — 겹치지 않는다. 연두 전입신고서는 라일락의 거의 보색이라 P34 · P42에서 서식이 먼저 보인다(script_final 검수 노트 E-1 ③).

### 2-3. 소품 색 (art-director 기준값)

| 소품 | 색 |
|---|---|
| 새 달냥이 스티커 | 황금빛 주황 `#E8A13A` · 레몬 `#F2DE6E` · 청록 원 `#36B3AE` · 흰 별 · 흰 테두리 — 화면에서 가장 채도 높은 비(非)빨강 |
| 바랜 달냥이 스티커 | 연크림 `#EFE7CF` · 바랜 볏짚색 `#D8C98E` · 잿빛 민트 `#A8BDB3` · 누런 테두리 `#E6D9B0` |
| 수첩 표지 | 먼지 낀 네이비 리넨 `#3A4660` · 흰 실 제본 |
| 모눈 종이 | 크림 (새것 `#F3ECD9` / 바랜 것 `#E8DCC0`) · 연회청 모눈선 `#B7C6CF` |
| 커피 링 | 새것 연갈색 `#9C6B3F` / 바랜 것 `#CDB89A` — 갈색이다(빨강 금지) |
| 수수료 영수증 | 연노랑 먹지 `#F2E6A2` + 작은 붉은 원 |
| 당직 명부 | 파란 플라스틱 바인더 `#2E5A9E` |
| 당직 일지 | 검정 하드커버 `#1B1B1D` · 회색 천 책갈피 |
| 사망신고(취소) 서식 | 연회청 `#AFC3D6` |
| 대기 의자 (L2) | 파란 플라스틱 `#3B6EA8` |
| 숙직실 난로빛 (P43) | 주황 `#E58A3A` — 문틀 너머 작은 빛만, 빨강으로 번지지 않게 |

#### 2-3-1. EP03 소품 색 (v1.2 · EP03)

| 소품 | 색 | 프롬프트 색 이름 |
|---|---|---|
| 전입신고서 | **연두 `#DCE6B0`** (world §5-3 · 검수 노트 E-1 확정) — 벽 `#A9C3AE`보다 밝고 노랗고, 영수증 `#F2E6A2`보다 녹색 | pale yellow-green, the soft light green of a new leaf |
| 개명 신청서 | 연살구 `#F7D9C4` — 달냥이 주황 `#E8A13A`보다 훨씬 옅다 | pale apricot, a soft light peach-orange |
| 반려 통지 | 새 종이 `#FAFAF7` + 붉은 원 하나 | plain white |
| 결재판 | 무광 짙은 남색 `#1E2638` — 명부 바인더 `#2E5A9E`(밝은 파랑 광택 플라스틱)·수첩 `#3A4660`(리넨)과 색·재질로 갈린다 | dark navy, almost black-blue, smooth matte faux-leather |
| L3 직원 책상 | 연회색 라미네이트 `#C9CAC4` · 가는 철제 다리 `#8A9096` | plain pale gray laminate office desk |
| L3 위층 계단 | 바닥과 같은 석재 `#CDBFA5` · 짙은 회색 금속 난간 `#5E6266` · 나무 손잡이 `#8C6B4E` | polished beige stone, dark gray metal balustrade, smooth wooden handrail |
| 꺼진 모니터 | `#16181B` (L3 표시 면과 같은 검정) | switched-off, plain black screen |

- **램프 아래 종이 색 [주의]:** L1 스탠드의 노란 빛은 연두를 노랑으로, 연살구를 주황으로 민다. 서식이 노란 원 안에 있는 컷(P42 · P45 · P59)은 `under the warm lamp light the paper still reads clearly as pale yellow-green, not yellow` / `… as pale apricot, not orange and not pink`를 덧붙인다.

### 2-4. 예약색 빨강 — EP01은 세 범주뿐 [고정]

| 범주 | 형태 | EP01 패널 |
|---|---|---|
| ① 4번 조각의 테이프 | 흰 조각 위·아래 가장자리를 따라 가로 두 줄 | 수칙 종이가 화면에 있는 모든 컷 |
| ② 인주·직인 자국 | 글자 없는 붉은 원 / 인주 케이스 속 붉은 인주 | P9·P33 영수증의 작은 원과 책상 위 인주 케이스, P27 반쯤 찍힌 반원, P44–46 직인 끝의 인주, P49 보완 요청서의 원 |
| ③ 클리프의 테이프 롤 | 손바닥만 한 빨간 비닐테이프 롤 | P61–P64 |

- 그 밖의 빨강은 **0**이다: 의상·립·네일·넥타이·휴대폰 케이스·소화전함(회색)·경고등·책 등. 스티커 주황은 황금빛, 커피 링은 갈색, 스탠드 빛은 노랑.
- 빨강이 들어가는 컷의 프롬프트에는 "the only red in the image is …"를 한 번 적어 Flow가 다른 곳에 빨강을 쓰지 않게 한다.

#### 2-4-1. EP02 빨강 (v1.1 · EP02) — 범주는 그대로 셋

world §13-3의 확장(빨간 비닐테이프 공용 비품)은 EP03부터다. EP02는 **EP01과 같은 세 범주**만 쓴다. 새로 생기는 것은 ②범주(인주·직인 자국)의 **서류 B 위 붉은 원 하나**뿐이다.

| 범주 | EP02 형태 | 패널 |
|---|---|---|
| ① 4번 조각의 테이프 | EP01과 같음 (흰 조각 위·아래 가로 두 줄) | 수칙 종이가 보이는 모든 컷 (클로즈업: P16 · P18 · P19 · P21 · P24 · P27 · P37) |
| ② 인주·직인 자국 | **서류 B 위 줄(인계자 줄) 끝 원 안의 글자 없는 붉은 원** · 책상 위 인주 케이스·영수증의 작은 붉은 원(EP01 그대로) | 서류 B: P54 · P57 · P58 (P55는 인셋 대조 — 큰 컷의 서류 B에만 빨강, 인셋의 서류 A에는 없음) · 책상: P14 |
| ③ 테이프 롤 (재우의 롤) | EP01 P64의 그 롤 | P1 · P14(책상 위, 수첩 옆) → P15–P20(그의 손) → **P25 카디건 주머니로 사라진다**. P26 이후 화면에 롤 없음 |

- **노미란의 몸·의상·소지품·낮 책상에 빨강 0**(EP19 리플레이 전까지 · beatsheet §3-4). P53–P58은 카운터 위만 그리고 그녀의 책상 면은 프레임 밖(R11: EP03 낮 창구의 롤을 앞당기지 않는다).
- 서류 B 컷에서 붉은 원은 **화면에서 가장 강한 색**이다(EP01 P64의 롤과 같은 문법). L3의 의자·옷·화분·표시 면에 빨강·주황을 쓰지 않는다.

#### 2-4-2. EP03 빨강 (v1.2 · EP03) — ③범주가 world §13-3 확장으로 넓어진다

EP03부터 ③범주는 world §13-3의 **'빨간 비닐테이프(민원여권과 공용 비품)'**다. EP03에 새로 들어오는 것은 **노미란 낮 창구 책상 위의 롤 하나**뿐이다(twist-plan §5 EP03 · F-18 첫 변주 · EP19 리플레이 원본).

| 범주 | EP03 형태 | 패널 |
|---|---|---|
| ① 4번 조각의 테이프 | EP01과 같음 (흰 조각 위·아래 가로 두 줄) | 수칙 종이가 보이는 컷: P27 · P29 · P37 · P40(초점 밖) · P56 (+ VIEW_B 와이드의 작은 종이) |
| ② 인주·직인 자국 | 서류 B 위 줄 원 안의 글자 없는 붉은 원(낮 P1 · P4 · P13 · P14 · P15 / 밤 명부 맨 앞 P28) · 영수증의 작은 붉은 원(P20) · **P47 그녀의 첫 직인**: 나무 직인 끝의 붉은 인주 + 흰 반려 통지 위 붉은 원 · P48 민원인 매듭 사이 반려 통지의 붉은 원(작게) | 책상 위 인주 케이스는 VIEW_DESK 그대로. **서랍 속 여분 인주 케이스는 뚜껑을 닫는다**(P22) |
| ③ 빨간 비닐테이프 (공용 비품) | **노미란 낮 책상 위 롤 — 배경 소품** | **P13**(작지만 또렷이) · **P16**(프레임 귀퉁이, 초점 밖). 그 밖 0 |

**낮 책상 롤 배치 규칙 [고정]:**
1. **자리:** 노미란 낮 책상의 **안쪽 오른쪽 귀퉁이**(그녀 기준 RIGHT), 서류 받침 옆에 옆으로 눕혀 둔다. 서하의 책상·명부·그녀의 LEFT 손이 일하는 쪽(LEFT)의 반대편이라 **손과 롤 사이에 늘 팔 길이 이상**이 남는다(characters §4-12).
2. **같은 물건 종류:** 토큰 `PROP_TAPE_ROLL_DESK`(§7-7)는 EP01 `PROP_TAPE_ROLL_RED`와 같은 구절로 시작한다(손바닥만 한 광택 빨간 비닐테이프, 짧게 찢긴 꼬리). 독자가 "전임자의 롤과 같은 것"으로 알아봐야 F-18이 선다.
3. **아무도 들지 않고, 만지지 않고, 보지 않고, 가리키지 않는다.** 노미란의 손·소매·코트·결재판에 닿지 않는다. 그녀의 시선과 손짓(P13 아래 줄 가리키기)은 반대쪽(카운터 위 서류)으로 간다.
4. **배경의 무게:** 화면 가운데 배치·특별한 빛·초점 강조 금지 — 펜꽂이·서류 받침과 같은 무게. 단 P13에서는 모양과 빨강이 **분명히 읽혀야** 한다(EP19 리플레이 원본). P16은 초점 밖.
5. **P1–P12에는 책상 면이 없다**(EP02 R11 연장, §6-6-1) → 롤도 없다. P17 · P18은 프레임 밖. 밤(L1)에는 어떤 롤도 없다 — 재우의 롤은 EP02 P25부터 주머니 속이고 비치지 않는다.
6. **빨강 문장:** P13 `The only red in the image is the small roll of red tape lying at the back corner of the desk and the small red seal mark on the form on the counter.` · P16 `The only red in the image is the out-of-focus roll of red tape at the corner of the frame.` (서류 B의 붉은 원이 보이면 함께 적는다)

- **빨강 0:** 노미란의 몸·립·네일·의상·소지품(EP19 리플레이 전까지) · 결재판 · 전입신고서 · 보따리·보자기 · 민원인의 옷 · 개명 신청서 · 반창고 · 코듀로이 · 직원석의 다른 비품 · 계단 · 기억 비네트 3컷.
- 빨강이 들어가는 컷에서 붉은 원·롤이 **화면에서 가장 강한 색**이다(EP01 P64 · EP02 P54 문법). P57–P60(클리프)에는 빨강이 없다 — EP01 클리프(빨간 롤)와 반대.

### 2-5. 블록별 무드 팔레트 (컬러 스크립트)

| 블록 | 패널 | 팔레트 · 빛 |
|---|---|---|
| ① 콜드오픈 | P1–3 | 녹백 형광 + 작은 스탠드 원. 유리 너머 복도 역광. 화면의 빨강은 4번 테이프 한 점 |
| ② 계단 | P4–6 | 가장 중립적인 회색 콘크리트, 철망 전구의 희미한 흰빛. 회차에서 가장 편안한 구간(P6 가장 따뜻한 얼굴) |
| ② 앵커 | P7 | 복도 형광, 회색 방화문, 흰 시계 면 |
| ② 떠넘김 | P8–10 | 평범하고 고른 사무실 빛(블랙코미디). 떨림 없음 |
| ②③ 낭독·민원 | P11–21 | 녹백 + 스탠드. 유리 너머 복도 끝 어둠. 젖은 것에는 차가운 물 하이라이트 |
| ④ 반전 1 | P22–30 | 떨림 → 완전한 어둠 → 빈자리 → 차가운 앵커 복도 |
| ⑤ 반복 | P31–39 | ②③과 **같은** 팔레트(반복의 공포는 같은 색에서 나온다) |
| ⑥ 반격 | P40–49 | ③과 같음 + 숙직실 문틈의 주황 난로빛(P43), 직인의 빨강. P41은 "떨리지 않는 불"이 신호 |
| ⑦ 반전 2 | P50–57 | 떨림 없음. 스탠드 원이 그녀와 수칙 종이만 감싸고 방은 차분한 푸른 그림자로 가라앉는다 |
| ⑧ 클리프 | P58–64 | 같은 스탠드 원이 두 번째 그림자에 깨진다. 빨간 롤이 화면에서 가장 강한 색 |
| 리플레이 인셋 | P24·P55 | 원본 컷을 채도 낮춰(약 -40%) 회백색 테두리 안에 (§4-2) |

- **채도·명도 방향:** 전체 저채도, 명도는 중간~어둠. 높은 채도는 셋뿐: 새 스티커, 예약 빨강, 스탠드 노랑. 하이키 화면 금지.

### 2-6. L3 1층 로비 팔레트 (v1.1 · EP02)

지하의 녹색이 **처음으로 사라지는** 공간이다. 형광 녹백·기관 연녹을 L3에 쓰지 않는다. 대신 베이지 석재와 회백 벽, 새벽에는 차가운 파랑, 낮에는 평평한 백색. 여전히 저채도(STYLE_GLOBAL 그대로).

| 역할 | hex | 프롬프트 색 이름 |
|---|---|---|
| 바닥 | `#CDBFA5` | polished beige stone tiles |
| 벽 | `#E6E1D6` (아래 석재 `#D5C9B2`) | warm off-white walls with pale beige stone cladding to waist height |
| 카운터 상판 | `#BFC1BD` | pale gray laminate counter top |
| 칸막이 | — | low frosted-glass partitions |
| 대기 의자 | `#4A5466` | navy-gray |
| 표시 면 | `#16181B` | switched-off flat black display panels |
| 계단 철문 | `#8A9096` (지하의 철과 같은 값) | plain gray steel door |
| 새벽빛 | `#A9BCD3` / 그늘 `#56657A` | cold blue pre-dawn light / soft blue-gray shadow |
| 낮빛 | `#F1F1EC` | plain, even, flat white office light; pale gray winter daylight |

### 2-7. EP02 컬러 스크립트 (v1.1 · EP02)

| 블록 | 패널 | 팔레트 · 빛 |
|---|---|---|
| ① 답 반·질문 반 | P1–5 | EP01 ⑧에서 그대로 이어진다: LIGHT_L1 + LIGHT_LAMP. EP01 P60–64의 "두 번째 그림자"가 이제 사람이다(LIGHT_CLIFF 대신 그의 몸은 **빛 가장자리** `LIGHT_LAMP_EDGE`). 노란 원 안에는 손만. 빨강 = 책상 위 롤 + 4번 테이프 |
| ② 정체 | P6–14 | 같은 팔레트. P11 건조한 유머도 **조명을 바꾸지 않는다**(EP02에는 떨림이 없어서 LIGHT_COMEDY로 끌 것이 없다 → 배경 급변만 생긴다) |
| ③ 덮자 | P15–25 | 같은 팔레트. 빨강이 가장 많은 구간(롤이 4번 옆에 나란히, P16). **P25 롤이 주머니로 들어가며 빨강은 4번 테이프만 남는다** |
| ④ 새벽 4시 | P26–29 | 같은 팔레트 — 새벽 4시도 지하는 같다(반복의 공포). 서하 밤샘 상태 시작(character-sheets §10-2) |
| ⑤ 05:59 | P30–42 | 같은 팔레트, **떨림 없음을 프롬프트에 명시**(`LIGHT_NOFLICKER`, b5 공정성). P36–37 `LIGHT_REVEAL`(EP01 반전 2와 같은 문법, 선택). P38 그의 손이 처음으로 노란 원 안 열쇠로, P39 그녀의 손이 먼저 덮는다. P42 06:00 (`LIGHT_0600` 조건부) |
| ⑥ 지하 퇴장 | P43–44 | P43 숙직실 난로 주황(작게, 문틀 안) · P44 앵커 복도 LIGHT_CORRIDOR + 휴대폰 화면의 흰 빛 |
| ⑥ 새벽 로비 | P45–52 | **이 작품 첫 비(非)녹색 화면:** `LIGHT_L3_DAWN` 차가운 푸른 새벽 + 베이지 석재. 따뜻한 빛 없음 — 온기는 P50 그녀의 표정과 P52 새 스티커의 황금빛 주황뿐 |
| ⑦ 09:00 | P53–58 | `LIGHT_L3_DAY` 평범한 낮 백색광, 저채도 베이지·회색. 빨강 = 서류 B의 직인 원 하나(화면에서 가장 강한 색). **클리프의 긴장은 조명이 아니라 구도로**(같은 빛을 끝까지 유지) |
| 기억 비네트 | P8 · P10 · P20 · P37 · P47 · P55 | 원본 컷을 채도 약 -40%, 회백색 테두리 (§4-3) |

### 2-8. EP03 컬러 스크립트 (v1.2 · EP03)

| 블록 | 패널 | 팔레트 · 빛 |
|---|---|---|
| ① 뒷면 | P1–5 | EP02 S06 그대로: `LIGHT_L3_DAY`, 저채도 베이지·회색. 빨강 = 서류 B의 붉은 원 하나. **P5 뒷면은 빨강 0** — 하얀 면과 가는 칸 하나, 회차에서 가장 조용한 흰색 |
| ② 마지막 줄 | P6–13 | 같은 빛. P6 · P11 기억 비네트는 바랜 색(빨강 0). **P13 직원석 첫 공개:** 연회색 책상 위 파란 바인더 · 남색 결재판 · 작은 빨간 롤 — 낮 화면에 처음 생기는 원색 셋 |
| ③ 서명 | P14–18 | 같은 빛을 끝까지(패배는 빛이 아니라 구도로, EP02 S06과 같은 문법). P17 밝은 2층 높이 홀의 넓은 돌계단(위) ↔ 작은 서하(아래). P18 바닥 — 연회색 책상 위 파랑·검정 |
| ④ 22시 | P19–24 | 지하로 돌아온다: P19 `LIGHT_CORRIDOR`(EP01 P7과 같은 색) → L1 녹백 형광 + 스탠드 노랑. **P23 복도 끝 떨림(회차 유일)** |
| ⑤ 제가 담당자입니다 | P25–33 | 녹백 + 스탠드. **새 색: 유리 너머의 회라일락과 크림 보따리**(지하에서 가장 부드러운 색). P30 떨리지 않는 형광등 — EP01 P25와 같은 색, 다른 결과 |
| ⑥ 전입신고 | P34–49 | 같은 팔레트 + **연두 서식**(라일락의 보색). P47 그녀의 첫 붉은 원이 화면에서 가장 강한 색. P48 라일락 점이 복도 끝 어둠으로 |
| ⑦ 받으면 안 됐는데 | P50–54 | 녹백 + 스탠드. P51 유리 너머 차가운 복도빛 속 무채색 재우와 파란 대기 의자(따뜻한 빛 없음). P52 빛 가장자리(`LIGHT_LAMP_EDGE`) |
| ⑧ 새 이름 | P55–60 | 03:00, 같은 팔레트. P56 유리 너머 빈 어둠. **P57 연살구 한 장**이 차가운 투입구로 — 회차의 마지막 새 색. P59 노란 원이 연살구 서식과 파란 명부만 감싼다(`LIGHT_REVEAL` 선택). P57–P60 빨강 0 |
| 기억 비네트 | P6 · P11 · P28 | 원본 컷을 채도 약 -40%, 회백색 테두리 (§4-4) · 비네트 안 빨강 0 |

---

## 3. 분위기 · 조명

**분위기 한 문단.** 지루할 만큼 평범한 1990년대 관공서 지하다. 연녹색 유성 페인트, 테라조 바닥, 철망 씌운 형광등, 낮은 천장의 노출 배관. 이 평범함에 **딱 한 군데의 어긋남**(마른 밤에 젖은 사람, 비어 버린 의자, 바랜 스티커)이 얹힐 때 공포가 생긴다. 공간은 늘 같은 모습이어야 하고(반복의 공포), 사람은 늘 믿을 만해야 한다. 웃음은 같은 공간·같은 빛에서 표정으로만 만든다.

### 3-1. 조명 규칙 (world §10-2)

1. 기본은 **위에서 떨어지는 차가운 형광등**. 그림자는 짧고 얼굴·물건 아래에 고인다.
2. **스탠드의 노란 빛 = 서하의 영역.** 당직석의 얼굴·손·책상 일부, 수칙 종이 일부만 따뜻하다. 그녀가 자리를 떠나면 화면에서 온기가 사라진다.
3. **형광등 떨림은 경고로만:** P12·P35(유리 너머 복도 끝, 민원인 출현 전), P25(서하 머리 위, 정정 직전). 그 밖에는 쓰지 않는다. ⑦에는 없다. **P41은 "머리 위 불이 떨리지 않는다"가 안도 신호다.**
4. 복도 끝 어둠은 늘 같은 자리에서 시작한다(먼 쪽 1/3, 꺼진 등부터).
5. 창구 유리는 방 안·복도를 옅게 **정상 반사**한다. 이상한 반사는 수칙 3번(EP04) 몫이라 EP01에는 없다. ⑧(P58–64)에서는 그녀 뒤 사람이 유리에 비치면 안 된다 → 유리를 프레임 밖에 두거나 평평한 어두운 반사로만.
6. 지하라 창문이 없다. 낮빛·달빛·바깥 풍경 금지.

### 3-2. 조명 토큰

| 토큰 | 영문 (프롬프트용) |
|---|---|
| `LIGHT_L1` | `lit from above by bare fluorescent tubes giving a cold green-white light, short hard shadows pooling under faces and objects` |
| `LIGHT_LAMP` | `a white gooseneck desk lamp casts a small circle of warm yellow light over the desk and the seated woman's face and hands, the only warm light in the scene` |
| `LIGHT_FLICKER` | `the fluorescent tube directly above her stutters and dims, a faint unstable glow` (위치만 바꿔 P12·P35는 "at the far end of the corridor beyond the glass") |
| `LIGHT_BLACKOUT` | `total darkness: an almost solid near-black image with no shapes, no silhouettes and no light` |
| `LIGHT_COMEDY` | `plain, even, steady office light, no flicker, flat and ordinary` |
| `LIGHT_STAIR` | `dim white light from a single small caged bulb on the landing, deep shadows down the stairs` |
| `LIGHT_CORRIDOR` | `alternate fluorescent tubes lit along the ceiling, the far third of the corridor fading into darkness, the duty room's glass window glowing warm midway` |
| `LIGHT_STEADY` | `the fluorescent tube above her burns perfectly steady` (P41 전용 신호) |
| `LIGHT_REVEAL` | `steady, quiet light with no flicker; the warm lamp circle holds her and the taped paper sheet while the rest of the room sinks into calm cool shadow` |
| `LIGHT_CLIFF` | `the warm lamp circle on the taped paper sheet is broken by a second person's shadow falling from behind her` |
| `LIGHT_LAMP_EDGE` (v1.1 · EP02 · 재우 전용) | `he stands just at the edge of the desk lamp's warm circle: one side of his face faintly warm yellow, the other side in cold green-white fluorescent light; his body stays outside the warm circle, only his hands ever reach into it; he casts a normal shadow` |
| `LIGHT_NOFLICKER` (v1.1 · EP02 · P30–P33 필수, EP02 전체 권장) | `every fluorescent tube burns steady and even, with no flicker anywhere` |
| `LIGHT_0600` (v1.1 · EP02 · P42 · **조건부**: worldbuilder 승인 시) | `beyond the glass, the fluorescent tubes along the once-dark far end of the corridor are now lit, steady and even` |
| `LIGHT_L3_DAWN` (v1.1 · EP02) | `the ceiling lights are off; the only light is a cold blue pre-dawn glow coming through the glass entrance doors and lying in long pale blue rectangles across the polished beige floor; the rest of the hall rests in soft blue-gray shadow; beyond the glass only a deep cold blue sky and an empty paved forecourt, no signs, no cars; no warm light anywhere` |
| `LIGHT_L3_DAY` (v1.1 · EP02) | `all the ceiling lights are on: plain, even, flat white office light, with pale gray winter daylight coming through the glass entrance doors; ordinary, calm and steady, no dramatic shadows` |
| `LIGHT_FLICKER_FAR` (v1.2 · EP03 · P23 전용 — 회차의 유일한 떨림) | `far down the corridor beyond the glass, the last lit fluorescent tube before the dark section stutters and dims once, a faint unstable glow at the edge of the darkness` |
| `LIGHT_GLASS_GLOW` (v1.2 · EP03 · P31 · P46 — 유리에 바짝 다가온 민원인 얼굴) | `her face close behind the glass is half lit by the faint warm glow spilling through the window from the duty room's desk lamp, the other half in the cold, dim corridor light` |

### 3-3. 씬별 조명

| 씬 · 패널 | 조명 |
|---|---|
| S01 P1–3 | LIGHT_L1 + LIGHT_LAMP. 유리 너머 민원인은 복도 빛을 등진 역광 |
| S02 P4–6 / P7 | LIGHT_STAIR / LIGHT_CORRIDOR(앵커) |
| S03 P8–10 | LIGHT_COMEDY |
| S04 P11–21 | LIGHT_L1 + LIGHT_LAMP. P12 복도 끝 떨림. P15 LIGHT_COMEDY |
| S05 P22–27 | LIGHT_L1 + LIGHT_LAMP → P25 LIGHT_FLICKER → P26 LIGHT_BLACKOUT → P27 불이 돌아온 LIGHT_L1 |
| S05 P28–30 | LIGHT_CORRIDOR (P7과 같게) |
| S06 P31 | LIGHT_CORRIDOR |
| S06 P32–39 | P32–33 LIGHT_COMEDY · P34–39 LIGHT_L1 + LIGHT_LAMP · P35 복도 끝 떨림 |
| S07 P40–49 | LIGHT_L1 + LIGHT_LAMP · P41 LIGHT_STEADY · P43 숙직실 난로빛 |
| S08 P50–57 | LIGHT_REVEAL |
| S09 P58–64 | LIGHT_REVEAL → P60부터 LIGHT_CLIFF |

### 3-4. EP02 씬별 조명 (v1.1 · EP02)

**EP02에는 형광등 떨림·어둠 컷이 없다**(민원인도 정정도 없다, beatsheet §3-4). `LIGHT_FLICKER` · `LIGHT_BLACKOUT` · `LIGHT_COMEDY`를 쓰지 않는다. 05:5x의 목소리에도 떨리지 않는다 — 떨림이 없다는 것 자체가 "괴이가 아니다"의 공정한 신호다(b5).

| 씬 · 패널 | 장소 | 조명 |
|---|---|---|
| S01 P1–25 (23시대) | L1 | LIGHT_L1 + LIGHT_LAMP. 재우가 보이는 컷은 + LIGHT_LAMP_EDGE. P1–P2 유리는 프레임 밖이거나 평평한 어두운 반사(그가 유리에 먼저 비치면 공개가 샌다) |
| S02 P26–29 (04:40) | L1 | LIGHT_L1 + LIGHT_LAMP (P29 유머도 그대로) |
| S03 P30–35 | L1 (P31은 유리 너머 L2) | LIGHT_L1 + LIGHT_LAMP + **LIGHT_NOFLICKER**. P31 = LIGHT_CORRIDOR + LIGHT_NOFLICKER(불 켜진 가까운 끝). P33 실루엣: 흰 종이 한 장만 노란 빛을 받는다 |
| S03 P36–37 | L1 | LIGHT_REVEAL (선택. 안 쓰면 LIGHT_L1 + LIGHT_LAMP) |
| S03 P38–42 | L1 | LIGHT_L1 + LIGHT_LAMP. P38 그의 손이 노란 원 안으로. P42 06:00 + LIGHT_0600(조건부) |
| S04 P43 | L1 숙직실 문 | LIGHT_L1 + LIGHT_LAMP + 문틀 안 난로 주황(EP01 P43과 같게, 작게) |
| S04 P44 | L2 | LIGHT_CORRIDOR (P7·P28과 같은 빛) + 휴대폰 빈 화면의 흰 빛 |
| S05 P45–52 (06:0x) | L3 | **LIGHT_L3_DAWN**. 씬 안에서 바꾸지 않는다(P50의 따뜻함은 빛이 아니라 표정) |
| S06 P53–58 (09:00) | L3 | **LIGHT_L3_DAY**. 씬 안에서 바꾸지 않는다 |

### 3-5. EP03 씬별 조명 (v1.2 · EP03)

**떨림은 P23 한 번뿐**(민원인 출현 경고, 복도 끝). `LIGHT_BLACKOUT` · `LIGHT_CLIFF` · `LIGHT_COMEDY`는 쓰지 않는다(정정도, 그녀 뒤의 그림자도 없다). **P30 · P45는 일부러 떨리지 않는다** — 기록과 일치하는 말 = 안전(EP01 P41과 같은 문법). 그 부재가 비트이므로 프롬프트에 적는다.

| 씬 · 패널 | 장소 | 조명 |
|---|---|---|
| S01 P1–P18 (09:0x) | L3 | **LIGHT_L3_DAY** 하나로 끝까지. 직원석 뷰(P13 · P16 · P18)·계단 와이드(P17)도 같은 천장등. 패배(P14–P18)도 빛을 바꾸지 않는다 |
| S02 P19 (22:00) | L2 | LIGHT_CORRIDOR (EP01 P7 · P28과 같게) |
| S03 P20–P22 | L1 | LIGHT_L1 + LIGHT_LAMP. P21 일지 면은 노란 원 안. P22 서랍은 책상 아래 그늘(노란 빛이 가장자리만) |
| S04 P23 | L1 → 유리 너머 L2 | LIGHT_CORRIDOR + **LIGHT_FLICKER_FAR** |
| S04 P24–P29 | L1 (P26은 복도 쪽 L2) | LIGHT_L1 + LIGHT_LAMP. P24 · P25 유리 너머 민원인은 복도 빛을 등진 역광. P26 = 복도의 차가운 빛 + 창구에서 떨어지는 옅은 온기 |
| S04 P30 | L1 | LIGHT_L1 + LIGHT_LAMP + **LIGHT_STEADY + LIGHT_NOFLICKER** — EP01 P25와 같은 형광등, 이번엔 고요. 효과음 없음 |
| S04 P31 · P46 | L1 유리 클로즈업 | LIGHT_L1 + **LIGHT_GLASS_GLOW** |
| S04 P32–P49 | L1 | LIGHT_L1 + LIGHT_LAMP. **P45 + LIGHT_STEADY + LIGHT_NOFLICKER**. 그 밖 떨림 0 |
| S05 P50 · P52–P54 | L1 | LIGHT_L1 + LIGHT_LAMP. 재우가 보이면 + LIGHT_LAMP_EDGE(몸은 노란 원 밖) |
| S05 P51 | 유리 너머 L2 | LIGHT_CORRIDOR — 재우에게 따뜻한 빛 없음, 정상 그림자 |
| S06 P55–P58 (03:00경) | L1 | LIGHT_L1 + LIGHT_LAMP. P56 유리 너머 어둡고 빈 복도. P57 투입구 · P58 말구멍: **유리 반사 없음**(평평한 어둠, EP04 보호) |
| S06 P59–P60 | L1 | `LIGHT_REVEAL`(선택 — 노란 원이 두 서류와 그녀만 감싸고 방은 차분한 푸른 그림자). 안 쓰면 LIGHT_L1 + LIGHT_LAMP. 떨림·그림자 침입 없음 |

---

## 4. 화면비 · 캔버스 (Flow)

### 4-1. 크기 등급

뷰어는 그림을 **폭에 맞춰 통째로** 보여 준다(자르지 않는다. 폭 최대 720px, 폰 폭 약 400px).

| 등급 | Flow aspect | 폰에서의 높이 | 쓰는 곳 |
|---|---|---|---|
| **STD** | **3:4** | 화면 약 0.7 | 기본. 대화·미디엄·투샷·어깨 너머 |
| **TALL** | **9:16** | 화면 약 1 | 느린 컷·세로 공간·정지점·공개 컷·앵커 (tension-curve §9-3 "느림") |
| **SQ** | **1:1** | 화면 약 0.5 | 클로즈업·인서트·빠른 대화(말풍선 1–2개)·어둠 컷 |
| **BAND** | **16:9** | 화면 약 0.3 | 말풍선 1개 이하의 낮고 넓은 띠(선택). EP01에서는 P59(눈 띠) 정도 |

- Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데에 모은다. 16:9가 꼭 필요하지 않으면 1:1로 대신한다(flow-handoff: 가장 가까운 비율).
- 레퍼런스 시트·플레이트의 비율은 character-sheets §7.

**권장 배정** (panel-director가 바꿀 수 있다. 단 **COMP 짝은 같은 비율**):

| 등급 | 패널 |
|---|---|
| TALL 9:16 | P3·P40(COMP-COLD-3) · P5·P52(COMP-STICKER) · P7·P28(COMP-ANCHOR) · P16 · P18·P37(COMP-PAUSE) · P27 · P31 · P42 · P45 · P51 · P53(2분할) · P58 · P60 · P61 · P64 |
| SQ 1:1 | P2·P39(COMP-COLD-2) · P8·P32(COMP-HANDOVER) · P9·P33(COMP-DESK) · P25 · P26 · P29 · P30 · P46 · P56 · P63 |
| BAND 16:9 | P59(선택. 아니면 SQ) |
| STD 3:4 | 나머지 전부 (P1·P38, P12·P35, P13·P36 포함) |

### 4-2. 구도 규칙

1. **한 장 = 한 순간.** 그림 안에 패널 테두리·칸 나누기·콜라주를 넣지 않는다. 예외는 P53 하나(아래 4).
2. **풀블리드.** 흰 여백·프레임 없이 가장자리까지 그린다. 패널 사이 간격은 뷰어가 바탕색 `#0e0e10`(거의 검정)으로 만든다. 어두운 가장자리는 간격의 어둠과 이어진다(의도된 효과).
3. **세로 흐름.** 독자는 위에서 아래로 읽고, 말풍선은 위부터 읽힌다. 화자와 행동은 가운데~아래, 말풍선 자리는 위쪽이 기본(§8).
4. **P53 2분할:** 9:16 한 장 안에 익스트림 클로즈업 두 개를 위아래로 쌓고 가는 검은 가로 띠로 나눈다. 위 = 네이비 리넨 위의 새 스티커, 아래 = 바랜 모눈 종이 위의 바랜 스티커. 같은 크기·같은 각도. Flow가 둘을 섞거나 망치면 대안: 1:1 한 컷에 실제로 나란히(그녀가 수첩 표지를 칸막이의 수칙 종이 옆에 댄다). 어느 쪽이든 PROP_STICKERS_pair 첨부.
5. **리플레이 인셋 (P24 ← P9 크롭, P55 ← P21 크롭):** Flow는 인셋을 그리지 않는다. 받는 패널의 프롬프트는 인셋 자리(기본: 위 왼쪽, 폭 약 40% × 높이 약 30%)를 조용한 배경으로 비운다. 인셋 = 원본 PNG를 잘라 채도를 약 40% 낮추고, 3–4px 회백색(`#D9D6CC`) 테두리와 얇은 어두운 그림자를 둔다. 기억 말풍선(`type: memory`)은 인셋 바로 아래·옆에. 합성 방식은 §11 열린 항목.
6. **P26 어둠 컷:** `a completely black image, total darkness, no shapes, no silhouettes, no light`. 뒤의 240px 간격과 이어져 어둠이 길어진다. 실루엣이 생기면 다시.
7. **안전 영역:** 얼굴·손·핵심 소품은 가장자리에서 폭의 8% 안쪽에 둔다.

### 4-3. EP02 비율 · 기억 비네트 (v1.1 · EP02)

**권장 배정** (panel-director가 바꿀 수 있다. 단 EP01 구도를 그대로 반복하는 짝은 원본과 같은 비율):

| 등급 | 패널 | 근거 |
|---|---|---|
| TALL 9:16 | P1(↺EP01 P61) · P2(아래→위로 오르는 세로 컷) · P3(공개) · P12(↺EP01 P16 발견 컷) · P18(↺EP01 P58) · P33(↺EP01 P42 정지점) · P34(T-b 공개) · P37(정점 + 비네트) · P44(↺COMP-ANCHOR) · P45(L3 첫 컷, 2층 높이) · P52(↺COMP-STICKER) · P55(눈 + 비네트, EP01 P55와 같게) · P58(최종 컷) | 느림·공개·정지점·세로 공간 |
| SQ 1:1 | P13 · P14(↺COMP-DESK P33) · P19(↺EP01 P63) · P22 · P30 · P36 · P39(↺EP01 P9) · P54(↺EP01 P9) · P56(↺COMP-HANDOVER P8) · P57 | 클로즈업·빠른 한마디·손 |
| STD 3:4 | 나머지 (P26·P42는 서로 같은 비율 — 04:40 ↔ 06:00 짝) | 대화·투샷·미디엄 |

- 서류(인수인계서)가 주인공인 컷(P34 · P35 · P54 · P57 · P58)은 서류를 **충분히 크게**, 이중 테두리와 두 서명란이 또렷이 보이게 둔다(A4 세로 종이).

**기억 비네트 (인셋) — EP02 6컷: P8 · P10 · P20 · P37 · P47 · P55.** 방식은 EP01 shotlist §D(리더 결정)를 그대로 따른다: Flow가 한 장 안에 그리는 **'액자 속 기억 그림'** — 위 왼쪽 작은 사각 그림, 3–4px 회백색(dingy off-white) 테두리 + 아래·오른쪽의 얇은 어두운 그림자, 안은 채도 약 -40%의 바랜 색, 원본과 같은 각도·같은 순간. 원본 패널 PNG를 첨부하고 원본의 인물·소품 문장도 짧게 다시 쓴다. 이 6컷은 §4-2 규칙 1(한 장 안에 테두리 금지)의 **EP02 예외**이고, prompt-smith는 Avoid 줄에서 `panel borders`만 뺀다. 원본 PNG를 잘라 합성하는 방식(§4-2 규칙 5)은 대안으로만 남는다.

| 비네트 | 원본 | 크롭 · 주의 | 의존 |
|---|---|---|---|
| P8 | EP01 P10 | 숙직실로 걸어가는 노미란(의상 A) | EP01 PNG 먼저 |
| P10 | EP01 P34 | 종이컵을 내미는 선임 + 서가 사이 어둠 | EP01 PNG 먼저 |
| P20 | EP01 P63 | 반지 낀 검지와 4번 조각 | EP01 PNG 먼저 |
| P37 | EP02 P27 | 7번 자리(맨 아래)를 짚는 손끝 | 같은 회차, P27 먼저 |
| P47 | EP01 P48 | **일지 면과 쓰는 손만**. 칸막이·당직석·수칙 종이는 비네트에 넣지 않는다(F-23 보호) | EP01 PNG 먼저 |
| P55 | EP02 P34 | 재우가 내민 서류 A(빈 면)와 그의 손. **비네트 안에 빨강 없음** — 큰 컷의 서류 B와 대조되는 것은 붉은 원 하나 | 같은 회차, P34 먼저 |

### 4-4. EP03 비율 · 기억 비네트 (v1.2 · EP03)

**권장 배정** (panel-director가 바꿀 수 있다. 단 원본 구도를 반복하는 짝은 원본과 같은 비율 — §5-6):

| 등급 | 패널 | 근거 |
|---|---|---|
| TALL 9:16 | P1(↺EP02 P58) · P5(뒷면 공개, 뒤 480) · P6 · P11(눈 + 비네트, EP02 P37 · P55와 같게) · P13(직원석 첫 공개, 뒤 480) · P14(↺EP02 P58, P1과 짝) · P17(계단 — 위와 아래) · P18(바닥, 뒤 480) · P19(↺COMP-ANCHOR) · P26(↺EP01 P16) · P34(↺EP01 P40) · P47(↺EP01 P45) · P52(↺EP02 P33) · P58(공개 1컷 전 정지, 뒤 480) · P60(최종 컷) | 느림·공개·정지점·세로 공간 |
| SQ 1:1 | P10(↺EP02 P56) · P12 · P16(↺EP02 P54) · P20(↺COMP-DESK) · P21 · P44(P21 짝) · P30(↺EP01 P25) · P31 · P33(↺EP02 P36) · P35 · P36(↺EP01 P46) · P39 · P41 · P46 · P57 | 클로즈업·손·빠른 한마디 |
| STD 3:4 | 나머지 (P29 = EP01 P23 · P24 = COMP-BELL · P56 = COMP-COLD-1 · P55 = EP02 P26 · P22 ↔ P49 서로 같은 비율) | 대화·투샷·미디엄 |

- **P59는 3:4**(두 서류를 나란히 — 폭이 필요하다. 느림은 뒤 720px가 맡는다). 연살구 서식과 펼친 명부가 **같은 크기**로 보이게 둘 다 화면 아래 2/3에 나란히 둔다.
- 서류가 주인공인 컷(P1 · P4 · P5 · P14 · P28 · P59)은 종이를 충분히 크게.

**기억 비네트 — EP03 3컷: P6 · P11 · P28.** 방식은 §4-3 그대로(Flow가 한 장 안에 그리는 '액자 속 기억 그림', 원본 PNG 첨부, Avoid 줄에서 `panel borders`만 뺀다). beatsheet §3-2의 "원본 PNG 크롭"은 대안으로만 남는다.

| 비네트 | 원본 | 크롭 · 주의 | 의존 |
|---|---|---|---|
| P6 | EP01 P9 | 파란 바인더 위 노미란의 손바닥만. 책상의 영수증·인주는 비네트에 넣지 않는다 → **비네트 안 빨강 0** | EP01 PNG 먼저 |
| P11 | EP02 P38 | 노란 원 안으로 들어온 은반지 RIGHT 손 + 빛 가장자리의 재우 옆얼굴 | EP02 PNG 먼저 |
| P28 | EP01 P24 | 미소가 사라진 구정민 클로즈업(젖음 그대로). EP01 P24 안의 인셋은 자른다. 큰 컷 = 펼친 명부(§7-7 `PROP_ROSTER_OPEN_B`) | EP01 PNG 먼저 |

---

## 5. 일관성 규약 (프롬프트 조립)

### 5-1. 조립 순서 (prompt-smith · 모든 패널 같은 순서)

1. `Korean webtoon panel, <shot size, camera angle>:` + 이 컷의 행동 한 문장
2. **인물:** 이름 + `matching the attached reference image(s)` + 외형 토큰(주 인물은 FULL, 나머지는 SHORT, character-sheets) + 이 컷의 표정·자세(가변)
3. **장소:** LOC 토큰 또는 VIEW 토큰(§6). 같은 씬의 모든 패널은 **같은 문장**
4. **소품:** 보이는 PROP 토큰(§7), 빈 면 문구 포함
5. **조명:** LIGHT 토큰(§3-2)
6. **말풍선 자리:** `art_space` 문장(§8) — 대사·효과음이 있는 컷만
7. **STYLE_GLOBAL** (§1, 바꾸지 않는다)
8. 마지막 줄: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark, logos, signs, panel borders.` (필요하면 마침표 앞에 `extra people` 등을 덧붙인다)

### 5-2. 토큰 사용 규칙

- **불변 토큰은 문장을 바꾸지 않는다**(머리·눈·체형·식별 표식·의상). 바꿀 일이 생기면 art-director → character-designer(외형 토큰 [고정]).
- **가변**(표정·자세·손 위치·소지품 상태·조명)은 패널 묘사에만 쓰고 토큰에 섞지 않는다. 표정은 character-sheets의 표정 문장을 쓴다.
- **FULL/SHORT:** 화면의 주인공(가장 크게 보이는 1명) = FULL, 나머지 = SHORT. 손·뒷모습·실루엣만 보이면 그 부분 토큰(character-sheets의 상태 토큰).
- **첨부(attach):** 보이는 인물마다 turnaround, 얼굴이 크면 expressions도. **패널당 3장 이내 권장**(우선순위: 주 인물 → 둘째 인물 → 소품 카드·장소 플레이트·원본 컷). 첨부해도 외형 문장은 지우지 않는다(Flow가 참조를 덜 따를 때의 안전장치).
- **좌우 표식 (검수 항목):** 서하 점 = RIGHT 눈 밑 · 선임 흉터 = LEFT 눈썹 · 노미란 시계 = LEFT 손목, 머리는 RIGHT 귀 뒤로 · 클리프 손 = RIGHT 손, 은반지 = 검지. 정면 컷에서는 화면 반대편에 보인다. 뒤집히면 REGEN.
- **같은 사람 = 같은 옷.** EP01 내내 서하·선임·구정민은 의상 A 하나. 노미란은 P8–33 의상 A, P43–48 의상 B. 되감겨도 외형은 같고 표정만 다르다(world §3-3).

### 5-3. 고정 구도 반복 (COMP-* · beatsheet §3)

**반복 컷 만드는 법:** 원본 패널을 먼저 만든다 → 반복 컷 카드에 **원본 PNG를 첨부**하고 원본 프롬프트를 그대로 붙인 뒤 "바뀌는 것"만 고친다. 같은 순간을 다시 쓰는 컷(COLD)도 PNG를 복사하지 않고 다시 그린다(flow_tool은 md5가 같은 파일을 중복으로 거른다).

| ID | 원본 → 반복 | 비율 | 두 컷이 같아야 하는 것 | 반복 컷에서만 바뀌는 것 |
|---|---|---|---|---|
| COMP-COLD-1 | P1 → P38 | 3:4 | VIEW_B 어깨 너머. 화면 왼쪽 가장자리 칸막이의 수칙 종이(흰 4번 조각 + 빨간 테이프 두 줄, 오른쪽 위 바랜 색 점). 유리 너머 역광 실루엣(젖음 숨김). 스탠드 앞 왼쪽 | 없음(같은 순간) |
| COMP-COLD-2 | P2 → P39 | 1:1 | 거꾸로 앉은 접이식 의자에서 몸을 앞으로 내민 선임, 표정③ 경악, 뒤의 어두운 서가 | 없음 |
| COMP-COLD-3 | P3 → P40 | 9:16 | 앞쪽 아래 서하의 뒷모습, 유리 너머 말구멍 쪽으로 몸을 숙이는 실루엣, 구석의 4번 조각 | 없음(P40은 실루엣 얼굴이 조금 더 보여도 된다) |
| COMP-ANCHOR | P7 → P28 | 9:16 | VIEW_ANCHOR. 닫히는 방화문, 문 위 시계 **10시 정각**, RIGHT 손의 휴대폰을 RIGHT 귀에, LEFT 어깨의 네이비 토트백, 마른 옷, 같은 거리·같은 높이 | 표정만: P7 통화 끝의 부드러운 얼굴 → P28 표정② 공포로 굳음 |
| COMP-HANDOVER | P8 → P32 | 1:1 | VIEW_C 쪽 미디엄 와이드. 당직석 옆에서 열쇠 꾸러미를 손가락에 걸어 흔드는 노미란(A), 입만 웃는 미소, 문간의 서하 | 서하: P8 입을 열다 만 불안 → P32 무표정(표정⑧)으로 입 모양을 함께 |
| COMP-DESK | P9 → P33 | 1:1 | VIEW_DESK 부감. 파란 바인더 위의 노미란 손바닥, 서하 손바닥으로 떨어지는 열쇠, 책상 고정 배치 | 영수증 묶음이 **조금** 높다(셀 수 없게). 서하의 눈이 묶음을 스친다 |
| COMP-READ | P12 → P35 | 3:4 | 선임 미디엄(돋보기는 목에, 손대지 않음), 앞쪽의 서하, 유리 너머 복도 끝 떨림 | P35: 서하도 읊고 눈은 숙직실 문(그녀의 왼쪽)에. 선임 표정④ 실눈. 종이컵은 수첩 위(P34 이후) |
| COMP-BELL | P13 → P36 | 3:4 | 낭독하는 선임, 창구 쪽으로 고개를 홱 돌리는 서하, 유리 바깥 놋쇠 벨을 누른 역광의 손 | 벨 위 물방울. 서하가 투입구로 서식을 받는 동작 |
| COMP-PAUSE | P18 → P37 | 9:16 | 선임 클로즈업, 시선을 비킴(표정②), 반 박자 멈춤 | 없음 |
| COMP-STICKER | P5 → P52 | 9:16 | 수첩 표지 클로즈업, 오른쪽 위 새 스티커, 수첩을 든 손의 엄지가 스티커 위(권장 LEFT 손: P5는 RIGHT 손이 휴대폰), 카디건 소매가 손등을 반쯤 덮음 | 장소가 L2 → L1: 배경은 흐리게(P5 어두운 콘크리트 / P52 스탠드의 따뜻한 빛). 손이 떨린다 |
| 인셋 | P9 → P24 · P21 → P55 | — | 원본 PNG 크롭(새로 그리지 않음) | §4-2 5 |

### 5-4. 조립 예 (P23 · 형식 예시. 최종 문구는 prompt-smith)

```
Korean webtoon panel, over-the-shoulder medium shot from behind a young woman seated at a duty desk, looking through a thick glass service window at a man standing outside it. On the left edge of the frame, at her eye level, a small yellowed grid-paper sheet is taped to a low gray steel partition, a bright white strip across it held by two short red tape lines. The woman is Kang Seo-ha, matching the attached reference images: petite 25-year-old Korean woman, dark brown hair in a LOW ponytail at the nape tied with a plain navy hair tie, wispy see-through bangs, an oversized muted mustard-yellow cable-knit cardigan, a blank white ID card on a dark-navy lanyard; we see the back of her head and the edge of her right cheek. Beyond the glass stands Gu Jeong-min, matching the attached reference image: thin Korean man about 34, soaked black side-parted hair plastered to his forehead, water dripping from his chin and sleeves, a dripping water-darkened khaki-beige trench coat over a charcoal suit and narrow navy tie, a clear plastic file sleeve held to his chest, politely bowed, calm unblinking gaze, a puddle spreading on the dry terrazzo at his feet. Setting: cramped basement night-duty office of an old 1990s Korean district office, pale institutional-green walls with a dark green band, a round perforated steel speaking grille and a flat steel document slot in the glass, a brass dome call bell on the outer ledge, the corridor behind him dim. Lit from above by bare fluorescent tubes giving a cold green-white light; a white gooseneck desk lamp at the front left throws the only warm yellow light on her shoulder and the desk. The only red in the image is the two short tape lines on the paper sheet. Keep the upper-right quarter of the image, the dim corridor above the man's head, as calm, empty background with no important details (a speech bubble will be added there later). Korean webtoon style digital illustration, clean confident black ink linework of medium weight, flat cel shading with one soft shadow tone, semi-realistic adult proportions and faces, believable uncluttered backgrounds, muted desaturated colors, quiet uncanny office-horror mood, cinematic composition. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark, logos, signs, panel borders.
```
attach: `refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/PROP_PAGES_pair.png`

### 5-5. EP02 재사용 구도 (v1.1 · EP02)

- 목록은 beatsheet §3-1 표가 기준이다(P1 · P2 · P11 · P12 · P14 · P16 · P18 · P19 · P24 · P26 · P27 · P28 · P29 · P32 · P33 · P37 · P39 · P42 · P43 · P44 · P50 · P52 · P54 · P56).
- 이 재사용은 **구도(카메라 위치·앵글·프레이밍)만** 빌린다. EP01 COMP처럼 "같은 순간"이 아니다 — 인물·소품 상태는 EP02 문장으로 새로 쓴다. EP01 원본 PNG는 구도 레퍼런스로 첨부한다(첨부 3장 이내, 원본 PNG가 아직 없으면 문장만으로 간다).
- **구도·장소·비율까지 같게 둘 짝** (EP01 COMP 문법 그대로, 바뀌는 것만 적는다):

| EP02 | EP01 원본 | 같은 것 | 바뀌는 것 |
|---|---|---|---|
| P14 | P33 `COMP-DESK` | VIEW_DESK 부감, 책상 고정 배치, **영수증 높이 = P33**(EP02엔 되감김이 없다) | 재우의 손끝이 열쇠 근처(빛 가장자리), 수첩·롤이 책상 위 |
| P44 | P7 · P28 `COMP-ANCHOR` | 카메라 위치, 방화문, 복도 시계, 같은 거리·높이 | **VIEW_ANCHOR_0600**: 시계 06:00, 그녀는 등을 보이고 밀대를 민다(§6-5) |
| P52 | P5 `COMP-STICKER` | 수첩 표지 클로즈업, 오른쪽 위 새 스티커, 엄지가 스티커 위 | 장소 L3 새벽(배경 = 흐린 남회색 의자와 푸른 바닥빛), 수첩은 무릎 위, 다른 손은 휴대폰을 귀에 |
| P54 | P9 `COMP-DESK`(두 손) | 손바닥 / 열쇠의 두 손 구도 | 장소 L3 카운터, 손바닥이 열쇠를 서하 쪽으로 **되민다**, 그 위에 서류 B |
| P56 | P8 `COMP-HANDOVER` | 노미란의 자세·입만 웃는 미소 | 장소 L3 낮 창구(VIEW_L3_DAYWINDOW), 열쇠 없음 |
| P26 ↔ P42 | P50 (L1 와이드) | 서로 같은 VIEW·같은 비율 | 시계 04:40 ↔ 06:00, 선임 눈 감음 ↔ 옅은 미소 · 시계를 보이려면 VIEW_SIDE(§6-2-1) |

### 5-6. EP03 재사용 구도 (v1.2 · EP03)

- 목록은 beatsheet §3-1 표가 기준이다(P1 · P4 · P10 · P14 · P16 · P19 · P20 · P24–P30 · P32–P34 · P36–P38 · P40 · P42 · P44 · P45 · P47–P50 · P52 · P53 · P55 · P56). §5-5와 같이 **구도만** 빌리고 인물·소품 상태는 EP03 문장으로 새로 쓴다. 원본 PNG를 구도 레퍼런스로 첨부(3장 이내, 아직 없으면 문장만).
- **같은 순간을 다시 그리는 컷:** P1 ← EP02 P58. PNG를 복사하지 않고 새로 그린다(flow_tool은 md5 중복을 거른다).
- **구도·비율·빛까지 같아야 하는 짝** (반전이 같은 그림에 기대는 곳):

| EP03 | 원본 | 같은 것 | 바뀌는 것 |
|---|---|---|---|
| **P29** | EP01 P23 | VIEW_B 어깨 너머, 4번 조각이 프레임 안, 같은 거리·높이·비율(3:4) | 그녀의 얼굴(밤샘 · 결연 ④). 유리 너머 = 작은 라일락 민원인(카운터가 가슴께에서 자른다) |
| **P30** | EP01 P25 | 그녀 머리 위 같은 형광등, 같은 클로즈업(1:1) | **LIGHT_STEADY + LIGHT_NOFLICKER** — 떨림·어둠 없음. 표정 ②(동공만 흔들림) |
| P19 | EP01 P7 · P28 · EP02 P44 `COMP-ANCHOR` | VIEW_ANCHOR 문장 그대로(시계 10:00 = 22:00), 같은 카메라·거리·높이, 9:16, 등 뒤로 닫히는 방화문 | 휴대폰 없음: 두 팔로 명부 + 일지를 가슴에, RIGHT 손가락에 열쇠, 토트백 LEFT 어깨(character-sheets §11-3) |
| P20 | EP02 P14 · EP01 P33 `COMP-DESK` | VIEW_DESK 부감, 책상 고정 배치, **영수증 높이 = EP02 P14** | 명부를 제자리에 놓는 서하의 손, 가장자리의 선임 손 + 종이컵 |
| P16 | EP02 P54 · EP01 P9 `COMP-DESK`(두 손) | 두 손 부감 구도(1:1) | 장소 = L3 직원석(VIEW_L3_STAFFSIDE). 방향 반대: 노미란 LEFT 손바닥이 바인더를 아주 낮은 칸막이 너머로 민다, 열쇠는 서하 손 아래, 귀퉁이에 초점 밖 롤 |
| P10 | EP02 P56 · EP01 P8 `COMP-HANDOVER` | 노미란의 기울인 자세·입만 웃는 미소(1:1), 노미란 = 화면 가운데 왼쪽 | 단독 미디엄(서하는 프레임 밖 또는 오른쪽 가장자리) |
| P56 | EP01 P1 `COMP-COLD-1` | VIEW_B 어깨 너머, 화면 왼쪽 가장자리 수칙 종이, 3:4 | 유리 너머가 **비었다**. 벨·손은 프레임 밖(EP10 보호) |
| P34 | EP01 P40 `COMP-COLD-3` | 앵글② 와이드, 앞쪽 아래 서하의 뒷모습, 9:16 | 유리 너머 = 작은 노부인(말구멍이 입보다 높다), 투입구 바깥 턱의 연두 서식 |

- **EP03 안의 반복 (이 회차 앞 컷 PNG 첨부, 원본을 먼저 만든다):** P1 → P14(같은 서류·펜, 펜 끝만 닿는다) · P4 → P5(같은 카운터·같은 손, 서류만 뒤집힘) · P13 → P16 · P18(같은 직원석·같은 책상 세트) · P21 → P44(같은 일지 면) · P22 → P49(같은 서랍).
- **보호 규칙 (beatsheet §3-1):** P21 · P44는 EP01 P48 구도(상판을 짚은 손 + 초점 밖 칸막이)를 쓰지 않는다(F-23). P56–P60에 벨 누르는 손 없음(EP10). P57–P59 유리 반사 없음(EP04).
- **P25 시점 [결정]:** 대본·characters §4-10 '첫 등장'대로 **당직실 안쪽 시점**(허리 높이 카운터가 그녀를 가슴께에서 자른다, 발 없음). beatsheet의 "앵글① ↺EP01 P14"에서는 역광 상반신의 크기·자리만 빌린다 — 복도 쪽 시점으로 그리면 P26의 '발견'(양말)이 먼저 샌다.

---

## 6. 장소 고정 토큰 (LOC_*)

EP01은 world의 **L1(당직실) + L2(지하 2층 계단·복도)**만 쓴다. L2는 그림이 전혀 다른 두 공간이라 토큰을 둘로 나눴다(방화문이 둘을 잇는 공통 요소). L1-b 숙직실은 문틀 너머만 보이므로 L1의 VIEW로 다룬다. 같은 씬의 패널은 같은 LOC·VIEW 문장을 쓴다. 새 장소(EP02 이후 L3 로비 등)는 그 회차에 LOC를 추가한다.

### 6-1. 씬 ↔ 장소 대응

| scene_id | 패널 | LOC | VIEW · 메모 |
|---|---|---|---|
| S01 | P1–3 | LOC_L1_DUTYROOM | VIEW_B (콜드오픈 = 루프 2의 P38–40과 같은 순간) |
| S02 | P4–6 | LOC_L2_STAIRWELL | B2 층참. P4 배경에 사슬 격자문 |
| S02 | P7 | LOC_L2_CORRIDOR | VIEW_ANCHOR (방화문을 넘어 복도로 들어선 순간) |
| S03 | P8–10 | LOC_L1_DUTYROOM | VIEW_C · VIEW_DESK(P9) · 숙직실 문(P10) |
| S04 | P11–21 | LOC_L1_DUTYROOM | VIEW_A(P14·P16) · VIEW_B · VIEW_C |
| S05 | P22–27 | LOC_L1_DUTYROOM | VIEW_B 중심. P26 어둠 |
| S05 | P28–30 | LOC_L2_CORRIDOR | VIEW_ANCHOR (P7과 같게) |
| S06 | P31 | LOC_L2_CORRIDOR | VIEW_LONG (방화문을 등지고 복도 끝을 봄) |
| S06 | P32–39 | LOC_L1_DUTYROOM | S03·S04와 같은 VIEW |
| S07 | P40–49 | LOC_L1_DUTYROOM | P43 VIEW_NAPDOOR |
| S08 | P50–57 | LOC_L1_DUTYROOM | VIEW_C(P50) · 수칙 종이 클로즈업 |
| S09 | P58–64 | LOC_L1_DUTYROOM | 클로즈업·어깨 너머. 유리 반사 금지 |

- S02·S05·S06은 씬 안에서 장소가 바뀐다(방화문 통과·되감김). panel-director는 하위 ID(S02a/S02b, S05a/S05b, S06a/S06b)로 나누거나 패널마다 location을 적는다. 방화문·복도 시계가 이음새다.

#### 6-1-1. EP02 씬 ↔ 장소 (v1.1 · EP02)

| scene_id (beatsheet) | 패널 | LOC | VIEW · 메모 |
|---|---|---|---|
| S01 (23시대) | P1–25 | LOC_L1_DUTYROOM | P1 EP01 P61 어깨 너머(유리 프레임 밖) · P3 VIEW_SHELVES(그녀 시점 로우 앵글) · P11 VIEW_C 또는 VIEW_SIDE · P12 바닥 클로즈업 · P14 VIEW_DESK · P16·P18·P19 수칙 종이 클로즈업 · P24 서하 정면(칸막이 배경) · P25 출입문 쪽 |
| S02 (04:40) | P26–29 | LOC_L1_DUTYROOM | P26 VIEW_SIDE(시계가 보이게) · P27 수칙 종이 · P28·P29 선임 쪽 |
| S03 (05:56–06:00) | P30, P32–42 | LOC_L1_DUTYROOM | P30 서가 위 시계 클로즈업 · P32 VIEW_A(서가 위 시계가 그녀 뒤에 보인다) · P33 VIEW_C(출입문 틀) · P42 VIEW_SIDE(시계 + 유리 너머 복도) |
| S03 | **P31** | **LOC_L2_CORRIDOR** (당직실 안에서 유리 너머) | VIEW_FROM_WINDOW(§6-5). 패널 location에 L2로 적는다 |
| S04 | P43 | LOC_L1_DUTYROOM | VIEW_NAPDOOR 활짝 열림(§6-3) |
| S04 | **P44** | **LOC_L2_CORRIDOR** | VIEW_ANCHOR_0600(§6-5) |
| S05 (06:0x 새벽) | P45–52 | **LOC_L3_LOBBY** + LIGHT_L3_DAWN | P45 VIEW_L3_INWARD · P46·P49 VIEW_L3_OUTWARD(역광) · P47·P48 같은 자리의 투샷·클로즈업 · P50–52 VIEW_L3_CHAIRS (§6-6) |
| S06 (09:00 낮) | P53–58 | **LOC_L3_LOBBY** + LIGHT_L3_DAY | P53 VIEW_L3_DAYWINDOW(넓게: 시계 09:00, 초점 밖 엑스트라) · P54·P57·P58 카운터 상판 클로즈업 · P55 서하 눈 · P56 VIEW_L3_DAYWINDOW |

- S03·S04는 씬 안에서 장소가 바뀐다(P31 유리 너머 L2, P44 방화문). EP01처럼 하위 ID로 나누거나 패널마다 location을 적는다. S05→S06은 같은 LOC, **조명만 다른 두 씬**이다(같은 공간·같은 배치).

#### 6-1-2. EP03 씬 ↔ 장소 (v1.2 · EP03)

| scene_id (beatsheet) | 패널 | LOC | VIEW · 메모 |
|---|---|---|---|
| S01 (09:0x 낮) | P1–18 | **LOC_L3_LOBBY** + LIGHT_L3_DAY | P1 · P4 · P5 · P14 카운터 상판 클로즈업(§6-6) · P2 · P7 · P8 **VIEW_L3_ACROSS** · P3 · P10 · P15 VIEW_L3_DAYWINDOW(노미란 미디엄) · P9 DAYWINDOW 어깨 너머 + 손 전경 · P6 · P11 · P12 서하 클로즈업(배경 = 흐린 칸막이·벽) · **P13 · P16 · P18 VIEW_L3_STAFFSIDE** · **P17 VIEW_L3_STAIRS** (§6-6-1) |
| S02 (22:00) | P19 | LOC_L2_CORRIDOR + LIGHT_CORRIDOR | VIEW_ANCHOR (시계 10:00 = 22:00, 문장 그대로) |
| S03 (22:0x) | P20–22 | LOC_L1_DUTYROOM | P20 VIEW_DESK · P21 일지 클로즈업(칸막이·당직석 상판 프레임 밖) · P22 VIEW_DRAWERS |
| S04 | **P23** | **LOC_L2_CORRIDOR** (당직실 안에서 유리 너머) | VIEW_FROM_WINDOW_FAR + LIGHT_FLICKER_FAR. 패널 location에 L2로 적는다 |
| S04 | P24 · P25 · P27–P49 | LOC_L1_DUTYROOM | P24 COMP-BELL · P25 안쪽 시점(§5-6) · P27 · P29 · P34 VIEW_B · P28 명부 클로즈업 · P30 EP01 P25 · P31 · P46 VIEW_GLASS_CLOSE · P35 · P41 VIEW_SLOT · P36 손 · P37 · P40 수칙 종이 · P42 VIEW_A 계열(EP01 P15) · P44 = P21 · P47 직인 클로즈업 · P49 VIEW_DRAWERS |
| S04 | **P26** | **LOC_L2_CORRIDOR** (복도 쪽) | VIEW_WINDOW_FLOOR. 패널 location에 L2 |
| S05 | P50 · P52–54 | LOC_L1_DUTYROOM | P50 EP01 P11 구도 · P52 VIEW_C(출입문 틀) · P53 EP02 P40 투샷 · P54 미디엄 |
| S05 | **P51** | **LOC_L2_CORRIDOR** (당직실 안에서 유리 너머) | VIEW_FROM_WINDOW_ACROSS |
| S06 (03:00경) | P55–60 | LOC_L1_DUTYROOM | P55 VIEW_SIDE + `PROP_CLOCK_TIME_0300` · P56 VIEW_B(COMP-COLD-1) · P57 VIEW_SLOT · P58 VIEW_GRILLE · P59 책상 클로즈업(스탠드 원) · P60 얼굴 |

- S04 · S05는 씬 안에서 장소가 바뀐다(P23 · P26 · P51). EP01 · EP02처럼 하위 ID로 나누거나 패널마다 location을 적는다. 이음새 = 유리 창구.
- S01은 한 LOC 안에서 카메라만 옮긴다: **민원인 쪽(P1–P12) → 직원 쪽(P13 · P16 · P18) → 홀 와이드(P17)**. 조명은 하나. P1–P12는 직원 책상 면이 보이지 않는다(§6-6-1).

### 6-2. 당직실 방향 [고정 — 모든 L1 컷의 지리]

당직자는 당직석에 앉아 **유리 창구를 마주 본다(등은 방 안쪽).**
- **그녀의 왼쪽:** 책상 왼쪽 끝에 직각으로 붙은 낮은 회색 철제 칸막이. 수칙 종이가 **앉은 눈높이**에 붙어 있다. 더 왼쪽 옆벽에 크림색 숙직실 문.
- **그녀의 오른쪽:** 창구 벽 끝의 출입문(복도로 나가는 문).
- **그녀의 뒤:** 뒷벽의 회색 철제 서가 3열(서가 사이는 어둡다), 서가 앞 접이식 철제 의자(선임 자리), 보조 탁자(흰 전기 포트·종이컵). 서가 위에 숫자 없는 둥근 시계.
- **책상 위(앉은 사람 기준):** 앞 왼쪽 흰 거위목 스탠드 · 앞 오른쪽 베이지 내선 전화 · 오른쪽에 파란 바인더(명부)와 그 위 검은 장부(일지) · 안쪽 가운데 철제 서류함(영수증) · 그 옆 누런 테이프 디스펜서 · 작은 나무 상자의 직인 + 둥근 철제 인주 케이스 · 펜꽂이.

> world §9-1의 평면 스케치와 본문이 좌우에서 엇갈린다. 본문("앉은 사람의 왼쪽 눈높이에 수칙 종이")과 beatsheet(P51 "왼쪽 눈높이")를 따랐다. 숙직실 문 = 그녀의 왼쪽 옆벽, 출입문 = 그녀의 오른쪽은 이 결정에서 나온 배치다.

#### 6-2-1. EP02에 필요한 지리 (v1.1 · EP02 · 위 방향에서 나온 것, 새 배치 없음)

- **복도 방향:** 당직석에서 유리를 보면 **방화문·계단 쪽 = 그녀의 왼쪽**, 민원인이 나오는 어두운 끝 = 그녀의 오른쪽(LOC_L2_CORRIDOR·VIEW_LONG: 방화문을 등지고 서면 창구가 오른쪽 벽 중간). 그래서 VIEW_B(그녀 뒤)에서 계단 쪽 = 화면 왼쪽, VIEW_A(복도에서)에서 = 화면 오른쪽. P31–P32 목소리 꼬리는 이 가장자리로 간다. 출입문은 그녀의 오른쪽이라, 계단에서 온 사람은 유리 앞을 지나 출입문 틀(P33)에 선다.
- **당직실 시계는 하나:** 뒷벽 서가 위 가운데. 시계가 프레임에 들어오는 뷰 = VIEW_A(그녀 뒤 위쪽) · VIEW_SIDE(화면 왼쪽 위, 서가 위) · VIEW_SHELVES(정면). **VIEW_B · VIEW_C · VIEW_DESK에는 시계가 없다**(VIEW_C는 시계가 카메라 뒤). 시각 컷(P26 · P30 · P32 · P39 · P42)은 이 셋 중에서 고르거나, 프레임에 없으면 panel-director가 작은 시계 인셋을 판단한다(beatsheet R10).
- **S01의 시계는 배경 소품**(EP01과 같다): 바늘을 묘사하지 않는다. 바늘 문장은 §7-5의 시각 컷에만 쓴다.
- **재우의 자리:** 빛 가장자리. 서가에 한쪽 어깨를 기대거나(P11) 그녀 의자 뒤 그녀의 오른쪽 뒤(EP01 P64 카메라 쪽, P1–P3). **초록 회전의자(당직석)에 앉지 않는다.** 접이식 의자는 선임 자리다.

#### 6-2-2. EP03에 필요한 지리 (v1.2 · EP03 · §6-2 · §6-2-1에서 나온 것, 새 배치 없음)

- **복도 좌우는 뷰마다 다르다:** 당직실 **안에서** 유리를 보면 방화문·계단 = 화면 왼쪽, 어두운 끝 = **화면 오른쪽**. 복도 **쪽에서** 창구 벽을 마주 보면(VIEW_A · VIEW_WINDOW_FLOOR) 반대로 어두운 끝 = **화면 왼쪽**, 방화문 = 화면 오른쪽.
  - P23 민원인은 어두운 끝(안쪽 시점 화면 오른쪽)에서 걸어 나온다. P48 같은 쪽으로 돌아간다.
  - P26 신발 코끝 = 어두운 끝 쪽 = VIEW_WINDOW_FLOOR에서 **화면 왼쪽**.
- **창구 높이:** 말구멍 = 어른 얼굴 높이 · 투입구 = 카운터 높이 · 벨 = 유리 바깥 선반. 148cm 민원인은 안쪽 시점에서 카운터 위로 머리·어깨·보따리 윗부분만 보이고, 턱을 들어 말구멍을 올려다본다(말구멍이 입보다 높다).
- **대기 의자:** 창구 바로 맞은편(복도 반대쪽 벽)에 서로 붙은 파란 플라스틱 의자 셋 + 회색 철제 소화전함(빨강 금지). P51은 당직석에서 유리 너머 정면으로 본다.
- **서랍:** 책상 **오른쪽 끝** 아래(앉은 사람의 RIGHT, 출입문 쪽) 3단. 맨 아래 칸 = 수칙 5(world §9-1) — 그림에서는 닫힌 서랍일 뿐이다.
- **HAND-RENAME:** 안쪽 시점(VIEW_SLOT)에서 이 왼손은 **화면 오른쪽**에서 들어오고 엄지가 화면 가운데 쪽(characters §4-11).
- **시계:** P55 03:00 = VIEW_SIDE(화면 왼쪽 위, 서가 위 시계 하나). 바늘 문장은 §7-7.

### 6-3. LOC_L1_DUTYROOM — 야간 특수민원 당직실 (주 무대)

- 시간대·조명: 22:00 이후 밤. LIGHT_L1 + LIGHT_LAMP(§3-3)
- 전체 토큰 (와이드·첫 등장):
```
a cramped night-duty office in the second basement of an old 1990s Korean district office building: low ceiling with exposed gray pipes, walls painted pale institutional green below waist height with a dark green band and dingy off-white above, gray speckled terrazzo floor, bare double fluorescent tubes in wire-grille ceiling fixtures; one wall is a waist-high counter under a thick floor-to-ceiling glass service window in an aluminum frame, with a round perforated stainless-steel speaking grille at face height, a flat stainless-steel document slot at counter height, and a small brass dome call bell on the outer ledge beyond the glass; an old gray-green steel office desk with chipped paint and a thick glass top stands against the window, with a cracked green vinyl swivel chair mended with gray cloth tape, and a low gray steel partition fixed at the left end of the desk (on the seated person's left); along the back wall, gray steel shelves of plain brown archive boxes with blank labels and dark gaps between them, a gray steel folding chair and a small side table with a plain white electric kettle and paper cups; a round numeral-less wall clock above the shelves; a cream-painted wooden door with a small frosted-glass pane and a brass knob in the side wall; dry and dusty, no posters, no signs, no text anywhere
```
- **VIEW_A** — 앵글① 복도 쪽에서 유리 너머로 (P14·P16 등):
```
seen from the corridor side through the thick glass service window: the brass dome call bell on the outer ledge, the round steel speaking grille and the flat document slot in the foreground; behind the glass the duty officer sits facing the camera at the gray-green steel desk, with the white gooseneck lamp and the low gray partition on the right side of the frame (her left) and dim archive shelves behind her; the glass shows only a faint normal reflection of the corridor lights
```
- **VIEW_B** — 앵글② 그녀의 어깨 너머로 창구를 (P1·P3·P22·P23 등):
```
seen from behind the seated duty officer, over her shoulder, toward the glass service window: beyond the glass the dim terrazzo corridor; the low gray partition with a small taped paper sheet at seated eye level on the left edge of the frame; the white gooseneck lamp at the front left of the desk and the beige corded phone at the front right
```
- **VIEW_C** — 앵글③ 방 안쪽(서가 쪽)에서 창구 벽 방향으로 (P8·P11·P42·P50 등):
```
seen from the back of the room near the archive shelves: the gray-green duty desk and green swivel chair facing the glass service window, the low gray partition at the desk's left end on the left of the frame, the cream nap-room door in the left wall, the entrance door at the right end of the window wall, the corridor dim beyond the glass, dark shelf edges framing the shot
```
- **VIEW_DESK** — 책상 부감 (P9·P33 COMP-DESK, P27):
```
the duty desk seen from above at an angle: a white gooseneck lamp at the front left, a beige plastic corded phone with blank buttons at the front right, a blue two-ring plastic binder with a thick black hardcover ledger lying on it on the right side, a gray steel document tray at the back center holding a low stack of pale-yellow slips, a gray steel tape dispenser with a roll of yellowed clear tape beside the tray, a small wooden box with a wooden seal and a round metal case of red ink, a pen cup; a few blank papers under the thick glass desktop; the low gray partition with a small taped paper sheet at the left end
```
- **VIEW_NAPDOOR** — 숙직실 문 (P10·P34·P35·P42·P43):
```
the cream-painted nap-room door in the side wall of the duty room, with a small frosted-glass pane and a round brass knob
```
  - 닫힘 + 깨어 있음(P34): `a thin line of light under the closed door`
  - 열림(P43): `through the open doorframe, a glimpse of a narrow windowless nap room: the corner of a low wooden sleeping platform with a gray blanket and the small orange glow of an electric heater`
  - **활짝 열림 (v1.1 · EP02 P43):** `the cream nap-room door flung wide open: through the doorframe, a narrow windowless nap room with the corner of a low wooden sleeping platform and a rumpled gray blanket, the small orange glow of an electric heater, a simple wall coat rack with empty hooks, and on the inner wall a beige plastic wall-mounted extension handset with a coiled cord and blank buttons with no numbers` — 수화기는 EP07 씨앗(F-21, world §13-3). 설명하지 않고 보이기만 한다. 난로 빛은 주황(빨강으로 번지지 않게)
- **VIEW_SIDE** (v1.1 · EP01 shotlist §A-1 원문 그대로 · EP01 P11–13·P20·P22·P34–36·P62·P64, EP02 P26·P42 등) — 출입문 쪽 끝(그녀의 오른쪽)에서 방을 가로질러 그녀의 왼쪽(칸막이·숙직실 문)을 본다. §6-2 방향과 일치함을 확인했다(유리 = 화면 오른쪽, 서가 = 화면 왼쪽, 칸막이·숙직실 문 = 안쪽). 서가 위 시계는 화면 왼쪽 위에 들어온다:
```
seen from the entrance-door end of the duty room, looking across the room at seated eye level: the thick glass service window runs along the right side of the frame with the dim corridor beyond it; the gray-green duty desk and the cracked green swivel chair in the right foreground; the gray steel archive shelves with dark gaps and the gray steel folding chair along the left side; in the background, the low gray partition at the far end of the desk with the small taped paper sheet, and behind it the closed cream nap-room door in the far wall
```
- **VIEW_SHELVES** (v1.1 · EP02 P3 · P10 · P30 등) — 당직석에서 뒤돌아 방 안쪽(서가)을 본다. 시계가 정면에 보이는 유일한 뷰:
```
seen from the duty desk looking back into the room: the gray steel archive shelves of plain brown boxes with blank labels and dark gaps between them filling the back wall, the round numeral-less wall clock above the middle of the shelves, the gray steel folding chair and the small side table with a plain white electric kettle and paper cups in front of the shelves; the cream nap-room door at the right edge of the frame
```
- 비고: 서가 위 시계는 배경 소품이다. EP01에서 클로즈업하지 않고 바늘 위치를 묘사하지 않는다.
  - (v1.1 · EP02) EP02는 이 시계를 **타이머**로 쓴다: P26 04:40 · P30 05:56 · P32 05:57 · P39 05:59 · P42 06:00. 바늘 문장은 §7-5 `PROP_CLOCK_TIME_*`. 그 밖의 EP02 컷에서는 EP01처럼 배경이다.
  - (v1.2 · EP03) EP03은 P55에서만 바늘을 쓴다: 03:00 = §7-7 `PROP_CLOCK_TIME_0300`. 그 밖의 EP03 컷에서는 배경이다.
- **VIEW_DRAWERS** (v1.2 · EP03 P22 · P49) — 책상 오른쪽 끝 옆, 무릎 높이 로우 앵글. 서랍 3단(§6-2-2):
```
a low angle at knee height beside the right end of the duty desk: the side of the old gray-green steel office desk with chipped paint and, under its right end, a pedestal of three stacked steel drawers with plain metal pull handles and empty label slots; the gray speckled terrazzo floor below and the dark space under the desk beside them
```
  - P22: `the top drawer pulled open, holding a few plain pens and a closed round metal ink case; the middle drawer pulled open, holding a neat stack of blank plain white sheets with no writing; the bottom drawer firmly shut, her knees in navy slacks just in front of it`
  - P49: `her small hand pushing the middle drawer shut with the small wooden seal stamp and the stack of blank white sheets inside; the top drawer closed; the bottom drawer still firmly shut`
  - **맨 아래 칸은 열지도, 비추지도, 강조하지도 않는다**(F-20 — 그림만, 설명 없음). 여분 인주 케이스는 뚜껑을 닫는다(빨강이 보이지 않게). 손잡이·라벨 칸은 빈칸.
- **VIEW_SLOT** (v1.2 · EP03 P35 · P41 · P57) — 투입구 클로즈업, 당직실 안쪽에서:
```
a close-up from inside the duty room at counter height: the flat stainless-steel document slot at the bottom of the thick glass service window, the inner sill of the counter in front of it and the outer ledge just beyond the glass, the aluminum window frame at one side; beyond the glass only the dim corridor
```
  - P35 · P41: + `the glass shows only a faint normal reflection of the warm desk lamp`. P41은 유리 너머 말구멍 아래로 민원인의 입가(character-sheets §11-1).
  - **P57:** + `the glass above the slot is plain and dark with no reflection at all; the frame stays at counter height, no face, no body`. HAND-RENAME 왼손은 화면 오른쪽에서 들어온다(character-sheets §11-2).
- **VIEW_GRILLE** (v1.2 · EP03 P58) — 말구멍 익스트림 클로즈업, 반사 없음(EP04 보호):
```
an extreme close-up of the round perforated stainless-steel speaking grille set in the thick glass at face height, its small holes dark; beyond the glass nothing but deep darkness; the glass is plain and dark with no reflection at all: no face, no figure, no light from the room
```
- **VIEW_GLASS_CLOSE** (v1.2 · EP03 P31 · P46) — 유리에 바짝 다가온 얼굴, 당직실 안쪽에서:
```
a close-up from inside the duty room through the thick glass service window, just below the round perforated steel speaking grille: a face close behind the glass on the corridor side, the aluminum window frame at one edge; the glass shows only a faint normal reflection of the warm desk lamp, never a second face or figure
```
  - + `LIGHT_GLASS_GLOW`(§3-2). 말구멍은 그녀 입보다 높다 — 얼굴은 말구멍 아래, 턱을 든다.

### 6-4. LOC_L2_STAIRWELL — 지하 2층 비상계단 층참

- 시간대·조명: 21:5x, LIGHT_STAIR. **마른 밤**을 세우는 곳이다(F-13): 모든 면이 건조하다.
```
the bare concrete emergency stairwell in the basement of an old 1990s Korean district office: worn concrete steps, chipped dark-green steel handrails, landing walls painted pale institutional green below with a dark green band and dingy off-white above, one small bulb in a wire cage on the landing giving a dim white light; on the second-basement landing a heavy gray steel fire door with an overhead door-closer arm, a narrow vertical wire-glass window and a horizontal push bar; the stairs continue half a flight further down into darkness and end at a steel grille gate locked with a heavy chain and padlock, only the chain faintly glinting; everything dry and dusty, no exit signs, no text anywhere
```
- 비고: 사슬 격자문은 P4 배경에서만 보인다(대사로 말하지 않는다). 비상구 표지판·초록 피난 그림 금지.

### 6-5. LOC_L2_CORRIDOR — 지하 2층 복도 (앵커 장소)

- 시간대·조명: LIGHT_CORRIDOR
```
a long, straight, narrow basement corridor of an old 1990s Korean district office: low ceiling with exposed pipes and cable trays, fluorescent fixtures every few meters with only every other tube lit and the far third of the corridor fading into darkness, pale institutional-green lower walls with a dark green band, dingy off-white upper walls, gray speckled terrazzo floor; a row of identical gray steel doors with blank name plates along one wall, and midway along the other wall the duty room's door and its warm-lit glass service window, the only warm light in the corridor, with three joined blue plastic waiting chairs and a gray steel fire-hose cabinet opposite it; at the near end a heavy gray steel fire door with a push bar and a round numeral-less wall clock above it; dry floor, no signs, no text anywhere
```
- **VIEW_ANCHOR** — 앵커 고정 구도 (P7·P28, world §9-3):
```
camera in the corridor at eye level facing the fire door: the heavy gray steel fire door swinging shut right behind her, above the door a round wall clock with a plain white face, thin black rim, black hands and only twelve tick marks, showing exactly ten o'clock (the short hour hand pointing to the 10 o'clock position, the long minute hand pointing straight up), pale green walls with a dark green band on both sides, exposed pipes overhead
```
- **VIEW_LONG** — 방화문을 등지고 복도 끝을 봄 (P31):
```
looking down the long corridor away from the fire door: the warm-lit glass service window glowing midway along the right wall, the blue waiting chairs opposite it on the left, alternate fluorescent tubes lit along the ceiling, the far third of the corridor sinking into darkness
```
- 비고: 시계는 **10:00**이다. Flow가 광고 시계처럼 10:10으로 그리기 쉽다 → 분침이 12를 가리키지 않으면 REGEN(반전 1은 P7·P28 시계가 같아야 선다).
- **VIEW_FROM_WINDOW** (v1.1 · EP02 P31) — 당직실 안에서 유리 창구 너머로 복도의 **가까운 끝(방화문 쪽, 그녀의 왼쪽)**을 비스듬히 본다. 아무도 없다. 어두운 끝은 반대쪽이라 프레임 밖:
```
seen from inside the duty room through the thick glass service window, looking diagonally to the left along the corridor toward its near end: the heavy gray steel fire door with its push bar at the lit near end, the round numeral-less wall clock above it, alternate fluorescent tubes lit along the ceiling, the corridor completely empty, nobody there; the glass shows only a faint normal reflection of the warm desk lamp
```
  - 시계 = `PROP_CLOCK_TIME_0557`(§7-5). 작게 보여도 분침이 12 바로 왼쪽이어야 한다. + LIGHT_CORRIDOR + LIGHT_NOFLICKER
- **VIEW_ANCHOR_0600** (v1.1 · EP02 P44 · COMP-ANCHOR의 반대) — VIEW_ANCHOR와 같은 카메라 위치·같은 거리·같은 높이. 이번엔 그녀가 **등을 보이고** 문을 연다:
```
camera in the corridor at eye level facing the fire door, exactly the same position as the earlier anchor shot: she stands with her back to the camera and pushes the horizontal push bar, the heavy gray steel fire door swinging open away from her into the dim stairwell; above the door the round wall clock with a plain white face, a thin black rim, black hands and only twelve tick marks shows exactly six o'clock, the short hour hand pointing straight down and the long minute hand pointing straight up in one straight vertical line; pale green walls with a dark green band on both sides, exposed pipes overhead
```
  - 시계가 06:00(세로 일직선)이 아니면 REGEN. 첨부 첫 자리 = EP01 panel_007 PNG(있으면). [선택] 열리는 문 너머 계단 위쪽에서 떨어지는 아주 옅은 차가운 회청색 빛(06:00 = 계단이 1층에 닿는다, world §1-3) — 쓰면 그 한 구절만 덧붙인다.
- **VIEW_FROM_WINDOW_FAR** (v1.2 · EP03 P23) — 당직실 안에서 유리 너머 복도의 **어두운 끝(그녀의 오른쪽)**을 비스듬히. VIEW_FROM_WINDOW(가까운 끝)의 반대 방향:
```
seen from inside the duty room through the thick glass service window, looking diagonally to the right along the corridor toward its far end: alternate fluorescent tubes lit along the low ceiling, the row of identical gray steel doors with blank name plates receding along the opposite wall, the far third of the corridor sinking into greenish blue-black darkness; the glass shows only a faint normal reflection of the warm desk lamp
```
  - + LIGHT_CORRIDOR + `LIGHT_FLICKER_FAR` + 민원인 실루엣(character-sheets §11-1). 방화문·복도 시계는 프레임 밖(반대쪽).
- **VIEW_FROM_WINDOW_ACROSS** (v1.2 · EP03 P51) — 당직석에서 유리 너머 정면, 복도 맞은편 벽:
```
seen from the duty desk through the thick glass service window, looking straight across the narrow corridor at the opposite wall: three joined blue plastic waiting chairs against the pale institutional-green wall with its dark green band, a gray steel fire-hose cabinet beside them, one fluorescent tube lit on the low ceiling above, the gray speckled terrazzo floor between; the glass shows only a faint normal reflection of the warm desk lamp
```
  - + LIGHT_CORRIDOR. 의자에 앉은 재우는 차가운 빛만 받고 정상 그림자를 드리운다(character-sheets §11-4). 소화전함은 회색(빨강 금지).
- **VIEW_WINDOW_FLOOR** (v1.2 · EP03 P26) — 복도 쪽 바닥 높이, 창구 벽을 마주 본다(EP01 P16 '발견' 문법):
```
a low close-up on the corridor side at floor level, facing the duty room's window wall: the dry gray speckled terrazzo floor meeting the base of the pale institutional-green wall with its dark green band below the service window counter; cold, dim corridor light with only a faint warm glow falling from the window above; no water, no dust, no footprints
```
  - 이 뷰에서 복도 끝 어둠 = **화면 왼쪽**, 방화문 = 화면 오른쪽(§6-2-2). 민원인 신발의 코끝은 화면 왼쪽을 향한다.

### 6-6. LOC_L3_LOBBY — 1층 본관 로비 (v1.1 · EP02 신규)

- 원본: world §9-4(2층 높이 홀, 광택 베이지 석재 바닥, 낮은 칸막이의 긴 민원 창구 카운터, 남회색 대기 의자 줄, 번호 표시기·안내판 없음 또는 꺼진 검은 면, 안쪽 구석의 회색 철문, 06:00 유리 정문 너머 차가운 푸른빛) + beatsheet §3-4 · characters §4-9.
- 쓰는 곳: EP02 S05 P45–52(새벽 06:0x, **비어 있음**) · S06 P53–58(09:00 낮, 초점 밖 엑스트라 몇). **같은 공간, 조명 두 벌**(LIGHT_L3_DAWN / LIGHT_L3_DAY, §3-2). 시리즈 자산이다(이후 회차의 퇴근·낮 장면).
- 지하가 아니다: 창(유리 정문)과 바깥빛이 있는 **유일한 장소**다. §3-1 규칙 6(창문·낮빛 금지)은 L1·L2에만 적용된다(§10-4).

**배치 [고정 — 모든 L3 컷의 지리]:** 유리 정문에서 홀 안쪽을 보고 섰을 때
- **왼쪽 벽을 따라** 허리 높이의 긴 민원 창구 카운터. 낮은 간유리 칸막이로 창구가 나뉘고, 앞쪽에 한 단 높은 턱(서류 받침)이 있어 **민원인 쪽에서는 직원 책상 면이 보이지 않는다**(R11을 그림 구조로 지킨다). 창구 위 벽에 꺼진 검은 표시 면 한 줄. 카운터 뒤 벽 높은 곳, 카운터 가운데 위에 **큰 둥근 벽시계**(숫자 없음, 지하 시계와 같은 디자인).
- **노미란의 낮 창구** = 시계 바로 아래 칸(P53에서 시계와 그녀가 한 프레임에 들어온다).
- **가운데~오른쪽:** 카운터를 향한 남회색 대기 의자 줄(서로 붙은 의자).
- **안쪽 오른쪽 구석:** 지하로 내려가는 비상계단의 무표시 회색 철문(P45 서하가 나오는 문).
- **앞벽:** 어두운 알루미늄 틀의 키 큰 유리 정문 줄. 새벽빛·낮빛은 여기서 들어와 바닥에 길게 눕는다.
- 천장: 2층 높이, 흰 판 천장에 납작한 사각 등. 비상구 표시·안내판·국기·포스터·화분 없음.

- 전체 토큰 (와이드·첫 등장):
```
the ground-floor main lobby of an old 1990s Korean district office building: a wide, double-height hall with a high ceiling of plain white panels and rows of flat square ceiling lights, warm off-white walls with pale beige stone cladding up to waist height, a large floor of polished beige stone tiles with a soft sheen; along one side wall a long, waist-high civil-service counter with a pale gray laminate top and a raised front ledge, divided into separate service windows by low frosted-glass partitions, the staff desks behind it hidden below the ledge, and above the windows a row of switched-off flat black display panels showing nothing; high on the wall behind the middle of the counter, a large round wall clock with a plain white face, a thin black rim, black hands and only twelve small tick marks, no numerals; in the open floor, several rows of joined navy-gray waiting chairs facing the counter; the front wall is a row of tall glass entrance doors in dark aluminum frames; in the far inner corner, a plain gray steel door to the emergency stairs; clean, orderly and quiet, no posters, no signs, no flags, no plants, no text anywhere
```
- **VIEW_L3_INWARD** — 유리 정문 바로 안쪽에서 홀 안쪽으로 (P45 · 낮 와이드):
```
seen from just inside the glass entrance doors, looking into the hall: the long service counter runs along the left side of the frame with the dark blank display panels above it and the large round wall clock high on the wall above the middle of the counter; rows of navy-gray waiting chairs fill the middle and right side; in the far right corner, the plain gray steel door to the emergency stairs; the light from the glass doors behind the camera lies in long pale rectangles across the polished floor, stretching away into the hall
```
- **VIEW_L3_OUTWARD** — 안쪽 구석(계단 철문 근처)에서 정문 쪽으로, 역광 (P46 · P49):
```
seen from deep inside the hall near the inner corner, looking toward the front: the row of tall glass entrance doors fills the far wall, glowing with the light from outside; the long service counter runs along the right side of the frame; rows of navy-gray waiting chairs on the left; long pale rectangles of light from the doors lie across the polished floor toward the camera, and anyone standing between the camera and the doors is backlit
```
- **VIEW_L3_CHAIRS** — 대기 의자 줄 사이, 앉은 눈높이 (P50–52):
```
among the rows of joined navy-gray waiting chairs in the middle of the hall, at seated eye level: empty chairs all around her, the polished beige floor striped with long pale rectangles of light from the glass doors, the glass entrance doors softly out of focus in the background
```
- **VIEW_L3_DAYWINDOW** — 낮 창구, 민원인 쪽에서 (P53 · P56 · 카운터 클로즈업의 배경):
```
one service window of the long counter seen from the citizen's side at standing eye level: the pale gray laminate counter top and its raised front ledge in the foreground, low frosted-glass partitions on both sides of the window, the staff member behind the ledge visible from the chest up, her desk surface hidden below the ledge and out of view; behind her the warm off-white wall with a dark blank display panel, and the large round wall clock high on the wall above her
```
  - 카운터 상판 클로즈업(P54 · P57 · P58): `on the pale gray laminate counter top of a service window, a low frosted-glass partition at the edge of the frame` + 소품. **카운터 너머 직원 책상 면·책상 위 물건은 그리지 않는다**(R11).

- 조명: 새벽 = `LIGHT_L3_DAWN`, 09:00 = `LIGHT_L3_DAY`(§3-2). 시계: 새벽 컷에서 보이면 `PROP_CLOCK_TIME_DAWN`, 09:00 = `PROP_CLOCK_TIME_0900`(§7-5).
- 사람: 새벽 = **서하와 노미란 외에 아무도 없다**(Avoid 줄에 `extra people`). 09:00 = character-sheets §10-4의 엑스트라 문장(초점 밖, 주요 인물의 주색 금지). 엑스트라는 카운터 앞 전경이나 노미란 창구에 오지 않는다.
- 바깥(유리 너머): 새벽의 깊은 푸른 하늘과 빈 포장 앞마당뿐. 낮에는 흐린 회색 겨울빛. **간판·차·번호판·글자 없음.** 비 없음(마른 밤이 마른 새벽으로 이어진다).

#### 6-6-1. L3 직원석 · 위층 계단 · EP03 뷰 (v1.2 · EP03)

EP03 S01(P1–P18)은 L3 낮을 **카운터 안쪽까지** 쓴다. 위 배치는 그대로 두고 아래를 덧붙인다(beatsheet §3-3 · §6 · characters §4-12 "배치는 art-director").

**배치 추가 [고정]:**
- **직원석 줄:** 카운터의 높은 앞턱 뒤, 창구마다 직원 책상 하나. 직원은 카운터(민원인)를 향해 앉고, 등 뒤가 회백 벽(그 높은 곳에 큰 시계·꺼진 표시 면). 책상 사이는 카운터의 것과 같은 간유리지만 **책상 위 한 뼘 높이의 아주 낮은 칸막이**다(바인더를 밀어 넘길 수 있는 높이).
- **노미란의 낮 책상** = 시계 바로 아래 창구(§6-6). **서하의 낮 책상 = 바로 옆, 노미란의 LEFT 쪽**(민원인 쪽에서 보면 노미란 창구의 오른쪽 이웃). 그래서 노미란의 LEFT 손(금시계)이 바인더를 칸막이 너머로 민다(P16). EP02 P53의 '오른쪽 가장자리 너머 이웃 창구의 초점 밖 직원'은 그 다음 창구로 읽는다(EP02 프롬프트 변경 없음).
- **노미란 낮 책상 위 [고정]:** 앞(카운터 쪽) 가운데는 빈 면 · 안쪽 가운데 꺼진 모니터(검은 화면) · **안쪽 오른쪽 귀퉁이 = 회색 철제 서류 받침(빈 종이 몇 장) + 펜꽂이 + 뚜껑 닫힌 작은 나무 직인 상자 + 그 옆에 옆으로 눕힌 빨간 비닐테이프 롤**(§2-4-2) · 왼쪽(서하 쪽) = 파란 명부 바인더(P13, 그녀 팔꿈치 옆).
- **서하의 낮 책상 [고정]:** 거의 빈 신입의 책상 — 꺼진 모니터, 펜꽂이뿐. 의자는 노미란과 같은 회색 사무용 의자. P16부터 명부 → P18 명부 + 일지 + 열쇠.
  - **토트백 [art-director 연속성 결정]:** EP02 P53–P56의 서하는 토트백을 LEFT 어깨에 메고 카운터 앞에 서 있다. 그래서 **P1–P12 토트백 = LEFT 어깨**, **P13의 서하 책상 의자는 비어 있다**(대본 P13 괄호의 "의자 등받이에 네이비 토트백"을 이것으로 대신한다 — 대사·비트 변경 없음), **P16부터 의자 등받이**(그녀가 카운터 안쪽 자기 자리로 돌아온 뒤). 그 책상이 서하의 것이라는 표시는 P16(명부가 그녀의 손 쪽으로 넘어간다)이 맡는다.
- **결재판 자리:** P1–P15 카운터 상판의 노미란 쪽 가장자리(앞턱 바로 앞)에 놓여 있다 → P7 그녀가 손끝으로 두드린다(대본 "책상 위"를 카운터 상판으로 읽는다 — 책상 면은 P13 전에 보이지 않는다) → P15 서류를 끼운다 → P17 LEFT 겨드랑이.
- **P1–P12: 직원 책상 면은 프레임 밖**(EP02 R11 연장 — 롤의 첫 노출은 P13). 민원인 쪽 뷰는 카운터 상판·앞턱 위만 쓴다.
- **위층 계단 [고정]:** 홀 **안쪽 끝 벽(정문 맞은편)의 왼쪽**, 카운터 안쪽 끝 바로 너머에서 넓은 석재 계단이 안쪽 벽을 따라 위층으로 오른다(바닥과 같은 광택 베이지 석재, 짙은 회색 금속 난간 + 매끈한 나무 손잡이). 같은 벽의 **오른쪽 구석 = 지하로 내려가는 작은 회색 철문**(§6-6). 위로 = 넓고 밝은 돌계단 / 아래로 = 작은 회색 철문 — 그림 운율만(F-40, 대사로 설명하지 않는다). 계단 위쪽은 프레임 위로 나가고, 위층의 사람·표지·국기는 그리지 않는다(과장 디자인은 EP12).
  - EP02 L3 컷과의 관계: VIEW_L3_OUTWARD는 반대 방향이라 계단이 안 보인다. VIEW_L3_INWARD(EP02 P45) 원문은 계단을 말하지 않는다 — 그 컷의 안쪽 왼쪽 끝은 작고 흐리므로 그대로 둔다(EP02 프롬프트 변경 없음). panel-validator는 EP02 P45에 계단이 없어도 실패로 보지 않는다.
- **시계:** EP03 S01은 시계를 **프레임 밖에 두는 것이 기본**이다(beatsheet §3-3: 09:0x는 EP02 P53에서 이미 보였다). 민원인 쪽 뷰는 노미란 머리 위에서 자른다. P17 와이드에 들어오면 `PROP_CLOCK_TIME_0920`(§7-7). P1–P15에 들어오게 되면 EP02 `_0900` 문장을 쓴다(몇 분 차이는 그리지 않는다).

- **VIEW_L3_ACROSS** (v1.2 · EP03 P2 · P7 · P8) — 카운터를 사이에 둔 옆모습 투샷. 책상 면은 보이지 않는다:
```
seen from the side at standing eye level, looking along the line of the long service counter: the pale gray laminate counter top with its raised front ledge crosses the lower part of the frame between two people facing each other across it, the staff member behind the ledge on the left of the frame and the visitor standing in front of the counter on the right; beside them a low frosted-glass partition at the edge of the service window, softly out of focus, and further service windows receding behind; the warm off-white wall above; the large wall clock is out of the frame; everything below the counter top is out of the frame
```
  - 축: **노미란 = 화면 왼쪽, 서하 = 화면 오른쪽**(EP02 P56 · EP03 P10 COMP-HANDOVER와 같은 쪽). S01 투샷은 이 축을 지킨다(panel-director가 씬 전체를 뒤집을 때만 반대).
- **VIEW_L3_STAFFSIDE** (v1.2 · EP03 P13 · P16 · P18) — 카운터 안쪽, 직원석. 노미란 책상 뒤 오른쪽에서 카운터 쪽을 본다(시계·표시 면은 카메라 뒤):
```
seen from the staff side behind the long service counter, at standing eye level, from just behind and to the right of one staff desk: in the foreground a plain pale gray office desk with a laminate top and thin steel legs, a switched-off flat computer monitor with a plain black screen at the back, a gray steel document tray holding a few blank sheets, a pen cup and a small closed wooden box at its back right corner; beyond the desk the back of the counter's raised ledge and the pale gray counter top, and past them the public side of the bright lobby with its navy-gray waiting chairs, softly out of focus; on the left, a very low frosted-glass divider only a hand's height above the desktops separates this desk from the next staff desk, which is almost bare: another switched-off monitor with a plain black screen and a pen cup
```
  - P13: + `PROP_TAPE_ROLL_DESK`(§7-7) + `a blue two-ring plastic binder with a blank cover lying on the left side of the desk, by her elbow` + 카운터 상판의 서류 B·결재판 + P13 빨강 문장(§2-4-2).
  - P16: 같은 뷰, 두 손 부감으로 가깝게(§5-6). 롤은 노미란 쪽 프레임 귀퉁이에 초점 밖.
  - P18: 같은 뷰를 왼쪽 이웃 책상(서하)으로 옮긴다 — 노미란 책상은 프레임 오른쪽 밖(롤 없음).
- **VIEW_L3_STAIRS** (v1.2 · EP03 P17) — 홀 앞쪽에서 안쪽 왼쪽 구석으로 비스듬히. 위 = 계단의 노미란, 아래 = 카운터의 작은 서하:
```
seen from the front part of the hall at standing eye level, looking diagonally toward its far left corner: the long service counter with its low frosted-glass partitions runs along the left side of the frame, receding toward the far end; beyond the inner end of the counter, a broad open staircase of polished beige stone with a dark gray metal balustrade and a smooth wooden handrail rises along the far wall toward the upper floor, its top leaving the frame; small in the far right corner of the far wall, the plain gray steel door to the emergency stairs; rows of navy-gray waiting chairs on the right; the polished floor softly reflecting the flat light; no people and no signs on the upper floor
```
  - 시계가 프레임에 들면 `PROP_CLOCK_TIME_0920`. 엑스트라(character-sheets §11-4)는 의자·바닥에만, 초점 밖 — 계단 위에는 노미란뿐.

---

## 7. 소품 토큰 (PROP_*)

> 모든 문서·화면·판은 **빈 면**이다. 영문 토큰에 이미 "blank / no writing"이 들어 있으니 줄이지 말고 넣는다. 인물 부속 소품(수첩·스티커·공무원증·휴대폰·손)은 characters §4-6과 같은 문장이다.

### 7-1. 수칙 종이와 4번 조각

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_RULESHEET` (클로즈업) | `the rules sheet: a single yellowed cream A5 grid-paper page with pale blue-gray grid lines, its left edge raggedly torn from a notebook binding, fixed upright to a low gray steel partition with four pieces of old yellowed clear tape at the corners, the tape edges browned and lifting; the page is completely blank with no writing; about four-sevenths of the way down, a strip of thick bright-white office paper with perfectly straight ruler-cut edges is pasted across ninety percent of the page width, held by two horizontal strips of bright red vinyl tape along its top and bottom edges, the white strip crisp and unfaded; in the top-right corner a small round hand-drawn sticker, very sun-faded; in the bottom-right corner a faint pale-brown half ring of an old coffee stain` | P19 · P51 · P54 · P57 · P60 |
| `PROP_RULESHEET_SMALL` (미디엄·와이드의 배경) | `on the partition, a small yellowed grid-paper sheet with a bright white strip across it held by two short red tape lines, and a tiny faded colored dot in its top-right corner` | P1 · P3 · P12 · P17 · P22 · P23 · P35 · P38 · P40 등 |
| `PROP_RULE4_PATCH` (익스트림 클로즈업) | `an extreme close-up of a strip of thick bright-white office paper with perfectly straight ruler-cut edges pasted on yellowed cream grid paper, held by two horizontal strips of glossy bright red vinyl tape along its top and bottom edges; the white strip is completely blank` | P58 · P63 |
| `PROP_TAPE_LIFT` (twist-plan §7-3 · F-51) | `the right end of the lower red tape strip is slightly lifted off the paper and curled up, with a hairline shadow beneath it` | **클로즈업에서만**: P58 · P63 (P57은 선택). 와이드에서는 언급하지 않는다 |

- 4번 조각의 위치: 종이 위에서 4/7 지점, 폭 90%, 조항 한 줄 높이. 모든 컷에서 같은 자리.
- 7개 조항 자리는 빈 모눈이다. 가짜 글씨·줄 긋기·번호가 생기면 REGEN.

### 7-2. 스티커 · 수첩 · 커피 링 · 종이컵

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_STICKER_NEW` | `a round hand-cut sticker about 4 cm wide with a slightly wobbly white border, hand-drawn in bright marker: a chubby golden-orange cat curled up asleep on a lemon-yellow crescent moon on a turquoise circle with three tiny white star dots; the cat's face is toward the viewer and its own LEFT ear (on the viewer's right) is drawn noticeably bigger than the other; vivid, glossy, brand new; golden orange, not red; no text` | P5 · P52 · P53(위) · P64 |
| `PROP_STICKER_FADED` | `the exact same hand-drawn sticker but very old and sun-bleached: colors washed out to pale cream, faded straw-yellow and grayish mint, the white border yellowed, edges slightly lifting; same drawing, the cat's own LEFT ear (on the viewer's right) still bigger; no text` | P19 · P51 · P53(아래) |
| `PROP_NOTEBOOK` | `an A5 notebook with a dusty navy linen cover and visible white sewn-thread binding at the spine, cream grid-paper pages with pale blue-gray grid lines; a small round hand-drawn sticker on the top-right corner of the front cover; no text, no logo` | P5 · P34 · P50 · P52 · P54 · P57 · P64 |
| `PROP_NOTEBOOK_OPEN` | `the notebook lies open, its cream grid pages completely blank` | P34 · P50 · P54 |
| `PROP_RING_NEW` (P34 이후) | `a fresh light-brown coffee ring, a full circle the size of a paper cup's base, on the bottom-right corner of the notebook's open right-hand page` | P50 · P54 |
| `PROP_RING_FADED` | `a faint, sun-faded pale-brown half ring of an old coffee stain on the bottom-right corner of the sheet` | 수칙 종이 클로즈업(PROP_RULESHEET에 포함) |
| `PROP_PAPER_CUP` | `a plain white paper cup of light-brown instant coffee, no logo, no print` | P11 · P12 · P21 · P34 |

- 스티커의 큰 귀는 **고양이 자신의 왼쪽 귀**(화면 오른쪽)다. 두 스티커가 같은 그림이라는 것이 반전 2의 생명이다(P53).
- 커피 링은 갈색이다. 새 링은 수첩 펼친 면 오른쪽 아래, 바랜 링은 수칙 종이 오른쪽 아래 — 같은 귀퉁이(twist-plan §2-3 ④).

### 7-3. 책상 · 창구 소품

| 토큰 | 영문 | 상태 변화 |
|---|---|---|
| `PROP_RECEIPTS` | `a low, neat stack of palm-sized pale-yellow carbon-copy slips in a gray steel document tray, each slip blank except for one small red circular stamp mark` | P33: `the stack of pale-yellow slips is slightly higher than before, just a little` — **셀 수 있게 그리지 않는다** |
| `PROP_ROSTER` | 닫힘 `a blue two-ring plastic binder with a blank cover` / 펼침 `open to a page of blank grid table cells, no writing` | P9·P33 닫힘(노미란 손바닥 아래), P41 펼쳐 유리에 댄다 |
| `PROP_DUTYLOG` | 닫힘 `a thick black hardcover ledger with a gray cloth ribbon bookmark` / 펼침 `open to blank ruled lines` | P48: 쓰는 손과 펜이 쓰는 자리를 가린다. 글씨가 보이지 않는 각도 |
| `PROP_FORM_DEATH` | `a blank pale grayish-blue administrative form printed only with empty boxes and lines and an empty circle for a seal at the lower right, no writing` | 구정민이 들 때: `inside a clear plastic file sleeve beaded with water drops, the form itself dry` / P15 이후 서하 손에서는 비닐 없이 / P27 `a half-pressed red circular seal mark on the form's seal circle, only half of the circle printed` / P45 직인이 서식 위에서 멈춤 |
| `PROP_NOTICE` (보완 요청서) | `a plain white sheet with one red circular seal mark and no writing` | P49 구정민이 가슴에 안고 돌아간다 |
| `PROP_SEAL` | `a small cylindrical wooden seal stamp, its end wet with red ink, a round metal case of red ink paste, kept in a small wooden box` · 찍힌 자국 `a solid red circle with no characters inside` | 책상 위 고정. P44–46 노미란의 손 |
| `PROP_CALLBELL` | `a small brass dome call bell on a round black base, dull gold` | P16·P36 `water drops beaded on its brass dome` · P27 `trembling by itself` |
| `PROP_CLOCK` | `a round wall clock with a plain white face, a thin black rim, black hands and only twelve small tick marks, no numerals, no logo` | 복도 시계(VIEW_ANCHOR)는 10:00 고정. 당직실 시계는 배경만 |
| `PROP_KEYS` | `a bunch of five or six old steel keys of different sizes on a worn steel ring with a blank gray plastic tag` | P8 노미란 손가락 → P9 서하 손바닥 → 이후 책상 위 서하 오른손 곁 |
| `PROP_EXT_PHONE` | `a beige plastic corded desk phone with a coiled cord and blank buttons with no numbers` | P21: 울리지 않음(평범하게) |
| `PROP_LAMP` | `a white gooseneck desk lamp with a warm yellow bulb` | 늘 켜져 있다 |
| `PROP_DISPENSER` | `a gray steel tape dispenser holding a roll of old yellowed clear tape` | P54 `a hand-length strip of the yellowed clear tape pulled out from the dispenser` |
| `PROP_KETTLE` | `a plain white electric kettle with no logo` | P50 선임이 들고 나간다 |
| `PROP_FOLDING_CHAIR` | `a gray steel folding chair turned backwards` | 선임 자리. P50 빈 의자 |
| `PROP_SWIVEL_CHAIR` | `a cracked green vinyl office swivel chair mended with gray cloth tape` | 서하 자리(선임은 절대 앉지 않는다). P27 `the empty chair still slowly turning` |
| `PROP_PEN` | `a plain ballpoint pen with no print` | P27 `rolling across the desk` |
| `PROP_TAPE_ROLL_RED` | `a palm-sized roll of glossy bright red vinyl tape with a short torn tail` | P61–64 클리프의 손. P64 서하의 수첩 옆에 놓인다 |

### 7-4. 연속성 타임라인 (그림에서 바뀌는 것만)

| 대상 | 루프 1 | 루프 2 |
|---|---|---|
| 영수증 묶음 | P9 낮다 | P33 조금 높다 (세지 않는다) |
| 종이컵 | P11 책상 모서리, 손대지 않음 (P12·P21에도 그대로) | P34 펼친 수첩 오른쪽 아래에 내려놓음 → P50·P54 새 커피 링 |
| 구정민의 물 | P16 작은 웅덩이·발자국 → P17 조금 넓음 → P22 투입구 아래까지 | P36 벨 위 물방울 → P42 웅덩이만 남음 → P44 다시 유리 앞 → P49 복도 끝 어둠으로 |
| 열쇠 | P8–9 노미란 → 서하 | P32–33 같은 일의 반복 |
| 노미란 의상 | A | P32–33 A → P43–48 B |
| 숙직실 문 | P10 닫히는 문 | P34 문틈 불빛 → P42 노크 → P43 열림 → P50 닫힘 |

### 7-5. EP02 소품 토큰 (v1.1 · EP02)

> 모두 **빈 면**이다. 영문의 "blank / no writing"을 줄이지 않는다. 서류 내용은 낭독 말풍선(P35)과 대사로만 전한다. 서명은 그리지 않는다(재우의 "내 칸은 채웠어"는 대사로만, beatsheet R17).

**인수인계서 (world §5-3: 흰 종이, 굵은 이중 테두리, 아래쪽 빈 서명란 두 곳)**

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_HANDOVER_A` (재우의 서류) | `a single sheet of plain bright-white A4 paper, portrait, with a bold dark-gray double-line border around its edge, a few empty ruled boxes inside, and near the bottom two empty signature lines one above the other, each ending in a small empty printed circle for a seal; completely blank: no writing, no signature, no seal mark, no red` | P33(실루엣의 손, 흰 종이 한 장으로만) · P34 · P35 · P40 · P41 · P55 비네트 |
| `PROP_HANDOVER_B` (노미란의 서류) | `the identical form: a single sheet of plain bright-white A4 paper, portrait, with a bold dark-gray double-line border, a few empty ruled boxes, and near the bottom two signature lines one above the other, each ending in a small printed circle; on the UPPER line's circle sits one solid bright red seal mark with no characters inside; the lower line and its circle are empty; no writing and no signature anywhere` | P54 · P55(큰 컷) · P57 · P58 |
| `PROP_HANDOVER_FOLDED` (b1 단서) | `the corner of a folded sheet of bright-white paper with a bold dark-gray double-line border sticking out of the front pocket of his charcoal cardigan` | P15 (권장: **LEFT** 앞주머니 — 롤의 자리인 RIGHT 주머니와 나눈다, characters §4-8) |

- **A와 B는 같은 서식이다.** 테두리·칸·두 서명란·두 원의 위치가 같고, **다른 것은 B의 위 줄(인계자 줄) 원 안의 붉은 원 하나**뿐이다. 그래서 A에 접힌 자국·구김·얼룩을 그리지 않는다(P55 비네트 대조에서 차이가 둘이 되면 안 된다). 둘 다 같은 레퍼런스 카드 `PROP_HANDOVER_pair`를 첨부한다(character-sheets §10-6).
- 서명란 위치: 종이 아래쪽 1/4 안, 오른쪽으로 치우친 가로줄 둘(위 = 인계자, 아래 = 인수자). P35 손끝은 아래 줄에서 멈추고, P57 노미란의 검지는 **아래 줄**을 짚고, P58 펜은 **아래 줄** 위 한 뼘에 멈춘다.

**덮개 띠 · 시계 · 숙직실**

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_COVER_STRIP` | `a strip of thick bright-white office paper with perfectly straight ruler-cut edges, about the same size as the white strip pasted on the rules sheet, completely blank` | P15 꺼냄 · P21(4번 조각과 번갈아) · P22 내밀었다 거둠 · P25 주머니로. 4번 조각과 **같은 종이로 보여도 된다**(미스디렉션, beatsheet §6) |
| `PROP_CLOCK_L3` | `a large round wall clock with a plain white face, a thin black rim, black hands and only twelve small tick marks, no numerals, no logo, mounted high on the wall` | L3 (LOC_L3_LOBBY에 포함). 지하 시계와 같은 디자인, 더 크다 |
| `PROP_NAP_HANDSET` | `a beige plastic wall-mounted extension handset with a coiled cord and a few blank buttons with no numbers` | P43 숙직실 안쪽 벽(VIEW_NAPDOOR 활짝 열림에 포함) |
| `PROP_PHONE_BUZZ` | `her dark gray smartphone in a plain light-gray silicone case buzzing in her hand, its screen lit with plain blank light, no icons, no text` | P44 (신호가 돌아온다) |
| `PROP_LEDGER_TEAR` | `the thick black hardcover ledger lying open, its pages of blank ruled lines with no writing, her fingers pinching the edge of one page as if to tear it out` | P47 |
| `PROP_PAPER_CUPS_2` | `two plain white paper cups with no logo, no print` | P11 (선임이 둘 다에 물을 붓는다) |

**시계 바늘 문장 (`PROP_CLOCK_TIME_*`) — 숫자 없는 시계라 시각은 바늘 모양으로만 읽힌다.** 정면 그림 기준(시계는 뒤집히지 않는다). 시계 문장 바로 뒤에 붙인다.

| 토큰 | 영문 | 패널 | REGEN 기준 |
|---|---|---|---|
| `_0440` | `showing twenty to five: the short hour hand points down to the lower right, between the 4 and 5 positions and closer to 5; the long minute hand points down to the lower left at the 8 o'clock position` | P26 | 분침이 왼쪽 아래(8)가 아니면 |
| `_0556` | `showing a few minutes before six: the short hour hand points almost straight down, very slightly to the right of straight down; the long minute hand points almost straight up, very slightly to the left of straight up` | P30 | 분침이 12의 **오른쪽**이면(= 6시 넘음) |
| `_0557` | 위 `_0556`과 같은 문장 (Flow는 1분 차이를 못 그린다. 56↔57은 대사·순서로 읽힌다) | P31 · P32 | 같음 |
| `_0559` | `showing one minute before six: the short hour hand points almost straight down; the long minute hand points straight up, just a hair to the left of the top` | P39 | 같음 |
| `_0600` | `showing exactly six o'clock: the short hour hand points straight down and the long minute hand points straight up, the two hands forming one straight vertical line` | P42 · P44 | 세로 일직선이 아니면 |
| `_DAWN` | `showing a few minutes past six: the short hour hand points straight down, the long minute hand just past the top` | L3 새벽 컷에서 시계가 보이면(주인공으로 쓰지 않는다) | 9시·10시대로 보이면 |
| `_0900` | `showing exactly nine o'clock: the short hour hand points straight to the left at the 9 position and the long minute hand points straight up, the two hands forming a right angle` | P53 | 시침이 **오른쪽**(= 3시)이거나 직각이 아니면 |

- 모든 시각 컷: 숫자·로고 없음, 10:10 광고 시계 금지(§10-2 11).

### 7-6. EP02 연속성 타임라인 (v1.1 · EP02 · 그림에서 바뀌는 것만)

| 대상 | EP02 흐름 |
|---|---|
| 빨간 롤 | P1 책상 위 닫힌 수첩 옆(EP01 P64 그대로) · P14 책상 위 그대로 → P15 그가 집는다 → P16–P20 그의 손 → **P25 카디건 주머니로**(주머니 밖으로 빨강이 비치지 않게) → P26 이후 없음 |
| 수첩 | P1·P14 책상 위 닫힘(새 스티커 보임) → P26 펼침, 빈 모눈(쓰는 자리는 손·펜이 가린다), 종이컵은 펼친 쪽 오른쪽 아래 귀퉁이(EP01 P34의 새 커피 링이 그대로) → P50–52 L3 무릎 위 닫힘(표지 스티커) |
| 영수증 묶음 | EP01 P33과 **같은 높이**(EP02에는 되감김이 없다) |
| 열쇠 | 책상 위 명부 바인더 옆(P14) → P38 그의 손이 다가감 → P39 그녀의 손바닥이 먼저 덮음 → 06:00 그녀가 가지고 나감 → P53 L3 카운터에 올려놓음 → P54 노미란의 손바닥이 서하 쪽으로 되밂 → P58 서류 B 밑 |
| 당직 일지 | 명부 위(P14) → P43 노미란이 탁 덮어 겨드랑이에 → P45–P48 노미란의 팔·손 → P49 서하 품으로 → P50 서하 무릎 위(수첩과 함께) |
| 인수인계서 A | P15 접힌 모서리(주머니) → P33 실루엣 손의 흰 종이 한 장 → P34–P35 펼쳐 내밂·그녀가 읽음 → P40 그녀가 그의 손에 돌려줌 → P41 그가 내림 → 이후 없음 |
| 인수인계서 B | P54 노미란이 열쇠 위에 얹음 → P57 검지가 아래 줄을 짚음 → P58 서하의 펜이 아래 줄 위 한 뼘 |
| 흰 덮개 띠 | P15 꺼냄 → P21–P22 그의 손 → P25 주머니로 |
| 종이컵 | P11 둘에 물을 붓는다 → P26 하나가 수첩 오른쪽 아래 귀퉁이 |
| 노미란 의상 | P8 비네트 A → P43 B(+ 코트·재킷을 팔에 뭉쳐 듦) → P45–P49 A-정돈 중 → P53–P57 A (character-sheets §10-3) |
| 서하 | P1–P25 의상 A · **P26부터 밤샘 상태**(잔머리·피곤한 눈, 다크서클 없음) · P44부터 네이비 토트백 LEFT 어깨 · 09:00까지 의상 A(실내) |
| 숙직실 문 | (EP01 P50 닫힘) → P43 활짝 열림 |

### 7-7. EP03 소품 토큰 (v1.2 · EP03)

> 모두 **빈 면**이다. 영문의 "blank / no writing"을 줄이지 않는다. 서류 내용(앞면·뒷면·인수자 줄·일지 첫 줄·수칙 1·전입신고서·개명 신청서)은 전부 낭독 말풍선으로만 전한다(script_final `env` 0). **서명은 그리지 않는다**(P14).

**인수인계서 B — 새 상태 (앞면은 §7-5 `PROP_HANDOVER_B` 그대로)**

| 토큰 | 영문 | 쓰는 곳 · 규칙 |
|---|---|---|
| `PROP_HANDOVER_B_BACK` (뒷면) | `the back of the same sheet of bright-white A4 paper, portrait: a plain blank white page with no border on this side; only near the very bottom edge, one single long, thin printed box running across the page, about one line tall, drawn in the same thin dark-gray printed line as the boxes on the front, completely empty; no writing, no signature, no seal mark, nothing handwritten, nothing taped or pasted on, no red` | **P5.** 칸은 **인쇄된 선**(자로 그은 듯 고르고 가늘다) **하나**. 손글씨·덧붙인 띠·테이프·풀 자국 금지(R2 — '덧대는 사람'을 앞당기지 않는다). 앞면의 테두리·붉은 원이 비쳐 보이게 그리지 않는다. 뒤집었다는 것은 손(종이를 들어 올린 손가락)과 그 밑의 카운터·열쇠로 읽힌다. **`PROP_HANDOVER_pair`를 첨부하지 않는다**(Flow가 앞면 테두리를 옮겨 그린다) — P4 PNG 첨부 |
| `PROP_HANDOVER_B_SIGN` (서명 순간) | `the tip of a plain ballpoint pen touching the empty lower signature line of the form, leaving a single tiny dot of black ink under the tip; nothing is written` | **P14.** 위 줄 원의 붉은 원은 그대로. 글씨·서명이 생기면 REGEN |
| 서명 뒤의 서류 [규칙] | 서류 B 문장 + `its lower signature line hidden under her fingers` (또는 결재판 클립·바인더 가장자리·초점 흐림) | **P15 · P28.** 서명 뒤의 서류는 **아래 줄이 보이지 않게** 그린다 — 빈 줄을 보이면 '서명 안 함'으로 읽히고, 글씨를 그리면 무글자 규칙이 깨진다. 명부 맨 앞의 것은 사본이지만 **원본과 똑같이** 그린다(붉은 원 포함) |

**명부 · 결재판 · 낮 책상**

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_ROSTER_OPEN_B` | `the blue two-ring plastic binder lying open: on the left, held on the rings as the very first sheet, the bright-white form with a bold dark-gray double-line border and one small solid red seal mark in the circle at the end of its upper signature line, its bottom quarter covered by her other hand holding the page flat; on the right, a page of blank grid table cells with no writing` | P28 (손끝이 오른쪽 빈 칸 하나에) |
| `PROP_ROSTER_OPEN_GRID` | `the blue two-ring plastic binder lying open at a page of blank grid table cells with no writing` | P59 (서류 B는 보이지 않는다 — 연살구 서식과 운율을 맞출 빈 칸 표만) |
| `PROP_APPROVAL_FOLDER` (결재판) | `a dark navy hardboard approval folder with a smooth matte faux-leather cover that opens like a book, a plain metal clip inside; no text, no logo, no label, no emblem, no red` | P7 · P13 카운터 상판 노미란 쪽 · P15 서류를 클립에 · P17 LEFT 겨드랑이. 명부(밝은 파랑 광택 2공 바인더)와 색·재질로 구별 |
| `PROP_TAPE_ROLL_DESK` (낮 책상 롤) | `a palm-sized roll of glossy bright red vinyl tape with a short torn tail, lying on its side at the back right corner of the desk beside the document tray, just one more piece of ordinary office stationery that nobody is touching` | P13. P16은 + `softly out of focus at the corner of the frame`. 배치 규칙 §2-4-2 |
| 노미란 · 서하 낮 책상 | VIEW_L3_STAFFSIDE 문장에 포함(§6-6-1) | P13 · P16 · P18 |

**전입신고 · 반려**

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_FORM_MOVEIN` (전입신고서 · 검수 노트 E-1 원문) | `a single sheet of pale yellow-green paper, the soft light green of a new leaf, clearly yellower than the pale institutional-green wall paint and the gray-green desk, clearly greener than the small pale-yellow receipts (not mint, not jade, not celadon, not lime, not neon), printed only with rows of empty ruled boxes, no text, no numbers` | P34 · P35 · P36 · P38 · P41 · P42 · P45. 직인 원 없음(반려의 붉은 원은 흰 반려 통지에 찍는다) |
| 접힌 채 매듭에 | `a folded sheet of the same pale yellow-green paper tucked into the knot of cloth at the front of her chest` | P25–P31 (보여도 되고 안 보여도 된다) · P34 꺼내는 순간 |
| 턱 위 | `lying flat and neat on the outer ledge in front of the steel document slot` | P34 |
| 반쯤 걸림 | `stuck halfway in the flat steel slot, half on the outer ledge and half inside` | P35 · P36 · P38 (P41에서 당겨 들일 때까지 같은 상태) |
| 램프 아래 | + `under the warm lamp light the paper still reads clearly as pale yellow-green, not yellow` | P42 · P45 |
| `PROP_NOTICE_STACK` (빈 반려 통지 묶음) | `a neat stack of blank plain white sheets, no writing, no marks` | P22 · P49 둘째 서랍 |
| `PROP_SEAL_STAMP` (첫 직인 · §7-3 `PROP_SEAL` · `PROP_NOTICE`의 순간) | `a small cylindrical wooden seal stamp, its end wet with red ink, brought down onto a blank plain white sheet, leaving one solid red circle with no characters inside` | P47 (서하의 RIGHT 손, character-sheets §11-3). P48 = §7-3 `PROP_NOTICE`가 민원인 매듭 사이에 |

**개명 신청**

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_FORM_RENAME` (characters §4-11 원문 + 배치 결정) | `a single sheet of pale apricot paper, a soft light peach-orange paler than any orange in the scene (not pink, not red), printed only with rows of empty ruled boxes, no text, no numbers, no seal mark; portrait, the same size as the other forms, its empty boxes laid out in rows like a table, with one wider empty box across the middle` | P57 · P59 (+ EP04 P1–5 · `HANDRENAME_ref`). **빈 직인 칸 없음**(art-director 결정 — P59에서 명부의 빈 칸 표와 운율을 맞춘다). 가운데 넓은 칸 = 반창고 검지가 놓이는 '새 이름' 칸(낭독은 목소리) |
| 램프 아래 | + `under the warm lamp light the paper still reads clearly as pale apricot, not orange and not pink` | P59 |

**시계 바늘 (EP03)** — §7-5 형식. 시계 문장 바로 뒤에 붙인다.

| 토큰 | 영문 | 패널 | REGEN 기준 |
|---|---|---|---|
| `PROP_CLOCK_TIME_0300` | `showing exactly three o'clock: the short hour hand points straight to the right at the 3 position and the long minute hand points straight up, the two hands forming a right angle` | P55 (당직실 서가 위) | 시침이 **왼쪽**(= 9:00, 거울상)이거나 직각이 아니면 |
| `PROP_CLOCK_TIME_0920` (L3) | `showing twenty past nine: the short hour hand points to the left, a little above the 9 position, and the long minute hand points down to the lower right at the 4 o'clock position` | P17 (시계가 프레임에 들 때만) | 10:10 광고 시계·3:00처럼 보이면 |

- P19 복도 시계 22:00 = VIEW_ANCHOR의 10:00 문장 그대로(분침이 12가 아니면 REGEN).
- **이삿짐 상자는 없다.** beatsheet §3-3의 "끈으로 묶은 무지 상자"는 characters §4-10의 **등에 진 크림 이불 보따리**로 대체됐다(인물 토큰에 포함, character-sheets §11-1).

### 7-8. EP03 연속성 타임라인 (v1.2 · EP03 · 그림에서 바뀌는 것만)

| 대상 | EP03 흐름 |
|---|---|
| 인수인계서 B | P1 카운터 상판, 펜 아래 · 열쇠 위(EP02 P58 그대로) → P2 서하가 자기 쪽으로 당김 → P4 앞면 손끝 → **P5 뒤집음(뒷면)** → P6 · P12 그녀 손 → **P14 펜 끝이 아래 줄에(잉크 점)** → P15 노미란이 집어 결재판 클립에(아래 줄 가림) → P17 결재판째 위층으로 → (사본) P28 명부 맨 앞(아래 1/4 가림) |
| 결재판 | P7 카운터 상판 노미란 쪽 → P13 같은 자리 → P15 서류 B를 끼움 → P17 LEFT 겨드랑이로 계단을 오른다 → 이후 없음 |
| 명부 바인더 | (EP02 이후 화면 밖에서 노미란 낮 책상으로 — beatsheet R7) **P13 노미란 책상 왼쪽, 팔꿈치 옆** → **P16 노미란 LEFT 손바닥이 칸막이 너머 서하 책상으로** → P17 서하가 안고 카운터 안쪽에 → P18 서하 낮 책상(위에 일지, 그 위 열쇠) → **P19 가슴에(일지와 함께)** → P20 L1 책상 오른쪽 제자리(일지가 위) → P28 펼침(맨 앞 서류 B) → P43 그녀의 시선 · P54 재우의 시선 → P55 닫힌 채 그녀 손바닥 아래 → P59 펼침(빈 칸 표) |
| 당직 일지 | 서하 품(EP02 P49) → P8 카운터 상판, 노미란 손바닥이 표지를 덮음 → P18 명부 위 → P19 가슴에 → P20 명부 위 → P21 새 면, 펜 끝이 첫 줄(글자 없음) → P44 같은 면, 손끝이 첫 줄 |
| 열쇠 | P1 서류 B 밑 → P16 서하 손 아래(낮 책상) → P18 일지 위 → P19 RIGHT 손가락에 → P20 책상 위 바인더 옆(EP02 P14 자리) |
| 펜 | P1 서하 손, 아래 줄 위 한 뼘 → P2 카운터에 눕힘 → P9 다시 쥠(마디가 하얗다) → P14 아래 줄에 닿음 |
| 빨간 롤 (낮) | P13 노미란 책상 안쪽 오른쪽 귀퉁이 → P16 같은 자리, 초점 밖 → 이후 화면 밖. 아무도 만지지 않는다 |
| 서하 토트백 | P1–P12 LEFT 어깨 → P13 서하 책상 의자 빔 → P16부터 의자 등받이 → P19 LEFT 어깨(앵커) → L1 당직석 의자 등받이(EP01 상태) |
| 영수증 | P20 = EP02 P14 높이. 회차 내내 같다(되감김 없음) |
| 종이컵 | P20 선임 손이 책상 모서리에 → P32 선임 손의 컵 → P50 새 컵을 서하가 펼친 수첩 오른쪽 아래 귀퉁이(EP01 P34의 커피 링 위)에 → P55 같은 자리 |
| 직인 | 책상 위 나무 상자(EP01 고정) → P47 그녀 RIGHT 손이 내리찍음 → P49 직인을 반려 통지 묶음과 함께 둘째 서랍에 → 이후 책상 위 나무 상자는 **뚜껑 닫힌 채 그 자리**(고정 배치 유지 — 비었는지는 보이지 않는다) |
| 반려 통지 | P22 둘째 서랍 빈 흰 묶음 → P47 한 장에 붉은 원 → P48 민원인 매듭 사이 → 남은 묶음 P49 서랍으로 |
| 전입신고서 | P25–P31 매듭 사이 접힌 채 → P34 투입구 바깥 턱에 반듯이 → P35 그녀 손이 밀어냄, 반쯤 걸림 → P36–P38 걸린 채 → P41 당겨 들임 → P42 그녀 손 → P45 선 채 든다 → 이후 그리지 않는다 |
| 민원인 신발 | P25–P46 등 뒤 한 걸음 바닥, 코끝 = 복도 끝(어둠) 쪽, 같은 자리·같은 모양 → **P48 손도 허리도 쓰지 않고 신는다** → 신은 채 어둠으로 |
| 연살구 서식 | P57 투입구로 들어와 그녀 손에 → P59 그녀 손, 펼친 명부 옆 → (EP04) |
| 형광등 | P23 복도 끝 한 번 떨림(유일) · P30 · P45 그녀 머리 위 떨리지 않음 · 그 밖 정상 |
| 선임 | P20 손 → P27 배경(그녀를 본다) → P32 → P36 그녀의 RIGHT 손목을 잡음 → P38 → P41 놓음 → P43 · P49 화면 밖 목소리 → P50 → P55 눈 감음 |
| 재우 | P51 대기 의자 → P52 출입문 틀 → P53 → P54 복도 쪽으로 반쯤 돌아섬 → 이후 없음. 롤은 주머니 속, 비치지 않는다 |

---

## 8. 말풍선 공간 규약 (bubble space)

**뷰어가 그리는 것 (Khmer edition · `km_tool.py build`).** 그림 위에 HTML로 얹는다. 그림에는 그리지 않는다.

| 종류 (`type`) | 모양 | EP01 쓰임 |
|---|---|---|
| dialogue | 흰 둥근 말풍선, 가는 검은 테두리, 꼬리가 화자 쪽 | 대부분. 전화 목소리(지호 P4–7)는 꼬리가 휴대폰 쪽. 화면 밖 목소리(P19·P45 가장자리, P62·P63 위쪽 밖)는 꼬리가 그 가장자리로. 작은 소리·속삭임(P32 ②, P53, P57 ②)은 작은 말풍선 |
| thought | 구름형, 꼬리 없음 | P22 ②, P31, P37 ②, P54, P57 ① |
| memory | 가장자리가 푸르게 흐린 말풍선 | P24 ②, P29, P52, P55 ① (인셋과 짝) |
| shout | 뾰족한 폭발형 | (EP01 거의 없음 · letterer 판단) |
| narration | 사각 캡션 상자 | P64 마감 캡션만 |
| sfx | 말풍선 없는 큰 크메르어 글자 | P7·P13·P16·P25·P28·P34·P36·P42·P59 |

- 글꼴은 뷰어가 정한다(대사 Battambang, 외침·효과음 Koulen). 말풍선은 흰 바탕 + 검은 글자. **빨강·노랑 말풍선 금지**(예약 빨강, 스탠드 노랑과 겹친다).

**그림이 지키는 것 (`art_space`).**
1. 대사·효과음이 있는 패널은 letterer의 `art_space` 자리를 **조용한 배경**으로 비운다: 민무늬 벽, 천장, 유리 너머 어두운 복도, 흐린 서가, 어둠. 얼굴·손·수칙 종이·스티커·시계 면·벨이 그 자리에 오면 안 된다.
2. 기본 위치는 **위쪽**(읽는 순서). 화자는 가운데~아래.
3. 크기 기준 (크메르어 2줄 = 말풍선 폭 약 60%, script-editor 실측):
   - 3:4 — 말풍선 1개: 위 약 20% / 2개: 위 약 35–40%
   - 9:16 — 1개: 위 약 15% / 2개: 위 약 25–30%
   - 1:1 — 1개: 위 약 25% / 2개: 위 약 40% 또는 위 왼쪽·위 오른쪽 모서리 두 곳
   - 16:9 — 짧은 말풍선 1개만, 왼쪽 또는 오른쪽 1/3
4. 효과음은 소리 나는 물건 곁(벨·방화문·형광등·숙직실 문·화면 뒤 가장자리)에 작은 빈자리.
5. 장면별 자연스러운 빈자리: VIEW_B = 유리 너머 어두운 복도(위 절반) · VIEW_C = 서가 위 어둠·천장 · VIEW_A = 유리 위쪽의 흐린 반사 · 복도 = 천장과 먼 어둠 · 계단 = 위쪽 벽 · 클로즈업 = 흐린 배경 쪽 옆면.
6. 무대사 패널(P3·P18·P26·P27·P51·P56·P58·P60·P61)은 빈자리 없이 구도를 다 쓴다.

**영문 문장 (prompt-smith가 `art_space`를 옮길 때):**
- 위: `Keep the top third of the image as calm, empty background with no important details (a speech bubble will be added there later).`
- 모서리: `Keep the upper-left quarter of the image as calm, empty background …` (upper-right도 같은 꼴)
- 두 개: `Keep the top forty percent of the image as calm, empty background with no important details (two speech bubbles will be added there later).`
- 효과음: `Leave a small calm area next to the brass bell (a sound effect will be added there later).`
- 캡션(P64): `Keep a thin strip along the bottom edge as plain dark background (a caption will be added there later).`
- 인셋: `Keep the upper-left area, about forty percent wide and thirty percent tall, as plain calm background (a small inset picture will be added there later).`

### 8-1. EP02 자연스러운 빈자리 (v1.1 · EP02)

- **L1 새 뷰:** VIEW_SIDE = 천장과 서가 위 어둠(**시계 면은 피한다** — P26·P42는 시계가 주인공) · VIEW_SHELVES = 서가 사이 어둠·천장(시계 면 피함).
- **L2:** VIEW_FROM_WINDOW = 복도 천장·배관(방화문 위 시계 면은 피함) · VIEW_ANCHOR_0600 = EP01 P7·P28과 같은 자리.
- **L3:** INWARD·OUTWARD = 2층 높이의 높은 천장과 위쪽 벽(위 1/3이 거의 늘 빈다. 유리문의 밝은 면 위에 말풍선을 두지 않는다 — 흰 말풍선이 묻힌다) · CHAIRS = 의자 줄 너머 흐린 벽 · DAYWINDOW = 직원 머리 위 벽(시계 면·표시 면 가장자리는 피한다) · 카운터 클로즈업 = 흐린 칸막이 쪽 옆면.
- **화면 밖 목소리 방향:** P31–P32 계단 목소리 = 방화문 쪽(§6-2-1: VIEW_B 화면 왼쪽 / VIEW_A 화면 오른쪽) · P33 출입문 실루엣 = 문틀 쪽 · P50–P52 지호 = 휴대폰 쪽.
- 무대사 컷(P3 · P55)은 빈자리 없이 구도를 다 쓴다. P58은 마감 캡션 띠(아래 8%)만 비운다(EP01 P64와 같은 문장).

### 8-2. EP03 자연스러운 빈자리 (v1.2 · EP03)

- **L3:** VIEW_L3_ACROSS = 두 사람 머리 위 흐린 벽 · VIEW_L3_STAFFSIDE = 카운터 너머 흐린 로비의 위쪽(서하 얼굴·롤·서류 받침은 덮지 않는다) · VIEW_L3_STAIRS = 계단 위 높은 벽과 천장(노미란·계단 꼭대기는 피한다, 꼬리 = 노미란 쪽) · 카운터 상판 클로즈업 = 흐린 간유리 칸막이 쪽 옆면(손이 들어오는 쪽은 피한다).
- **L1:** VIEW_DRAWERS = 책상 옆판 위의 어두운 면·책상 밑 그늘(맨 아래 칸은 덮지도 가리키지도 않는다) · VIEW_SLOT = 유리 너머 어두운 복도(P57 목소리 꼬리 = 투입구 쪽 화면 밖) · VIEW_GRILLE = 말구멍 둘레의 어두운 유리(흰 말풍선이 잘 읽힌다. 말구멍 자체는 덮지 않는다) · VIEW_GLASS_CLOSE = 그녀 머리 위 유리 너머 어둠(P46 기억 말풍선은 프레임 위쪽, 흐릿하게) · P55 VIEW_SIDE = 천장·서가 위 어둠(**시계 면 피함**) · P59 = 스탠드 원 밖의 어두운 책상 면(두 서류는 덮지 않는다).
- **L2:** VIEW_ANCHOR(P19 효과음) = EP01 P7 · P28과 같은 자리 · VIEW_FROM_WINDOW_FAR · ACROSS · WINDOW_FLOOR = 무대사(빈자리 없음).
- **화면 밖 목소리 방향:** P43 · P49 선임 = 서가 쪽(그녀 뒤) 가장자리 · P57–P59 창구 목소리 = 투입구·말구멍 쪽(꼬리를 유리 반사에 대지 않는다) · P1 리캡 = 위쪽 화면 밖.
- 무대사 컷(P23 · P26 · P30 · P48 · P51)은 빈자리 없이 구도를 다 쓴다. P60은 마감 캡션 띠(아래 8%)만 비운다(EP01 P64와 같은 문장).

---

## 9. 레퍼런스 시트 (요약 · 상세는 character-sheets §7)

| 구분 | 카드 | 비율 |
|---|---|---|
| 인물 (필수) | SEOHA · MIRAN · SEONIM · JEONGMIN 각 `_turnaround` + `_expressions` | 16:9 |
| 의상 (필수) | MIRAN_outfitB | 16:9 |
| 손 (필수) | HANDCLIFF_ref | 16:9 |
| 소품 (필수 · twist-plan §7-3) | PROP_STICKERS_pair (새/바랜 스티커 나란히) · PROP_PAGES_pair (수칙 종이와 수첩 펼친 면 나란히) | 16:9 |
| 장소 플레이트 (권장) | LOC_L1_DUTYROOM_plate · LOC_L1_DESK_plate · LOC_L2_CORRIDOR_plate · LOC_L2_STAIRWELL_plate | 16:9 / 16:9 / 9:16 / 9:16 |
| **인물 (EP02 필수 · v1.1)** | JAEWOO_turnaround(오른손 클로즈업 포함 — HANDCLIFF_ref와 같은 손) · JAEWOO_expressions | 16:9 |
| **소품 (EP02 필수 · v1.1)** | PROP_HANDOVER_pair (서류 A와 B 나란히 — 차이는 붉은 원 하나) | 16:9 |
| **장소 플레이트 (EP02 권장 · v1.1)** | LOC_L3_LOBBY_dawn_plate(OUTWARD, 새벽) · LOC_L3_LOBBY_day_plate(INWARD, 09:00, 새벽 플레이트 첨부) | 16:9 / 16:9 |
| EP02 카드 없음 (v1.1) | 노미란 'A-정돈 중'·의상 B+코트 뭉치, 서하 밤샘, 선임 졸음 — 기존 카드 + 상태 문장으로 충분 (character-sheets §10-6) | — |
| **인물 (EP03 필수 · v1.2)** | `MOVEIN_ref` — 전신 3뷰 + 머리 클로즈업 + 작은 머리 습작 2 + 발·신발 클로즈업 한 장 (그녀가 보이는 컷 12 ≥ 8) | 16:9 |
| **손 · 소품 (EP03 필수 · v1.2)** | `HANDRENAME_ref` — 같은 왼손 습작 3(벨 · 연살구 서식을 미는 손 · 반창고 검지가 빈 칸 위). `HANDCLIFF_ref` · `JAEWOO_*` 첨부 금지 | 16:9 |
| EP03 카드 없음 (v1.2) | 민원인 표정 시트 · 서하 밤 2 · 노미란 낮 A · 선임 손 · 재우 대기 의자 · 연두 서식 · 결재판 · 서류 B 뒷면 · 직원석 · 위층 계단 — 기존 카드 + 문장, 또는 같은 회차 PNG 첨부(P13 → P16 · P18) (character-sheets §11-6) | — |

- 레퍼런스만은 연출색이 없는 중립 조명(STYLE_REF)으로 그린다. 텍스트·라벨 없음. 저장: `_workspace/04_visual/refs/<카드명>.png`.
- 패널 렌더 전에 확정한다. 확정된 시트가 시리즈 외형 기준이다(회차 간 재사용).

---

## 10. 금지 · 주의

### 10-1. 전역 무글자 규칙 [고정 · Khmer edition]

- **어떤 Flow 이미지에도 글자가 없다:** 문자(어느 언어든), 숫자, 가짜 글씨·낙서, 서명, 말풍선, 캡션, 효과음 글자, 로고, 간판·안내판·비상구 표시(그림 문자 포함), 명찰 글씨, 워터마크.
- **글이 적힐 물건은 빈 면:** 수칙 종이(7칸 빈 모눈) · 4번 조각(빈 흰 띠) · 명부(빈 칸 표) · 일지(빈 줄) · 서식(빈 칸 + 빈 직인 원) · 영수증·보완 요청서(빈 종이 + 글자 없는 붉은 원) · 수첩(빈 모눈) · 공무원증(빈 카드, 뒤집혀 있어도 됨) · 시계(눈금 12개, 숫자 없음) · 내선 전화(숫자 없는 버튼) · 휴대폰(빈 화면) · 서가 상자 라벨·철문 명판(빈칸).
- 직인 = 글자 없는 붉은 원. 쓰는 장면(P48)은 손·펜·각도로 글씨가 보이지 않게 한다.
- 문서 내용은 전부 말풍선 낭독으로 전한다. EP01에는 `env`(물건 위 글씨)가 없다.
- 프롬프트 끝은 항상 `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark, logos, signs, panel borders.` 레퍼런스 시트는 `Avoid: any text, labels, speech bubbles, watermark.`

### 10-2. 그 밖의 금지

1. 빨강은 §2-4 세 범주 밖에 없다.
2. 반지는 클리프의 손(은반지, 검지)만 낀다.
3. 피·몸·상처·괴물 변형·비명 얼굴 금지(15세, 결과는 화면 밖). 정정 = 떨림 → 어둠 → 빈자리.
4. 이상한 반사 금지(EP01). P58–64는 유리에 그녀 뒤 사람이 비치지 않게.
5. 비·우산·젖은 배경 금지. 젖은 것은 구정민과 그의 물방울·웅덩이·발자국뿐이다. 구정민이 마른 그림, 푸르거나 창백한 시체 피부 금지.
6. 같은 씬 안에서 배경·장소가 바뀌면 안 된다. 창문·낮빛·바깥 풍경 금지(지하).
7. 엑스트라 금지. EP01 화면에는 서하·노미란·선임·구정민·손뿐이다.
8. 선임이 초록 회전의자에 앉은 그림, 돋보기를 쓴 그림, 공무원증·열쇠를 가진 그림 금지.
9. 노미란이 코트 소매에 팔을 넣은 그림, 검은 뿔테 안경 금지(금테 하프림).
10. 옷·종이컵·포트·휴대폰의 로고·무늬 글자 금지.
11. 시계 숫자, 10:10 시계 금지.
12. SD·치비, 스크린톤, 포토리얼, 3D, 유화풍, 네온, 하이키 파스텔 금지.
13. 한 이미지 안의 칸 나누기·테두리 금지(P53만 예외).

### 10-3. Flow 드리프트 감시 목록 (panel-validator)

| 자주 생기는 일 | 판정 |
|---|---|
| 종이·서식·명부에 가짜 글씨, 시계에 숫자 | REGEN (C3 text-free) |
| 좌우 표식 뒤집힘(점·흉터·시계·반지 손) | REGEN |
| 복도 시계가 10:10 | REGEN (P7·P28) |
| 4번 테이프 외의 빨강(넥타이·립·소화전함) | REGEN |
| 머스터드 카디건이 주황·노랑으로 | REGEN |
| 서하의 하이 포니테일 | REGEN |
| 노미란 코트 소매에 팔이 들어감 | REGEN |
| 구정민이 덜 젖음 / 비가 내림 | REGEN |
| 스티커 큰 귀가 반대쪽, 두 스티커 그림이 다름 | REGEN (P53 필수) |
| 손 컷에 손가락 개수 이상, 얼굴·몸이 보임 | REGEN (P61–64) |
| P60 그림자에 형체가 생김 | REGEN |
| `art_space` 자리에 얼굴·핵심 소품 | REGEN 또는 letterer에 `place` 이동 제안 |

### 10-4. EP02 범위 · 금지 · 드리프트 (v1.1 · EP02)

**무글자 규칙은 그대로다(§10-1).** 인수인계서 A·B·덮개 띠·일지·수첩·시계·휴대폰·표시 면·내선 수화기는 전부 빈 면. 서명·직인 속 글자·서식 제목 없음.

**EP01 규칙의 EP02 적용 범위:**
1. §3-1 규칙 6 · §10-2 규칙 6(창문·낮빛·바깥 풍경 금지)은 **지하(L1·L2)에만** 적용된다. L3는 1층이라 유리 정문과 바깥빛이 있다. 단 바깥은 하늘과 빈 앞마당뿐(간판·차·번호판·사람·글자 없음).
2. §10-2 규칙 7(엑스트라 금지) → EP02는 **S06(09:00 L3)에만** 초점 밖 엑스트라를 허용한다(character-sheets §10-4 문장). 지하와 새벽 L3에는 이름 있는 인물만(새벽 = 서하·노미란 둘).
3. §10-2 규칙 3·5: EP02에는 민원인·정정·어둠 컷이 없다. 형광등 떨림 0(§3-4). 젖은 사람·물웅덩이 0(구정민 등장 없음).
4. §10-2 규칙 4(이상한 반사 금지) 유지. P1–P2에서는 유리를 프레임 밖에 두거나 평평한 어두운 반사로만 — 그의 얼굴이 P3보다 먼저 유리에 비치면 공개가 샌다.
5. 반지: 재우의 **RIGHT 검지 은반지** 하나뿐(HAND-CLIFF 상속). 노미란·서하·선임·엑스트라 반지 없음.

**EP02 드리프트 감시 (panel-validator):**

| 자주 생길 일 | 판정 |
|---|---|
| 재우가 유령처럼 그려짐(푸르거나 투명한 피부, 흐린 발, 그림자 없음), 젖음 | REGEN — 그는 사람이다(정상 그림자, 마른 옷) |
| 재우의 반지가 왼손·다른 손가락·금색·둘 / 흰 커프스가 소맷부리 밖으로 안 보임 | REGEN |
| 재우 목줄 끝에 카드(빈 카드여도) | REGEN |
| 재우·선임 얼굴에 안경 생김(선임 돋보기는 목에) | REGEN |
| 재우의 몸통·얼굴 전체가 스탠드의 노란 원 안 | REGEN (얼굴은 반만 따뜻하게, 손만 원 안) |
| 재우가 초록 회전의자(당직석)에 앉음 | REGEN |
| 서하에게 다크서클 / 재우에게 다크서클 없음 | REGEN |
| 두 카디건이 섞임(머스터드가 몸에 맞거나 잠김, 차콜이 꽈배기·헐렁) | REGEN |
| 서류 A에 붉은 원·글씨·서명 / 서류 B에 원이 아래 줄 또는 둘 / 두 서류의 테두리·칸이 다름 | REGEN (P55 대조가 무너진다) |
| P26 이후 화면에 빨간 롤 / 노미란 쪽에 빨강 | REGEN |
| 시계 바늘이 §7-5 기준과 다름(특히 05:5x 분침이 12의 오른쪽, 09:00이 3:00으로) | REGEN |
| L3에 녹색 형광빛·지하 벽색 / 새벽 L3에 사람(엑스트라·경비) | REGEN |
| L3 표시 면·창구에 숫자·번호표·안내판·국기·포스터 | REGEN (C3 text-free) |
| L3 카운터 너머 노미란 책상 면과 그 위 물건이 보임 | REGEN (R11) |
| 노미란 'A-정돈 중'에서 머리가 말끔함 | 경미 — 다른 것이 맞으면 ACCEPT, 같은 문제가 반복되면 문장 강화 |

### 10-5. EP03 범위 · 금지 · 드리프트 (v1.2 · EP03)

**무글자 규칙은 그대로다(§10-1).** 서류 B 앞·뒷면 · 명부 · 일지 · 결재판 · 전입신고서 · 반려 통지 · 개명 신청서 · 수칙 종이 · 시계 · 모니터 · 표시 면 · 서랍 라벨 칸 전부 빈 면. 서명 글씨 0(P14는 잉크 점 하나까지).

**EP01 · EP02 규칙의 EP03 적용 범위:**
1. 엑스트라(§10-2 7 · §10-4 2): **S01(L3 낮)에만** 초점 밖 엑스트라(character-sheets §11-4 문장). 노미란 창구·서하 책상·계단 위에는 오지 않는다. 지하에는 이름 있는 인물 + 민원인 + 손 하나뿐.
2. 떨림(§3-1 3): **P23 한 번**(복도 끝, 출현 경고). 어둠 컷·정정 없음.
3. 반사(§10-2 4): 정상 반사만. **P57–P59 유리 반사 없음**(평평한 어둠), 클리프 손 컷은 카운터 높이 아래.
4. 반지(§10-4 5): 재우 RIGHT 검지 하나(P51–P54). HAND-RENAME · 민원인 · 노미란 · 선임 반지 0.
5. 젖음(§10-2 5): 0. 웅덩이 0(구정민 없음, P28 비네트 안의 젖은 구정민만 예외). 민원인은 마르고 깨끗하다.
6. 창문·낮빛: L3에만(§10-4 1).
7. 빨강: §2-4-2. ③범주 확장은 노미란 낮 책상 위 롤 하나.

**EP03 드리프트 감시 (panel-validator):**

| 자주 생길 일 | 판정 |
|---|---|
| P1–P12에 노미란 책상 면이 보임(롤의 첫 노출이 앞당겨짐) | REGEN |
| 롤이 손에 들림 · 노미란 손·코트·결재판에 닿음 · 화면 가운데·특별한 빛 / P13에서 롤이 안 보이거나 빨강이 아님 | REGEN |
| 노미란 쪽 빨강(립·네일·결재판·코트) / 결재판이 명부와 같은 파랑 / 결재판에 글씨·문장(엠블럼) | REGEN |
| 서류 B 뒷면에 테두리·글씨·손글씨·덧붙인 띠·비친 붉은 원 / 칸이 둘 이상 | REGEN (R2) |
| P14 서명 글씨 / P15 · P28 서류 아래 줄에 글씨 | REGEN |
| 전입신고서가 민트·옥색·셀라돈·라임·형광 · 벽색에 녹음 · 노랑 영수증과 구별 안 됨 · 램프 아래 노랑 | REGEN |
| 개명 신청서가 분홍·주황·빨강 · 직인 원·글자 / P59 램프 아래 주황 · 두 서류 크기 차가 큼 | REGEN (P59 크기는 문장 강화 후 1회 ACCEPT 가능) |
| P23 외의 떨림 / P30 · P45 떨림 · 어둠 · 효과음 그림 | REGEN |
| P55 시계가 9:00(거울) / P19 시계가 10:10 / P17 시계가 10:10 · 3:00 | REGEN |
| 민원인: 창구 앞에서 신발을 신음 · 신발이 흩어짐·유리 안쪽 · 보자기 빨강·분홍·꽃무늬 · 유령 처리 · 서하만큼 큼 | REGEN (character-sheets §11-7) |
| HAND-RENAME: 오른손 · 반지 · 흰 커프스 · 피 · 손이 둘 · 유리 반사·얼굴·그림자 | REGEN |
| P56–P60에 벨 누르는 손 | REGEN (EP10 보호) |
| P21 · P44가 EP01 P48 구도(상판을 짚은 손 + 초점 밖 칸막이) | REGEN (F-23) |
| 서랍 맨 아래 칸이 열림·강조됨 | REGEN (F-20) |
| 계단 위층에 사람·표지·국기 / 직원석 모니터에 화면 내용(아이콘·글자) | REGEN (C3 text-free) |
| P1–P12 서하에게 토트백이 없음 / P13 서하 의자에 토트백 | 경미 — 다른 것이 맞으면 ACCEPT(§6-6-1 결정) |

---

## 11. 하류 인계 · 결정 · 열린 항목 (팀 메시징 대체)

| 대상 | 가져갈 것 |
|---|---|
| **ref-sheet-artist** | character-sheets §7 카드 사양 → `refs/ref_prompts.md` (필수 12 + 권장 4). STYLE_REF와 레퍼런스 Avoid 줄. 텍스트 없는 깨끗한 도감 |
| **panel-director** | §4 비율 권장(COMP 짝은 같은 비율), §5-3 COMP 표, §6-1 씬↔LOC(장소가 바뀌는 S02·S05·S06은 하위 ID), §6-2 당직실 방향, §7-4 연속성 타임라인, §8 자연스러운 빈자리. 컷마다 scene_id·location 기재 |
| **letterer** | §8 말풍선 모양·크기 기준, `art_space`는 한국어로 써도 된다(prompt-smith가 영문화) |
| **prompt-smith** | §5-1 조립 순서, STYLE_GLOBAL·LOC·PROP·LIGHT 토큰 원문, §8 영문 문장, 첨부 규칙(패널당 3장 이내), Avoid 줄 |
| **panel-validator** | §2-4 빨강 목록, §10 금지·드리프트 표, character-sheets §8 인물 검수표 |

**이 문서에서 정한 것 (상류 문서와의 정합):**
1. 칸막이·수칙 종이 = 앉은 서하의 **왼쪽**(world §9-1 본문·beatsheet P51을 따름; 평면 스케치의 좌우는 방향 표기 차이로 봄). 그에 따라 숙직실 문 = 그녀의 왼쪽 옆벽, 출입문 = 그녀의 오른쪽.
2. 앵커 컷의 휴대폰 = 서하의 **RIGHT 손·RIGHT 귀**(토트백은 beatsheet대로 LEFT 어깨). COMP-STICKER는 LEFT 손으로 수첩을 든다.
3. 스티커의 고양이는 얼굴이 정면, **고양이 자신의 LEFT 귀(화면 오른쪽)가 크다**(characters §4-6 문장을 그림 기준으로 풀어 씀).
4. twist-plan §7-3 요청 채택: `PROP_TAPE_LIFT`(아래 테이프 오른쪽 끝 들림, 클로즈업 전용), `PROP_RING_NEW`/`PROP_RING_FADED`(바랜 링 = 반원), `PROP_PAPER_CUP`(무지), 소품 레퍼런스 2장(필수).
5. L2를 `LOC_L2_STAIRWELL`과 `LOC_L2_CORRIDOR`로 나눴다(둘 다 world L2).

**열린 항목:**
- **리플레이 인셋 합성 (P24·P55).** Flow는 인셋을 붙이지 못한다. 권장: 두 원본이 검수를 통과한 뒤 하네스가 원본 PNG를 잘라 받는 패널에 합성한다(Flow 원본은 `_originals/`에 보존). 사용자의 그림을 자를 뿐 새 그림을 만들지 않는다. 방식 확정은 prompt-smith·episode-compositor(Phase 5 전).
- **P53 2분할**이 Flow에서 안 되면 §4-2 4의 1:1 대안으로(panel-director).
- **P26 어둠 컷**을 Flow가 거부하거나 형체를 넣으면 near-black 결과를 그대로 받는다(실루엣만 없으면 ACCEPT).
- 전임자 전신 토큰(HAND-CLIFF 상속)은 **EP02 Phase 4 전** character-designer 몫(twist-plan §7-3). EP01은 손만 그린다.
  - (v1.1) 해결: characters v1.1 §4-8 TOKEN-JAEWOO → character-sheets §10-1.

### 11-1. EP02 인계 (v1.1 · EP02)

| 대상 | 가져갈 것 |
|---|---|
| **ref-sheet-artist** | character-sheets §10-6 카드 사양 → `refs/ref_prompts.md`에 **블록 추가만**(기존 16장 블록은 그대로): 필수 `JAEWOO_turnaround` · `JAEWOO_expressions` · `PROP_HANDOVER_pair`, 권장 `LOC_L3_LOBBY_dawn_plate` · `LOC_L3_LOBBY_day_plate`. **손은 HANDCLIFF_ref와 같은 원본에서**: 두 카드 중 나중에 만드는 쪽이 먼저 만든 쪽을 첨부한다. 노미란·서하 EP02 상태는 카드 없음 |
| **panel-director** | §6-1-1 씬↔LOC(P31·P44는 L2), §6-2-1 지리(계단 = 그녀의 왼쪽, 시계가 보이는 뷰), §6-3·§6-5·§6-6 VIEW, §4-3 비율·기억 비네트 6컷, §5-5 짝 구도, §7-6 연속성, §3-4 조명(떨림 0), §8-1 빈자리 |
| **letterer** | §8-1 L3·새 뷰의 빈자리, 화면 밖 목소리 방향(계단 쪽 = 그녀의 왼쪽) |
| **prompt-smith** | 새 토큰 원문: LOC_L3_LOBBY + VIEW 4개, VIEW_SIDE · VIEW_SHELVES · VIEW_FROM_WINDOW · VIEW_ANCHOR_0600, LIGHT_LAMP_EDGE · LIGHT_NOFLICKER · LIGHT_0600(조건부) · LIGHT_L3_DAWN · LIGHT_L3_DAY, PROP_HANDOVER_A/B/FOLDED · PROP_COVER_STRIP · PROP_CLOCK_L3 · PROP_CLOCK_TIME_* · PROP_NAP_HANDSET · PROP_PHONE_BUZZ · PROP_LEDGER_TEAR · PROP_PAPER_CUPS_2. 빨강 문장은 §2-4-1. 비네트 6컷은 Avoid에서 `panel borders`만 뺀다. 새벽 L3 컷은 Avoid에 `extra people` |
| **panel-validator** | §2-4-1 빨강, §7-5 시계 REGEN 기준, §10-4 EP02 드리프트, character-sheets §10-7 인물 축 |

**v1.1 결정:**
1. L3 배치: 정문에서 보면 카운터 = 왼쪽 벽, 의자 = 가운데~오른쪽, 계단 철문 = 안쪽 오른쪽 구석, 시계 = 카운터 가운데 위 벽, 노미란 창구 = 시계 아래 칸. 카운터의 높은 앞턱이 직원 책상 면을 가린다(R11).
2. 서류 A·B는 같은 서식(이중 테두리, 빈 칸 몇, 아래쪽 서명란 둘 + 각 줄 끝 빈 원). B만 위 줄(인계자) 원에 붉은 원. A에는 접힌 자국도 그리지 않는다(차이는 하나).
3. EP02에는 LIGHT_COMEDY를 쓰지 않는다(떨림이 없어서 끌 것이 없다 — 유머 컷도 씬 조명 그대로).
4. VIEW_SIDE를 EP01 shotlist §A-1 원문 그대로 LOC_L1의 VIEW로 올렸다(§6-2 방향과 일치). 인셋은 EP01 shotlist §D 기억 비네트 방식을 EP02에도 적용.

**열린 항목 (v1.1):**
- `LIGHT_0600`(P42 복도 끝 형광등이 켜짐)은 worldbuilder 확인 전까지 **조건부**다. 반려되면 시계와 선임 대사만으로 간다.
- L3 벽시계(world 확인 요청 ①)는 지하 시계와 같은 디자인으로 그렸다. worldbuilder가 다르게 정하면 PROP_CLOCK_L3 문장만 고친다(아직 그려지지 않았다).
- 비네트 P8 · P10 · P20 · P47은 EP01 PNG가 생긴 뒤에만 만들 수 있다.

### 11-2. EP03 인계 (v1.2 · EP03)

| 대상 | 가져갈 것 |
|---|---|
| **ref-sheet-artist** | character-sheets §11-6 카드 사양 → `refs/ref_prompts.md`에 **블록 추가만**(기존 21장 블록은 그대로): 필수 `MOVEIN_ref`(카드 22) · `HANDRENAME_ref`(카드 23). 둘은 서로 의존하지 않는다. HANDRENAME_ref에는 `HANDCLIFF_ref` · `JAEWOO_*`를 첨부하지 않는다. 상태 변주·소품·직원석은 카드 없음 |
| **panel-director** | §6-1-2 씬↔LOC(P23 · P26 · P51은 L2) · §6-2-2 지리(복도 좌우는 뷰마다 다르다) · §6-3 · §6-5 · §6-6-1 새 VIEW · §4-4 비율 · 비네트 3컷 · §5-6 짝 구도(P29 · P30 같은 그림, P25 안쪽 시점) · §7-8 연속성 · §3-5 조명(떨림 P23 하나) · §8-2 빈자리. **결정 3개:** P1–P12 직원 책상 면 없음 · 결재판은 카운터 상판 · 토트백 P1–P12 LEFT 어깨 / P13 빈 의자 / P16부터 의자 |
| **letterer** | §8-2 새 뷰의 빈자리, 화면 밖 목소리 방향 |
| **prompt-smith** | 새 토큰 원문: VIEW_L3_ACROSS · VIEW_L3_STAFFSIDE · VIEW_L3_STAIRS · VIEW_DRAWERS · VIEW_SLOT · VIEW_GRILLE · VIEW_GLASS_CLOSE · VIEW_FROM_WINDOW_FAR · VIEW_FROM_WINDOW_ACROSS · VIEW_WINDOW_FLOOR · LIGHT_FLICKER_FAR · LIGHT_GLASS_GLOW · PROP_HANDOVER_B_BACK · PROP_HANDOVER_B_SIGN · PROP_ROSTER_OPEN_B · PROP_ROSTER_OPEN_GRID · PROP_APPROVAL_FOLDER · PROP_TAPE_ROLL_DESK · PROP_FORM_MOVEIN(+ 상태) · PROP_NOTICE_STACK · PROP_SEAL_STAMP · PROP_FORM_RENAME · PROP_CLOCK_TIME_0300 · _0920. 빨강 문장 §2-4-2. 램프 아래 종이 색 문장 §2-3-1. 비네트 3컷은 Avoid에서 `panel borders`만 뺀다. P5에는 `PROP_HANDOVER_pair`를 붙이지 않는다. 플레이트 파일 이름은 `ref_prompts.md`의 표기(`LOC_L3_LOBBY_DAY_plate`) |
| **panel-validator** | §2-4-2 빨강 · §7-7 시계 REGEN 기준 · §10-5 EP03 드리프트 · character-sheets §11-7 인물 축 |

**v1.2 결정:**
1. L3 직원석: 서하 낮 책상 = 노미란의 LEFT 옆(아주 낮은 간유리 칸막이). 롤 = 노미란 책상 안쪽 오른쪽 귀퉁이, 서류 받침 옆에 옆으로 눕힘.
2. 위층 계단 = 홀 안쪽 벽의 왼쪽(카운터 안쪽 끝 너머), 지하 철문 = 같은 벽 오른쪽 구석. 위 = 넓은 돌계단 / 아래 = 작은 철문.
3. 서류 B 뒷면 = 테두리 없는 흰 면 + 맨 아래 인쇄된 빈 칸 하나, 비침 없음. 서명 뒤의 서류는 아래 줄을 가린다. 명부 맨 앞 사본은 원본과 똑같이.
4. 전입신고서 = 연두 `#DCE6B0`(E-1 확정, 직인 원 없음). 개명 신청서 = 연살구 `#F7D9C4`, 표처럼 줄지은 빈 칸 + 가운데 넓은 칸 하나, **빈 직인 칸 없음**.
5. 직인은 P49에 서랍으로, 책상 위 나무 상자는 뚜껑 닫힌 채 남는다(고정 배치 유지). 서랍 속 여분 인주 케이스는 닫힘.
6. 이삿짐 상자 없음(보따리로 대체). EP03 L3 시계는 프레임 밖이 기본, P17 와이드 = 09:20.
7. P25는 당직실 안쪽 시점(발 가림). 토트백 연속성(§6-6-1).

**열린 항목 (v1.2):**
- world §9-4에 위층 계단·직원석 배치가 아직 없다(beatsheet §6 요청). §6-6-1을 worldbuilder가 그대로 옮기면 된다(그림은 이 문서를 따른다).
- characters §4-10 소품 행의 "[제안] 옅은 옥색" 문구가 남아 있다('서식' 상태 토큰은 연두로 갱신됨). 그림은 연두를 따른다 — character-designer 정리 요청.
- 개명 신청서에 빈 직인 칸을 두지 않았다. EP04가 다른 칸 배치를 원하면 **EP03 Phase 4 전에** 알려야 한다(한 번 그리면 EP04 P1–5가 같은 서식을 되풀이한다).
- 비네트 P6 · P28은 EP01 PNG, P11은 EP02 PNG가 생긴 뒤에만 만들 수 있다.

---

## 12. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-16 | 최초 작성: 화풍·STYLE_GLOBAL/REF, 팔레트·예약 빨강, 조명 토큰, Flow 비율 등급, 조립 규칙·COMP 표, LOC 3개(+VIEW), PROP 토큰, 말풍선 공간, 금지·드리프트 |
| v1.1 | 2026-11-17 | **EP02 추가 — 덧붙이기만, v1 토큰 문장 변경 0**(EP01 프롬프트 영향 없음). 신규 장소 `LOC_L3_LOBBY` + VIEW_L3_INWARD/OUTWARD/CHAIRS/DAYWINDOW, 조명 LIGHT_L3_DAWN/DAY · LIGHT_LAMP_EDGE · LIGHT_NOFLICKER · LIGHT_0600(조건부). L1에 VIEW_SIDE(EP01 shotlist §A-1 원문 편입) · VIEW_SHELVES · 숙직실 문 활짝 변주, L2에 VIEW_FROM_WINDOW · VIEW_ANCHOR_0600. 소품 PROP_HANDOVER_A/B/FOLDED · PROP_COVER_STRIP · PROP_CLOCK_L3 · PROP_CLOCK_TIME_*(04:40–09:00) · PROP_NAP_HANDSET · PROP_PHONE_BUZZ · PROP_LEDGER_TEAR · PROP_PAPER_CUPS_2. EP02 빨강(같은 세 범주, 서류 B 직인 원 추가), L3 팔레트, EP02 컬러 스크립트·씬 조명, 비율 권장, 기억 비네트 6컷(EP01 shotlist §D 방식), 재사용 짝, 연속성 타임라인, 빈자리, 레퍼런스 3+2장, EP02 범위·드리프트, 인계 |
| v1.2 | 2026-11-18 | **EP03 추가 — 덧붙이기만, v1·v1.1 토큰 문장 변경 0**(EP01·EP02 프롬프트 영향 없음, 이미지는 아직 없다). 새 LOC 없음. L3에 직원석 줄(노미란 낮 책상 · 서하 책상 = 그녀의 LEFT 옆) · 위층 돌계단 배치 + VIEW_L3_ACROSS/STAFFSIDE/STAIRS. L1에 VIEW_DRAWERS/SLOT/GRILLE/GLASS_CLOSE, L2에 VIEW_FROM_WINDOW_FAR/FROM_WINDOW_ACROSS/WINDOW_FLOOR. 조명 LIGHT_FLICKER_FAR · LIGHT_GLASS_GLOW + EP03 씬 조명(떨림 P23 하나, P30 · P45 떨리지 않음). 소품 PROP_HANDOVER_B_BACK/SIGN · PROP_ROSTER_OPEN_B/GRID · PROP_APPROVAL_FOLDER · PROP_TAPE_ROLL_DESK · PROP_FORM_MOVEIN(연두 #DCE6B0, E-1) · PROP_NOTICE_STACK · PROP_SEAL_STAMP · PROP_FORM_RENAME(연살구, 직인 칸 없음) · PROP_CLOCK_TIME_0300/_0920. EP03 빨강(③ 공용 비품 확장 = 낮 책상 롤, 배치 규칙), 인물·소품 색, 컬러 스크립트, 비율 권장, 기억 비네트 3컷, 재사용 짝, 지리, 연속성 타임라인, 빈자리, 레퍼런스 필수 2장(MOVEIN_ref · HANDRENAME_ref), EP03 범위·드리프트, 인계 |

- 일관성 토큰(STYLE_GLOBAL, LOC, PROP)은 패널이 그려진 뒤에는 바꾸지 않는다. 바꾸면 영향 패널 목록을 이 표에 적고 prompt-smith에게 알린다(이 실행에서는 문서로).
