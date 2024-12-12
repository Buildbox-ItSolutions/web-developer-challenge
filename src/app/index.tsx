import { Container, Feed, Header } from "./styles";
import { useState } from "react";

import logo from "../assets/bx-logo@3x.png";
import NewPostComponent from "./components/NewPostComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [data, setData] = useState<any[]>([]);

  const onSubmit = (values: any) => {
    console.log(data);
    setData([...data, values]);
  };

  const onRemove = (e: any) => {
    const ndata = data.filter((el) => el.msg !== e.msg);
    setData(ndata);
  };

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <div className="content">
        <NewPostComponent onSubmit={(values) => onSubmit(values)} />
        <Feed>
          <h3>Feed</h3>
          {data.map((element, i) => {
            return (
              <CardComponent
                key={i}
                name={element.name}
                img={element.img}
                msg={element.msg}
                onRemove={() => onRemove(element)}
              />
            );
          })}
        </Feed>
      </div>
    </Container>
  );
}

export default App;
