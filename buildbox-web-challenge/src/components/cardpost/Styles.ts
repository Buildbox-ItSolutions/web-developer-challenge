import styled from "styled-components";

export const Container = styled.div`
    width: 516px;
    height: 353px;
    margin: 40px 425px 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;

export const ContainerFoto = styled.div`
    width: 88px;
    height: 88px;
    margin: 0 8px 16px 190px;
    padding: 32px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
`;

export const Foto = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nome = styled.div`
    width: 468px;
    height: 40px;
    margin: 16px 0 8px;
    padding: 12px 351px 11px 16px;
    border-radius: 8px;
    background-color: #494949;
`;

export const TextoNome = styled.span`
    display: flex;
    width: 130px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
`;

export const Mensagem = styled.input`
    width: 468px;
    height: 80px;
    margin: 8px 0 32px;
    padding: 12px 382px 51px 16px;
    border-radius: 8px;
    background-color: #494949;
`;

export const TextoMensagem = styled.span`
    width: 70px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
`;