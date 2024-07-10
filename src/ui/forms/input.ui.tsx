import styled from "styled-components";

interface InputUiProps {
  error?: boolean;
}

const InputUi = styled.input<InputUiProps>`
    border: none;
    outline: none;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    width: 100%;
    margin-top: 1rem;
    background: ${ ({ theme }) => theme.colors.greyishBrownThree };
    border-radius: 8px;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.875rem;
    color: ${ ({ theme }) => theme.colors.warmGreyThree };

    &::placeholder {
        color: ${ ({ theme }) => theme.colors.warmGreyThree };
    }

    ${ ({ error }) => error && `
        border: 1px solid red;
    ` }
`;

export default InputUi;