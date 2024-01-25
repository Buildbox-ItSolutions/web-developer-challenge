import styled from "styled-components";

export const InputContainer = styled.input`
    position: relative;
    width: calc(100% - 24px);
    height: 40px;
    margin: 16px auto 0 auto;
    padding: 12px 16px 11px 16px;
    border: 0;
    border-radius: 8px;
    background-color: var(--greyish-brown);
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
    &:placeholder {
        color: var(--warm-grey-three);
    }
    @media (max-width: 800px) {
        width: 90%;
    }
`;