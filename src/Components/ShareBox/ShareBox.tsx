import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { FaPhotoVideo } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import { postData } from "../../assets/utils/postData.ts";
import {
  getContainerStyle,
  StyledUserButton,
  getTextfieldStyle,
  StyledMenuButton,
} from "./ShareBox.styles.tsx";

const ShareBox = () => {
  const [postList, setPostList] = useState(postData);

  console.log(postList);

  return (
    <Box sx={getContainerStyle()}>
      <Box>
        <StyledUserButton />
        <Box sx={getTextfieldStyle()}>
          <TextField placeholder="Digite seu nome" />
          <TextField placeholder="Começar publicação" />
        </Box>
      </Box>
      <Box>
        <StyledMenuButton label="Midia" icon={<FaPhotoVideo />} />
        <StyledMenuButton label="Links" icon={<PiLinkSimpleBold />} />
      </Box>
    </Box>
  );
};

export default ShareBox;
