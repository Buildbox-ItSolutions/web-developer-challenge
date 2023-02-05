import { Container } from "./styles";
import { Card } from "../Card";
import { PostTypes } from "../../types/PostTypes";
import { Dispatch, SetStateAction } from "react";

interface FeedProps {
  setPosts: Dispatch<SetStateAction<PostTypes[]>>;
  posts: PostTypes[];
}

export const Feed = ({ setPosts, posts }: FeedProps) => {
  return (
    <Container>
      {posts.map((item) => {
        <h4>Feed</h4>;
        return (
          <Card
            key={item.id}
            image={item.fileUrl}
            post={item.post}
            name={item.name}
            setPosts={setPosts}
            posts={posts}
            id={item.id}
          />
        );
      })}
    </Container>
  );
};
