import styled from "styled-components";

export const ButtonPrimary = styled.button`
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    object-fit: contain;
    border-radius: 8px;
    border: 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background-color: #71bb00;
    &:disabled {
        background-color: #5f5f5f;
        color: #313131;
        cursor: default;
    }
`;

export const ButtonUnderlined = styled.button`
    width: 60px;
    height: 17px;
    margin: 12px 0 12px 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    text-decoration: underline;
`;