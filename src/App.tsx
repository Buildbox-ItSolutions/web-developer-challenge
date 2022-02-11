import { StyledProvider } from './providers/styledProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/index';
import { AddNews } from './pages/addNews/index';

function App() {

  return (
    <StyledProvider>
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
