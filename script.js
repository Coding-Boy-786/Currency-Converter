// ─── DATA ────────────────────────────────────────────────────────
const CURRENCIES=[
  {code:'USD',name:'US Dollar',flag:'🇺🇸',sym:'$'},
  {code:'EUR',name:'Euro',flag:'🇪🇺',sym:'€'},
  {code:'GBP',name:'British Pound',flag:'🇬🇧',sym:'£'},
  {code:'PKR',name:'Pakistani Rupee',flag:'🇵🇰',sym:'₨'},
  {code:'JPY',name:'Japanese Yen',flag:'🇯🇵',sym:'¥'},
  {code:'AED',name:'UAE Dirham',flag:'🇦🇪',sym:'د.إ'},
  {code:'SAR',name:'Saudi Riyal',flag:'🇸🇦',sym:'﷼'},
  {code:'CAD',name:'Canadian Dollar',flag:'🇨🇦',sym:'C$'},
  {code:'AUD',name:'Australian Dollar',flag:'🇦🇺',sym:'A$'},
  {code:'CHF',name:'Swiss Franc',flag:'🇨🇭',sym:'Fr'},
  {code:'CNY',name:'Chinese Yuan',flag:'🇨🇳',sym:'¥'},
  {code:'INR',name:'Indian Rupee',flag:'🇮🇳',sym:'₹'},
  {code:'KWD',name:'Kuwaiti Dinar',flag:'🇰🇼',sym:'KD'},
  {code:'BHD',name:'Bahraini Dinar',flag:'🇧🇭',sym:'BD'},
  {code:'OMR',name:'Omani Rial',flag:'🇴🇲',sym:'OMR'},
  {code:'QAR',name:'Qatari Riyal',flag:'🇶🇦',sym:'QR'},
  {code:'TRY',name:'Turkish Lira',flag:'🇹🇷',sym:'₺'},
  {code:'RUB',name:'Russian Ruble',flag:'🇷🇺',sym:'₽'},
  {code:'KRW',name:'South Korean Won',flag:'🇰🇷',sym:'₩'},
  {code:'SGD',name:'Singapore Dollar',flag:'🇸🇬',sym:'S$'},
  {code:'HKD',name:'Hong Kong Dollar',flag:'🇭🇰',sym:'HK$'},
  {code:'MYR',name:'Malaysian Ringgit',flag:'🇲🇾',sym:'RM'},
  {code:'THB',name:'Thai Baht',flag:'🇹🇭',sym:'฿'},
  {code:'IDR',name:'Indonesian Rupiah',flag:'🇮🇩',sym:'Rp'},
  {code:'BDT',name:'Bangladeshi Taka',flag:'🇧🇩',sym:'৳'},
  {code:'NPR',name:'Nepali Rupee',flag:'🇳🇵',sym:'Rs'},
  {code:'LKR',name:'Sri Lankan Rupee',flag:'🇱🇰',sym:'Rs'},
  {code:'AFN',name:'Afghan Afghani',flag:'🇦🇫',sym:'؋'},
  {code:'IQD',name:'Iraqi Dinar',flag:'🇮🇶',sym:'IQD'},
  {code:'JOD',name:'Jordanian Dinar',flag:'🇯🇴',sym:'JD'},
  {code:'EGP',name:'Egyptian Pound',flag:'🇪🇬',sym:'E£'},
  {code:'ZAR',name:'South African Rand',flag:'🇿🇦',sym:'R'},
  {code:'NGN',name:'Nigerian Naira',flag:'🇳🇬',sym:'₦'},
  {code:'KES',name:'Kenyan Shilling',flag:'🇰🇪',sym:'KSh'},
  {code:'MXN',name:'Mexican Peso',flag:'🇲🇽',sym:'$'},
  {code:'BRL',name:'Brazilian Real',flag:'🇧🇷',sym:'R$'},
  {code:'ARS',name:'Argentine Peso',flag:'🇦🇷',sym:'$'},
  {code:'NZD',name:'New Zealand Dollar',flag:'🇳🇿',sym:'NZ$'},
  {code:'SEK',name:'Swedish Krona',flag:'🇸🇪',sym:'kr'},
  {code:'NOK',name:'Norwegian Krone',flag:'🇳🇴',sym:'kr'},
  {code:'DKK',name:'Danish Krone',flag:'🇩🇰',sym:'kr'},
  {code:'PLN',name:'Polish Zloty',flag:'🇵🇱',sym:'zł'},
  {code:'CZK',name:'Czech Koruna',flag:'🇨🇿',sym:'Kč'},
  {code:'HUF',name:'Hungarian Forint',flag:'🇭🇺',sym:'Ft'},
  {code:'PHP',name:'Philippine Peso',flag:'🇵🇭',sym:'₱'},
  {code:'VND',name:'Vietnamese Dong',flag:'🇻🇳',sym:'₫'},
  {code:'TWD',name:'Taiwan Dollar',flag:'🇹🇼',sym:'NT$'},
  {code:'ILS',name:'Israeli Shekel',flag:'🇮🇱',sym:'₪'},
  {code:'CLP',name:'Chilean Peso',flag:'🇨🇱',sym:'$'},
  {code:'COP',name:'Colombian Peso',flag:'🇨🇴',sym:'$'},
  {code:'PEN',name:'Peruvian Sol',flag:'🇵🇪',sym:'S/'},
];

const POPULAR=[
  {from:'USD',to:'PKR',trend:'up',chg:'+0.12%'},
  {from:'USD',to:'EUR',trend:'dn',chg:'-0.08%'},
  {from:'GBP',to:'USD',trend:'up',chg:'+0.31%'},
  {from:'USD',to:'AED',trend:'up',chg:'+0.01%'},
  {from:'USD',to:'SAR',trend:'up',chg:'+0.02%'},
  {from:'EUR',to:'GBP',trend:'dn',chg:'-0.15%'},
  {from:'USD',to:'INR',trend:'dn',chg:'-0.05%'},
  {from:'USD',to:'CNY',trend:'up',chg:'+0.07%'},
];

const FALLBACK={
  USD:1,EUR:0.92,GBP:0.79,PKR:278.5,JPY:149.2,AED:3.67,
  SAR:3.75,CAD:1.36,AUD:1.53,CHF:0.88,CNY:7.24,INR:83.1,
  KWD:0.308,BHD:0.377,OMR:0.385,QAR:3.64,TRY:32.1,RUB:91.2,
  KRW:1325,SGD:1.34,HKD:7.82,MYR:4.69,THB:35.1,IDR:15600,
  BDT:110,NPR:133,LKR:321,AFN:70.1,IQD:1310,JOD:0.709,
  EGP:48.7,ZAR:18.6,NGN:1590,KES:129,MXN:17.2,BRL:4.97,
  ARS:875,NZD:1.63,SEK:10.4,NOK:10.6,DKK:6.89,PLN:4.02,
  CZK:22.8,HUF:357,PHP:56.1,VND:24450,TWD:31.8,ILS:3.68,
  CLP:950,COP:3950,PEN:3.74,
};

// ─── STATE ───────────────────────────────────────────────────────
const S={from:'USD',to:'PKR',amount:1,rates:{...FALLBACK},busy:false,history:[],dark:false};
let srchFilt=[...CURRENCIES],modalTarget=null,inputTimer=null,toastTimer=null;
const $=id=>document.getElementById(id);
const gc=c=>CURRENCIES.find(x=>x.code===c);

// ─── FORMAT NUMBER ───────────────────────────────────────────────
function fmt(n){
  if(n==null||isNaN(n))return'—';
  if(n>=1e6)return(n/1e6).toFixed(3)+'M';
  if(n>=1)return n.toLocaleString('en-US',{maximumFractionDigits:4});
  return n.toLocaleString('en-US',{maximumFractionDigits:6});
}
function getRate(a,b){return(S.rates[a]&&S.rates[b])?S.rates[b]/S.rates[a]:null}
function calc(){const r=getRate(S.from,S.to);return r!=null?S.amount*r:null}
function timeAgo(ts){const s=Math.floor((Date.now()-ts)/1000);if(s<60)return'just now';if(s<3600)return Math.floor(s/60)+'m ago';return Math.floor(s/3600)+'h ago'}

// ─── RENDER ──────────────────────────────────────────────────────
function renderUI(){
  const fc=gc(S.from),tc=gc(S.to);
  if(!fc||!tc)return;
  $('fromFlag').textContent=fc.flag;$('fromCode').textContent=fc.code;$('fromName').textContent=fc.name;
  $('toFlag').textContent=tc.flag;$('toCode').textContent=tc.code;$('toName').textContent=tc.name;
  const result=calc(),rate=getRate(S.from,S.to);
  const el=$('resAmt');
  el.classList.add('fade');
  setTimeout(()=>{el.textContent=result!=null?fmt(result):'—';el.classList.remove('fade');},180);
  $('toAmt').value=result!=null?result.toFixed(4):'';
  $('resFrom').textContent=`${S.amount.toLocaleString()} ${S.from} =`;
  $('resCur').textContent=`${tc.name} (${tc.code})`;
  $('exRate').textContent=rate?`1 ${S.from} = ${fmt(rate)} ${S.to}`:'—';
}

// ─── INPUT — key fix: NO global Enter handler that causes "refresh" feel ──
$('fromAmt').addEventListener('input',function(){
  clearTimeout(inputTimer);
  inputTimer=setTimeout(()=>{
    const v=parseFloat(this.value);
    const err=$('fromErr');
    if(isNaN(v)||v<0){err.classList.add('on');return;}
    err.classList.remove('on');
    S.amount=v;
    renderUI();
  },150);
});

// Enter in the input → just update, never submit/refresh
$('fromAmt').addEventListener('keydown',function(e){
  if(e.key==='Enter'){e.preventDefault();}
});

function setAmt(v){S.amount=v;$('fromAmt').value=v;renderUI();}

// ─── SWAP ────────────────────────────────────────────────────────
$('swapBtn').addEventListener('click',()=>{[S.from,S.to]=[S.to,S.from];renderUI();renderRateCards();});

// ─── REFRESH RATES ───────────────────────────────────────────────
$('convBtn').addEventListener('click',refreshRates);

async function refreshRates(){
  if(S.busy)return;
  S.busy=true;
  $('convBtn').classList.add('loading');
  try{
    const r=await fetch(`https://open.er-api.com/v6/latest/${S.from}`);
    if(!r.ok)throw 0;
    const d=await r.json();
    if(d.rates){S.rates=d.rates;S.rates[S.from]=1;}
  }catch{showToast('Using cached rates');}
  renderUI();renderRateCards();
  const res=calc();
  if(res!=null&&S.amount>0){
    S.history.unshift({from:S.from,to:S.to,amount:S.amount,result:res,ts:Date.now()});
    if(S.history.length>15)S.history.pop();
    if($('pane-history').style.display!=='none')renderHistory();
  }
  await new Promise(r=>setTimeout(r,600));
  $('convBtn').classList.remove('loading');
  S.busy=false;
  showToast('✓ Rates refreshed');
}

// ─── COPY ────────────────────────────────────────────────────────
function copyResult(){
  const v=$('toAmt').value;
  if(!v)return;
  const text=`${S.amount} ${S.from} = ${v} ${S.to}`;
  if(navigator.clipboard){navigator.clipboard.writeText(text).then(()=>showToast('Copied!'));}
  else{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();showToast('Copied!');}
}

// ─── RATE CARDS ──────────────────────────────────────────────────
function renderRateCards(){
  [$('ratesGridMain'),$('ratesGrid')].forEach(el=>{
    if(!el)return;
    el.innerHTML=POPULAR.map((p,i)=>{
      const r=getRate(p.from,p.to),tc=gc(p.to);
      return`<div class="rate-card" onclick="setPair('${p.from}','${p.to}')" style="animation-delay:${i*0.05}s">
        <div class="rc-top"><span class="rc-pair">${p.from}/${p.to}</span><span class="rc-flag">${tc?tc.flag:''}</span></div>
        <div class="rc-val">${r!=null?fmt(r):'—'}</div>
        <div class="rc-trend ${p.trend}">${p.trend==='up'?'↑':'↓'} ${p.chg}</div>
      </div>`;
    }).join('');
  });
}

function setPair(from,to){
  S.from=from;S.to=to;
  renderUI();renderRateCards();
  if($('pane-history').style.display!=='none'||$('pane-rates').style.display!=='none')switchTab('converter');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ─── HISTORY ─────────────────────────────────────────────────────
function renderHistory(){
  const el=$('histList');
  if(!S.history.length){el.innerHTML='<div class="no-hist">No conversions yet — press "Refresh Rates" to start!</div>';return;}
  el.innerHTML=S.history.map((h,i)=>`
    <div class="hist-item">
      <div class="hist-main">
        <div class="hist-from">${h.amount.toLocaleString()} ${h.from}</div>
        <div class="hist-res">${fmt(h.result)} ${h.to}</div>
      </div>
      <div class="hist-time">${timeAgo(h.ts)}</div>
      <button class="hist-use" onclick="reuse(${i})">Use</button>
    </div>`).join('');
}

function reuse(i){const h=S.history[i];S.from=h.from;S.to=h.to;S.amount=h.amount;$('fromAmt').value=h.amount;switchTab('converter');renderUI();renderRateCards();}
function clearHistory(){S.history=[];renderHistory();}

// ─── TABS ────────────────────────────────────────────────────────
function switchTab(name){
  ['converter','history','rates'].forEach(t=>{
    const pane=$('pane-'+t);
    if(pane)pane.style.display=t===name?'block':'none';
    const btn=document.querySelector(`[data-tab="${t}"]`);
    if(btn)btn.classList.toggle('active',t===name);
  });
  if(name==='history')renderHistory();
  if(name==='rates')renderRateCards();
}

// ─── MODAL ───────────────────────────────────────────────────────
$('srchInput').addEventListener('input',filterCur);
$('srchInput').addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Escape')closeModal();});

function openModal(target){
  modalTarget=target;
  $('modalTitle').textContent=target==='from'?'Source Currency':'Target Currency';
  $('srchInput').value='';srchFilt=[...CURRENCIES];renderCurList();
  $('overlay').classList.add('open');
  setTimeout(()=>$('srchInput').focus(),280);
}
function closeModal(){$('overlay').classList.remove('open');modalTarget=null;}
$('overlay').addEventListener('click',e=>{if(e.target===$('overlay'))closeModal();});

function filterCur(){
  const q=$('srchInput').value.toLowerCase();
  srchFilt=q?CURRENCIES.filter(c=>c.code.toLowerCase().includes(q)||c.name.toLowerCase().includes(q)):[...CURRENCIES];
  renderCurList();
}
function renderCurList(){
  const cur=modalTarget==='from'?S.from:S.to;
  $('curList').innerHTML=srchFilt.map(c=>`
    <div class="cur-opt${c.code===cur?' sel':''}" onclick="pickCur('${c.code}')">
      <span class="co-flag">${c.flag}</span>
      <span class="co-code">${c.code}</span>
      <span class="co-name">${c.name}</span>
      <span class="co-sym">${c.sym}</span>
    </div>`).join('');
}
function pickCur(code){if(!modalTarget)return;if(modalTarget==='from')S.from=code;else S.to=code;closeModal();renderUI();renderRateCards();}

// ─── DARK MODE ───────────────────────────────────────────────────
$('themeBtn').addEventListener('click',()=>{
  S.dark=!S.dark;
  document.documentElement.setAttribute('data-theme',S.dark?'dark':'');
  $('themeBtn').textContent=S.dark?'☀️':'🌙';
});

// ─── KEYBOARD (ONLY ESC — nothing that causes page interference) ──
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

// ─── TOAST ───────────────────────────────────────────────────────
function showToast(msg){
  const t=$('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2000);
}

// ─── INIT ────────────────────────────────────────────────────────
renderUI();renderRateCards();renderHistory();

// silently load live rates on start
(async()=>{
  try{
    const r=await fetch('https://open.er-api.com/v6/latest/USD');
    if(r.ok){const d=await r.json();if(d.rates){S.rates=d.rates;S.rates.USD=1;renderUI();renderRateCards();}}
  }catch{}
})();