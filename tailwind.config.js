/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        cyan: {
          brand: '#00b7d7',
        },
        violet: {
          brand: '#ac4bff',
        },
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
}
