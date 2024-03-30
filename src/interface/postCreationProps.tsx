import { Dispatch, SetStateAction } from 'react';

export interface PostCreationProps {
  feed: JSX.Element[];
  setFeed: Dispatch<SetStateAction<JSX.Element[]>>;
}
