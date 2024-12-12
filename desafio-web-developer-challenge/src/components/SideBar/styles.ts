import styled, { css } from "styled-components";

interface ButtonProps {
  isEnabled: boolean;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  input {
    background: ${(props) => props.theme["--gray-600"]};
    border: 1px solid ${(props) => props.theme["--gray-200"]};
    margin: 1rem 0 0.5rem;
    padding: 0.75rem 0.75rem 0.688rem 1rem;

    border-radius: 8px;

    color: ${(props) => props.theme["--white-100"]};
  }

  textarea {
    background: ${(props) => props.theme["--gray-600"]};
    border: 1px solid ${(props) => props.theme["--gray-200"]};
    margin: 0.5rem 0 2rem;
    padding: 0.75rem 0.75rem 3.188rem 1rem;

    border-radius: 8px;

    color: ${(props) => props.theme["--white-100"]};

    font-family: 'Roboto', sans-serif;
  }

`;

export const Footer = styled.footer`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.5rem;

    a {
      color: ${(props) => props.theme["--gray-400"]};
      font-size: 0.875rem;
    }
`;

export const Button = styled.button<ButtonProps>`
  margin: 0 0 0 1.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;

  background-color: ${(props) => props.theme["--gray-400"]};
  cursor: not-allowed;

  ${(props: ButtonProps) =>
    props.isEnabled &&
    css`
      background-color: ${(props) => props.theme["--green-300"]};
    `}

    cursor: pointer;
`;

export const ContainerImage = styled.div`
  margin: 0;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["--red-300"]};
  }
`