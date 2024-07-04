import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "@/app/_components/Post/IPost";

interface ITemporaryStorageContext {
	data: IPost[];
	PublishPost: (post: IPost) => void;
	DeletePost: (id: string) => void;
}

export const TemporaryStorageContext = createContext<ITemporaryStorageContext | null>(null);

export default function TemporaryStorageProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<IPost[]>([]);
	function PublishPost(post: IPost) {
		setData([...data, post]);
	}

	function DeletePost(id: string) {
		const newData = data.filter((post) => {
			return post.id != id;
		});
		setData(newData);
	}

	return <TemporaryStorageContext.Provider value={{ PublishPost, DeletePost, data }}>{children}</TemporaryStorageContext.Provider>;
}

export function useTemporaryStorageContext() {
	const context = useContext(TemporaryStorageContext);
	if (context == null) throw new Error("Whoops!");
	return context;
}
