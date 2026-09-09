/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ivory: {
          DEFAULT: '#FAF6EF',
          light: '#FDFBF7',
          dark: '#F0E8DC',
          deep: '#E5DAC8',
        },
        parchment: {
          DEFAULT: '#F5EFE6',
          light: '#FDFBF8',
          dark: '#EDE4D4',
        },
        charcoal: {
          DEFAULT: '#1C1917',
          soft: '#38332E',
          muted: '#615A53',
        },
        terracotta: {
          DEFAULT: '#A4422A',
          dark: '#85321E',
          light: '#C25A41',
        },
        gold: {
          DEFAULT: '#B88A36',
          light: '#D4A853',
          dark: '#8E6721',
        },
        indigo: {
          DEFAULT: '#2C2738',
          deep: '#1C1924',
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(28,25,23,0.05), 0 4px 12px rgba(28,25,23,0.04)',
        card: '0 1px 3px rgba(28,25,23,0.06), 0 10px 25px -5px rgba(28,25,23,0.08)',
        modal: '0 20px 50px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(184,138,54,0.2)',
      },
    },
  },
  plugins: [],
}
