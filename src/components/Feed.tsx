import { useState } from "react";
import { PostCard, PostForm } from ".";

import PhotoBaseOne from "../assets/photo-base-one.png";
import PhotoBaseTwo from "../assets/photo-base-two.png";
import PhotoBaseThree from "../assets/photo-base-three.png";

import styled from "styled-components";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Manuela Oliveira",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
      image: PhotoBaseOne,
    },
    {
      id: 2,
      name: "Manuela Oliveira",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
      image: PhotoBaseTwo,
    },
    {
      id: 3,
      name: "Manuela Oliveira",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
      image: PhotoBaseThree,
    },
  ]);

  interface INewPost {
    id: number;
    name: string;
    message: string;
    image?: string;
  }

  const addPost = (newPost: INewPost) => {
    const image = newPost.image
      ? newPost.image
      : posts.length % 3 === 0
      ? PhotoBaseOne
      : posts.length % 3 === 1
      ? PhotoBaseTwo
      : PhotoBaseThree;

    const postWithImage = { ...newPost, image };

    setPosts([postWithImage, ...posts]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <>
      <PostForm addPost={addPost} />
      <StyledH3>Feed</StyledH3>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          image={post.image}
          message={post.message}
          name={post.name}
          onRemove={removePost}
        />
      ))}
    </>
  );
};

const StyledH3 = styled.h3`
  color: var(--warm-gray-two);
  font-weight: 500;
  font-size: 1.4rem;
  margin: 5.6rem 91.1rem 0.8rem 42.5rem;
`;

export { Feed };
