# 스타일 바이블: 『유통기한 연애』 (KM «ស្នេហាមានថ្ងៃផុតកំណត់») · 시리즈 자산

- 작성: art-director · 2026-11-21 · v1 (ep01) · v1.1 (2026-11-22, ep02 추가) · v1.2 (2026-11-22, ep03 추가) · Flow-by-hand mode + Khmer edition
- 입력: `02_story/world.md`(§6 LOC 19개, §7 시각 톤·글자 없는 대체표·달력), `02_story/characters.md`(§4 외형 토큰, §5 소품, §6 시트 우선순위), `02_story/concept.md`(§6 톤, §10~11), `03_episode/ep01_beatsheet.md`(장소·구도·D-6 제작 메모), `01_research/trend-brief.md`
- 스킬: `webtoon-panel-breakdown` 작업 B(B-1~B-7) · `webtoon-khmer-edition` · `webtoon-flow-handoff`
- 우선순위: brief > concept > world/characters > **이 문서** > 샷리스트 > 프롬프트. 인물·소품 토큰과 레퍼런스 시트 사양은 `character-sheets.md`.
- **기본 패널 화면비 (default aspect): 3:4** (패널마다 §5에서 골라 `aspect:`에 적는다)
- **이미지에는 글자가 전혀 없다.** 말풍선·크메르어·효과음 글자는 뷰어(`km_tool.py build`)가 그린다(§9~10).
- **한국 원작 그대로.** 서울 변두리 고교, 한국 교복, 한국 얼굴, 한국 편의점과 골목. 캄보디아식으로 바꾸지 않는다. 독자가 캄보디아인이라는 사실은 말풍선 언어에만 영향을 준다.

> **Upstream 규칙 교체 (Khmer edition):** upstream `webtoon-panel-breakdown` B-6과 `webtoon-panel-render`의 "말풍선·한글 대사 in-image 베이크", "no overlay", 부정 프롬프트 `no English text, no garbled text`(=글자는 그리되 틀리지 말 것)는 **이 작품에 적용하지 않는다.** 대신 이미지에는 말풍선도 글자도 없고(§9), 각 패널은 레터링 스펙의 `art_space`를 빈 배경으로 남기며(§10), 뷰어가 크메르어 말풍선을 그린다. 레퍼런스 시트도 글자 없음(upstream과 같음).

---

## 0. 한눈에 보기

| 항목 | 결정 |
|---|---|
| 화풍 | 모던 한국 학원 로맨스 웹툰. 깔끔한 가는 선 + 2톤 소프트 셀 셰이딩 + 실제 서울을 닮은 정돈된 페인터리 배경 |
| 비례 | 현실 비율 고교생(7.5~8등신), 한국인 얼굴. 치비/SD·만화 기호 없음 |
| 톤 | 설렘 60 · 긴장 40 (concept §0). 말싸움 티키타카, 긴장 직후 코미디 1~2컷 |
| 두 세계 | **낮의 학교 = 따뜻한 금빛**(공개된 서윤) / **밤의 편의점 = 차가운 초록·흰빛**(숨긴 서윤) / **9년 전 겨울 = 호박색 눈**(기억) |
| 예약색 | 초록 = 비밀(조끼·편의점) · 주황 띠 = 그 겨울의 맛(참치마요) · 흰 학 vs 누런 아이보리 학 = 기억 · 진홍 = 선도부 완장 · 빨간 의자 = 9년 전 |
| 캔버스 | 이미지 한 장 = 패널 한 칸, 테두리 없음. 기본 3:4, 와이드/정지 컷 9:16, 인서트 1:1 |
| 글자 | 0. 간판·종이·화면·명찰·시계 숫자·포장 전부 무지 |
| 말풍선 | 뷰어가 그림. 이미지는 `art_space`만 비운다 |
| ep01 | 60패널, 16씬(E01S01~S16), LOC 12개 사용 |

---

## 1. 작화 스타일

- **화풍:** 정통 한국 웹툰 원작 스타일의 학원 로맨스(비교작 <연애혁명>의 생활 디테일 + <여신강림>·<선재 업고 튀어>류의 설렘 컷 미감). 인물은 예쁘되 현실적이고, 배경은 "실제로 있는 서울 변두리"처럼 구체적이다.
- **렌더 디테일:** 인물은 셀 2톤(밝은 면 + 그림자 한 단계)에 볼 홍조·눈 하이라이트만 소프트 그라데이션. 배경은 인물보다 한 단계 부드러운 페인터리 처리(선을 줄이고 면으로), 설렘·반전 컷에서만 빛 번짐(bloom)을 더한다.
- **얼굴:** 동아시아(한국인) 얼굴, 눈은 웹툰답게 조금 크되 애니메이션 크기는 아니다. 코는 선 하나, 입은 작게. 감정은 눈썹·눈꺼풀·입꼬리·볼 홍조로만.
- **코미디 컷(P17~18, P28~29, P47):** 같은 얼굴 모델 안에서 과장한다(크게 벌린 입, 빨개진 귀, 굳은 눈). 치비/SD, 땀방울·분노 마크·하트 같은 만화 기호, 배경 집중선은 쓰지 않는다.
- **트렌드 정합(trend-brief):** 10대 후반~20대 여성 모바일 독자 기준의 "캡처하고 싶은 컷" 미감. 캡처 컷 후보: P6(창가 도하 첫 정면), P27(새끼손가락 도장 역광), P37(손잡고 걷는 뒷모습), P60(밤 안경 도하 정면).
- **Flow 키워드:** `Korean webtoon`, `clean line art`, `soft cel shading`은 안정적이다. `anime`, `manga`, `chibi`, `photorealistic`, `3D render`, `oil painting`은 쓰지 않는다.

### 1-1. STYLE_CORE (모든 패널 프롬프트 맨 앞, 그대로 복사) [고정]

> Original Korean webtoon illustration, modern Korean high-school romance webtoon style, clean confident thin line art with slightly tapered strokes, soft two-tone cel shading with gentle gradients on skin and hair, tidy painterly backgrounds of a real Seoul neighbourhood, realistic proportions of Korean teenagers, East Asian Korean faces, cinematic light, one single full-bleed panel with no borders.

### 1-2. STYLE_REF (레퍼런스 시트 카드 맨 앞) [고정]

> Original Korean webtoon illustration, modern Korean high-school romance webtoon style, clean confident thin line art, soft two-tone cel shading, realistic proportions of Korean teenagers, East Asian Korean faces, clean character reference sheet on a plain light warm-grey background, even soft studio light, neutral colours with no mood lighting.

---

## 2. 선 (line)

| 항목 | 규칙 |
|---|---|
| 굵기 | 인물 외곽선 가늘고 균일(끝만 살짝 가늘어짐), 머리카락 안쪽 선은 더 가늘게. 배경 선은 인물보다 가늘고 연하게 |
| 색 | 낮 장면 선 = 짙은 갈색빛 검정(#2A2420 근처), 밤 장면 선 = 짙은 남흑(#141B2B 근처). 순검정 굵은 외곽선 금지 |
| 손 | 손은 이 작품의 단서 운반자다(파스, 학, 테이프 자국, 새끼손가락). 손가락 마디·손톱을 또렷하게, 손가락 수 정확히 |
| 종이 | 종이학·영수증·껌 포장지는 접힌 면마다 선을 넣어 "접는 방식"이 읽히게 한다(특히 P14·P56·P57) |
| 정지 컷 | 무대사 정지 컷(P37, P53~55)은 선을 더 줄이고 면과 빛으로 |

---

## 3. 색감 · 팔레트

### 3-1. 마스터 팔레트 (world §7-1 값 확정)

| 역할 | HEX |
|---|---|
| 교복 남색 | #1F2A44 |
| 크림 벽 / 은행 노랑 / 칠판 녹 / 나무 | #EFE6D2 / #E8B931 / #3E5A4C / #A9825A |
| 낮 햇빛 금색 (빛) | #F6D488 (art-director 추가, 빛이지 물감이 아님) |
| 형광 흰 / 조끼 초록 / 냉장고 청록 / 밤 남흑 / 가로등 주황 | #F2F6F4 / #2F8F5B / #9FD6CF / #141B2B / #F0A048 |
| 백열 노랑 / 눈 흰 / 빨간 의자 / 귤 | #FFCF7A / #F7F3EA / #C8463C / #F29B38 |
| 살구 역광 / 그늘 보라 | #F4B89A / #7A6A9E |
| 영수증 학 흰색 / 키링 학 누런 아이보리 | #F4F4F0 / #E9DDB8 |
| 선도부 완장 진홍 | #B0213A |
| 후드 차콜 | #3A3D42 |

### 3-2. 무드 팔레트 (장면에 하나만 고른다)

| 코드 | 무드 | 빛 문구 (EN, 프롬프트에 그대로) | 주색 | ep01 사용 |
|---|---|---|---|---|
| **M_DAY** | **따뜻한 금빛 학교 낮** | `warm golden late-October sunlight streaming through tall windows, long soft window shadows, floating dust motes in the light, bright yellow ginkgo leaves outside, warm cream and navy tones` | 남색·크림·은행 노랑·금빛 | S02, S04~S06, S08~S11 (P4~47) |
| **M_DAY_OUT** | 학교 밖 낮 | `crisp clear late-October morning, low golden sun, cool blue shadows, ginkgo leaves drifting down` | 은행 노랑·하늘 청·남색 | S03 (P8) |
| **M_LANDING** | 계약의 계단참 | `quiet dim stairwell, soft apricot backlight through a dusty window, hazy rim light on hair and shoulders, cool violet shadows` | 살구·그늘 보라·남색 | S07 (P22~27) |
| **M_SCHOOL_NIGHT** | 야자 끝 밤 | `night, school windows glowing flat white above, orange streetlights on yellow ginkgo leaves, deep navy sky` | 남흑·가로등 주황·은행 노랑 | S12 (P48) |
| **M_NIGHT** | **차가운 초록·흰빛 편의점 밤** | `flat cold white fluorescent light, green-and-white store interior, cyan glow from the drink fridges, deep navy-black night outside the glass, a few orange streetlights` | 형광 흰·조끼 초록·청록·남흑 | S01, S13, S14, S16 (P1~3, P5 인서트, P49~53, P55~60) |
| **M_BLANK** | 여백 스크롤 | `almost empty deep navy-black night, a faint distant orange streetlight glow at the very bottom` | 남흑 | S15 (P54) |
| **M_FLASH** | **호박색 눈 회상 (9년 전 겨울)** | `warm amber incandescent glow, snow falling softly, faded film grain, soft dark vignette at the edges, gently desaturated warm colours` | 백열 노랑·눈 흰·빨간 의자·귤 | ep01 미사용(ep02 이후 회상) |
| **M_ALLEY_NIGHT** [ep02] | 자정 넘은 귀갓길 골목 | `after midnight, sparse pools of orange streetlamp light on cold concrete, deep navy-black shadows between the lamps, quiet and empty` | 남흑·가로등 주황·콘크리트 회색 | ep02 E02S03 (P10) |
| **M_HOME_NIGHT** [ep02] | 반지하 방의 밤 | `dark room at night, one thin beam of orange streetlight falling through the high narrow window, everything else in soft deep navy shadow with just enough dim light to read faces and hands, low contrast` | 남흑·가로등 주황 한 줄 | ep02 E02S04 (P11) |
| **M_SCHOOL_NIGHT_IN** [ep02] | 야자 끝 학교 안 (교실·복도) | `night, flat neutral white fluorescent ceiling light indoors, cream walls and navy uniforms, black windows reflecting the room, quiet and tired` | 형광 흰·크림·남색·남흑 | ep02 E02S14~S15 (P47~50) |
| **M_BUS_NIGHT** [ep02] | 밤 버스 안 | `cool blue-white bus interior light, dark night outside the window with orange streetlights and bright plain windows smearing past, faint condensation on the glass` | 청백·청회색·남흑·가로등 주황 | ep02 E02S17 (P53) |
| **M_COUNSEL** [ep03] | 상담실 낮 (닫힌 방의 압박) | `soft pale grey daylight filtered through half-lowered white blinds, thin parallel stripes of light and shadow across the table, the hands and the faces, muted cream, grey and light-wood tones with navy uniforms, still air, quiet and pressured` | 회백·크림·밝은 나무·남색 | ep03 E03S09 (P28~41) |

- **M_LANDING은 점심시간이다.** 창밖에 노을 하늘을 그리지 않는다. 먼지 낀 창이 걸러 준 살구빛 역광이라는 "느낌"만.
- **P5 인서트는 회상이 아니다**(어젯밤 계산대). M_NIGHT로 그리고 M_FLASH를 쓰지 않는다.
- 채도: 낮은 따뜻하고 중간 채도, 밤은 저채도에 초록·청록만 살짝 높게, 회상은 채도를 한 단계 낮추고 노랑을 올린다.
- **ep02 무드 4종 확정 [AD, 2026-11-22]** (panel-director 초안 기준). M_ALLEY_NIGHT·M_BUS_NIGHT는 초안 그대로 확정. M_HOME_NIGHT는 `with just enough dim light to read faces and hands`를 더했다(P11 엄마 오른손목 파스가 읽혀야 함). M_SCHOOL_NIGHT_IN은 `neutral`과 `cream walls and navy uniforms`를 더했다(학교의 밤은 중성 흰빛 + 크림이고, 편의점의 차가운 초록·흰빛과 구별해야 함).
  - **예약색 유지(§3-3):** 네 무드 모두 선명한 조끼 초록을 쓰지 않는다. M_SCHOOL_NIGHT_IN 안의 선명한 초록은 P47 가방 지퍼 틈 조끼 끝뿐이고, 형광등이어도 초록·청록 기운을 넣지 않는다. M_BUS_NIGHT는 실내 컷이라 버스 외관의 녹색이 보이지 않게 하고, 실내는 청회색 좌석, 창밖 간판·창은 무지.
  - M_ALLEY_NIGHT: 가로등은 정확히 세 개(LOC_UPHILL_ALLEY), 골목에 인물 없음(P10, W3). M_HOME_NIGHT: 주황은 창으로 드는 빛 한 줄뿐.
  - **M_SCHOOL_NIGHT vs M_SCHOOL_NIGHT_IN:** 창 너머 가로등 길이 보이는 컷(ep01 P48, ep02 P51~52)은 M_SCHOOL_NIGHT, 실내만 보이는 컷(ep02 P47~50)은 M_SCHOOL_NIGHT_IN.
- **ep03 무드 [AD, 2026-11-22]:** 새 무드는 **M_COUNSEL 하나**(LOC_COUNSEL_ROOM 전용, E03S09 P28~41). 따뜻한 학교 낮(M_DAY) 한가운데의 차갑게 가라앉은 닫힌 방이다. 금빛 햇살·먼지 입자·은행잎을 넣지 않고, 블라인드가 거른 회백색 빛과 줄무늬 그림자만 쓴다. 줄무늬는 P34(도하 정면 클로즈업)에서 가장 또렷하게, 얼굴을 가리지 않는 선에서.
  - **예약색 유지(§3-3):** M_COUNSEL에 선명한 조끼 초록 없음(화분 잎은 탁하고 어두운 녹색 #3E5A4C 계열). 진홍은 P29·P41 유리문 너머 흐린 완장 덩어리뿐(§3-3-4: 같은 컷에 다른 진홍 물체 없음). 휴지 상자·양식은 무지 흰색, 담임 텀블러는 은색.
  - **나머지 ep03 씬은 기존 무드 그대로:** E03S01·S14(P1~3, P51~54) M_NIGHT / E03S02(P4~7, 01:20 반지하 방) M_HOME_NIGHT(P4 엄마 오른손목 파스가 읽히게) / E03S03·S04·S16·S17(07:55 교무실 앞 복도·교무실, P8~14, P56~60) M_DAY(아침 낮은 빛) / E03S05·S06(조회·쉬는 시간 교실, P15~21) M_DAY / E03S07(계단참, P22~26) M_LANDING(점심 직전, 노을 없음) / E03S08·S10(점심 순찰 복도, P27, P42~44) M_DAY / E03S11(학생부실 앞 오후, P45~46) M_DAY / E03S12(P47) M_SCHOOL_NIGHT / E03S13(창고, P48~50) M_NIGHT(ep01 P49 전례) / E03S15(P55) M_ALLEY_NIGHT(가로등 세 개, 골목에 인물 없음).

### 3-3. 예약색 규칙 [고정]

1. **초록은 비밀의 색.** 선명한 조끼 초록(#2F8F5B)은 편의점 장면과 조끼에만. 낮 학교 장면에 선명한 초록이 들어오는 경우는 **가방 지퍼 틈의 조끼 끝(P7, P39, P41)뿐**이다. 칠판·화분·실내화 고무 띠는 탁하고 어두운 녹색(#3E5A4C 계열)으로 눌러, 조끼 초록과 겹치지 않게 한다.
2. **주황 띠 = 참치마요.** 주황 띠 포장은 참치마요 삼각김밥에만. 매운 것 = 빨강 띠, 채소 = 초록 띠(world §7-3). 주황 띠 삼각김밥은 P2·P51·P52·P58에서 같은 모양.
3. **흰 학 두 가지.** 서윤의 영수증 학 = 깨끗한 흰색 #F4F4F0(얇은 광택), 도하 키링 속 학 = 9년 묵은 누런 아이보리 #E9DDB8. 같은 접는 방식, 다른 흰색. P56↔P57 매치 컷의 핵심.
4. **진홍 = 선도부.** 진홍 완장은 하람·건우만. 다른 진홍 물체를 같은 컷에 두지 않는다.
5. **빨간 플라스틱 의자**는 9년 전 회상과 LOC_CROSSROADS의 빈 점포 앞에만(빛바랜 #C8463C).

---

## 4. 분위기 · 조명

**톤 한 문단:** 낮의 서진고는 밝고 따뜻하고 줄을 세우는 세계다. 창 그림자와 먼지 입자, 샛노란 은행잎 속에서 서윤은 교과서처럼 완벽하다. 밤의 솔내동 편의점은 차갑고 평평하고 조용한 세계다. 형광등이 모든 것을 같은 밝기로 만들고, 유리창 밖은 남흑이다. 서윤은 매일 21시 44분 버스로 이 두 세계를 건넌다. 그림은 이 온도 차이를 장면이 바뀔 때마다 독자가 피부로 느끼게 해야 한다.

| 시간 / 장소 | 조명 성향 |
|---|---|
| 08:20 교실 (P4~7) | 왼쪽 큰 창에서 들어오는 낮고 따뜻한 아침 빛, 긴 창틀 그림자가 책상 위에 |
| 교무실 문 앞 (P9~10) | 복도 쪽 확산광 + 교무실 안 창빛. 하이키, 조용함 |
| 2교시 뒤 복도 (P11~19) | 창 쪽 **역광**, 인물 가장자리에 금빛 림라이트 |
| 점심 계단참 (P22~27) | M_LANDING. 위(옥상 문 쪽) 창에서 역광 → 위에 선 사람이 실루엣에 가깝게(정보를 쥔 사람) |
| 매점 (P30~35) | 창구 안 형광 + 바깥 낮빛 섞임. 약간 노란 실내 |
| 7교시 뒤 교실 (P38~47) | 오후 늦은 해, 빛이 낮아지고 그림자가 길어짐. P41만 조명을 좁혀 가방 지퍼에 시선 집중 |
| 21:40 은행나무 길 (P48) | M_SCHOOL_NIGHT. 2층 복도 창의 흰빛 + 길의 주황 가로등 |
| 편의점 (P1~3, P49~60) | M_NIGHT. 평평한 형광 + 냉장고 청록. 그림자가 짧고 흐림. P59~60은 배경을 단순화하고 도하 얼굴에 형광 흰빛 정면광 |
| 창고 (P49) | 천장 형광 하나, 모니터의 회색 빛 |

---

## 5. 화면비 · 캔버스 · 패널 프레이밍

### 5-1. 크기 등급 → 화면비

| aspect | 크기 | 쓰는 곳 (ep01 권장, 최종은 샷리스트) |
|---|---|---|
| **3:4** | medium (기본) | 대사 단독 컷, 바스트·허리 위 투샷, 리액션 (대부분의 대사 패널) |
| **9:16** | large / full-bleed / 정지 | 콜드 오픈 창 너머(P1), 정류장 점퍼 남자(P8), 계단참 로우 앵글(P22), 반전 A(P33), 설렘 정지 뒷모습(P37), 은행나무 길 하이 앵글(P48), 여백 스크롤(P54), 마지막 정면(P60) |
| **4:3** | medium-wide | 교실 반 전체·대소동(P4, P6, P28~29), 가방 검사 그룹(P38, P40), 투샷 측면(P11, P24) |
| **1:1** | small / insert / ECU | 손·종이학·키링·가방 지퍼·스캐너(P14, P18, P27, P36, P41, P51, P56, P57) |
| **16:9** | wide strip | 가로로 긴 정적·전경이 필요할 때만(예: 복도 원경). ep01은 거의 쓰지 않는다 |

- Flow에 원하는 비율이 없으면 가장 가까운 것을 고른다. 저장은 PNG(`flow_tool.py status --fix`가 변환).
- **P54(빈 여백 스크롤):** 9:16 한 장의 거의 빈 남흑 밤 + 레터링 스펙의 큰 `gap_after`로 "길게 늘인" 느낌을 만든다. 더 긴 이미지를 억지로 만들지 않는다.
- **P60(마지막 패널):** 엔딩 캡션 「— 2화에 계속 —」(뷰어가 그림)을 위해 아래 1/6을 단순한 어두운 배경으로 비운다.

### 5-2. 프레이밍 규칙

1. **이미지 한 장 = 패널 한 칸.** 테두리, 칸 나눔 선, 흰 여백, 말풍선을 그리지 않는다. 뷰어가 전체 폭으로 쌓고 간격은 `gap_after`가 정한다.
2. **분할 컷(SPLIT)은 예외로만.** 비트시트가 "얼굴 + 인서트"를 한 패널에 요구하는 곳(P5, P10, P21, P23, P39, P57)은 먼저 **한 프레임 안의 전경/후경 구도**로 풀어 본다(예: P10 = 정면 미소 바스트, 허리 아래 등 뒤로 돌린 주먹이 보이는 약간 옆 앵글). 꼭 나눠야 하면 `two stacked frames in one image separated by a thin plain white gutter`, **최대 2칸**, 샷리스트에 `split: yes` 표기. `art_space`는 칸 사이 홈이 아니라 한 칸 안에 둔다. P57(학 ECU + 서윤 눈 띠)은 분할 허용.
3. **세로 스크롤 읽기:** 시선은 위→아래, 다음 패널 쪽으로. 말풍선 자리(`art_space`)는 기본적으로 위쪽에 둔다(§10).
4. **ECU 필수 컷:** P14, P56, P57은 학의 두 특징(갈고리처럼 접은 머리 + 한 번 접어 내린 꼬리 끝)이 판별되는 익스트림 클로즈업. P56과 P57은 **같은 각도·같은 크기**(매치 컷, P56 이미지를 P57 생성 때 참조로 첨부 권장).
5. **흐림 유지 컷:** P42~43의 키링은 전경 아웃포커스, 접는 방식 판별 불가. 클로즈업 금지(P56을 위해 아낀다).
6. **구도 재현 쌍:** P2 ↔ P58(같은 미디엄 클로즈업, 살짝 로우, 후드 그늘 속 뿔테 반사, 계산대 위 주황 띠 삼각김밥). P58 생성 때 P2 이미지를 참조로 첨부.
7. **같은 실루엣:** P1~3 후드와 P56~59 후드는 같은 의상·같은 백팩(도하 밤 변형). P1~3·P56~58에서 후드 손님 얼굴 위쪽은 그림자, 키링은 P56 전까지 보이지 않게(P1~3은 백팩 왼쪽 끈이 프레임 밖이거나 그늘).

### 5-3. 방향 규약 (180도 규칙) [world §6 고정]

| 장소 | 규약 |
|---|---|
| **편의점 계산대 정면 투샷** | 손님 시점: **계산대 안 서윤 = 화면 오른쪽, 손님 = 화면 왼쪽.** 유리병(종이학) = 화면 왼쪽 계산대 끝(손님 쪽에 가까움), 초록 할인 바구니 = 오른쪽 끝, 회색 폐기 바구니 = 계산대 아래. 역샷(서윤 어깨 너머)은 유리창과 밖의 정류장·사거리가 배경(P53) |
| **계단참** | 잠긴 회색 철제 옥상 문 = 화면 위쪽, 내려가는 계단 = 화면 아래쪽. 위에 선 사람 = 정보를 쥔 사람(P22 도하). P24에서 서윤이 한 칸 올라서며 눈높이가 같아진다 |
| **교실** | 큰 창 = 교실 왼쪽(칠판을 바라볼 때). 창가 자리 도하. 뒤쪽 하이 와이드(P4)에서는 창이 화면 왼쪽, 칠판이 정면 위 |
| **은행나무 길 (P48)** | 2층 복도 창에서 내려다보는 하이 앵글, 전경 위쪽에 도하 실루엣(창틀), 아래 길에 뛰어 내려가는 서윤 |
| **상담실 [ep03]** | 유리문 벽 ↔ 맞은편 블라인드 창 벽. 담임 = 창 쪽(블라인드 등짐), 서윤·도하 = 문 쪽(문 등짐). 창 쪽 마스터 앵글에서 **도하 화면 왼쪽, 서윤 화면 오른쪽**, 유리문은 두 사람 뒤. 상세는 §7-2 LOC_COUNSEL_ROOM |

### 5-4. 키 관계 (투샷 스케일)

- 서윤 163 / 도하 182 / 하람 167 / 담임 176 / 예린 160 / 태민 178 / 건우 185.
- **서윤의 정수리 = 도하의 턱 높이.** 하람은 서윤보다 반 머리 작게 크다(눈높이 차이 약간). 건우는 문가에서 하람 뒤로 머리 하나 위.

---

## 6. 일관성 규약 (프롬프트 조립)

### 6-1. 조립 순서 (prompt-smith, 모든 패널 같은 순서, 한 단락, 약 250단어 이하)

1. STYLE_CORE (§1-1)
2. LOC 토큰 원문(§7) + 시점/방향 한 구(§5-3)
3. 무드 빛 문구(§3-2) 하나
4. 인물: `matching the attached reference image of Seoyun (` + character-sheets의 CORE 토큰 + 그 씬의 OUTFIT 토큰 `)`. 표정 슬롯만 바꾼다. 인물마다 반복
5. 소품 토큰(character-sheets §P), 그 패널에 보일 때만
6. 동작 · 카메라 · 구도 · 표정(샷리스트에서)
7. 빈 물체 문구(§9-2), 해당할 때
8. art_space 문장(§10-3), 대사·효과음이 있는 패널
9. 마지막 줄 그대로: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`

### 6-2. 토큰 규칙

1. **CORE 토큰은 한 글자도 바꾸지 않는다.** 표정·포즈·조명만 가변. 토큰을 바꿔야 하면 art-director가 character-sheets 변경 기록에 남기고 prompt-smith에게 알린다.
2. **좌/우는 인물 본인 기준.** 카메라를 향한 컷에서는 화면 쪽을 괄호로 붙인다: `white square patch on the inside of her left wrist (on the viewer's right)`.
3. **참조 첨부 3장 이하.** 우선순위: 등장 인물 시트(투샷이면 `LEADS_lineup` 한 장) > 매치 컷 원본 패널 > 소품 시트. 첨부해도 외형 키워드는 매번 쓴다(Flow가 참조를 무시할 때 대비).
4. **같은 scene_id = 같은 LOC · 같은 무드 빛 · 같은 의상.** 장소는 SCENE BREAK에서만 바뀐다.
5. **의상 = 장소:** 학교 장면은 서윤 OUTFIT_SCHOOL, 도하 OUTFIT_SCHOOL. 편의점·창고 장면은 서윤 OUTFIT_STORE, 도하 OUTFIT_NIGHT(후드). P48(야자 끝)은 둘 다 학교 교복.
6. **도하 안경:** 밤(후드) 장면에서만 얇은 동그란 검정 뿔테. 낮 학교 장면에는 안경 없음.
7. **엑스트라 반 학생:** 같은 교복 토큰, 얼굴은 중경 이하에서 단순하게. 주요 인물과 같은 헤어 특징(낮은 포니테일+시스루 앞머리, 은테 사각 안경, 단발+실핀, 큰 흰 집게핀)을 엑스트라에 주지 않는다.
8. **달력(ep01 = 10월 넷째 주):** 은행나무 샛노랑·가득, 맑음, 교복 블레이저, 유리병 약 2/3(P50에서 한 마리 더).

---

## 7. 장소 고정 토큰 (LOC_*) [world §6 원문 그대로 · 19개]

토큰 EN 문장은 **world §6 원문을 그대로** 쓴다(줄이거나 바꾸지 않는다). 모든 간판·게시물·화면·종이는 무지. 시간대 변형은 `LOC_X @NIGHT`로 표기하고 아래 "변형" 구를 토큰 뒤에 붙인다.

### 7-1. ep01 씬 ↔ 장소 대응 (panel-director 장소 표의 기준)

| scene_id | 패널 | LOC | 무드 |
|---|---|---|---|
| E01S01 | P1~3 | LOC_CVS (P1은 창 너머 LOC_CROSSROADS) | M_NIGHT |
| E01S02 | P4~7 (P5 인서트 = LOC_CVS) | LOC_CLASSROOM | M_DAY (인서트 M_NIGHT) |
| E01S03 | P8 | LOC_BUS_STOP_SCHOOL | M_DAY_OUT |
| E01S04 | P9~10 | LOC_TEACHERS_OFFICE (문 앞) | M_DAY |
| E01S05 | P11~19 | LOC_HALLWAY | M_DAY |
| E01S06 | P20~21 | LOC_CLASSROOM | M_DAY |
| E01S07 | P22~27 | LOC_STAIR_LANDING | M_LANDING |
| E01S08 | P28~29 | LOC_CLASSROOM | M_DAY |
| E01S09 | P30~35 | LOC_SNACK_BAR (P35 끝에서 복도로 몸을 돌림, 배경은 매점 유지) | M_DAY |
| E01S10 | P36~37 | LOC_HALLWAY | M_DAY |
| E01S11 | P38~47 | LOC_CLASSROOM (오후 늦은 해) | M_DAY |
| E01S12 | P48 | LOC_GINKGO_ROAD @NIGHT (전경 LOC_HALLWAY @NIGHT 창) | M_SCHOOL_NIGHT |
| E01S13 | P49 | LOC_CVS_STOCKROOM | M_NIGHT |
| E01S14 | P50~53, P55 | LOC_CVS (P53은 창 너머 LOC_CROSSROADS) | M_NIGHT |
| E01S15 | P54 | LOC_CROSSROADS @NIGHT (거의 빈 여백) | M_BLANK |
| E01S16 | P56~60 | LOC_CVS | M_NIGHT |

ep01 사용 LOC 12개: CVS, CROSSROADS, CLASSROOM, BUS_STOP_SCHOOL, TEACHERS_OFFICE, HALLWAY, STAIR_LANDING, SNACK_BAR, GINKGO_ROAD, CVS_STOCKROOM (+ @NIGHT 변형). 나머지는 시리즈용으로 고정해 둔다.

### 7-2. 학교 (서진고)

**LOC_GATE** — 서진고 교문 (ep01 미사용)
- token: `Korean private high school main gate at the foot of a hill, grey stone gate pillars with blank metal plaques, open black iron sliding gate, uphill avenue of tall ginkgo trees behind, students in navy blazers, discipline monitors with plain crimson armbands`

**LOC_GINKGO_ROAD** — 은행나무 오르막
- token: `150 m uphill school avenue lined with ginkgo trees, low stone wall, school building at the top, leaf colour shows the season (bright yellow / falling / bare / snow)`
- ep01 계절 구: 괄호 부분을 `bright yellow ginkgo leaves in full`로 바꿔 쓴다(괄호째 넣지 않는다).
- **@NIGHT 변형 (P48):** `at night, the ginkgo leaves glowing yellow under orange streetlights, the school building's windows lit flat white above, deep navy sky`

**LOC_BUS_STOP_SCHOOL** — 학교 앞 정류장
- token: `Seoul roadside bus shelter on a wide road below the school hill, translucent roof, blank white ad panel, metal bench, one ginkgo tree, green city bus with blank destination display`
- P8: 낮은 앵글로 언덕 위 학교를 함께, 버스는 없어도 된다. 점퍼 남자는 벤치 옆, 은행나무 쪽.

**LOC_CLASSROOM** — 2학년 1반 교실
- token: `Korean high school classroom, 28 single wooden-top desks in rows, empty green chalkboard with faint smudges, wall clock with tick marks and no numerals, wide windows on the left with cream curtains, back-wall grey lockers, cream walls, wooden floor`
- 교탁 위 스피커(P4~5 방송)는 `a plain grey wall speaker above the chalkboard`. 책상 옆 고리에 가방.

**LOC_CLASSROOM @NIGHT** — 야자 교실 (ep01 미사용)
- token: `same classroom at night, all fluorescent lights on, black windows reflecting the room, students bent over desks, supervising teacher at the back`

**LOC_HALLWAY** — 2층 복도
- token: `long school corridor, windows on one side over the ginkgo avenue, classroom sliding doors with small glass panes on the other, pale green lower wall and cream upper wall, terrazzo floor, blank notice board`
- **@NIGHT 변형 (P48 전경):** `at night, fluorescent lights on, the windows black and reflecting the corridor`
- **@NIGHT 계단 머리 보조구 [ep02, P48~50]:** @NIGHT 변형 뒤에 붙인다: `at the head of the stairwell, the first concrete steps going down`

**LOC_STAIR_LANDING** — 옥상 앞 계단참
- token: `top stair landing below a locked grey steel rooftop door, two old desks and chairs stacked against the wall, dusty window with late-afternoon light, worn concrete steps, quiet and hidden`
- ep01은 점심시간이므로 M_LANDING 빛 문구가 토큰의 `late-afternoon light`보다 우선한다(토큰 문장은 그대로 두고 빛 문구를 뒤에 붙인다).

**LOC_STUDENT_OFFICE** — 학생부실 앞 (ep01 미사용)
- token: `corridor outside the student-discipline office, frosted glass door, locked small wooden tip box with a slot mounted on the wall, plain crimson armbands hanging on a hook inside`

**LOC_TEACHERS_OFFICE** — 교무실
- token: `Korean school staff room, rows of grey steel teacher desks with stacked blank papers and monitors showing plain grey, potted plants, window blinds, kettle`
- ep01 시점(P9~10): `seen from the corridor through the open sliding door`. 전경 복도에 담임·서윤, 안쪽 담임 책상에 흰 무지 봉투를 두고 다른 문으로 나가는 도하(작게·선명하게).

**LOC_SNACK_BAR** — 매점
- token: `small school snack shop window with a queue of students, shelves of plain-wrapped bread and milk in colour-coded packs, no labels or prices`
- P30: 창구 안쪽에서 본 미디엄. 기한 짧은 빵 = 무지 투명 비닐 포장 빵.

**LOC_COUNSEL_ROOM** [ep03 신규, 20번째] — 상담실 (교무실 복도 쪽 작은 방, E03S09 P28~41, 무드 M_COUNSEL)
- token: `small quiet Korean high-school counselling room off the staff-room corridor, a round light-wood table in the middle with four plain chairs, a box of plain white tissues and a stack of blank white forms on the table, a small potted plant in the corner, plain cream walls with nothing on them, one window with white blinds half lowered, a wall clock with tick marks and no numerals above the door, a frosted-glass door with no sign or lettering on the glass, anyone in the corridor behind it shows only as a soft blurred faceless silhouette`
- 이 문장은 다른 LOC처럼 **단어 그대로** 쓴다(줄이거나 바꾸지 않는다). 담임 자리 앞 양식은 무지, 펜만 움직인다(P39). 휴대폰은 뒷면(P36).
- **유리문 실루엣 보조구 (P29·P41에서만, 토큰 뒤에 붙인다):**
  - P29: `behind the frosted glass, small and out of focus, the blurred faceless silhouette of a girl in a navy blazer with a smear of crimson at her left upper arm, stopped mid-step`
  - P41: `behind the frosted glass, small and out of focus, the same blurred faceless silhouette with a smear of crimson at the upper arm, quietly moving away`
  - 실루엣에는 얼굴·안경 반사·머리 모양 디테일·글자가 없다. 진홍 덩어리(완장)가 "하람일지도"를 읽히게 하는 유일한 단서다. 다른 패널(P28, P30~40)에서는 유리문을 비워 둔다(흐린 복도 빛만).
- **방향 규약 (고정):**
  1. 방 배치: 불투명 유리문이 있는 벽과 블라인드 창이 있는 벽이 **서로 마주 본다.** 원탁은 가운데. 시계는 문 위. 화분은 창 쪽 구석.
  2. 자리: 담임 = **창 쪽 의자**(블라인드를 등지고 문을 마주 봄). 서윤·도하 = **문 쪽 의자 두 개**(문을 등지고 창을 마주 봄). 네 번째 의자는 담임 옆에 비어 있다. 그래서 블라인드 줄무늬 빛은 서윤·도하의 얼굴에 떨어지고(P34), 담임은 약한 역광.
  3. **마스터 앵글 = 창 쪽(담임 어깨 너머)에서 문을 향해:** 도하 화면 왼쪽, 서윤 화면 오른쪽, 유리문은 두 사람 뒤 가운데~약간 왼쪽, 문 위 시계. P28(담임 시점, 문가에 선 두 사람), P29·P41(유리문 실루엣 컷)은 모두 이 방향이다. 비트시트 P41 "두 사람 뒤에서 본 와이드, 유리문 쪽으로 깊이"는 문이 두 사람 등 뒤에 있으므로 **담임 쪽 넓은 앵글에서 두 사람을 중경, 유리문을 깊은 배경**으로 푼다(panel-director 참고).
  4. 역샷(문 쪽에서 창을 향해, 담임 정면 컷 P30·P35·P36·P39·P40): 배경은 블라인드 창, 180도 규칙을 지켜 **도하 = 화면 오른쪽, 서윤 = 화면 왼쪽**으로 뒤집힌다(전경 어깨로 나올 때). 이 방향에서는 유리문이 보이지 않는다.
  5. art_space(§10): 마스터 앵글은 유리문 위 크림 벽·시계 주변, 역샷은 블라인드 창 윗부분이 빈자리. 시계 위에 말풍선을 겹치는 것은 괜찮지만 유리문 실루엣 위에는 두지 않는다(P29·P41).
- 비트시트 머리말은 "three chairs"였으나 art-director 결정으로 **네 개**(담임 + 두 학생 + 빈 의자 하나). 빈 의자가 "한서윤만 불렀는데"(P28)의 자리 배치를 자연스럽게 만든다.

### 7-3. 이동

**LOC_BUS_NIGHT** — 밤 버스 안 (ep01 미사용)
- token: `inside a green Seoul city bus at night, half-empty, blue-grey seats, hand straps, cool interior light, dark streets with orange streetlights sliding past the windows`

**LOC_ACADEMY_STREET** — 학원가 사거리 (ep01 미사용)
- token: `busy night crossroads of tall buildings full of brightly lit cram-school classrooms, blank signboards glowing plain white and blue, students with backpacks pouring out, parents' cars`

### 7-4. 솔내동 · 편의점

**LOC_CVS** — 편의점 내부 (토큰 자체가 밤. 비트시트의 `LOC_CVS @NIGHT` = 이 토큰)
- token: `small Korean 24-hour convenience store at night, bright cool white light, green-and-white interior, aisle shelves of colour-blocked plain packages, cold drink fridges, a counter on the right with receipt printer, a small glass jar of white paper cranes at the counter's left end, a small green wire basket at the right end, a grey bin under the counter, narrow window bar with three stools facing the street`
- 계산대 소품 보조구(필요할 때): `card terminal with a blank screen, cigarette shelf behind the counter as plain colour blocks`. 벽시계 = `wall clock with tick marks and no numerals`(P51 12시, P52 12시 40분 근처).
- 직원 문 보조구 [ep02, P6·P7, 필요할 때]: `a plain grey staff door behind the counter, with no sign, leading to the back stockroom`
- 방향은 §5-3. 계산대 위에 문제집이 보이면 `open workbook with blank pages`.

**LOC_CVS_FRONT** — 편의점 앞 (ep01 미사용)
- token: `corner convenience store seen from the street at night, glowing glass front, blank green signboard, two plastic outdoor tables with green chairs, bus stop directly in front, old crossroads with low buildings, orange streetlights`

**LOC_CVS_STOCKROOM** — 편의점 창고
- token: `cramped back stockroom, stacked cardboard boxes with no print, mop and bucket, a small mirror, a monitor showing grey blurred CCTV shapes, a green staff vest on a hook`
- P49: 서윤이 조끼를 입는 중이므로 고리의 조끼는 비어 있다(`an empty hook`로 바꿔 쓴다).

**LOC_CROSSROADS** — 솔내동 사거리
- token: `quiet old-neighbourhood crossroads late at night, the convenience store on one corner, a shuttered pharmacy, an empty shop with a rusty roll-down shutter and a faded red plastic stool in front, power lines, distant glow of a big-box store parking lot`
- P1: 편의점 안에서 유리창 너머로. 후드 실루엣은 정류장 쪽이 아니라 **반대편 어두운 골목**에서 걸어온다.
- P53: 서윤 어깨 너머 역샷. 빨간 의자와 마트 주차장 불빛은 **작게**(언급 없음).
- **@NIGHT (P54):** 토큰 그대로 쓰되 M_BLANK로 대부분을 어둠에 묻는다: `almost everything sunk into darkness, only a faint streetlight glow at the very bottom`.

**LOC_UPHILL_ALLEY** — 귀갓길 오르막 골목 (ep01 미사용)
- token: `narrow steep residential alley in an old Seoul neighbourhood after midnight, three streetlamps far apart, gas meters, potted plants, parked scooters, a stray cat, concrete steps`

**LOC_HOME** — 서윤의 반지하 방 (ep01 미사용)
- token: `small semi-basement single room, a high narrow window at street level showing passing feet, folded floor mattress, low folding desk with a desk lamp, small kitchenette corner, neat but bare, clothes on a rack`

**LOC_OLD_SUPER @PAST** — 9년 전 동네 슈퍼 (회상 전용, M_FLASH)
- token: `tiny neighbourhood grocery shop on a snowy winter night nine years ago, warm yellow bulb light, fogged glass door, blank yellow signboard, a red plastic stool outside the door, stacked tangerine boxes, snow falling, warm grain`

### 7-5. LOC 색인 (19개)

LOC_GATE · LOC_GINKGO_ROAD · LOC_BUS_STOP_SCHOOL · LOC_CLASSROOM · LOC_HALLWAY · LOC_STAIR_LANDING · LOC_STUDENT_OFFICE · LOC_TEACHERS_OFFICE · LOC_SNACK_BAR · LOC_CLASSROOM @NIGHT · LOC_BUS_NIGHT · LOC_ACADEMY_STREET · LOC_CVS · LOC_CVS_FRONT · LOC_CVS_STOCKROOM · LOC_CROSSROADS · LOC_UPHILL_ALLEY · LOC_HOME · LOC_OLD_SUPER @PAST. 새 장소가 필요하면 panel-director와 조율해 여기 추가한다(world §6 우선).

- **[ep03] + LOC_COUNSEL_ROOM** (20번째, §7-2, world §6에도 한 줄 추가). ep03 사용 LOC: CVS(+ 창 너머 CROSSROADS), HOME, HALLWAY, TEACHERS_OFFICE, CLASSROOM, STAIR_LANDING, COUNSEL_ROOM, STUDENT_OFFICE, GINKGO_ROAD @NIGHT, CVS_STOCKROOM, UPHILL_ALLEY.

---

## 8. 소품 시각 규칙 (요약, 토큰 원문은 character-sheets §P)

| 소품 | 시각 규칙 |
|---|---|
| 서윤의 종이학 | 약 3cm, 갈고리처럼 접은 머리 + 한 번 접어 내린 꼬리 끝. 영수증(흰 감열지, 얇은 광택) 또는 은백색 껌 포장지(P13~19). **이 두 특징은 서윤의 학과 도하 키링 학에만** |
| 하람의 제보 쪽지 (P20) | 서툰 학 모양으로 접힌 무지 종이, **두 특징 없음**(`clumsy crane-shaped folded note with a plain head and plain tail`) |
| 레진 학 키링 | 도하 백팩 **왼쪽** 어깨끈 D링. 학은 누런 아이보리. P42~43 흐림, P56 ECU |
| 초록 조끼 | 학교 장면에서는 가방 바닥에 말린 채 지퍼 틈으로 끝만(P7, P39, P41) |
| 유리병 | 계산대 왼쪽 끝, 뚜껑 없음, 약 2/3 |
| 흰 사각 파스 | 서윤 = 왼손목 안쪽(블레이저 소매 밑으로 살짝, P9) |
| 계약서 | 4등분으로 접힌 무지 흰 종이 한 장(P25~27). 공책에서 찢은 것이라 한쪽 가장자리가 뜯겨 있다 |
| 삼각김밥 | 투명 비닐, 주황 띠, 인쇄 없음 |
| 휴대폰 | 뒷면(예린 연보라 케이스) 또는 흐린 흰 빛만 나는 화면 |

---

## 9. 글자 없는 그림 규칙 [고정 · Khmer edition]

### 9-1. 전역 규칙

1. **모든 패널·모든 레퍼런스 시트에 글자 0.** 말풍선, 캡션 박스, 효과음 글자, 한글·영문·크메르어·숫자·가짜 글씨·로고·워터마크 없음.
2. 글자를 실어야 할 물체(간판, 명찰, 배지, 완장, 성적표, 계약서, 제보 쪽지, 영수증, 휴대폰·카드 단말기·CCTV 화면, 버스 전광판, 가격표, 포장지, 시계)는 **무지로** 그린다. 정보는 대사·색·빛·행동으로(world §7-3).
3. **효과음(딩동, 지잉, 종, 지이익, 삑)은 그리지 않는다.** 소리는 동작으로만 보여 준다(열리는 문, 진동하는 휴대폰, 스캐너의 붉은 빛). 글자는 뷰어가 쓴다.
4. 모든 패널 프롬프트의 마지막 줄: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.` 레퍼런스 시트: `Avoid: any text, labels, speech bubbles, watermark.`
5. upstream 부정 프롬프트 `no English text, no gibberish/garbled text`는 쓰지 않는다(위 Avoid 줄이 대신한다).

### 9-2. 빈 물체 문구 (EN, 프롬프트에 그대로)

| 물체 | 문구 |
|---|---|
| 편의점 간판 | `blank green signboard with no logo` |
| 명찰 / 배지 / 완장 | `blank white plastic name bar` / `plain metal shield badge with no letters` / `plain crimson armband with no letters` |
| 교실 스피커 | `a plain grey wall speaker` |
| 휴대폰 | `phone seen from the back` 또는 `phone screen showing only a soft blank white glow` |
| 종이 (성적표·계약서·쪽지·문제집) | `plain blank white paper` / `open workbook with blank pages` |
| 영수증 | `blank white thermal receipt paper` |
| 시계 | `wall clock with tick marks and no numerals` |
| CCTV 모니터 | `monitor showing grey blurred shapes only` |
| 카드 단말기 | `card terminal with a blank screen` |
| 버스 | `green city bus with a blank destination display` |
| 포장 | `plain colour-blocked packaging with no print` |
| 박스 | `cardboard boxes with no print` |

---

## 10. 말풍선 시각 규약 (Khmer edition: 뷰어가 그린다) · art_space 규약

### 10-1. 말풍선 모양 (이미지에 그리지 않는다. letterer가 `type`을 고른다)

| type | 뷰어 모양 | 이 작품에서 |
|---|---|---|
| `dialogue` | 흰 알약형 풍선, 진한 테두리, 꼬리 | 대부분의 대사. 서윤의 계산대 업무 존댓말도 dialogue |
| `thought` | 점선 둥근 풍선, 꼬리 대신 작은 원 | 서윤 속말(P5 "…처음이야.", P10, P48 "4분."), 독백(P50) |
| `shout` | 굵은 테두리, 각진 모서리, 기울어짐 | 예린·태민 대소동(P29), 하람 반말 균열(P44) 정도 |
| `narration` | 어두운 사각 박스 | 엔딩 캡션 「— 2화에 계속 —」(P60 아래) |
| `memory` | 파란 빛 테두리 | 9년 전 회상 대사(ep02 이후). ep01 미사용 |
| `dialogue` + 꼬리를 프레임 밖으로 | — | 방송(P4~5, 꼬리 = 스피커 쪽), 사장님 통화(P7, 휴대폰 쪽), 하람 프레임 밖(P34), 서윤 프레임 밖 "어서 오세…"(P56, 오른쪽 가장자리) |
| `sfx` | 흰 굵은 글자 + 검은 외곽선 | 딩동(P2, P56), 지잉(P7), 예비 종(P35), 지이익(P41), 야자 종(P48), 삑(P51) |
| `env` | 물체 위 글씨 | ep01 없음(그림 속 글씨 줄 0개) |

- 크메르어 레터링 톤(뷰어 폰트): 대사 Battambang, 외침·효과음 Koulen, 손글씨 Fasthand. 검은 글자/흰 풍선 고대비. 글자 크기는 패널 폭의 3.4%(외침 4%).
- **풍선당 크메르어 최대 약 2줄, 패널당 풍선 1~2개**(P25·P26·P43은 2개까지). 긴 대사는 letterer가 `read_order` 1, 2로 나눈다.

### 10-2. art_space 크기 (뷰어 수치 기준)

크메르어 2줄 풍선 하나 ≈ 폭 45~55%, 높이 ≈ 패널 **폭**의 17%. 그래서 필요한 빈자리(폭의 절반 이상 × 세로):

| aspect | 풍선 1개 | 풍선 2개 |
|---|---|---|
| 9:16 | 위쪽 1/6 | 위쪽 1/4 |
| 3:4 | 위쪽 1/5 | 위쪽 1/3 |
| 1:1 | 위쪽 1/4 | 위쪽 2/5 |
| 4:3 | 위쪽 1/3 | 한쪽 절반 폭의 세로 띠 |
| 16:9 | 한쪽 1/3 폭 세로 띠 | 권장하지 않음(무대사 권장) |

### 10-3. 표준 art_space 문장 (prompt-smith가 레터링 스펙의 `art_space`를 영어로 옮겨 채움)

> Keep <the top fifth of the frame, above the characters' heads> as calm, empty background with no important details (a speech bubble will be added there later).

빈자리의 "배경" 예: 교실 = 크림 벽·커튼·흐린 창빛 / 복도 = 창빛 역광 / 계단참 = 먼지 낀 창의 살구빛 / 편의점 = 형광 천장·흐린 진열대 윗부분 / 밤 거리 = 남흑 하늘.

### 10-4. 배치 규칙 (샷리스트·레터링·프롬프트 공통)

1. 기본은 **위쪽, 화자 쪽 위.** 편의점 정면 투샷: 손님(도하) = 왼쪽 위, 서윤 = 오른쪽 위.
2. 얼굴, 손, 종이학, 키링, 가방 지퍼의 조끼 끝, 파스, 유리병 위에는 절대 두지 않는다.
3. ECU 컷(P14, P56, P57)은 물체를 화면 중앙~아래에, 위쪽 1/4을 흐린 배경으로.
4. 무대사 패널(`silent: true`)은 art_space가 없다. 그래도 화면 가장자리에 글자처럼 보이는 무늬를 만들지 않는다.
5. P60: 위쪽(도하 말풍선 2개) + 아래 1/6(엔딩 캡션) 두 곳을 비운다. 도하 얼굴은 중앙.
6. P4~5 방송 말풍선은 스피커 쪽 위(칠판 위), 반 학생들 머리 위의 크림 벽이 빈자리.
7. panel-validator C3(Khmer edition) = "글자 없음 + art_space가 실제로 비어 있음 + 빈 물체가 글자 넣을 만큼 크고 무지". 가까운 다른 곳이 비어 있으면 다시 그리기 대신 letterer에게 새 `place`를 제안한다.

---

## 11. 금지 · 주의

1. **글자·말풍선·효과음 글자를 이미지에 넣지 않는다**(§9). 
2. **캄보디아식 변형 금지.** 크메르 문자, 캄보디아 건축·의상·거리·간판, 툭툭, 열대 식물을 그리지 않는다. 서울 변두리, 한국 교복, 한국 편의점 그대로.
3. **로고·브랜드 금지.** 편의점 체인 로고, 교복 브랜드, 휴대폰 로고, 버스 회사 표식 없음.
4. **씬과 무관한 배경·장소 급변 금지.** 같은 scene_id 안에서 LOC·빛·의상이 바뀌면 REGEN.
5. **화풍 일탈 금지:** 애니메이션 셀, 실사, 3D, 유화, 치비/SD, 만화 기호.
6. **외형 드리프트 금지:** 서윤 앞머리·포니테일·다크서클·왼손목 파스, 도하 눈썹 덮는 머리·왼쪽 목 점·왼쪽 끈 키링·밤에만 안경, 하람 단발·은테 사각 안경·오른쪽 귀 뒤 실핀·왼팔 완장. 좌우가 뒤집히면 REGEN(Flow가 좌우 반전하기 쉬움).
7. **신체 접촉 수위:** 손잡기·새끼손가락까지(계약 조항 4, 교칙). 그 이상 그리지 않는다.
8. **점퍼 남자 얼굴을 또렷하게 그리지 않는다**(원경, 그림자 속 반측면).
9. **사장님 얼굴 ep01 등장 없음**(목소리만, 비트시트 D-6).
10. **선명한 초록·주황 띠·진홍·빨간 의자는 §3-3 자리에만.**

### 11-1. Flow 드리프트 감시 목록 (panel-validator)

| 흔한 실수 | 대응 |
|---|---|
| 간판·종이·화면에 가짜 글씨 | REGEN, 프롬프트에 빈 물체 문구 보강 |
| 말풍선 모양의 흰 원 / 빈 말풍선 | REGEN |
| 도하가 낮에 안경 | REGEN |
| 키링이 오른쪽 끈 / 학이 새하얌 | REGEN(P56은 필수) |
| 서윤 파스가 오른손목 | REGEN |
| 하람 안경이 둥근 테 / 완장이 오른팔 | REGEN |
| 교복이 일본식 세일러복·학란 | REGEN(남색 블레이저 + 넥타이 + 체크 치마) |
| 편의점이 일본식 콘비니 간판 | REGEN(무지 초록 간판) |
| 학에 두 특징 없음(P14, P56, P57) | REGEN |

---

## 12. Flow 실무 (사용자용 메모)

1. 레퍼런스 시트를 먼저 만든다(character-sheets §R). 패널은 시트가 확정된 뒤.
2. 패널 카드에 적힌 `attach:` 이미지를 먼저 첨부하고, 비율을 고르고, 프롬프트를 붙여 넣는다.
3. 얼굴이 흔들리면: 같은 프롬프트로 2~3장 더 → 가장 시트와 닮은 것 → 그래도 안 되면 그 인물 `_turnaround` 한 장만 첨부하고 다시.
4. 매치 컷(P58 ← P2, P57 ← P56)은 앞 컷 이미지를 함께 첨부한다.
5. 이미지 안에 글자가 조금이라도 생기면 쓰지 말고 다시 만든다(뷰어가 글자를 쓴다).
6. **ep02 생성 순서 [ep02]:** ep02 P1, P2, P8, P38, P51, P56, P61은 `attach:`에 ep01 패널이 있다(P1 ← ep01 P59, P2 ← ep01 P60, P8 ← ep01 P1, P38 ← ep01 P22, P51 ← ep01 P48, P56 ← ep02 P8 + ep01 P53, P61 ← ep01 P60). 그래서 **해당 ep01 이미지가 생긴 뒤에만** 만들 수 있다. ep01이 아직 이미지 대기 중이면 이 7장은 미뤄 두고 나머지부터 만든다. ep02 안에서는 P8 → P56, P16 → P30, P5 → P55 순서. P9는 `MISUK_turnaround` 시트가 확정된 뒤.

---

## 13. 하류 인계 · 변경 기록

- **ref-sheet-artist:** character-sheets §R 카드 목록대로 `refs/ref_prompts.md` 작성(렌더 아님). STYLE_REF + 글자 없음.
- **panel-director:** §7-1 씬 대응표, §5 화면비·프레이밍·방향, §10-4 배치 규칙. 모든 패널에 `scene_id`/`location`.
- **letterer:** §10 말풍선 종류·크기·배치. `text_km`은 대본 KM 그대로.
- **prompt-smith:** §6-1 조립 순서, §1-1 STYLE_CORE, §3-2 빛 문구, §7 LOC 원문, §9-2 빈 물체 문구, §10-3 art_space 문장, 마지막 Avoid 줄.
- **panel-validator:** §9, §10-4-7, §11-1.

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-21 | 최초 작성(ep01). world §6 LOC 19개 원문 고정, 무드 팔레트 7종(M_DAY·M_DAY_OUT·M_LANDING·M_SCHOOL_NIGHT·M_NIGHT·M_BLANK·M_FLASH), Khmer edition 말풍선·art_space 규약, upstream in-image 베이크 규칙 교체 명시 |
| v1.1 | 2026-11-22 | ep02 추가만(기존 문구 유지): §3-2 무드 4종 확정(M_ALLEY_NIGHT·M_HOME_NIGHT·M_SCHOOL_NIGHT_IN·M_BUS_NIGHT) + 예약색 메모, §7 LOC_CVS 직원 문 보조구·LOC_HALLWAY @NIGHT 계단 머리 보조구, §12-6 ep01 첨부 의존 패널 생성 순서 |
| v1.2 | 2026-11-22 | ep03 추가만(기존 문구 유지): §7-2 LOC_COUNSEL_ROOM 신규(20번째, 고정 EN 토큰: 원탁 + 의자 4개, 블라인드 반쯤 내린 창, 숫자 없는 시계, 무지 크림 벽, 얼굴 없는 흐린 실루엣만 비치는 불투명 유리문) + P29·P41 유리문 실루엣 보조구 + 방향 규약, §5-3 상담실 행, §7-5 ep03 사용 LOC 메모, §3-2 무드 M_COUNSEL 신규 + ep03 씬별 기존 무드 대응·예약색 메모 |
