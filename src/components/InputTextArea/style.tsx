import styled from 'styled-components'

export const InputTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 16px 12px;
  border-radius: 8px;
  resize: none;
  outline: 0;
  background: #494949;

  &::placeholder {
    color: #9f9f9f;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: var(--black-three);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 40px;
    cursor: pointer;
  }
`
