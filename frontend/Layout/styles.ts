import styled from 'styled-components';

export const Grid = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 93px auto 100px;
    grid-template-areas:
        'header '
        'main'
        'footer';
`;
