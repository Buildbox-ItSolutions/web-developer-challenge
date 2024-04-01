import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-block: 2.4rem;
  background-color: ${({ theme }) => theme.colors.header.background};

  border-bottom: 1px solid ${({ theme }) => theme.colors.header.border};
`;
