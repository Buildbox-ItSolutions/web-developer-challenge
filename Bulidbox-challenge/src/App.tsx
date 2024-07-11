import React, { useState, useEffect } from 'react';
import Feed from './components/Feed';
import FormPost, { Post } from './components/FormPost';

function App() {
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
            <Feed posts={posts} setPosts={setPosts} />
        </div>
    );
}

export default App;
