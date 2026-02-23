/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0B1F3A',
          light: '#1E3A5F',
          dark: '#050F1D',
        },
        accent: {
          DEFAULT: '#2E8C82',
          glow: '#3EE4D7',
          soft: '#E6FFFA',
        },
        luxury: {
          gold: '#D4AF37',
          silver: '#C0C0C0',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          dark: '#F1F5F9',
        }
      }
    },
  },
  plugins: [],
};
