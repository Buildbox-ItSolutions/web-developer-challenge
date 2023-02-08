import React from 'react'
import styled from 'styled-components'
import { Post } from '../types'
import PostItem from './PostItem'

type Props = {
	data: Post[]
	removePost: (post: Post) => void
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	color: #7a7a7a;
	gap: 16px;
`

function PostContainer({ data = [], removePost }: Props) {
	return (
		<Container>
			<h1>Feed</h1>
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

export default PostContainer