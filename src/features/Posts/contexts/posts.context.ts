import { createContext } from "react";
import { IPost } from "../interfaces/post.interface";

interface IPostContext {
	posts: IPost[];
	submitPost: (post: Pick<IPost, "name" | "message" | "postPhoto">) => void;
	deletePost: (id: number) => void;
}

export const PostsContext = createContext<IPostContext>({
	posts: [],
	submitPost: () => {},
	deletePost: () => {},
});
