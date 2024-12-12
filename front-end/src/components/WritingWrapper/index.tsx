import React, { useContext } from "react";

import { CraftContext } from "../../contexts/CraftContext";
import { Container, NameInput, MessageInput } from "./styles";
import { EventTarget } from "../../utils/interfaces";

function WritingWrapper() {
  const { author, setAuthor, message, setMessage } = useContext(CraftContext);

  return (
    <Container>
      <NameInput
        value={author}
        type="text"
        placeholder="Digite seu nome"
        onChange={(e: EventTarget) => setAuthor(e.target.value)}
      />
      <MessageInput
        value={message}
        type="text"
        placeholder="Digite seu nome"
        onChange={(e: EventTarget) => setMessage(e.target.value)}
      />
    </Container>
  );
}

export default WritingWrapper;
