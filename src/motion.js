(function(){
var $=function(s,r){return (r||document).querySelector(s)},
    $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))},
    RM=matchMedia('(prefers-reduced-motion: reduce)'),
    narrow=function(){return innerWidth<=860};

/* ── 1 · Überschriften zeilenweise maskieren ───────────── */
function lines(){$$('[data-lines]').forEach(function(el){
  var parts=el.innerHTML.split(/<br\s*\/?>/i);
  el.innerHTML=parts.map(function(p,i){
    return '<span class="ln"><i style="--d:'+(i*70)+'ms">'+p.trim()+'</i></span>';
  }).join('');
})}
window.MRLINES=lines;lines();
var wm=$('#wordmark');
if(wm)$$('i',wm).forEach(function(i,n){i.style.setProperty('--d',n*90+'ms')});

/* ── 2 · Eintritts-Reveals ─────────────────────────────── */
$$('[data-stagger]').forEach(function(g){
  var step=+g.dataset.stagger||60;
  $$('[data-rv]',g).forEach(function(el,i){el.style.setProperty('--d',i*step+'ms')});
});
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(!e.isIntersecting)return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
},{rootMargin:'0px 0px -12% 0px',threshold:.12});
$$('[data-rv],[data-img],[data-lines],#wordmark').forEach(function(el){io.observe(el)});

/* ── 3 · Kopfzeile schrumpft ───────────────────────────── */
var hd=$('#hd'),burger=$('.burger');
burger.addEventListener('click',function(){
  var open=hd.classList.toggle('open');
  burger.setAttribute('aria-expanded',open?'true':'false');
});
$$('.hnav a').forEach(function(a){a.addEventListener('click',function(){
  hd.classList.remove('open');burger.setAttribute('aria-expanded','false');
})});

/* ── 4 · Rolle wechselt ruhig ──────────────────────────── */
function ROLES(){return (window.MRROLES&&window.MRROLES())||['brand strategist','graphic designer','copywriter','visual storyteller']}
var rl=$('#role'),ri=0;
if(rl){
  rl.innerHTML='<span>'+ROLES()[0]+'</span>';
  document.addEventListener('mr:lang',function(){ri=0;rl.innerHTML='<span>'+ROLES()[0]+'</span>'});
  if(!RM.matches)setInterval(function(){
    var old=rl.firstElementChild;
    ri=(ri+1)%ROLES().length;
    var nu=document.createElement('span');
    nu.className='new';nu.textContent=ROLES()[ri];
    rl.appendChild(nu);
    old.classList.add('out');
    requestAnimationFrame(function(){requestAnimationFrame(function(){nu.classList.remove('new')})});
    setTimeout(function(){old.remove()},480);
  },3400);
}

/* ── 5 · Featured Work läuft horizontal ────────────────── */
var rail=$('.wrail'),stick=$('.wstick'),track=$('.wtrack'),prog=$('.wprog i'),over=0,lastW=-1,lastV=-1;
function measure(){
  if(!rail)return;
  if(narrow()){
    if(rail.style.height!==''){rail.style.height='';track.style.transform=''}
    over=0;lastW=-1;lastV=-1;return;
  }
  var tw=track.scrollWidth,vw=innerWidth,vh=innerHeight;
  if(tw===lastW&&vw===lastV&&rail.style.height)return;
  lastW=tw;lastV=vw;
  over=Math.max(0,tw-vw);
  var h=(vh+over)+'px';
  if(rail.style.height!==h)rail.style.height=h;
}
function railFrame(){
  if(!rail||!over)return;
  var r=rail.getBoundingClientRect(),
      p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));
  track.style.transform='translate3d('+(-over*p).toFixed(2)+'px,0,0)';
  if(prog)prog.style.transform='scaleX('+p.toFixed(4)+')';
}
if(prog)prog.style.width='100%';

/* ── 6 · Scroll-Schleife (ein rAF für alles) ───────────── */
var queued=false;
function onScroll(){
  if(queued)return;queued=true;
  requestAnimationFrame(function(){
    queued=false;
    hd.classList.toggle('cond',scrollY>26);
    railFrame();
  });
}
addEventListener('scroll',onScroll,{passive:true});
addEventListener('resize',function(){measure();onScroll()});
measure();onScroll();
addEventListener('load',function(){measure();onScroll()});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){measure();onScroll()});
if(track&&window.ResizeObserver){
  var ro=new ResizeObserver(function(){measure();onScroll()});
  ro.observe(track);$$('.wcard',track).forEach(function(c){ro.observe(c)});
}

/* ── 8 · Footer-Band ───────────────────────────────────── */
var TICK=["/assets/09021561b211.jpg","/assets/da7e007d69ec.jpg","/assets/9cffefa334c7.jpg","/assets/f60eca12001b.jpg","/assets/788cb959065e.jpg","/assets/443e69539f34.jpg"];
var mqt=$('#mqt');
if(mqt){
  var h='';
  for(var r=0;r<2;r++)for(var j=1;j<=6;j++)h+='<div><img src="'+TICK[j-1]+'" alt="" decoding="async"></div>';
  mqt.innerHTML=h;
}

/* ── 9 · Stimmen ───────────────────────────────────────── */
var QUOTES={
'Marcus Chen':['Working with Aurora transformed our brand—her strategic, artistic designs crafted a resonant visual story that boosted customer loyalty by 40% in six months. Her blend of strategy and artistry is unmatched.','CEO | Nexus Tech'],
'Emma Reed':['She listens first and designs second. The identity she built still guides every decision we make about how the company looks and sounds two years later.','Founder | Marlowe Studio'],
'Lila Martinez':['We came in with a vague brief and left with a brand system the whole team understands. The packaging work alone lifted our shelf conversion noticeably.','Head of Brand | Verano'],
'Theo Walker':['Clear process, no drama, and work that looks better than the mood boards promised. The copy and the visuals finally say the same thing.','Marketing Lead | Fieldnote']};
var qEl=$('#quote'),qTx=$('#qtext'),qWho=$('#qwho');
$$('.tc').forEach(function(b){
  b.addEventListener('click',function(){
    if(b.getAttribute('aria-pressed')==='true')return;
    $$('.tc').forEach(function(x){x.setAttribute('aria-pressed','false')});
    b.setAttribute('aria-pressed','true');
    var d=QUOTES[b.dataset.name];
    qEl.classList.add('sw');
    setTimeout(function(){
      qTx.textContent=d[0];
      qWho.innerHTML='<b>'+b.dataset.name+'</b>'+d[1];
      qEl.classList.remove('sw');
    },220);
  });
});

/* ── 10 · FAQ ──────────────────────────────────────────── */
$$('.fq').forEach(function(f){
  var btn=$('button',f);
  btn.addEventListener('click',function(){
    var open=f.dataset.open==='true';
    $$('.fq').forEach(function(x){x.dataset.open='false';$('button',x).setAttribute('aria-expanded','false')});
    f.dataset.open=open?'false':'true';
    btn.setAttribute('aria-expanded',open?'false':'true');
  });
});

/* ── 11 · Formular ─────────────────────────────────────── */
/* Die Lieferung tat hier nur so: 780 Millisekunden „Sending…“, dann
   „Danke — ich melde mich“ — und abgeschickt wurde nichts. Wer das
   Formular ausfüllte, ging davon aus, Kontakt aufgenommen zu haben. Das
   ist die unangenehmste Art von Fehler, weil sie niemandem auffällt.

   Es gibt keinen Server, der Anfragen entgegennimmt, und das soll auch so
   bleiben: kein Postfach in fremder Hand, keine Auftragsverarbeitung, kein
   Speicherort für fremde Daten. Also übernimmt das Mailprogramm den
   Versand — mit vorbereitetem Betreff und Text. Die Meldung sagt
   ausdrücklich, dass der Versand erst dort stattfindet. */
var fn=$('#cname'),fe=$('#cmail'),fm=$('#cmsg'),fb=$('#csend'),fs=$('#csent'),form=$('#cform'),
    fhp=form&&form.querySelector('[name="_gotcha"]'),
    ferr=$('#cerr');

function de(){return document.documentElement.lang==='de'}
function t(d,e){return de()?d:e}

/* Absichtlich grosszügig: eine Adresse formal abzulehnen, die ein Postfach
   tatsächlich annimmt, ist schlimmer als eine Zustellung, die scheitert. */
function mailOk(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())}

function fnote(msg,bad){
  if(!ferr)return;
  ferr.textContent=msg||'';
  ferr.classList.toggle('on',!!msg);
  ferr.classList.toggle('bad',!!bad);
}

function chk(){
  var ok=fn.value.trim()&&mailOk(fe.value);
  fb.disabled=!ok;fb.classList.toggle('on',!!ok);
}
/* Nur Name und E-Mail räumen den Hinweis weg. Tippte man ihn auch beim
   Nachrichtenfeld frei, verschwände die Meldung „Adresse unvollständig“,
   sobald jemand weiterschreibt — ohne dass die Adresse besser geworden
   wäre. */
[fn,fe].forEach(function(el){if(el)el.addEventListener('input',function(){fnote('');chk()})});
if(fm)fm.addEventListener('input',chk);
fe.addEventListener('blur',function(){
  if(fe.value.trim()&&!mailOk(fe.value))
    fnote(t('Diese E-Mail-Adresse sieht unvollständig aus.','That email address looks incomplete.'),true);
});

form.addEventListener('submit',function(e){
  e.preventDefault();

  // Honigtopf: das Feld ist für Menschen unsichtbar und nicht erreichbar.
  // Ist es ausgefüllt, war ein Skript am Werk — dann passiert nichts.
  if(fhp&&fhp.value){return}

  if(!fn.value.trim()){fnote(t('Bitte den Namen eintragen.','Please enter your name.'),true);fn.focus();return}
  if(!mailOk(fe.value)){fnote(t('Bitte eine gültige E-Mail-Adresse eintragen.','Please enter a valid email address.'),true);fe.focus();return}

  var name=fn.value.trim(),mail=fe.value.trim(),text=(fm&&fm.value.trim())||'';
  var subject=t('Anfrage über izu-re.com','Enquiry via izu-re.com')+' — '+name;
  var body=text+'\n\n—\n'+name+'\n'+mail;
  var href='mailto:info@izu-re.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);

  fb.textContent=t('Öffne Mailprogramm …','Opening mail app …');
  fb.disabled=true;fb.classList.remove('on');

  // location.href statt window.open: ein Popup-Blocker würde den zweiten
  // Weg stillschweigend verschlucken, und dann stünde der Absender vor
  // einem Formular, das nichts tut — genau der alte Fehler.
  try{location.href=href}catch(err){}

  setTimeout(function(){
    fb.textContent=t('Absenden','Submit');
    fs.classList.add('on');
    fnote('');
    /* Kein form.reset(): öffnet sich das Mailprogramm nicht — kein
       Standardprogramm gesetzt, Aufruf im Browser blockiert —, wäre der
       geschriebene Text sonst weg. Stehen lassen kostet nichts; löschen
       kostet im Zweifel die Nachricht. */
    chk();
    setTimeout(function(){fs.classList.remove('on')},9000);
  },700);
});

chk();

})();

