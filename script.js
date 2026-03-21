// =====================================================
//  FELIZ DÍA DE LA MUJER 🌸  –  script.js
// =====================================================

/* ---- PARTÍCULAS FLOTANTES ---- */
const particleContainer = document.getElementById('particles');
const emojis = ['🌻', '💛', '✨', '🌼', '💫', '☀️', '🍯', '⭐', '🌟'];

function createParticle() {
  const el = document.createElement('span');
  el.classList.add('particle');
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  const startX   = Math.random() * 100;
  const duration = 8 + Math.random() * 10;
  const size     = 0.8 + Math.random() * 1.2;
  const delay    = Math.random() * 12;

  el.style.left              = `${startX}%`;
  el.style.fontSize          = `${size}rem`;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay    = `${delay}s`;

  particleContainer.appendChild(el);

  el.addEventListener('animationiteration', () => {
    el.style.left = `${Math.random() * 100}%`;
  });
}

for (let i = 0; i < 30; i++) createParticle();

/* ---- ESTRELLAS DE FONDO ---- */
for (let i = 0; i < 60; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left              = `${Math.random() * 100}%`;
  star.style.top               = `${Math.random() * 100}%`;
  star.style.animationDelay    = `${Math.random() * 3}s`;
  star.style.animationDuration = `${1.5 + Math.random() * 2}s`;
  star.style.width             = `${1 + Math.random() * 3}px`;
  star.style.height            = star.style.width;
  document.body.appendChild(star);
}

/* ---- ANIMACIONES DE ENTRADA (GSAP) ---- */
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

tl.to('.badge', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'back.out(1.4)'
  })
  .to('.title', {
    opacity: 1,
    y: -10,
    duration: 1.6,
    ease: 'power3.out'
  }, '-=0.4')
  .to('.subtitle', {
    opacity: 1,
    y: -8,
    duration: 1.2
  }, '-=0.8')
  .from('.envelope', {
    opacity: 0,
    y: 40,
    scale: 0.85,
    duration: 1.1,
    ease: 'back.out(1.7)'
  }, '-=0.6')
  .to('.symbols', {
    opacity: 1,
    duration: 1
  }, '-=0.3')
  .to('.svg-sunflower', {
    opacity: 1,
    stagger: 0.15,
    y: -10,
    duration: 1.5,
    ease: 'back.out(1.2)'
  }, '-=0.8');

/* ---- SOBRE: ABRIR / CERRAR ---- */
const envelope    = document.getElementById('envelope');
const flap        = document.getElementById('flap');
const letterPaper = document.getElementById('letterPaper');
let isOpen = false;

envelope.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    flap.classList.add('open');

    setTimeout(() => {
      letterPaper.classList.add('visible');
    }, 350);

    gsap.to(envelope, {
      rotation: 2,
      duration: 0.12,
      yoyo: true,
      repeat: 3,
      ease: 'none'
    });

    gsap.to('.click-text', { opacity: 0, duration: 0.4 });
    launchHearts();

  } else {
    letterPaper.classList.remove('visible');
    setTimeout(() => {
      flap.classList.remove('open');
    }, 400);
    gsap.to('.click-text', { opacity: 1, duration: 0.6 });
  }
});

/* ---- CONFETTI DE CORAZONES ---- */
function launchHearts() {
  const heartEmojis = ['💛', '🌻', '✨', '🌼', '☀️'];
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.cssText = `
      position: fixed;
      font-size: ${1 + Math.random() * 1.5}rem;
      left: ${35 + Math.random() * 30}%;
      top: 55%;
      pointer-events: none;
      z-index: 999;
      user-select: none;
    `;
    document.body.appendChild(heart);

    gsap.to(heart, {
      y:        -(200 + Math.random() * 250),
      x:        (Math.random() - 0.5) * 300,
      opacity:  0,
      scale:    0.4 + Math.random(),
      rotation: (Math.random() - 0.5) * 180,
      duration: 1.8 + Math.random() * 1.2,
      ease:     'power2.out',
      delay:    Math.random() * 0.5,
      onComplete: () => heart.remove()
    });
  }
}

// Funcionalidad de música eliminada según su solicitud 🌻
