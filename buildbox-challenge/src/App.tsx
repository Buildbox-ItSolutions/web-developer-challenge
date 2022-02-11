import { useContext } from 'react';
import { Header } from './components/Header';
import ModalDeletePost from './components/ModelDeletePost';
import { Home } from './pages/Home';
import { ModalDeleteContext } from './providers/ModelDeletePost';

function App() {
  const { isModalDeletedShowing } = useContext(ModalDeleteContext)
  return (
    <>
      {isModalDeletedShowing && <ModalDeletePost/>}
      <Header/>
      <Home/>
    </>
  );
}

export default App;
