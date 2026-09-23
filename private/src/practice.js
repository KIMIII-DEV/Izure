/* ── private/practice.js ── */
/* Privat Layer · Lernfeld — Themen, Flashcards, Quiz, Klausur.

   Quiz und Klausur laufen über window.LEARN (private/learn.js): das
   Ziehen der Runde, das Mischen der Optionen und die Bewertung stehen
   dort, hier steht nur die Darstellung. Diese Trennung ist der Grund,
   warum die Mechanik ohne Browser testbar ist (npm run test:learn).

   Neun Aufgabentypen: mc · multi · tf · cloze · type · calc · order ·
   match · odd. Sie teilen sich einen Körper-Renderer und eine
   Verdrahtung, weil Quiz und Klausur dieselben Aufgaben anzeigen — nur
   die Klausur hält die Rückmeldung bis zum Ende zurück. */
(function(){
var $=window.$q,$$=window.$qa,LF=window.LF||[];
var cur=null,tab='cards';
/* Die Darstellung der Aufgaben selbst steht in items.js — sie wird auch von
   der Zwischenprüfung gebraucht. */
var IT=window.ITEMS,
    body=IT.body, wire=IT.wire, markBody=IT.markBody,
    answerText=IT.answerText, solutionText=IT.solutionText, tagRow=IT.tagRow;

/* Aufgaben je Quizrunde — der Rest des Pools rotiert nach. Eine Klausur je
   Lernfeld gibt es nicht mehr: geprüft wird in der Zwischenprüfung über alle
   Lernfelder hinweg, so wie in der echten Prüfung auch. */
var QUIZ_N=25;

var esc=IT.esc;
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function pcto(el,to){if(el)requestAnimationFrame(function(){el.style.width=to+'%'})}

/* Die Themen tragen einen Markdown-artigen Fließtext (`c`), Kernpunkte
   (`k`) und die Klausurrelevanz (`r`). Statt eine Markdown-Bibliothek
   einzubinden, wird hier zuerst ALLES escaped und erst danach das erlaubte
   Wenige zu HTML gemacht: **fett**, Aufzählungen, Absätze. Fremdes Markup
   kann so nicht durchrutschen. */
function md(src){
  var lines=esc(src).split(/\r?\n/),out='',list=false;
  lines.forEach(function(raw){
    var line=raw.trim();
    if(!line){if(list){out+='</ul>';list=false}return}
    line=line.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>');
    if(/^[-•]\s+/.test(line)){
      if(!list){out+='<ul>';list=true}
      out+='<li>'+line.replace(/^[-•]\s+/,'')+'</li>';
      return;
    }
    if(list){out+='</ul>';list=false}
    out+='<p>'+line+'</p>';
  });
  if(list)out+='</ul>';
  return out;
}

function topicBody(t){
  var html='<p class="lead">'+esc(t.d)+'</p>';
  if(t.c)html+=md(t.c);
  if(t.k&&t.k.length)
    html+='<div class="keys"><span class="mono">Kernpunkte</span><ul>'+
      t.k.map(function(k){return '<li>'+esc(k)+'</li>'}).join('')+'</ul></div>';
  return html;
}

/* ─────────── Lernfeld öffnen ─────────── */
window.openLF=function(i){
  cur=LF[i];tab='cards';
  var pool=cur.quiz||[];
  $('#lfTitle').textContent='LF '+cur.code+' — '+cur.name;
  $('#lfSub').textContent=cur.themen.length+' Themen · '+cur.cards.length+' Flashcards · '+pool.length+' Aufgaben · '+cur.state;
  $('#lfProg').textContent=cur.pct+' %';
  $('#thCount').textContent=cur.themen.length+' Einträge';
  $('#mCards').textContent=cur.cards.length+' Karten';
  $('#mQuiz').textContent=Math.min(QUIZ_N,pool.length)+' aus '+pool.length;
  $('#thlist').innerHTML=cur.themen.map(function(t,n){
    return '<div class="th"><button type="button" aria-expanded="false"><span class="n">'+(n<9?'0':'')+(n+1)+'</span>'+
      esc(t.t)+(t.r==='high'?'<span class="rel" title="hohe Klausurrelevanz">Klausur</span>':'')+
      '<span class="pm"><i></i><b></b></span></button>'+
      // Der Text liegt in einer eigenen Hülle, weil die Aufklapp-Animation
      // über `grid-template-rows: 0fr → 1fr` läuft und dafür genau ein Kind
      // braucht. Ohne sie bliebe nur eine feste Maximalhöhe — und die hat
      // lange Themen abgeschnitten.
      '<div class="a"><div class="ain">'+topicBody(t)+'</div></div></div>';
  }).join('');
  $$('#modes .mode').forEach(function(b){b.classList.toggle('on',b.dataset.tab==='cards')});
  reset();render();
  window.goView('lf');
};

$('#thlist').addEventListener('click',function(e){
  var b=e.target.closest('.th > button');if(!b)return;
  var th=b.parentElement,was=th.classList.contains('open');
  $$('#thlist .th').forEach(function(x){
    x.classList.remove('open');
    var btn=x.querySelector('button');if(btn)btn.setAttribute('aria-expanded','false');
  });
  if(was)return;
  th.classList.add('open');
  b.setAttribute('aria-expanded','true');
  // Lange Themen reichen über den sichtbaren Bereich hinaus. Nach dem
  // Aufklappen an den Anfang des Themas scrollen, sonst klappt unten etwas
  // auf, das man gar nicht sieht. Erst nach der Animation, sonst rechnet
  // der Browser mit der alten Höhe.
  setTimeout(function(){
    var list=$('#thlist');
    if(!list)return;
    var top=th.offsetTop-8;
    if(typeof list.scrollTo==='function')list.scrollTo({top:top,behavior:'smooth'});
    else list.scrollTop=top;
  },440);
});
$$('#modes .mode').forEach(function(b){
  b.addEventListener('click',function(){
    if(tab===b.dataset.tab)return;
    goTab(b.dataset.tab);
  });
});
function goTab(name){
  tab=name;
  $$('#modes .mode').forEach(function(x){x.classList.toggle('on',x.dataset.tab===name)});
  $('#prTitle').textContent=name==='cards'?'Flashcards':'Quiz';
  reset();render();
}

/* ─────────── Zustand ─────────── */
var fi=0,order=[],known=[],again=[],flipped=false,
    qItems=[],qi=0,qScore=0,qWrong=[],qAnswered=false,qConf=null,qPending=null;

function reset(){
  fi=0;flipped=false;known=[];again=[];order=cur?cur.cards.map(function(_,n){return n}):[];
  qItems=[];qi=0;qScore=0;qWrong=[];qAnswered=false;qConf=null;qPending=null;
}

function render(){
  if(!cur)return;
  if(tab==='cards')return cards();
  return quizRound();
}

/* ─────────── Flashcards ─────────── */
function cards(){
  var p=$('#practice');
  if(fi>=order.length)return cardsDone();
  var c=cur.cards[order[fi]],pct=Math.round(fi/order.length*100);
  $('#prMeta').textContent='Karte '+(fi+1)+' von '+order.length;
  p.innerHTML=
  '<div class="prbar"><i id="pb"></i></div>'+
  '<div class="deck">'+
    '<span class="ghost2 g2"></span><span class="ghost2 g1"></span>'+
    '<div class="fc" id="fc" tabindex="0" role="button" aria-label="Karte umdrehen">'+
      '<div class="fcin">'+
        '<div class="fcf"><span class="hint">Frage '+(fi+1)+'/'+order.length+'</span><p>'+esc(c.f)+'</p><span class="tapme">Tippen zum Umdrehen</span></div>'+
        '<div class="fcb"><span class="hint">Antwort</span><p>'+esc(c.b)+'</p></div>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="rate" id="rate">'+
    '<button class="rt no" data-r="0"><b>Nochmal</b><small>kommt zurück</small></button>'+
    '<button class="rt yes" data-r="1"><b>Gewusst</b><small>abgelegt</small></button>'+
  '</div>'+
  '<div class="fcnav">'+
    '<button class="nav-ic" id="cprev" aria-label="Zurück"'+(fi===0?' disabled':'')+'><svg width="16" height="16" viewBox="0 0 24 24"><use href="#i-left"/></svg></button>'+
    '<button class="btn ghost sm" id="cflip">Umdrehen</button>'+
    '<button class="btn ghost sm" id="cshuf">Mischen</button>'+
    '<span class="mono">'+known.length+' gewusst · '+again.length+' offen</span>'+
  '</div>';
  pcto($('#pb'),pct);
  var fc=$('#fc');
  function flip(){flipped=!flipped;fc.classList.toggle('flip',flipped);$('#rate').classList.toggle('show',flipped)}
  fc.addEventListener('click',flip);
  fc.addEventListener('keydown',function(e){if(e.key===' '||e.key==='Enter'){e.preventDefault();flip()}});
  $('#cflip').addEventListener('click',function(e){e.stopPropagation();flip()});
  $('#cshuf').addEventListener('click',function(){shuffle(order);fi=0;flipped=false;known=[];again=[];cards()});
  $('#cprev').addEventListener('click',function(){if(fi>0){fi--;flipped=false;cards()}});
  $$('#rate .rt').forEach(function(b){
    b.addEventListener('click',function(e){
      e.stopPropagation();
      var ok=b.dataset.r==='1';
      (ok?known:again).push(order[fi]);
      var d=$('.deck');d.classList.add(ok?'out-r':'out-l');
      setTimeout(function(){fi++;flipped=false;cards()},330);
    });
  });
  setTimeout(function(){fc.focus({preventScroll:true})},60);
}
function cardsDone(){
  var p=$('#practice'),ok=known.length,rest=again.length;
  // Nur ein vollständiger Durchlauf zählt — sonst zöge ein Nachlauf über
  // drei offene Karten den Balken auf 100 %.
  if(window.PROGRESS&&order.length===cur.cards.length)window.PROGRESS.cards(cur.code,ok,cur.cards.length);
  $('#prMeta').textContent='Durchlauf beendet';
  p.innerHTML='<div class="prdone"><span class="mono">Durchlauf</span><b>'+ok+' / '+order.length+'</b>'+
    '<span class="ds">'+(rest?rest+' Karten hast du auf „Nochmal“ gelegt.':'Alle Karten saßen. Weiter zum Quiz?')+'</span>'+
    '<div class="dbtns">'+(rest?'<button class="btn" id="dagain">Nur die offenen ('+rest+')</button>':'')+
    '<button class="btn'+(rest?' ghost':'')+'" id="dall">Ganzen Stapel</button>'+
    '<button class="btn ghost" id="dquiz">Zum Quiz</button></div></div>';
  if(rest)$('#dagain').addEventListener('click',function(){order=again.slice();known=[];again=[];fi=0;cards()});
  $('#dall').addEventListener('click',function(){order=cur.cards.map(function(_,n){return n});known=[];again=[];fi=0;cards()});
  $('#dquiz').addEventListener('click',function(){goTab('quiz')});
}

/* ═══════════ Quiz ═══════════ */

function quizRound(){
  if(!qItems.length){
    qItems=window.LEARN.buildSession(cur.code,cur.quiz||[],QUIZ_N);
    qi=0;qScore=0;qWrong=[];
  }
  quizItem();
}

function quizItem(){
  if(qi>=qItems.length)return quizDone();
  var p=$('#practice'),it=qItems[qi];
  qAnswered=false;qConf=null;qPending=null;
  $('#prMeta').textContent='Aufgabe '+(qi+1)+' von '+qItems.length;

  p.innerHTML=
    '<div class="prbar"><i id="pb"></i></div>'+
    '<div class="qz scry">'+
      tagRow(it,qScore+' / '+qItems.length)+
      body(it)+
      '<div class="confrow" id="confrow"><span class="mono">Wie sicher?</span>'+
        '<button class="pill" type="button" data-c="0">geraten</button>'+
        '<button class="pill" type="button" data-c="1">unsicher</button>'+
        '<button class="pill" type="button" data-c="2">sicher</button></div>'+
      '<div class="expl" id="expl"><b>Warum</b><span>'+esc(it.e||'')+'</span>'+
        (it.s?'<em class="srcref">'+esc(it.s)+'</em>':'')+'</div>'+
      '<div class="qzfoot"><button class="btn" id="qcheck" type="button" disabled>Prüfen</button>'+
      '<span class="mono" id="qfb">Antwort wählen</span></div>'+
    '</div>';

  pcto($('#pb'),Math.round(qi/qItems.length*100));

  var ready=function(on){$('#qcheck').disabled=!on};
  wire(p,it,function(v,complete){qPending=v;if(!qAnswered)ready(complete)},undefined);

  $$('#confrow .pill').forEach(function(b){
    b.addEventListener('click',function(){
      qConf=+b.dataset.c;
      $$('#confrow .pill').forEach(function(x){x.classList.toggle('on',x===b)});
    });
  });

  $('#qcheck').addEventListener('click',function(){
    if(!qAnswered)quizCheck(it);else{qi++;quizItem()}
  });
}

function quizCheck(it){
  qAnswered=true;
  var p=$('#practice'),res=window.LEARN.grade(it,qPending);
  if(res.ok)qScore++;else qWrong.push(it.id);
  window.LEARN.record(cur.code,it,res.ok,qConf);
  markBody(p,it,res,qPending);

  var fb=$('#qfb');
  fb.textContent=res.ok?'Richtig':(qConf===2
    ? 'Falsch — und du warst dir sicher. Genau solche Aufgaben kommen bevorzugt zurück.'
    : 'Noch nicht. Die Lösung steht oben.');
  fb.className='mono '+(res.ok?'okc':'nokc');
  $('#expl').classList.add('show');
  var cr=$('#confrow');if(cr)cr.classList.add('lock');
  var b=$('#qcheck');
  b.textContent=qi===qItems.length-1?'Auswertung':'Weiter';
  b.disabled=false;
  b.focus({preventScroll:true});
}

function quizDone(){
  var p=$('#practice');
  window.LEARN.endSession(cur.code);
  var st=window.LEARN.stats(cur.code,cur.quiz||[]),
      pct=qItems.length?Math.round(qScore/qItems.length*100):0;
  if(window.PROGRESS&&window.PROGRESS.quiz)window.PROGRESS.quiz(cur.code,st.mastered,st.total);
  $('#prMeta').textContent='Auswertung';
  p.innerHTML='<div class="prdone scry"><span class="mono">Runde '+st.sessions+'</span><b>'+qScore+' / '+qItems.length+'</b>'+
    '<div class="ring2" style="--p:'+pct+'"><svg viewBox="0 0 100 100"><circle class="b" cx="50" cy="50" r="44"/>'+
      '<circle class="f" cx="50" cy="50" r="44" style="stroke-dashoffset:'+(276.5*(1-pct/100)).toFixed(1)+'"/></svg><em>'+pct+'%</em></div>'+
    '<div class="poolbar"><span class="mono">Pool · LF '+cur.code+'</span><div class="pbars">'+
      seg('sitzt',st.mastered,st.total,'ok')+
      seg('fällig',st.due,st.total,'due')+
      seg('neu',st.fresh,st.total,'new')+
      seg('wackelig',st.shaky,st.total,'bad')+
    '</div><span class="ds">'+st.mastered+' von '+st.total+' Aufgaben sitzen — dafür braucht es drei richtige Abrufe in drei verschiedenen Runden.</span></div>'+
    (st.overconfident?'<span class="ds warnline">'+st.overconfident+' Mal warst du dir sicher und lagst daneben. Diese Aufgaben kommen bevorzugt zurück.</span>':'')+
    '<div class="dbtns"><button class="btn" id="qmore">Nächste Runde</button>'+
    '<button class="btn ghost" id="qcards">Karten wiederholen</button>'+
    '<button class="btn ghost" id="qpruef">Zwischenprüfung</button></div></div>';
  $('#qmore').addEventListener('click',function(){qItems=[];quizRound()});
  $('#qcards').addEventListener('click',function(){goTab('cards')});
  $('#qpruef').addEventListener('click',function(){window.goView('pruefung')});
}

function seg(label,v,total,cls){
  var p=total?Math.round(v/total*100):0;
  return '<div class="pseg '+cls+'"><i style="--w:'+p+'%"></i><span class="mono">'+label+' '+v+'</span></div>';
}

})();
