import { PostProps } from "../../types/types";

const createPost = (post: PostProps, feeds: PostProps[]): PostProps[] => {
    const newFeeds = [post, ...feeds];
    return newFeeds;
};

export default createPost;
