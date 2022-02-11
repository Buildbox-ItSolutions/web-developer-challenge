import { postContext } from "../../contexts/PostContext";
import { Post, PostContent } from "./styles";

export default function Posts() {
  const { posts, removePost } = postContext();
  return (
    <Post>
      <strong>Feed</strong>
      {posts.map((post) => (
        <PostContent key={post.id}>
          <button onClick={() => removePost(post.id)}>
            <p>x</p>
          </button>

          <div>
            <img src={post.imgURL} alt={post.imgURL} />
            <div>
              <p>{post.message}</p>
              <span>
                <p>Enviado por</p>
                <strong>{post.name}</strong>
              </span>
            </div>
          </div>
        </PostContent>
      ))}
    </Post>
  );
}
