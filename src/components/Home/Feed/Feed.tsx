import React from "react";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../../../api/apiSlice";
import { postsSelector } from "../../../slices/posts/posts.slice";
import { Post } from "./Post/Post";
import { FeedTitle } from "./Styles/FeedTitle.styled";
import { PostContainer } from "./Styles/PostContainer.styled";
import { SearchingPostsMsg } from "./Styles/SearchingPostsMsg.styled";

export const PostContext = React.createContext({});

export const Feed = () => {
  const mockPosts = useSelector(postsSelector);
  const {
    data: posts,
    isError,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetPostsQuery(undefined);

  let feedContent = <></>;
  if (isFetching || isLoading) {
    feedContent = <SearchingPostsMsg>Buscando posts...</SearchingPostsMsg>;
  } else if (isError) {
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
  } else if (isSuccess) {
    feedContent = (
      <>
        {posts.map((post: any) => {
          return (
            <PostContainer key={post.id}>
              <PostContext.Provider value={post}>
                <Post></Post>;
              </PostContext.Provider>
            </PostContainer>
          );
        })}
      </>
    );
  }

  return (
    <>
      {mockPosts.length > 0 && <FeedTitle>Feed</FeedTitle>}
      {feedContent}
    </>
  );
};
