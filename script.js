/* ---------- LOADER ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loader')?.classList.add('hidden');
  }, 1600);
});

/* ---------- REVEAL ---------- */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{threshold:0.12});

reveals.forEach(el=>observer.observe(el));

/* ---------- PARTICLES ---------- */
const particlesContainer = document.querySelector('.particles');

for(let i=0;i<28;i++){
  const p = document.createElement('div');
  p.className='particle';
  const size = Math.random()*14 + 6;
  p.style.width = size+'px';
  p.style.height = size+'px';
  p.style.left = Math.random()*100+'vw';
  p.style.animationDuration = (Math.random()*12 + 12)+'s';
  p.style.animationDelay = Math.random()*-20+'s';
  particlesContainer.appendChild(p);
}

/* ---------- 3D TILT CARDS ---------- */
document.querySelectorAll('.glass-card, .activity-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform =
      `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
  });
});

/* ---------- HERO PARALLAX ---------- */
const heroImg = document.querySelector('.hero-image img');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  if(heroImg){
    heroImg.style.transform = `translateY(${y * 0.06}px)`;
  }
});

/* ---------- MAGNETIC BUTTONS ---------- */
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mousemove', e=>{
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.08}px, ${y*0.08}px)`;
  });
  btn.addEventListener('mouseleave', ()=>{
    btn.style.transform = '';
  });
});

/* ---------- BACKGROUND PARALLAX ---------- */
const bg = document.querySelector('.bg-layer');
window.addEventListener('mousemove', e=>{
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  bg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});