import React from 'react';
import './App.css';
import RoutesApp from './routes';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <RoutesApp/>
    </div>
  );
}

export default App;
