import { useContext } from 'react';
import { PostsContext } from '../context/FeedContext';

export const usePosts = () => useContext(PostsContext);