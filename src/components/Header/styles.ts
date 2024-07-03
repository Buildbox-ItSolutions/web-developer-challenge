import styled from 'styled-components';

export const AppHeader = styled.header`
	align-items: center;
	background-color: var(--headerBg);
	display: flex;
	flex-direction: column;
	font-family: 'Poppins';
	padding: 25px 0;
	row-gap: 5px;

	h1 {
		color: #71bb00;
		font-size: 1.75rem;
		font-weight: 800;
	}

	span {
		text-transform: uppercase;
		color: var(--cinza);
		font-weight: 500;
	}
`;
