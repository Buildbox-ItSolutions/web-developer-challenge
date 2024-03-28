"use client";

import { ChangeEvent, useState } from "react";
import { Container, Name, Message, Button } from "./style";

const Feed = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <Container>
      <Name placeholder="Nome" onChange={handleChange} />
      <Message placeholder="Mensagem" onChange={handleChange} />
      <button>add</button>
    </Container>
  );
};

export default Feed;
