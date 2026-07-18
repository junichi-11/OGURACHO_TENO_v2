const $=(s,p=document)=>p.querySelector(s);
const $$=(s,p=document)=>[...p.querySelectorAll(s)];

const progress=$('.progress span');
const header=$('.header');
function onScroll(){
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=`${max>0?scrollY/max*100:0}%`;
  header.classList.toggle('scrolled',scrollY>30);
}
addEventListener('scroll',onScroll,{passive:true});
onScroll();

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  }
}),{threshold:.1,rootMargin:'0px 0px -7%'});
$$('.reveal,.reveal-stagger').forEach(el=>observer.observe(el));

const menu=$('.menu-button');
menu?.addEventListener('click',()=>{
  const open=header.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
  document.body.classList.toggle('nav-open',open);
});
$$('.header nav a').forEach(a=>a.addEventListener('click',()=>{
  header.classList.remove('menu-open');
  document.body.classList.remove('nav-open');
  menu?.setAttribute('aria-expanded','false');
}));

const plans={
  site:['assets/site-plan-final.webp','全体配置図｜1LDK棟と2LDK棟で構成する二棟計画'],
  'p1-1':['assets/phase1-1f.webp','Phase 01 1階平面図｜1LDK 3戸'],
  'p1-2':['assets/phase1-2f.webp','Phase 01 2階平面図｜1LDK 3戸'],
  'p1-3':['assets/phase1-3f.webp','Phase 01 3階平面図｜1LDK 3戸'],
  'p2-1':['assets/phase2-1f.webp','Phase 02 1階平面図｜2LDK 2戸'],
  'p2-2':['assets/phase2-2f.webp','Phase 02 2階平面図｜2LDK 2戸'],
  'p2-3':['assets/phase2-3f.webp','Phase 02 3階平面図｜2LDK 2戸']
};
const planImg=$('#planImage');
const planCap=$('#planCaption');
const planBtn=$('#planButton');
const planTabs=$$('.plan-tabs button');
function selectPlan(btn){
  const selected=plans[btn.dataset.plan];
  if(!selected)return;
  const [src,cap]=selected;
  planTabs.forEach(b=>{
    b.classList.remove('active');
    b.setAttribute('aria-selected','false');
    b.tabIndex=-1;
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  btn.tabIndex=0;
  planImg.classList.add('switching');
  setTimeout(()=>{
    planImg.src=src;
    planImg.alt=cap;
    planCap.textContent=cap;
    planBtn.dataset.lightbox=src;
    planImg.classList.remove('switching');
  },170);
}
planTabs.forEach(btn=>btn.addEventListener('click',()=>selectPlan(btn)));
$('.plan-tabs')?.addEventListener('keydown',event=>{
  if(!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
  event.preventDefault();
  const current=planTabs.indexOf(document.activeElement);
  const next=event.key==='Home'?0:event.key==='End'?planTabs.length-1:
    (current+(event.key==='ArrowRight'||event.key==='ArrowDown'?1:-1)+planTabs.length)%planTabs.length;
  planTabs[next].focus();
  selectPlan(planTabs[next]);
});

const dialog=$('#lightbox');
const dialogImg=$('#lightbox img');
document.addEventListener('click',event=>{
  const trigger=event.target.closest('[data-lightbox]');
  if(!trigger)return;
  dialogImg.src=trigger.dataset.lightbox;
  dialogImg.alt=trigger.querySelector('img')?.alt||'拡大画像';
  dialog.showModal();
  document.body.style.overflow='hidden';
});
function closeLightbox(){dialog?.close();document.body.style.overflow=''}
$('.lightbox-close')?.addEventListener('click',closeLightbox);
dialog?.addEventListener('click',event=>{if(event.target===dialog)closeLightbox()});
dialog?.addEventListener('close',()=>{document.body.style.overflow=''});
dialog?.addEventListener('cancel',event=>{event.preventDefault();closeLightbox()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&dialog?.open)closeLightbox()});
