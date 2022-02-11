import * as C from "./App.styles";

import { Header } from "./components/Header";

function App() {
  return (
    <C.Container>
      <Header />
      <C.Area>
        <C.AddPostArea>
          <C.Avatar />
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
        <C.FeedArea></C.FeedArea>
      </C.Area>
    </C.Container>
  );
}

export default App;
