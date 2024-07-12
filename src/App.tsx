import { useState } from 'react';
import './App.css';
import PostDraft from './components/post-draft';
import { PostProps } from './components/post';
import Feed from './components/feed';

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  function publishPost(post: PostProps) {
    setPosts([...posts, post])
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>buildbox</h1>
        <h3>web challange</h3>
        <PostDraft Publish={publishPost} />
        <Feed Posts={posts} />
      </header>
    </div>
  );
}

export default App;
