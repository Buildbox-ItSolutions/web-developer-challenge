import styled from "styled-components";

const Button = styled.button<{ $ghost?: boolean }>`
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${(props) => (props.$ghost ? "transparent" : "#71bb00")};
  color: ${(props) => (props.$ghost ? "#5f5f5f" : "#fff")};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  text-decoration: ${(props) => (props.$ghost ? "underline" : "none")};

  &:hover {
    background-color: ${(props) => (props.$ghost ? "#ffffff44" : "#71bb00cc")};
    ${(props) => props.$ghost && "color: #fff;"}
  }
`;

export default Button;
