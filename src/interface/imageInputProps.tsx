import { Dispatch, SetStateAction } from 'react';
import userInputs from './userInputs';

export default interface ImageInputPropsInterface {
  imageUrl: string;
  setUserInputs: Dispatch<SetStateAction<userInputs>>;
  handleImageChanger: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
