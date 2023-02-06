import { PostImage } from "../../atoms";
import {
  Description,
  MessageContent,
  SendByText,
  AuthorText,
  ContentRow,
} from "./styles";
import { Post } from "_types";

export const PostContent = ({ message, name, photo }: Post) => {
  return (
    <ContentRow>
      <PostImage photo={photo} />
      <MessageContent>
        <Description>{message}</Description>
        <SendByText>Enviador por</SendByText>
        <AuthorText>{name}</AuthorText>
      </MessageContent>
    </ContentRow>
  );
};
