export const theme = {
  black: {
    100: '#5f5f5f',
    200: '#4b4b4b',
    300: '#3b3b3b',
    400: '#343434',
    500: '#313131',
    600: '#2b2b2b',
    700: '#232323',
  },
  text: {
    primary: '#9f9f9f',
    secondary: '#7a7a7a',
  },
} as const;

export type Theme = typeof theme;
