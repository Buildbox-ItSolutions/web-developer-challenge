import styled from "styled-components";

const BoxForm = styled.div`
    width: 100%;
    max-width: 516px;
    padding: 24px;
    margin-top: 16px;
    padding: 12px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;

const DeleteDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 24px;
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
`;

const Content = styled.div`
    width: 100%;
`;

const MessageBox = styled.div`
    width: 100%;
    margin-bottom: 24px;
`;

const MessageText = styled.p`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
`;

const AuthorBox = styled.div`
    width: 100%;
`;

const MadeBy = styled.span`
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
`;

const AuthorText = styled.p`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`;

const CircularImage = styled.div`
    width: 88px;
    height: 88px;
    margin-right: 32px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {BoxForm, CircularImage, DeleteDiv, DeleteButton, Content, ContentContainer, MessageBox, MessageText, MadeBy, AuthorBox, AuthorText};