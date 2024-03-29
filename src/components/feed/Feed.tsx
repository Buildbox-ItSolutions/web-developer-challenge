import { FeedContainer, H3, Card, Container, Image, ContainerMessage, Message, SendBy, Name } from "./Feed"
import Context from "../../context/Context"
import imageNone from "../../assets/image.svg"
import { useContext } from "react";



function Feed() {
  const { allPosts } = useContext(Context);
  // const [feed, setFeed] = useState(allPosts);

  console.log(allPosts);
  
  return (
    <FeedContainer>
      <Container>
        <H3>Feed</H3>

        {allPosts?.map((post) => (
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