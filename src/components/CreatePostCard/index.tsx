import React, { useRef } from "react";

import {
  AppButon,
  AppButtonUnderline,
  AppInput,
  AppTextArea,
} from "../../globalStyle";
import {
  AppCard,
  AppCardButtonContainer,
  AppCardContainer,
  AppCardImageContainer,
  RoundImage,
} from "./styles";

import Image from "../../assets/image.png";
import Image2x from "../../assets/image@2x.png";
import Image3x from "../../assets/image@3x.png";

const CreatePostCard = () => {
  const FileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = () => {
    FileInputRef.current?.click();
  };

  return (
    <AppCard>
      <form action="">
        <AppCardImageContainer>
          <RoundImage onClick={handleImageChange}>
            <img
              src={Image}
              alt="Upload"
              srcSet={`${Image2x} 2x, ${Image3x} 3x,`}
            />
          </RoundImage>
          <input
            style={{ display: "none" }}
            ref={FileInputRef}
            type="file"
            name="fileInput"
            accept="image/*"
          />
        </AppCardImageContainer>
        <AppCardContainer>
          <AppInput placeholder="Digite seu nome" type="text" name="nome" />
          <AppTextArea placeholder="Mensagem" name="mensagem"></AppTextArea>
        </AppCardContainer>
        <AppCardButtonContainer>
          <AppButtonUnderline>Descartar</AppButtonUnderline>
          <AppButon>Publicar</AppButon>
        </AppCardButtonContainer>
      </form>
    </AppCard>
  );
};

export default CreatePostCard;
