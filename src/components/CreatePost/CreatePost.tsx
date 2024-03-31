'use client'

import { Controller, useForm } from 'react-hook-form'
import { ReactNode, useEffect, useState } from 'react'
import { CreatePostSection, FormWrapper } from './CreatePost.Styles/CreatePost.Styles'
import { DeleteIcon, FileInputWrapper, TextInputWrapper } from './CreatePost.Styles/CreatePostInputs.Styles'
import Image from 'next/image'
import imageIcon from '@/assets/icons/image-icon.svg'
import trashIcon from '@/assets/icons/trash-icon.svg'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createData } from '@/actions/createData'
import { ButtonWrapper } from './CreatePost.Styles/CreatePostButton.Styles'
import { createPostSchema } from '@/lib/formSchema'

export const CreatePost = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		reset,
		resetField,
		control,
		formState: { errors, isValid },
	} = useForm<z.infer<typeof createPostSchema>>({ resolver: zodResolver(createPostSchema), mode: 'onChange' })

	useEffect(() => {
		return () => {
			if (imagePreview) {
				URL.revokeObjectURL(imagePreview)
			}
		}
	}, [imagePreview])

	const onSubmit = (data: z.infer<typeof createPostSchema>) => {
		const reader = new FileReader()

		reader.onloadend = async () => {
			const updatedData = {
				...data,
				image: reader.result as string,
			}

			if (imagePreview) {
				URL.revokeObjectURL(imagePreview)
			}

			try {
				const response = await createData(updatedData)

				if (response.status !== 200) {
					console.log(response.message)
				}

				setImagePreview(null)
				reset()
			} catch (error) {
				throw new Error('Erro ao criar o post: ' + error)
			}
		}
		reader.readAsDataURL(data.image)
	}

	function handleInputImageChange(event: React.ChangeEvent<HTMLInputElement>, newValue: Function) {
		const image = event.target.files && event.target.files[0]

		if (image) {
			newValue(image)

			setImagePreview(URL.createObjectURL(image))
		} else {
			setImagePreview(null)
		}
	}

	const handleRemoveImagePreview = () => {
		if (imagePreview) {
			URL.revokeObjectURL(imagePreview)
		}
		setImagePreview(null)
		resetField('image')
	}

	const handleResetForm = () => {
		if (imagePreview) {
			URL.revokeObjectURL(imagePreview)
		}

		setImagePreview(null)
		reset()
	}

	return (
		<CreatePostSection>
			<FormWrapper>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FileInputWrapper>
						<div>
							<label>
								<Controller
									name='image'
									control={control}
									render={({ field }) => (
										<input
											type='file'
											accept='image/*'
											onChange={(event) =>
												handleInputImageChange(
													event,
													field.onChange
												)
											}
										/>
									)}
								/>

								{!imagePreview ? (
									<Image
										src={imageIcon}
										alt={'Envie sua imagem'}
										width={24}
										height={24}
									/>
								) : (
									<Image
										src={imagePreview}
										alt={'Preview da imagem'}
										fill
										style={{ objectFit: 'cover' }}
									/>
								)}
							</label>
						</div>

						{imagePreview && (
							<DeleteIcon type='button'>
								<Image
									src={trashIcon}
									alt='Remover imagem'
									onClick={handleRemoveImagePreview}
								/>
							</DeleteIcon>
						)}

						{errors.image && <p>{errors.image.message as ReactNode}</p>}
					</FileInputWrapper>

					<TextInputWrapper>
						<div>
							<input
								type='text'
								placeholder='Digite seu nome'
								maxLength={30}
								size={59}
								{...register('author')}
							/>
							{errors.author && <p>{errors.author.message}</p>}
						</div>
						<div>
							<textarea placeholder='Mensagem' {...register('message')} />
							{errors.message && <p>{errors.message.message}</p>}
						</div>
					</TextInputWrapper>
					<ButtonWrapper>
						<button type='button' onClick={handleResetForm}>
							Descartar
						</button>
						<button disabled={!isValid}>Publicar</button>
					</ButtonWrapper>
				</form>
			</FormWrapper>
		</CreatePostSection>
	)
}
