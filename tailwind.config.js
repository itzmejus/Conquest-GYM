/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#242424',
          600: '#2e2e2e',
        },
        accent: {
          400: '#f0c419',
          500: '#e5ba03',
          600: '#c49a02',
        },
      },
      fontFamily: {
        heading: ['"Oswald"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
