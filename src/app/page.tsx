'use client';

import { Archivo_Black } from 'next/font/google';
import { Body, Container, EmptyFeed, FeedTitle, Header } from './styles';
import { Form, Post } from './components';
import { usePost } from '@/hooks';
import { PostModel } from '@/models';

const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const { posts, fetchingPosts } = usePost();

  function renderFeed(posts: PostModel[]) {
    if (!posts.length)
      return (
        <EmptyFeed>
          {fetchingPosts ? '...' : 'Não há posts no momento.'}
        </EmptyFeed>
      );

    return posts.map((post) => <Post key={post.id} {...post} />);
  }

  return (
    <Container>
      <Header>
        <h1 className={archivoBlack.className}>buildbox</h1>
        <span>WEB CHALLENGE</span>
      </Header>

      <Body>
        <Form />
        <FeedTitle>Feed{fetchingPosts && '...'}</FeedTitle>
        {renderFeed(posts)}
      </Body>
    </Container>
  );
}
