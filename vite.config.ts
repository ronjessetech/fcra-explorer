import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'apple-touch-icon.png', 'masked-icon.svg', 'pwa-192x192.png', 'pwa-512x512.png', 'og-image.png'],
      manifest: {
        name: 'FCRA Explorer & Compliance Tracker | Flugelsoft Labs',
        short_name: 'FCRA Explorer',
        description: 'Offline-first search, analytics and compliance tracker for FCRA registered organisations in India',
        theme_color: '#1e3a8a',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait-primary',
        id: 'https://fcra-explorer.flugelsoft.com/',
        start_url: '/',
        scope: '/',
        categories: ['business', 'finance', 'productivity'],
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style' || request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'fcra-static-assets',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
              }
            }
          }
        ]
      }
    })
  ],
  server: {
    port: 5173,
    host: true
  }
});
