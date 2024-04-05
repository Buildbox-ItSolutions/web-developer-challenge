import { useContext } from 'react';
import Post from '../Post';
import { Context } from '../Main/context';
import styled from 'styled-components';

const StylizedTitle = styled.h3`
	color: #7a7a7a;
	font-family: 'roboto', 'sans-serif';
	font-size: 14px;
	font-stretch: normal;
	font-style: normal;
	font-weight: 500;
	height: 17px;
	letter-spacing: normal;
	line-height: 1.29;
	margin-bottom: 8px;
	text-align: left;
	width: 30px;
`;

const StylizedFeed = styled.section`
	height: 100%;
	margin: auto;
	margin-top: 145px;
	width: 516px;

	@media screen and (max-width: 515px) {
		width: calc(100% - 24px);
	}
`;

function Feed() {
	const { deletePost, mainPosts } = useContext(Context);

	return (
		<StylizedFeed>
			<StylizedTitle>Feed</StylizedTitle>
			{mainPosts.map(({ image, message, author, id }) => (
				<Post
					image={image}
					message={message}
					author={author}
					key={id}
					uuid={id}
					handleClick={() => deletePost(id)}
				/>
			))}
		</StylizedFeed>
	);
}

export default Feed;
