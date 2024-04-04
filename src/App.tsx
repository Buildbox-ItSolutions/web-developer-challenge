import {Header} from './components/header/header'
import { FeedPosts } from './components/feed/feed';
import * as S from "./components/styles/styles";
import './global.css';

function App() {

  return (
    <>
      <Header/>
      <S.Container>
        <FeedPosts/>
      </S.Container>
    </>
  )
}

export default App
