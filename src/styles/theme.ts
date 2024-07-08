/**
 * This is just one layer of an ideal design system. Contextual tokens and the remaining base tokens will be left out due to this being a quick challenge and not requiring the complexity and time investment needed for building them.
 */
export const theme = {
  color: {
    neutral: {
      100: "#C8C8C8",
      200: "#BBBBBB",
      300: "#565656",
      400: "#494949",
      500: "#383838",
      600: "#343434",
      700: "#313131",
      800: "#2B2B2B",
    },
    common: {
      white: "#FFF",
      black: "#000",
    },
    primary: {
      300: "#83C81A",
      400: "#71BB00",
    },
    danger: {
      300: "#C16B45",
      400: "#AD4F26",
    },
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "40%",
  },
  breakpoint: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
};
