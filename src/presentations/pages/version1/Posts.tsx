import { useCallback, useContext } from "react";
import { PostList } from "../../components/posts/post-list";
import { PostContext } from "../../contexts/post";

export function Posts() {
  const postContext = useContext(PostContext);

  const onClickDelete = useCallback(
    async (id: number) => {
      await postContext?.deletePost(id);
      await postContext?.requestAllPosts();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <PostList posts={postContext?.posts ?? []} onClickDelete={onClickDelete} />
  );
}
