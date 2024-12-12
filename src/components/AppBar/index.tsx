import styled from 'styled-components';

import logo from '../../assets/bx-logo.svg';

export const StyledAppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.gray[ 600 ]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[ 800 ]};
`;

export const StyledLogo = styled.img`
  width: 103px;
  height: 45px;
`;

export const AppBar = () => {
  return (
    <StyledAppBar>
      <StyledLogo
        src={ logo }
      />
    </StyledAppBar>
  );
};
