"use client";

import { IPost } from "@/app/types";
import { SlClose } from "react-icons/sl";
import { SlCheck } from "react-icons/sl";
import React, { useEffect } from "react";
import {
  Name,
  PostContainer,
  Message,
  SendBy,
  ButtonContainer,
  AvatarContainer,
  MessageContainer,
} from "./style";
import { Avatar, NoImage } from "../avatar";
import { IconButton } from "../buttons";

type PostProps = IPost & {
  handleDelete: (id: number) => void;
  isPending: boolean;
};

export const Post = ({
  id,
  message,
  name,
  avatar,
  handleDelete,
  isPending,
}: PostProps) => {
  const [askDelete, setAskDelete] = React.useState(false);

  const onDelete = (id: number) => {
    if (!askDelete) return askToDelete();
    handleDelete(id);
  };

  const askToDelete = () => setAskDelete(true);

  useEffect(() => {
    if (askDelete) {
      setTimeout(() => {
        setAskDelete(false);
      }, 3000);
    }
  }, [askDelete]);

  return (
    <PostContainer isPending={isPending}>
      <AvatarContainer>
        {avatar && <Avatar url={avatar} />}
        {!avatar && <NoImage />}
      </AvatarContainer>
      <MessageContainer>
        <Message>{message}</Message>
        <SendBy>Enviado por</SendBy>
        <Name>{name}</Name>
      </MessageContainer>
      <ButtonContainer>
        <IconButton
          confirmation={askDelete}
          onClick={() => onDelete(id)}
          title={askDelete ? "Confirmar" : ""}
        >
          {askDelete && <SlCheck />}
          {!askDelete && <SlClose />}
        </IconButton>
      </ButtonContainer>
    </PostContainer>
  );
};
