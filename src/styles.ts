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

    padding: 8rem 0;

    @media screen and (max-width: 600px) {
        width: 350px;
    } 
`

const AppHeader = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #2b2b2b;
    padding: 1.5rem 0;
`

export {
    AppContainer,
    AppContent,
    AppHeader
}