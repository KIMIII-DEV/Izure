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
for (const f of ['private/src/lern-data.js','private/src/zp-data.js','private/src/learn.js','private/src/pruefung.js'])
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

console.log('\n2 — Pool aus den Prüfungssätzen');
const cov=P.coverage(); console.log('    Abdeckung je TG:',JSON.stringify(cov));
const pool=P.pool();
ok(pool.length>=360,`${pool.length} Aufgaben im Pool (Ziel: mindestens 6 × 60)`);
ok(P.sets().filter(z=>z.id!=='X6').every(z=>z.n===60),'fünf Originalsätze mit je 60 Aufgaben');
ok([1,2,3,4].every(t=>cov[t]>=40),'jedes Themengebiet hat mindestens 40 Aufgaben');
ok(pool.some(x=>x.item.t==='calc') && !pool.some(x=>x.item._calc),'Rechenaufgaben bleiben offen (Eingabe wie im Prüfungsheft)');
ok(pool.every(x=>x.item.src && x.g && [1,2,3,4].includes(x.tg)),'jede Aufgabe trägt Herkunft, Konzeptgruppe und Themengebiet');
const lfPool=P.pool({source:'lf'});
ok(lfPool.length>0 && lfPool.every(x=>x.item.t!=='calc'),'Rückfall auf Lernfeld-Pool bleibt lauffähig (Rechnen als Auswahl)');

console.log('\n3 — Zusammenstellung');
const Q=P.quota(60);
ok(Q[1]+Q[2]+Q[3]+Q[4]===60,'Quote ergibt 60: '+JSON.stringify(Q));
ok(Q[1]===7&&Q[2]===15&&Q[3]===20&&Q[4]===18,'Quote wie in den 300 Originalaufgaben (7/15/20/18)');
const run=P.build();
ok(run.items.length===60,'60 Aufgaben');
ok(run.minutes===120,'120 Minuten');
const q={1:0,2:0,3:0,4:0}; run.items.forEach(v=>q[v.tg]++);
ok([1,2,3,4].every(t=>q[t]===Q[t]),'Themengebiete wie die Quote: '+JSON.stringify(q));
ok(new Set(run.items.map(v=>v.key)).size===60,'keine Dublette im Bogen');
const gOf=new Map(ZP.flatMap(z=>z.items).map(it=>[P.keyOf(it),it.g]));
ok(new Set(run.items.map(v=>gOf.get(v.key))).size===60,'jede Konzeptgruppe höchstens einmal im Bogen');
ok(run.items.every((v,i)=>i===0||run.items[i-1].tg<=v.tg),'Reihenfolge wie im Prüfungsheft: TG 1 bis 4');
const f21=P.build({set:'F21'});
ok(f21.items.length===60 && f21.minutes===120 && f21.items[0].src==='ZP F21/1' && f21.items[59].src==='ZP F21/60','Jahrgang F21: ganzer Satz in Originalreihenfolge');
ok(f21.items.some(v=>v.x),'Ausgangssituationen (x) kommen in der Ansicht an');

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
const right=v=>({mc:v.c,odd:v.c,tf:v.v,multi:v.cs,cloze:v.gaps?.map(g=>g.s),order:v.items,match:v.sol,calc:v.ans?.[0],type:v.ans?.[0]})[v.t];
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
const all=new Set(); for(let k=0;k<6;k++){const x=P.build(); x.items.forEach(v=>v.answer=null); P.grade(x); x.items.forEach(v=>all.add(v.key));}
ok(all.size>=250,`6 Prüfungen nacheinander nutzen ${all.size} verschiedene Aufgaben`);

console.log('\n6b — Zahlen- und Datumseingabe');
const gd=(ans,a,t='calc')=>LEARN.grade({t,ans},a).ok;
ok(gd(['13.025','13025'],'13.025')&&gd(['13.025','13025'],'13025 Mailings'),'Tausenderpunkt und Einheit werden toleriert');
ok(gd(['24,96'],'24.96')&&!gd(['24,96'],'2,496'),'24,96 == 24.96, aber 2,496 zählt nicht');
ok(gd(['54.000','54000','54.000,00'],'54.000,00 €'),'Betrag mit Cent und Eurozeichen');
ok(gd(['13.10.2026','13.10.26'],'13.10.2026','type')&&!gd(['13.10.2026','13.10.26'],'13.10.2025','type'),'Datum: falsches Jahr ist falsch');
ok(gd(['1,49'],'1,49 Mitarbeiter je Seat')&&gd(['12'],'12 Anrufe/Stunde')&&gd(['40'],'40-fach'),'mehrteilige Einheit hinter der Zahl wird toleriert');
ok(!gd(['3 Std. 20 Min.'],'3 Std. 45 Min.','type')&&gd(['3 Std. 20 Min.'],'3 std 20 min','type'),'Zahl mit weiteren Zahlen dahinter ist keine Einheit — Textvergleich');
const dup=ZP.flatMap(z=>z.items).find(it=>it.t==='match'&&new Set(it.pairs.map(p=>p[1])).size<it.pairs.length);
if(dup){const v=LEARN.present(dup); ok(new Set(v.right).size===v.right.length && LEARN.grade(v,v.sol).ok,'Zuordnung mit wiederkehrender Kategorie: Auswahl ohne Doppel, Lösung bewertbar');}

console.log('\n7 — Kurzformate');
const k=P.build({n:12,minutes:24}); const kq={1:0,2:0,3:0,4:0}; k.items.forEach(v=>kq[v.tg]++);
const KQ=P.quota(12);
ok(k.items.length===12 && [1,2,3,4].every(t=>kq[t]===KQ[t]),'Kurzrunde: Verteilung '+JSON.stringify(kq));

console.log(fail?`\n${fail} fehlgeschlagen`:'\nAlle Tests bestanden.'); process.exit(fail?1:0);
