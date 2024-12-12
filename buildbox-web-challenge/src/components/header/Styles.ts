import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 93px;
    padding: 24px auto 632px;
    background-color: #2b2b2b;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 516px) {
        width: 100%;
        height: 90px;
        padding: 24px auto 632px;
    }
`;

export const Logo = styled.img`
    width: 103px;
    height: 45px;
    margin: 0 auto;
    object-fit: contain;

    @media (max-width: 516) {
        width: 103px;
        height: 45px;
    }
`;