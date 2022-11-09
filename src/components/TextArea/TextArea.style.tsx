import styled from 'styled-components'

export const Textarea = styled.textarea`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;

  width: calc(100% - 32px);
  height: 80px;
  resize: none;
  background-color: #494949;
  border: none;
  border-radius: 8px;
  padding: 6px 16px;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #9f9f9f;
    line-height: 1.29;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #313131;
    border-radius: 20px;
    border: 3px solid #494949;
  }
`
