/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: true, // Garder le reset CSS
  },
  // Safelist minimale - seulement les classes dynamiques critiques
  safelist: [
    'animate-fadeIn',
    {
      pattern: /^(bg|text|border|shadow)-(primary|accent)-(500|600|700|800)$/,
      variants: ['hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════════
        // COULEURS PRINCIPALES - PALETTE BRETONNE (bleu marine #1d3557)
        // ═══════════════════════════════════════════════════════════════
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#6e8ca8',
          500: '#486581',
          600: '#1d3557',  // Couleur principale - bleu marine breton
          700: '#17293f',
          800: '#102a43',
          900: '#0a1929',
          950: '#061018',
        },
        // Accent bleu marine foncé (couleur du "SR" et cercle du logo)
        accent: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#6e8ca8',
          500: '#334e68',
          600: '#1d3557',
        },
      },
      fontFamily: {
        // Police principale - DM Sans pour un look moderne et professionnel
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
