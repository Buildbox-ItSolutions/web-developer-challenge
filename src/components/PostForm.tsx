import { useState } from "react";
import { Button } from "./Button";
import styled from "styled-components";
import EmptyImage from "../assets/empty-image-icon.svg";
import Trash from "../assets/trash.svg";

interface INewPost {
  id: number;
  name: string;
  message: string;
  image?: string;
}
interface PostFormProps {
  addPost: (newPost: INewPost) => void;
}

const PostForm: React.FC<PostFormProps> = ({ addPost }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const isFormEmpty = name.trim() === "" || message.trim() === "";

  const ClearForm = () => {
    setName("");
    setMessage("");
    setImage(undefined);
  };

  const removeImage = () => {
    setImage(undefined);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handlePublish = () => {
    const newPost: INewPost = {
      id: Date.now(),
      name,
      message,
      image,
    };
    addPost(newPost);
    ClearForm();
  };

  return (
    <StyledDiv>
      <StyledLabel
        hasImage={!!image}
        style={{ backgroundImage: `url(${image ? image : ""})` }}
      >
        {!image && <img src={EmptyImage} alt="" />}
        {image && (
          <StyledImageTrash
            src={Trash}
            onClick={removeImage}
          ></StyledImageTrash>
        )}
        <StyledInputFile
          type="file"
          name="image"
          id="image"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleImageChange}
        />
      </StyledLabel>

      <StyledInput
        type="text"
        id="name"
        name="name"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <StyledTextArea
        id="message"
        name="message"
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <StyledDivContainer>
        <StyledP onClick={ClearForm}>Descartar</StyledP>
        <Button
          content="Publicar"
          className={isFormEmpty ? "inactive-button" : ""}
          onClick={handlePublish}
        />
      </StyledDivContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--rectangle-color);
  border-radius: 0.3rem;
  border: solid 0.1rem var(--border-color);
  padding: 2.4rem;
  width: 51.6rem;
  margin-top: 4rem;

  .inactive-button {
    background-color: var(--auxiliar-gray);
    color: var(--rectangle-color);
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.6rem;
  }
`;

const StyledImageTrash = styled.img`
  position: absolute;
  right: -3.7rem
`;

const StyledLabel = styled.label<{ hasImage: boolean }>`
  width: 8.8rem;
  height: 8.8rem;
  border: 0.1rem solid #4b4b4b;
  border-radius: 3.6rem;
  display: block;
  padding: 3.2rem;
  cursor: pointer;
  position: relative;

  background-position: center;
  background-size: contain;
`;

const StyledInputFile = styled.input`
  border-radius: 3.6rem;
  border: solid 0.1rem #4b4b4b;
  display: none;
`;

const StyledInput = styled.input`
  background-color: var(--background-input-color);
  border-radius: 0.8rem;
  padding: 1.2rem 1.2rem 1.1rem 1.6rem;
  margin: 1.6rem 0 0.8rem;
  height: 4rem;
  width: 100%;
  border: none;
  font-size: 1.4rem;
  outline: none;
  color: var(--white-color);
  font-weight: 400;

  &::placeholder {
    color: var(--auxiliar-text-color);
  }
`;

const StyledTextArea = styled.textarea`
  background-color: var(--background-input-color);
  border-radius: 0.8rem;
  padding: 1.2rem 1.2rem 1.1rem 1.6rem;
  margin: 0.8rem 0 3.2rem;
  height: 8rem;
  width: 100%;
  border: none;
  font-size: 1.4rem;
  outline: none;
  color: var(--white-color);
  font-weight: 400;
  resize: none;

  &::placeholder {
    color: var(--auxiliar-text-color);
  }
`;

const StyledP = styled.p`
  color: var(--auxiliar-gray);
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  gap: 2.4rem;
`;

export { PostForm };
