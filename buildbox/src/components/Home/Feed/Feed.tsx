import React from "react";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../../../api/apiSlice";
import { postsSelector } from "../../../slices/posts/posts.slice";
import { Post } from "./Post/Post";
import { FeedTitle } from "./Styles/FeedTitle.styled";

export const PostContext = React.createContext({});

export const Feed = () => {
  const mockPosts = useSelector(postsSelector);
  const {
    data: posts,
    isError,
    error,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetPostsQuery(undefined);

  let postContent = <></>;
  if (isFetching || isLoading) {
    postContent = <div>Buscando posts...</div>;
  } else if (isError) {
    postContent = (
      <>
        {mockPosts &&
          mockPosts.map((post: any) => {
            return (
              <div key={post.id}>
                <PostContext.Provider value={post}>
                  <Post></Post>
                </PostContext.Provider>
              </div>
            );
          })}
      </>
    );
  } else if (isSuccess) {
    postContent = (
      <>
        {posts.map((post: any) => {
          return (
            <div key={post.id}>
              <PostContext.Provider value={post}>
                <Post></Post>;
              </PostContext.Provider>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <FeedTitle>Feed</FeedTitle>
      {postContent}
    </>
  );
};
