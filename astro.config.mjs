import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://anacleto85.github.io',  // Replace with your GitHub username
  base: '/bear-workshop',               // Replace with your repository name
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
