import styled from "styled-components";


// TODO variaveis de cores

export const Container = styled.nav`
  position: sticky;
  height: 93px;
  background-color: #2b2b2b;
  box-sizing: border-box;
  padding: 24px 0;
  a {
    text-decoration: none;
  }
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const LogoWrapper = styled.div`
  width: 103px;
  height: 45px;
  margin: 0 auto;
  text-align: center;
`;

export const LogoLink = styled.a`
  display: flex;
  flex-direction: column;
`

export const Logo = styled.span`
  font-family: 'SFProDisplay';
  font-size: 24px;
  font-weight: 900;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #71bb00
`;

export const SubLogo = styled.span`
  font-family: 'SFProDisplay-Light';
  font-size: 12px;
  font-weight: 300;
  color: #707070
`;