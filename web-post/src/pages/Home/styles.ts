import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  // 15px font-size

  form {
    width: 516px;
    height: 353px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: var(--gray-800);

    @media (max-width: 523px) {
      width: 100%;
    }
    input {
      width: 100%;
      height: 40px;
      padding: 16px;
      background: var(--gray-200);
      color: var(--white-100);
      border-radius: 8px;
      margin: 1rem 0 0.5rem 0;
    }

    textarea {
      width: 100%;
      height: 80px;
      padding: 12px;
      background: var(--gray-200);
      color: var(--white-100);
      resize: none;
      border-radius: 8px;
      overflow-y: none;
    }

    span {
      width: 88px;
      height: 88px;
      border-radius: 36px;
      background: var(--gray-700);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      input {
        display: none;
        visibility: hidden;
      }
    }
  }
`;
export const FormButton = styled.div`
  margin-top: 1rem;
  display: flex;
  margin-left: auto;
  @media (max-width: 250px) {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    margin-left: 0;
    align-items: center;
  }
  button {
    width: 91px;
    height: auto;
    color: var(--gray-200);
    padding: 0.7rem;
    border-radius: 8px;
    background: none;
    transition: color 0.4s;
    transition: background 0.4s;
    &:hover {
      transition: color 0.4s;
      color: var(--gray-150);
    }
    @media (max-width: 250px) {
      width: 100%;
    }

    + button {
      margin-left: 0.5rem;
      background: var(--gray-200);
      color: var(--gray-250);
      @media (max-width: 250px) {
        width: 100%;
        margin-bottom: 0.5rem;
      }

      &:hover {
        transition: background 0.4s;
        color: var(--gray-250);
        background: var(--gray-150);
      }
    }
  }
`;
