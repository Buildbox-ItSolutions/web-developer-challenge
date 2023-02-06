import styled from "styled-components";

const BoxForm = styled.div`
    width: 100%;
    max-width: 516px;
    height: 353px;
    padding: 24px;
    margin-top: 40px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;

const CircularImage = styled.label`
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CircularInput = styled.input`
    overflow: hidden;
    width: 0;
`;

const Autor = styled.input`
    width: 100%;   
    height: 40px;
    margin: 16px 0 8px;
    border: none;
    border-radius: 8px;
    background-color: #494949;
    color: #fff;
    padding-left: 16px;
    outline: none;
    font-family: sans-serif;
`;

const Mensagem = styled.textarea`
    font-family: sans-serif;
    width: 100%;
    height: 80px;
    margin: 8px 0 32px;
    border: none;
    border-radius: 8px;
    padding-top: 6px;
    padding-left: 16px;
    background-color: #494949;
    color: #fff;
    outline: none;
    resize: none;
`;

const RightContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

const Descartar = styled.button`
    font-size: 14px;
    font-weight: normal;
    color: #5f5f5f;
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
`;

const Publicar = styled.button`
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    margin-left: 15px;
    background-color: #71bb00;
    color: #fff;
    cursor: pointer;
`;

export {BoxForm, CircularImage, CircularInput, Autor, Mensagem, RightContent ,Descartar, Publicar};