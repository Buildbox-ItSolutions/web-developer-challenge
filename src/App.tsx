import { PostContextProvider } from "./contexts/postContext";
import Feed from "./sections/feed";
import NewPost from "./sections/newPost";
import { AppContainer, AppContent, AppHeader } from "./styles";
import buildBoxImg from "./assets/bx-logo.svg"

function App() {

  return (
    <PostContextProvider>
      <AppContainer>
        <AppHeader>
          <img src={buildBoxImg} alt="build box web challenge image" />
        </AppHeader>
        <AppContent>
          <NewPost />
          <Feed />
        </AppContent>
      </AppContainer>
    </PostContextProvider>
  )
}

export default App
