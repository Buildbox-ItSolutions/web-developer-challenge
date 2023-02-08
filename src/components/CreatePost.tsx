
import { useCallback, useState } from 'react'
import imageIcon from '../assets/image.svg'
import styled from 'styled-components'
import { Post } from '../types'
import { AvatarContainer } from './AvatarContainer'

type Props = {
	createPost: (post: Post) => void
}

const Container = styled.form`
	max-width: 516px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
	padding: 32px 24px;
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
	${(props: HTMLButtonElement & {
	primary: boolean
}) => props.disabled && props.primary ? `
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

const ImageUploadContainer = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 88px;
	height: 88px;
	border-radius: 36px;
	border-color: #494949;
	border-style: solid;
	border-width: 1px;
	margin-bottom: 16px;
`


function CreatePost({ createPost }: Props) {
	const [name, setName] = useState<string>()
	const [post, setPost] = useState<string>()
	const [photo, setPhoto] = useState<File>()

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
			<ImageUploadContainer htmlFor="upload-button">
				<AvatarContainer default={!photo} src={photo ? URL.createObjectURL(photo) : imageIcon} />
			</ImageUploadContainer>
			<input style={{ display: 'none' }} type='file' id="upload-button" onChange={e => {
				setPhoto(e.target.files[0])
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
				<Button primary={true} disabled={(!name?.length && !post?.length)} type='submit'>Publicar</Button>
			</ButtonContainer>
		</Container>
	)
}

export default CreatePost