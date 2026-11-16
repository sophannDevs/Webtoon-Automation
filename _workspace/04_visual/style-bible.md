# 스타일 바이블 — 「수칙 4번은 거짓말입니다」 (KM ច្បាប់ទី៤ ជាការកុហក)

- 작성: art-director · 기준일 **2026-11-16** · EP01 Phase 4 · **v1**
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

### 2-4. 예약색 빨강 — EP01은 세 범주뿐 [고정]

| 범주 | 형태 | EP01 패널 |
|---|---|---|
| ① 4번 조각의 테이프 | 흰 조각 위·아래 가장자리를 따라 가로 두 줄 | 수칙 종이가 화면에 있는 모든 컷 |
| ② 인주·직인 자국 | 글자 없는 붉은 원 / 인주 케이스 속 붉은 인주 | P9·P33 영수증의 작은 원과 책상 위 인주 케이스, P27 반쯤 찍힌 반원, P44–46 직인 끝의 인주, P49 보완 요청서의 원 |
| ③ 클리프의 테이프 롤 | 손바닥만 한 빨간 비닐테이프 롤 | P61–P64 |

- 그 밖의 빨강은 **0**이다: 의상·립·네일·넥타이·휴대폰 케이스·소화전함(회색)·경고등·책 등. 스티커 주황은 황금빛, 커피 링은 갈색, 스탠드 빛은 노랑.
- 빨강이 들어가는 컷의 프롬프트에는 "the only red in the image is …"를 한 번 적어 Flow가 다른 곳에 빨강을 쓰지 않게 한다.

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

### 6-2. 당직실 방향 [고정 — 모든 L1 컷의 지리]

당직자는 당직석에 앉아 **유리 창구를 마주 본다(등은 방 안쪽).**
- **그녀의 왼쪽:** 책상 왼쪽 끝에 직각으로 붙은 낮은 회색 철제 칸막이. 수칙 종이가 **앉은 눈높이**에 붙어 있다. 더 왼쪽 옆벽에 크림색 숙직실 문.
- **그녀의 오른쪽:** 창구 벽 끝의 출입문(복도로 나가는 문).
- **그녀의 뒤:** 뒷벽의 회색 철제 서가 3열(서가 사이는 어둡다), 서가 앞 접이식 철제 의자(선임 자리), 보조 탁자(흰 전기 포트·종이컵). 서가 위에 숫자 없는 둥근 시계.
- **책상 위(앉은 사람 기준):** 앞 왼쪽 흰 거위목 스탠드 · 앞 오른쪽 베이지 내선 전화 · 오른쪽에 파란 바인더(명부)와 그 위 검은 장부(일지) · 안쪽 가운데 철제 서류함(영수증) · 그 옆 누런 테이프 디스펜서 · 작은 나무 상자의 직인 + 둥근 철제 인주 케이스 · 펜꽂이.

> world §9-1의 평면 스케치와 본문이 좌우에서 엇갈린다. 본문("앉은 사람의 왼쪽 눈높이에 수칙 종이")과 beatsheet(P51 "왼쪽 눈높이")를 따랐다. 숙직실 문 = 그녀의 왼쪽 옆벽, 출입문 = 그녀의 오른쪽은 이 결정에서 나온 배치다.

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
- 비고: 서가 위 시계는 배경 소품이다. EP01에서 클로즈업하지 않고 바늘 위치를 묘사하지 않는다.

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

---

## 9. 레퍼런스 시트 (요약 · 상세는 character-sheets §7)

| 구분 | 카드 | 비율 |
|---|---|---|
| 인물 (필수) | SEOHA · MIRAN · SEONIM · JEONGMIN 각 `_turnaround` + `_expressions` | 16:9 |
| 의상 (필수) | MIRAN_outfitB | 16:9 |
| 손 (필수) | HANDCLIFF_ref | 16:9 |
| 소품 (필수 · twist-plan §7-3) | PROP_STICKERS_pair (새/바랜 스티커 나란히) · PROP_PAGES_pair (수칙 종이와 수첩 펼친 면 나란히) | 16:9 |
| 장소 플레이트 (권장) | LOC_L1_DUTYROOM_plate · LOC_L1_DESK_plate · LOC_L2_CORRIDOR_plate · LOC_L2_STAIRWELL_plate | 16:9 / 16:9 / 9:16 / 9:16 |

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

---

## 12. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-16 | 최초 작성: 화풍·STYLE_GLOBAL/REF, 팔레트·예약 빨강, 조명 토큰, Flow 비율 등급, 조립 규칙·COMP 표, LOC 3개(+VIEW), PROP 토큰, 말풍선 공간, 금지·드리프트 |

- 일관성 토큰(STYLE_GLOBAL, LOC, PROP)은 패널이 그려진 뒤에는 바꾸지 않는다. 바꾸면 영향 패널 목록을 이 표에 적고 prompt-smith에게 알린다(이 실행에서는 문서로).
