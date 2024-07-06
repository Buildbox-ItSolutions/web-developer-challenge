import { useContext } from "react";
import { PostsContext } from "../../contexts/posts.context";
import { IPost } from "../../interfaces/post.interface";
import { Cards } from "../../../../components/Cards";
import { PostsContainer, Text } from "./style";
import { Post } from "../Post";

export function PostList() {
	const { posts } = useContext(PostsContext);

	return (
		<PostsContainer>
			<Text>Feed</Text>
			{posts.length ? (
				posts.map((post: IPost) => <Post key={post.id} data={post} />)
			) : (
				<Cards.Root>
					<Cards.Body>
						<Text>Nenhum post encontrado</Text>
					</Cards.Body>
				</Cards.Root>
			)}
		</PostsContainer>
	);
}
