/* ── punchy/graph-core.js ── */
/* Graph-Kern: Repo-Files parsen, Kraft-Layout, Hilfsfunktionen. Plain JS auf window. */
(function(){
var TYPES={
Person:{h:34,icon:'M12 11.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M5.6 19.6c.7-3.3 3.3-5.2 6.4-5.2s5.7 1.9 6.4 5.2'},
Ort:{h:150,icon:'M12 20.6s5.8-5.4 5.8-9.8A5.8 5.8 0 0 0 6.2 10.8c0 4.4 5.8 9.8 5.8 9.8m0-8.2a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2'},
Unternehmen:{h:255,icon:'M4.5 19.5h15M6.5 19.5V5.5h7v14M13.5 10.5h4v9M8.8 8.6h2m-2 3h2m-2 3h2'},
Projekt:{h:64,icon:'M6 3.6v16.8M6 4.6h11l-2.2 3.6L17 11.8H6'},
Dokument:{h:214,icon:'M7 3.6h6.8l3.6 3.6v13.2H7zM13.8 3.6v3.6h3.6M9.6 12h5m-5 3.2h5'},
Notiz:{h:196,icon:'M5.4 5h13.2v9.6l-4 4H5.4zM14.6 18.6V14.6h4'},
Erinnerung:{h:12,icon:'M12 20.4C7.4 16.6 4.4 14 4.4 10.8A4.6 4.6 0 0 1 12 7.9a4.6 4.6 0 0 1 7.6 2.9c0 3.2-3 5.8-7.6 9.6'},
Idee:{h:92,icon:'M9.6 17.2h4.8M10.2 20h3.6M12 3.4a6 6 0 0 1 3.6 10.8v3H8.4v-3A6 6 0 0 1 12 3.4'},
Interesse:{h:78,icon:'M12 4.2l2.3 5 5.5.5-4.1 3.7 1.2 5.4-4.9-2.9-4.9 2.9 1.2-5.4-4.1-3.7 5.5-.5z'},
Aufgabe:{h:172,icon:'M5.2 5.2h13.6v13.6H5.2zM8.6 12l2.6 2.6 4.4-5'},
Termin:{h:290,icon:'M4.4 7.2h15.2v12.8H4.4zM4.4 11h15.2M9 4.2v4m6-4v4'},
Ereignis:{h:48,icon:'M12 4v3.2m0 9.6V20M4 12h3.2m9.6 0H20M6.4 6.4l2.2 2.2m6.8 6.8 2.2 2.2m0-11.2-2.2 2.2m-6.8 6.8-2.2 2.2'},
Konzept:{h:232,icon:'M12 5.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2M6.2 15a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2m11.6 0a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2M10.9 9.5 7.5 14.3m5.6-4.8 3.4 4.8M8.3 17.1h7.4'},
Fähigkeit:{h:132,icon:'M4.4 9v6m3.2-8.4v10.8m8.8-10.8v10.8M19.6 9v6M7.6 12h8.8'},
Medium:{h:320,icon:'M12 4.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6m-1.4 4.4 4.6 3.4-4.6 3.4z'},
Webseite:{h:186,icon:'M12 4.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6M4.2 12h15.6M12 4.2c2.1 2.2 3.2 4.8 3.2 7.8s-1.1 5.6-3.2 7.8c-2.1-2.2-3.2-4.8-3.2-7.8s1.1-5.6 3.2-7.8'},
Entscheidung:{h:274,icon:'M12 20v-6.2M12 13.8 7 8.8V4.4m5 9.4 5-5V4.4'}
};
var PROV={
FACT:{label:'Fakt',dash:null,op:1,ring:'#8C877C'},
MEMORY:{label:'Erinnerung',dash:null,op:1,ring:'#C08A4E'},
INFERENCE:{label:'Ableitung',dash:'4 3.5',op:.62,ring:'#6F7B84'},
HYPOTHESIS:{label:'Hypothese',dash:'1.5 3.5',op:.72,ring:'#7E7893'},
CONFLICT:{label:'Konflikt',dash:null,op:1,ring:'#B4483C'}
};
var RELS=['gehört zu','verwandt mit','erstellt von','erwähnt','basiert auf','folgt auf','widerspricht','unterstützt','verwendet','befindet sich in','arbeitet mit','interessiert sich für','entstanden aus','erinnert an'];

function typeColor(t){var m=TYPES[t];return m?'oklch(0.745 0.093 '+m.h+')':'oklch(0.745 0.02 250)'}
function typeIcon(t){return (TYPES[t]||{}).icon||''}
function hash(s){var h=0x811c9dc5;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=(h*0x01000193)>>>0}return h}
function shortHash(s){return hash(s).toString(16).padStart(8,'0').slice(0,7)}
function title(id){return id.split('-').map(function(w){return w.charAt(0).toUpperCase()+w.slice(1)}).join(' ')}
var NAMES={maurice:'Maurice Risch',marco:'Punchy',neuroplastizitaet:'Neuroplastizität',lernen:'Lernen',gehirn:'Gehirn',gesundheit:'Gesundheit',krafttraining:'Krafttraining',interessenprofil:'Interessenprofil','spaced-repetition':'Spaced Repetition',typescript:'TypeScript',lernplattform:'Lernplattform Kommunikation','portfolio-relaunch':'Portfolio-Relaunch','lernfeld-03':'Lernfeld 03','aufgabe-lf03':'LF 03 Karten abschließen','pruefung-ihk':'Zwischenprüfung IHK',pomodoro:'Pomodoro','fokus-morgens':'Fokus liegt morgens',schlafrhythmus:'Früher Schlafrhythmus',nachtlernen:'Nachtlernen',hamburg:'Hamburg',izure:'IZURÉ','entscheidung-darkmode':'Privat Layer bleibt dunkel','ersten-deploy':'Erster Deploy','umzug-2024':'Umzug nach Hamburg',huberman:'Podcast: Lernfenster','samurai-playlist':'Samurai-Playlist','particle-news':'particle.news','politik-interesse':'Politik & Weltlage','marco-voice':'Marco mit Stimme'};

var COMMIT_MSG={
FACT:['Node angelegt','Beschreibung präzisiert','Tags ergänzt'],
MEMORY:['Erinnerung festgehalten','Datum korrigiert','Kontext ergänzt'],
INFERENCE:['Ableitung erzeugt','Confidence neu berechnet','Belege nachgezogen'],
HYPOTHESIS:['Hypothese notiert','Als unbestätigt markiert','Formulierung geschärft'],
CONFLICT:['Widerspruch markiert','Konfliktkante gesetzt','Beide Versionen erhalten']
};

/* Repo-Files -> Nodes + Links */
function parseRepo(files){
  var nodes=[],links=[],seen={};
  files.forEach(function(f){
    var fm=f.frontmatter,h=shortHash(f.path);
    var msgs=COMMIT_MSG[fm.provenance]||COMMIT_MSG.FACT;
    var commits=[0,1,2].map(function(i){
      var d=new Date(fm.updated);d.setDate(d.getDate()-i*(3+(hash(f.path+i)%9)));
      return {hash:shortHash(f.path+i),msg:msgs[i%msgs.length],author:i===0?(fm.source||'maurice'):(hash(f.path+i)%2?'punchy':'maurice'),date:d.toISOString().slice(0,10)};
    });
    nodes.push({id:fm.id,name:NAMES[fm.id]||title(fm.id),type:fm.type,prov:fm.provenance,conf:fm.confidence,
      path:f.path,body:f.body,tags:fm.tags||[],created:fm.created,updated:fm.updated,source:fm.source,
      commit:h,commits:commits,cluster:f.path.split('/')[1]||'root',degree:0,x:0,y:0,vx:0,vy:0});
    seen[fm.id]=true;
  });
  files.forEach(function(f){
    (f.frontmatter.related||[]).forEach(function(r){
      if(!seen[r.id])return;
      var a=f.frontmatter.id,b=r.id,key=[a,b].sort().join('|')+'|'+r.rel;
      if(links.some(function(l){return l.key===key}))return;
      links.push({key:key,source:a,target:b,rel:r.rel,conflict:r.rel==='widerspricht'});
    });
  });
  var by={};nodes.forEach(function(n){by[n.id]=n});
  links.forEach(function(l){by[l.source].degree++;by[l.target].degree++});
  return {nodes:nodes,links:links};
}

function radius(n){return 11+Math.min(13,n.degree*1.9)+n.conf*5}

/* BFS-Distanzen ab einem Node */
function distances(nodes,links,startId){
  var adj={},d={};
  nodes.forEach(function(n){adj[n.id]=[]});
  links.forEach(function(l){adj[l.source]&&adj[l.source].push(l.target);adj[l.target]&&adj[l.target].push(l.source)});
  var q=[startId];d[startId]=0;
  while(q.length){var c=q.shift();(adj[c]||[]).forEach(function(n){if(d[n]===undefined){d[n]=d[c]+1;q.push(n)}})}
  return d;
}
function neighbors(links,id){
  var s={};links.forEach(function(l){if(l.source===id)s[l.target]=l.rel;else if(l.target===id)s[l.source]=l.rel});
  return s;
}

/* Kraft-Layout: Abstoßung, Federn, Zentrum, optionale Fokus-Ringe */
function Sim(){this.nodes=[];this.links=[];this.byId={};this.alpha=1;this.focus=null;this.dist={}}
Sim.prototype.setData=function(nodes,links,cache){
  var self=this;this.nodes=nodes;this.links=links;this.byId={};
  nodes.forEach(function(n,i){
    var c=cache&&cache[n.id];
    if(c){n.x=c.x;n.y=c.y}
    else{var a=i*2.399,r=120+Math.sqrt(i)*104;n.x=Math.cos(a)*r;n.y=Math.sin(a)*r}
    n.vx=n.vx||0;n.vy=n.vy||0;self.byId[n.id]=n;
  });
  this.alpha=1;
};
Sim.prototype.setFocus=function(id){
  this.focus=id;
  this.dist=id?distances(this.nodes,this.links,id):{};
  this.alpha=Math.max(this.alpha,.85);
};
Sim.prototype.step=function(){
  var ns=this.nodes,i,j,n,m,dx,dy,d,f,a=this.alpha;
  for(i=0;i<ns.length;i++){
    n=ns[i];
    for(j=i+1;j<ns.length;j++){
      m=ns[j];dx=m.x-n.x;dy=m.y-n.y;d=Math.sqrt(dx*dx+dy*dy)||.01;
      if(d>1000)continue;
      f=(7600+ (radius(n)+radius(m))*70)/(d*d);
      dx/=d;dy/=d;
      n.vx-=dx*f*a;n.vy-=dy*f*a;m.vx+=dx*f*a;m.vy+=dy*f*a;
    }
  }
  var L=this.links,byId=this.byId;
  for(i=0;i<L.length;i++){
    n=byId[L[i].source];m=byId[L[i].target];if(!n||!m)continue;
    dx=m.x-n.x;dy=m.y-n.y;d=Math.sqrt(dx*dx+dy*dy)||.01;
    var len=196+radius(n)+radius(m);
    f=(d-len)*.024*a;dx/=d;dy/=d;
    n.vx+=dx*f*d*.02+dx*f;n.vy+=dy*f*d*.02+dy*f;
    m.vx-=dx*f;m.vy-=dy*f;
  }
  for(i=0;i<ns.length;i++){
    n=ns[i];
    if(this.focus){
      var dep=this.dist[n.id];
      var target=dep===0?0:dep===1?205:dep===2?350:dep===undefined?520:470;
      d=Math.sqrt(n.x*n.x+n.y*n.y)||.01;
      f=(d-target)*.055*a;
      n.vx-=(n.x/d)*f;n.vy-=(n.y/d)*f;
      if(dep===0){n.vx-=n.x*.16*a;n.vy-=n.y*.16*a}
    }else{
      n.vx-=n.x*.0042*a;n.vy-=n.y*.0042*a;
    }
    if(n.fixed){n.vx=0;n.vy=0;continue}
    n.vx*=.80;n.vy*=.80;
    n.x+=Math.max(-28,Math.min(28,n.vx));
    n.y+=Math.max(-28,Math.min(28,n.vy));
  }
  this.alpha=Math.max(0,this.alpha-(this.alpha>.25?.006:.0022));
  return this.alpha;
};

function relTime(iso){
  var t=new Date(iso).getTime(),diff=(Date.now()-t)/1000;
  if(diff<3600)return 'vor '+Math.max(1,Math.round(diff/60))+' Min.';
  if(diff<86400)return 'vor '+Math.round(diff/3600)+' Std.';
  var d=Math.round(diff/86400);
  if(d<31)return 'vor '+d+(d===1?' Tag':' Tagen');
  var mo=Math.round(d/30.4);
  if(mo<12)return 'vor '+mo+(mo===1?' Monat':' Monaten');
  var y=(d/365).toFixed(1);return 'vor '+y+' Jahren';
}
function clockTime(iso){var d=new Date(iso);return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)}

Object.assign(window,{MarcoCore:{TYPES:TYPES,PROV:PROV,RELS:RELS,typeColor:typeColor,typeIcon:typeIcon,parseRepo:parseRepo,radius:radius,distances:distances,neighbors:neighbors,Sim:Sim,relTime:relTime,clockTime:clockTime,shortHash:shortHash,NAMES:NAMES}});
})();

