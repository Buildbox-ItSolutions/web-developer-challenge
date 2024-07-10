import {
	Div,
	DivSended,
	H6,
	Img,
	Main,
	P,
	PSended,
	Section,
	SpanIcon,
} from "./style";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { usePosts } from "../../context/PostContext";

export default function AppFeed() {
	const { posts, deletePost } = usePosts();

	const handleDeletePost = (id: string) => {
		deletePost(id);
	};

	return (
		<Main>
			<H6>Feed</H6>
			{posts.map((post) => (
				<Section key={post.id}>
					<SpanIcon>
						<IoIosCloseCircleOutline
							size={20}
							color="#AC4E27"
							cursor="pointer"
							onClick={() => handleDeletePost(post.id)}
						/>
					</SpanIcon>

					<Div>
						{post.image && (
							<Img
								src={post.image}
								alt="image"
							/>
						)}
						<P>{post.message}</P>
					</Div>

					<DivSended>
						<PSended>Enviado por</PSended>
						<span>{post.name}</span>
					</DivSended>
				</Section>
			))}
		</Main>
	);
}
