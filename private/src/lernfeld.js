/* Privat Layer · Lernfeld — Flashcards, Quiz, Klausur */
(function(){
var $=window.$q,$$=window.$qa,LF=window.LF||[];
var cur=null,tab='cards';

/* ─────────── Lernfeld öffnen ─────────── */
window.openLF=function(i){
  cur=LF[i];tab='cards';
  $('#lfTitle').textContent='LF '+cur.code+' — '+cur.name;
  $('#lfSub').textContent=cur.themen.length+' Themen · '+cur.cards.length+' Flashcards · '+cur.quiz.length+' Quizfragen · '+cur.state;
  $('#lfProg').textContent=cur.pct+' %';
  $('#thCount').textContent=cur.themen.length+' Einträge';
  $('#mCards').textContent=cur.cards.length+' Karten';
  $('#mQuiz').textContent=cur.quiz.length+' Fragen';
  $('#mExam').textContent=cur.quiz.length+' Aufgaben · '+cur.quiz.length*2+' min';
  $('#thlist').innerHTML=cur.themen.map(function(t,n){
    return '<div class="th"><button type="button"><span class="n">'+(n<9?'0':'')+(n+1)+'</span>'+t.t+'<span class="pm"><i></i><b></b></span></button><div class="a"><p>'+t.d+'</p></div></div>';
  }).join('');
  $$('#modes .mode').forEach(function(b){b.classList.toggle('on',b.dataset.tab==='cards')});
  reset();render();
  window.goView('lf');
};

$('#thlist').addEventListener('click',function(e){
  var b=e.target.closest('.th > button');if(!b)return;
  var th=b.parentElement,was=th.classList.contains('open');
  $$('#thlist .th').forEach(function(x){x.classList.remove('open')});
  if(!was)th.classList.add('open');
});
$$('#modes .mode').forEach(function(b){
  b.addEventListener('click',function(){
    if(tab===b.dataset.tab)return;
    tab=b.dataset.tab;
    $$('#modes .mode').forEach(function(x){x.classList.toggle('on',x===b)});
    $('#prTitle').textContent=tab==='cards'?'Flashcards':tab==='quiz'?'Quiz':'Klausur';
    reset();render();
  });
});

/* ─────────── State ─────────── */
var fi=0,order=[],known=[],again=[],flipped=false,
    qi=0,score=0,answered=false,qorder=[],wrongIdx=[],
    exStart=0,exTimer=null,exAns=[],exQ=0,exDone=false;
function reset(){
  fi=0;flipped=false;known=[];again=[];order=cur?cur.cards.map(function(_,n){return n}):[];
  qi=0;score=0;answered=false;wrongIdx=[];qorder=cur?cur.quiz.map(function(_,n){return n}):[];
  clearInterval(exTimer);exTimer=null;exAns=[];exQ=0;exDone=false;exStart=0;
}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function pcto(el,to){requestAnimationFrame(function(){el.style.width=to+'%'})}

function render(){
  if(!cur)return;
  if(tab==='cards')return cards();
  if(tab==='quiz')return quiz();
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
  $('#prMeta').textContent='Durchlauf beendet';
  p.innerHTML='<div class="prdone"><span class="mono">Durchlauf</span><b>'+ok+' / '+order.length+'</b>'+
    '<span class="ds">'+(rest?rest+' Karten hast du auf „Nochmal“ gelegt.':'Alle Karten saßen. Weiter zum Quiz?')+'</span>'+
    '<div class="dbtns">'+(rest?'<button class="btn" id="dagain">Nur die offenen ('+rest+')</button>':'')+
    '<button class="btn'+(rest?' ghost':'')+'" id="dall">Ganzen Stapel</button>'+
    '<button class="btn ghost" id="dquiz">Zum Quiz</button></div></div>';
  if(rest)$('#dagain').addEventListener('click',function(){order=again.slice();known=[];again=[];fi=0;cards()});
  $('#dall').addEventListener('click',function(){order=cur.cards.map(function(_,n){return n});known=[];again=[];fi=0;cards()});
  $('#dquiz').addEventListener('click',function(){$$('#modes .mode').forEach(function(x){x.classList.toggle('on',x.dataset.tab==='quiz')});tab='quiz';$('#prTitle').textContent='Quiz';reset();render()});
}

/* ─────────── Quiz ─────────── */
var K=['A','B','C','D','E'];
function quiz(){
  var p=$('#practice');
  if(qi>=qorder.length)return quizDone();
  var q=cur.quiz[qorder[qi]];
  $('#prMeta').textContent='Frage '+(qi+1)+' von '+qorder.length;
  p.innerHTML='<div class="prbar"><i id="pb"></i></div>'+
   '<div class="qz"><span class="mono">Frage '+(qi+1)+' / '+qorder.length+'</span>'+
   '<p class="q">'+esc(q.q)+'</p>'+
   '<div class="opts">'+q.a.map(function(a,n){
     return '<button class="opt" data-n="'+n+'" style="--d:'+n+'"><span class="k">'+K[n]+'</span><span class="ot">'+esc(a)+'</span></button>';
   }).join('')+'</div>'+
   '<div class="expl" id="expl"><b>Warum</b><span>'+esc(q.e||'')+'</span></div>'+
   '<div class="qzfoot"><button class="btn" id="qnext" disabled>Weiter</button><span class="mono" id="qfb">Antwort wählen</span><span class="mono sc">Punkte '+score+'</span></div></div>';
  pcto($('#pb'),Math.round(qi/qorder.length*100));
  answered=false;
  $$('#practice .opt').forEach(function(o){
    o.addEventListener('click',function(){
      if(answered)return;answered=true;
      var n=+o.dataset.n,ok=n===q.c;
      if(ok)score++;else wrongIdx.push(qorder[qi]);
      o.classList.add(ok?'right':'wrong');
      $$('#practice .opt').forEach(function(x){
        x.classList.add('lock');
        if(+x.dataset.n===q.c)x.classList.add('right');
      });
      if(q.e)$('#expl').classList.add('show');
      $('#qfb').textContent=ok?'Richtig':'Richtig ist '+K[q.c];
      $('#qfb').className='mono '+(ok?'okc':'nokc');
      $('#qnext').disabled=false;$('#qnext').focus({preventScroll:true});
    });
  });
  $('#qnext').addEventListener('click',function(){qi++;quiz()});
}
function quizDone(){
  var p=$('#practice'),n=qorder.length,pct=Math.round(score/n*100);
  $('#prMeta').textContent='Ergebnis';
  p.innerHTML='<div class="prdone"><span class="mono">Ergebnis</span><b>'+score+' / '+n+'</b>'+
    '<span class="ds">'+(pct===100?'Alles richtig. Bereit für die Klausur.':pct>=60?'Solide. '+wrongIdx.length+' Fragen sitzen noch nicht.':'Die Karten im Flashcard-Tab helfen weiter.')+'</span>'+
    '<div class="ring2" style="--p:'+pct+'"><svg viewBox="0 0 100 100"><circle class="b" cx="50" cy="50" r="44"/><circle class="f" cx="50" cy="50" r="44" style="stroke-dashoffset:'+(276.5*(1-pct/100)).toFixed(1)+'"/></svg><em>'+pct+'%</em></div>'+
    '<div class="dbtns">'+(wrongIdx.length?'<button class="btn" id="qwrong">Nur die falschen ('+wrongIdx.length+')</button>':'')+
    '<button class="btn'+(wrongIdx.length?' ghost':'')+'" id="qagain">Nochmal</button>'+
    '<button class="btn ghost" id="qexam">Klausur starten</button></div></div>';
  if(wrongIdx.length)$('#qwrong').addEventListener('click',function(){qorder=wrongIdx.slice();wrongIdx=[];qi=0;score=0;quiz()});
  $('#qagain').addEventListener('click',function(){reset();quiz()});
  $('#qexam').addEventListener('click',function(){$$('#modes .mode').forEach(function(x){x.classList.toggle('on',x.dataset.tab==='exam')});tab='exam';$('#prTitle').textContent='Klausur';reset();render()});
}

/* ─────────── Klausur ─────────── */
function exam(){
  var p=$('#practice');
  if(!exStart&&!exDone){
    $('#prMeta').textContent='Bereit';
    p.innerHTML='<div class="prdone start"><span class="mono">Klausur · LF '+cur.code+'</span><b>'+cur.quiz.length+'</b>'+
      '<span class="ds">Aufgaben aus diesem Lernfeld. '+cur.quiz.length*2+' Minuten, keine Zwischenkorrektur. Auswertung mit Lösungsweg am Ende.</span>'+
      '<div class="dbtns"><button class="btn" id="exgo">Klausur starten</button></div></div>';
    $('#exgo').addEventListener('click',function(){
      exStart=Date.now();exAns=cur.quiz.map(function(){return -1});exQ=0;
      qorder=cur.quiz.map(function(_,n){return n});shuffle(qorder);
      exTimer=setInterval(exTick,1000);examQ();
    });
    return;
  }
  if(exDone)return examResult();
  examQ();
}
function exTick(){
  var lim=cur.quiz.length*120,used=Math.floor((Date.now()-exStart)/1000),left=lim-used,e=$('#extime');
  if(left<=0){clearInterval(exTimer);exTimer=null;exDone=true;examResult();return}
  if(e){var m=Math.floor(left/60),s=left%60;e.textContent=(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);e.classList.toggle('warn',left<60)}
}
function examQ(){
  var p=$('#practice'),q=cur.quiz[qorder[exQ]],pick=exAns[exQ];
  $('#prMeta').textContent='Aufgabe '+(exQ+1)+' von '+qorder.length;
  p.innerHTML='<div class="exhd"><span class="mono">Klausur · LF '+cur.code+'</span><b id="extime">--:--</b></div>'+
   '<div class="exdots">'+qorder.map(function(_,n){
     return '<button class="exd'+(n===exQ?' now':'')+(exAns[n]>-1?' set':'')+'" data-q="'+n+'">'+(n+1)+'</button>';
   }).join('')+'</div>'+
   '<div class="qz"><p class="q">'+esc(q.q)+'</p>'+
   '<div class="opts">'+q.a.map(function(a,n){
     return '<button class="opt'+(pick===n?' pick':'')+'" data-n="'+n+'" style="--d:'+n+'"><span class="k">'+K[n]+'</span><span class="ot">'+esc(a)+'</span></button>';
   }).join('')+'</div>'+
   '<div class="qzfoot"><button class="btn ghost sm" id="exprev"'+(exQ===0?' disabled':'')+'>Zurück</button>'+
   '<button class="btn sm" id="exnext">'+(exQ===qorder.length-1?'Abgeben':'Weiter')+'</button>'+
   '<span class="mono">'+exAns.filter(function(x){return x>-1}).length+' / '+qorder.length+' beantwortet</span></div></div>';
  exTick();
  $$('#practice .opt').forEach(function(o){
    o.addEventListener('click',function(){
      exAns[exQ]=+o.dataset.n;
      $$('#practice .opt').forEach(function(x){x.classList.toggle('pick',x===o)});
      $$('#practice .exd')[exQ].classList.add('set');
    });
  });
  $$('#practice .exd').forEach(function(d){
    d.addEventListener('click',function(){exQ=+d.dataset.q;examQ()});
  });
  $('#exprev').addEventListener('click',function(){if(exQ>0){exQ--;examQ()}});
  $('#exnext').addEventListener('click',function(){
    if(exQ<qorder.length-1){exQ++;examQ();return}
    clearInterval(exTimer);exTimer=null;exDone=true;examResult();
  });
}
function examResult(){
  var p=$('#practice'),n=qorder.length,pts=0;
  qorder.forEach(function(qidx,i){if(exAns[i]===cur.quiz[qidx].c)pts++});
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
   '<div class="rev">'+qorder.map(function(qidx,i){
     var q=cur.quiz[qidx],ok=exAns[i]===q.c;
     return '<div class="rv'+(ok?' ok':'')+'" style="--d:'+i+'"><span class="rn">'+(i+1)+'</span>'+
       '<div><p>'+esc(q.q)+'</p>'+
       '<small class="'+(ok?'y':'n')+'">Deine Antwort: '+(exAns[i]>-1?esc(q.a[exAns[i]]):'keine')+'</small>'+
       (ok?'':'<small class="y">Richtig: '+esc(q.a[q.c])+'</small>')+
       (q.e?'<small class="ex">'+esc(q.e)+'</small>':'')+'</div></div>';
   }).join('')+'</div>'+
   '<div class="dbtns"><button class="btn" id="exre">Neue Klausur</button><button class="btn ghost" id="excards">Karten wiederholen</button></div></div>';
  $('#exre').addEventListener('click',function(){exStart=0;reset();exam()});
  $('#excards').addEventListener('click',function(){$$('#modes .mode').forEach(function(x){x.classList.toggle('on',x.dataset.tab==='cards')});tab='cards';$('#prTitle').textContent='Flashcards';exStart=0;reset();render()});
}
})();
