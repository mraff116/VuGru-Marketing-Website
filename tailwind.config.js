/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#67002B', // Deep burgundy
          800: '#8B0045',
          700: '#A3005F',
          600: '#BB0079', // Main burgundy
          500: '#D30093',
          400: '#EB00AD',
          300: '#FF00C7',
          200: '#FF33D1',
          100: '#FF66DB',
          50: '#FF99E5',
        },
        secondary: {
          900: '#1E0066', // Deep blue
          800: '#260085',
          700: '#2E00A3',
          600: '#3700C2', // Main blue
          500: '#3F00E0',
          400: '#4700FF',
          300: '#6633FF',
          200: '#8566FF',
          100: '#A399FF',
          50: '#C2CCFF',
        },
        accent: {
          900: '#330066', // Deep purple
          800: '#470085',
          700: '#5B00A3',
          600: '#6F00C2', // Main purple
          500: '#8300E0',
          400: '#9700FF',
          300: '#AB33FF',
          200: '#BF66FF',
          100: '#D399FF',
          50: '#E7CCFF',
        },
      },
    },
  },
  plugins: [],
};