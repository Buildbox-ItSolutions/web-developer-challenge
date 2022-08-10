import React, { useMemo } from "react";
import { PostRepository } from "../../../infra/repositories/post-repository";
import { PostProvider } from "../../contexts/post";

import * as S from "./styles";
import { Posts } from "./Posts";
import { Add } from "./Add";

export default function Version1Page() {
  const postRepository = useMemo(() => PostRepository.getInstance(), []);

  return (
    <PostProvider repository={postRepository}>
      <S.Container>
        <main>
          <Add />
          <Posts />
        </main>
      </S.Container>
    </PostProvider>
  );
}
