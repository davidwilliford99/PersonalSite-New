/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gloock': ['"Gloock"', 'serif'],
        'Montserrat': ['"Montserrat"', 'sans-serif'],
        'Roboto': ['"Roboto Mono"', 'monospace']
      },
      colors: {
        'offWhite': '#FFFFF0',
        'dark': '#121212',
        'dark2': '#2c2c2c'
      },
    },
  },
  plugins: [],
}
