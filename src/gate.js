/* Private-layer access gate. Change ACCESS_CODE to set the 6-digit code. */
(function(){
var ACCESS_CODE='428173';
var KEY='mr-layer-unlocked';

var gate=document.getElementById('gate');
if(!gate)return;
var DEST=gate.hasAttribute('data-dest')?gate.getAttribute('data-dest'):'Private Layer.html';
var ins=[].slice.call(gate.querySelectorAll('.gate-code input')),
    go=gate.querySelector('.gate-go'),
    card=gate.querySelector('.gate-card');

function code(){return ins.map(function(i){return i.value}).join('')}
function sync(){
  ins.forEach(function(i){i.classList.toggle('filled',!!i.value)});
  go.disabled=code().length<6;
}
function unlocked(){
  if(DEST){location.href=DEST;return}
  gate.classList.add('done');
  card.querySelector('h3').textContent='Private Layer';
  card.querySelector('.gate-sub').textContent='Unlocked. This offline copy carries the portfolio only \u2014 the private layer lives in the hosted version.';
  card.querySelector('.gate-code').remove();
  go.textContent='Close';go.disabled=false;
  go.onclick=close;
}
function open(){
  if(localStorage.getItem(KEY)==='1'&&DEST){location.href=DEST;return}
  gate.hidden=false;
  requestAnimationFrame(function(){gate.classList.add('in')});
  setTimeout(function(){ins[0].focus()},260);
}
function close(){
  gate.classList.remove('in','bad');
  setTimeout(function(){gate.hidden=true;ins.forEach(function(i){i.value=''});sync()},320);
}
function submit(){
  if(code().length<6)return;
  if(code()===ACCESS_CODE){
    gate.classList.remove('bad');gate.classList.add('ok');
    try{localStorage.setItem(KEY,'1')}catch(e){}
    go.textContent='Unlocked';
    setTimeout(unlocked,520);
  }else{
    gate.classList.remove('bad');
    void card.offsetWidth;
    gate.classList.add('bad');
    setTimeout(function(){ins.forEach(function(i){i.value=''});sync();ins[0].focus()},420);
  }
}

ins.forEach(function(inp,idx){
  inp.addEventListener('input',function(){
    inp.value=inp.value.replace(/\D/g,'').slice(0,1);
    sync();
    if(inp.value&&idx<5)ins[idx+1].focus();
    if(code().length===6)submit();
  });
  inp.addEventListener('keydown',function(e){
    if(e.key==='Backspace'&&!inp.value&&idx>0){ins[idx-1].focus();ins[idx-1].value='';sync();e.preventDefault()}
    if(e.key==='ArrowLeft'&&idx>0){ins[idx-1].focus();e.preventDefault()}
    if(e.key==='ArrowRight'&&idx<5){ins[idx+1].focus();e.preventDefault()}
    if(e.key==='Enter')submit();
  });
  inp.addEventListener('paste',function(e){
    var d=(e.clipboardData||window.clipboardData).getData('text').replace(/\D/g,'').slice(0,6);
    if(!d)return;
    e.preventDefault();
    d.split('').forEach(function(ch,i){if(ins[i])ins[i].value=ch});
    sync();
    ins[Math.min(d.length,5)].focus();
    if(d.length===6)submit();
  });
});

go.addEventListener('click',submit);
gate.querySelector('.gate-x').addEventListener('click',close);
gate.querySelector('.gate-back').addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!gate.hidden)close()});
document.querySelectorAll('.gate-open').forEach(function(b){b.addEventListener('click',open)});
})();
