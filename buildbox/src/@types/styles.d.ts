import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      gray: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
      green: {
        400: string;
        500: string;
      };
      red: {
        500: string;
      };
    };
  }
}

declare module "*.png";
