const toggle = document.getElementById('navToggle');
const nav = document.getElementById('primary-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('section[id], main[id]');
const navLinks = nav.querySelectorAll('a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((l) =>
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`)
        );
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

sections.forEach((s) => observer.observe(s));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
