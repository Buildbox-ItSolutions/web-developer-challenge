import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { BuildBoxPosts } from './pages/Build-Box-Posts';
import './styles/global.scss';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/build-box/posts" element={<BuildBoxPosts />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;