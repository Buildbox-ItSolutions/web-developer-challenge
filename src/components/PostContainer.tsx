import styled from 'styled-components'
import { Post } from '../types'
import PostItem from './PostItem'

type Props = {
	data: Post[]
	removePost: (post: Post) => void
}

function PostContainer({ data = [], removePost }: Props) {
	return (
		<Container>
			<h1>Feed</h1>
			{!data.length && (
				<h2>Nada foi postado ainda :-(</h2>
			)}
			{data.map((post: Post) => {
				return (
					<PostItem
						key={post.id}
						removePost={removePost}
						{...post}
					/>
				)
			})}
		</Container>
	)
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	color: #7a7a7a;
	gap: 16px;
	margin-top: 56px;
`
export default PostContainer