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
import { useEffect, useState } from "react";

interface PostData {
	id: string;
	image: string;
	name: string;
	message: string;
}

export default function AppFeed() {
	const [posts, setPosts] = useState<PostData[]>([]);

	useEffect(() => {
		const fetchPosts = () => {
			const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
			setPosts(storedPosts);
		};

		fetchPosts();
	}, []);

	const handleDeletePost = (id: string) => {
		const updatedPosts = posts.filter((post) => post.id !== id);
		setPosts(updatedPosts);
		localStorage.setItem("posts", JSON.stringify(updatedPosts));
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
