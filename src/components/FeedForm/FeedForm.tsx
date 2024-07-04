import { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  ActionContainerButton,
  DiscardButton,
  FeedFormContainer,
  ImageContainer,
  PlaceholderImage,
  InputImg,
  InputName,
  PublishButton,
  TextareaMessage,
  CameraIcon,
} from "./FeedForm.styles";
import { useFeedItemsStore } from "../../store/feedListStore";

export default function FeedForm() {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const addItemToList = useFeedItemsStore((state) => state.addItemToList);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop,
  });

  const resetForm = () => {
    setName("");
    setMessage("");
    setSelectedImage("");
  };

  const handleSubmitFeed = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItemToList(selectedImage, name, message);
    resetForm();
  };

  return (
    <FeedFormContainer onSubmit={handleSubmitFeed}>
      <ImageContainer {...getRootProps()}>
        <InputImg {...getInputProps()} />
        {selectedImage ? (
          <PlaceholderImage src={selectedImage} alt="Selected Image" />
        ) : (
          <CameraIcon />
        )}
      </ImageContainer>

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
