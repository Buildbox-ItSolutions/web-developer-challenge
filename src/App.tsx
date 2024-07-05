import { useState } from "react";

import styled from "styled-components";

import ItemForm, { IItem } from "./ItemForm";

const Navbar = styled("div")(() => ({
  backgroundColor: "#2b2b2b",
  padding: "1.5rem 0",
  borderBottom: "1px solid #232323",
}));

const Title = styled("h1")(() => ({
  color: "#71bb00",
  textAlign: "center",
  fontWeight: "bolder",
}));

const Subtitle = styled("h4")(() => ({
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
    max-width: 490px;
  }

  // medium
  @media (min-width: 900px) {
    max-width: 490px;
  }

  // large
  @media (min-width: 1200px) {
    max-width: 490px;
  }

  // extra-large
  @media (min-width: 1536px) {
    max-width: 490px;
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

        <div>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              {item.image && (
                <img src={item.image} alt={item.name} width="100" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
