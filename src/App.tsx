import { useState } from 'react'
import styled from 'styled-components';
import Post from "./components/Post";
import CreateArea from "./components/CreatePost";
import './App.css'

const StyledApp = styled.div `
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 9rem 0 7rem 0;

    .app__list--posts {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .app__feed {
      margin: 1.5rem 0 0.5rem 0;
    }

    @media only screen and (min-width: 1200px) {
      width: 50%;
      margin: auto;
      margin-top: 7rem;
      margin-bottom: 7rem;
  }
`;

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const addPost = (newPost: IPost) => {
    setPosts(prevPosts => [...prevPosts, { ...newPost, id: posts.length }]);
  };

  const deletePost = (id: number) => {
    setPosts(prevPosts => prevPosts.filter((_, index) => index !== id));
  };

  return (
    <StyledApp>
      <CreateArea onAdd={addPost} />
        <p className='color-warm-grey-two app__feed'>Feed</p>
        <div className='app__list--posts'>
            {posts.map((postItem, index) => {
              return (
                <Post
                  key={index}
                  id={index}
                  name={postItem.name}
                  message={postItem.message}
                  imageUrl={postItem.imageUrl}
                  onDelete={deletePost}
                />
              );
            })}
        </div>
      </StyledApp>
  );
}

export default App
