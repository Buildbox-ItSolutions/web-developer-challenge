import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import {
  getContainerStyle,
  StyledImage,
  StyledTitle,
  getSubtitleStyle,
  StyledButton,
} from "./SideMenu.styles.tsx";
import { FaGithub, FaLinkedin, FaReact, FaFigma } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";

const SideMenu = () => {
  return (
    <Box sx={getContainerStyle()}>
      <Box>
        <StyledImage />
        <StyledTitle>Felipe Alves</StyledTitle>
        <Typography sx={getSubtitleStyle()}>
          Cloud AWS | Desenvolvedor Web | React | JavaScript | TypeScript |
          Design System | Linux
        </Typography>
      </Box>
      <Divider />
      <StyledTitle sx={{ fontSize: "20px" }}>
        De uma olhada nas minhas redes
      </StyledTitle>
      <Box>
        <StyledButton>
          <FaGithub />
          Github
        </StyledButton>
        <StyledButton>
          <FaLinkedin />
          Linkedin
        </StyledButton>
        <StyledButton>
          <FaReact />
          Portifólio
        </StyledButton>
        <StyledButton>
          <TiDocument />
          Curriculo
        </StyledButton>
        <StyledButton>
          <FaFigma />
          Figma
        </StyledButton>
      </Box>
      <Divider />
      <StyledTitle sx={{ fontSize: "20px" }}>Dados de contato </StyledTitle>
      <Box>
        <Typography sx={getSubtitleStyle()}>(11) 98166-9996</Typography>
        <Typography sx={getSubtitleStyle()}>
          felipe.alv14@hotmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default SideMenu;
