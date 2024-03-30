import styled from "styled-components";


export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem;
  
  @media (min-width: 540px) {
    padding: 0;
  }
`;
