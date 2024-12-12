import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { Avatar } from "../Avatar";
import { BoxContainer } from "../BoxContainer";
import { Button, Form, ContainerImage, Footer } from "./styles";
import { Trash } from 'phosphor-react';
import { IPosts } from "../../interface/IPosts";

interface SidebarProps {
  setNewPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
}

export function Sidebar({ setNewPosts }: SidebarProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar]  = useState<File>();
  const [isButtonEnbled, setIsButtonEnbled] = useState(false);


  function handleNewName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
    setAvatar(event.target.files![0]);
    setIsButtonEnbled(event.target.value.length > 0 && message.length > 0); 
  }

  function handleNewMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value)
    setIsButtonEnbled(event.target.value.length > 0 && name.length > 0); 
  }


  const handleCleaer = useCallback(() => {
    setName("");
    setMessage("");
    setAvatar(undefined);
    setIsButtonEnbled(false);
  }, []);

  const handleDeleteImage = useCallback(() => {
    setAvatar(undefined);
  }, []);

  function handleNewPosts(event: FormEvent) {
    event.preventDefault();
    const newPost: IPosts = {
      id: uuidv4(),
      avatar: URL.createObjectURL(avatar),
      name: name,
      message: message,
    };
    setNewPosts(prevPosts => [...prevPosts, newPost]);
    handleCleaer();
  }

  return(
    <BoxContainer>
      <Form onSubmit={handleNewPosts}>
      <ContainerImage>
        <Avatar onFileUploaded={setAvatar} avatar={avatar} />
        {avatar && <Trash onClick={handleDeleteImage} />}
      </ContainerImage>
   

        <input type="text"  value={name} onChange={handleNewName} placeholder="Digite seu nome"/>
        <textarea name="coment" value={message} onChange={handleNewMessage} placeholder="Menssagem" />

        <Footer>
          <a onClick={handleCleaer} href="">Descartar</a>
          <Button type="submit" isEnabled={isButtonEnbled}>Publicar</Button>
        </Footer>
      </Form>
    </BoxContainer>
  )
}