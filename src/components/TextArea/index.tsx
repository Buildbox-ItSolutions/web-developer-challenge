import React from "react";
import { useFormContext } from "../../store";

import { Container } from "./styles";

const TextArea: React.FC = () => {
  const { newMessage, setNewMessage } = useFormContext();
  return (
    <Container
      rows={5}
      cols={33}
      placeholder="Mensagem"
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
    />
  );
};

export default TextArea;
