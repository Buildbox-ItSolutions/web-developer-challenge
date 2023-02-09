import styled from "styled-components";

export const FormContainer = styled.form`
  height: 22rem;
  width: 32rem;
  border-radius: 0.3rem;

  margin: 2.5rem auto;

  padding: 1.5rem;

  background: var(--color-gray-350);
  border: 2px solid var(--color-gray-200);

  .formContent {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    gap: 0.8rem;

    .buttonContainer {
      height: fit-content;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      margin-top: 1rem;

      > span {
        margin-right: auto;

        color: var(--color-orange);
      }
    }
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;
