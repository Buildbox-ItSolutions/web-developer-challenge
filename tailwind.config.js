/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@heroicons/react/24/solid'),
    require("tailwindcss-animate"),
    require("babel-plugin-macros")
  ],
}

