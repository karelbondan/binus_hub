/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pronhub': '#1B1B1B',
        'pronhub_light': '#3d3d3d',
        'pronhub_navbar': '#292929',
        'pronhub_yellow': '#FE9801'
      },
      screens: {
        'very_small': '20px',
        'small': '240px',
        'medium': '720px',
        'almost_large': '960px',
        'bruh': '1023px',
        'large': '1024px',
        'xtra_large': '1440px'
      }
    },

  },
  plugins: [],
}
