/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'green': '0 0 0.75rem #00df9a',
      }
    },
  },
  plugins: [],
}

