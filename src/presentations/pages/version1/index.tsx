import React, { useMemo } from "react";
import { PostRepository } from "../../../infra/repositories/post-repository";
import AddPost from "../../components/posts/add/add-post";
import { FeedPost } from "../../components/posts/feed";
import { PostProvider } from "../../contexts/post";

import * as S from "./styles";

export default function Version1Page() {
  const postRepository = useMemo(() => PostRepository.getInstance(), []);

  return (
    <PostProvider repository={postRepository}>
      <S.Container>
        <main>
          <AddPost />
          <FeedPost />
        </main>
      </S.Container>
    </PostProvider>
  );
}
