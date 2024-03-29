import { useState } from 'react'
import Header from './components/Header'
import Post from "./components/Post";
import CreateArea from "./components/CreatePost";
import './App.css'

interface Post {
  title: string;
  content: string;
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
    <div>
      <>
          <Header />
          <CreateArea onAdd={addPost} />
          {posts.map((postItem, index) => {
            return (
              <Post
                key={index}
                id={index}
                title={postItem.title}
                content={postItem.content}
                onDelete={deletePost}
        />
        );
      })}
    </>
    </div>
  );
}

export default App
