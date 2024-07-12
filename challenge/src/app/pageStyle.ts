'use client';
import styled from 'styled-components';

export const PageContainer = styled.main`
	padding-top: 35px;

	background: ${({ theme }) => theme.colors.gray700};
	min-height: 86vh;
`;
