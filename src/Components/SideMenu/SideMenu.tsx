import React, { useState, useEffect } from "react";
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

  console.log(IsFullHd);

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
      {IsFullHd && (
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
