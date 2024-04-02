import styled from "styled-components";
import CardPost from "./card-post";
import { useFeed } from "@/context/feed";

const FeedContanier = styled.section`
  display: flex;
  flex-direction: column-reverse;

  gap: 16px;

  max-width: 516px;
  width: 100%;

  margin-top: 56px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--warm-grey-two);
  }
  h1 {
    align-self: center;
    color: var(--warm-grey-three);
  }
`;

export default function Feed() {
  const { posts } = useFeed();
  return (
    <FeedContanier>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <CardPost key={post.id} post={post} />;
        })
      ) : (
        <h1>Ops... Parece que acabou os posts</h1>
      )}
      <p>Feed</p>
    </FeedContanier>
  );
}
