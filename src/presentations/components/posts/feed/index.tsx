import { useCallback, useContext } from "react";
import { PostContext } from "../../../contexts/post";
import { FeedItemPost } from "../feed-item";

import * as S from "./styles";

export function FeedPost() {
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
    <S.Container>
      <S.Title>Feed</S.Title>

      <S.FeedItems>
        {postContext?.posts.map((item) => (
          <FeedItemPost item={item} onClickDelete={onClickDelete} />
        ))}
      </S.FeedItems>
    </S.Container>
  );
}
