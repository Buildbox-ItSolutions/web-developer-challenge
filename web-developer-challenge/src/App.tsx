import { Feed, Header, UserInterface } from './sections';
import * as S from './styles';

function App() {
  return (
    <S.Main>
      <Header />
      <UserInterface />
      <Feed />
    </S.Main>
  );
}

export default App;
