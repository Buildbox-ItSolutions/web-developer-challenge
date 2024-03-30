'use client'

import { Controller, useForm } from 'react-hook-form'
import { ReactNode, useEffect, useState } from 'react'
import {
	ButtonWrapper,
	CreatePostSection,
	DeleteIcon,
	FileInputWrapper,
	FormWrapper,
	TextInputWrapper,
} from './CreatePost.Styles/CreatePost.Styles'
import Image from 'next/image'
import imageIcon from '@/assets/icons/image-icon.svg'
import trashIcon from '@/assets/icons/trash-icon.svg'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const fileSize = 4e6
const correctImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

const createImageSchema = z
	.any()
	.refine((file) => file instanceof File, {
		message: 'Por favor adicione uma imagem.',
	})
	.refine((file) => file && correctImageTypes.includes(file.type), {
		message: 'Utilize apenas arquivos .jpg, .jpeg, .png and .webp',
	})
	.refine((file) => file && file.size <= fileSize, {
		message: 'Tamanho máximo 4 MB.',
	})

const createPostSchema = z.object({
	author: z
		.string()
		.min(1, { message: 'Favor inserir seu nome.' })
		.max(30, { message: 'Use no máximo 30 caracteres.' }),
	message: z.string().min(1, { message: 'Favor adicionar uma mensagem.' }),
	image: createImageSchema,
})

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

	function handleInputImageChange(e: React.ChangeEvent<HTMLInputElement>, newValue: Function) {
		const image = e.target.files && e.target.files[0]

		if (image) {
			newValue(image)

			setImagePreview(URL.createObjectURL(image))
		} else {
			setImagePreview(null)
		}
	}

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
			setImagePreview(null)
			reset()

			try {
				const response = await fetch('/api/create', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(updatedData),
				})

				if (response.ok) {
					console.log('Post criado com sucesso!')
				} else {
					throw new Error('Problemas com o servidor.')
				}
			} catch (error) {
				console.error('Erro ao criar o post: ', error)
			}
		}
		reader.readAsDataURL(data.image)
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
				<form method='post' onSubmit={handleSubmit(onSubmit)}>
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
											onChange={(e) =>
												handleInputImageChange(
													e,
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
								size={52}
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
