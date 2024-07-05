import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import styled from "styled-components";

import ItemForm, { IItem } from "./ItemForm";

const Navbar = styled("div")(() => ({
  backgroundColor: "#2b2b2b",
  padding: "1.5rem 0",
  borderBottom: "1px solid #232323",
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

const Card = styled("div")(() => ({
  position: "relative",
  padding: "1.5rem",
  border: "1px solid #3b3b3b",
  borderRadius: "4px",
  backgroundColor: "#313131",
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

        <div style={{ marginTop: "3rem" }}>
          <h4 style={{ marginBottom: "0.5rem", color: "#7a7a7a" }}>Feed</h4>

          {items.map((item, index) => (
            <Card key={index}>
              <IoMdCloseCircleOutline
                color="#bc5225"
                size={20}
                style={{
                  position: "absolute",
                  margin: "8px",
                  top: 0,
                  right: 0,
                }}
              />

              <div
                style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}
              >
                <div
                  style={{
                    borderRadius: "40%",
                    width: "90px",
                    height: "90px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="90"
                    height="90"
                    style={{ borderRadius: "40%" }}
                  />
                </div>

                <div>
                  <p style={{ color: "#7a7a7a", marginBottom: "1.2rem" }}>
                    {item.description}
                  </p>

                  <div>
                    <p style={{ color: "#7a7a7a" }}>Enviado por</p>
                    <p style={{ color: "#7a7a7a" }}>{item.name}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
