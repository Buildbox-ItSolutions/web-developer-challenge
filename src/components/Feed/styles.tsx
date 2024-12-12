import styled from 'styled-components'

export const Container = styled.div`
    width: 516px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 56px;
    margin-bottom: 56px;

    @media(max-width: 767px) {
        width: 90%;
        min-width: 320px;
    }

    span {
        align-self: flex-start;
        font-size: 14px;
        font-weight: 500;
        color: #7a7a7a;
        margin-bottom: 8px;
    }
`