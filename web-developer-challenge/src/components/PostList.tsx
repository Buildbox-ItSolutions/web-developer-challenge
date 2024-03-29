import { Post } from "./Post";
import { IPost } from "../interfaces";

export const PostsList: React.FC<{ posts: IPost[]; onRemove: (id: number) => void }> = ({
  posts,
  onRemove,
}) => (
  <div>
    {posts.map((post) => (
      <Post key={post.id} post={post} onRemove={onRemove} />
    ))}
  </div>
);