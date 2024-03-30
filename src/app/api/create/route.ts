import { db } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const formData = await req.json()

	const { author, message, image } = formData

	try {
		await db.posts.create({
			data: {
				author,
				message,
				image,
			},
		})

		return NextResponse.json({ message: 'Post criado com sucesso!' }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: 'Erro ao criar o post.' }, { status: 500 })
	}
}
