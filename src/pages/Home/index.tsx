import { AnimatePresence } from 'framer-motion';
import {
  useState,
} from 'react';

import {
  AppBar,
  Container,
  Content,
  Form,
  Post,
  PostsList,
  Separator,
} from '../../components';

import {
  PostItem,
} from '../../types';

export const Home = () => {
  const [ posts, setPosts ] = useState<Array<PostItem>>([]);

  const handleNewPost = ( newPost: PostItem ) => setPosts(( posts ) => [ newPost, ...posts ]);

  const handleDeletePost = ( id: number ) => setPosts(( posts ) => posts.filter(( post ) => post.id !== id ));

  return (
    <Container>
      <AppBar />

      <Content>
        <Form
          handleNewPost={ handleNewPost }
        />

        <Separator>Feed</Separator>

        <PostsList>
          <AnimatePresence>
            {
              posts.map(( post ) => (
                <Post
                  key={ post.id }
                  handleDeletePost={() => handleDeletePost( post.id )}
                  { ...post }
                />
              ))
            }
          </AnimatePresence>
        </PostsList>
      </Content>
    </Container>
  );
};
