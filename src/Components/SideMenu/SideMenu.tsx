import React, { useState } from "react";
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
  const headerPosition = document.querySelector("#header");
  const [headIsOut, setHeaderIsOut] = useState(false);

  function isHeaderVisible() {
    const headerRect = headerPosition?.getBoundingClientRect();
    if (!headerRect) return false;
    return (
      headerRect.top >= 0 &&
      headerRect.left >= 0 &&
      headerRect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      headerRect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", function () {
    if (isHeaderVisible()) {
      setHeaderIsOut(false);
    } else {
      setHeaderIsOut(true);
    }
  });

  const [IsFullHd, setFullHd] = useState(false);

  function detectWindowSize() {
    window.innerWidth <= 1920 ? setFullHd(true) : setFullHd(false);
  }

  window.onresize = detectWindowSize;

  return (
    <Box sx={getContainerStyle(headIsOut)}>
      <Box>
        <StyledImage />
        <StyledTitle>Felipe Alves</StyledTitle>
        <Typography sx={getSubtitleStyle()}>
          Cloud AWS | Desenvolvedor Web | React | JavaScript | TypeScript |
          Design System | Linux
        </Typography>
      </Box>
      <Divider />
      <StyledTitle variant={2}>De uma olhada nas minhas redes</StyledTitle>
      <Box>
        <StyledButton href="https://github.com/Felipe-alv-es" target="_blank">
          <FaGithub />
          Github
        </StyledButton>
        <StyledButton
          href="https://www.linkedin.com/in/felipe-alves-oliveira/"
          target="_blank"
        >
          <FaLinkedin />
          Linkedin
        </StyledButton>
        <StyledButton href="https://felipe-alv-es.netlify.app/" target="_blank">
          <FaReact />
          Portifólio
        </StyledButton>
        <StyledButton
          href="https://drive.google.com/file/d/1XM6Z1OPGKh1HR_uWsjoHQCtMljY_z8nw/view?usp=sharing"
          target="_blank"
        >
          <TiDocument />
          Curriculo
        </StyledButton>
        <StyledButton
          href="https://www.figma.com/file/IckaEZtrblVM49Bn7rvVKi/Untitled?type=design&mode=design&t=AtWKJPXO6YYuvMgd-0"
          target="_blank"
        >
          <FaFigma />
          Figma
        </StyledButton>
      </Box>
      {!IsFullHd && (
        <Box>
          <Divider />
          <StyledTitle variant={2}>Dados de contato </StyledTitle>
          <Box>
            <Typography sx={getSubtitleStyle()}>(11) 98166-9996</Typography>
            <Typography sx={getSubtitleStyle()}>
              felipe.alv14@hotmail.com
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SideMenu;
