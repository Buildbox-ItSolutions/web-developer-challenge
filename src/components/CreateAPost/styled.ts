import styled from "styled-components"

export const Container = styled.form`
    background-color: var(--post-background-color);
    width: calc(100% - 48px);
    height: 353px;

    margin: 40px 0 56px;
    padding: 24px;

    border-radius: 3px;
    border: solid 1px var(--post-border-color);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Trashbin {
        position: absolute;
        top: 230px;
        right: calc(50% - 91px);
        z-index: 0;
        object-fit: contain;
        transition: transform 0.2s ease-in;
        cursor: pointer;
        &:hover {
            transform: var(--scale);
        }
    }
`

export const ImageInput = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        display: none;
    }

    img {
        width: 24px;
        height: 24px;
        padding: 32px;
        object-fit: contain;
        border-radius: 36px;
        border: solid 1px #4b4b4b;
        background-color: rgba(75, 75, 75, 0);
        margin-bottom: 16px;
        cursor: pointer;
    }

    .updatedImage {
        object-fit: cover;
        width: 89px;
        height: 89px;
        padding: 0px;
    }
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100% - 80px - 24px);
    
    input, textarea {
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: var(--input-color);

        color: white;
        font-family: Roboto;
        font-size: 14px;
        line-height: 1.29;

        padding: 12px 0 11px 16px;
        &::placeholder {
            color: var(--text-color);
        }
    }

    input {
        margin-bottom: 8px;
    }

    textarea {
        resize: none;
        margin-bottom: 32px;
        height: 100%;
    }

    div {
        @media screen and (min-width: 375px) {
            align-self: flex-end;
  	    }
    }
`

export const Button = styled.button<{publish?: boolean}>`
    width: ${(props) => props.publish ? "98px" : "inherit"};
    height: ${(props) => props.publish ? "41px" : "inherit"};
    margin: ${(props) => props.publish ? "0 0 0 24px" : "inherit"};
    padding: ${(props) => props.publish ? "12px 24px" : "0px"};
    border-radius: 8px;
    border: none;
    text-decoration: ${(props) => props.publish ? "none" : "underline"};
    color: ${(props) => props.publish ? "var(--post-background-color)" : "var(--button-color)"};
    background-color: ${(props) => props.publish ? "var(--button-color)" : "transparent"};
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        color: ${(props) => props.publish && "white"};
        background-color: ${(props) => props.publish && "var(--button-color-2)"};
    }
`

export const ErrorMessage = styled.span`
    width: 100%;
    font-size: 18px;
    text-align: center;
    color: var(--error-color);
    margin-bottom: 56px;
    animation: var(--animation--appear);
`