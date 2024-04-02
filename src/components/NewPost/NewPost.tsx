import { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdImage } from "react-icons/io";
import { IPost } from "../../App";
import { v4 as uuid } from 'uuid'

const ImgInput = styled.input`
  display: none;
`;

const StyledImgInput = styled.label`
  width: 88px;
  height: 88px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--grey-1);
  border-radius: 40%;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 88px;
  height: 88px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40%;
  border: 1px solid var(--grey-1);
`;

const ImgInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const NameInput = styled.input`
  width: 100%;
  height: 24px;
  padding: 12px;
  background-color: var(--grey-2);
  border-radius: 7px;
  border: none;
  outline: none;
  color: white;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 24px;
  padding: 15px 12px;
  background-color: var(--grey-2);
  border-radius: 7px;
  border: none;
  outline: none;
  color: white;

  height: 80px;
  resize: vertical;
`;

const TextInputsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  font-weight: 700;
  align-items: center;

  input::placeholder,
  textarea::placeholder {
    position: absolute;
    top: 16px;
    left: 12px;
    font-weight: 500;
    color: var(--grey-5);
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: var(--lime-green);
  outline: none;
  border: none;
  border-radius: 7px;
  color: var(--black-2);
  cursor: pointer;
`;

const Descartar = styled.p`
  font-size: 14px;
  color: var(--grey-3);
  text-decoration: underline;
  cursor: pointer;
`;

const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: end;
`;

export const NewPostDiv = styled.div`
  width: 30%;
  padding: 30px;
  background-color: var(--black-2);
  border: 1px solid var(--grey-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const FaTrashAltDiv = styled.div`
  cursor: pointer;
`;

interface Props {
  handleAddPost: (posts: IPost) => void;
}

const NewPost = ({ handleAddPost }: Props) => {
  const [img, setImg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSetImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const allowedFileTypes = ["image/png", "image/jpeg"];
    const file = event.target.files?.[0];
    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        return window.alert("Escolha imagens do tipo .png ou .jpeg");
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        typeof reader.result === "string" && setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <NewPostDiv>
      <ImgInputDiv>
        {img ? (
          <Img src={img} />
        ) : (
          <StyledImgInput>
            <IoMdImage size={20} color="#71bb00" />
            <ImgInput
              id="imgInput"
              type="file"
              onChange={(e) => {
                handleSetImg(e);
              }}
            />
          </StyledImgInput>
        )}
        <FaTrashAltDiv>
          <FaTrashAlt
            color="#71bb00"
            onClick={() => {
              setImg("");
            }}
          />
        </FaTrashAltDiv>
      </ImgInputDiv>

      <TextInputsDiv>
        <NameInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Digite seu nome"
        />
        <ContentInput
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Mensagem"
        />
      </TextInputsDiv>

      <ButtonsDiv>
        <Descartar
          onClick={() => {
            setContent("");
            setImg("");
            setName("");
          }}
        >
          Descartar
        </Descartar>
        <Button
          onClick={() => {
            handleAddPost({
              name,
              img,
              content,
              id: uuid()
            });

            setContent("");
            setImg("");
            setName("");
          }}
        >
          Publicar
        </Button>
      </ButtonsDiv>
    </NewPostDiv>
  );
};

export default NewPost;
