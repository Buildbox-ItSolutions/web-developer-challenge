import { useState } from 'react'
import Post from "./components/Post";
import CreateArea from "./components/CreatePost";
import './App.css'

interface Post {
  name: string;
  message: string;
  imageUrl: string | null;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    setPosts(prevPosts => [...prevPosts, { ...newPost, id: posts.length }]);
  };

  const deletePost = (id: number) => {
    setPosts(prevPosts => prevPosts.filter((_, index) => index !== id));
  };

  return (
    <>
      <CreateArea onAdd={addPost} />
          <p>Feed</p>
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
    </>
  );
}

export default App
