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

/* ── Wetter · echte Daten über /api/weather (Open-Meteo) ──────────
   Der Abruf läuft im Worker, nicht im Browser: keine CORS-Probleme, keine
   IP-Adressen der Besucher bei Dritten. WMO-Codes werden auf die drei
   vorhandenen Icons und einen deutschen Text abgebildet. */
var WMO={0:['sun','Klar'],1:['sun','Überwiegend klar'],2:['cloud','Wechselnd bewölkt'],3:['cloud','Bedeckt'],
45:['cloud','Nebel'],48:['cloud','Reifnebel'],51:['rain','Leichter Niesel'],53:['rain','Niesel'],55:['rain','Dichter Niesel'],
56:['rain','Gefrierender Niesel'],57:['rain','Gefrierender Niesel'],61:['rain','Leichter Regen'],63:['rain','Regen'],
65:['rain','Starker Regen'],66:['rain','Gefrierender Regen'],67:['rain','Gefrierender Regen'],71:['cloud','Leichter Schnee'],
73:['cloud','Schnee'],75:['cloud','Starker Schnee'],77:['cloud','Schneegriesel'],80:['rain','Regenschauer'],
81:['rain','Regenschauer'],82:['rain','Kräftige Schauer'],85:['cloud','Schneeschauer'],86:['cloud','Schneeschauer'],
95:['rain','Gewitter'],96:['rain','Gewitter mit Hagel'],99:['rain','Gewitter mit Hagel']};
function wmo(code){return WMO[code]||['cloud','—']}
function wico(k){return k==='sun'?'#i-sun':k==='rain'?'#i-rain':'#i-cloud'}
var WDAY=['So','Mo','Di','Mi','Do','Fr','Sa'];

function weatherFail(msg){
  var el=$('#whr');
  if(el)el.innerHTML='<div class="werr">'+msg+'</div>';
}

function weather(){
  fetch('/api/weather',{credentials:'same-origin'})
    .then(function(r){if(!r.ok)throw new Error('http '+r.status);return r.json()})
    .then(paintWeather)
    .catch(function(){
      // Kein Netz oder Worker nicht erreichbar: ehrlich sagen statt
      // erfundene Zahlen stehen lassen.
      weatherFail('Wetterdaten gerade nicht erreichbar.');
      var now=$('.wnow b');if(now)now.textContent='—';
    });
}

function paintWeather(d){
  var cur=d.current||{},daily=d.daily||{},hourly=d.hourly||{};
  var kind=wmo(cur.weather_code);

  var big=$('.wnow b');if(big)big.textContent=Math.round(cur.temperature_2m)+'°';
  var txt=$('.wnow .m span');if(txt)txt.textContent=kind[1];
  var sub=$('.wnow .m small');
  if(sub&&daily.temperature_2m_max)
    sub.textContent='Gefühlt '+Math.round(cur.apparent_temperature)+'° · Höchstwert '+
      Math.round(daily.temperature_2m_max[0])+'° · Tief '+Math.round(daily.temperature_2m_min[0])+'°';
  var icon=$('.wnow .sun use');if(icon)icon.setAttribute('href',wico(kind[0]));

  // Nächste sechs Stunden ab jetzt.
  var times=hourly.time||[],nowIso=(cur.time||'').slice(0,13),from=0;
  for(var i=0;i<times.length;i++){if(times[i].slice(0,13)>=nowIso){from=i;break}}
  var hrs=[];
  for(var h=from;h<Math.min(from+6,times.length);h++)
    hrs.push([times[h].slice(11,13),Math.round(hourly.temperature_2m[h]),wmo(hourly.weather_code[h])[0]]);
  $('#whr').innerHTML=hrs.map(function(x){
    return '<div><em>'+x[0]+':00</em><svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><use href="'+wico(x[2])+'"/></svg><b>'+x[1]+'°</b></div>';
  }).join('');

  // Fünf Folgetage. Die Balkenbreite skaliert über die tatsächliche
  // Spanne des Zeitraums, nicht über feste 9–23°.
  var dt=daily.time||[],hi=daily.temperature_2m_max||[],lo=daily.temperature_2m_min||[],
      lows=lo.slice(1,6),highs=hi.slice(1,6),
      min=Math.floor(Math.min.apply(null,lows)),max=Math.ceil(Math.max.apply(null,highs)),
      span=Math.max(1,max-min);
  var rows='';
  for(var n=1;n<Math.min(6,dt.length);n++){
    var l=Math.round(lo[n]),hh=Math.round(hi[n]),
        left=(l-min)/span*100,w=Math.max(6,(hh-l)/span*100),
        day=WDAY[new Date(dt[n]+'T12:00:00').getDay()];
    rows+='<div class="wd"><em>'+day+'</em><svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><use href="'+
      wico(wmo(daily.weather_code[n])[0])+'"/></svg><span class="tlo">'+l+'°</span>'+
      '<span class="tr"><i style="left:'+left.toFixed(0)+'%;width:'+w.toFixed(0)+'%"></i></span><span class="thi">'+hh+'°</span></div>';
  }
  $('#wdays').innerHTML=rows;

  var meta=document.querySelectorAll('.wmeta div b');
  if(meta.length>=4){
    meta[0].textContent=Math.round(cur.wind_speed_10m)+' km/h';
    meta[1].textContent=Math.round(cur.relative_humidity_2m)+' %';
    meta[2].textContent=(daily.precipitation_probability_max?Math.round(daily.precipitation_probability_max[0]):0)+' %';
    meta[3].textContent=daily.uv_index_max?Math.round(daily.uv_index_max[0]):'—';
  }
  var src=document.querySelector('.c-wetter .x');if(src)src.textContent='open-meteo.com';
}

/* ── Nachrichten · echte Schlagzeilen über /api/news (tagesschau-RSS) ──
   Ebenfalls serverseitig geholt. Die Rubriken entsprechen den Feeds. */
var NTABS=[['Welt','welt'],['Politik','politik'],['Wirtschaft','wirtschaft'],['Technik','technik']];
var ntab='welt';

function esc(x){return String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

function paintNews(){
  var list=$('#nlist');
  list.innerHTML='<div class="nrow"><span class="tp">Lade …</span></div>';
  fetch('/api/news?topic='+encodeURIComponent(ntab),{credentials:'same-origin'})
    .then(function(r){if(!r.ok)throw new Error('http '+r.status);return r.json()})
    .then(function(d){
      var items=(d.items||[]).slice(0,6);
      if(!items.length){list.innerHTML='<div class="nrow"><span class="tp">Keine Meldungen.</span></div>';return}
      list.innerHTML=items.map(function(it,i){
        var sum=it.summary||'';
        if(sum.length>110)sum=sum.slice(0,109).replace(/\s+\S*$/,'')+'…';
        return '<a class="nrow" style="--d:'+i+'" href="'+esc(it.link)+'" target="_blank" rel="noopener noreferrer">'+
          '<span class="nn">'+(i+1<10?'0':'')+(i+1)+'</span>'+
          '<span class="tp">'+esc(it.title)+'<small>'+esc(sum)+'</small></span></a>';
      }).join('');
      var d2=new Date(),p=function(n){return n<10?'0'+n:n};
      $('#nstamp').textContent='Stand '+p(d2.getHours())+':'+p(d2.getMinutes());
    })
    .catch(function(){
      list.innerHTML='<div class="nrow"><span class="tp">Nachrichten gerade nicht erreichbar.<small>Der Feed antwortet nicht.</small></span></div>';
    });
}

function news(){
  $('#nfilter').innerHTML=NTABS.map(function(t){
    return '<button class="chip'+(t[1]===ntab?' on':'')+'" data-n="'+t[1]+'">'+t[0]+'</button>';
  }).join('');
  var srcNote=document.querySelector('.nfoot .mono');
  if(srcNote)srcNote.textContent='Quelle · tagesschau.de';
  var head=document.querySelector('.c-news .x');
  if(head)head.textContent='tagesschau.de';
  paintNews();
  $('#nfilter').addEventListener('click',function(e){
    var b=e.target.closest('.chip');if(!b)return;
    ntab=b.dataset.n;
    [].slice.call($('#nfilter').children).forEach(function(x){x.classList.toggle('on',x===b)});
    paintNews();
  });
}

function all(){cal();day();year();motiv();weather();news()}
return {all:all,day:day,year:year,weather:weather,news:paintNews};
})();
