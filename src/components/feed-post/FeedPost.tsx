import { Post } from "../../types/post.types";
import { CircleX } from "lucide-react";
import {
  RemoveButton,
  SubContainer,
  Content,
  Message,
  SubContent,
  Label,
  Name,
  Image,
  Container,
} from "./styles";

interface Props {
  post: Post;
  onRemove: () => void;
}

const listVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function FeedPost({ post, onRemove }: Props) {
  return (
    <Container
      key={post.id}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={listVariants}
      layout
    >
      <RemoveButton variant="icon" onClick={onRemove}>
        <CircleX size={20} />
      </RemoveButton>

      <SubContainer>
        {post.image?.length && (
          <Image src={URL.createObjectURL(post.image[0])} />
        )}

        <Content>
          <Message>{post.message}</Message>

          <SubContent>
            <Label>Enviado por</Label>
            <Name>{post.name}</Name>
          </SubContent>
        </Content>
      </SubContainer>
    </Container>
  );
}

export default FeedPost;
