import { createContext, useContext, useState, ReactNode } from "react";
import { PostData } from "../interfaces/PostData";

interface PostContextProps {
	posts: PostData[];
	addPost: (item: PostData) => void;
	deletePost: (id: string) => void;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

export default function PostProvider({ children }: { children: ReactNode }) {
	const [posts, setPosts] = useState<PostData[]>(() => {
		const storedPosts = localStorage.getItem("posts");
		return storedPosts ? JSON.parse(storedPosts) : [];
	});

	const addPost = (item: PostData) => {
		const updatedPosts = [...posts, item];
		setPosts(updatedPosts);
		localStorage.setItem("posts", JSON.stringify(updatedPosts));
	};

	const deletePost = (id: string) => {
		const updatedPosts = posts.filter((post) => post.id !== id);
		setPosts(updatedPosts);
		localStorage.setItem("posts", JSON.stringify(updatedPosts));
	};

	return (
		<PostContext.Provider value={{ posts, addPost, deletePost }}>
			{children}
		</PostContext.Provider>
	);
}

export function usePosts(): PostContextProps {
	const context = useContext(PostContext);
	if (!context) {
		throw new Error("usePosts must be used within a PostProvider");
	}
	return context;
}
