import styled, { css } from "styled-components"

interface ButtonProps {
    set?: string;
}

export const Box = styled.div `
    width: 100%;
    height: 93px;

    padding: 24px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-0);
    border-bottom: 1px solid var(--black)
`

export const Container = styled.div `
    width: 100%;
    height: 100%;

    padding: 41px 24px;

    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Form = styled.div `
    width: 516px;
    height: 353px;

    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    background-color: var(--grey-2);
    border: 1px solid var(--grey-6)
`

export const ImgPlaceholder = styled.img `
    width: 88px;
    height: 88px;

    border-radius: 36px;

    background-color: var(--grey-2);
    border: solid 1px var(--grey-3);

    cursor: pointer;
`

export const UploadFile = styled.input `
   display: none;

`
export const UploadFileConteiner = styled.div `
    width: 88px;
    height: 88px;

    border-radius: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-2);
    border: solid 1px var(--grey-3);

    cursor: pointer;    
`

export const Input = styled.input `
    width: 468px;
    height: 40px;

    border: none;
    border-radius: 8px;
    outline:none;

    background-color: var(--grey-4);

    color: white;

    padding: 0 16px;
`

export const TextArea = styled.textarea `
    width: 468px;
    height: 80px;

    border: none;
    border-radius: 8px;

    background-color: var(--grey-4);
    resize: none;

    color: white;

    padding: 8px 16px;
    overflow: auto;
    outline: none;

    font-family: 'Roboto', sans-serif;
`

export const Button = styled.button<ButtonProps>`
    width: 98px;
    height: 41px;

    border-radius: 8px;
    background-color: var(--grey-5);
    border: none;

    color: var(--grey-2);

    cursor: pointer;

    padding: 12px 24px;

    ${props =>
        (props.set === "link") &&
        css`
            background-color: transparent;
            color: var(--grey-5);
            text-decoration: underline
        `};
`

export const ContainerButton = styled.div `
    width: 100%;

    background-color: transparent;

    padding: 0 24px;

    display: flex;
    gap: 2rem;
    align-items: end;
    justify-content: end;
`