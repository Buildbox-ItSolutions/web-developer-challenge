import { useState } from 'react';

import CreatePost from './components/CreatePost';

import Feed from './components/Feed';
import Layout from './layout';

import { Post } from './types/Post';

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  const createPost = (post: Post) => {
    setPosts([post, ...posts])
  }

  const deletePost = (id: string) => {
    const deletePost = posts.filter(post => post.id !== id)
    setPosts(deletePost)
  }

  return (
    <Layout>
      <>
        <CreatePost createPost={createPost} />

        <Feed posts={posts} deletePost={deletePost} />
      </>
    </Layout>
  );
}

export default App;
