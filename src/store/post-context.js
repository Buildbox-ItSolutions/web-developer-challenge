import React, {useEffect, useState} from "react";

const PostContext = React.createContext({
    posts: [],
    addPost: () => {
    },
    deletePost: () => {
    },
});

export const PostsContextProvider = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("@buildbox%Posts");

        if (data) {
            setPosts(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("@buildbox%Posts", JSON.stringify(posts));
    }, [posts]);

    const addPost = (value) => {
        setPosts((prev) => [...prev, value]);
    };

    const deletePost = (id) => {
        setPosts((posts) => posts.filter((post) => post.id !== id));
    };

    return (
        <PostContext.Provider value={{posts, addPost, deletePost}}>
            {props.children}
        </PostContext.Provider>
    );
};

export default PostContext;
