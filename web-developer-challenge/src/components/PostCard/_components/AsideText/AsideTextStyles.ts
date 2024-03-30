import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    flex-direction: column;
    gap: 30px;
`

export const PostedByContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
`

export const PostedBy = styled.span`
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
`

export const PostCreator = styled.span`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`