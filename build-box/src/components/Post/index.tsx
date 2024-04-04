import './Post.css';
import deleteIcon from '../../assets/images/delete.svg';

interface PostProps {
	image: string;
	message: string;
	author: string;
	uuid: string;
	handleClick: () => void;
}

function Post({ image, author, message, handleClick }: PostProps) {
	return (
		<article>
			<button data-testid="delete-button" onClick={handleClick}>
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
