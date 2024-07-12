import styled from "styled-components";

export const BaseInput = styled.input`
    background-color: ${props => props.theme.baseComponents.backgroundColor.main};
    border: none;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px;
    font-family: sans-serif;
    color: ${props => props.theme.baseComponents.placeHolderColors.main};
    &::placeholder {
        color: ${props => props.theme.baseComponents.placeHolderColors.main};
    }
`
