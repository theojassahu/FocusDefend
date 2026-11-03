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
        brand: {
          midnight: '#071426',
          deep: '#0B1B32',
          surface: '#10233B',
          surfaceHover: '#162E4D',
          green: '#39D98A',
          emerald: '#20B978',
          mint: '#A7F3D0',
          border: 'rgba(255, 255, 255, 0.10)',
          muted: '#B8C4D3',
          darkMuted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'card': '20px',
        'btn': '14px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(57, 217, 138, 0.25)',
        'glow-md': '0 0 30px rgba(57, 217, 138, 0.35)',
        'glow-lg': '0 0 50px rgba(57, 217, 138, 0.45)',
        'surface': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'surface-inner': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
