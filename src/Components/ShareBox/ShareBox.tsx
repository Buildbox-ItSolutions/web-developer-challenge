import React from "react";
import { Box, TextField } from "@mui/material";
import { FaPhotoVideo } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import {
  getContainerStyle,
  StyledUserButton,
  getTextfieldStyle,
  StyledMenuButton,
  StyledSubmitButton,
} from "./ShareBox.styles.tsx";

const ShareBox = ({ setPostList }) => {
  const handleButtonClick = () => {
    const nomeElement = document.getElementById(
      "nomeTextField"
    ) as HTMLInputElement;
    const publicacaoElement = document.getElementById(
      "publicacaoTextField"
    ) as HTMLInputElement;

    const nome = nomeElement.value.trim();
    const texto = publicacaoElement.value.trim();

    if (nome !== "" && texto !== "") {
      const newPost = {
        id: Date.now(),
        nome,
        texto,
        profileImage: "",
        uploadedImage: "",
      };

      setPostList((prevPosts) => [...prevPosts, newPost]);

      nomeElement.value = "";
      publicacaoElement.value = "";
    }
  };

  return (
    <Box sx={getContainerStyle()}>
      <Box>
        <StyledUserButton />
        <Box sx={getTextfieldStyle()}>
          <TextField id="nomeTextField" placeholder="Digite seu nome" />
          <TextField
            id="publicacaoTextField"
            placeholder="Começar publicação"
          />
        </Box>
      </Box>
      <Box>
        <StyledMenuButton label="Midia" icon={<FaPhotoVideo />} />
        <StyledMenuButton label="Links" icon={<PiLinkSimpleBold />} />
        <StyledSubmitButton onClick={handleButtonClick} />
      </Box>
    </Box>
  );
};

export default ShareBox;
