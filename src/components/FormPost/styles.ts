import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Container = styled.section`
  padding: 24px;
  border: solid 1px #3b3b3b;
  width: 70%;
  max-width: 466px;
  border-radius: 3px;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  -webkit-tap-highlight-color: transparent;

  form {
    display: flex;
    flex-direction: column;
  }

  .Inputfile {
    display: none;
  }

  .ImageUpload {
    width: 88px;
    height: 88px;
    cursor: pointer;
    align-self: center;
    margin-bottom: 16px;
    position: relative;

    .Image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 36px;
      margin-right: 16px;
    }

    .IconRemove {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 32px;
      right: -30px;
    }
  }

  .ImageContainer {
    display: flex;
    align-items: center;
  }

  input,
  textarea {
    font-size: 14px;
    align-self: center;
    width: 100%;
    border-radius: 8px;
    background-color: #494949;
    height: 40px;
    border: none;
    padding-left: 12px;
    ::placeholder {
      color: #9f9f9f;
    }
    outline: none;
    color: #fff;
  }

  textarea {
    height: 80px;
    margin-top: 8px;
    resize: none;
    padding-top: 8px;
  }

  .Buttons {
    margin-top: 34px;
    align-self: flex-end;

    .Clear {
      color: #5f5f5f;
      background-color: transparent;
      border: none;
      cursor: pointer;
      border-bottom: solid 1px #3b3b3b;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? "#71bb00" : "#5f5f5f")};
  border: none;
  color: ${({ active }) => (active ? "#fff" : "#313131")};
  cursor: ${({ active }) => (active ? "pointer" : "initial")};
`;
