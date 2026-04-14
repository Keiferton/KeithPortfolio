import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://keifh.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [tailwind()],
  alias: { '@': './src' }
});
