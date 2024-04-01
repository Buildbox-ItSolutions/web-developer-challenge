import React from "react";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import { FeedboxProps } from "./Feedbox.types.ts";
import {
  getContainerStyle,
  getPerfilIconStyle,
  getTextStyle,
  getSubtitleStyle,
  StyledImage,
  StyledIconButton,
  getMenuButtonStyle,
  getTitleStyle,
} from "./Feedbox.styles.tsx";
import { FaRegComment, FaRegShareSquare, FaRegBookmark } from "react-icons/fa";
import { RiMoreLine } from "react-icons/ri";
import { GrLike } from "react-icons/gr";

const FeedboxItem = React.forwardRef<HTMLDivElement, FeedboxProps>(
  ({ name, text, profileImage, uploadedImage, ...props }, ref) => {
    return (
      <Box sx={getContainerStyle} {...props}>
        <Box>
          <Box sx={getPerfilIconStyle}>
            <img alt="" src={`${profileImage}`} />
          </Box>
          <Typography sx={getTitleStyle}>{name}</Typography>
          <IconButton sx={getMenuButtonStyle}>
            <RiMoreLine />
          </IconButton>
        </Box>
        <Box>
          <Typography sx={getTextStyle}>{text}</Typography>
          {uploadedImage ? <StyledImage alt="" src={`${uploadedImage}`} /> : ""}
        </Box>
        <Box>
          <Typography sx={getSubtitleStyle}>
            0 Likes 0 Comentarios 0 Compartilhamentos
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
    );
  }
);

export default FeedboxItem;
