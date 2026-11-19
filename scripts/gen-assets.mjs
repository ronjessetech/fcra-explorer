import fs from 'fs';

// A minimal valid 1x1 or small colored PNG buffer
// PNG signature + IHDR + IDAT + IEND
// Or we can write a simple SVG-to-PNG or minimal PNG data
const png1x1Base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWPjfDwAEeQHzYQ49vAAAAABJRU5ErkJggg==";
const buffer = Buffer.from(png1x1Base64, 'base64');

if (!fs.existsSync('public/pwa-192x192.png')) {
  fs.writeFileSync('public/pwa-192x192.png', buffer);
}
if (!fs.existsSync('public/pwa-512x512.png')) {
  fs.writeFileSync('public/pwa-512x512.png', buffer);
}
if (!fs.existsSync('public/favicon.ico')) {
  fs.writeFileSync('public/favicon.ico', buffer);
}
if (!fs.existsSync('public/apple-touch-icon.png')) {
  fs.writeFileSync('public/apple-touch-icon.png', buffer);
}
if (!fs.existsSync('public/masked-icon.svg')) {
  fs.copyFileSync('public/logo.svg', 'public/masked-icon.svg');
}
console.log('Public assets generated');
