export function csvParse(text){
  const lines = text.split(/\r?\n/).filter(Boolean);
  if(!lines.length) return [];
  const headers = splitCsvLine(lines[0]);
  const rows=[];
  for(let i=1;i<lines.length;i++){
    const cols = splitCsvLine(lines[i]);
    const obj = {};
    headers.forEach((h,idx)=> obj[h]=cols[idx] ?? '');
    rows.push(obj);
  }
  return rows;
}
export function splitCsvLine(line){
  const out=[]; let cur=''; let q=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='\"'){ if(q && line[i+1]==='\"'){ cur+='\"'; i++; } else q=!q; }
    else if(ch===',' && !q){ out.push(cur); cur=''; }
    else cur+=ch;
  }
  out.push(cur);
  return out.map(s=>s.trim());
}