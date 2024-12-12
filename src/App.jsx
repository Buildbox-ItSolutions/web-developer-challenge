// MyProvider - useContext
import { MyProvider } from './context/MyContext';
// Components
import { Header, Forms, Feed } from './components';
// Global style
import { GlobalStyle } from './style/GlobalStyle';

function App() {

  return (
    <>
      <div className="App">
        <MyProvider>
          <Header/>
          <Forms/>
          <Feed/>
        </MyProvider>
      </div>
      
      <GlobalStyle/>
    </>
  )
}

export default App;
