import React, { useMemo } from "react";
import { PostRepository } from "../../../infra/repositories/post-repository";
import AddPost from "../../components/posts/add/add-post";

import * as S from "./styles";

export default function Version1Page() {
  const postRepository = useMemo(() => {
    return PostRepository.getInstance();
  }, []);

  return (
    <S.Container>
      <main>
        <AddPost repository={postRepository} />
        <section></section>
      </main>
    </S.Container>
  );
}
