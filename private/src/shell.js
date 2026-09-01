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
var LINES=['Privat Layer · Übersicht über alle Räume.','Lernecke · 4 Felder, Karten, Quiz und Klausur.','Fokus-Modus · Pomodoro läuft mit.'],
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
  window.scrollTo(0,0);
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

/* ── Dashboard · Lernecke-Karte ── */
var overall=Math.round(LF.reduce(function(a,l){return a+l.pct},0)/(LF.length||1)),
    totCards=LF.reduce(function(a,l){return a+l.cards.length},0),
    totQuiz=LF.reduce(function(a,l){return a+l.quiz.length},0);

$('#lfrows').innerHTML=LF.map(function(l,i){
  return '<button class="lfr'+(l.pct===100?' done':'')+'" data-lf="'+i+'">'+
    '<span class="cd">'+l.code+'</span>'+
    '<span class="nm">'+l.name+'<small>'+l.cards.length+' Karten · '+l.quiz.length+' Fragen · '+l.state+'</small></span>'+
    '<span class="pr"><span class="t"><i data-w="'+l.pct+'"></i></span><em>'+l.pct+'</em></span>'+
    '<svg class="go" width="17" height="17" viewBox="0 0 24 24"><use href="#i-arr"/></svg></button>';
}).join('')+
'<button class="lfr soon" disabled><span class="cd">05—10</span><span class="nm">Weitere Lernfelder<small>folgen später</small></span><span class="pr"><span class="t"></span><em>—</em></span><svg class="go" width="17" height="17" viewBox="0 0 24 24"><use href="#i-arr"/></svg></button>';
$('#lfmeta').textContent=LF.length+' Felder aktiv';
$('#lfsub').textContent=totCards+' Karten · '+totQuiz+' Quizfragen';

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
    $$('#lfrows .pr .t i').forEach(function(i){i.style.width=(i.dataset.w||0)+'%'});
  },260);
}
paintDash();

$('#lfrows').addEventListener('click',function(e){
  var r=e.target.closest('.lfr[data-lf]');if(!r)return;
  window.openLF(+r.dataset.lf);
});
$('#resume').addEventListener('click',function(){
  var i=0;for(var k=0;k<LF.length;k++){if(LF[k].pct<100){i=k;break}}
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
  $('#yt').innerHTML='<iframe src="https://www.youtube.com/embed/kR-9AIXWIG4?autoplay=1&rel=0" title="Ambiance" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
});

/* ── Lernecke-Übersicht ── */
var lernPainted=false;
function paintLern(){
  if(lernPainted)return;lernPainted=true;
  var C=2*Math.PI*19;
  $('#lgrid').innerHTML=LF.map(function(l,i){
    return '<button class="lcard" style="--i:'+i+'" data-lf="'+i+'">'+
      '<span class="ring"><svg width="44" height="44" viewBox="0 0 44 44"><circle class="bgc" cx="22" cy="22" r="19"></circle>'+
      '<circle class="fgc" cx="22" cy="22" r="19" stroke-dasharray="'+C.toFixed(1)+'" stroke-dashoffset="'+C.toFixed(1)+'" data-off="'+(C*(1-l.pct/100)).toFixed(1)+'"></circle></svg><em>'+l.pct+'</em></span>'+
      '<span class="cd">Lernfeld '+l.code+'</span>'+
      '<h3>'+l.name+'</h3>'+
      '<span class="st">'+l.state+'</span>'+
      '<span class="tagrow"><i>Flashcards</i><i>Quiz</i><i>Klausur</i></span>'+
      '<span class="kpi"><div><b>'+l.themen.length+'</b>Themen</div><div><b>'+l.cards.length+'</b>Karten</div><div><b>'+l.quiz.length+'</b>Fragen</div></span></button>';
  }).join('')+
  '<div class="lcard soon" style="--i:'+LF.length+'"><span class="cd">Lernfeld 05—10</span><h3>Noch nicht vorhanden</h3><span class="st">wird später ergänzt</span><span class="kpi"><div><b>—</b>Themen</div><div><b>—</b>Karten</div><div><b>—</b>Fragen</div></span></div>';
  setTimeout(function(){$$('#lgrid .fgc').forEach(function(c){c.setAttribute('stroke-dashoffset',c.dataset.off)})},420);
}
$('#lgrid').addEventListener('click',function(e){
  var c=e.target.closest('.lcard[data-lf]');if(!c)return;
  window.openLF(+c.dataset.lf);
});

/* ── Einstellungen ── */
var DEF={accent:'#1E4B9A',signal:'#CD392A',surface:'light',radius:'14',density:'comfy',motion:'on'},
    cfg=Object.assign({},DEF);
try{var st=localStorage.getItem('izure.privat.theme');if(st)cfg=Object.assign(cfg,JSON.parse(st))}catch(e){}
function hex2rgb(h){h=h.replace('#','');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}
function mix(h,w){var c=hex2rgb(h);return 'rgb('+c.map(function(v){return Math.round(v+(255-v)*w)}).join(',')+')'}
function apply(){
  var r=document.documentElement.style;
  r.setProperty('--blue',cfg.accent);
  r.setProperty('--red',cfg.signal);
  r.setProperty('--pink',mix(cfg.signal,.9));
  r.setProperty('--r',cfg.radius+'px');
  document.body.dataset.surface=cfg.surface;
  document.body.dataset.density=cfg.density;
  document.body.dataset.motion=cfg.motion;
  $$('#setwrap [data-set]').forEach(function(g){
    var key=g.dataset.set;
    $$('button',g).forEach(function(b){b.classList.toggle('on',b.dataset.v===String(cfg[key]))});
  });
  try{localStorage.setItem('izure.privat.theme',JSON.stringify(cfg))}catch(e){}
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
