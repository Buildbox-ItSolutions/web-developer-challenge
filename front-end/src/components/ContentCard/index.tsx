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
import { ContentCardProps } from "../../utils/interfaces";

function ContentCard(props: ContentCardProps) {
  const { author, message, image } = props;
  const imageSource = require(`../../assets/images/${image}`);

  return (
    <Container>
      <DeleteIcon src={deleteIcon} />
      <ImageDisplay src={imageSource} />
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
