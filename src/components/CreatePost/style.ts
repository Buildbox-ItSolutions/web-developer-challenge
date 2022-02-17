import styled from "styled-components";

export const CreatePostArea = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 468px;
    width: 100%;
    min-height: 353px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    overflow: hidden;

    @media(max-width: 566px) {
        padding: 24px 0;
    }

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 566px) {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;

export const ImageUploadArea = styled.div`
    display:flex;
    position: relative;
    max-width: 88px;
    min-height: 88px;
    height: 100%;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
    overflow: hidden;
`;

export const ImageUpload = styled.input`
    width: 88px;
    height: 88px;
    border-radius: 36px;
    position: absolute;
    top: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
`;

export const ImageUploadIcon = styled.img`
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const InputName = styled.input`
    max-width: 468px;
    width: 100%;
    height: 40px;
    margin: 16px 0px 8px;
    padding: 0 16px 0px 16px;
    border-radius: 8px;
    background-color: #494949;
    outline: none;
    border: none;
    box-sizing: border-box;
    
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;

    &::placeholder {
        font-weight: 700;
    }

    @media(max-width: 566px) {
        width: 95%;
    }
`;

export const InputMessage = styled.textarea`
    max-width: 468px;
    width: 100%;
    max-height: 131px;
    height: 100%;
    resize: none;
    margin: 0 0 32px;
    padding: 12px 16px 12px 16px;
    border-radius: 8px;
    background-color: #494949;
    outline: none;
    border: none; 
    box-sizing: border-box;

    font-family: "Roboto";
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    text-align: left;
    color: #9f9f9f;  

    &::placeholder {
        font-weight: 700;
    }

    @media(max-width: 566px) {
        width: 95%;
    }
`;

export const Warning = styled.span`
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
    color: red;
    text-decoration: underline;
    padding-right: 24px;

    @media (max-width: 566px) {
        order: 3;
        padding-right: 0;
    }
`;

export const Uploading = styled.span`
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
    color: green;
    text-decoration: underline;
    padding-right: 24px;

    @media (max-width: 566px) {
        width: 320px;
        
        order: 3;
        padding-right: 0;
    }
`

export const Discart = styled.span`
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
    text-decoration: underline;
    cursor: pointer;
`;

export const SubmitButton = styled.input`
    max-width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    border-radius: 8px;
    color: #313131;
    background-color: ${(props) => props.color ? "#71bb00" : "#5f5f5f"};
    transition: background-color ease-in-out 0.2s;
    cursor: pointer;
    border: none;
    outline: none;
`;