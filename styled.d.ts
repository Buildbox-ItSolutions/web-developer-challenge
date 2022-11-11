import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      orange: string;
      "green-50": string;
      "green-300": string;
      "green-600": string;
      "gray-100": string;
      "gray-200": string;
      "gray-300": string;
      "gray-400": string;
      "gray-500": string;
      "gray-550": string;
      "gray-600": string;
      "gray-700": string;
      "gray-800": string;
    };
    device: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
  }
}
