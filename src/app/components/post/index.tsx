import { IPost, IPostPayload } from "@/app/types";
import { SlClose } from "react-icons/sl";
import React from "react";
import { Name, PostContainer, Message, SendBy } from "./style";
import { Avatar, NoImage } from "../avatar";

export const Post = ({ message, name, avatar }: IPostPayload) => {
  return (
    <PostContainer>
      <div>
        {avatar && <Avatar url={avatar || ""} />}
        {!avatar && <NoImage />}
      </div>
      <div>
        <Message>{message}</Message>
        <SendBy>Enviado por</SendBy>
        <Name>{name}</Name>
      </div>
    </PostContainer>
  );
};
