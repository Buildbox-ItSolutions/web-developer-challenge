import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import Home from './components/Home';
import Layout from './components/Layout';
import Favorites from './components/Favorites';
import DataContext from './context/DataContext';

function App() {
  const { theme } = useContext(DataContext);
  return (
    <div className={ theme ? 'dark-mode' : 'light-mode' }>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/favorites" element={ <Favorites /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
