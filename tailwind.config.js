/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '767px'},
        'desktop': {'min': '768px'}
      },
    },
  },
  plugins: [],
}