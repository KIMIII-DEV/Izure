/* scripts/test-pruefung.mjs — Funktionstest der Zwischenprüfung gegen den
   echten Inhalt. Aufruf: npm run test:pruefung

   Wie test-learn.mjs bekommt die Datei window und localStorage als Attrappe
   und lädt die ausgelieferten Quellen unverändert — ein Nachbau würde am
   Ende etwas anderes prüfen als das, was im Browser läuft. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => path.join(ROOT, p);
const store={}; global.localStorage={getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}};
global.window=global;
for (const f of ['private/src/lern-data.js','private/src/learn.js','private/src/pruefung.js'])
  new Function(fs.readFileSync(rel(f),'utf8')).call(global);
const P=window.PRUEFUNG, L=window.LEARN; let fail=0;
const ok=(c,m)=>{console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)fail++;};

console.log('\n1 — Themengebiets-Zuordnung laut Buchtabelle');
ok(P.themengebiet('LF2 2.2.1')===1,'LF2 Kap 2 → TG1');
ok(P.themengebiet('LF2 3.1')===null,'LF2 Kap 3 außerhalb des Prüfungsstoffs');
ok(P.themengebiet('LF3 5.4')===2,'LF3 → TG2');
ok(P.themengebiet('LF5 3.4')===2 && P.themengebiet('LF5 2.3')===3,'LF5 Kap 2 → TG3, sonst TG2');
ok(P.themengebiet('LF1 1.1.2')===3 && P.themengebiet('LF1 5.3')===3,'LF1 1.1 und Kap 4–6 → TG3');
ok(P.themengebiet('LF1 1.3.1')===4 && P.themengebiet('LF1 2.3.1')===4 && P.themengebiet('LF1 3.2')===4,'LF1 1.2–1.4, 2, 3 → TG4');
ok(P.themengebiet('LF4 6')===3,'LF4 → TG3');

console.log('\n2 — Pool');
const cov=P.coverage(); console.log('    Abdeckung je TG:',JSON.stringify(cov));
ok([1,2,3,4].every(t=>cov[t]>=60),'jedes Themengebiet trägt mindestens 4 Vollprüfungen ohne Wiederholung');
const pool=P.pool();
ok(pool.every(x=>x.item.t!=='type'),'keine freie Texteingabe (programmierte Fragen)');
ok(pool.every(x=>x.item.t!=='calc'),'Rechenaufgaben liegen als Auswahl vor');
const calcs=pool.filter(x=>x.item._calc);
ok(calcs.length>=25,`${calcs.length} Rechenaufgaben umgewandelt`);
ok(calcs.every(x=>new Set(x.item.a).size===4 && x.item.a.length===4),'jede Rechenaufgabe hat 4 verschiedene Optionen');
ok(calcs.every(x=>{const r=x.item.a[x.item.c];return x.item.a.filter(a=>a===r).length===1}),'Lösung kommt genau einmal vor');

console.log('\n3 — Zusammenstellung');
const run=P.build();
ok(run.items.length===60,'60 Aufgaben');
ok(run.minutes===120,'120 Minuten');
const q={1:0,2:0,3:0,4:0}; run.items.forEach(v=>q[v.tg]++);
ok([1,2,3,4].every(t=>q[t]===15),'15 je Themengebiet: '+JSON.stringify(q));
ok(new Set(run.items.map(v=>v.key)).size===60,'keine Dublette im Bogen');
let blocks=0,cur=1; for(let i=1;i<60;i++){ if(run.items[i].tg===run.items[i-1].tg){cur++;blocks=Math.max(blocks,cur)} else cur=1 }
ok(blocks<=6,'Themengebiete durchmischt (längster Block: '+blocks+')');

console.log('\n4 — Bewertung nach IHK-Schlüssel');
const note=p=>P.noteFor(p).t;
ok(note(92)==='sehr gut'&&note(91)==='gut','92 = sehr gut, 91 = gut');
ok(note(81)==='gut'&&note(80)==='befriedigend','81 = gut, 80 = befriedigend');
ok(note(67)==='befriedigend'&&note(66)==='ausreichend','67 / 66');
ok(note(50)==='ausreichend'&&note(49)==='mangelhaft','50 / 49');
ok(note(30)==='mangelhaft'&&note(29)==='ungenügend','30 / 29');
ok(P.needed(1,60)===56,'sehr gut braucht 56 von 60');
ok(P.noteFor(55*100/60).t==='gut','Grenzfall: 55/60 = 91,7 Punkte → gut, nicht gerundet');

console.log('\n5 — Vollständige Runde bewerten');
const right=v=>({mc:v.c,odd:v.c,tf:v.v,multi:v.cs,cloze:v.gaps?.map(g=>g.s),order:v.items,match:v.sol})[v.t];
run.items.forEach((v,i)=>{v.answer=i<56?right(v):null});
const r=P.grade(run);
ok(r.right===56,'56 richtig erkannt');
ok(r.note.t==='sehr gut','56/60 → sehr gut ('+r.punkte+' P)');
ok(r.unanswered===4,'4 unbeantwortet gezählt');

console.log('\n6 — Rotation');
const ids1=new Set(run.items.map(v=>v.key));
const run2=P.build();
const ov=run2.items.filter(v=>ids1.has(v.key)).length;
ok(ov===0,'nächste Prüfung überschneidet sich nicht mit der letzten ('+ov+')');
let sum=0; const all=new Set(); for(let k=0;k<6;k++){const x=P.build(); x.items.forEach(v=>v.answer=null); P.grade(x); x.items.forEach(v=>all.add(v.key));}
ok(all.size>=250,`6 Prüfungen nacheinander nutzen ${all.size} verschiedene Aufgaben`);

console.log('\n7 — Kurzformate');
const k=P.build({n:12,minutes:24}); const kq={1:0,2:0,3:0,4:0}; k.items.forEach(v=>kq[v.tg]++);
ok(k.items.length===12 && [1,2,3,4].every(t=>kq[t]===3),'Kurzrunde: 3 je Themengebiet');

console.log(fail?`\n${fail} fehlgeschlagen`:'\nAlle Tests bestanden.'); process.exit(fail?1:0);
