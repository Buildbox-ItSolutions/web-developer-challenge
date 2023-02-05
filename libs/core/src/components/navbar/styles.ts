import styled from 'styled-components';

export const NavbarStyled = styled.header`
  width: 100%;
  height: 80px;

  background: ${({ theme }) => theme.foregroundColorUp};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  position: fixed;

  top: 0px;
  right: 0px;

  > img {
    width: 103px;
    cursor: pointer;
  }
`;
