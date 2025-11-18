import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import { ensureTrailingSlash } from './src/utils/ensureTrailingSlash.js'

const basePath = process.env.BASE_PATH ?? '/'

export default defineConfig({
  base: ensureTrailingSlash(basePath),
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [{
      provider: "local",
      name: "syneLocal",
      cssVariable: "--font-syne",
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/Syne-Regular.woff2"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/Syne-SemiBold.woff2"]
        },
        {
          weight: 700,
          style: "normal",
          src: ["./src/assets/fonts/Syne-Bold.woff2"]
        }
      ]
    }]
  }
})