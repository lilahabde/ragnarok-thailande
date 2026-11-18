/* ============ CONFIG ============ */
const CONFIG = {
  // The CTA destination is the href of the CTA buttons in index.html (exact Steam URL, works without JS)
  navDelayMs: 300                                   // max wait for tracker before navigating
};

/* ============ I18N ============ */
const T = {
 en:{
  cta:'PLAY FREE ON STEAM', ctaNote:'Free to play with optional in-app purchases. For Windows PC on Steam.',
  h1:'Midgard Is Calling You Back.',
  heroSub:'The world you remember, rebuilt as a vast open world. Choose the class you loved, meet the new Druid and begin a new adventure today.',
  s1:'FREE',s1d:'to play', s2:'OPEN',s2d:'world adventure', s3:'8',s3d:'classes at launch', s4:'PC + MOBILE',s4d:'progress in sync',
  clsEye:'Choose your path', clsTitle:'Remember Your First Adventure?',
  clsSub:'Choose the class you loved, or try a new path.',
  c_sword:'Swordman',t_sword:'Frontline', c_mage:'Mage',t_mage:'Spellcaster', c_archer:'Archer',t_archer:'Ranged', c_aco:'Acolyte',t_aco:'Support',
  c_thief:'Thief',t_thief:'Agile', c_mer:'Merchant',t_mer:'Trader', c_gun:'Gunslinger',t_gun:'Gunfire', c_dru:'Druid',t_dru:'New: Shapeshifter',
  wEye:'A new open world', wTitle:'The World You Know.<br><span class="hl">A New Adventure Awaits.</span>',
  wSub:'The same Midgard you love, now wide open. Explore it your way.',
  w1:'Climb, swim and fly. Hidden chests and surprise encounters reward your curiosity.',
  w2:'Mix skills and gear your way. Respec and change jobs at no cost.',
  w3:'Less grind, more fun. Refine safely up to +15 and retrieve resources for free.',
  w4:'Auto-battle and offline rewards keep you growing even while you are away.',
  w5:'Free tailoring and custom dyeing. Build a look that is truly yours.',
  cap:'Climb.<br>Swim.<br>Fly.',
  nEye:"What's new?", nTitle:'Meet the New <span class="hl">Druid</span>', nSub:'One class, three forms. Switch at any time.',
  form1:'Werewolf',form2:'Wereraptor',form3:'Human Arcanist',
  f2:'8 classes from day one',f2d:'Change jobs whenever you want, and reset skills for free.',
  f3:'Party up',f3d:'Tank, heal and deal damage together to beat tough bosses.',
  f4:'Play anywhere',f4d:'PC, phone or tablet, with your progress in sync.',
  f5:'Trade your way',f5d:'List rare gear on the auction and rise to tycoon.',
  pEye:'Gameplay', pTitle:'See the New World <span class="hl">in Action</span>', pSub:'Real PC screenshots: exploration, combat and teamwork.',
  stEye:'Ready in minutes', stTitle:'Start in <span class="hl">3 easy steps</span>',
  st1:'Open Steam',st1d:'Press Play Free on Steam. The game page opens on Steam.',
  st2:'Install for free',st2d:'Download the game. It needs about 30 GB of free space.',
  st3:'Create an account and log in',st3d:'Make your Gravity account in the launcher, then log in and enter Midgard.',
  qEye:'Good to know', qTitle:'Quick answers',
  q1:'Is it really free?',a1:'Yes. Ragnarok: The New World is free to play on Steam. It includes optional in-app purchases.',
  q2:'Do I need an account?',a2:'Yes. A Gravity account is required and you create it in the game launcher the first time you start.',
  q3:'Will it run on my PC?',a3:'Steam lists 12 GB of RAM as the minimum and 16 GB as recommended, plus 30 GB of free disk space and a broadband connection.',
  q4:'Is this the original Ragnarok Online?',a4:'No. It is a new game with a familiar world and classes, rebuilt as an open world. It is not the 2002 client.',
  fTitle:'Your Next Adventure <span class="hl">Starts Here.</span>', fSub:'Install, log in and step back into Midgard. It is free to play.',
  fl1:'Privacy Policy', fl2:'Terms of Use', fl3:'Disclaimer', fl4:'Cookie Policy',
  legalNav:'Legal', metaDesc:'Midgard is calling you back. The world you remember, rebuilt as a vast open world. Play Ragnarok: The New World free on PC / Steam.',
  skip:'Skip to main content', pauseVideo:'Pause background video', playVideo:'Play background video', pauseSlides:'Pause slideshow', playSlides:'Play slideshow', prev:'Previous', next:'Next', clsAria:'Classes', gameAria:'Gameplay screenshots', shotAlt:'Gameplay screenshot',
  t1:'Official game on Steam', t2:'Free to play, optional in-app purchases', t3:'Published by Gravity Game Vision',
  ribbon:'FREE TO PLAY     OPEN WORLD     8 CLASSES     NEW DRUID     PC + MOBILE     ', slide:'Slide',
  wt1:'Open World Adventure', wt2:'Unlimited Build Variety', wt3:'Less Grind, More Chill', wt4:'No Grind, Just Fun', wt5:'Make RO Yours',
  phoneNote:'This is a Windows PC game. On your phone?', copyLink:'Send the link to my PC', copied:'Link copied. Open it on your PC.',
  mEye:'Welcome back', mTitle:'Some adventures <span class="hl">never leave you.</span>',
  mSub:'The towns, the music, the friends who logged in every night. Midgard is back, and a new adventure is ready to begin.',
  m1:'Your first monster hunt', m2:'Your first job change', m3:'Your first party of friends', m4:'The nights you forgot to sleep',
  mBridge:'The world you loved is back, and now it is wide open.'
 },
 th:{
  cta:'เล่นฟรีบน STEAM', ctaNote:'เล่นฟรี มีไอเทมในเกมให้เลือกซื้อแบบไม่บังคับ สำหรับ Windows PC บน Steam',
  h1:'มิดการ์ดเรียกหาคุณกลับมา',
  heroSub:'โลกที่คุณจดจำ ถูกสร้างใหม่เป็นโอเพ่นเวิลด์สุดกว้าง เลือกอาชีพที่คุณรัก พบกับดรูอิดคนใหม่ แล้วเริ่มการผจญภัยครั้งใหม่ได้วันนี้',
  s1:'ฟรี',s1d:'เล่นได้เลย', s2:'โอเพ่นเวิลด์',s2d:'ผจญภัยอิสระ', s3:'8',s3d:'อาชีพตั้งแต่เปิดเกม', s4:'PC + มือถือ',s4d:'ความคืบหน้าซิงก์กัน',
  clsEye:'เลือกเส้นทางของคุณ', clsTitle:'จำการผจญภัยครั้งแรกของคุณได้ไหม?',
  clsSub:'เลือกอาชีพที่คุณรัก หรือลองเส้นทางใหม่ก็ได้',
  c_sword:'นักดาบ',t_sword:'แนวหน้า', c_mage:'จอมเวท',t_mage:'สายเวทมนตร์', c_archer:'นักธนู',t_archer:'ระยะไกล', c_aco:'อโคไลท์',t_aco:'ซัพพอร์ต',
  c_thief:'โจร',t_thief:'ว่องไว', c_mer:'พ่อค้า',t_mer:'สายค้าขาย', c_gun:'กันสลิงเกอร์',t_gun:'สายปืน', c_dru:'ดรูอิด',t_dru:'ใหม่: แปลงร่าง',
  wEye:'โอเพ่นเวิลด์ใบใหม่', wTitle:'โลกที่คุณรู้จัก<br><span class="hl">การผจญภัยครั้งใหม่รออยู่</span>',
  wSub:'มิดการ์ดที่คุณรัก ตอนนี้เปิดกว้างกว่าเดิม สำรวจได้ตามใจคุณ',
  w1:'ปีน ว่าย บิน หีบลับและเหตุการณ์สุดเซอร์ไพรส์รอตอบแทนความช่างสงสัยของคุณ',
  w2:'ผสมสกิลและอุปกรณ์ได้ตามสไตล์ รีเซ็ตสกิลและเปลี่ยนอาชีพได้ฟรี',
  w3:'ฟาร์มน้อยลง สนุกมากขึ้น รีไฟน์ปลอดภัยถึง +15 และเก็บทรัพยากรคืนได้ฟรี',
  w4:'ระบบต่อสู้อัตโนมัติและรางวัลออฟไลน์ ทำให้คุณแข็งแกร่งขึ้นแม้ไม่ได้ออนไลน์',
  w5:'ตัดชุดฟรี ย้อมสีได้ตามใจ สร้างลุคที่เป็นของคุณคนเดียว',
  cap:'ปีน<br>ว่าย<br>บิน',
  nEye:'มีอะไรใหม่?', nTitle:'พบกับ<span class="hl">ดรูอิด</span>อาชีพใหม่', nSub:'หนึ่งอาชีพ สามร่าง สลับได้ทุกเมื่อ',
  form1:'หมาป่า',form2:'วีเรปเตอร์',form3:'นักเวทมนุษย์',
  f2:'8 อาชีพตั้งแต่วันแรก',f2d:'เปลี่ยนอาชีพได้ทุกเมื่อ และรีเซ็ตสกิลได้ฟรี',
  f3:'รวมปาร์ตี้',f3d:'ช่วยกันรับดาเมจ ฮีล และโจมตี เพื่อล้มบอสสุดโหด',
  f4:'เล่นได้ทุกที่',f4d:'PC มือถือ หรือแท็บเล็ต ความคืบหน้าซิงก์กันทุกเครื่อง',
  f5:'ค้าขายสไตล์คุณ',f5d:'ลงขายของหายากในระบบประมูล แล้วไต่ขึ้นเป็นเจ้าพ่อการค้า',
  pEye:'เกมเพลย์', pTitle:'ดูโลกใหม่<span class="hl">ในการเล่นจริง</span>', pSub:'ภาพหน้าจอจริงบน PC ทั้งการสำรวจ การต่อสู้ และการเล่นเป็นทีม',
  stEye:'พร้อมเล่นในไม่กี่นาที', stTitle:'เริ่มได้ใน<span class="hl"> 3 ขั้นตอนง่าย ๆ</span>',
  st1:'เปิด Steam',st1d:'กดปุ่มเล่นฟรีบน Steam หน้าเกมจะเปิดขึ้นบน Steam',
  st2:'ติดตั้งฟรี',st2d:'ดาวน์โหลดเกม ใช้พื้นที่ว่างประมาณ 30 GB',
  st3:'สร้างบัญชีและล็อกอิน',st3d:'สร้างบัญชี Gravity ในตัวเปิดเกม จากนั้นล็อกอินแล้วเข้าสู่มิดการ์ดได้เลย',
  qEye:'ควรรู้ก่อนเล่น', qTitle:'คำถามที่พบบ่อย',
  q1:'เล่นฟรีจริงไหม?',a1:'จริง Ragnarok: The New World เล่นฟรีบน Steam และมีไอเทมในเกมให้เลือกซื้อแบบไม่บังคับ',
  q2:'ต้องมีบัญชีไหม?',a2:'ต้องมี ต้องใช้บัญชี Gravity ซึ่งสร้างได้ในตัวเปิดเกมตอนเริ่มเล่นครั้งแรก',
  q3:'เครื่องของฉันเล่นได้ไหม?',a3:'Steam ระบุ RAM ขั้นต่ำ 12 GB และแนะนำ 16 GB พร้อมพื้นที่ว่าง 30 GB และอินเทอร์เน็ตความเร็วสูง',
  q4:'นี่คือ Ragnarok Online ตัวเดิมหรือเปล่า?',a4:'ไม่ใช่ นี่เป็นเกมใหม่ที่ยังคงโลกและอาชีพที่คุ้นเคย แต่สร้างใหม่เป็นโลกเปิด ไม่ใช่เวอร์ชันปี 2002',
  fTitle:'การผจญภัยครั้งต่อไปของคุณ<span class="hl"> เริ่มที่นี่</span>', fSub:'ติดตั้ง ล็อกอิน แล้วกลับเข้าสู่มิดการ์ด เล่นฟรี',
  fl1:'นโยบายความเป็นส่วนตัว', fl2:'ข้อกำหนดการใช้งาน', fl3:'ข้อจำกัดความรับผิดชอบ', fl4:'นโยบายคุกกี้',
  legalNav:'ข้อมูลทางกฎหมาย', metaDesc:'มิดการ์ดเรียกหาคุณกลับมา โลกที่คุณจดจำ ถูกสร้างใหม่เป็นโอเพ่นเวิลด์สุดกว้าง เล่น Ragnarok: The New World ฟรีบน PC / Steam',
  skip:'ข้ามไปยังเนื้อหาหลัก', pauseVideo:'หยุดวิดีโอพื้นหลัง', playVideo:'เล่นวิดีโอพื้นหลัง', pauseSlides:'หยุดสไลด์', playSlides:'เล่นสไลด์', prev:'ก่อนหน้า', next:'ถัดไป', clsAria:'อาชีพ', gameAria:'ภาพหน้าจอเกมเพลย์', shotAlt:'ภาพหน้าจอเกมเพลย์',
  t1:'เกมทางการบน Steam', t2:'เล่นฟรี มีไอเทมในเกมให้เลือกซื้อแบบไม่บังคับ', t3:'จัดจำหน่ายโดย Gravity Game Vision',
  ribbon:'เล่นฟรี     โอเพ่นเวิลด์     8 อาชีพ     ดรูอิดใหม่     PC + มือถือ     ', slide:'สไลด์',
  wt1:'ผจญภัยอย่างอิสระในโลกกว้าง', wt2:'สร้างสายได้อย่างไร้ขีดจำกัด', wt3:'ภาระน้อยลง เล่นสบายยิ่งขึ้น', wt4:'สายชิลก็เทพได้', wt5:'นิยาม RO ในแบบของคุณ',
  phoneNote:'นี่คือเกมสำหรับ Windows PC กำลังใช้มือถืออยู่หรือไม่?', copyLink:'ส่งลิงก์ไปยังคอมพิวเตอร์ของฉัน', copied:'คัดลอกลิงก์แล้ว เปิดบนคอมพิวเตอร์ของคุณได้เลย',
  mEye:'ยินดีต้อนรับกลับมา', mTitle:'บางการผจญภัย<span class="hl">ไม่เคยจางหาย</span>',
  mSub:'เมืองที่คุ้นเคย เสียงเพลง และเพื่อนที่ล็อกอินมาเจอกันทุกคืน มิดการ์ดกลับมาแล้ว และการผจญภัยครั้งใหม่พร้อมเริ่มต้น',
  m1:'ล่ามอนสเตอร์ครั้งแรกของคุณ', m2:'การเปลี่ยนอาชีพครั้งแรก', m3:'ปาร์ตี้แรกกับเพื่อน ๆ', m4:'คืนที่คุณลืมไปนอน',
  mBridge:'โลกที่คุณรักกลับมาแล้ว และตอนนี้เปิดกว้างกว่าเดิม'
 }
};

/* Language is automatic (see lang.js): English by default, Thai only when the connection is in Thailand.
   First guess is instant; the country lookup then confirms it and the same page switches if needed. */
let lang = 'en';
function detectLang(){
  return window.rowLang ? window.rowLang.initial() : 'en';
}
function refreshLabels(){ document.querySelectorAll('[data-i18n-label]').forEach(el=>{ const v=T[lang][el.dataset.i18nLabel]; if(v!==undefined) el.setAttribute('aria-label',v); }); }
function setWorldImages(l){ document.querySelectorAll('img[data-img-en]').forEach(img=>{ img.src = img.dataset['img'+l[0].toUpperCase()+l.slice(1)]; }); }
function applyLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const v = T[l][el.dataset.i18n]; if(v!==undefined) el.innerHTML = v; });
  if(document.getElementById('world').classList.contains('ready')) setWorldImages(l);
  refreshLabels();
  document.querySelectorAll('#classDots button').forEach((b,i)=>b.setAttribute('aria-label', T[l].slide+' '+(i+1)));
  const dimg = document.querySelector('.druid-frame img'); if(dimg) dimg.alt = T[l].c_dru;
  document.querySelectorAll('#shots img').forEach((im,i)=>{ im.alt = T[l].shotAlt+' '+(i+1); });
  const md = document.querySelector('meta[name=description]'); if(md) md.content = T[l].metaDesc;
  const ogd = document.querySelector('meta[property="og:description"]'); if(ogd) ogd.content = T[l].metaDesc;
  const ogt = document.querySelector('meta[property="og:title"]'); if(ogt) ogt.content = l==='th' ? 'Ragnarok: The New World | เล่นฟรีบน Steam' : 'Ragnarok: The New World | Play Free on Steam';
  document.title = l==='th' ? 'Ragnarok: The New World | เล่นฟรีบน Steam' : 'Ragnarok: The New World | Play Free on Steam';
}
applyLang(detectLang());
if(window.rowLang) window.rowLang.confirm(l=>{ if(l !== lang) applyLang(l); });

/* ============ TRACKING: go2Offer ============ */
window.dataLayer = window.dataLayer || [];
function buildOfferUrl(){
  // exact destination, nothing appended
  return document.querySelector('a[data-cta]').getAttribute('href');
}
let navigating = false;
function go2Offer(ctaId, ev){
  // ctrl/cmd/shift/middle click = new tab: log the event and let the browser follow the link
  if(ev && (ev.metaKey||ev.ctrlKey||ev.shiftKey||ev.altKey||ev.button>0)){ window.dataLayer.push({ event:'go2Offer', cta_id:ctaId, page_lang:lang }); return; }
  if(ev) ev.preventDefault();
  if(navigating) return; navigating = true;
  const url = (ev && ev.currentTarget && ev.currentTarget.getAttribute('href')) || buildOfferUrl();
  let done = false;
  const go = ()=>{ if(done) return; done = true; location.href = url; };
  // fired only on a deliberate click, never on page load
  window.dataLayer.push({ event:'go2Offer', cta_id:ctaId, page_lang:lang, eventCallback:go, eventTimeout:CONFIG.navDelayMs });
  setTimeout(go, CONFIG.navDelayMs);
}
document.querySelectorAll('[data-cta]').forEach(a=>a.addEventListener('click',e=>go2Offer(a.dataset.cta,e)));
window.addEventListener('pageshow',()=>{ navigating = false; });

/* ============ HERO VIDEO ============
   Muted loop built from the official artwork (poster = still image).
   - not loaded at all when the visitor asked to save data
   - always plays by itself (no pause button)
   - paused automatically when scrolled out of view or when the tab is hidden */
(function(){
  const v = document.getElementById('heroVideo'); if(!v) return;
  const saveData = navigator.connection && navigator.connection.saveData;
  if(saveData){ v.remove(); return; }
  let visible = true;
  v.muted = true;
  const portrait = matchMedia('(max-width:820px) and (orientation:portrait)').matches;
  v.poster = innerWidth <= 820 ? 'hero-bg-m.webp' : 'hero-bg.webp';
  const load = ()=>{ if(!v.getAttribute('src')) v.src = portrait ? 'hero-m.mp4' : 'hero.mp4'; };
  const sync = ()=>{ if(visible && !document.hidden){ load(); const p=v.play(); if(p&&p.catch) p.catch(()=>{}); } else { v.pause(); } };
  document.addEventListener('visibilitychange', sync);
  new IntersectionObserver(es=>es.forEach(e=>{ visible = e.isIntersecting; sync(); }),{threshold:.05}).observe(document.getElementById('hero'));
  sync();
})();

/* ============ AUTOPLAY HELPER ============
   Carousels move by themselves while on screen, loop forever.
   Hovering does not stop them; a click/touch/keypress/focus only delays the next move by 2.5 s. */
function autoplay(el, next, ms){
  let last = 0, vis = false;
  const touch = ()=>{ last = Date.now(); };
  ['pointerdown','touchstart','wheel','keydown','focusin'].forEach(e=>el.addEventListener(e,touch,{passive:true}));
  new IntersectionObserver(es=>es.forEach(e=>{ vis = e.isIntersecting; }),{threshold:.1}).observe(el);
  setInterval(()=>{ if(vis && !document.hidden && Date.now()-last > 2500) next(); }, ms);
}

/* ============ CLASS CAROUSEL ============ */
(function(){
  const car = document.getElementById('classCar');
  const track = car.querySelector('.track');
  const slides = [...track.children];
  slides.forEach((s,i)=>{ s.setAttribute('role','group'); s.setAttribute('aria-roledescription','slide'); s.setAttribute('aria-label',(i+1)+' / '+slides.length); });
  const dots = document.getElementById('classDots');
  slides.forEach((_,i)=>{ const b=document.createElement('button'); b.type='button'; b.setAttribute('aria-label', T[lang].slide+' '+(i+1)); b.addEventListener('click',()=>goTo(i)); dots.appendChild(b); });
  const dl = [...dots.children];
  function idx(){ const c = track.scrollLeft + track.clientWidth/2; let best=0,d=1e9; slides.forEach((s,i)=>{ const m=Math.abs(s.offsetLeft+s.offsetWidth/2-c); if(m<d){d=m;best=i;} }); return best; }
  function mark(){ const i=idx(); dl.forEach((b,k)=>b.setAttribute('aria-current', String(k===i))); slides.forEach((s,k)=>s.classList.toggle('is-active', k===i)); }
  function goTo(i){ const cur=idx(); i=(i+slides.length)%slides.length; const s=slides[i]; track.scrollTo({left:s.offsetLeft-(track.clientWidth-s.offsetWidth)/2,behavior:Math.abs(i-cur)>1?'auto':'smooth'}); }
  car.querySelectorAll('.arrow').forEach(a=>a.addEventListener('click',()=>goTo(idx()+Number(a.dataset.dir))));
  track.addEventListener('scroll',()=>requestAnimationFrame(mark),{passive:true});
  mark();
  autoplay(car, ()=>goTo(idx()+1), 2400);   // scrolls by itself, loops forever
})();

/* ============ GAMEPLAY CAROUSEL ============ */
(function(){
  const shots = document.getElementById('shots');
  const imgs = [...shots.children];
  const thumbs = document.getElementById('thumbs');
  const strip = document.createElement('div'); strip.className = 'strip-track'; strip.setAttribute('aria-hidden','true');
  for(let k=0;k<2;k++) imgs.forEach(im=>{ const p=document.createElement('img'); p.decoding='async'; p.alt=''; p.width=320; p.height=180; p.dataset.src=im.dataset.src.replace('shot-','thumb-'); strip.appendChild(p); });
  thumbs.appendChild(strip);
  function idx(){ return Math.round(shots.scrollLeft / shots.clientWidth); }
  function mark(){}
  function goTo(i){ const cur=idx(); i=(i+imgs.length)%imgs.length; shots.scrollTo({left:i*shots.clientWidth,behavior:Math.abs(i-cur)>1?'auto':'smooth'}); }
  document.querySelectorAll('#stage .arrow').forEach(a=>a.addEventListener('click',()=>goTo(idx()+Number(a.dataset.dir))));
  let t; shots.addEventListener('scroll',()=>{ clearTimeout(t); t=setTimeout(mark,80); },{passive:true});
  mark();
  autoplay(document.getElementById('stage'), ()=>goTo(idx()+1), 2800);   // scrolls by itself, loops forever
})();

/* ============ HEADER / STICKY CTA / REVEAL ============ */
(function(){
  const top = document.getElementById('top'), sticky = document.getElementById('sticky'), hero = document.getElementById('hero'), fin = document.getElementById('final');
  const heroCta = hero.querySelector('.cta');
  function onScroll(){
    top.classList.toggle('solid', scrollY>40);
    const c = heroCta.getBoundingClientRect(), f = fin.getBoundingClientRect().top;
    const heroCtaHidden = c.bottom > innerHeight - 8 || c.top < 0;
    sticky.classList.toggle('show', heroCtaHidden && f>innerHeight*0.6);
  }
  addEventListener('scroll',onScroll,{passive:true}); onScroll();
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.12});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
})();

/* ============ SECTION VISIBILITY + PARALLAX ============
   Continuous image animations only run while their section is on screen (class "vis").
   Parallax moves a CSS variable only. */
(function(){
  const io = new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('vis', e.isIntersecting)), {rootMargin:'80px 0px'});
  document.querySelectorAll('main > section').forEach(s=>io.observe(s));
  const items = [...document.querySelectorAll('[data-parallax]')]; if(!items.length) return;
  let ticking = false;
  const update = ()=>{ ticking = false; const vh = innerHeight; items.forEach(el=>{ const r = el.parentElement.getBoundingClientRect(); if(r.bottom < -100 || r.top > vh + 100) return; const p = ((r.top + r.height/2) - vh/2) / vh; el.style.setProperty('--p', Math.max(-1, Math.min(1, p)).toFixed(3)); }); };
  addEventListener('scroll', ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
  addEventListener('resize', update); update();
})();

/* ============ MOBILE: send the Steam link to a PC (the game is Windows only) ============ */
(function(){
  const btn = document.getElementById('sendPc'); if(!btn) return;
  const url = document.querySelector('a[data-cta]').getAttribute('href');
  const msg = btn.parentElement.querySelector('.copied');
  btn.addEventListener('click', async ()=>{
    window.dataLayer.push({ event:'send_link_to_pc', page_lang:lang });
    try{ if(navigator.share){ await navigator.share({ title:document.title, url }); return; } }catch(e){ if(e && e.name === 'AbortError') return; }
    try{ await navigator.clipboard.writeText(url); }
    catch(e){ const t = document.createElement('textarea'); t.value = url; document.body.appendChild(t); t.select(); try{ document.execCommand('copy'); }catch(_){} t.remove(); }
    msg.textContent = ' ' + T[lang].copied; setTimeout(()=>{ msg.textContent = ''; }, 5000);
  });
})();

/* ============ MOUSE INTERACTION ============
   Pointer position (-1..1) is written to --mx / --my on sections and cards; the CSS turns it into tilt,
   parallax and zoom. Only for a real mouse. */
(function(){
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  const track = el=>{
    let raf = 0, last = null;
    el.addEventListener('pointermove', e=>{
      if(e.pointerType !== 'mouse') return;
      last = e;
      if(raf) return;
      raf = requestAnimationFrame(()=>{ raf = 0; const r = el.getBoundingClientRect(); el.style.setProperty('--mx', (((last.clientX - r.left) / r.width) * 2 - 1).toFixed(3)); el.style.setProperty('--my', (((last.clientY - r.top) / r.height) * 2 - 1).toFixed(3)); });
    });
    el.addEventListener('pointerleave', ()=>{ el.style.setProperty('--mx', 0); el.style.setProperty('--my', 0); });
  };
  document.querySelectorAll('main > section, .ccard, .wcard, .keyart, .feat, .step, .druid-frame, .wide, .stage').forEach(track);
})();

/* ============ LAZY SECTIONS ============
   Pictures and CSS backgrounds below the fold are only requested when their section is within 700 px of the screen,
   so the first screen is not slowed down by the rest of the page. */
(function(){
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return;
    const s = e.target; io.unobserve(s); s.classList.add('ready');
    s.querySelectorAll('[data-src]').forEach(i=>{ i.src = i.dataset.src; i.removeAttribute('data-src'); });
    s.querySelectorAll('[data-bg]').forEach(b=>{ b.style.backgroundImage = 'url(' + b.dataset.bg + ')'; });
    if(s.id === 'world') setWorldImages(lang);
  }), {rootMargin:'700px 0px'});
  document.querySelectorAll('main > section').forEach(s=>io.observe(s));
})();
