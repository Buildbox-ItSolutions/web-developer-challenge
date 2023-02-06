import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 22px;
  display: flex;
  align-items: center;

  input[type="file"] {
    display: none;
  }

  img {
    height: 150px;
    width: 150px;
    border: 1px solid ${({ theme }) => theme.colors.text[200]};
    border-radius: 58px;
  }

  label {
    color: ${({ theme }) => theme.colors.text[100]};
    text-transform: uppercase;
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 150px;
      width: 150px;
      border: 1px solid ${({ theme }) => theme.colors.text[200]};
      border-radius: 58px;
    }
  }
`;
