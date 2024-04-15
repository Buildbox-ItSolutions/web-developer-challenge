import styled from "styled-components";

export const Card = styled.div`
    width: 516px;
    height: auto;
    margin: 40px auto 56px;
    padding: 12px 24px 32px; 
    border-radius: 3px;
    border: solid 1px var(--greyish-brown-two);
    background-color: var(--black-third);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    button {
        position: absolute;
        right: 12px;
        display: flex;
        align-items: end;
        justify-content: flex-end;
        border: none;
        background: transparent;
        cursor: pointer;
    }

`;

export const CardInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-right: auto;
`;

export const CardImage = styled.img`
        width: 88px;
        height: 88px;
        padding: 32px;
        border-radius: 50%;
        border: solid 1px var(--greyish-brown);
        background-color: var(--black-third);
`;

export const CardText = styled.p`
    flex: 1;
    margin: 12px 0;
    font-family: Roboto;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: var(--warm-grey-three);
    overflow-wrap: break-word;
    max-width: 300px;
    color: var(--brownish-grey);
`;

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
`;

export const SenderInfo = styled.div`
    color: var(--warm-grey);
`;

export const SenderLabel = styled.p`
    margin-bottom: 2px;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: 0.29px;
    color: var(--brownish-grey);
`;

export const SenderName = styled.span`
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.29;
    color: var(--warm-grey-two);
`;
