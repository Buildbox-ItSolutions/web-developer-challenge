import { PostListItem } from "../post-list-item";

import * as S from "./styles";

type Props = {
  posts: any[];
  onClickDelete: (id: number) => void;
};

export function PostList({ posts, onClickDelete }: Props) {
  return (
    <S.Container>
      <S.Title>Feed</S.Title>

      <S.ContentItems>
        {posts.map((item) => (
          <PostListItem item={item} onClickDelete={onClickDelete} />
        ))}
      </S.ContentItems>
    </S.Container>
  );
}
