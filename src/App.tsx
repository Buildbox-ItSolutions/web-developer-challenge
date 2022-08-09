import React, { useState } from "react";
import { DisplayBoxInput } from "./components/DisplayBoxInput";
import { DisplayBoxOutput } from "./components/DisplayBoxOutput";
import { Header } from "./components/Header";
import { Container, ContainerBody } from "./styles/style";

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Marcelo",
      messgae:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    },
    {
      id: 1,
      user: "Marcelo",
      messgae:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    },
  ]);
  return (
    <Container>
      <Header />
      <ContainerBody>
        <DisplayBoxInput />
        {comments.map((coment: any) => (
           <DisplayBoxOutput key={coment.id} />
        ))}
      </ContainerBody>
    </Container>
  );
}

export default App;
