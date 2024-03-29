export type PostProps = {
  id: string,
  name: string;
  message: string;
  image?: File | string | undefined;
};

export type ContextType = {
  allPosts: PostProps[];
  addPost: (post: PostProps) => void;
};