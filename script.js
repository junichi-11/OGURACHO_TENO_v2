const $ = (s, p=document)=>p.querySelector(s);
const $$ = (s, p=document)=>Array.from(p.querySelectorAll(s));

// scroll progress
const progress = $('.scrollbar span');
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (scrollY / max * 100) + '%';
  document.documentElement.style.setProperty('--scroll', scrollY);
};
addEventListener('scroll', onScroll, {passive:true}); onScroll();

// reveal animations
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }});
},{threshold:.15, rootMargin:'0px 0px -8% 0px'});
$$('.reveal,.reveal-stagger').forEach(el=>io.observe(el));

// hero slideshow
const slides = $$('.hero-slide'); let si=0;
setInterval(()=>{ slides[si].classList.remove('is-active'); si=(si+1)%slides.length; slides[si].classList.add('is-active'); }, 4200);

// parallax
const parallax = () => {
  $$('[data-depth]').forEach(img=>{
    const depth = Number(img.dataset.depth || .1);
    const rect = img.closest('[data-parallax-section]')?.getBoundingClientRect();
    if(!rect) return;
    const y = Math.max(-innerHeight, Math.min(innerHeight, rect.top));
    img.style.transform = `scale(1.08) translate3d(0, ${-y*depth}px, 0)`;
  });
};
addEventListener('scroll', parallax, {passive:true}); parallax();

// count up stats
const countObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    $$('[data-count]', entry.target).forEach(el=>{
      const target = Number(el.dataset.count);
      const decimals = String(el.dataset.count).includes('.') ? 2 : 0;
      const start = performance.now();
      const dur = 1400;
      const tick = (now)=>{
        const p = Math.min(1, (now-start)/dur);
        const eased = 1 - Math.pow(1-p, 4);
        el.textContent = (target*eased).toFixed(decimals);
        if(p<1) requestAnimationFrame(tick); else el.textContent = target.toFixed(decimals);
      };
      requestAnimationFrame(tick);
    });
    countObserver.unobserve(entry.target);
  });
},{threshold:.35});
const nums = $('.number-grid'); if(nums) countObserver.observe(nums);

// plan tabs
const plans = {
  'site-plan': {src:'assets/site-plan.webp', cap:'全体配置図｜1LDK棟と2LDK棟を組み合わせた二棟構成'},
  'phase1-1f': {src:'assets/phase1-1f.webp', cap:'第1期 1階平面図｜1LDK 3邸'},
  'phase1-2f': {src:'assets/phase1-2f.webp', cap:'第1期 2階平面図｜1LDK 3邸'},
  'phase1-3f': {src:'assets/phase1-3f.webp', cap:'第1期 3階平面図｜1LDK 3邸'},
  'phase2-1f': {src:'assets/phase2-1f.webp', cap:'第2期 1階平面図｜2LDK 2邸'},
  'phase2-2f': {src:'assets/phase2-2f.webp', cap:'第2期 2階平面図｜2LDK 2邸'},
  'phase2-3f': {src:'assets/phase2-3f.webp', cap:'第2期 3階平面図｜2LDK 2邸'},
};
const planImg = $('#planImage'); const planCap = $('#planCaption');
$$('.plan-tabs button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    $$('.plan-tabs button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const p = plans[btn.dataset.plan];
    planImg.classList.add('switching');
    setTimeout(()=>{ planImg.src=p.src; planCap.textContent=p.cap; planImg.alt=p.cap; planImg.classList.remove('switching'); }, 260);
  });
});

// magnetic tilt for cards/figures
$$('.mix-card,.bento figure,.image-frame').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform = `translateY(-6px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*3).toFixed(2)}deg)`;
  });
  card.addEventListener('mouseleave',()=>{ card.style.transform=''; });
});

// full image lightbox for architectural / interior visuals
const lightbox = $('#lightbox');
const lightboxImg = $('#lightbox img');
const lightboxClose = $('.lightbox-close');
const openLightbox = (trigger) => {
  if(!lightbox || !lightboxImg) return;
  const src = trigger.dataset.full || trigger.querySelector('img')?.src;
  const alt = trigger.querySelector('img')?.alt || trigger.getAttribute('aria-label') || '拡大画像';
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
};
const closeLightbox = () => {
  if(!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  setTimeout(()=>{ if(lightboxImg) lightboxImg.src=''; }, 420);
};
$$('.lightbox-trigger').forEach(el=>{
  el.addEventListener('click',()=>openLightbox(el));
  el.addEventListener('keydown',e=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLightbox(el); }
  });
});
lightboxClose?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{ if(e.target === lightbox) closeLightbox(); });
addEventListener('keydown',e=>{ if(e.key === 'Escape') closeLightbox(); });
