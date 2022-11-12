/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, ChangeEvent, useEffect } from "react";
import { CardContainer, CardContainerButton } from "./styled-components";
import deleteIcon from "@/app/presentation/assets/icons/trash.svg";
import PhotoInput from "../PhotoInput/PhotoInput";
import { LocalStorageAdapter } from "@/app/infra/cache/local-storage-adapter";
import { AddPost } from "@/app/domain/usecases/addPost";
import Button from "../Buttons/Button";
import Textarea from "../Inputs/CardInputTextArea/CardInputTextArea";
import Input from "../Inputs/CardInput/CardInput";
import { usePosts } from "@/app/presentation/modules/contexts/postItem";

export interface CardCreatePostInterface {
  storage: LocalStorageAdapter;
  addPost: AddPost;
}
export interface PreviewImage {
  name: string;
  url: string;
}

const CardCreatePost: React.FC<CardCreatePostInterface> = ({
  addPost,
  storage,
}) => {
  const { onGetFromToggle, getFromToggle } = usePosts();
  const [getName, setName] = useState<string>("");
  const [getMessage, setMessage] = useState<string>("");
  const [getImage, setImage] = useState<File>();
  const [getPreviewImage, setPreviewImage] = useState<PreviewImage>();

  const [getTypeButton, setTypeButton] = useState<"disabled" | "primary">(
    "disabled"
  );
  const [getMsgNameField, setMsgNameField] = useState<boolean>(false);
  const [getMsgMessageField, setMsgMessageField] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>();

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const selectedImage = event.target.files.item(0);

      if (selectedImage) {
        setImage(selectedImage);

        const selectedImagePreview = {
          name: selectedImage.name,
          url: URL.createObjectURL(selectedImage),
        };

        const selectedImageURL = URL.createObjectURL(selectedImage);
        setImgUrl(selectedImageURL);

        setPreviewImage(selectedImagePreview);
      }
    }
  }

  function removeImage() {
    setImage(undefined);
    setPreviewImage(undefined);
  }

  function verifyInputValue(field: string, value: string) {
    if (field === "name") {
      setName(value);
    } else if (field === "message") {
      setMessage(value);
    }
  }

  useEffect(() => {
    if (getName.length > 0 && getMessage.length > 0) {
      setTypeButton("primary");
      setMsgMessageField(false);
      setMsgNameField(false);
    } else {
      setTypeButton("disabled");

      if (getName.length > 0) {
        setMsgNameField(false);
      }
      if (getMessage.length > 0) {
        setMsgMessageField(false);
      }
    }
  }, [getName, getMessage]);

  function isOnBlur(field: string) {
    if (field === "name") {
      if (getName.length <= 0) {
        setMsgNameField(true);
      } else {
        setMsgNameField(false);
      }
    }
    if (field === "message") {
      if (getMessage.length <= 0) {
        setMsgMessageField(true);
      } else {
        setMsgMessageField(false);
      }
    }
  }

  const handleSubmit = async () => {
    try {
      const post = await addPost.add({
        name: getName,
        message: getMessage,
        urlx: imgUrl as string,
      });
      onGetFromToggle(true);
      storage.set("POST", post);
    } catch (erro) {
      console.log(erro);
    }

    setName("");
    setMessage("");
    setPreviewImage(undefined);
    setImage(undefined);
  };

  function dischargeData() {
    setName("");
    setMessage("");
    setPreviewImage(undefined);
    setImage(undefined);
  }
  return (
    <>
      <CardContainer>
        <main>
          <div className="preview-image">
            <PhotoInput
              onChange={handleSelectImage}
              getPreviewImage={getPreviewImage}
            />
            {getPreviewImage && (
              <button type="button" onClick={() => removeImage()}>
                <img src={deleteIcon} alt="Excluir Imagem" />
              </button>
            )}
          </div>

          <Input
            placeholder="Digite seu nome"
            id="name"
            value={getName}
            getMsgNameField={getMsgNameField}
            onChange={(e) => verifyInputValue(e.target.id, e.target.value)}
            onBlur={(e) => isOnBlur(e.target.id)}
          />
          <br />
          <Textarea
            placeholder="Mensagem"
            id="message"
            value={getMessage}
            getMsgMessageField={getMsgMessageField}
            onChange={(e) => verifyInputValue(e.target.id, e.target.value)}
            onBlur={(e) => isOnBlur(e.target.id)}
          />
          <CardContainerButton>
            <Button typeButton="secondary" type="reset" onClick={dischargeData}>
              Descarte
            </Button>
            <Button
              typeButton={getTypeButton}
              type="button"
              onClick={handleSubmit}
            >
              Publicar
            </Button>
          </CardContainerButton>
        </main>
        <div id="feedText">Feed</div>
      </CardContainer>
    </>
  );
};

export default CardCreatePost;
