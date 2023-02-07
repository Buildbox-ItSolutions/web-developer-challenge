import { Post } from '../types'

type Props = Post & {
	removePost: (post: Post) => void
}

function PostItem({
	author,
	id,
	text,
	removePost
}: Props) {
	return (
		<div>
			<image></image>
			<article>
				<p>{text}</p>
			</article>
			<button onClick={() => {
				removePost({
					id,
					author,
					text
				})
			}}>Remover</button>
			<div>
				<p></p>
				<p></p>
			</div>
		</div>
	)
}

export default PostItem