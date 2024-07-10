import React, { useState, useEffect } from 'react';
import FormPost, { Post } from '../FormPost'; 
import Feed from '../Feed';

const ParentComponent = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    return (
        <div>
            <FormPost setPosts={setPosts} posts={posts} />
            <Feed posts={posts} />
        </div>
    );
};

export default ParentComponent;
