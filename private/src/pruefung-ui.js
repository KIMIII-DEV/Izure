/* ── private/pruefung-ui.js ── */
/* Die Zwischenprüfung als Ansicht. Rechnen tut pruefung.js, hier steht nur
   die Darstellung; die Aufgabenkörper kommen aus items.js, damit Quiz und
   Prüfung dieselben neun Typen gleich anzeigen.

   Drei Zustände in derselben Fläche: Startseite, laufender Bogen,
   Auswertung. Ein laufender Bogen übersteht ein Neuladen — er liegt im
   localStorage, mitsamt Antworten, Markierungen und Startzeitpunkt. */
window.PRUEFUNG_UI=(function(){
'use strict';

var $=window.$q,$$=window.$qa,IT=window.ITEMS,P=window.PRUEFUNG;
var esc=IT.esc;

var FORMATE=[
  {id:'voll', n:60, min:120, t:'Vollprüfung',  d:'60 Aufgaben · 120 Minuten — der echte Umfang.'},
  {id:'halb', n:30, min:60,  t:'Halbe Prüfung',d:'30 Aufgaben · 60 Minuten.'},
  {id:'kurz', n:12, min:24,  t:'Kurzrunde',    d:'12 Aufgaben · 24 Minuten.'}
];

var run=null, idx=0, timer=null, ergebnis=null;

function el(){return $('#zpBody')}
function sub(t){var e=$('#zpSub');if(e)e.textContent=t}
function clock(t,warn){
  var e=$('#zpTime');if(!e)return;
  e.textContent=t;
  e.classList.toggle('warn',!!warn);
  var w=$('#zpClock');if(w)w.hidden=!t||t==='--:--';
}
function p2(n){return n<10?'0'+n:''+n}
function mmss(sec){
  if(sec<0)sec=0;
  var m=Math.floor(sec/60),s=sec%60;
  return p2(m)+':'+p2(s);
}

/* ═══════════ Startseite ═══════════ */

function start(){
  stopTimer();run=null;ergebnis=null;
  clock('--:--');
  var abd=P.coverage(),
      hist=P.history().slice().reverse(),
      gesamt=abd[1]+abd[2]+abd[3]+abd[4];
  sub('Vier Themengebiete, programmierte Aufgaben, kein Feedback während der Prüfung.');

  el().innerHTML=
    '<div class="zpgrid">'+

    '<section class="card zpstart" style="--i:0">'+
      '<div class="chd"><span class="ico"><svg width="15" height="15" viewBox="0 0 24 24"><use href="#i-exam"></use></svg></span>'+
        '<h2>Prüfung starten</h2><span class="x">'+gesamt+' Aufgaben im Pool</span></div>'+
      '<div class="zpfmt" id="zpFmt">'+FORMATE.map(function(f,i){
        return '<button class="zpf'+(i===0?' on':'')+'" type="button" data-f="'+f.id+'">'+
          '<b>'+f.t+'</b><span>'+esc(f.d)+'</span></button>';
      }).join('')+'</div>'+
      '<p class="zpnote">Für <b>sehr gut</b> braucht es 92 Punkte — bei 60 Aufgaben also 56 richtige, höchstens vier Fehler. '+
        'Die Aufgaben der letzten Prüfung sind gesperrt, die der vorletzten kommen nachrangig.</p>'+
      '<div class="dbtns"><button class="btn" id="zpGo" type="button">Prüfung starten</button>'+
      (P.loadLive()?'<button class="btn ghost" id="zpWeiter" type="button">Angefangene Prüfung fortsetzen</button>':'')+
      '</div>'+
    '</section>'+

    '<section class="card" style="--i:1">'+
      '<div class="chd"><h2>Themengebiete</h2><span class="x">Verteilung als Annahme</span></div>'+
      '<div class="zptg">'+P.TG.map(function(t){
        return '<div class="zptgr"><span class="nn">TG '+t.n+'</span>'+
          '<span><b>'+esc(t.t)+'</b><span class="mono">'+esc(t.q)+'</span></span>'+
          '<span class="zpn">'+abd[t.n]+'</span></div>';
      }).join('')+'</div>'+
      '<p class="zpnote">Wie viele Aufgaben je Themengebiet tatsächlich gestellt werden, geht aus dem Lehrbuch nicht hervor. '+
        'Hier wird gleichmäßig verteilt — ein Viertel je Gebiet.</p>'+
    '</section>'+

    '<section class="card" style="--i:2">'+
      '<div class="chd"><h2>Bisherige Versuche</h2><span class="x">'+hist.length+'</span></div>'+
      (hist.length
        ? '<div class="zphist">'+hist.slice(0,8).map(function(r){
            var d=new Date(r.at);
            return '<div class="zphr"><span class="mono">'+p2(d.getDate())+'.'+p2(d.getMonth()+1)+'.</span>'+
              '<span class="zpp">'+r.right+' / '+r.total+'</span>'+
              '<span class="zpq">'+String(r.punkte).replace('.',',')+' P</span>'+
              '<span class="zpnote'+(r.note<=2?' gut':r.note>=5?' schwach':'')+'">Note '+r.note+'</span>'+
              '<span class="mono">'+mmss(r.seconds)+'</span></div>';
          }).join('')+'</div>'
        : '<p class="zpnote">Noch keine Prüfung geschrieben. Der erste Versuch zieht aus dem vollen Pool.</p>')+
      (hist.length?'<div class="dbtns"><button class="btn ghost sm" id="zpClear" type="button">Verlauf löschen</button></div>':'')+
    '</section>'+

    '</div>';

  var fmt=FORMATE[0];
  $('#zpFmt').addEventListener('click',function(e){
    var b=e.target.closest('[data-f]');if(!b)return;
    fmt=FORMATE.filter(function(f){return f.id===b.dataset.f})[0];
    $$('#zpFmt .zpf').forEach(function(x){x.classList.toggle('on',x===b)});
  });
  $('#zpGo').addEventListener('click',function(){begin(fmt)});
  var w=$('#zpWeiter');
  if(w)w.addEventListener('click',function(){
    var live=P.loadLive();
    if(!live){start();return}
    run=live;idx=live.at||0;sheet();
  });
  var c=$('#zpClear');
  if(c)c.addEventListener('click',function(){P.reset();start()});
}

/* ═══════════ Bogen ═══════════ */

function begin(fmt){
  run=P.build({n:fmt.n,minutes:fmt.min});
  idx=0;
  P.saveLive(run);
  sheet();
}

function rest(){
  return Math.round((run.started+run.minutes*60000-Date.now())/1000);
}

function stopTimer(){if(timer){clearInterval(timer);timer=null}}

function tick(){
  var left=rest();
  if(left<=0){stopTimer();abgeben(true);return}
  clock(mmss(left),left<300);
  var tempo=$('#zpTempo');
  if(tempo){
    var beantwortet=run.items.filter(hatAntwort).length,
        verbraucht=run.minutes*60-left,
        soll=Math.floor(verbraucht/(run.minutes*60/run.items.length)),
        diff=beantwortet-soll;
    tempo.textContent=diff>=0?'+'+diff+' vor dem Soll':diff+' hinter dem Soll';
    tempo.className='mono '+(diff>=0?'okc':'nokc');
  }
}

function leer(a){
  if(a===null||a===undefined||a==='')return true;
  if(Array.isArray(a))return !a.length||!a.every(function(x){return String(x).trim()!==''});
  return false;
}
function hatAntwort(v){return !leer(v.answer)}

function sheet(){
  if(!run)return start();
  var v=run.items[idx];
  sub('Aufgabe '+(idx+1)+' von '+run.items.length+' · Themengebiet '+v.tg+' · kein Feedback bis zur Abgabe');

  el().innerHTML=
    '<div class="zprun">'+
      '<div class="zptop">'+
        '<div class="exdots" id="zpDots">'+run.items.map(function(x,n){
          return '<button class="exd'+(n===idx?' now':'')+(hatAntwort(x)?' set':'')+(x.marked?' mark':'')+
            '" type="button" data-q="'+n+'" aria-label="Aufgabe '+(n+1)+(x.marked?', markiert':'')+'">'+(n+1)+'</button>';
        }).join('')+'</div>'+
        '<span class="mono" id="zpTempo"></span>'+
      '</div>'+
      '<div class="qz scry" id="zpItem">'+
        IT.tagRow(v,'TG '+v.tg)+
        IT.body(v)+
        '<div class="qzfoot">'+
          '<button class="btn ghost sm" id="zpPrev" type="button"'+(idx===0?' disabled':'')+'>Zurück</button>'+
          '<button class="btn sm" id="zpNext" type="button">'+(idx===run.items.length-1?'Abgeben':'Weiter')+'</button>'+
          '<button class="pill'+(v.marked?' on':'')+'" id="zpMark" type="button" aria-pressed="'+(!!v.marked)+'">Markieren</button>'+
          '<span class="mono" id="zpState"></span>'+
        '</div>'+
      '</div>'+
    '</div>';

  zaehler();
  IT.wire($('#zpItem'),v,function(val){
    /* Leere Eingaben als `null` ablegen, nicht als `[]` oder `undefined`.
       Die Bewertung zählt genau die `null`-Einträge als unbeantwortet — ein
       leeres Feld sähe sonst aus wie eine abgegebene Antwort und würde als
       falsch gewertet statt als offen. */
    v.answer=leer(val)?null:val;
    P.saveLive(runMitStand());
    var d=$$('#zpDots .exd')[idx];
    if(d)d.classList.toggle('set',hatAntwort(v));
    zaehler();
  },v.answer);

  $$('#zpDots .exd').forEach(function(d){
    d.addEventListener('click',function(){idx=+d.dataset.q;P.saveLive(runMitStand());sheet()});
  });
  $('#zpPrev').addEventListener('click',function(){if(idx>0){idx--;P.saveLive(runMitStand());sheet()}});
  $('#zpNext').addEventListener('click',function(){
    if(idx<run.items.length-1){idx++;P.saveLive(runMitStand());sheet();return}
    abgeben(false);
  });
  $('#zpMark').addEventListener('click',function(){
    v.marked=!v.marked;
    this.classList.toggle('on',v.marked);
    this.setAttribute('aria-pressed',String(!!v.marked));
    var d=$$('#zpDots .exd')[idx];
    if(d)d.classList.toggle('mark',!!v.marked);
    P.saveLive(runMitStand());
  });

  stopTimer();
  tick();
  timer=setInterval(tick,1000);
}

function runMitStand(){run.at=idx;return run}

function zaehler(){
  var e=$('#zpState');if(!e)return;
  var b=run.items.filter(hatAntwort).length,
      m=run.items.filter(function(x){return x.marked}).length;
  e.textContent=b+' / '+run.items.length+' beantwortet'+(m?' · '+m+' markiert':'');
}

function abgeben(automatisch){
  var offen=run.items.filter(function(v){return !hatAntwort(v)}).length;
  if(!automatisch&&offen){
    var w=$('#zpNext');
    if(w&&w.dataset.warned!=='1'){
      w.dataset.warned='1';
      w.textContent='Wirklich abgeben?';
      $('#zpState').textContent=offen+' Aufgabe'+(offen===1?'':'n')+' ohne Antwort — nochmal tippen gibt trotzdem ab.';
      $('#zpState').className='mono nokc';
      return;
    }
  }
  stopTimer();
  ergebnis=P.grade(run);
  ergebnis.automatisch=!!automatisch;
  auswertung();
}

/* ═══════════ Auswertung ═══════════ */

function balken(label,r,n){
  var p=n?Math.round(r/n*100):0;
  return '<div class="pseg '+(p>=81?'ok':p>=50?'due':'bad')+'">'+
    '<i style="--w:'+p+'%"></i><span class="mono">'+esc(label)+' '+r+'/'+n+'</span></div>';
}

function auswertung(){
  var r=ergebnis;
  clock('--:--');
  sub('Auswertung · '+r.right+' von '+r.total+' richtig');

  var tgHtml=P.TG.map(function(t){
    return balken('TG '+t.n,r.perTG[t.n][0],r.perTG[t.n][1]);
  }).join('');

  el().innerHTML=
    '<div class="zpgrid res">'+

    '<section class="card zpres" style="--i:0">'+
      '<div class="chd"><h2>Ergebnis</h2><span class="x">'+(r.automatisch?'Zeit abgelaufen':'abgegeben')+'</span></div>'+
      '<div class="exsum">'+
        '<div class="ring2 big" style="--p:'+r.punkte+'"><svg viewBox="0 0 100 100">'+
          '<circle class="b" cx="50" cy="50" r="44"/>'+
          '<circle class="f" cx="50" cy="50" r="44" style="stroke-dashoffset:'+(276.5*(1-r.punkte/100)).toFixed(1)+'"/>'+
          '</svg><em>'+String(r.punkte).replace('.',',')+'</em></div>'+
        '<div class="exkpi">'+
          '<div><span class="mono">Richtig</span><b>'+r.right+' / '+r.total+'</b></div>'+
          '<div><span class="mono">Note</span><b>'+r.note.note+'</b></div>'+
          '<div><span class="mono">Zeit</span><b>'+mmss(r.seconds)+'</b></div>'+
        '</div>'+
      '</div>'+
      '<p class="zpnote"><b>'+esc(r.note.t)+'.</b> '+
        (r.note.note===1
          ? 'Damit steht es. '
          : 'Für ein „sehr gut" wären '+r.zielSehrGut+' von '+r.total+' nötig gewesen — '+(r.zielSehrGut-r.right)+' mehr. ')+
        (r.unanswered?r.unanswered+' Aufgabe'+(r.unanswered===1?' blieb':'n blieben')+' ohne Antwort. ':'')+
        'Im Schnitt '+r.perQuestion+(r.perQuestion===1?' Sekunde':' Sekunden')+' je Aufgabe, vorgesehen sind '+r.budget+' Sekunden.</p>'+
      '<div class="dbtns"><button class="btn" id="zpNeu" type="button">Neue Prüfung</button>'+
        '<button class="btn ghost" id="zpZurueck" type="button">Zur Übersicht</button>'+
        '<button class="btn ghost" id="zpLern" type="button">Zur Lernecke</button></div>'+
    '</section>'+

    '<section class="card" style="--i:1">'+
      '<div class="chd"><h2>Nach Themengebiet</h2><span class="x">je ein Viertel</span></div>'+
      '<div class="pbars">'+tgHtml+'</div>'+
      (r.schwach.length
        ? '<div class="chd" style="margin-top:14px"><h2>Schwächste Kategorien</h2></div>'+
          '<div class="zpweak">'+r.schwach.map(function(s){
            return '<div class="zpwr"><span>'+esc(s.k)+'</span><span class="mono">'+s.r+' / '+s.n+'</span></div>';
          }).join('')+'</div>'
        : '<p class="zpnote">Keine Kategorie fällt auffällig ab.</p>')+
    '</section>'+

    '<section class="card zpwrong" style="--i:2">'+
      '<div class="chd"><h2>Die Fehler</h2><span class="x">'+r.wrong.length+'</span></div>'+
      (r.wrong.length
        ? '<div class="rev scry" tabindex="0" role="group" aria-label="Die Fehler mit Lösung und Erklärung">'+r.wrong.map(function(v,i){
            return '<div class="rv" style="--d:'+i+'"><span class="rn">'+v.nr+'</span><div>'+
              '<p>'+esc(v.q||v.txt||'')+'</p>'+
              '<small class="n">Deine Antwort: '+esc(IT.answerText(v,v.answer))+'</small>'+
              '<small class="y">Richtig: '+esc(IT.solutionText(v))+'</small>'+
              (v.e?'<small class="ex">'+esc(v.e)+'</small>':'')+
              '<small class="mono">TG '+v.tg+' · '+esc(v.k||'')+(v.s?' · '+esc(v.s):'')+'</small>'+
              '</div></div>';
          }).join('')+'</div>'
        : '<p class="zpnote">Kein Fehler. Alle '+r.total+' Aufgaben richtig.</p>')+
    '</section>'+

    '</div>';

  $('#zpNeu').addEventListener('click',function(){start()});
  $('#zpZurueck').addEventListener('click',function(){start()});
  $('#zpLern').addEventListener('click',function(){window.goView('lern')});
}

/* ═══════════ Einstieg ═══════════ */

function enter(){
  if(ergebnis)return;            // Auswertung stehen lassen
  if(run){sheet();return}
  var live=P.loadLive();
  if(live){run=live;idx=live.at||0;sheet();return}
  start();
}

function leave(){stopTimer()}

return {enter:enter, leave:leave, start:start};
})();
