import styled from "styled-components";

export const PostFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #313131;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #313131;

    input:focus, textarea:focus {
        outline: none;
    }

    .textInput, .textInput:valid{
        font-family: "Roboto", sans-serif;
        color: white;
        background-color: #494949;
        height: 40px;
        margin: 16px 0 8px;
        padding: 12px 16px 11px 16px;
        border: none;
        border-radius: 8px;
    }

    .messageInput, .messageInput:valid{
        min-height: 80px;
        resize: none;
    }
    .uploadImageContainer{
        padding: 31px;
        border: 1px solid #494949;
        height: 90px;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 38px;
        margin: 0 auto;
    }
    .icon{
        min-height: 300px;
    }

    .imageUplodedArea{
        height: 90px;
        width: 90px;
        border-radius: 38px;
    }
    .imageUplodedArea img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center; 
        border-radius: 38px;
    }

    .deleteIcon{
        height: 24px;
        cursor: pointer;
    }

    .buttonsArea{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 16px;
    }

    .postButton{
        height: 41px;
        padding: 12px 24px;
        border-radius: 8px;
        background-color: #71bb00;
        color: white;
        font-size: 14px;
    }
    .postButton:disabled{
        background-color: #5f5f5f;
        color: #313131;
    }
    .discardButton{
        font-size: 14px;
        text-decoration: underline;
        color: #5f5f5f;
        line-height: 18px;
    }
`

export const ImageContainerStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
`