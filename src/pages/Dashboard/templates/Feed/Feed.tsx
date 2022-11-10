import React from 'react';

import Card from '../../../../components/Card';
import {
  Caption,
  Container,
  Delete,
  FeedProps,
  Imagem,
  Message,
  Name,
  SectionPost,
  SendBy,
  Signature,
  WrapperBody,
} from '.';

import DeleteImage from '../../../../assets/delete.png';
import EmptyImage from '../../../../assets/empty-photo.png';

const Feed: React.FC<FeedProps> = ({ posts, deletePost }) => {
  return (
    <Container>
      <Caption>Feed</Caption>

      <SectionPost>
        {posts.map((post, index) => (
          <Card
            key={index}
            width="calc(100% - 50px)"
            mt={index !== 0 ? '16px' : '0'}
            data-cy="cy-feed"
          >
            <Delete src={DeleteImage} onClick={() => deletePost(post.uuid)} />
            <WrapperBody>
              <Imagem src={post.image || EmptyImage} />

              <Signature>
                <Message data-cy="cy-feed-message">{post.message}</Message>
                <SendBy>Enviado por:</SendBy>
                <Name data-cy="cy-feed-name">{post.name}</Name>
              </Signature>
            </WrapperBody>
          </Card>
        ))}
      </SectionPost>
    </Container>
  );
};

export default Feed;
