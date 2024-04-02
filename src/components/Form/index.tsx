import { useRef, useState } from "react";
import {
  ClearBtn,
  FormStyled,
  InputStyled,
  PublishBtn,
  TextareaStyled,
} from "./ui";
import ImageInput from "./image-input";
import { useFeed } from "@/context/feed";
import { faker } from "@faker-js/faker";
import { Post } from "@/types/post";

export default function Form() {
  const { setPosts } = useFeed();
  const [image, setImage] = useState("");
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = (data: FormData) => {
    const post = {
      id: faker.string.uuid(),
      name: data.get("name"),
      description: data.get("description"),
      image: image ?? "/image-icon.svg",
    } as Post;

    setPosts((prev) => [...prev, post]);
    handleClickOnClearBtn();
  };
  const handleClickOnClearBtn = () => {
    ref.current?.reset();
  };

  return (
    <FormStyled ref={ref} action={handleSubmit}>
      <ImageInput image={image} setImage={setImage} />
      <InputStyled
        name="name"
        autoComplete="off"
        placeholder="Digite seu nome"
        required
      />
      <TextareaStyled
        name="description"
        autoComplete="off"
        maxLength={300}
        placeholder="Mensagem"
        required
      />
      <div>
        <ClearBtn type="button" onClick={handleClickOnClearBtn}>
          Descartar
        </ClearBtn>
        <PublishBtn data-submit type="submit">
          Publicar
        </PublishBtn>
      </div>
    </FormStyled>
  );
}
