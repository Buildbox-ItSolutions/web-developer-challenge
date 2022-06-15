import styled from "styled-components"

export const PostSection = styled.section`
width: 100%
`

export const PostContainer = styled.div`

    @keyframes scale-up-center {
        0% {
            transform: scale(0.5);
        }
        100% {
            transform: scale(1);
        }
    }

    width: calc(100% - 36px);
    margin: 8px 0 16px;
    padding: 56px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px var(--post-border-color);
    background-color: var(--post-background-color);

    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;

    animation: ${(props) => props.id ? "var(--animation--appear)" : "scale-up-center 0.4s fowards"};
    transition: all 4s;
    @media screen and (min-width: 768px) {
        flex-direction: row;
  	}
`

export const DeleteButton = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;

    position: absolute;
    top: 12px;
    right: 12px;

    cursor: pointer;
    transition: transform 0.2s ease-in;
    &:hover {
        transform: var(--scale);
    }
`

export const ImageContainer = styled.figure`
    
    img {
        width: 88px;
        height: 88px;
        margin-right: 32px;
        margin-bottom: 16px;
        object-fit: cover;
        border-radius: 36px;
    }
    
    .noImage {
        width: 21px;
        height: 21px;
        padding: 32px;
        object-fit: contain;
        border-radius: 36px;
        border: solid 1px #4b4b4b;
        background-color: rgba(75, 75, 75, 0);
        margin-bottom: 16px;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
    
    figcaption {
        display: none;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    word-wrap: break-word;
    overflow: auto;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .text {
        font-size: 16px;
        white-space: pre-line;
        line-height: 1.25;
        color: var(--text-color);
        min-height: 80px;
        margin-bottom: 24px;
    }
    
    div {
        height: calc(14px + 2px + 17px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .sent {
        font-size: 12px;
        color: var(--button-color);
    }

    .name {
        font-size: 14px;
        line-height: 1.29;
        text-align: left;
        color: var(--name-color);
    }
`