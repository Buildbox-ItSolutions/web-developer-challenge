import React, { ReactNode, createContext, useState } from "react";
import { PostProps } from "../components/post/post";

interface ContextProps {
    posts: PostProps[];
    setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
}

const defaultValue: ContextProps = {
    posts: [],
    setPosts: () => {}
};

export const ContextPost = createContext(defaultValue);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    return (
        <ContextPost.Provider value={{ posts, setPosts }}>
            {children}
        </ContextPost.Provider>
    );
};
