"use client"
import Input from "../Input/Input";
import {ButtonContainer, Container, InputContainer, PicContainer} from "./CreateStyles"
import React from 'react'
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar";

function CreatePost() {
  return (
    <Container>
      <PicContainer>
        <Avatar />
      </PicContainer>
        <InputContainer>
            <Input placeholder="Digite seu nome"></Input>
            <TextArea placeholder="Mensagem"></TextArea>
        </InputContainer>
        <ButtonContainer>
          <Button variant="outline">Descartar</Button>
          <Button>Publicar</Button>
        </ButtonContainer>
    </Container>
  )
}

export default CreatePost;
