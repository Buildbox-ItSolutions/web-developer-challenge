import styled from 'styled-components';
import '../../Styles/App.css';

export const FormContainer = styled.form`
  align-items: center;
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: start;
  padding: 4rem 0;
`;

export const InputContainer = styled.section`
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 90vw;

    @media (min-width: 1024px) {
      gap: 1.5rem;
      width: 60vw;
    }
`;

export const InputFile = styled.input`
  display: none;
`;

export const Input = styled.input`
  background-color: var(--bg-input);
  border: none;
  border-radius: 0.7rem;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1.8rem;
  height: 4rem;
  padding: 0 1.3rem;

    &::placeholder {
      color: var(--text-placeholder);
      font-size: 1.8rem;
    }

    &:focus {
      outline: 1px solid var(--highlight-primary);
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;

      &::placeholder {
        font-size: 1.5rem;
      }
    }
`;

export const TextArea = styled.textarea`
  background-color: var(--bg-input);
  border: none;
  border-radius: 0.7rem;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1.8rem;
  padding: 1.3rem;
  resize: none;

    &::placeholder {
      color: var(--text-placeholder);
      font-size: 1.8rem;
    }

    &:focus {
      outline: 1px solid var(--highlight-primary);
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
`;

export const BtnContainer = styled.section`
  display: flex;
  gap: 3rem;
  justify-content: end;
  margin-top: 2rem;
`;

export const BtnSubmit = styled.button`
  background-color: var(--highlight-primary);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1.7rem 2.5rem;

    &:hover {
      background-color: var(--highlight-secondary);
    }

    &:active {
      transform: scale(0.95);
    }
    
    &:disabled {
      background-color: var(--text-foreground);
      cursor: not-allowed;
    }
`

export const BtnDiscard = styled.button`
  background-color: transparent;
  border: none;
  color: var(--text-foreground);
  cursor: pointer;
  font-size: 1.6rem;
  text-decoration: underline;

    &:hover {
      color: var(--text-primary);
    }

    &:active {
      transform: scale(0.95);
    }
`