/* ── private/v2.js ── */
/* Privat Layer v2 · Punchy-Chat, Wetter-Fläche, Nachrichten-Fläche */
window.V2=(function(){
var $=function(s,r){return (r||document).querySelector(s)},
    $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))},
    esc=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')},
    p2=function(n){return n<10?'0'+n:''+n};

/* ══════════ PUNCHY ══════════ */
var CONV=[
{t:'Was fehlt bis zur Prüfung?',when:'vor 12 Minuten',msgs:[
 {r:'me',x:'Was fehlt mir eigentlich noch bis zur Prüfung?'},
 {r:'ai',x:'Drei Dinge, in dieser Reihenfolge: Lernfeld 03 hat 24 Karten ohne einzige Wiederholung, Lernfeld 04 steht bei 41 Prozent, und die Klausursimulation hast du noch nie zu Ende gemacht. Der Termin steht im Graph, ich habe ihn nicht erfunden.',src:[['Prüfung IHK','pruefung-ihk'],['Lernfeld 03','lernfeld-03'],['Aufgabe LF03','aufgabe-lf03']]},
 {r:'me',x:'Und wenn ich nur eine Stunde am Tag habe?'},
 {r:'ai',x:'Dann 25 Minuten Karten, 5 Minuten Pause, 25 Minuten Quiz. Nicht weil die Zahl heilig ist, sondern weil du bei 90-Minuten-Blöcken nach 40 Minuten anfängst, dein Handy zu putzen.',src:[['Pomodoro','pomodoro'],['Spaced Repetition','spaced-repetition']]}]},
{t:'Lerne ich morgens oder nachts besser?',when:'gestern',msgs:[
 {r:'me',x:'Ich lerne doch nachts besser, oder?'},
 {r:'ai',x:'Deine Notizen sagen zwei verschiedene Dinge, und ich habe beide stehen gelassen. „Nachtlernen" behauptest du seit August, „Schlafrhythmus früh" seit Februar. Ich führe das als Konflikt, nicht als Wahrheit — löse ihn du, ich bin nur der Buchhalter.',src:[['Nachtlernen','nachtlernen'],['Schlafrhythmus','schlafrhythmus'],['Fokus morgens','fokus-morgens']]}]},
{t:'Fasse Lernfeld 03 zusammen',when:'gestern',msgs:[
 {r:'me',x:'Fasse mir Lernfeld 03 in drei Sätzen zusammen.'},
 {r:'ai',x:'Kommunikation ist Kanal, Absicht und Störung — wer das trennt, hat die halbe Klausur. Die Modelle sind Werkzeuge, keine Glaubensfragen: nimm das, das den Fall erklärt. Und alles, was du „selbstverständlich" findest, wird gefragt.',src:[['Lernfeld 03','lernfeld-03'],['Lernen','lernen']]}]},
{t:'Woher weißt du das über mich?',when:'vor 3 Tagen',msgs:[
 {r:'me',x:'Woher weißt du eigentlich, dass mich Krafttraining interessiert?'},
 {r:'ai',x:'Aus dir. Der Node ist eine Erinnerung mit 85 Prozent Confidence, Quelle: du selbst, Februar. Das Interessenprofil darüber ist meine Ableitung — 61 Prozent, also mit Vorbehalt. Ich markiere Vermutungen als Vermutungen.',src:[['Krafttraining','krafttraining'],['Interessenprofil','interessenprofil']]}]},
{t:'Portfolio-Relaunch · Stand',when:'letzte Woche',msgs:[
 {r:'me',x:'Wie weit ist der Portfolio-Relaunch?'},
 {r:'ai',x:'Der Node wurde vor vier Tagen zuletzt angefasst, und zwar von dir, nicht von mir. Public Layer steht, Privat Layer ist die Baustelle. Was noch fehlt, steht in dem Projekt-Node — ich habe nichts hinzugefügt, was du nicht geschrieben hast.',src:[['Portfolio-Relaunch','portfolio-relaunch'],['IZURÉ','izure']]}]}];

var SUGG=[
['Was steht heute an?','Termine, offene Karten, Wetter — kurz.'],
['Prüf meinen Graph auf Widersprüche','Zeigt Konflikt-Nodes mit Begründung.'],
['Erklär mir Spaced Repetition','Ohne Vortrag, mit Beispiel aus deinen Karten.'],
['Mach einen Lernplan für diese Woche','Vier Tage, jeweils eine Stunde.']];

var ANS=[
 {k:/graph|node|wissen|widersprüch|konflikt/i,x:'Im Graph liegen gerade zwei Konflikt-Nodes und drei Ableitungen unter 65 Prozent Confidence. Ich löse sie nicht selbst auf — ich markiere sie und warte, bis du dich entscheidest.',s:[['Nachtlernen','nachtlernen'],['Interessenprofil','interessenprofil']]},
 {k:/lern|karte|quiz|klausur|lernfeld/i,x:'Lernfeld 03 ist der Engpass: 24 Karten ohne Wiederholung. Fang damit an, nicht mit dem Feld, das dir Spaß macht — das ist schon bei 78 Prozent.',s:[['Lernfeld 03','lernfeld-03'],['Spaced Repetition','spaced-repetition']]},
 {k:/prüfung|termin|deadline|wann/i,x:'Der Prüfungstermin steht im Graph als Fakt mit 95 Prozent Confidence. Ich zähle die Tage runter, du füllst sie.',s:[['Prüfung IHK','pruefung-ihk']]},
 {k:/wetter|regen|draußen|temperatur/i,x:'19 Grad, wechselnd bewölkt, 25 Prozent Regenwahrscheinlichkeit. Also: Jacke mitnehmen und trotzdem rausgehen.',s:[['Hamburg','hamburg']]},
 {k:/fokus|pomodoro|müde|konzentr/i,x:'25 und 5, und zwar mit Timer, nicht mit Gefühl. Dein Fokus-Node sagt, dass du zwischen 9 und 12 am schärfsten bist — das ist eine Ableitung aus deinem Verhalten, keine Selbstauskunft.',s:[['Pomodoro','pomodoro'],['Fokus morgens','fokus-morgens']]},
 {k:/heute|plan|woche|anstehen/i,x:'Heute: 24 Karten in Lernfeld 03, danach ein Quizdurchlauf. Sonst nichts. Ein voller Plan, den du nicht schaffst, ist kein Plan, sondern eine Ausrede mit Struktur.',s:[['Aufgabe LF03','aufgabe-lf03'],['Prüfung IHK','pruefung-ihk']]}];
var FALL='Dazu habe ich nichts im Graph, und ich erfinde nichts — das ist der ganze Punkt an mir. Frag mich nach Lernen, dem Prüfungstermin, deinen Nodes oder dem Wetter, da bin ich belegbar.';

var P={cur:0,busy:false,live:[]},pel={},pMounted=false;

function mountP(){
  if(pMounted)return;pMounted=true;
  pel.list=$('#pList');pel.thread=$('#pThread');pel.input=$('#pInput');
  pel.voice=$('#pVoice');pel.said=$('#pSaid');pel.sub=$('#psub');
  pel.list.innerHTML=CONV.map(function(c,i){
    return '<button class="pitem'+(i===0?' on':'')+'" data-c="'+i+'"><b>'+esc(c.t)+'</b><span>'+esc(c.when)+'</span></button>';
  }).join('');
  pel.list.addEventListener('click',function(e){
    var b=e.target.closest('[data-c]');if(!b)return;
    P.cur=+b.dataset.c;P.live=CONV[P.cur].msgs.slice();
    $$('.pitem',pel.list).forEach(function(x){x.classList.toggle('on',x===b)});
    paintThread();
  });
  $('#pNew').addEventListener('click',function(){
    P.cur=-1;P.live=[];
    $$('.pitem',pel.list).forEach(function(x){x.classList.remove('on')});
    paintThread();pel.input.focus();
  });
  $('#pSend').addEventListener('click',submit);
  pel.input.addEventListener('keydown',function(e){if(e.key==='Enter')submit()});
  $('#pMic').addEventListener('click',voiceOn);
  $('#pStop').addEventListener('click',voiceOff);
  pel.thread.addEventListener('click',function(e){
    var s=e.target.closest('[data-node]');if(!s)return;
    window.goView('marco');
    if(window.MARCOVIEW&&window.MARCOVIEW.select)setTimeout(function(){window.MARCOVIEW.select(s.dataset.node)},260);
  });
  P.live=CONV[0].msgs.slice();
  paintThread();
}

function bubble(m){
  return '<div class="msg '+(m.r==='me'?'me':'ai')+'">'+
   (m.r==='ai'?'<span class="who"><i></i>Punchy</span>':'')+
   '<div class="bb">'+esc(m.x)+'</div>'+
   (m.src&&m.src.length?'<div class="srcs">'+m.src.map(function(s){
     return '<button data-node="'+esc(s[1])+'" title="Im Wissensgraph öffnen"><i></i>'+esc(s[0])+'</button>';
   }).join('')+'</div>':'')+'</div>';
}
function paintThread(){
  if(!P.live.length){
    pel.thread.innerHTML='<div class="pempty"><span class="orb"></span>'+
     '<h2>Was machen wir heute, Maurice?</h2>'+
     '<p>Ich kenne deine Nodes, deine Lernfelder und den Prüfungstermin. Erfinden tue ich nichts.</p>'+
     '<div class="pcards">'+SUGG.map(function(s){
       return '<button data-ask="'+esc(s[0])+'"><b>'+esc(s[0])+'</b><span>'+esc(s[1])+'</span></button>';
     }).join('')+'</div></div>';
    pel.thread.querySelectorAll('[data-ask]').forEach(function(b){
      b.addEventListener('click',function(){pel.input.value=b.dataset.ask;submit()});
    });
    if(pel.sub)pel.sub.textContent='Neue Unterhaltung · lokal, nichts verlässt das Gerät.';
    return;
  }
  pel.thread.innerHTML=P.live.map(bubble).join('');
  if(pel.sub)pel.sub.textContent=(P.cur>=0?CONV[P.cur].t:'Neue Unterhaltung')+' · '+P.live.length+' Nachrichten';
  pel.thread.scrollTop=pel.thread.scrollHeight;
}
function answerFor(q){
  for(var i=0;i<ANS.length;i++)if(ANS[i].k.test(q))return ANS[i];
  return {x:FALL,s:[]};
}
function submit(){
  var q=(pel.input.value||'').trim();
  if(!q||P.busy)return;
  pel.input.value='';P.busy=true;
  P.live.push({r:'me',x:q});paintThread();
  var t=document.createElement('div');
  t.className='msg ai';t.innerHTML='<span class="who"><i></i>Punchy</span><div class="ptype"><i></i><i></i><i></i></div>';
  pel.thread.appendChild(t);pel.thread.scrollTop=pel.thread.scrollHeight;
  var a=answerFor(q);
  setTimeout(function(){
    t.remove();
    P.live.push({r:'ai',x:'',src:a.s});
    paintThread();
    stream(a.x);
  },620);
}
function stream(text){
  var words=text.split(' '),i=0,m=P.live[P.live.length-1],
      box=pel.thread.querySelector('.msg:last-child .bb'),
      srcs=pel.thread.querySelector('.msg:last-child .srcs');
  if(srcs)srcs.style.opacity='0';
  (function step(){
    m.x=words.slice(0,++i).join(' ');
    if(box)box.textContent=m.x;
    pel.thread.scrollTop=pel.thread.scrollHeight;
    if(i<words.length)setTimeout(step,22+Math.random()*26);
    else{
      P.busy=false;
      if(srcs){srcs.style.transition='opacity .22s ease';srcs.style.opacity='1'}
    }
  })();
}
/* Sprachzustand */
var vTimer=null,VQ='Punchy, was fehlt mir noch bis zur Prüfung?';
function voiceOn(){
  pel.voice.classList.add('on');
  var i=0;pel.said.innerHTML='';
  vTimer=setInterval(function(){
    i+=1+Math.floor(Math.random()*2);
    if(i>=VQ.length){clearInterval(vTimer);vTimer=null;i=VQ.length}
    pel.said.innerHTML=esc(VQ.slice(0,i))+'<em>'+esc(VQ.slice(i))+'</em>';
  },58);
}
function voiceOff(){
  if(vTimer){clearInterval(vTimer);vTimer=null}
  pel.voice.classList.remove('on');
  var said=(pel.said.textContent||'').trim();
  if(said.length>6){pel.input.value=said;setTimeout(submit,180)}
}

/* ══════════ WETTER ══════════ */
/* Die Lieferung trug hier feste Zahlen ein — „21°, Wind 17 km/h, Schauer
   ab 16 Uhr“. Als Gestaltungsmuster in Ordnung, im Betrieb aber eine
   Behauptung: die Karte sagt „jetzt“ und zeigt etwas Erfundenes.

   Jetzt kommen die Werte über /api/weather vom Worker (Open-Meteo, ohne
   Schlüssel, serverseitig geholt — im Browser also keine Fremdanfrage).
   Erreicht der Abruf nichts, sagt die Karte das, statt alte Zahlen
   stehen zu lassen. */
var WH=[],WD=[],WT=[],WNOW=null;

var WMO={0:['sun','Klar'],1:['sun','Überwiegend klar'],2:['cloud','Wechselnd bewölkt'],3:['cloud','Bedeckt'],
45:['cloud','Nebel'],48:['cloud','Reifnebel'],51:['rain','Leichter Niesel'],53:['rain','Niesel'],55:['rain','Dichter Niesel'],
56:['rain','Gefrierender Niesel'],57:['rain','Gefrierender Niesel'],61:['rain','Leichter Regen'],63:['rain','Regen'],
65:['rain','Starker Regen'],66:['rain','Gefrierender Regen'],67:['rain','Gefrierender Regen'],71:['cloud','Leichter Schnee'],
73:['cloud','Schnee'],75:['cloud','Starker Schnee'],77:['cloud','Schneegriesel'],80:['rain','Regenschauer'],
81:['rain','Regenschauer'],82:['rain','Kräftige Schauer'],85:['cloud','Schneeschauer'],86:['cloud','Schneeschauer'],
95:['rain','Gewitter'],96:['rain','Gewitter mit Hagel'],99:['rain','Gewitter mit Hagel']};
function wmo(c){return WMO[c]||['cloud','—']}
var WDAY=['So','Mo','Di','Mi','Do','Fr','Sa'];

function wFill(d){
  var cur=d.current||{},hr=d.hourly||{},dy=d.daily||{};
  var times=hr.time||[],nowIso=(cur.time||'').slice(0,13),from=0;
  for(var i=0;i<times.length;i++){if(times[i].slice(0,13)>=nowIso){from=i;break}}
  WH=[];
  for(var h=Math.max(0,from-1);h<Math.min(from+11,times.length);h++)
    WH.push([parseInt(times[h].slice(11,13),10),Math.round(hr.temperature_2m[h]),wmo(hr.weather_code[h])[0]]);

  WD=[];
  var dt=dy.time||[];
  for(var n=0;n<Math.min(7,dt.length);n++)
    WD.push([n===0?'Heute':WDAY[new Date(dt[n]+'T12:00:00').getDay()],
             Math.round(dy.temperature_2m_max[n]),Math.round(dy.temperature_2m_min[n]),
             wmo(dy.weather_code[n])[0]]);

  var rain=dy.precipitation_probability_max?Math.round(dy.precipitation_probability_max[0]):0;
  var uv=dy.uv_index_max?Math.round(dy.uv_index_max[0]):0;

  /* Der Jetzt-Block stand im Design fest im Markup: „19°, wechselnd
     bewölkt, Schauer ab 16 Uhr, Sonnenuntergang 20:14“. Hübsch, aber
     erfunden — und gerade dieser Block behauptet „jetzt“. Ab hier kommt
     jede Zahl aus der Antwort. */
  var hint='';
  var pp=hr.precipitation_probability||[];
  for(var r=from;r<Math.min(from+12,times.length);r++){
    if(pp[r]>=50){
      var hh=parseInt(times[r].slice(11,13),10);
      hint=(r===from?'Regen wahrscheinlich':'Regen ab '+p2(hh)+' Uhr');
      break;
    }
  }
  if(!hint)hint='Kein nennenswerter Regen in den nächsten Stunden';

  WNOW={
    deg:Math.round(cur.temperature_2m)+'°',
    cond:wmo(cur.weather_code)[1],
    feels:'Gefühlt '+Math.round(cur.apparent_temperature)+'° · '+hint,
    max:dy.temperature_2m_max?Math.round(dy.temperature_2m_max[0])+'°':'—',
    min:dy.temperature_2m_min?Math.round(dy.temperature_2m_min[0])+'°':'—',
    sunset:dy.sunset&&dy.sunset[0]?String(dy.sunset[0]).slice(11,16):'—'
  };
  WT=[['Wind',String(Math.round(cur.wind_speed_10m)),'km/h',wmo(cur.weather_code)[1],Math.min(1,cur.wind_speed_10m/60)],
      ['Luftfeuchte',String(Math.round(cur.relative_humidity_2m)),'%','Gefühlt '+Math.round(cur.apparent_temperature)+'°',cur.relative_humidity_2m/100],
      ['Regen',String(rain),'%','Höchstwahrscheinlichkeit heute',rain/100],
      ['UV-Index',String(uv),'',uv>=6?'Hoch':uv>=3?'Mäßig':'Niedrig',Math.min(1,uv/11)]];
}

function wico(k){return k==='sun'?'#i-sun':k==='rain'?'#i-rain':'#i-cloud'}
var wMounted=false;
function mountW(){
  if(wMounted)return;wMounted=true;
  var strip=$('#wvStrip');
  if(strip)strip.innerHTML='<div><em>lädt</em></div>';
  fetch('/api/weather',{credentials:'same-origin'})
    .then(function(r){if(!r.ok)throw 0;return r.json()})
    .then(function(d){wFill(d);wPaint()})
    .catch(function(){
      if(strip)strip.innerHTML='<div><em>Wetterdaten gerade nicht erreichbar.</em></div>';
      var days=$('#wvDays');if(days)days.innerHTML='';
      /* Lieber ein Strich als die Zahlen aus dem Entwurf: eine Karte, die
         „19°“ zeigt, obwohl nichts abgerufen werden konnte, ist schlimmer
         als eine leere Karte. */
      var e=$('.wv-now .deg');if(e)e.textContent='—°';
      e=$('.wv-now .cond');if(e)e.textContent='Keine Daten';
      e=$('.wv-now .fl');if(e)e.textContent='Der Abruf bei open-meteo.com ist fehlgeschlagen.';
      $$('.wv-now .rng b').forEach(function(b){b.textContent='—'});
      WT=[];
      [1,2,3,4].forEach(function(n){var c=$('#wvT'+n);if(c)c.innerHTML='<span class="k">—</span><span class="v">—</span><span class="n">Keine Daten</span>'});
    });
}
function wPaint(){
  var h=new Date().getHours();
  if(WNOW){
    var set=function(sel,v){var e=$(sel);if(e)e.textContent=v};
    set('.wv-now .deg',WNOW.deg);
    set('.wv-now .cond',WNOW.cond);
    set('.wv-now .fl',WNOW.feels);
    var rng=$$('.wv-now .rng b');
    if(rng.length>=3){rng[0].textContent=WNOW.max;rng[1].textContent=WNOW.min;rng[2].textContent=WNOW.sunset}
  }
  $('#wvStrip').innerHTML=WH.map(function(x){
    return '<div'+(x[0]===h?' class="nowh"':'')+'><em>'+(x[0]===h?'jetzt':p2(x[0])+' Uhr')+'</em>'+
     '<svg width="18" height="18" viewBox="0 0 24 24"><use href="'+wico(x[2])+'"/></svg><b>'+x[1]+'°</b></div>';
  }).join('');
  $('#wvDays').innerHTML=WD.map(function(d){
    var l=(d[2]-8)/(24-8)*100,w=(d[1]-d[2])/(24-8)*100;
    return '<div class="wdrow"><em>'+d[0]+'</em><svg width="16" height="16" viewBox="0 0 24 24"><use href="'+wico(d[3])+'"/></svg>'+
     '<span class="lo">'+d[2]+'°</span><span class="tr"><i style="left:'+l.toFixed(0)+'%;width:'+w.toFixed(0)+'%"></i></span><span class="hi">'+d[1]+'°</span></div>';
  }).join('');
  WT.forEach(function(t,i){
    var c=$('#wvT'+(i+1));if(!c)return;
    c.innerHTML='<span class="k">'+esc(t[0])+'</span><span class="v">'+t[1]+(t[2]?'<span style="font-size:.5em;font-weight:400;color:var(--gray)"> '+t[2]+'</span>':'')+'</span>'+
     '<span class="n">'+esc(t[3])+'</span><span class="gaug"><i data-w="'+Math.round(t[4]*100)+'"></i></span>';
  });
  setTimeout(function(){$$('.wtile .gaug i').forEach(function(i){i.style.width=i.dataset.w+'%'})},220);
}

/* ══════════ NACHRICHTEN ══════════ */
/* Links die Meldungen der gewählten Rubrik, rechts die ausgewählte im
   Lesebereich. Beides aus /api/news; der Link am Ende führt zur Quelle,
   gelesen wird aber hier. Die Lieferung zeigte an dieser Stelle nur die
   Namen der Rubriken und den Hinweis, dass noch nichts verbunden sei. */
var nRub='welt',nSel=0,nMounted=false,nItems=[],nMeta=null;

function mountN(){
  if(nMounted)return;nMounted=true;
  $('#nvRubs').innerHTML=NEWS.TOPICS.map(function(t){
    return '<button class="chip'+(t[0]===nRub?' on':'')+'" data-r="'+t[0]+'">'+t[1]+'</button>';
  }).join('');
  $('#nvRubs').addEventListener('click',function(e){
    var b=e.target.closest('[data-r]');if(!b)return;
    if(b.dataset.r===nRub)return;
    nRub=b.dataset.r;nSel=0;
    $$('#nvRubs .chip').forEach(function(x){x.classList.toggle('on',x===b)});
    loadN();
  });
  $('#nvList').addEventListener('click',function(e){
    var b=e.target.closest('[data-i]');if(!b)return;
    nSel=+b.dataset.i;paintNList();paintRead();
  });
  loadN();
}

function rubLabel(key){
  for(var i=0;i<NEWS.TOPICS.length;i++)if(NEWS.TOPICS[i][0]===key)return NEWS.TOPICS[i][1];
  return key;
}

function loadN(){
  var topic=nRub;
  nItems=[];nMeta=null;
  $('#nvList').innerHTML='<div class="nvrow"><span class="nn">··</span><span><b>Wird geladen</b><span>tagesschau.de</span></span></div>';
  $('#nvRead').innerHTML='<div class="kick"><i>'+esc(rubLabel(topic))+'</i></div>'+
    '<h2>Meldungen werden geladen.</h2>'+
    '<p class="lead">Der Worker holt den Feed der tagesschau und übersetzt ihn in lesbare Form.</p>';
  $('#nvStamp').textContent='';
  NEWS.load(topic).then(function(d){
    if(topic!==nRub)return;
    nItems=d.items;nMeta=d;nSel=0;
    paintNList();paintRead();
    $('#nvStamp').textContent='Stand '+NEWS.clock(d.fetched)+' · tagesschau.de'+(d.fallback?' (Hauptfeed)':'');
  }).catch(function(err){
    if(topic!==nRub)return;
    var why=NEWS.failText(err);
    $('#nvList').innerHTML='<div class="nvrow"><span class="nn">—</span><span><b>Keine Meldungen</b><span>'+esc(why)+'</span></span></div>';
    $('#nvRead').innerHTML='<div class="kick"><i>'+esc(rubLabel(topic))+'</i></div>'+
      '<h2>Die Rubrik lässt sich gerade nicht laden.</h2>'+
      '<p class="lead">'+esc(why)+'</p>'+
      '<p class="note"><b>Was hier sonst steht:</b> die aktuellen Meldungen der tagesschau zu dieser Rubrik, mit Zeitstempel und Herkunft. Der Abruf läuft über den eigenen Server, nicht über den Browser — deshalb sieht die Quelle nicht, wer hier liest.</p>';
    $('#nvStamp').textContent='—';
  });
}

function paintNList(){
  $('#nvList').innerHTML=nItems.map(function(it,i){
    var when=NEWS.rel(it.date);
    return '<button class="nvrow'+(i===nSel?' on':'')+'" data-i="'+i+'"><span class="nn">'+p2(i+1)+'</span>'+
     '<span><b>'+esc(it.title)+'</b><span>'+(when?esc(when):'')+'</span></span></button>';
  }).join('');
}

function paintRead(){
  var it=nItems[nSel];
  if(!it)return;
  var when=NEWS.rel(it.date),
      rest=nItems.filter(function(_,i){return i!==nSel}).slice(0,3);
  $('#nvRead').innerHTML='<div class="kick"><i>'+esc(rubLabel(nRub))+'</i>'+
   '<span class="mono">Meldung '+p2(nSel+1)+' von '+p2(nItems.length)+(when?' · '+esc(when):'')+'</span></div>'+
   '<h2>'+esc(it.title)+'</h2>'+
   '<p class="lead">'+esc(it.summary||'Zu dieser Meldung liefert der Feed keine Zusammenfassung.')+'</p>'+
   (rest.length?'<div class="pts">'+rest.map(function(r,i){
     return '<div><em>'+p2(i+1)+'</em><p>'+esc(r.title)+'</p></div>';
   }).join('')+'</div>':'')+
   '<p class="note"><b>Quelle:</b> tagesschau.de'+(nMeta&&nMeta.fallback?' (Hauptfeed — der Ressort-Feed antwortet nicht)':'')+
   '. '+(it.link?'<a href="'+esc(it.link)+'" target="_blank" rel="noopener noreferrer">Vollständige Meldung öffnen</a>':'Für diese Meldung liefert der Feed keinen Link.')+'</p>';
}

/* ══════════ Router-Hook ══════════ */
function enter(v){
  if(v==='punchy')mountP();
  if(v==='wetter')mountW();
  if(v==='news')mountN();
}
return {enter:enter};
})();

