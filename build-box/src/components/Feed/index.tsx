import Post from '../Post';
import useFeed from './hooks/useFeed';

function Feed() {
	const { mainPosts, deletePost } = useFeed();

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
