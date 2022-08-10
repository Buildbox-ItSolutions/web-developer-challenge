import React from 'react';
import './App.css';
// Importando os componentes
import NewComment from './components/NewComment';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Buildbox</h1>
        </header>
        <NewComment />
    </div>
  );
}

export default App;
