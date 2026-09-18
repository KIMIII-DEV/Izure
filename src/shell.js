/* ═══ v3 Shell · Prüfung, Sprache, Recht, Cookies, Layer-Wechsel ═══ */
(function(){
'use strict';

/* ── Konfiguration ───────────────────────────────────────────────
   Kein Zugangscode mehr an dieser Stelle. In der Lieferung stand er als
   Klartext im Skript ('428173') — jeder Besucher konnte ihn im Quelltext
   lesen. Die Prüfung läuft jetzt im Worker gegen ein TOTP-Secret, das das
   Gerät nie verlässt (siehe gate.js).

   Den Turnstile-Sitekey liefert der Worker über /api/config, damit er
   nicht im Repo steht und ohne Rebuild wechseln kann. Ist er dort nicht
   hinterlegt, greift die lokale Ersatzprüfung — eine Seite, die echte
   Besucher aussperrt, wäre der schlechtere Fehler. */
var CFG={
  turnstileSiteKey:'',
  verifyEndpoint:'/api/human',
  humanTtlHours:24,
  cookieBanner:true
};
function unset(v){return !v||v.indexOf('{{')===0}

var $=function(s,r){return (r||document).querySelector(s)},
    $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))},
    html=document.documentElement,
    body=document.body,
    LS={
      get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},
      set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}
    };

/* ── 1 · Sprache ─────────────────────────────────────────────── */
var DE={
'nav.work':'Arbeiten','nav.service':'Leistungen','nav.award':'Auszeichnungen','nav.about':'Über mich','nav.contact':'Kontakt','nav.resume':'Lebenslauf',
'a11y.avatar':'Private Layer öffnen','a11y.menu':'Menü','a11y.lang':'Sprache',
'hero.avail':'Offen für Projekte','hero.h1a':'Hi, ich bin Maurice,','hero.lead':'und helfe deiner Marke, tragfähige Verbindungen zu ihrem Publikum aufzubauen.','hero.cta':'Projekt anfragen',
'disc.strategy':'Markenstrategie','disc.graphic':'Grafikdesign','disc.copy':'Text',
'work.h2':'Ausgewählte Arbeiten','work.n':'03 PROJEKTE',
'work.1':'Verträumte florale Bildwelten in weichen Tönen — Markenstrategie und poetisches Storytelling, die echte Nähe erzeugen.',
'work.2':'Blumen, neu gedacht in radikalem Schwarzweiß. Grafische Klarheit, die sofort hängen bleibt.',
'work.3':'Grafikdesign für verspielte Tierillustrationen: Wildtiere werden zu digitalen Bildern, in denen Farben traumhaft ineinanderlaufen.',
'svc.h2':'Was ich mache',
'svc.s1':'Markenstimme definieren','svc.s2':'Markengeschichte formen','svc.s3':'Customer Journey ausrichten',
'svc.g1':'Logo & visuelle Identität','svc.g2':'Markenmaterialien','svc.g3':'Social-Media-Assets','svc.g4':'Website-UI-Elemente','svc.g5':'Produktverpackung',
'svc.c1':'Kerntexte der Marke','svc.c2':'Marketingtexte','svc.c3':'Websitetexte','svc.c4':'Produktbeschreibungen',
'aw.h2':'Auszeichnungen &<br>Anerkennung',
'brands.h':'Gearbeitet mit & daneben',
'about.h2':'Über mich','about.sub':'Maurice möchte ein Foto zeigen','about.note':'Du liebst gutes Design oder guten Kaffee? Sprechen wir über das nächste Kapitel deiner Marke.','about.call':'Termin buchen',
'tst.h2':'Stimmen von<br>Mitwirkenden','tst.n':'04 STIMMEN',
'faq.h2':'Häufige Fragen','faq.n':'05 ANTWORTEN',
'faq.q1':'Welche Leistungen bietest du an?','faq.a1':'Markenstrategie, Grafikdesign, visuelles Storytelling, Text sowie eigene Foto- und Videoinhalte — durchgehend aufeinander abgestimmt.',
'faq.q2':'Wie kalkulierst du Projekte?','faq.a2':'Jedes Projekt wird einzeln eingeschätzt. Nach einem kurzen Erstgespräch nenne ich einen Festpreis.',
'faq.q3':'Wie lange dauert ein Projekt üblicherweise?','faq.a3':'Die meisten Markenprojekte laufen vier bis acht Wochen, abhängig von Umfang und Abstimmungsrunden.',
'faq.q4':'Bist du offen für Festanstellung, Teilzeit, Freelance oder remote?','faq.a4':'Ja, alle vier — solange Marke und Aufgabe passen.',
'faq.q5':'Wärst du für eine Festanstellung umzugsbereit?','faq.a5':'Für die richtige Stelle ja. Sprechen wir über die Details.',
'ct.h2':'Machen wir aus deinem „Was wäre wenn“<br>ein „Machen wir“.',
'ct.name':'Name*','ct.mail':'E-Mail*','ct.msg':'Nachricht','ct.send':'Absenden','ct.sent':'Dein Mailprogramm ist offen — dort auf Senden drücken.','ct.note':'„Absenden“ öffnet dein Mailprogramm mit fertiger Nachricht. Auf dieser Seite wird nichts gespeichert.',
'ct.namePh':'Jana Schmidt','ct.mailPh':'jana@beispiel.de','ct.msgPh':'Fragen an mich? Schreib einfach.',
'ft.cookies':'Cookie-Einstellungen','ft.privacy':'Datenschutz','ft.terms':'Nutzungsbedingungen','ft.imprint':'Impressum','ft.bug':'Fehler melden','ft.rights':'Alle Rechte vorbehalten.',
'hc.h':'Kurze Prüfung, ob du ein Mensch bist','hc.p':'Eine schnelle Bestätigung, dann öffnet sich die Seite. Gespeichert wird nur ein lokaler Zeitstempel.','hc.fine':'Geschützt durch Cloudflare Turnstile.','hc.btn':'Ich bin ein Mensch','hc.ok':'Bestätigt','hc.wait':'Prüfung läuft…',
'gate.h':'Private Layer','gate.p':'Sechsstelligen Zugangscode eingeben.','gate.err':'Der Code stimmt nicht. Noch einmal.','gate.go':'Entsperren',
'ck.h':'Kurz zu deinen Daten','ck.p':'Diese Seite nutzt keine Werbe- oder Trackingcookies. Nur lokale Einstellungen — Sprache, Prüfung, Layer-Zustand. <a href="#privacy">Zur Datenschutzerklärung</a>.','ck.link':'Zur Datenschutzerklärung','ck.ok':'Verstanden','ck.no':'Nur Notwendiges',
'meta.title':'Maurice Risch — Markenstrategie, Grafikdesign, Text','meta.desc':'Maurice Risch gestaltet Marken: Strategie, visuelle Identität und Text. Ausgewählte Arbeiten, Auszeichnungen und Kontakt.'
};
var ROLE={en:['brand strategist','graphic designer','copywriter','visual storyteller'],de:['Markenstrateg','Grafikdesigner','Texter','visueller Erzähler']};
var EN={},btn=$$('.langsw button'),lang='en';
window.MRROLES=function(){return ROLE[lang]||ROLE.en};

function capture(){
  $$('[data-i18n]').forEach(function(el){EN[el.dataset.i18n]=el.innerHTML});
  $$('[data-i18n-ph]').forEach(function(el){EN[el.dataset.i18nPh]=el.placeholder});
  $$('[data-i18n-aria]').forEach(function(el){EN[el.dataset.i18nAria]=el.getAttribute('aria-label')});
  EN['meta.title']=document.title;
  var m=$('meta[name="description"]');EN['meta.desc']=m?m.content:'';
}
function setLang(l,save){
  lang=l==='de'?'de':'en';
  var d=lang==='de'?DE:EN;
  $$('[data-i18n]').forEach(function(el){var v=d[el.dataset.i18n];if(v!=null)el.innerHTML=v});
  $$('[data-i18n-ph]').forEach(function(el){var v=d[el.dataset.i18nPh];if(v!=null)el.placeholder=v});
  $$('[data-i18n-aria]').forEach(function(el){var v=d[el.dataset.i18nAria];if(v!=null)el.setAttribute('aria-label',v)});
  if(d['meta.title'])document.title=d['meta.title'];
  var m=$('meta[name="description"]');if(m&&d['meta.desc'])m.content=d['meta.desc'];
  html.lang=lang;
  btn.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===lang?'true':'false')});
  if(save)LS.set('mr.lang',lang);
  if(window.MRLINES)window.MRLINES();
  document.dispatchEvent(new CustomEvent('mr:lang',{detail:lang}));
}
capture();
btn.forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang,true)})});
var saved=LS.get('mr.lang');
setLang(saved||((navigator.language||'en').toLowerCase().indexOf('de')===0?'de':'en'),!!saved);

/* ── 2 · Marken ──────────────────────────────────────────────── */
var BRANDS=['Deutsche Telekom','T-Mobile','congstar','T-Systems','Microsoft','SAP','Amazon Web Services','Google Cloud','Cisco','Pega','Netflix','Disney+','Spotify','GlasfaserPlus','Glasfaser Nordwest','Apple','Samsung','Xiaomi','Nothing'];
var bt=$('#bmqt');
if(bt){
  var bh='';
  for(var pass=0;pass<2;pass++)for(var i=0;i<BRANDS.length;i++)bh+='<div class="b"><em>'+BRANDS[i]+'</em></div>';
  bt.innerHTML=bh;
  bt.setAttribute('aria-hidden','true');
}

/* ── 3 · Menschlichkeitsprüfung ──────────────────────────────── */
var hc=$('#hcheck'),slot=$('#ts-slot'),BOT=/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|pinterest|vkshare|whatsapp|telegram|lighthouse|headless/i;
function verified(){
  var t=parseInt(LS.get('mr.human')||'0',10);
  return t&&(Date.now()-t)<CFG.humanTtlHours*36e5;
}
function passHuman(){
  LS.set('mr.human',String(Date.now()));
  body.classList.remove('hc-on');
  hc.classList.add('out');
  setTimeout(function(){hc.hidden=true},520);
}
function localChallenge(){
  slot.innerHTML='<div class="fb"><button class="hcbtn" type="button" id="hcgo"></button></div>';
  var g=$('#hcgo'),t0=Date.now(),moved=false;
  g.textContent=(lang==='de'?DE['hc.btn']:'I am human');
  addEventListener('pointermove',function(){moved=true},{once:true,passive:true});
  g.addEventListener('click',function(){
    g.disabled=true;
    g.textContent=(lang==='de'?DE['hc.wait']:'Verifying…');
    var human=(Date.now()-t0)>260||moved;
    setTimeout(function(){
      if(!human){g.disabled=false;g.textContent=(lang==='de'?DE['hc.btn']:'I am human');return}
      slot.innerHTML='<span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'+(lang==='de'?DE['hc.ok']:'Verified')+'</span>';
      setTimeout(passHuman,420);
    },520);
  });
}
function turnstile(){
  window.mrTsOk=function(token){
    if(unset(CFG.verifyEndpoint)){passHuman();return}
    fetch(CFG.verifyEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(function(r){return r.json()})
      .then(function(d){(d&&(d.success||d.ok))?passHuman():localChallenge()})
      .catch(localChallenge);
  };
  var s=document.createElement('script');
  s.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  s.async=true;s.defer=true;
  s.onload=function(){
    slot.innerHTML='<div id="ts-box"></div>';
    window.turnstile.render('#ts-box',{sitekey:CFG.turnstileSiteKey,theme:'light',callback:window.mrTsOk,'error-callback':localChallenge,'timeout-callback':localChallenge});
  };
  s.onerror=localChallenge;
  document.head.appendChild(s);
}
if(!hc){/* nichts */}
else if(BOT.test(navigator.userAgent||'')||verified()){hc.hidden=true}
else{
  body.classList.add('hc-on');
  // Erst fragen, ob Turnstile eingerichtet ist. Ohne das Warten würde
  // immer die Ersatzprüfung anspringen, weil die Antwort später kommt.
  fetch('/api/config',{credentials:'same-origin'})
    .then(function(r){return r.ok?r.json():null})
    .then(function(c){
      if(c&&c.turnstileSiteKey){CFG.turnstileSiteKey=c.turnstileSiteKey;turnstile()}
      else localChallenge();
    })
    .catch(localChallenge);
}

/* ── 4 · Rechtstexte als Ansichten ───────────────────────────── */
var LGL=['privacy','terms','imprint'];
function route(){
  var h=(location.hash||'').replace('#',''),on=LGL.indexOf(h)>-1;
  LGL.forEach(function(id){var s=$('#'+id);if(s)s.hidden=(id!==h)});
  body.classList.toggle('lgl-on',on);
  if(on){window.scrollTo(0,0);var t=$('#'+h+' h1');if(t){t.setAttribute('tabindex','-1');t.focus({preventScroll:true})}}
}
addEventListener('hashchange',route);
if(LGL.indexOf((location.hash||'').replace('#',''))>-1)route();
$$('.lglx').forEach(function(b){b.addEventListener('click',function(){
  if(history.length>1&&LGL.indexOf((location.hash||'').replace('#',''))>-1){location.hash='';body.classList.remove('lgl-on');LGL.forEach(function(id){var s=$('#'+id);if(s)s.hidden=true});window.scrollTo(0,0)}
  else location.hash='';
})});

/* ── 5 · Einwilligungsbanner ───────────────────────────────────
   Die Entscheidung liegt in einem echten Cookie, nicht im localStorage.
   Grund: sie muss den Server erreichen. Nur so kann der Worker vor dem
   Ausliefern entscheiden, ob eine Reichweitenmessung überhaupt mitgegeben
   wird — localStorage sieht er nie.

   „Ablehnen“ steht gleichwertig neben „Zustimmen“, ohne Vorauswahl. Das
   Cookie selbst ist technisch notwendig (§ 25 Abs. 2 Nr. 2 TDDDG): es
   speichert genau die Entscheidung, die das Gesetz verlangt.

   Kein HttpOnly — anders als beim Sitzungs-Cookie muss JavaScript diesen
   Wert lesen können, um zu entscheiden, ob ein Analytics-Skript geladen
   wird. Ein Einwilligungsstand ist kein Geheimnis. */
var CK_NAME='izure_consent',CK_DAYS=182;

function cookieGet(name){
  var m=document.cookie.match(new RegExp('(?:^|; )'+name+'=([^;]*)'));
  return m?decodeURIComponent(m[1]):null;
}
function cookieSet(name,value,days){
  var d=new Date(Date.now()+days*864e5);
  // `secure` nur über https — sonst lehnt der Browser das Cookie auf
  // http://localhost ab und der Banner käme bei jedem Aufruf wieder.
  document.cookie=name+'='+encodeURIComponent(value)
    +'; Path=/; Max-Age='+Math.floor(days*86400)
    +'; Expires='+d.toUTCString()
    +'; SameSite=Lax'
    +(location.protocol==='https:'?'; Secure':'');
}
function cookieDel(name){
  document.cookie=name+'=; Path=/; Max-Age=0; SameSite=Lax'
    +(location.protocol==='https:'?'; Secure':'');
}

var ANALYTICS={src:'',attrs:{}};   /* z. B. Plausible — bleibt leer, bis eingerichtet */
var analyticsOn=false;
function loadAnalytics(){
  if(analyticsOn||!ANALYTICS.src)return;
  analyticsOn=true;
  var s=document.createElement('script');
  s.async=true;s.defer=true;s.src=ANALYTICS.src;
  Object.keys(ANALYTICS.attrs).forEach(function(k){s.setAttribute(k,ANALYTICS.attrs[k])});
  document.head.appendChild(s);
}

var ck=$('#cookie');
function ckShow(){
  if(!ck)return;
  ck.hidden=false;
  requestAnimationFrame(function(){ck.classList.add('in')});
}
function ckHide(){
  if(!ck)return;
  ck.classList.remove('in');
  setTimeout(function(){ck.hidden=true},420);
}
function ckDecide(v){
  cookieSet(CK_NAME,v,CK_DAYS);
  // Spiegel im localStorage, damit ein Besucher mit blockierten Cookies
  // den Banner trotzdem nicht bei jedem Klick erneut sieht.
  LS.set('mr.consent',v);
  if(v==='all')loadAnalytics();
  document.dispatchEvent(new CustomEvent('mr:consent',{detail:v}));
}

if(ck&&CFG.cookieBanner){
  var decided=cookieGet(CK_NAME)||LS.get('mr.consent');
  if(decided==='all')loadAnalytics();
  else if(!decided)setTimeout(ckShow,900);

  $$('button',ck).forEach(function(b){b.addEventListener('click',function(){
    ckDecide(b.dataset.ck);
    ckHide();
  })});
}

/* Widerruf: der Fussnoten-Link öffnet den Banner erneut und löscht die
   bisherige Entscheidung, damit wirklich neu gewählt wird. */
$$('[data-ck-open]').forEach(function(b){b.addEventListener('click',function(e){
  e.preventDefault();
  cookieDel(CK_NAME);
  LS.set('mr.consent','');
  if(ck&&ck.hidden)ckShow();
})});

window.MRCONSENT={get:function(){return cookieGet(CK_NAME)},set:ckDecide,clear:function(){cookieDel(CK_NAME);LS.set('mr.consent','')}};

/* ── 6 · Jahr ────────────────────────────────────────────────── */
var yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();

/* ── 7 · Layer-Wechsel ─────────────────────────────────────────
   In der Lieferung war der Private Layer ein Overlay in derselben Datei:
   MROPEN() hat nur eine CSS-Klasse gesetzt. Damit stand der komplette
   private Bereich — Lernkarten, Graph, Notizen — im Quelltext jeder
   öffentlichen Seite, auch ohne Login.

   Jetzt ist er ein eigenes Dokument unter /private/, das der Worker nur
   mit gültiger Sitzung ausliefert. Der Wechsel ist deshalb eine echte
   Navigation. */
window.MROPEN=function(){location.href='/private/'};
window.MRCFG=CFG;

/* Sitekey nachladen. Schlägt das fehl, bleibt es bei der lokalen
   Ersatzprüfung — die Seite funktioniert in jedem Fall. */
fetch('/api/config',{credentials:'same-origin'})
  .then(function(r){return r.ok?r.json():null})
  .then(function(c){if(c&&c.turnstileSiteKey)CFG.turnstileSiteKey=c.turnstileSiteKey})
  .catch(function(){});
})();
