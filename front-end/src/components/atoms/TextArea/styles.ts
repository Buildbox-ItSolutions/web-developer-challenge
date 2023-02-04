import styled from 'styled-components';

export const TextArea = styled.textarea`
  border: none;
  width: 100%;
  height: 12rem;
  padding: 1.2rem 1.6rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  resize: none;
  outline: none;
  font-family: 'Roboto';
  line-height: 1.8rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

`