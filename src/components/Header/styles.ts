import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5.8rem;
  width: 100%;

  padding: 1.5rem;

  background: var(--color-gray-500);

  .headerContent {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;

    > h1 {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--color-green);
    }

    > span {
      font-size: 0.8rem;
      font-weight: 300;
      text-transform: uppercase;
      color: var(--color-gray-50);
    }
  }
`;
