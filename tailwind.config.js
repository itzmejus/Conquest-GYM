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
          400: '#ef5350',
          500: '#e53935',
          600: '#c62828',
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
