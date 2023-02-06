export type Post = {
  id: number;
  author: Author;
  message: string;
}

export type Author = {
  name: string;
  avatar: string;
}