// theme.ts

// Definição de tipos para as cores
export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  grey800: string;
  grey700: string;
  grey600: string;
  grey500: string;
  grey400: string;
  grey300: string;
  grey200: string;
  grey100: string;
  // Adicione mais cores conforme necessário
}

// Definição de tipo para o tema
export interface Theme {
  colors: ThemeColors;
}

// Objeto contendo as cores do tema
const colors: ThemeColors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  grey800: '#2b2b2b',
  grey700: '#313131',
  grey600: '#343434',
  grey500: '#3b3b3b',
  grey400: '#4b4b4b',
  grey300: '#494949',
  grey200: '#5f5f5f',
  grey100: 'rgba(75,75,75,0.1)',  // Adicione mais cores conforme necessário
};

// Objeto do tema completo
const theme: Theme = {
  colors,
};

export default theme;
