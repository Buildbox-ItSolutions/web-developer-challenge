import styled from "styled-components";

export const Container = styled.textarea`
  display: flex;

  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background[400]};
  border: none;

  color: ${({ theme }) => theme.colors.text[100]};

  font-size: 24px;

  margin: 8px 0;

  padding-left: 16px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;

  ::placeholder {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text[200]};
  }
`;
