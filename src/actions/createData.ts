'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface createDataProps {
	author: string
	message: string
	image: string
}

export async function createData({ author, message, image }: createDataProps) {
	try {
		await db.posts.create({
			data: {
				author,
				message,
				image,
			},
		})
		revalidatePath('/')

		return { message: 'Post criado com sucesso!', status: 200 }
	} catch (error) {
		return { message: 'Falha ao criar o post!', status: 500 }
	}
}
