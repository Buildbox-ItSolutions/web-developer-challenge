import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${props => props.theme.colors.primary};
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    color: ${props => props.theme.colors.neutral};
    text-align: center;

    &:hover {	
        background-color: ${props => props.theme.colors.secondaryAlt};
        transition: .3s;
        border: ${props => props.theme.colors.primary} solid 1px;
    }
`;