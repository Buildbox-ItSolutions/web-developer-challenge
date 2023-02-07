import { useCallback, useState } from 'react'
import { Post } from '../types'

type Props = {
	createPost: (post: Post) => void
}

function CreatePost({ createPost }: Props) {
	const [name, setName] = useState<string>()
	const [post, setPost] = useState<string>()
	const [photo, setPhoto] = useState<File>()

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
							image: photo ? URL.createObjectURL(photo) : undefined,
							name
						},
						id: `${new Date().getTime()}`,
						text: post
					})
					clear()
				}
			}}>
				<input type='file' onChange={e => {
					setPhoto(e.target.files[0])
				}} accept=".jpg, .jpeg, .png"
				/>
				<img src={photo ? URL.createObjectURL(photo) : undefined}></img>
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