import styled from "styled-components";

const InputContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center; 

    textarea {
        width: 100%;
        min-height: 80px;
        margin: 8px 0 32px;
        padding: 20px 16px;
        border-radius: 8px;
        border: none;
        background-color: #494949;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: white;
        resize: none;
    }
`;

export default function InputDescription() {
    return (
        <InputContent>
            <textarea />
        </InputContent>
    );
}
