import { useState } from "react";

import styled from "styled-components";

import ItemForm, { IItem } from "./ItemForm";
import Feed from "./Feed";

const Navbar = styled("div")(() => ({
  backgroundColor: "#2b2b2b",
  padding: "1.5rem 0",
  borderBottom: "1px solid #232323",
  position: "fixed",
  width: "100%",
  zIndex: 1,
  top: 0,
}));

const Title = styled("h2")(() => ({
  color: "#71bb00",
  textAlign: "center",
  fontWeight: "bolder",
}));

const Subtitle = styled("h6")(() => ({
  color: "#5f5f5f",
  textAlign: "center",
  fontWeight: "light",
  textTransform: "uppercase",
}));

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  // extra-small
  @media (min-width: 0) {
    max-width: 280px;
  }

  // small
  @media (min-width: 600px) {
    max-width: 520px;
  }

  // medium
  @media (min-width: 900px) {
    max-width: 520px;
  }

  // large
  @media (min-width: 1200px) {
    max-width: 520px;
  }

  // extra-large
  @media (min-width: 1536px) {
    max-width: 520px;
  }
`;

function App() {
  const [items, setItems] = useState<IItem[]>([]);

  const addItem = (item: IItem) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <Navbar>
        <Title>buildbox</Title>

        <Subtitle>web challenge</Subtitle>
      </Navbar>

      <Container>
        <ItemForm addItem={addItem} />

        <Feed items={items} setItems={setItems} />
      </Container>
    </div>
  );
}

export default App;
