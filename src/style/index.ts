import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      warmGrey: "#707070",
      warmGreyThree: "#5f5f5f",
      blackFour: "#3b3b3b",
      black: "#343434",
    },
  },
});
