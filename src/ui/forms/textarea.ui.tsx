import styled from "styled-components";

interface TextareaUiProps {
    error?: boolean;

}

const TextareaUi = styled.textarea<TextareaUiProps>`
    border: none;
    outline: none;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    width: 100%;
    margin-top: 0.5rem;
    background: ${ ({ theme }) => theme.colors.greyishBrownThree };
    border-radius: 8px;
    height: 5rem;
    padding: 1rem;
    font-size: 0.875rem;
    color: ${ ({ theme }) => theme.colors.warmGreyThree };

    &::placeholder {
        color: ${ ({ theme }) => theme.colors.warmGreyThree };
    }
    
    resize: none;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${ ({ theme }) => theme.colors.greyishBrownThree };
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ ({ theme }) => theme.colors.warmGreyThree };
        border-radius: 10px;
        cursor: default;
    }
    
    ${ ({ error }) => error && `
        border: 1px solid red;
    ` }
    
`;

export default TextareaUi;