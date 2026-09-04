// Typewriter effect — rotating "how I can help" phrases
const typewriterEl = document.getElementById('typewriter');
const typewriterPhrases = [
  'Technical SEO Audits ⚙️',
  'Fresh Organic Traffic ☕',
  'Content & Keyword Strategy ✍️',
  'Link Building & Authority 🔗',
  'Cozy Local & International SEO 🌍'
];

if (typewriterEl) {
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentPhrase = typewriterPhrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typewriterEl.textContent = currentPhrase.substring(0, charIndex);

    let delay = isDeleting ? 40 : 70;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 1400;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
      delay = 300;
    }

    setTimeout(typeLoop, delay);
  }

  typeLoop();
}

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('menu-open'));
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// Animated counters
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const duration = 1200;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = target / steps;
      const tick = () => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
        } else {
          el.textContent = Math.floor(current);
          requestAnimationFrame(() => setTimeout(tick, stepTime));
        }
      };
      tick();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form (demo only — no backend wired up yet)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = "This is a demo form — connect it to a form service (e.g. Formspree) or backend to receive real messages.";
  contactForm.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
