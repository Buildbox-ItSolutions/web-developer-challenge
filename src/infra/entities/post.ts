export interface IPostEntity {
  id: number;
  name: string;
  message: string;
  image: string; //base64
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type IPostAdd = Omit<IPostEntity, "id">;
