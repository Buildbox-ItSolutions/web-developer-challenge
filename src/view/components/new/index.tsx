import { useRef, useState } from "react";
import {
  Button,
  Container,
  ImageInputContainer,
  Input,
  Textarea,
  Uploader,
} from "./styles";
import { usePosts } from "../../hooks/usePosts";

export function NewPostInput() {
  const [inputValue, setInputValue] = useState("");
  const [postMsg, setPostMsg] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { addPost } = usePosts();

  const inputRef = useRef<HTMLInputElement>(null);

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    console.log({ file });
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function clearPicture() {
    setImageUrl("");
    if (inputRef.current) inputRef.current.value = "";
  }

  function clearFields() {
    setInputValue("");
    setPostMsg("");
    clearPicture();
  }

  function handlePostPublish() {
    if (!inputValue || !postMsg) {
      alert("Preencha todos os campos antes de publicar");
      return;
    }

    addPost({ name: inputValue, message: postMsg, image: imageUrl });
    clearFields();
  }

  return (
    <Container>
      <div className="uploader">
        <ImageInputContainer
          $url={imageUrl}
          htmlFor="uploader"
          title="Escolha uma imagem para o post"
        >
          <Uploader
            onChange={handleImageUpload}
            hidden
            id="uploader"
            ref={inputRef}
          />
        </ImageInputContainer>
        {imageUrl && (
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={clearPicture}
          >
            <i className="fa-regular fa-trash-can"></i>
          </span>
        )}
      </div>
      <div className="input-group">
        <Input
          placeholder="Digite seu nome"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <Textarea
          placeholder="Mensagem"
          onChange={(event) => setPostMsg(event.target.value)}
          value={postMsg}
        />
      </div>
      <div className="btn-group">
        <span
          className="discard"
          style={{ cursor: "pointer" }}
          onClick={clearFields}
        >
          Descartar
        </span>
        <Button disabled={!inputValue || !postMsg} onClick={handlePostPublish}>
          Publicar
        </Button>
      </div>
    </Container>
  );
}
