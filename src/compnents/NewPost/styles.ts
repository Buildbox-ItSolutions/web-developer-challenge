import styled from 'styled-components';


export const Container = styled.div`
    border: 1px solid var(--grey-200);
    background: var(--black-200);
    padding: 24px;
    border-radius: 3px;
    width: 516px;
`;

export const Form = styled.form`
    width: 100%;

    textarea{
        /* resize: none; */
        max-width: 100%;
    }
    
    input, textarea{
        &+input, &+textarea{
            margin-top: 1rem;
        }
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    margin-top: 2rem;

    .btn-descartar{
        background: transparent;
        color: #5f5f5f;        
        padding: 0;
        text-decoration: underline #5f5f5f;
    }
`;