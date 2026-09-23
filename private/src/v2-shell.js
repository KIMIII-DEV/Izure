/* ── private/v2-shell.js ── */
/* Privat Layer · Shell, Dashboard, Einstellungen */
(function(){
var $=function(s,r){return (r||document).querySelector(s)},
    $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))},
    LF=window.LF||[];
window.$q=$;window.$qa=$$;

/* ── Uhr ── */
var DAYS=['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    MON=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
function tick(){
  var d=new Date(),p=function(n){return n<10?'0'+n:''+n},
      t=p(d.getHours())+':'+p(d.getMinutes()),
      s=DAYS[d.getDay()]+', '+d.getDate()+'. '+MON[d.getMonth()]+' '+d.getFullYear();
  ['#ctime','#ctime2'].forEach(function(k){var e=$(k);if(e)e.textContent=t});
  ['#cdate','#cdate2'].forEach(function(k){var e=$(k);if(e)e.textContent=s});
}
tick();setInterval(function(){tick();WID.day()},15000);
WID.all();

/* ── Typing-Zeile ── */
var LINES=['Alles Private an einem Ort — Lernen, Welt, Punchy.','Punchy hat heute 3 Nodes fortgeschrieben.','Fokus-Modus läuft mit, wenn du willst.'],
    ti=0,ci=0,del=false,typed=$('#typed');
function type(){
  if(!typed)return;
  var l=LINES[ti];
  typed.textContent=del?l.slice(0,--ci):l.slice(0,++ci);
  if(!del&&ci===l.length){del=true;return setTimeout(type,2600)}
  if(del&&ci===0){del=false;ti=(ti+1)%LINES.length;return setTimeout(type,320)}
  setTimeout(type,del?18:38);
}
setTimeout(type,700);

/* ── Router ── */
function go(view){
  $$('.view').forEach(function(v){v.classList.toggle('on',v.id==='v-'+view)});
  $$('#rail .ric[data-view]').forEach(function(b){b.classList.toggle('on',b.dataset.view===view||(view==='lf'&&b.dataset.view==='lern'))});
  if(view==='dash')paintDash();
  if(view==='lern')paintLern();
  if(view==='marco'&&window.MARCOVIEW)window.MARCOVIEW.enter();
  if(window.PRUEFUNG_UI){
    // Verlässt man die Prüfung, muss der Zähler stehen bleiben — sonst
    // liefe die Uhr im Hintergrund weiter und gäbe irgendwann von selbst ab,
    // während man in der Lernecke sitzt.
    if(view==='pruefung')window.PRUEFUNG_UI.enter();else window.PRUEFUNG_UI.leave();
  }
  if(window.V2)window.V2.enter(view);
  if(document.body.classList.contains("priv"))window.scrollTo(0,0);
}
window.goView=go;
document.addEventListener('click',function(e){
  var t=e.target.closest('[data-view]');
  if(t){e.preventDefault();go(t.dataset.view);return}
  var f=e.target.closest('[data-focus]');
  if(f){focusCell(f.dataset.focus)}
});
function focusCell(id){
  $$('#rail .ric').forEach(function(b){b.classList.remove('on')});
  var btn=$('#rail .ric[data-focus="'+id+'"]');if(btn)btn.classList.add('on');
  go('dash');
  var cell=$('[data-cell="'+id+'"]');if(!cell)return;
  $$('.card').forEach(function(c){c.classList.remove('is-focus')});
  cell.classList.add('is-focus');
  setTimeout(function(){cell.classList.remove('is-focus')},2400);
}

/* Spanne der noch fehlenden Lernfelder aus dem letzten vorhandenen —
   sonst steht dort weiter „05—10“, obwohl Lernfeld 5 existiert. */
function nextRange(){
  var last=LF.length?parseInt(LF[LF.length-1].code,10):0;
  return last>=10?'':(last+1<10?'0':'')+(last+1)+'—10';
}
var lernPainted=false;

/* ── Dashboard · Lernecke-Karte ── */
var totCards=LF.reduce(function(a,l){return a+l.cards.length},0),
    totQuiz=LF.reduce(function(a,l){return a+l.quiz.length},0),
    overall=0;

/* In der Lieferung wurde die Zeile einmal gezeichnet und nie wieder. Da
   der Fortschritt jetzt aus der Nutzung kommt, muss sie nach jedem
   Durchlauf neu — sonst zeigt das Dashboard den Stand von vor dem Lernen. */
function rows(){
overall=Math.round(LF.reduce(function(a,l){return a+l.pct},0)/(LF.length||1));
$('#lfrows').innerHTML=LF.map(function(l,i){
  return '<button class="lfr'+(l.pct===100?' done':'')+'" data-lf="'+i+'">'+
    '<span class="cd">'+l.code+'</span>'+
    '<span class="nm">'+l.name+'<small>'+l.cards.length+' Karten · '+l.quiz.length+' Aufgaben · '+l.state+'</small></span>'+
    '<span class="pr"><span class="t"><i data-w="'+l.pct+'"></i></span><em>'+l.pct+'</em></span>'+
    '<svg class="go" width="17" height="17" viewBox="0 0 24 24"><use href="#i-arr"/></svg></button>';
}).join('')+
'<button class="lfr soon" disabled><span class="cd">'+nextRange()+'</span><span class="nm">Weitere Lernfelder<small>folgen später</small></span><span class="pr"><span class="t"></span><em>—</em></span><svg class="go" width="17" height="17" viewBox="0 0 24 24"><use href="#i-arr"/></svg></button>';
$('#lfmeta').textContent=LF.length+' Felder aktiv';
$('#lfsub').textContent=totCards+' Karten · '+totQuiz+' Aufgaben';
$('#lfbar').style.width=overall+'%';
$('#lfpct').textContent=overall+' %';
$$('#lfrows .pr .t i').forEach(function(i){i.style.width=(i.dataset.w||0)+'%'});
}
rows();

addEventListener('izure:progress',function(){
  rows();
  lernPainted=false;
  if($('#v-lern').classList.contains('on'))paintLern();
});

function countTo(el,to,ms,suf){
  var t0=null;
  function step(ts){
    if(!t0)t0=ts;
    var p=Math.min(1,(ts-t0)/ms),e=1-Math.pow(1-p,3);
    el.textContent=Math.round(to*e)+(suf||'');
    if(p<1)requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
var dashPainted=false;
function paintDash(){
  if(dashPainted)return;dashPainted=true;
  setTimeout(function(){
    $('#lfbar').style.width=overall+'%';
    countTo($('#lfpct'),overall,1100,' %');
  },260);
}
paintDash();

$('#lfrows').addEventListener('click',function(e){
  var r=e.target.closest('.lfr[data-lf]');if(!r)return;
  window.openLF(+r.dataset.lf);
});
$('#resume').addEventListener('click',function(){
  var i=LF.length-1;for(var k=0;k<LF.length;k++){if(LF[k].pct<100){i=k;break}}
  window.openLF(i);
});

/* ── Pomodoro ── */
var mins=25,left=25*60,run=null,pt=$('#pomt'),chip=$('#pom');
function ppaint(){var m=Math.floor(left/60),s=left%60;pt.textContent=(m<10?'0'+m:m)+':'+(s<10?'0'+s:s)}
function pstop(){clearInterval(run);run=null;chip.classList.remove('run');$('#plico').setAttribute('d','M8 5v14l11-7z');$('#pomgo2').textContent='Pomodoro starten'}
function ptoggle(){
  if(run){pstop();return}
  chip.classList.add('run');
  $('#plico').setAttribute('d','M7 5h3.5v14H7zM13.5 5H17v14h-3.5z');
  $('#pomgo2').textContent='Pause';
  run=setInterval(function(){
    left--;ppaint();
    if(left<=0){pstop();mins=mins===25?5:25;left=mins*60;ppaint();$('#pom25').textContent=mins+' / '+(mins===25?5:25)}
  },1000);
}
$('#pomgo').addEventListener('click',ptoggle);
$('#pomgo2').addEventListener('click',ptoggle);
$('#pom25').addEventListener('click',function(){pstop();mins=mins===25?5:25;left=mins*60;ppaint();this.textContent=mins+' / '+(mins===25?5:25)});
ppaint();

$('#ytgo').addEventListener('click',function(){
  /* youtube-nocookie statt youtube.com: der erweiterte Datenschutzmodus
     setzt keine Werbe-Cookies beim blossen Laden. Der iframe bleibt danach
     unangetastet im DOM — die Ansichten werden über `opacity` verborgen,
     nicht über `display:none`, deshalb läuft der Ton beim Wechsel auf
     Lernecke oder in ein Lernfeld weiter. */
  $('#yt').innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/kR-9AIXWIG4?autoplay=1&rel=0&modestbranding=1" title="Ambiance" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
});

/* ── Lernecke-Übersicht ── */
function paintLern(){
  /* Die Prüfungszeile wird bei jedem Betreten neu gezeichnet: sie zeigt den
     Stand des letzten Versuchs, und der ändert sich, ohne dass die Kacheln
     darunter neu gebaut werden müssten. */
  paintZP();
  if(lernPainted)return;lernPainted=true;
  var C=2*Math.PI*19;
  $('#lgrid').innerHTML=LF.map(function(l,i){
    return '<button class="lcard" style="--i:'+i+'" data-lf="'+i+'">'+
      '<span class="ring"><svg width="44" height="44" viewBox="0 0 44 44"><circle class="bgc" cx="22" cy="22" r="19"></circle>'+
      '<circle class="fgc" cx="22" cy="22" r="19" stroke-dasharray="'+C.toFixed(1)+'" stroke-dashoffset="'+C.toFixed(1)+'" data-off="'+(C*(1-l.pct/100)).toFixed(1)+'"></circle></svg><em>'+l.pct+'</em></span>'+
      '<span class="cd">Lernfeld '+l.code+'</span>'+
      '<h3>'+l.name+'</h3>'+
      '<span class="st">'+l.state+'</span>'+
      '<span class="tagrow"><i>Flashcards</i><i>Quiz</i></span>'+
      '<span class="kpi"><div><b>'+l.themen.length+'</b>Themen</div><div><b>'+l.cards.length+'</b>Karten</div><div><b>'+l.quiz.length+'</b>Aufgaben</div></span></button>';
  }).join('')+
  '<div class="lcard soon" style="--i:'+LF.length+'"><span class="cd">Lernfeld 05—10</span><h3>Noch nicht vorhanden</h3><span class="st">wird später ergänzt</span><span class="kpi"><div><b>—</b>Themen</div><div><b>—</b>Karten</div><div><b>—</b>Aufgaben</div></span></div>';
  setTimeout(function(){$$('#lgrid .fgc').forEach(function(c){c.setAttribute('stroke-dashoffset',c.dataset.off)})},420);
}
$('#lgrid').addEventListener('click',function(e){
  var c=e.target.closest('.lcard[data-lf]');if(!c)return;
  window.openLF(+c.dataset.lf);
});

/* Zwischenprüfung als flache Zeile über den Lernfeldern. Bewusst keine
   siebte Kachel: das Raster der Lernecke steht auf drei mal zwei, eine
   weitere Kachel hätte es gesprengt. Und die Prüfung gehört ohnehin nicht
   in die Reihe der Lernfelder — sie geht quer über alle. */
function paintZP(){
  var row=$('#zprow');
  if(!row||!window.PRUEFUNG)return;
  var P=window.PRUEFUNG,
      hist=P.history(),
      letzte=hist[hist.length-1],
      abd=P.coverage(),
      pool=abd[1]+abd[2]+abd[3]+abd[4];
  row.innerHTML=
    '<span class="ico"><svg width="16" height="16" viewBox="0 0 24 24"><use href="#i-exam"></use></svg></span>'+
    '<span class="zprt"><b>Zwischenprüfung</b>'+
      '<small>60 Aufgaben · 120 Minuten · vier Themengebiete · '+pool+' Aufgaben im Pool</small></span>'+
    '<span class="zprs">'+(letzte
      ? '<b>'+letzte.right+' / '+letzte.total+'</b><small>zuletzt · Note '+letzte.note+'</small>'
      : '<b>—</b><small>noch nicht geschrieben</small>')+'</span>'+
    '<span class="go"><svg width="16" height="16" viewBox="0 0 24 24"><use href="#i-arr"></use></svg></span>';
  row.hidden=false;
}

/* ── Einstellungen ── */
var DEF={accent:'#1E4B9A',signal:'#CD392A',surface:'light',radius:'20',density:'comfy',motion:'on'},
    cfg=Object.assign({},DEF);
try{var st=localStorage.getItem('izure.privat.v2');if(st)cfg=Object.assign(cfg,JSON.parse(st))}catch(e){}
function hex2rgb(h){h=h.replace('#','');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}
function mix(h,w){var c=hex2rgb(h);return 'rgb('+c.map(function(v){return Math.round(v+(255-v)*w)}).join(',')+')'}
function apply(){
  var r=PVROOT.style;
  r.setProperty('--blue',cfg.accent);
  r.setProperty('--red',cfg.signal);
  r.setProperty('--pink',mix(cfg.signal,.9));
  r.setProperty('--r',cfg.radius+'px');
  PVROOT.dataset.surface=cfg.surface;
  /* Auch auf <html>: die Farbtöne liegen auf #pv, aber #pv ist im Querformat
     nur so hoch wie seine nicht-fixierten Kinder — rund hundert Pixel. Der
     Rest der Seite bekäme also den weißen Standardhintergrund des Browsers,
     und genau der blitzte im Dunkelmodus an den Rändern und unter dem Inhalt
     durch. Mit dem Merker am Dokument deckt auch der Überzug beim Weiterziehen
     (Overscroll) in der richtigen Farbe. */
  document.documentElement.dataset.surface=cfg.surface;
  PVROOT.dataset.density=cfg.density;
  PVROOT.dataset.motion=cfg.motion;
  $$('#setwrap [data-set]').forEach(function(g){
    var key=g.dataset.set;
    $$('button',g).forEach(function(b){b.classList.toggle('on',b.dataset.v===String(cfg[key]))});
  });
  try{localStorage.setItem('izure.privat.v2',JSON.stringify(cfg))}catch(e){}
}
$('#setwrap').addEventListener('click',function(e){
  var b=e.target.closest('[data-set] button');if(!b)return;
  cfg[b.parentElement.dataset.set]=b.dataset.v;apply();
});
function openSet(o){
  var w=$('#setwrap');
  if(o){w.hidden=false;requestAnimationFrame(function(){w.classList.add('on')})}
  else{w.classList.remove('on');setTimeout(function(){w.hidden=true},340)}
}
$('#setgo').addEventListener('click',function(){openSet(true)});
$('#setclose').addEventListener('click',function(){openSet(false)});
$('#scrim').addEventListener('click',function(){openSet(false)});
$('#setreset').addEventListener('click',function(){cfg=Object.assign({},DEF);apply()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')openSet(false)});
apply();
})();

