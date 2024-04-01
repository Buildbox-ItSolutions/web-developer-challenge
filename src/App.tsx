import { useState } from "react";
import { Header, FeedPost, PostPublisher } from "./components";
import styled from "styled-components";
import { Post } from "./types/post.types";
import { AnimatePresence } from "framer-motion";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts((oldPosts) => [newPost, ...oldPosts]);
  };

  const handleRemovePost = (id: string) => {
    setPosts((oldPosts) => oldPosts.filter((post) => post.id !== id));
  };

  return (
    <>
      <Header />

      <PostPublisher handleAddPost={handleAddPost} />

      <FeedContainer>
        <AnimatePresence>
          <Title>Feed</Title>

          {posts.map((post, i) => (
            <FeedPost
              key={i}
              post={post}
              onRemove={() => handleRemovePost(post.id)}
            />
          ))}
        </AnimatePresence>
      </FeedContainer>
    </>
  );
}

export default App;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
  padding-block: 24px;
`;

const Title = styled.span`
  line-height: 18px;
  font-size: 14px;
  color: #7a7a7a;
  font-weight: 600;
`;
