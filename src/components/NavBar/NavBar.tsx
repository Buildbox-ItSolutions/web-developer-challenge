import styled from "styled-components";

const Title = styled.h1`
  color: var(--lime-green);
  font-size: 24px;
  font-weight: 800;
`

const Subtitle = styled.h3`
  color: var(--grey-4);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 200;
`

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black-1);
  padding: 24px 0;
`

const NavBar = () => {
  return (  
    <StyledNav>
      <Title>
        buildbox
      </Title>
      <Subtitle>
        web challenge
      </Subtitle>
    </StyledNav>
  );
}
 
export default NavBar;