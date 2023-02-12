import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.blackTwo};
  padding: 24px;
`;

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
  padding: 40px;
`;

export const Logo = styled.img`
  margin: 0 auto;
  display: block;
`;
