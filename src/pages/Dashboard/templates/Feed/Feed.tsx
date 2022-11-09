import React from 'react'
import { Caption, Container, FeedProps, Imagem, Message, Name, SendBy } from '.'
import Card from '../../../../components/Card'

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <Container>
      <Caption>Feed</Caption>

      {posts.map((post, index) => (
        <Card key={index} mt={index !== 0 ? '16px' : '0'}>
          <img
            src="/imgs/delete.png"
            style={{ position: 'absolute', top: '12px', right: '12px' }}
          />
          <div
            style={{
              display: 'flex',
              marginTop: '32px',
              marginBottom: '8px'
            }}
          >
            <Imagem src={post.image} />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '32px'
              }}
            >
              <Message>{post.message}</Message>
              <SendBy>Enviado por:</SendBy>
              <Name>{post.name}</Name>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  )
}

export default Feed
