import { Dispatch, ReactElement, SetStateAction } from 'react';

export default interface PostProps {
  id: string;
  userInputs: {
    name: string;
    message: string;
    imageUrl: string;
  };

  setFeed: Dispatch<SetStateAction<ReactElement[]>>;
}
