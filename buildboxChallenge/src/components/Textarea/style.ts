import styled from "styled-components";
import { typography } from "../../styles/typography";

export const TextAreaStyled = styled.div`
    color: #fff;
    margin: .2rem;

    textarea {
        width: 100%;
        padding: .2rem;
        margin: 8px 0 32px;
        padding: 12px 0px 11px 16px;
        border-radius: 8px;
        color: ${props => props.theme.colors.neutral};
        background-color: ${props => props.theme.colors.input};
        outline: none;
        resize: vertical;
        ${typography.TextNormal};
    }

    .error-message {
        font-family: 'Roboto';
        color: #BE3144;
        font-size: 12px;
        margin: -1.5rem 0 0;
    }
`;