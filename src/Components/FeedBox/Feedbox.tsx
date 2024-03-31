import React from "react";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import {
  getContainerStyle,
  getPerfilIconStyle,
  getTextStyle,
  getSubtitleStyle,
  StyledImage,
  StyledIconButton,
  getMenuButtonStyle,
} from "./Feedbox.styles.tsx";
import {
  FaUser,
  FaRegComment,
  FaRegShareSquare,
  FaRegBookmark,
} from "react-icons/fa";
import { RiMoreLine } from "react-icons/ri";
import { GrLike } from "react-icons/gr";

const Feedbox = () => {
  return (
    <Box>
      <Box sx={getContainerStyle}>
        <Box>
          <IconButton sx={getPerfilIconStyle}>
            <FaUser />
          </IconButton>
          <Typography sx={getTextStyle}>Felipe Alves de Oliveira</Typography>
          <IconButton sx={getMenuButtonStyle}>
            <RiMoreLine />
          </IconButton>
        </Box>
        <Box>
          <Typography sx={getTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <StyledImage src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
        </Box>
        <Box>
          <Typography sx={getSubtitleStyle}>
            Tantos tantos comentarios, tantos tantos linkes e tantos tantos
            compartilhamentos
          </Typography>
        </Box>
        <Divider />
        <Box>
          <StyledIconButton>
            <GrLike />
            <Typography>Gostei</Typography>
          </StyledIconButton>
          <StyledIconButton>
            <FaRegComment />
            <Typography>Comentar</Typography>
          </StyledIconButton>
          <StyledIconButton>
            <FaRegBookmark />
            <Typography>Salvar</Typography>
          </StyledIconButton>
          <StyledIconButton>
            <FaRegShareSquare />
            <Typography>Compartilhar</Typography>
          </StyledIconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedbox;
