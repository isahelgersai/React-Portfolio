/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'poppins'],
      },

      colors: {
        'blue-ig': '#c3c3c3',
      },
    },
  },
  plugins: [],
};
