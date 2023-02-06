import { IPost } from '@types/models/post';

export interface IPayloadRegisterPost {
  name: string;
  message: string;
  thumbnail?: string | null;
}
