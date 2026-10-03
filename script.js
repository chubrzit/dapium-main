const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');

function applyTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  root.dataset.theme = nextTheme;
  localStorage.setItem('dapium-theme', nextTheme);
  const isDark = nextTheme === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☾' : '☼';
  themeToggle.querySelector('.sr-only').textContent = isDark ? '라이트 모드로 전환' : '다크 모드로 전환';
}

const savedTheme = localStorage.getItem('dapium-theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.querySelector('.sr-only').textContent = isOpen ? '메뉴 열기' : '메뉴 닫기';
  mobileMenu.hidden = isOpen;
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
  });
});

const header = document.querySelector('[data-header]');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('[data-newsletter-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const note = form.querySelector('[data-form-note]');
  const email = form.querySelector('input').value;
  note.textContent = `${email} 주소를 확인했습니다. 실제 구독 연동은 다음 단계에서 연결합니다.`;
  note.setAttribute('role', 'status');
  form.reset();
});
