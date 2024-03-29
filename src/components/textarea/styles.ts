import styled from "styled-components";

export const TextareaContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 8px;
  height: 80px;

  & textarea {
    font-size: 0.875rem;
    background: transparent;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    resize: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
