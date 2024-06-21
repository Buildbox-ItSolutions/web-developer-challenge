import { BASE_THEME } from "./base.theme";
import { ITheme } from "./theme.interface";

export const LIGHT_THEME: ITheme = {
  colors: {
    background: {
      page: "#D9D9D9",
      darker: "#444444",
      lighter: "#AAAAAA",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
      tertiary: "#FFFFFF",
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
