import styled from "styled-components";

export const PublishBoxContainer = styled.div`
    width: 33.33%;
    min-height: 353px;
    margin: 40px auto;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px var(--greyish-brown-two);
    background-color: #313131;
    text-align:center;
    @media (max-width: 1200px) {
        width: 66.66%;
        margin: 20px auto;
    }
    @media (max-width: 800px) {
        padding: 24px 3px;
        width: 95%;
        margin: 10px auto;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    text-align: right;
    padding: 32px 0 24px 0;
`;

export const TrashIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: calc(88px + 24px + 16px);
    position: absolute;
`;

export const ImageContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`