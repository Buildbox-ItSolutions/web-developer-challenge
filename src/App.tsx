import { AppStyled } from './App.style';
import FeedPage from './features/Feed/pages/FeedPage';
import Navbar from './features/General/Components/Navbar/Navbar';


function App() {
  return (
    <AppStyled>
      <Navbar/>
      <div className='contentContainer'>
        <FeedPage/>
      </div>
    </AppStyled>
  )
}

export default App;
