import Header from "./compnents/Header"
import NewPost from "./compnents/NewPost";
import GlobalStyles from './styles/global';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <div className="main">
        <NewPost />
      </div>
    </div>
  )
}

export default App
