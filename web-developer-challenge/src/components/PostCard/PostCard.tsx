"use client"
import Input from "../Input/Input";
import {Container, InputContainer} from "../PostCard/PostStyles"
import React from 'react'
import TextArea from "../TextArea/TextArea";

function PostCard() {
  return (
    <Container>
        <InputContainer>
            <Input placeholder="Digite seu nome"></Input>
            <TextArea placeholder="Mensagem"></TextArea>
        </InputContainer>
    </Container>
  )
}

export default PostCard;
