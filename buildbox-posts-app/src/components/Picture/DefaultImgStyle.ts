import { RxImage } from "react-icons/rx";
import styled from 'styled-components'

export const ImgContainer = styled.section`
    display: flex;
    justify-content: center;
    height: 10rem;
    width: 100%;
`

export const BtnAvatar = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid var(--border-primary);
    border-radius: 40%;
    overflow: hidden;
    height: 10rem;
    width: 10rem;

    &:hover {
        background-color: var(--bg-input);
        border: 2px solid var(--highlight-primary);
    }

    &:active {
        border: 2px solid var(--border-secondary);
        transform: scale(0.95);
    }
`
export const ImgAvatar = styled(RxImage)`
    color: var(--border-secondary);
    height: 30%;
    width: 30%;
`