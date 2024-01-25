import styled from "styled-components";

export const FeedItemContainer = styled.div`
    position: relative;
    width: calc(100% - 24px);
    padding: 0 24px;
    border-radius: 3px;
    border: solid 1px var(--greyish-brown-two);
    background-color: #313131;
    margin-left: -12px;
    margin-bottom: 16px;
    @media (max-width: 800px) {
        width: 97%;
        padding: 0 12px;
        margin: 0 auto;
    }
`;

export const Message = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: var(--warm-grey-three);
`;

export const SendBy = styled.p`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: var(--brownish-grey);
    margin-top: 24px;
    margin-bottom: 0px;
`;

export const Name = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: var(--warm-grey-two);
    margin-top: 2px;
    margin-bottom: 32px !important;
    @media (max-width: 800px) {
        margin-bottom: 12px !important;
    }
`;

export const FeedItemHeader = styled.div`
    width: 100%;
    padding: 12px;
    text-align: right;
    @media (max-width: 800px) {
        padding: 12px 12px 0 12px;
    }
`;

export const FeedItemMessageContainer = styled.div`
    margin-left: 32px;
`;

export const FeedItemImageContainer = styled.div`
    padding-top: 12px;
    padding-bottom: 36px;
`;

export const FeedItemBody = styled.div`
    width: 100%;
    display: flex;
`;

export const DeleteIcon = styled.img`
    height: 20px;
    width: 20px;
    margin: 0;
    cursor: pointer;
    transition: transform .7s;
    &:hover {
        cursor: pointer;
        transform: scale(1.25);
    }
    @media (max-width: 800px) {
        margin-right: 12px;
    }
`;