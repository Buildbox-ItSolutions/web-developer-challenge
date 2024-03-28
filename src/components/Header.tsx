import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledH1>buildbox</StyledH1>
      <StyledH2>WEB CHALLENGE</StyledH2>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: var(--header-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 9.3rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const StyledH1 = styled.h1`
  color: var(--primary-color);
  font-size: 2.4rem;
  font-family: "Sequel Sans", sans-serif;
  font-weight: 900;
`;

const StyledH2 = styled.h2`
  color: var(--warm-gray);
  font-size: 1.2rem;
  font-family: "SFProDisplay", sans-serif;
  font-weight: 300;
`;

export { Header };
