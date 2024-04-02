import styled from "styled-components";
import { IPost } from "../../App";
import Post from "../Post/Post";

interface Props {
  posts: IPost[];
  handleRemovePosts: (post: IPost) => void;
}

const FeedDiv = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-bottom: 100px;
`;

const StyledFeedSubtitle = styled.h3`
  width: calc(30% + 42px);
  text-align: left;
  font-size: 14px;
  color: var(--grey-4);
`;

const Feed = ({ posts, handleRemovePosts }: Props) => {
  return (
    <FeedDiv>
      {posts[0] && <StyledFeedSubtitle>Feed</StyledFeedSubtitle>}
      {posts.map((post) => (
        <>
          <Post
            key={posts.indexOf(post)}
            post={post}
            handleRemovePosts={handleRemovePosts}
          />
        </>
      ))}
    </FeedDiv>
  );
};

export default Feed;
