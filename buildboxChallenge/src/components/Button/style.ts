import styled from "styled-components";
import { Button } from ".";

interface ButtonProps {
    bgColor?: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
    height: 41px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.neutral};
    background-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.bgColor};
    text-align: center;
    overflow: hidden;
    cursor: pointer;

    &:active {
        transform: scale(.98);
    }
`;
