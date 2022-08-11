import React from "react";

import { Post } from "../../models/Post.model";

import {
  Container,
  ContainerWrapper,
  Content,
  Image,
  Message,
  Name,
  RemoveIcon,
  SendBy,
} from "./styles";

type Props = {
  post: Post;
  removePost: (id: number) => void;
};

export const PostCard: React.FC<Props> = ({ post, removePost }) => {
  return (
    <ContainerWrapper>
      <Container>
        <RemoveIcon onClick={() => removePost(post.id)} />
        <Image src={post.image || "assets/images/image.svg"} alt="logo" />
        <Content>
          <Message>{post.message}</Message>
          <SendBy>Enviado por</SendBy>
          <Name>{post.name}</Name>
        </Content>
      </Container>
    </ContainerWrapper>
  );
};
