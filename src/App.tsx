import { StyledProvider } from './providers/styledProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/index';
import { AddNews } from './pages/addNews/index';
import { GlobalStyle } from './styles/global';
import { Header } from './components'

function App() {

  return (
    <StyledProvider>
      <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/addnews" element={<AddNews />} />
          </Routes>
        </BrowserRouter>
      
    </StyledProvider>
    )
}

export default App
