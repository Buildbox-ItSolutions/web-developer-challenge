import * as React from 'react';

import type { Post } from '@/types';

import Header from '@/components/Header';
import Container from '@/components/Container';
import Center from '@/components/Center';
import Form from '@/components/Form';
import Feed from '@/components/Feed';

function App() {
  const [posts, setPost] = React.useState<Post[]>([]);

  const addPost = (post: Post) => setPost([post, ...posts]);
  const removePost = (id: string) =>
    setPost((prevPosts) =>
      prevPosts.filter((post) => post.id !== id),
    );

  return (
    <Container>
      <Header />
      <Center as="main" marginX="16px" direction="column">
        <Form handleAddPost={addPost} />
        <Feed posts={posts} handleRemovePost={removePost} />
      </Center>
    </Container>
  );
}

export default App;
