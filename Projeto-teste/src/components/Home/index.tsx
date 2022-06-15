import Header from '../../components/Header';
import Card from '../../components/Card';
import Feed from '../../components/Feed';

import * as Styled from './styles';
import { useState } from 'react';

function Index() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [index] = useState(-1);

  return (
    <div>
      <Styled.Container>
        <Header />
        <Card
          newPost={newPost}
          handleName={handleName}
          handleMensagem={handleMensagem}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
        />
        <Feed posts={posts} handDelete={handDelete} />
      </Styled.Container>
    </div>
  );
}

export default Index;
