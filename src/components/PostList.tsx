import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import photoUploadSVG from "../assets/photo-upload.svg";
import otherImage from "../assets/image.svg";
import deleteIcon from "../assets/trash (1).svg";
import Post from "./Post";
import { PostType } from "./PostType";
import Feed from "./Feed";

// Estilos dos componentes usando styled-components
const PostListContainer = styled.div`
  width: 516px;
  height: auto;
  margin: 50px auto 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 20px auto;
    padding: 26px;
  }
`;

const Button = styled.button`
  width: auto;
  height: auto;
  margin-left: 1.5rem;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const PhotoUpload = styled.label`
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 36px;
  border: solid 1px #3b3b3b;
`;

const PhotoInput = styled.input`
  display: none;
`;

const PhotoPreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const OtherImage = styled.img<{ photoURL?: string | null }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: auto;
  display: ${({ photoURL }) => (photoURL ? "none" : "block")};
`;

const DeleteButton = styled(Button)<{ photoURL?: string | null }>`
  position: absolute;
  top: 22.5%;
  right: 46.5%;
  transform: translate(50%, -50%);
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: ${({ photoURL }) => (photoURL ? "block" : "none")};
`;

const InputField = styled.input`
  width: 31rem;
  height: 1.5rem;
  margin: 0.6rem 0 0.5rem;
  padding: 13px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  font-size: 1rem;
  color: #ffffff;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MessageField = styled.textarea`
  width: 31rem;
  height: 4.5rem;
  margin: 0.3rem 1.5rem;
  padding: 13px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  resize: none;
  font-size: 1rem;
  color: #ffffff;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2rem;
`;

const ButtonDescartar = styled(Button)`
  color: #5f5f5f;
  text-decoration: underline;
  font-family: Roboto;
  font-size: 0.885rem;
  letter-spacing: 1px;
  text-align: center;
`;

const ButtonPublicar = styled(Button)<{ isFilled: boolean }>`
  width: 6.13rem;
  height: 2.563rem;
  padding: 0.79rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ isFilled }) => (isFilled ? "#71bb00" : "#5f5f5f")};
  color: ${({ isFilled }) => (isFilled ? "#ffffff" : "#313131")};
  cursor: ${({ isFilled }) => (isFilled ? "pointer" : "not-allowed")};
  font-size: 0.875rem;
  &:disabled {
    background-color: #5f5f5f;
    color: #313131;
    cursor: not-allowed;
  }
`;

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const publishButtonRef = useRef<HTMLButtonElement>(null);

  const addPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };

  useEffect(() => {
    const isFilled = !!name && !!message && !!photoURL;
    if (publishButtonRef.current) {
      publishButtonRef.current.disabled = !isFilled;
    }
  }, [name, message, photoURL]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFields = () => {
    setPhotoURL(null);
    setName("");
    setMessage("");
    if (publishButtonRef.current) {
      publishButtonRef.current.disabled = true;
    }
  };

  const handleDeletePost = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <>
      <PostListContainer>
        <DeleteButton photoURL={photoURL} onClick={() => setPhotoURL(null)}>
          <img src={deleteIcon} alt="Delete Icon" />
        </DeleteButton>
        <PhotoUpload>
          <PhotoInput
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          <PhotoPreviewContainer>
            {photoURL ? (
              <PhotoPreview src={photoURL} alt="Uploaded Photo" />
            ) : (
              <UploadIcon src={photoUploadSVG} alt="Upload Icon" />
            )}
            <OtherImage
              photoURL={photoURL}
              src={otherImage}
              alt="Other Image"
            />
          </PhotoPreviewContainer>
        </PhotoUpload>
        <InputField
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <MessageField
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonContainer>
          <ButtonDescartar onClick={clearFields}>Descartar</ButtonDescartar>
          <ButtonPublicar
            ref={publishButtonRef}
            isFilled={!!name && !!message && !!photoURL}
            disabled={!name || !message || !photoURL}
            onClick={() =>
              addPost({
                name: name,
                message: message,
                photoURL: photoURL,
                onDelete: () => {},
              })
            }
          >
            Publicar
          </ButtonPublicar>
        </ButtonContainer>
      </PostListContainer>
      <Feed />
      {posts
        .slice()
        .reverse()
        .map((post, index) => (
          <Post
            key={index}
            name={post.name}
            message={post.message}
            photoURL={post.photoURL}
            onDelete={() => handleDeletePost(index)}
          />
        ))}
    </>
  );
};

export default PostList;
