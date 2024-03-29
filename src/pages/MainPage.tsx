import { ReactElement, useState } from 'react';
import Header from '../components/Header';
import PostCreation from '../components/postCreation/PostCreation';
import Feed from '../components/Feed';

function MainPage() {
  const [feed, setFeed] = useState<ReactElement[]>([]);

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <PostCreation feed={feed} setFeed={setFeed} />
      <Feed children={feed} />
    </div>
  );
}

export default MainPage;
