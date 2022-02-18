import React from 'react';
import Header from './components/header';
import Forms from './components/forms';
import CardList from './components/cardList';
import { DivAll } from './style/appStyle';

function App() {
  return (
    <DivAll>
      <Header />
      <Forms />
      <h3 className="feedText">Feed</h3>
      <CardList />
    </DivAll>
  );
}

export default App;
