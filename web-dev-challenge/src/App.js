import React from 'react';
import Header from './components/header';
import Forms from './components/forms';
import CardList from './components/cardList';
// import Provider from './context/provider';

function App() {
  return (
    <div>
      <Header />
      <Forms />
      <h3>Feed</h3>
      <CardList />
    </div>
  );
}

export default App;
