import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
    display: flex; 
    flex-direction: column; 
    align-items: center;
`

const AppContent = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 4rem;
    width: 500px;

    @media screen and (max-width: 600px) {
        width: 350px;
    } 
`

export {
    AppContainer,
    AppContent
}