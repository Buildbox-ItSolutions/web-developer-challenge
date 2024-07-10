import styled from 'styled-components'

export const ImgContainer = styled.section`
    display: flex;
    height: 10rem;
    justify-content: center;
    width: 100%;
`

export const BtnAvatar = styled.section`
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
            outline: 2px solid var(--highlight-primary);
        }

        &:active {
            transform: scale(0.95);
        }
`
export const ImgAvatar = styled.img`
    color: var(--border-secondary);
    height: 100%;
`