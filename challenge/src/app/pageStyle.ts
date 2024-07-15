'use client';
import styled from 'styled-components';

export const PageContainer = styled.main`
	padding-top: 145px;
	background: ${({ theme }) => theme.colors.gray700};
	min-height: 100vh;
	padding-bottom: 50px;
	.feed {
		color: ${({ theme }) => theme.colors.gray100};
		max-width: 530px;
		margin: 10px auto;
		margin-top: 35px;
		@media (max-width: 600px) {
			width: 85%;
		}
	}
`;
