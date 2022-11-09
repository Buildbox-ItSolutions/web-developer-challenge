import React from 'react'
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
  WrapperBody
} from '.'
import Card from '../../../../components/Card'

const Feed: React.FC<FeedProps> = ({ posts, deletePost }) => {
  return (
    <Container>
      <Caption>Feed</Caption>

      <SectionPost>
        {posts.map((post, index) => (
          <Card key={index} mt={index !== 0 ? '16px' : '0'}>
            <Delete
              src="/imgs/delete.png"
              onClick={() => deletePost(post.uuid)}
            />
            <WrapperBody>
              <Imagem src={post.image} />

              <Signature>
                <Message>{post.message}</Message>
                <SendBy>Enviado por:</SendBy>
                <Name>{post.name}</Name>
              </Signature>
            </WrapperBody>
          </Card>
        ))}
      </SectionPost>
    </Container>
  )
}

export default Feed
