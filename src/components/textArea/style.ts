import styled from "styled-components";

const StyledTextArea = styled.textarea`
    background-color:#494949;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    width: 90%;
    color:#D9D9D9;
    ::placeholder {
        color: #ffffff; 
        opacity: 1; 
    }
`;

export interface TextProps{
    placeholder?:string;
    onChange: any;
    value: string;
    name?: string;
    id?: string
};

export {
    StyledTextArea
}