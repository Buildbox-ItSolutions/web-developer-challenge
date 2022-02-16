export type Post = {
  id: string;
  avatar: string | undefined;
  name: string;
  message: string;
};
export type PostForm = Omit<Post, 'id' | 'avatar'> & { avatar: FileList };

export type Error = {
  error?: boolean;
};
