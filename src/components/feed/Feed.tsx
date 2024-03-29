import { Container } from "./Feed"
import { PostProps } from "../../types";
import imageNone from "../../assets/image.svg"


type FeedProps = {
  props: PostProps[]
}

function Feed({props}: FeedProps) {

  return (
    <Container>
      {props?.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.message}</p>
          <img src={post.image ? post.image : imageNone } alt="imagem do post" />
        </div>
      ))}
    </Container>
  )
}

export default Feed