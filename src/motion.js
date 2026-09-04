/* Motion behaviours for the portfolio page. Loaded after the inline scale script. */
(function(){
var RM=false;

/* ── scroll reveal ─────────────────────────────────────────── */
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{rootMargin:'0px 0px -12% 0px',threshold:.05});
function reveal(sel,kind,step,base){
  var n=0;
  document.querySelectorAll(sel).forEach(function(el){
    if(el.hasAttribute('data-rv'))return;
    el.setAttribute('data-rv',kind||'up');
    el.style.setProperty('--d',((base||0)+n*(step||0))+'s');
    n++; io.observe(el);
  });
}

function revealO(sel,step,base){
  var n=0;
  document.querySelectorAll(sel).forEach(function(el){
    if(el.classList.contains('rv-o'))return;
    el.classList.add('rv-o');
    el.style.setProperty('--d',((base||0)+n*(step||0))+'s');
    n++; io.observe(el);
  });
}

/* ── hero typewriter ──────────────────────────────────────── */
var ROLES=['brand strategist','graphic designer','copywriter','visual storyteller'];
function typer(){
  var hosts=document.querySelectorAll('.hero-role');
  if(!hosts.length)return;
  var i=0,c=0,del=false;
  (function tick(){
    var w=ROLES[i],txt=w.slice(0,c);
    hosts.forEach(function(h){h.textContent=txt});
    var t=del?42:78;
    if(!del&&c===w.length){del=true;t=1900}
    else if(del&&c===0){del=false;i=(i+1)%ROLES.length;t=380}
    else c+=del?-1:1;
    setTimeout(tick,t);
  })();
}

/* ── award row hover previews ─────────────────────────────── */
var AWIMG=[['1','2','3'],['4','5','6'],['2','5','3']],AWROT=[-5,3.5,-2.5],AWX=[40,474,908];
function tickerSrc(n){var r=(window.__resources||{})['ticker'+n];return r||('portfolio/img/ticker-'+n+'.jpg')}
function awards(){
  document.querySelectorAll('#awlist .awrow').forEach(function(row,ri){
    row.querySelectorAll('span').forEach(function(s,si){ s.style.setProperty('--sd',(si*.05)+'s'); });
    AWIMG[ri].forEach(function(n,si){
      var d=document.createElement('div');
      d.className='awprev';
      d.style.left=AWX[si]+'px';
      d.style.setProperty('--r',AWROT[si]+'deg');
      d.style.setProperty('--pd',(si*.07)+'s');
      d.style.backgroundImage='url('+tickerSrc(n)+')';
      row.appendChild(d);
    });
  });
}

/* ── service card hover: straighten to upright ────────────── */
function services(){
  document.querySelectorAll('.svc').forEach(function(s){
    var m=(s.getAttribute('style')||'').match(/matrix\(([^)]+)\)/);
    if(m){var p=m[1].split(',');s.style.setProperty('--sx',p[4].trim());s.style.setProperty('--sy',p[5].trim())}
    s.querySelectorAll('.row').forEach(function(r,i){r.style.setProperty('--rd',(i*.04)+'s')});
  });
}

/* ── FAQ accordion with height animation ──────────────────── */
function faq(){
  var items=[].slice.call(document.querySelectorAll('.faq'));
  function shut(f){var a=f.querySelector('.a');a.style.height=a.scrollHeight+'px';f.classList.remove('open');requestAnimationFrame(function(){a.style.height='0px'})}
  function open(f){var a=f.querySelector('.a');f.classList.add('open');a.style.height=a.scrollHeight+'px';setTimeout(function(){if(f.classList.contains('open'))a.style.height='auto'},520)}
  items.forEach(function(f){
    var a=f.querySelector('.a');
    if(f.classList.contains('open')){a.style.height='auto'}else{a.style.height='0px'}
    f.querySelector('.q').addEventListener('click',function(){
      var was=f.classList.contains('open');
      items.forEach(function(x){if(x.classList.contains('open'))shut(x)});
      if(!was)open(f);
    });
  });
}

/* ── testimonial switcher ─────────────────────────────────── */
var QUOTES={
 'Marcus Chen':['Working with Aurora transformed our brand—her strategic, artistic\ndesigns crafted a resonant visual story that boosted customer loyalty by\n40% in six months. Her blend of strategy and artistry is unmatched.','CEO | Nexus Tech'],
 'Emma Reed':['She listens first and designs second. The identity she built still\nguides every decision we make about how the company looks and\nsounds two years later.','Founder | Marlowe Studio'],
 'Lila Martinez':['We came in with a vague brief and left with a brand system the whole\nteam understands. The packaging work alone lifted our shelf\nconversion noticeably.','Head of Brand | Verano'],
 'Theo Walker':['Clear process, no drama, and work that looks better than the mood\nboards promised. The copy and the visuals finally say the same thing.','Marketing Lead | Fieldnote']};
function testimonials(){
  var qs=document.querySelectorAll('.tquote'),ns=document.querySelectorAll('.tname');
  if(!qs.length)return;
  document.querySelectorAll('.tcard').forEach(function(c){
    c.addEventListener('click',function(){
      var name=c.getAttribute('data-name'),d=QUOTES[name];
      if(!d||c.classList.contains('active'))return;
      var group=c.parentNode;
      group.querySelectorAll('.tcard').forEach(function(x){
        x.classList.remove('active');
        x.style.background='var(--f4)';
        x.querySelector('.hd').style.background='var(--e4)';
        x.querySelector('.hd span').style.color='var(--blue)';
      });
      c.classList.add('active');
      c.style.background='var(--pink)';
      c.querySelector('.hd').style.background='var(--red)';
      c.querySelector('.hd span').style.color='var(--fa)';
      qs.forEach(function(q){q.classList.add('out')});ns.forEach(function(n){n.classList.add('out')});
      setTimeout(function(){
        qs.forEach(function(q){q.innerHTML=d[0].split('\n').join('<br>')});
        ns.forEach(function(n){n.innerHTML='<b class="t16b">'+name+'</b><br>'+d[1]});
        qs.forEach(function(q){q.classList.remove('out')});ns.forEach(function(n){n.classList.remove('out')});
      },360);
    });
  });
}

/* ── nav toggle ───────────────────────────────────────────── */
function nav(){
  document.querySelectorAll('.tb-toggle').forEach(function(btn){
    var bar=btn.closest('#topbar,#mtop');
    if(!bar)return;
    btn.addEventListener('click',function(){
      var open=!bar.classList.contains('open');
      bar.classList.toggle('open',open);
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    bar.querySelectorAll('.tb-links a,.tb-resume').forEach(function(a){
      a.addEventListener('click',function(){bar.classList.remove('open');btn.setAttribute('aria-expanded','false')});
    });
  });
}

/* Formularlogik liegt vollständig in contact.js — Freischalten, Prüfen und
   Absenden gehören zusammen; zwei Stellen, die dasselbe Feld beobachten,
   waren nur eine Gelegenheit für Widersprüche. */
function forms(){}

/* ── init ─────────────────────────────────────────────────── */
function init(){
  typer();awards();services();faq();testimonials();forms();nav();

  reveal('#hero-status','fade',0,.1);
  reveal('#hero-copy > *','up',.12,.25);

  document.querySelectorAll('h2.h28').forEach(function(h){h.setAttribute('data-rv','up');io.observe(h)});
  document.querySelectorAll('.workcard').forEach(function(c){
    c.querySelectorAll('h3,p,.tag').forEach(function(el,i){el.setAttribute('data-rv','up');el.style.setProperty('--d',(i*.08)+'s');io.observe(el)});
    var im=c.querySelector('.workimg');im.setAttribute('data-rv','pop');im.style.setProperty('--d','.1s');io.observe(im);
    c.querySelectorAll('.tag').forEach(function(t,i){t.style.setProperty('--td',(i*.05)+'s')});
  });
  revealO('.svc',.14,0);
  reveal('.awrow','left',.09,0);
  revealO('#about .polaroid',.09,.1);
  revealO('.tcard',.08,0);
  reveal('#quotecard','up',0,0);
  reveal('.faq','up',.07,0);
  reveal('#contact form .field','up',.1,.1);
  reveal('#contact form .submit','up',0,.45);
  reveal('#letstalk','right',0,.1);
  reveal('#wordmark','up',0,0);
  reveal('#footlinks a','left',.07,.1);
  reveal('#mobile section > h2','up',0,0);
  reveal('#mwork .card','up',.1,0);
  revealO('#msvc .c',.12,0);
  reveal('#maward .row','left',.09,0);
  reveal('#mabout .card, #mabout .strip, #mabout .note','up',.1,0);
  reveal('#mtest .quote','up',0,0);
  reveal('#mfoot .mark','up',0,0);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
