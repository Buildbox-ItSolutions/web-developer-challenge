import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { PostsContext } from "./posts.context";
import { IPost } from "../interfaces/post.interface";

export function PostsProvider({ children }: Readonly<PropsWithChildren>) {
	const [posts, setPosts] = useState<IPost[]>([]);

	const submitPost = useCallback(
		(post: Pick<IPost, "name" | "message" | "postPhoto">) => {
			const postId = Math.random() * 100;
			const postsList = [
				{
					id: postId,
					...post,
				},
				...posts,
			];

			setPosts(postsList);
		},
		[posts],
	);

	const deletePost = useCallback(
		(postId: number) => {
			const postList = posts.filter((post) => post.id !== postId);
			setPosts(postList);
		},
		[posts],
	);

	const contextValues = useMemo(
		() => ({
			posts,
			submitPost,
			deletePost,
		}),
		[posts, submitPost, deletePost],
	);

	return <PostsContext.Provider value={contextValues}>{children}</PostsContext.Provider>;
}
