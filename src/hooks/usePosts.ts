import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

export const usePosts = () => useContext(PostsContext);
