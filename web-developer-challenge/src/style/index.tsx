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
  width: 100% !important;
  margin: 0 auto;
  background-color: #343434;
  border: 1px solid #5f5f5f;
  margin-top: 40px;
  padding: 20px;
  width: 440px;
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
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export { 
  GlobalStyle,
  PostMain, 
  PostHeader, 
  PostH1,
  PostH2,
  PostContainer, 
  PostImage };