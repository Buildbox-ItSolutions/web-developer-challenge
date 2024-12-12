import { useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { v4 as uuidV4 } from "uuid";

import { ICreatePost } from "./dto/ICreatePost";
import iconImg from "../../assets/icon-img.svg";
import { Container, Content, FormButton } from "./styles";

import Posts from "../Posts";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { postContext } from "../../contexts/PostContext";
import InputFile from "../components/Input/File";

interface IDateSubmit {
  name: string;
  img: File;
  message: string;
}
export default function Home() {
  const { setPosts, posts } = postContext();

  const [imgForm, setImgForm] = useState<string>("");
  const formRef = useRef<FormHandles>(null);
  const cleanForm = (e: any) => {
    e.preventDefault();

    formRef.current?.reset();
    setImgForm("");
  };
  const handleSubmit = (data: IDateSubmit) => {
    const post: ICreatePost = {
      id: uuidV4(),
      imgURL: data.img ? URL.createObjectURL(data.img) : iconImg,
      name: data.name,
      message: data.message,
    };

    setPosts([...posts, post]);
  };
  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="img">
            <span>
              {imgForm ? (
                <img
                  src={imgForm}
                  style={{ width: 88, height: 88, borderRadius: 36 }}
                  alt="Icon img"
                />
              ) : (
                <img src={iconImg} alt="Icon img" />
              )}
              <InputFile
                name="img"
                id="img"
                onChange={(e) =>
                  setImgForm(URL.createObjectURL(e.target.files![0]))
                }
              />
            </span>
          </label>
          <Input name="name" type="text" placeholder="Digite seu nome" />
          <Textarea name="message" placeholder="Mensagem" />

          <FormButton>
            <button onClick={(e) => cleanForm(e)}>Descartar</button>
            <button>Publicar</button>
          </FormButton>
        </Form>
        <Posts />
      </Content>
    </Container>
  );
}
