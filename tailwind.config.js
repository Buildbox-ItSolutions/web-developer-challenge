/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mainColor: {
        title: '#71BB00',
        subtitle: '#5F5F5F',
        darkest: '#232323',
        dark: '#2B2B2B',
        grey: '343434',
      },
    },
    extend: {},
  },
  plugins: [],
};
