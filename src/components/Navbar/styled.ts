import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0px;
  width: 100%;
  height: 60px;
  background-color: #212121;
  color: #fff;
`;

const NavbarText = styled.span`
  font-size: 20px;
  color: green;
  font-weight: 900;
  letter-spacing: -0.06rem;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #c1c1c1;
`;

export { NavbarContainer, NavbarText, Subtitle };
