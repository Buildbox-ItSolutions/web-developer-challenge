import { PostContainer, PostImage } from "../style";

export const Post: React.FC<{ post: { name: string; message: string; photo: string; id: number }; onRemove: (id: number) => void }> = ({
  post,
  onRemove,
}) => (
  <PostContainer>
    <h3>{post.name}</h3>
    <p>{post.message}</p>
    <PostImage src={post.photo} alt="Post" />
    <button onClick={() => onRemove(post.id)}>Remover</button>
  </PostContainer>
);