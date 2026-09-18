/* scripts/test-learn.mjs — Funktionstest der Lernmechanik gegen den echten
   Inhalt. Aufruf: npm run test:learn

   Die Engine läuft im Browser gegen window und localStorage. Hier bekommt
   sie beides als Attrappe, damit dieselbe Datei ohne Kopie getestet wird —
   ein nachgebauter Prüfling würde am Ende etwas anderes prüfen als das,
   was ausgeliefert wird. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = {};
global.localStorage = { getItem:k=>store[k]??null, setItem:(k,v)=>{store[k]=v}, removeItem:k=>{delete store[k]} };
global.window = {};
new Function(fs.readFileSync(path.join(ROOT,'private/src/lern-data.js'),'utf8')).call(global);
new Function(fs.readFileSync(path.join(ROOT,'private/src/learn.js'),'utf8')).call(global);
const {LEARN, LF} = global.window;
const lf = LF[0];
let fail = 0;
const ok=(c,m)=>{ if(!c){console.log('  ✗ '+m); fail++;} else console.log('  ✓ '+m); };

console.log('\n1 — Sitzungsziehung');
const s1 = LEARN.buildSession(lf.code, lf.quiz, 25);
ok(s1.length===25, `25 Aufgaben aus ${lf.quiz.length} gezogen`);
ok(new Set(s1.map(i=>i.id)).size===25, 'keine Wiederholung innerhalb der Runde');

console.log('\n2 — Interleaving');
let adjK=0; for(let i=1;i<s1.length;i++) if(s1[i].k===s1[i-1].k) adjK++;
ok(adjK<=3, `höchstens 3 gleiche Kategorien hintereinander (gemessen: ${adjK})`);
let adjT=0; for(let i=1;i<s1.length;i++) if(s1[i].t===s1[i-1].t) adjT++;
ok(adjT<=12, `Typwechsel findet statt (gleiche Typen in Folge: ${adjT})`);

console.log('\n3 — Optionen werden neu gemischt');
const mc = lf.quiz.find(q=>q.t==='mc'&&q.a.length===4);
const pos = new Set(); for(let i=0;i<40;i++) pos.add(LEARN.present(mc).c);
ok(pos.size>=3, `Lösung landet auf ${pos.size} verschiedenen Positionen`);

console.log('\n4 — Bewertung aller Typen');
const g=(t,ans)=>{const it=lf.quiz.find(q=>q.t===t); const v=LEARN.present(it); return [LEARN.grade(v,ans(v)).ok, LEARN.grade(v,({mc:()=>(v.c+1)%v.a?.length,odd:()=>(v.c+1)%v.a.length,tf:()=>!v.v,multi:()=>[],cloze:()=>v.gaps.map(()=>'xx'),type:()=>'xx',calc:()=>'-1',order:()=>v.items.slice().reverse(),match:()=>v.sol.slice().reverse()})[t]()).ok];};
[['mc',v=>v.c],['odd',v=>v.c],['tf',v=>v.v],['multi',v=>v.cs],
 ['cloze',v=>v.gaps.map(x=>x.s)],['type',v=>v.ans[0]],['calc',v=>v.ans[0]],
 ['order',v=>v.items],['match',v=>v.sol]].forEach(([t,right])=>{
  const [a,b]=g(t,right); ok(a&&!b, `${t}: richtig erkannt, falsch abgelehnt`);
});

console.log('\n5 — Tolerante Eingabe');
const calc = LEARN.present(lf.quiz.find(q=>q.t==='calc'));
ok(LEARN.grade(calc,' '+calc.ans[0].replace('.','')+' ').ok, 'Leerzeichen und Tausenderpunkt werden toleriert');
const ty = LEARN.present(lf.quiz.find(q=>q.t==='type'&&/ä|ö|ü|ß/.test(q.ans[0])) || lf.quiz.find(q=>q.t==='type'));
ok(LEARN.grade(ty, ty.ans[0].toUpperCase()).ok, 'Groß- und Kleinschreibung egal');

console.log('\n6 — Successive Relearning (3 Treffer in 3 Runden)');
LEARN.reset(lf.code);
const target = LEARN.present(lf.quiz[0]);
for(let r=0;r<3;r++){ LEARN.record(lf.code,target,true,2); LEARN.endSession(lf.code); }
let st = LEARN.stats(lf.code, lf.quiz);
ok(st.mastered===1, `nach 3 getrennten Runden gilt 1 Item als gelernt (${st.mastered})`);
LEARN.reset(lf.code);
for(let r=0;r<3;r++) LEARN.record(lf.code,target,true,2);   // gleiche Sitzung
st = LEARN.stats(lf.code, lf.quiz);
ok(st.mastered===0, 'drei Treffer in derselben Runde reichen nicht');

console.log('\n7 — Hypercorrection: sicher + falsch kommt zurück');
LEARN.reset(lf.code);
const wrong = LEARN.present(lf.quiz[7]);
LEARN.record(lf.code, wrong, false, 2); LEARN.endSession(lf.code);
let hits=0; for(let i=0;i<30;i++) if(LEARN.buildSession(lf.code, lf.quiz, 25).some(x=>x.id===wrong.id)) hits++;
ok(hits>=26, `falsch+sicher wird in ${hits}/30 Runden erneut gezogen`);

console.log('\n8 — Rotation über Runden');
LEARN.reset(lf.code);
const a=LEARN.buildSession(lf.code,lf.quiz,25).map(x=>x.id);
a.forEach(id=>LEARN.record(lf.code,{id,k:'x'},true,1)); LEARN.endSession(lf.code);
const b=LEARN.buildSession(lf.code,lf.quiz,25).map(x=>x.id);
const overlap=b.filter(id=>a.includes(id)).length;
ok(overlap<=8, `Überschneidung zur Vorrunde: ${overlap}/25 — der Pool rotiert`);

console.log(fail? `\n${fail} Test(s) fehlgeschlagen.` : '\nAlle Tests bestanden.');
process.exit(fail?1:0);
