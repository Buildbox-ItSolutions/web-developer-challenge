import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import createFeedServer from './server/createServer';

createFeedServer();

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
