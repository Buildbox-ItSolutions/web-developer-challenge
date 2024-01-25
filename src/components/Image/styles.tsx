import styled from "styled-components";

export const ImageContainer = styled.div`
    width: 88px;
    height: 88px;
    margin: 0 auto;
    object-fit: contain;
    border-radius: 32px;
    border: solid 1px var(--greyish-brown-three);
    background-color: transparent;
    text-align: center;
    overflow: hidden;
`;

export const ImageIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-top: 28px;
    transition: transform .7s;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
        transform: scale(1.25);
    }
`;

export const SendFile = styled.input`
    display: none;
`;

export const ShowImage = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;