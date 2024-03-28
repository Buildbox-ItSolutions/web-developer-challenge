import styled from "styled-components";


export const LabelFileS = styled.div`
    
    width: 88px;
    height: 88px;
    border: #4b4b4b 1px solid;
    border-radius: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
    overflow: hidden;
`
export const FileInputS = styled.input`
    display: none;
`

export const SelectImageS = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export const ContainerInputS = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;

    input, textarea {
        width: 100%;
        background-color: #494949;
        color: white;
        border: none;
        outline: none;
        border-radius: 8px;
        padding: 16px 12px;
    }
`

export const InputS = styled.input`
    height: 40px;
`

export const TextareaS = styled.textarea`
    resize: none;
    min-height: 80px;
`

export const ContainerButtonS = styled.div`

    margin-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: end;

    button{
        outline: none;
        border: none;
    }

    @media screen and (max-width:300px){
        flex-direction: column;
        align-items: center;
    }
`

export const CreateButtonS = styled.button<{canpost:boolean}>`

    width: 98px;
    height: 41px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: ${props => props.canpost ? "#71bb00" : "#5f5f5f"};
    color: ${props => props.canpost ? "white" : "#313131"};
    cursor: ${props => props.canpost ? "pointer" : "not-allowed"};
`

export const ResetButtonS = styled.button`

    background-color: #313131;
    cursor: pointer;
    color: #5f5f5f;
    text-decoration: underline;
`

export const TrashImgS = styled.img`

   position: relative;
   left: 16px;
    
`