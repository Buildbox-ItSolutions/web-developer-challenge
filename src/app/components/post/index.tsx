import { IPost } from "@/app/types";
import { SlClose } from "react-icons/sl";
import React from "react";
import { Name, PostContainer, Message, SendBy } from "./style";
import { Avatar } from "../avatar";

export type PostProps = Omit<IPost, "id">;

export const Post = ({ message, name, avatar }: PostProps) => {
  return (
    <PostContainer>
      <div>
        <Avatar url={avatar} />
      </div>
      <div>
        <Message>{message}</Message>
        <SendBy>Enviado por</SendBy>
        <Name>{name}</Name>
      </div>
    </PostContainer>
  );
};
