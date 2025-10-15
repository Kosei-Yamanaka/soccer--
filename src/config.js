// ピッチ座標（row:1-9, col:1-7）
export const FORMATIONS = {
  "4-3-3": [
    { key:"GK", row:9, col:4 },
    { key:"RSB", row:7, col:6 }, { key:"CB1", row:7, col:3 }, { key:"CB2", row:7, col:5 }, { key:"LSB", row:7, col:2 },
    { key:"DMF", row:6, col:4 }, { key:"CMF1", row:6, col:5 }, { key:"CMF2", row:6, col:3 },
    { key:"LW", row:3, col:2 }, { key:"CF", row:3, col:4 }, { key:"RW", row:3, col:6 },
  ],
  "4-2-3-1": [
    { key:"GK", row:9, col:4 },
    { key:"RSB", row:7, col:6 }, { key:"CB1", row:7, col:3 }, { key:"CB2", row:7, col:5 }, { key:"LSB", row:7, col:2 },
    { key:"DMF", row:6, col:5 }, { key:"CMF", row:6, col:3 },
    { key:"LW", row:4, col:2 }, { key:"AMF", row:4, col:4 }, { key:"RW", row:4, col:6 }, { key:"CF", row:2, col:4 },
  ],
  "3-5-2": [
    { key:"GK", row:9, col:4 },
    { key:"CB1", row:7, col:3 }, { key:"CB2", row:7, col:4 }, { key:"CB3", row:7, col:5 },
    { key:"RSB", row:6, col:6 }, { key:"LSB", row:6, col:2 },
    { key:"CMF1", row:5, col:5 }, { key:"DMF", row:5, col:4 }, { key:"CMF2", row:5, col:3 },
    { key:"CF1", row:2, col:5 }, { key:"CF2", row:2, col:3 },
  ],
};

// 表示→評価用の正規ポジション名へマッピング
export const NORMALIZE_SPOT = (spotKey) => {
  return spotKey.replace(/\d+$/,'') // CB1→CB, CF2→CF など
};

// ポジション別に参照する3能力（重み）
export const POSITION_PROFILES = {
  GK:  { attrs:["handling","distribution","aerial"], w:[0.45,0.30,0.25] },
  CB:  { attrs:["defending","aerial","speed"],       w:[0.50,0.30,0.20] },
  RSB: { attrs:["speed","defending","stamina"],      w:[0.40,0.35,0.25] },
  LSB: { attrs:["speed","defending","stamina"],      w:[0.40,0.35,0.25] },
  DMF: { attrs:["defending","passing","press"],      w:[0.45,0.35,0.20] },
  CMF: { attrs:["passing","stamina","defending"],    w:[0.45,0.30,0.25] },
  AMF: { attrs:["passing","dribble","offball"],      w:[0.40,0.35,0.25] },
  LW:  { attrs:["speed","dribble","finishing"],      w:[0.40,0.35,0.25] },
  RW:  { attrs:["speed","dribble","finishing"],      w:[0.40,0.35,0.25] },
  CF:  { attrs:["finishing","offball","speed"],      w:[0.50,0.30,0.20] },
};

// プレースタイル（任意。使わないなら 1.0 のままでOK）
export const PLAYSTYLE_MODS = {
  Standard:{},
  Possession:{passing:1.08, dribble:1.04},
  Counter:{speed:1.08, offball:1.05},
  HighPress:{press:1.10, stamina:1.06, defending:1.04},
};
