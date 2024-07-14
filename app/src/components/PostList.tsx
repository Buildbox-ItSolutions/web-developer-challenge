"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import NewPostForm from "./NewPostForm";

interface PostData {
  id: number;
  name: string;
  message: string;
  photo: string;
}

const initialPosts: PostData[] = [
  { id: 1, name: "Gabriel", message: "Hello World!", photo: "https://via.placeholder.com/50" },
];

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`;

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>(initialPosts);

  const addPost = (name: string, message: string, photo: string) => {
    setPosts([...posts, { id: posts.length + 1, name, message, photo }]);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Container>
      <NewPostForm onAddPost={addPost} />
      <h3>Feed</h3>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          photo={post.photo}
          onDelete={() => deletePost(post.id)}
        />
      ))}
    </Container>
  );
};

export default PostList;
