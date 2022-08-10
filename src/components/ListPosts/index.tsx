import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

import { IPost } from "../../pages/Dashboard";
import { Post } from "../Post";
import { Container } from "./styles";

interface IListPosts {
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
}

interface IList {
  data: IListPosts;
}

export const ListPosts = ({ data }: IList) => {
  const { posts, setPosts } = data;

  const removePost = (post: IPost) => {
    const filterPosts = posts.filter(
      (selectedpost) => selectedpost.id !== post.id
    );
    setPosts(filterPosts);
  };

  return (
    <Container>
      <h1>Feed</h1>
      <AnimatePresence>
        {posts.map((post) => (
          <Post key={post.id} data={post} removePost={removePost} />
        ))}
      </AnimatePresence>
    </Container>
  );
};
