import styled from "styled-components";

export const Header = styled.header`
    background-color: var(--bg-section-color);
    text-align: center;

    width: 100%;
    position: fixed;
    left: 0;
    padding: 10px 0;


    h1 {
        color: #71BB00;
        font-weight: 800;
    }

    p {
        color: var(--light-grey);
        text-transform: uppercase;
        
    }
`;