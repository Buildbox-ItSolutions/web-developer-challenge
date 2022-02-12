import { useContext } from 'react';
import { Header } from './components/Header';
import ModalEditPost from './components/ModalEditPost';
import ModalDeletePost from './components/ModelDeletePost';
import { Home } from './pages/Home';
import { ModalEditContext } from './providers/ModalEditPost';
import { ModalDeleteContext } from './providers/ModelDeletePost';

function App() {
  const { isModalDeletedShowing } = useContext(ModalDeleteContext)

  const {isModalEditShowing} = useContext(ModalEditContext)
  return (
    <>
      {isModalDeletedShowing && <ModalDeletePost/>}
      {isModalEditShowing && <ModalEditPost/>}
      <Header/>
      <Home/>
    </>
  );
}

export default App;
