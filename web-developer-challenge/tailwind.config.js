/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    fontFamily: {
      'mono': ['SFProDisplay']
    },

    extend: {
      color: {
        'regal-black' : '#343434'
      }
    },
  },
  plugins: [],
}

