import styled, { css } from 'styled-components';


export const Container = styled.div`
    border: 1px solid var(--grey-200);
    background: var(--black-200);
    padding: 24px;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 56px;
`;

export const Form = styled.form`
    width: 100%;

    textarea{
        /* resize: none; */width: 516px;
        max-width: 100%;
    }
    
    input, textarea{
        &+input, &+textarea{
            margin-top: 1rem;
        }
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    margin-top: 2rem;

    .btn-descartar{
        background: transparent;
        color: #5f5f5f;        
        padding: 0;
        text-decoration: underline #5f5f5f;
    }
`;

export const EnviarImagem = styled.div`
    display:  flex;
    justify-content: center;
    margin-bottom: 1rem;
    position: relative;

    label{
        border: solid 1px #4b4b4b;
        width: 88px;
        height: 88px;
        border-radius: 36px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        img.imagem-post{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 36px;
        }
    }
`;
interface ButtonPublicarProps {
    isValid: boolean;
}

export const ButtonPublicar = styled.button<ButtonPublicarProps>`
    ${props =>
    props.isValid &&
    css`
        color: #fff !important;
        background: var(--green) !important;
    `};
`;

export const ButtonRemoverImagem = styled.button`
    padding: 0 !important;
    background: transparent; 
    position: absolute;
    top: 35px;
    right: 33%;
    @media (max-width: 550px) {
        right: 20%;
    }
`;