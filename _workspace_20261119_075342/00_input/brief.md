# Brief — EP01 (initial run)

- 요청 원문: "트렌드 반영해서 웹툰 1화 만들어줘" (2026-11-16)
- 실행 모드: 초기 실행 (Phase 0 case 1 — `_workspace/` 없음)
- 회차: EP01 (NN = 01)
- 장르/톤: 지정 없음 → 트렌드 리서치 결과로 결정
- 분량: 50+ 패널, 대사 위주, 우상향 긴장 곡선, 매 회차 반전 1개 이상, 끝에 클리프행어
- 수위: 지정 없음 → 일반 연령 웹툰 수준(전체~15세)

## 프로젝트 고정 조건 (CLAUDE.md)
- **Khmer edition:** 독자는 캄보디아인이며 **크메르어만 본다**. 바뀌는 것은 딱 두 가지:
  (1) 말풍선에 크메르어 표시 (뷰어가 그림), (2) 대본에 크메르어(`KM:` 줄) 추가.
  리서치·스토리·세계관·캐릭터·작화는 하네스 설계 그대로. "독자가 캄보디아인"은 텍스트 언어에만 영향.
  `webtoon-khmer-edition` 스킬을 모든 단계에서 따른다.
- **Flow-by-hand mode:** 이미지는 사용자가 Google Flow에서 직접 만든다. Codex 없음.
  Phase 4는 `webtoon-flow-handoff` 스킬을 따르고, 핸드오프 페이지를 만든 뒤 사용자를 기다린다.
  panel-artist-a/b/c는 쓰지 않는다. 이미지에는 글자가 전혀 없다.

---

# Brief — EP02 (new episode, 2026-11-17)

- 요청: "Start episode 2" (EP01 이미지는 아직 Flow에서 제작 전)
- 실행 모드: Phase 0 case 2 — 새 회차. NN = 02
- 재사용(재작성 금지): `01_research/*`, `02_story/*`(concept·world·characters·series-arc·twist-plan·tension-curve·glossary_km),
  `04_visual/style-bible.md`, `character-sheets.md`, `refs/`(레퍼런스 시트 — 신규 캐릭터·장소만 추가)
- 연속성 원천: `continuity.md`는 아직 없음(EP01 Phase 5 전). 대신 `03_episode/ep01_script_final.md`가 확정된 EP01 내용이다.
- EP02 골격: series-arc §5 EP02 행 「퇴근하세요」 + twist-plan EP02 + tension-curve EP02 메모.
  신규: 전임자(손 주인, EP02 P1–5 얼굴 공개), 장소 L3 로비. 분량 50–60패널(50+ 하한).
- 고정 조건은 EP01과 동일: Khmer edition(KM 줄, 글자 없는 이미지, 뷰어가 말풍선), Flow-by-hand mode.
- 주의: EP01 검증·QA 전이므로, EP01에서 소품·외형이 바뀌면 EP02 프롬프트를 맞춰 고친다.

---

# Brief — EP03 (new episode, 2026-11-18)

- 요청: "start episode 3". 실행 모드: Phase 0 case 2 — 새 회차. NN = 03. 브랜치: main.
- 재사용(재작성 금지): `01_research/*`, `02_story/*`(concept·world·characters·series-arc·twist-plan·tension-curve·glossary_km v4),
  `04_visual/style-bible.md`·`character-sheets.md`·`refs/`(레퍼런스 시트 — 신규 인물·장소·소품만 추가)
- 연속성 원천: `03_episode/ep02_script_final.md`(P58 마감 = 노미란이 인수인계서 B를 내민다; 끝 노트 §E = EP03 인계 메모)
  와 `ep01_script_final.md`. `continuity.md`는 EP01·EP02 QA 전이라 아직 없다.
- EP03 골격: series-arc §5 EP03 「인수인계」 행(무료 아크의 끝) + twist-plan EP03 절(T-a 서랍 맨 아래 칸 = 영수증, T-b 내선 목소리) + tension-curve EP03 메모.
  신규: 전입신고 민원인, 개명 신청 민원인(손·서식만 — 클리프). 분량 50–60패널(50+ 하한).
- 플랫폼 노트(platform-ranker): EP3 끝 = 무료→유료 전환 핵심. 클리프는 미해결 미스터리 질문.
- 고정 조건은 EP01·EP02와 동일: Khmer edition(KM 줄, 글자 없는 이미지, 뷰어가 말풍선), Flow-by-hand mode.
- 주의: EP01·EP02 이미지는 Flow에서 제작 전. EP01에서 소품·외형이 바뀌면 EP03 프롬프트를 맞춰 고친다.
