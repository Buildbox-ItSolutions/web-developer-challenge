import React from "react";

import ImageDisplay from "../ImageDisplay";
import { AuthorDisplay, AuthorFooter, Container, DeleteIcon, MessageBody, SentByLabel, TextWrapper } from "./styles";
import samplePic from "../../assets/images/sample.png";
import deleteIcon from "../../assets/icons/delete.svg"

function ContentCard() {
  return (
    <Container>
      <DeleteIcon src={deleteIcon} />
      <ImageDisplay src={samplePic} />
      <TextWrapper>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis
          ligula vel velit scelerisque iaculis. Nam mattis justo id orci
          commodo, eu tempus purus cursus.
        </MessageBody>
        <AuthorFooter>
          <SentByLabel>Enviado por</SentByLabel>
          <AuthorDisplay>Manuela Oliveira</AuthorDisplay>
        </AuthorFooter>
      </TextWrapper>
    </Container>
  );
}

export default ContentCard;
