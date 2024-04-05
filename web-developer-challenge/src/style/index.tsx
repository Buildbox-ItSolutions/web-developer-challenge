import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #343434;
  }
`;

const PostHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
padding: 0;
background-color: #2b2b2b;
width: 100%;
border-bottom: 1px solid #000;
`;

const PostMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #343434;
  border: 1px solid #5f5f5f;
  margin-top: 40px;
  padding: 20px;
  width: 440px;
  border-radius: 2px;
`;

const PostH1 = styled.h1`
  display: flex;
  font-size: 40px;
  color: #71bb00;
  margin: 0 !important;
`;

const PostH2 = styled.h2`
  display: flex;
  font-size: 16px;
  color: #5f5f5f;
  margin: 0 !important;
`;

const PostContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 30px;
  overflow: hidden
  background-color: #343434;
  border: 1px solid #5f5f5f;
`;

const InputImage = styled.input`
  display: none;
`;

const NameInput = styled.input`
  background-color: #494949;
  padding: 10px;
  width: 90%;
  border: 1px solid #5f5f5f;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const MessageInput = styled.input`
  background-color: #494949;
  padding: 10px;
  width: 90%;
  height: 100px;
  border: 1px solid #5f5f5f;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ButtonInput = styled.button`
  display: flex;
  flex-direction: row;
  align-items: right;
  background-color: #494949;
  padding: 10px;
  width: 25%; 
  border: 1px solid #5f5f5f;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #343434;
`; 

export { 
  GlobalStyle,
  PostMain, 
  PostHeader, 
  PostH1,
  PostH2,
  PostContainer, 
  PostImage,
  DivImage,
  InputImage,
  NameInput,
  MessageInput,
  ButtonInput,
 };