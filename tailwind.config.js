/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
     cstmfont:['ProximaNova','arial','Helvetica Neue','sans-serif']
    },
    extend: {
      colors:{
        cstmsilver:'#494c5c',
        cstmorange:'#fc8625',
        cstmblack:'#161a1f',
      }
    },
  },
  plugins: [],
}