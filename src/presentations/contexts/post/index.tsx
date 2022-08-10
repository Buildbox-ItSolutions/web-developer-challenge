import { createContext, useCallback, useEffect, useState } from "react";
import { IPostAdd, IPostEntity } from "../../../infra/entities/post";
import { PostRepository } from "../../../infra/repositories/post-repository";

type PostContextPayload = {
  posts: IPostEntity[];
  addPost: (post: IPostAdd) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  requestAllPosts: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PostContext = createContext<PostContextPayload | null>(null);

type Props = {
  children: JSX.Element;
  repository: PostRepository;
};

export function PostProvider({ children, repository }: Props) {
  const [posts, setPosts] = useState<IPostEntity[]>([]);
  const [loading, setLoading] = useState(false);

  const requestAllPosts = useCallback(async () => {
    const items = await repository.getAll();
    items.sort((a, b) => b.id - a.id);

    setPosts(items ?? []);
  }, [repository]);

  const deletePost = async (id: number) => {
    await repository.destroy(id);
    await requestAllPosts();
  };

  const addPost = async (post: IPostAdd) => {
    await repository.add(post);
    await requestAllPosts();
  };

  useEffect(() => {
    requestAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        deletePost,
        requestAllPosts,
        loading,
        setLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
