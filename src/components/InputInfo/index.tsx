import React, { useEffect } from "react";
import { Container, PostButton } from "./styles";

import { FiImage, FiTrash } from "react-icons/fi";

import ReactImageUploading, { ImageListType } from "react-images-uploading";

interface UserInput {
  name: string;
  text: string;
  imgUrl: never[];
}

interface InputInfoProps {
  name: string;
  text: string;
  imgUrl: never[];
  userInput: UserInput[];
  setName: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setUserInput: React.Dispatch<React.SetStateAction<UserInput[]>>;
  setImgUrl: React.Dispatch<React.SetStateAction<never[]>>;
}

export function InputInfo({
  setName,
  setText,
  name,
  text,
  imgUrl,
  setImgUrl,
  setUserInput,
  userInput,
}: InputInfoProps) {
  function handleUserSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (name === "" || text === "") return;

    setUserInput([{ name, text, imgUrl }, ...userInput]);

    setName("");
    setText("");
    setImgUrl([]);
  }

  function clearFields() {
    setName("");
    setText("");
  }

  function handleImgInput(
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) {
    console.log(imageList);

    setImgUrl(imageList as never[]);
  }

  useEffect(() => {
    setName(name);
    setText(text);
    setImgUrl(imgUrl);
  }, [
    imgUrl,
    name,
    setImgUrl,
    setName,
    setText,
    setUserInput,
    text,
    userInput,
  ]);

  return (
    <Container>
      <div className="image-fake">
        <ReactImageUploading
          acceptType={["jpg", "png", "gif"]}
          value={imgUrl}
          onChange={handleImgInput}
          dataURLKey="data_url"
        >
          {({ onImageUpload, onImageRemove, dragProps }) => (
            <div className="upload__image-wrapper">
              {imgUrl.length === 1 ? null : (
                <FiImage onClick={onImageUpload} {...dragProps} />
              )}

              {imgUrl.length === 1 ? (
                <>
                  <img src={imgUrl[0]["data_url"]} alt="Profile" />

                  <button onClick={() => onImageRemove(0)}>
                    <FiTrash />
                  </button>
                </>
              ) : null}
            </div>
          )}
        </ReactImageUploading>
      </div>

      <form onSubmit={(e) => handleUserSubmit(e)}>
        <input
          type="text"
          value={name}
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          rows={3}
          cols={33}
          value={text}
          placeholder="Mensagem"
          onChange={(e) => setText(e.target.value)}
        />

        <div className="btn-container">
          <button type="button" onClick={clearFields}>
            Descartar
          </button>
          <PostButton type="submit" isFilled={name === "" || text === ""}>
            Publicar
          </PostButton>
        </div>
      </form>
    </Container>
  );
}
