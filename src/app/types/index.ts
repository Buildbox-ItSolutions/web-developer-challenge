export interface IPost {
  id: number;
  name: string;
  message: string;
  avatar?: string;
}

export type IPostPayload = Omit<IPost, "id">;
