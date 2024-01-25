import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
    width: calc(100% - 24px);
    height: 80px;
    margin: 8px auto 0 auto;
    border: 0;
    padding: 12px 16px 0 16px;
    border-radius: 8px;
    background-color: #494949;
    resize: none;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: var(--warm-grey-three);
    @media (max-width: 800px) {
        width: 90%;
    }
`;