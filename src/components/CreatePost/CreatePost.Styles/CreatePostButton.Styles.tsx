import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 24px;
    justify-content: flex-end;
    margin-top: 32px;

    :first-child {
        cursor: pointer;
        color: var(--secondaryGray);
        text-decoration: underline;
    }

    :last-child {
        cursor: pointer;        
        padding: 12px 24px;
        background-color: var(--buttonReady) ; 
        color: var(--white);
        border-radius: 8px;
        

        &:disabled {
            background-color: var(--secondaryGray);
            color: var(--black);
        }
    }
`