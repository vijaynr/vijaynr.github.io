const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle')!;
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')!;
const systemTheme = matchMedia('(prefers-color-scheme: light)');

function setTheme(theme: string) {
  root.dataset.theme = theme;
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
  themeColor.content = getComputedStyle(root).getPropertyValue('--bg').trim();
}

setTheme(root.dataset.theme || 'dark');
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try { localStorage.setItem('theme', next); } catch { /* Theme works without persistence. */ }
});
systemTheme.addEventListener('change', event => {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch {}
  if (saved !== 'light' && saved !== 'dark') setTheme(event.matches ? 'light' : 'dark');
});

const header = document.querySelector<HTMLElement>('.site-header')!;
const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.nav a')];
// Follow the sections represented in the menu, including the homepage blog.
const sections = navLinks
  .filter(link => link.pathname === location.pathname && link.hash)
  .map(link => document.getElementById(link.hash.slice(1)))
  .filter((section): section is HTMLElement => section !== null);
menuButton.hidden = false;

function setMenuOpen(open: boolean) {
  header.dataset.menuOpen = String(open);
  menuButton.setAttribute('aria-expanded', String(open));
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  setMenuOpen(open);
  if (open) navLinks[0]?.focus();
});
navLinks.forEach(link => link.addEventListener('click', () => {
  const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(false);
  if (wasOpen && link.pathname === location.pathname && link.hash) {
    const heading = document.getElementById(link.hash.slice(1))?.querySelector<HTMLElement>('h2');
    heading?.setAttribute('tabindex', '-1');
    setTimeout(() => heading?.focus({ preventScroll: true }), 0);
  }
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (event.target instanceof Node && !header.contains(event.target)) setMenuOpen(false);
});
document.querySelector('.brand')?.addEventListener('click', () => setMenuOpen(false));

function updatePageState() {
  if (location.pathname !== '/') return;
  let current = '';
  for (const section of sections) {
    if (scrollY >= section.offsetTop - header.offsetHeight - 80) current = section.id;
  }
  if (scrollY > 0 && scrollY + innerHeight >= root.scrollHeight - 4) {
    current = sections.at(-1)?.id || '';
  }
  navLinks.forEach(link => {
    const active = link.pathname === '/' && (link.hash ? link.hash === `#${current}` : !current);
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', link.hash ? 'location' : 'page');
    else link.removeAttribute('aria-current');
  });
}
addEventListener('resize', () => {
  if (innerWidth > 700) setMenuOpen(false);
  updatePageState();
});
addEventListener('scroll', updatePageState, { passive: true });
updatePageState();

const portrait = document.querySelector<HTMLElement>('.hero-art');
if (portrait) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let portraitVisible = false;
  const updatePortraitMotion = () => {
    portrait.dataset.animate = String(portraitVisible && !document.hidden && !reducedMotion.matches);
  };
  new IntersectionObserver(entries => {
    portraitVisible = entries[0].isIntersecting;
    updatePortraitMotion();
  }).observe(portrait);
  document.addEventListener('visibilitychange', updatePortraitMotion);
  reducedMotion.addEventListener('change', updatePortraitMotion);
}
