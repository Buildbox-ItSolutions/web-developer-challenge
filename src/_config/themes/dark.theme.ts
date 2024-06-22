import { ITheme } from "./theme.interface";
import { BASE_THEME } from "./base.theme";

export const DARK_THEME: ITheme = {
  colors: {
    background: {
      page: "#303030",
      darker: "#232323",
      lighter: "#444444",
    },
    text: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#FFFFFF",
      secondary: "#777777",
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
