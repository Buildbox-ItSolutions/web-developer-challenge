import styled, { css } from "styled-components";

interface IContainer {
  isActive: boolean;
}

export const Container = styled.form<IContainer>`
  margin-top: 12rem;
  padding: 2rem;
  width: 500px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-900);
  box-shadow: 0 0 0.035rem white;

  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
    justify-content: space-between;
  }

  label {
    width: 90px;
    height: 90px;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1.5px solid var(--gray-600);
    cursor: pointer;

    input {
      display: none;
    }
  }

  input {
    margin-top: 0.7rem;
    width: 100%;
    height: 40px;
    padding: 0.25rem;
    border: 0;
    color: var(--white);
    padding-left: 10px;
    background-color: var(--gray-600);
    border-radius: 0.25rem;
  }

  textarea {
    margin-top: 0.7rem;
    width: 100%;
    height: 75px;
    padding: 0.25rem;
    border: 0;
    color: var(--white);
    padding-left: 10px;
    background-color: var(--gray-600);
    border-radius: 0.25rem;
    resize: none;
  }

  div {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      border: 0;
    }

    .discard {
      color: var(--gray-700);
      text-decoration: underline;
      background-color: transparent;
      cursor: pointer;
    }

    .send {
      margin-left: 2rem;
      padding: 0.5rem;
      border-radius: 0.25rem;
      width: 90px;
      ${({ isActive }) =>
        isActive === true
          ? css`
              background-color: var(--green-600);
              color: var(--white);
            `
          : css`
              background-color: var(--gray-500);
              color: var(--gray-900);
            `}
    }
  }
`;

export const Image = styled.img`
  height: 25px;
`;
export const SelectedImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 35px;
`;
