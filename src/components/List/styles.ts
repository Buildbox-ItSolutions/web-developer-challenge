import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  height: fit-content;
  width: 32rem;

  margin-top: 1rem;
  margin: 0 auto;

  padding-bottom: 2rem;

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

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const PaginatedListContainer = styled.div`
  .paginated {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.6rem;

    list-style: none;
    margin: 0 auto;

    color: var(--color-gray-125);

    .button {
      cursor: pointer;

      padding: 0.5rem;
    }

    .active {
      color: var(--color-gray-100);
    }
  }
`;
