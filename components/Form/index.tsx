import React, { FormEvent, useState } from "react";
import { Icon } from "@iconify/react";
import { HomeContainer, ImageContainer } from "./form.style";
import { convertToBase64 } from "../../backend/helpers";
import { usePost } from "../../context/postContext";
import { IOnAddPost } from "../../interfaces/post.interface";

function Form() {
  const inicialData = {
    name: "",
    message: "",
    img: undefined,
  };
  const { onAddPost } = usePost();
  const [data, setData] = useState<IOnAddPost>(inicialData);

  const [loading, setLoading] = useState(false);

  const convertIMGFor64 = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setData({ ...data, img: base64 });
  };

  const disableButton = !data.name || !data.message || !data.img;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onAddPost(data);
    } catch (error) {
      console.error(error);
    }

    setData(inicialData);
    setLoading(false);
  };

  return (
    <HomeContainer onSubmit={submit}>
      {data.img ? (
        <ImageContainer htmlFor="imageInput">
          <img src={data.img} alt="image avatar" />
          <Icon icon="bi:trash" className="icon" />
        </ImageContainer>
      ) : (
        <label htmlFor="imageInput" className="labelInput">
          <Icon icon="bi:image" className="icon" />
        </label>
      )}

      <input
        type="file"
        id="imageInput"
        data-testid="imageInput"
        accept="image/jpg, image/png, image/jpeg,"
        onChange={(e) => convertIMGFor64(e)}
      />

      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setData({ ...data, name: e.target.value })}
        value={data.name}
      />

      <textarea
        placeholder="Mensagem"
        onChange={(e) => setData({ ...data, message: e.target.value })}
        value={data.message}
      />

      <div>
        <button type="button" onClick={() => setData(inicialData)}>
          Descartar
        </button>
        <button type="submit" disabled={disableButton}>
          Publicar
        </button>
      </div>
    </HomeContainer>
  );
}

export default Form;
