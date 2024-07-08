import { RxImage } from "react-icons/rx";
import styled from 'styled-components'

export const NoImgContainer = styled.section`
    display: flex;
    height: 10rem;
    justify-content: center;
    width: 100%;
`

export const NoBtnAvatar = styled.section`
    align-items: center;
    border: 1px solid var(--border-primary);
    border-radius: 40%;
    cursor: pointer;
    display: flex;
    height: 10rem;
    justify-content: center;
    overflow: hidden;
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
export const NoImgAvatar = styled(RxImage)`
    color: var(--border-secondary);
    height: 3rem;
    width: 3rem;
`