interface IColorsDefinitions {
  primary: string;
  hover: string;
}

export interface IColors {
  background: {
    page: string;
    darker: string;
    lighter: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  main: IColorsDefinitions;
  danger: IColorsDefinitions;
}

export interface IBaseTheme {
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface ITheme {
  colors: IColors;
  base: IBaseTheme;
}
