/* ── private/widgets.js ── */
/* Privat Layer · Widgets — Kalender, Tag, Jahr, Motivation, Wetter, Nachrichten */
window.WID=(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var MON=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];

/* ── Kalender ── */
function cal(){
  var d=new Date(),y=d.getFullYear(),m=d.getMonth(),today=d.getDate();
  $('#calMon').textContent=MON[m];$('#calYr').textContent=y;
  var first=new Date(y,m,1),lead=(first.getDay()+6)%7,days=new Date(y,m+1,0).getDate(),
      h=['M','D','M','D','F','S','S'].map(function(x){return '<em>'+x+'</em>'}).join(''),c='';
  for(var i=0;i<lead;i++)c+='<i></i>';
  for(var n=1;n<=days;n++){
    var we=((lead+n-1)%7)>4;
    c+='<i class="'+(n===today?'now':(n<today?'past':''))+(we?' we':'')+'">'+n+'</i>';
  }
  $('#cal').innerHTML=h+c;
}

/* ── Tagesfortschritt ── */
function day(){
  var d=new Date(),mins=d.getHours()*60+d.getMinutes(),pct=Math.round(mins/14.4),
      done=Math.floor(mins/60),g='';
  for(var i=0;i<24;i++)g+='<i class="'+(i<done?'f':'')+'" style="--d:'+i+'"></i>';
  $('#dayDots').innerHTML=g;
  $('#dayPct').textContent=pct+' %';
  var rest=1440-mins;
  $('#dayLeft').textContent=Math.floor(rest/60)+' h '+(rest%60)+' min übrig';
}

/* ── Jahr · Left-Style ── */
function year(){
  var d=new Date(),y=d.getFullYear(),s=new Date(y,0,1),e=new Date(y+1,0,1),
      pct=Math.round((d-s)/(e-s)*100),wk=Math.floor((d-s)/6048e5),g='';
  for(var i=0;i<52;i++)g+='<i class="'+(i<wk?'f':'')+'" style="--d:'+i+'"></i>';
  $('#yearDots').innerHTML=g;
  $('#yearPct').textContent=pct+' %';
  var left=Math.ceil((e-d)/864e5);
  $('#yearLeft').textContent=left+' Tage · '+(52-wk)+' Wochen übrig';
}

/* ── Motivation ── */
var QUOTES=[
'Nicht die Zeit fehlt. Die Entscheidung fehlt.',
'Zwei Karten heute schlagen zwanzig Karten irgendwann.',
'Wiederholung ist kein Rückschritt. Sie ist der Weg.',
'Der Stapel wird kleiner, wenn du ihn anfasst.',
'Fokus ist eine Entscheidung gegen alles andere.',
'Verstehen kommt beim zweiten Mal.'];
function motiv(){
  var d=new Date(),exam=new Date(d.getFullYear(),11,9);
  if(exam<d)exam=new Date(d.getFullYear()+1,11,9);
  var days=Math.ceil((exam-d)/864e5);
  $('#examDays').textContent=days;
  $('#examDate').textContent=exam.getDate()+'. '+MON[exam.getMonth()]+' '+exam.getFullYear();
  $('#quote').textContent=QUOTES[d.getDate()%QUOTES.length];
  var wd=(d.getDay()+6)%7,L=['M','D','M','D','F','S','S'],b='';
  for(var i=0;i<7;i++)b+='<i class="'+(i<=wd&&i!==5&&i!==6?'f':'')+(i===wd?' now':'')+'"><em>'+L[i]+'</em></i>';
  $('#wkbar').innerHTML=b;
}

/* ── Wetter ──
   Auch die Dashboard-Karte zeigte feste Werte. Sie holt jetzt dieselben
   Daten wie die grosse Ansicht über /api/weather und teilt sich mit ihr
   den Abruf: der Worker cacht zehn Minuten, der Browser fragt also nicht
   doppelt. Schlägt es fehl, sagt die Karte das. */
var WMO={0:['sun','Klar'],1:['sun','Überwiegend klar'],2:['cloud','Wechselnd bewölkt'],3:['cloud','Bedeckt'],
45:['cloud','Nebel'],48:['cloud','Reifnebel'],51:['rain','Leichter Niesel'],53:['rain','Niesel'],55:['rain','Dichter Niesel'],
61:['rain','Leichter Regen'],63:['rain','Regen'],65:['rain','Starker Regen'],71:['cloud','Leichter Schnee'],
73:['cloud','Schnee'],75:['cloud','Starker Schnee'],80:['rain','Regenschauer'],81:['rain','Regenschauer'],
82:['rain','Kräftige Schauer'],85:['cloud','Schneeschauer'],86:['cloud','Schneeschauer'],
95:['rain','Gewitter'],96:['rain','Gewitter mit Hagel'],99:['rain','Gewitter mit Hagel']};
function wmo(c){return WMO[c]||['cloud','—']}
var WDAY=['So','Mo','Di','Mi','Do','Fr','Sa'];
function wico(k){return k==='sun'?'#i-sun':k==='rain'?'#i-rain':'#i-cloud'}

function weather(){
  fetch('/api/weather',{credentials:'same-origin'})
    .then(function(r){if(!r.ok)throw 0;return r.json()})
    .then(wPaint)
    .catch(function(){
      /* Nichts von den Entwurfszahlen stehen lassen. Eine Karte, die
         „21° · Höchstwert 21°“ zeigt, obwohl der Abruf fehlgeschlagen ist,
         behauptet etwas — der Strich sagt die Wahrheit. */
      var q=function(sel){return document.querySelector(sel)};
      var hr=$('#whr');if(hr)hr.innerHTML='<div><em>nicht erreichbar</em></div>';
      var big=q('.wnow b');if(big)big.textContent='—°';
      var txt=q('.wnow .m span');if(txt)txt.textContent='Keine Daten';
      var sub=q('.wnow .m small');if(sub)sub.textContent='Der Abruf bei open-meteo.com ist fehlgeschlagen.';
      var days=$('#wdays');if(days)days.innerHTML='';
      [].slice.call(document.querySelectorAll('.wmeta div b')).forEach(function(b){b.textContent='—'});
      var src=q('.c-wetter .x');if(src)src.textContent='open-meteo.com · offline';
    });
}

function wPaint(d){
  var cur=d.current||{},hr=d.hourly||{},dy=d.daily||{},kind=wmo(cur.weather_code);

  var big=document.querySelector('.wnow b');
  if(big)big.textContent=Math.round(cur.temperature_2m)+'°';
  var txt=document.querySelector('.wnow .m span');
  if(txt)txt.textContent=kind[1];
  var sub=document.querySelector('.wnow .m small');
  if(sub&&dy.temperature_2m_max)
    sub.textContent='Gefühlt '+Math.round(cur.apparent_temperature)+'° · Höchstwert '+
      Math.round(dy.temperature_2m_max[0])+'° · Tief '+Math.round(dy.temperature_2m_min[0])+'°';
  var ic=document.querySelector('.wnow .sun use');
  if(ic)ic.setAttribute('href',wico(kind[0]));

  var times=hr.time||[],nowIso=(cur.time||'').slice(0,13),from=0;
  for(var i=0;i<times.length;i++){if(times[i].slice(0,13)>=nowIso){from=i;break}}
  var rows='';
  for(var h=from;h<Math.min(from+6,times.length);h++)
    rows+='<div><em>'+times[h].slice(11,13)+':00</em><svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><use href="'+
      wico(wmo(hr.weather_code[h])[0])+'"/></svg><b>'+Math.round(hr.temperature_2m[h])+'°</b></div>';
  $('#whr').innerHTML=rows;

  // Balkenbreite über die tatsächliche Spanne des Zeitraums, nicht über
  // feste 9–23°: im Winter läge sonst alles ausserhalb der Skala.
  var dt=dy.time||[],hi=dy.temperature_2m_max||[],lo=dy.temperature_2m_min||[];
  var lows=lo.slice(1,6),highs=hi.slice(1,6);
  if(!lows.length){$('#wdays').innerHTML='';return}
  var min=Math.floor(Math.min.apply(null,lows)),max=Math.ceil(Math.max.apply(null,highs)),
      span=Math.max(1,max-min),out='';
  for(var n=1;n<Math.min(6,dt.length);n++){
    var l=Math.round(lo[n]),hh=Math.round(hi[n]),
        left=(l-min)/span*100,w=Math.max(6,(hh-l)/span*100),
        day=WDAY[new Date(dt[n]+'T12:00:00').getDay()];
    out+='<div class="wd"><em>'+day+'</em><svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><use href="'+
      wico(wmo(dy.weather_code[n])[0])+'"/></svg><span class="tlo">'+l+'°</span>'+
      '<span class="tr"><i style="left:'+left.toFixed(0)+'%;width:'+w.toFixed(0)+'%"></i></span><span class="thi">'+hh+'°</span></div>';
  }
  $('#wdays').innerHTML=out;

  var meta=document.querySelectorAll('.wmeta div b');
  if(meta.length>=4){
    meta[0].textContent=Math.round(cur.wind_speed_10m)+' km/h';
    meta[1].textContent=Math.round(cur.relative_humidity_2m)+' %';
    meta[2].textContent=(dy.precipitation_probability_max?Math.round(dy.precipitation_probability_max[0]):0)+' %';
    meta[3].textContent=dy.uv_index_max?Math.round(dy.uv_index_max[0]):'—';
  }
  var src=document.querySelector('.c-wetter .x');
  if(src)src.textContent='open-meteo.com';
}

/* ── Nachrichten · echte Meldungen vom Worker-Endpunkt ── */
/* Die Lieferung hatte hier eine feste Liste von Rubrikennamen stehen.
   Jetzt kommt der Inhalt aus NEWS.load() — derselben Quelle, die auch die
   grosse Nachrichten-Ansicht speist, damit beide nie auseinanderlaufen. */
var ntab='welt',nwired=false;

function nrows(html){$('#nlist').innerHTML=html}

function paintNews(){
  var topic=ntab;
  nrows('<div class="nrow" style="--d:0"><span class="nn">··</span><span class="tp">Meldungen werden geladen<small>tagesschau.de</small></span></div>');
  NEWS.load(topic).then(function(d){
    // Zwischenzeitlicher Rubrikwechsel: dann gehört diese Antwort nicht mehr hierher.
    if(topic!==ntab)return;
    nrows(d.items.slice(0,5).map(function(it,i){
      var when=NEWS.rel(it.date);
      return '<a class="nrow" style="--d:'+i+'" href="'+NEWS.esc(it.link)+'" target="_blank" rel="noopener noreferrer">'+
        '<span class="nn">'+(i+1<10?'0':'')+(i+1)+'</span>'+
        '<span class="tp">'+NEWS.esc(it.title)+
        '<small>'+(when?NEWS.esc(when)+' · ':'')+NEWS.esc(cut(it.summary,90))+'</small></span></a>';
    }).join(''));
    $('#nstamp').textContent='Stand '+NEWS.clock(d.fetched);
    var src=document.querySelector('.c-news .x');
    if(src)src.textContent=d.fallback?'tagesschau.de · Hauptfeed':'tagesschau.de';
  }).catch(function(err){
    if(topic!==ntab)return;
    nrows('<div class="nrow" style="--d:0"><span class="nn">—</span><span class="tp">Keine Meldungen<small>'+
      NEWS.esc(NEWS.failText(err))+'</small></span></div>');
    $('#nstamp').textContent='—';
  });
}

function cut(s,n){s=String(s||'');return s.length>n?s.slice(0,n-1).replace(/\s+\S*$/,'')+'…':s}

function news(){
  if(!nwired){
    nwired=true;
    $('#nfilter').innerHTML=NEWS.TOPICS.map(function(t){
      return '<button class="chip'+(t[0]===ntab?' on':'')+'" data-n="'+t[0]+'">'+t[1]+'</button>';
    }).join('');
    $('#nfilter').addEventListener('click',function(e){
      var b=e.target.closest('.chip');if(!b)return;
      ntab=b.dataset.n;
      [].slice.call($('#nfilter').children).forEach(function(x){x.classList.toggle('on',x===b)});
      paintNews();
    });
  }
  paintNews();
}

function all(){cal();day();year();motiv();weather();news()}
return {all:all,day:day,year:year};
})();

