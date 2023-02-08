import styled, { keyframes } from "styled-components"

const SlideUp = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0%);
    }
`;

export const Container = styled.div `
    width: 516px;

    position: relative;
    animation: ${SlideUp} 0.5s ease-in-out;

    padding: 12px 12px 32px 24px;

    border-radius: 3px;
    border: solid 1px var(--grey-6);

    background-color: var(--grey-2);

    transition: 5s;
`

export const ButtonDeleteBox = styled.div `
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    background-color: var(--grey-2);
`

export const ImagePost = styled.img `
    width: 88px;
    height: 88px;

    border-radius: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px var(--grey-3);
    background-color: var(--grey-2);
`
export const ImagePostTemplate = styled.div `
    width: 88px;
    height: 88px;

    border-radius: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px var(--grey-3);
    background-color: var(--grey-2);
`  

export const PostContent = styled.div `
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 24px;

    align-items: start;
    justify-content: start;

    color: var(--light-grey);
    background-color: var(--grey-2);
` 
export const PostMessage= styled.div `
    word-break: break-all;
    max-width: 300px;
` 


export const PostTextContent = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: var(--grey-2);
` 

export const PostOwnerTitle = styled.div `
    font-size: 12px;
    letter-spacing: 0.29px;
    color: var( --grey-5);
    background-color: var(--grey-2);
` 

export const PostOwnerName = styled.div `
    font-size: 14px;
    color: var(--light-grey-0);
    background-color: var(--grey-2);
` 


