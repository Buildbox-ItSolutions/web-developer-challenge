import styled from "styled-components";

export const PostCardStyled = styled.article`
    padding: 12px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #3b3b3b;

    .textContentContainer{
        display: flex;
        gap:16px;
    }

    .messageAndDeleteArea{
        display: flex;
        font-size: 16px;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        color: #9f9f9f;
        align-items: flex-start;
    }

    .deleteIcon:hover{
        cursor: pointer;
    }

    .uploadedBy{
        font-size: 12px;
        font-weight: 500;
        color: #5f5f5f;
    }

    .senderName{
        font-size: 14px;
        font-weight: normal;
        text-align: left;
        color:#7a7a7a;
    }
    .deleteArea{
        display: flex;
        justify-content: flex-end;
        padding: 16px 0px;
    }

    .textContainer{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    @media (max-width: 900px) {
        .textContentContainer{
            flex-direction: column;
        }
    }
`