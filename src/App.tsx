import { useState } from 'react';
import PostDraft from './components/post-draft';
import { PostProps } from './components/post';
import Feed from './components/feed';
import styled from 'styled-components';

const Header = styled.header`
    margin: 0;
    background: #2B2B2B;
    display: flex;
    flex-direction: column;
    padding: 3vh;

    align-items: center;

    border: 0 solid;
    border-bottom: 2px #232323;
    
    h1 {
      margin: 0;
    }
    
    h4 {
      margin: 0;
    }
  `

const Main = styled.main`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    margin-top: 4vh;
  `;

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  function removePost(id: string) {
    const newPosts = posts.filter((p) => p.Id != id);
    setPosts(newPosts);
  }

  function publishPost(post: PostProps) {
    post.Id = crypto.randomUUID()
    post.RemovePost = () => removePost(post.Id);
    setPosts([...posts, post])
  }

  return (
    <>
      <Header>
        <h1>buildbox</h1>
        <h4>WEB CHALLENGE</h4>
      </Header>
      <Main>
        <PostDraft Publish={publishPost} />
        <Feed Posts={posts} />
      </Main>
    </>
  );
}

export default App;
