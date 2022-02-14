import styled from "styled-components";

const Container = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const NameInput = styled.input `
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #494949;
  padding: 0 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #9f9f9f;
  box-sizing: border-box;
`;

const MessageInput = styled.textarea `
  width: 100%;
  height: 80px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #494949;
  padding: 12px 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #9f9f9f;
  margin-top: 8px;
  box-sizing: border-box;
  resize: none;
`;

export {
  Container,
  NameInput,
  MessageInput,
};