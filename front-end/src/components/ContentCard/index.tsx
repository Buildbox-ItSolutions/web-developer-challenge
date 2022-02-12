import React from "react";

import ImageDisplay from "../ImageDisplay";
import {
  AuthorDisplay,
  AuthorFooter,
  Container,
  DeleteIcon,
  MessageBody,
  SentByLabel,
  TextWrapper,
} from "./styles";
import deleteIcon from "../../assets/icons/delete.svg";

interface ContentProps {
  author: string;
  message: string;
  imageName: string;
}

function ContentCard(props: ContentProps) {
  const { author, message, imageName } = props;
  const image = require(`../../assets/images/${imageName}`);

  return (
    <Container>
      <DeleteIcon src={deleteIcon} />
      <ImageDisplay src={image} />
      <TextWrapper>
        <MessageBody>{ message }</MessageBody>
        <AuthorFooter>
          <SentByLabel>Enviado por</SentByLabel>
          <AuthorDisplay>{ author }</AuthorDisplay>
        </AuthorFooter>
      </TextWrapper>
    </Container>
  );
}

export default ContentCard;
