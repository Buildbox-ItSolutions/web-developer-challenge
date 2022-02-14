import styled from "styled-components";
import { typography } from "../../styles/typography";

export const HomeStyled = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0 2rem;

    .section-title {
        ${typography.TextNormal};
        color: ${props => props.theme.colors.neutralAlt};
        width: 90%;
        margin-left: 2rem;
    }
    
    .grid-cards {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 1px;
        justify-content: center;
        justify-items: center;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg} ) {
        .grid-cards {
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        }
    }
`;