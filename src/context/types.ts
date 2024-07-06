import { ReactNode } from "react";
import { PostCard } from "../actions/create-post/types";
import { PostProps } from "../types/types";

export interface FeedContextProps extends PostCard {
    posts: PostProps[];
    createPost: (post: PostProps) => void;
    deletePost: (postId: string) => void;
}

export interface PostContextProviderProps {
    children: ReactNode;
}
