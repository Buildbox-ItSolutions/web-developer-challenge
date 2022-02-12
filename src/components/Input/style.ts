import styled from "styled-components";
import { typography } from "../../styles/typography";

export const InputStyled = styled.div`
    color: #fff;
    margin: .2rem;

    input {
        height: 40px;
        width: 100%;
        margin: 8px 0 0;
        padding: 12px 0px 11px 16px;
        border-radius: 8px;
        outline: none;
        color: ${props => props.theme.colors.neutral};
        background-color: ${props => props.theme.colors.secondaryAlt};
        ${typography.TextNormal};
    }

    .error-message {
        font-family: 'Roboto';
    }
`;

