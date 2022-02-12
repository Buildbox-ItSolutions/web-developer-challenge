import { StyledProvider } from './providers/styledProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/index';
import { AddNews } from './pages/addNews/index';
import { GlobalStyle } from './styles/global';
import { Header } from './components'
import { Footer } from './components'
function App() {

  return (
    <StyledProvider>
      <GlobalStyle />
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/addnews" element={<AddNews />} />
          </Routes>

          <Footer />
        </BrowserRouter>
    </StyledProvider>
    )
}

export default App