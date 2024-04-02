import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";

export const getMainContainerStyle = () => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

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
    "> img": {
      alignSelf: "center",
    },
  },
  "> div:nth-of-type(4n)": {
    flexDirection: "row",
    padding: "3% 0% 1% 0%",
    justifyContent: "center",
  },
});

export const getPerfilIconStyle = () => ({
  alignSelf: "start",
  height: "80px",
  width: "80px",
  borderRadius: "50%",
  overflow: "hidden",
  "> img": { height: "100%", width: "100%" },
});

export const getTextStyle = () => ({
  fontWeight: "600",
  fontFamily: "Kanit",
  color: "#747474",
});

export const getTitleStyle = () => ({
  fontWeight: "600",
  fontFamily: "Kanit",
  background: "linear-gradient(to right, #cccccc, #00D4D4, #999999)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "32px",
  backgroundSize: "200% auto",
  animation: "floaterLetters 3s linear infinite",
});

export const getMenuButtonStyle = () => ({
  position: "absolute",
  top: 10,
  right: 15,
});

export const getSubtitleStyle = () => ({
  fontWeight: "400",
  fontFamily: "Kanit",
  color: "#747474",
  fontSize: "14px",
  textAlign: "right",
  margin: "1% 0% 1% 0%",
});

export const StyledImage = ({ src, alt }) => {
  const [imageSize, setImageSize] = useState({ width: "100%", height: "100%" });

  const handleImageLoaded = (event) => {
    const img = event.target;
    setImageSize({
      width: img.width,
      height: img.height > 600 ? "60%" : "100%",
    });
  };

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: imageSize.height,
        height: imageSize.height,
      }}
      onLoad={handleImageLoaded}
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
