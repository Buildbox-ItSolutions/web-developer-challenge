import { useState } from 'react';
import PostDraft from './components/post-draft';
import { PostProps } from './components/post';
import Feed from './components/feed';

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
