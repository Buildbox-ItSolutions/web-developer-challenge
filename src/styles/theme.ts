const theme = {
  colors: {
    primary: '#71bb00',
    primary_darker: '#518501',
    primary_light: '#d3f79c',
    orange: '#cf5724',
    white: '#ffffff',
    gray_scale_1: '#2b2b2b',
    gray_scale_2: '#313131',
    gray_scale_3: '#343434',
    gray_scale_4: '#3b3b3b',
    gray_scale_5: '#494949',
    gray_scale_6: '#5f5f5f',
    gray_scale_7: '#7a7a7a',
    gray_scale_8: '#9f9f9f',
    transparent: 'transparent'
  },
  fontSize: {
    sm: '12px',
    md: '14px',
    lg: '16px'
  },
  fontWeight: {
    bold: 500,
    regular: 'normal'
  },
  spacing: {
    '0': '0px',
    '1': '2px',
    '2': '4px',
    '4': '8px',
    '5': '12px',
    '6': '16px',
    '7': '24px',
    '8': '32px'
  }
};

export type ThemeColors = keyof typeof theme.colors;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeFontSize = keyof typeof theme.fontSize;
export type ThemeFontWeight = keyof typeof theme.fontWeight;

export default theme;
