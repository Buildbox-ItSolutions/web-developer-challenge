import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface PostCreationProps {
  setFeed: Dispatch<SetStateAction<ReactElement[]>>;
}
