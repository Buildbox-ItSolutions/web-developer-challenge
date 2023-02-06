import styled from 'styled-components';

export const TextArea = styled.textarea`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray['500']};
  width: 100%;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray['200']};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray['200']};
  }
`;

export const Message = styled.span`
  color: red;
  font-size: 1rem;
`;
