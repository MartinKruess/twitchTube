import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa'

const manifestForPWA = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.png'],
  manifest: {
    name: 'My Awesome App',
    short_name: 'MyApp',
    description: 'My Awesome App description',
    theme_color: '#ff0000',
    background_color: '#edededed',
    icons: [
      {
        src: "./pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon"
      },
      {
        src: "./pwa-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "./pwa-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    start_url: "/",
    display: "standalone",
    scope: '/',
    orientation: 'portrait-primary',
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPWA)
  ]
})