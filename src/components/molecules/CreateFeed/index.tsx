import React from "react";
import { FiImage, FiTrash } from "react-icons/fi";

import { Input, TextArea } from "../../../core/styles/components/inputs";
import {
  ButtonDiscard,
  ButtonGreen,
} from "../../../core/styles/components/buttons";
import { useCreateFeedContainer } from "./container";
import * as S from "./styles";

export const CreateFeed = () => {
  const {
    onSubmit,
    onChangeName,
    onChangeMessage,
    onChangeImage,
    image,
    clearImage,
    clearFields,
    name,
    message,
    isPublishAvailable,
  } = useCreateFeedContainer();

  return (
    <S.Container>
      <S.FormWrapper onSubmit={onSubmit}>
        <S.ImageArea haveImage={!!image}>
          <label htmlFor="image">
            <S.ImageField role="button">
              {image ? <img src={image} alt="author" /> : <FiImage size={23} />}
            </S.ImageField>
          </label>

          <input type="file" id="image" hidden onChange={onChangeImage} />

          {image && <FiTrash size={21} role="button" onClick={clearImage} />}
        </S.ImageArea>

        <Input
          type="text"
          placeholder="Digite seu nome"
          onChange={onChangeName}
          value={name}
          maxLength={118}
        />
        <TextArea
          placeholder="Mensagem"
          spellCheck="false"
          maxLength={150}
          onChange={onChangeMessage}
          value={message}
        />

        <S.Actions>
          <ButtonDiscard type="button" onClick={clearFields}>
            Descartar
          </ButtonDiscard>
          <ButtonGreen type="submit" disabled={isPublishAvailable}>
            Publicar
          </ButtonGreen>
        </S.Actions>
      </S.FormWrapper>
    </S.Container>
  );
};
