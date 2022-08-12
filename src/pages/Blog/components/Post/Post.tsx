import { Post as IPost } from "src/models/Post";
import { Card, PostImage, Button } from "src/components";
import deleteIcon from "src/assets/images/delete.png";

import {
  Container,
  Text,
  Label,
  Name,
  DeleteContainer,
} from "./styles";

interface PostProps {
  post: IPost;
  removePost: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ post, removePost }) => {
  const deletePost = () => {
    removePost(post.id);
  };

  return (
    <Card>
      <DeleteContainer>
        <Button onClick={deletePost} style="icon">
          <img src={deleteIcon} alt="remover post" />
        </Button>
      </DeleteContainer>
      <Container>
        <div>
          <PostImage image={post.image} />
        </div>
        <div>
          <Text>{post.text}</Text>
          <Label>Enviado por</Label>
          <Name>{post.name}</Name>
        </div>
      </Container>
    </Card>
  );
};

export default Post;
