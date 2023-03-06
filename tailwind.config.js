/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Montserrat' , 'sans-serif'],
        poiret: [ 'Poiret One', 'cursive' ], 
        gloock: ['Gloock', 'serif']  
      },
      colors : {
        pinkNude: '#ddc0b4',
        champagne: '#FBEDE0'
      }
      
    },
  },
  plugins: [],
}

