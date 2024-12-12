import React, { useRef, useState } from "react";
import { PostInterface } from "../api/postInterface";
import { createPost } from "../api/fetchApi";

// Lista de URLs de imagens
const imageUrls = [
  "https://ofuxico.com.br/wp-content/uploads/2023/05/chaves-tv.jpg",
  "https://ogimg.infoglobo.com.br/in/23704851-41b-893/FT1086A/60559840.jpg",
  "https://i.pinimg.com/originals/2f/a0/b8/2fa0b8758d0e227e86db9b6c91b6b6fd.jpg",
  "https://sm.ign.com/ign_br/screenshot/default/goku_trw2.jpg",
  "https://img.quizur.com/f/img5e489900152e95.52743837.jpg?lastEdited=1581816067",
];

export const Postadd = () => {
  const inputRef = useRef<HTMLImageElement | null>(null); // Alterado para HTMLImageElement

  const handleImageUpload = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    if (inputRef.current) {
      inputRef.current.src = randomImageUrl;
    }
  };

  const handlePublish = async () => {
    if (inputRef.current) {
      const nameInput = document.getElementById(
        "name-input"
      ) as HTMLInputElement;
      const messageInput = document.getElementById(
        "message-input"
      ) as HTMLInputElement;

      if (nameInput.value && messageInput.value) {
        const newPost: PostInterface = {
          nome: nameInput.value,
          mensagem: messageInput.value,
          imagem: inputRef.current.src, // Usar a URL da imagem atual
        };

        try {
          const response = await createPost(newPost);
          if (response.ok) {
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

  const handleDiscard = () => {
    const inputName = document.getElementById("name-input") as HTMLInputElement;
    const inputMessage = document.getElementById(
      "message-input"
    ) as HTMLInputElement;
    if (inputName) {
      inputName.value = "";

      if (inputMessage) {
        inputMessage.value = "";
      }
    }
  };

  return (
    <div className="Posts-form">
      <div className="box-form">
        <div className="img-container" onClick={handleImageUpload}>
          <img
            ref={inputRef}
            className="img-avatar"
            src="./img-avatar-none.png"
            alt="avatar"
          />
        </div>
        <input
          className="input-form"
          type="text"
          id="name-input"
          placeholder="Digite seu nome"
        />
        <input
          className="input-form"
          id="message-input"
          type="text"
          placeholder="Mensagem"
        />
      </div>
      <div className="box-button-form">
        <button id="discard-btn" onClick={handleDiscard}>
          Descartar
        </button>
        <button id="publish-btn" onClick={handlePublish}>
          Publicar
        </button>
      </div>
    </div>
  );
};
