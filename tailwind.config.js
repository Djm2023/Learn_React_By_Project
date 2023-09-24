/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
     cstmfont:['ProximaNova','arial','Helvetica Neue','sans-serif'],
     cstmresfont:['Basis Grotesque Pro'],
    },
    extend: {
      colors:{
        cstmsilver:'#494c5c',
        cstmorange:'#fc8625',
        cstmblack:'#161a1f',
        cstmblackone:"rgba(2, 6, 12, 0.75)",
        cstmcuisine:"rgba(2, 6, 12, 0.6)",
      }
    },
  },
  plugins: [],
}