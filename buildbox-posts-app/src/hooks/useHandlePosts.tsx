import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { PostProps } from '../types/Post';

export const useHandlePosts = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const newPost = (post: Omit<PostProps, 'id'>) => {
        const newPost = { ...post, id: uuidv4() };
        setPosts([newPost, ...posts]);
    }

    const removePost = (id: string) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return { posts, newPost, removePost};
}