import styled from "styled-components";

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 8px;

  &:focus-within {
    box-shadow: 0 0 0 1.5px ${({ theme }) => theme.colors.green[500]};
  }

  & input {
    font-size: 0.875rem;
    background: transparent;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
