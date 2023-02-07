import { useCallback, useState } from 'react'
import { Post } from '../types'

type Props = {
	createPost: (post: Post) => void
}

function CreatePost({ createPost }: Props) {
	const [name, setName] = useState<string>()
	const [post, setPost] = useState<string>()

	const clear = useCallback(() => {
		setName("")
		setPost("")
	}, [])

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (name && post) {
					createPost({
						author: {
							image: {
								url: "teste"
							},
							name
						},
						id: `${new Date().getTime()}`,
						text: post
					})
					clear()
				}
			}}>
				<input type="text" placeholder='Digite seu nome'
					value={name}
					required
					onChange={(e) => setName(e.target.value)}
				/>
				<textarea
					placeholder='Mensagem'
					value={post}
					required
					onChange={e => {
						setPost(e.target.value)
					}}>
				</textarea>
				<button onClick={(e) => {
					e.preventDefault()
					clear()
				}}>Descartar</button>
				<button type='submit'>Publicar</button>
			</form>
		</div>
	)
}

export default CreatePost