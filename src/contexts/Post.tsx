import React, { createContext, ReactNode, useContext, useState } from 'react';
import { PostContextData } from '../Interfaces/Post';

const PostContext = createContext<PostContextData>({} as PostContextData);

export type PostProps = {
  children: ReactNode;
};

export const PostProvider = ({ children }: PostProps) => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [thumbUrl, setThumbUrl] = useState<string>('');

  const clearPost = (): void => {
    setName('');
    setMessage('');
    setThumbUrl('');
  };

  return (
    <PostContext.Provider
      value={{
        name,
        message,
        thumbUrl,
        setName,
        setMessage,
        setThumbUrl,
        clearPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);

export default PostContext;
