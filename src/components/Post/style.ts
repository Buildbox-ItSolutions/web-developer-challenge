import styled from "styled-components";

export const PostArea = styled.div`
    position: relative;
    max-width: 468px;
    width: 100%;
    height: 225px;
    margin: 8px 0 16px 0;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;

    @media(max-width: 566px) {
        padding: 24px 0;
        min-height: 225px;
        height: 100%;
    }
`;

export const PostContent = styled.div`
    display: flex;
    align-items: center;
    max-width: 468px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-wrap: break-word;


    @media(max-width: 566px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 0 24px;
    }
`;

export const PostUserImage = styled.img`
    width: 88px;
    height: 88px;
    margin: 24px 32px 16px 0;
    object-fit: contain;
    border-radius: 36px;

    @media (max-width: 566px) {
        margin-left: 32px;
    }
`;

export const PostMessage = styled.p`
    width: 300px;
    height: 100%;
    margin: 24px 12px 24px 12px;
    font-size: 16px;
    line-height: 1.25;
    color: #9f9f9f;
    white-space: normal;
`;

export const PostMeta = styled.p`
    margin: 16px 0 2px 12px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;

    @media(max-width: 566px) {
        text-align: center;
        margin-left: 0;
    }

    span {
        width: 103px;
        height: 17px;
        margin-top: 10px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #7a7a7a;
    }
`;

export const DeletePost = styled.img`
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 50%;
    cursor: pointer;
`;