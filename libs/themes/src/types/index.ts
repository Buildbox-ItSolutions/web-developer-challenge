export type Theme = {
  primaryColorUp: string;
  primaryColorDown: string;
  primaryFontFamily: string;
  textColorDown: string;
  textColorUp: string;
  darkColorPure: string;
  lightColorPure: string;
  backgroundColorUp: string;
  backgroundColorDown: string;
  foregroundColorUp: string;
  foregroundColorDown: string;
  tertiaryColorUp: string;
  tertiaryColorDown: string;
  secondaryColorDown: string;
  secondaryColorUp: string;
  borderColor: string;
  placeholderColor: string;
  fieldColorUp: string;
  fieldTextColor: string;
  fieldColorDown: string;
};

export type MultiTheme = {
  [name: string]: Theme;
};

export type Themes = 'dark' | 'light';

export type Breakpoints = {
  [name: string]: string;
};
