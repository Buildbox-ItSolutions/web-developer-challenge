import React from "react";

import PostProps from "components/interface/PostProps";

import iconDelete from "../../assets/icons/delete.svg";

import {
	Container,
	Content,
	DeleteButton,
	Message,
	Name,
	NameGroup,
	PhotoBase,
	SentBy,
} from "./styles";

interface Props {
	element: PostProps;
	removeElement: (id: string) => void;
}

const Post: React.FC<Props> = ({ element: post, removeElement }) => {
	
	return (
		<Container>
			<DeleteButton src={iconDelete} onClick={() => removeElement(post.id)}/>
			<PhotoBase>
				<img src={post.photo} alt={`Foto de ${post.name}`} />
			</PhotoBase>
			<Content>
				<Message>{post.message}</Message>
				<NameGroup>
					<SentBy>Enviado por</SentBy>
					<br />
					<Name>{post.name}</Name>
				</NameGroup>
			</Content>
		</Container>
	)
};

export default Post;
