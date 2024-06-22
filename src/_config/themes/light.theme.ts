import { BASE_THEME } from "./base.theme";
import { ITheme } from "./theme.interface";

export const LIGHT_THEME: ITheme = {
  colors: {
    background: {
      page: "#EEEEEE",
      darker: "#CCCCCC",
      lighter: "#DDDDDD",
    },
    text: {
      black: "#000000",
      white: "#FFFFFF",
      primary: "#000000",
      secondary: "#666666",
      tertiary: "#555555",
    },
    main: {
      primary: "#82D305",
      hover: "#C8F902",
    },
    danger: {
      primary: "#EC9006",
      hover: "#F1B04C",
    },
  },
  base: {
    ...BASE_THEME,
  },
};
