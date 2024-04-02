import React from "react";
import {
  SxProps,
  IconButton,
  Box,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";
// @ts-ignore
import Avatar from "../../assets/images/Avatar.png";

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
    borderRadius: "32px",
    width: "550px",
    "@media(max-width: 1920px)": {
      width: "410px",
    },
  },
});

export const StyledUserButton = (props) => {
  const { onChange, profilePic, ...rest } = props;
  return (
    <IconButton
      component="label"
      sx={{
        transition: "ease 0.5s",
        ":hover": {
          transform: "scale(1.1, 1.1)",
          transition: "ease 0.5s",
        },
      }}
      onChange={onChange}
      {...rest}
    >
      <Box
        sx={{
          alignSelf: "start",
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          overflow: "hidden",
          "> img": { height: "100%", width: "100%" },
        }}
        onChange={onChange}
        {...rest}
      >
        <img alt="" src={profilePic ? `${profilePic}` : `${Avatar}`} />
      </Box>
      <input type="file" hidden />
      <Typography
        sx={{
          position: "absolute",
          bottom: 25,
          color: "#FFFFF7",
          fontWeight: "600",
          fontFamily: "Kanit",
        }}
      >
        {profilePic ? "" : "Foto"}
      </Typography>
    </IconButton>
  );
};

export const StyledMidiaButton = (props) => {
  const { label, icon, onChange, fileName, ...rest } = props;
  return (
    <Tooltip placement="top" title={fileName}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          position: "relative",
          animation: fileName?.length > 0 ? "floater 1.5s infinite" : "",
          transform: fileName?.length > 0 ? "translateY(-3%)" : "",
          "@keyframes floater": {
            "0%": { transform: "translateY(-3%);transition: ease 0.5s" },
            "50%": { transform: "translateY(3%);transition: ease 0.5s" },
          },
        }}
      >
        <IconButton
          component="label"
          sx={{
            borderRadius: "16px",
            ">svg": { color: "#007aff" },
          }}
          onChange={onChange}
          {...rest}
        >
          {icon}
          <input type="file" hidden />
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Kanit",
              marginLeft: "8px",
              color: fileName?.length > 0 ? "#007aff" : "#747474",
            }}
          >
            {label}
          </Typography>
        </IconButton>
      </Box>
    </Tooltip>
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

export const StyledSubmitButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontFamily: "Kanit",
        borderRadius: "20px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "600",
      }}
      {...props}
    >
      Publicar
    </Button>
  );
};
