/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab Variable'],
      },
      colors: {
        beige: '#f6f2ec',
        'dark-brown': '#472B00',
      },
      screens: {
        '4k': '3840px',
      },
    },
  },
  plugins: [],
}
