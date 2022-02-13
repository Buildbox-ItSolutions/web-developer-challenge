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
    }
`;