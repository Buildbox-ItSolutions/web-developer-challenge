import deleteIcon from '../../assets/images/delete.svg';
import styled from 'styled-components';

const StylizedPost = styled.article`
	align-items: center;
	background-color: #313131;
	border-radius: 3px;
	border: solid 1px #3b3b3b;
	display: flex;
	justify-content: space-between;
	height: 225px;
	margin-bottom: 8px;
	padding: 12px;
	width: 516px;
`;

const StylizedImage = styled.img`
	border-radius: 36px;
	height: 88px;
	object-fit: contain;
	width: 88px;
`;

const StylizedInfo = styled.section`
	display: flex;
	flex-direction: column;
`;

const StylizedMessage = styled.p`
	color: #9f9f9f;
	height: 80px;
	font-family: 'roboto', 'sans-serif';
	font-size: 16px;
	font-stretch: normal;
	font-style: normal;
	font-weight: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	width: 348px;
`;

const StylizedAuthorContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	margin-top: 24px;
`;

const StylizedSendedBy = styled.span`
	color: #5f5f5f;
	height: 14px;
	font-family: 'roboto', 'sans-serif';
	font-size: 12px;
	font-stretch: normal;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 0.29px;
	line-height: 1.33;
	margin: 2px;
	text-align: left;
	width: 80px;
`;

const StylizedAuthor = styled.span`
	color: #7a7a7a;
	height: 17px;
	font-family: 'roboto', 'sans-serif';
	font-size: 14px;
	font-stretch: normal;
	font-style: normal;
	font-weight: normal;
	letter-spacing: normal;
	line-height: 1.29;
	margin: 2px;
	text-align: left;
	width: 118px;
`;

const StylizedButton = styled.img`
	align-self: flex-start;
	cursor: pointer;
	height: 20px;
	object-fit: contain;
	width: 20px;
`;

interface PostProps {
	image: string;
	message: string;
	author: string;
	uuid: string;
	handleClick: () => void;
}

function Post({ image, author, message, handleClick }: PostProps) {
	return (
		<StylizedPost>
			<StylizedImage src={image} data-testid="image-post" />
			<StylizedInfo>
				<StylizedMessage data-testid="message-post">{message}</StylizedMessage>
				<StylizedAuthorContainer>
					<StylizedSendedBy>Enviado por</StylizedSendedBy>
					<StylizedAuthor data-testid="author-post">{author}</StylizedAuthor>
				</StylizedAuthorContainer>
			</StylizedInfo>
			<StylizedButton
				src={deleteIcon}
				data-testid="delete-button"
				alt="red X surrounded by a red circle"
				onClick={handleClick}
			/>
		</StylizedPost>
	);
}

export default Post;
