import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface PostCreationProps {
  feed: ReactElement[];
  setFeed: Dispatch<SetStateAction<ReactElement[]>>;
}
