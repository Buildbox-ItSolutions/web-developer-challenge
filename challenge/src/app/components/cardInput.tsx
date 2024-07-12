'use client';
import styled from 'styled-components';

export const CardInput = () => {
	return (
		<CardInputContainer>
			<input type="text" placeholder='Digite seu nome' />
			<textarea placeholder='Mensagem' />
			<div>
				<button className='descartar'>Descartar</button>
				<button className='publicar'>Publicar</button>
			</div>
		</CardInputContainer>
	);
};
export const CardInputContainer = styled.div`
background:  ${({ theme }) => theme.colors.gray900};
	margin: 0 auto;
	margin-top: 55px;
	width: 700px;
	height: 350px;
	border-radius: 6px;
	border: ${({ theme }) => theme.colors.gray600} solid 2px;
	input{
		border-radius: 8px;
		color: ${({ theme }) => theme.colors.gray100};
		background: ${({ theme }) => theme.colors.gray600};
	}
	textarea{
		border-radius: 8px;
		color: ${({ theme }) => theme.colors.gray100};
		background: ${({ theme }) => theme.colors.gray600};
	}
	button{
		padding: 15px;
		border-radius: 12px;
	}
	.descartar{
		background: transparent;
		color:  ${({ theme }) => theme.colors.gray600};
	}
	.publicar{
		background:  ${({ theme }) => theme.colors.gray600};
		color:  ${({ theme }) => theme.colors.gray900};
	}
	div{
		display: flex;
		justify-content: end;
		gap: 2rem;
	}
`;
