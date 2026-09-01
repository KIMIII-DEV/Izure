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

/* ── Wetter ── */
var HRS=[[15,20,'sun'],[16,21,'sun'],[17,20,'cloud'],[18,18,'cloud'],[19,16,'rain'],[20,15,'cloud']],
    DAYS=[['Mi',21,13,'sun'],['Do',19,12,'cloud'],['Fr',17,11,'rain'],['Sa',18,12,'cloud'],['So',20,13,'sun']];
function wico(k){return k==='sun'?'#i-sun':k==='rain'?'#i-rain':'#i-cloud'}
function weather(){
  $('#whr').innerHTML=HRS.map(function(h){
    return '<div><em>'+h[0]+':00</em><svg width="17" height="17" viewBox="0 0 24 24"><use href="'+wico(h[2])+'"/></svg><b>'+h[1]+'°</b></div>';
  }).join('');
  $('#wdays').innerHTML=DAYS.map(function(d){
    var lo=d[2],hi=d[1],l=(lo-9)/(23-9)*100,w=(hi-lo)/(23-9)*100;
    return '<div class="wd"><em>'+d[0]+'</em><svg width="15" height="15" viewBox="0 0 24 24"><use href="'+wico(d[3])+'"/></svg>'+
      '<span class="tlo">'+lo+'°</span><span class="tr"><i style="left:'+l.toFixed(0)+'%;width:'+w.toFixed(0)+'%"></i></span><span class="thi">'+hi+'°</span></div>';
  }).join('');
}

/* ── Nachrichten · Rubriken aus particle.news, ohne Weiterleitung ── */
var NEWS={
Welt:[['Internationale Lage','Konflikte, Bündnisse und Abkommen im Überblick'],['Klima & Umwelt','Wetterextreme, Energiewende, Abkommen'],['Gesellschaft','Migration, Bildung, Gesundheit']],
Politik:[['Bundespolitik','Koalition, Gesetzesvorhaben, Haushalt'],['Europa','EU-Kommission, Parlament, Binnenmarkt'],['Länder & Kommunen','Wahlen, Landesrecht, Verwaltung']],
Wirtschaft:[['Märkte','Indizes, Zinsen, Rohstoffe'],['Arbeit','Tarife, Fachkräfte, Ausbildung'],['Energie & Industrie','Preise, Produktion, Lieferketten']],
Technik:[['Digitalpolitik','Regulierung, Datenschutz, Plattformen'],['K.I','Modelle, Anwendungen, Debatten'],['Netz & Sicherheit','Infrastruktur, Angriffe, Standards']]};
var ntab='Welt';
function paintNews(){
  var rows=NEWS[ntab];
  $('#nlist').innerHTML=rows.map(function(r,i){
    return '<div class="nrow" style="--d:'+i+'"><span class="nn">'+(i+1<10?'0':'')+(i+1)+'</span><span class="tp">'+r[0]+'<small>'+r[1]+'</small></span></div>';
  }).join('');
}
function news(){
  $('#nfilter').innerHTML=Object.keys(NEWS).map(function(k){
    return '<button class="chip'+(k===ntab?' on':'')+'" data-n="'+k+'">'+k+'</button>';
  }).join('');
  paintNews();
  var d=new Date(),p=function(n){return n<10?'0'+n:n};
  $('#nstamp').textContent='Stand '+p(d.getHours())+':'+p(d.getMinutes());
  $('#nfilter').addEventListener('click',function(e){
    var b=e.target.closest('.chip');if(!b)return;
    ntab=b.dataset.n;
    [].slice.call($('#nfilter').children).forEach(function(x){x.classList.toggle('on',x===b)});
    paintNews();
  });
}

function all(){cal();day();year();motiv();weather();news()}
return {all:all,day:day,year:year};
})();
