/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#0f172a',
          indigo: '#1e3a8a',
          blue: '#2563eb',
          amber: '#d97706',
          emerald: '#059669',
          crimson: '#dc2626',
        }
      }
    },
  },
  plugins: [],
}
