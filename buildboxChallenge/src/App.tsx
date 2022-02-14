import { StyledProvider } from './providers/styledProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import { Home } from './pages/home';
import { AddNews } from './pages/addNews';
import { Single } from './pages/single';

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
            <Route path="/single" element={<Single />} />
          </Routes>

          <Footer />
        </BrowserRouter>
    </StyledProvider>
    )
}

export default App