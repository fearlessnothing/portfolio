const root = document.documentElement;
const themeButtons = document.querySelectorAll('.theme-toggle, .mobile-theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-navigation');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function syncThemeButton() {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  if (themeColorMeta) themeColorMeta.content = themeColorMeta.dataset[root.dataset.theme ?? 'light'] ?? themeColorMeta.content;
  themeButtons.forEach((button) => {
    button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    button.setAttribute('title', `Switch to ${nextTheme} mode`);
  });
}

themeButtons.forEach((button) => button.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', root.dataset.theme);
  syncThemeButton();
}));
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  if (mobileNav) mobileNav.hidden = isOpen;
});
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  if (mobileNav) mobileNav.hidden = true;
  menuButton?.setAttribute('aria-expanded', 'false');
}));
syncThemeButton();

// Open a closed <details> (e.g. the About page CV) when a link points inside it.
function openHashTarget() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  const details = target?.closest('details');
  if (details && !details.open) {
    details.open = true;
    target.scrollIntoView();
  }
}
openHashTarget();
window.addEventListener('hashchange', openHashTarget);
