import { useState } from 'react'
import { Post } from '../types'


type Props = {
	posts?: Post[]
}
export const usePost = ({ posts = [] }: Props) => {
	const [data, setData] = useState<Post[]>(posts)

	const createPost = (newPost: Post) => {
		setData([newPost, ...data])
	}

	const removePost = (removePost: Post) => {
		setData(data.filter(item => item.id !== removePost.id))
	}

	return {
		data, createPost, removePost
	}
}
