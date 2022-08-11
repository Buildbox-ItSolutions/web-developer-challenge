import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ImageUploader } from "../../components/ImageUploader";
import { Input } from "../../components/Input ";
import { PostCard } from "../../components/PostCard";
import { TextArea } from "../../components/TextArea";

import { Post } from "../../models/Post.model";

import {
  ButtonContainer,
  Cancel,
  Container,
  Content,
  CreatePost,
  CreatePostFooter,
  Feed,
  MessageTextArea,
  NameInput,
} from "./styles";

export const Home: React.FC = () => {
  const { register, handleSubmit, setValue, reset, getValues } = useForm({});

  const [posts, setPosts] = useState<Post[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (data: Post) => {
    setPosts((oldState) => [
      {
        ...data,
        id: Math.random() * 10,
      },
      ...oldState,
    ]);
    reset();
  };

  const removePost = (id: number) => {
    setPosts((oldState) => {
      return oldState
        .map((post) => {
          if (post.id === id) {
            return;
          }
          return post;
        })
        .filter((post) => post !== undefined) as Post[];
    });
  };

  const resetValues = () => {
    reset();
    setImageUrl("");
  };

  return (
    <Container>
      <Header />

      <Content>
        <CreatePost onSubmit={handleSubmit(onSubmit as any)}>
          <ImageUploader
            register={register}
            setValue={setValue}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />

          <NameInput>
            <Input
              required
              name="name"
              register={register}
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
            />
          </NameInput>

          <MessageTextArea>
            <TextArea
              required
              name="message"
              register={register}
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
            />
          </MessageTextArea>

          <CreatePostFooter>
            <Cancel onClick={resetValues}>Descartar</Cancel>

            <ButtonContainer>
              <Button
                title="Publicar"
                type={name && message ? "submit" : "button"}
                isValid={!!(name && message)}
              />
            </ButtonContainer>
          </CreatePostFooter>
        </CreatePost>

        {posts.length ? (
          <>
            <Feed>Feed</Feed>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} removePost={removePost} />
            ))}
          </>
        ) : (
          <></>
        )}
      </Content>
    </Container>
  );
};
