import { Dispatch, SetStateAction } from 'react';

interface IFeed {
  imgProfile: string;
  userName: string;
  userMessage: string;
}

export interface IProvider {
  userName: string | undefined;
  setUserName: Dispatch<SetStateAction<string>>;
  userMessage: string | undefined;
  setUserMessage: Dispatch<SetStateAction<string>>;
  imgProfile: string | undefined;
  setImgProfile: Dispatch<SetStateAction<string | ArrayBuffer | any>>;
  feed: IFeed[] | undefined;
  setFeed: Dispatch<SetStateAction<Array>>;
}
