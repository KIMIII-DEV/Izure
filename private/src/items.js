/* ── private/items.js ── */
/* Darstellung einer einzelnen Aufgabe — für alle neun Typen.

   Liegt in einer eigenen Datei, weil sich drei Stellen dieselbe Darstellung
   teilen: das Quiz im Lernfeld, die Zwischenprüfung und deren Auswertung.
   Eine Kopie je Stelle hätte bedeutet, dass ein neuer Aufgabentyp an drei
   Orten nachgezogen werden muss — und dass er irgendwann nur an zweien
   nachgezogen wird.

   `it` ist immer eine von LEARN.present() aufbereitete Ansicht: Optionen
   bereits gemischt, Lösungsindex mitgeführt. Dieses Modul weiss nichts über
   die richtige Antwort ausser dem, was für die Anzeige nötig ist. */
window.ITEMS=(function(){
'use strict';

var K=['A','B','C','D','E','F'];

var TYPE_LABEL={
  mc:'Einfachauswahl', multi:'Mehrfachauswahl', tf:'Wahr oder falsch',
  cloze:'Lückentext', type:'Freie Eingabe', calc:'Rechenaufgabe',
  order:'Reihenfolge', match:'Zuordnung', odd:'Ausreißer finden'
};

function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

/* `it` ist eine von LEARN.present() aufbereitete Ansicht: Optionen bereits
   gemischt, Lösungsindex mitgeführt. Der Renderer weiss nichts über die
   richtige Antwort ausser dem, was für die Anzeige nötig ist. */
function body(it){
  var t=it.t;

  if(t==='mc'||t==='odd'){
    return '<p class="q">'+esc(it.q)+'</p><div class="opts">'+
      it.a.map(function(a,n){
        return '<button class="opt" type="button" data-n="'+n+'" style="--d:'+n+'">'+
          '<span class="k">'+K[n]+'</span><span class="ot">'+esc(a)+'</span></button>';
      }).join('')+'</div>';
  }

  if(t==='multi'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      '<p class="qsub">Mehrere Antworten sind richtig.</p><div class="opts">'+
      it.a.map(function(a,n){
        return '<button class="opt box" type="button" data-n="'+n+'" aria-pressed="false" style="--d:'+n+'">'+
          '<span class="k">'+K[n]+'</span><span class="ot">'+esc(a)+'</span></button>';
      }).join('')+'</div>';
  }

  if(t==='tf'){
    return '<p class="q">'+esc(it.q)+'</p><div class="opts tfopts">'+
      '<button class="opt" type="button" data-v="1"><span class="k">✓</span><span class="ot">Stimmt</span></button>'+
      '<button class="opt" type="button" data-v="0"><span class="k">✕</span><span class="ot">Stimmt nicht</span></button></div>';
  }

  if(t==='cloze'){
    var n=-1;
    var html=esc(it.txt).replace(/\{\{(\d+)\}\}/g,function(){
      n++;
      var g=it.gaps[n];
      if(!g)return '____';
      if(g.free)
        return '<input class="gapin" type="text" data-g="'+n+'" size="'+Math.max(6,g.s.length+2)+
               '" autocomplete="off" spellcheck="false" aria-label="Lücke '+(n+1)+'">';
      return '<select class="gapsel" data-g="'+n+'" aria-label="Lücke '+(n+1)+'"><option value="">— wählen —</option>'+
        g.o.map(function(o){return '<option>'+esc(o)+'</option>'}).join('')+'</select>';
    });
    return (it.q?'<p class="q">'+esc(it.q)+'</p>':'')+
           '<p class="qsub">Lücken füllen.</p><div class="clz">'+html+'</div>';
  }

  if(t==='type'||t==='calc'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      (it.hint?'<p class="qsub">'+esc(it.hint)+'</p>':'')+
      '<div class="typerow"><input class="typein" type="text" autocomplete="off" spellcheck="false" '+
      'placeholder="Antwort eintippen" aria-label="Antwort">'+
      (it.unit?'<span class="unit mono">'+esc(it.unit)+'</span>':'')+'</div>';
  }

  if(t==='order'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      '<p class="qsub">In die richtige Reihenfolge bringen — antippen zum Übernehmen, in der Liste antippen zum Zurücklegen.</p>'+
      '<ol class="ordslot"></ol>'+
      '<div class="ordpool">'+it.mix.map(function(s){
        return '<button class="chip ord" type="button" data-v="'+esc(s)+'">'+esc(s)+'</button>';
      }).join('')+'</div>';
  }

  if(t==='match'){
    return '<p class="q">'+esc(it.q)+'</p>'+
      '<p class="qsub">Jeder Zeile das passende Gegenstück zuordnen.</p>'+
      '<div class="matchgrid">'+it.left.map(function(l,n){
        return '<div class="mrow"><span class="ml" id="ml'+n+'">'+esc(l)+'</span>'+
          '<select class="msel" data-n="'+n+'" aria-labelledby="ml'+n+'"><option value="">— wählen —</option>'+
          it.right.map(function(r){return '<option>'+esc(r)+'</option>'}).join('')+
          '</select></div>';
      }).join('')+'</div>';
  }

  return '<p class="q">'+esc(it.q||'')+'</p>';
}

/* Verdrahtet den Körper. `onChange(value, complete)` meldet jede Änderung;
   `preset` stellt eine früher gegebene Antwort wieder her — die Klausur
   erlaubt Sprünge zwischen den Aufgaben und darf dabei nichts vergessen. */
function wire(root,it,onChange,preset){
  var t=it.t,val=preset;
  var q=function(s){return root.querySelector(s)},
      qa=function(s){return [].slice.call(root.querySelectorAll(s))};

  function emit(complete){onChange(val,complete)}

  if(t==='mc'||t==='odd'){
    qa('.opt').forEach(function(o){
      if(preset===+o.dataset.n)o.classList.add('pick');
      o.addEventListener('click',function(){
        qa('.opt').forEach(function(x){x.classList.toggle('pick',x===o)});
        val=+o.dataset.n;emit(true);
      });
    });
    emit(typeof preset==='number');

  }else if(t==='multi'){
    val=Array.isArray(preset)?preset.slice():[];
    qa('.opt').forEach(function(o){
      var n=+o.dataset.n;
      if(val.indexOf(n)>-1){o.classList.add('pick');o.setAttribute('aria-pressed','true')}
      o.addEventListener('click',function(){
        var at=val.indexOf(n);
        if(at>-1)val.splice(at,1);else val.push(n);
        o.classList.toggle('pick',at===-1);
        o.setAttribute('aria-pressed',at===-1?'true':'false');
        emit(val.length>0);
      });
    });
    emit(val.length>0);

  }else if(t==='tf'){
    qa('.opt').forEach(function(o){
      var v=o.dataset.v==='1';
      if(preset===v)o.classList.add('pick');
      o.addEventListener('click',function(){
        qa('.opt').forEach(function(x){x.classList.toggle('pick',x===o)});
        val=v;emit(true);
      });
    });
    emit(typeof preset==='boolean');

  }else if(t==='cloze'){
    var fields=it.gaps.map(function(_,n){return q('[data-g="'+n+'"]')});
    if(Array.isArray(preset))fields.forEach(function(el,n){if(el)el.value=preset[n]||''});
    var upd=function(){
      val=fields.map(function(el){return el?el.value:''});
      emit(val.every(function(v){return String(v).trim()!==''}));
    };
    fields.forEach(function(el){
      if(!el)return;
      el.addEventListener('change',upd);
      el.addEventListener('input',upd);
    });
    upd();

  }else if(t==='type'||t==='calc'){
    var inp=q('.typein');
    if(typeof preset==='string')inp.value=preset;
    var updT=function(){val=inp.value;emit(inp.value.trim()!=='')};
    inp.addEventListener('input',updT);
    updT();
    setTimeout(function(){inp.focus({preventScroll:true})},60);

  }else if(t==='order'){
    var slot=q('.ordslot');
    var sync=function(){
      val=[].slice.call(slot.children).map(function(li){return li.dataset.v});
      emit(val.length===it.items.length);
    };
    var put=function(chip){
      var li=document.createElement('li');
      li.dataset.v=chip.dataset.v;
      li.className='oli';
      li.innerHTML='<span class="ov">'+esc(chip.dataset.v)+'</span>';
      li.setAttribute('role','button');
      li.setAttribute('tabindex','0');
      li.setAttribute('aria-label','„'+chip.dataset.v+'“ zurücklegen');
      var back=function(){
        if(slot.classList.contains('lock'))return;
        chip.disabled=false;chip.classList.remove('used');
        li.remove();sync();
      };
      li.addEventListener('click',back);
      li.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();back()}});
      slot.appendChild(li);
      chip.disabled=true;chip.classList.add('used');
    };
    qa('.ordpool .chip').forEach(function(c){
      c.addEventListener('click',function(){if(!c.disabled)  {put(c);sync()}});
    });
    if(Array.isArray(preset))preset.forEach(function(v){
      var c=qa('.ordpool .chip').filter(function(x){return x.dataset.v===v&&!x.disabled})[0];
      if(c)put(c);
    });
    sync();

  }else if(t==='match'){
    var sels=it.left.map(function(_,n){return q('.msel[data-n="'+n+'"]')});
    if(Array.isArray(preset))sels.forEach(function(el,n){if(el)el.value=preset[n]||''});
    var updM=function(){
      val=sels.map(function(el){return el?el.value:''});
      emit(val.every(function(v){return v!==''}));
    };
    sels.forEach(function(el){if(el)el.addEventListener('change',updM)});
    updM();
  }
}

/* Lösung im Körper markieren. `res` kommt von LEARN.grade(). */
function markBody(root,it,res,given){
  var t=it.t;
  var q=function(s){return root.querySelector(s)},
      qa=function(s){return [].slice.call(root.querySelectorAll(s))};

  if(t==='mc'||t==='odd'||t==='tf'){
    qa('.opt').forEach(function(x,n){
      x.classList.add('lock');
      var isSol=t==='tf'?((x.dataset.v==='1')===it.v):(n===it.c);
      if(isSol)x.classList.add('right');
      else if(x.classList.contains('pick'))x.classList.add('wrong');
    });

  }else if(t==='multi'){
    qa('.opt').forEach(function(x,n){
      x.classList.add('lock');
      if(it.cs.indexOf(n)>-1)x.classList.add('right');
      else if(x.classList.contains('pick'))x.classList.add('wrong');
    });

  }else if(t==='cloze'){
    it.gaps.forEach(function(g,n){
      var el=q('[data-g="'+n+'"]');if(!el)return;
      el.disabled=true;
      var ok=res.detail&&res.detail[n];
      el.classList.add(ok?'gok':'gno');
      if(!ok)el.insertAdjacentHTML('afterend','<span class="gfix">'+esc(g.s)+'</span>');
    });

  }else if(t==='type'||t==='calc'){
    var inp=q('.typein');
    if(inp){
      inp.disabled=true;
      inp.classList.add(res.ok?'gok':'gno');
      if(!res.ok)q('.typerow').insertAdjacentHTML('beforeend','<span class="gfix">'+esc(it.ans[0])+'</span>');
    }

  }else if(t==='order'){
    var slot=q('.ordslot');
    if(slot){
      slot.classList.add('lock');
      [].slice.call(slot.children).forEach(function(li,n){
        li.classList.add(li.dataset.v===it.items[n]?'gok':'gno');
        li.removeAttribute('role');li.removeAttribute('tabindex');
      });
    }
    qa('.ordpool .chip').forEach(function(c){c.disabled=true});
    if(!res.ok&&slot)
      slot.insertAdjacentHTML('afterend','<ol class="ordsol">'+it.items.map(function(s){
        return '<li>'+esc(s)+'</li>';
      }).join('')+'</ol>');

  }else if(t==='match'){
    qa('.msel').forEach(function(el,n){
      el.disabled=true;
      var ok=res.detail&&res.detail[n];
      el.classList.add(ok?'gok':'gno');
      if(!ok)el.insertAdjacentHTML('afterend','<span class="gfix">'+esc(it.sol[n])+'</span>');
    });
  }
}

/* Gegebene Antwort als Text — für die Klausurauswertung, die den Körper
   nicht mehr zeigt. */
function answerText(it,given){
  var t=it.t;
  if(given===undefined||given===null||given==='')return 'keine';
  if(t==='mc'||t==='odd')return it.a[given]!==undefined?it.a[given]:'keine';
  if(t==='tf')return given?'Stimmt':'Stimmt nicht';
  if(t==='multi')return given.length?given.slice().sort(function(a,b){return a-b}).map(function(n){return it.a[n]}).join(' · '):'keine';
  if(t==='cloze'||t==='match')return given.filter(Boolean).length?given.join(' · '):'keine';
  if(t==='order')return given.length?given.join(' → '):'keine';
  return String(given);
}
function solutionText(it){
  var t=it.t;
  if(t==='mc'||t==='odd')return it.a[it.c];
  if(t==='tf')return it.v?'Stimmt':'Stimmt nicht';
  if(t==='multi')return it.cs.map(function(n){return it.a[n]}).join(' · ');
  if(t==='cloze')return it.gaps.map(function(g){return g.s}).join(' · ');
  if(t==='type'||t==='calc')return it.ans[0]+(it.unit?' '+it.unit:'');
  if(t==='order')return it.items.join(' → ');
  if(t==='match')return it.sol.join(' · ');
  return '';
}


function tagRow(it,right){
  return '<span class="qtags"><i>'+esc(TYPE_LABEL[it.t]||it.t)+'</i>'+
    (it.k?'<i class="alt">'+esc(it.k)+'</i>':'')+
    (right?'<span class="mono sc">'+esc(right)+'</span>':'')+'</span>';
}

return {K:K, TYPE_LABEL:TYPE_LABEL, esc:esc, body:body, wire:wire, markBody:markBody,
        answerText:answerText, solutionText:solutionText, tagRow:tagRow};
})();
