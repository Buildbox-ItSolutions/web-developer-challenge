import { IPost } from "../../Interfaces/IPost";

const posts: IPost[] = [];

export function addPost(data: IPost) {
    posts.push(data)
}

export function getAllPost() {
    
    return posts;
}