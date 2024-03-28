import styled from "styled-components";

interface IButton {
  content: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ content = "Button", className, onClick }: IButton) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  width: 9.8rem;
  height: 4.1rem;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 0.8rem;
  background-color: var(--primary-color);
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  color: var(--white-color);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--button-hover-color);
  }
`;

export { Button };
