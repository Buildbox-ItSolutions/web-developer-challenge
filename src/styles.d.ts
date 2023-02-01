import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      gray: {
        800: string;
        600: string;
        400: string;
        300: string;
        250: string;
        200: string;
        100: string;
      }
      green: string;
      red: string;
      white: string;
    }
  }
}