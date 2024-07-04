import { useState } from "react";
import {
  ActionContainerButton,
  DiscardButton,
  FeedFormContainer,
  InputImg,
  InputName,
  PublishButton,
  TextareaMessage,
} from "./FeedForm.styles";

export default function FeedForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setName("");
    setMessage("");
  };

  const handleSubmitFeed = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, message });
    resetForm();
  };

  return (
    <FeedFormContainer onSubmit={(event) => handleSubmitFeed(event)}>
      <InputImg type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Preview:</h2>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}

      <InputName
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextareaMessage
        placeholder="Mensagem"
        rows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <ActionContainerButton>
        <DiscardButton type="button" onClick={resetForm}>
          Descartar
        </DiscardButton>
        <PublishButton type="submit">Publicar</PublishButton>
      </ActionContainerButton>
    </FeedFormContainer>
  );
}
