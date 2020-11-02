export enum PostsTypes { // eslint-disable-line
  CREATE_POST = '@posts/CREATE_POST',
  DELETE_POST = '@posts/DELETE_POST',
  LIKE_POST = '@posts/LIKE_POST',
}

export interface Post {
  id?: string;
  name: string;
  message: string;
  previewImage?: { name: string; url: string };
  image?: File;
  likes: number;
}
export interface PostsState {
  readonly data: Post[];
}

export interface CreatePostAction {
  type: typeof PostsTypes.CREATE_POST;
  payload: Post;
}

export interface DeletePostAction {
  type: typeof PostsTypes.DELETE_POST;
  payload: string;
}

export interface LikePostAction {
  type: typeof PostsTypes.LIKE_POST;
  payload: string;
}

export type PostActionTypes =
  | CreatePostAction
  | DeletePostAction
  | LikePostAction;
