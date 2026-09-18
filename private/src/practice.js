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
var K=['A','B','C','D','E','F'];

var TYPE_LABEL={
  mc:'Einfachauswahl', multi:'Mehrfachauswahl', tf:'Wahr oder falsch',
  cloze:'Lückentext', type:'Freie Eingabe', calc:'Rechenaufgabe',
  order:'Reihenfolge', match:'Zuordnung', odd:'Ausreißer finden'
};

var QUIZ_N=25;   // Aufgaben je Quizrunde — der Rest des Pools rotiert nach
var EXAM_N=30;   // Klausur: fester Umfang, unabhängig von der Poolgrösse

function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
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
  $('#mExam').textContent=Math.min(EXAM_N,pool.length)+' Aufgaben · '+Math.min(EXAM_N,pool.length)*2+' min';
  $('#thlist').innerHTML=cur.themen.map(function(t,n){
    return '<div class="th"><button type="button" aria-expanded="false"><span class="n">'+(n<9?'0':'')+(n+1)+'</span>'+
      esc(t.t)+(t.r==='high'?'<span class="rel" title="hohe Klausurrelevanz">Klausur</span>':'')+
      '<span class="pm"><i></i><b></b></span></button>'+
      '<div class="a">'+topicBody(t)+'</div></div>';
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
  if(!was){th.classList.add('open');b.setAttribute('aria-expanded','true')}
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
  $('#prTitle').textContent=name==='cards'?'Flashcards':name==='quiz'?'Quiz':'Klausur';
  reset();render();
}

/* ─────────── Zustand ─────────── */
var fi=0,order=[],known=[],again=[],flipped=false,
    qItems=[],qi=0,qScore=0,qWrong=[],qAnswered=false,qConf=null,qPending=null,
    exItems=[],exAns=[],exQ=0,exStart=0,exTimer=null,exDone=false;

function reset(){
  fi=0;flipped=false;known=[];again=[];order=cur?cur.cards.map(function(_,n){return n}):[];
  qItems=[];qi=0;qScore=0;qWrong=[];qAnswered=false;qConf=null;qPending=null;
  clearInterval(exTimer);exTimer=null;exItems=[];exAns=[];exQ=0;exDone=false;exStart=0;
}

function render(){
  if(!cur)return;
  if(tab==='cards')return cards();
  if(tab==='quiz')return quizRound();
  return exam();
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

/* ═══════════ Aufgabenkörper — von Quiz und Klausur geteilt ═══════════ */

/* `it` ist eine von LEARN.present() aufbereitete Ansicht: Optionen bereits
   gemischt, Lösungsindex mitgeführt. Der Renderer weiss nichts über die
   richtige Antwort ausser dem, was für die Anzeige nötig ist. */
function body(it){
  var t=it.t;

  if(t==='mc'||t==='odd'){
    return '<p class="q">'+esc(it.q)+'</p><div class="opts">'+
      it.a.map(function(a,n){
        return '<button class="opt" type="button" data-n="'+n+'" style="--d:'+n+'">'+
          '<span class="k">'+K[n]+'</span><span class="ot">'+esc(a)+'</span></button>';
      }).join('')+'</div>';
  }

  if(t==='multi'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      '<p class="qsub">Mehrere Antworten sind richtig.</p><div class="opts">'+
      it.a.map(function(a,n){
        return '<button class="opt box" type="button" data-n="'+n+'" aria-pressed="false" style="--d:'+n+'">'+
          '<span class="k">'+K[n]+'</span><span class="ot">'+esc(a)+'</span></button>';
      }).join('')+'</div>';
  }

  if(t==='tf'){
    return '<p class="q">'+esc(it.q)+'</p><div class="opts tfopts">'+
      '<button class="opt" type="button" data-v="1"><span class="k">✓</span><span class="ot">Stimmt</span></button>'+
      '<button class="opt" type="button" data-v="0"><span class="k">✕</span><span class="ot">Stimmt nicht</span></button></div>';
  }

  if(t==='cloze'){
    var n=-1;
    var html=esc(it.txt).replace(/\{\{(\d+)\}\}/g,function(){
      n++;
      var g=it.gaps[n];
      if(!g)return '____';
      if(g.free)
        return '<input class="gapin" type="text" data-g="'+n+'" size="'+Math.max(6,g.s.length+2)+
               '" autocomplete="off" spellcheck="false" aria-label="Lücke '+(n+1)+'">';
      return '<select class="gapsel" data-g="'+n+'" aria-label="Lücke '+(n+1)+'"><option value="">— wählen —</option>'+
        g.o.map(function(o){return '<option>'+esc(o)+'</option>'}).join('')+'</select>';
    });
    return (it.q?'<p class="q">'+esc(it.q)+'</p>':'')+
           '<p class="qsub">Lücken füllen.</p><div class="clz">'+html+'</div>';
  }

  if(t==='type'||t==='calc'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      (it.hint?'<p class="qsub">'+esc(it.hint)+'</p>':'')+
      '<div class="typerow"><input class="typein" type="text" autocomplete="off" spellcheck="false" '+
      'placeholder="Antwort eintippen" aria-label="Antwort">'+
      (it.unit?'<span class="unit mono">'+esc(it.unit)+'</span>':'')+'</div>';
  }

  if(t==='order'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      '<p class="qsub">In die richtige Reihenfolge bringen — antippen zum Übernehmen, in der Liste antippen zum Zurücklegen.</p>'+
      '<ol class="ordslot"></ol>'+
      '<div class="ordpool">'+it.mix.map(function(s){
        return '<button class="chip ord" type="button" data-v="'+esc(s)+'">'+esc(s)+'</button>';
      }).join('')+'</div>';
  }

  if(t==='match'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      '<p class="qsub">Jeder Zeile das passende Gegenstück zuordnen.</p>'+
      '<div class="matchgrid">'+it.left.map(function(l,n){
        return '<div class="mrow"><span class="ml" id="ml'+n+'">'+esc(l)+'</span>'+
          '<select class="msel" data-n="'+n+'" aria-labelledby="ml'+n+'"><option value="">— wählen —</option>'+
          it.right.map(function(r){return '<option>'+esc(r)+'</option>'}).join('')+
          '</select></div>';
      }).join('')+'</div>';
  }

  return '<p class="q">'+esc(it.q||'')+'</p>';
}

/* Verdrahtet den Körper. `onChange(value, complete)` meldet jede Änderung;
   `preset` stellt eine früher gegebene Antwort wieder her — die Klausur
   erlaubt Sprünge zwischen den Aufgaben und darf dabei nichts vergessen. */
function wire(root,it,onChange,preset){
  var t=it.t,val=preset;
  var q=function(s){return root.querySelector(s)},
      qa=function(s){return [].slice.call(root.querySelectorAll(s))};

  function emit(complete){onChange(val,complete)}

  if(t==='mc'||t==='odd'){
    qa('.opt').forEach(function(o){
      if(preset===+o.dataset.n)o.classList.add('pick');
      o.addEventListener('click',function(){
        qa('.opt').forEach(function(x){x.classList.toggle('pick',x===o)});
        val=+o.dataset.n;emit(true);
      });
    });
    emit(typeof preset==='number');

  }else if(t==='multi'){
    val=Array.isArray(preset)?preset.slice():[];
    qa('.opt').forEach(function(o){
      var n=+o.dataset.n;
      if(val.indexOf(n)>-1){o.classList.add('pick');o.setAttribute('aria-pressed','true')}
      o.addEventListener('click',function(){
        var at=val.indexOf(n);
        if(at>-1)val.splice(at,1);else val.push(n);
        o.classList.toggle('pick',at===-1);
        o.setAttribute('aria-pressed',at===-1?'true':'false');
        emit(val.length>0);
      });
    });
    emit(val.length>0);

  }else if(t==='tf'){
    qa('.opt').forEach(function(o){
      var v=o.dataset.v==='1';
      if(preset===v)o.classList.add('pick');
      o.addEventListener('click',function(){
        qa('.opt').forEach(function(x){x.classList.toggle('pick',x===o)});
        val=v;emit(true);
      });
    });
    emit(typeof preset==='boolean');

  }else if(t==='cloze'){
    var fields=it.gaps.map(function(_,n){return q('[data-g="'+n+'"]')});
    if(Array.isArray(preset))fields.forEach(function(el,n){if(el)el.value=preset[n]||''});
    var upd=function(){
      val=fields.map(function(el){return el?el.value:''});
      emit(val.every(function(v){return String(v).trim()!==''}));
    };
    fields.forEach(function(el){
      if(!el)return;
      el.addEventListener('change',upd);
      el.addEventListener('input',upd);
    });
    upd();

  }else if(t==='type'||t==='calc'){
    var inp=q('.typein');
    if(typeof preset==='string')inp.value=preset;
    var updT=function(){val=inp.value;emit(inp.value.trim()!=='')};
    inp.addEventListener('input',updT);
    updT();
    setTimeout(function(){inp.focus({preventScroll:true})},60);

  }else if(t==='order'){
    var slot=q('.ordslot');
    var sync=function(){
      val=[].slice.call(slot.children).map(function(li){return li.dataset.v});
      emit(val.length===it.items.length);
    };
    var put=function(chip){
      var li=document.createElement('li');
      li.dataset.v=chip.dataset.v;
      li.className='oli';
      li.innerHTML='<span class="ov">'+esc(chip.dataset.v)+'</span>';
      li.setAttribute('role','button');
      li.setAttribute('tabindex','0');
      li.setAttribute('aria-label','„'+chip.dataset.v+'“ zurücklegen');
      var back=function(){
        if(slot.classList.contains('lock'))return;
        chip.disabled=false;chip.classList.remove('used');
        li.remove();sync();
      };
      li.addEventListener('click',back);
      li.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();back()}});
      slot.appendChild(li);
      chip.disabled=true;chip.classList.add('used');
    };
    qa('.ordpool .chip').forEach(function(c){
      c.addEventListener('click',function(){if(!c.disabled)  {put(c);sync()}});
    });
    if(Array.isArray(preset))preset.forEach(function(v){
      var c=qa('.ordpool .chip').filter(function(x){return x.dataset.v===v&&!x.disabled})[0];
      if(c)put(c);
    });
    sync();

  }else if(t==='match'){
    var sels=it.left.map(function(_,n){return q('.msel[data-n="'+n+'"]')});
    if(Array.isArray(preset))sels.forEach(function(el,n){if(el)el.value=preset[n]||''});
    var updM=function(){
      val=sels.map(function(el){return el?el.value:''});
      emit(val.every(function(v){return v!==''}));
    };
    sels.forEach(function(el){if(el)el.addEventListener('change',updM)});
    updM();
  }
}

/* Lösung im Körper markieren. `res` kommt von LEARN.grade(). */
function markBody(root,it,res,given){
  var t=it.t;
  var q=function(s){return root.querySelector(s)},
      qa=function(s){return [].slice.call(root.querySelectorAll(s))};

  if(t==='mc'||t==='odd'||t==='tf'){
    qa('.opt').forEach(function(x,n){
      x.classList.add('lock');
      var isSol=t==='tf'?((x.dataset.v==='1')===it.v):(n===it.c);
      if(isSol)x.classList.add('right');
      else if(x.classList.contains('pick'))x.classList.add('wrong');
    });

  }else if(t==='multi'){
    qa('.opt').forEach(function(x,n){
      x.classList.add('lock');
      if(it.cs.indexOf(n)>-1)x.classList.add('right');
      else if(x.classList.contains('pick'))x.classList.add('wrong');
    });

  }else if(t==='cloze'){
    it.gaps.forEach(function(g,n){
      var el=q('[data-g="'+n+'"]');if(!el)return;
      el.disabled=true;
      var ok=res.detail&&res.detail[n];
      el.classList.add(ok?'gok':'gno');
      if(!ok)el.insertAdjacentHTML('afterend','<span class="gfix">'+esc(g.s)+'</span>');
    });

  }else if(t==='type'||t==='calc'){
    var inp=q('.typein');
    if(inp){
      inp.disabled=true;
      inp.classList.add(res.ok?'gok':'gno');
      if(!res.ok)q('.typerow').insertAdjacentHTML('beforeend','<span class="gfix">'+esc(it.ans[0])+'</span>');
    }

  }else if(t==='order'){
    var slot=q('.ordslot');
    if(slot){
      slot.classList.add('lock');
      [].slice.call(slot.children).forEach(function(li,n){
        li.classList.add(li.dataset.v===it.items[n]?'gok':'gno');
        li.removeAttribute('role');li.removeAttribute('tabindex');
      });
    }
    qa('.ordpool .chip').forEach(function(c){c.disabled=true});
    if(!res.ok&&slot)
      slot.insertAdjacentHTML('afterend','<ol class="ordsol">'+it.items.map(function(s){
        return '<li>'+esc(s)+'</li>';
      }).join('')+'</ol>');

  }else if(t==='match'){
    qa('.msel').forEach(function(el,n){
      el.disabled=true;
      var ok=res.detail&&res.detail[n];
      el.classList.add(ok?'gok':'gno');
      if(!ok)el.insertAdjacentHTML('afterend','<span class="gfix">'+esc(it.sol[n])+'</span>');
    });
  }
}

/* Gegebene Antwort als Text — für die Klausurauswertung, die den Körper
   nicht mehr zeigt. */
function answerText(it,given){
  var t=it.t;
  if(given===undefined||given===null||given==='')return 'keine';
  if(t==='mc'||t==='odd')return it.a[given]!==undefined?it.a[given]:'keine';
  if(t==='tf')return given?'Stimmt':'Stimmt nicht';
  if(t==='multi')return given.length?given.slice().sort(function(a,b){return a-b}).map(function(n){return it.a[n]}).join(' · '):'keine';
  if(t==='cloze'||t==='match')return given.filter(Boolean).length?given.join(' · '):'keine';
  if(t==='order')return given.length?given.join(' → '):'keine';
  return String(given);
}
function solutionText(it){
  var t=it.t;
  if(t==='mc'||t==='odd')return it.a[it.c];
  if(t==='tf')return it.v?'Stimmt':'Stimmt nicht';
  if(t==='multi')return it.cs.map(function(n){return it.a[n]}).join(' · ');
  if(t==='cloze')return it.gaps.map(function(g){return g.s}).join(' · ');
  if(t==='type'||t==='calc')return it.ans[0]+(it.unit?' '+it.unit:'');
  if(t==='order')return it.items.join(' → ');
  if(t==='match')return it.sol.join(' · ');
  return '';
}

function tagRow(it,right){
  return '<span class="qtags"><i>'+esc(TYPE_LABEL[it.t]||it.t)+'</i>'+
    (it.k?'<i class="alt">'+esc(it.k)+'</i>':'')+
    '<span class="mono sc">'+right+'</span></span>';
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
    '<button class="btn ghost" id="qexam">Klausur starten</button></div></div>';
  $('#qmore').addEventListener('click',function(){qItems=[];quizRound()});
  $('#qcards').addEventListener('click',function(){goTab('cards')});
  $('#qexam').addEventListener('click',function(){goTab('exam')});
}

function seg(label,v,total,cls){
  var p=total?Math.round(v/total*100):0;
  return '<div class="pseg '+cls+'"><i style="--w:'+p+'%"></i><span class="mono">'+label+' '+v+'</span></div>';
}

/* ═══════════ Klausur ═══════════ */
/* Kein Zwischenfeedback, keine Selbsteinschätzung, feste Zeit. Die Aufgaben
   werden einmal gezogen und behalten ihre gemischte Optionsreihenfolge —
   sonst stünde beim Zurückspringen eine andere Reihenfolge da als die, in
   der man geantwortet hat. */
function exam(){
  var p=$('#practice');
  if(!exStart&&!exDone){
    var n=Math.min(EXAM_N,(cur.quiz||[]).length);
    $('#prMeta').textContent='Bereit';
    p.innerHTML='<div class="prdone start"><span class="mono">Klausur · LF '+cur.code+'</span><b>'+n+'</b>'+
      '<span class="ds">Aufgaben aus diesem Lernfeld, gezogen aus '+(cur.quiz||[]).length+'. '+(n*2)+' Minuten, keine Zwischenkorrektur. Auswertung mit Lösungen am Ende.</span>'+
      '<div class="dbtns"><button class="btn" id="exgo" type="button">Klausur starten</button></div></div>';
    $('#exgo').addEventListener('click',function(){
      exItems=window.LEARN.buildSession(cur.code,cur.quiz||[],n);
      exAns=exItems.map(function(){return undefined});
      exQ=0;exStart=Date.now();
      exTimer=setInterval(exTick,1000);
      examQ();
    });
    return;
  }
  if(exDone)return examResult();
  examQ();
}

function exTick(){
  var lim=exItems.length*120,used=Math.floor((Date.now()-exStart)/1000),left=lim-used,e=$('#extime');
  if(left<=0){clearInterval(exTimer);exTimer=null;finishExam();return}
  if(e){var m=Math.floor(left/60),s=left%60;e.textContent=(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);e.classList.toggle('warn',left<60)}
}

function answered(i){
  var v=exAns[i];
  if(v===undefined||v===null||v==='')return false;
  if(Array.isArray(v))return v.length>0&&v.every(function(x){return String(x).trim()!==''});
  return true;
}

function examQ(){
  var p=$('#practice'),it=exItems[exQ];
  $('#prMeta').textContent='Aufgabe '+(exQ+1)+' von '+exItems.length;
  p.innerHTML='<div class="exhd"><span class="mono">Klausur · LF '+cur.code+'</span><b id="extime">--:--</b></div>'+
   '<div class="exdots">'+exItems.map(function(_,n){
     return '<button class="exd'+(n===exQ?' now':'')+(answered(n)?' set':'')+'" type="button" data-q="'+n+'" aria-label="Aufgabe '+(n+1)+'">'+(n+1)+'</button>';
   }).join('')+'</div>'+
   '<div class="qz scry">'+
     tagRow(it,exAns.filter(function(_,n){return answered(n)}).length+' / '+exItems.length)+
     body(it)+
     '<div class="qzfoot"><button class="btn ghost sm" id="exprev" type="button"'+(exQ===0?' disabled':'')+'>Zurück</button>'+
     '<button class="btn sm" id="exnext" type="button">'+(exQ===exItems.length-1?'Abgeben':'Weiter')+'</button>'+
     '<span class="mono" id="exstate"></span></div></div>';
  exTick();

  wire(p,it,function(v){
    exAns[exQ]=v;
    var dots=$$('#practice .exd');
    if(dots[exQ])dots[exQ].classList.toggle('set',answered(exQ));
    var st=$('#exstate');
    if(st)st.textContent=exItems.filter(function(_,n){return answered(n)}).length+' / '+exItems.length+' beantwortet';
  },exAns[exQ]);

  $$('#practice .exd').forEach(function(d){
    d.addEventListener('click',function(){exQ=+d.dataset.q;examQ()});
  });
  $('#exprev').addEventListener('click',function(){if(exQ>0){exQ--;examQ()}});
  $('#exnext').addEventListener('click',function(){
    if(exQ<exItems.length-1){exQ++;examQ();return}
    finishExam();
  });
}

function finishExam(){
  clearInterval(exTimer);exTimer=null;exDone=true;examResult();
}

function examResult(){
  var p=$('#practice'),n=exItems.length,pts=0,results=[];
  exItems.forEach(function(it,i){
    var res=window.LEARN.grade(it,exAns[i]);
    // Auch die Klausur zahlt auf den Item-Zustand ein: sie ist der ehrlichste
    // Abruf, den es hier gibt — ohne Zwischenkorrektur und unter Zeitdruck.
    window.LEARN.record(cur.code,it,res.ok,undefined);
    if(res.ok)pts++;
    results.push(res);
  });
  window.LEARN.endSession(cur.code);
  var st=window.LEARN.stats(cur.code,cur.quiz||[]);
  if(window.PROGRESS&&window.PROGRESS.quiz)window.PROGRESS.quiz(cur.code,st.mastered,st.total);

  var pct=Math.round(pts/n*100),
      note=pct>=92?'1':pct>=81?'2':pct>=67?'3':pct>=50?'4':pct>=30?'5':'6',
      used=Math.floor((Date.now()-exStart)/1000),
      um=Math.floor(used/60),us=used%60;
  $('#prMeta').textContent='Auswertung';
  p.innerHTML='<div class="exres scry">'+
   '<div class="exsum"><div class="ring2 big" style="--p:'+pct+'"><svg viewBox="0 0 100 100"><circle class="b" cx="50" cy="50" r="44"/><circle class="f" cx="50" cy="50" r="44" style="stroke-dashoffset:'+(276.5*(1-pct/100)).toFixed(1)+'"/></svg><em>'+pct+'%</em></div>'+
   '<div class="exkpi"><div><span class="mono">Punkte</span><b>'+pts+' / '+n+'</b></div>'+
   '<div><span class="mono">Note</span><b>'+note+'</b></div>'+
   '<div><span class="mono">Zeit</span><b>'+(um<10?'0'+um:um)+':'+(us<10?'0'+us:us)+'</b></div></div></div>'+
   '<div class="rev">'+exItems.map(function(it,i){
     var ok=results[i].ok;
     return '<div class="rv'+(ok?' ok':'')+'" style="--d:'+i+'"><span class="rn">'+(i+1)+'</span>'+
       '<div><p>'+esc(it.q||it.txt||'')+'</p>'+
       '<small class="'+(ok?'y':'n')+'">Deine Antwort: '+esc(answerText(it,exAns[i]))+'</small>'+
       (ok?'':'<small class="y">Richtig: '+esc(solutionText(it))+'</small>')+
       (it.e?'<small class="ex">'+esc(it.e)+'</small>':'')+'</div></div>';
   }).join('')+'</div>'+
   '<div class="poolbar"><span class="mono">Pool · LF '+cur.code+'</span><div class="pbars">'+
     seg('sitzt',st.mastered,st.total,'ok')+seg('fällig',st.due,st.total,'due')+
     seg('neu',st.fresh,st.total,'new')+seg('wackelig',st.shaky,st.total,'bad')+
   '</div></div>'+
   '<div class="dbtns"><button class="btn" id="exre" type="button">Neue Klausur</button>'+
   '<button class="btn ghost" id="excards" type="button">Karten wiederholen</button></div></div>';
  $('#exre').addEventListener('click',function(){exStart=0;exDone=false;exItems=[];exAns=[];exam()});
  $('#excards').addEventListener('click',function(){goTab('cards')});
}
})();
