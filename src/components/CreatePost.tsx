import React, { useState } from 'react'
import { Post } from '../types'

type Props = {
	createPost: (post: Post) => void
}

function CreatePost({ createPost }: Props) {
	const [name, setName] = useState<string>()
	const [post, setPost] = useState<string>()
	return (
		<div>
			<form onSubmit={e => {
				if (name && post) {
					createPost({
						author: {
							image: {
								url: "teste"
							},
							name
						},
						id: "teste",
						text: post
					})
				}
			}}>
				<input type="text" placeholder='Digite seu nome'
					value={name}
					required
					onChange={(e) => setName(e.target.value)}
				/>
				<textarea
					required
					onChange={e => {
						setPost(e.target.value)
					}}>

				</textarea>
				<button onClick={() => {
					setName("")
					setPost("")
				}}>Descartar</button>
				<button type='submit'>Publicar</button>
			</form>
		</div>
	)
}

export default CreatePost