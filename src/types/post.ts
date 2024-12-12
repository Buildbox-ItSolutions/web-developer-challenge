export interface Post {
  picture: FileList | null;
  name: string;
  message: string;
};

export interface PostItem extends Omit<Post, 'picture'> {
  id: number;
  picture: string;
};
