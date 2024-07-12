import styled from "styled-components";

export const BaseButton = styled.button.attrs<{disabled?: boolean}>(props => ({
    disabled: props.disabled
}))`
    text-decoration: none;
    background-color: ${props => props.disabled ? props.theme.font.secondary : props => props.theme.font.main};
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    &:active {
        transform: translateY(4px);
    }
`
export const BaseButtonCancel = styled(BaseButton)`
    background-color: transparent;
    color: ${props => props.theme.font.secondary};
    text-decoration: underline;
`
