'use client';

import { Archivo_Black } from 'next/font/google';
import { Body, Container, FeedTitle, Header } from './styles';
import { Form, Post } from './components';

const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <Container>
      <Header>
        <h1 className={archivoBlack.className}>buildbox</h1>
        <span>WEB CHALLENGE</span>
      </Header>

      <Body>
        <Form />
        <FeedTitle>Feed</FeedTitle>
        <Post
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit."
          author="Manuela Oliveira"
        />
        <Post
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit."
          author="Manuela Oliveira"
        />
      </Body>
    </Container>
  );
}
