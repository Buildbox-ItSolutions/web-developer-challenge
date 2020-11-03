import styled from 'styled-components';

export const Main = styled.main`
    padding-top: 20px;
    width: 100%;
    height: auto;
    grid-area: main;
    background-color: #343434;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 900px) {
        display: grid;

        grid-template-rows: auto auto auto;

        grid-template-columns: 1.5fr 2fr 1.5fr;
    }
`;

export const Feed = styled.p`
    width: 100%;
    height: 100px;
    color: #7a7a7a;
    font-size: 14px;
    grid-column-start: 2;
    grid-column-end: 2;
    display: grid;
    align-items: flex-end;
    margin-bottom: 10px;

    @media (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
