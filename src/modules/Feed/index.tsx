import { usePosts } from "../../providers/PostsContext";
import { CardPost } from "./components/CardPost";
import { PostForm } from "./components/PostForm";
import * as S from "./styles";

export const Feed = () => {
  const { posts } = usePosts();

  return (
    <S.Container>
      <PostForm />

      <S.FeedArea>
        <h4>Feed</h4>

        {posts.map(post => (
          <CardPost
            author={post.author}
            messagePost={post.messagePost}
            imgUrl={post.imgUrl}
            key={post.postId}
            postId={post.postId}
          />
        ))}
      </S.FeedArea>
    </S.Container>
  );
};
