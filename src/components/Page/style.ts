import styled from "styled-components";

export const PageContainer = styled.div`
	padding: 10rem 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.base.spacing.large};

	@media (min-width: 768px) {
		padding: 10rem 2rem;
	}

	@media (min-width: 1024px) {
		padding: 10rem 40rem;
	}
`;
