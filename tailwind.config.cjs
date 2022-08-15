/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-200": '#2b2b2b',
        "black-300": '#313131',
        "black-400": '#343434',
        "black-350": '#3b3b3b',
        "black-450": '#4b4b4b',
        "black-500": '#494949',
        "black-550": '#5f5f5f',
        "black-600": '#707070',
        "black-700": '#7a7a7a',
        "black-800": '#9f9f9f',
        "green-200": '#71bb00',
      },
      fontFamily: {
        sans: ["Roboto, system-ui, sans-serif"]
      },
      screens: {
        'xs': '325px'
      }
    },
  },
  plugins: [],
}
