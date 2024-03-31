'use client'

import Image from 'next/image'
import {
	PostWrapper,
	PostCards,
	Posts,
	PostInfo,
	PostImage,
	DeleteButton,
	DeleteButtonWrapper,
} from './FeedCard.Styles'
import deleteIcon from '@/assets/icons/delete-icon.svg'
import { removeData } from '@/actions/removeData'

interface feedCardProps {
	posts: {
		id: string
		author: string
		message: string
		image: string
	}[]
}

export const FeedCard = ({ posts }: feedCardProps) => {
	const handlePostDelete = async (postId: string) => {
		try {
			await removeData(postId)
		} catch (error) {
			throw new Error('Erro ao tentar solicitar a remoção do o post.')
		}
	}

	return (
		<PostWrapper>
			{posts.map((post) => {
				return (
					<PostCards key={post.id}>
						<DeleteButtonWrapper onClick={() => handlePostDelete(post.id)}>
							<DeleteButton>
								<Image
									src={deleteIcon}
									alt={'Apagar post'}
									width={20}
									height={20}
								/>
							</DeleteButton>
						</DeleteButtonWrapper>

						<Posts>
							<PostImage>
								<Image
									src={post.image}
									alt={`Imagem do post de ${post.author}`}
									fill
									style={{ objectFit: 'cover' }}
								/>
							</PostImage>
							<PostInfo>
								<p>{post.message}</p>
								<div>
									<p>Enviado por</p>
									<p>{post.author}</p>
								</div>
							</PostInfo>
						</Posts>
					</PostCards>
				)
			})}
		</PostWrapper>
	)
}
