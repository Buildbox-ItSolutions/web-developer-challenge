import styled from "styled-components";

export const ButtonStyled = styled.button`
    height: 41px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.neutral};
    background-color: ${props => props.theme.colors.primary};
    text-align: center;
    cursor: pointer;

    &:active {
        transform: scale(.98);
    }
`;