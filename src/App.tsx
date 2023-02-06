import React, { useState } from 'react';
import CreatePost from './components/create-post';
import Header from './components/header';
import { Content } from './styles';
import GlobalStyle from './styles/global';

const App = () => {

  const [feedList, setFeedList] = useState([
    {
      autor: '',
      img: '',
      img_name: '',
      mensagem: ''
    }
  ]);

  console.log(feedList)

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content >
        <CreatePost setFeed={setFeedList}/>
      </Content>
      
    </div>
  );
}

export default App;
