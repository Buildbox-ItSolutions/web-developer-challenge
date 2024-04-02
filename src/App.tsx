import { PostContextProvider } from "./contexts/postContext";
import NewPost from "./sections/newPost";


function App() {


  return (
    <PostContextProvider>
      <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
        <NewPost />
      </div>
    </PostContextProvider>
  )
}

export default App
