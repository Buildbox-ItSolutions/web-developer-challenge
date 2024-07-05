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
  posts,
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
              <Post key={id} avatar={avatar} name={name} message={message} />
            ))
            .reverse()}
        </List>
      </Container>
    </>
  );
}
