import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  background: var(--gray-700);
  border: 1px solid var(--gray-500);

  padding: 24px;
  margin-bottom: 8rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    i {
      font-size: 24px;
    }
  }

  label {
    width: 88px;
    height: 88px;
    border: 1px solid var(--gray-500);
    border-radius: 36px;
    margin-bottom: 8px;


    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    overflow: hidden;
  }

  input, textarea {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 8px;
    color: var(--gray-100);
    background: var(--gray-400);
  }
`
export const Actions = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 8px;

  button {
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
  }

  button.out {
    background: none;
    text-decoration: underline;
    color: var(--gray-300);
  }

  button.sub {
    color: var(--gray-100);
    background: var(--green);
  }

  button.sub:disabled {
    color: var(--gray-900);
    background: var(--gray-400);
  }
`
