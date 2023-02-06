import { IPost } from '@types/models/post';
import { Dispatch, SetStateAction } from 'react';

export interface IContext {
  posts: IPost[] | null;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IProvider {
  children: ReactNode;
}
