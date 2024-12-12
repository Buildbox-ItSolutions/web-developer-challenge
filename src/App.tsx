import './App.css';
import Router from './routes';
import PostProvider from './Context/PostContext';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <PostProvider>
        <Router />
      </PostProvider>
    </>
  );
}

export default App;
