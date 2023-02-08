import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Components
import { Input } from "../Input";
import { Button } from "../Button";
import { Image } from "../ImageUploading";

// Styles
import { FormContainer } from "./styles";

// React Hook Form
import { ImageListType } from "react-images-uploading";

import { v4 as uuid } from "uuid";

import { Post } from "@/models/Post";
import { usePostStore } from "@/store/posts";

interface EditFormDataDTO {
  key: keyof Post;
  event?: ChangeEvent<HTMLInputElement>;
  image?: ImageListType;
}

const initialFormData: Post = {
  id: "",
  photo: [],
  name: "",
  message: "",
};

export function useForm() {
  const [formData, setFormData] = useState<Post>(initialFormData);

  const [error, setError] = useState<string>("");

  const createPost = usePostStore((state) => state.createPost);

  const handleFormData = (event: FormEvent) => {
    event.preventDefault();

    setFormData((prev) => ({
      ...prev,
      id: uuid(),
    }));

    const isEmpty = isSomeDataEmpty();

    if (isEmpty) return;

    setError("");
    createPost(formData);
  };

  const handleEditFormData = ({ key, event, image }: EditFormDataDTO) => {
    const value = event ? event.target.value : image;

    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const isSomeDataEmpty = (): boolean => {
    const keys = Object.keys(formData);

    const isEmpty =
      keys.some((key) => {
        return !formData[key as keyof Post].length;
      }) ?? "";

    setError("Preencha todos os campos.");

    return isEmpty;
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return {
    error,
    formData,
    handleFormData,
    handleEditFormData,
  };
}

export function Form() {
  const { error, formData, handleEditFormData, handleFormData } = useForm();

  const onChange = (value: ImageListType) => {
    handleEditFormData({
      key: "photo",
      image: value,
    });
  };

  return (
    <FormContainer onSubmit={handleFormData}>
      <div className="formContent">
        <Image value={formData.photo} onChange={onChange} />
        <Input
          height={2.5}
          placeholder="Digite seu nome"
          onChange={(event) =>
            handleEditFormData({
              key: "name",
              event: event,
            })
          }
        />
        <Input
          height={5}
          placeholder="Mensagem"
          onChange={(event) =>
            handleEditFormData({
              key: "message",
              event: event,
            })
          }
        />

        <div className="buttonContainer">
          {error && <span>{error}</span>}
          <Button type="button" text="Descartar" className="secondary" />
          <Button type="submit" text="Publicar" className="primary" />
        </div>
      </div>
    </FormContainer>
  );
}
