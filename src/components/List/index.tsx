// Components
import { Post } from "../Post";

// Styles
import * as S from "./styles";

// Zustand
import { usePostStore } from "@/store/posts";

export function List() {
  const posts = usePostStore((state) => state.posts);

  return (
    <S.ListContainer>
      {posts.length ? <span>Feed</span> : <></>}
      <div className="listContent">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            message={post.message}
            photo={post.photo[0]["image_url"] ?? ""}
          />
        ))}
      </div>
    </S.ListContainer>
  );
}
