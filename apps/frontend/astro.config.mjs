// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import { loadEnv } from "vite"

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL,
  base: env.BASE_PATH,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
