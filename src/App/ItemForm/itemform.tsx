import { useState } from "react";

import UploadImage from "../../components/UploadImage";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

import { Card, CardButtons } from "./itemform.styles";

export interface ItemProps {
  name: string;
  description: string;
  image: string;
}

interface ItemFormProps {
  addItem: (item: ItemProps) => void;
}

export default function ItemForm({ addItem }: ItemFormProps) {
  const [item, setItem] = useState<ItemProps>({} as ItemProps);

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
