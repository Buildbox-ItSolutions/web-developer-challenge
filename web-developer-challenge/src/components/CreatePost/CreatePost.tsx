"use client"
import Input from "../Input/Input";
import {ButtonContainer, Container, InputContainer, PicContainer} from "./CreateStyles"
import React, { useState } from 'react'
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar";
import { Post, createPost } from "@/db/db";
import {v4 as uuidv4 } from 'uuid'

interface Props {
  reRender: () => void;
}

function CreatePost( { reRender } : Props ) {
  const [name, setName] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [photo, setPhoto] = useState<string | null>(null)

  const handleSubmit = () => {
    const obj : Post = {
      id: uuidv4(),
      createdBy: name ?? "",
      message: message ?? "",
      photo: photo ?? ""
    }

    createPost(obj)
    resetForm()
    reRender()
  }

  const resetForm = () => {
    setPhoto(null)
    setName(null)
    setMessage(null)
  }

  const disableButton = () => {
    return !Boolean(photo && message && name);
  }
  return (
    <Container>
        <PicContainer>
          <Avatar img={photo} setImg={setPhoto}/>
        </PicContainer>
          <InputContainer>
              <Input  value={name ?? ""} placeholder="Digite seu nome" onChange={(e) =>  setName(e.target.value)}></Input>
              <TextArea value={message ?? ""} placeholder="Mensagem" onChange={(e) =>  setMessage(e.target.value)}></TextArea>
          </InputContainer>
          <ButtonContainer>
            <Button variant="outline" onClick={() => resetForm()}>Descartar</Button>
            <Button disabled={disableButton()} onClick={() => handleSubmit()}>Publicar</Button>
          </ButtonContainer>
    </Container>
  )
}

export default CreatePost;
