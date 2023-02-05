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

  > img {
    width: 103px;
    cursor: pointer;
  }
`;
