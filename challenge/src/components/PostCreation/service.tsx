import React, { MutableRefObject } from "react";
import { PostsData } from "../../context/PostsContext";

export const createPost = (
  event: React.FormEvent<HTMLFormElement>,
  name: MutableRefObject<HTMLInputElement | null>,
  text: MutableRefObject<HTMLTextAreaElement | null>,
  image: string,
  posts: PostsData[],
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>,
  setCreatedPost: React.Dispatch<React.SetStateAction<number | null>>,
  setImage: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  event.preventDefault();

  if (name.current?.value && text.current?.value) {
    const index = (posts.length === 0 ? 0 : Number(posts[posts.length - 1].id) + 1);
    const updatedPosts = [...posts,
    {
      id: index,
      image,
      name: name.current?.value,
      text: text.current?.value,
    }
    ]

    setTimeout(() => {
      setPosts(updatedPosts)
    }, 1000);

    setCreatedPost(index)
    setTimeout(() => {
      setCreatedPost(null)
    }, 1500);

    name.current.value = ''
    text.current.value = ''
    setImage(false)
  }

}

export const discardPost = (
  name: MutableRefObject<HTMLInputElement | null>,
  text: MutableRefObject<HTMLTextAreaElement | null>,
) => {
  if (name.current?.value && text.current?.value) {
    name.current.value = ''
    text.current.value = ''
  }
}

export const handlePublishing = (
  name: MutableRefObject<HTMLInputElement | null>,
  text: MutableRefObject<HTMLTextAreaElement | null>,
  image: boolean,
  setPublish: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (name.current?.value && text.current?.value) {
    if (name.current.value.trim().length !== 0 || text.current.value.trim().length !== 0 || image) {
      setPublish(true);
    } else {
      setPublish(false)
    }
  }
}
