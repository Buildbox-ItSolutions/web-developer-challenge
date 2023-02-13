/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "default-image": "url(/src/assets/photo-upload.svg)"
      }
    },
    colors: {
      ...colors,
      'customColors': {
        'header-black': 'rgb(43,43,43)',
        'black-one': 'rgb(52,52,52)',
        'black-two': 'rgb(49,49,49)',
        'black-three': 'rgb(59,59,59)',
        'input-color': 'rgb(73,73,73)',
        'input-gray': 'rgb(159, 159, 159)',
        'button-gray': 'rgb(95, 95, 95)',
        'button-green': 'rgb(113, 187, 0)',
        'feed-gray': 'rgb(122, 122, 122)',
      },
      
  },
    extend: {},
  },
  
  plugins: [],
}
