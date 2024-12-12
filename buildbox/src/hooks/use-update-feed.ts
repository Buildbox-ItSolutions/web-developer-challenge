import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { LocalStorage } from "../services/local-storage";

export interface PostItem {
  list: Post[];
}

export interface Post {
  id: string;
  name: string;
  message: string;
  image: string;
}

export const useUpdateFeed = () => {
  const [postsList, setPostsList] = useState<Post[] | []>([]);

  useEffect(() => {
    const posts = LocalStorage.getItem<PostItem>("posts");
    if (!posts) {
      LocalStorage.setItem("posts", { list: [] });
      setPostsList([]);
      return;
    }
    setPostsList(posts.list);
  }, []);

  const setFeed = (input: Omit<Post, "id">) => {
    const id = faker.datatype.uuid();
    const posts = LocalStorage.getItem<PostItem>("posts") as PostItem;
    LocalStorage.setItem("posts", {
      list: [
        { name: input.name, message: input.message, image: input.image, id },
        ...posts.list,
      ],
    });
    setPostsList([
      { name: input.name, message: input.message, image: input.image, id },
      ...posts.list,
    ]);
  };

  const deletePost = (id: string) => {
    const posts = LocalStorage.getItem<PostItem>("posts") as PostItem;
    const messages = posts?.list.filter((m) => m.id !== id);
    setPostsList(messages);
    LocalStorage.setItem("posts", {
      list: messages,
    });
  };

  return { postsList, setFeed, deletePost };
};
