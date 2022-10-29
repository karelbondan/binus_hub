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
        'pronhub_yellow': '#FE9801',
        'pronhub_blue' : '#0097da',
        'pronhub_white' : '#f2f2f2',
        'binusmaya': '#0097DA'
      },
      screens: {
        'very_small': '20px',
        'kinda_small': '200px',
        'small': '240px',
        'medium': '720px',
        'almost_large': '960px',
        'bruh': '1023px',
        'large': '1024px',
        'xtra_large': '1440px'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}
