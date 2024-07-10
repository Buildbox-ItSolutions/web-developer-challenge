import styled, { css } from "styled-components";

const helperTextVariants = {
    error: css`
        color: red;
    `,
};

interface HelperTextUiProps {
    variant?: keyof typeof helperTextVariants;

}

const HelperTextUi = styled.p<HelperTextUiProps>`
    font-size: 0.75rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
    margin-bottom: 0;
    width: 100%;
    ${({ variant = "error" }) => helperTextVariants[variant]}
`;

export default HelperTextUi;