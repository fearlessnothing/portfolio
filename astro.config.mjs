import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://minheinzaw.pages.dev',
  output: 'static',
  // Astro 7 defaults to 'jsx', which can drop spaces between inline elements. Keep the Astro 5 behaviour.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    // Same CSS browser targets as Astro 5 (Vite 6), so older iPhones keep the mobile layout
    // (min-width/max-width media queries) and the -webkit- prefixes.
    build: { cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'] },
  },
});