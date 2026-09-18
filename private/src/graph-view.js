/* ── punchy/graph-view.js ── */
/* Privat Layer · Punchy Wissensgraph — geordnetes Radial-Layout, ohne Force-Chaos */
window.MARCOVIEW=(function(){
var M=window.MarcoCore,G=M.parseRepo(window.MARCO_REPO),ACT=(window.MARCO_ACTIVITY||[]).slice();
var byId={};G.nodes.forEach(function(n){byId[n.id]=n});
var PROV={FACT:{l:'Fakt',c:'fact'},MEMORY:{l:'Erinnerung',c:'mem'},INFERENCE:{l:'Ableitung',c:'inf'},HYPOTHESIS:{l:'Hypothese',c:'hyp'},CONFLICT:{l:'Konflikt',c:'conf'}};
var ORDER=['FACT','MEMORY','INFERENCE','HYPOTHESIS','CONFLICT'];
var ROOT='maurice';
var S={focus:ROOT,facet:null,sel:ROOT,filter:{},path:[ROOT],tab:'node',q:''};
var el={},mounted=false,rendered=false,ro=null,rt=null,ct=null;

function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function cut(s,n){s=String(s);n=Math.max(6,Math.floor(n));return s.length>n?s.slice(0,n-1)+'…':s}
function prov(id){var n=byId[id];return PROV[n?n.prov:'FACT']||PROV.FACT}
function pc(id){return 'var(--pv-'+prov(id).c+')'}
function anyFilter(){return ORDER.some(function(k){return S.filter[k]})}
function pass(n){return !anyFilter()||!!S.filter[n.prov]}
function bez(x1,y1,x2,y2){var m=((x1+x2)/2).toFixed(1);return 'M'+x1.toFixed(1)+','+y1.toFixed(1)+'C'+m+','+y1.toFixed(1)+' '+m+','+y2.toFixed(1)+' '+x2.toFixed(1)+','+y2.toFixed(1)}
function conflicts(){return G.nodes.filter(function(n){return n.prov==='CONFLICT'}).length}

/* Nachbarn nach Typ gruppieren; viele Einzeltypen laufen in „Weitere“ zusammen */
function facetsOf(id,max){
  var nb=M.neighbors(G.links,id),map={};
  Object.keys(nb).forEach(function(k){
    var n=byId[k];if(!n||!pass(n))return;
    (map[n.type]=map[n.type]||[]).push({n:n,rel:nb[k]});
  });
  var gr=Object.keys(map).map(function(t){
    return {type:t,items:map[t].sort(function(a,b){return b.n.degree-a.n.degree})};
  }).sort(function(a,b){return b.items.length-a.items.length||a.type.localeCompare(b.type)});
  if(gr.length>max){
    var head=gr.slice(0,max-1),rest=gr.slice(max-1),items=[];
    rest.forEach(function(g){items=items.concat(g.items)});
    head.push({type:'Weitere',mixed:true,items:items});
    return head;
  }
  return gr;
}

/* ── Canvas ── */
function render(anim){
  var box=el.canvas;if(!box)return;
  var w=box.clientWidth,h=box.clientHeight;
  if(w<120||h<120)return;
  var f=byId[S.focus];if(!f)return;

  var pad=14,tight=w<620;
  var coreR=h<330||tight?20:25;
  var cardH=h<300?34:h<400?39:44,gap=cardH>38?9:6;
  var maxRows=Math.max(3,Math.min(6,Math.floor((h-2*pad+gap)/(cardH+gap))));
  var fs=facetsOf(S.focus,maxRows);
  if(fs.length&&(!S.facet||!fs.some(function(x){return x.type===S.facet})))S.facet=fs[0].type;
  if(!fs.length)S.facet=null;

  var fx=pad+coreR+Math.round(coreR*.9),fy=Math.round(h/2);
  var lblBudget=Math.max(96,Math.min(210,Math.round(w*.23)));
  var colX=fx+coreR+Math.max(26,Math.round(w*.055));
  var cardW=Math.max(126,Math.min(200,w-colX-lblBudget-Math.max(46,Math.round(w*.07))));
  var fanX=colX+cardW+Math.max(42,Math.round(w*.075));
  var chars=(w-fanX-24)/7.05;

  var rows=fs.length,totalH=rows*cardH+(rows-1)*gap,y0=Math.round(fy-totalH/2);
  var edges=[],cards=[],nodes=[];

  fs.forEach(function(fc,i){
    var cy=y0+i*(cardH+gap)+cardH/2,on=fc.type===S.facet,nw=String(fc.items.length).length;
    edges.push('<path class="mc-edge'+(on?' on':'')+(anim?' grow':'')+'" style="--d:'+(i*26)+'ms" d="'+bez(fx+coreR+8,fy,colX,cy)+'"/>');
    var tx=colX+16+nw*11;
    cards.push('<g class="mc-facet'+(on?' on':'')+(anim?' in':'')+'" style="--d:'+(60+i*34)+'ms" data-facet="'+esc(fc.type)+'" role="button" tabindex="0" aria-pressed="'+on+'">'+
      '<rect x="'+colX+'" y="'+(cy-cardH/2).toFixed(1)+'" width="'+cardW+'" height="'+cardH+'" rx="10"/>'+
      '<text class="n" x="'+(colX+15)+'" y="'+(cy+6).toFixed(1)+'">'+fc.items.length+'</text>'+
      (cardH>36
        ?'<text class="t" x="'+tx+'" y="'+(cy-1).toFixed(1)+'">'+esc(cut(fc.type,(cardW-nw*11-46)/6.9))+'</text>'+
         '<text class="s" x="'+tx+'" y="'+(cy+12).toFixed(1)+'">'+(fc.items.length===1?'1 Node':fc.items.length+' Nodes')+'</text>'
        :'<text class="t" x="'+tx+'" y="'+(cy+5).toFixed(1)+'">'+esc(cut(fc.type,(cardW-nw*11-46)/6.9))+'</text>')+
      '<path class="chev" d="M'+(colX+cardW-17)+','+(cy-4)+'l4,4l-4,4"/></g>');
    if(!on)return;
    var items=fc.items,extra=0,cap=Math.max(4,Math.min(10,Math.floor((h-2*pad)/30)));
    if(items.length>cap){extra=items.length-cap;items=items.slice(0,cap)}
    var sp=Math.min(44,Math.max(26,(h-2*pad)/Math.max(1,items.length))),mid=(items.length-1)/2;
    items.forEach(function(it,k){
      var ny=fy+(k-mid)*sp,nx=fanX+Math.sin(Math.PI*(k+.5)/items.length)*14,r=5+Math.min(4,it.n.degree*.5);
      var sub=fc.mixed?it.n.type+' · '+it.rel:it.rel;
      edges.push('<path class="mc-edge'+(it.rel==='widerspricht'?' cf':' on')+(anim?' grow':'')+'" style="--d:'+(110+k*24)+'ms" d="'+bez(colX+cardW,cy,nx-r-3,ny)+'"/>');
      nodes.push('<g class="mc-node'+(it.n.id===S.sel?' sel':'')+(anim?' in':'')+'" style="--d:'+(140+k*26)+'ms;--nc:'+pc(it.n.id)+'" data-node="'+esc(it.n.id)+'" role="button" tabindex="0" aria-label="'+esc(it.n.name)+'">'+
        /* Unsichtbare Trefferfläche über die ganze Zeile. In SVG trifft ein
           Klick nur dort, wo tatsächlich etwas gezeichnet ist — zwischen
           Punkt und Beschriftung liegen rund zehn leere Pixel, in denen
           nichts passiert. Mit dem Rechteck ist die ganze Zeile anklickbar,
           so wie es eine Liste auch wäre. */
        '<rect class="hit" x="'+(nx-r-7).toFixed(1)+'" y="'+(ny-sp/2+1).toFixed(1)+'" width="'+Math.max(40,w-nx+r-4).toFixed(1)+'" height="'+(sp-2).toFixed(1)+'"/>'+
        '<circle class="halo" cx="'+nx.toFixed(1)+'" cy="'+ny.toFixed(1)+'" r="'+(r+4.5).toFixed(1)+'"/>'+
        '<circle class="dot" cx="'+nx.toFixed(1)+'" cy="'+ny.toFixed(1)+'" r="'+r.toFixed(1)+'"/>'+
        '<text class="nm" x="'+(nx+14).toFixed(1)+'" y="'+(ny-1).toFixed(1)+'">'+esc(cut(it.n.name,chars))+'</text>'+
        '<text class="rl" x="'+(nx+14).toFixed(1)+'" y="'+(ny+12).toFixed(1)+'">'+esc(cut(sub,chars*1.14))+'</text></g>');
    });
    if(extra)nodes.push('<text class="mc-more" x="'+(fanX+14)+'" y="'+(fy+(items.length-mid)*sp+3).toFixed(1)+'">+'+extra+' weitere</text>');
  });

  var nameChars=(Math.min(fx-pad,colX-10-fx)*2)/7.4;
  var core='<g class="mc-focusgrp">'+
    '<circle class="mc-halo" cx="'+fx+'" cy="'+fy+'" r="'+(coreR*2.1).toFixed(0)+'"/>'+
    '<circle class="mc-orbit dash" cx="'+fx+'" cy="'+fy+'" r="'+(coreR*1.78).toFixed(0)+'"/>'+
    '<circle class="mc-orbit" cx="'+fx+'" cy="'+fy+'" r="'+(coreR*1.34).toFixed(0)+'"/>'+
    '<circle class="mc-core" cx="'+fx+'" cy="'+fy+'" r="'+coreR+'"/>'+
    '<text class="mc-mono" x="'+fx+'" y="'+(fy+5)+'">'+esc(f.name.slice(0,1).toUpperCase())+'</text>'+
    '<text class="mc-tag" x="'+fx+'" y="'+(fy-coreR*2.1-14).toFixed(0)+'">Zentrum</text>'+
    '<text class="mc-fname" x="'+fx+'" y="'+(fy+coreR*2.1+22).toFixed(0)+'">'+esc(cut(f.name,nameChars))+'</text>'+
    '<text class="mc-fmeta" x="'+fx+'" y="'+(fy+coreR*2.1+40).toFixed(0)+'">'+esc(cut(f.type+' · '+prov(f.id).l,nameChars*1.2))+'</text></g>';

  box.innerHTML='<svg role="img" aria-label="Wissensgraph rund um '+esc(f.name)+'">'+
    '<g class="l-edge">'+edges.join('')+'</g>'+core+cards.join('')+nodes.join('')+
    (fs.length?'':'<text class="mc-empty" x="'+Math.round(w/2)+'" y="'+Math.round(h/2)+'">Keine Beziehungen im aktiven Filter</text>')+
    '</svg>';
  paintPath();
}

function paintSel(){
  if(!el.canvas)return;
  var g=el.canvas.querySelectorAll('.mc-node');
  for(var i=0;i<g.length;i++)g[i].classList.toggle('sel',g[i].dataset.node===S.sel);
}

/* ── Pfad, Legende, Zähler ── */
function paintPath(){
  if(!el.path)return;
  var p=S.path.slice(-4),lead=S.path.length>4;
  el.path.innerHTML=(lead?'<i>…</i>':'')+p.map(function(id,i){
    var n=byId[id],last=i===p.length-1;
    return (i?'<i>/</i>':'')+'<button data-jump="'+esc(id)+'"'+(last?' class="now" disabled':'')+'>'+esc(cut(n?n.name:id,22))+'</button>';
  }).join('');
}
function paintFoot(){
  if(!el.foot)return;
  var none=!anyFilter();
  el.foot.innerHTML=ORDER.map(function(k){
    var on=none||S.filter[k];
    return '<button class="lg'+(on?' on':'')+'" data-prov="'+k+'" aria-pressed="'+(!!S.filter[k])+'">'+
      '<i style="background:var(--pv-'+PROV[k].c+')"></i>'+PROV[k].l+'</button>';
  }).join('')+'<span class="hint">Klick zeigt Details · Doppelklick setzt das Zentrum</span>';
}
function paintCount(){
  if(!el.count)return;
  var shown=G.nodes.filter(pass).length;
  el.count.textContent=anyFilter()?shown+' von '+G.nodes.length+' Nodes im Filter':G.nodes.length+' Nodes · '+G.links.length+' Kanten';
}

/* ── Detailspalte ── */
function noteFor(n){
  var a=ACT.filter(function(x){return x.target===n.id});
  if(a.length)return {t:'Letzte Schreibaktion · '+M.relTime(a[0].at),x:a[0].reason,cf:n.prov==='CONFLICT'};
  if(n.prov==='CONFLICT')return {t:'Widerspruch offen',x:'Zwei Notizen sagen Unterschiedliches. Punchy hat den Konflikt markiert und keine Version verworfen.',cf:true};
  if(n.prov==='HYPOTHESIS')return {t:'Unbestätigt',x:'Als Hypothese geführt. Punchy schreibt den Node erst fort, wenn Belege dazukommen.',cf:false};
  if(n.prov==='INFERENCE')return {t:'Abgeleitet',x:'Von Punchy aus dem Nutzungsverhalten erzeugt, nicht aus einer Selbstauskunft.',cf:false};
  return {t:'Bestätigt',x:'Von Hand gepflegt. Punchy liest den Node, ändert ihn aber nicht ohne Anlass.',cf:false};
}
function renderDetail(){
  if(!el.pane)return;
  if(S.tab==='log'){
    el.pane.innerHTML=ACT.map(function(a){
      var n=byId[a.target];
      return '<button class="mlog" data-jump="'+esc(a.target)+'">'+
        '<span class="top"><span class="bg '+esc(a.kind)+'">'+(a.kind==='node'?'Node':a.kind==='edge'?'Kante':'Update')+'</span>'+
        '<span class="when">'+esc(M.relTime(a.at))+'</span></span>'+
        '<span class="why">'+esc(a.reason)+'</span>'+
        '<span class="who"><i style="background:'+pc(a.target)+'"></i>'+esc(n?n.name:a.target)+
        '<svg width="16" height="16" viewBox="0 0 24 24"><use href="#i-arr"/></svg></span></button>';
    }).join('');
    return;
  }
  var n=byId[S.sel]||byId[S.focus];if(!n)return;
  var nb=M.neighbors(G.links,n.id),ids=Object.keys(nb),nt=noteFor(n);
  el.pane.innerHTML=
  '<div class="msec"><span class="mchip"><i style="background:'+pc(n.id)+'"></i>'+esc(n.type)+' · '+esc(prov(n.id).l)+'</span>'+
    '<h2>'+esc(n.name)+'</h2>'+
    '<p class="mfile">'+esc(n.path)+'</p>'+
    '<p class="mtext">'+esc(n.body)+'</p>'+
    '<div class="mact">'+(n.id===S.focus?'<span class="pill on">Aktuelles Zentrum</span>':'<button class="btn sm" data-center="'+esc(n.id)+'">Als Zentrum setzen</button>')+
    '<span class="mono">akt. '+esc(M.relTime(n.updated))+'</span></div></div>'+
  '<div class="msec mmeter"><h3>Confidence</h3>'+
    '<div class="mm"><b>'+Math.round(n.conf*100)+' %</b><span>Wie sicher Punchy diesen Node führt</span></div>'+
    '<div class="bar"><i style="width:'+Math.round(n.conf*100)+'%"></i></div>'+
    '<span class="mono">Quelle '+esc(n.source)+' · commit '+esc(n.commit)+'</span></div>'+
  '<div class="mkpi">'+
    '<div><b>'+ids.length+'</b><span>Beziehungen</span></div>'+
    '<div><b>'+n.tags.length+'</b><span>Tags</span></div>'+
    '<div><b>'+n.commits.length+'</b><span>Commits</span></div>'+
    '<div><b>'+esc(n.created.slice(0,7))+'</b><span>Angelegt</span></div></div>'+
  '<div class="msec"><h3>Beziehungen</h3>'+(ids.length?ids.slice(0,9).map(function(k){
    var t=byId[k];
    return '<button class="mrel" data-jump="'+esc(k)+'"><i style="background:'+pc(k)+'"></i>'+
      '<span class="t"><b>'+esc(t?t.name:k)+'</b><span>'+esc(nb[k])+' · '+esc(t?t.type:'')+'</span></span>'+
      '<svg width="16" height="16" viewBox="0 0 24 24"><use href="#i-arr"/></svg></button>';
  }).join(''):'<p class="mtext" style="margin:0">Keine Kanten hinterlegt.</p>')+'</div>'+
  (n.tags.length?'<div class="msec"><h3>Tags</h3><div class="mtags">'+n.tags.map(function(t){return '<i>'+esc(t)+'</i>'}).join('')+'</div></div>':'')+
  '<div class="msec"><h3>Punchy-Analyse</h3><div class="mnote'+(nt.cf?' cf':'')+'"><b>'+esc(nt.t)+'</b><p>'+esc(nt.x)+'</p></div></div>';
  var bar=el.pane.querySelector('.bar i');
  if(bar){var wv=bar.style.width;bar.style.width='0';requestAnimationFrame(function(){bar.style.width=wv})}
}

/* ── Suche ── */
function renderFind(){
  var q=S.q.trim().toLowerCase();
  if(q.length<2){el.res.classList.remove('on');el.res.innerHTML='';return}
  var hits=G.nodes.filter(function(n){
    return (n.name+' '+n.type+' '+n.path+' '+n.tags.join(' ')+' '+n.body).toLowerCase().indexOf(q)>-1;
  }).slice(0,8);
  el.res.innerHTML=hits.length?hits.map(function(n){
    return '<button data-jump="'+esc(n.id)+'"><i style="background:'+pc(n.id)+'"></i><span>'+esc(n.name)+'</span><em>'+esc(n.type)+'</em></button>';
  }).join(''):'<p class="none">Kein Treffer für „'+esc(S.q)+'“.</p>';
  el.res.classList.add('on');
}

/* ── Navigation ── */
function setFocus(id,keep){
  if(!byId[id])return;
  if(S.focus!==id){
    if(!keep){var i=S.path.indexOf(id);S.path=i>-1?S.path.slice(0,i+1):S.path.concat(id)}
    S.focus=id;S.facet=null;
  }
  S.sel=id;S.tab='node';paintTabs();render(true);renderDetail();
  if(el.res)el.res.classList.remove('on');
}
function select(id){if(!byId[id])return;S.sel=id;S.tab='node';paintTabs();paintSel();renderDetail()}
function paintTabs(){
  if(!el.tabs)return;
  var b=el.tabs.querySelectorAll('[data-tab]');
  for(var i=0;i<b.length;i++)b[i].classList.toggle('on',b[i].dataset.tab===S.tab);
}

/* ── Dashboard-Karte ── */
function paintCard(){
  var box=document.getElementById('mprev');if(!box)return;
  var w=box.clientWidth||280,h=box.clientHeight||90;
  if(w<40||h<30)return;
  var cx=Math.round(w*.17),cy=Math.round(h/2),coreR=Math.min(13,Math.round(h*.14));
  var fs=facetsOf(ROOT,5),n=fs.length||1,parts=[];
  fs.forEach(function(fc,i){
    var y=cy+(i-(n-1)/2)*Math.min(18,(h-14)/n),x=w-Math.round(w*.14)-Math.sin(Math.PI*(i+.5)/n)*9;
    parts.push('<path class="mc-edge on grow" style="--d:'+(i*55)+'ms" d="'+bez(cx+coreR+4,cy,x-6,y)+'"/>');
    parts.push('<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="3.4" fill="'+pc(fc.items[0].n.id)+'"/>');
  });
  box.innerHTML='<svg aria-hidden="true">'+parts.join('')+
    '<circle class="mc-halo" cx="'+cx+'" cy="'+cy+'" r="'+(coreR*2).toFixed(0)+'"/>'+
    '<circle class="mc-orbit dash" cx="'+cx+'" cy="'+cy+'" r="'+(coreR*1.55).toFixed(0)+'"/>'+
    '<circle class="mc-core" cx="'+cx+'" cy="'+cy+'" r="'+coreR+'"/></svg>';
  var st=document.getElementById('mstat');
  if(st)st.innerHTML='<div><b>'+G.nodes.length+'</b>Nodes</div><div><b>'+G.links.length+'</b>Kanten</div>'+
    '<div class="cf"><b>'+conflicts()+'</b>Konflikte</div>';
  var la=document.getElementById('mlast'),a=ACT[0];
  if(la&&a)la.innerHTML='<em>'+esc(byId[a.target]?byId[a.target].name:a.target)+'</em> · '+esc(cut(a.reason,90))+' <span class="mono">'+esc(M.relTime(a.at))+'</span>';
}

/* ── Mount ── */
function mount(){
  if(mounted)return;mounted=true;
  el.view=document.getElementById('v-marco');
  el.canvas=document.getElementById('mcanvas');
  el.path=document.getElementById('mpath');
  el.foot=document.getElementById('mlegend');
  el.pane=document.getElementById('mdetail');
  el.tabs=document.getElementById('mtabs');
  el.find=document.getElementById('mq');
  el.res=document.getElementById('mres');
  el.sub=document.getElementById('msub');
  el.count=document.getElementById('mcount');
  if(!el.view)return;

  if(el.sub)el.sub.textContent='Eigenes Markdown-Repo als Graph. '+conflicts()+' offene Konflikte · zuletzt ergänzt '+M.relTime(ACT.length?ACT[0].at:new Date().toISOString())+'.';
  paintFoot();paintCount();paintTabs();

  el.view.addEventListener('click',function(e){
    var t=e.target.closest('[data-facet]');
    if(t){if(S.facet!==t.dataset.facet){S.facet=t.dataset.facet;render(true)}return}
    var j=e.target.closest('[data-jump]');
    if(j){setFocus(j.dataset.jump);return}
    var c=e.target.closest('[data-center]');
    if(c){setFocus(c.dataset.center);return}
    var n=e.target.closest('[data-node]');
    if(n){select(n.dataset.node);return}
    var p=e.target.closest('[data-prov]');
    if(p){var k=p.dataset.prov;S.filter[k]=!S.filter[k];paintFoot();paintCount();render(true);return}
    var tb=e.target.closest('[data-tab]');
    if(tb){S.tab=tb.dataset.tab;paintTabs();renderDetail();return}
    if(e.target.closest('#mreset')){S.filter={};S.path=[ROOT];paintFoot();paintCount();setFocus(ROOT,true);return}
  });
  el.view.addEventListener('dblclick',function(e){
    var n=e.target.closest('[data-node]');if(n)setFocus(n.dataset.node);
  });
  el.view.addEventListener('keydown',function(e){
    if(e.key!=='Enter'&&e.key!==' ')return;
    if(!e.target.closest('[data-node],[data-facet]'))return;
    e.preventDefault();e.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));
  });
  if(el.find){
    el.find.addEventListener('input',function(){S.q=this.value;renderFind()});
    el.find.addEventListener('keydown',function(e){
      if(e.key==='Escape'){this.value='';S.q='';renderFind();this.blur()}
      if(e.key==='Enter'){var b=el.res.querySelector('[data-jump]');if(b)b.click()}
    });
    document.addEventListener('pointerdown',function(e){
      if(el.res&&e.target.closest&&!e.target.closest('.mfind'))el.res.classList.remove('on');
    });
  }
  document.addEventListener('keydown',function(e){
    if(e.key!=='/'||!el.view.classList.contains('on'))return;
    if(/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName))return;
    e.preventDefault();el.find&&el.find.focus();
  });
  if(window.ResizeObserver){
    ro=new ResizeObserver(function(){clearTimeout(rt);rt=setTimeout(function(){if(rendered)render(false)},140)});
    ro.observe(el.canvas);
  }
}
function enter(){
  mount();
  requestAnimationFrame(function(){render(!rendered);rendered=true;renderDetail()});
}
function boot(){setTimeout(paintCard,420)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
window.addEventListener('resize',function(){clearTimeout(ct);ct=setTimeout(paintCard,200)});
return {enter:enter,graph:G,select:select};
})();

