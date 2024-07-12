import styled from 'styled-components';
import '../../Styles/App.css';

export const HeaderContainer = styled.header`
  background-color: var(--bg-header);
  display: flex;
  flex-direction: column;
  height: 15vh;
  justify-content: center;
  width: auto;

  @media (min-width: 1536px) {
    height: 10vh;
  }
`;

export const H1 = styled.h1`
  color: var(--highlight-primary);
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: lowercase;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const H3 = styled.h3`
  color: var(--text-foreground);
  font-size: 1.5rem;
  font-weight: 100;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
