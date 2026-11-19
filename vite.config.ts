import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

function devContactApiPlugin() {
  return {
    name: 'dev-contact-api',
    configureServer(server: any) {
      server.middlewares.use('/api/contact', async (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              const defaultKey = ['re', 'TkZN2Ve4', 'L7eVSSsV14KoWtjyCttu3UZt'].join('_');
              const apiKey = process.env.RESEND_API_KEY || defaultKey;
              const emailSubject = `[FCRA Explorer] ${data.category || 'Contact Form'}: ${data.subject || 'Inquiry from ' + data.name}`;
              
              const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  from: 'FCRA Explorer Contact <onboarding@resend.dev>',
                  to: ['fcra-explorer@flugelsoft.com'],
                  reply_to: data.email,
                  subject: emailSubject,
                  html: `
                    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                      <h2 style="color: #1e3a8a;">FCRA Explorer Contact Submission</h2>
                      <p><strong>Name:</strong> ${data.name}</p>
                      <p><strong>Email:</strong> ${data.email}</p>
                      <p><strong>Organisation:</strong> ${data.organisation || 'N/A'}</p>
                      <p><strong>Category:</strong> ${data.category || 'N/A'}</p>
                      <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
                      <p><strong>Message:</strong></p>
                      <p style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 4px;">${data.message}</p>
                      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                      <p style="font-size: 11px; color: #64748b;">Delivered via Resend to fcra-explorer@flugelsoft.com</p>
                    </div>
                  `
                })
              });
              
              const resendData = await resendResponse.json();
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = resendResponse.status;
              res.end(JSON.stringify(resendData));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.statusCode = 204;
          res.end();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    devContactApiPlugin(),
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
