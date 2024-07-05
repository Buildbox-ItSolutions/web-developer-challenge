import styled from 'styled-components';

export const CardDiv = styled.div`
	background-color: var(--cinzaEscuro);
	border: 1px solid var(--cinza);
	border-radius: 7px;
	column-gap: 25px;
	display: flex;
	padding: 70px 15px 25px 15px;
	position: relative;

	button {
		background: none;
		border: none;
		cursor: pointer;
		margin: 10px 5px;
		position: absolute;
		right: 0;
		top: 0;
	}

	img:nth-child(2) {
		border: 1px solid var(--cinza);
		border-radius: 40%;
		height: 80px;
		object-fit: cover;
		width: 80px;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	p {
		color: #9f9f9f;
		font-size: 1rem;
		margin-bottom: 25px;
		line-height: 1.25;
	}

	small {
		color: #5e5e5e;
		font-size: 0.8rem;
		margin-bottom: 5px;
	}

	span {
		color: #9f9f9f;
		font-size: 0.9rem;
	}
`;
