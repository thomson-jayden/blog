// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { SITE_URL, BASE_PATH } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  '',
);

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [react()],
});
