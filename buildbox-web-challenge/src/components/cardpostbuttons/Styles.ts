import styled from "styled-components";

export const Botoes = styled.div`
    justify-content: flex-end;
    align-items: flex-end;
    padding-left: 16rem;

    @media (max-width: 400px) {
        padding: 1.5rem 0 0 0;
        margin: 0 auto
    }
    
`;

export const Publicar = styled.button`
    width: 98px;
    height: 41px;
    margin: 0 0 2.5rem;
    border-radius: 8px;
    background-color: #5f5f5f;
    color: #313131;
    text-align: center;
    border: none;
    cursor: pointer;

    @media (max-width: 400px) {

        margin: 0 0 2.5rem 6rem;
        border: none;
        cursor: pointer;
    }
`;

export const Descartar = styled.button`
    width: 80px;
    height: 17px;
    margin: 12px 24px 12px 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    cursor: pointer;
    background-color: transparent;
    border: none;

    @media (max-width: 400px) {
        width: 40px;
        height: 17px;
        margin: 0 0 0 2.5rem;
        border: none;
        cursor: pointer;
        background-color: transparent;
        line-height: 1.29;
        letter-spacing: normal;
    }
`;