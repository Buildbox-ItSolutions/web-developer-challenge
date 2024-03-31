import React from "react";
import { Box, IconButton } from "@mui/material";

export const getContainerStyle = () => ({
  background: "#FFFFF7",
  padding: "3%",
  borderRadius: "20px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
  position: "relative",
  "> div:first-of-type": {
    display: "flex",
    alignItems: "center",
    gap: 3,
  },
  "> div:nth-of-type(2n)": {
    marginTop: "3%",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  "> div:nth-of-type(4n)": {
    flexDirection: "row",
    padding: "3% 0% 1% 0%",
    justifyContent: "center",
  },
});

export const getPerfilIconStyle = () => ({
  background: "lightGray",
  padding: "3%",
  alignSelf: "start",
  "> svg": { height: "32px", width: "32px" },
});

export const getTextStyle = () => ({
  fontWeight: "600",
  fontFamily: "Kanit",
  color: "#747474",
});

export const getMenuButtonStyle = () => ({
  position: "absolute",
  top: 10,
  right: 10,
});

export const getSubtitleStyle = () => ({
  fontWeight: "400",
  fontFamily: "Kanit",
  color: "#747474",
  fontSize: "14px",
  textAlign: "right",
  margin: "1% 0% 1% 0%",
});

export const StyledImage = (props) => {
  return (
    <Box
      component="img"
      sx={{
        width: "100%",
      }}
      {...props}
    />
  );
};

export const StyledIconButton = (props) => {
  return (
    <IconButton
      sx={{
        display: "flex",
        gap: 1,
        borderRadius: "16px",
        ":hover": {
          background: "none",
          "> svg": {
            color: "#363636",
          },
          "> p": {
            color: "#363636",
          },
        },
        "> p": {
          fontWeight: "600",
          fontFamily: "Kanit",
          color: "#747474",
        },
      }}
      {...props}
    />
  );
};
