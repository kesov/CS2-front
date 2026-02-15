/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'cs-blue': '#2d5af1',
        'cs-purple': '#8a2be2',
        'cs-orange': '#ff6b35',
        'cs-dark': '#0a0e17',
        'cs-dark-secondary': '#141a2d',
      },
      backgroundImage: {
        'gradient-cs': 'linear-gradient(135deg, #2d5af1 0%, #8a2be2 100%)',
      }
    },
  },
  plugins: [],
}