import { Header } from "../components/header";
import { Container } from "./styles";
import { Form } from "../components/form";
import { List } from "../components/list";
import { Post } from "../components/post";
import React from "react";
import usePostsView from "./model";
import { IPost } from "../types";
import { SkeletonLoader } from "../components/loader";

export default function PostsView({
  isLoading,
  isPending,
  variables,
  posts,
  handleDelete,
}: ReturnType<typeof usePostsView>) {
  return (
    <>
      <Header />
      <Container>
        <Form />
        <List>
          {isLoading && <SkeletonLoader />}
          {posts
            ?.map(({ id, avatar, name, message }: IPost) => (
              <Post
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                message={message}
                handleDelete={handleDelete}
                isPending={isPending && variables === id}
              />
            ))
            .reverse()}
          {posts?.length === 0 && !isLoading && (
            <h1 style={{ textAlign: "center", marginTop: "30px" }}>
              Não há mensagens
            </h1>
          )}
        </List>
      </Container>
    </>
  );
}
