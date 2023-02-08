/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#343434",
          30: "#9f9f9f",
          40: "#808080",
          50: "#5E5E5E",
          60: "#494949",
          70: "#3b3b3b",
          80: "#313131",
          90: "#2b2b2b",
        },
        green: "#70BB00",
      },
    },
  },
  plugins: [],
};
