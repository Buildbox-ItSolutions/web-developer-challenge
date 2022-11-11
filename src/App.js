import { GlobalStyle, PainelWrapper} from './styles';
import { FeedList } from './component/FeedList';
import { Header } from './component/Header';
import { FeedForm } from './component/FeedForm';
import { useState } from 'react';

function App() {

  const feeds = [
    {
      id: 1, 
      img: '', 
      message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.', 
      name: 'Manoela Oliveira'
    },
    {
      id: 2, 
      img: '', 
      message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      name: 'Carlos Silva'},
  ]

  const [feedList, setFeedList] = useState(feeds);

  const addFeed = (feed) => {
    feed.id = feedList.length + 1
    // feedList.push(feed)
    console.log(feedList)
    // setFeedList(feedList)

    setFeedList([...feedList, feed])
  }

  return (
    <>
      <GlobalStyle />
      <PainelWrapper>
        <Header />
        <FeedForm addFeed={addFeed} />
        {feedList && <FeedList feedList={feedList} setFeedList={setFeedList}/>}
      </PainelWrapper>

    </>
  );
}

export default App;
