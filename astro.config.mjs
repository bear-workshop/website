import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bear-workshop.github.io',
  base: '/website',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
