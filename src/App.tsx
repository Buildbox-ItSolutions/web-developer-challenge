import { PostContextProvider } from "./contexts/postContext";
import Feed from "./sections/feed";
import NewPost from "./sections/newPost";
import { AppContainer, AppContent } from "./styles";


function App() {


  return (
    <PostContextProvider>
      <AppContainer>
        <AppContent>
          <NewPost />
          <Feed />
        </AppContent>
      </AppContainer>
    </PostContextProvider>
  )
}

export default App
