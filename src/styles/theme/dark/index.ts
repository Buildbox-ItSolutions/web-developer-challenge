import { Roboto } from "next/font/google";
import { Theme } from "../types";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const dark: Theme = {
  font: {
    family: roboto.style.fontFamily,
    sizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
  },
  colors: {
    black: "#3b3b3b",
    black_two: "#313131",
    header: "#2b2b2b",
    background: "#343434",

    primary: "#71bb00",

    font: "#FFFFFF",
    disabled: "#5f5f5f",
    placeholder: "#9f9f9f",

    warm_grey: "#7a7a7a",
    greyish_brown: "#494949",
  },
};
