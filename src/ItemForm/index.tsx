import { useState } from "react";

import styled from "styled-components";

import UploadImage from "../components/UploadImage";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";

export interface IItem {
  name: string;
  description: string;
  image: string;
}

interface IItemForm {
  addItem: (item: IItem) => void;
}

const Card = styled("div")(() => ({
  marginTop: "8rem",
  padding: "1.5rem",
  border: "1px solid #3b3b3b",
  borderRadius: "4px",
  backgroundColor: "#313131",
}));

const CardButtons = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.5rem",
  marginTop: "1.6rem",
}));

function ItemForm({ addItem }: IItemForm) {
  const [item, setItem] = useState<IItem>({} as IItem);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addItem({
      name: item.name,
      description: item.description,
      image: item.image,
    });

    handleClean();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;

    const reader = new FileReader();

    reader.onloadend = () => {
      setItem((prev) => ({
        ...prev,
        image: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleCleanImage = () => {
    setItem((prev) => ({
      ...prev,
      image: "",
    }));
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItem((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClean = () => {
    setItem({
      name: "",
      description: "",
      image: "",
    });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <UploadImage
          image={item.image}
          onChange={handleImageChange}
          onClean={handleCleanImage}
        />

        <Input
          name="name"
          value={item.name}
          placeholder="Digite seu nome"
          onChange={handleOnChange}
          required
          type="text"
        />

        <TextArea
          name="description"
          value={item.description}
          placeholder="Mensagem"
          onChange={handleOnChange}
          required
          rows={3}
        />

        <CardButtons>
          <Button type="button" onClick={handleClean}>
            Descartar
          </Button>

          <Button type="submit">Publicar</Button>
        </CardButtons>
      </form>
    </Card>
  );
}

export default ItemForm;
