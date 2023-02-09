
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Post } from '../types'
import { AvatarContainer } from './AvatarContainer'

type Props = {
	createPost: (post: Post) => void
}

function CreatePost({ createPost }: Props) {
	const [name, setName] = useState<string>()
	const [post, setPost] = useState<string>()
	const [photo, setPhoto] = useState<File | null>()

	const clear = useCallback(() => {
		setName("")
		setPost("")
	}, [])

	return (
		<Container onSubmit={e => {
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
			<label htmlFor="upload-button">
				<AvatarContainer src={photo ? URL.createObjectURL(photo) : undefined} />
			</label>
			<input style={{ display: 'none' }} type='file' id="upload-button" onChange={e => {
				setPhoto(e.target.files?.[0])
			}} accept=".jpg, .jpeg, .png"
			>
			</input>

			<NameInput type="text" placeholder='Digite seu nome'
				value={name}
				required
				onChange={(e) => setName(e.target.value)}
			/>

			<TextInput
				placeholder='Mensagem'
				value={post}
				required
				onChange={e => {
					setPost(e.target.value)
				}}>
			</TextInput>
			<ButtonContainer>
				<Button disabled={(!name?.length && !post?.length)} onClick={(e) => {
					e.preventDefault()
					clear()
				}}>Descartar</Button>
				<Button primary disabled={(!name?.length && !post?.length)} type='submit'>Publicar</Button>
			</ButtonContainer>
		</Container>
	)
}

const Container = styled.form`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
	padding: 32px 12px;
	margin-top: 41px;
	background-color: #313131;
`

const ButtonContainer = styled.div`
	width: 100%;
	margin-top: 32px;
	display: flex;
	flex-direction: row;
	justify-content: end;
	gap: 1px;
`

const Button = styled.button`
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
	background-color: #5f5f5f;
	color: #313131;
	border: none;
	${(props: {
	primary?: boolean
	disabled?: boolean
}) => props?.disabled && props?.primary ? `
		background-color: #5f5f5f;
		color: #313131;`:
			props.primary ? `
		background-color: #71bb00;
		color: #fff;` : `
		background-color: transparent;
		color: #5f5f5f;
		text-decoration: underline;
		`}
`

const NameInput = styled.input`
	width: 100%;
	padding: 12px 16px;
	border-radius: 8px;
	background-color: #494949;
	border: none;
	color: #fff;
`
const TextInput = styled.textarea`
	width: 100%;
	padding: 12px 16px;
	border-radius: 8px;
	background-color: #494949;
	min-height: 48px;
	border: none;
	color: #fff;
`

export default CreatePost