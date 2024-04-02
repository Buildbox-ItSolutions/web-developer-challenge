import React from "react";
import { SxProps, Box, Typography, Button } from "@mui/material";
import { SideMenuProps } from "./SideMenu.types";
// @ts-ignore
import profileImage from "../../assets/images/Eu.jpg";

export const getContainerStyle = (
  headerIsOut?: SideMenuProps["headerIsOut"]
): SxProps => ({
  background: "#FFFFF7",
  padding: "2%",
  borderRadius: "32px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
  height: "fit-content",
  width: "15%",
  minWidth: "15%",
  display: "flex",
  flexDirection: "column",
  gap: 3,
  textAlign: "center",
  position: "fixed",
  transition: "1s",
  transform: headerIsOut ? "translateY(-12%)" : "",

  "@media(max-width: 1920px)": {
    width: "20%",
    minWidth: "20%",
    gap: 1.5,
    transform: headerIsOut ? "translateY(-13%)" : "translateY(-1%)",
  },
  "> div:first-of-type": {
    display: "grid",
    placeItems: "center",
    gap: 2,
    "@media(max-width: 1920px)": {
      gap: 1,
    },
  },
  "> div:nth-of-type(2n)": {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  "> div:nth-of-type(3n)": {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
});

export const getSubtitleStyle = (): SxProps => ({
  fontWeight: "600",
  fontFamily: "Kanit",
  color: "#747474",
  textAlign: "center",
  "@media(max-width: 1920px)": {
    fontSize: "14px",
  },
});

export const StyledImage = (props) => {
  return (
    <Box
      sx={{
        alignSelf: "start",
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        overflow: "hidden",
        "> img": { height: "100%", width: "100%" },
        "@media(max-width: 1920px)": {
          height: "120px",
          width: "120px",
        },
      }}
      {...props}
    >
      <img alt="" src={`${profileImage}`} />
    </Box>
  );
};

export const StyledTitle = (props) => {
  const { sx, variant, ...rest } = props;
  return (
    <Typography
      sx={{
        fontWeight: "600",
        fontFamily: "Kanit",
        background: "linear-gradient(to right, #cccccc, #00D4D4, #999999)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: variant === 2 ? "20px" : "32px",
        backgroundSize: "200% auto",
        animation: "floaterLetters 3s linear infinite",
        ...sx,
        "@media(max-width: 1920px)": {
          fontSize: variant === 2 ? "18px" : "24px",
        },
      }}
      {...rest}
    />
  );
};

export const StyledButton = (props) => {
  return (
    <Button
      sx={{
        fontFamily: "Kanit",
        fontSize: "14px",
        color: "#747474",
        fontWeight: "600",
        "> svg": {
          marginRight: "8px",
        },
      }}
      {...props}
    />
  );
};
