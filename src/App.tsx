import React from 'react';
import Header from './components/Header';
import Home from './page/Home';

import { GlobalStyles } from './global';
import { CardContainer } from './CardContext';

function App() {
  return (
    <div className="App">

      <CardContainer>
        <Header />
        <Home />
        <GlobalStyles />
      </CardContainer>

    </div>
  );
}

export default App;
