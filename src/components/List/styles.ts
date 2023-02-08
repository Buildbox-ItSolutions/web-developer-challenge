import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  height: fit-content;
  width: 32rem;

  margin-top: 1rem;
  margin: 0 auto;

  > span {
    font-size: 0.8rem;
    color: var(--color-gray-125);

    margin-right: auto;
  }

  .listContent {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    height: 100%;
    width: 100%;
  }
`;
