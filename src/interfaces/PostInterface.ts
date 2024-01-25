export interface PostInterface{
  id: number;
  name: string;
  message: string;
  photo: string;
}

export interface PostListInterface {
  posts: PostInterface[];
}