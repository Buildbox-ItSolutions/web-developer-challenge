import styled from 'styled-components'
import { tabblet } from '../Styles'
import { Post } from '../types'
import { AvatarContainer } from './AvatarContainer'
import DeleteButton from './DeleteButton'

type Props = Post & {
	removePost: (post: Post) => void
}

function PostItem({
	author,
	id,
	text,
	removePost
}: Props) {
	return (
		<Container>
			<PostContainer>
				<AvatarContainer src={author.image} />
				<ContentContainer>
					<Article>
						{text}
					</Article>
					<AutorLabel>
						<p>Enviado por</p>
						<AuthorName>{author.name}</AuthorName>
					</AutorLabel>
				</ContentContainer>
			</PostContainer>
			<DeleteButton onClick={() => {
				removePost({
					id,
					author,
					text
				})
			}} />
		</Container>
	)
}

export default PostItem

const Container = styled.div`
  background-color: #313131;
	padding-left: 24px;
	padding-right: 12px;
	padding-top: 12px;
	padding-bottom: 32px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const PostContainer = styled.div`
	margin-top: 44px;
	display: flex;
	${tabblet`	
		flex-direction: row;
		padding-right: 24px;
	`}

	flex-direction: column;
	word-break: break-all;

`

const ContentContainer = styled.div`
	display: flex;
	${tabblet`
			padding-left: 32px;
	`}
	flex-direction: column;
	gap: 24px;

`

const Article = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`

const AutorLabel = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
`

const AuthorName = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`