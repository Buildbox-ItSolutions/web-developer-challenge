import styled from "styled-components";

export const InputContainer = styled.div`
  width: 516px;
  max-height: 353px;
  margin: 41px auto;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 516px;
  height: 353px;
  align-items: center;
  justify-content: space-evenly;

  .image-upload {
    width: 88px;
    height: 88px;
    cursor: pointer;
    border-radius: 36px;
    border: 1px solid #4b4b4b;
    position: relative;
  }

  .image-upload img {
    position: absolute;
    object-fit: contain;
    top: 32px;
    right: 32px;
  }

  .image-upload > input {
    display: none;
  }

  .name-input {
    width: 452px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: #494949;
    color: #ffff;
    padding-left: 16px;
  }

  .name-input::placeholder {
    padding-left: 16px;
  }

  .message-input {
    width: 452px;
    height: 80px;
    border-radius: 8px;
    border: none;
    padding-left: 16px;
    color: #ffff;
    background-color: #494949;
    overflow-wrap: break-word;
  }

  .message-input::placeholder {
    padding: 16px;
  }

  .button-container {
    align-self: flex-end;
    margin-right: 24px;
  }

  .button-container a {
    font-size: 14px;
    font-weight: normal;
    color: #5f5f5f;
    text-align: center;
    letter-spacing: normal;
    cursor: pointer;
  }

  .button-container button {
    width: 98px;
    height: 41px;
    border-radius: 8px;
    background-color: #5f5f5f;
    border: none;
    color: #313131;
    margin-left: 24px;
    cursor: pointer;

    &:hover {
      background-color: #71bb00;
      transition: ease-in 0.3s;
    }
  }
`;
