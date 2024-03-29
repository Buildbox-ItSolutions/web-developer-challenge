import styled from "styled-components";

const CardUi = styled.div`
    max-width: 32.25rem;
    padding: 1.5rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    border: solid 1px ${ ({ theme }) => theme.colors.blackInside };
    background: ${ ({ theme }) => theme.colors.blackTwo };
    
    @media (min-width: 768px) {
        width: 32.25rem;
    }
`;

export default CardUi;