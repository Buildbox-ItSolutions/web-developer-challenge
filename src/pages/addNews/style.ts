import styled from "styled-components";

export const AddNewsWrap = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0 55px;
`;

export const FormWrap =  styled.div`
    background-color: ${props => props.theme.colors.secondary};
    width: 90%;
    border-radius: 3px;
    border: solid 1px #313131;
    padding: 1rem;

    .button-group {
        display: flex;
        justify-content: flex-end;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        width: 50%;
        padding: 1rem 2rem;
    }
`;