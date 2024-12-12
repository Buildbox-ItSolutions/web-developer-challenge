import Header from "./compnents/Header"
import NewPost from "./compnents/NewPost";
import GlobalStyles from './styles/global';
import { PostProvider } from './hooks/usePost';
import ListPost from "./compnents/ListPost";
function App() {

  return (
    <PostProvider>
      <div className="App">
        <GlobalStyles />
        <Header />
        <div className="main-container">
          <div className="main-content">
            <NewPost />
            <ListPost />
          </div>
        </div>
      </div>
    </PostProvider>
  )
}

export default App
