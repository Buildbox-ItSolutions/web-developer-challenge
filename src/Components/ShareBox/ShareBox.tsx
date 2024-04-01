import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { FaPhotoVideo } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import {
  getContainerStyle,
  StyledUserButton,
  getTextfieldStyle,
  StyledMenuButton,
  StyledSubmitButton,
  StyledMidiaButton,
} from "./ShareBox.styles.tsx";

const ShareBox = ({ setPostList }) => {
  const [file, setFile] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [profilePic, setProfilePic] = useState<string | undefined>(undefined);

  function handleProfilePicChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setProfilePic(URL.createObjectURL(selectedFile));
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
    }
  }

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
        profileImage: profilePic,
        uploadedImage: file,
      };

      setPostList((prevPosts) => [...prevPosts, newPost]);

      nomeElement.value = "";
      publicacaoElement.value = "";
    }
  };

  return (
    <Box sx={getContainerStyle()}>
      <Box>
        <StyledUserButton
          onChange={handleProfilePicChange}
          profilePic={profilePic}
        />
        <Box sx={getTextfieldStyle()}>
          <TextField id="nomeTextField" placeholder="Digite seu nome" />
          <TextField
            id="publicacaoTextField"
            placeholder="Começar publicação"
            multiline
          />
        </Box>
      </Box>
      <Box>
        <StyledMidiaButton
          type="file"
          label="Midia"
          icon={<FaPhotoVideo />}
          onChange={handleChange}
          fileName={fileName}
        />
        <StyledMenuButton label="Links" icon={<PiLinkSimpleBold />} />
        <StyledSubmitButton onClick={handleButtonClick} />
      </Box>
    </Box>
  );
};

export default ShareBox;
