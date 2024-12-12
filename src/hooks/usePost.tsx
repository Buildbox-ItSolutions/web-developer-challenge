import { createContext, ReactNode, useContext, useState } from 'react';

interface PostProviderProps {
  children: ReactNode;
}

interface Post {
  nome: string;
  mensagem: string;
  imagem?: string;
}

interface PostContextData {
  posts: Post[];
  addPost: (newPost: Post) => void;
  removePost: (postIndex: number) => void;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

export function PostProvider({ children }: PostProviderProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    let newPosts = [...posts];

    newPosts.unshift(newPost);

    setPosts(newPosts);
  };

  const removePost = (postIndex: number) => {
    const postRemoved = posts.filter((post, index) => index !== postIndex);

    setPosts(postRemoved);
  };

  return (
    <PostContext.Provider
      value={{ posts, addPost, removePost }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost(): PostContextData {
  const context = useContext(PostContext);

  return context;
}
