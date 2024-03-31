import { z } from "zod"

const fileSize = 3 * 1024 * 1024
const correctImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const createImageSchema = z
	.any()
	.refine((file) => file instanceof File, {
		message: 'Por favor adicione uma imagem.',
	})
	.refine((file) => file && correctImageTypes.includes(file.type), {
		message: 'Utilize apenas arquivos .jpg, .jpeg, .png and .webp',
	})
	.refine((file) => file && file.size <= fileSize, {
		message: 'Tamanho máximo 3 MB.',
	})

export const createPostSchema = z.object({
	author: z
		.string()
		.min(1, { message: 'Favor inserir seu nome.' })
		.max(30, { message: 'Use no máximo 30 caracteres.' }),
	message: z.string().min(1, { message: 'Favor adicionar uma mensagem.' }),
	image: createImageSchema,
})
