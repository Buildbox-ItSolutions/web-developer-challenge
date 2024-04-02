import { SxProps } from "@mui/material";

export const getContainerStyle = (): SxProps => ({
  padding: "1%",
  height: "100vh",
  display: "flex",
  "> div:nth-of-type(2n)": {
    display: "block",
    height: "100%",
    width: "100%",
    margin: "0% 22% 0% 35%",
    "@media(max-width: 1920px)": {
      margin: "0% 15% 0% 30%",
    },
  },
});
