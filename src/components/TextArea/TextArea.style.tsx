import styled from 'styled-components';

export const Textarea = styled.textarea`
  background-color: #494949;
  border: none;
  border-radius: 8px;

  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 80px;
  padding: 6px 16px;
  resize: none;
  width: calc(100% - 32px);

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    color: #9f9f9f;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.29;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4b4b4b;
    border: 3px solid #494949;
    border-radius: 20px;
  }
`;
