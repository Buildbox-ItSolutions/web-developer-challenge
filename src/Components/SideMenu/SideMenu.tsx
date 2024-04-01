import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
// @ts-ignore
import profileImage from "../../assets/images/Eu.jpg";

const SideMenu = () => {
  return (
    <Box
      sx={{
        background: "#FFFFF7",
        padding: "2%",
        borderRadius: "32px",
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
        height: "fit-content",
        width: "20%",
        minWidth: "20%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            alignSelf: "start",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            "> img": { height: "100%", width: "100%" },
          }}
        >
          <img alt="" src={`${profileImage}`} />
        </Box>
        <Typography
          sx={{
            fontWeight: "600",
            fontFamily: "Kanit",
            background: "linear-gradient(to right, #cccccc, #00D4D4, #999999)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "32px",
            backgroundSize: "200% auto",
            animation: "floaterLetters 3s linear infinite",
          }}
        >
          Felipe Alves
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontFamily: "Kanit",
            color: "#747474",
            textAlign: "center",
          }}
        >
          {
            "Cloud AWS | Desenvolvedor Web | React | JavaScript | TypeScript | Design System | Linux"
          }
        </Typography>
      </Box>
      <Divider />
      <Typography
        sx={{
          fontWeight: "600",
          fontFamily: "Kanit",
          background: "linear-gradient(to right, #cccccc, #00D4D4, #999999)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          fontSize: "20px",
          backgroundSize: "200% auto",
          animation: "floaterLetters 3s linear infinite",
        }}
      >
        De uma olhada nas minhas redes
      </Typography>
      <Button>Github</Button>
      <Button>Linkedin</Button>
      <Button>Portifólio</Button>
      <Button>Curriculo</Button>
      <Button>Figma</Button>
      <Typography
        sx={{
          fontWeight: "600",
          fontFamily: "Kanit",
          background: "linear-gradient(to right, #cccccc, #00D4D4, #999999)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          fontSize: "20px",
          backgroundSize: "200% auto",
          animation: "floaterLetters 3s linear infinite",
        }}
      >
        Dados de contato
      </Typography>
      <Typography>(11) 98166-9996</Typography>
      <Typography>felipe.alv14@hotmail.com</Typography>
    </Box>
  );
};

export default SideMenu;
