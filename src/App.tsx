import Header from "./components/Header/Header.component";
import Content from "./components/Content/Content";
import * as S from "./styles/Global.styled";

function App() {
  return (
    <div>
      <S.GlobalContainer />
      <Header />
      <S.MainBox>
        <Content />
      </S.MainBox>
    </div>
  );
}

export default App;
