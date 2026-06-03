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
      img: "https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg",
      img_name: "test.png",
      mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."
    },
    {
      autor: "Manuela Oliveira",
      img: "https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg",
      img_name: "test.png",
      mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."
    }
  ]);

  const deleteFeed = (index: number) => {
    const clone = [...feedList];
    clone.splice(index, 1);
    setFeedList(clone)
  }

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
              return <FeedList feed={feed} deleteFeed={deleteFeed} index={index} key={index}/>
            })
          }
        </Feed>
      </Content>
      
    </div>
  );
}

export default App;
