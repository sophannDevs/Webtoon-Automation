// Parser for the Flow handoff page written by flow_tool.py (`handoff` command).
//
// Schema it reads (verified against ep01_flow_handoff.html):
//   <title>Flow handoff - ep01</title>
//   <p class="sub">21 character sheet(s), 64 panel(s). Generated ...</p>
//   <code id="p-inbox|p-refs|p-panels">folder path</code>
//   <h2>Character sheets</h2> ... <h2>Panels</h2>      (section headings, document order)
//   <article class="card [done]" data-key="NAME">
//     <header><h3>NAME</h3>
//       <span class="chip">S01 / location: LOC_.. · VIEW_..</span>   (panels only, optional)
//       <span class="chip">Aspect 3:4</span> <span class="chip ok">Saved ✓</span>
//     </header>
//     <div class="reason"><b>Why redraw:</b> ...</div>               (optional)
//     <div class="row"><span class="lbl">Save as</span><code class="fn">NAME.png</code>..</div>
//     <div class="row"><span class="lbl">Attach in Flow</span>
//         <span class="missing">X.png (not made yet)</span>, <a href>Y.png</a></div>   (optional)
//     <div class="row"><span class="lbl">Prompt</span>..</div><pre>PROMPT</pre>
//     <div class="thumb">..</div>                                    (optional)
//   </article>

export const ASPECTS = ['16:9', '9:16', '1:1', '4:3', '3:4'];

const text = (el) => (el ? el.textContent.replace(/ /g, ' ').trim() : '');

function sectionKind(h2Text) {
  const t = h2Text.toLowerCase();
  if (t.includes('character')) return 'character';
  if (t.includes('panel')) return 'panel';
  return null;
}

function rowByLabel(card, label) {
  for (const row of card.querySelectorAll(':scope > .row')) {
    const lbl = row.querySelector(':scope > .lbl');
    if (lbl && text(lbl).toLowerCase() === label.toLowerCase()) return row;
  }
  return null;
}

function parseScene(chipText) {
  // "S02a / location: LOC_L2_STAIRWELL · B2 landing"
  const m = chipText.match(/^(S\d+[a-z]?)\s*\/\s*location:\s*(.+)$/i);
  if (!m) return null;
  const [locId, ...view] = m[2].split('·').map((s) => s.trim());
  return { scene: m[1], locationId: locId, view: view.join(' · ') };
}

/**
 * @param {string} htmlText full contents of the handoff file
 * @returns {{meta:Object, items:Object[], warnings:string[]}}
 * @throws {Error} when the file is not a Flow handoff page
 */
export function parseHandoff(htmlText) {
  const doc = new DOMParser().parseFromString(htmlText, 'text/html');
  const titleMatch = text(doc.querySelector('title')).match(/^Flow handoff\s*-\s*(.+)$/i);
  const cards = doc.querySelectorAll('article.card[data-key]');
  if (!titleMatch || !cards.length) {
    throw new Error('This is not a Flow handoff page (expected title "Flow handoff - epNN" and article.card elements).');
  }

  const warnings = [];
  const meta = {
    episode: titleMatch[1].trim(),
    summary: text(doc.querySelector('p.sub')),
    inboxDir: text(doc.querySelector('#p-inbox')),
    refsDir: text(doc.querySelector('#p-refs')),
    panelsDir: text(doc.querySelector('#p-panels')),
  };
  const declared = meta.summary.match(/(\d+)\s+character sheet\(s\),\s*(\d+)\s+panel\(s\)/i);

  const items = [];
  const seen = new Set();
  let kind = null;
  let order = 0;

  for (const node of doc.querySelectorAll('main > h2, main > article.card[data-key]')) {
    if (node.tagName === 'H2') {
      kind = sectionKind(text(node));
      continue;
    }
    const key = node.getAttribute('data-key');
    if (seen.has(key)) {
      warnings.push(`Duplicate key "${key}" skipped.`);
      continue;
    }
    seen.add(key);

    const chips = [...node.querySelectorAll(':scope > header .chip')].map(text);
    const aspectChip = chips.find((c) => /^Aspect\s/i.test(c));
    const aspect = aspectChip ? aspectChip.replace(/^Aspect\s+/i, '').trim() : '';
    const sceneChip = chips.map(parseScene).find(Boolean) || null;
    const saved = chips.some((c) => /^Saved/i.test(c));

    const prompt = text(node.querySelector(':scope > pre'));
    const fileName = text(node.querySelector(':scope > .row code.fn'));
    const attachRow = rowByLabel(node, 'Attach in Flow');
    const attach = [];
    if (attachRow) {
      for (const el of attachRow.querySelectorAll(':scope > a, :scope > .missing')) {
        const name = (el.getAttribute('data-ref') || text(el).replace(/\s*\(not made yet\)\s*$/i, '')).trim();
        if (name) attach.push({ name, made: el.tagName === 'A' });
      }
    }
    const reason = text(node.querySelector(':scope > .reason')).replace(/^Why redraw:\s*/i, '');

    const itemKind = kind || (/^panel_/i.test(key) ? 'panel' : 'character');
    const label = `${itemKind} ${key}`;
    if (!prompt) warnings.push(`${label}: empty prompt.`);
    if (!aspect) warnings.push(`${label}: no aspect ratio.`);
    else if (!ASPECTS.includes(aspect)) warnings.push(`${label}: unusual aspect ratio "${aspect}".`);
    if (!fileName) warnings.push(`${label}: no "Save as" file name.`);

    items.push({
      id: `${meta.episode}:${key}`,
      key,
      kind: itemKind,
      order: order++,
      title: text(node.querySelector(':scope > header h3')) || key,
      fileName,
      // identity of the image in the reference cache: panels carry their episode folder (ep01/panel_001.png)
      assetKey: node.getAttribute('data-asset') || fileName,
      aspect,
      scene: sceneChip ? sceneChip.scene : '',
      locationId: sceneChip ? sceneChip.locationId : '',
      view: sceneChip ? sceneChip.view : '',
      attach,
      // Attach in Flow: file names of the images that must be attached as references before generating
      requiresReference: attach.length > 0,
      referenceTargets: attach.map((a) => a.name),
      redrawReason: reason,
      prompt,
      sourcePrompt: prompt,
      sourceAspect: aspect,
      alreadySaved: saved,
      // an image already on disk (the page shows "Saved ✓") counts as done: Start All must not draw it again
      status: saved ? 'Completed' : 'Pending',
      savedName: saved ? fileName : undefined,
      error: '',
      updatedAt: 0,
      attempts: 0,
    });
  }

  if (declared) {
    const nc = items.filter((i) => i.kind === 'character').length;
    const np = items.filter((i) => i.kind === 'panel').length;
    if (nc !== +declared[1] || np !== +declared[2]) {
      warnings.push(`Page says ${declared[1]} character sheets / ${declared[2]} panels but parsed ${nc} / ${np}.`);
    }
  }
  return { meta, items, warnings };
}

/** Keep status and edits of items that already exist when the same episode is re-imported. */
export function mergeItems(oldItems, newItems) {
  const old = new Map(oldItems.map((i) => [i.id, i]));
  return newItems.map((n) => {
    const o = old.get(n.id);
    if (!o) return n;
    const promptChanged = o.sourcePrompt !== n.sourcePrompt;
    return {
      ...n,
      prompt: promptChanged ? n.prompt : o.prompt,
      aspect: o.aspect !== o.sourceAspect && o.sourceAspect === n.sourceAspect ? o.aspect : n.aspect,
      status: promptChanged ? (n.alreadySaved ? 'Completed' : 'Pending') : (n.alreadySaved && o.status !== 'Completed' ? 'Completed' : o.status),
      error: promptChanged ? '' : o.error,
      attempts: promptChanged ? 0 : o.attempts,
      updatedAt: o.updatedAt,
    };
  });
}
