// Runs in <head> before paint. Wrapped in its own scope so its names never clash with site.js.
(() => {
  const storedTheme = localStorage.getItem('portfolio-theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = storedTheme || preferredTheme;
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) themeColorMeta.content = themeColorMeta.dataset[document.documentElement.dataset.theme];
})();
