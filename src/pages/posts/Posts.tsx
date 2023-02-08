import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import validator from 'validator'
import PostsTemplate from '../../components/templates/posts/PostsTemplate'
import { CardInfo } from '../../components/molecules/card-post/CardPost'
import { v4 } from 'uuid'

type Fields = {
	fieldImage: string
	fieldName: string
	fieldMessage: string
}

export default function Posts() {
	const [disableButton, setDisableButtons] = useState<boolean>(true)
	const [posts, setPosts] = useState<CardInfo[]>([])
	const [fields, setFields] = useState<Fields>(
		{
			fieldImage: '',
			fieldMessage: '',
			fieldName: '',
		}
	)

	const handleChangeFields = (prop: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [prop]: event.target.value })
	}

	const handleFieldsIsEmpty = useCallback(() => {
		if (!validator.isEmpty(fields.fieldMessage) && !validator.isEmpty(fields.fieldName) && !validator.isEmpty(fields.fieldImage)
			&& (validator.trim(fields.fieldName) && validator.trim(fields.fieldMessage))) {

			setDisableButtons(false)
			return
		}
		setDisableButtons(true)
	}, [fields])

	

	const handleCleanFields = () => {
		setFields({
			fieldImage: '',
			fieldMessage: '',
			fieldName: '',
		})
	}

	const handleRemoveImage = () => {
		setFields({ ...fields, fieldImage: '' })
	}

	const handleDeletePost = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {

		let postsFiltered = posts.filter((post: CardInfo) => {
			if (post.id !== currentTarget.id) {
				return post
			}
		})
		setPosts(postsFiltered)
	}

	const handleSavePost = () => {
		setPosts([{ id: v4(), image: fields.fieldImage, message: fields.fieldMessage, user: fields.fieldName },...posts])
		handleCleanFields()
	}

	const handleFile = (event: ChangeEvent<HTMLInputElement> | (React.SyntheticEvent & { currentTarget: HTMLInputElement })) => {

		let { currentTarget } = event
		const img: File = currentTarget.files![0]
		currentTarget.value = ''
		let reader = new FileReader()
		reader.readAsDataURL(img)
		reader.onload = function (event) {
			let img64 = event.target!.result;

			let image = new Image();

			if (typeof img64 === 'string') {
				image.src = img64;
			}

			image.onload = onloadImage;

			function onloadImage() {
				setFields({ ...fields, fieldImage: image.src })
			}
		}
	}


	useEffect(() => {
		handleFieldsIsEmpty()
	}, [fields])

	useEffect(() => {
		console.log(posts)
	}, [posts])


	return (
		<PostsTemplate
			posts={posts}

			onUploadAvatar={handleFile}

			removeImageOnclick={handleRemoveImage}

			onClickDeleteIcon={handleDeletePost}

			fieldImage={fields.fieldImage}

			fieldName={{
				value: fields.fieldName,
				onChange: handleChangeFields('fieldName')
			}}

			fieldMessage={{
				value: fields.fieldMessage,
				onChange: handleChangeFields('fieldMessage')
			}}

			buttonDiscard={{
				disabled: disableButton,
				onClick: handleCleanFields
			}}

			buttonPublish={{
				disabled: disableButton,
				onClick: handleSavePost
			}}
		/>
	)
}
