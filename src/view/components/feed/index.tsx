import {
  Container,
  DeleteIcon,
  ImageContainer,
  Post,
  TextContainer,
} from "./styles";
import { usePosts } from "../../hooks/usePosts";

export function Feed() {
  const { posts, removePost } = usePosts();

  return (
    <Container>
      <small>Feed</small>
      {posts.map((post, index) => (
        <Post key={index}>
          <DeleteIcon onClick={() => removePost(index)}>
            <i className="fa-regular fa-circle-xmark"></i>
          </DeleteIcon>

          <ImageContainer hasImage={!!post.image}>
            <img
              src={post.image ? post.image : "/image.png"}
              alt="Post uploaded image"
            />
          </ImageContainer>

          <TextContainer>
            <p>{post.message}</p>

            <div>
              <small>Enviado por</small>
              <span>{post.name}</span>
            </div>
          </TextContainer>
        </Post>
      ))}
    </Container>
  );
}
