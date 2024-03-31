import { db } from '@/lib/prisma'
import { FeedSection, FeedWrapper, TitleWrapper } from './Feed.Styles'
import { FeedCard } from './FeedCard/FeedCard'

export const Feed = async () => {
	const posts = await db.posts.findMany({
		select: {
			id: true,
			author: true,
			message: true,
			image: true,
		},
		orderBy: {
			id: 'desc',
		},
	})

	return (
		<FeedSection>
			<FeedWrapper>
				<TitleWrapper>
					<h2>feed</h2>
				</TitleWrapper>

				<FeedCard posts={posts} />
			</FeedWrapper>
		</FeedSection>
	)
}
