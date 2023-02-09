import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IPostForm } from "./Feed.interface";

import Button from "../../components/Button";
import UploadImg from "../../components/UploadImg/UploadImg";
import FeedContainer from "../../components/FeedContainer/FeedContainer";

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

const Feed = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [postList, setPostList] = useState<IPostForm[]>([]);
  const [postForm, setPostForm] = useState<IPostForm>({
    name: "",
    message: "",
    photo: "",
    id: 0,
  });

  const handleChangePost = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setPostForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPostList((prev) => [{ ...postForm, id: prev.length + 1 }, ...prev]);
    resetForm();
  };

  const handleRemovePost = (id: number) =>
    setPostList((prev) => prev.filter((post) => post.id !== id));

  const resetForm = () =>
    setPostForm({ name: "", message: "", photo: "", id: 0 });

  useEffect(() => {
    if (postForm.message && postForm.name && postForm.photo) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [postForm]);

  return (
    <ContentContainer>
      <MakePost onSubmit={handleSubmit}>
        <UploadImg postForm={postForm} setPostForm={setPostForm} />
        <input
          type="text"
          placeholder="Digite seu nome"
          name="name"
          onChange={handleChangePost}
          value={postForm.name}
        />
        <textarea
          placeholder="Mensagem"
          name="message"
          onChange={handleChangePost}
          value={postForm.message}
        />
        <ButtonContainer>
          <Button type="button" onClick={resetForm} variant="text">
            Descartar
          </Button>
          <Button type="submit" disabled={disabledButton}>
            Publicar
          </Button>
        </ButtonContainer>
      </MakePost>
      <h3>Feed</h3>
      <FeedContainer postList={postList} handleRemovePost={handleRemovePost} />
    </ContentContainer>
  );
};

export default Feed;
