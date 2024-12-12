"use client";
import { ChangeEvent, useState, useRef } from "react";
import {
  Container,
  Name,
  Message,
  FeedItemContainer,
  Button,
  DeleteButton,
  ImageInput,
  ClearButton,
  Avatar,
  ImageContainer,
  Info,
  MessageBox,
} from "./style";
import Image from "next/image";

interface FeedItem {
  name: string;
  message: string;
  image: string;
}

const Feed = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const handleAdd = () => {
    if (name.trim() === "" || message.trim() === "" || image.trim() === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const newItem: FeedItem = { name, message, image };
    setFeedItems([...feedItems, newItem]);
    setName("");
    setMessage("");
    setImage("");
  };

  const handleDelete = (index: number) => {
    const newFeedItems = [...feedItems];
    newFeedItems.splice(index, 1);
    setFeedItems(newFeedItems);
  };

  const handleClearFields = () => {
    setName("");
    setMessage("");
    setImage("");
  };

  return (
    <>
      <Container>
        <Avatar onClick={handleImageClick}>
          {image ? (
            <Image
              src={image}
              alt=""
              width={80}
              height={80}
              className="rounded-full"
            />
          ) : (
            <ImageContainer>
              <Image src={"/image.png"} alt="" width={20} height={20} />
            </ImageContainer>
          )}
          <ImageInput type="file" onChange={handleImageChange} ref={inputRef} />
        </Avatar>
        <Name
          placeholder="Digite seu nome"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <Message
          placeholder="Mensagem"
          name="message"
          value={message}
          onChange={handleChange}
          maxLength={65}
        />
        <Button onClick={handleAdd}>Publicar</Button>
        <ClearButton onClick={handleClearFields}>Descartar</ClearButton>
      </Container>
      {feedItems.map((item, index) => (
        <FeedItemContainer key={index}>
          <DeleteButton>
            <Image
              src={"/delete@3x.png"}
              alt=""
              width={20}
              height={20}
              onClick={() => handleDelete(index)}
            />
          </DeleteButton>

          <MessageBox>
            <Image
              src={item.image}
              alt=""
              width={80}
              height={80}
              className="rounded-full mt-10"
            />
            <p className="px-4 mt-10">{item.message}</p>
          </MessageBox>
          <p className="text-gray-500 text-xs px-24">Enviado por</p>
          <p className="text-gray-400 px-24">{item.name}</p>
        </FeedItemContainer>
      ))}
    </>
  );
};

export default Feed;
