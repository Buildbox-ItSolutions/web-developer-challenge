import { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Components
import { Input } from "../Input";
import { Button } from "../Button";
import { Image } from "../ImageUploading";

// Styles
import { FormContainer } from "./styles";

// React Hook Form
import { ImageListType } from "react-images-uploading";

import { Post } from "@/models/Post";
import { usePostStore } from "@/store/posts";

import { v4 as uuid } from "uuid";

interface EditFormDataDTO {
  key: keyof Post;
  event?: ChangeEvent<HTMLInputElement>;
  image?: ImageListType;
}

const initialFormData: Post = {
  id: uuid(),
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

    if (error) return;

    setError("");
    createPost(formData);
    setFormData({ ...initialFormData, id: uuid() });
  };

  const handleDiscardFormData = () => {
    setFormData(initialFormData);
  };

  const handleEditFormData = ({ key, event, image }: EditFormDataDTO) => {
    const value = event ? event.target.value : image;

    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    const keys = Object.keys(formData);

    const isEmpty =
      keys.some((key) => {
        return !formData[key as keyof Post].length;
      }) ?? "";

    console.log(isEmpty);

    if (!isEmpty) {
      setError("");
      return;
    }

    setError("Preencha todos os campos.");
  }, [formData]);

  return {
    error,
    formData,
    handleFormData,
    handleEditFormData,
    handleDiscardFormData,
  };
}

export function Form() {
  const {
    error,
    formData,
    handleEditFormData,
    handleDiscardFormData,
    handleFormData,
  } = useForm();

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
          value={formData.name}
          onChange={(event) =>
            handleEditFormData({
              key: "name",
              event: event,
            })
          }
        />
        <Input
          height={5}
          value={formData.message}
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

          <Button
            type="button"
            text="Descartar"
            className="secondary"
            onClick={handleDiscardFormData}
          />
          <Button
            type="submit"
            text="Publicar"
            className="primary"
            disabled={!!error.length}
          />
        </div>
      </div>
    </FormContainer>
  );
}
