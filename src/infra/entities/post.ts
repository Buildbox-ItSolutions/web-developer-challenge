export interface IPostEntity {
  id?: string;
  name: string;
  message: string;
  image: string; //base64
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}
