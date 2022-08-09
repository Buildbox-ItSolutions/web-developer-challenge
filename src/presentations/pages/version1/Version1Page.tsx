import React, { useMemo } from "react";
import { PostRepository } from "../../../infra/repositories/post-repository";
import AddPost from "../../components/posts/add/add-post";

export default function Version1Page() {
  const postRepository = useMemo(() => {
    return PostRepository.getInstance();
  }, []);

  return (
    <>
      <header></header>
      <main>
        <section>
          <AddPost repository={postRepository} />
        </section>
        <section></section>
      </main>
    </>
  );
}
