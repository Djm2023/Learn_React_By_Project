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
        cstmsilver:'#636674',
        cstmorange:'#fc8625'
      }
    },
  },
  plugins: [],
}