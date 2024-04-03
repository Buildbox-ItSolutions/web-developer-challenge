import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: none;
  transition: all 0.2s;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  object-fit: contain;
  font-size: 1.4rem;

  background-color: ${({ theme }) => theme.colors.btn};
  cursor: ${(props) => (props.className === "active" ? "pointer" : "initial")};

  color: ${(props) =>
    ({ theme }) =>
      props.className === "active" ? theme.colors.white : theme.colors.gray};

  background-color: ${(props) =>
    ({ theme }) =>
      props.className === "active"
        ? theme.colors.btn_active
        : theme.colors.btn};

  :hover {
    opacity: ${(props) => (props.className === "active" ? 0.8 : "")};
  }

  @media (max-width: 48em) {
    font-size: 2rem;
  }
`;
