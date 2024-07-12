import styled from "styled-components";

export const BaseTextArea = styled.textarea.attrs<{ canresize?: boolean }>(props => ({
    canresize: props.canresize || false
}))`
    background-color: ${props => props.theme.baseComponents.backgroundColor.main};
    resize: ${props => props.canresize ? "both" : "none"};
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
