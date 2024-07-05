import { Post } from '../../interfaces/post';
import { CardDiv } from './styles';
import x from '../../assets/x.png';

interface PostComponentProps {
	post: Post;
	index: number;
	deletePost: (index: number) => void;
}

export default function PostComponent({
	post,
	index,
	deletePost,
}: PostComponentProps) {
	const { img, name, message } = post;

	return (
		<CardDiv>
			<button onClick={() => deletePost(index)}>
				<img src={x} alt="" />
			</button>
			<img src={img} alt="" />
			<div>
				<p>{message}</p>
				<small>Enviado por</small>
				<span>{name}</span>
			</div>
		</CardDiv>
	);
}
