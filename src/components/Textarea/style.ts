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
        background-color: ${props => props.theme.colors.secondaryAlt};
        outline: none;
        resize: vertical;
        ${typography.TextNormal};
    }
`;

