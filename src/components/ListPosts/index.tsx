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
  return (
    <Container>
      <h1>Feed</h1>
      <ul>
        {posts.map((post, index) => (
          <Post
            key={index}
            name={post.name}
            message={post.message}
            photo={post.photo}
          />
        ))}
      </ul>
    </Container>
  );
};
