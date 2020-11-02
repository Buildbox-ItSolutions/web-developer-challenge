import React from "react";
import { InputText } from "../../../../GlobalComponents/InputText/InputText";
import { TextArea } from "../../../../GlobalComponents/TextArea";
import { FormPostController } from "../../controllers/formPostController";
import Trash from "../../../../assets/trash.svg";
import Image from "../../../../assets/image.svg";

import {
  PostComments,
  ImageContainer,
  InputsContainer,
  ActionsContainer,
  DiscardButton,
  PublishButton,
} from "./styles";

const FormPosts: React.FC<{ formController: FormPostController }> = ({
  formController,
}) => {
  return (
    <PostComments>
      <ImageContainer id="image">
        {formController.imageAvatar === "" ? (
          <div id="inputUpload">
            <label htmlFor="upload">
              <img src={Image} alt="avatar" />
            </label>
            <input
              id="upload"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e: any) => formController.handleImageToBase64(e)}
            />
          </div>
        ) : (
          <div id="image">
            <img src={formController.imageAvatar} id="avatar" alt="Avatar" />
            <img
              src={Trash}
              id="trash"
              title="Descartar"
              onClick={() => formController.setImageAvatar("")}
              alt="avatar"
            />
          </div>
        )}
      </ImageContainer>
      <InputsContainer id="inputs">
        <InputText
          placeholder="Digite seu nome"
          onChange={(e: string) => formController.handleSetName(e)}
          value={formController.name}
        />
        <TextArea
          placeholder="Menssagem"
          onChange={(e: string) => formController.handleSetMessage(e)}
          height="80px"
          value={formController.message}
        />
      </InputsContainer>
      <ActionsContainer id="action">
        <DiscardButton
          onClick={(e: any) => formController.handleDiscardPost(e)}
        >
          Descartar
        </DiscardButton>
        <PublishButton
          onClick={(e: any) => formController.handlePublishPost(e)}
          publish={formController.enableButtonPublish}
        >
          Publicar
        </PublishButton>
      </ActionsContainer>
    </PostComments>
  );
};

const Wrapper: React.FC = () => {
  const controller = new FormPostController();
  return <FormPosts formController={controller} />;
};

export { Wrapper as FormPosts };
