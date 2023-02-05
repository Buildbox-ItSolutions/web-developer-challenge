import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['gray-700']};

  border-radius: 3px;
  border: 1px solid ${(props) => props.theme['gray-600']};

  padding: 1.5rem;
  margin-bottom: 3.5rem;

  input[name="author"], textarea {
    width: 100%;

    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme.white};

    border-radius: 8px;
    border: 0;

    padding: 0.75rem 1rem;
  }

  input[name="author"] {
    height: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  textarea {
    height: 5rem;
    resize: none;
  }
`

export const ButtonsContainer = styled.footer`
  display: flex;
  align-self: flex-end;

  gap: 0.5rem;
  margin-top: 2rem;

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    line-height: 1.29;
  }

  button[type=reset] {
    background: none;
    color: ${(props) => props.theme['gray-400']};
    text-decoration: underline;
  }

  button[type=submit] {
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    transition: background-color 0.1s;
  
    :not(:disabled):hover {
      background: ${(props) => props.theme['green-300']};
    }
    
    :disabled {
      background: ${(props) => props.theme['gray-400']};
      color: ${(props) => props.theme['gray-700']};
      cursor: not-allowed;
    }
  }
`