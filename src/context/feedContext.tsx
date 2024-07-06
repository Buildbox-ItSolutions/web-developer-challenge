import { createContext, useState } from "react";
import { FeedContextProps, PostContextProviderProps } from "./types.ts";
import { PostProps } from "../types/types.ts";
import createPost from "../actions/create-post/index.tsx";

const PostFeedContext = createContext<FeedContextProps | undefined>(undefined);

const PostFeedProvider = ({ children }: PostContextProviderProps) => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    const handleCreatePost = (post: PostProps) => {
        const newFeeds = createPost(post, posts);
        setPosts(newFeeds);
    };

    const handleDeletePost = (postId: string) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    };

    return (
        <PostFeedContext.Provider
            value={{
                posts,
                createPost: handleCreatePost,
                deletePost: handleDeletePost,
            }}
        >
            {children}
        </PostFeedContext.Provider>
    );
};

export { PostFeedContext, PostFeedProvider };
