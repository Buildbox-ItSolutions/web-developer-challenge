import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "../../../slices/posts/posts.slice";
import { Post } from "./Post/Post";
import { FeedTitle } from "./Styles/FeedTitle.styled";
import { PostContainer } from "./Styles/PostContainer.styled";

export const PostContext = React.createContext({});

export const Feed = () => {
  const mockPosts = useSelector(postsSelector);
  // Código comentado devido à ausência de endpoints
  // const {
  //   data: posts,
  //   isError,
  //   isFetching,
  //   isLoading,
  //   isSuccess,
  // } = useGetPostsQuery();

  let feedContent = <></>;
  // Solução temporária com mocks devido à ausência de endpoints
  feedContent = (
    <>
      {mockPosts &&
        mockPosts.map((post: any) => {
          return (
            <PostContainer key={post.id}>
              <PostContext.Provider value={post}>
                <Post></Post>
              </PostContext.Provider>
            </PostContainer>
          );
        })}
    </>
  );

  return (
    <>
      {mockPosts.length > 0 && <FeedTitle>Feed</FeedTitle>}
      {feedContent}
    </>
  );
};
