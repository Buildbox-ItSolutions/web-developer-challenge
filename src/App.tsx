import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./styledComponents";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ImgLogo from "./assets/img-logo.svg";
import FeedCard from "./components/FeedCard";
import Button from "./components/Button";
import TrashIcon from "./assets/trash-icon.svg";
import { IPostForm } from "./App.interface";

const AppContainer = styled.div`
  height: 100vh;
  padding-top: ${(props) => props.theme.navbarHeight};
`;

const ContentContainer = styled.div`
  width: 516px;
  margin: 0 auto;
  min-height: 100%;
  padding: 40px 0;

  & > h3 {
    margin: 56px 0 8px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
  }

  @media (max-width: 640px) {
    width: 320px;
  }
`;

const MakePost = styled.form`
  height: 353px;
  background-color: ${(props) => props.theme.gray500};
  outline: 1px solid ${(props) => props.theme.gray300};
  display: flex;
  flex-direction: column;
  padding: 24px;

  input,
  textarea {
    background-color: ${(props) => props.theme.gray200};
    border: none;
    border-radius: 8px;
    color: ${(props) => props.theme.white};
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.theme.text300};
  }

  input {
    padding: 12px 16px 11px;
  }

  textarea {
    margin-top: 8px;
    height: 80px;
    padding: 12px 16px 0;
    overflow-y: scroll;
    resize: none;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }

  textarea::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 32px;
  gap: 24px;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImgFile = styled.label`
  display: grid;
  place-content: center;
  height: 88px;
  width: 88px;
  border: 1px solid ${(props) => props.theme.gray200};
  border-radius: 40%;
  cursor: pointer;
  align-self: center;
  margin-bottom: 16px;

  input {
    display: none;
  }

  .userImg {
    height: 88px;
    width: 88px;
    object-fit: cover;
    border-radius: 40%;
  }
`;

const ImgFileWrapper = styled.div`
  position: relative;
  align-self: center;

  .trash-icon {
    position: absolute;
    top: calc(50% - 8px);
    right: -40px;
    transform: translateY(-50%);
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;

function App() {
  const [disabledButtonT, setDisabledButtonT] = useState(true);
  const [postList, setPostList] = useState<IPostForm[]>([]);
  const [postForm, setPostForm] = useState<IPostForm>({
    name: "",
    message: "",
    photo: "",
    id: 0,
  });

  const onChangePost = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setPostForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSelectedImg = (event: React.ChangeEvent) => {
    const { files } = event.target as HTMLInputElement;

    const file: File = (files as FileList)[0];

    const imgURL = URL.createObjectURL(file);

    setPostForm((prev) => ({ ...prev, photo: imgURL }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPostList((prev) => [{ ...postForm, id: prev.length + 1 }, ...prev]);
    resetForm();
  };

  const onRemovePost = (id: number) =>
    setPostList((prev) => prev.filter((post) => post.id !== id));

  const resetForm = () =>
    setPostForm({ name: "", message: "", photo: "", id: 0 });

  const removeSelectedImg = () =>
    setPostForm((prev) => ({ ...prev, photo: "" }));

  useEffect(() => {
    if (postForm.message && postForm.name && postForm.photo) {
      setDisabledButtonT(false);
    } else {
      setDisabledButtonT(true);
    }
  }, [postForm]);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <ContentContainer>
          <MakePost onSubmit={onSubmit}>
            <ImgFileWrapper>
              <ImgFile tabIndex={0}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onSelectedImg}
                  name="photo"
                  data-testid="image-uploader-input"
                />
                {postForm.photo ? (
                  <img
                    src={postForm.photo}
                    className="userImg"
                    data-testid="image-uploaded"
                  />
                ) : (
                  <img src={ImgLogo} data-testid="image-placeholder" />
                )}
              </ImgFile>{" "}
              {postForm.photo && (
                <img
                  src={TrashIcon}
                  onClick={removeSelectedImg}
                  className="trash-icon"
                  data-testid="trash-icon"
                />
              )}
            </ImgFileWrapper>
            <input
              type="text"
              placeholder="Digite seu nome"
              name="name"
              onChange={onChangePost}
              value={postForm.name}
            />
            <textarea
              placeholder="Mensagem"
              name="message"
              onChange={onChangePost}
              value={postForm.message}
            />
            <ButtonContainer>
              <Button type="button" onClick={resetForm} variant="text">
                Descartar
              </Button>
              <Button type="submit" disabled={disabledButtonT}>
                Publicar
              </Button>
            </ButtonContainer>
          </MakePost>
          <h3>Feed</h3>
          <FeedContainer>
            {postList.map((post) => {
              return (
                <FeedCard
                  onDelete={() => onRemovePost(post.id)}
                  key={post.id}
                  name={post.name}
                  message={post.message}
                  photo={post.photo}
                />
              );
            })}
          </FeedContainer>
        </ContentContainer>
      </AppContainer>
    </>
  );
}

export default App;
