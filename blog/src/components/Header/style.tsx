import styled from "styled-components";

export const LogoContainer = styled.div`
    width: 100%; 
    height: 93px;
    background: var(--black-primery);
    display: flex;
    justify-content: center; 
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 40px;
    }
`; 

export const Logo = styled.div`
    padding: 10px;

    @media screen and (max-width: 700px) {
        padding-bottom: 5px;
    }
`;