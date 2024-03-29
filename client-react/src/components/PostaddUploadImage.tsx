import React, { useRef } from "react";
import { PostInterface } from "../api/postInterface";
import { createPost } from "../api/fetchApi";

export const Postadd = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      if (inputRef.current) {
        inputRef.current.src = URL.createObjectURL(file);
        console.log(inputRef.current);
      }
    } else {
      if (inputRef.current) {
        inputRef.current.src = "./img-avatar-none.png";
      }
    }
  };

  const handlePublish = async () => {
    if (inputRef.current) {
      const nameInput = document.querySelector(
        "input[type='text']"
      ) as HTMLInputElement;
      const messageInput = document.querySelector(
        "input[type='text']"
      ) as HTMLInputElement;
      const imgInput = document.querySelector(
        "input[type='file']"
      ) as HTMLInputElement;
      console.log(nameInput, messageInput, imgInput);

      if (nameInput.value && messageInput.value && imgInput.files) {
        const newPost: PostInterface = {
          nome: nameInput.value,
          mensagem: messageInput.value,
          imagem: imgInput.files[0].name || "",
        };

        try {
          const response = await createPost(newPost);
          if (response.ok) {
            console.log(nameInput.value, messageInput.value, imgInput.files);
            console.log("Post criado com sucesso");
            nameInput.value = "";
            messageInput.value = "";

            if (inputRef.current) {
              inputRef.current.src = "./img-avatar-none.png";
            }
          } else {
            console.log("Erro ao criar o post");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Preencha todos os campos");
      }
    }
  };

  return (
    <div className="Posts-form">
      <div className="box-form">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
        <div className="img-container" onClick={handleImageUpload}>
          <img
            className="img-avatar"
            src="./img-avatar-none.png"
            alt="avatar"
          />
        </div>
        <input
          className="input-form"
          type="text"
          placeholder="Digite seu nome"
        />
        <input className="input-form" type="text" placeholder="Mensagem" />
      </div>
      <div className="box-button-form">
        <button id="discard-btn">Descartar</button>
        <button id="publish-btn" onClick={handlePublish}>
          Publicar
        </button>
      </div>
    </div>
  );
};
