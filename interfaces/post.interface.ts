import { ReactNode } from "react";

export interface IPostProvider {
  children: ReactNode;
}

export interface IPostData extends IOnAddPost {
  id: number;
}

export interface IOnAddPost {
  img: any;
  name: string;
  message: string;
}

export interface IPostContextData {
  post: IPostData[];
  onDeletePost: (id: number) => void;
  onAddPost: ({ img, message, name }: IOnAddPost) => void;
}

export interface IPostsIndex extends IPostData {
  onDeletePost: (id: number) => void;
}
