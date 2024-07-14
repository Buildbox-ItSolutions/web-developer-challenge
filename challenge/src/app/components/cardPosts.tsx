import { SlClose } from 'react-icons/sl';
import styled from 'styled-components';

interface CardPostProps {
	name: string | null;
	message: string;
	photo: string;
	id: string;
	onRemove: (id: string) => void;
}

export const CardPosts = ({ photo, message, name, id, onRemove }: CardPostProps) => {
	const handleRemoveClick = () => {
		onRemove(id);
	};

	return (
		<CardPostContainer>
			<SlClose className='close' size={22} onClick={handleRemoveClick} />
			<div className='mt'>
				<img src={photo} alt="Selected" className='imagemState' />
				<div className='textContainer'>
					<div className='text'>{message}</div>
					<div className='describ'>
						<p>Enviado por</p>
						<span>{name}</span>
					</div>
				</div>
			</div>
		</CardPostContainer>
	);
};

const CardPostContainer = styled.div`
	background:  ${({ theme }) => theme.colors.gray600};
	border: ${({ theme }) => theme.colors.gray750} 0.1px solid;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 540px;
	min-height: 250px;
	border-radius: 6px;
	padding: 15px;
	position: relative;

	@media (max-width:600px) {
		width:90%;

	}
	.close{
		position: absolute;
		color: ${({ theme }) => theme.colors.red};
		top: 15px;
		right: 15px;
		cursor: pointer;  // Adiciona cursor de ponteiro para indicar que é clicável
	}
	img{
		border: solid 1px ${({ theme }) => theme.colors.gray200};
		height: 100px;
		width: 100px;
		border-radius: 35px
	}
	.textContainer{
		height: 100%;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		width: 70%;
		gap: 2rem;
		min-height: 180px;
	}
	.mt{
		margin-top: 55px;
		display:flex;
		width: 100%;
		height: 100%;
		min-height: 200px;
		justify-content: space-around;
	}
	p{
		color: ${({ theme }) => theme.colors.gray300};
		font-size: 0.7rem;
	}
	span{
		color: ${({ theme }) => theme.colors.gray200};
		font-size: 0.8rem;
	}
	.text{
		color: ${({ theme }) => theme.colors.gray100};
		font-size: 1rem;
	}
`;
