import { FORMATIONS, POSITION_PROFILES, PLAYSTYLE_MODS, NORMALIZE_SPOT } from './config.js';
import { SAMPLE_PLAYERS } from './data.js';
import { csvParse } from './utils/csv.js';

// ----------------- 設定 -----------------
const OUT_OF_POS_MULT = 0.7; // 適性外は 70%

// 取り扱うキー（その他は読み込み時に捨てる）
const ALLOWED_KEYS = new Set([
  "name","league","positions","position", // positions推奨。positionは後方互換
  "handling","distribution","aerial",
  "defending","stamina","press","passing",
  "speed","dribble","finishing","offball"
]);

// ----------------- ヘルパー -----------------
const el = (id)=>document.getElementById(id);

function getPositions(p){
  if(!p) return [];
  return Array.isArray(p.positions) ? p.positions
       : p.position ? [p.position]
       : [];
}
function positionsLabel(p){
  const arr = getPositions(p);
  if(!arr.length) return "";
  const [main,...rest] = arr;
  return rest.length ? `${main} (sub: ${rest.join(", ")})` : main;
}
function isEligibleForSpot(player, spotKey){
  const norm = NORMALIZE_SPOT(spotKey);
  const ps = getPositions(player);
  return ps.includes(norm);
}
function sanitizePlayer(obj){
  const out = {};
  for(const [k,v] of Object.entries(obj)){
    if(!ALLOWED_KEYS.has(k)) continue;
    out[k] = isFinite(+v) ? +v : v;
  }
  if(typeof out.positions === "string"){
    out.positions = out.positions.split(/[，,]/).map(s=>s.trim()).filter(Boolean);
  }
  if(!Array.isArray(out.positions) && out.position){
    out.positions = [out.position];
  }
  return out;
}

// ----------------- スコア計算 -----------------
function scorePlayerForPosition(player, spotKey, playstyle){
  const norm = NORMALIZE_SPOT(spotKey);
  const prof = POSITION_PROFILES[norm] || POSITION_PROFILES["CMF"];
  const mods = PLAYSTYLE_MODS[playstyle] || {};
  const mult = isEligibleForSpot(player, spotKey) ? 1.0 : OUT_OF_POS_MULT;

  let s = 0;
  prof.attrs.forEach((attr,i)=>{
    const base = (player[attr] ?? 50) * mult;
    const mod  = mods[attr] ?? 1.0;
    s += base * mod * (prof.w[i] || 0);
  });
  return Math.round(s);
}

// ----------------- 状態 -----------------
const state = {
  league: localStorage.getItem('tb_league') || 'Premier League',
  formation: localStorage.getItem('tb_formation') || '4-3-3',
  playstyle: localStorage.getItem('tb_playstyle') || 'Standard',
  threshold: +(localStorage.getItem('tb_threshold') || 65),
  players: JSON.parse(localStorage.getItem('tb_players') || 'null') || SAMPLE_PLAYERS,
  lineup: JSON.parse(localStorage.getItem('tb_lineup') || '{}'),
  targetPos: null,
  search: '',
};
function persist(){
  localStorage.setItem('tb_league', state.league);
  localStorage.setItem('tb_formation', state.formation);
  localStorage.setItem('tb_playstyle', state.playstyle);
  localStorage.setItem('tb_threshold', state.threshold);
  localStorage.setItem('tb_players', JSON.stringify(state.players));
  localStorage.setItem('tb_lineup', JSON.stringify(state.lineup));
}

// ----------------- UI初期化 -----------------
const $league = el('league'), $formation = el('formation'), $playstyle = el('playstyle'), $threshold = el('threshold'), $thVal = el('thVal');
const $loadBtn = el('loadBtn'), $file = el('file'), $exportBtn = el('exportBtn'), $resetData = el('resetData');
const $playerList = el('playerList'), $poolCount = el('poolCount'), $search = el('search'), $resetXI = el('resetXI');
const $cells = el('cells'), $report = el('report'), $reportHint = el('reportHint');
const $dlg = el('dlg'), $dlgTitle = el('dlgTitle'), $nameInput = el('nameInput'), $dlgList = el('dlgList'), $closeDlg = el('closeDlg'), $pickFromList = el('pickFromList'), $clearSpot = el('clearSpot');

function initSelectors(){
  $formation.innerHTML = Object.keys(FORMATIONS).map(f=>`<option ${f===state.formation?'selected':''}>${f}</option>`).join('');
  const styles = Object.keys(PLAYSTYLE_MODS);
  $playstyle.innerHTML = styles.map(ps=>`<option ${ps===state.playstyle?'selected':''}>${ps}</option>`).join('');
  $league.value = state.league;
  $threshold.value = state.threshold; $thVal.textContent = state.threshold;
}

// ----------------- 描画 -----------------
function poolByLeague(){
  return state.players.filter(p=>p.league===state.league);
}
function isCompleteXI(){
  return (FORMATIONS[state.formation]||[]).every(sp=>state.lineup[sp.key]);
}

function renderPool(){
  const pool = poolByLeague();
  const q = (state.search||'').toLowerCase();
  const filtered = pool.filter(p => {
    const posText = getPositions(p).join(',').toLowerCase();
    return p.name.toLowerCase().includes(q) || posText.includes(q);
  });
  $poolCount.textContent = pool.length + '人';
  $playerList.innerHTML = filtered.map(p=>`
    <div class="item">
      <div>
        <div>${p.name}</div>
        <div class="muted" style="font-size:11px">${positionsLabel(p)} • ${p.league}</div>
      </div>
      <span class="tag">候補</span>
    </div>
  `).join('');
}

function renderPitch(){
  const spots = FORMATIONS[state.formation];
  const pool = poolByLeague();
  $cells.innerHTML = '';
  spots.forEach(sp=>{
    const div = document.createElement('div');
    div.style.gridRow = sp.row; div.style.gridColumn = sp.col;

    const btn = document.createElement('button');
    btn.className = 'spot'; btn.dataset.spot = sp.key;

    const name = state.lineup[sp.key];
    const ply = pool.find(p=>p.name===name);
    const fit = ply ? scorePlayerForPosition(ply, sp.key, state.playstyle) : null;

    const label = NORMALIZE_SPOT(sp.key); // 表示は正規名
    btn.innerHTML = `
      <div class="pos">${label}</div>
      ${ply ? `
        <div class="nm">${ply.name}</div>
        <div class="muted" style="font-size:10px">${positionsLabel(ply)} • ${fit ?? '-'}</div>`
      : `<div class="muted">クリックで選手追加</div>`}
    `;

    if(isCompleteXI() && fit!==null && fit < state.threshold){ btn.classList.add('bad'); }
    btn.addEventListener('click', ()=> openDialog(sp.key));

    div.appendChild(btn); $cells.appendChild(div);
  });
}

function renderReport(){
  const spots = FORMATIONS[state.formation];
  const pool = poolByLeague();
  const complete = isCompleteXI();
  $reportHint.style.display = complete ? 'none' : 'block';
  $report.innerHTML = '';
  if(!complete) return;

  spots.forEach(sp=>{
    const name = state.lineup[sp.key];
    const p = pool.find(x=>x.name===name);
    const fit = p ? scorePlayerForPosition(p, sp.key, state.playstyle) : null;
    const bad = fit !== null && fit < state.threshold;

    const box = document.createElement('div'); box.className = 'rep-item' + (bad?' bad':'');
    const head = document.createElement('div'); head.innerHTML = `<strong>${NORMALIZE_SPOT(sp.key)}:</strong> ${name || '-'} ${fit!==null?`<span class="badge" style="margin-left:6px">${fit}</span>`:''}`;
    box.appendChild(head);

    if(bad){
      const title = document.createElement('div'); title.textContent = '同リーグおすすめ（上位5）'; title.style.margin='6px 0'; title.className='muted';
      box.appendChild(title);
      const list = document.createElement('div'); list.style.display='grid'; list.style.gap='6px';

      const cands = pool
        .map(pp=>({pp, sc: scorePlayerForPosition(pp, sp.key, state.playstyle)}))
        .sort((a,b)=>b.sc-a.sc).slice(0,5);
      cands.forEach(c=>{
        const row = document.createElement('div'); row.style.display='flex'; row.style.justifyContent='space-between'; row.style.alignItems='center'; row.style.border='1px solid var(--line)'; row.style.borderRadius='10px'; row.style.padding='6px 8px'; row.style.background='#0e1524';
        row.innerHTML = `<div><div>${c.pp.name}</div><div class='muted' style='font-size:10px'>${positionsLabel(c.pp)} • ${c.pp.league}</div></div><div><span class='badge'>${c.sc}</span> <button class='btn' data-replace='${sp.key}::${c.pp.name}'>置き換え</button></div>`;
        list.appendChild(row);
      });
      box.appendChild(list);
    }
    $report.appendChild(box);
  });

  $report.querySelectorAll('[data-replace]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const [spot, name] = e.target.getAttribute('data-replace').split('::');
      state.lineup[spot] = name; persist(); renderPitch(); renderReport();
    });
  });
}

// ----------------- ダイアログ -----------------
function openDialog(spotKey){
  state.targetPos = spotKey; $dlgTitle.textContent = `${NORMALIZE_SPOT(spotKey)} に選手を配置`; $nameInput.value='';
  renderDialogList();
  $dlg.showModal();
}
function closeDialog(){ $dlg.close(); state.targetPos=null; }
function renderDialogList(){
  const pool = poolByLeague();
  const norm = NORMALIZE_SPOT(state.targetPos);
  const profile = POSITION_PROFILES[norm];

  $dlgList.innerHTML = pool
    .map(p=>({p, sc: scorePlayerForPosition(p, state.targetPos, state.playstyle)}))
    .sort((a,b)=>b.sc-a.sc)
    .map(({p,sc})=>`
      <div class='item row'>
        <div>
          <div>${p.name}</div>
          <div class='muted' style='font-size:11px'>${positionsLabel(p)} • 期待値 ${sc}</div>
        </div>
        <button class='btn' data-pick='${p.name}'>選ぶ</button>
      </div>
    `).join('');

  $dlgList.querySelectorAll('[data-pick]').forEach(b=>{
    b.addEventListener('click', e=>{
      const nm = e.target.getAttribute('data-pick'); state.lineup[state.targetPos]=nm; persist(); renderPitch(); renderReport(); closeDialog();
    });
  });
}

// ----------------- イベント -----------------
$league.addEventListener('change', e=>{ state.league=e.target.value; persist(); renderPool(); renderPitch(); renderReport(); });
$formation.addEventListener('change', e=>{ state.formation=e.target.value; persist(); renderPitch(); renderReport(); });
$playstyle.addEventListener('change', e=>{ state.playstyle=e.target.value; persist(); renderPitch(); renderReport(); });
$threshold.addEventListener('input', e=>{ state.threshold=+e.target.value; $thVal.textContent=state.threshold; persist(); renderPitch(); renderReport(); });
$search.addEventListener('input', e=>{ state.search=e.target.value; renderPool(); });
$resetXI.addEventListener('click', ()=>{ state.lineup={}; persist(); renderPitch(); renderReport(); });
$resetData.addEventListener('click', ()=>{
  localStorage.removeItem('tb_players');
  localStorage.removeItem('tb_lineup');
  location.reload();
});

$loadBtn.addEventListener('click', ()=> $file.click());
$file.addEventListener('change', async (e)=>{
  const file = e.target.files && e.target.files[0]; if(!file) return;
  const text = await file.text();
  try{
    let parsed = [];
    if(file.name.toLowerCase().endsWith('.json')) parsed = JSON.parse(text);
    else parsed = csvParse(text);

    // 置換（古い余計なキーは捨てる）
    const map = new Map();
    parsed.forEach(p=>{
      if(!p.name || !p.league || (!p.positions && !p.position)) return;
      const cleaned = sanitizePlayer(p);
      map.set(cleaned.name, cleaned);
    });

    state.players = Array.from(map.values());
    persist(); alert(`読み込み: ${parsed.length}人 / 総計 ${state.players.length}人`);
    renderPool();
  }catch(err){ console.error(err); alert('読み込み失敗。JSON または CSV 形式で、name/league/positions を含めてください。'); }
  e.target.value='';
});

$exportBtn.addEventListener('click', ()=>{
  const payload = { meta:{ league:state.league, formation:state.formation, playstyle:state.playstyle, threshold:state.threshold }, lineup: state.lineup };
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download=`lineup_${state.formation}_${state.league.replace(/\s/g,'')}.json`; a.click(); URL.revokeObjectURL(url);
});

$closeDlg.addEventListener('click', closeDialog);
$pickFromList.addEventListener('click', renderDialogList);
$clearSpot.addEventListener('click', ()=>{ if(state.targetPos){ delete state.lineup[state.targetPos]; persist(); renderPitch(); renderReport(); } closeDialog(); });
$nameInput.addEventListener('keydown', e=>{
  if(e.key==='Enter'){
    const q = e.target.value.trim().toLowerCase();
    const pool = poolByLeague();
    const hit = pool.find(p=>p.name.toLowerCase()===q);
    if(hit){ state.lineup[state.targetPos]=hit.name; persist(); renderPitch(); renderReport(); closeDialog(); }
  }
});

// ----------------- 起動 -----------------
(function boot(){
  initSelectors(); renderPool(); renderPitch(); renderReport();
})();
