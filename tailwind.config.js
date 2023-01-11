/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        'custGreen1' : '#68C3A3',
        'custGreen2' : '#66CC99',
        'custGreen3' : '#9FD9B0',
        'custGray' : '#BFCCAE'
      }
    },
  },
  plugins: [],
}
