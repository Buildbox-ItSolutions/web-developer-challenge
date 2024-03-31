import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
    width: 100%;
    align-items: center;
  }
`;
