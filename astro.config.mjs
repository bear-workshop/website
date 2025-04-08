import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://bear-workshop.github.io',
  base: '/website',
  integrations: [tailwind(), react()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
