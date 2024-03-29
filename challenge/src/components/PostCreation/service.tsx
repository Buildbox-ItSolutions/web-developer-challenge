import { MutableRefObject } from "react";
import { PostsData } from "../../context/PostsContext";

export const createPost = (
  event: React.FormEvent<HTMLFormElement>,
  name: MutableRefObject<HTMLInputElement | null>,
  text: MutableRefObject<HTMLTextAreaElement | null>,
  image: string,
  posts: PostsData[],
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>,
) => {
  event.preventDefault();

  if (name.current?.value && text.current?.value) {
    setPosts([...posts,
    {
      id: (posts.length === 0 ? 0 : Number(posts[posts.length - 1].id) + 1),
      image,
      name: name.current?.value,
      text: text.current?.value,
    }
    ])
    name.current.value = ''
    text.current.value = ''
  }

}