/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: {
          title: '#71BB00',
          subtitle: '#5f5f5f',
          darkest: '#232323',
          dark: '#2B2B2B',
          grey: '343434',
          lightGrey: '#494949',
          boxBorder: '#3b3b3b',
          textDark: '#313131',
        },
      },
    },
  },
  plugins: [],
};
