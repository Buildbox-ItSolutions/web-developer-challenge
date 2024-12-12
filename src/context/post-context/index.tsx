import { createContext, useState } from "react";

const initialPosts = [
  {
    name: "João",
    image: "/photo-base@2x.png",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies diam nunc. Quisque vitae ipsum massa. Pellentesque risus eros, gravida sit amet turpis a, pretium tincidunt dolor. Donec eget elit efficitur, interdum ex rhoncus, aliquam nunc. Sed eu dapibus dolor, at tempor lorem.",
  },
  {
    name: "Maria",
    image: "/photo-base-2@2x.png",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies diam nunc. Quisque vitae ipsum massa. Pellentesque risus eros, gravida sit amet turpis a, pretium tincidunt dolor.",
  },
];

export interface Post {
  name: string;
  message: string;
  image?: string;
}

interface PostContextData {
  posts: Post[];
  addPost: (post: Post) => void;
  removePost: (index: number) => void;
}

export const PostContext = createContext({} as PostContextData);

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(() => {
    const posts = localStorage.getItem("@posts");

    if (posts) {
      return JSON.parse(posts);
    }

    return initialPosts;
  });

  function addPost(post: Post) {
    localStorage.setItem("@posts", JSON.stringify([post, ...posts]));
    setPosts((prevPosts) => [post, ...prevPosts]);
  }

  function removePost(index: number) {
    localStorage.setItem(
      "@posts",
      JSON.stringify(posts.filter((_, i) => i !== index))
    );
    setPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
  }

  return (
    <PostContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
}
