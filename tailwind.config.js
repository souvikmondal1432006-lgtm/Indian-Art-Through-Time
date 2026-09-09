/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      colors: {
        parchment: {
          DEFAULT: '#F2E9D8',
          light: '#F8F2E6',
          dark: '#E6D9BE',
        },
        charcoal: {
          DEFAULT: '#2B241C',
          soft: '#4A4038',
        },
        terracotta: {
          DEFAULT: '#B4592F',
          dark: '#8F4324',
          light: '#D98052',
        },
        gold: {
          DEFAULT: '#B4862C',
          light: '#D7B45F',
        },
        indigo: {
          DEFAULT: '#3A3555',
          deep: '#241F38',
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        card: '0 1px 2px rgba(43,36,28,0.06), 0 8px 24px -8px rgba(43,36,28,0.18)',
        lift: '0 4px 8px rgba(43,36,28,0.08), 0 20px 40px -12px rgba(43,36,28,0.28)',
      },
    },
  },
  plugins: [],
}
