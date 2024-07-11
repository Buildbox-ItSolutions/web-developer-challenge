import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  underline?:boolean
}

const ContainerWrapper = styled.div`
  background-color: #343434;
  height: 100vh;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #343434;
`;

const PostForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  gap: 12px;
  background-color: #313131;
  border: 0.5px solid #3B3B3B;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 768px) {
  
  max-width: 80%; 

}
`;

const ButtonRow = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 8px;
  padding: 8px;
`;

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || '#404040'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
  padding: 8px 16px;
  
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}
`;

const PostListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px; 

  p {
    color: #717171;
  }
`;


export { ContainerWrapper, AppContainer, PostForm, ButtonRow, Button,PostListContainer}