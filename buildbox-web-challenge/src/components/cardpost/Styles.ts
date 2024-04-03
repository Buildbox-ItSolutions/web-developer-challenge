import styled from "styled-components";

export const Container = styled.div`
    width: 516px;
    height: 353px;
    margin: 40px auto 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;

    @media (max-width: 400px) {
        width: 330px;
        height: 300px;
        padding: 24px;
        margin: 25px auto 56px;
    }
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

    @media (max-width: 400px) {
        width: 44px;
        height: 44px;
        margin: 0 auto;
        padding: 32px;
        object-fit: contain;
        border-radius: 36px;
        border: solid 1px #4b4b4b;
        background-color: rgba(75, 75, 75, 0);
    }
`;

export const Foto = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;

    @media (max-width: 400px) {
        width: 20px;
        height: 20px;
        margin-bottom: 50px;
    }
`;

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nome = styled.input`
    width: 468px;
    height: 40px;
    margin: 16px 0 8px;
    padding: 12px 1rem 12px 1rem;
    border-radius: 8px;
    background-color: #494949;
    color: #9f9f9f;
    border: none;
    font-size: 14px;
    font-weight: normal;
    outline: none;

    @media (max-width: 400px) {
        width: 300px;
        height: 35px;
        margin: 16px auto 8px;
        padding: 12px 1rem 12px 1rem;
    }
`;

export const Mensagem = styled.textarea`
    width: 468px;
    height: 80px;
    margin: 8px 0 32px;
    text-align: left;
    padding: 12px 1rem 2.7rem 1rem;
    border-radius: 8px;
    background-color: #494949;
    color: #9f9f9f;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: normal;

    @media (max-width: 400px) {
        width: 300px;
        height: 35px;
        scroll: hidden;
    }
`;