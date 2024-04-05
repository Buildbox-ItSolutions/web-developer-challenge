import { useContext } from 'react';
import Post from '../Post';
import { Context } from '../Main/context';

function Feed() {
	const { deletePost, mainPosts } = useContext(Context);

	return (
		<section>
			<h3>Feed</h3>
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
		</section>
	);
}

export default Feed;
