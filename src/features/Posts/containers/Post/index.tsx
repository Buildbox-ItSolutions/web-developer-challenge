import { useContext } from "react";
import { IPost } from "../../interfaces/post.interface";
import { PostsContext } from "../../contexts/posts.context";
import { Cards } from "../../../../components/Cards";
import { X } from "lucide-react";
import { Container, DeleteButton, ImageContainer, OwnerName, PostContainer, PostMessage, PostOwnerContainer, SendBy } from "./style";

interface Props {
	data: IPost;
}

export function Post({ data: { message, name, postPhoto, id } }: Readonly<Props>) {
	const { deletePost } = useContext(PostsContext);
	return (
		<Cards.Root key={id}>
			<Cards.Header>
				<DeleteButton onClick={() => deletePost(id)}>
					<X />
				</DeleteButton>
			</Cards.Header>
			<Cards.Body>
				<Container>
					<ImageContainer>
						<img src={postPhoto} alt={`Post ${name}`} />
					</ImageContainer>
					<PostContainer>
						<PostMessage>{message}</PostMessage>
						<PostOwnerContainer>
							<SendBy>Enviado por</SendBy>
							<OwnerName>{name}</OwnerName>
						</PostOwnerContainer>
					</PostContainer>
				</Container>
			</Cards.Body>
		</Cards.Root>
	);
}
