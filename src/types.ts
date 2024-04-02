export type PostProps = {
  postId?: number;
  author: string;
  messagePost: string;
  imgUrl?: string;
};

export type DataPostsType = {
  posts: PostProps[];
  addPost: (newPost: PostProps) => void;
  deletePost: (id: number) => void;
};
