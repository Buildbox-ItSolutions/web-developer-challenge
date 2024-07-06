import { PostProps } from "../../types/types";

export interface PostCard {
    posts: PostProps[];
    createPost: (post: PostProps) => void;
}
