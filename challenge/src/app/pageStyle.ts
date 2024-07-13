'use client';
import styled from 'styled-components';

export const PageContainer = styled.main`
	padding-top: 35px;
	background: ${({ theme }) => theme.colors.gray700};
	min-height: 86vh;
	.feed {
		color: ${({ theme }) => theme.colors.gray100};
		width: 540px;
		margin: 10px auto;
		margin-top: 35px;
		
	}
`;
