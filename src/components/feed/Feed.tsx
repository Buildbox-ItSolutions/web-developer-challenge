import { FeedContainer, H3, Card, Container, Image, ContainerMessage, Message, SendBy, Name, Delete } from "./Feed"
import Context from "../../context/Context"
import imageNone from "../../assets/image.svg"
import imageDelete from "../../assets/delete.svg"
import { useContext } from "react";



function Feed() {
  const { allPosts, deletePost } = useContext(Context);

  return (
    <FeedContainer>
      <Container>
        <H3>Feed</H3>
        {allPosts.length === 0 ? <H3>Nenhum post encontrado</H3> :
          allPosts?.map((post) => (
            <Card key={post.id}>
              <Image
                src={post.image ? (typeof post.image === "string" ? post.image : URL.createObjectURL(post.image)) : imageNone}
                alt="imagem do post"
              />
              <ContainerMessage>
                <Message>{post.message}</Message>
                <div>
                  <SendBy>Enviado por</SendBy>
                  <Name>{post.name}</Name>
                </div>
              </ContainerMessage>
              <Delete onClick={() => deletePost(post.id)}><img src={imageDelete} alt="" /></Delete>
            </Card>
          ))}
      </Container>
    </FeedContainer>
  )
}

export default Feed