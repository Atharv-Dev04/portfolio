/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#090909',
          secondary: '#111111',
          card: '#171717',
          cardHover: '#1f1f1f',
          subtle: '#141414',
        },
        border: {
          subtle: '#222222',
          DEFAULT: '#292929',
          focus: '#3f3f46',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        accent: {
          DEFAULT: '#C0C0C0',
          silver: '#E4E4E7',
          graphite: '#52525B',
          glow: 'rgba(192, 192, 192, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        heading: ['Manrope', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.7)',
        'glow': '0 0 35px -5px rgba(192, 192, 192, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

