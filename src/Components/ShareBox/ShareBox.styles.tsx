import React from "react";
import { SxProps, IconButton, Box, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa";

export const getContainerStyle = (): SxProps => ({
  background: "#FFFFF7",
  padding: "2%",
  borderRadius: "20px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
  marginBottom: "2%",
  display: "grid",
  placeItems: "center",
  "> div:first-of-type": {
    display: "flex",
    gap: 3,
    alignItems: "center",
    paddingRight: "8%",
  },
  "> div:nth-of-type(2n)": {
    display: "flex",
    alignItems: "center",
    marginTop: "1%",
    width: "100%",
    justifyContent: "center",
    gap: 2,
  },
});

export const getTextfieldStyle = (): SxProps => ({
  display: "flex",
  flexDirection: "column",
  gap: 1,
  "> div > div": {
    borderRadius: "64px",
    width: "550px",
    "@media(max-width: 1920px)": {
      width: "410px",
    },
  },
});

export const StyledUserButton = (props) => {
  return (
    <IconButton
      component="label"
      sx={{
        background: "lightGray",
        padding: "5%",
        "> svg": {
          height: "64px",
          width: "64px",
        },
      }}
      {...props}
    >
      <FaUser />
      <input type="file" hidden />
    </IconButton>
  );
};

export const StyledMenuButton = (props) => {
  const { label, icon, ...rest } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      {...rest}
    >
      <IconButton sx={{ borderRadius: "16px", ">svg": { color: "#007aff" } }}>
        {icon}
        <Typography
          sx={{
            fontWeight: "600",
            fontFamily: "Kanit",
            color: "#747474",
            marginLeft: "4px",
          }}
        >
          {label}
        </Typography>
      </IconButton>
    </Box>
  );
};
