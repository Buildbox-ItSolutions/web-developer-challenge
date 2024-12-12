import styled from "styled-components";
import { isPropertySignature } from "typescript";

interface PropsButton {
  backgroundColor: string;
  color: string;
  textDecoration?: string;
}

export const ContainerFormPost = styled.section`
  display: flex;
  justify-content: center;
  width: 100%; 
  padding-left: 30px; 
  padding-right: 30px;
`;

export const GridFormPost = styled.div`
  background-color: #313131;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px #3b3b3b;
  border-radius: 3px;
  max-width: 516px;
  width: 100%;
  height: 353px;
  margin-top: 40px;
`;

export const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextareaPost = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  padding: 12px;
  outline: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  margin-bottom: 32px;
  resize: none;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const InputPost = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  padding: 12px;
  outline: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  margin-bottom: 8px;
`;

export const ImgPostForm = styled.img`
  object-fit: cover;  
  height: 88px; 
  width:  88px; 
  border-radius: 36px;
`; 


export const RemoveImgForm = styled.img``;

export const GridButtonsPost = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonsPost = styled.button<PropsButton>`
  width: 98px;
  height: 41px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: ${(props: PropsButton) => props.backgroundColor};
  color: ${(props: PropsButton) => props.color};
  text-decoration: ${(props: PropsButton) =>
    props.textDecoration ? props.textDecoration : "none"};
`;

export const GridImgPost = styled.div`
  position: relative;
  height: 88px;
  width: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background: #343434;
  margin-bottom: 16px;  
`;

export const InputFilePost = styled.input``;

export const InputLabelPost = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 88px;
  width: 88px;
  border-radius: 36px;
  cursor: pointer;
`;

export const ButtonRemoveImgPost = styled.button`
  position: absolute;
  top: 25px;
  right: -40px;
  bottom: 0px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const GridInput = styled.div`
  width: 468px;

  @media (max-width: 767px) {
    width: 300px;
    padding-left: 20px; 
    padding-right: 20px;
  } 

  @media (max-width: 280px) {
    width: 100%;
  } 

  @media (min-width: 530px) and (max-width: 540px){
    width: 400px;
  }
`;
