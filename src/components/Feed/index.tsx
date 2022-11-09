import { usePost } from "../../context/PostContext";
import { Post } from "../Post";
import { FeedContainer } from "./styles";

export function Feed() {

  const { post, onDeletePost } = usePost()

  return (
    <FeedContainer>
      <p>Feed</p>

      {post.length === 0 ?
        <p className="nonePost">Nenhum post no momento.</p>
        :
        post.map(item => (
          <Post
            key={item.id}
            id={item.id}
            img={item.img}
            message={item.message}
            name={item.name}
            onDeletePost={() => onDeletePost(item.id)}
          />
        ))}
    </FeedContainer>
  )
}