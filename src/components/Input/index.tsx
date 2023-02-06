import React from "react";
import { useFormContext } from "../../store";

import { Container } from "./styles";

const Input: React.FC = () => {
  const { newName, setNewName } = useFormContext();

  return (
    <Container
      placeholder="Digite seu nome"
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
    />
  );
};

export default Input;
