'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function removeData(postId: string) {
	try {
		await db.posts.delete({ where: { id: postId } })
		revalidatePath('/')

		return { status: 200, message: 'Post removido com sucesso' }
	} catch (error) {
		return { status: 500, message: 'Erro ao tentar remover o post' }
	}
}
