import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    grid-area: footer;
    background-color: #2b2b2b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 342px) {
        text-align: center;
    }
`;

export const P = styled.p`
    color: #9f9f9f;
    font-size: 1em;
`;
