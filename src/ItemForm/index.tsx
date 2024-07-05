import { useState } from "react";

import styled from "styled-components";

import icon from "../assets/icon.png";

export interface IItem {
  name: string;
  description: string;
  image: string;
}

interface IItemForm {
  addItem: (item: IItem) => void;
}

const Card = styled("div")(() => ({
  marginTop: "4rem",
  padding: "1.5rem",
  border: "1px solid #3b3b3b",
  borderRadius: "4px",
}));

const Input = styled("input")(() => ({
  width: "100%",
  padding: "1rem",
  border: "none",
  borderRadius: "8px",
  margin: "0.5rem 0",
}));

const TextArea = styled("textarea")(() => ({
  width: "100%",
  padding: "1rem",
  border: "none",
  borderRadius: "8px",
  margin: "0.5rem 0",
}));

function ItemForm({ addItem }: IItemForm) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleClean = () => {
    setName("");
    setDescription("");
    setImage("");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;

    const reader = new FileReader();

    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addItem({ name, description, image: image });

    handleClean();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            id="upload-photo"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

          {image && (
            <label
              htmlFor="upload-photo"
              style={{
                cursor: "pointer",
                borderRadius: "40%",
                width: "90px",
                height: "90px",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
              }}
            >
              <img
                src={image}
                alt="image"
                style={{ borderRadius: "40%" }}
                width="90"
                height="90"
              />
            </label>
          )}

          {!image && (
            <label
              htmlFor="upload-photo"
              style={{
                cursor: "pointer",
                borderRadius: "40%",
                padding: "2rem",
                width: "90px",
                height: "90px",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
                border: "1px solid white",
              }}
            >
              <img src={icon} alt="icone" />
            </label>
          )}
        </div>

        <Input
          type="text"
          value={name}
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextArea
          value={description}
          placeholder="Mensagem"
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
        />

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <button
            type="button"
            onClick={handleClean}
            style={{ background: "none", textDecoration: "underline" }}
          >
            Descartar
          </button>

          <button type="submit">Adicionar</button>
        </div>
      </form>
    </Card>
  );
}

export default ItemForm;
