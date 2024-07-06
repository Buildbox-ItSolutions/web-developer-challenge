import { Page } from "../../components/Page";
import { PostList } from "./containers/PostList";
import { SubmitPost } from "./containers/SubmitPost";
import { PostsProvider } from "./contexts/posts.provider";

export function Posts() {
	return (
		<PostsProvider>
			<Page>
				<SubmitPost />
				<PostList />
			</Page>
		</PostsProvider>
	);
}
