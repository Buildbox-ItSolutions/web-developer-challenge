import { FeedContainer, H3, Card, Container, Image, ContainerMessage, Message, SendBy, Name } from "./Feed"
import { PostProps } from "../../types";
import imageNone from "../../assets/image.svg"


type FeedProps = {
  props: PostProps[]
}

function Feed({ props }: FeedProps) {

  return (
    <FeedContainer>
      <Container>
        <H3>Feed</H3>

        {props?.map((post) => (
          <Card key={post.id}>
            <Image src={post.image ? post.image : imageNone} alt="imagem do post" />
            <ContainerMessage>
              <Message>{post.message}</Message>
              <div>
                <SendBy>Enviado por</SendBy>
                <Name>{post.name}</Name>
              </div>
            </ContainerMessage>
          </Card>
        ))}
      </Container>
    </FeedContainer>
  )
}

export default Feed