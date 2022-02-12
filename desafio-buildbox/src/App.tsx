import { useState } from "react";
import * as C from "./App.styles";

import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";

import { iPosters } from "./types/Posters";

function App() {
  const [posts, setPosts] = useState<iPosters[]>([
    {
      id: 1,
      avatar: require("./assets/images/photo-base.png"),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel arcu sodales, pellentesque massa et, ullamcorper nisl. ",
      userName: "Matheus Lima",
    },
    {
      id: 2,
      avatar: require("./assets/images/photo-base2.png"),
      text: " Nunc sed massa sem. Nulla vel lectus finibus neque interdum condimentum eget et lacus. Integer iaculis purus at tellus egestas, eu pharetra erat scelerisque.",
      userName: "Maria Oliveira",
    },
    {
      id: 3,
      avatar: require("./assets/images/photo-base3.png"),
      text: "Etiam sollicitudin felis eget ipsum placerat elementum. Donec vitae risus ut justo accumsan commodo. Nulla facilisi. In hac habitasse platea dictumst. Vestibulum rhoncus nisl quis dolor dignissim varius.",
      userName: "Maria Eduarda",
    },
  ]);


  return (
    <C.Container>
      <Header />
      <C.Area>
        <C.AddPostArea>
          <C.Avatar src={require("../src/assets/images/photo-upload.png")} />
          <C.InputArea>
            <C.InputName placeholder="Digite seu nome" />
            <C.InputMsg rows={3} placeholder="Mensagem" />
          </C.InputArea>

          <C.BtnArea>
            <C.DiscardBtn>Descartar</C.DiscardBtn>
            <C.AddBtn>Publicar</C.AddBtn>
          </C.BtnArea>
        </C.AddPostArea>

        <C.TextFeed>Feed</C.TextFeed>
        <C.FeedArea>
          {posts.map((item) => {
            return <ListItem key={item.id} data={item} />;
          })}
        </C.FeedArea>
      </C.Area>
    </C.Container>
  );
}

export default App;
