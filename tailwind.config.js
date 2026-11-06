/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ['"Roboto Slab Variable"', 'Georgia', 'serif'],
        sans: [
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        // Brand palette shared with the Lawnotation platform (lawnotation-ui)
        primary: {
          light: '#236B95',
          DEFAULT: '#0D5984',
          dark: '#0B4B6F',
        },
        secondary: {
          light: '#E9F0F4',
          DEFAULT: '#B2CAD7',
          dark: '#92B5C8',
        },
        beige: '#F6F2EC',
        ink: '#16324A',
        // Annotation label colours (green/red reused from the previous landing page)
        'label-duty': '#0D5984',
        'label-condition': '#0D8435',
        'label-exception': '#840D22',
      },
      screens: {
        '4k': '3840px',
      },
      maxWidth: {
        wrap: '76rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(22, 50, 74, 0.06), 0 8px 24px -12px rgba(22, 50, 74, 0.18)',
        'card-hover': '0 2px 4px rgba(22, 50, 74, 0.08), 0 16px 40px -12px rgba(22, 50, 74, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          from: { width: '1.25rem' },
          to: { width: '4.5rem' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both',
        draw: 'draw 2.4s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
