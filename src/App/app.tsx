import { useState } from "react";

import ItemForm, { ItemProps } from "./ItemForm/itemform";
import Feed from "./Feed/feed";

import { Container, Navbar, Subtitle, Title } from "./app.styles";

export default function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  const addItem = (item: ItemProps) => {
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
