import './Post.css';
import deleteIcon from '../../assets/images/delete.svg';

interface PostProps {
	image: string;
	message: string;
	author: string;
	uuid: string;
}

function Post({ image, author, message }: PostProps) {
	return (
		<article>
			<button data-testid="delete-button">
				<img src={deleteIcon} alt="red X surrounded by a red circle" />
			</button>
			<img src={image} data-testid="image-post" />
			<p data-testid="message-post">{message}</p>
			<span>Enviado por</span>
			<span data-testid="author-post">{author}</span>
		</article>
	);
}

export default Post;
