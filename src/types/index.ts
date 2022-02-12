export type Post = {
  id: string;
  avatar: FileList;
  name: string;
  message: string;
};
export type PostForm = Omit<Post, 'id'> & { avatar: FileList };

export type Error = {
  error?: boolean;
};
