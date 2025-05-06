/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#ffffff', // White
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4', // Light grey
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040', // Dark grey
          800: '#262626',
          900: '#171717', // Black
        },
        secondary: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#404040', // Main accent - dark grey
          600: '#333333',
          700: '#262626',
          800: '#171717',
          900: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};