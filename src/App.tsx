import React, { useState } from 'react';
import CreatePost from './components/create-post';
import FeedList from './components/feed';
import Header from './components/header';
import { Content, Feed, FeedBox, FeedSpan } from './styles';
import GlobalStyle from './styles/global';

const App = () => {

  const [feedList, setFeedList] = useState([
    {
      autor: "Manuela Oliveira",
      img: "blob:http://localhost:3000/fc2dddfe-250a-496b-ac8d-d7083f427952",
      img_name: "test.png",
      mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."
    },
    {
      autor: "Manuela Oliveira",
      img: "blob:http://localhost:3000/fc2dddfe-250a-496b-ac8d-d7083f427952",
      img_name: "test.png",
      mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."
    }
  ]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content >
        <CreatePost setFeed={setFeedList}/>
        <FeedBox>
          <FeedSpan>Feed</FeedSpan>
        </FeedBox>
        <Feed>
          {
            feedList.map((feed, index) => {
              return <FeedList feed={feed} key={index}/>
            })
          }
        </Feed>
      </Content>
      
    </div>
  );
}

export default App;
