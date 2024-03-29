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
      darkLimeGreen: "#71bb00",
      brownishOrange: "#d65923",
      greyishBrownThree: "#4b4b4b",
      white: "#fff",
      greyishBrownThree0: "rgba(75, 75, 75, 0)",

      warmGreyThree: "#5f5f5f",
      blackFour: "#3b3b3b",
      black: "#343434",
    },
  },
});
