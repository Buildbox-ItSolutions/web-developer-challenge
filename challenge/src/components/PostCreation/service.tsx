import { MutableRefObject } from "react";
import { PostsData } from "../../context/PostsContext";

export const createPost = (
  event: React.FormEvent<HTMLFormElement>,
  name: MutableRefObject<HTMLInputElement | null>,
  text: MutableRefObject<HTMLTextAreaElement | null>,
  image: string,
  posts: PostsData[],
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>,
  setCreatedPost: React.Dispatch<React.SetStateAction<number | null>>,
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
