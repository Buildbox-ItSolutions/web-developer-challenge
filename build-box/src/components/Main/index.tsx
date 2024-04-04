import './Main.css';
import Form from '../Form';
import Post from '../Post';
import posts from '../../assets/data/posts';

function Main() {
	return (
		<main>
			<Form />
			<section>
				<h3>Feed</h3>
				{posts.map(({ image, message, author, id }) => (
					<Post
						image={image}
						message={message}
						author={author}
						key={id}
						uuid={id}
					/>
				))}
			</section>
		</main>
	);
}

export default Main;
