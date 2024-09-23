/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab'],
      },
      colors: {
        beige: '#f6f2ec',
      },
      screens: {
        '4k': '3840px',
      },
    },
  },
  plugins: [],
}
