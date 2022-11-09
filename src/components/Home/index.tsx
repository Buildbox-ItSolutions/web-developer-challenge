import { FormEvent, useState } from "react";
import { HomeContainer, ImageContainer } from "./styles";
import { usePost } from "../../context/PostContext";

import { RiImageLine } from "react-icons/ri";
import { CgTrashEmpty } from "react-icons/cg";

export function Home() {

  const { onAddPost } = usePost();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [img, setImg] = useState<undefined | string>(undefined);

  const disableButton = !name || !message || !img;

  function onDiscard() {
    setName("");
    setMessage("");
    setImg(undefined);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    
    onAddPost({ img, message, name });

    onDiscard();
  }

  return (
    <HomeContainer
      onSubmit={e => onSubmit(e)}
    >
      {img ?
        <ImageContainer htmlFor="imageInput">
          <img
            src={img}
            alt="image avatar"
          />

          <CgTrashEmpty className="icon" onClick={() => setImg(undefined)} />
        </ImageContainer>
        :
        <label htmlFor="imageInput" className="labelInput">
          <RiImageLine className="icon" />
        </label>
      }

      <input
        type="file"
        id="imageInput"
        accept="image/jpg, image/png, image/jpeg,"
        onChange={e => setImg(URL?.createObjectURL(e.target.files[0]))}
      />

      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={e => setName(e.target.value)}
        value={name}
      />

      <textarea
        placeholder="Mensagem"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />

      <div>
        <button type="button" onClick={() => onDiscard()}>Descartar</button>
        <button type="submit" disabled={disableButton}>Publicar</button>
      </div>
    </HomeContainer>
  )
}